Ubuntu-basrc-profile-and-aliases
================================

This includes a copy of default bashrc for those of you who may have lost their way.

———————————————-default bashrc below this line———————————————- \# ~/.bashrc: executed by bash(1) for non-login shells. \# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc) \# for examples

If not running interactively, don’t do anything
===============================================

\[ -z “$PS1” \] && return

don’t put duplicate lines in the history. See bash(1) for more options
======================================================================

… or force ignoredups and ignorespace
=====================================

HISTCONTROL=ignoredups:ignorespace

append to the history file, don’t overwrite it
==============================================

shopt -s histappend

for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
===================================================================

HISTSIZE=1000 HISTFILESIZE=2000

check the window size after each command and, if necessary,
===========================================================

update the values of LINES and COLUMNS.
=======================================

shopt -s checkwinsize

make less more friendly for non-text input files, see lesspipe(1)
=================================================================

\[ -x /usr/bin/lesspipe \] && eval “$(SHELL=/bin/sh lesspipe)”

set variable identifying the chroot you work in (used in the prompt below)
==========================================================================

if \[ -z “$debian\_chroot” \] && \[ -r /etc/debian\_chroot \]; then debian\_chroot=$(cat /etc/debian\_chroot) fi

set a fancy prompt (non-color, unless we know we “want” color)
==============================================================

case “$TERM” in xterm-color) color\_prompt=yes;; esac

uncomment for a colored prompt, if the terminal has the capability; turned
==========================================================================

off by default to not distract the user: the focus in a terminal window
=======================================================================

should be on the output of commands, not on the prompt
======================================================

\#force\_color\_prompt=yes

if \[ -n “$force\_color\_prompt” \]; then if \[ -x /usr/bin/tput \] && tput setaf 1 &gt;&/dev/null; then \# We have color support; assume it’s compliant with Ecma-48 \# (ISO/IEC-6429). (Lack of such support is extremely rare, and such \# a case would tend to support setf rather than setaf.) color\_prompt=yes else color\_prompt= fi fi

if \[ “$color\_prompt” = yes \]; then PS1=‘<span class="math inline">${debian\_chroot:+($</span>debian\_chroot)}\[\\033\[01;32m\]:\[\\033\[01;34m\]\[\\033\[00m\]$’ else PS1=‘<span class="math inline">${debian\_chroot:+($</span>debian\_chroot)}$’ fi unset color\_prompt force\_color\_prompt

If this is an xterm set the title to user@host:dir
==================================================

case “<span class="math inline">$TERM" in xterm\*|rxvt\*) PS1="\\\[\\e\]0;$</span>{debian\_chroot:+(<span class="math inline">$debian\_chroot)}\\u@\\h: \\w\\a\\\]$</span>PS1” ;; \*) ;; esac

enable color support of ls and also add handy aliases
=====================================================

if \[ -x /usr/bin/dircolors \]; then test -r ~/.dircolors && eval “<span class="math inline">$(dircolors -b ~/.dircolors)" || eval "$</span>(dircolors -b)” alias ls=‘ls –color=auto’ \#alias dir=‘dir –color=auto’ \#alias vdir=‘vdir –color=auto’

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'

fi

some more ls aliases
====================

alias ll=‘ls -alF’ alias la=‘ls -A’ alias l=‘ls -CF’

Add an “alert” alias for long running commands. Use like so:
============================================================

sleep 10; alert
===============

alias alert=‘notify-send –urgency=low -i “$(\[ $? = 0 \] && echo terminal || echo error)” “<span class="math inline">$(history|tail -n1|sed -e '\\''s/^\\s\*\[0-9\]\\+\\s\*//;s/\[;&|\]\\s\*alert$</span>//‘'’)”’

Alias definitions.
==================

You may want to put all your additions into a separate file like
================================================================

~/.bash\_aliases, instead of adding them here directly.
=======================================================

See /usr/share/doc/bash-doc/examples in the bash-doc package.
=============================================================

if \[ -f ~/.bash\_aliases \]; then . ~/.bash\_aliases fi

enable programmable completion features (you don’t need to enable
=================================================================

this, if it’s already enabled in /etc/bash.bashrc and /etc/profile
==================================================================

sources /etc/bash.bashrc).
==========================

if \[ -f /etc/bash\_completion \] && ! shopt -oq posix; then . /etc/bash\_completion fi
