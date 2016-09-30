/* KeyCodeX */
/* v 1.1 : Rock Band Tour Bus */
/* 2016-09-30 */
/* Edition : Customizable */
/* Project Link : https://github.com/siddacool/keycodex */
/* author : Siddhesh Mangela */

/* >>> */
var key ;
(function keyCodeX () {
    /* Key initialize */
    /* +++ */

    var k = {};
    //## Detect keys [call 'key.detect()' in console to activate.]
    k.detect = (function () {
        document.onkeydown = function (e) {
            console.log(e.keyCode);
        }
    });

    /* --- */
    /* Key Types List */
    /* +++ */

    //## Essential keys, frequently used keys(e.g Enter,ctrl,space etc.)
    //## Secondary keys (e.g Enter,ctrl,space etc.)
    //## Function keys (F1 - F12)
    //## chars: Alphabets (A - Z)
    //## gaming: W,A,S,D keys
    //## Digits, Numbers above the Alphabets (0 - 9)
    //## signs and symbols not represented by Number keys (e.g ~, ", + etc.)
    //## arrow: Arrow keys
    //## numpad: Numpad keys
    //## misc: miscellaneous keys (special keys on multimedia and gaming keyboards can be added by user) [ hint: call 'key.detect()' in console to activate]

    /* --- */
    /* Key Configuration */
    /* +++ */
    
    //## set placeholders
    var char = {},
        gaming = {},
        arrow  = {},
        numpad  = {},
        misc  = {};
    
    //### Essential keys
    //+++

    //## Backspace
    k.backspace = 8;
    //## Tab
    k.tab = 9;
    //## Enter
    k.enter = 13;
    //## Shift
    //k.shift = 16;
    //## Ctrl (Control)
    //k.ctrl = 17;
    //## Alt
    //k.alt = 18;
    //## Capslock
    //k.capslock = 20;
    //## Esc (Escape)
    //k.esc = 27;
    //## Spacebar (Space)
    //k.space = 32;
    //## Windows Key Left
    //k.winkey = k.winkeyleft = 91;
    //## Windows Key Right
    //k.winkeyright = 92;
    //## Menu Key
    //k.select = k.menu = 93;
    
    //---
    //### Secondary keys
    //+++
    
    //## Pause/Break
    //k.pausebreak = 19;
    //## Page Up
    //k.pageup = 33;
    //## Page Down
    //k.pagedown = 34;
    //## End
    //k.end = 35;
    //## Home
    k.home = 36;
    //## Insert
    //k.insert = 45;
    //## Delete
    //k.delete = 46;
    //## Scroll Lock
    //k.scrolllock = 145;

    //---
    //### Function keys
    //+++

    //## F1
    //k.f1 = 112;
    //## F2
    //k.f2 = 113;
    //## F3
    //k.f3 = 114;
    //## F4
    //k.f4 = 115;
    //## F5
    //k.f5 = 116;
    //## F6
    //k.f6 = 117;
    //## F7
    //k.f7 = 118;
    //## F8
    //k.f8 = 119;
    //## F9
    //k.f9 = 120;
    //## F10
    //k.f10 = 121;
    //## F11
    //k.f11 = 122;
    //## F12
    //k.f12 = 123;

    //---
    //### Alphabets & Gaming
    //+++

    //## A or gaming left arrow
    char.a = gaming.left = 65;
    //## B
    //char.b = 66;
    //## C
    //char.c = 67;
    //## D or gaming right arrow
    char.d = gaming.right = 68;
    //## E
    //char.e = 69;
    //## F
    //char.f = 70;
    //## G
    //char.g = 71;
    //## H
    //char.h = 72;
    //## I
    char.i = 73;
    //## J
    //char.j = 74;
    //## K
    //char.k = 75;
    //## L
    //char.l = 76;
    //## M
    //char.m = 77;
    //## N
    //char.n = 78;
    //## O
    //char.o = 79;
    //## P
    //char.p = 80;
    //## Q
    //char.q = 81;
    //## R
    //char.r = 82;
    //## S or gaming down arrow
    char.s = gaming.down = 83;
    //## T
    char.t = 84;
    //## U
    //char.u = 85;
    //## V
    //char.v = 86;
    //## W or gaming up arrow
    char.w = gaming.up = 87;
    //## X
    //char.x = 88;
    //## Y
    //char.y = 89;
    //## Z
    //char.z = 90;

    //---
    //### Digits
    //+++

    //## 0 (Zero)
    //k.zero = 48;
    //## 1 (One)
    //k.one = 49;
    //## 2 (Two)
    //k.two = 50;
    //## 3 (Three)
    //k.three = 51;
    //## 4 (Four)
    //k.four = 52;
    //## 5 (Five)
    //k.five = 53;
    //## 6 (Six)
    //k.six = 54;
    //## 7 (Seven)
    //k.seven = 55;
    //## 8 (Eight)
    //k.eight = 56;
    //## 9 (Nine)
    //k.nine = 57;

    //---
    //### Signs and Symbols
    //+++

    //## ` (Grave accent)
    //k.grave = 192;
    //## - (Hyphen, Dash, Underscore)
    //k.hyphen = k.dash = k.underscore = 189;
    //## = (Equal, Plus)
    //k.equal = k.plus = 187;
    //## [ (Bracket open)
    //k.bracketopen = 219;
    //## ] (Bracket close)
    //k.bracketclose = 221;
    //## \ (Back Slash)
    //k.backslash = 191;
    //## ; (Semi-colon)
    //k.semicolon = 186;
    //## ' (Quote, Double Quote)
    //k.quote = 222;
    //## , (Comma)
    //k.comma = 188;
    //## . (Period, dot)
    //k.period = k.dot = 190;
    //## / (Forward Slash)
    //k.forwardslash = 191;

    //---
    //### arrow
    //+++

    //## arrow up
    arrow.up = 38;
    //## arrow down
    arrow.down = 40;
    //## arrow left
    arrow.left = 37;
    //## arrow right
    arrow.right = 39;

    //---
    //### numpad
    //+++

    //## Num Lock
    //k.numlock = 144;
    //## numpad 0 (Numpad Zero)
    //numpad.zero = 96;
    //## numpad 1 (Numpad One)
    //numpad.one = 97;
    //## numpad 2 (Numpad Two)
    //numpad.two = 98;
    //## numpad 3 (Numpad Three)
    //numpad.three = 99;
    //## numpad 4 (Numpad Four)
    //numpad.four = 100;
    //## numpad 5 (Numpad Five)
    //numpad.five = 101;
    //## numpad 6 (Numpad Six)
    //numpad.six = 102;
    //## numpad 7 (Numpad Seven)
    //numpad.seven = 103;
    //## numpad 8 (Numpad Eight)
    //numpad.eight = 104;
    //## numpad 9 (Numpad Nine)
    //numpad.nine = 105;
    //## . (decimal, Numpad Period, Numpad dot)
    //numpad.decimal = numpad.period = numpad.dot = 110;
    //## + (add, Numpad Plus)
    //numpad.add = numpad.plus = 107;
    //## - (subtract, Numpad minus)
    //numpad.subtract = numpad.minus = 109;
    //## * (multiply,Numpad star)
    //numpad.multiply = numpad.star = 106;
    //## / (divide)
    //numpad.divide = 111;

    //---
    //### misc
    //+++

    //## custom key 1 (add your own)

    //---

    //## push values
    k.char = char;
    k.gaming = gaming;
    k.arrow = arrow;
    k.numpad = numpad;
    k.misc = misc;

    /* --- */
    /* Key Complete */
    /* +++ */

    key = k;

    /* --- */
})();
/* <<< */