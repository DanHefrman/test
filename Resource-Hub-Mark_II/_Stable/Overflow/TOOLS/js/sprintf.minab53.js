/*! sprintf-js v1.1.1 | Copyright (c) 2007-present, Alexandru Mara?teanu <hello@alexei.ro> | BSD-3-Clause */
!(function () {
  "use strict";
  function e(e) {
    return r(n(e), arguments);
  }
  function t(t, r) {
    return e.apply(null, [t].concat(r || []));
  }
  function r(t, r) {
    var n,
      i,
      a,
      o,
      p,
      c,
      u,
      f,
      l,
      d = 1,
      g = t.length,
      b = "";
    for (i = 0; i < g; i++)
      if ("string" == typeof t[i]) b += t[i];
      else if (Array.isArray(t[i])) {
        if ((o = t[i])[2])
          for (n = r[d], a = 0; a < o[2].length; a++) {
            if (!n.hasOwnProperty(o[2][a]))
              throw new Error(
                e('[sprintf] property "%s" does not exist', o[2][a])
              );
            n = n[o[2][a]];
          }
        else n = o[1] ? r[o[1]] : r[d++];
        if (
          (s.not_type.test(o[8]) &&
            s.not_primitive.test(o[8]) &&
            n instanceof Function &&
            (n = n()),
          s.numeric_arg.test(o[8]) && "number" != typeof n && isNaN(n))
        )
          throw new TypeError(e("[sprintf] expecting number but found %T", n));
        switch ((s.number.test(o[8]) && (f = n >= 0), o[8])) {
          case "b":
            n = parseInt(n, 10).toString(2);
            break;
          case "c":
            n = String.fromCharCode(parseInt(n, 10));
            break;
          case "d":
          case "i":
            n = parseInt(n, 10);
            break;
          case "j":
            n = JSON.stringify(n, null, o[6] ? parseInt(o[6]) : 0);
            break;
          case "e":
            n = o[7]
              ? parseFloat(n).toExponential(o[7])
              : parseFloat(n).toExponential();
            break;
          case "f":
            n = o[7] ? parseFloat(n).toFixed(o[7]) : parseFloat(n);
            break;
          case "g":
            n = o[7] ? String(Number(n.toPrecision(o[7]))) : parseFloat(n);
            break;
          case "o":
            n = (parseInt(n, 10) >>> 0).toString(8);
            break;
          case "s":
            (n = String(n)), (n = o[7] ? n.substring(0, o[7]) : n);
            break;
          case "t":
            (n = String(!!n)), (n = o[7] ? n.substring(0, o[7]) : n);
            break;
          case "T":
            (n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase()),
              (n = o[7] ? n.substring(0, o[7]) : n);
            break;
          case "u":
            n = parseInt(n, 10) >>> 0;
            break;
          case "v":
            (n = n.valueOf()), (n = o[7] ? n.substring(0, o[7]) : n);
            break;
          case "x":
            n = (parseInt(n, 10) >>> 0).toString(16);
            break;
          case "X":
            n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase();
        }
        s.json.test(o[8])
          ? (b += n)
          : (!s.number.test(o[8]) || (f && !o[3])
              ? (l = "")
              : ((l = f ? "+" : "-"), (n = n.toString().replace(s.sign, ""))),
            (c = o[4] ? ("0" === o[4] ? "0" : o[4].charAt(1)) : " "),
            (u = o[6] - (l + n).length),
            (p = o[6] && u > 0 ? c.repeat(u) : ""),
            (b += o[5] ? l + n + p : "0" === c ? l + p + n : p + l + n));
      }
    return b;
  }
  function n(e) {
    if (i[e]) return i[e];
    for (var t, r = e, n = [], a = 0; r; ) {
      if (null !== (t = s.text.exec(r))) n.push(t[0]);
      else if (null !== (t = s.modulo.exec(r))) n.push("%");
      else {
        if (null === (t = s.placeholder.exec(r)))
          throw new SyntaxError("[sprintf] unexpected placeholder");
        if (t[2]) {
          a |= 1;
          var o = [],
            p = t[2],
            c = [];
          if (null === (c = s.key.exec(p)))
            throw new SyntaxError(
              "[sprintf] failed to parse named argument key"
            );
          for (o.push(c[1]); "" !== (p = p.substring(c[0].length)); )
            if (null !== (c = s.key_access.exec(p))) o.push(c[1]);
            else {
              if (null === (c = s.index_access.exec(p)))
                throw new SyntaxError(
                  "[sprintf] failed to parse named argument key"
                );
              o.push(c[1]);
            }
          t[2] = o;
        } else a |= 2;
        if (3 === a)
          throw new Error(
            "[sprintf] mixing positional and named placeholders is not (yet) supported"
          );
        n.push(t);
      }
      r = r.substring(t[0].length);
    }
    return (i[e] = n);
  }
  var s = {
      not_string: /[^s]/,
      not_bool: /[^t]/,
      not_type: /[^T]/,
      not_primitive: /[^v]/,
      number: /[diefg]/,
      numeric_arg: /[bcdiefguxX]/,
      json: /[j]/,
      not_json: /[^j]/,
      text: /^[^\x25]+/,
      modulo: /^\x25{2}/,
      placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
      key: /^([a-z_][a-z_\d]*)/i,
      key_access: /^\.([a-z_][a-z_\d]*)/i,
      index_access: /^\[(\d+)\]/,
      sign: /^[\+\-]/,
    },
    i = Object.create(null);
  "undefined" != typeof exports &&
    ((exports.sprintf = e), (exports.vsprintf = t)),
    "undefined" != typeof window &&
      ((window.sprintf = e),
      (window.vsprintf = t),
      "function" == typeof define &&
        define.amd &&
        define(function () {
          return { sprintf: e, vsprintf: t };
        }));
})();
