!(function (n) {
  var e = {};
  function t(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = n),
    (t.c = e),
    (t.d = function (n, e, o) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: o });
    }),
    (t.r = function (n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (t.t = function (n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
      var o = Object.create(null);
      if (
        (t.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var r in n)
          t.d(
            o,
            r,
            function (e) {
              return n[e];
            }.bind(null, r),
          );
      return o;
    }),
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(e, 'a', e), e;
    }),
    (t.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = ''),
    t((t.s = 4));
})([
  function (n, e, t) {
    var o = t(1),
      r = t(2);
    'string' == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[n.i, r, '']]);
    var i = { insert: 'head', singleton: !1 };
    o(r, i);
    n.exports = r.locals || {};
  },
  function (n, e, t) {
    'use strict';
    var o,
      r = function () {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      i = (function () {
        var n = {};
        return function (e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            n[e] = t;
          }
          return n[e];
        };
      })(),
      a = [];
    function c(n) {
      for (var e = -1, t = 0; t < a.length; t++)
        if (a[t].identifier === n) {
          e = t;
          break;
        }
      return e;
    }
    function u(n, e) {
      for (var t = {}, o = [], r = 0; r < n.length; r++) {
        var i = n[r],
          u = e.base ? i[0] + e.base : i[0],
          s = t[u] || 0,
          l = ''.concat(u, ' ').concat(s);
        t[u] = s + 1;
        var d = c(l),
          f = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== d
          ? (a[d].references++, a[d].updater(f))
          : a.push({ identifier: l, updater: h(f, e), references: 1 }),
          o.push(l);
      }
      return o;
    }
    function s(n) {
      var e = document.createElement('style'),
        o = n.attributes || {};
      if (void 0 === o.nonce) {
        var r = t.nc;
        r && (o.nonce = r);
      }
      if (
        (Object.keys(o).forEach(function (n) {
          e.setAttribute(n, o[n]);
        }),
        'function' == typeof n.insert)
      )
        n.insert(e);
      else {
        var a = i(n.insert || 'head');
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        a.appendChild(e);
      }
      return e;
    }
    var l,
      d =
        ((l = []),
        function (n, e) {
          return (l[n] = e), l.filter(Boolean).join('\n');
        });
    function f(n, e, t, o) {
      var r = t
        ? ''
        : o.media
        ? '@media '.concat(o.media, ' {').concat(o.css, '}')
        : o.css;
      if (n.styleSheet) n.styleSheet.cssText = d(e, r);
      else {
        var i = document.createTextNode(r),
          a = n.childNodes;
        a[e] && n.removeChild(a[e]),
          a.length ? n.insertBefore(i, a[e]) : n.appendChild(i);
      }
    }
    function p(n, e, t) {
      var o = t.css,
        r = t.media,
        i = t.sourceMap;
      if (
        (r ? n.setAttribute('media', r) : n.removeAttribute('media'),
        i &&
          btoa &&
          (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */',
          )),
        n.styleSheet)
      )
        n.styleSheet.cssText = o;
      else {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
        n.appendChild(document.createTextNode(o));
      }
    }
    var g = null,
      m = 0;
    function h(n, e) {
      var t, o, r;
      if (e.singleton) {
        var i = m++;
        (t = g || (g = s(e))),
          (o = f.bind(null, t, i, !1)),
          (r = f.bind(null, t, i, !0));
      } else
        (t = s(e)),
          (o = p.bind(null, t, e)),
          (r = function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(t);
          });
      return (
        o(n),
        function (e) {
          if (e) {
            if (
              e.css === n.css &&
              e.media === n.media &&
              e.sourceMap === n.sourceMap
            )
              return;
            o((n = e));
          } else r();
        }
      );
    }
    n.exports = function (n, e) {
      (e = e || {}).singleton ||
        'boolean' == typeof e.singleton ||
        (e.singleton = r());
      var t = u((n = n || []), e);
      return function (n) {
        if (
          ((n = n || []),
          '[object Array]' === Object.prototype.toString.call(n))
        ) {
          for (var o = 0; o < t.length; o++) {
            var r = c(t[o]);
            a[r].references--;
          }
          for (var i = u(n, e), s = 0; s < t.length; s++) {
            var l = c(t[s]);
            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
          }
          t = i;
        }
      };
    };
  },
  function (n, e, t) {
    (e = t(3)(!1)).push([
      n.i,
      '/* CSS declarations go here */\nbody {\n  font-family: sans-serif;\n  background-color: #315481;\n  background-image: linear-gradient(to bottom, #315481, #918e82 100%);\n  background-attachment: fixed;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  padding: 0;\n  margin: 0;\n\n  font-size: 14px;\n}\n\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  min-height: 100%;\n  background: white;\n}\n\nheader {\n  background: #d2edf4;\n  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);\n  padding: 20px 15px 15px 15px;\n  position: relative;\n}\n\n#login-buttons {\n  display: block;\n}\n\nh1 {\n  font-size: 1.5em;\n  margin: 0;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-right: 1em;\n}\n\nform {\n  margin-top: 10px;\n  margin-bottom: -10px;\n  position: relative;\n}\n\n.new-task input {\n  box-sizing: border-box;\n  padding: 10px 0;\n  background: transparent;\n  border: none;\n  width: 100%;\n  padding-right: 80px;\n  font-size: 1em;\n}\n\n.new-task input:focus {\n  outline: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  background: white;\n}\n\n.delete {\n  float: right;\n  font-weight: bold;\n  background: none;\n  font-size: 1em;\n  border: none;\n  position: relative;\n  cursor: pointer;\n}\n\nli {\n  position: relative;\n  list-style: none;\n  padding: 15px;\n  border-bottom: #eee solid 1px;\n}\n\nli .text {\n  margin-left: 10px;\n}\n\nli.checked {\n  color: #888;\n}\n\nli.checked .text {\n  text-decoration: line-through;\n}\n\nli.private {\n  background: #eee;\n  border-color: #ddd;\n}\n\nheader .hide-completed {\n  float: right;\n}\n\n.toggle-private {\n  margin-left: 5px;\n}\n\n@media (max-width: 600px) {\n  li {\n    padding: 12px 15px;\n  }\n\n  .search {\n    width: 150px;\n    clear: both;\n  }\n\n  .new-task input {\n    padding-bottom: 5px;\n  }\n}\n',
      '',
    ]),
      (n.exports = e);
  },
  function (n, e, t) {
    'use strict';
    n.exports = function (n) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var t = (function (n, e) {
              var t = n[1] || '',
                o = n[3];
              if (!o) return t;
              if (e && 'function' == typeof btoa) {
                var r =
                    ((a = o),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                      c,
                    )),
                    '/*# '.concat(u, ' */')),
                  i = o.sources.map(function (n) {
                    return '/*# sourceURL='
                      .concat(o.sourceRoot || '')
                      .concat(n, ' */');
                  });
                return [t].concat(i).concat([r]).join('\n');
              }
              var a, c, u;
              return [t].join('\n');
            })(e, n);
            return e[2] ? '@media '.concat(e[2], ' {').concat(t, '}') : t;
          }).join('');
        }),
        (e.i = function (n, t, o) {
          'string' == typeof n && (n = [[null, n, '']]);
          var r = {};
          if (o)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (r[a] = !0);
            }
          for (var c = 0; c < n.length; c++) {
            var u = [].concat(n[c]);
            (o && r[u[0]]) ||
              (t &&
                (u[2]
                  ? (u[2] = ''.concat(t, ' and ').concat(u[2]))
                  : (u[2] = t)),
              e.push(u));
          }
        }),
        e
      );
    };
  },
  function (n, e, t) {
    'use strict';
    t.r(e);
    const o = document.querySelector('#result');
    function r(n) {
      !(function (n) {
        console.log('todos:', n),
          localStorage.setItem('data', JSON.stringify(n));
      })(n);
      const e = n.map(
        (n, e) =>
          `<li data-index="${e}">\n        <button class="delete">×</button>\n        <input type="checkbox" class="toggle-checked" ${
            n.isDone ? 'checked' : ''
          }/>\n        <span class="text">${n.text}</span>\n      </li>`,
      );
      o.innerHTML = `<ul>${e.join('')}</ul>`;
    }
    var i = { id: '', text: '', isDone: !1 };
    const a = document.querySelector('#input-form'),
      c = document.querySelector('#input');
    var u = {
      init: function (n) {
        a.addEventListener('submit', (e) => {
          e.preventDefault();
          const t = c.value;
          t && ((c.value = ''), n.push({ ...i, text: t, isDone: !1 }), r(n));
        });
      },
    };
    t(0);
    const s = document.querySelector('#result');
    var l;
    (l = (n) => {
      s.addEventListener('click', (e) => {
        const { className: t } = e.target;
        if ('delete' === t) {
          const { index: t } = e.target.parentElement.dataset;
          n.splice(t, 1), r(n);
        }
      }),
        u.init(n),
        r(n);
    }),
      fetch('http://localhost:3000/todos').then((n) => {
        n.json().then((n) => {
          l(n);
        });
      });
  },
]);
