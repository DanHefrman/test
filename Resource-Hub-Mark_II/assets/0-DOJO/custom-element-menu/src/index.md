## Dojo Widget Menu

### Demo

### Code

    class Example extends WidgetBase {

      private _onSelected(data: any) {
        console.log(data);
      }

      protected render() {
        return w(Menu, { onSelected: this._onSelected }, [
          w(MenuItem, { key: 'a', title: 'Menu Item A' }),
          w(MenuItem, { key: 'b', title: 'Menu Item B', selected: true }),
          w(MenuItem, { key: 'c', title: 'Menu Item C' })
        ]);
      }
    }



## Custom Element Menu

### Demo

### Code

    <demo-menu id="menu">
      <demo-menu-item id="a" title="Menu Item A"></demo-menu-item>
      <demo-menu-item id="b" title="Menu Item B"></demo-menu-item>
      <demo-menu-item id="c" title="Menu Item C"></demo-menu-item>
    </demo-menu>
    <script>
      c.selected = true;
      a.data = { foo: 'bar' };
      menu.addEventListener('selected', function(event) {
        const detail = event.detail;
        console.log(detail);
      });
    </script>


