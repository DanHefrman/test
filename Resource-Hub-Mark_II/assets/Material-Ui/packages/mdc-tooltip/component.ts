

import {MDCComponent} from '@material/base/component';
import {SpecificEventListener} from '@material/base/types';

import {MDCTooltipAdapter} from './adapter';
import {AnchorBoundaryType, events, XPosition, YPosition} from './constants';
import {MDCTooltipFoundation} from './foundation';

export class MDCTooltip extends MDCComponent<MDCTooltipFoundation> {
  static attachTo(root: Element) {
    return new MDCTooltip(root);
  }

  private anchorElem!: HTMLElement;        // assigned in initialize
  private isTooltipRich!: boolean;        // assigned in initialSyncWithDOM
  private isTooltipPersistent!: boolean;  // assigned in initialSyncWithDOM

  private handleMouseEnter!: SpecificEventListener<'mouseenter'>;
  private handleFocus!: SpecificEventListener<'focus'>;
  private handleMouseLeave!: SpecificEventListener<'mouseleave'>;
  private handleBlur!: SpecificEventListener<'blur'>;
  private handleTransitionEnd!: SpecificEventListener<'transitionend'>;
  private handleClick!: SpecificEventListener<'click'>;

  initialize() {
    const tooltipId = this.root.getAttribute('id');
    if (!tooltipId) {
      throw new Error('MDCTooltip: Tooltip component must have an id.');
    }

    const anchorElem = document.querySelector<HTMLElement>(
                           `[aria-describedby="${tooltipId}"]`) ||
        document.querySelector<HTMLElement>(`[data-tooltip-id="${tooltipId}"]`);
    if (!anchorElem) {
      throw new Error(
          'MDCTooltip: Tooltip component requires an anchor element annotated with [aria-describedby] or [data-tooltip-id] anchor element.');
    }
    this.anchorElem = anchorElem;
  }

  initialSyncWithDOM() {
    this.isTooltipRich = this.foundation.getIsRich();
    this.isTooltipPersistent = this.foundation.getIsPersistent();

    this.handleMouseEnter = () => {
      this.foundation.handleAnchorMouseEnter();
    };

    this.handleFocus = () => {
      this.foundation.handleAnchorFocus();
    };

    this.handleMouseLeave = () => {
      this.foundation.handleAnchorMouseLeave();
    };

    this.handleBlur = (evt) => {
      this.foundation.handleAnchorBlur(evt);
    };

    this.handleTransitionEnd = () => {
      this.foundation.handleTransitionEnd();
    };

    this.handleClick = () => {
      this.foundation.handleAnchorClick();
    };

    this.anchorElem.addEventListener('blur', this.handleBlur);
    if (this.isTooltipRich && this.isTooltipPersistent) {
      this.anchorElem.addEventListener('click', this.handleClick);
    } else {
      this.anchorElem.addEventListener('mouseenter', this.handleMouseEnter);
      // TODO(b/157075286): Listening for a 'focus' event is too broad.
      this.anchorElem.addEventListener('focus', this.handleFocus);
      this.anchorElem.addEventListener('mouseleave', this.handleMouseLeave);
    }

    this.listen('transitionend', this.handleTransitionEnd);
  }

  destroy() {
    if (this.anchorElem) {
      this.anchorElem.removeEventListener('blur', this.handleBlur);
      if (this.isTooltipRich && this.isTooltipPersistent) {
        this.anchorElem.removeEventListener('click', this.handleClick);
      } else {
        this.anchorElem.removeEventListener(
            'mouseenter', this.handleMouseEnter);
        this.anchorElem.removeEventListener('focus', this.handleFocus);
        this.anchorElem.removeEventListener(
            'mouseleave', this.handleMouseLeave);
      }
    }

    this.unlisten('transitionend', this.handleTransitionEnd);
    super.destroy();
  }

  setTooltipPosition(position: {xPos?: XPosition, yPos?: YPosition}) {
    this.foundation.setTooltipPosition(position);
  }

  setAnchorBoundaryType(type: AnchorBoundaryType) {
    this.foundation.setAnchorBoundaryType(type);
  }

  getDefaultFoundation() {
    const adapter: MDCTooltipAdapter = {
      getAttribute: (attr) => this.root.getAttribute(attr),
      setAttribute: (attr, value) => {
        this.root.setAttribute(attr, value);
      },
      addClass: (className) => {
        this.root.classList.add(className);
      },
      hasClass: (className) => this.root.classList.contains(className),
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      setStyleProperty: (propertyName, value) => {
        (this.root as HTMLElement).style.setProperty(propertyName, value);
      },
      getViewportWidth: () => window.innerWidth,
      getViewportHeight: () => window.innerHeight,
      getTooltipSize: () => {
        return {
          width: (this.root as HTMLElement).offsetWidth,
          height: (this.root as HTMLElement).offsetHeight
        };
      },
      getAnchorBoundingRect: () => {
        return this.anchorElem ? this.anchorElem.getBoundingClientRect() : null;
      },
      getAnchorAttribute: (attr) => {
        return this.anchorElem ? this.anchorElem.getAttribute(attr) : null;
      },
      setAnchorAttribute: (attr, value) => {
        this.anchorElem?.setAttribute(attr, value);
      },
      isRTL: () => getComputedStyle(this.root).direction === 'rtl',
      anchorContainsElement: (element) => {
        return !!this.anchorElem?.contains(element);
      },
      tooltipContainsElement: (element) => {
        return this.root.contains(element);
      },
      registerEventHandler: (evt, handler) => {
        if (this.root instanceof HTMLElement) {
          this.root.addEventListener(evt, handler);
        }
      },
      deregisterEventHandler: (evt, handler) => {
        if (this.root instanceof HTMLElement) {
          this.root.removeEventListener(evt, handler);
        }
      },
      registerDocumentEventHandler: (evt, handler) => {
        document.body.addEventListener(evt, handler);
      },
      deregisterDocumentEventHandler: (evt, handler) => {
        document.body.removeEventListener(evt, handler);
      },
      registerWindowEventHandler: (evt, handler) => {
        window.addEventListener(evt, handler);
      },
      deregisterWindowEventHandler: (evt, handler) => {
        window.removeEventListener(evt, handler);
      },
      notifyHidden: () => {
        this.emit(events.HIDDEN, {});
      },
    };

    //tslint:enable:object-literal-sort-keys
    return new MDCTooltipFoundation(adapter);
  }
}
