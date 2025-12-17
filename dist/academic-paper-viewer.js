import Fl, { useState as _i, useMemo as $i } from "react";
var gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var C0 = { exports: {} }, Er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function ru() {
  if (Vi) return Er;
  Vi = 1;
  var e = Fl, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(o, s, u) {
    var m, h = {}, d = null, p = null;
    u !== void 0 && (d = "" + u), s.key !== void 0 && (d = "" + s.key), s.ref !== void 0 && (p = s.ref);
    for (m in s) n.call(s, m) && !a.hasOwnProperty(m) && (h[m] = s[m]);
    if (o && o.defaultProps) for (m in s = o.defaultProps, s) h[m] === void 0 && (h[m] = s[m]);
    return { $$typeof: t, type: o, key: d, ref: p, props: h, _owner: i.current };
  }
  return Er.Fragment = r, Er.jsx = l, Er.jsxs = l, Er;
}
var Dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function nu() {
  return Ui || (Ui = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Fl, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function z(k) {
      if (k === null || typeof k != "object")
        return null;
      var P = y && k[y] || k[b];
      return typeof P == "function" ? P : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(k) {
      {
        for (var P = arguments.length, X = new Array(P > 1 ? P - 1 : 0), ne = 1; ne < P; ne++)
          X[ne - 1] = arguments[ne];
        R("error", k, X);
      }
    }
    function R(k, P, X) {
      {
        var ne = T.ReactDebugCurrentFrame, ge = ne.getStackAddendum();
        ge !== "" && (P += "%s", X = X.concat([ge]));
        var be = X.map(function(me) {
          return String(me);
        });
        be.unshift("Warning: " + P), Function.prototype.apply.call(console[k], console, be);
      }
    }
    var $ = !1, j = !1, D = !1, W = !1, J = !1, V;
    V = Symbol.for("react.module.reference");
    function I(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === n || k === a || J || k === i || k === u || k === m || W || k === p || $ || j || D || typeof k == "object" && k !== null && (k.$$typeof === d || k.$$typeof === h || k.$$typeof === l || k.$$typeof === o || k.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === V || k.getModuleId !== void 0));
    }
    function U(k, P, X) {
      var ne = k.displayName;
      if (ne)
        return ne;
      var ge = P.displayName || P.name || "";
      return ge !== "" ? X + "(" + ge + ")" : X;
    }
    function _(k) {
      return k.displayName || "Context";
    }
    function ae(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case o:
            var P = k;
            return _(P) + ".Consumer";
          case l:
            var X = k;
            return _(X._context) + ".Provider";
          case s:
            return U(k, k.render, "ForwardRef");
          case h:
            var ne = k.displayName || null;
            return ne !== null ? ne : ae(k.type) || "Memo";
          case d: {
            var ge = k, be = ge._payload, me = ge._init;
            try {
              return ae(me(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ee = 0, ve, ye, Re, je, S, ze, Ae;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function He() {
      {
        if (ee === 0) {
          ve = console.log, ye = console.info, Re = console.warn, je = console.error, S = console.group, ze = console.groupCollapsed, Ae = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        ee++;
      }
    }
    function _e() {
      {
        if (ee--, ee === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, k, {
              value: ve
            }),
            info: re({}, k, {
              value: ye
            }),
            warn: re({}, k, {
              value: Re
            }),
            error: re({}, k, {
              value: je
            }),
            group: re({}, k, {
              value: S
            }),
            groupCollapsed: re({}, k, {
              value: ze
            }),
            groupEnd: re({}, k, {
              value: Ae
            })
          });
        }
        ee < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = T.ReactCurrentDispatcher, $e;
    function Be(k, P, X) {
      {
        if ($e === void 0)
          try {
            throw Error();
          } catch (ge) {
            var ne = ge.stack.trim().match(/\n( *(at )?)/);
            $e = ne && ne[1] || "";
          }
        return `
` + $e + k;
      }
    }
    var We = !1, Ve;
    {
      var Vt = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new Vt();
    }
    function fr(k, P) {
      if (!k || We)
        return "";
      {
        var X = Ve.get(k);
        if (X !== void 0)
          return X;
      }
      var ne;
      We = !0;
      var ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = Ce.current, Ce.current = null, He();
      try {
        if (P) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (et) {
              ne = et;
            }
            Reflect.construct(k, [], me);
          } else {
            try {
              me.call();
            } catch (et) {
              ne = et;
            }
            k.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            ne = et;
          }
          k();
        }
      } catch (et) {
        if (et && ne && typeof et.stack == "string") {
          for (var he = et.stack.split(`
`), Xe = ne.stack.split(`
`), Fe = he.length - 1, Pe = Xe.length - 1; Fe >= 1 && Pe >= 0 && he[Fe] !== Xe[Pe]; )
            Pe--;
          for (; Fe >= 1 && Pe >= 0; Fe--, Pe--)
            if (he[Fe] !== Xe[Pe]) {
              if (Fe !== 1 || Pe !== 1)
                do
                  if (Fe--, Pe--, Pe < 0 || he[Fe] !== Xe[Pe]) {
                    var pt = `
` + he[Fe].replace(" at new ", " at ");
                    return k.displayName && pt.includes("<anonymous>") && (pt = pt.replace("<anonymous>", k.displayName)), typeof k == "function" && Ve.set(k, pt), pt;
                  }
                while (Fe >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        We = !1, Ce.current = be, _e(), Error.prepareStackTrace = ge;
      }
      var dr = k ? k.displayName || k.name : "", ir = dr ? Be(dr) : "";
      return typeof k == "function" && Ve.set(k, ir), ir;
    }
    function Mr(k, P, X) {
      return fr(k, !1);
    }
    function tr(k) {
      var P = k.prototype;
      return !!(P && P.isReactComponent);
    }
    function St(k, P, X) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return fr(k, tr(k));
      if (typeof k == "string")
        return Be(k);
      switch (k) {
        case u:
          return Be("Suspense");
        case m:
          return Be("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case s:
            return Mr(k.render);
          case h:
            return St(k.type, P, X);
          case d: {
            var ne = k, ge = ne._payload, be = ne._init;
            try {
              return St(be(ge), P, X);
            } catch {
            }
          }
        }
      return "";
    }
    var bt = Object.prototype.hasOwnProperty, Rt = {}, Ft = T.ReactDebugCurrentFrame;
    function ft(k) {
      if (k) {
        var P = k._owner, X = St(k.type, k._source, P ? P.type : null);
        Ft.setExtraStackFrame(X);
      } else
        Ft.setExtraStackFrame(null);
    }
    function Kr(k, P, X, ne, ge) {
      {
        var be = Function.call.bind(bt);
        for (var me in k)
          if (be(k, me)) {
            var he = void 0;
            try {
              if (typeof k[me] != "function") {
                var Xe = Error((ne || "React class") + ": " + X + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Xe.name = "Invariant Violation", Xe;
              }
              he = k[me](P, me, ne, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              he = Fe;
            }
            he && !(he instanceof Error) && (ft(ge), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", X, me, typeof he), ft(null)), he instanceof Error && !(he.message in Rt) && (Rt[he.message] = !0, ft(ge), M("Failed %s type: %s", X, he.message), ft(null));
          }
      }
    }
    var qn = Array.isArray;
    function zr(k) {
      return qn(k);
    }
    function Hn(k) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, X = P && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return X;
      }
    }
    function jn(k) {
      try {
        return Jr(k), !1;
      } catch {
        return !0;
      }
    }
    function Jr(k) {
      return "" + k;
    }
    function F(k) {
      if (jn(k))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(k)), Jr(k);
    }
    var H = T.ReactCurrentOwner, ie = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, se, de;
    function lt(k) {
      if (bt.call(k, "ref")) {
        var P = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Nt(k) {
      if (bt.call(k, "key")) {
        var P = Object.getOwnPropertyDescriptor(k, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function xt(k, P) {
      typeof k.ref == "string" && H.current;
    }
    function rr(k, P) {
      {
        var X = function() {
          se || (se = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        X.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function nr(k, P) {
      {
        var X = function() {
          de || (de = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        X.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var Ye = function(k, P, X, ne, ge, be, me) {
      var he = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: k,
        key: P,
        ref: X,
        props: me,
        // Record the component responsible for creating this element.
        _owner: be
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function Ut(k, P, X, ne, ge) {
      {
        var be, me = {}, he = null, Xe = null;
        X !== void 0 && (F(X), he = "" + X), Nt(P) && (F(P.key), he = "" + P.key), lt(P) && (Xe = P.ref, xt(P, ge));
        for (be in P)
          bt.call(P, be) && !ie.hasOwnProperty(be) && (me[be] = P[be]);
        if (k && k.defaultProps) {
          var Fe = k.defaultProps;
          for (be in Fe)
            me[be] === void 0 && (me[be] = Fe[be]);
        }
        if (he || Xe) {
          var Pe = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          he && rr(me, Pe), Xe && nr(me, Pe);
        }
        return Ye(k, he, Xe, ge, ne, H.current, me);
      }
    }
    var ot = T.ReactCurrentOwner, Bi = T.ReactDebugCurrentFrame;
    function pr(k) {
      if (k) {
        var P = k._owner, X = St(k.type, k._source, P ? P.type : null);
        Bi.setExtraStackFrame(X);
      } else
        Bi.setExtraStackFrame(null);
    }
    var _n;
    _n = !1;
    function $n(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function Pi() {
      {
        if (ot.current) {
          var k = ae(ot.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Gs(k) {
      return "";
    }
    var Oi = {};
    function Ws(k) {
      {
        var P = Pi();
        if (!P) {
          var X = typeof k == "string" ? k : k.displayName || k.name;
          X && (P = `

Check the top-level render call using <` + X + ">.");
        }
        return P;
      }
    }
    function Li(k, P) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var X = Ws(P);
        if (Oi[X])
          return;
        Oi[X] = !0;
        var ne = "";
        k && k._owner && k._owner !== ot.current && (ne = " It was passed a child from " + ae(k._owner.type) + "."), pr(k), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, ne), pr(null);
      }
    }
    function qi(k, P) {
      {
        if (typeof k != "object")
          return;
        if (zr(k))
          for (var X = 0; X < k.length; X++) {
            var ne = k[X];
            $n(ne) && Li(ne, P);
          }
        else if ($n(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var ge = z(k);
          if (typeof ge == "function" && ge !== k.entries)
            for (var be = ge.call(k), me; !(me = be.next()).done; )
              $n(me.value) && Li(me.value, P);
        }
      }
    }
    function Ys(k) {
      {
        var P = k.type;
        if (P == null || typeof P == "string")
          return;
        var X;
        if (typeof P == "function")
          X = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === h))
          X = P.propTypes;
        else
          return;
        if (X) {
          var ne = ae(P);
          Kr(X, k.props, "prop", ne, k);
        } else if (P.PropTypes !== void 0 && !_n) {
          _n = !0;
          var ge = ae(P);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xs(k) {
      {
        for (var P = Object.keys(k.props), X = 0; X < P.length; X++) {
          var ne = P[X];
          if (ne !== "children" && ne !== "key") {
            pr(k), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), pr(null);
            break;
          }
        }
        k.ref !== null && (pr(k), M("Invalid attribute `ref` supplied to `React.Fragment`."), pr(null));
      }
    }
    var Hi = {};
    function ji(k, P, X, ne, ge, be) {
      {
        var me = I(k);
        if (!me) {
          var he = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = Gs();
          Xe ? he += Xe : he += Pi();
          var Fe;
          k === null ? Fe = "null" : zr(k) ? Fe = "array" : k !== void 0 && k.$$typeof === t ? (Fe = "<" + (ae(k.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof k, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, he);
        }
        var Pe = Ut(k, P, X, ge, be);
        if (Pe == null)
          return Pe;
        if (me) {
          var pt = P.children;
          if (pt !== void 0)
            if (ne)
              if (zr(pt)) {
                for (var dr = 0; dr < pt.length; dr++)
                  qi(pt[dr], k);
                Object.freeze && Object.freeze(pt);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qi(pt, k);
        }
        if (bt.call(P, "key")) {
          var ir = ae(k), et = Object.keys(P).filter(function(tu) {
            return tu !== "key";
          }), Vn = et.length > 0 ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Hi[ir + Vn]) {
            var eu = et.length > 0 ? "{" + et.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vn, ir, eu, ir), Hi[ir + Vn] = !0;
          }
        }
        return k === n ? Xs(Pe) : Ys(Pe), Pe;
      }
    }
    function Ks(k, P, X) {
      return ji(k, P, X, !0);
    }
    function Js(k, P, X) {
      return ji(k, P, X, !1);
    }
    var Zs = Js, Qs = Ks;
    Dr.Fragment = n, Dr.jsx = Zs, Dr.jsxs = Qs;
  }()), Dr;
}
process.env.NODE_ENV === "production" ? C0.exports = ru() : C0.exports = nu();
var ke = C0.exports;
function Gi(e) {
  const t = [], r = String(e || "");
  let n = r.indexOf(","), i = 0, a = !1;
  for (; !a; ) {
    n === -1 && (n = r.length, a = !0);
    const l = r.slice(i, n).trim();
    (l || !a) && t.push(l), i = n + 1, n = r.indexOf(",", i);
  }
  return t;
}
function iu(e, t) {
  const r = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const au = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, lu = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ou = {};
function Wi(e, t) {
  return (ou.jsx ? lu : au).test(e);
}
const su = /[ \t\n\f\r]/g;
function uu(e) {
  return typeof e == "object" ? e.type === "text" ? Yi(e.value) : !1 : Yi(e);
}
function Yi(e) {
  return e.replace(su, "") === "";
}
class $r {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, r, n) {
    this.normal = r, this.property = t, n && (this.space = n);
  }
}
$r.prototype.normal = {};
$r.prototype.property = {};
$r.prototype.space = void 0;
function Bl(e, t) {
  const r = {}, n = {};
  for (const i of e)
    Object.assign(r, i.property), Object.assign(n, i.normal);
  return new $r(r, n, t);
}
function Lr(e) {
  return e.toLowerCase();
}
class it {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, r) {
    this.attribute = r, this.property = t;
  }
}
it.prototype.attribute = "";
it.prototype.booleanish = !1;
it.prototype.boolean = !1;
it.prototype.commaOrSpaceSeparated = !1;
it.prototype.commaSeparated = !1;
it.prototype.defined = !1;
it.prototype.mustUseProperty = !1;
it.prototype.number = !1;
it.prototype.overloadedBoolean = !1;
it.prototype.property = "";
it.prototype.spaceSeparated = !1;
it.prototype.space = void 0;
let cu = 0;
const le = cr(), Oe = cr(), M0 = cr(), L = cr(), Se = cr(), br = cr(), st = cr();
function cr() {
  return 2 ** ++cu;
}
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Oe,
  commaOrSpaceSeparated: st,
  commaSeparated: br,
  number: L,
  overloadedBoolean: M0,
  spaceSeparated: Se
}, Symbol.toStringTag, { value: "Module" })), Un = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(z0)
);
class X0 extends it {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, r, n, i) {
    let a = -1;
    if (super(t, r), Xi(this, "space", i), typeof n == "number")
      for (; ++a < Un.length; ) {
        const l = Un[a];
        Xi(this, Un[a], (n & z0[l]) === z0[l]);
      }
  }
}
X0.prototype.defined = !0;
function Xi(e, t, r) {
  r && (e[t] = r);
}
function Sr(e) {
  const t = {}, r = {};
  for (const [n, i] of Object.entries(e.properties)) {
    const a = new X0(
      n,
      e.transform(e.attributes || {}, n),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(n) && (a.mustUseProperty = !0), t[n] = a, r[Lr(n)] = n, r[Lr(a.attribute)] = n;
  }
  return new $r(t, r, e.space);
}
const Pl = Sr({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Oe,
    ariaAutoComplete: null,
    ariaBusy: Oe,
    ariaChecked: Oe,
    ariaColCount: L,
    ariaColIndex: L,
    ariaColSpan: L,
    ariaControls: Se,
    ariaCurrent: null,
    ariaDescribedBy: Se,
    ariaDetails: null,
    ariaDisabled: Oe,
    ariaDropEffect: Se,
    ariaErrorMessage: null,
    ariaExpanded: Oe,
    ariaFlowTo: Se,
    ariaGrabbed: Oe,
    ariaHasPopup: null,
    ariaHidden: Oe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Se,
    ariaLevel: L,
    ariaLive: null,
    ariaModal: Oe,
    ariaMultiLine: Oe,
    ariaMultiSelectable: Oe,
    ariaOrientation: null,
    ariaOwns: Se,
    ariaPlaceholder: null,
    ariaPosInSet: L,
    ariaPressed: Oe,
    ariaReadOnly: Oe,
    ariaRelevant: null,
    ariaRequired: Oe,
    ariaRoleDescription: Se,
    ariaRowCount: L,
    ariaRowIndex: L,
    ariaRowSpan: L,
    ariaSelected: Oe,
    ariaSetSize: L,
    ariaSort: null,
    ariaValueMax: L,
    ariaValueMin: L,
    ariaValueNow: L,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Ol(e, t) {
  return t in e ? e[t] : t;
}
function Ll(e, t) {
  return Ol(e, t.toLowerCase());
}
const hu = Sr({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: br,
    acceptCharset: Se,
    accessKey: Se,
    action: null,
    allow: null,
    allowFullScreen: le,
    allowPaymentRequest: le,
    allowUserMedia: le,
    alt: null,
    as: null,
    async: le,
    autoCapitalize: null,
    autoComplete: Se,
    autoFocus: le,
    autoPlay: le,
    blocking: Se,
    capture: null,
    charSet: null,
    checked: le,
    cite: null,
    className: Se,
    cols: L,
    colSpan: null,
    content: null,
    contentEditable: Oe,
    controls: le,
    controlsList: Se,
    coords: L | br,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: M0,
    draggable: Oe,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: le,
    formTarget: null,
    headers: Se,
    height: L,
    hidden: M0,
    high: L,
    href: null,
    hrefLang: null,
    htmlFor: Se,
    httpEquiv: Se,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: le,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: le,
    itemId: null,
    itemProp: Se,
    itemRef: Se,
    itemScope: le,
    itemType: Se,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: le,
    low: L,
    manifest: null,
    max: null,
    maxLength: L,
    media: null,
    method: null,
    min: null,
    minLength: L,
    multiple: le,
    muted: le,
    name: null,
    nonce: null,
    noModule: le,
    noValidate: le,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: le,
    optimum: L,
    pattern: null,
    ping: Se,
    placeholder: null,
    playsInline: le,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: le,
    referrerPolicy: null,
    rel: Se,
    required: le,
    reversed: le,
    rows: L,
    rowSpan: L,
    sandbox: Se,
    scope: null,
    scoped: le,
    seamless: le,
    selected: le,
    shadowRootClonable: le,
    shadowRootDelegatesFocus: le,
    shadowRootMode: null,
    shape: null,
    size: L,
    sizes: null,
    slot: null,
    span: L,
    spellCheck: Oe,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: L,
    step: null,
    style: null,
    tabIndex: L,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: le,
    useMap: null,
    value: Oe,
    width: L,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Se,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: L,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: L,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: le,
    // Lists. Use CSS to reduce space between items instead
    declare: le,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: L,
    // `<img>` and `<object>`
    leftMargin: L,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: L,
    // `<body>`
    marginWidth: L,
    // `<body>`
    noResize: le,
    // `<frame>`
    noHref: le,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: le,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: le,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: L,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Oe,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: L,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: L,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: le,
    disableRemotePlayback: le,
    prefix: null,
    property: null,
    results: L,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Ll
}), mu = Sr({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: st,
    accentHeight: L,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: L,
    amplitude: L,
    arabicForm: null,
    ascent: L,
    attributeName: null,
    attributeType: null,
    azimuth: L,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: L,
    by: null,
    calcMode: null,
    capHeight: L,
    className: Se,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: L,
    diffuseConstant: L,
    direction: null,
    display: null,
    dur: null,
    divisor: L,
    dominantBaseline: null,
    download: le,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: L,
    enableBackground: null,
    end: null,
    event: null,
    exponent: L,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: L,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: br,
    g2: br,
    glyphName: br,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: L,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: L,
    horizOriginX: L,
    horizOriginY: L,
    id: null,
    ideographic: L,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: L,
    k: L,
    k1: L,
    k2: L,
    k3: L,
    k4: L,
    kernelMatrix: st,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: L,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: L,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: L,
    overlineThickness: L,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: L,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Se,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: L,
    pointsAtY: L,
    pointsAtZ: L,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: st,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: st,
    rev: st,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: st,
    requiredFeatures: st,
    requiredFonts: st,
    requiredFormats: st,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: L,
    specularExponent: L,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: L,
    strikethroughThickness: L,
    string: null,
    stroke: null,
    strokeDashArray: st,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: L,
    strokeOpacity: L,
    strokeWidth: null,
    style: null,
    surfaceScale: L,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: st,
    tabIndex: L,
    tableValues: null,
    target: null,
    targetX: L,
    targetY: L,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: st,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: L,
    underlineThickness: L,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: L,
    values: null,
    vAlphabetic: L,
    vMathematical: L,
    vectorEffect: null,
    vHanging: L,
    vIdeographic: L,
    version: null,
    vertAdvY: L,
    vertOriginX: L,
    vertOriginY: L,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: L,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ol
}), ql = Sr({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), Hl = Sr({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Ll
}), jl = Sr({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), fu = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, pu = /[A-Z]/g, Ki = /-[a-z]/g, du = /^data[-\w.:]+$/i;
function _l(e, t) {
  const r = Lr(t);
  let n = t, i = it;
  if (r in e.normal)
    return e.property[e.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && du.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(Ki, vu);
      n = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!Ki.test(a)) {
        let l = a.replace(pu, gu);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = X0;
  }
  return new i(n, t);
}
function gu(e) {
  return "-" + e.toLowerCase();
}
function vu(e) {
  return e.charAt(1).toUpperCase();
}
const $l = Bl([Pl, hu, ql, Hl, jl], "html"), Cn = Bl([Pl, mu, ql, Hl, jl], "svg");
function Ji(e) {
  const t = String(e || "").trim();
  return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function yu(e) {
  return e.join(" ").trim();
}
var K0 = {}, Zi = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, bu = /\n/g, xu = /^\s*/, wu = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, ku = /^:\s*/, Su = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Tu = /^[;\s]*/, Au = /^\s+|\s+$/g, Cu = `
`, Qi = "/", ea = "*", sr = "", Mu = "comment", zu = "declaration";
function Eu(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var r = 1, n = 1;
  function i(y) {
    var b = y.match(bu);
    b && (r += b.length);
    var z = y.lastIndexOf(Cu);
    n = ~z ? y.length - z : n + y.length;
  }
  function a() {
    var y = { line: r, column: n };
    return function(b) {
      return b.position = new l(y), u(), b;
    };
  }
  function l(y) {
    this.start = y, this.end = { line: r, column: n }, this.source = t.source;
  }
  l.prototype.content = e;
  function o(y) {
    var b = new Error(
      t.source + ":" + r + ":" + n + ": " + y
    );
    if (b.reason = y, b.filename = t.source, b.line = r, b.column = n, b.source = e, !t.silent) throw b;
  }
  function s(y) {
    var b = y.exec(e);
    if (b) {
      var z = b[0];
      return i(z), e = e.slice(z.length), b;
    }
  }
  function u() {
    s(xu);
  }
  function m(y) {
    var b;
    for (y = y || []; b = h(); )
      b !== !1 && y.push(b);
    return y;
  }
  function h() {
    var y = a();
    if (!(Qi != e.charAt(0) || ea != e.charAt(1))) {
      for (var b = 2; sr != e.charAt(b) && (ea != e.charAt(b) || Qi != e.charAt(b + 1)); )
        ++b;
      if (b += 2, sr === e.charAt(b - 1))
        return o("End of comment missing");
      var z = e.slice(2, b - 2);
      return n += 2, i(z), e = e.slice(b), n += 2, y({
        type: Mu,
        comment: z
      });
    }
  }
  function d() {
    var y = a(), b = s(wu);
    if (b) {
      if (h(), !s(ku)) return o("property missing ':'");
      var z = s(Su), T = y({
        type: zu,
        property: ta(b[0].replace(Zi, sr)),
        value: z ? ta(z[0].replace(Zi, sr)) : sr
      });
      return s(Tu), T;
    }
  }
  function p() {
    var y = [];
    m(y);
    for (var b; b = d(); )
      b !== !1 && (y.push(b), m(y));
    return y;
  }
  return u(), p();
}
function ta(e) {
  return e ? e.replace(Au, sr) : sr;
}
var Du = Eu, Iu = gn && gn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(K0, "__esModule", { value: !0 });
K0.default = Fu;
const Ru = Iu(Du);
function Fu(e, t) {
  let r = null;
  if (!e || typeof e != "string")
    return r;
  const n = (0, Ru.default)(e), i = typeof t == "function";
  return n.forEach((a) => {
    if (a.type !== "declaration")
      return;
    const { property: l, value: o } = a;
    i ? t(l, o, a) : o && (r = r || {}, r[l] = o);
  }), r;
}
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.camelCase = void 0;
var Nu = /^--[a-zA-Z0-9_-]+$/, Bu = /-([a-z])/g, Pu = /^[^-]+$/, Ou = /^-(webkit|moz|ms|o|khtml)-/, Lu = /^-(ms)-/, qu = function(e) {
  return !e || Pu.test(e) || Nu.test(e);
}, Hu = function(e, t) {
  return t.toUpperCase();
}, ra = function(e, t) {
  return "".concat(t, "-");
}, ju = function(e, t) {
  return t === void 0 && (t = {}), qu(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Lu, ra) : e = e.replace(Ou, ra), e.replace(Bu, Hu));
};
Mn.camelCase = ju;
var _u = gn && gn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, $u = _u(K0), Vu = Mn;
function E0(e, t) {
  var r = {};
  return !e || typeof e != "string" || (0, $u.default)(e, function(n, i) {
    n && i && (r[(0, Vu.camelCase)(n, t)] = i);
  }), r;
}
E0.default = E0;
var Uu = E0;
const Gu = /* @__PURE__ */ Nl(Uu), Vl = Ul("end"), J0 = Ul("start");
function Ul(e) {
  return t;
  function t(r) {
    const n = r && r.position && r.position[e] || {};
    if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0)
      return {
        line: n.line,
        column: n.column,
        offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
      };
  }
}
function Wu(e) {
  const t = J0(e), r = Vl(e);
  if (t && r)
    return { start: t, end: r };
}
function Nr(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? na(e.position) : "start" in e || "end" in e ? na(e) : "line" in e || "column" in e ? D0(e) : "";
}
function D0(e) {
  return ia(e && e.line) + ":" + ia(e && e.column);
}
function na(e) {
  return D0(e && e.start) + "-" + D0(e && e.end);
}
function ia(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ge extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, r, n) {
    super(), typeof r == "string" && (n = r, r = void 0);
    let i = "", a = {}, l = !1;
    if (r && ("line" in r && "column" in r ? a = { place: r } : "start" in r && "end" in r ? a = { place: r } : "type" in r ? a = {
      ancestors: [r],
      place: r.position
    } : a = { ...r }), typeof t == "string" ? i = t : !a.cause && t && (l = !0, i = t.message, a.cause = t), !a.ruleId && !a.source && typeof n == "string") {
      const s = n.indexOf(":");
      s === -1 ? a.ruleId = n : (a.source = n.slice(0, s), a.ruleId = n.slice(s + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const s = a.ancestors[a.ancestors.length - 1];
      s && (a.place = s.position);
    }
    const o = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = o ? o.line : void 0, this.name = Nr(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = l && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Ge.prototype.file = "";
Ge.prototype.name = "";
Ge.prototype.reason = "";
Ge.prototype.message = "";
Ge.prototype.stack = "";
Ge.prototype.column = void 0;
Ge.prototype.line = void 0;
Ge.prototype.ancestors = void 0;
Ge.prototype.cause = void 0;
Ge.prototype.fatal = void 0;
Ge.prototype.place = void 0;
Ge.prototype.ruleId = void 0;
Ge.prototype.source = void 0;
const Z0 = {}.hasOwnProperty, Yu = /* @__PURE__ */ new Map(), Xu = /[A-Z]/g, Ku = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ju = /* @__PURE__ */ new Set(["td", "th"]), Gl = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Zu(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = t.filePath || void 0;
  let n;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    n = l1(r, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    n = a1(r, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: n,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Cn : $l,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = Wl(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function Wl(e, t, r) {
  if (t.type === "element")
    return Qu(e, t, r);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return e1(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return r1(e, t, r);
  if (t.type === "mdxjsEsm")
    return t1(e, t);
  if (t.type === "root")
    return n1(e, t, r);
  if (t.type === "text")
    return i1(e, t);
}
function Qu(e, t, r) {
  const n = e.schema;
  let i = n;
  t.tagName.toLowerCase() === "svg" && n.space === "html" && (i = Cn, e.schema = i), e.ancestors.push(t);
  const a = Xl(e, t.tagName, !1), l = o1(e, t);
  let o = ei(e, t);
  return Ku.has(t.tagName) && (o = o.filter(function(s) {
    return typeof s == "string" ? !uu(s) : !0;
  })), Yl(e, l, a, t), Q0(l, o), e.ancestors.pop(), e.schema = n, e.create(t, a, l, r);
}
function e1(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const n = t.data.estree.body[0];
    return n.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(n.expression);
  }
  qr(e, t.position);
}
function t1(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  qr(e, t.position);
}
function r1(e, t, r) {
  const n = e.schema;
  let i = n;
  t.name === "svg" && n.space === "html" && (i = Cn, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Xl(e, t.name, !0), l = s1(e, t), o = ei(e, t);
  return Yl(e, l, a, t), Q0(l, o), e.ancestors.pop(), e.schema = n, e.create(t, a, l, r);
}
function n1(e, t, r) {
  const n = {};
  return Q0(n, ei(e, t)), e.create(t, e.Fragment, n, r);
}
function i1(e, t) {
  return t.value;
}
function Yl(e, t, r, n) {
  typeof r != "string" && r !== e.Fragment && e.passNode && (t.node = n);
}
function Q0(e, t) {
  if (t.length > 0) {
    const r = t.length > 1 ? t : t[0];
    r && (e.children = r);
  }
}
function a1(e, t, r) {
  return n;
  function n(i, a, l, o) {
    const u = Array.isArray(l.children) ? r : t;
    return o ? u(a, l, o) : u(a, l);
  }
}
function l1(e, t) {
  return r;
  function r(n, i, a, l) {
    const o = Array.isArray(a.children), s = J0(n);
    return t(
      i,
      a,
      l,
      o,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function o1(e, t) {
  const r = {};
  let n, i;
  for (i in t.properties)
    if (i !== "children" && Z0.call(t.properties, i)) {
      const a = u1(e, i, t.properties[i]);
      if (a) {
        const [l, o] = a;
        e.tableCellAlignToStyle && l === "align" && typeof o == "string" && Ju.has(t.tagName) ? n = o : r[l] = o;
      }
    }
  if (n) {
    const a = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = n;
  }
  return r;
}
function s1(e, t) {
  const r = {};
  for (const n of t.attributes)
    if (n.type === "mdxJsxExpressionAttribute")
      if (n.data && n.data.estree && e.evaluater) {
        const a = n.data.estree.body[0];
        a.type;
        const l = a.expression;
        l.type;
        const o = l.properties[0];
        o.type, Object.assign(
          r,
          e.evaluater.evaluateExpression(o.argument)
        );
      } else
        qr(e, t.position);
    else {
      const i = n.name;
      let a;
      if (n.value && typeof n.value == "object")
        if (n.value.data && n.value.data.estree && e.evaluater) {
          const o = n.value.data.estree.body[0];
          o.type, a = e.evaluater.evaluateExpression(o.expression);
        } else
          qr(e, t.position);
      else
        a = n.value === null ? !0 : n.value;
      r[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return r;
}
function ei(e, t) {
  const r = [];
  let n = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Yu;
  for (; ++n < t.children.length; ) {
    const a = t.children[n];
    let l;
    if (e.passKeys) {
      const s = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        l = s + "-" + u, i.set(s, u + 1);
      }
    }
    const o = Wl(e, a, l);
    o !== void 0 && r.push(o);
  }
  return r;
}
function u1(e, t, r) {
  const n = _l(e.schema, t);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = n.commaSeparated ? iu(r) : yu(r)), n.property === "style") {
      let i = typeof r == "object" ? r : c1(e, String(r));
      return e.stylePropertyNameCase === "css" && (i = h1(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && n.space ? fu[n.property] || n.property : n.attribute,
      r
    ];
  }
}
function c1(e, t) {
  try {
    return Gu(t, { reactCompat: !0 });
  } catch (r) {
    if (e.ignoreInvalidStyle)
      return {};
    const n = (
      /** @type {Error} */
      r
    ), i = new Ge("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: n,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Gl + "#cannot-parse-style-attribute", i;
  }
}
function Xl(e, t, r) {
  let n;
  if (!r)
    n = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, l;
    for (; ++a < i.length; ) {
      const o = Wi(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: o,
        computed: !!(a && o.type === "Literal"),
        optional: !1
      } : o;
    }
    n = l;
  } else
    n = Wi(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (n.type === "Literal") {
    const i = (
      /** @type {string | number} */
      n.value
    );
    return Z0.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(n);
  qr(e);
}
function qr(e, t) {
  const r = new Ge(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = e.filePath || void 0, r.url = Gl + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function h1(e) {
  const t = {};
  let r;
  for (r in e)
    Z0.call(e, r) && (t[m1(r)] = e[r]);
  return t;
}
function m1(e) {
  let t = e.replace(Xu, f1);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function f1(e) {
  return "-" + e.toLowerCase();
}
const Gn = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, p1 = {};
function ti(e, t) {
  const r = p1, n = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, i = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return Kl(e, n, i);
}
function Kl(e, t, r) {
  if (d1(e)) {
    if ("value" in e)
      return e.type === "html" && !r ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return aa(e.children, t, r);
  }
  return Array.isArray(e) ? aa(e, t, r) : "";
}
function aa(e, t, r) {
  const n = [];
  let i = -1;
  for (; ++i < e.length; )
    n[i] = Kl(e[i], t, r);
  return n.join("");
}
function d1(e) {
  return !!(e && typeof e == "object");
}
const la = document.createElement("i");
function ri(e) {
  const t = "&" + e + ";";
  la.innerHTML = t;
  const r = la.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    r.charCodeAt(r.length - 1) === 59 && e !== "semi" || r === t ? !1 : r
  );
}
function ct(e, t, r, n) {
  const i = e.length;
  let a = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, r = r > 0 ? r : 0, n.length < 1e4)
    l = Array.from(n), l.unshift(t, r), e.splice(...l);
  else
    for (r && e.splice(t, r); a < n.length; )
      l = n.slice(a, a + 1e4), l.unshift(t, 0), e.splice(...l), a += 1e4, t += 1e4;
}
function dt(e, t) {
  return e.length > 0 ? (ct(e, e.length, 0, t), e) : t;
}
const oa = {}.hasOwnProperty;
function Jl(e) {
  const t = {};
  let r = -1;
  for (; ++r < e.length; )
    g1(t, e[r]);
  return t;
}
function g1(e, t) {
  let r;
  for (r in t) {
    const i = (oa.call(e, r) ? e[r] : void 0) || (e[r] = {}), a = t[r];
    let l;
    if (a)
      for (l in a) {
        oa.call(i, l) || (i[l] = []);
        const o = a[l];
        v1(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function v1(e, t) {
  let r = -1;
  const n = [];
  for (; ++r < t.length; )
    (t[r].add === "after" ? e : n).push(t[r]);
  ct(e, 0, 0, n);
}
function Zl(e, t) {
  const r = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    r < 9 || r === 11 || r > 13 && r < 32 || // Control character (DEL) of C0, and C1 controls.
    r > 126 && r < 160 || // Lone high surrogates and low surrogates.
    r > 55295 && r < 57344 || // Noncharacters.
    r > 64975 && r < 65008 || /* eslint-disable no-bitwise */
    (r & 65535) === 65535 || (r & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    r > 1114111 ? "�" : String.fromCodePoint(r)
  );
}
function kt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Je = Qt(/[A-Za-z]/), Ue = Qt(/[\dA-Za-z]/), y1 = Qt(/[#-'*+\--9=?A-Z^-~]/);
function vn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const I0 = Qt(/\d/), b1 = Qt(/[\dA-Fa-f]/), x1 = Qt(/[!-/:-@[-`{-~]/);
function K(e) {
  return e !== null && e < -2;
}
function xe(e) {
  return e !== null && (e < 0 || e === 32);
}
function ce(e) {
  return e === -2 || e === -1 || e === 32;
}
const zn = Qt(new RegExp("\\p{P}|\\p{S}", "u")), ur = Qt(/\s/);
function Qt(e) {
  return t;
  function t(r) {
    return r !== null && r > -1 && e.test(String.fromCharCode(r));
  }
}
function Tr(e) {
  const t = [];
  let r = -1, n = 0, i = 0;
  for (; ++r < e.length; ) {
    const a = e.charCodeAt(r);
    let l = "";
    if (a === 37 && Ue(e.charCodeAt(r + 1)) && Ue(e.charCodeAt(r + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (l = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const o = e.charCodeAt(r + 1);
      a < 56320 && o > 56319 && o < 57344 ? (l = String.fromCharCode(a, o), i = 1) : l = "�";
    } else
      l = String.fromCharCode(a);
    l && (t.push(e.slice(n, r), encodeURIComponent(l)), n = r + i + 1, l = ""), i && (r += i, i = 0);
  }
  return t.join("") + e.slice(n);
}
function ue(e, t, r, n) {
  const i = n ? n - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return l;
  function l(s) {
    return ce(s) ? (e.enter(r), o(s)) : t(s);
  }
  function o(s) {
    return ce(s) && a++ < i ? (e.consume(s), o) : (e.exit(r), t(s));
  }
}
const w1 = {
  tokenize: k1
};
function k1(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, n, i);
  let r;
  return t;
  function n(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), ue(e, t, "linePrefix");
  }
  function i(o) {
    return e.enter("paragraph"), a(o);
  }
  function a(o) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = s), r = s, l(o);
  }
  function l(o) {
    if (o === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(o);
      return;
    }
    return K(o) ? (e.consume(o), e.exit("chunkText"), a) : (e.consume(o), l);
  }
}
const S1 = {
  tokenize: T1
}, sa = {
  tokenize: A1
};
function T1(e) {
  const t = this, r = [];
  let n = 0, i, a, l;
  return o;
  function o(R) {
    if (n < r.length) {
      const $ = r[n];
      return t.containerState = $[1], e.attempt($[0].continuation, s, u)(R);
    }
    return u(R);
  }
  function s(R) {
    if (n++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && M();
      const $ = t.events.length;
      let j = $, D;
      for (; j--; )
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          D = t.events[j][1].end;
          break;
        }
      T(n);
      let W = $;
      for (; W < t.events.length; )
        t.events[W][1].end = {
          ...D
        }, W++;
      return ct(t.events, j + 1, 0, t.events.slice($)), t.events.length = W, u(R);
    }
    return o(R);
  }
  function u(R) {
    if (n === r.length) {
      if (!i)
        return d(R);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return y(R);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(sa, m, h)(R);
  }
  function m(R) {
    return i && M(), T(n), d(R);
  }
  function h(R) {
    return t.parser.lazy[t.now().line] = n !== r.length, l = t.now().offset, y(R);
  }
  function d(R) {
    return t.containerState = {}, e.attempt(sa, p, y)(R);
  }
  function p(R) {
    return n++, r.push([t.currentConstruct, t.containerState]), d(R);
  }
  function y(R) {
    if (R === null) {
      i && M(), T(0), e.consume(R);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), b(R);
  }
  function b(R) {
    if (R === null) {
      z(e.exit("chunkFlow"), !0), T(0), e.consume(R);
      return;
    }
    return K(R) ? (e.consume(R), z(e.exit("chunkFlow")), n = 0, t.interrupt = void 0, o) : (e.consume(R), b);
  }
  function z(R, $) {
    const j = t.sliceStream(R);
    if ($ && j.push(null), R.previous = a, a && (a.next = R), a = R, i.defineSkip(R.start), i.write(j), t.parser.lazy[R.start.line]) {
      let D = i.events.length;
      for (; D--; )
        if (
          // The token starts before the line ending…
          i.events[D][1].start.offset < l && // …and either is not ended yet…
          (!i.events[D][1].end || // …or ends after it.
          i.events[D][1].end.offset > l)
        )
          return;
      const W = t.events.length;
      let J = W, V, I;
      for (; J--; )
        if (t.events[J][0] === "exit" && t.events[J][1].type === "chunkFlow") {
          if (V) {
            I = t.events[J][1].end;
            break;
          }
          V = !0;
        }
      for (T(n), D = W; D < t.events.length; )
        t.events[D][1].end = {
          ...I
        }, D++;
      ct(t.events, J + 1, 0, t.events.slice(W)), t.events.length = D;
    }
  }
  function T(R) {
    let $ = r.length;
    for (; $-- > R; ) {
      const j = r[$];
      t.containerState = j[1], j[0].exit.call(t, e);
    }
    r.length = R;
  }
  function M() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function A1(e, t, r) {
  return ue(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function wr(e) {
  if (e === null || xe(e) || ur(e))
    return 1;
  if (zn(e))
    return 2;
}
function En(e, t, r) {
  const n = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !n.includes(a) && (t = a(t, r), n.push(a));
  }
  return t;
}
const R0 = {
  name: "attention",
  resolveAll: C1,
  tokenize: M1
};
function C1(e, t) {
  let r = -1, n, i, a, l, o, s, u, m;
  for (; ++r < e.length; )
    if (e[r][0] === "enter" && e[r][1].type === "attentionSequence" && e[r][1]._close) {
      for (n = r; n--; )
        if (e[n][0] === "exit" && e[n][1].type === "attentionSequence" && e[n][1]._open && // If the markers are the same:
        t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[r][1]).charCodeAt(0)) {
          if ((e[n][1]._close || e[r][1]._open) && (e[r][1].end.offset - e[r][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[r][1].end.offset - e[r][1].start.offset) % 3))
            continue;
          s = e[n][1].end.offset - e[n][1].start.offset > 1 && e[r][1].end.offset - e[r][1].start.offset > 1 ? 2 : 1;
          const h = {
            ...e[n][1].end
          }, d = {
            ...e[r][1].start
          };
          ua(h, -s), ua(d, s), l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: h,
            end: {
              ...e[n][1].end
            }
          }, o = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[r][1].start
            },
            end: d
          }, a = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[n][1].end
            },
            end: {
              ...e[r][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...o.end
            }
          }, e[n][1].end = {
            ...l.start
          }, e[r][1].start = {
            ...o.end
          }, u = [], e[n][1].end.offset - e[n][1].start.offset && (u = dt(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])), u = dt(u, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), u = dt(u, En(t.parser.constructs.insideSpan.null, e.slice(n + 1, r), t)), u = dt(u, [["exit", a, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]]), e[r][1].end.offset - e[r][1].start.offset ? (m = 2, u = dt(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])) : m = 0, ct(e, n - 1, r - n + 3, u), r = n + u.length - m - 2;
          break;
        }
    }
  for (r = -1; ++r < e.length; )
    e[r][1].type === "attentionSequence" && (e[r][1].type = "data");
  return e;
}
function M1(e, t) {
  const r = this.parser.constructs.attentionMarkers.null, n = this.previous, i = wr(n);
  let a;
  return l;
  function l(s) {
    return a = s, e.enter("attentionSequence"), o(s);
  }
  function o(s) {
    if (s === a)
      return e.consume(s), o;
    const u = e.exit("attentionSequence"), m = wr(s), h = !m || m === 2 && i || r.includes(s), d = !i || i === 2 && m || r.includes(n);
    return u._open = !!(a === 42 ? h : h && (i || !d)), u._close = !!(a === 42 ? d : d && (m || !h)), t(s);
  }
}
function ua(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const z1 = {
  name: "autolink",
  tokenize: E1
};
function E1(e, t, r) {
  let n = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(p) {
    return Je(p) ? (e.consume(p), l) : p === 64 ? r(p) : u(p);
  }
  function l(p) {
    return p === 43 || p === 45 || p === 46 || Ue(p) ? (n = 1, o(p)) : u(p);
  }
  function o(p) {
    return p === 58 ? (e.consume(p), n = 0, s) : (p === 43 || p === 45 || p === 46 || Ue(p)) && n++ < 32 ? (e.consume(p), o) : (n = 0, u(p));
  }
  function s(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || vn(p) ? r(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), m) : y1(p) ? (e.consume(p), u) : r(p);
  }
  function m(p) {
    return Ue(p) ? h(p) : r(p);
  }
  function h(p) {
    return p === 46 ? (e.consume(p), n = 0, m) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || Ue(p)) && n++ < 63) {
      const y = p === 45 ? d : h;
      return e.consume(p), y;
    }
    return r(p);
  }
}
const Vr = {
  partial: !0,
  tokenize: D1
};
function D1(e, t, r) {
  return n;
  function n(a) {
    return ce(a) ? ue(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || K(a) ? t(a) : r(a);
  }
}
const Ql = {
  continuation: {
    tokenize: R1
  },
  exit: F1,
  name: "blockQuote",
  tokenize: I1
};
function I1(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    if (l === 62) {
      const o = n.containerState;
      return o.open || (e.enter("blockQuote", {
        _container: !0
      }), o.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), a;
    }
    return r(l);
  }
  function a(l) {
    return ce(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function R1(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return ce(l) ? ue(e, a, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : a(l);
  }
  function a(l) {
    return e.attempt(Ql, t, r)(l);
  }
}
function F1(e) {
  e.exit("blockQuote");
}
const eo = {
  name: "characterEscape",
  tokenize: N1
};
function N1(e, t, r) {
  return n;
  function n(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return x1(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : r(a);
  }
}
const to = {
  name: "characterReference",
  tokenize: B1
};
function B1(e, t, r) {
  const n = this;
  let i = 0, a, l;
  return o;
  function o(h) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(h), e.exit("characterReferenceMarker"), s;
  }
  function s(h) {
    return h === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(h), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, l = Ue, m(h));
  }
  function u(h) {
    return h === 88 || h === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(h), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, l = b1, m) : (e.enter("characterReferenceValue"), a = 7, l = I0, m(h));
  }
  function m(h) {
    if (h === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return l === Ue && !ri(n.sliceSerialize(d)) ? r(h) : (e.enter("characterReferenceMarker"), e.consume(h), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(h) && i++ < a ? (e.consume(h), m) : r(h);
  }
}
const ca = {
  partial: !0,
  tokenize: O1
}, ha = {
  concrete: !0,
  name: "codeFenced",
  tokenize: P1
};
function P1(e, t, r) {
  const n = this, i = {
    partial: !0,
    tokenize: j
  };
  let a = 0, l = 0, o;
  return s;
  function s(D) {
    return u(D);
  }
  function u(D) {
    const W = n.events[n.events.length - 1];
    return a = W && W[1].type === "linePrefix" ? W[2].sliceSerialize(W[1], !0).length : 0, o = D, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), m(D);
  }
  function m(D) {
    return D === o ? (l++, e.consume(D), m) : l < 3 ? r(D) : (e.exit("codeFencedFenceSequence"), ce(D) ? ue(e, h, "whitespace")(D) : h(D));
  }
  function h(D) {
    return D === null || K(D) ? (e.exit("codeFencedFence"), n.interrupt ? t(D) : e.check(ca, b, $)(D)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(D));
  }
  function d(D) {
    return D === null || K(D) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), h(D)) : ce(D) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ue(e, p, "whitespace")(D)) : D === 96 && D === o ? r(D) : (e.consume(D), d);
  }
  function p(D) {
    return D === null || K(D) ? h(D) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(D));
  }
  function y(D) {
    return D === null || K(D) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), h(D)) : D === 96 && D === o ? r(D) : (e.consume(D), y);
  }
  function b(D) {
    return e.attempt(i, $, z)(D);
  }
  function z(D) {
    return e.enter("lineEnding"), e.consume(D), e.exit("lineEnding"), T;
  }
  function T(D) {
    return a > 0 && ce(D) ? ue(e, M, "linePrefix", a + 1)(D) : M(D);
  }
  function M(D) {
    return D === null || K(D) ? e.check(ca, b, $)(D) : (e.enter("codeFlowValue"), R(D));
  }
  function R(D) {
    return D === null || K(D) ? (e.exit("codeFlowValue"), M(D)) : (e.consume(D), R);
  }
  function $(D) {
    return e.exit("codeFenced"), t(D);
  }
  function j(D, W, J) {
    let V = 0;
    return I;
    function I(ee) {
      return D.enter("lineEnding"), D.consume(ee), D.exit("lineEnding"), U;
    }
    function U(ee) {
      return D.enter("codeFencedFence"), ce(ee) ? ue(D, _, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ee) : _(ee);
    }
    function _(ee) {
      return ee === o ? (D.enter("codeFencedFenceSequence"), ae(ee)) : J(ee);
    }
    function ae(ee) {
      return ee === o ? (V++, D.consume(ee), ae) : V >= l ? (D.exit("codeFencedFenceSequence"), ce(ee) ? ue(D, re, "whitespace")(ee) : re(ee)) : J(ee);
    }
    function re(ee) {
      return ee === null || K(ee) ? (D.exit("codeFencedFence"), W(ee)) : J(ee);
    }
  }
}
function O1(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return l === null ? r(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a);
  }
  function a(l) {
    return n.parser.lazy[n.now().line] ? r(l) : t(l);
  }
}
const Wn = {
  name: "codeIndented",
  tokenize: q1
}, L1 = {
  partial: !0,
  tokenize: H1
};
function q1(e, t, r) {
  const n = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), ue(e, a, "linePrefix", 5)(u);
  }
  function a(u) {
    const m = n.events[n.events.length - 1];
    return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? l(u) : r(u);
  }
  function l(u) {
    return u === null ? s(u) : K(u) ? e.attempt(L1, l, s)(u) : (e.enter("codeFlowValue"), o(u));
  }
  function o(u) {
    return u === null || K(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), o);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function H1(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return n.parser.lazy[n.now().line] ? r(l) : K(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : ue(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const o = n.events[n.events.length - 1];
    return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(l) : K(l) ? i(l) : r(l);
  }
}
const j1 = {
  name: "codeText",
  previous: $1,
  resolve: _1,
  tokenize: V1
};
function _1(e) {
  let t = e.length - 4, r = 3, n, i;
  if ((e[r][1].type === "lineEnding" || e[r][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (n = r; ++n < t; )
      if (e[n][1].type === "codeTextData") {
        e[r][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", r += 2, t -= 2;
        break;
      }
  }
  for (n = r - 1, t++; ++n <= t; )
    i === void 0 ? n !== t && e[n][1].type !== "lineEnding" && (i = n) : (n === t || e[n][1].type === "lineEnding") && (e[i][1].type = "codeTextData", n !== i + 2 && (e[i][1].end = e[n - 1][1].end, e.splice(i + 2, n - i - 2), t -= n - i - 2, n = i + 2), i = void 0);
  return e;
}
function $1(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function V1(e, t, r) {
  let n = 0, i, a;
  return l;
  function l(h) {
    return e.enter("codeText"), e.enter("codeTextSequence"), o(h);
  }
  function o(h) {
    return h === 96 ? (e.consume(h), n++, o) : (e.exit("codeTextSequence"), s(h));
  }
  function s(h) {
    return h === null ? r(h) : h === 32 ? (e.enter("space"), e.consume(h), e.exit("space"), s) : h === 96 ? (a = e.enter("codeTextSequence"), i = 0, m(h)) : K(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(h));
  }
  function u(h) {
    return h === null || h === 32 || h === 96 || K(h) ? (e.exit("codeTextData"), s(h)) : (e.consume(h), u);
  }
  function m(h) {
    return h === 96 ? (e.consume(h), i++, m) : i === n ? (e.exit("codeTextSequence"), e.exit("codeText"), t(h)) : (a.type = "codeTextData", u(h));
  }
}
class U1 {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, r) {
    const n = r ?? Number.POSITIVE_INFINITY;
    return n < this.left.length ? this.left.slice(t, n) : t > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, r, n) {
    const i = r || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return n && Ir(this.left, n), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), Ir(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), Ir(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const r = this.left.splice(t, Number.POSITIVE_INFINITY);
        Ir(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Ir(this.left, r.reverse());
      }
  }
}
function Ir(e, t) {
  let r = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; r < t.length; )
      e.push(...t.slice(r, r + 1e4)), r += 1e4;
}
function ro(e) {
  const t = {};
  let r = -1, n, i, a, l, o, s, u;
  const m = new U1(e);
  for (; ++r < m.length; ) {
    for (; r in t; )
      r = t[r];
    if (n = m.get(r), r && n[1].type === "chunkFlow" && m.get(r - 1)[1].type === "listItemPrefix" && (s = n[1]._tokenizer.events, a = 0, a < s.length && s[a][1].type === "lineEndingBlank" && (a += 2), a < s.length && s[a][1].type === "content"))
      for (; ++a < s.length && s[a][1].type !== "content"; )
        s[a][1].type === "chunkText" && (s[a][1]._isInFirstContentOfListItem = !0, a++);
    if (n[0] === "enter")
      n[1].contentType && (Object.assign(t, G1(m, r)), r = t[r], u = !0);
    else if (n[1]._container) {
      for (a = r, i = void 0; a--; )
        if (l = m.get(a), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (m.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = a);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (n[1].end = {
        ...m.get(i)[1].start
      }, o = m.slice(i, r), o.unshift(n), m.splice(i, r - i + 1, o));
    }
  }
  return ct(e, 0, Number.POSITIVE_INFINITY, m.slice(0)), !u;
}
function G1(e, t) {
  const r = e.get(t)[1], n = e.get(t)[2];
  let i = t - 1;
  const a = [];
  let l = r._tokenizer;
  l || (l = n.parser[r.contentType](r.start), r._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const o = l.events, s = [], u = {};
  let m, h, d = -1, p = r, y = 0, b = 0;
  const z = [b];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    a.push(i), p._tokenizer || (m = n.sliceStream(p), p.next || m.push(null), h && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(m), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), h = p, p = p.next;
  }
  for (p = r; ++d < o.length; )
    // Find a void token that includes a break.
    o[d][0] === "exit" && o[d - 1][0] === "enter" && o[d][1].type === o[d - 1][1].type && o[d][1].start.line !== o[d][1].end.line && (b = d + 1, z.push(b), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : z.pop(), d = z.length; d--; ) {
    const T = o.slice(z[d], z[d + 1]), M = a.pop();
    s.push([M, M + T.length - 1]), e.splice(M, 2, T);
  }
  for (s.reverse(), d = -1; ++d < s.length; )
    u[y + s[d][0]] = y + s[d][1], y += s[d][1] - s[d][0] - 1;
  return u;
}
const W1 = {
  resolve: X1,
  tokenize: K1
}, Y1 = {
  partial: !0,
  tokenize: J1
};
function X1(e) {
  return ro(e), e;
}
function K1(e, t) {
  let r;
  return n;
  function n(o) {
    return e.enter("content"), r = e.enter("chunkContent", {
      contentType: "content"
    }), i(o);
  }
  function i(o) {
    return o === null ? a(o) : K(o) ? e.check(Y1, l, a)(o) : (e.consume(o), i);
  }
  function a(o) {
    return e.exit("chunkContent"), e.exit("content"), t(o);
  }
  function l(o) {
    return e.consume(o), e.exit("chunkContent"), r.next = e.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, i;
  }
}
function J1(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ue(e, a, "linePrefix");
  }
  function a(l) {
    if (l === null || K(l))
      return r(l);
    const o = n.events[n.events.length - 1];
    return !n.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(l) : e.interrupt(n.parser.constructs.flow, r, t)(l);
  }
}
function no(e, t, r, n, i, a, l, o, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let m = 0;
  return h;
  function h(T) {
    return T === 60 ? (e.enter(n), e.enter(i), e.enter(a), e.consume(T), e.exit(a), d) : T === null || T === 32 || T === 41 || vn(T) ? r(T) : (e.enter(n), e.enter(l), e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), b(T));
  }
  function d(T) {
    return T === 62 ? (e.enter(a), e.consume(T), e.exit(a), e.exit(i), e.exit(n), t) : (e.enter(o), e.enter("chunkString", {
      contentType: "string"
    }), p(T));
  }
  function p(T) {
    return T === 62 ? (e.exit("chunkString"), e.exit(o), d(T)) : T === null || T === 60 || K(T) ? r(T) : (e.consume(T), T === 92 ? y : p);
  }
  function y(T) {
    return T === 60 || T === 62 || T === 92 ? (e.consume(T), p) : p(T);
  }
  function b(T) {
    return !m && (T === null || T === 41 || xe(T)) ? (e.exit("chunkString"), e.exit(o), e.exit(l), e.exit(n), t(T)) : m < u && T === 40 ? (e.consume(T), m++, b) : T === 41 ? (e.consume(T), m--, b) : T === null || T === 32 || T === 40 || vn(T) ? r(T) : (e.consume(T), T === 92 ? z : b);
  }
  function z(T) {
    return T === 40 || T === 41 || T === 92 ? (e.consume(T), b) : b(T);
  }
}
function io(e, t, r, n, i, a) {
  const l = this;
  let o = 0, s;
  return u;
  function u(p) {
    return e.enter(n), e.enter(i), e.consume(p), e.exit(i), e.enter(a), m;
  }
  function m(p) {
    return o > 999 || p === null || p === 91 || p === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !o && "_hiddenFootnoteSupport" in l.parser.constructs ? r(p) : p === 93 ? (e.exit(a), e.enter(i), e.consume(p), e.exit(i), e.exit(n), t) : K(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), m) : (e.enter("chunkString", {
      contentType: "string"
    }), h(p));
  }
  function h(p) {
    return p === null || p === 91 || p === 93 || K(p) || o++ > 999 ? (e.exit("chunkString"), m(p)) : (e.consume(p), s || (s = !ce(p)), p === 92 ? d : h);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), o++, h) : h(p);
  }
}
function ao(e, t, r, n, i, a) {
  let l;
  return o;
  function o(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(n), e.enter(i), e.consume(d), e.exit(i), l = d === 40 ? 41 : d, s) : r(d);
  }
  function s(d) {
    return d === l ? (e.enter(i), e.consume(d), e.exit(i), e.exit(n), t) : (e.enter(a), u(d));
  }
  function u(d) {
    return d === l ? (e.exit(a), s(l)) : d === null ? r(d) : K(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ue(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), m(d));
  }
  function m(d) {
    return d === l || d === null || K(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? h : m);
  }
  function h(d) {
    return d === l || d === 92 ? (e.consume(d), m) : m(d);
  }
}
function Br(e, t) {
  let r;
  return n;
  function n(i) {
    return K(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), r = !0, n) : ce(i) ? ue(e, n, r ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Z1 = {
  name: "definition",
  tokenize: ec
}, Q1 = {
  partial: !0,
  tokenize: tc
};
function ec(e, t, r) {
  const n = this;
  let i;
  return a;
  function a(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return io.call(
      n,
      e,
      o,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function o(p) {
    return i = kt(n.sliceSerialize(n.events[n.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : r(p);
  }
  function s(p) {
    return xe(p) ? Br(e, u)(p) : u(p);
  }
  function u(p) {
    return no(
      e,
      m,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function m(p) {
    return e.attempt(Q1, h, h)(p);
  }
  function h(p) {
    return ce(p) ? ue(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || K(p) ? (e.exit("definition"), n.parser.defined.push(i), t(p)) : r(p);
  }
}
function tc(e, t, r) {
  return n;
  function n(o) {
    return xe(o) ? Br(e, i)(o) : r(o);
  }
  function i(o) {
    return ao(e, a, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(o);
  }
  function a(o) {
    return ce(o) ? ue(e, l, "whitespace")(o) : l(o);
  }
  function l(o) {
    return o === null || K(o) ? t(o) : r(o);
  }
}
const rc = {
  name: "hardBreakEscape",
  tokenize: nc
};
function nc(e, t, r) {
  return n;
  function n(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return K(a) ? (e.exit("hardBreakEscape"), t(a)) : r(a);
  }
}
const ic = {
  name: "headingAtx",
  resolve: ac,
  tokenize: lc
};
function ac(e, t) {
  let r = e.length - 2, n = 3, i, a;
  return e[n][1].type === "whitespace" && (n += 2), r - 2 > n && e[r][1].type === "whitespace" && (r -= 2), e[r][1].type === "atxHeadingSequence" && (n === r - 1 || r - 4 > n && e[r - 2][1].type === "whitespace") && (r -= n + 1 === r ? 2 : 4), r > n && (i = {
    type: "atxHeadingText",
    start: e[n][1].start,
    end: e[r][1].end
  }, a = {
    type: "chunkText",
    start: e[n][1].start,
    end: e[r][1].end,
    contentType: "text"
  }, ct(e, n, r - n + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function lc(e, t, r) {
  let n = 0;
  return i;
  function i(m) {
    return e.enter("atxHeading"), a(m);
  }
  function a(m) {
    return e.enter("atxHeadingSequence"), l(m);
  }
  function l(m) {
    return m === 35 && n++ < 6 ? (e.consume(m), l) : m === null || xe(m) ? (e.exit("atxHeadingSequence"), o(m)) : r(m);
  }
  function o(m) {
    return m === 35 ? (e.enter("atxHeadingSequence"), s(m)) : m === null || K(m) ? (e.exit("atxHeading"), t(m)) : ce(m) ? ue(e, o, "whitespace")(m) : (e.enter("atxHeadingText"), u(m));
  }
  function s(m) {
    return m === 35 ? (e.consume(m), s) : (e.exit("atxHeadingSequence"), o(m));
  }
  function u(m) {
    return m === null || m === 35 || xe(m) ? (e.exit("atxHeadingText"), o(m)) : (e.consume(m), u);
  }
}
const oc = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], ma = ["pre", "script", "style", "textarea"], sc = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: hc,
  tokenize: mc
}, uc = {
  partial: !0,
  tokenize: pc
}, cc = {
  partial: !0,
  tokenize: fc
};
function hc(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function mc(e, t, r) {
  const n = this;
  let i, a, l, o, s;
  return u;
  function u(A) {
    return m(A);
  }
  function m(A) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(A), h;
  }
  function h(A) {
    return A === 33 ? (e.consume(A), d) : A === 47 ? (e.consume(A), a = !0, b) : A === 63 ? (e.consume(A), i = 3, n.interrupt ? t : S) : Je(A) ? (e.consume(A), l = String.fromCharCode(A), z) : r(A);
  }
  function d(A) {
    return A === 45 ? (e.consume(A), i = 2, p) : A === 91 ? (e.consume(A), i = 5, o = 0, y) : Je(A) ? (e.consume(A), i = 4, n.interrupt ? t : S) : r(A);
  }
  function p(A) {
    return A === 45 ? (e.consume(A), n.interrupt ? t : S) : r(A);
  }
  function y(A) {
    const He = "CDATA[";
    return A === He.charCodeAt(o++) ? (e.consume(A), o === He.length ? n.interrupt ? t : _ : y) : r(A);
  }
  function b(A) {
    return Je(A) ? (e.consume(A), l = String.fromCharCode(A), z) : r(A);
  }
  function z(A) {
    if (A === null || A === 47 || A === 62 || xe(A)) {
      const He = A === 47, _e = l.toLowerCase();
      return !He && !a && ma.includes(_e) ? (i = 1, n.interrupt ? t(A) : _(A)) : oc.includes(l.toLowerCase()) ? (i = 6, He ? (e.consume(A), T) : n.interrupt ? t(A) : _(A)) : (i = 7, n.interrupt && !n.parser.lazy[n.now().line] ? r(A) : a ? M(A) : R(A));
    }
    return A === 45 || Ue(A) ? (e.consume(A), l += String.fromCharCode(A), z) : r(A);
  }
  function T(A) {
    return A === 62 ? (e.consume(A), n.interrupt ? t : _) : r(A);
  }
  function M(A) {
    return ce(A) ? (e.consume(A), M) : I(A);
  }
  function R(A) {
    return A === 47 ? (e.consume(A), I) : A === 58 || A === 95 || Je(A) ? (e.consume(A), $) : ce(A) ? (e.consume(A), R) : I(A);
  }
  function $(A) {
    return A === 45 || A === 46 || A === 58 || A === 95 || Ue(A) ? (e.consume(A), $) : j(A);
  }
  function j(A) {
    return A === 61 ? (e.consume(A), D) : ce(A) ? (e.consume(A), j) : R(A);
  }
  function D(A) {
    return A === null || A === 60 || A === 61 || A === 62 || A === 96 ? r(A) : A === 34 || A === 39 ? (e.consume(A), s = A, W) : ce(A) ? (e.consume(A), D) : J(A);
  }
  function W(A) {
    return A === s ? (e.consume(A), s = null, V) : A === null || K(A) ? r(A) : (e.consume(A), W);
  }
  function J(A) {
    return A === null || A === 34 || A === 39 || A === 47 || A === 60 || A === 61 || A === 62 || A === 96 || xe(A) ? j(A) : (e.consume(A), J);
  }
  function V(A) {
    return A === 47 || A === 62 || ce(A) ? R(A) : r(A);
  }
  function I(A) {
    return A === 62 ? (e.consume(A), U) : r(A);
  }
  function U(A) {
    return A === null || K(A) ? _(A) : ce(A) ? (e.consume(A), U) : r(A);
  }
  function _(A) {
    return A === 45 && i === 2 ? (e.consume(A), ve) : A === 60 && i === 1 ? (e.consume(A), ye) : A === 62 && i === 4 ? (e.consume(A), ze) : A === 63 && i === 3 ? (e.consume(A), S) : A === 93 && i === 5 ? (e.consume(A), je) : K(A) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(uc, Ae, ae)(A)) : A === null || K(A) ? (e.exit("htmlFlowData"), ae(A)) : (e.consume(A), _);
  }
  function ae(A) {
    return e.check(cc, re, Ae)(A);
  }
  function re(A) {
    return e.enter("lineEnding"), e.consume(A), e.exit("lineEnding"), ee;
  }
  function ee(A) {
    return A === null || K(A) ? ae(A) : (e.enter("htmlFlowData"), _(A));
  }
  function ve(A) {
    return A === 45 ? (e.consume(A), S) : _(A);
  }
  function ye(A) {
    return A === 47 ? (e.consume(A), l = "", Re) : _(A);
  }
  function Re(A) {
    if (A === 62) {
      const He = l.toLowerCase();
      return ma.includes(He) ? (e.consume(A), ze) : _(A);
    }
    return Je(A) && l.length < 8 ? (e.consume(A), l += String.fromCharCode(A), Re) : _(A);
  }
  function je(A) {
    return A === 93 ? (e.consume(A), S) : _(A);
  }
  function S(A) {
    return A === 62 ? (e.consume(A), ze) : A === 45 && i === 2 ? (e.consume(A), S) : _(A);
  }
  function ze(A) {
    return A === null || K(A) ? (e.exit("htmlFlowData"), Ae(A)) : (e.consume(A), ze);
  }
  function Ae(A) {
    return e.exit("htmlFlow"), t(A);
  }
}
function fc(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return K(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a) : r(l);
  }
  function a(l) {
    return n.parser.lazy[n.now().line] ? r(l) : t(l);
  }
}
function pc(e, t, r) {
  return n;
  function n(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Vr, t, r);
  }
}
const dc = {
  name: "htmlText",
  tokenize: gc
};
function gc(e, t, r) {
  const n = this;
  let i, a, l;
  return o;
  function o(S) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(S), s;
  }
  function s(S) {
    return S === 33 ? (e.consume(S), u) : S === 47 ? (e.consume(S), j) : S === 63 ? (e.consume(S), R) : Je(S) ? (e.consume(S), J) : r(S);
  }
  function u(S) {
    return S === 45 ? (e.consume(S), m) : S === 91 ? (e.consume(S), a = 0, y) : Je(S) ? (e.consume(S), M) : r(S);
  }
  function m(S) {
    return S === 45 ? (e.consume(S), p) : r(S);
  }
  function h(S) {
    return S === null ? r(S) : S === 45 ? (e.consume(S), d) : K(S) ? (l = h, ye(S)) : (e.consume(S), h);
  }
  function d(S) {
    return S === 45 ? (e.consume(S), p) : h(S);
  }
  function p(S) {
    return S === 62 ? ve(S) : S === 45 ? d(S) : h(S);
  }
  function y(S) {
    const ze = "CDATA[";
    return S === ze.charCodeAt(a++) ? (e.consume(S), a === ze.length ? b : y) : r(S);
  }
  function b(S) {
    return S === null ? r(S) : S === 93 ? (e.consume(S), z) : K(S) ? (l = b, ye(S)) : (e.consume(S), b);
  }
  function z(S) {
    return S === 93 ? (e.consume(S), T) : b(S);
  }
  function T(S) {
    return S === 62 ? ve(S) : S === 93 ? (e.consume(S), T) : b(S);
  }
  function M(S) {
    return S === null || S === 62 ? ve(S) : K(S) ? (l = M, ye(S)) : (e.consume(S), M);
  }
  function R(S) {
    return S === null ? r(S) : S === 63 ? (e.consume(S), $) : K(S) ? (l = R, ye(S)) : (e.consume(S), R);
  }
  function $(S) {
    return S === 62 ? ve(S) : R(S);
  }
  function j(S) {
    return Je(S) ? (e.consume(S), D) : r(S);
  }
  function D(S) {
    return S === 45 || Ue(S) ? (e.consume(S), D) : W(S);
  }
  function W(S) {
    return K(S) ? (l = W, ye(S)) : ce(S) ? (e.consume(S), W) : ve(S);
  }
  function J(S) {
    return S === 45 || Ue(S) ? (e.consume(S), J) : S === 47 || S === 62 || xe(S) ? V(S) : r(S);
  }
  function V(S) {
    return S === 47 ? (e.consume(S), ve) : S === 58 || S === 95 || Je(S) ? (e.consume(S), I) : K(S) ? (l = V, ye(S)) : ce(S) ? (e.consume(S), V) : ve(S);
  }
  function I(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || Ue(S) ? (e.consume(S), I) : U(S);
  }
  function U(S) {
    return S === 61 ? (e.consume(S), _) : K(S) ? (l = U, ye(S)) : ce(S) ? (e.consume(S), U) : V(S);
  }
  function _(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? r(S) : S === 34 || S === 39 ? (e.consume(S), i = S, ae) : K(S) ? (l = _, ye(S)) : ce(S) ? (e.consume(S), _) : (e.consume(S), re);
  }
  function ae(S) {
    return S === i ? (e.consume(S), i = void 0, ee) : S === null ? r(S) : K(S) ? (l = ae, ye(S)) : (e.consume(S), ae);
  }
  function re(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96 ? r(S) : S === 47 || S === 62 || xe(S) ? V(S) : (e.consume(S), re);
  }
  function ee(S) {
    return S === 47 || S === 62 || xe(S) ? V(S) : r(S);
  }
  function ve(S) {
    return S === 62 ? (e.consume(S), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(S);
  }
  function ye(S) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), Re;
  }
  function Re(S) {
    return ce(S) ? ue(e, je, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : je(S);
  }
  function je(S) {
    return e.enter("htmlTextData"), l(S);
  }
}
const ni = {
  name: "labelEnd",
  resolveAll: xc,
  resolveTo: wc,
  tokenize: kc
}, vc = {
  tokenize: Sc
}, yc = {
  tokenize: Tc
}, bc = {
  tokenize: Ac
};
function xc(e) {
  let t = -1;
  const r = [];
  for (; ++t < e.length; ) {
    const n = e[t][1];
    if (r.push(e[t]), n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") {
      const i = n.type === "labelImage" ? 4 : 2;
      n.type = "data", t += i;
    }
  }
  return e.length !== r.length && ct(e, 0, e.length, r), e;
}
function wc(e, t) {
  let r = e.length, n = 0, i, a, l, o;
  for (; r--; )
    if (i = e[r][1], a) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[r][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[r][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = r, i.type !== "labelLink")) {
        n = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = r);
  const s = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, m = {
    type: "labelText",
    start: {
      ...e[a + n + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return o = [["enter", s, t], ["enter", u, t]], o = dt(o, e.slice(a + 1, a + n + 3)), o = dt(o, [["enter", m, t]]), o = dt(o, En(t.parser.constructs.insideSpan.null, e.slice(a + n + 4, l - 3), t)), o = dt(o, [["exit", m, t], e[l - 2], e[l - 1], ["exit", u, t]]), o = dt(o, e.slice(l + 1)), o = dt(o, [["exit", s, t]]), ct(e, a, e.length, o), e;
}
function kc(e, t, r) {
  const n = this;
  let i = n.events.length, a, l;
  for (; i--; )
    if ((n.events[i][1].type === "labelImage" || n.events[i][1].type === "labelLink") && !n.events[i][1]._balanced) {
      a = n.events[i][1];
      break;
    }
  return o;
  function o(d) {
    return a ? a._inactive ? h(d) : (l = n.parser.defined.includes(kt(n.sliceSerialize({
      start: a.end,
      end: n.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), s) : r(d);
  }
  function s(d) {
    return d === 40 ? e.attempt(vc, m, l ? m : h)(d) : d === 91 ? e.attempt(yc, m, l ? u : h)(d) : l ? m(d) : h(d);
  }
  function u(d) {
    return e.attempt(bc, m, h)(d);
  }
  function m(d) {
    return t(d);
  }
  function h(d) {
    return a._balanced = !0, r(d);
  }
}
function Sc(e, t, r) {
  return n;
  function n(h) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(h), e.exit("resourceMarker"), i;
  }
  function i(h) {
    return xe(h) ? Br(e, a)(h) : a(h);
  }
  function a(h) {
    return h === 41 ? m(h) : no(e, l, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(h);
  }
  function l(h) {
    return xe(h) ? Br(e, s)(h) : m(h);
  }
  function o(h) {
    return r(h);
  }
  function s(h) {
    return h === 34 || h === 39 || h === 40 ? ao(e, u, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(h) : m(h);
  }
  function u(h) {
    return xe(h) ? Br(e, m)(h) : m(h);
  }
  function m(h) {
    return h === 41 ? (e.enter("resourceMarker"), e.consume(h), e.exit("resourceMarker"), e.exit("resource"), t) : r(h);
  }
}
function Tc(e, t, r) {
  const n = this;
  return i;
  function i(o) {
    return io.call(n, e, a, l, "reference", "referenceMarker", "referenceString")(o);
  }
  function a(o) {
    return n.parser.defined.includes(kt(n.sliceSerialize(n.events[n.events.length - 1][1]).slice(1, -1))) ? t(o) : r(o);
  }
  function l(o) {
    return r(o);
  }
}
function Ac(e, t, r) {
  return n;
  function n(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : r(a);
  }
}
const Cc = {
  name: "labelStartImage",
  resolveAll: ni.resolveAll,
  tokenize: Mc
};
function Mc(e, t, r) {
  const n = this;
  return i;
  function i(o) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(o), e.exit("labelImageMarker"), a;
  }
  function a(o) {
    return o === 91 ? (e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelImage"), l) : r(o);
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in n.parser.constructs ? r(o) : t(o);
  }
}
const zc = {
  name: "labelStartLink",
  resolveAll: ni.resolveAll,
  tokenize: Ec
};
function Ec(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in n.parser.constructs ? r(l) : t(l);
  }
}
const Yn = {
  name: "lineEnding",
  tokenize: Dc
};
function Dc(e, t) {
  return r;
  function r(n) {
    return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), ue(e, t, "linePrefix");
  }
}
const mn = {
  name: "thematicBreak",
  tokenize: Ic
};
function Ic(e, t, r) {
  let n = 0, i;
  return a;
  function a(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, o(u);
  }
  function o(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : n >= 3 && (u === null || K(u)) ? (e.exit("thematicBreak"), t(u)) : r(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), n++, s) : (e.exit("thematicBreakSequence"), ce(u) ? ue(e, o, "whitespace")(u) : o(u));
  }
}
const tt = {
  continuation: {
    tokenize: Bc
  },
  exit: Oc,
  name: "list",
  tokenize: Nc
}, Rc = {
  partial: !0,
  tokenize: Lc
}, Fc = {
  partial: !0,
  tokenize: Pc
};
function Nc(e, t, r) {
  const n = this, i = n.events[n.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return o;
  function o(p) {
    const y = n.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !n.containerState.marker || p === n.containerState.marker : I0(p)) {
      if (n.containerState.type || (n.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(mn, r, u)(p) : u(p);
      if (!n.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return r(p);
  }
  function s(p) {
    return I0(p) && ++l < 10 ? (e.consume(p), s) : (!n.interrupt || l < 2) && (n.containerState.marker ? p === n.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : r(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), n.containerState.marker = n.containerState.marker || p, e.check(
      Vr,
      // Can’t be empty when interrupting.
      n.interrupt ? r : m,
      e.attempt(Rc, d, h)
    );
  }
  function m(p) {
    return n.containerState.initialBlankLine = !0, a++, d(p);
  }
  function h(p) {
    return ce(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : r(p);
  }
  function d(p) {
    return n.containerState.size = a + n.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Bc(e, t, r) {
  const n = this;
  return n.containerState._closeFlow = void 0, e.check(Vr, i, a);
  function i(o) {
    return n.containerState.furtherBlankLines = n.containerState.furtherBlankLines || n.containerState.initialBlankLine, ue(e, t, "listItemIndent", n.containerState.size + 1)(o);
  }
  function a(o) {
    return n.containerState.furtherBlankLines || !ce(o) ? (n.containerState.furtherBlankLines = void 0, n.containerState.initialBlankLine = void 0, l(o)) : (n.containerState.furtherBlankLines = void 0, n.containerState.initialBlankLine = void 0, e.attempt(Fc, t, l)(o));
  }
  function l(o) {
    return n.containerState._closeFlow = !0, n.interrupt = void 0, ue(e, e.attempt(tt, t, r), "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o);
  }
}
function Pc(e, t, r) {
  const n = this;
  return ue(e, i, "listItemIndent", n.containerState.size + 1);
  function i(a) {
    const l = n.events[n.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === n.containerState.size ? t(a) : r(a);
  }
}
function Oc(e) {
  e.exit(this.containerState.type);
}
function Lc(e, t, r) {
  const n = this;
  return ue(e, i, "listItemPrefixWhitespace", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const l = n.events[n.events.length - 1];
    return !ce(a) && l && l[1].type === "listItemPrefixWhitespace" ? t(a) : r(a);
  }
}
const fa = {
  name: "setextUnderline",
  resolveTo: qc,
  tokenize: Hc
};
function qc(e, t) {
  let r = e.length, n, i, a;
  for (; r--; )
    if (e[r][0] === "enter") {
      if (e[r][1].type === "content") {
        n = r;
        break;
      }
      e[r][1].type === "paragraph" && (i = r);
    } else
      e[r][1].type === "content" && e.splice(r, 1), !a && e[r][1].type === "definition" && (a = r);
  const l = {
    type: "setextHeading",
    start: {
      ...e[n][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", l, t]), e.splice(a + 1, 0, ["exit", e[n][1], t]), e[n][1].end = {
    ...e[a][1].end
  }) : e[n][1] = l, e.push(["exit", l, t]), e;
}
function Hc(e, t, r) {
  const n = this;
  let i;
  return a;
  function a(u) {
    let m = n.events.length, h;
    for (; m--; )
      if (n.events[m][1].type !== "lineEnding" && n.events[m][1].type !== "linePrefix" && n.events[m][1].type !== "content") {
        h = n.events[m][1].type === "paragraph";
        break;
      }
    return !n.parser.lazy[n.now().line] && (n.interrupt || h) ? (e.enter("setextHeadingLine"), i = u, l(u)) : r(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), o(u);
  }
  function o(u) {
    return u === i ? (e.consume(u), o) : (e.exit("setextHeadingLineSequence"), ce(u) ? ue(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || K(u) ? (e.exit("setextHeadingLine"), t(u)) : r(u);
  }
}
const jc = {
  tokenize: _c
};
function _c(e) {
  const t = this, r = e.attempt(
    // Try to parse a blank line.
    Vr,
    n,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ue(e, e.attempt(this.parser.constructs.flow, i, e.attempt(W1, i)), "linePrefix"))
  );
  return r;
  function n(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, r;
  }
  function i(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, r;
  }
}
const $c = {
  resolveAll: oo()
}, Vc = lo("string"), Uc = lo("text");
function lo(e) {
  return {
    resolveAll: oo(e === "text" ? Gc : void 0),
    tokenize: t
  };
  function t(r) {
    const n = this, i = this.parser.constructs[e], a = r.attempt(i, l, o);
    return l;
    function l(m) {
      return u(m) ? a(m) : o(m);
    }
    function o(m) {
      if (m === null) {
        r.consume(m);
        return;
      }
      return r.enter("data"), r.consume(m), s;
    }
    function s(m) {
      return u(m) ? (r.exit("data"), a(m)) : (r.consume(m), s);
    }
    function u(m) {
      if (m === null)
        return !0;
      const h = i[m];
      let d = -1;
      if (h)
        for (; ++d < h.length; ) {
          const p = h[d];
          if (!p.previous || p.previous.call(n, n.previous))
            return !0;
        }
      return !1;
    }
  }
}
function oo(e) {
  return t;
  function t(r, n) {
    let i = -1, a;
    for (; ++i <= r.length; )
      a === void 0 ? r[i] && r[i][1].type === "data" && (a = i, i++) : (!r[i] || r[i][1].type !== "data") && (i !== a + 2 && (r[a][1].end = r[i - 1][1].end, r.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(r, n) : r;
  }
}
function Gc(e, t) {
  let r = 0;
  for (; ++r <= e.length; )
    if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
      const n = e[r - 1][1], i = t.sliceStream(n);
      let a = i.length, l = -1, o = 0, s;
      for (; a--; ) {
        const u = i[a];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            o++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2)
          s = !0, o++;
        else if (u !== -1) {
          a++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && r === e.length && (o = 0), o) {
        const u = {
          type: r === e.length || s || o < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? l : n.start._bufferIndex + l,
            _index: n.start._index + a,
            line: n.end.line,
            column: n.end.column - o,
            offset: n.end.offset - o
          },
          end: {
            ...n.end
          }
        };
        n.end = {
          ...u.start
        }, n.start.offset === n.end.offset ? Object.assign(n, u) : (e.splice(r, 0, ["enter", u, t], ["exit", u, t]), r += 2);
      }
      r++;
    }
  return e;
}
const Wc = {
  42: tt,
  43: tt,
  45: tt,
  48: tt,
  49: tt,
  50: tt,
  51: tt,
  52: tt,
  53: tt,
  54: tt,
  55: tt,
  56: tt,
  57: tt,
  62: Ql
}, Yc = {
  91: Z1
}, Xc = {
  [-2]: Wn,
  [-1]: Wn,
  32: Wn
}, Kc = {
  35: ic,
  42: mn,
  45: [fa, mn],
  60: sc,
  61: fa,
  95: mn,
  96: ha,
  126: ha
}, Jc = {
  38: to,
  92: eo
}, Zc = {
  [-5]: Yn,
  [-4]: Yn,
  [-3]: Yn,
  33: Cc,
  38: to,
  42: R0,
  60: [z1, dc],
  91: zc,
  92: [rc, eo],
  93: ni,
  95: R0,
  96: j1
}, Qc = {
  null: [R0, $c]
}, eh = {
  null: [42, 95]
}, th = {
  null: []
}, rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: eh,
  contentInitial: Yc,
  disable: th,
  document: Wc,
  flow: Kc,
  flowInitial: Xc,
  insideSpan: Qc,
  string: Jc,
  text: Zc
}, Symbol.toStringTag, { value: "Module" }));
function nh(e, t, r) {
  let n = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const i = {}, a = [];
  let l = [], o = [];
  const s = {
    attempt: W(j),
    check: W(D),
    consume: M,
    enter: R,
    exit: $,
    interrupt: W(D, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: b,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: p,
    write: h
  };
  let m = t.tokenize.call(u, s);
  return t.resolveAll && a.push(t), u;
  function h(U) {
    return l = dt(l, U), z(), l[l.length - 1] !== null ? [] : (J(t, 0), u.events = En(a, u.events, u), u.events);
  }
  function d(U, _) {
    return ah(p(U), _);
  }
  function p(U) {
    return ih(l, U);
  }
  function y() {
    const {
      _bufferIndex: U,
      _index: _,
      line: ae,
      column: re,
      offset: ee
    } = n;
    return {
      _bufferIndex: U,
      _index: _,
      line: ae,
      column: re,
      offset: ee
    };
  }
  function b(U) {
    i[U.line] = U.column, I();
  }
  function z() {
    let U;
    for (; n._index < l.length; ) {
      const _ = l[n._index];
      if (typeof _ == "string")
        for (U = n._index, n._bufferIndex < 0 && (n._bufferIndex = 0); n._index === U && n._bufferIndex < _.length; )
          T(_.charCodeAt(n._bufferIndex));
      else
        T(_);
    }
  }
  function T(U) {
    m = m(U);
  }
  function M(U) {
    K(U) ? (n.line++, n.column = 1, n.offset += U === -3 ? 2 : 1, I()) : U !== -1 && (n.column++, n.offset++), n._bufferIndex < 0 ? n._index++ : (n._bufferIndex++, n._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[n._index].length && (n._bufferIndex = -1, n._index++)), u.previous = U;
  }
  function R(U, _) {
    const ae = _ || {};
    return ae.type = U, ae.start = y(), u.events.push(["enter", ae, u]), o.push(ae), ae;
  }
  function $(U) {
    const _ = o.pop();
    return _.end = y(), u.events.push(["exit", _, u]), _;
  }
  function j(U, _) {
    J(U, _.from);
  }
  function D(U, _) {
    _.restore();
  }
  function W(U, _) {
    return ae;
    function ae(re, ee, ve) {
      let ye, Re, je, S;
      return Array.isArray(re) ? (
        /* c8 ignore next 1 */
        Ae(re)
      ) : "tokenize" in re ? (
        // Looks like a construct.
        Ae([
          /** @type {Construct} */
          re
        ])
      ) : ze(re);
      function ze(Ce) {
        return $e;
        function $e(Be) {
          const We = Be !== null && Ce[Be], Ve = Be !== null && Ce.null, Vt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(We) ? We : We ? [We] : [],
            ...Array.isArray(Ve) ? Ve : Ve ? [Ve] : []
          ];
          return Ae(Vt)(Be);
        }
      }
      function Ae(Ce) {
        return ye = Ce, Re = 0, Ce.length === 0 ? ve : A(Ce[Re]);
      }
      function A(Ce) {
        return $e;
        function $e(Be) {
          return S = V(), je = Ce, Ce.partial || (u.currentConstruct = Ce), Ce.name && u.parser.constructs.disable.null.includes(Ce.name) ? _e() : Ce.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            _ ? Object.assign(Object.create(u), _) : u,
            s,
            He,
            _e
          )(Be);
        }
      }
      function He(Ce) {
        return U(je, S), ee;
      }
      function _e(Ce) {
        return S.restore(), ++Re < ye.length ? A(ye[Re]) : ve;
      }
    }
  }
  function J(U, _) {
    U.resolveAll && !a.includes(U) && a.push(U), U.resolve && ct(u.events, _, u.events.length - _, U.resolve(u.events.slice(_), u)), U.resolveTo && (u.events = U.resolveTo(u.events, u));
  }
  function V() {
    const U = y(), _ = u.previous, ae = u.currentConstruct, re = u.events.length, ee = Array.from(o);
    return {
      from: re,
      restore: ve
    };
    function ve() {
      n = U, u.previous = _, u.currentConstruct = ae, u.events.length = re, o = ee, I();
    }
  }
  function I() {
    n.line in i && n.column < 2 && (n.column = i[n.line], n.offset += i[n.line] - 1);
  }
}
function ih(e, t) {
  const r = t.start._index, n = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let l;
  if (r === i)
    l = [e[r].slice(n, a)];
  else {
    if (l = e.slice(r, i), n > -1) {
      const o = l[0];
      typeof o == "string" ? l[0] = o.slice(n) : l.shift();
    }
    a > 0 && l.push(e[i].slice(0, a));
  }
  return l;
}
function ah(e, t) {
  let r = -1;
  const n = [];
  let i;
  for (; ++r < e.length; ) {
    const a = e[r];
    let l;
    if (typeof a == "string")
      l = a;
    else switch (a) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(a);
    }
    i = a === -2, n.push(l);
  }
  return n.join("");
}
function lh(e) {
  const n = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Jl([rh, ...(e || {}).extensions || []])
    ),
    content: i(w1),
    defined: [],
    document: i(S1),
    flow: i(jc),
    lazy: {},
    string: i(Vc),
    text: i(Uc)
  };
  return n;
  function i(a) {
    return l;
    function l(o) {
      return nh(n, a, o);
    }
  }
}
function oh(e) {
  for (; !ro(e); )
    ;
  return e;
}
const pa = /[\0\t\n\r]/g;
function sh() {
  let e = 1, t = "", r = !0, n;
  return i;
  function i(a, l, o) {
    const s = [];
    let u, m, h, d, p;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(l || void 0).decode(a)), h = 0, t = "", r && (a.charCodeAt(0) === 65279 && h++, r = void 0); h < a.length; ) {
      if (pa.lastIndex = h, u = pa.exec(a), d = u && u.index !== void 0 ? u.index : a.length, p = a.charCodeAt(d), !u) {
        t = a.slice(h);
        break;
      }
      if (p === 10 && h === d && n)
        s.push(-3), n = void 0;
      else
        switch (n && (s.push(-5), n = void 0), h < d && (s.push(a.slice(h, d)), e += d - h), p) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (m = Math.ceil(e / 4) * 4, s.push(-2); e++ < m; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            n = !0, e = 1;
        }
      h = d + 1;
    }
    return o && (n && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const uh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ch(e) {
  return e.replace(uh, hh);
}
function hh(e, t, r) {
  if (t)
    return t;
  if (r.charCodeAt(0) === 35) {
    const i = r.charCodeAt(1), a = i === 120 || i === 88;
    return Zl(r.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return ri(r) || e;
}
const so = {}.hasOwnProperty;
function mh(e, t, r) {
  return typeof t != "string" && (r = t, t = void 0), fh(r)(oh(lh(r).document().write(sh()(e, t, !0))));
}
function fh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(ft),
      autolinkProtocol: V,
      autolinkEmail: V,
      atxHeading: a(St),
      blockQuote: a(Ve),
      characterEscape: V,
      characterReference: V,
      codeFenced: a(Vt),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: a(Vt, l),
      codeText: a(fr, l),
      codeTextData: V,
      data: V,
      codeFlowValue: V,
      definition: a(Mr),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: a(tr),
      hardBreakEscape: a(bt),
      hardBreakTrailing: a(bt),
      htmlFlow: a(Rt, l),
      htmlFlowData: V,
      htmlText: a(Rt, l),
      htmlTextData: V,
      image: a(Ft),
      label: l,
      link: a(ft),
      listItem: a(qn),
      listItemValue: d,
      listOrdered: a(Kr, h),
      listUnordered: a(Kr),
      paragraph: a(zr),
      reference: A,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: a(St),
      strong: a(Hn),
      thematicBreak: a(Jr)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: j,
      autolink: s(),
      autolinkEmail: We,
      autolinkProtocol: Be,
      blockQuote: s(),
      characterEscapeValue: I,
      characterReferenceMarkerHexadecimal: _e,
      characterReferenceMarkerNumeric: _e,
      characterReferenceValue: Ce,
      characterReference: $e,
      codeFenced: s(z),
      codeFencedFence: b,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: y,
      codeFlowValue: I,
      codeIndented: s(T),
      codeText: s(ee),
      codeTextData: I,
      data: I,
      definition: s(),
      definitionDestinationString: $,
      definitionLabelString: M,
      definitionTitleString: R,
      emphasis: s(),
      hardBreakEscape: s(_),
      hardBreakTrailing: s(_),
      htmlFlow: s(ae),
      htmlFlowData: I,
      htmlText: s(re),
      htmlTextData: I,
      image: s(ye),
      label: je,
      labelText: Re,
      lineEnding: U,
      link: s(ve),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: He,
      resourceDestinationString: S,
      resourceTitleString: ze,
      resource: Ae,
      setextHeading: s(J),
      setextHeadingLineSequence: W,
      setextHeadingText: D,
      strong: s(),
      thematicBreak: s()
    }
  };
  uo(t, (e || {}).mdastExtensions || []);
  const r = {};
  return n;
  function n(F) {
    let H = {
      type: "root",
      children: []
    };
    const ie = {
      stack: [H],
      tokenStack: [],
      config: t,
      enter: o,
      exit: u,
      buffer: l,
      resume: m,
      data: r
    }, se = [];
    let de = -1;
    for (; ++de < F.length; )
      if (F[de][1].type === "listOrdered" || F[de][1].type === "listUnordered")
        if (F[de][0] === "enter")
          se.push(de);
        else {
          const lt = se.pop();
          de = i(F, lt, de);
        }
    for (de = -1; ++de < F.length; ) {
      const lt = t[F[de][0]];
      so.call(lt, F[de][1].type) && lt[F[de][1].type].call(Object.assign({
        sliceSerialize: F[de][2].sliceSerialize
      }, ie), F[de][1]);
    }
    if (ie.tokenStack.length > 0) {
      const lt = ie.tokenStack[ie.tokenStack.length - 1];
      (lt[1] || da).call(ie, void 0, lt[0]);
    }
    for (H.position = {
      start: Gt(F.length > 0 ? F[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Gt(F.length > 0 ? F[F.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, de = -1; ++de < t.transforms.length; )
      H = t.transforms[de](H) || H;
    return H;
  }
  function i(F, H, ie) {
    let se = H - 1, de = -1, lt = !1, Nt, xt, rr, nr;
    for (; ++se <= ie; ) {
      const Ye = F[se];
      switch (Ye[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ye[0] === "enter" ? de++ : de--, nr = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ye[0] === "enter" && (Nt && !nr && !de && !rr && (rr = se), nr = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          nr = void 0;
      }
      if (!de && Ye[0] === "enter" && Ye[1].type === "listItemPrefix" || de === -1 && Ye[0] === "exit" && (Ye[1].type === "listUnordered" || Ye[1].type === "listOrdered")) {
        if (Nt) {
          let Ut = se;
          for (xt = void 0; Ut--; ) {
            const ot = F[Ut];
            if (ot[1].type === "lineEnding" || ot[1].type === "lineEndingBlank") {
              if (ot[0] === "exit") continue;
              xt && (F[xt][1].type = "lineEndingBlank", lt = !0), ot[1].type = "lineEnding", xt = Ut;
            } else if (!(ot[1].type === "linePrefix" || ot[1].type === "blockQuotePrefix" || ot[1].type === "blockQuotePrefixWhitespace" || ot[1].type === "blockQuoteMarker" || ot[1].type === "listItemIndent")) break;
          }
          rr && (!xt || rr < xt) && (Nt._spread = !0), Nt.end = Object.assign({}, xt ? F[xt][1].start : Ye[1].end), F.splice(xt || se, 0, ["exit", Nt, Ye[2]]), se++, ie++;
        }
        if (Ye[1].type === "listItemPrefix") {
          const Ut = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ye[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Nt = Ut, F.splice(se, 0, ["enter", Ut, Ye[2]]), se++, ie++, rr = void 0, nr = !0;
        }
      }
    }
    return F[H][1]._spread = lt, ie;
  }
  function a(F, H) {
    return ie;
    function ie(se) {
      o.call(this, F(se), se), H && H.call(this, se);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function o(F, H, ie) {
    this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([H, ie || void 0]), F.position = {
      start: Gt(H.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(F) {
    return H;
    function H(ie) {
      F && F.call(this, ie), u.call(this, ie);
    }
  }
  function u(F, H) {
    const ie = this.stack.pop(), se = this.tokenStack.pop();
    if (se)
      se[0].type !== F.type && (H ? H.call(this, F, se[0]) : (se[1] || da).call(this, F, se[0]));
    else throw new Error("Cannot close `" + F.type + "` (" + Nr({
      start: F.start,
      end: F.end
    }) + "): it’s not open");
    ie.position.end = Gt(F.end);
  }
  function m() {
    return ti(this.stack.pop());
  }
  function h() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(F) {
    if (this.data.expectingFirstListItemValue) {
      const H = this.stack[this.stack.length - 2];
      H.start = Number.parseInt(this.sliceSerialize(F), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.lang = F;
  }
  function y() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.meta = F;
  }
  function b() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function z() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function T() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.value = F.replace(/(\r?\n|\r)$/g, "");
  }
  function M(F) {
    const H = this.resume(), ie = this.stack[this.stack.length - 1];
    ie.label = H, ie.identifier = kt(this.sliceSerialize(F)).toLowerCase();
  }
  function R() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.title = F;
  }
  function $() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.url = F;
  }
  function j(F) {
    const H = this.stack[this.stack.length - 1];
    if (!H.depth) {
      const ie = this.sliceSerialize(F).length;
      H.depth = ie;
    }
  }
  function D() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function W(F) {
    const H = this.stack[this.stack.length - 1];
    H.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
  }
  function J() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function V(F) {
    const ie = this.stack[this.stack.length - 1].children;
    let se = ie[ie.length - 1];
    (!se || se.type !== "text") && (se = jn(), se.position = {
      start: Gt(F.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ie.push(se)), this.stack.push(se);
  }
  function I(F) {
    const H = this.stack.pop();
    H.value += this.sliceSerialize(F), H.position.end = Gt(F.end);
  }
  function U(F) {
    const H = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ie = H.children[H.children.length - 1];
      ie.position.end = Gt(F.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(H.type) && (V.call(this, F), I.call(this, F));
  }
  function _() {
    this.data.atHardBreak = !0;
  }
  function ae() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.value = F;
  }
  function re() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.value = F;
  }
  function ee() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.value = F;
  }
  function ve() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const H = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = H, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function ye() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const H = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = H, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function Re(F) {
    const H = this.sliceSerialize(F), ie = this.stack[this.stack.length - 2];
    ie.label = ch(H), ie.identifier = kt(H).toLowerCase();
  }
  function je() {
    const F = this.stack[this.stack.length - 1], H = this.resume(), ie = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ie.type === "link") {
      const se = F.children;
      ie.children = se;
    } else
      ie.alt = H;
  }
  function S() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.url = F;
  }
  function ze() {
    const F = this.resume(), H = this.stack[this.stack.length - 1];
    H.title = F;
  }
  function Ae() {
    this.data.inReference = void 0;
  }
  function A() {
    this.data.referenceType = "collapsed";
  }
  function He(F) {
    const H = this.resume(), ie = this.stack[this.stack.length - 1];
    ie.label = H, ie.identifier = kt(this.sliceSerialize(F)).toLowerCase(), this.data.referenceType = "full";
  }
  function _e(F) {
    this.data.characterReferenceType = F.type;
  }
  function Ce(F) {
    const H = this.sliceSerialize(F), ie = this.data.characterReferenceType;
    let se;
    ie ? (se = Zl(H, ie === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : se = ri(H);
    const de = this.stack[this.stack.length - 1];
    de.value += se;
  }
  function $e(F) {
    const H = this.stack.pop();
    H.position.end = Gt(F.end);
  }
  function Be(F) {
    I.call(this, F);
    const H = this.stack[this.stack.length - 1];
    H.url = this.sliceSerialize(F);
  }
  function We(F) {
    I.call(this, F);
    const H = this.stack[this.stack.length - 1];
    H.url = "mailto:" + this.sliceSerialize(F);
  }
  function Ve() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Vt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function fr() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Mr() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function tr() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function St() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function bt() {
    return {
      type: "break"
    };
  }
  function Rt() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ft() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function ft() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Kr(F) {
    return {
      type: "list",
      ordered: F.type === "listOrdered",
      start: null,
      spread: F._spread,
      children: []
    };
  }
  function qn(F) {
    return {
      type: "listItem",
      spread: F._spread,
      checked: null,
      children: []
    };
  }
  function zr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Hn() {
    return {
      type: "strong",
      children: []
    };
  }
  function jn() {
    return {
      type: "text",
      value: ""
    };
  }
  function Jr() {
    return {
      type: "thematicBreak"
    };
  }
}
function Gt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function uo(e, t) {
  let r = -1;
  for (; ++r < t.length; ) {
    const n = t[r];
    Array.isArray(n) ? uo(e, n) : ph(e, n);
  }
}
function ph(e, t) {
  let r;
  for (r in t)
    if (so.call(t, r))
      switch (r) {
        case "canContainEols": {
          const n = t[r];
          n && e[r].push(...n);
          break;
        }
        case "transforms": {
          const n = t[r];
          n && e[r].push(...n);
          break;
        }
        case "enter":
        case "exit": {
          const n = t[r];
          n && Object.assign(e[r], n);
          break;
        }
      }
}
function da(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Nr({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Nr({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Nr({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function dh(e) {
  const t = this;
  t.parser = r;
  function r(n) {
    return mh(n, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function gh(e, t) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function vh(e, t) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, r), [e.applyData(t, r), { type: "text", value: `
` }];
}
function yh(e, t) {
  const r = t.value ? t.value + `
` : "", n = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (n.className = ["language-" + i[0]]);
  let a = {
    type: "element",
    tagName: "code",
    properties: n,
    children: [{ type: "text", value: r }]
  };
  return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = { type: "element", tagName: "pre", properties: {}, children: [a] }, e.patch(t, a), a;
}
function bh(e, t) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function xh(e, t) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function wh(e, t) {
  const r = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = String(t.identifier).toUpperCase(), i = Tr(n.toLowerCase()), a = e.footnoteOrder.indexOf(n);
  let l, o = e.footnoteCounts.get(n);
  o === void 0 ? (o = 0, e.footnoteOrder.push(n), l = e.footnoteOrder.length) : l = a + 1, o += 1, e.footnoteCounts.set(n, o);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + i,
      id: r + "fnref-" + i + (o > 1 ? "-" + o : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function kh(e, t) {
  const r = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Sh(e, t) {
  if (e.options.allowDangerousHtml) {
    const r = { type: "raw", value: t.value };
    return e.patch(t, r), e.applyData(t, r);
  }
}
function co(e, t) {
  const r = t.referenceType;
  let n = "]";
  if (r === "collapsed" ? n += "[]" : r === "full" && (n += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + n }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += n : i.push({ type: "text", value: n }), i;
}
function Th(e, t) {
  const r = String(t.identifier).toUpperCase(), n = e.definitionById.get(r);
  if (!n)
    return co(e, t);
  const i = { src: Tr(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (i.title = n.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function Ah(e, t) {
  const r = { src: Tr(t.url) };
  t.alt !== null && t.alt !== void 0 && (r.alt = t.alt), t.title !== null && t.title !== void 0 && (r.title = t.title);
  const n = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
function Ch(e, t) {
  const r = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, r);
  const n = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Mh(e, t) {
  const r = String(t.identifier).toUpperCase(), n = e.definitionById.get(r);
  if (!n)
    return co(e, t);
  const i = { href: Tr(n.url || "") };
  n.title !== null && n.title !== void 0 && (i.title = n.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function zh(e, t) {
  const r = { href: Tr(t.url) };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const n = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Eh(e, t, r) {
  const n = e.all(t), i = r ? Dh(r) : ho(t), a = {}, l = [];
  if (typeof t.checked == "boolean") {
    const m = n[0];
    let h;
    m && m.type === "element" && m.tagName === "p" ? h = m : (h = { type: "element", tagName: "p", properties: {}, children: [] }, n.unshift(h)), h.children.length > 0 && h.children.unshift({ type: "text", value: " " }), h.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let o = -1;
  for (; ++o < n.length; ) {
    const m = n[o];
    (i || o !== 0 || m.type !== "element" || m.tagName !== "p") && l.push({ type: "text", value: `
` }), m.type === "element" && m.tagName === "p" && !i ? l.push(...m.children) : l.push(m);
  }
  const s = n[n.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: a, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function Dh(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const r = e.children;
    let n = -1;
    for (; !t && ++n < r.length; )
      t = ho(r[n]);
  }
  return t;
}
function ho(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Ih(e, t) {
  const r = {}, n = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (r.start = t.start); ++i < n.length; ) {
    const l = n[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: r,
    children: e.wrap(n, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Rh(e, t) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Fh(e, t) {
  const r = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, r), e.applyData(t, r);
}
function Nh(e, t) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Bh(e, t) {
  const r = e.all(t), n = r.shift(), i = [];
  if (n) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([n], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (r.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(r, !0)
    }, o = J0(t.children[1]), s = Vl(t.children[t.children.length - 1]);
    o && s && (l.position = { start: o, end: s }), i.push(l);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Ph(e, t, r) {
  const n = r ? r.children : void 0, a = (n ? n.indexOf(t) : 1) === 0 ? "th" : "td", l = r && r.type === "table" ? r.align : void 0, o = l ? l.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < o; ) {
    const h = t.children[s], d = {}, p = l ? l[s] : void 0;
    p && (d.align = p);
    let y = { type: "element", tagName: a, properties: d, children: [] };
    h && (y.children = e.all(h), e.patch(h, y), y = e.applyData(h, y)), u.push(y);
  }
  const m = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, m), e.applyData(t, m);
}
function Oh(e, t) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
const ga = 9, va = 32;
function Lh(e) {
  const t = String(e), r = /\r?\n|\r/g;
  let n = r.exec(t), i = 0;
  const a = [];
  for (; n; )
    a.push(
      ya(t.slice(i, n.index), i > 0, !0),
      n[0]
    ), i = n.index + n[0].length, n = r.exec(t);
  return a.push(ya(t.slice(i), i > 0, !1)), a.join("");
}
function ya(e, t, r) {
  let n = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(n);
    for (; a === ga || a === va; )
      n++, a = e.codePointAt(n);
  }
  if (r) {
    let a = e.codePointAt(i - 1);
    for (; a === ga || a === va; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > n ? e.slice(n, i) : "";
}
function qh(e, t) {
  const r = { type: "text", value: Lh(String(t.value)) };
  return e.patch(t, r), e.applyData(t, r);
}
function Hh(e, t) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, r), e.applyData(t, r);
}
const jh = {
  blockquote: gh,
  break: vh,
  code: yh,
  delete: bh,
  emphasis: xh,
  footnoteReference: wh,
  heading: kh,
  html: Sh,
  imageReference: Th,
  image: Ah,
  inlineCode: Ch,
  linkReference: Mh,
  link: zh,
  listItem: Eh,
  list: Ih,
  paragraph: Rh,
  // @ts-expect-error: root is different, but hard to type.
  root: Fh,
  strong: Nh,
  table: Bh,
  tableCell: Oh,
  tableRow: Ph,
  text: qh,
  thematicBreak: Hh,
  toml: Zr,
  yaml: Zr,
  definition: Zr,
  footnoteDefinition: Zr
};
function Zr() {
}
const mo = -1, Dn = 0, Pr = 1, yn = 2, ii = 3, ai = 4, li = 5, oi = 6, fo = 7, po = 8, ba = typeof self == "object" ? self : globalThis, _h = (e, t) => {
  const r = (i, a) => (e.set(a, i), i), n = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, l] = t[i];
    switch (a) {
      case Dn:
      case mo:
        return r(l, i);
      case Pr: {
        const o = r([], i);
        for (const s of l)
          o.push(n(s));
        return o;
      }
      case yn: {
        const o = r({}, i);
        for (const [s, u] of l)
          o[n(s)] = n(u);
        return o;
      }
      case ii:
        return r(new Date(l), i);
      case ai: {
        const { source: o, flags: s } = l;
        return r(new RegExp(o, s), i);
      }
      case li: {
        const o = r(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of l)
          o.set(n(s), n(u));
        return o;
      }
      case oi: {
        const o = r(/* @__PURE__ */ new Set(), i);
        for (const s of l)
          o.add(n(s));
        return o;
      }
      case fo: {
        const { name: o, message: s } = l;
        return r(new ba[o](s), i);
      }
      case po:
        return r(BigInt(l), i);
      case "BigInt":
        return r(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return r(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: o } = new Uint8Array(l);
        return r(new DataView(o), l);
      }
    }
    return r(new ba[a](l), i);
  };
  return n;
}, xa = (e) => _h(/* @__PURE__ */ new Map(), e)(0), gr = "", { toString: $h } = {}, { keys: Vh } = Object, Rr = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Dn, t];
  const r = $h.call(e).slice(8, -1);
  switch (r) {
    case "Array":
      return [Pr, gr];
    case "Object":
      return [yn, gr];
    case "Date":
      return [ii, gr];
    case "RegExp":
      return [ai, gr];
    case "Map":
      return [li, gr];
    case "Set":
      return [oi, gr];
    case "DataView":
      return [Pr, r];
  }
  return r.includes("Array") ? [Pr, r] : r.includes("Error") ? [fo, r] : [yn, r];
}, Qr = ([e, t]) => e === Dn && (t === "function" || t === "symbol"), Uh = (e, t, r, n) => {
  const i = (l, o) => {
    const s = n.push(l) - 1;
    return r.set(o, s), s;
  }, a = (l) => {
    if (r.has(l))
      return r.get(l);
    let [o, s] = Rr(l);
    switch (o) {
      case Dn: {
        let m = l;
        switch (s) {
          case "bigint":
            o = po, m = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            m = null;
            break;
          case "undefined":
            return i([mo], l);
        }
        return i([o, m], l);
      }
      case Pr: {
        if (s) {
          let d = l;
          return s === "DataView" ? d = new Uint8Array(l.buffer) : s === "ArrayBuffer" && (d = new Uint8Array(l)), i([s, [...d]], l);
        }
        const m = [], h = i([o, m], l);
        for (const d of l)
          m.push(a(d));
        return h;
      }
      case yn: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return a(l.toJSON());
        const m = [], h = i([o, m], l);
        for (const d of Vh(l))
          (e || !Qr(Rr(l[d]))) && m.push([a(d), a(l[d])]);
        return h;
      }
      case ii:
        return i([o, l.toISOString()], l);
      case ai: {
        const { source: m, flags: h } = l;
        return i([o, { source: m, flags: h }], l);
      }
      case li: {
        const m = [], h = i([o, m], l);
        for (const [d, p] of l)
          (e || !(Qr(Rr(d)) || Qr(Rr(p)))) && m.push([a(d), a(p)]);
        return h;
      }
      case oi: {
        const m = [], h = i([o, m], l);
        for (const d of l)
          (e || !Qr(Rr(d))) && m.push(a(d));
        return h;
      }
    }
    const { message: u } = l;
    return i([o, { name: s, message: u }], l);
  };
  return a;
}, wa = (e, { json: t, lossy: r } = {}) => {
  const n = [];
  return Uh(!(t || r), !!t, /* @__PURE__ */ new Map(), n)(e), n;
}, bn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? xa(wa(e, t)) : structuredClone(e)
) : (e, t) => xa(wa(e, t));
function Gh(e, t) {
  const r = [{ type: "text", value: "↩" }];
  return t > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), r;
}
function Wh(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Yh(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = e.options.footnoteBackContent || Gh, n = e.options.footnoteBackLabel || Wh, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, o = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const m = e.all(u), h = String(u.identifier).toUpperCase(), d = Tr(h.toLowerCase());
    let p = 0;
    const y = [], b = e.footnoteCounts.get(h);
    for (; b !== void 0 && ++p <= b; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let M = typeof r == "string" ? r : r(s, p);
      typeof M == "string" && (M = { type: "text", value: M }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof n == "string" ? n : n(s, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(M) ? M : [M]
      });
    }
    const z = m[m.length - 1];
    if (z && z.type === "element" && z.tagName === "p") {
      const M = z.children[z.children.length - 1];
      M && M.type === "text" ? M.value += " " : z.children.push({ type: "text", value: " " }), z.children.push(...y);
    } else
      m.push(...y);
    const T = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(m, !0)
    };
    e.patch(u, T), o.push(T);
  }
  if (o.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...bn(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(o, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Ur = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Zh;
    if (typeof e == "function")
      return In(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Xh(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Kh(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Jh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Xh(e) {
  const t = [];
  let r = -1;
  for (; ++r < e.length; )
    t[r] = Ur(e[r]);
  return In(n);
  function n(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function Kh(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return In(r);
  function r(n) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      n
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function Jh(e) {
  return In(t);
  function t(r) {
    return r && r.type === e;
  }
}
function In(e) {
  return t;
  function t(r, n, i) {
    return !!(Qh(r) && e.call(
      this,
      r,
      typeof n == "number" ? n : void 0,
      i || void 0
    ));
  }
}
function Zh() {
  return !0;
}
function Qh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const go = [], e4 = !0, F0 = !1, vo = "skip";
function si(e, t, r, n) {
  let i;
  typeof t == "function" && typeof r != "function" ? (n = r, r = t) : i = t;
  const a = Ur(i), l = n ? -1 : 1;
  o(e, void 0, [])();
  function o(s, u, m) {
    const h = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof h.type == "string") {
      const p = (
        // `hast`
        typeof h.tagName == "string" ? h.tagName : (
          // `xast`
          typeof h.name == "string" ? h.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let p = go, y, b, z;
      if ((!t || a(s, u, m[m.length - 1] || void 0)) && (p = t4(r(s, m)), p[0] === F0))
        return p;
      if ("children" in s && s.children) {
        const T = (
          /** @type {UnistParent} */
          s
        );
        if (T.children && p[0] !== vo)
          for (b = (n ? T.children.length : -1) + l, z = m.concat(T); b > -1 && b < T.children.length; ) {
            const M = T.children[b];
            if (y = o(M, b, z)(), y[0] === F0)
              return y;
            b = typeof y[1] == "number" ? y[1] : b + l;
          }
      }
      return p;
    }
  }
}
function t4(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [e4, e] : e == null ? go : [e];
}
function ui(e, t, r, n) {
  let i, a, l;
  typeof t == "function" && typeof r != "function" ? (a = void 0, l = t, i = r) : (a = t, l = r, i = n), si(e, a, o, i);
  function o(s, u) {
    const m = u[u.length - 1], h = m ? m.children.indexOf(s) : void 0;
    return l(s, h, m);
  }
}
const N0 = {}.hasOwnProperty, r4 = {};
function n4(e, t) {
  const r = t || r4, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = { ...jh, ...r.handlers }, o = {
    all: u,
    applyData: a4,
    definitionById: n,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: l,
    one: s,
    options: r,
    patch: i4,
    wrap: o4
  };
  return ui(e, function(m) {
    if (m.type === "definition" || m.type === "footnoteDefinition") {
      const h = m.type === "definition" ? n : i, d = String(m.identifier).toUpperCase();
      h.has(d) || h.set(d, m);
    }
  }), o;
  function s(m, h) {
    const d = m.type, p = o.handlers[d];
    if (N0.call(o.handlers, d) && p)
      return p(o, m, h);
    if (o.options.passThrough && o.options.passThrough.includes(d)) {
      if ("children" in m) {
        const { children: b, ...z } = m, T = bn(z);
        return T.children = o.all(m), T;
      }
      return bn(m);
    }
    return (o.options.unknownHandler || l4)(o, m, h);
  }
  function u(m) {
    const h = [];
    if ("children" in m) {
      const d = m.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const y = o.one(d[p], m);
        if (y) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = ka(y.value)), !Array.isArray(y) && y.type === "element")) {
            const b = y.children[0];
            b && b.type === "text" && (b.value = ka(b.value));
          }
          Array.isArray(y) ? h.push(...y) : h.push(y);
        }
      }
    }
    return h;
  }
}
function i4(e, t) {
  e.position && (t.position = Wu(e));
}
function a4(e, t) {
  let r = t;
  if (e && e.data) {
    const n = e.data.hName, i = e.data.hChildren, a = e.data.hProperties;
    if (typeof n == "string")
      if (r.type === "element")
        r.tagName = n;
      else {
        const l = "children" in r ? r.children : [r];
        r = { type: "element", tagName: n, properties: {}, children: l };
      }
    r.type === "element" && a && Object.assign(r.properties, bn(a)), "children" in r && r.children && i !== null && i !== void 0 && (r.children = i);
  }
  return r;
}
function l4(e, t) {
  const r = t.data || {}, n = "value" in t && !(N0.call(r, "hProperties") || N0.call(r, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function o4(e, t) {
  const r = [];
  let n = -1;
  for (t && r.push({ type: "text", value: `
` }); ++n < e.length; )
    n && r.push({ type: "text", value: `
` }), r.push(e[n]);
  return t && e.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function ka(e) {
  let t = 0, r = e.charCodeAt(t);
  for (; r === 9 || r === 32; )
    t++, r = e.charCodeAt(t);
  return e.slice(t);
}
function Sa(e, t) {
  const r = n4(e, t), n = r.one(e, void 0), i = Yh(r), a = Array.isArray(n) ? { type: "root", children: n } : n || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function s4(e, t) {
  return e && "run" in e ? async function(r, n) {
    const i = (
      /** @type {HastRoot} */
      Sa(r, { file: n, ...t })
    );
    await e.run(i, n);
  } : function(r, n) {
    return (
      /** @type {HastRoot} */
      Sa(r, { file: n, ...e || t })
    );
  };
}
function Ta(e) {
  if (e)
    throw e;
}
var fn = Object.prototype.hasOwnProperty, yo = Object.prototype.toString, Aa = Object.defineProperty, Ca = Object.getOwnPropertyDescriptor, Ma = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : yo.call(t) === "[object Array]";
}, za = function(t) {
  if (!t || yo.call(t) !== "[object Object]")
    return !1;
  var r = fn.call(t, "constructor"), n = t.constructor && t.constructor.prototype && fn.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !r && !n)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || fn.call(t, i);
}, Ea = function(t, r) {
  Aa && r.name === "__proto__" ? Aa(t, r.name, {
    enumerable: !0,
    configurable: !0,
    value: r.newValue,
    writable: !0
  }) : t[r.name] = r.newValue;
}, Da = function(t, r) {
  if (r === "__proto__")
    if (fn.call(t, r)) {
      if (Ca)
        return Ca(t, r).value;
    } else return;
  return t[r];
}, u4 = function e() {
  var t, r, n, i, a, l, o = arguments[0], s = 1, u = arguments.length, m = !1;
  for (typeof o == "boolean" && (m = o, o = arguments[1] || {}, s = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (r in t)
        n = Da(o, r), i = Da(t, r), o !== i && (m && i && (za(i) || (a = Ma(i))) ? (a ? (a = !1, l = n && Ma(n) ? n : []) : l = n && za(n) ? n : {}, Ea(o, { name: r, newValue: e(m, l, i) })) : typeof i < "u" && Ea(o, { name: r, newValue: i }));
  return o;
};
const Xn = /* @__PURE__ */ Nl(u4);
function B0(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function c4() {
  const e = [], t = { run: r, use: n };
  return t;
  function r(...i) {
    let a = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    o(null, ...i);
    function o(s, ...u) {
      const m = e[++a];
      let h = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++h < i.length; )
        (u[h] === null || u[h] === void 0) && (u[h] = i[h]);
      i = u, m ? h4(m, o)(...u) : l(null, ...u);
    }
  }
  function n(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function h4(e, t) {
  let r;
  return n;
  function n(...l) {
    const o = e.length > l.length;
    let s;
    o && l.push(i);
    try {
      s = e.apply(this, l);
    } catch (u) {
      const m = (
        /** @type {Error} */
        u
      );
      if (o && r)
        throw m;
      return i(m);
    }
    o || (s && s.then && typeof s.then == "function" ? s.then(a, i) : s instanceof Error ? i(s) : a(s));
  }
  function i(l, ...o) {
    r || (r = !0, t(l, ...o));
  }
  function a(l) {
    i(null, l);
  }
}
const Tt = { basename: m4, dirname: f4, extname: p4, join: d4, sep: "/" };
function m4(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Gr(e);
  let r = 0, n = -1, i = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          r = i + 1;
          break;
        }
      } else n < 0 && (a = !0, n = i + 1);
    return n < 0 ? "" : e.slice(r, n);
  }
  if (t === e)
    return "";
  let l = -1, o = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        r = i + 1;
        break;
      }
    } else
      l < 0 && (a = !0, l = i + 1), o > -1 && (e.codePointAt(i) === t.codePointAt(o--) ? o < 0 && (n = i) : (o = -1, n = l));
  return r === n ? n = l : n < 0 && (n = e.length), e.slice(r, n);
}
function f4(e) {
  if (Gr(e), e.length === 0)
    return ".";
  let t = -1, r = e.length, n;
  for (; --r; )
    if (e.codePointAt(r) === 47) {
      if (n) {
        t = r;
        break;
      }
    } else n || (n = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function p4(e) {
  Gr(e);
  let t = e.length, r = -1, n = 0, i = -1, a = 0, l;
  for (; t--; ) {
    const o = e.codePointAt(t);
    if (o === 47) {
      if (l) {
        n = t + 1;
        break;
      }
      continue;
    }
    r < 0 && (l = !0, r = t + 1), o === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === r - 1 && i === n + 1 ? "" : e.slice(i, r);
}
function d4(...e) {
  let t = -1, r;
  for (; ++t < e.length; )
    Gr(e[t]), e[t] && (r = r === void 0 ? e[t] : r + "/" + e[t]);
  return r === void 0 ? "." : g4(r);
}
function g4(e) {
  Gr(e);
  const t = e.codePointAt(0) === 47;
  let r = v4(e, !t);
  return r.length === 0 && !t && (r = "."), r.length > 0 && e.codePointAt(e.length - 1) === 47 && (r += "/"), t ? "/" + r : r;
}
function v4(e, t) {
  let r = "", n = 0, i = -1, a = 0, l = -1, o, s;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      o = e.codePointAt(l);
    else {
      if (o === 47)
        break;
      o = 47;
    }
    if (o === 47) {
      if (!(i === l - 1 || a === 1)) if (i !== l - 1 && a === 2) {
        if (r.length < 2 || n !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (s = r.lastIndexOf("/"), s !== r.length - 1) {
              s < 0 ? (r = "", n = 0) : (r = r.slice(0, s), n = r.length - 1 - r.lastIndexOf("/")), i = l, a = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", n = 0, i = l, a = 0;
            continue;
          }
        }
        t && (r = r.length > 0 ? r + "/.." : "..", n = 2);
      } else
        r.length > 0 ? r += "/" + e.slice(i + 1, l) : r = e.slice(i + 1, l), n = l - i - 1;
      i = l, a = 0;
    } else o === 46 && a > -1 ? a++ : a = -1;
  }
  return r;
}
function Gr(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const y4 = { cwd: b4 };
function b4() {
  return "/";
}
function P0(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function x4(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!P0(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return w4(e);
}
function w4(e) {
  if (e.hostname !== "") {
    const n = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw n.code = "ERR_INVALID_FILE_URL_HOST", n;
  }
  const t = e.pathname;
  let r = -1;
  for (; ++r < t.length; )
    if (t.codePointAt(r) === 37 && t.codePointAt(r + 1) === 50) {
      const n = t.codePointAt(r + 2);
      if (n === 70 || n === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const Kn = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class bo {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let r;
    t ? P0(t) ? r = { path: t } : typeof t == "string" || k4(t) ? r = { value: t } : r = t : r = {}, this.cwd = "cwd" in r ? "" : y4.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let n = -1;
    for (; ++n < Kn.length; ) {
      const a = Kn[n];
      a in r && r[a] !== void 0 && r[a] !== null && (this[a] = a === "history" ? [...r[a]] : r[a]);
    }
    let i;
    for (i in r)
      Kn.includes(i) || (this[i] = r[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Tt.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Zn(t, "basename"), Jn(t, "basename"), this.path = Tt.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Tt.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Ia(this.basename, "dirname"), this.path = Tt.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Tt.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Jn(t, "extname"), Ia(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Tt.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    P0(t) && (t = x4(t)), Zn(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Tt.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Zn(t, "stem"), Jn(t, "stem"), this.path = Tt.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, r, n) {
    const i = this.message(t, r, n);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, r, n) {
    const i = this.message(t, r, n);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, r, n) {
    const i = new Ge(
      // @ts-expect-error: the overloads are fine.
      t,
      r,
      n
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Jn(e, t) {
  if (e && e.includes(Tt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Tt.sep + "`"
    );
}
function Zn(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ia(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function k4(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const S4 = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const n = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = n[e], a = function() {
      return i.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, n), a;
  }
), T4 = {}.hasOwnProperty;
class ci extends S4 {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = c4();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new ci()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const n = this.attachers[r];
      t.use(...n);
    }
    return t.data(Xn(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, r) {
    return typeof t == "string" ? arguments.length === 2 ? (t0("data", this.frozen), this.namespace[t] = r, this) : T4.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (t0("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [r, ...n] = this.attachers[this.freezeIndex];
      if (n[0] === !1)
        continue;
      n[0] === !0 && (n[0] = void 0);
      const i = r.call(t, ...n);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const r = en(t), n = this.parser || this.Parser;
    return Qn("parse", n), n(String(r), r);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, r) {
    const n = this;
    return this.freeze(), Qn("process", this.parser || this.Parser), e0("process", this.compiler || this.Compiler), r ? i(void 0, r) : new Promise(i);
    function i(a, l) {
      const o = en(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        n.parse(o)
      );
      n.run(s, o, function(m, h, d) {
        if (m || !h || !d)
          return u(m);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          h
        ), y = n.stringify(p, d);
        M4(y) ? d.value = y : d.result = y, u(
          m,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function u(m, h) {
        m || !h ? l(m) : a ? a(h) : r(void 0, h);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let r = !1, n;
    return this.freeze(), Qn("processSync", this.parser || this.Parser), e0("processSync", this.compiler || this.Compiler), this.process(t, i), Fa("processSync", "process", r), n;
    function i(a, l) {
      r = !0, Ta(a), n = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, r, n) {
    Ra(t), this.freeze();
    const i = this.transformers;
    return !n && typeof r == "function" && (n = r, r = void 0), n ? a(void 0, n) : new Promise(a);
    function a(l, o) {
      const s = en(r);
      i.run(t, s, u);
      function u(m, h, d) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          h || t
        );
        m ? o(m) : l ? l(p) : n(void 0, p, d);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, r) {
    let n = !1, i;
    return this.run(t, r, a), Fa("runSync", "run", n), i;
    function a(l, o) {
      Ta(l), i = o, n = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, r) {
    this.freeze();
    const n = en(r), i = this.compiler || this.Compiler;
    return e0("stringify", i), Ra(t), i(t, n);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...r) {
    const n = this.attachers, i = this.namespace;
    if (t0("use", this.frozen), t != null) if (typeof t == "function")
      s(t, r);
    else if (typeof t == "object")
      Array.isArray(t) ? o(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [m, ...h] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(m, h);
        } else
          l(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function l(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      o(u.plugins), u.settings && (i.settings = Xn(!0, i.settings, u.settings));
    }
    function o(u) {
      let m = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++m < u.length; ) {
          const h = u[m];
          a(h);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, m) {
      let h = -1, d = -1;
      for (; ++h < n.length; )
        if (n[h][0] === u) {
          d = h;
          break;
        }
      if (d === -1)
        n.push([u, ...m]);
      else if (m.length > 0) {
        let [p, ...y] = m;
        const b = n[d][1];
        B0(b) && B0(p) && (p = Xn(!0, b, p)), n[d] = [u, p, ...y];
      }
    }
  }
}
const A4 = new ci().freeze();
function Qn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function e0(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function t0(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ra(e) {
  if (!B0(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Fa(e, t, r) {
  if (!r)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function en(e) {
  return C4(e) ? e : new bo(e);
}
function C4(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function M4(e) {
  return typeof e == "string" || z4(e);
}
function z4(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const E4 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Na = [], Ba = { allowDangerousHtml: !0 }, D4 = /^(https?|ircs?|mailto|xmpp)$/i, I4 = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function r0(e) {
  const t = R4(e), r = F4(e);
  return N4(t.runSync(t.parse(r), r), e);
}
function R4(e) {
  const t = e.rehypePlugins || Na, r = e.remarkPlugins || Na, n = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Ba } : Ba;
  return A4().use(dh).use(r).use(s4, n).use(t);
}
function F4(e) {
  const t = e.children || "", r = new bo();
  return typeof t == "string" && (r.value = t), r;
}
function N4(e, t) {
  const r = t.allowedElements, n = t.allowElement, i = t.components, a = t.disallowedElements, l = t.skipHtml, o = t.unwrapDisallowed, s = t.urlTransform || B4;
  for (const m of I4)
    Object.hasOwn(t, m.from) && ("" + m.from + (m.to ? "use `" + m.to + "` instead" : "remove it") + E4 + m.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), ui(e, u), Zu(e, {
    Fragment: ke.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: ke.jsx,
    jsxs: ke.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(m, h, d) {
    if (m.type === "raw" && d && typeof h == "number")
      return l ? d.children.splice(h, 1) : d.children[h] = { type: "text", value: m.value }, h;
    if (m.type === "element") {
      let p;
      for (p in Gn)
        if (Object.hasOwn(Gn, p) && Object.hasOwn(m.properties, p)) {
          const y = m.properties[p], b = Gn[p];
          (b === null || b.includes(m.tagName)) && (m.properties[p] = s(String(y || ""), p, m));
        }
    }
    if (m.type === "element") {
      let p = r ? !r.includes(m.tagName) : a ? a.includes(m.tagName) : !1;
      if (!p && n && typeof h == "number" && (p = !n(m, h, d)), p && d && typeof h == "number")
        return o && m.children ? d.children.splice(h, 1, ...m.children) : d.children.splice(h, 1), h;
    }
  }
}
function B4(e) {
  const t = e.indexOf(":"), r = e.indexOf("?"), n = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || r !== -1 && t > r || n !== -1 && t > n || // It is a protocol, it should be allowed.
    D4.test(e.slice(0, t)) ? e : ""
  );
}
function xo(e, t) {
  const r = String(e);
  let n = r.indexOf(t), i = n, a = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; n !== -1; )
    n === i ? ++a > l && (l = a) : a = 1, i = n + t.length, n = r.indexOf(t, i);
  return l;
}
function P4() {
  return {
    enter: {
      mathFlow: e,
      mathFlowFenceMeta: t,
      mathText: a
    },
    exit: {
      mathFlow: i,
      mathFlowFence: n,
      mathFlowFenceMeta: r,
      mathFlowValue: o,
      mathText: l,
      mathTextData: o
    }
  };
  function e(s) {
    const u = {
      type: "element",
      tagName: "code",
      properties: { className: ["language-math", "math-display"] },
      children: []
    };
    this.enter(
      {
        type: "math",
        meta: null,
        value: "",
        data: { hName: "pre", hChildren: [u] }
      },
      s
    );
  }
  function t() {
    this.buffer();
  }
  function r() {
    const s = this.resume(), u = this.stack[this.stack.length - 1];
    u.type, u.meta = s;
  }
  function n() {
    this.data.mathFlowInside || (this.buffer(), this.data.mathFlowInside = !0);
  }
  function i(s) {
    const u = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), m = this.stack[this.stack.length - 1];
    m.type, this.exit(s), m.value = u;
    const h = (
      /** @type {HastElement} */
      m.data.hChildren[0]
    );
    h.type, h.tagName, h.children.push({ type: "text", value: u }), this.data.mathFlowInside = void 0;
  }
  function a(s) {
    this.enter(
      {
        type: "inlineMath",
        value: "",
        data: {
          hName: "code",
          hProperties: { className: ["language-math", "math-inline"] },
          hChildren: []
        }
      },
      s
    ), this.buffer();
  }
  function l(s) {
    const u = this.resume(), m = this.stack[this.stack.length - 1];
    m.type, this.exit(s), m.value = u, /** @type {Array<HastElementContent>} */
    // @ts-expect-error: we defined it in `enterMathFlow`.
    m.data.hChildren.push({ type: "text", value: u });
  }
  function o(s) {
    this.config.enter.data.call(this, s), this.config.exit.data.call(this, s);
  }
}
function O4(e) {
  let t = (e || {}).singleDollarTextMath;
  return t == null && (t = !0), n.peek = i, {
    unsafe: [
      { character: "\r", inConstruct: "mathFlowMeta" },
      { character: `
`, inConstruct: "mathFlowMeta" },
      {
        character: "$",
        after: t ? void 0 : "\\$",
        inConstruct: "phrasing"
      },
      { character: "$", inConstruct: "mathFlowMeta" },
      { atBreak: !0, character: "$", after: "\\$" }
    ],
    handlers: { math: r, inlineMath: n }
  };
  function r(a, l, o, s) {
    const u = a.value || "", m = o.createTracker(s), h = "$".repeat(Math.max(xo(u, "$") + 1, 2)), d = o.enter("mathFlow");
    let p = m.move(h);
    if (a.meta) {
      const y = o.enter("mathFlowMeta");
      p += m.move(
        o.safe(a.meta, {
          after: `
`,
          before: p,
          encode: ["$"],
          ...m.current()
        })
      ), y();
    }
    return p += m.move(`
`), u && (p += m.move(u + `
`)), p += m.move(h), d(), p;
  }
  function n(a, l, o) {
    let s = a.value || "", u = 1;
    for (t || u++; new RegExp("(^|[^$])" + "\\$".repeat(u) + "([^$]|$)").test(s); )
      u++;
    const m = "$".repeat(u);
    // Contains non-space.
    /[^ \r\n]/.test(s) && // Starts with space and ends with space.
    (/^[ \r\n]/.test(s) && /[ \r\n]$/.test(s) || // Starts or ends with dollar.
    /^\$|\$$/.test(s)) && (s = " " + s + " ");
    let h = -1;
    for (; ++h < o.unsafe.length; ) {
      const d = o.unsafe[h];
      if (!d.atBreak) continue;
      const p = o.compilePattern(d);
      let y;
      for (; y = p.exec(s); ) {
        let b = y.index;
        s.codePointAt(b) === 10 && s.codePointAt(b - 1) === 13 && b--, s = s.slice(0, b) + " " + s.slice(y.index + 1);
      }
    }
    return m + s + m;
  }
  function i() {
    return "$";
  }
}
const L4 = {
  tokenize: q4,
  concrete: !0,
  name: "mathFlow"
}, Pa = {
  tokenize: H4,
  partial: !0
};
function q4(e, t, r) {
  const n = this, i = n.events[n.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0;
  let l = 0;
  return o;
  function o(M) {
    return e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), s(M);
  }
  function s(M) {
    return M === 36 ? (e.consume(M), l++, s) : l < 2 ? r(M) : (e.exit("mathFlowFenceSequence"), ue(e, u, "whitespace")(M));
  }
  function u(M) {
    return M === null || K(M) ? h(M) : (e.enter("mathFlowFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(M));
  }
  function m(M) {
    return M === null || K(M) ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), h(M)) : M === 36 ? r(M) : (e.consume(M), m);
  }
  function h(M) {
    return e.exit("mathFlowFence"), n.interrupt ? t(M) : e.attempt(Pa, d, z)(M);
  }
  function d(M) {
    return e.attempt({
      tokenize: T,
      partial: !0
    }, z, p)(M);
  }
  function p(M) {
    return (a ? ue(e, y, "linePrefix", a + 1) : y)(M);
  }
  function y(M) {
    return M === null ? z(M) : K(M) ? e.attempt(Pa, d, z)(M) : (e.enter("mathFlowValue"), b(M));
  }
  function b(M) {
    return M === null || K(M) ? (e.exit("mathFlowValue"), y(M)) : (e.consume(M), b);
  }
  function z(M) {
    return e.exit("mathFlow"), t(M);
  }
  function T(M, R, $) {
    let j = 0;
    return ue(M, D, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function D(V) {
      return M.enter("mathFlowFence"), M.enter("mathFlowFenceSequence"), W(V);
    }
    function W(V) {
      return V === 36 ? (j++, M.consume(V), W) : j < l ? $(V) : (M.exit("mathFlowFenceSequence"), ue(M, J, "whitespace")(V));
    }
    function J(V) {
      return V === null || K(V) ? (M.exit("mathFlowFence"), R(V)) : $(V);
    }
  }
}
function H4(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a);
  }
  function a(l) {
    return n.parser.lazy[n.now().line] ? r(l) : t(l);
  }
}
function j4(e) {
  let r = (e || {}).singleDollarTextMath;
  return r == null && (r = !0), {
    tokenize: n,
    resolve: _4,
    previous: $4,
    name: "mathText"
  };
  function n(i, a, l) {
    let o = 0, s, u;
    return m;
    function m(b) {
      return i.enter("mathText"), i.enter("mathTextSequence"), h(b);
    }
    function h(b) {
      return b === 36 ? (i.consume(b), o++, h) : o < 2 && !r ? l(b) : (i.exit("mathTextSequence"), d(b));
    }
    function d(b) {
      return b === null ? l(b) : b === 36 ? (u = i.enter("mathTextSequence"), s = 0, y(b)) : b === 32 ? (i.enter("space"), i.consume(b), i.exit("space"), d) : K(b) ? (i.enter("lineEnding"), i.consume(b), i.exit("lineEnding"), d) : (i.enter("mathTextData"), p(b));
    }
    function p(b) {
      return b === null || b === 32 || b === 36 || K(b) ? (i.exit("mathTextData"), d(b)) : (i.consume(b), p);
    }
    function y(b) {
      return b === 36 ? (i.consume(b), s++, y) : s === o ? (i.exit("mathTextSequence"), i.exit("mathText"), a(b)) : (u.type = "mathTextData", p(b));
    }
  }
}
function _4(e) {
  let t = e.length - 4, r = 3, n, i;
  if ((e[r][1].type === "lineEnding" || e[r][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (n = r; ++n < t; )
      if (e[n][1].type === "mathTextData") {
        e[t][1].type = "mathTextPadding", e[r][1].type = "mathTextPadding", r += 2, t -= 2;
        break;
      }
  }
  for (n = r - 1, t++; ++n <= t; )
    i === void 0 ? n !== t && e[n][1].type !== "lineEnding" && (i = n) : (n === t || e[n][1].type === "lineEnding") && (e[i][1].type = "mathTextData", n !== i + 2 && (e[i][1].end = e[n - 1][1].end, e.splice(i + 2, n - i - 2), t -= n - i - 2, n = i + 2), i = void 0);
  return e;
}
function $4(e) {
  return e !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function V4(e) {
  return {
    flow: {
      36: L4
    },
    text: {
      36: j4(e)
    }
  };
}
class nt {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(t, r, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = t, this.start = r, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(t, r) {
    return r ? !t || !t.loc || !r.loc || t.loc.lexer !== r.loc.lexer ? null : new nt(t.loc.lexer, t.loc.start, r.loc.end) : t && t.loc;
  }
}
class ht {
  // don't expand the token
  // used in \noexpand
  constructor(t, r) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = t, this.loc = r;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(t, r) {
    return new ht(r, nt.range(this, t));
  }
}
class O {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(t, r) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var n = "KaTeX parse error: " + t, i, a, l = r && r.loc;
    if (l && l.start <= l.end) {
      var o = l.lexer.input;
      i = l.start, a = l.end, i === o.length ? n += " at end of input: " : n += " at position " + (i + 1) + ": ";
      var s = o.slice(i, a).replace(/[^]/g, "$&̲"), u;
      i > 15 ? u = "…" + o.slice(i - 15, i) : u = o.slice(0, i);
      var m;
      a + 15 < o.length ? m = o.slice(a, a + 15) + "…" : m = o.slice(a), n += u + s + m;
    }
    var h = new Error(n);
    return h.name = "ParseError", h.__proto__ = O.prototype, h.position = i, i != null && a != null && (h.length = a - i), h.rawMessage = t, h;
  }
}
O.prototype.__proto__ = Error.prototype;
var U4 = function(t, r) {
  return t === void 0 ? r : t;
}, G4 = /([A-Z])/g, W4 = function(t) {
  return t.replace(G4, "-$1").toLowerCase();
}, Y4 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, X4 = /[&><"']/g;
function K4(e) {
  return String(e).replace(X4, (t) => Y4[t]);
}
var wo = function e(t) {
  return t.type === "ordgroup" || t.type === "color" ? t.body.length === 1 ? e(t.body[0]) : t : t.type === "font" ? e(t.body) : t;
}, J4 = function(t) {
  var r = wo(t);
  return r.type === "mathord" || r.type === "textord" || r.type === "atom";
}, Z4 = function(t) {
  if (!t)
    throw new Error("Expected non-null, but got " + String(t));
  return t;
}, Q4 = function(t) {
  var r = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
  return r ? r[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(r[1]) ? null : r[1].toLowerCase() : "_relative";
}, pe = {
  deflt: U4,
  escape: K4,
  hyphenate: W4,
  getBaseElem: wo,
  isCharacterBox: J4,
  protocolFromUrl: Q4
}, pn = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (e) => "#" + e
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (e, t) => (t.push(e), t)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (e) => Math.max(0, e),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (e) => Math.max(0, e),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (e) => Math.max(0, e),
    cli: "-e, --max-expand <n>",
    cliProcessor: (e) => e === "Infinity" ? 1 / 0 : parseInt(e)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function em(e) {
  if (e.default)
    return e.default;
  var t = e.type, r = Array.isArray(t) ? t[0] : t;
  if (typeof r != "string")
    return r.enum[0];
  switch (r) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class hi {
  constructor(t) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, t = t || {};
    for (var r in pn)
      if (pn.hasOwnProperty(r)) {
        var n = pn[r];
        this[r] = t[r] !== void 0 ? n.processor ? n.processor(t[r]) : t[r] : em(n);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(t, r, n) {
    var i = this.strict;
    if (typeof i == "function" && (i = i(t, r, n)), !(!i || i === "ignore")) {
      if (i === !0 || i === "error")
        throw new O("LaTeX-incompatible input and strict mode is set to 'error': " + (r + " [" + t + "]"), n);
      i === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + t + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + r + " [" + t + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(t, r, n) {
    var i = this.strict;
    if (typeof i == "function")
      try {
        i = i(t, r, n);
      } catch {
        i = "error";
      }
    return !i || i === "ignore" ? !1 : i === !0 || i === "error" ? !0 : i === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + t + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + r + " [" + t + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(t) {
    if (t.url && !t.protocol) {
      var r = pe.protocolFromUrl(t.url);
      if (r == null)
        return !1;
      t.protocol = r;
    }
    var n = typeof this.trust == "function" ? this.trust(t) : this.trust;
    return !!n;
  }
}
class Wt {
  constructor(t, r, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = t, this.size = r, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return At[tm[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return At[rm[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return At[nm[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return At[im[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return At[am[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return At[lm[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var mi = 0, xn = 1, xr = 2, Ot = 3, Hr = 4, gt = 5, kr = 6, Ze = 7, At = [new Wt(mi, 0, !1), new Wt(xn, 0, !0), new Wt(xr, 1, !1), new Wt(Ot, 1, !0), new Wt(Hr, 2, !1), new Wt(gt, 2, !0), new Wt(kr, 3, !1), new Wt(Ze, 3, !0)], tm = [Hr, gt, Hr, gt, kr, Ze, kr, Ze], rm = [gt, gt, gt, gt, Ze, Ze, Ze, Ze], nm = [xr, Ot, Hr, gt, kr, Ze, kr, Ze], im = [Ot, Ot, gt, gt, Ze, Ze, Ze, Ze], am = [xn, xn, Ot, Ot, gt, gt, Ze, Ze], lm = [mi, xn, xr, Ot, xr, Ot, xr, Ot], Q = {
  DISPLAY: At[mi],
  TEXT: At[xr],
  SCRIPT: At[Hr],
  SCRIPTSCRIPT: At[kr]
}, O0 = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function om(e) {
  for (var t = 0; t < O0.length; t++)
    for (var r = O0[t], n = 0; n < r.blocks.length; n++) {
      var i = r.blocks[n];
      if (e >= i[0] && e <= i[1])
        return r.name;
    }
  return null;
}
var dn = [];
O0.forEach((e) => e.blocks.forEach((t) => dn.push(...t)));
function ko(e) {
  for (var t = 0; t < dn.length; t += 2)
    if (e >= dn[t] && e <= dn[t + 1])
      return !0;
  return !1;
}
var vr = 80, sm = function(t, r) {
  return "M95," + (622 + t + r) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + t / 2.075 + " -" + t + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + t) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + t) + " " + r + "h400000v" + (40 + t) + "h-400000z";
}, um = function(t, r) {
  return "M263," + (601 + t + r) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + t / 2.084 + " -" + t + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + t) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + t) + " " + r + "h400000v" + (40 + t) + "h-400000z";
}, cm = function(t, r) {
  return "M983 " + (10 + t + r) + `
l` + t / 3.13 + " -" + t + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + t) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + t) + " " + r + "h400000v" + (40 + t) + "h-400000z";
}, hm = function(t, r) {
  return "M424," + (2398 + t + r) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + t / 4.223 + " -" + t + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + t) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + t) + " " + r + `
h400000v` + (40 + t) + "h-400000z";
}, mm = function(t, r) {
  return "M473," + (2713 + t + r) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + t / 5.298 + " -" + t + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + t) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + t) + " " + r + "h400000v" + (40 + t) + "H1017.7z";
}, fm = function(t) {
  var r = t / 2;
  return "M400000 " + t + " H0 L" + r + " 0 l65 45 L145 " + (t - 80) + " H400000z";
}, pm = function(t, r, n) {
  var i = n - 54 - r - t;
  return "M702 " + (t + r) + "H400000" + (40 + t) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + r + "H400000v" + (40 + t) + "H742z";
}, dm = function(t, r, n) {
  r = 1e3 * r;
  var i = "";
  switch (t) {
    case "sqrtMain":
      i = sm(r, vr);
      break;
    case "sqrtSize1":
      i = um(r, vr);
      break;
    case "sqrtSize2":
      i = cm(r, vr);
      break;
    case "sqrtSize3":
      i = hm(r, vr);
      break;
    case "sqrtSize4":
      i = mm(r, vr);
      break;
    case "sqrtTall":
      i = pm(r, vr, n);
  }
  return i;
}, gm = function(t, r) {
  switch (t) {
    case "⎜":
      return "M291 0 H417 V" + r + " H291z M291 0 H417 V" + r + " H291z";
    case "∣":
      return "M145 0 H188 V" + r + " H145z M145 0 H188 V" + r + " H145z";
    case "∥":
      return "M145 0 H188 V" + r + " H145z M145 0 H188 V" + r + " H145z" + ("M367 0 H410 V" + r + " H367z M367 0 H410 V" + r + " H367z");
    case "⎟":
      return "M457 0 H583 V" + r + " H457z M457 0 H583 V" + r + " H457z";
    case "⎢":
      return "M319 0 H403 V" + r + " H319z M319 0 H403 V" + r + " H319z";
    case "⎥":
      return "M263 0 H347 V" + r + " H263z M263 0 H347 V" + r + " H263z";
    case "⎪":
      return "M384 0 H504 V" + r + " H384z M384 0 H504 V" + r + " H384z";
    case "⏐":
      return "M312 0 H355 V" + r + " H312z M312 0 H355 V" + r + " H312z";
    case "‖":
      return "M257 0 H300 V" + r + " H257z M257 0 H300 V" + r + " H257z" + ("M478 0 H521 V" + r + " H478z M478 0 H521 V" + r + " H478z");
    default:
      return "";
  }
}, Oa = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, vm = function(t, r) {
  switch (t) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + r + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + r + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + r + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + r + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + r + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + r + ` v585 h43z
M367 15 v585 v` + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + r + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + r + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + r + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + r + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + r + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + r + ` v602 h84z
M403 1759 V0 H319 V1759 v` + r + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + r + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + r + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (r + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (r + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (r + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (r + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class Wr {
  // Never used; needed for satisfying interface.
  constructor(t) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = t, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(t) {
    return this.classes.includes(t);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var t = document.createDocumentFragment(), r = 0; r < this.children.length; r++)
      t.appendChild(this.children[r].toNode());
    return t;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var t = "", r = 0; r < this.children.length; r++)
      t += this.children[r].toMarkup();
    return t;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var t = (r) => r.toText();
    return this.children.map(t).join("");
  }
}
var Ct = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, tn = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, La = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function ym(e, t) {
  Ct[e] = t;
}
function fi(e, t, r) {
  if (!Ct[t])
    throw new Error("Font metrics not found for font: " + t + ".");
  var n = e.charCodeAt(0), i = Ct[t][n];
  if (!i && e[0] in La && (n = La[e[0]].charCodeAt(0), i = Ct[t][n]), !i && r === "text" && ko(n) && (i = Ct[t][77]), i)
    return {
      depth: i[0],
      height: i[1],
      italic: i[2],
      skew: i[3],
      width: i[4]
    };
}
var n0 = {};
function bm(e) {
  var t;
  if (e >= 5 ? t = 0 : e >= 3 ? t = 1 : t = 2, !n0[t]) {
    var r = n0[t] = {
      cssEmPerMu: tn.quad[t] / 18
    };
    for (var n in tn)
      tn.hasOwnProperty(n) && (r[n] = tn[n][t]);
  }
  return n0[t];
}
var xm = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], qa = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], Ha = function(t, r) {
  return r.size < 2 ? t : xm[t - 1][r.size - 1];
};
class Pt {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(t) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || Pt.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = qa[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(t) {
    var r = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var n in t)
      t.hasOwnProperty(n) && (r[n] = t[n]);
    return new Pt(r);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(t) {
    return this.style === t ? this : this.extend({
      style: t,
      size: Ha(this.textSize, t)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(t) {
    return this.size === t && this.textSize === t ? this : this.extend({
      style: this.style.text(),
      size: t,
      textSize: t,
      sizeMultiplier: qa[t - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(t) {
    t = t || this.style.text();
    var r = Ha(Pt.BASESIZE, t);
    return this.size === r && this.textSize === Pt.BASESIZE && this.style === t ? this : this.extend({
      style: t,
      size: r
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var t;
    switch (this.style.id) {
      case 4:
      case 5:
        t = 3;
        break;
      case 6:
      case 7:
        t = 1;
        break;
      default:
        t = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: t
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(t) {
    return this.extend({
      color: t
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(t) {
    return this.extend({
      font: t
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(t) {
    return this.extend({
      fontFamily: t,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(t) {
    return this.extend({
      fontWeight: t,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(t) {
    return this.extend({
      fontShape: t,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(t) {
    return t.size !== this.size ? ["sizing", "reset-size" + t.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== Pt.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Pt.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = bm(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Pt.BASESIZE = 6;
var L0 = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, wm = {
  ex: !0,
  em: !0,
  mu: !0
}, So = function(t) {
  return typeof t != "string" && (t = t.unit), t in L0 || t in wm || t === "ex";
}, De = function(t, r) {
  var n;
  if (t.unit in L0)
    n = L0[t.unit] / r.fontMetrics().ptPerEm / r.sizeMultiplier;
  else if (t.unit === "mu")
    n = r.fontMetrics().cssEmPerMu;
  else {
    var i;
    if (r.style.isTight() ? i = r.havingStyle(r.style.text()) : i = r, t.unit === "ex")
      n = i.fontMetrics().xHeight;
    else if (t.unit === "em")
      n = i.fontMetrics().quad;
    else
      throw new O("Invalid unit: '" + t.unit + "'");
    i !== r && (n *= i.sizeMultiplier / r.sizeMultiplier);
  }
  return Math.min(t.number * n, r.maxSize);
}, q = function(t) {
  return +t.toFixed(4) + "em";
}, Kt = function(t) {
  return t.filter((r) => r).join(" ");
}, To = function(t, r, n) {
  if (this.classes = t || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, r) {
    r.style.isTight() && this.classes.push("mtight");
    var i = r.getColor();
    i && (this.style.color = i);
  }
}, Ao = function(t) {
  var r = document.createElement(t);
  r.className = Kt(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (r.style[n] = this.style[n]);
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && r.setAttribute(i, this.attributes[i]);
  for (var a = 0; a < this.children.length; a++)
    r.appendChild(this.children[a].toNode());
  return r;
}, km = /[\s"'>/=\x00-\x1f]/, Co = function(t) {
  var r = "<" + t;
  this.classes.length && (r += ' class="' + pe.escape(Kt(this.classes)) + '"');
  var n = "";
  for (var i in this.style)
    this.style.hasOwnProperty(i) && (n += pe.hyphenate(i) + ":" + this.style[i] + ";");
  n && (r += ' style="' + pe.escape(n) + '"');
  for (var a in this.attributes)
    if (this.attributes.hasOwnProperty(a)) {
      if (km.test(a))
        throw new O("Invalid attribute name '" + a + "'");
      r += " " + a + '="' + pe.escape(this.attributes[a]) + '"';
    }
  r += ">";
  for (var l = 0; l < this.children.length; l++)
    r += this.children[l].toMarkup();
  return r += "</" + t + ">", r;
};
class Yr {
  constructor(t, r, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, To.call(this, t, n, i), this.children = r || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(t, r) {
    this.attributes[t] = r;
  }
  hasClass(t) {
    return this.classes.includes(t);
  }
  toNode() {
    return Ao.call(this, "span");
  }
  toMarkup() {
    return Co.call(this, "span");
  }
}
class pi {
  constructor(t, r, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, To.call(this, r, i), this.children = n || [], this.setAttribute("href", t);
  }
  setAttribute(t, r) {
    this.attributes[t] = r;
  }
  hasClass(t) {
    return this.classes.includes(t);
  }
  toNode() {
    return Ao.call(this, "a");
  }
  toMarkup() {
    return Co.call(this, "a");
  }
}
class Sm {
  constructor(t, r, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = t, this.classes = ["mord"], this.style = n;
  }
  hasClass(t) {
    return this.classes.includes(t);
  }
  toNode() {
    var t = document.createElement("img");
    t.src = this.src, t.alt = this.alt, t.className = "mord";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
    return t;
  }
  toMarkup() {
    var t = '<img src="' + pe.escape(this.src) + '"' + (' alt="' + pe.escape(this.alt) + '"'), r = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r += pe.hyphenate(n) + ":" + this.style[n] + ";");
    return r && (t += ' style="' + pe.escape(r) + '"'), t += "'/>", t;
  }
}
var Tm = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class vt {
  constructor(t, r, n, i, a, l, o, s) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = t, this.height = r || 0, this.depth = n || 0, this.italic = i || 0, this.skew = a || 0, this.width = l || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0;
    var u = om(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Tm[this.text]);
  }
  hasClass(t) {
    return this.classes.includes(t);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var t = document.createTextNode(this.text), r = null;
    this.italic > 0 && (r = document.createElement("span"), r.style.marginRight = q(this.italic)), this.classes.length > 0 && (r = r || document.createElement("span"), r.className = Kt(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r = r || document.createElement("span"), r.style[n] = this.style[n]);
    return r ? (r.appendChild(t), r) : t;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var t = !1, r = "<span";
    this.classes.length && (t = !0, r += ' class="', r += pe.escape(Kt(this.classes)), r += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var i in this.style)
      this.style.hasOwnProperty(i) && (n += pe.hyphenate(i) + ":" + this.style[i] + ";");
    n && (t = !0, r += ' style="' + pe.escape(n) + '"');
    var a = pe.escape(this.text);
    return t ? (r += ">", r += a, r += "</span>", r) : a;
  }
}
class qt {
  constructor(t, r) {
    this.children = void 0, this.attributes = void 0, this.children = t || [], this.attributes = r || {};
  }
  toNode() {
    var t = "http://www.w3.org/2000/svg", r = document.createElementNS(t, "svg");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && r.setAttribute(n, this.attributes[n]);
    for (var i = 0; i < this.children.length; i++)
      r.appendChild(this.children[i].toNode());
    return r;
  }
  toMarkup() {
    var t = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (t += " " + r + '="' + pe.escape(this.attributes[r]) + '"');
    t += ">";
    for (var n = 0; n < this.children.length; n++)
      t += this.children[n].toMarkup();
    return t += "</svg>", t;
  }
}
class Jt {
  constructor(t, r) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = t, this.alternate = r;
  }
  toNode() {
    var t = "http://www.w3.org/2000/svg", r = document.createElementNS(t, "path");
    return this.alternate ? r.setAttribute("d", this.alternate) : r.setAttribute("d", Oa[this.pathName]), r;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + pe.escape(this.alternate) + '"/>' : '<path d="' + pe.escape(Oa[this.pathName]) + '"/>';
  }
}
class q0 {
  constructor(t) {
    this.attributes = void 0, this.attributes = t || {};
  }
  toNode() {
    var t = "http://www.w3.org/2000/svg", r = document.createElementNS(t, "line");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && r.setAttribute(n, this.attributes[n]);
    return r;
  }
  toMarkup() {
    var t = "<line";
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (t += " " + r + '="' + pe.escape(this.attributes[r]) + '"');
    return t += "/>", t;
  }
}
function ja(e) {
  if (e instanceof vt)
    return e;
  throw new Error("Expected symbolNode but got " + String(e) + ".");
}
function Am(e) {
  if (e instanceof Yr)
    return e;
  throw new Error("Expected span<HtmlDomNode> but got " + String(e) + ".");
}
var Cm = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, Mm = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Te = {
  math: {},
  text: {}
};
function c(e, t, r, n, i, a) {
  Te[e][i] = {
    font: t,
    group: r,
    replace: n
  }, a && n && (Te[e][n] = Te[e][i]);
}
var f = "math", N = "text", g = "main", x = "ams", Me = "accent-token", Y = "bin", Qe = "close", Ar = "inner", Z = "mathord", Le = "op-token", mt = "open", Rn = "punct", w = "rel", _t = "spacing", C = "textord";
c(f, g, w, "≡", "\\equiv", !0);
c(f, g, w, "≺", "\\prec", !0);
c(f, g, w, "≻", "\\succ", !0);
c(f, g, w, "∼", "\\sim", !0);
c(f, g, w, "⊥", "\\perp");
c(f, g, w, "⪯", "\\preceq", !0);
c(f, g, w, "⪰", "\\succeq", !0);
c(f, g, w, "≃", "\\simeq", !0);
c(f, g, w, "∣", "\\mid", !0);
c(f, g, w, "≪", "\\ll", !0);
c(f, g, w, "≫", "\\gg", !0);
c(f, g, w, "≍", "\\asymp", !0);
c(f, g, w, "∥", "\\parallel");
c(f, g, w, "⋈", "\\bowtie", !0);
c(f, g, w, "⌣", "\\smile", !0);
c(f, g, w, "⊑", "\\sqsubseteq", !0);
c(f, g, w, "⊒", "\\sqsupseteq", !0);
c(f, g, w, "≐", "\\doteq", !0);
c(f, g, w, "⌢", "\\frown", !0);
c(f, g, w, "∋", "\\ni", !0);
c(f, g, w, "∝", "\\propto", !0);
c(f, g, w, "⊢", "\\vdash", !0);
c(f, g, w, "⊣", "\\dashv", !0);
c(f, g, w, "∋", "\\owns");
c(f, g, Rn, ".", "\\ldotp");
c(f, g, Rn, "⋅", "\\cdotp");
c(f, g, C, "#", "\\#");
c(N, g, C, "#", "\\#");
c(f, g, C, "&", "\\&");
c(N, g, C, "&", "\\&");
c(f, g, C, "ℵ", "\\aleph", !0);
c(f, g, C, "∀", "\\forall", !0);
c(f, g, C, "ℏ", "\\hbar", !0);
c(f, g, C, "∃", "\\exists", !0);
c(f, g, C, "∇", "\\nabla", !0);
c(f, g, C, "♭", "\\flat", !0);
c(f, g, C, "ℓ", "\\ell", !0);
c(f, g, C, "♮", "\\natural", !0);
c(f, g, C, "♣", "\\clubsuit", !0);
c(f, g, C, "℘", "\\wp", !0);
c(f, g, C, "♯", "\\sharp", !0);
c(f, g, C, "♢", "\\diamondsuit", !0);
c(f, g, C, "ℜ", "\\Re", !0);
c(f, g, C, "♡", "\\heartsuit", !0);
c(f, g, C, "ℑ", "\\Im", !0);
c(f, g, C, "♠", "\\spadesuit", !0);
c(f, g, C, "§", "\\S", !0);
c(N, g, C, "§", "\\S");
c(f, g, C, "¶", "\\P", !0);
c(N, g, C, "¶", "\\P");
c(f, g, C, "†", "\\dag");
c(N, g, C, "†", "\\dag");
c(N, g, C, "†", "\\textdagger");
c(f, g, C, "‡", "\\ddag");
c(N, g, C, "‡", "\\ddag");
c(N, g, C, "‡", "\\textdaggerdbl");
c(f, g, Qe, "⎱", "\\rmoustache", !0);
c(f, g, mt, "⎰", "\\lmoustache", !0);
c(f, g, Qe, "⟯", "\\rgroup", !0);
c(f, g, mt, "⟮", "\\lgroup", !0);
c(f, g, Y, "∓", "\\mp", !0);
c(f, g, Y, "⊖", "\\ominus", !0);
c(f, g, Y, "⊎", "\\uplus", !0);
c(f, g, Y, "⊓", "\\sqcap", !0);
c(f, g, Y, "∗", "\\ast");
c(f, g, Y, "⊔", "\\sqcup", !0);
c(f, g, Y, "◯", "\\bigcirc", !0);
c(f, g, Y, "∙", "\\bullet", !0);
c(f, g, Y, "‡", "\\ddagger");
c(f, g, Y, "≀", "\\wr", !0);
c(f, g, Y, "⨿", "\\amalg");
c(f, g, Y, "&", "\\And");
c(f, g, w, "⟵", "\\longleftarrow", !0);
c(f, g, w, "⇐", "\\Leftarrow", !0);
c(f, g, w, "⟸", "\\Longleftarrow", !0);
c(f, g, w, "⟶", "\\longrightarrow", !0);
c(f, g, w, "⇒", "\\Rightarrow", !0);
c(f, g, w, "⟹", "\\Longrightarrow", !0);
c(f, g, w, "↔", "\\leftrightarrow", !0);
c(f, g, w, "⟷", "\\longleftrightarrow", !0);
c(f, g, w, "⇔", "\\Leftrightarrow", !0);
c(f, g, w, "⟺", "\\Longleftrightarrow", !0);
c(f, g, w, "↦", "\\mapsto", !0);
c(f, g, w, "⟼", "\\longmapsto", !0);
c(f, g, w, "↗", "\\nearrow", !0);
c(f, g, w, "↩", "\\hookleftarrow", !0);
c(f, g, w, "↪", "\\hookrightarrow", !0);
c(f, g, w, "↘", "\\searrow", !0);
c(f, g, w, "↼", "\\leftharpoonup", !0);
c(f, g, w, "⇀", "\\rightharpoonup", !0);
c(f, g, w, "↙", "\\swarrow", !0);
c(f, g, w, "↽", "\\leftharpoondown", !0);
c(f, g, w, "⇁", "\\rightharpoondown", !0);
c(f, g, w, "↖", "\\nwarrow", !0);
c(f, g, w, "⇌", "\\rightleftharpoons", !0);
c(f, x, w, "≮", "\\nless", !0);
c(f, x, w, "", "\\@nleqslant");
c(f, x, w, "", "\\@nleqq");
c(f, x, w, "⪇", "\\lneq", !0);
c(f, x, w, "≨", "\\lneqq", !0);
c(f, x, w, "", "\\@lvertneqq");
c(f, x, w, "⋦", "\\lnsim", !0);
c(f, x, w, "⪉", "\\lnapprox", !0);
c(f, x, w, "⊀", "\\nprec", !0);
c(f, x, w, "⋠", "\\npreceq", !0);
c(f, x, w, "⋨", "\\precnsim", !0);
c(f, x, w, "⪹", "\\precnapprox", !0);
c(f, x, w, "≁", "\\nsim", !0);
c(f, x, w, "", "\\@nshortmid");
c(f, x, w, "∤", "\\nmid", !0);
c(f, x, w, "⊬", "\\nvdash", !0);
c(f, x, w, "⊭", "\\nvDash", !0);
c(f, x, w, "⋪", "\\ntriangleleft");
c(f, x, w, "⋬", "\\ntrianglelefteq", !0);
c(f, x, w, "⊊", "\\subsetneq", !0);
c(f, x, w, "", "\\@varsubsetneq");
c(f, x, w, "⫋", "\\subsetneqq", !0);
c(f, x, w, "", "\\@varsubsetneqq");
c(f, x, w, "≯", "\\ngtr", !0);
c(f, x, w, "", "\\@ngeqslant");
c(f, x, w, "", "\\@ngeqq");
c(f, x, w, "⪈", "\\gneq", !0);
c(f, x, w, "≩", "\\gneqq", !0);
c(f, x, w, "", "\\@gvertneqq");
c(f, x, w, "⋧", "\\gnsim", !0);
c(f, x, w, "⪊", "\\gnapprox", !0);
c(f, x, w, "⊁", "\\nsucc", !0);
c(f, x, w, "⋡", "\\nsucceq", !0);
c(f, x, w, "⋩", "\\succnsim", !0);
c(f, x, w, "⪺", "\\succnapprox", !0);
c(f, x, w, "≆", "\\ncong", !0);
c(f, x, w, "", "\\@nshortparallel");
c(f, x, w, "∦", "\\nparallel", !0);
c(f, x, w, "⊯", "\\nVDash", !0);
c(f, x, w, "⋫", "\\ntriangleright");
c(f, x, w, "⋭", "\\ntrianglerighteq", !0);
c(f, x, w, "", "\\@nsupseteqq");
c(f, x, w, "⊋", "\\supsetneq", !0);
c(f, x, w, "", "\\@varsupsetneq");
c(f, x, w, "⫌", "\\supsetneqq", !0);
c(f, x, w, "", "\\@varsupsetneqq");
c(f, x, w, "⊮", "\\nVdash", !0);
c(f, x, w, "⪵", "\\precneqq", !0);
c(f, x, w, "⪶", "\\succneqq", !0);
c(f, x, w, "", "\\@nsubseteqq");
c(f, x, Y, "⊴", "\\unlhd");
c(f, x, Y, "⊵", "\\unrhd");
c(f, x, w, "↚", "\\nleftarrow", !0);
c(f, x, w, "↛", "\\nrightarrow", !0);
c(f, x, w, "⇍", "\\nLeftarrow", !0);
c(f, x, w, "⇏", "\\nRightarrow", !0);
c(f, x, w, "↮", "\\nleftrightarrow", !0);
c(f, x, w, "⇎", "\\nLeftrightarrow", !0);
c(f, x, w, "△", "\\vartriangle");
c(f, x, C, "ℏ", "\\hslash");
c(f, x, C, "▽", "\\triangledown");
c(f, x, C, "◊", "\\lozenge");
c(f, x, C, "Ⓢ", "\\circledS");
c(f, x, C, "®", "\\circledR");
c(N, x, C, "®", "\\circledR");
c(f, x, C, "∡", "\\measuredangle", !0);
c(f, x, C, "∄", "\\nexists");
c(f, x, C, "℧", "\\mho");
c(f, x, C, "Ⅎ", "\\Finv", !0);
c(f, x, C, "⅁", "\\Game", !0);
c(f, x, C, "‵", "\\backprime");
c(f, x, C, "▲", "\\blacktriangle");
c(f, x, C, "▼", "\\blacktriangledown");
c(f, x, C, "■", "\\blacksquare");
c(f, x, C, "⧫", "\\blacklozenge");
c(f, x, C, "★", "\\bigstar");
c(f, x, C, "∢", "\\sphericalangle", !0);
c(f, x, C, "∁", "\\complement", !0);
c(f, x, C, "ð", "\\eth", !0);
c(N, g, C, "ð", "ð");
c(f, x, C, "╱", "\\diagup");
c(f, x, C, "╲", "\\diagdown");
c(f, x, C, "□", "\\square");
c(f, x, C, "□", "\\Box");
c(f, x, C, "◊", "\\Diamond");
c(f, x, C, "¥", "\\yen", !0);
c(N, x, C, "¥", "\\yen", !0);
c(f, x, C, "✓", "\\checkmark", !0);
c(N, x, C, "✓", "\\checkmark");
c(f, x, C, "ℶ", "\\beth", !0);
c(f, x, C, "ℸ", "\\daleth", !0);
c(f, x, C, "ℷ", "\\gimel", !0);
c(f, x, C, "ϝ", "\\digamma", !0);
c(f, x, C, "ϰ", "\\varkappa");
c(f, x, mt, "┌", "\\@ulcorner", !0);
c(f, x, Qe, "┐", "\\@urcorner", !0);
c(f, x, mt, "└", "\\@llcorner", !0);
c(f, x, Qe, "┘", "\\@lrcorner", !0);
c(f, x, w, "≦", "\\leqq", !0);
c(f, x, w, "⩽", "\\leqslant", !0);
c(f, x, w, "⪕", "\\eqslantless", !0);
c(f, x, w, "≲", "\\lesssim", !0);
c(f, x, w, "⪅", "\\lessapprox", !0);
c(f, x, w, "≊", "\\approxeq", !0);
c(f, x, Y, "⋖", "\\lessdot");
c(f, x, w, "⋘", "\\lll", !0);
c(f, x, w, "≶", "\\lessgtr", !0);
c(f, x, w, "⋚", "\\lesseqgtr", !0);
c(f, x, w, "⪋", "\\lesseqqgtr", !0);
c(f, x, w, "≑", "\\doteqdot");
c(f, x, w, "≓", "\\risingdotseq", !0);
c(f, x, w, "≒", "\\fallingdotseq", !0);
c(f, x, w, "∽", "\\backsim", !0);
c(f, x, w, "⋍", "\\backsimeq", !0);
c(f, x, w, "⫅", "\\subseteqq", !0);
c(f, x, w, "⋐", "\\Subset", !0);
c(f, x, w, "⊏", "\\sqsubset", !0);
c(f, x, w, "≼", "\\preccurlyeq", !0);
c(f, x, w, "⋞", "\\curlyeqprec", !0);
c(f, x, w, "≾", "\\precsim", !0);
c(f, x, w, "⪷", "\\precapprox", !0);
c(f, x, w, "⊲", "\\vartriangleleft");
c(f, x, w, "⊴", "\\trianglelefteq");
c(f, x, w, "⊨", "\\vDash", !0);
c(f, x, w, "⊪", "\\Vvdash", !0);
c(f, x, w, "⌣", "\\smallsmile");
c(f, x, w, "⌢", "\\smallfrown");
c(f, x, w, "≏", "\\bumpeq", !0);
c(f, x, w, "≎", "\\Bumpeq", !0);
c(f, x, w, "≧", "\\geqq", !0);
c(f, x, w, "⩾", "\\geqslant", !0);
c(f, x, w, "⪖", "\\eqslantgtr", !0);
c(f, x, w, "≳", "\\gtrsim", !0);
c(f, x, w, "⪆", "\\gtrapprox", !0);
c(f, x, Y, "⋗", "\\gtrdot");
c(f, x, w, "⋙", "\\ggg", !0);
c(f, x, w, "≷", "\\gtrless", !0);
c(f, x, w, "⋛", "\\gtreqless", !0);
c(f, x, w, "⪌", "\\gtreqqless", !0);
c(f, x, w, "≖", "\\eqcirc", !0);
c(f, x, w, "≗", "\\circeq", !0);
c(f, x, w, "≜", "\\triangleq", !0);
c(f, x, w, "∼", "\\thicksim");
c(f, x, w, "≈", "\\thickapprox");
c(f, x, w, "⫆", "\\supseteqq", !0);
c(f, x, w, "⋑", "\\Supset", !0);
c(f, x, w, "⊐", "\\sqsupset", !0);
c(f, x, w, "≽", "\\succcurlyeq", !0);
c(f, x, w, "⋟", "\\curlyeqsucc", !0);
c(f, x, w, "≿", "\\succsim", !0);
c(f, x, w, "⪸", "\\succapprox", !0);
c(f, x, w, "⊳", "\\vartriangleright");
c(f, x, w, "⊵", "\\trianglerighteq");
c(f, x, w, "⊩", "\\Vdash", !0);
c(f, x, w, "∣", "\\shortmid");
c(f, x, w, "∥", "\\shortparallel");
c(f, x, w, "≬", "\\between", !0);
c(f, x, w, "⋔", "\\pitchfork", !0);
c(f, x, w, "∝", "\\varpropto");
c(f, x, w, "◀", "\\blacktriangleleft");
c(f, x, w, "∴", "\\therefore", !0);
c(f, x, w, "∍", "\\backepsilon");
c(f, x, w, "▶", "\\blacktriangleright");
c(f, x, w, "∵", "\\because", !0);
c(f, x, w, "⋘", "\\llless");
c(f, x, w, "⋙", "\\gggtr");
c(f, x, Y, "⊲", "\\lhd");
c(f, x, Y, "⊳", "\\rhd");
c(f, x, w, "≂", "\\eqsim", !0);
c(f, g, w, "⋈", "\\Join");
c(f, x, w, "≑", "\\Doteq", !0);
c(f, x, Y, "∔", "\\dotplus", !0);
c(f, x, Y, "∖", "\\smallsetminus");
c(f, x, Y, "⋒", "\\Cap", !0);
c(f, x, Y, "⋓", "\\Cup", !0);
c(f, x, Y, "⩞", "\\doublebarwedge", !0);
c(f, x, Y, "⊟", "\\boxminus", !0);
c(f, x, Y, "⊞", "\\boxplus", !0);
c(f, x, Y, "⋇", "\\divideontimes", !0);
c(f, x, Y, "⋉", "\\ltimes", !0);
c(f, x, Y, "⋊", "\\rtimes", !0);
c(f, x, Y, "⋋", "\\leftthreetimes", !0);
c(f, x, Y, "⋌", "\\rightthreetimes", !0);
c(f, x, Y, "⋏", "\\curlywedge", !0);
c(f, x, Y, "⋎", "\\curlyvee", !0);
c(f, x, Y, "⊝", "\\circleddash", !0);
c(f, x, Y, "⊛", "\\circledast", !0);
c(f, x, Y, "⋅", "\\centerdot");
c(f, x, Y, "⊺", "\\intercal", !0);
c(f, x, Y, "⋒", "\\doublecap");
c(f, x, Y, "⋓", "\\doublecup");
c(f, x, Y, "⊠", "\\boxtimes", !0);
c(f, x, w, "⇢", "\\dashrightarrow", !0);
c(f, x, w, "⇠", "\\dashleftarrow", !0);
c(f, x, w, "⇇", "\\leftleftarrows", !0);
c(f, x, w, "⇆", "\\leftrightarrows", !0);
c(f, x, w, "⇚", "\\Lleftarrow", !0);
c(f, x, w, "↞", "\\twoheadleftarrow", !0);
c(f, x, w, "↢", "\\leftarrowtail", !0);
c(f, x, w, "↫", "\\looparrowleft", !0);
c(f, x, w, "⇋", "\\leftrightharpoons", !0);
c(f, x, w, "↶", "\\curvearrowleft", !0);
c(f, x, w, "↺", "\\circlearrowleft", !0);
c(f, x, w, "↰", "\\Lsh", !0);
c(f, x, w, "⇈", "\\upuparrows", !0);
c(f, x, w, "↿", "\\upharpoonleft", !0);
c(f, x, w, "⇃", "\\downharpoonleft", !0);
c(f, g, w, "⊶", "\\origof", !0);
c(f, g, w, "⊷", "\\imageof", !0);
c(f, x, w, "⊸", "\\multimap", !0);
c(f, x, w, "↭", "\\leftrightsquigarrow", !0);
c(f, x, w, "⇉", "\\rightrightarrows", !0);
c(f, x, w, "⇄", "\\rightleftarrows", !0);
c(f, x, w, "↠", "\\twoheadrightarrow", !0);
c(f, x, w, "↣", "\\rightarrowtail", !0);
c(f, x, w, "↬", "\\looparrowright", !0);
c(f, x, w, "↷", "\\curvearrowright", !0);
c(f, x, w, "↻", "\\circlearrowright", !0);
c(f, x, w, "↱", "\\Rsh", !0);
c(f, x, w, "⇊", "\\downdownarrows", !0);
c(f, x, w, "↾", "\\upharpoonright", !0);
c(f, x, w, "⇂", "\\downharpoonright", !0);
c(f, x, w, "⇝", "\\rightsquigarrow", !0);
c(f, x, w, "⇝", "\\leadsto");
c(f, x, w, "⇛", "\\Rrightarrow", !0);
c(f, x, w, "↾", "\\restriction");
c(f, g, C, "‘", "`");
c(f, g, C, "$", "\\$");
c(N, g, C, "$", "\\$");
c(N, g, C, "$", "\\textdollar");
c(f, g, C, "%", "\\%");
c(N, g, C, "%", "\\%");
c(f, g, C, "_", "\\_");
c(N, g, C, "_", "\\_");
c(N, g, C, "_", "\\textunderscore");
c(f, g, C, "∠", "\\angle", !0);
c(f, g, C, "∞", "\\infty", !0);
c(f, g, C, "′", "\\prime");
c(f, g, C, "△", "\\triangle");
c(f, g, C, "Γ", "\\Gamma", !0);
c(f, g, C, "Δ", "\\Delta", !0);
c(f, g, C, "Θ", "\\Theta", !0);
c(f, g, C, "Λ", "\\Lambda", !0);
c(f, g, C, "Ξ", "\\Xi", !0);
c(f, g, C, "Π", "\\Pi", !0);
c(f, g, C, "Σ", "\\Sigma", !0);
c(f, g, C, "Υ", "\\Upsilon", !0);
c(f, g, C, "Φ", "\\Phi", !0);
c(f, g, C, "Ψ", "\\Psi", !0);
c(f, g, C, "Ω", "\\Omega", !0);
c(f, g, C, "A", "Α");
c(f, g, C, "B", "Β");
c(f, g, C, "E", "Ε");
c(f, g, C, "Z", "Ζ");
c(f, g, C, "H", "Η");
c(f, g, C, "I", "Ι");
c(f, g, C, "K", "Κ");
c(f, g, C, "M", "Μ");
c(f, g, C, "N", "Ν");
c(f, g, C, "O", "Ο");
c(f, g, C, "P", "Ρ");
c(f, g, C, "T", "Τ");
c(f, g, C, "X", "Χ");
c(f, g, C, "¬", "\\neg", !0);
c(f, g, C, "¬", "\\lnot");
c(f, g, C, "⊤", "\\top");
c(f, g, C, "⊥", "\\bot");
c(f, g, C, "∅", "\\emptyset");
c(f, x, C, "∅", "\\varnothing");
c(f, g, Z, "α", "\\alpha", !0);
c(f, g, Z, "β", "\\beta", !0);
c(f, g, Z, "γ", "\\gamma", !0);
c(f, g, Z, "δ", "\\delta", !0);
c(f, g, Z, "ϵ", "\\epsilon", !0);
c(f, g, Z, "ζ", "\\zeta", !0);
c(f, g, Z, "η", "\\eta", !0);
c(f, g, Z, "θ", "\\theta", !0);
c(f, g, Z, "ι", "\\iota", !0);
c(f, g, Z, "κ", "\\kappa", !0);
c(f, g, Z, "λ", "\\lambda", !0);
c(f, g, Z, "μ", "\\mu", !0);
c(f, g, Z, "ν", "\\nu", !0);
c(f, g, Z, "ξ", "\\xi", !0);
c(f, g, Z, "ο", "\\omicron", !0);
c(f, g, Z, "π", "\\pi", !0);
c(f, g, Z, "ρ", "\\rho", !0);
c(f, g, Z, "σ", "\\sigma", !0);
c(f, g, Z, "τ", "\\tau", !0);
c(f, g, Z, "υ", "\\upsilon", !0);
c(f, g, Z, "ϕ", "\\phi", !0);
c(f, g, Z, "χ", "\\chi", !0);
c(f, g, Z, "ψ", "\\psi", !0);
c(f, g, Z, "ω", "\\omega", !0);
c(f, g, Z, "ε", "\\varepsilon", !0);
c(f, g, Z, "ϑ", "\\vartheta", !0);
c(f, g, Z, "ϖ", "\\varpi", !0);
c(f, g, Z, "ϱ", "\\varrho", !0);
c(f, g, Z, "ς", "\\varsigma", !0);
c(f, g, Z, "φ", "\\varphi", !0);
c(f, g, Y, "∗", "*", !0);
c(f, g, Y, "+", "+");
c(f, g, Y, "−", "-", !0);
c(f, g, Y, "⋅", "\\cdot", !0);
c(f, g, Y, "∘", "\\circ", !0);
c(f, g, Y, "÷", "\\div", !0);
c(f, g, Y, "±", "\\pm", !0);
c(f, g, Y, "×", "\\times", !0);
c(f, g, Y, "∩", "\\cap", !0);
c(f, g, Y, "∪", "\\cup", !0);
c(f, g, Y, "∖", "\\setminus", !0);
c(f, g, Y, "∧", "\\land");
c(f, g, Y, "∨", "\\lor");
c(f, g, Y, "∧", "\\wedge", !0);
c(f, g, Y, "∨", "\\vee", !0);
c(f, g, C, "√", "\\surd");
c(f, g, mt, "⟨", "\\langle", !0);
c(f, g, mt, "∣", "\\lvert");
c(f, g, mt, "∥", "\\lVert");
c(f, g, Qe, "?", "?");
c(f, g, Qe, "!", "!");
c(f, g, Qe, "⟩", "\\rangle", !0);
c(f, g, Qe, "∣", "\\rvert");
c(f, g, Qe, "∥", "\\rVert");
c(f, g, w, "=", "=");
c(f, g, w, ":", ":");
c(f, g, w, "≈", "\\approx", !0);
c(f, g, w, "≅", "\\cong", !0);
c(f, g, w, "≥", "\\ge");
c(f, g, w, "≥", "\\geq", !0);
c(f, g, w, "←", "\\gets");
c(f, g, w, ">", "\\gt", !0);
c(f, g, w, "∈", "\\in", !0);
c(f, g, w, "", "\\@not");
c(f, g, w, "⊂", "\\subset", !0);
c(f, g, w, "⊃", "\\supset", !0);
c(f, g, w, "⊆", "\\subseteq", !0);
c(f, g, w, "⊇", "\\supseteq", !0);
c(f, x, w, "⊈", "\\nsubseteq", !0);
c(f, x, w, "⊉", "\\nsupseteq", !0);
c(f, g, w, "⊨", "\\models");
c(f, g, w, "←", "\\leftarrow", !0);
c(f, g, w, "≤", "\\le");
c(f, g, w, "≤", "\\leq", !0);
c(f, g, w, "<", "\\lt", !0);
c(f, g, w, "→", "\\rightarrow", !0);
c(f, g, w, "→", "\\to");
c(f, x, w, "≱", "\\ngeq", !0);
c(f, x, w, "≰", "\\nleq", !0);
c(f, g, _t, " ", "\\ ");
c(f, g, _t, " ", "\\space");
c(f, g, _t, " ", "\\nobreakspace");
c(N, g, _t, " ", "\\ ");
c(N, g, _t, " ", " ");
c(N, g, _t, " ", "\\space");
c(N, g, _t, " ", "\\nobreakspace");
c(f, g, _t, null, "\\nobreak");
c(f, g, _t, null, "\\allowbreak");
c(f, g, Rn, ",", ",");
c(f, g, Rn, ";", ";");
c(f, x, Y, "⊼", "\\barwedge", !0);
c(f, x, Y, "⊻", "\\veebar", !0);
c(f, g, Y, "⊙", "\\odot", !0);
c(f, g, Y, "⊕", "\\oplus", !0);
c(f, g, Y, "⊗", "\\otimes", !0);
c(f, g, C, "∂", "\\partial", !0);
c(f, g, Y, "⊘", "\\oslash", !0);
c(f, x, Y, "⊚", "\\circledcirc", !0);
c(f, x, Y, "⊡", "\\boxdot", !0);
c(f, g, Y, "△", "\\bigtriangleup");
c(f, g, Y, "▽", "\\bigtriangledown");
c(f, g, Y, "†", "\\dagger");
c(f, g, Y, "⋄", "\\diamond");
c(f, g, Y, "⋆", "\\star");
c(f, g, Y, "◃", "\\triangleleft");
c(f, g, Y, "▹", "\\triangleright");
c(f, g, mt, "{", "\\{");
c(N, g, C, "{", "\\{");
c(N, g, C, "{", "\\textbraceleft");
c(f, g, Qe, "}", "\\}");
c(N, g, C, "}", "\\}");
c(N, g, C, "}", "\\textbraceright");
c(f, g, mt, "{", "\\lbrace");
c(f, g, Qe, "}", "\\rbrace");
c(f, g, mt, "[", "\\lbrack", !0);
c(N, g, C, "[", "\\lbrack", !0);
c(f, g, Qe, "]", "\\rbrack", !0);
c(N, g, C, "]", "\\rbrack", !0);
c(f, g, mt, "(", "\\lparen", !0);
c(f, g, Qe, ")", "\\rparen", !0);
c(N, g, C, "<", "\\textless", !0);
c(N, g, C, ">", "\\textgreater", !0);
c(f, g, mt, "⌊", "\\lfloor", !0);
c(f, g, Qe, "⌋", "\\rfloor", !0);
c(f, g, mt, "⌈", "\\lceil", !0);
c(f, g, Qe, "⌉", "\\rceil", !0);
c(f, g, C, "\\", "\\backslash");
c(f, g, C, "∣", "|");
c(f, g, C, "∣", "\\vert");
c(N, g, C, "|", "\\textbar", !0);
c(f, g, C, "∥", "\\|");
c(f, g, C, "∥", "\\Vert");
c(N, g, C, "∥", "\\textbardbl");
c(N, g, C, "~", "\\textasciitilde");
c(N, g, C, "\\", "\\textbackslash");
c(N, g, C, "^", "\\textasciicircum");
c(f, g, w, "↑", "\\uparrow", !0);
c(f, g, w, "⇑", "\\Uparrow", !0);
c(f, g, w, "↓", "\\downarrow", !0);
c(f, g, w, "⇓", "\\Downarrow", !0);
c(f, g, w, "↕", "\\updownarrow", !0);
c(f, g, w, "⇕", "\\Updownarrow", !0);
c(f, g, Le, "∐", "\\coprod");
c(f, g, Le, "⋁", "\\bigvee");
c(f, g, Le, "⋀", "\\bigwedge");
c(f, g, Le, "⨄", "\\biguplus");
c(f, g, Le, "⋂", "\\bigcap");
c(f, g, Le, "⋃", "\\bigcup");
c(f, g, Le, "∫", "\\int");
c(f, g, Le, "∫", "\\intop");
c(f, g, Le, "∬", "\\iint");
c(f, g, Le, "∭", "\\iiint");
c(f, g, Le, "∏", "\\prod");
c(f, g, Le, "∑", "\\sum");
c(f, g, Le, "⨂", "\\bigotimes");
c(f, g, Le, "⨁", "\\bigoplus");
c(f, g, Le, "⨀", "\\bigodot");
c(f, g, Le, "∮", "\\oint");
c(f, g, Le, "∯", "\\oiint");
c(f, g, Le, "∰", "\\oiiint");
c(f, g, Le, "⨆", "\\bigsqcup");
c(f, g, Le, "∫", "\\smallint");
c(N, g, Ar, "…", "\\textellipsis");
c(f, g, Ar, "…", "\\mathellipsis");
c(N, g, Ar, "…", "\\ldots", !0);
c(f, g, Ar, "…", "\\ldots", !0);
c(f, g, Ar, "⋯", "\\@cdots", !0);
c(f, g, Ar, "⋱", "\\ddots", !0);
c(f, g, C, "⋮", "\\varvdots");
c(N, g, C, "⋮", "\\varvdots");
c(f, g, Me, "ˊ", "\\acute");
c(f, g, Me, "ˋ", "\\grave");
c(f, g, Me, "¨", "\\ddot");
c(f, g, Me, "~", "\\tilde");
c(f, g, Me, "ˉ", "\\bar");
c(f, g, Me, "˘", "\\breve");
c(f, g, Me, "ˇ", "\\check");
c(f, g, Me, "^", "\\hat");
c(f, g, Me, "⃗", "\\vec");
c(f, g, Me, "˙", "\\dot");
c(f, g, Me, "˚", "\\mathring");
c(f, g, Z, "", "\\@imath");
c(f, g, Z, "", "\\@jmath");
c(f, g, C, "ı", "ı");
c(f, g, C, "ȷ", "ȷ");
c(N, g, C, "ı", "\\i", !0);
c(N, g, C, "ȷ", "\\j", !0);
c(N, g, C, "ß", "\\ss", !0);
c(N, g, C, "æ", "\\ae", !0);
c(N, g, C, "œ", "\\oe", !0);
c(N, g, C, "ø", "\\o", !0);
c(N, g, C, "Æ", "\\AE", !0);
c(N, g, C, "Œ", "\\OE", !0);
c(N, g, C, "Ø", "\\O", !0);
c(N, g, Me, "ˊ", "\\'");
c(N, g, Me, "ˋ", "\\`");
c(N, g, Me, "ˆ", "\\^");
c(N, g, Me, "˜", "\\~");
c(N, g, Me, "ˉ", "\\=");
c(N, g, Me, "˘", "\\u");
c(N, g, Me, "˙", "\\.");
c(N, g, Me, "¸", "\\c");
c(N, g, Me, "˚", "\\r");
c(N, g, Me, "ˇ", "\\v");
c(N, g, Me, "¨", '\\"');
c(N, g, Me, "˝", "\\H");
c(N, g, Me, "◯", "\\textcircled");
var Mo = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(N, g, C, "–", "--", !0);
c(N, g, C, "–", "\\textendash");
c(N, g, C, "—", "---", !0);
c(N, g, C, "—", "\\textemdash");
c(N, g, C, "‘", "`", !0);
c(N, g, C, "‘", "\\textquoteleft");
c(N, g, C, "’", "'", !0);
c(N, g, C, "’", "\\textquoteright");
c(N, g, C, "“", "``", !0);
c(N, g, C, "“", "\\textquotedblleft");
c(N, g, C, "”", "''", !0);
c(N, g, C, "”", "\\textquotedblright");
c(f, g, C, "°", "\\degree", !0);
c(N, g, C, "°", "\\degree");
c(N, g, C, "°", "\\textdegree", !0);
c(f, g, C, "£", "\\pounds");
c(f, g, C, "£", "\\mathsterling", !0);
c(N, g, C, "£", "\\pounds");
c(N, g, C, "£", "\\textsterling", !0);
c(f, x, C, "✠", "\\maltese");
c(N, x, C, "✠", "\\maltese");
var _a = '0123456789/@."';
for (var i0 = 0; i0 < _a.length; i0++) {
  var $a = _a.charAt(i0);
  c(f, g, C, $a, $a);
}
var Va = '0123456789!@*()-=+";:?/.,';
for (var a0 = 0; a0 < Va.length; a0++) {
  var Ua = Va.charAt(a0);
  c(N, g, C, Ua, Ua);
}
var wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var l0 = 0; l0 < wn.length; l0++) {
  var rn = wn.charAt(l0);
  c(f, g, Z, rn, rn), c(N, g, C, rn, rn);
}
c(f, x, C, "C", "ℂ");
c(N, x, C, "C", "ℂ");
c(f, x, C, "H", "ℍ");
c(N, x, C, "H", "ℍ");
c(f, x, C, "N", "ℕ");
c(N, x, C, "N", "ℕ");
c(f, x, C, "P", "ℙ");
c(N, x, C, "P", "ℙ");
c(f, x, C, "Q", "ℚ");
c(N, x, C, "Q", "ℚ");
c(f, x, C, "R", "ℝ");
c(N, x, C, "R", "ℝ");
c(f, x, C, "Z", "ℤ");
c(N, x, C, "Z", "ℤ");
c(f, g, Z, "h", "ℎ");
c(N, g, Z, "h", "ℎ");
var te = "";
for (var Ke = 0; Ke < wn.length; Ke++) {
  var Ie = wn.charAt(Ke);
  te = String.fromCharCode(55349, 56320 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56372 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56424 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56580 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56684 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56736 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56788 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56840 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56944 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), Ke < 26 && (te = String.fromCharCode(55349, 56632 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te), te = String.fromCharCode(55349, 56476 + Ke), c(f, g, Z, Ie, te), c(N, g, C, Ie, te));
}
te = "𝕜";
c(f, g, Z, "k", te);
c(N, g, C, "k", te);
for (var ar = 0; ar < 10; ar++) {
  var Yt = ar.toString();
  te = String.fromCharCode(55349, 57294 + ar), c(f, g, Z, Yt, te), c(N, g, C, Yt, te), te = String.fromCharCode(55349, 57314 + ar), c(f, g, Z, Yt, te), c(N, g, C, Yt, te), te = String.fromCharCode(55349, 57324 + ar), c(f, g, Z, Yt, te), c(N, g, C, Yt, te), te = String.fromCharCode(55349, 57334 + ar), c(f, g, Z, Yt, te), c(N, g, C, Yt, te);
}
var H0 = "ÐÞþ";
for (var o0 = 0; o0 < H0.length; o0++) {
  var nn = H0.charAt(o0);
  c(f, g, Z, nn, nn), c(N, g, C, nn, nn);
}
var an = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Ga = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], zm = function(t, r) {
  var n = t.charCodeAt(0), i = t.charCodeAt(1), a = (n - 55296) * 1024 + (i - 56320) + 65536, l = r === "math" ? 0 : 1;
  if (119808 <= a && a < 120484) {
    var o = Math.floor((a - 119808) / 26);
    return [an[o][2], an[o][l]];
  } else if (120782 <= a && a <= 120831) {
    var s = Math.floor((a - 120782) / 10);
    return [Ga[s][2], Ga[s][l]];
  } else {
    if (a === 120485 || a === 120486)
      return [an[0][2], an[0][l]];
    if (120486 < a && a < 120782)
      return ["", ""];
    throw new O("Unsupported character: " + t);
  }
}, Fn = function(t, r, n) {
  return Te[n][t] && Te[n][t].replace && (t = Te[n][t].replace), {
    value: t,
    metrics: fi(t, r, n)
  };
}, wt = function(t, r, n, i, a) {
  var l = Fn(t, r, n), o = l.metrics;
  t = l.value;
  var s;
  if (o) {
    var u = o.italic;
    (n === "text" || i && i.font === "mathit") && (u = 0), s = new vt(t, o.height, o.depth, u, o.skew, o.width, a);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + t + "' in style '" + r + "' and mode '" + n + "'")), s = new vt(t, 0, 0, 0, 0, 0, a);
  if (i) {
    s.maxFontSize = i.sizeMultiplier, i.style.isTight() && s.classes.push("mtight");
    var m = i.getColor();
    m && (s.style.color = m);
  }
  return s;
}, Em = function(t, r, n, i) {
  return i === void 0 && (i = []), n.font === "boldsymbol" && Fn(t, "Main-Bold", r).metrics ? wt(t, "Main-Bold", r, n, i.concat(["mathbf"])) : t === "\\" || Te[r][t].font === "main" ? wt(t, "Main-Regular", r, n, i) : wt(t, "AMS-Regular", r, n, i.concat(["amsrm"]));
}, Dm = function(t, r, n, i, a) {
  return a !== "textord" && Fn(t, "Math-BoldItalic", r).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, Im = function(t, r, n) {
  var i = t.mode, a = t.text, l = ["mord"], o = i === "math" || i === "text" && r.font, s = o ? r.font : r.fontFamily, u = "", m = "";
  if (a.charCodeAt(0) === 55349 && ([u, m] = zm(a, i)), u.length > 0)
    return wt(a, u, i, r, l.concat(m));
  if (s) {
    var h, d;
    if (s === "boldsymbol") {
      var p = Dm(a, i, r, l, n);
      h = p.fontName, d = [p.fontClass];
    } else o ? (h = Do[s].fontName, d = [s]) : (h = ln(s, r.fontWeight, r.fontShape), d = [s, r.fontWeight, r.fontShape]);
    if (Fn(a, h, i).metrics)
      return wt(a, h, i, r, l.concat(d));
    if (Mo.hasOwnProperty(a) && h.slice(0, 10) === "Typewriter") {
      for (var y = [], b = 0; b < a.length; b++)
        y.push(wt(a[b], h, i, r, l.concat(d)));
      return Eo(y);
    }
  }
  if (n === "mathord")
    return wt(a, "Math-Italic", i, r, l.concat(["mathnormal"]));
  if (n === "textord") {
    var z = Te[i][a] && Te[i][a].font;
    if (z === "ams") {
      var T = ln("amsrm", r.fontWeight, r.fontShape);
      return wt(a, T, i, r, l.concat("amsrm", r.fontWeight, r.fontShape));
    } else if (z === "main" || !z) {
      var M = ln("textrm", r.fontWeight, r.fontShape);
      return wt(a, M, i, r, l.concat(r.fontWeight, r.fontShape));
    } else {
      var R = ln(z, r.fontWeight, r.fontShape);
      return wt(a, R, i, r, l.concat(R, r.fontWeight, r.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, Rm = (e, t) => {
  if (Kt(e.classes) !== Kt(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize)
    return !1;
  if (e.classes.length === 1) {
    var r = e.classes[0];
    if (r === "mbin" || r === "mord")
      return !1;
  }
  for (var n in e.style)
    if (e.style.hasOwnProperty(n) && e.style[n] !== t.style[n])
      return !1;
  for (var i in t.style)
    if (t.style.hasOwnProperty(i) && e.style[i] !== t.style[i])
      return !1;
  return !0;
}, Fm = (e) => {
  for (var t = 0; t < e.length - 1; t++) {
    var r = e[t], n = e[t + 1];
    r instanceof vt && n instanceof vt && Rm(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, e.splice(t + 1, 1), t--);
  }
  return e;
}, di = function(t) {
  for (var r = 0, n = 0, i = 0, a = 0; a < t.children.length; a++) {
    var l = t.children[a];
    l.height > r && (r = l.height), l.depth > n && (n = l.depth), l.maxFontSize > i && (i = l.maxFontSize);
  }
  t.height = r, t.depth = n, t.maxFontSize = i;
}, rt = function(t, r, n, i) {
  var a = new Yr(t, r, n, i);
  return di(a), a;
}, zo = (e, t, r, n) => new Yr(e, t, r, n), Nm = function(t, r, n) {
  var i = rt([t], [], r);
  return i.height = Math.max(n || r.fontMetrics().defaultRuleThickness, r.minRuleThickness), i.style.borderBottomWidth = q(i.height), i.maxFontSize = 1, i;
}, Bm = function(t, r, n, i) {
  var a = new pi(t, r, n, i);
  return di(a), a;
}, Eo = function(t) {
  var r = new Wr(t);
  return di(r), r;
}, Pm = function(t, r) {
  return t instanceof Wr ? rt([], [t], r) : t;
}, Om = function(t) {
  if (t.positionType === "individualShift") {
    for (var r = t.children, n = [r[0]], i = -r[0].shift - r[0].elem.depth, a = i, l = 1; l < r.length; l++) {
      var o = -r[l].shift - a - r[l].elem.depth, s = o - (r[l - 1].elem.height + r[l - 1].elem.depth);
      a = a + o, n.push({
        type: "kern",
        size: s
      }), n.push(r[l]);
    }
    return {
      children: n,
      depth: i
    };
  }
  var u;
  if (t.positionType === "top") {
    for (var m = t.positionData, h = 0; h < t.children.length; h++) {
      var d = t.children[h];
      m -= d.type === "kern" ? d.size : d.elem.height + d.elem.depth;
    }
    u = m;
  } else if (t.positionType === "bottom")
    u = -t.positionData;
  else {
    var p = t.children[0];
    if (p.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (t.positionType === "shift")
      u = -p.elem.depth - t.positionData;
    else if (t.positionType === "firstBaseline")
      u = -p.elem.depth;
    else
      throw new Error("Invalid positionType " + t.positionType + ".");
  }
  return {
    children: t.children,
    depth: u
  };
}, Lm = function(t, r) {
  for (var {
    children: n,
    depth: i
  } = Om(t), a = 0, l = 0; l < n.length; l++) {
    var o = n[l];
    if (o.type === "elem") {
      var s = o.elem;
      a = Math.max(a, s.maxFontSize, s.height);
    }
  }
  a += 2;
  var u = rt(["pstrut"], []);
  u.style.height = q(a);
  for (var m = [], h = i, d = i, p = i, y = 0; y < n.length; y++) {
    var b = n[y];
    if (b.type === "kern")
      p += b.size;
    else {
      var z = b.elem, T = b.wrapperClasses || [], M = b.wrapperStyle || {}, R = rt(T, [u, z], void 0, M);
      R.style.top = q(-a - p - z.depth), b.marginLeft && (R.style.marginLeft = b.marginLeft), b.marginRight && (R.style.marginRight = b.marginRight), m.push(R), p += z.height + z.depth;
    }
    h = Math.min(h, p), d = Math.max(d, p);
  }
  var $ = rt(["vlist"], m);
  $.style.height = q(d);
  var j;
  if (h < 0) {
    var D = rt([], []), W = rt(["vlist"], [D]);
    W.style.height = q(-h);
    var J = rt(["vlist-s"], [new vt("​")]);
    j = [rt(["vlist-r"], [$, J]), rt(["vlist-r"], [W])];
  } else
    j = [rt(["vlist-r"], [$])];
  var V = rt(["vlist-t"], j);
  return j.length === 2 && V.classes.push("vlist-t2"), V.height = d, V.depth = -h, V;
}, qm = (e, t) => {
  var r = rt(["mspace"], [], t), n = De(e, t);
  return r.style.marginRight = q(n), r;
}, ln = function(t, r, n) {
  var i = "";
  switch (t) {
    case "amsrm":
      i = "AMS";
      break;
    case "textrm":
      i = "Main";
      break;
    case "textsf":
      i = "SansSerif";
      break;
    case "texttt":
      i = "Typewriter";
      break;
    default:
      i = t;
  }
  var a;
  return r === "textbf" && n === "textit" ? a = "BoldItalic" : r === "textbf" ? a = "Bold" : r === "textit" ? a = "Italic" : a = "Regular", i + "-" + a;
}, Do = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathsfit: {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Io = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Hm = function(t, r) {
  var [n, i, a] = Io[t], l = new Jt(n), o = new qt([l], {
    width: q(i),
    height: q(a),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + q(i),
    viewBox: "0 0 " + 1e3 * i + " " + 1e3 * a,
    preserveAspectRatio: "xMinYMin"
  }), s = zo(["overlay"], [o], r);
  return s.height = a, s.style.height = q(a), s.style.width = q(i), s;
}, E = {
  fontMap: Do,
  makeSymbol: wt,
  mathsym: Em,
  makeSpan: rt,
  makeSvgSpan: zo,
  makeLineSpan: Nm,
  makeAnchor: Bm,
  makeFragment: Eo,
  wrapFragment: Pm,
  makeVList: Lm,
  makeOrd: Im,
  makeGlue: qm,
  staticSvg: Hm,
  svgData: Io,
  tryCombineChars: Fm
}, Ee = {
  number: 3,
  unit: "mu"
}, lr = {
  number: 4,
  unit: "mu"
}, Bt = {
  number: 5,
  unit: "mu"
}, jm = {
  mord: {
    mop: Ee,
    mbin: lr,
    mrel: Bt,
    minner: Ee
  },
  mop: {
    mord: Ee,
    mop: Ee,
    mrel: Bt,
    minner: Ee
  },
  mbin: {
    mord: lr,
    mop: lr,
    mopen: lr,
    minner: lr
  },
  mrel: {
    mord: Bt,
    mop: Bt,
    mopen: Bt,
    minner: Bt
  },
  mopen: {},
  mclose: {
    mop: Ee,
    mbin: lr,
    mrel: Bt,
    minner: Ee
  },
  mpunct: {
    mord: Ee,
    mop: Ee,
    mrel: Bt,
    mopen: Ee,
    mclose: Ee,
    mpunct: Ee,
    minner: Ee
  },
  minner: {
    mord: Ee,
    mop: Ee,
    mbin: lr,
    mrel: Bt,
    mopen: Ee,
    mpunct: Ee,
    minner: Ee
  }
}, _m = {
  mord: {
    mop: Ee
  },
  mop: {
    mord: Ee,
    mop: Ee
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Ee
  },
  mpunct: {},
  minner: {
    mop: Ee
  }
}, Ro = {}, kn = {}, Sn = {};
function G(e) {
  for (var {
    type: t,
    names: r,
    props: n,
    handler: i,
    htmlBuilder: a,
    mathmlBuilder: l
  } = e, o = {
    type: t,
    numArgs: n.numArgs,
    argTypes: n.argTypes,
    allowedInArgument: !!n.allowedInArgument,
    allowedInText: !!n.allowedInText,
    allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
    numOptionalArgs: n.numOptionalArgs || 0,
    infix: !!n.infix,
    primitive: !!n.primitive,
    handler: i
  }, s = 0; s < r.length; ++s)
    Ro[r[s]] = o;
  t && (a && (kn[t] = a), l && (Sn[t] = l));
}
function hr(e) {
  var {
    type: t,
    htmlBuilder: r,
    mathmlBuilder: n
  } = e;
  G({
    type: t,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: r,
    mathmlBuilder: n
  });
}
var Tn = function(t) {
  return t.type === "ordgroup" && t.body.length === 1 ? t.body[0] : t;
}, Ne = function(t) {
  return t.type === "ordgroup" ? t.body : [t];
}, Ht = E.makeSpan, $m = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Vm = ["rightmost", "mrel", "mclose", "mpunct"], Um = {
  display: Q.DISPLAY,
  text: Q.TEXT,
  script: Q.SCRIPT,
  scriptscript: Q.SCRIPTSCRIPT
}, Gm = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, qe = function(t, r, n, i) {
  i === void 0 && (i = [null, null]);
  for (var a = [], l = 0; l < t.length; l++) {
    var o = fe(t[l], r);
    if (o instanceof Wr) {
      var s = o.children;
      a.push(...s);
    } else
      a.push(o);
  }
  if (E.tryCombineChars(a), !n)
    return a;
  var u = r;
  if (t.length === 1) {
    var m = t[0];
    m.type === "sizing" ? u = r.havingSize(m.size) : m.type === "styling" && (u = r.havingStyle(Um[m.style]));
  }
  var h = Ht([i[0] || "leftmost"], [], r), d = Ht([i[1] || "rightmost"], [], r), p = n === "root";
  return Wa(a, (y, b) => {
    var z = b.classes[0], T = y.classes[0];
    z === "mbin" && Vm.includes(T) ? b.classes[0] = "mord" : T === "mbin" && $m.includes(z) && (y.classes[0] = "mord");
  }, {
    node: h
  }, d, p), Wa(a, (y, b) => {
    var z = j0(b), T = j0(y), M = z && T ? y.hasClass("mtight") ? _m[z][T] : jm[z][T] : null;
    if (M)
      return E.makeGlue(M, u);
  }, {
    node: h
  }, d, p), a;
}, Wa = function e(t, r, n, i, a) {
  i && t.push(i);
  for (var l = 0; l < t.length; l++) {
    var o = t[l], s = Fo(o);
    if (s) {
      e(s.children, r, n, null, a);
      continue;
    }
    var u = !o.hasClass("mspace");
    if (u) {
      var m = r(o, n.node);
      m && (n.insertAfter ? n.insertAfter(m) : (t.unshift(m), l++));
    }
    u ? n.node = o : a && o.hasClass("newline") && (n.node = Ht(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((h) => (d) => {
      t.splice(h + 1, 0, d), l++;
    })(l);
  }
  i && t.pop();
}, Fo = function(t) {
  return t instanceof Wr || t instanceof pi || t instanceof Yr && t.hasClass("enclosing") ? t : null;
}, Wm = function e(t, r) {
  var n = Fo(t);
  if (n) {
    var i = n.children;
    if (i.length) {
      if (r === "right")
        return e(i[i.length - 1], "right");
      if (r === "left")
        return e(i[0], "left");
    }
  }
  return t;
}, j0 = function(t, r) {
  return t ? (r && (t = Wm(t, r)), Gm[t.classes[0]] || null) : null;
}, jr = function(t, r) {
  var n = ["nulldelimiter"].concat(t.baseSizingClasses());
  return Ht(r.concat(n));
}, fe = function(t, r, n) {
  if (!t)
    return Ht();
  if (kn[t.type]) {
    var i = kn[t.type](t, r);
    if (n && r.size !== n.size) {
      i = Ht(r.sizingClasses(n), [i], r);
      var a = r.sizeMultiplier / n.sizeMultiplier;
      i.height *= a, i.depth *= a;
    }
    return i;
  } else
    throw new O("Got group of unknown type: '" + t.type + "'");
};
function on(e, t) {
  var r = Ht(["base"], e, t), n = Ht(["strut"]);
  return n.style.height = q(r.height + r.depth), r.depth && (n.style.verticalAlign = q(-r.depth)), r.children.unshift(n), r;
}
function _0(e, t) {
  var r = null;
  e.length === 1 && e[0].type === "tag" && (r = e[0].tag, e = e[0].body);
  var n = qe(e, t, "root"), i;
  n.length === 2 && n[1].hasClass("tag") && (i = n.pop());
  for (var a = [], l = [], o = 0; o < n.length; o++)
    if (l.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var s = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, l.push(n[o]), n[o].hasClass("nobreak") && (s = !0);
      s || (a.push(on(l, t)), l = []);
    } else n[o].hasClass("newline") && (l.pop(), l.length > 0 && (a.push(on(l, t)), l = []), a.push(n[o]));
  l.length > 0 && a.push(on(l, t));
  var u;
  r ? (u = on(qe(r, t, !0)), u.classes = ["tag"], a.push(u)) : i && a.push(i);
  var m = Ht(["katex-html"], a);
  if (m.setAttribute("aria-hidden", "true"), u) {
    var h = u.children[0];
    h.style.height = q(m.height + m.depth), m.depth && (h.style.verticalAlign = q(-m.depth));
  }
  return m;
}
function No(e) {
  return new Wr(e);
}
class ut {
  constructor(t, r, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = t, this.attributes = {}, this.children = r || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(t, r) {
    this.attributes[t] = r;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(t) {
    return this.attributes[t];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    this.classes.length > 0 && (t.className = Kt(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (this.children[n] instanceof Mt && this.children[n + 1] instanceof Mt) {
        for (var i = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof Mt; )
          i += this.children[++n].toText();
        t.appendChild(new Mt(i).toNode());
      } else
        t.appendChild(this.children[n].toNode());
    return t;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var t = "<" + this.type;
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (t += " " + r + '="', t += pe.escape(this.attributes[r]), t += '"');
    this.classes.length > 0 && (t += ' class ="' + pe.escape(Kt(this.classes)) + '"'), t += ">";
    for (var n = 0; n < this.children.length; n++)
      t += this.children[n].toMarkup();
    return t += "</" + this.type + ">", t;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((t) => t.toText()).join("");
  }
}
class Mt {
  constructor(t) {
    this.text = void 0, this.text = t;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return pe.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Ym {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(t) {
    this.width = void 0, this.character = void 0, this.width = t, t >= 0.05555 && t <= 0.05556 ? this.character = " " : t >= 0.1666 && t <= 0.1667 ? this.character = " " : t >= 0.2222 && t <= 0.2223 ? this.character = " " : t >= 0.2777 && t <= 0.2778 ? this.character = "  " : t >= -0.05556 && t <= -0.05555 ? this.character = " ⁣" : t >= -0.1667 && t <= -0.1666 ? this.character = " ⁣" : t >= -0.2223 && t <= -0.2222 ? this.character = " ⁣" : t >= -0.2778 && t <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return t.setAttribute("width", q(this.width)), t;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + q(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var B = {
  MathNode: ut,
  TextNode: Mt,
  SpaceNode: Ym,
  newDocumentFragment: No
}, yt = function(t, r, n) {
  return Te[r][t] && Te[r][t].replace && t.charCodeAt(0) !== 55349 && !(Mo.hasOwnProperty(t) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (t = Te[r][t].replace), new B.TextNode(t);
}, gi = function(t) {
  return t.length === 1 ? t[0] : new B.MathNode("mrow", t);
}, vi = function(t, r) {
  if (r.fontFamily === "texttt")
    return "monospace";
  if (r.fontFamily === "textsf")
    return r.fontShape === "textit" && r.fontWeight === "textbf" ? "sans-serif-bold-italic" : r.fontShape === "textit" ? "sans-serif-italic" : r.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (r.fontShape === "textit" && r.fontWeight === "textbf")
    return "bold-italic";
  if (r.fontShape === "textit")
    return "italic";
  if (r.fontWeight === "textbf")
    return "bold";
  var n = r.font;
  if (!n || n === "mathnormal")
    return null;
  var i = t.mode;
  if (n === "mathit")
    return "italic";
  if (n === "boldsymbol")
    return t.type === "textord" ? "bold" : "bold-italic";
  if (n === "mathbf")
    return "bold";
  if (n === "mathbb")
    return "double-struck";
  if (n === "mathsfit")
    return "sans-serif-italic";
  if (n === "mathfrak")
    return "fraktur";
  if (n === "mathscr" || n === "mathcal")
    return "script";
  if (n === "mathsf")
    return "sans-serif";
  if (n === "mathtt")
    return "monospace";
  var a = t.text;
  if (["\\imath", "\\jmath"].includes(a))
    return null;
  Te[i][a] && Te[i][a].replace && (a = Te[i][a].replace);
  var l = E.fontMap[n].fontName;
  return fi(a, l, i) ? E.fontMap[n].variant : null;
};
function s0(e) {
  if (!e)
    return !1;
  if (e.type === "mi" && e.children.length === 1) {
    var t = e.children[0];
    return t instanceof Mt && t.text === ".";
  } else if (e.type === "mo" && e.children.length === 1 && e.getAttribute("separator") === "true" && e.getAttribute("lspace") === "0em" && e.getAttribute("rspace") === "0em") {
    var r = e.children[0];
    return r instanceof Mt && r.text === ",";
  } else
    return !1;
}
var at = function(t, r, n) {
  if (t.length === 1) {
    var i = we(t[0], r);
    return n && i instanceof ut && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
  }
  for (var a = [], l, o = 0; o < t.length; o++) {
    var s = we(t[o], r);
    if (s instanceof ut && l instanceof ut) {
      if (s.type === "mtext" && l.type === "mtext" && s.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...s.children);
        continue;
      } else if (s.type === "mn" && l.type === "mn") {
        l.children.push(...s.children);
        continue;
      } else if (s0(s) && l.type === "mn") {
        l.children.push(...s.children);
        continue;
      } else if (s.type === "mn" && s0(l))
        s.children = [...l.children, ...s.children], a.pop();
      else if ((s.type === "msup" || s.type === "msub") && s.children.length >= 1 && (l.type === "mn" || s0(l))) {
        var u = s.children[0];
        u instanceof ut && u.type === "mn" && (u.children = [...l.children, ...u.children], a.pop());
      } else if (l.type === "mi" && l.children.length === 1) {
        var m = l.children[0];
        if (m instanceof Mt && m.text === "̸" && (s.type === "mo" || s.type === "mi" || s.type === "mn")) {
          var h = s.children[0];
          h instanceof Mt && h.text.length > 0 && (h.text = h.text.slice(0, 1) + "̸" + h.text.slice(1), a.pop());
        }
      }
    }
    a.push(s), l = s;
  }
  return a;
}, Zt = function(t, r, n) {
  return gi(at(t, r, n));
}, we = function(t, r) {
  if (!t)
    return new B.MathNode("mrow");
  if (Sn[t.type]) {
    var n = Sn[t.type](t, r);
    return n;
  } else
    throw new O("Got group of unknown type: '" + t.type + "'");
};
function Ya(e, t, r, n, i) {
  var a = at(e, r), l;
  a.length === 1 && a[0] instanceof ut && ["mrow", "mtable"].includes(a[0].type) ? l = a[0] : l = new B.MathNode("mrow", a);
  var o = new B.MathNode("annotation", [new B.TextNode(t)]);
  o.setAttribute("encoding", "application/x-tex");
  var s = new B.MathNode("semantics", [l, o]), u = new B.MathNode("math", [s]);
  u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && u.setAttribute("display", "block");
  var m = i ? "katex" : "katex-mathml";
  return E.makeSpan([m], [u]);
}
var Bo = function(t) {
  return new Pt({
    style: t.displayMode ? Q.DISPLAY : Q.TEXT,
    maxSize: t.maxSize,
    minRuleThickness: t.minRuleThickness
  });
}, Po = function(t, r) {
  if (r.displayMode) {
    var n = ["katex-display"];
    r.leqno && n.push("leqno"), r.fleqn && n.push("fleqn"), t = E.makeSpan(n, [t]);
  }
  return t;
}, Xm = function(t, r, n) {
  var i = Bo(n), a;
  if (n.output === "mathml")
    return Ya(t, r, i, n.displayMode, !0);
  if (n.output === "html") {
    var l = _0(t, i);
    a = E.makeSpan(["katex"], [l]);
  } else {
    var o = Ya(t, r, i, n.displayMode, !1), s = _0(t, i);
    a = E.makeSpan(["katex"], [o, s]);
  }
  return Po(a, n);
}, Km = function(t, r, n) {
  var i = Bo(n), a = _0(t, i), l = E.makeSpan(["katex"], [a]);
  return Po(l, n);
}, Jm = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, Zm = function(t) {
  var r = new B.MathNode("mo", [new B.TextNode(Jm[t.replace(/^\\/, "")])]);
  return r.setAttribute("stretchy", "true"), r;
}, Qm = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, ef = function(t) {
  return t.type === "ordgroup" ? t.body.length : 1;
}, tf = function(t, r) {
  function n() {
    var o = 4e5, s = t.label.slice(1);
    if (["widehat", "widecheck", "widetilde", "utilde"].includes(s)) {
      var u = t, m = ef(u.base), h, d, p;
      if (m > 5)
        s === "widehat" || s === "widecheck" ? (h = 420, o = 2364, p = 0.42, d = s + "4") : (h = 312, o = 2340, p = 0.34, d = "tilde4");
      else {
        var y = [1, 1, 2, 2, 3, 3][m];
        s === "widehat" || s === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][y], h = [0, 239, 300, 360, 420][y], p = [0, 0.24, 0.3, 0.3, 0.36, 0.42][y], d = s + y) : (o = [0, 600, 1033, 2339, 2340][y], h = [0, 260, 286, 306, 312][y], p = [0, 0.26, 0.286, 0.3, 0.306, 0.34][y], d = "tilde" + y);
      }
      var b = new Jt(d), z = new qt([b], {
        width: "100%",
        height: q(p),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: E.makeSvgSpan([], [z], r),
        minWidth: 0,
        height: p
      };
    } else {
      var T = [], M = Qm[s], [R, $, j] = M, D = j / 1e3, W = R.length, J, V;
      if (W === 1) {
        var I = M[3];
        J = ["hide-tail"], V = [I];
      } else if (W === 2)
        J = ["halfarrow-left", "halfarrow-right"], V = ["xMinYMin", "xMaxYMin"];
      else if (W === 3)
        J = ["brace-left", "brace-center", "brace-right"], V = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + W + " children.");
      for (var U = 0; U < W; U++) {
        var _ = new Jt(R[U]), ae = new qt([_], {
          width: "400em",
          height: q(D),
          viewBox: "0 0 " + o + " " + j,
          preserveAspectRatio: V[U] + " slice"
        }), re = E.makeSvgSpan([J[U]], [ae], r);
        if (W === 1)
          return {
            span: re,
            minWidth: $,
            height: D
          };
        re.style.height = q(D), T.push(re);
      }
      return {
        span: E.makeSpan(["stretchy"], T, r),
        minWidth: $,
        height: D
      };
    }
  }
  var {
    span: i,
    minWidth: a,
    height: l
  } = n();
  return i.height = l, i.style.height = q(l), a > 0 && (i.style.minWidth = q(a)), i;
}, rf = function(t, r, n, i, a) {
  var l, o = t.height + t.depth + n + i;
  if (/fbox|color|angl/.test(r)) {
    if (l = E.makeSpan(["stretchy", r], [], a), r === "fbox") {
      var s = a.color && a.getColor();
      s && (l.style.borderColor = s);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(r) && u.push(new q0({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(r) && u.push(new q0({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var m = new qt(u, {
      width: "100%",
      height: q(o)
    });
    l = E.makeSvgSpan([], [m], a);
  }
  return l.height = o, l.style.height = q(o), l;
}, jt = {
  encloseSpan: rf,
  mathMLnode: Zm,
  svgSpan: tf
};
function oe(e, t) {
  if (!e || e.type !== t)
    throw new Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
  return e;
}
function yi(e) {
  var t = Nn(e);
  if (!t)
    throw new Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
  return t;
}
function Nn(e) {
  return e && (e.type === "atom" || Mm.hasOwnProperty(e.type)) ? e : null;
}
var bi = (e, t) => {
  var r, n, i;
  e && e.type === "supsub" ? (n = oe(e.base, "accent"), r = n.base, e.base = r, i = Am(fe(e, t)), e.base = n) : (n = oe(e, "accent"), r = n.base);
  var a = fe(r, t.havingCrampedStyle()), l = n.isShifty && pe.isCharacterBox(r), o = 0;
  if (l) {
    var s = pe.getBaseElem(r), u = fe(s, t.havingCrampedStyle());
    o = ja(u).skew;
  }
  var m = n.label === "\\c", h = m ? a.height + a.depth : Math.min(a.height, t.fontMetrics().xHeight), d;
  if (n.isStretchy)
    d = jt.svgSpan(n, t), d = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "elem",
        elem: d,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + q(2 * o) + ")",
          marginLeft: q(2 * o)
        } : void 0
      }]
    }, t);
  else {
    var p, y;
    n.label === "\\vec" ? (p = E.staticSvg("vec", t), y = E.svgData.vec[1]) : (p = E.makeOrd({
      mode: n.mode,
      text: n.label
    }, t, "textord"), p = ja(p), p.italic = 0, y = p.width, m && (h += p.depth)), d = E.makeSpan(["accent-body"], [p]);
    var b = n.label === "\\textcircled";
    b && (d.classes.push("accent-full"), h = a.height);
    var z = o;
    b || (z -= y / 2), d.style.left = q(z), n.label === "\\textcircled" && (d.style.top = ".2em"), d = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: -h
      }, {
        type: "elem",
        elem: d
      }]
    }, t);
  }
  var T = E.makeSpan(["mord", "accent"], [d], t);
  return i ? (i.children[0] = T, i.height = Math.max(T.height, i.height), i.classes[0] = "mord", i) : T;
}, Oo = (e, t) => {
  var r = e.isStretchy ? jt.mathMLnode(e.label) : new B.MathNode("mo", [yt(e.label, e.mode)]), n = new B.MathNode("mover", [we(e.base, t), r]);
  return n.setAttribute("accent", "true"), n;
}, nf = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((e) => "\\" + e).join("|"));
G({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (e, t) => {
    var r = Tn(t[0]), n = !nf.test(e.funcName), i = !n || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: e.parser.mode,
      label: e.funcName,
      isStretchy: n,
      isShifty: i,
      base: r
    };
  },
  htmlBuilder: bi,
  mathmlBuilder: Oo
});
G({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (e, t) => {
    var r = t[0], n = e.parser.mode;
    return n === "math" && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: e.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: r
    };
  },
  htmlBuilder: bi,
  mathmlBuilder: Oo
});
G({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0];
    return {
      type: "accentUnder",
      mode: r.mode,
      label: n,
      base: i
    };
  },
  htmlBuilder: (e, t) => {
    var r = fe(e.base, t), n = jt.svgSpan(e, t), i = e.label === "\\utilde" ? 0.12 : 0, a = E.makeVList({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: r
      }]
    }, t);
    return E.makeSpan(["mord", "accentunder"], [a], t);
  },
  mathmlBuilder: (e, t) => {
    var r = jt.mathMLnode(e.label), n = new B.MathNode("munder", [we(e.base, t), r]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var sn = (e) => {
  var t = new B.MathNode("mpadded", e ? [e] : []);
  return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
};
G({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(e, t, r) {
    var {
      parser: n,
      funcName: i
    } = e;
    return {
      type: "xArrow",
      mode: n.mode,
      label: i,
      body: t[0],
      below: r[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(e, t) {
    var r = t.style, n = t.havingStyle(r.sup()), i = E.wrapFragment(fe(e.body, n, t), t), a = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
    i.classes.push(a + "-arrow-pad");
    var l;
    e.below && (n = t.havingStyle(r.sub()), l = E.wrapFragment(fe(e.below, n, t), t), l.classes.push(a + "-arrow-pad"));
    var o = jt.svgSpan(e, t), s = -t.fontMetrics().axisHeight + 0.5 * o.height, u = -t.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (i.depth > 0.25 || e.label === "\\xleftequilibrium") && (u -= i.depth);
    var m;
    if (l) {
      var h = -t.fontMetrics().axisHeight + l.height + 0.5 * o.height + 0.111;
      m = E.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: u
        }, {
          type: "elem",
          elem: o,
          shift: s
        }, {
          type: "elem",
          elem: l,
          shift: h
        }]
      }, t);
    } else
      m = E.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: u
        }, {
          type: "elem",
          elem: o,
          shift: s
        }]
      }, t);
    return m.children[0].children[0].children[1].classes.push("svg-align"), E.makeSpan(["mrel", "x-arrow"], [m], t);
  },
  mathmlBuilder(e, t) {
    var r = jt.mathMLnode(e.label);
    r.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (e.body) {
      var i = sn(we(e.body, t));
      if (e.below) {
        var a = sn(we(e.below, t));
        n = new B.MathNode("munderover", [r, a, i]);
      } else
        n = new B.MathNode("mover", [r, i]);
    } else if (e.below) {
      var l = sn(we(e.below, t));
      n = new B.MathNode("munder", [r, l]);
    } else
      n = sn(), n = new B.MathNode("mover", [r, n]);
    return n;
  }
});
var af = E.makeSpan;
function Lo(e, t) {
  var r = qe(e.body, t, !0);
  return af([e.mclass], r, t);
}
function qo(e, t) {
  var r, n = at(e.body, t);
  return e.mclass === "minner" ? r = new B.MathNode("mpadded", n) : e.mclass === "mord" ? e.isCharacterBox ? (r = n[0], r.type = "mi") : r = new B.MathNode("mi", n) : (e.isCharacterBox ? (r = n[0], r.type = "mo") : r = new B.MathNode("mo", n), e.mclass === "mbin" ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : e.mclass === "mpunct" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : e.mclass === "mopen" || e.mclass === "mclose" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0em") : e.mclass === "minner" && (r.attributes.lspace = "0.0556em", r.attributes.width = "+0.1111em")), r;
}
G({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0];
    return {
      type: "mclass",
      mode: r.mode,
      mclass: "m" + n.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: Ne(i),
      isCharacterBox: pe.isCharacterBox(i)
    };
  },
  htmlBuilder: Lo,
  mathmlBuilder: qo
});
var Bn = (e) => {
  var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
  return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
};
G({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "mclass",
      mode: r.mode,
      mclass: Bn(t[0]),
      body: Ne(t[1]),
      isCharacterBox: pe.isCharacterBox(t[1])
    };
  }
});
G({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e, i = t[1], a = t[0], l;
    n !== "\\stackrel" ? l = Bn(i) : l = "mrel";
    var o = {
      type: "op",
      mode: i.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: Ne(i)
    }, s = {
      type: "supsub",
      mode: a.mode,
      base: o,
      sup: n === "\\underset" ? null : a,
      sub: n === "\\underset" ? a : null
    };
    return {
      type: "mclass",
      mode: r.mode,
      mclass: l,
      body: [s],
      isCharacterBox: pe.isCharacterBox(s)
    };
  },
  htmlBuilder: Lo,
  mathmlBuilder: qo
});
G({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "pmb",
      mode: r.mode,
      mclass: Bn(t[0]),
      body: Ne(t[0])
    };
  },
  htmlBuilder(e, t) {
    var r = qe(e.body, t, !0), n = E.makeSpan([e.mclass], r, t);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(e, t) {
    var r = at(e.body, t), n = new B.MathNode("mstyle", r);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var lf = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Xa = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Ka = (e) => e.type === "textord" && e.text === "@", of = (e, t) => (e.type === "mathord" || e.type === "atom") && e.text === t;
function sf(e, t, r) {
  var n = lf[e];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return r.callFunction(n, [t[0]], [t[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var i = r.callFunction("\\\\cdleft", [t[0]], []), a = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, l = r.callFunction("\\Big", [a], []), o = r.callFunction("\\\\cdright", [t[1]], []), s = {
        type: "ordgroup",
        mode: "math",
        body: [i, l, o]
      };
      return r.callFunction("\\\\cdparent", [s], []);
    }
    case "\\\\cdlongequal":
      return r.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var u = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return r.callFunction("\\Big", [u], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function uf(e) {
  var t = [];
  for (e.gullet.beginGroup(), e.gullet.macros.set("\\cr", "\\\\\\relax"), e.gullet.beginGroup(); ; ) {
    t.push(e.parseExpression(!1, "\\\\")), e.gullet.endGroup(), e.gullet.beginGroup();
    var r = e.fetch().text;
    if (r === "&" || r === "\\\\")
      e.consume();
    else if (r === "\\end") {
      t[t.length - 1].length === 0 && t.pop();
      break;
    } else
      throw new O("Expected \\\\ or \\cr or \\end", e.nextToken);
  }
  for (var n = [], i = [n], a = 0; a < t.length; a++) {
    for (var l = t[a], o = Xa(), s = 0; s < l.length; s++)
      if (!Ka(l[s]))
        o.body.push(l[s]);
      else {
        n.push(o), s += 1;
        var u = yi(l[s]).text, m = new Array(2);
        if (m[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, m[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(u) > -1)) if ("<>AV".indexOf(u) > -1)
          for (var h = 0; h < 2; h++) {
            for (var d = !0, p = s + 1; p < l.length; p++) {
              if (of(l[p], u)) {
                d = !1, s = p;
                break;
              }
              if (Ka(l[p]))
                throw new O("Missing a " + u + " character to complete a CD arrow.", l[p]);
              m[h].body.push(l[p]);
            }
            if (d)
              throw new O("Missing a " + u + " character to complete a CD arrow.", l[s]);
          }
        else
          throw new O('Expected one of "<>AV=|." after @', l[s]);
        var y = sf(u, m, e), b = {
          type: "styling",
          body: [y],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(b), o = Xa();
      }
    a % 2 === 0 ? n.push(o) : n.shift(), n = [], i.push(n);
  }
  e.gullet.endGroup(), e.gullet.endGroup();
  var z = new Array(i[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: i,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: z,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(i.length + 1).fill([])
  };
}
G({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e;
    return {
      type: "cdlabel",
      mode: r.mode,
      side: n.slice(4),
      label: t[0]
    };
  },
  htmlBuilder(e, t) {
    var r = t.havingStyle(t.style.sup()), n = E.wrapFragment(fe(e.label, r, t), t);
    return n.classes.push("cd-label-" + e.side), n.style.bottom = q(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mrow", [we(e.label, t)]);
    return r = new B.MathNode("mpadded", [r]), r.setAttribute("width", "0"), e.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new B.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
  }
});
G({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "cdlabelparent",
      mode: r.mode,
      fragment: t[0]
    };
  },
  htmlBuilder(e, t) {
    var r = E.wrapFragment(fe(e.fragment, t), t);
    return r.classes.push("cd-vert-arrow"), r;
  },
  mathmlBuilder(e, t) {
    return new B.MathNode("mrow", [we(e.fragment, t)]);
  }
});
G({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(e, t) {
    for (var {
      parser: r
    } = e, n = oe(t[0], "ordgroup"), i = n.body, a = "", l = 0; l < i.length; l++) {
      var o = oe(i[l], "textord");
      a += o.text;
    }
    var s = parseInt(a), u;
    if (isNaN(s))
      throw new O("\\@char has non-numeric argument " + a);
    if (s < 0 || s >= 1114111)
      throw new O("\\@char with invalid code point " + a);
    return s <= 65535 ? u = String.fromCharCode(s) : (s -= 65536, u = String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320)), {
      type: "textord",
      mode: r.mode,
      text: u
    };
  }
});
var Ho = (e, t) => {
  var r = qe(e.body, t.withColor(e.color), !1);
  return E.makeFragment(r);
}, jo = (e, t) => {
  var r = at(e.body, t.withColor(e.color)), n = new B.MathNode("mstyle", r);
  return n.setAttribute("mathcolor", e.color), n;
};
G({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(e, t) {
    var {
      parser: r
    } = e, n = oe(t[0], "color-token").color, i = t[1];
    return {
      type: "color",
      mode: r.mode,
      color: n,
      body: Ne(i)
    };
  },
  htmlBuilder: Ho,
  mathmlBuilder: jo
});
G({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(e, t) {
    var {
      parser: r,
      breakOnTokenText: n
    } = e, i = oe(t[0], "color-token").color;
    r.gullet.macros.set("\\current@color", i);
    var a = r.parseExpression(!0, n);
    return {
      type: "color",
      mode: r.mode,
      color: i,
      body: a
    };
  },
  htmlBuilder: Ho,
  mathmlBuilder: jo
});
G({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(e, t, r) {
    var {
      parser: n
    } = e, i = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, a = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: a,
      size: i && oe(i, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(e, t) {
    var r = E.makeSpan(["mspace"], [], t);
    return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = q(De(e.size, t)))), r;
  },
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mspace");
    return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", q(De(e.size, t)))), r;
  }
});
var $0 = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, _o = (e) => {
  var t = e.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(t))
    throw new O("Expected a control sequence", e);
  return t;
}, cf = (e) => {
  var t = e.gullet.popToken();
  return t.text === "=" && (t = e.gullet.popToken(), t.text === " " && (t = e.gullet.popToken())), t;
}, $o = (e, t, r, n) => {
  var i = e.gullet.macros.get(r.text);
  i == null && (r.noexpand = !0, i = {
    tokens: [r],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !e.gullet.isExpandable(r.text)
  }), e.gullet.macros.set(t, i, n);
};
G({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r
    } = e;
    t.consumeSpaces();
    var n = t.fetch();
    if ($0[n.text])
      return (r === "\\global" || r === "\\\\globallong") && (n.text = $0[n.text]), oe(t.parseFunction(), "internal");
    throw new O("Invalid token after macro prefix", n);
  }
});
G({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r
    } = e, n = t.gullet.popToken(), i = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(i))
      throw new O("Expected a control sequence", n);
    for (var a = 0, l, o = [[]]; t.gullet.future().text !== "{"; )
      if (n = t.gullet.popToken(), n.text === "#") {
        if (t.gullet.future().text === "{") {
          l = t.gullet.future(), o[a].push("{");
          break;
        }
        if (n = t.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new O('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== a + 1)
          throw new O('Argument number "' + n.text + '" out of order');
        a++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new O("Expected a macro definition");
        o[a].push(n.text);
      }
    var {
      tokens: s
    } = t.gullet.consumeArg();
    return l && s.unshift(l), (r === "\\edef" || r === "\\xdef") && (s = t.gullet.expandTokens(s), s.reverse()), t.gullet.macros.set(i, {
      tokens: s,
      numArgs: a,
      delimiters: o
    }, r === $0[r]), {
      type: "internal",
      mode: t.mode
    };
  }
});
G({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r
    } = e, n = _o(t.gullet.popToken());
    t.gullet.consumeSpaces();
    var i = cf(t);
    return $o(t, n, i, r === "\\\\globallet"), {
      type: "internal",
      mode: t.mode
    };
  }
});
G({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r
    } = e, n = _o(t.gullet.popToken()), i = t.gullet.popToken(), a = t.gullet.popToken();
    return $o(t, n, a, r === "\\\\globalfuture"), t.gullet.pushToken(a), t.gullet.pushToken(i), {
      type: "internal",
      mode: t.mode
    };
  }
});
var Fr = function(t, r, n) {
  var i = Te.math[t] && Te.math[t].replace, a = fi(i || t, r, n);
  if (!a)
    throw new Error("Unsupported symbol " + t + " and font size " + r + ".");
  return a;
}, xi = function(t, r, n, i) {
  var a = n.havingBaseStyle(r), l = E.makeSpan(i.concat(a.sizingClasses(n)), [t], n), o = a.sizeMultiplier / n.sizeMultiplier;
  return l.height *= o, l.depth *= o, l.maxFontSize = a.sizeMultiplier, l;
}, Vo = function(t, r, n) {
  var i = r.havingBaseStyle(n), a = (1 - r.sizeMultiplier / i.sizeMultiplier) * r.fontMetrics().axisHeight;
  t.classes.push("delimcenter"), t.style.top = q(a), t.height -= a, t.depth += a;
}, hf = function(t, r, n, i, a, l) {
  var o = E.makeSymbol(t, "Main-Regular", a, i), s = xi(o, r, i, l);
  return n && Vo(s, i, r), s;
}, mf = function(t, r, n, i) {
  return E.makeSymbol(t, "Size" + r + "-Regular", n, i);
}, Uo = function(t, r, n, i, a, l) {
  var o = mf(t, r, a, i), s = xi(E.makeSpan(["delimsizing", "size" + r], [o], i), Q.TEXT, i, l);
  return n && Vo(s, i, Q.TEXT), s;
}, u0 = function(t, r, n) {
  var i;
  r === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
  var a = E.makeSpan(["delimsizinginner", i], [E.makeSpan([], [E.makeSymbol(t, r, n)])]);
  return {
    type: "elem",
    elem: a
  };
}, c0 = function(t, r, n) {
  var i = Ct["Size4-Regular"][t.charCodeAt(0)] ? Ct["Size4-Regular"][t.charCodeAt(0)][4] : Ct["Size1-Regular"][t.charCodeAt(0)][4], a = new Jt("inner", gm(t, Math.round(1e3 * r))), l = new qt([a], {
    width: q(i),
    height: q(r),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + q(i),
    viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * r),
    preserveAspectRatio: "xMinYMin"
  }), o = E.makeSvgSpan([], [l], n);
  return o.height = r, o.style.height = q(r), o.style.width = q(i), {
    type: "elem",
    elem: o
  };
}, V0 = 8e-3, un = {
  type: "kern",
  size: -1 * V0
}, ff = ["|", "\\lvert", "\\rvert", "\\vert"], pf = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Go = function(t, r, n, i, a, l) {
  var o, s, u, m, h = "", d = 0;
  o = u = m = t, s = null;
  var p = "Size1-Regular";
  t === "\\uparrow" ? u = m = "⏐" : t === "\\Uparrow" ? u = m = "‖" : t === "\\downarrow" ? o = u = "⏐" : t === "\\Downarrow" ? o = u = "‖" : t === "\\updownarrow" ? (o = "\\uparrow", u = "⏐", m = "\\downarrow") : t === "\\Updownarrow" ? (o = "\\Uparrow", u = "‖", m = "\\Downarrow") : ff.includes(t) ? (u = "∣", h = "vert", d = 333) : pf.includes(t) ? (u = "∥", h = "doublevert", d = 556) : t === "[" || t === "\\lbrack" ? (o = "⎡", u = "⎢", m = "⎣", p = "Size4-Regular", h = "lbrack", d = 667) : t === "]" || t === "\\rbrack" ? (o = "⎤", u = "⎥", m = "⎦", p = "Size4-Regular", h = "rbrack", d = 667) : t === "\\lfloor" || t === "⌊" ? (u = o = "⎢", m = "⎣", p = "Size4-Regular", h = "lfloor", d = 667) : t === "\\lceil" || t === "⌈" ? (o = "⎡", u = m = "⎢", p = "Size4-Regular", h = "lceil", d = 667) : t === "\\rfloor" || t === "⌋" ? (u = o = "⎥", m = "⎦", p = "Size4-Regular", h = "rfloor", d = 667) : t === "\\rceil" || t === "⌉" ? (o = "⎤", u = m = "⎥", p = "Size4-Regular", h = "rceil", d = 667) : t === "(" || t === "\\lparen" ? (o = "⎛", u = "⎜", m = "⎝", p = "Size4-Regular", h = "lparen", d = 875) : t === ")" || t === "\\rparen" ? (o = "⎞", u = "⎟", m = "⎠", p = "Size4-Regular", h = "rparen", d = 875) : t === "\\{" || t === "\\lbrace" ? (o = "⎧", s = "⎨", m = "⎩", u = "⎪", p = "Size4-Regular") : t === "\\}" || t === "\\rbrace" ? (o = "⎫", s = "⎬", m = "⎭", u = "⎪", p = "Size4-Regular") : t === "\\lgroup" || t === "⟮" ? (o = "⎧", m = "⎩", u = "⎪", p = "Size4-Regular") : t === "\\rgroup" || t === "⟯" ? (o = "⎫", m = "⎭", u = "⎪", p = "Size4-Regular") : t === "\\lmoustache" || t === "⎰" ? (o = "⎧", m = "⎭", u = "⎪", p = "Size4-Regular") : (t === "\\rmoustache" || t === "⎱") && (o = "⎫", m = "⎩", u = "⎪", p = "Size4-Regular");
  var y = Fr(o, p, a), b = y.height + y.depth, z = Fr(u, p, a), T = z.height + z.depth, M = Fr(m, p, a), R = M.height + M.depth, $ = 0, j = 1;
  if (s !== null) {
    var D = Fr(s, p, a);
    $ = D.height + D.depth, j = 2;
  }
  var W = b + R + $, J = Math.max(0, Math.ceil((r - W) / (j * T))), V = W + J * j * T, I = i.fontMetrics().axisHeight;
  n && (I *= i.sizeMultiplier);
  var U = V / 2 - I, _ = [];
  if (h.length > 0) {
    var ae = V - b - R, re = Math.round(V * 1e3), ee = vm(h, Math.round(ae * 1e3)), ve = new Jt(h, ee), ye = (d / 1e3).toFixed(3) + "em", Re = (re / 1e3).toFixed(3) + "em", je = new qt([ve], {
      width: ye,
      height: Re,
      viewBox: "0 0 " + d + " " + re
    }), S = E.makeSvgSpan([], [je], i);
    S.height = re / 1e3, S.style.width = ye, S.style.height = Re, _.push({
      type: "elem",
      elem: S
    });
  } else {
    if (_.push(u0(m, p, a)), _.push(un), s === null) {
      var ze = V - b - R + 2 * V0;
      _.push(c0(u, ze, i));
    } else {
      var Ae = (V - b - R - $) / 2 + 2 * V0;
      _.push(c0(u, Ae, i)), _.push(un), _.push(u0(s, p, a)), _.push(un), _.push(c0(u, Ae, i));
    }
    _.push(un), _.push(u0(o, p, a));
  }
  var A = i.havingBaseStyle(Q.TEXT), He = E.makeVList({
    positionType: "bottom",
    positionData: U,
    children: _
  }, A);
  return xi(E.makeSpan(["delimsizing", "mult"], [He], A), Q.TEXT, i, l);
}, h0 = 80, m0 = 0.08, f0 = function(t, r, n, i, a) {
  var l = dm(t, i, n), o = new Jt(t, l), s = new qt([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: q(r),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return E.makeSvgSpan(["hide-tail"], [s], a);
}, df = function(t, r) {
  var n = r.havingBaseSizing(), i = Ko("\\surd", t * n.sizeMultiplier, Xo, n), a = n.sizeMultiplier, l = Math.max(0, r.minRuleThickness - r.fontMetrics().sqrtRuleThickness), o, s = 0, u = 0, m = 0, h;
  return i.type === "small" ? (m = 1e3 + 1e3 * l + h0, t < 1 ? a = 1 : t < 1.4 && (a = 0.7), s = (1 + l + m0) / a, u = (1 + l) / a, o = f0("sqrtMain", s, m, l, r), o.style.minWidth = "0.853em", h = 0.833 / a) : i.type === "large" ? (m = (1e3 + h0) * Or[i.size], u = (Or[i.size] + l) / a, s = (Or[i.size] + l + m0) / a, o = f0("sqrtSize" + i.size, s, m, l, r), o.style.minWidth = "1.02em", h = 1 / a) : (s = t + l + m0, u = t + l, m = Math.floor(1e3 * t + l) + h0, o = f0("sqrtTall", s, m, l, r), o.style.minWidth = "0.742em", h = 1.056), o.height = u, o.style.height = q(s), {
    span: o,
    advanceWidth: h,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (r.fontMetrics().sqrtRuleThickness + l) * a
  };
}, Wo = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], gf = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Yo = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Or = [0, 1.2, 1.8, 2.4, 3], vf = function(t, r, n, i, a) {
  if (t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle"), Wo.includes(t) || Yo.includes(t))
    return Uo(t, r, !1, n, i, a);
  if (gf.includes(t))
    return Go(t, Or[r], !1, n, i, a);
  throw new O("Illegal delimiter: '" + t + "'");
}, yf = [{
  type: "small",
  style: Q.SCRIPTSCRIPT
}, {
  type: "small",
  style: Q.SCRIPT
}, {
  type: "small",
  style: Q.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], bf = [{
  type: "small",
  style: Q.SCRIPTSCRIPT
}, {
  type: "small",
  style: Q.SCRIPT
}, {
  type: "small",
  style: Q.TEXT
}, {
  type: "stack"
}], Xo = [{
  type: "small",
  style: Q.SCRIPTSCRIPT
}, {
  type: "small",
  style: Q.SCRIPT
}, {
  type: "small",
  style: Q.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], xf = function(t) {
  if (t.type === "small")
    return "Main-Regular";
  if (t.type === "large")
    return "Size" + t.size + "-Regular";
  if (t.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + t.type + "' here.");
}, Ko = function(t, r, n, i) {
  for (var a = Math.min(2, 3 - i.style.size), l = a; l < n.length && n[l].type !== "stack"; l++) {
    var o = Fr(t, xf(n[l]), "math"), s = o.height + o.depth;
    if (n[l].type === "small") {
      var u = i.havingBaseStyle(n[l].style);
      s *= u.sizeMultiplier;
    }
    if (s > r)
      return n[l];
  }
  return n[n.length - 1];
}, Jo = function(t, r, n, i, a, l) {
  t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle");
  var o;
  Yo.includes(t) ? o = yf : Wo.includes(t) ? o = Xo : o = bf;
  var s = Ko(t, r, o, i);
  return s.type === "small" ? hf(t, s.style, n, i, a, l) : s.type === "large" ? Uo(t, s.size, n, i, a, l) : Go(t, r, n, i, a, l);
}, wf = function(t, r, n, i, a, l) {
  var o = i.fontMetrics().axisHeight * i.sizeMultiplier, s = 901, u = 5 / i.fontMetrics().ptPerEm, m = Math.max(r - o, n + o), h = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    m / 500 * s,
    2 * m - u
  );
  return Jo(t, h, !0, i, a, l);
}, Lt = {
  sqrtImage: df,
  sizedDelim: vf,
  sizeToMaxHeight: Or,
  customSizedDelim: Jo,
  leftRightDelim: wf
}, Ja = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, kf = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Pn(e, t) {
  var r = Nn(e);
  if (r && kf.includes(r.text))
    return r;
  throw r ? new O("Invalid delimiter '" + r.text + "' after '" + t.funcName + "'", e) : new O("Invalid delimiter type '" + e.type + "'", e);
}
G({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (e, t) => {
    var r = Pn(t[0], e);
    return {
      type: "delimsizing",
      mode: e.parser.mode,
      size: Ja[e.funcName].size,
      mclass: Ja[e.funcName].mclass,
      delim: r.text
    };
  },
  htmlBuilder: (e, t) => e.delim === "." ? E.makeSpan([e.mclass]) : Lt.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass]),
  mathmlBuilder: (e) => {
    var t = [];
    e.delim !== "." && t.push(yt(e.delim, e.mode));
    var r = new B.MathNode("mo", t);
    e.mclass === "mopen" || e.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
    var n = q(Lt.sizeToMaxHeight[e.size]);
    return r.setAttribute("minsize", n), r.setAttribute("maxsize", n), r;
  }
});
function Za(e) {
  if (!e.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
G({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (e, t) => {
    var r = e.parser.gullet.macros.get("\\current@color");
    if (r && typeof r != "string")
      throw new O("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: e.parser.mode,
      delim: Pn(t[0], e).text,
      color: r
      // undefined if not set via \color
    };
  }
});
G({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (e, t) => {
    var r = Pn(t[0], e), n = e.parser;
    ++n.leftrightDepth;
    var i = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var a = oe(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: i,
      left: r.text,
      right: a.delim,
      rightColor: a.color
    };
  },
  htmlBuilder: (e, t) => {
    Za(e);
    for (var r = qe(e.body, t, !0, ["mopen", "mclose"]), n = 0, i = 0, a = !1, l = 0; l < r.length; l++)
      r[l].isMiddle ? a = !0 : (n = Math.max(r[l].height, n), i = Math.max(r[l].depth, i));
    n *= t.sizeMultiplier, i *= t.sizeMultiplier;
    var o;
    if (e.left === "." ? o = jr(t, ["mopen"]) : o = Lt.leftRightDelim(e.left, n, i, t, e.mode, ["mopen"]), r.unshift(o), a)
      for (var s = 1; s < r.length; s++) {
        var u = r[s], m = u.isMiddle;
        m && (r[s] = Lt.leftRightDelim(m.delim, n, i, m.options, e.mode, []));
      }
    var h;
    if (e.right === ".")
      h = jr(t, ["mclose"]);
    else {
      var d = e.rightColor ? t.withColor(e.rightColor) : t;
      h = Lt.leftRightDelim(e.right, n, i, d, e.mode, ["mclose"]);
    }
    return r.push(h), E.makeSpan(["minner"], r, t);
  },
  mathmlBuilder: (e, t) => {
    Za(e);
    var r = at(e.body, t);
    if (e.left !== ".") {
      var n = new B.MathNode("mo", [yt(e.left, e.mode)]);
      n.setAttribute("fence", "true"), r.unshift(n);
    }
    if (e.right !== ".") {
      var i = new B.MathNode("mo", [yt(e.right, e.mode)]);
      i.setAttribute("fence", "true"), e.rightColor && i.setAttribute("mathcolor", e.rightColor), r.push(i);
    }
    return gi(r);
  }
});
G({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (e, t) => {
    var r = Pn(t[0], e);
    if (!e.parser.leftrightDepth)
      throw new O("\\middle without preceding \\left", r);
    return {
      type: "middle",
      mode: e.parser.mode,
      delim: r.text
    };
  },
  htmlBuilder: (e, t) => {
    var r;
    if (e.delim === ".")
      r = jr(t, []);
    else {
      r = Lt.sizedDelim(e.delim, 1, t, e.mode, []);
      var n = {
        delim: e.delim,
        options: t
      };
      r.isMiddle = n;
    }
    return r;
  },
  mathmlBuilder: (e, t) => {
    var r = e.delim === "\\vert" || e.delim === "|" ? yt("|", "text") : yt(e.delim, e.mode), n = new B.MathNode("mo", [r]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var wi = (e, t) => {
  var r = E.wrapFragment(fe(e.body, t), t), n = e.label.slice(1), i = t.sizeMultiplier, a, l = 0, o = pe.isCharacterBox(e.body);
  if (n === "sout")
    a = E.makeSpan(["stretchy", "sout"]), a.height = t.fontMetrics().defaultRuleThickness / i, l = -0.5 * t.fontMetrics().xHeight;
  else if (n === "phase") {
    var s = De({
      number: 0.6,
      unit: "pt"
    }, t), u = De({
      number: 0.35,
      unit: "ex"
    }, t), m = t.havingBaseSizing();
    i = i / m.sizeMultiplier;
    var h = r.height + r.depth + s + u;
    r.style.paddingLeft = q(h / 2 + s);
    var d = Math.floor(1e3 * h * i), p = fm(d), y = new qt([new Jt("phase", p)], {
      width: "400em",
      height: q(d / 1e3),
      viewBox: "0 0 400000 " + d,
      preserveAspectRatio: "xMinYMin slice"
    });
    a = E.makeSvgSpan(["hide-tail"], [y], t), a.style.height = q(h), l = r.depth + s + u;
  } else {
    /cancel/.test(n) ? o || r.classes.push("cancel-pad") : n === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
    var b = 0, z = 0, T = 0;
    /box/.test(n) ? (T = Math.max(
      t.fontMetrics().fboxrule,
      // default
      t.minRuleThickness
      // User override.
    ), b = t.fontMetrics().fboxsep + (n === "colorbox" ? 0 : T), z = b) : n === "angl" ? (T = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness), b = 4 * T, z = Math.max(0, 0.25 - r.depth)) : (b = o ? 0.2 : 0, z = b), a = jt.encloseSpan(r, n, b, z, t), /fbox|boxed|fcolorbox/.test(n) ? (a.style.borderStyle = "solid", a.style.borderWidth = q(T)) : n === "angl" && T !== 0.049 && (a.style.borderTopWidth = q(T), a.style.borderRightWidth = q(T)), l = r.depth + z, e.backgroundColor && (a.style.backgroundColor = e.backgroundColor, e.borderColor && (a.style.borderColor = e.borderColor));
  }
  var M;
  if (e.backgroundColor)
    M = E.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: a,
          shift: l
        },
        {
          type: "elem",
          elem: r,
          shift: 0
        }
      ]
    }, t);
  else {
    var R = /cancel|phase/.test(n) ? ["svg-align"] : [];
    M = E.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: r,
          shift: 0
        },
        {
          type: "elem",
          elem: a,
          shift: l,
          wrapperClasses: R
        }
      ]
    }, t);
  }
  return /cancel/.test(n) && (M.height = r.height, M.depth = r.depth), /cancel/.test(n) && !o ? E.makeSpan(["mord", "cancel-lap"], [M], t) : E.makeSpan(["mord"], [M], t);
}, ki = (e, t) => {
  var r = 0, n = new B.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [we(e.body, t)]);
  switch (e.label) {
    case "\\cancel":
      n.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      n.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      n.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      n.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      n.setAttribute("notation", "box");
      break;
    case "\\angl":
      n.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (r = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), e.label === "\\fcolorbox") {
        var i = Math.max(
          t.fontMetrics().fboxrule,
          // default
          t.minRuleThickness
          // user override
        );
        n.setAttribute("style", "border: " + i + "em solid " + String(e.borderColor));
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return e.backgroundColor && n.setAttribute("mathbackground", e.backgroundColor), n;
};
G({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(e, t, r) {
    var {
      parser: n,
      funcName: i
    } = e, a = oe(t[0], "color-token").color, l = t[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: i,
      backgroundColor: a,
      body: l
    };
  },
  htmlBuilder: wi,
  mathmlBuilder: ki
});
G({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(e, t, r) {
    var {
      parser: n,
      funcName: i
    } = e, a = oe(t[0], "color-token").color, l = oe(t[1], "color-token").color, o = t[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: i,
      backgroundColor: l,
      borderColor: a,
      body: o
    };
  },
  htmlBuilder: wi,
  mathmlBuilder: ki
});
G({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\fbox",
      body: t[0]
    };
  }
});
G({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      body: i
    };
  },
  htmlBuilder: wi,
  mathmlBuilder: ki
});
G({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\angl",
      body: t[0]
    };
  }
});
var Zo = {};
function zt(e) {
  for (var {
    type: t,
    names: r,
    props: n,
    handler: i,
    htmlBuilder: a,
    mathmlBuilder: l
  } = e, o = {
    type: t,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: i
  }, s = 0; s < r.length; ++s)
    Zo[r[s]] = o;
  a && (kn[t] = a), l && (Sn[t] = l);
}
var Qo = {};
function v(e, t) {
  Qo[e] = t;
}
function Qa(e) {
  var t = [];
  e.consumeSpaces();
  var r = e.fetch().text;
  for (r === "\\relax" && (e.consume(), e.consumeSpaces(), r = e.fetch().text); r === "\\hline" || r === "\\hdashline"; )
    e.consume(), t.push(r === "\\hdashline"), e.consumeSpaces(), r = e.fetch().text;
  return t;
}
var On = (e) => {
  var t = e.parser.settings;
  if (!t.displayMode)
    throw new O("{" + e.envName + "} can be used only in display mode.");
};
function Si(e) {
  if (e.indexOf("ed") === -1)
    return e.indexOf("*") === -1;
}
function er(e, t, r) {
  var {
    hskipBeforeAndAfter: n,
    addJot: i,
    cols: a,
    arraystretch: l,
    colSeparationType: o,
    autoTag: s,
    singleRow: u,
    emptySingleRow: m,
    maxNumCols: h,
    leqno: d
  } = t;
  if (e.gullet.beginGroup(), u || e.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var p = e.gullet.expandMacroAsText("\\arraystretch");
    if (p == null)
      l = 1;
    else if (l = parseFloat(p), !l || l < 0)
      throw new O("Invalid \\arraystretch: " + p);
  }
  e.gullet.beginGroup();
  var y = [], b = [y], z = [], T = [], M = s != null ? [] : void 0;
  function R() {
    s && e.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function $() {
    M && (e.gullet.macros.get("\\df@tag") ? (M.push(e.subparse([new ht("\\df@tag")])), e.gullet.macros.set("\\df@tag", void 0, !0)) : M.push(!!s && e.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (R(), T.push(Qa(e)); ; ) {
    var j = e.parseExpression(!1, u ? "\\end" : "\\\\");
    e.gullet.endGroup(), e.gullet.beginGroup(), j = {
      type: "ordgroup",
      mode: e.mode,
      body: j
    }, r && (j = {
      type: "styling",
      mode: e.mode,
      style: r,
      body: [j]
    }), y.push(j);
    var D = e.fetch().text;
    if (D === "&") {
      if (h && y.length === h) {
        if (u || o)
          throw new O("Too many tab characters: &", e.nextToken);
        e.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      e.consume();
    } else if (D === "\\end") {
      $(), y.length === 1 && j.type === "styling" && j.body[0].body.length === 0 && (b.length > 1 || !m) && b.pop(), T.length < b.length + 1 && T.push([]);
      break;
    } else if (D === "\\\\") {
      e.consume();
      var W = void 0;
      e.gullet.future().text !== " " && (W = e.parseSizeGroup(!0)), z.push(W ? W.value : null), $(), T.push(Qa(e)), y = [], b.push(y), R();
    } else
      throw new O("Expected & or \\\\ or \\cr or \\end", e.nextToken);
  }
  return e.gullet.endGroup(), e.gullet.endGroup(), {
    type: "array",
    mode: e.mode,
    addJot: i,
    arraystretch: l,
    body: b,
    cols: a,
    rowGaps: z,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: T,
    colSeparationType: o,
    tags: M,
    leqno: d
  };
}
function Ti(e) {
  return e.slice(0, 1) === "d" ? "display" : "text";
}
var Et = function(t, r) {
  var n, i, a = t.body.length, l = t.hLinesBeforeRow, o = 0, s = new Array(a), u = [], m = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    r.fontMetrics().arrayRuleWidth,
    r.minRuleThickness
    // User override.
  ), h = 1 / r.fontMetrics().ptPerEm, d = 5 * h;
  if (t.colSeparationType && t.colSeparationType === "small") {
    var p = r.havingStyle(Q.SCRIPT).sizeMultiplier;
    d = 0.2778 * (p / r.sizeMultiplier);
  }
  var y = t.colSeparationType === "CD" ? De({
    number: 3,
    unit: "ex"
  }, r) : 12 * h, b = 3 * h, z = t.arraystretch * y, T = 0.7 * z, M = 0.3 * z, R = 0;
  function $(Ft) {
    for (var ft = 0; ft < Ft.length; ++ft)
      ft > 0 && (R += 0.25), u.push({
        pos: R,
        isDashed: Ft[ft]
      });
  }
  for ($(l[0]), n = 0; n < t.body.length; ++n) {
    var j = t.body[n], D = T, W = M;
    o < j.length && (o = j.length);
    var J = new Array(j.length);
    for (i = 0; i < j.length; ++i) {
      var V = fe(j[i], r);
      W < V.depth && (W = V.depth), D < V.height && (D = V.height), J[i] = V;
    }
    var I = t.rowGaps[n], U = 0;
    I && (U = De(I, r), U > 0 && (U += M, W < U && (W = U), U = 0)), t.addJot && (W += b), J.height = D, J.depth = W, R += D, J.pos = R, R += W + U, s[n] = J, $(l[n + 1]);
  }
  var _ = R / 2 + r.fontMetrics().axisHeight, ae = t.cols || [], re = [], ee, ve, ye = [];
  if (t.tags && t.tags.some((Ft) => Ft))
    for (n = 0; n < a; ++n) {
      var Re = s[n], je = Re.pos - _, S = t.tags[n], ze = void 0;
      S === !0 ? ze = E.makeSpan(["eqn-num"], [], r) : S === !1 ? ze = E.makeSpan([], [], r) : ze = E.makeSpan([], qe(S, r, !0), r), ze.depth = Re.depth, ze.height = Re.height, ye.push({
        type: "elem",
        elem: ze,
        shift: je
      });
    }
  for (
    i = 0, ve = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    i < o || ve < ae.length;
    ++i, ++ve
  ) {
    for (var Ae = ae[ve] || {}, A = !0; Ae.type === "separator"; ) {
      if (A || (ee = E.makeSpan(["arraycolsep"], []), ee.style.width = q(r.fontMetrics().doubleRuleSep), re.push(ee)), Ae.separator === "|" || Ae.separator === ":") {
        var He = Ae.separator === "|" ? "solid" : "dashed", _e = E.makeSpan(["vertical-separator"], [], r);
        _e.style.height = q(R), _e.style.borderRightWidth = q(m), _e.style.borderRightStyle = He, _e.style.margin = "0 " + q(-m / 2);
        var Ce = R - _;
        Ce && (_e.style.verticalAlign = q(-Ce)), re.push(_e);
      } else
        throw new O("Invalid separator type: " + Ae.separator);
      ve++, Ae = ae[ve] || {}, A = !1;
    }
    if (!(i >= o)) {
      var $e = void 0;
      (i > 0 || t.hskipBeforeAndAfter) && ($e = pe.deflt(Ae.pregap, d), $e !== 0 && (ee = E.makeSpan(["arraycolsep"], []), ee.style.width = q($e), re.push(ee)));
      var Be = [];
      for (n = 0; n < a; ++n) {
        var We = s[n], Ve = We[i];
        if (Ve) {
          var Vt = We.pos - _;
          Ve.depth = We.depth, Ve.height = We.height, Be.push({
            type: "elem",
            elem: Ve,
            shift: Vt
          });
        }
      }
      Be = E.makeVList({
        positionType: "individualShift",
        children: Be
      }, r), Be = E.makeSpan(["col-align-" + (Ae.align || "c")], [Be]), re.push(Be), (i < o - 1 || t.hskipBeforeAndAfter) && ($e = pe.deflt(Ae.postgap, d), $e !== 0 && (ee = E.makeSpan(["arraycolsep"], []), ee.style.width = q($e), re.push(ee)));
    }
  }
  if (s = E.makeSpan(["mtable"], re), u.length > 0) {
    for (var fr = E.makeLineSpan("hline", r, m), Mr = E.makeLineSpan("hdashline", r, m), tr = [{
      type: "elem",
      elem: s,
      shift: 0
    }]; u.length > 0; ) {
      var St = u.pop(), bt = St.pos - _;
      St.isDashed ? tr.push({
        type: "elem",
        elem: Mr,
        shift: bt
      }) : tr.push({
        type: "elem",
        elem: fr,
        shift: bt
      });
    }
    s = E.makeVList({
      positionType: "individualShift",
      children: tr
    }, r);
  }
  if (ye.length === 0)
    return E.makeSpan(["mord"], [s], r);
  var Rt = E.makeVList({
    positionType: "individualShift",
    children: ye
  }, r);
  return Rt = E.makeSpan(["tag"], [Rt], r), E.makeFragment([s, Rt]);
}, Sf = {
  c: "center ",
  l: "left ",
  r: "right "
}, Dt = function(t, r) {
  for (var n = [], i = new B.MathNode("mtd", [], ["mtr-glue"]), a = new B.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < t.body.length; l++) {
    for (var o = t.body[l], s = [], u = 0; u < o.length; u++)
      s.push(new B.MathNode("mtd", [we(o[u], r)]));
    t.tags && t.tags[l] && (s.unshift(i), s.push(i), t.leqno ? s.unshift(a) : s.push(a)), n.push(new B.MathNode("mtr", s));
  }
  var m = new B.MathNode("mtable", n), h = t.arraystretch === 0.5 ? 0.1 : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
  m.setAttribute("rowspacing", q(h));
  var d = "", p = "";
  if (t.cols && t.cols.length > 0) {
    var y = t.cols, b = "", z = !1, T = 0, M = y.length;
    y[0].type === "separator" && (d += "top ", T = 1), y[y.length - 1].type === "separator" && (d += "bottom ", M -= 1);
    for (var R = T; R < M; R++)
      y[R].type === "align" ? (p += Sf[y[R].align], z && (b += "none "), z = !0) : y[R].type === "separator" && z && (b += y[R].separator === "|" ? "solid " : "dashed ", z = !1);
    m.setAttribute("columnalign", p.trim()), /[sd]/.test(b) && m.setAttribute("columnlines", b.trim());
  }
  if (t.colSeparationType === "align") {
    for (var $ = t.cols || [], j = "", D = 1; D < $.length; D++)
      j += D % 2 ? "0em " : "1em ";
    m.setAttribute("columnspacing", j.trim());
  } else t.colSeparationType === "alignat" || t.colSeparationType === "gather" ? m.setAttribute("columnspacing", "0em") : t.colSeparationType === "small" ? m.setAttribute("columnspacing", "0.2778em") : t.colSeparationType === "CD" ? m.setAttribute("columnspacing", "0.5em") : m.setAttribute("columnspacing", "1em");
  var W = "", J = t.hLinesBeforeRow;
  d += J[0].length > 0 ? "left " : "", d += J[J.length - 1].length > 0 ? "right " : "";
  for (var V = 1; V < J.length - 1; V++)
    W += J[V].length === 0 ? "none " : J[V][0] ? "dashed " : "solid ";
  return /[sd]/.test(W) && m.setAttribute("rowlines", W.trim()), d !== "" && (m = new B.MathNode("menclose", [m]), m.setAttribute("notation", d.trim())), t.arraystretch && t.arraystretch < 1 && (m = new B.MathNode("mstyle", [m]), m.setAttribute("scriptlevel", "1")), m;
}, es = function(t, r) {
  t.envName.indexOf("ed") === -1 && On(t);
  var n = [], i = t.envName.indexOf("at") > -1 ? "alignat" : "align", a = t.envName === "split", l = er(t.parser, {
    cols: n,
    addJot: !0,
    autoTag: a ? void 0 : Si(t.envName),
    emptySingleRow: !0,
    colSeparationType: i,
    maxNumCols: a ? 2 : void 0,
    leqno: t.parser.settings.leqno
  }, "display"), o, s = 0, u = {
    type: "ordgroup",
    mode: t.mode,
    body: []
  };
  if (r[0] && r[0].type === "ordgroup") {
    for (var m = "", h = 0; h < r[0].body.length; h++) {
      var d = oe(r[0].body[h], "textord");
      m += d.text;
    }
    o = Number(m), s = o * 2;
  }
  var p = !s;
  l.body.forEach(function(T) {
    for (var M = 1; M < T.length; M += 2) {
      var R = oe(T[M], "styling"), $ = oe(R.body[0], "ordgroup");
      $.body.unshift(u);
    }
    if (p)
      s < T.length && (s = T.length);
    else {
      var j = T.length / 2;
      if (o < j)
        throw new O("Too many math in a row: " + ("expected " + o + ", but got " + j), T[0]);
    }
  });
  for (var y = 0; y < s; ++y) {
    var b = "r", z = 0;
    y % 2 === 1 ? b = "l" : y > 0 && p && (z = 1), n[y] = {
      type: "align",
      align: b,
      pregap: z,
      postgap: 0
    };
  }
  return l.colSeparationType = p ? "align" : "alignat", l;
};
zt({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(e, t) {
    var r = Nn(t[0]), n = r ? [t[0]] : oe(t[0], "ordgroup").body, i = n.map(function(l) {
      var o = yi(l), s = o.text;
      if ("lcr".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      if (s === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (s === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new O("Unknown column alignment: " + s, l);
    }), a = {
      cols: i,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: i.length
    };
    return er(e.parser, a, Ti(e.envName));
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(e) {
    var t = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[e.envName.replace("*", "")], r = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: r
      }]
    };
    if (e.envName.charAt(e.envName.length - 1) === "*") {
      var i = e.parser;
      if (i.consumeSpaces(), i.fetch().text === "[") {
        if (i.consume(), i.consumeSpaces(), r = i.fetch().text, "lcr".indexOf(r) === -1)
          throw new O("Expected l or c or r", i.nextToken);
        i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), n.cols = [{
          type: "align",
          align: r
        }];
      }
    }
    var a = er(e.parser, n, Ti(e.envName)), l = Math.max(0, ...a.body.map((o) => o.length));
    return a.cols = new Array(l).fill({
      type: "align",
      align: r
    }), t ? {
      type: "leftright",
      mode: e.mode,
      body: [a],
      left: t[0],
      right: t[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : a;
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(e) {
    var t = {
      arraystretch: 0.5
    }, r = er(e.parser, t, "script");
    return r.colSeparationType = "small", r;
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(e, t) {
    var r = Nn(t[0]), n = r ? [t[0]] : oe(t[0], "ordgroup").body, i = n.map(function(l) {
      var o = yi(l), s = o.text;
      if ("lc".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      throw new O("Unknown column alignment: " + s, l);
    });
    if (i.length > 1)
      throw new O("{subarray} can contain only one column");
    var a = {
      cols: i,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (a = er(e.parser, a, "script"), a.body.length > 0 && a.body[0].length > 1)
      throw new O("{subarray} can contain only one column");
    return a;
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(e) {
    var t = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, r = er(e.parser, t, Ti(e.envName));
    return {
      type: "leftright",
      mode: e.mode,
      body: [r],
      left: e.envName.indexOf("r") > -1 ? "." : "\\{",
      right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: es,
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(e) {
    ["gather", "gather*"].includes(e.envName) && On(e);
    var t = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Si(e.envName),
      emptySingleRow: !0,
      leqno: e.parser.settings.leqno
    };
    return er(e.parser, t, "display");
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: es,
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(e) {
    On(e);
    var t = {
      autoTag: Si(e.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: e.parser.settings.leqno
    };
    return er(e.parser, t, "display");
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
zt({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(e) {
    return On(e), uf(e.parser);
  },
  htmlBuilder: Et,
  mathmlBuilder: Dt
});
v("\\nonumber", "\\gdef\\@eqnsw{0}");
v("\\notag", "\\nonumber");
G({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(e, t) {
    throw new O(e.funcName + " valid only within array environment");
  }
});
var el = Zo;
G({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0];
    if (i.type !== "ordgroup")
      throw new O("Invalid environment name", i);
    for (var a = "", l = 0; l < i.body.length; ++l)
      a += oe(i.body[l], "textord").text;
    if (n === "\\begin") {
      if (!el.hasOwnProperty(a))
        throw new O("No such environment: " + a, i);
      var o = el[a], {
        args: s,
        optArgs: u
      } = r.parseArguments("\\begin{" + a + "}", o), m = {
        mode: r.mode,
        envName: a,
        parser: r
      }, h = o.handler(m, s, u);
      r.expect("\\end", !1);
      var d = r.nextToken, p = oe(r.parseFunction(), "environment");
      if (p.name !== a)
        throw new O("Mismatch: \\begin{" + a + "} matched by \\end{" + p.name + "}", d);
      return h;
    }
    return {
      type: "environment",
      mode: r.mode,
      name: a,
      nameGroup: i
    };
  }
});
var ts = (e, t) => {
  var r = e.font, n = t.withFont(r);
  return fe(e.body, n);
}, rs = (e, t) => {
  var r = e.font, n = t.withFont(r);
  return we(e.body, n);
}, tl = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
G({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = Tn(t[0]), a = n;
    return a in tl && (a = tl[a]), {
      type: "font",
      mode: r.mode,
      font: a.slice(1),
      body: i
    };
  },
  htmlBuilder: ts,
  mathmlBuilder: rs
});
G({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e, n = t[0], i = pe.isCharacterBox(n);
    return {
      type: "mclass",
      mode: r.mode,
      mclass: Bn(n),
      body: [{
        type: "font",
        mode: r.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: i
    };
  }
});
G({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n,
      breakOnTokenText: i
    } = e, {
      mode: a
    } = r, l = r.parseExpression(!0, i), o = "math" + n.slice(1);
    return {
      type: "font",
      mode: a,
      font: o,
      body: {
        type: "ordgroup",
        mode: r.mode,
        body: l
      }
    };
  },
  htmlBuilder: ts,
  mathmlBuilder: rs
});
var ns = (e, t) => {
  var r = t;
  return e === "display" ? r = r.id >= Q.SCRIPT.id ? r.text() : Q.DISPLAY : e === "text" && r.size === Q.DISPLAY.size ? r = Q.TEXT : e === "script" ? r = Q.SCRIPT : e === "scriptscript" && (r = Q.SCRIPTSCRIPT), r;
}, Ai = (e, t) => {
  var r = ns(e.size, t.style), n = r.fracNum(), i = r.fracDen(), a;
  a = t.havingStyle(n);
  var l = fe(e.numer, a, t);
  if (e.continued) {
    var o = 8.5 / t.fontMetrics().ptPerEm, s = 3.5 / t.fontMetrics().ptPerEm;
    l.height = l.height < o ? o : l.height, l.depth = l.depth < s ? s : l.depth;
  }
  a = t.havingStyle(i);
  var u = fe(e.denom, a, t), m, h, d;
  e.hasBarLine ? (e.barSize ? (h = De(e.barSize, t), m = E.makeLineSpan("frac-line", t, h)) : m = E.makeLineSpan("frac-line", t), h = m.height, d = m.height) : (m = null, h = 0, d = t.fontMetrics().defaultRuleThickness);
  var p, y, b;
  r.size === Q.DISPLAY.size || e.size === "display" ? (p = t.fontMetrics().num1, h > 0 ? y = 3 * d : y = 7 * d, b = t.fontMetrics().denom1) : (h > 0 ? (p = t.fontMetrics().num2, y = d) : (p = t.fontMetrics().num3, y = 3 * d), b = t.fontMetrics().denom2);
  var z;
  if (m) {
    var M = t.fontMetrics().axisHeight;
    p - l.depth - (M + 0.5 * h) < y && (p += y - (p - l.depth - (M + 0.5 * h))), M - 0.5 * h - (u.height - b) < y && (b += y - (M - 0.5 * h - (u.height - b)));
    var R = -(M - 0.5 * h);
    z = E.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: b
      }, {
        type: "elem",
        elem: m,
        shift: R
      }, {
        type: "elem",
        elem: l,
        shift: -p
      }]
    }, t);
  } else {
    var T = p - l.depth - (u.height - b);
    T < y && (p += 0.5 * (y - T), b += 0.5 * (y - T)), z = E.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: b
      }, {
        type: "elem",
        elem: l,
        shift: -p
      }]
    }, t);
  }
  a = t.havingStyle(r), z.height *= a.sizeMultiplier / t.sizeMultiplier, z.depth *= a.sizeMultiplier / t.sizeMultiplier;
  var $;
  r.size === Q.DISPLAY.size ? $ = t.fontMetrics().delim1 : r.size === Q.SCRIPTSCRIPT.size ? $ = t.havingStyle(Q.SCRIPT).fontMetrics().delim2 : $ = t.fontMetrics().delim2;
  var j, D;
  return e.leftDelim == null ? j = jr(t, ["mopen"]) : j = Lt.customSizedDelim(e.leftDelim, $, !0, t.havingStyle(r), e.mode, ["mopen"]), e.continued ? D = E.makeSpan([]) : e.rightDelim == null ? D = jr(t, ["mclose"]) : D = Lt.customSizedDelim(e.rightDelim, $, !0, t.havingStyle(r), e.mode, ["mclose"]), E.makeSpan(["mord"].concat(a.sizingClasses(t)), [j, E.makeSpan(["mfrac"], [z]), D], t);
}, Ci = (e, t) => {
  var r = new B.MathNode("mfrac", [we(e.numer, t), we(e.denom, t)]);
  if (!e.hasBarLine)
    r.setAttribute("linethickness", "0px");
  else if (e.barSize) {
    var n = De(e.barSize, t);
    r.setAttribute("linethickness", q(n));
  }
  var i = ns(e.size, t.style);
  if (i.size !== t.style.size) {
    r = new B.MathNode("mstyle", [r]);
    var a = i.size === Q.DISPLAY.size ? "true" : "false";
    r.setAttribute("displaystyle", a), r.setAttribute("scriptlevel", "0");
  }
  if (e.leftDelim != null || e.rightDelim != null) {
    var l = [];
    if (e.leftDelim != null) {
      var o = new B.MathNode("mo", [new B.TextNode(e.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    if (l.push(r), e.rightDelim != null) {
      var s = new B.MathNode("mo", [new B.TextNode(e.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    return gi(l);
  }
  return r;
};
G({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0], a = t[1], l, o = null, s = null, u = "auto";
    switch (n) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, o = "(", s = ")";
        break;
      case "\\\\bracefrac":
        l = !1, o = "\\{", s = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, o = "[", s = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (n) {
      case "\\dfrac":
      case "\\dbinom":
        u = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        u = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: r.mode,
      continued: !1,
      numer: i,
      denom: a,
      hasBarLine: l,
      leftDelim: o,
      rightDelim: s,
      size: u,
      barSize: null
    };
  },
  htmlBuilder: Ai,
  mathmlBuilder: Ci
});
G({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0], a = t[1];
    return {
      type: "genfrac",
      mode: r.mode,
      continued: !0,
      numer: i,
      denom: a,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
G({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r,
      token: n
    } = e, i;
    switch (r) {
      case "\\over":
        i = "\\frac";
        break;
      case "\\choose":
        i = "\\binom";
        break;
      case "\\atop":
        i = "\\\\atopfrac";
        break;
      case "\\brace":
        i = "\\\\bracefrac";
        break;
      case "\\brack":
        i = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: i,
      token: n
    };
  }
});
var rl = ["display", "text", "script", "scriptscript"], nl = function(t) {
  var r = null;
  return t.length > 0 && (r = t, r = r === "." ? null : r), r;
};
G({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(e, t) {
    var {
      parser: r
    } = e, n = t[4], i = t[5], a = Tn(t[0]), l = a.type === "atom" && a.family === "open" ? nl(a.text) : null, o = Tn(t[1]), s = o.type === "atom" && o.family === "close" ? nl(o.text) : null, u = oe(t[2], "size"), m, h = null;
    u.isBlank ? m = !0 : (h = u.value, m = h.number > 0);
    var d = "auto", p = t[3];
    if (p.type === "ordgroup") {
      if (p.body.length > 0) {
        var y = oe(p.body[0], "textord");
        d = rl[Number(y.text)];
      }
    } else
      p = oe(p, "textord"), d = rl[Number(p.text)];
    return {
      type: "genfrac",
      mode: r.mode,
      numer: n,
      denom: i,
      continued: !1,
      hasBarLine: m,
      barSize: h,
      leftDelim: l,
      rightDelim: s,
      size: d
    };
  },
  htmlBuilder: Ai,
  mathmlBuilder: Ci
});
G({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n,
      token: i
    } = e;
    return {
      type: "infix",
      mode: r.mode,
      replaceWith: "\\\\abovefrac",
      size: oe(t[0], "size").value,
      token: i
    };
  }
});
G({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0], a = Z4(oe(t[1], "infix").size), l = t[2], o = a.number > 0;
    return {
      type: "genfrac",
      mode: r.mode,
      numer: i,
      denom: l,
      continued: !1,
      hasBarLine: o,
      barSize: a,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: Ai,
  mathmlBuilder: Ci
});
var is = (e, t) => {
  var r = t.style, n, i;
  e.type === "supsub" ? (n = e.sup ? fe(e.sup, t.havingStyle(r.sup()), t) : fe(e.sub, t.havingStyle(r.sub()), t), i = oe(e.base, "horizBrace")) : i = oe(e, "horizBrace");
  var a = fe(i.base, t.havingBaseStyle(Q.DISPLAY)), l = jt.svgSpan(i, t), o;
  if (i.isOver ? (o = E.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: a
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, t), o.children[0].children[0].children[1].classes.push("svg-align")) : (o = E.makeVList({
    positionType: "bottom",
    positionData: a.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: a
    }]
  }, t), o.children[0].children[0].children[0].classes.push("svg-align")), n) {
    var s = E.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], t);
    i.isOver ? o = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }, t) : o = E.makeVList({
      positionType: "bottom",
      positionData: s.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: s
      }]
    }, t);
  }
  return E.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], t);
}, Tf = (e, t) => {
  var r = jt.mathMLnode(e.label);
  return new B.MathNode(e.isOver ? "mover" : "munder", [we(e.base, t), r]);
};
G({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e;
    return {
      type: "horizBrace",
      mode: r.mode,
      label: n,
      isOver: /^\\over/.test(n),
      base: t[0]
    };
  },
  htmlBuilder: is,
  mathmlBuilder: Tf
});
G({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e, n = t[1], i = oe(t[0], "url").url;
    return r.settings.isTrusted({
      command: "\\href",
      url: i
    }) ? {
      type: "href",
      mode: r.mode,
      href: i,
      body: Ne(n)
    } : r.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (e, t) => {
    var r = qe(e.body, t, !1);
    return E.makeAnchor(e.href, [], r, t);
  },
  mathmlBuilder: (e, t) => {
    var r = Zt(e.body, t);
    return r instanceof ut || (r = new ut("mrow", [r])), r.setAttribute("href", e.href), r;
  }
});
G({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e, n = oe(t[0], "url").url;
    if (!r.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return r.formatUnsupportedCmd("\\url");
    for (var i = [], a = 0; a < n.length; a++) {
      var l = n[a];
      l === "~" && (l = "\\textasciitilde"), i.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var o = {
      type: "text",
      mode: r.mode,
      font: "\\texttt",
      body: i
    };
    return {
      type: "href",
      mode: r.mode,
      href: n,
      body: Ne(o)
    };
  }
});
G({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "hbox",
      mode: r.mode,
      body: Ne(t[0])
    };
  },
  htmlBuilder(e, t) {
    var r = qe(e.body, t, !1);
    return E.makeFragment(r);
  },
  mathmlBuilder(e, t) {
    return new B.MathNode("mrow", at(e.body, t));
  }
});
G({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n,
      token: i
    } = e, a = oe(t[0], "raw").string, l = t[1];
    r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, s = {};
    switch (n) {
      case "\\htmlClass":
        s.class = a, o = {
          command: "\\htmlClass",
          class: a
        };
        break;
      case "\\htmlId":
        s.id = a, o = {
          command: "\\htmlId",
          id: a
        };
        break;
      case "\\htmlStyle":
        s.style = a, o = {
          command: "\\htmlStyle",
          style: a
        };
        break;
      case "\\htmlData": {
        for (var u = a.split(","), m = 0; m < u.length; m++) {
          var h = u[m], d = h.indexOf("=");
          if (d < 0)
            throw new O("\\htmlData key/value '" + h + "' missing equals sign");
          var p = h.slice(0, d), y = h.slice(d + 1);
          s["data-" + p.trim()] = y;
        }
        o = {
          command: "\\htmlData",
          attributes: s
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return r.settings.isTrusted(o) ? {
      type: "html",
      mode: r.mode,
      attributes: s,
      body: Ne(l)
    } : r.formatUnsupportedCmd(n);
  },
  htmlBuilder: (e, t) => {
    var r = qe(e.body, t, !1), n = ["enclosing"];
    e.attributes.class && n.push(...e.attributes.class.trim().split(/\s+/));
    var i = E.makeSpan(n, r, t);
    for (var a in e.attributes)
      a !== "class" && e.attributes.hasOwnProperty(a) && i.setAttribute(a, e.attributes[a]);
    return i;
  },
  mathmlBuilder: (e, t) => Zt(e.body, t)
});
G({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e;
    return {
      type: "htmlmathml",
      mode: r.mode,
      html: Ne(t[0]),
      mathml: Ne(t[1])
    };
  },
  htmlBuilder: (e, t) => {
    var r = qe(e.html, t, !1);
    return E.makeFragment(r);
  },
  mathmlBuilder: (e, t) => Zt(e.mathml, t)
});
var p0 = function(t) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))
    return {
      number: +t,
      unit: "bp"
    };
  var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
  if (!r)
    throw new O("Invalid size: '" + t + "' in \\includegraphics");
  var n = {
    number: +(r[1] + r[2]),
    // sign + magnitude, cast to number
    unit: r[3]
  };
  if (!So(n))
    throw new O("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
G({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (e, t, r) => {
    var {
      parser: n
    } = e, i = {
      number: 0,
      unit: "em"
    }, a = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, o = "";
    if (r[0])
      for (var s = oe(r[0], "raw").string, u = s.split(","), m = 0; m < u.length; m++) {
        var h = u[m].split("=");
        if (h.length === 2) {
          var d = h[1].trim();
          switch (h[0].trim()) {
            case "alt":
              o = d;
              break;
            case "width":
              i = p0(d);
              break;
            case "height":
              a = p0(d);
              break;
            case "totalheight":
              l = p0(d);
              break;
            default:
              throw new O("Invalid key: '" + h[0] + "' in \\includegraphics.");
          }
        }
      }
    var p = oe(t[0], "url").url;
    return o === "" && (o = p, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: p
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: o,
      width: i,
      height: a,
      totalheight: l,
      src: p
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (e, t) => {
    var r = De(e.height, t), n = 0;
    e.totalheight.number > 0 && (n = De(e.totalheight, t) - r);
    var i = 0;
    e.width.number > 0 && (i = De(e.width, t));
    var a = {
      height: q(r + n)
    };
    i > 0 && (a.width = q(i)), n > 0 && (a.verticalAlign = q(-n));
    var l = new Sm(e.src, e.alt, a);
    return l.height = r, l.depth = n, l;
  },
  mathmlBuilder: (e, t) => {
    var r = new B.MathNode("mglyph", []);
    r.setAttribute("alt", e.alt);
    var n = De(e.height, t), i = 0;
    if (e.totalheight.number > 0 && (i = De(e.totalheight, t) - n, r.setAttribute("valign", q(-i))), r.setAttribute("height", q(n + i)), e.width.number > 0) {
      var a = De(e.width, t);
      r.setAttribute("width", q(a));
    }
    return r.setAttribute("src", e.src), r;
  }
});
G({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e, i = oe(t[0], "size");
    if (r.settings.strict) {
      var a = n[1] === "m", l = i.value.unit === "mu";
      a ? (l || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + i.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : l && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: r.mode,
      dimension: i.value
    };
  },
  htmlBuilder(e, t) {
    return E.makeGlue(e.dimension, t);
  },
  mathmlBuilder(e, t) {
    var r = De(e.dimension, t);
    return new B.SpaceNode(r);
  }
});
G({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0];
    return {
      type: "lap",
      mode: r.mode,
      alignment: n.slice(5),
      body: i
    };
  },
  htmlBuilder: (e, t) => {
    var r;
    e.alignment === "clap" ? (r = E.makeSpan([], [fe(e.body, t)]), r = E.makeSpan(["inner"], [r], t)) : r = E.makeSpan(["inner"], [fe(e.body, t)]);
    var n = E.makeSpan(["fix"], []), i = E.makeSpan([e.alignment], [r, n], t), a = E.makeSpan(["strut"]);
    return a.style.height = q(i.height + i.depth), i.depth && (a.style.verticalAlign = q(-i.depth)), i.children.unshift(a), i = E.makeSpan(["thinbox"], [i], t), E.makeSpan(["mord", "vbox"], [i], t);
  },
  mathmlBuilder: (e, t) => {
    var r = new B.MathNode("mpadded", [we(e.body, t)]);
    if (e.alignment !== "rlap") {
      var n = e.alignment === "llap" ? "-1" : "-0.5";
      r.setAttribute("lspace", n + "width");
    }
    return r.setAttribute("width", "0px"), r;
  }
});
G({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(e, t) {
    var {
      funcName: r,
      parser: n
    } = e, i = n.mode;
    n.switchMode("math");
    var a = r === "\\(" ? "\\)" : "$", l = n.parseExpression(!1, a);
    return n.expect(a), n.switchMode(i), {
      type: "styling",
      mode: n.mode,
      style: "text",
      body: l
    };
  }
});
G({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(e, t) {
    throw new O("Mismatched " + e.funcName);
  }
});
var il = (e, t) => {
  switch (t.style.size) {
    case Q.DISPLAY.size:
      return e.display;
    case Q.TEXT.size:
      return e.text;
    case Q.SCRIPT.size:
      return e.script;
    case Q.SCRIPTSCRIPT.size:
      return e.scriptscript;
    default:
      return e.text;
  }
};
G({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e;
    return {
      type: "mathchoice",
      mode: r.mode,
      display: Ne(t[0]),
      text: Ne(t[1]),
      script: Ne(t[2]),
      scriptscript: Ne(t[3])
    };
  },
  htmlBuilder: (e, t) => {
    var r = il(e, t), n = qe(r, t, !1);
    return E.makeFragment(n);
  },
  mathmlBuilder: (e, t) => {
    var r = il(e, t);
    return Zt(r, t);
  }
});
var as = (e, t, r, n, i, a, l) => {
  e = E.makeSpan([], [e]);
  var o = r && pe.isCharacterBox(r), s, u;
  if (t) {
    var m = fe(t, n.havingStyle(i.sup()), n);
    u = {
      elem: m,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - m.depth)
    };
  }
  if (r) {
    var h = fe(r, n.havingStyle(i.sub()), n);
    s = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - h.height)
    };
  }
  var d;
  if (u && s) {
    var p = n.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + e.depth + l;
    d = E.makeVList({
      positionType: "bottom",
      positionData: p,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: q(-a)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: e
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: q(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else if (s) {
    var y = e.height - l;
    d = E.makeVList({
      positionType: "top",
      positionData: y,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: q(-a)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: e
      }]
    }, n);
  } else if (u) {
    var b = e.depth + l;
    d = E.makeVList({
      positionType: "bottom",
      positionData: b,
      children: [{
        type: "elem",
        elem: e
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: q(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else
    return e;
  var z = [d];
  if (s && a !== 0 && !o) {
    var T = E.makeSpan(["mspace"], [], n);
    T.style.marginRight = q(a), z.unshift(T);
  }
  return E.makeSpan(["mop", "op-limits"], z, n);
}, ls = ["\\smallint"], Cr = (e, t) => {
  var r, n, i = !1, a;
  e.type === "supsub" ? (r = e.sup, n = e.sub, a = oe(e.base, "op"), i = !0) : a = oe(e, "op");
  var l = t.style, o = !1;
  l.size === Q.DISPLAY.size && a.symbol && !ls.includes(a.name) && (o = !0);
  var s;
  if (a.symbol) {
    var u = o ? "Size2-Regular" : "Size1-Regular", m = "";
    if ((a.name === "\\oiint" || a.name === "\\oiiint") && (m = a.name.slice(1), a.name = m === "oiint" ? "\\iint" : "\\iiint"), s = E.makeSymbol(a.name, u, "math", t, ["mop", "op-symbol", o ? "large-op" : "small-op"]), m.length > 0) {
      var h = s.italic, d = E.staticSvg(m + "Size" + (o ? "2" : "1"), t);
      s = E.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: s,
          shift: 0
        }, {
          type: "elem",
          elem: d,
          shift: o ? 0.08 : 0
        }]
      }, t), a.name = "\\" + m, s.classes.unshift("mop"), s.italic = h;
    }
  } else if (a.body) {
    var p = qe(a.body, t, !0);
    p.length === 1 && p[0] instanceof vt ? (s = p[0], s.classes[0] = "mop") : s = E.makeSpan(["mop"], p, t);
  } else {
    for (var y = [], b = 1; b < a.name.length; b++)
      y.push(E.mathsym(a.name[b], a.mode, t));
    s = E.makeSpan(["mop"], y, t);
  }
  var z = 0, T = 0;
  return (s instanceof vt || a.name === "\\oiint" || a.name === "\\oiiint") && !a.suppressBaseShift && (z = (s.height - s.depth) / 2 - t.fontMetrics().axisHeight, T = s.italic), i ? as(s, r, n, t, l, T, z) : (z && (s.style.position = "relative", s.style.top = q(z)), s);
}, Xr = (e, t) => {
  var r;
  if (e.symbol)
    r = new ut("mo", [yt(e.name, e.mode)]), ls.includes(e.name) && r.setAttribute("largeop", "false");
  else if (e.body)
    r = new ut("mo", at(e.body, t));
  else {
    r = new ut("mi", [new Mt(e.name.slice(1))]);
    var n = new ut("mo", [yt("⁡", "text")]);
    e.parentIsSupSub ? r = new ut("mrow", [r, n]) : r = No([r, n]);
  }
  return r;
}, Af = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
G({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = n;
    return i.length === 1 && (i = Af[i]), {
      type: "op",
      mode: r.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: i
    };
  },
  htmlBuilder: Cr,
  mathmlBuilder: Xr
});
G({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e, n = t[0];
    return {
      type: "op",
      mode: r.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: Ne(n)
    };
  },
  htmlBuilder: Cr,
  mathmlBuilder: Xr
});
var Cf = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
G({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r
    } = e;
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: r
    };
  },
  htmlBuilder: Cr,
  mathmlBuilder: Xr
});
G({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r
    } = e;
    return {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: r
    };
  },
  htmlBuilder: Cr,
  mathmlBuilder: Xr
});
G({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0,
    allowedInArgument: !0
  },
  handler(e) {
    var {
      parser: t,
      funcName: r
    } = e, n = r;
    return n.length === 1 && (n = Cf[n]), {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: Cr,
  mathmlBuilder: Xr
});
var os = (e, t) => {
  var r, n, i = !1, a;
  e.type === "supsub" ? (r = e.sup, n = e.sub, a = oe(e.base, "operatorname"), i = !0) : a = oe(e, "operatorname");
  var l;
  if (a.body.length > 0) {
    for (var o = a.body.map((h) => {
      var d = h.text;
      return typeof d == "string" ? {
        type: "textord",
        mode: h.mode,
        text: d
      } : h;
    }), s = qe(o, t.withFont("mathrm"), !0), u = 0; u < s.length; u++) {
      var m = s[u];
      m instanceof vt && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = E.makeSpan(["mop"], s, t);
  } else
    l = E.makeSpan(["mop"], [], t);
  return i ? as(l, r, n, t, t.style, 0, 0) : l;
}, Mf = (e, t) => {
  for (var r = at(e.body, t.withFont("mathrm")), n = !0, i = 0; i < r.length; i++) {
    var a = r[i];
    if (!(a instanceof B.SpaceNode)) if (a instanceof B.MathNode)
      switch (a.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = a.children[0];
          a.children.length === 1 && l instanceof B.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var o = r.map((m) => m.toText()).join("");
    r = [new B.TextNode(o)];
  }
  var s = new B.MathNode("mi", r);
  s.setAttribute("mathvariant", "normal");
  var u = new B.MathNode("mo", [yt("⁡", "text")]);
  return e.parentIsSupSub ? new B.MathNode("mrow", [s, u]) : B.newDocumentFragment([s, u]);
};
G({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (e, t) => {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0];
    return {
      type: "operatorname",
      mode: r.mode,
      body: Ne(i),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: os,
  mathmlBuilder: Mf
});
v("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
hr({
  type: "ordgroup",
  htmlBuilder(e, t) {
    return e.semisimple ? E.makeFragment(qe(e.body, t, !1)) : E.makeSpan(["mord"], qe(e.body, t, !0), t);
  },
  mathmlBuilder(e, t) {
    return Zt(e.body, t, !0);
  }
});
G({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(e, t) {
    var {
      parser: r
    } = e, n = t[0];
    return {
      type: "overline",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder(e, t) {
    var r = fe(e.body, t.havingCrampedStyle()), n = E.makeLineSpan("overline-line", t), i = t.fontMetrics().defaultRuleThickness, a = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: i
      }]
    }, t);
    return E.makeSpan(["mord", "overline"], [a], t);
  },
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mo", [new B.TextNode("‾")]);
    r.setAttribute("stretchy", "true");
    var n = new B.MathNode("mover", [we(e.body, t), r]);
    return n.setAttribute("accent", "true"), n;
  }
});
G({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e, n = t[0];
    return {
      type: "phantom",
      mode: r.mode,
      body: Ne(n)
    };
  },
  htmlBuilder: (e, t) => {
    var r = qe(e.body, t.withPhantom(), !1);
    return E.makeFragment(r);
  },
  mathmlBuilder: (e, t) => {
    var r = at(e.body, t);
    return new B.MathNode("mphantom", r);
  }
});
G({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e, n = t[0];
    return {
      type: "hphantom",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder: (e, t) => {
    var r = E.makeSpan([], [fe(e.body, t.withPhantom())]);
    if (r.height = 0, r.depth = 0, r.children)
      for (var n = 0; n < r.children.length; n++)
        r.children[n].height = 0, r.children[n].depth = 0;
    return r = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }]
    }, t), E.makeSpan(["mord"], [r], t);
  },
  mathmlBuilder: (e, t) => {
    var r = at(Ne(e.body), t), n = new B.MathNode("mphantom", r), i = new B.MathNode("mpadded", [n]);
    return i.setAttribute("height", "0px"), i.setAttribute("depth", "0px"), i;
  }
});
G({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      parser: r
    } = e, n = t[0];
    return {
      type: "vphantom",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder: (e, t) => {
    var r = E.makeSpan(["inner"], [fe(e.body, t.withPhantom())]), n = E.makeSpan(["fix"], []);
    return E.makeSpan(["mord", "rlap"], [r, n], t);
  },
  mathmlBuilder: (e, t) => {
    var r = at(Ne(e.body), t), n = new B.MathNode("mphantom", r), i = new B.MathNode("mpadded", [n]);
    return i.setAttribute("width", "0px"), i;
  }
});
G({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(e, t) {
    var {
      parser: r
    } = e, n = oe(t[0], "size").value, i = t[1];
    return {
      type: "raisebox",
      mode: r.mode,
      dy: n,
      body: i
    };
  },
  htmlBuilder(e, t) {
    var r = fe(e.body, t), n = De(e.dy, t);
    return E.makeVList({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: r
      }]
    }, t);
  },
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mpadded", [we(e.body, t)]), n = e.dy.number + e.dy.unit;
    return r.setAttribute("voffset", n), r;
  }
});
G({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInArgument: !0
  },
  handler(e) {
    var {
      parser: t
    } = e;
    return {
      type: "internal",
      mode: t.mode
    };
  }
});
G({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["size", "size", "size"]
  },
  handler(e, t, r) {
    var {
      parser: n
    } = e, i = r[0], a = oe(t[0], "size"), l = oe(t[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: i && oe(i, "size").value,
      width: a.value,
      height: l.value
    };
  },
  htmlBuilder(e, t) {
    var r = E.makeSpan(["mord", "rule"], [], t), n = De(e.width, t), i = De(e.height, t), a = e.shift ? De(e.shift, t) : 0;
    return r.style.borderRightWidth = q(n), r.style.borderTopWidth = q(i), r.style.bottom = q(a), r.width = n, r.height = i + a, r.depth = -a, r.maxFontSize = i * 1.125 * t.sizeMultiplier, r;
  },
  mathmlBuilder(e, t) {
    var r = De(e.width, t), n = De(e.height, t), i = e.shift ? De(e.shift, t) : 0, a = t.color && t.getColor() || "black", l = new B.MathNode("mspace");
    l.setAttribute("mathbackground", a), l.setAttribute("width", q(r)), l.setAttribute("height", q(n));
    var o = new B.MathNode("mpadded", [l]);
    return i >= 0 ? o.setAttribute("height", q(i)) : (o.setAttribute("height", q(i)), o.setAttribute("depth", q(-i))), o.setAttribute("voffset", q(i)), o;
  }
});
function ss(e, t, r) {
  for (var n = qe(e, t, !1), i = t.sizeMultiplier / r.sizeMultiplier, a = 0; a < n.length; a++) {
    var l = n[a].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(n[a].classes, t.sizingClasses(r)) : n[a].classes[l + 1] === "reset-size" + t.size && (n[a].classes[l + 1] = "reset-size" + r.size), n[a].height *= i, n[a].depth *= i;
  }
  return E.makeFragment(n);
}
var al = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], zf = (e, t) => {
  var r = t.havingSize(e.size);
  return ss(e.body, r, t);
};
G({
  type: "sizing",
  names: al,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (e, t) => {
    var {
      breakOnTokenText: r,
      funcName: n,
      parser: i
    } = e, a = i.parseExpression(!1, r);
    return {
      type: "sizing",
      mode: i.mode,
      // Figure out what size to use based on the list of functions above
      size: al.indexOf(n) + 1,
      body: a
    };
  },
  htmlBuilder: zf,
  mathmlBuilder: (e, t) => {
    var r = t.havingSize(e.size), n = at(e.body, r), i = new B.MathNode("mstyle", n);
    return i.setAttribute("mathsize", q(r.sizeMultiplier)), i;
  }
});
G({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (e, t, r) => {
    var {
      parser: n
    } = e, i = !1, a = !1, l = r[0] && oe(r[0], "ordgroup");
    if (l)
      for (var o = "", s = 0; s < l.body.length; ++s) {
        var u = l.body[s];
        if (o = u.text, o === "t")
          i = !0;
        else if (o === "b")
          a = !0;
        else {
          i = !1, a = !1;
          break;
        }
      }
    else
      i = !0, a = !0;
    var m = t[0];
    return {
      type: "smash",
      mode: n.mode,
      body: m,
      smashHeight: i,
      smashDepth: a
    };
  },
  htmlBuilder: (e, t) => {
    var r = E.makeSpan([], [fe(e.body, t)]);
    if (!e.smashHeight && !e.smashDepth)
      return r;
    if (e.smashHeight && (r.height = 0, r.children))
      for (var n = 0; n < r.children.length; n++)
        r.children[n].height = 0;
    if (e.smashDepth && (r.depth = 0, r.children))
      for (var i = 0; i < r.children.length; i++)
        r.children[i].depth = 0;
    var a = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }]
    }, t);
    return E.makeSpan(["mord"], [a], t);
  },
  mathmlBuilder: (e, t) => {
    var r = new B.MathNode("mpadded", [we(e.body, t)]);
    return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r;
  }
});
G({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(e, t, r) {
    var {
      parser: n
    } = e, i = r[0], a = t[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: a,
      index: i
    };
  },
  htmlBuilder(e, t) {
    var r = fe(e.body, t.havingCrampedStyle());
    r.height === 0 && (r.height = t.fontMetrics().xHeight), r = E.wrapFragment(r, t);
    var n = t.fontMetrics(), i = n.defaultRuleThickness, a = i;
    t.style.id < Q.TEXT.id && (a = t.fontMetrics().xHeight);
    var l = i + a / 4, o = r.height + r.depth + l + i, {
      span: s,
      ruleWidth: u,
      advanceWidth: m
    } = Lt.sqrtImage(o, t), h = s.height - u;
    h > r.height + r.depth + l && (l = (l + h - r.height - r.depth) / 2);
    var d = s.height - r.height - l - u;
    r.style.paddingLeft = q(m);
    var p = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(r.height + d)
      }, {
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: u
      }]
    }, t);
    if (e.index) {
      var y = t.havingStyle(Q.SCRIPTSCRIPT), b = fe(e.index, y, t), z = 0.6 * (p.height - p.depth), T = E.makeVList({
        positionType: "shift",
        positionData: -z,
        children: [{
          type: "elem",
          elem: b
        }]
      }, t), M = E.makeSpan(["root"], [T]);
      return E.makeSpan(["mord", "sqrt"], [M, p], t);
    } else
      return E.makeSpan(["mord", "sqrt"], [p], t);
  },
  mathmlBuilder(e, t) {
    var {
      body: r,
      index: n
    } = e;
    return n ? new B.MathNode("mroot", [we(r, t), we(n, t)]) : new B.MathNode("msqrt", [we(r, t)]);
  }
});
var ll = {
  display: Q.DISPLAY,
  text: Q.TEXT,
  script: Q.SCRIPT,
  scriptscript: Q.SCRIPTSCRIPT
};
G({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(e, t) {
    var {
      breakOnTokenText: r,
      funcName: n,
      parser: i
    } = e, a = i.parseExpression(!0, r), l = n.slice(1, n.length - 5);
    return {
      type: "styling",
      mode: i.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: a
    };
  },
  htmlBuilder(e, t) {
    var r = ll[e.style], n = t.havingStyle(r).withFont("");
    return ss(e.body, n, t);
  },
  mathmlBuilder(e, t) {
    var r = ll[e.style], n = t.havingStyle(r), i = at(e.body, n), a = new B.MathNode("mstyle", i), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = l[e.style];
    return a.setAttribute("scriptlevel", o[0]), a.setAttribute("displaystyle", o[1]), a;
  }
});
var Ef = function(t, r) {
  var n = t.base;
  if (n)
    if (n.type === "op") {
      var i = n.limits && (r.style.size === Q.DISPLAY.size || n.alwaysHandleSupSub);
      return i ? Cr : null;
    } else if (n.type === "operatorname") {
      var a = n.alwaysHandleSupSub && (r.style.size === Q.DISPLAY.size || n.limits);
      return a ? os : null;
    } else {
      if (n.type === "accent")
        return pe.isCharacterBox(n.base) ? bi : null;
      if (n.type === "horizBrace") {
        var l = !t.sub;
        return l === n.isOver ? is : null;
      } else
        return null;
    }
  else return null;
};
hr({
  type: "supsub",
  htmlBuilder(e, t) {
    var r = Ef(e, t);
    if (r)
      return r(e, t);
    var {
      base: n,
      sup: i,
      sub: a
    } = e, l = fe(n, t), o, s, u = t.fontMetrics(), m = 0, h = 0, d = n && pe.isCharacterBox(n);
    if (i) {
      var p = t.havingStyle(t.style.sup());
      o = fe(i, p, t), d || (m = l.height - p.fontMetrics().supDrop * p.sizeMultiplier / t.sizeMultiplier);
    }
    if (a) {
      var y = t.havingStyle(t.style.sub());
      s = fe(a, y, t), d || (h = l.depth + y.fontMetrics().subDrop * y.sizeMultiplier / t.sizeMultiplier);
    }
    var b;
    t.style === Q.DISPLAY ? b = u.sup1 : t.style.cramped ? b = u.sup3 : b = u.sup2;
    var z = t.sizeMultiplier, T = q(0.5 / u.ptPerEm / z), M = null;
    if (s) {
      var R = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
      (l instanceof vt || R) && (M = q(-l.italic));
    }
    var $;
    if (o && s) {
      m = Math.max(m, b, o.depth + 0.25 * u.xHeight), h = Math.max(h, u.sub2);
      var j = u.defaultRuleThickness, D = 4 * j;
      if (m - o.depth - (s.height - h) < D) {
        h = D - (m - o.depth) + s.height;
        var W = 0.8 * u.xHeight - (m - o.depth);
        W > 0 && (m += W, h -= W);
      }
      var J = [{
        type: "elem",
        elem: s,
        shift: h,
        marginRight: T,
        marginLeft: M
      }, {
        type: "elem",
        elem: o,
        shift: -m,
        marginRight: T
      }];
      $ = E.makeVList({
        positionType: "individualShift",
        children: J
      }, t);
    } else if (s) {
      h = Math.max(h, u.sub1, s.height - 0.8 * u.xHeight);
      var V = [{
        type: "elem",
        elem: s,
        marginLeft: M,
        marginRight: T
      }];
      $ = E.makeVList({
        positionType: "shift",
        positionData: h,
        children: V
      }, t);
    } else if (o)
      m = Math.max(m, b, o.depth + 0.25 * u.xHeight), $ = E.makeVList({
        positionType: "shift",
        positionData: -m,
        children: [{
          type: "elem",
          elem: o,
          marginRight: T
        }]
      }, t);
    else
      throw new Error("supsub must have either sup or sub.");
    var I = j0(l, "right") || "mord";
    return E.makeSpan([I], [l, E.makeSpan(["msupsub"], [$])], t);
  },
  mathmlBuilder(e, t) {
    var r = !1, n, i;
    e.base && e.base.type === "horizBrace" && (i = !!e.sup, i === e.base.isOver && (r = !0, n = e.base.isOver)), e.base && (e.base.type === "op" || e.base.type === "operatorname") && (e.base.parentIsSupSub = !0);
    var a = [we(e.base, t)];
    e.sub && a.push(we(e.sub, t)), e.sup && a.push(we(e.sup, t));
    var l;
    if (r)
      l = n ? "mover" : "munder";
    else if (e.sub)
      if (e.sup) {
        var u = e.base;
        u && u.type === "op" && u.limits && t.style === Q.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (t.style === Q.DISPLAY || u.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var s = e.base;
        s && s.type === "op" && s.limits && (t.style === Q.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || t.style === Q.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var o = e.base;
      o && o.type === "op" && o.limits && (t.style === Q.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || t.style === Q.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new B.MathNode(l, a);
  }
});
hr({
  type: "atom",
  htmlBuilder(e, t) {
    return E.mathsym(e.text, e.mode, t, ["m" + e.family]);
  },
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mo", [yt(e.text, e.mode)]);
    if (e.family === "bin") {
      var n = vi(e, t);
      n === "bold-italic" && r.setAttribute("mathvariant", n);
    } else e.family === "punct" ? r.setAttribute("separator", "true") : (e.family === "open" || e.family === "close") && r.setAttribute("stretchy", "false");
    return r;
  }
});
var us = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
hr({
  type: "mathord",
  htmlBuilder(e, t) {
    return E.makeOrd(e, t, "mathord");
  },
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mi", [yt(e.text, e.mode, t)]), n = vi(e, t) || "italic";
    return n !== us[r.type] && r.setAttribute("mathvariant", n), r;
  }
});
hr({
  type: "textord",
  htmlBuilder(e, t) {
    return E.makeOrd(e, t, "textord");
  },
  mathmlBuilder(e, t) {
    var r = yt(e.text, e.mode, t), n = vi(e, t) || "normal", i;
    return e.mode === "text" ? i = new B.MathNode("mtext", [r]) : /[0-9]/.test(e.text) ? i = new B.MathNode("mn", [r]) : e.text === "\\prime" ? i = new B.MathNode("mo", [r]) : i = new B.MathNode("mi", [r]), n !== us[i.type] && i.setAttribute("mathvariant", n), i;
  }
});
var d0 = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, g0 = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
hr({
  type: "spacing",
  htmlBuilder(e, t) {
    if (g0.hasOwnProperty(e.text)) {
      var r = g0[e.text].className || "";
      if (e.mode === "text") {
        var n = E.makeOrd(e, t, "textord");
        return n.classes.push(r), n;
      } else
        return E.makeSpan(["mspace", r], [E.mathsym(e.text, e.mode, t)], t);
    } else {
      if (d0.hasOwnProperty(e.text))
        return E.makeSpan(["mspace", d0[e.text]], [], t);
      throw new O('Unknown type of space "' + e.text + '"');
    }
  },
  mathmlBuilder(e, t) {
    var r;
    if (g0.hasOwnProperty(e.text))
      r = new B.MathNode("mtext", [new B.TextNode(" ")]);
    else {
      if (d0.hasOwnProperty(e.text))
        return new B.MathNode("mspace");
      throw new O('Unknown type of space "' + e.text + '"');
    }
    return r;
  }
});
var ol = () => {
  var e = new B.MathNode("mtd", []);
  return e.setAttribute("width", "50%"), e;
};
hr({
  type: "tag",
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mtable", [new B.MathNode("mtr", [ol(), new B.MathNode("mtd", [Zt(e.body, t)]), ol(), new B.MathNode("mtd", [Zt(e.tag, t)])])]);
    return r.setAttribute("width", "100%"), r;
  }
});
var sl = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, ul = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Df = {
  "\\textit": "textit",
  "\\textup": "textup"
}, cl = (e, t) => {
  var r = e.font;
  if (r) {
    if (sl[r])
      return t.withTextFontFamily(sl[r]);
    if (ul[r])
      return t.withTextFontWeight(ul[r]);
    if (r === "\\emph")
      return t.fontShape === "textit" ? t.withTextFontShape("textup") : t.withTextFontShape("textit");
  } else return t;
  return t.withTextFontShape(Df[r]);
};
G({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(e, t) {
    var {
      parser: r,
      funcName: n
    } = e, i = t[0];
    return {
      type: "text",
      mode: r.mode,
      body: Ne(i),
      font: n
    };
  },
  htmlBuilder(e, t) {
    var r = cl(e, t), n = qe(e.body, r, !0);
    return E.makeSpan(["mord", "text"], n, r);
  },
  mathmlBuilder(e, t) {
    var r = cl(e, t);
    return Zt(e.body, r);
  }
});
G({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "underline",
      mode: r.mode,
      body: t[0]
    };
  },
  htmlBuilder(e, t) {
    var r = fe(e.body, t), n = E.makeLineSpan("underline-line", t), i = t.fontMetrics().defaultRuleThickness, a = E.makeVList({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: r
      }]
    }, t);
    return E.makeSpan(["mord", "underline"], [a], t);
  },
  mathmlBuilder(e, t) {
    var r = new B.MathNode("mo", [new B.TextNode("‾")]);
    r.setAttribute("stretchy", "true");
    var n = new B.MathNode("munder", [we(e.body, t), r]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
G({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(e, t) {
    var {
      parser: r
    } = e;
    return {
      type: "vcenter",
      mode: r.mode,
      body: t[0]
    };
  },
  htmlBuilder(e, t) {
    var r = fe(e.body, t), n = t.fontMetrics().axisHeight, i = 0.5 * (r.height - n - (r.depth + n));
    return E.makeVList({
      positionType: "shift",
      positionData: i,
      children: [{
        type: "elem",
        elem: r
      }]
    }, t);
  },
  mathmlBuilder(e, t) {
    return new B.MathNode("mpadded", [we(e.body, t)], ["vcenter"]);
  }
});
G({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(e, t, r) {
    throw new O("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(e, t) {
    for (var r = hl(e), n = [], i = t.havingStyle(t.style.text()), a = 0; a < r.length; a++) {
      var l = r[a];
      l === "~" && (l = "\\textasciitilde"), n.push(E.makeSymbol(l, "Typewriter-Regular", e.mode, i, ["mord", "texttt"]));
    }
    return E.makeSpan(["mord", "text"].concat(i.sizingClasses(t)), E.tryCombineChars(n), i);
  },
  mathmlBuilder(e, t) {
    var r = new B.TextNode(hl(e)), n = new B.MathNode("mtext", [r]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var hl = (e) => e.body.replace(/ /g, e.star ? "␣" : " "), Xt = Ro, cs = `[ \r
	]`, If = "\\\\[a-zA-Z@]+", Rf = "\\\\[^\uD800-\uDFFF]", Ff = "(" + If + ")" + cs + "*", Nf = `\\\\(
|[ \r	]+
?)[ \r	]*`, U0 = "[̀-ͯ]", Bf = new RegExp(U0 + "+$"), Pf = "(" + cs + "+)|" + // whitespace
(Nf + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(U0 + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(U0 + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Ff) + // \macroName + spaces
("|" + Rf + ")");
class ml {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(t, r) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = t, this.settings = r, this.tokenRegex = new RegExp(Pf, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(t, r) {
    this.catcodes[t] = r;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var t = this.input, r = this.tokenRegex.lastIndex;
    if (r === t.length)
      return new ht("EOF", new nt(this, r, r));
    var n = this.tokenRegex.exec(t);
    if (n === null || n.index !== r)
      throw new O("Unexpected character: '" + t[r] + "'", new ht(t[r], new nt(this, r, r + 1)));
    var i = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[i] === 14) {
      var a = t.indexOf(`
`, this.tokenRegex.lastIndex);
      return a === -1 ? (this.tokenRegex.lastIndex = t.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = a + 1, this.lex();
    }
    return new ht(i, new nt(this, r, this.tokenRegex.lastIndex));
  }
}
class Of {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(t, r) {
    t === void 0 && (t = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = t, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new O("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var t = this.undefStack.pop();
    for (var r in t)
      t.hasOwnProperty(r) && (t[r] == null ? delete this.current[r] : this.current[r] = t[r]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(t) {
    return this.current.hasOwnProperty(t) || this.builtins.hasOwnProperty(t);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(t) {
    return this.current.hasOwnProperty(t) ? this.current[t] : this.builtins[t];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(t, r, n) {
    if (n === void 0 && (n = !1), n) {
      for (var i = 0; i < this.undefStack.length; i++)
        delete this.undefStack[i][t];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][t] = r);
    } else {
      var a = this.undefStack[this.undefStack.length - 1];
      a && !a.hasOwnProperty(t) && (a[t] = this.current[t]);
    }
    r == null ? delete this.current[t] : this.current[t] = r;
  }
}
var Lf = Qo;
v("\\noexpand", function(e) {
  var t = e.popToken();
  return e.isExpandable(t.text) && (t.noexpand = !0, t.treatAsRelax = !0), {
    tokens: [t],
    numArgs: 0
  };
});
v("\\expandafter", function(e) {
  var t = e.popToken();
  return e.expandOnce(!0), {
    tokens: [t],
    numArgs: 0
  };
});
v("\\@firstoftwo", function(e) {
  var t = e.consumeArgs(2);
  return {
    tokens: t[0],
    numArgs: 0
  };
});
v("\\@secondoftwo", function(e) {
  var t = e.consumeArgs(2);
  return {
    tokens: t[1],
    numArgs: 0
  };
});
v("\\@ifnextchar", function(e) {
  var t = e.consumeArgs(3);
  e.consumeSpaces();
  var r = e.future();
  return t[0].length === 1 && t[0][0].text === r.text ? {
    tokens: t[1],
    numArgs: 0
  } : {
    tokens: t[2],
    numArgs: 0
  };
});
v("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
v("\\TextOrMath", function(e) {
  var t = e.consumeArgs(2);
  return e.mode === "text" ? {
    tokens: t[0],
    numArgs: 0
  } : {
    tokens: t[1],
    numArgs: 0
  };
});
var fl = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
v("\\char", function(e) {
  var t = e.popToken(), r, n = "";
  if (t.text === "'")
    r = 8, t = e.popToken();
  else if (t.text === '"')
    r = 16, t = e.popToken();
  else if (t.text === "`")
    if (t = e.popToken(), t.text[0] === "\\")
      n = t.text.charCodeAt(1);
    else {
      if (t.text === "EOF")
        throw new O("\\char` missing argument");
      n = t.text.charCodeAt(0);
    }
  else
    r = 10;
  if (r) {
    if (n = fl[t.text], n == null || n >= r)
      throw new O("Invalid base-" + r + " digit " + t.text);
    for (var i; (i = fl[e.future().text]) != null && i < r; )
      n *= r, n += i, e.popToken();
  }
  return "\\@char{" + n + "}";
});
var Mi = (e, t, r, n) => {
  var i = e.consumeArg().tokens;
  if (i.length !== 1)
    throw new O("\\newcommand's first argument must be a macro name");
  var a = i[0].text, l = e.isDefined(a);
  if (l && !t)
    throw new O("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!l && !r)
    throw new O("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var o = 0;
  if (i = e.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
    for (var s = "", u = e.expandNextToken(); u.text !== "]" && u.text !== "EOF"; )
      s += u.text, u = e.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new O("Invalid number of arguments: " + s);
    o = parseInt(s), i = e.consumeArg().tokens;
  }
  return l && n || e.macros.set(a, {
    tokens: i,
    numArgs: o
  }), "";
};
v("\\newcommand", (e) => Mi(e, !1, !0, !1));
v("\\renewcommand", (e) => Mi(e, !0, !1, !1));
v("\\providecommand", (e) => Mi(e, !0, !0, !0));
v("\\message", (e) => {
  var t = e.consumeArgs(1)[0];
  return console.log(t.reverse().map((r) => r.text).join("")), "";
});
v("\\errmessage", (e) => {
  var t = e.consumeArgs(1)[0];
  return console.error(t.reverse().map((r) => r.text).join("")), "";
});
v("\\show", (e) => {
  var t = e.popToken(), r = t.text;
  return console.log(t, e.macros.get(r), Xt[r], Te.math[r], Te.text[r]), "";
});
v("\\bgroup", "{");
v("\\egroup", "}");
v("~", "\\nobreakspace");
v("\\lq", "`");
v("\\rq", "'");
v("\\aa", "\\r a");
v("\\AA", "\\r A");
v("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
v("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
v("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
v("ℬ", "\\mathscr{B}");
v("ℰ", "\\mathscr{E}");
v("ℱ", "\\mathscr{F}");
v("ℋ", "\\mathscr{H}");
v("ℐ", "\\mathscr{I}");
v("ℒ", "\\mathscr{L}");
v("ℳ", "\\mathscr{M}");
v("ℛ", "\\mathscr{R}");
v("ℭ", "\\mathfrak{C}");
v("ℌ", "\\mathfrak{H}");
v("ℨ", "\\mathfrak{Z}");
v("\\Bbbk", "\\Bbb{k}");
v("·", "\\cdotp");
v("\\llap", "\\mathllap{\\textrm{#1}}");
v("\\rlap", "\\mathrlap{\\textrm{#1}}");
v("\\clap", "\\mathclap{\\textrm{#1}}");
v("\\mathstrut", "\\vphantom{(}");
v("\\underbar", "\\underline{\\text{#1}}");
v("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
v("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
v("\\ne", "\\neq");
v("≠", "\\neq");
v("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
v("∉", "\\notin");
v("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
v("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
v("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
v("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
v("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
v("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
v("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
v("⟂", "\\perp");
v("‼", "\\mathclose{!\\mkern-0.8mu!}");
v("∌", "\\notni");
v("⌜", "\\ulcorner");
v("⌝", "\\urcorner");
v("⌞", "\\llcorner");
v("⌟", "\\lrcorner");
v("©", "\\copyright");
v("®", "\\textregistered");
v("️", "\\textregistered");
v("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
v("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
v("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
v("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
v("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
v("⋮", "\\vdots");
v("\\varGamma", "\\mathit{\\Gamma}");
v("\\varDelta", "\\mathit{\\Delta}");
v("\\varTheta", "\\mathit{\\Theta}");
v("\\varLambda", "\\mathit{\\Lambda}");
v("\\varXi", "\\mathit{\\Xi}");
v("\\varPi", "\\mathit{\\Pi}");
v("\\varSigma", "\\mathit{\\Sigma}");
v("\\varUpsilon", "\\mathit{\\Upsilon}");
v("\\varPhi", "\\mathit{\\Phi}");
v("\\varPsi", "\\mathit{\\Psi}");
v("\\varOmega", "\\mathit{\\Omega}");
v("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
v("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
v("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
v("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
v("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
v("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
v("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
v("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var pl = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
v("\\dots", function(e) {
  var t = "\\dotso", r = e.expandAfterFuture().text;
  return r in pl ? t = pl[r] : (r.slice(0, 4) === "\\not" || r in Te.math && ["bin", "rel"].includes(Te.math[r].group)) && (t = "\\dotsb"), t;
});
var zi = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
v("\\dotso", function(e) {
  var t = e.future().text;
  return t in zi ? "\\ldots\\," : "\\ldots";
});
v("\\dotsc", function(e) {
  var t = e.future().text;
  return t in zi && t !== "," ? "\\ldots\\," : "\\ldots";
});
v("\\cdots", function(e) {
  var t = e.future().text;
  return t in zi ? "\\@cdots\\," : "\\@cdots";
});
v("\\dotsb", "\\cdots");
v("\\dotsm", "\\cdots");
v("\\dotsi", "\\!\\cdots");
v("\\dotsx", "\\ldots\\,");
v("\\DOTSI", "\\relax");
v("\\DOTSB", "\\relax");
v("\\DOTSX", "\\relax");
v("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
v("\\,", "\\tmspace+{3mu}{.1667em}");
v("\\thinspace", "\\,");
v("\\>", "\\mskip{4mu}");
v("\\:", "\\tmspace+{4mu}{.2222em}");
v("\\medspace", "\\:");
v("\\;", "\\tmspace+{5mu}{.2777em}");
v("\\thickspace", "\\;");
v("\\!", "\\tmspace-{3mu}{.1667em}");
v("\\negthinspace", "\\!");
v("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
v("\\negthickspace", "\\tmspace-{5mu}{.277em}");
v("\\enspace", "\\kern.5em ");
v("\\enskip", "\\hskip.5em\\relax");
v("\\quad", "\\hskip1em\\relax");
v("\\qquad", "\\hskip2em\\relax");
v("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
v("\\tag@paren", "\\tag@literal{({#1})}");
v("\\tag@literal", (e) => {
  if (e.macros.get("\\df@tag"))
    throw new O("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
v("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
v("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
v("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
v("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
v("\\newline", "\\\\\\relax");
v("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var hs = q(Ct["Main-Regular"][84][1] - 0.7 * Ct["Main-Regular"][65][1]);
v("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + hs + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
v("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + hs + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
v("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
v("\\@hspace", "\\hskip #1\\relax");
v("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
v("\\ordinarycolon", ":");
v("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
v("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
v("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
v("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
v("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
v("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
v("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
v("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
v("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
v("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
v("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
v("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
v("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
v("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
v("∷", "\\dblcolon");
v("∹", "\\eqcolon");
v("≔", "\\coloneqq");
v("≕", "\\eqqcolon");
v("⩴", "\\Coloneqq");
v("\\ratio", "\\vcentcolon");
v("\\coloncolon", "\\dblcolon");
v("\\colonequals", "\\coloneqq");
v("\\coloncolonequals", "\\Coloneqq");
v("\\equalscolon", "\\eqqcolon");
v("\\equalscoloncolon", "\\Eqqcolon");
v("\\colonminus", "\\coloneq");
v("\\coloncolonminus", "\\Coloneq");
v("\\minuscolon", "\\eqcolon");
v("\\minuscoloncolon", "\\Eqcolon");
v("\\coloncolonapprox", "\\Colonapprox");
v("\\coloncolonsim", "\\Colonsim");
v("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
v("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
v("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
v("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
v("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
v("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
v("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
v("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
v("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
v("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
v("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
v("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
v("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
v("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
v("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
v("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
v("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
v("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
v("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
v("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
v("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
v("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
v("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
v("\\imath", "\\html@mathml{\\@imath}{ı}");
v("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
v("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
v("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
v("⟦", "\\llbracket");
v("⟧", "\\rrbracket");
v("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
v("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
v("⦃", "\\lBrace");
v("⦄", "\\rBrace");
v("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
v("⦵", "\\minuso");
v("\\darr", "\\downarrow");
v("\\dArr", "\\Downarrow");
v("\\Darr", "\\Downarrow");
v("\\lang", "\\langle");
v("\\rang", "\\rangle");
v("\\uarr", "\\uparrow");
v("\\uArr", "\\Uparrow");
v("\\Uarr", "\\Uparrow");
v("\\N", "\\mathbb{N}");
v("\\R", "\\mathbb{R}");
v("\\Z", "\\mathbb{Z}");
v("\\alef", "\\aleph");
v("\\alefsym", "\\aleph");
v("\\Alpha", "\\mathrm{A}");
v("\\Beta", "\\mathrm{B}");
v("\\bull", "\\bullet");
v("\\Chi", "\\mathrm{X}");
v("\\clubs", "\\clubsuit");
v("\\cnums", "\\mathbb{C}");
v("\\Complex", "\\mathbb{C}");
v("\\Dagger", "\\ddagger");
v("\\diamonds", "\\diamondsuit");
v("\\empty", "\\emptyset");
v("\\Epsilon", "\\mathrm{E}");
v("\\Eta", "\\mathrm{H}");
v("\\exist", "\\exists");
v("\\harr", "\\leftrightarrow");
v("\\hArr", "\\Leftrightarrow");
v("\\Harr", "\\Leftrightarrow");
v("\\hearts", "\\heartsuit");
v("\\image", "\\Im");
v("\\infin", "\\infty");
v("\\Iota", "\\mathrm{I}");
v("\\isin", "\\in");
v("\\Kappa", "\\mathrm{K}");
v("\\larr", "\\leftarrow");
v("\\lArr", "\\Leftarrow");
v("\\Larr", "\\Leftarrow");
v("\\lrarr", "\\leftrightarrow");
v("\\lrArr", "\\Leftrightarrow");
v("\\Lrarr", "\\Leftrightarrow");
v("\\Mu", "\\mathrm{M}");
v("\\natnums", "\\mathbb{N}");
v("\\Nu", "\\mathrm{N}");
v("\\Omicron", "\\mathrm{O}");
v("\\plusmn", "\\pm");
v("\\rarr", "\\rightarrow");
v("\\rArr", "\\Rightarrow");
v("\\Rarr", "\\Rightarrow");
v("\\real", "\\Re");
v("\\reals", "\\mathbb{R}");
v("\\Reals", "\\mathbb{R}");
v("\\Rho", "\\mathrm{P}");
v("\\sdot", "\\cdot");
v("\\sect", "\\S");
v("\\spades", "\\spadesuit");
v("\\sub", "\\subset");
v("\\sube", "\\subseteq");
v("\\supe", "\\supseteq");
v("\\Tau", "\\mathrm{T}");
v("\\thetasym", "\\vartheta");
v("\\weierp", "\\wp");
v("\\Zeta", "\\mathrm{Z}");
v("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
v("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
v("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
v("\\bra", "\\mathinner{\\langle{#1}|}");
v("\\ket", "\\mathinner{|{#1}\\rangle}");
v("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
v("\\Bra", "\\left\\langle#1\\right|");
v("\\Ket", "\\left|#1\\right\\rangle");
var ms = (e) => (t) => {
  var r = t.consumeArg().tokens, n = t.consumeArg().tokens, i = t.consumeArg().tokens, a = t.consumeArg().tokens, l = t.macros.get("|"), o = t.macros.get("\\|");
  t.macros.beginGroup();
  var s = (h) => (d) => {
    e && (d.macros.set("|", l), i.length && d.macros.set("\\|", o));
    var p = h;
    if (!h && i.length) {
      var y = d.future();
      y.text === "|" && (d.popToken(), p = !0);
    }
    return {
      tokens: p ? i : n,
      numArgs: 0
    };
  };
  t.macros.set("|", s(!1)), i.length && t.macros.set("\\|", s(!0));
  var u = t.consumeArg().tokens, m = t.expandTokens([
    ...a,
    ...u,
    ...r
    // reversed
  ]);
  return t.macros.endGroup(), {
    tokens: m.reverse(),
    numArgs: 0
  };
};
v("\\bra@ket", ms(!1));
v("\\bra@set", ms(!0));
v("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
v("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
v("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
v("\\angln", "{\\angl n}");
v("\\blue", "\\textcolor{##6495ed}{#1}");
v("\\orange", "\\textcolor{##ffa500}{#1}");
v("\\pink", "\\textcolor{##ff00af}{#1}");
v("\\red", "\\textcolor{##df0030}{#1}");
v("\\green", "\\textcolor{##28ae7b}{#1}");
v("\\gray", "\\textcolor{gray}{#1}");
v("\\purple", "\\textcolor{##9d38bd}{#1}");
v("\\blueA", "\\textcolor{##ccfaff}{#1}");
v("\\blueB", "\\textcolor{##80f6ff}{#1}");
v("\\blueC", "\\textcolor{##63d9ea}{#1}");
v("\\blueD", "\\textcolor{##11accd}{#1}");
v("\\blueE", "\\textcolor{##0c7f99}{#1}");
v("\\tealA", "\\textcolor{##94fff5}{#1}");
v("\\tealB", "\\textcolor{##26edd5}{#1}");
v("\\tealC", "\\textcolor{##01d1c1}{#1}");
v("\\tealD", "\\textcolor{##01a995}{#1}");
v("\\tealE", "\\textcolor{##208170}{#1}");
v("\\greenA", "\\textcolor{##b6ffb0}{#1}");
v("\\greenB", "\\textcolor{##8af281}{#1}");
v("\\greenC", "\\textcolor{##74cf70}{#1}");
v("\\greenD", "\\textcolor{##1fab54}{#1}");
v("\\greenE", "\\textcolor{##0d923f}{#1}");
v("\\goldA", "\\textcolor{##ffd0a9}{#1}");
v("\\goldB", "\\textcolor{##ffbb71}{#1}");
v("\\goldC", "\\textcolor{##ff9c39}{#1}");
v("\\goldD", "\\textcolor{##e07d10}{#1}");
v("\\goldE", "\\textcolor{##a75a05}{#1}");
v("\\redA", "\\textcolor{##fca9a9}{#1}");
v("\\redB", "\\textcolor{##ff8482}{#1}");
v("\\redC", "\\textcolor{##f9685d}{#1}");
v("\\redD", "\\textcolor{##e84d39}{#1}");
v("\\redE", "\\textcolor{##bc2612}{#1}");
v("\\maroonA", "\\textcolor{##ffbde0}{#1}");
v("\\maroonB", "\\textcolor{##ff92c6}{#1}");
v("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
v("\\maroonD", "\\textcolor{##ca337c}{#1}");
v("\\maroonE", "\\textcolor{##9e034e}{#1}");
v("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
v("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
v("\\purpleC", "\\textcolor{##aa87ff}{#1}");
v("\\purpleD", "\\textcolor{##7854ab}{#1}");
v("\\purpleE", "\\textcolor{##543b78}{#1}");
v("\\mintA", "\\textcolor{##f5f9e8}{#1}");
v("\\mintB", "\\textcolor{##edf2df}{#1}");
v("\\mintC", "\\textcolor{##e0e5cc}{#1}");
v("\\grayA", "\\textcolor{##f6f7f7}{#1}");
v("\\grayB", "\\textcolor{##f0f1f2}{#1}");
v("\\grayC", "\\textcolor{##e3e5e6}{#1}");
v("\\grayD", "\\textcolor{##d6d8da}{#1}");
v("\\grayE", "\\textcolor{##babec2}{#1}");
v("\\grayF", "\\textcolor{##888d93}{#1}");
v("\\grayG", "\\textcolor{##626569}{#1}");
v("\\grayH", "\\textcolor{##3b3e40}{#1}");
v("\\grayI", "\\textcolor{##21242c}{#1}");
v("\\kaBlue", "\\textcolor{##314453}{#1}");
v("\\kaGreen", "\\textcolor{##71B307}{#1}");
var fs = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class qf {
  constructor(t, r, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(t), this.macros = new Of(Lf, r.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(t) {
    this.lexer = new ml(t, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(t) {
    this.mode = t;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(t) {
    this.stack.push(t);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(t) {
    this.stack.push(...t);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(t) {
    var r, n, i;
    if (t) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      r = this.popToken(), {
        tokens: i,
        end: n
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: i,
        start: r,
        end: n
      } = this.consumeArg());
    return this.pushToken(new ht("EOF", n.loc)), this.pushTokens(i), new ht("", nt.range(r, n));
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var t = this.future();
      if (t.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(t) {
    var r = [], n = t && t.length > 0;
    n || this.consumeSpaces();
    var i = this.future(), a, l = 0, o = 0;
    do {
      if (a = this.popToken(), r.push(a), a.text === "{")
        ++l;
      else if (a.text === "}") {
        if (--l, l === -1)
          throw new O("Extra }", a);
      } else if (a.text === "EOF")
        throw new O("Unexpected end of input in a macro argument, expected '" + (t && n ? t[o] : "}") + "'", a);
      if (t && n)
        if ((l === 0 || l === 1 && t[o] === "{") && a.text === t[o]) {
          if (++o, o === t.length) {
            r.splice(-o, o);
            break;
          }
        } else
          o = 0;
    } while (l !== 0 || n);
    return i.text === "{" && r[r.length - 1].text === "}" && (r.pop(), r.shift()), r.reverse(), {
      tokens: r,
      start: i,
      end: a
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(t, r) {
    if (r) {
      if (r.length !== t + 1)
        throw new O("The length of delimiters doesn't match the number of args!");
      for (var n = r[0], i = 0; i < n.length; i++) {
        var a = this.popToken();
        if (n[i] !== a.text)
          throw new O("Use of the macro doesn't match its definition", a);
      }
    }
    for (var l = [], o = 0; o < t; o++)
      l.push(this.consumeArg(r && r[o + 1]).tokens);
    return l;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(t) {
    if (this.expansionCount += t, this.expansionCount > this.settings.maxExpand)
      throw new O("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(t) {
    var r = this.popToken(), n = r.text, i = r.noexpand ? null : this._getExpansion(n);
    if (i == null || t && i.unexpandable) {
      if (t && i == null && n[0] === "\\" && !this.isDefined(n))
        throw new O("Undefined control sequence: " + n);
      return this.pushToken(r), !1;
    }
    this.countExpansion(1);
    var a = i.tokens, l = this.consumeArgs(i.numArgs, i.delimiters);
    if (i.numArgs) {
      a = a.slice();
      for (var o = a.length - 1; o >= 0; --o) {
        var s = a[o];
        if (s.text === "#") {
          if (o === 0)
            throw new O("Incomplete placeholder at end of macro body", s);
          if (s = a[--o], s.text === "#")
            a.splice(o + 1, 1);
          else if (/^[1-9]$/.test(s.text))
            a.splice(o, 2, ...l[+s.text - 1]);
          else
            throw new O("Not a valid argument number", s);
        }
      }
    }
    return this.pushTokens(a), a.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var t = this.stack.pop();
        return t.treatAsRelax && (t.text = "\\relax"), t;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(t) {
    return this.macros.has(t) ? this.expandTokens([new ht(t)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(t) {
    var r = [], n = this.stack.length;
    for (this.pushTokens(t); this.stack.length > n; )
      if (this.expandOnce(!0) === !1) {
        var i = this.stack.pop();
        i.treatAsRelax && (i.noexpand = !1, i.treatAsRelax = !1), r.push(i);
      }
    return this.countExpansion(r.length), r;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(t) {
    var r = this.expandMacro(t);
    return r && r.map((n) => n.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(t) {
    var r = this.macros.get(t);
    if (r == null)
      return r;
    if (t.length === 1) {
      var n = this.lexer.catcodes[t];
      if (n != null && n !== 13)
        return;
    }
    var i = typeof r == "function" ? r(this) : r;
    if (typeof i == "string") {
      var a = 0;
      if (i.indexOf("#") !== -1)
        for (var l = i.replace(/##/g, ""); l.indexOf("#" + (a + 1)) !== -1; )
          ++a;
      for (var o = new ml(i, this.settings), s = [], u = o.lex(); u.text !== "EOF"; )
        s.push(u), u = o.lex();
      s.reverse();
      var m = {
        tokens: s,
        numArgs: a
      };
      return m;
    }
    return i;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(t) {
    return this.macros.has(t) || Xt.hasOwnProperty(t) || Te.math.hasOwnProperty(t) || Te.text.hasOwnProperty(t) || fs.hasOwnProperty(t);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(t) {
    var r = this.macros.get(t);
    return r != null ? typeof r == "string" || typeof r == "function" || !r.unexpandable : Xt.hasOwnProperty(t) && !Xt[t].primitive;
  }
}
var dl = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, cn = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), v0 = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, gl = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class Ln {
  constructor(t, r) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new qf(t, r, this.mode), this.settings = r, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(t, r) {
    if (r === void 0 && (r = !0), this.fetch().text !== t)
      throw new O("Expected '" + t + "', got '" + this.fetch().text + "'", this.fetch());
    r && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(t) {
    this.mode = t, this.gullet.switchMode(t);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var t = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), t;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(t) {
    var r = this.nextToken;
    this.consume(), this.gullet.pushToken(new ht("}")), this.gullet.pushTokens(t);
    var n = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = r, n;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(t, r) {
    for (var n = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var i = this.fetch();
      if (Ln.endOfExpression.indexOf(i.text) !== -1 || r && i.text === r || t && Xt[i.text] && Xt[i.text].infix)
        break;
      var a = this.parseAtom(r);
      if (a) {
        if (a.type === "internal")
          continue;
      } else break;
      n.push(a);
    }
    return this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(t) {
    for (var r = -1, n, i = 0; i < t.length; i++)
      if (t[i].type === "infix") {
        if (r !== -1)
          throw new O("only one infix operator per group", t[i].token);
        r = i, n = t[i].replaceWith;
      }
    if (r !== -1 && n) {
      var a, l, o = t.slice(0, r), s = t.slice(r + 1);
      o.length === 1 && o[0].type === "ordgroup" ? a = o[0] : a = {
        type: "ordgroup",
        mode: this.mode,
        body: o
      }, s.length === 1 && s[0].type === "ordgroup" ? l = s[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: s
      };
      var u;
      return n === "\\\\abovefrac" ? u = this.callFunction(n, [a, t[r], l], []) : u = this.callFunction(n, [a, l], []), [u];
    } else
      return t;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(t) {
    var r = this.fetch(), n = r.text;
    this.consume(), this.consumeSpaces();
    var i;
    do {
      var a;
      i = this.parseGroup(t);
    } while (((a = i) == null ? void 0 : a.type) === "internal");
    if (!i)
      throw new O("Expected group after '" + n + "'", r);
    return i;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(t) {
    for (var r = [], n = 0; n < t.length; n++)
      r.push({
        type: "textord",
        mode: "text",
        text: t[n]
      });
    var i = {
      type: "text",
      mode: this.mode,
      body: r
    }, a = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [i]
    };
    return a;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(t) {
    var r = this.parseGroup("atom", t);
    if ((r == null ? void 0 : r.type) === "internal" || this.mode === "text")
      return r;
    for (var n, i; ; ) {
      this.consumeSpaces();
      var a = this.fetch();
      if (a.text === "\\limits" || a.text === "\\nolimits") {
        if (r && r.type === "op") {
          var l = a.text === "\\limits";
          r.limits = l, r.alwaysHandleSupSub = !0;
        } else if (r && r.type === "operatorname")
          r.alwaysHandleSupSub && (r.limits = a.text === "\\limits");
        else
          throw new O("Limit controls must follow a math operator", a);
        this.consume();
      } else if (a.text === "^") {
        if (n)
          throw new O("Double superscript", a);
        n = this.handleSupSubscript("superscript");
      } else if (a.text === "_") {
        if (i)
          throw new O("Double subscript", a);
        i = this.handleSupSubscript("subscript");
      } else if (a.text === "'") {
        if (n)
          throw new O("Double superscript", a);
        var o = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, s = [o];
        for (this.consume(); this.fetch().text === "'"; )
          s.push(o), this.consume();
        this.fetch().text === "^" && s.push(this.handleSupSubscript("superscript")), n = {
          type: "ordgroup",
          mode: this.mode,
          body: s
        };
      } else if (cn[a.text]) {
        var u = dl.test(a.text), m = [];
        for (m.push(new ht(cn[a.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!cn[h] || dl.test(h) !== u)
            break;
          m.unshift(new ht(cn[h])), this.consume();
        }
        var d = this.subparse(m);
        u ? i = {
          type: "ordgroup",
          mode: "math",
          body: d
        } : n = {
          type: "ordgroup",
          mode: "math",
          body: d
        };
      } else
        break;
    }
    return n || i ? {
      type: "supsub",
      mode: this.mode,
      base: r,
      sup: n,
      sub: i
    } : r;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(t, r) {
    var n = this.fetch(), i = n.text, a = Xt[i];
    if (!a)
      return null;
    if (this.consume(), r && r !== "atom" && !a.allowedInArgument)
      throw new O("Got function '" + i + "' with no arguments" + (r ? " as " + r : ""), n);
    if (this.mode === "text" && !a.allowedInText)
      throw new O("Can't use function '" + i + "' in text mode", n);
    if (this.mode === "math" && a.allowedInMath === !1)
      throw new O("Can't use function '" + i + "' in math mode", n);
    var {
      args: l,
      optArgs: o
    } = this.parseArguments(i, a);
    return this.callFunction(i, l, o, n, t);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(t, r, n, i, a) {
    var l = {
      funcName: t,
      parser: this,
      token: i,
      breakOnTokenText: a
    }, o = Xt[t];
    if (o && o.handler)
      return o.handler(l, r, n);
    throw new O("No function handler for " + t);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(t, r) {
    var n = r.numArgs + r.numOptionalArgs;
    if (n === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var i = [], a = [], l = 0; l < n; l++) {
      var o = r.argTypes && r.argTypes[l], s = l < r.numOptionalArgs;
      (r.primitive && o == null || // \sqrt expands into primitive if optional argument doesn't exist
      r.type === "sqrt" && l === 1 && a[0] == null) && (o = "primitive");
      var u = this.parseGroupOfType("argument to '" + t + "'", o, s);
      if (s)
        a.push(u);
      else if (u != null)
        i.push(u);
      else
        throw new O("Null argument, please report this as a bug");
    }
    return {
      args: i,
      optArgs: a
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(t, r, n) {
    switch (r) {
      case "color":
        return this.parseColorGroup(n);
      case "size":
        return this.parseSizeGroup(n);
      case "url":
        return this.parseUrlGroup(n);
      case "math":
      case "text":
        return this.parseArgumentGroup(n, r);
      case "hbox": {
        var i = this.parseArgumentGroup(n, "text");
        return i != null ? {
          type: "styling",
          mode: i.mode,
          body: [i],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var a = this.parseStringGroup("raw", n);
        return a != null ? {
          type: "raw",
          mode: "text",
          string: a.text
        } : null;
      }
      case "primitive": {
        if (n)
          throw new O("A primitive argument cannot be optional");
        var l = this.parseGroup(t);
        if (l == null)
          throw new O("Expected group as " + t, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new O("Unknown group type as " + t, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(t, r) {
    var n = this.gullet.scanArgument(r);
    if (n == null)
      return null;
    for (var i = "", a; (a = this.fetch()).text !== "EOF"; )
      i += a.text, this.consume();
    return this.consume(), n.text = i, n;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(t, r) {
    for (var n = this.fetch(), i = n, a = "", l; (l = this.fetch()).text !== "EOF" && t.test(a + l.text); )
      i = l, a += i.text, this.consume();
    if (a === "")
      throw new O("Invalid " + r + ": '" + n.text + "'", n);
    return n.range(i, a);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(t) {
    var r = this.parseStringGroup("color", t);
    if (r == null)
      return null;
    var n = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);
    if (!n)
      throw new O("Invalid color: '" + r.text + "'", r);
    var i = n[0];
    return /^[0-9a-f]{6}$/i.test(i) && (i = "#" + i), {
      type: "color-token",
      mode: this.mode,
      color: i
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(t) {
    var r, n = !1;
    if (this.gullet.consumeSpaces(), !t && this.gullet.future().text !== "{" ? r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : r = this.parseStringGroup("size", t), !r)
      return null;
    !t && r.text.length === 0 && (r.text = "0pt", n = !0);
    var i = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);
    if (!i)
      throw new O("Invalid size: '" + r.text + "'", r);
    var a = {
      number: +(i[1] + i[2]),
      // sign + magnitude, cast to number
      unit: i[3]
    };
    if (!So(a))
      throw new O("Invalid unit: '" + a.unit + "'", r);
    return {
      type: "size",
      mode: this.mode,
      value: a,
      isBlank: n
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(t) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var r = this.parseStringGroup("url", t);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), r == null)
      return null;
    var n = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: n
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(t, r) {
    var n = this.gullet.scanArgument(t);
    if (n == null)
      return null;
    var i = this.mode;
    r && this.switchMode(r), this.gullet.beginGroup();
    var a = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = {
      type: "ordgroup",
      mode: this.mode,
      loc: n.loc,
      body: a
    };
    return r && this.switchMode(i), l;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(t, r) {
    var n = this.fetch(), i = n.text, a;
    if (i === "{" || i === "\\begingroup") {
      this.consume();
      var l = i === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, l), s = this.fetch();
      this.expect(l), this.gullet.endGroup(), a = {
        type: "ordgroup",
        mode: this.mode,
        loc: nt.range(n, s),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: i === "\\begingroup" || void 0
      };
    } else if (a = this.parseFunction(r, t) || this.parseSymbol(), a == null && i[0] === "\\" && !fs.hasOwnProperty(i)) {
      if (this.settings.throwOnError)
        throw new O("Undefined control sequence: " + i, n);
      a = this.formatUnsupportedCmd(i), this.consume();
    }
    return a;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(t) {
    for (var r = t.length - 1, n = 0; n < r; ++n) {
      var i = t[n], a = i.text;
      a === "-" && t[n + 1].text === "-" && (n + 1 < r && t[n + 2].text === "-" ? (t.splice(n, 3, {
        type: "textord",
        mode: "text",
        loc: nt.range(i, t[n + 2]),
        text: "---"
      }), r -= 2) : (t.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: nt.range(i, t[n + 1]),
        text: "--"
      }), r -= 1)), (a === "'" || a === "`") && t[n + 1].text === a && (t.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: nt.range(i, t[n + 1]),
        text: a + a
      }), r -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var t = this.fetch(), r = t.text;
    if (/^\\verb[^a-zA-Z]/.test(r)) {
      this.consume();
      var n = r.slice(5), i = n.charAt(0) === "*";
      if (i && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1))
        throw new O(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: i
      };
    }
    gl.hasOwnProperty(r[0]) && !Te[this.mode][r[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + r[0] + '" used in math mode', t), r = gl[r[0]] + r.slice(1));
    var a = Bf.exec(r);
    a && (r = r.substring(0, a.index), r === "i" ? r = "ı" : r === "j" && (r = "ȷ"));
    var l;
    if (Te[this.mode][r]) {
      this.settings.strict && this.mode === "math" && H0.indexOf(r) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + r[0] + '" used in math mode', t);
      var o = Te[this.mode][r].group, s = nt.range(t), u;
      if (Cm.hasOwnProperty(o)) {
        var m = o;
        u = {
          type: "atom",
          mode: this.mode,
          family: m,
          loc: s,
          text: r
        };
      } else
        u = {
          type: o,
          mode: this.mode,
          loc: s,
          text: r
        };
      l = u;
    } else if (r.charCodeAt(0) >= 128)
      this.settings.strict && (ko(r.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + r[0] + '" used in math mode', t) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + r[0] + '"' + (" (" + r.charCodeAt(0) + ")"), t)), l = {
        type: "textord",
        mode: "text",
        loc: nt.range(t),
        text: r
      };
    else
      return null;
    if (this.consume(), a)
      for (var h = 0; h < a[0].length; h++) {
        var d = a[0][h];
        if (!v0[d])
          throw new O("Unknown accent ' " + d + "'", t);
        var p = v0[d][this.mode] || v0[d].text;
        if (!p)
          throw new O("Accent " + d + " unsupported in " + this.mode + " mode", t);
        l = {
          type: "accent",
          mode: this.mode,
          loc: nt.range(t),
          label: p,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
Ln.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Ei = function(t, r) {
  if (!(typeof t == "string" || t instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new Ln(t, r);
  delete n.gullet.macros.current["\\df@tag"];
  var i = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!r.displayMode)
      throw new O("\\tag works only in display equations");
    i = [{
      type: "tag",
      mode: "text",
      body: i,
      tag: n.subparse([new ht("\\df@tag")])
    }];
  }
  return i;
}, ps = function(t, r, n) {
  r.textContent = "";
  var i = Di(t, n).toNode();
  r.appendChild(i);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), ps = function() {
  throw new O("KaTeX doesn't work in quirks mode.");
});
var Hf = function(t, r) {
  var n = Di(t, r).toMarkup();
  return n;
}, jf = function(t, r) {
  var n = new hi(r);
  return Ei(t, n);
}, ds = function(t, r, n) {
  if (n.throwOnError || !(t instanceof O))
    throw t;
  var i = E.makeSpan(["katex-error"], [new vt(r)]);
  return i.setAttribute("title", t.toString()), i.setAttribute("style", "color:" + n.errorColor), i;
}, Di = function(t, r) {
  var n = new hi(r);
  try {
    var i = Ei(t, n);
    return Xm(i, t, n);
  } catch (a) {
    return ds(a, t, n);
  }
}, _f = function(t, r) {
  var n = new hi(r);
  try {
    var i = Ei(t, n);
    return Km(i, t, n);
  } catch (a) {
    return ds(a, t, n);
  }
}, $f = "0.16.27", Vf = {
  Span: Yr,
  Anchor: pi,
  SymbolNode: vt,
  SvgNode: qt,
  PathNode: Jt,
  LineNode: q0
}, vl = {
  /**
   * Current KaTeX version
   */
  version: $f,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: ps,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: Hf,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: O,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: pn,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: jf,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Di,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: _f,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: ym,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: c,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: G,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: v,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: Vf
};
const Uf = {};
function y0(e) {
  const t = (
    /** @type {Processor} */
    this
  ), r = e || Uf, n = t.data(), i = n.micromarkExtensions || (n.micromarkExtensions = []), a = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []), l = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
  i.push(V4(r)), a.push(P4()), l.push(O4(r));
}
const yl = /[#.]/g;
function Gf(e, t) {
  const r = e || "", n = {};
  let i = 0, a, l;
  for (; i < r.length; ) {
    yl.lastIndex = i;
    const o = yl.exec(r), s = r.slice(i, o ? o.index : r.length);
    s && (a ? a === "#" ? n.id = s : Array.isArray(n.className) ? n.className.push(s) : n.className = [s] : l = s, i += s.length), o && (a = o[0], i++);
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: l || t || "div",
    properties: n,
    children: []
  };
}
function gs(e, t, r) {
  const n = r ? Kf(r) : void 0;
  function i(a, l, ...o) {
    let s;
    if (a == null) {
      s = { type: "root", children: [] };
      const u = (
        /** @type {Child} */
        l
      );
      o.unshift(u);
    } else {
      s = Gf(a, t);
      const u = s.tagName.toLowerCase(), m = n ? n.get(u) : void 0;
      if (s.tagName = m || u, Wf(l))
        o.unshift(l);
      else
        for (const [h, d] of Object.entries(l))
          Yf(e, s.properties, h, d);
    }
    for (const u of o)
      G0(s.children, u);
    return s.type === "element" && s.tagName === "template" && (s.content = { type: "root", children: s.children }, s.children = []), s;
  }
  return i;
}
function Wf(e) {
  if (e === null || typeof e != "object" || Array.isArray(e))
    return !0;
  if (typeof e.type != "string") return !1;
  const t = (
    /** @type {Record<string, unknown>} */
    e
  ), r = Object.keys(e);
  for (const n of r) {
    const i = t[n];
    if (i && typeof i == "object") {
      if (!Array.isArray(i)) return !0;
      const a = (
        /** @type {ReadonlyArray<unknown>} */
        i
      );
      for (const l of a)
        if (typeof l != "number" && typeof l != "string")
          return !0;
    }
  }
  return !!("children" in e && Array.isArray(e.children));
}
function Yf(e, t, r, n) {
  const i = _l(e, r);
  let a;
  if (n != null) {
    if (typeof n == "number") {
      if (Number.isNaN(n)) return;
      a = n;
    } else typeof n == "boolean" ? a = n : typeof n == "string" ? i.spaceSeparated ? a = Ji(n) : i.commaSeparated ? a = Gi(n) : i.commaOrSpaceSeparated ? a = Ji(Gi(n).join(" ")) : a = bl(i, i.property, n) : Array.isArray(n) ? a = [...n] : a = i.property === "style" ? Xf(n) : String(n);
    if (Array.isArray(a)) {
      const l = [];
      for (const o of a)
        l.push(
          /** @type {number | string} */
          bl(i, i.property, o)
        );
      a = l;
    }
    i.property === "className" && Array.isArray(t.className) && (a = t.className.concat(
      /** @type {Array<number | string> | number | string} */
      a
    )), t[i.property] = a;
  }
}
function G0(e, t) {
  if (t != null) if (typeof t == "number" || typeof t == "string")
    e.push({ type: "text", value: String(t) });
  else if (Array.isArray(t))
    for (const r of t)
      G0(e, r);
  else if (typeof t == "object" && "type" in t)
    t.type === "root" ? G0(e, t.children) : e.push(t);
  else
    throw new Error("Expected node, nodes, or string, got `" + t + "`");
}
function bl(e, t, r) {
  if (typeof r == "string") {
    if (e.number && r && !Number.isNaN(Number(r)))
      return Number(r);
    if ((e.boolean || e.overloadedBoolean) && (r === "" || Lr(r) === Lr(t)))
      return !0;
  }
  return r;
}
function Xf(e) {
  const t = [];
  for (const [r, n] of Object.entries(e))
    t.push([r, n].join(": "));
  return t.join("; ");
}
function Kf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e)
    t.set(r.toLowerCase(), r);
  return t;
}
const Jf = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
], Zf = gs($l, "div"), Qf = gs(Cn, "g", Jf), b0 = {
  html: "http://www.w3.org/1999/xhtml",
  svg: "http://www.w3.org/2000/svg"
};
function ep(e, t) {
  return vs(e, {}) || { type: "root", children: [] };
}
function vs(e, t) {
  const r = tp(e, t);
  return r && t.afterTransform && t.afterTransform(e, r), r;
}
function tp(e, t) {
  switch (e.nodeType) {
    case 1:
      return ap(
        /** @type {Element} */
        e,
        t
      );
    case 3:
      return np(
        /** @type {Text} */
        e
      );
    case 8:
      return ip(
        /** @type {Comment} */
        e
      );
    case 9:
      return xl(
        /** @type {Document} */
        e,
        t
      );
    case 10:
      return rp();
    case 11:
      return xl(
        /** @type {DocumentFragment} */
        e,
        t
      );
    default:
      return;
  }
}
function xl(e, t) {
  return { type: "root", children: ys(e, t) };
}
function rp() {
  return { type: "doctype" };
}
function np(e) {
  return { type: "text", value: e.nodeValue || "" };
}
function ip(e) {
  return { type: "comment", value: e.nodeValue || "" };
}
function ap(e, t) {
  const r = e.namespaceURI, n = r === b0.svg ? Qf : Zf, i = r === b0.html ? e.tagName.toLowerCase() : e.tagName, a = (
    // @ts-expect-error: DOM types are wrong, content can exist.
    r === b0.html && i === "template" ? e.content : e
  ), l = e.getAttributeNames(), o = {};
  let s = -1;
  for (; ++s < l.length; )
    o[l[s]] = e.getAttribute(l[s]) || "";
  return n(i, o, ys(a, t));
}
function ys(e, t) {
  const r = e.childNodes, n = [];
  let i = -1;
  for (; ++i < r.length; ) {
    const a = vs(r[i], t);
    a !== void 0 && n.push(a);
  }
  return n;
}
new DOMParser();
function lp(e, t) {
  const r = op(e);
  return (
    /** @type {Root} */
    ep(r)
  );
}
function op(e) {
  const t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
const wl = (
  // Note: overloads like this are needed to support optional generics.
  /**
   * @type {(
   *   (<Kind extends UnistParent, Check extends Test>(parent: Kind, index: Child<Kind> | number, test: Check) => Matches<Child<Kind>, Check> | undefined) &
   *   (<Kind extends UnistParent>(parent: Kind, index: Child<Kind> | number, test?: null | undefined) => Child<Kind> | undefined)
   * )}
   */
  /**
   * @param {UnistParent} parent
   * @param {UnistNode | number} index
   * @param {Test} [test]
   * @returns {UnistNode | undefined}
   */
  function(e, t, r) {
    const n = Ur(r);
    if (!e || !e.type || !e.children)
      throw new Error("Expected parent node");
    if (typeof t == "number") {
      if (t < 0 || t === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (t = e.children.indexOf(t), t < 0)
      throw new Error("Expected child node or index");
    for (; ++t < e.children.length; )
      if (n(e.children[t], t, e))
        return e.children[t];
  }
), mr = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &
   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &
   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return cp;
    if (typeof e == "string")
      return up(e);
    if (typeof e == "object")
      return sp(e);
    if (typeof e == "function")
      return Ii(e);
    throw new Error("Expected function, string, or array as `test`");
  }
);
function sp(e) {
  const t = [];
  let r = -1;
  for (; ++r < e.length; )
    t[r] = mr(e[r]);
  return Ii(n);
  function n(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function up(e) {
  return Ii(t);
  function t(r) {
    return r.tagName === e;
  }
}
function Ii(e) {
  return t;
  function t(r, n, i) {
    return !!(hp(r) && e.call(
      this,
      r,
      typeof n == "number" ? n : void 0,
      i || void 0
    ));
  }
}
function cp(e) {
  return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
}
function hp(e) {
  return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
}
const kl = /\n/g, Sl = /[\t ]+/g, W0 = mr("br"), Tl = mr(bp), mp = mr("p"), Al = mr("tr"), fp = mr([
  // List from: <https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements>
  "datalist",
  "head",
  "noembed",
  "noframes",
  "noscript",
  // Act as if we support scripting.
  "rp",
  "script",
  "style",
  "template",
  "title",
  // Hidden attribute.
  yp,
  // From: <https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3>
  xp
]), bs = mr([
  "address",
  // Flow content
  "article",
  // Sections and headings
  "aside",
  // Sections and headings
  "blockquote",
  // Flow content
  "body",
  // Page
  "caption",
  // `table-caption`
  "center",
  // Flow content (legacy)
  "dd",
  // Lists
  "dialog",
  // Flow content
  "dir",
  // Lists (legacy)
  "dl",
  // Lists
  "dt",
  // Lists
  "div",
  // Flow content
  "figure",
  // Flow content
  "figcaption",
  // Flow content
  "footer",
  // Flow content
  "form,",
  // Flow content
  "h1",
  // Sections and headings
  "h2",
  // Sections and headings
  "h3",
  // Sections and headings
  "h4",
  // Sections and headings
  "h5",
  // Sections and headings
  "h6",
  // Sections and headings
  "header",
  // Flow content
  "hgroup",
  // Sections and headings
  "hr",
  // Flow content
  "html",
  // Page
  "legend",
  // Flow content
  "li",
  // Lists (as `display: list-item`)
  "listing",
  // Flow content (legacy)
  "main",
  // Flow content
  "menu",
  // Lists
  "nav",
  // Sections and headings
  "ol",
  // Lists
  "p",
  // Flow content
  "plaintext",
  // Flow content (legacy)
  "pre",
  // Flow content
  "section",
  // Sections and headings
  "ul",
  // Lists
  "xmp"
  // Flow content (legacy)
]);
function pp(e, t) {
  const r = t || {}, n = "children" in e ? e.children : [], i = bs(e), a = ks(e, {
    whitespace: r.whitespace || "normal"
  }), l = [];
  (e.type === "text" || e.type === "comment") && l.push(
    ...ws(e, {
      breakBefore: !0,
      breakAfter: !0
    })
  );
  let o = -1;
  for (; ++o < n.length; )
    l.push(
      ...xs(
        n[o],
        // @ts-expect-error: `tree` is a parent if we’re here.
        e,
        {
          whitespace: a,
          breakBefore: o ? void 0 : i,
          breakAfter: o < n.length - 1 ? W0(n[o + 1]) : i
        }
      )
    );
  const s = [];
  let u;
  for (o = -1; ++o < l.length; ) {
    const m = l[o];
    typeof m == "number" ? u !== void 0 && m > u && (u = m) : m && (u !== void 0 && u > -1 && s.push(`
`.repeat(u) || " "), u = -1, s.push(m));
  }
  return s.join("");
}
function xs(e, t, r) {
  return e.type === "element" ? dp(e, t, r) : e.type === "text" ? r.whitespace === "normal" ? ws(e, r) : gp(e) : [];
}
function dp(e, t, r) {
  const n = ks(e, r), i = e.children || [];
  let a = -1, l = [];
  if (fp(e))
    return l;
  let o, s;
  for (W0(e) || Al(e) && // @ts-expect-error: something up with types of parents.
  wl(t, e, Al) ? s = `
` : mp(e) ? (o = 2, s = 2) : bs(e) && (o = 1, s = 1); ++a < i.length; )
    l = l.concat(
      xs(i[a], e, {
        whitespace: n,
        breakBefore: a ? void 0 : o,
        breakAfter: a < i.length - 1 ? W0(i[a + 1]) : s
      })
    );
  return Tl(e) && // @ts-expect-error: something up with types of parents.
  wl(t, e, Tl) && l.push("	"), o && l.unshift(o), s && l.push(s), l;
}
function ws(e, t) {
  const r = String(e.value), n = [], i = [];
  let a = 0;
  for (; a <= r.length; ) {
    kl.lastIndex = a;
    const s = kl.exec(r), u = s && "index" in s ? s.index : r.length;
    n.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      vp(
        // […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        r.slice(a, u).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        a === 0 ? t.breakBefore : !0,
        u === r.length ? t.breakAfter : !0
      )
    ), a = u + 1;
  }
  let l = -1, o;
  for (; ++l < n.length; )
    n[l].charCodeAt(n[l].length - 1) === 8203 || l < n.length - 1 && n[l + 1].charCodeAt(0) === 8203 ? (i.push(n[l]), o = void 0) : n[l] ? (typeof o == "number" && i.push(o), i.push(n[l]), o = 0) : (l === 0 || l === n.length - 1) && i.push(0);
  return i;
}
function gp(e) {
  return [String(e.value)];
}
function vp(e, t, r) {
  const n = [];
  let i = 0, a;
  for (; i < e.length; ) {
    Sl.lastIndex = i;
    const l = Sl.exec(e);
    a = l ? l.index : e.length, !i && !a && l && !t && n.push(""), i !== a && n.push(e.slice(i, a)), i = l ? a + l[0].length : a;
  }
  return i !== a && !r && n.push(""), n.join(" ");
}
function ks(e, t) {
  if (e.type === "element") {
    const r = e.properties || {};
    switch (e.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return r.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return r.noWrap ? "nowrap" : t.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return t.whitespace;
}
function yp(e) {
  return !!(e.properties || {}).hidden;
}
function bp(e) {
  return e.tagName === "td" || e.tagName === "th";
}
function xp(e) {
  return e.tagName === "dialog" && !(e.properties || {}).open;
}
const wp = {}, kp = [];
function x0(e) {
  const t = e || wp;
  return function(r, n) {
    si(r, "element", function(i, a) {
      const l = Array.isArray(i.properties.className) ? i.properties.className : kp, o = l.includes("language-math"), s = l.includes("math-display"), u = l.includes("math-inline");
      let m = s;
      if (!o && !s && !u)
        return;
      let h = a[a.length - 1], d = i;
      if (i.tagName === "code" && o && h && h.type === "element" && h.tagName === "pre" && (d = h, h = a[a.length - 2], m = !0), !h) return;
      const p = pp(d, { whitespace: "pre" });
      let y;
      try {
        y = vl.renderToString(p, {
          ...t,
          displayMode: m,
          throwOnError: !0
        });
      } catch (z) {
        const T = (
          /** @type {Error} */
          z
        ), M = T.name.toLowerCase();
        n.message("Could not render math with KaTeX", {
          ancestors: [...a, i],
          cause: T,
          place: i.position,
          ruleId: M,
          source: "rehype-katex"
        });
        try {
          y = vl.renderToString(p, {
            ...t,
            displayMode: m,
            strict: "ignore",
            throwOnError: !1
          });
        } catch {
          y = [
            {
              type: "element",
              tagName: "span",
              properties: {
                className: ["katex-error"],
                style: "color:" + (t.errorColor || "#cc0000"),
                title: String(z)
              },
              children: [{ type: "text", value: p }]
            }
          ];
        }
      }
      typeof y == "string" && (y = /** @type {Array<ElementContent>} */
      lp(y).children);
      const b = h.children.indexOf(d);
      return h.children.splice(b, 1, ...y), vo;
    });
  };
}
function Cl(e, t) {
  const r = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let n = 0, i = r.indexOf(t);
  for (; i !== -1; )
    n++, i = r.indexOf(t, i + t.length);
  return n;
}
function Sp(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Tp(e, t, r) {
  const i = Ur((r || {}).ignore || []), a = Ap(t);
  let l = -1;
  for (; ++l < a.length; )
    si(e, "text", o);
  function o(u, m) {
    let h = -1, d;
    for (; ++h < m.length; ) {
      const p = m[h], y = d ? d.children : void 0;
      if (i(
        p,
        y ? y.indexOf(p) : void 0,
        d
      ))
        return;
      d = p;
    }
    if (d)
      return s(u, m);
  }
  function s(u, m) {
    const h = m[m.length - 1], d = a[l][0], p = a[l][1];
    let y = 0;
    const z = h.children.indexOf(u);
    let T = !1, M = [];
    d.lastIndex = 0;
    let R = d.exec(u.value);
    for (; R; ) {
      const $ = R.index, j = {
        index: R.index,
        input: R.input,
        stack: [...m, u]
      };
      let D = p(...R, j);
      if (typeof D == "string" && (D = D.length > 0 ? { type: "text", value: D } : void 0), D === !1 ? d.lastIndex = $ + 1 : (y !== $ && M.push({
        type: "text",
        value: u.value.slice(y, $)
      }), Array.isArray(D) ? M.push(...D) : D && M.push(D), y = $ + R[0].length, T = !0), !d.global)
        break;
      R = d.exec(u.value);
    }
    return T ? (y < u.value.length && M.push({ type: "text", value: u.value.slice(y) }), h.children.splice(z, 1, ...M)) : M = [u], z + M.length;
  }
}
function Ap(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const r = !e[0] || Array.isArray(e[0]) ? e : [e];
  let n = -1;
  for (; ++n < r.length; ) {
    const i = r[n];
    t.push([Cp(i[0]), Mp(i[1])]);
  }
  return t;
}
function Cp(e) {
  return typeof e == "string" ? new RegExp(Sp(e), "g") : e;
}
function Mp(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const w0 = "phrasing", k0 = ["autolink", "link", "image", "label"];
function zp() {
  return {
    transforms: [Bp],
    enter: {
      literalAutolink: Dp,
      literalAutolinkEmail: S0,
      literalAutolinkHttp: S0,
      literalAutolinkWww: S0
    },
    exit: {
      literalAutolink: Np,
      literalAutolinkEmail: Fp,
      literalAutolinkHttp: Ip,
      literalAutolinkWww: Rp
    }
  };
}
function Ep() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: w0,
        notInConstruct: k0
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: w0,
        notInConstruct: k0
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: w0,
        notInConstruct: k0
      }
    ]
  };
}
function Dp(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function S0(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Ip(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Rp(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Fp(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Np(e) {
  this.exit(e);
}
function Bp(e) {
  Tp(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Pp],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Op]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Pp(e, t, r, n, i) {
  let a = "";
  if (!Ss(i) || (/^w/i.test(t) && (r = t + r, t = "", a = "http://"), !Lp(r)))
    return !1;
  const l = qp(r + n);
  if (!l[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: a + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [o, { type: "text", value: l[1] }] : o;
}
function Op(e, t, r, n) {
  return (
    // Not an expected previous character.
    !Ss(n, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(r) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + r,
      children: [{ type: "text", value: t + "@" + r }]
    }
  );
}
function Lp(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function qp(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let r = t[0], n = r.indexOf(")");
  const i = Cl(e, "(");
  let a = Cl(e, ")");
  for (; n !== -1 && i > a; )
    e += r.slice(0, n + 1), r = r.slice(n + 1), n = r.indexOf(")"), a++;
  return [e, r];
}
function Ss(e, t) {
  const r = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || ur(r) || zn(r)) && // If it’s an email, the previous character should not be a slash.
  (!t || r !== 47);
}
Ts.peek = Yp;
function Hp() {
  this.buffer();
}
function jp(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function _p() {
  this.buffer();
}
function $p(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Vp(e) {
  const t = this.resume(), r = this.stack[this.stack.length - 1];
  r.type, r.identifier = kt(
    this.sliceSerialize(e)
  ).toLowerCase(), r.label = t;
}
function Up(e) {
  this.exit(e);
}
function Gp(e) {
  const t = this.resume(), r = this.stack[this.stack.length - 1];
  r.type, r.identifier = kt(
    this.sliceSerialize(e)
  ).toLowerCase(), r.label = t;
}
function Wp(e) {
  this.exit(e);
}
function Yp() {
  return "[";
}
function Ts(e, t, r, n) {
  const i = r.createTracker(n);
  let a = i.move("[^");
  const l = r.enter("footnoteReference"), o = r.enter("reference");
  return a += i.move(
    r.safe(r.associationId(e), { after: "]", before: a })
  ), o(), l(), a += i.move("]"), a;
}
function Xp() {
  return {
    enter: {
      gfmFootnoteCallString: Hp,
      gfmFootnoteCall: jp,
      gfmFootnoteDefinitionLabelString: _p,
      gfmFootnoteDefinition: $p
    },
    exit: {
      gfmFootnoteCallString: Vp,
      gfmFootnoteCall: Up,
      gfmFootnoteDefinitionLabelString: Gp,
      gfmFootnoteDefinition: Wp
    }
  };
}
function Kp(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: r, footnoteReference: Ts },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function r(n, i, a, l) {
    const o = a.createTracker(l);
    let s = o.move("[^");
    const u = a.enter("footnoteDefinition"), m = a.enter("label");
    return s += o.move(
      a.safe(a.associationId(n), { before: s, after: "]" })
    ), m(), s += o.move("]:"), n.children && n.children.length > 0 && (o.shift(4), s += o.move(
      (t ? `
` : " ") + a.indentLines(
        a.containerFlow(n, o.current()),
        t ? As : Jp
      )
    )), u(), s;
  }
}
function Jp(e, t, r) {
  return t === 0 ? e : As(e, t, r);
}
function As(e, t, r) {
  return (r ? "" : "    ") + e;
}
const Zp = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Cs.peek = nd;
function Qp() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: td },
    exit: { strikethrough: rd }
  };
}
function ed() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Zp
      }
    ],
    handlers: { delete: Cs }
  };
}
function td(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function rd(e) {
  this.exit(e);
}
function Cs(e, t, r, n) {
  const i = r.createTracker(n), a = r.enter("strikethrough");
  let l = i.move("~~");
  return l += r.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), a(), l;
}
function nd() {
  return "~";
}
function id(e) {
  return e.length;
}
function ad(e, t) {
  const r = t || {}, n = (r.align || []).concat(), i = r.stringLength || id, a = [], l = [], o = [], s = [];
  let u = 0, m = -1;
  for (; ++m < e.length; ) {
    const b = [], z = [];
    let T = -1;
    for (e[m].length > u && (u = e[m].length); ++T < e[m].length; ) {
      const M = ld(e[m][T]);
      if (r.alignDelimiters !== !1) {
        const R = i(M);
        z[T] = R, (s[T] === void 0 || R > s[T]) && (s[T] = R);
      }
      b.push(M);
    }
    l[m] = b, o[m] = z;
  }
  let h = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++h < u; )
      a[h] = Ml(n[h]);
  else {
    const b = Ml(n);
    for (; ++h < u; )
      a[h] = b;
  }
  h = -1;
  const d = [], p = [];
  for (; ++h < u; ) {
    const b = a[h];
    let z = "", T = "";
    b === 99 ? (z = ":", T = ":") : b === 108 ? z = ":" : b === 114 && (T = ":");
    let M = r.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[h] - z.length - T.length
    );
    const R = z + "-".repeat(M) + T;
    r.alignDelimiters !== !1 && (M = z.length + M + T.length, M > s[h] && (s[h] = M), p[h] = M), d[h] = R;
  }
  l.splice(1, 0, d), o.splice(1, 0, p), m = -1;
  const y = [];
  for (; ++m < l.length; ) {
    const b = l[m], z = o[m];
    h = -1;
    const T = [];
    for (; ++h < u; ) {
      const M = b[h] || "";
      let R = "", $ = "";
      if (r.alignDelimiters !== !1) {
        const j = s[h] - (z[h] || 0), D = a[h];
        D === 114 ? R = " ".repeat(j) : D === 99 ? j % 2 ? (R = " ".repeat(j / 2 + 0.5), $ = " ".repeat(j / 2 - 0.5)) : (R = " ".repeat(j / 2), $ = R) : $ = " ".repeat(j);
      }
      r.delimiterStart !== !1 && !h && T.push("|"), r.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(r.alignDelimiters === !1 && M === "") && (r.delimiterStart !== !1 || h) && T.push(" "), r.alignDelimiters !== !1 && T.push(R), T.push(M), r.alignDelimiters !== !1 && T.push($), r.padding !== !1 && T.push(" "), (r.delimiterEnd !== !1 || h !== u - 1) && T.push("|");
    }
    y.push(
      r.delimiterEnd === !1 ? T.join("").replace(/ +$/, "") : T.join("")
    );
  }
  return y.join(`
`);
}
function ld(e) {
  return e == null ? "" : String(e);
}
function Ml(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function od(e, t, r, n) {
  const i = r.enter("blockquote"), a = r.createTracker(n);
  a.move("> "), a.shift(2);
  const l = r.indentLines(
    r.containerFlow(e, a.current()),
    sd
  );
  return i(), l;
}
function sd(e, t, r) {
  return ">" + (r ? "" : " ") + e;
}
function ud(e, t) {
  return zl(e, t.inConstruct, !0) && !zl(e, t.notInConstruct, !1);
}
function zl(e, t, r) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return r;
  let n = -1;
  for (; ++n < t.length; )
    if (e.includes(t[n]))
      return !0;
  return !1;
}
function El(e, t, r, n) {
  let i = -1;
  for (; ++i < r.unsafe.length; )
    if (r.unsafe[i].character === `
` && ud(r.stack, r.unsafe[i]))
      return /[ \t]/.test(n.before) ? "" : " ";
  return `\\
`;
}
function cd(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function hd(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function md(e, t, r, n) {
  const i = hd(r), a = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (cd(e, r)) {
    const h = r.enter("codeIndented"), d = r.indentLines(a, fd);
    return h(), d;
  }
  const o = r.createTracker(n), s = i.repeat(Math.max(xo(a, i) + 1, 3)), u = r.enter("codeFenced");
  let m = o.move(s);
  if (e.lang) {
    const h = r.enter(`codeFencedLang${l}`);
    m += o.move(
      r.safe(e.lang, {
        before: m,
        after: " ",
        encode: ["`"],
        ...o.current()
      })
    ), h();
  }
  if (e.lang && e.meta) {
    const h = r.enter(`codeFencedMeta${l}`);
    m += o.move(" "), m += o.move(
      r.safe(e.meta, {
        before: m,
        after: `
`,
        encode: ["`"],
        ...o.current()
      })
    ), h();
  }
  return m += o.move(`
`), a && (m += o.move(a + `
`)), m += o.move(s), u(), m;
}
function fd(e, t, r) {
  return (r ? "" : "    ") + e;
}
function Ri(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function pd(e, t, r, n) {
  const i = Ri(r), a = i === '"' ? "Quote" : "Apostrophe", l = r.enter("definition");
  let o = r.enter("label");
  const s = r.createTracker(n);
  let u = s.move("[");
  return u += s.move(
    r.safe(r.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), o(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (o = r.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    r.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (o = r.enter("destinationRaw"), u += s.move(
    r.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), o(), e.title && (o = r.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    r.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), o()), l(), u;
}
function dd(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function _r(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function An(e, t, r) {
  const n = wr(e), i = wr(t);
  return n === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    r === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : n === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
Ms.peek = gd;
function Ms(e, t, r, n) {
  const i = dd(r), a = r.enter("emphasis"), l = r.createTracker(n), o = l.move(i);
  let s = l.move(
    r.containerPhrasing(e, {
      after: i,
      before: o,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), m = An(
    n.before.charCodeAt(n.before.length - 1),
    u,
    i
  );
  m.inside && (s = _r(u) + s.slice(1));
  const h = s.charCodeAt(s.length - 1), d = An(n.after.charCodeAt(0), h, i);
  d.inside && (s = s.slice(0, -1) + _r(h));
  const p = l.move(i);
  return a(), r.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: m.outside
  }, o + s + p;
}
function gd(e, t, r) {
  return r.options.emphasis || "*";
}
function vd(e, t) {
  let r = !1;
  return ui(e, function(n) {
    if ("value" in n && /\r?\n|\r/.test(n.value) || n.type === "break")
      return r = !0, F0;
  }), !!((!e.depth || e.depth < 3) && ti(e) && (t.options.setext || r));
}
function yd(e, t, r, n) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), a = r.createTracker(n);
  if (vd(e, r)) {
    const m = r.enter("headingSetext"), h = r.enter("phrasing"), d = r.containerPhrasing(e, {
      ...a.current(),
      before: `
`,
      after: `
`
    });
    return h(), m(), d + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      d.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(d.lastIndexOf("\r"), d.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), o = r.enter("headingAtx"), s = r.enter("phrasing");
  a.move(l + " ");
  let u = r.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...a.current()
  });
  return /^[\t ]/.test(u) && (u = _r(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, r.options.closeAtx && (u += " " + l), s(), o(), u;
}
zs.peek = bd;
function zs(e) {
  return e.value || "";
}
function bd() {
  return "<";
}
Es.peek = xd;
function Es(e, t, r, n) {
  const i = Ri(r), a = i === '"' ? "Quote" : "Apostrophe", l = r.enter("image");
  let o = r.enter("label");
  const s = r.createTracker(n);
  let u = s.move("![");
  return u += s.move(
    r.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), o(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (o = r.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    r.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (o = r.enter("destinationRaw"), u += s.move(
    r.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), o(), e.title && (o = r.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    r.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), o()), u += s.move(")"), l(), u;
}
function xd() {
  return "!";
}
Ds.peek = wd;
function Ds(e, t, r, n) {
  const i = e.referenceType, a = r.enter("imageReference");
  let l = r.enter("label");
  const o = r.createTracker(n);
  let s = o.move("![");
  const u = r.safe(e.alt, {
    before: s,
    after: "]",
    ...o.current()
  });
  s += o.move(u + "]["), l();
  const m = r.stack;
  r.stack = [], l = r.enter("reference");
  const h = r.safe(r.associationId(e), {
    before: s,
    after: "]",
    ...o.current()
  });
  return l(), r.stack = m, a(), i === "full" || !u || u !== h ? s += o.move(h + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += o.move("]"), s;
}
function wd() {
  return "!";
}
Is.peek = kd;
function Is(e, t, r) {
  let n = e.value || "", i = "`", a = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(n); )
    i += "`";
  for (/[^ \r\n]/.test(n) && (/^[ \r\n]/.test(n) && /[ \r\n]$/.test(n) || /^`|`$/.test(n)) && (n = " " + n + " "); ++a < r.unsafe.length; ) {
    const l = r.unsafe[a], o = r.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; s = o.exec(n); ) {
        let u = s.index;
        n.charCodeAt(u) === 10 && n.charCodeAt(u - 1) === 13 && u--, n = n.slice(0, u) + " " + n.slice(s.index + 1);
      }
  }
  return i + n + i;
}
function kd() {
  return "`";
}
function Rs(e, t) {
  const r = ti(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (r === e.url || "mailto:" + r === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Fs.peek = Sd;
function Fs(e, t, r, n) {
  const i = Ri(r), a = i === '"' ? "Quote" : "Apostrophe", l = r.createTracker(n);
  let o, s;
  if (Rs(e, r)) {
    const m = r.stack;
    r.stack = [], o = r.enter("autolink");
    let h = l.move("<");
    return h += l.move(
      r.containerPhrasing(e, {
        before: h,
        after: ">",
        ...l.current()
      })
    ), h += l.move(">"), o(), r.stack = m, h;
  }
  o = r.enter("link"), s = r.enter("label");
  let u = l.move("[");
  return u += l.move(
    r.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = r.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    r.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (s = r.enter("destinationRaw"), u += l.move(
    r.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = r.enter(`title${a}`), u += l.move(" " + i), u += l.move(
    r.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), s()), u += l.move(")"), o(), u;
}
function Sd(e, t, r) {
  return Rs(e, r) ? "<" : "[";
}
Ns.peek = Td;
function Ns(e, t, r, n) {
  const i = e.referenceType, a = r.enter("linkReference");
  let l = r.enter("label");
  const o = r.createTracker(n);
  let s = o.move("[");
  const u = r.containerPhrasing(e, {
    before: s,
    after: "]",
    ...o.current()
  });
  s += o.move(u + "]["), l();
  const m = r.stack;
  r.stack = [], l = r.enter("reference");
  const h = r.safe(r.associationId(e), {
    before: s,
    after: "]",
    ...o.current()
  });
  return l(), r.stack = m, a(), i === "full" || !u || u !== h ? s += o.move(h + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += o.move("]"), s;
}
function Td() {
  return "[";
}
function Fi(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Ad(e) {
  const t = Fi(e), r = e.options.bulletOther;
  if (!r)
    return t === "*" ? "-" : "*";
  if (r !== "*" && r !== "+" && r !== "-")
    throw new Error(
      "Cannot serialize items with `" + r + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (r === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + r + "`) to be different"
    );
  return r;
}
function Cd(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Bs(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Md(e, t, r, n) {
  const i = r.enter("list"), a = r.bulletCurrent;
  let l = e.ordered ? Cd(r) : Fi(r);
  const o = e.ordered ? l === "." ? ")" : "." : Ad(r);
  let s = t && r.bulletLastUsed ? l === r.bulletLastUsed : !1;
  if (!e.ordered) {
    const m = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      m && (!m.children || !m.children[0]) && // Directly in two other list items:
      r.stack[r.stack.length - 1] === "list" && r.stack[r.stack.length - 2] === "listItem" && r.stack[r.stack.length - 3] === "list" && r.stack[r.stack.length - 4] === "listItem" && // That are each the first child.
      r.indexStack[r.indexStack.length - 1] === 0 && r.indexStack[r.indexStack.length - 2] === 0 && r.indexStack[r.indexStack.length - 3] === 0 && (s = !0), Bs(r) === l && m
    ) {
      let h = -1;
      for (; ++h < e.children.length; ) {
        const d = e.children[h];
        if (d && d.type === "listItem" && d.children && d.children[0] && d.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (l = o), r.bulletCurrent = l;
  const u = r.containerFlow(e, n);
  return r.bulletLastUsed = l, r.bulletCurrent = a, i(), u;
}
function zd(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Ed(e, t, r, n) {
  const i = zd(r);
  let a = r.bulletCurrent || Fi(r);
  t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (r.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
  let l = a.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const o = r.createTracker(n);
  o.move(a + " ".repeat(l - a.length)), o.shift(l);
  const s = r.enter("listItem"), u = r.indentLines(
    r.containerFlow(e, o.current()),
    m
  );
  return s(), u;
  function m(h, d, p) {
    return d ? (p ? "" : " ".repeat(l)) + h : (p ? a : a + " ".repeat(l - a.length)) + h;
  }
}
function Dd(e, t, r, n) {
  const i = r.enter("paragraph"), a = r.enter("phrasing"), l = r.containerPhrasing(e, n);
  return a(), i(), l;
}
const Id = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Ur([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Rd(e, t, r, n) {
  return (e.children.some(function(l) {
    return Id(l);
  }) ? r.containerPhrasing : r.containerFlow).call(r, e, n);
}
function Fd(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Ps.peek = Nd;
function Ps(e, t, r, n) {
  const i = Fd(r), a = r.enter("strong"), l = r.createTracker(n), o = l.move(i + i);
  let s = l.move(
    r.containerPhrasing(e, {
      after: i,
      before: o,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), m = An(
    n.before.charCodeAt(n.before.length - 1),
    u,
    i
  );
  m.inside && (s = _r(u) + s.slice(1));
  const h = s.charCodeAt(s.length - 1), d = An(n.after.charCodeAt(0), h, i);
  d.inside && (s = s.slice(0, -1) + _r(h));
  const p = l.move(i + i);
  return a(), r.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: m.outside
  }, o + s + p;
}
function Nd(e, t, r) {
  return r.options.strong || "*";
}
function Bd(e, t, r, n) {
  return r.safe(e.value, n);
}
function Pd(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Od(e, t, r) {
  const n = (Bs(r) + (r.options.ruleSpaces ? " " : "")).repeat(Pd(r));
  return r.options.ruleSpaces ? n.slice(0, -1) : n;
}
const Os = {
  blockquote: od,
  break: El,
  code: md,
  definition: pd,
  emphasis: Ms,
  hardBreak: El,
  heading: yd,
  html: zs,
  image: Es,
  imageReference: Ds,
  inlineCode: Is,
  link: Fs,
  linkReference: Ns,
  list: Md,
  listItem: Ed,
  paragraph: Dd,
  root: Rd,
  strong: Ps,
  text: Bd,
  thematicBreak: Od
};
function Ld() {
  return {
    enter: {
      table: qd,
      tableData: Dl,
      tableHeader: Dl,
      tableRow: jd
    },
    exit: {
      codeText: _d,
      table: Hd,
      tableData: T0,
      tableHeader: T0,
      tableRow: T0
    }
  };
}
function qd(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(r) {
        return r === "none" ? null : r;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function Hd(e) {
  this.exit(e), this.data.inTable = void 0;
}
function jd(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function T0(e) {
  this.exit(e);
}
function Dl(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function _d(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, $d));
  const r = this.stack[this.stack.length - 1];
  r.type, r.value = t, this.exit(e);
}
function $d(e, t) {
  return t === "|" ? t : e;
}
function Vd(e) {
  const t = e || {}, r = t.tableCellPadding, n = t.tablePipeAlign, i = t.stringLength, a = r ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: d,
      table: l,
      tableCell: s,
      tableRow: o
    }
  };
  function l(p, y, b, z) {
    return u(m(p, b, z), p.align);
  }
  function o(p, y, b, z) {
    const T = h(p, b, z), M = u([T]);
    return M.slice(0, M.indexOf(`
`));
  }
  function s(p, y, b, z) {
    const T = b.enter("tableCell"), M = b.enter("phrasing"), R = b.containerPhrasing(p, {
      ...z,
      before: a,
      after: a
    });
    return M(), T(), R;
  }
  function u(p, y) {
    return ad(p, {
      align: y,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function m(p, y, b) {
    const z = p.children;
    let T = -1;
    const M = [], R = y.enter("table");
    for (; ++T < z.length; )
      M[T] = h(z[T], y, b);
    return R(), M;
  }
  function h(p, y, b) {
    const z = p.children;
    let T = -1;
    const M = [], R = y.enter("tableRow");
    for (; ++T < z.length; )
      M[T] = s(z[T], p, y, b);
    return R(), M;
  }
  function d(p, y, b) {
    let z = Os.inlineCode(p, y, b);
    return b.stack.includes("tableCell") && (z = z.replace(/\|/g, "\\$&")), z;
  }
}
function Ud() {
  return {
    exit: {
      taskListCheckValueChecked: Il,
      taskListCheckValueUnchecked: Il,
      paragraph: Wd
    }
  };
}
function Gd() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Yd }
  };
}
function Il(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Wd(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const r = this.stack[this.stack.length - 1];
    r.type;
    const n = r.children[0];
    if (n && n.type === "text") {
      const i = t.children;
      let a = -1, l;
      for (; ++a < i.length; ) {
        const o = i[a];
        if (o.type === "paragraph") {
          l = o;
          break;
        }
      }
      l === r && (n.value = n.value.slice(1), n.value.length === 0 ? r.children.shift() : r.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, r.position.start = Object.assign({}, n.position.start)));
    }
  }
  this.exit(e);
}
function Yd(e, t, r, n) {
  const i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", o = r.createTracker(n);
  a && o.move(l);
  let s = Os.listItem(e, t, r, {
    ...n,
    ...o.current()
  });
  return a && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(m) {
    return m + l;
  }
}
function Xd() {
  return [
    zp(),
    Xp(),
    Qp(),
    Ld(),
    Ud()
  ];
}
function Kd(e) {
  return {
    extensions: [
      Ep(),
      Kp(e),
      ed(),
      Vd(e),
      Gd()
    ]
  };
}
const Jd = {
  tokenize: n2,
  partial: !0
}, Ls = {
  tokenize: i2,
  partial: !0
}, qs = {
  tokenize: a2,
  partial: !0
}, Hs = {
  tokenize: l2,
  partial: !0
}, Zd = {
  tokenize: o2,
  partial: !0
}, js = {
  name: "wwwAutolink",
  tokenize: t2,
  previous: $s
}, _s = {
  name: "protocolAutolink",
  tokenize: r2,
  previous: Vs
}, $t = {
  name: "emailAutolink",
  tokenize: e2,
  previous: Us
}, It = {};
function Qd() {
  return {
    text: It
  };
}
let or = 48;
for (; or < 123; )
  It[or] = $t, or++, or === 58 ? or = 65 : or === 91 && (or = 97);
It[43] = $t;
It[45] = $t;
It[46] = $t;
It[95] = $t;
It[72] = [$t, _s];
It[104] = [$t, _s];
It[87] = [$t, js];
It[119] = [$t, js];
function e2(e, t, r) {
  const n = this;
  let i, a;
  return l;
  function l(h) {
    return !Y0(h) || !Us.call(n, n.previous) || Ni(n.events) ? r(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), o(h));
  }
  function o(h) {
    return Y0(h) ? (e.consume(h), o) : h === 64 ? (e.consume(h), s) : r(h);
  }
  function s(h) {
    return h === 46 ? e.check(Zd, m, u)(h) : h === 45 || h === 95 || Ue(h) ? (a = !0, e.consume(h), s) : m(h);
  }
  function u(h) {
    return e.consume(h), i = !0, s;
  }
  function m(h) {
    return a && i && Je(n.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(h)) : r(h);
  }
}
function t2(e, t, r) {
  const n = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !$s.call(n, n.previous) || Ni(n.events) ? r(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Jd, e.attempt(Ls, e.attempt(qs, a), r), r)(l));
  }
  function a(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function r2(e, t, r) {
  const n = this;
  let i = "", a = !1;
  return l;
  function l(h) {
    return (h === 72 || h === 104) && Vs.call(n, n.previous) && !Ni(n.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(h), e.consume(h), o) : r(h);
  }
  function o(h) {
    if (Je(h) && i.length < 5)
      return i += String.fromCodePoint(h), e.consume(h), o;
    if (h === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(h), s;
    }
    return r(h);
  }
  function s(h) {
    return h === 47 ? (e.consume(h), a ? u : (a = !0, s)) : r(h);
  }
  function u(h) {
    return h === null || vn(h) || xe(h) || ur(h) || zn(h) ? r(h) : e.attempt(Ls, e.attempt(qs, m), r)(h);
  }
  function m(h) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(h);
  }
}
function n2(e, t, r) {
  let n = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && n < 3 ? (n++, e.consume(l), i) : l === 46 && n === 3 ? (e.consume(l), a) : r(l);
  }
  function a(l) {
    return l === null ? r(l) : t(l);
  }
}
function i2(e, t, r) {
  let n, i, a;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(Hs, s, o)(u) : u === null || xe(u) || ur(u) || u !== 45 && zn(u) ? s(u) : (a = !0, e.consume(u), l);
  }
  function o(u) {
    return u === 95 ? n = !0 : (i = n, n = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || n || !a ? r(u) : t(u);
  }
}
function a2(e, t) {
  let r = 0, n = 0;
  return i;
  function i(l) {
    return l === 40 ? (r++, e.consume(l), i) : l === 41 && n < r ? a(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Hs, t, a)(l) : l === null || xe(l) || ur(l) ? t(l) : (e.consume(l), i);
  }
  function a(l) {
    return l === 41 && n++, e.consume(l), i;
  }
}
function l2(e, t, r) {
  return n;
  function n(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), n) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || xe(o) || ur(o) ? t(o) : r(o)
    );
  }
  function i(o) {
    return o === null || o === 40 || o === 91 || xe(o) || ur(o) ? t(o) : n(o);
  }
  function a(o) {
    return Je(o) ? l(o) : r(o);
  }
  function l(o) {
    return o === 59 ? (e.consume(o), n) : Je(o) ? (e.consume(o), l) : r(o);
  }
}
function o2(e, t, r) {
  return n;
  function n(a) {
    return e.consume(a), i;
  }
  function i(a) {
    return Ue(a) ? r(a) : t(a);
  }
}
function $s(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || xe(e);
}
function Vs(e) {
  return !Je(e);
}
function Us(e) {
  return !(e === 47 || Y0(e));
}
function Y0(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Ue(e);
}
function Ni(e) {
  let t = e.length, r = !1;
  for (; t--; ) {
    const n = e[t][1];
    if ((n.type === "labelLink" || n.type === "labelImage") && !n._balanced) {
      r = !0;
      break;
    }
    if (n._gfmAutolinkLiteralWalkedInto) {
      r = !1;
      break;
    }
  }
  return e.length > 0 && !r && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), r;
}
const s2 = {
  tokenize: g2,
  partial: !0
};
function u2() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: f2,
        continuation: {
          tokenize: p2
        },
        exit: d2
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: m2
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: c2,
        resolveTo: h2
      }
    }
  };
}
function c2(e, t, r) {
  const n = this;
  let i = n.events.length;
  const a = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const s = n.events[i][1];
    if (s.type === "labelImage") {
      l = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return o;
  function o(s) {
    if (!l || !l._balanced)
      return r(s);
    const u = kt(n.sliceSerialize({
      start: l.end,
      end: n.now()
    }));
    return u.codePointAt(0) !== 94 || !a.includes(u.slice(1)) ? r(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function h2(e, t) {
  let r = e.length;
  for (; r--; )
    if (e[r][1].type === "labelImage" && e[r][0] === "enter") {
      e[r][1];
      break;
    }
  e[r + 1][1].type = "data", e[r + 3][1].type = "gfmFootnoteCallLabelMarker";
  const n = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[r + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[r + 3][1].end),
    end: Object.assign({}, e[r + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const a = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, a.start),
    end: Object.assign({}, a.end)
  }, o = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[r + 1],
    e[r + 2],
    ["enter", n, t],
    // The `[`
    e[r + 3],
    e[r + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", a, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", a, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", n, t]
  ];
  return e.splice(r, e.length - r + 1, ...o), e;
}
function m2(e, t, r) {
  const n = this, i = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []);
  let a = 0, l;
  return o;
  function o(h) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(h), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(h) {
    return h !== 94 ? r(h) : (e.enter("gfmFootnoteCallMarker"), e.consume(h), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(h) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      h === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      h === null || h === 91 || xe(h)
    )
      return r(h);
    if (h === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(kt(n.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(h), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : r(h);
    }
    return xe(h) || (l = !0), a++, e.consume(h), h === 92 ? m : u;
  }
  function m(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, u) : u(h);
  }
}
function f2(e, t, r) {
  const n = this, i = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []);
  let a, l = 0, o;
  return s;
  function s(y) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(y) {
    return y === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", m) : r(y);
  }
  function m(y) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      y === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || xe(y)
    )
      return r(y);
    if (y === 93) {
      e.exit("chunkString");
      const b = e.exit("gfmFootnoteDefinitionLabelString");
      return a = kt(n.sliceSerialize(b)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return xe(y) || (o = !0), l++, e.consume(y), y === 92 ? h : m;
  }
  function h(y) {
    return y === 91 || y === 92 || y === 93 ? (e.consume(y), l++, m) : m(y);
  }
  function d(y) {
    return y === 58 ? (e.enter("definitionMarker"), e.consume(y), e.exit("definitionMarker"), i.includes(a) || i.push(a), ue(e, p, "gfmFootnoteDefinitionWhitespace")) : r(y);
  }
  function p(y) {
    return t(y);
  }
}
function p2(e, t, r) {
  return e.check(Vr, t, e.attempt(s2, t, r));
}
function d2(e) {
  e.exit("gfmFootnoteDefinition");
}
function g2(e, t, r) {
  const n = this;
  return ue(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(a) {
    const l = n.events[n.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(a) : r(a);
  }
}
function v2(e) {
  let r = (e || {}).singleTilde;
  const n = {
    name: "strikethrough",
    tokenize: a,
    resolveAll: i
  };
  return r == null && (r = !0), {
    text: {
      126: n
    },
    insideSpan: {
      null: [n]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(l, o) {
    let s = -1;
    for (; ++s < l.length; )
      if (l[s][0] === "enter" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._close) {
        let u = s;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && // If the sizes are the same:
          l[s][1].end.offset - l[s][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[s][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const m = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[s][1].end)
            }, h = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[s][1].start)
            }, d = [["enter", m, o], ["enter", l[u][1], o], ["exit", l[u][1], o], ["enter", h, o]], p = o.parser.constructs.insideSpan.null;
            p && ct(d, d.length, 0, En(p, l.slice(u + 1, s), o)), ct(d, d.length, 0, [["exit", h, o], ["enter", l[s][1], o], ["exit", l[s][1], o], ["exit", m, o]]), ct(l, u - 1, s - u + 3, d), s = u + d.length - 2;
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
    return l;
  }
  function a(l, o, s) {
    const u = this.previous, m = this.events;
    let h = 0;
    return d;
    function d(y) {
      return u === 126 && m[m.length - 1][1].type !== "characterEscape" ? s(y) : (l.enter("strikethroughSequenceTemporary"), p(y));
    }
    function p(y) {
      const b = wr(u);
      if (y === 126)
        return h > 1 ? s(y) : (l.consume(y), h++, p);
      if (h < 2 && !r) return s(y);
      const z = l.exit("strikethroughSequenceTemporary"), T = wr(y);
      return z._open = !T || T === 2 && !!b, z._close = !b || b === 2 && !!T, o(y);
    }
  }
}
class y2 {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, r, n) {
    b2(this, t, r, n);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(a, l) {
      return a[0] - l[0];
    }), this.map.length === 0)
      return;
    let r = this.map.length;
    const n = [];
    for (; r > 0; )
      r -= 1, n.push(t.slice(this.map[r][0] + this.map[r][1]), this.map[r][2]), t.length = this.map[r][0];
    n.push(t.slice()), t.length = 0;
    let i = n.pop();
    for (; i; ) {
      for (const a of i)
        t.push(a);
      i = n.pop();
    }
    this.map.length = 0;
  }
}
function b2(e, t, r, n) {
  let i = 0;
  if (!(r === 0 && n.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += r, e.map[i][2].push(...n);
        return;
      }
      i += 1;
    }
    e.map.push([t, r, n]);
  }
}
function x2(e, t) {
  let r = !1;
  const n = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (r) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && n.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const a = n.length - 1;
          n[a] = n[a] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (r = !0);
    t += 1;
  }
  return n;
}
function w2() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: k2,
        resolveAll: S2
      }
    }
  };
}
function k2(e, t, r) {
  const n = this;
  let i = 0, a = 0, l;
  return o;
  function o(I) {
    let U = n.events.length - 1;
    for (; U > -1; ) {
      const re = n.events[U][1].type;
      if (re === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      re === "linePrefix") U--;
      else break;
    }
    const _ = U > -1 ? n.events[U][1].type : null, ae = _ === "tableHead" || _ === "tableRow" ? D : s;
    return ae === D && n.parser.lazy[n.now().line] ? r(I) : ae(I);
  }
  function s(I) {
    return e.enter("tableHead"), e.enter("tableRow"), u(I);
  }
  function u(I) {
    return I === 124 || (l = !0, a += 1), m(I);
  }
  function m(I) {
    return I === null ? r(I) : K(I) ? a > 1 ? (a = 0, n.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(I), e.exit("lineEnding"), p) : r(I) : ce(I) ? ue(e, m, "whitespace")(I) : (a += 1, l && (l = !1, i += 1), I === 124 ? (e.enter("tableCellDivider"), e.consume(I), e.exit("tableCellDivider"), l = !0, m) : (e.enter("data"), h(I)));
  }
  function h(I) {
    return I === null || I === 124 || xe(I) ? (e.exit("data"), m(I)) : (e.consume(I), I === 92 ? d : h);
  }
  function d(I) {
    return I === 92 || I === 124 ? (e.consume(I), h) : h(I);
  }
  function p(I) {
    return n.interrupt = !1, n.parser.lazy[n.now().line] ? r(I) : (e.enter("tableDelimiterRow"), l = !1, ce(I) ? ue(e, y, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(I) : y(I));
  }
  function y(I) {
    return I === 45 || I === 58 ? z(I) : I === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(I), e.exit("tableCellDivider"), b) : j(I);
  }
  function b(I) {
    return ce(I) ? ue(e, z, "whitespace")(I) : z(I);
  }
  function z(I) {
    return I === 58 ? (a += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(I), e.exit("tableDelimiterMarker"), T) : I === 45 ? (a += 1, T(I)) : I === null || K(I) ? $(I) : j(I);
  }
  function T(I) {
    return I === 45 ? (e.enter("tableDelimiterFiller"), M(I)) : j(I);
  }
  function M(I) {
    return I === 45 ? (e.consume(I), M) : I === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(I), e.exit("tableDelimiterMarker"), R) : (e.exit("tableDelimiterFiller"), R(I));
  }
  function R(I) {
    return ce(I) ? ue(e, $, "whitespace")(I) : $(I);
  }
  function $(I) {
    return I === 124 ? y(I) : I === null || K(I) ? !l || i !== a ? j(I) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(I)) : j(I);
  }
  function j(I) {
    return r(I);
  }
  function D(I) {
    return e.enter("tableRow"), W(I);
  }
  function W(I) {
    return I === 124 ? (e.enter("tableCellDivider"), e.consume(I), e.exit("tableCellDivider"), W) : I === null || K(I) ? (e.exit("tableRow"), t(I)) : ce(I) ? ue(e, W, "whitespace")(I) : (e.enter("data"), J(I));
  }
  function J(I) {
    return I === null || I === 124 || xe(I) ? (e.exit("data"), W(I)) : (e.consume(I), I === 92 ? V : J);
  }
  function V(I) {
    return I === 92 || I === 124 ? (e.consume(I), J) : J(I);
  }
}
function S2(e, t) {
  let r = -1, n = !0, i = 0, a = [0, 0, 0, 0], l = [0, 0, 0, 0], o = !1, s = 0, u, m, h;
  const d = new y2();
  for (; ++r < e.length; ) {
    const p = e[r], y = p[1];
    p[0] === "enter" ? y.type === "tableHead" ? (o = !1, s !== 0 && (Rl(d, t, s, u, m), m = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, d.add(r, 0, [["enter", u, t]])) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (n = !0, h = void 0, a = [0, 0, 0, 0], l = [0, r + 1, 0, 0], o && (o = !1, m = {
      type: "tableBody",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, d.add(r, 0, [["enter", m, t]])), i = y.type === "tableDelimiterRow" ? 2 : m ? 3 : 1) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") ? (n = !1, l[2] === 0 && (a[1] !== 0 && (l[0] = l[1], h = hn(d, t, a, i, void 0, h), a = [0, 0, 0, 0]), l[2] = r)) : y.type === "tableCellDivider" && (n ? n = !1 : (a[1] !== 0 && (l[0] = l[1], h = hn(d, t, a, i, void 0, h)), a = l, l = [a[1], r, 0, 0])) : y.type === "tableHead" ? (o = !0, s = r) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (s = r, a[1] !== 0 ? (l[0] = l[1], h = hn(d, t, a, i, r, h)) : l[1] !== 0 && (h = hn(d, t, l, i, r, h)), i = 0) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") && (l[3] = r);
  }
  for (s !== 0 && Rl(d, t, s, u, m), d.consume(t.events), r = -1; ++r < t.events.length; ) {
    const p = t.events[r];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = x2(t.events, r));
  }
  return e;
}
function hn(e, t, r, n, i, a) {
  const l = n === 1 ? "tableHeader" : n === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  r[0] !== 0 && (a.end = Object.assign({}, yr(t.events, r[0])), e.add(r[0], 0, [["exit", a, t]]));
  const s = yr(t.events, r[1]);
  if (a = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(r[1], 0, [["enter", a, t]]), r[2] !== 0) {
    const u = yr(t.events, r[2]), m = yr(t.events, r[3]), h = {
      type: o,
      start: Object.assign({}, u),
      end: Object.assign({}, m)
    };
    if (e.add(r[2], 0, [["enter", h, t]]), n !== 2) {
      const d = t.events[r[2]], p = t.events[r[3]];
      if (d[1].end = Object.assign({}, p[1].end), d[1].type = "chunkText", d[1].contentType = "text", r[3] > r[2] + 1) {
        const y = r[2] + 1, b = r[3] - r[2] - 1;
        e.add(y, b, []);
      }
    }
    e.add(r[3] + 1, 0, [["exit", h, t]]);
  }
  return i !== void 0 && (a.end = Object.assign({}, yr(t.events, i)), e.add(i, 0, [["exit", a, t]]), a = void 0), a;
}
function Rl(e, t, r, n, i) {
  const a = [], l = yr(t.events, r);
  i && (i.end = Object.assign({}, l), a.push(["exit", i, t])), n.end = Object.assign({}, l), a.push(["exit", n, t]), e.add(r + 1, 0, a);
}
function yr(e, t) {
  const r = e[t], n = r[0] === "enter" ? "start" : "end";
  return r[1][n];
}
const T2 = {
  name: "tasklistCheck",
  tokenize: C2
};
function A2() {
  return {
    text: {
      91: T2
    }
  };
}
function C2(e, t, r) {
  const n = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      n.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !n._gfmTasklistFirstContentOfListItem ? r(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), a)
    );
  }
  function a(s) {
    return xe(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : r(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), o) : r(s);
  }
  function o(s) {
    return K(s) ? t(s) : ce(s) ? e.check({
      tokenize: M2
    }, t, r)(s) : r(s);
  }
}
function M2(e, t, r) {
  return ue(e, n, "whitespace");
  function n(i) {
    return i === null ? r(i) : t(i);
  }
}
function z2(e) {
  return Jl([
    Qd(),
    u2(),
    v2(e),
    w2(),
    A2()
  ]);
}
const E2 = {};
function A0(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), r = e || E2, n = t.data(), i = n.micromarkExtensions || (n.micromarkExtensions = []), a = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []), l = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
  i.push(z2(r)), a.push(Xd()), l.push(Kd(r));
}
const D2 = `# A Novel Approach to Declarative UI Rendering

**John Doe**  
*Department of Computer Science, Example University*  
johndoe@example.com

## Abstract

This paper presents a comprehensive analysis of modern declarative UI frameworks and their impact on software development practices. We demonstrate that component-based architectures significantly improve code maintainability and developer productivity. Our findings suggest a 40% reduction in bug density when compared to imperative approaches.

**Keywords:** React, Declarative Programming, Component Architecture, UI Frameworks

## Introduction

The evolution of web development has been marked by a fundamental shift from imperative to declarative paradigms. Traditional approaches required developers to manually manipulate the Document Object Model (DOM), leading to complex and error-prone code. Modern frameworks like React have revolutionized this landscape by introducing a declarative model where developers describe *what* the UI should look like, rather than *how* to construct it.

Consider the mathematical representation of state transitions in a traditional imperative system:

$$S_{t+1} = f(S_t, A_t)$$

where $S_t$ represents the state at time $t$, and $A_t$ represents the action applied. In contrast, declarative systems can be represented as:

$$UI = g(State)$$

This functional purity eliminates entire classes of bugs related to state inconsistency.

## Background and Related Work

Early web development relied heavily on jQuery and similar libraries for DOM manipulation. These imperative approaches, while powerful, suffered from several critical issues:

1. **State Management Complexity**: As applications grew, tracking which parts of the DOM reflected which data became increasingly difficult.
2. **Code Maintainability**: Imperative code often resulted in spaghetti logic that was hard to reason about.
3. **Testing Challenges**: Testing imperative UI code required complex setup and mocking of browser APIs.

The introduction of Angular in 2010 marked the first mainstream attempt at a declarative framework, though it still retained significant complexity. React's release in 2013 simplified this model further with its component-based architecture and virtual DOM.

### The Virtual DOM Concept

The virtual DOM is an in-memory representation of the actual DOM. When state changes occur, React:

- Creates a new virtual DOM tree
- Compares it with the previous tree (diffing)
- Calculates the minimal set of changes needed
- Applies only those changes to the real DOM

This process, known as reconciliation, can be expressed algorithmically with time complexity:

$$O(n) \\text{ where } n = \\text{number of nodes}$$

Traditional tree diffing algorithms have complexity $O(n^3)$, making React's optimization particularly significant.

## Methodology

Our study involved analyzing 50 production applications built with both imperative (jQuery-based) and declarative (React-based) approaches. We measured:

- **Lines of Code (LOC)**: Total codebase size
- **Cyclomatic Complexity**: Average complexity per function
- **Bug Density**: Bugs per 1000 lines of code
- **Development Time**: Time to implement new features

\`\`\`javascript
// Example: Declarative component
function UserProfile({ user }) {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => console.log('Edit')}>
        Edit Profile
      </button>
    </div>
  );
}
\`\`\`

The declarative nature of this code makes it immediately clear what will be rendered, without needing to trace through imperative DOM manipulation calls.

## Results

Our findings demonstrate significant advantages for declarative approaches:

| Metric | Imperative | Declarative | Improvement |
|--------|-----------|-------------|-------------|
| Avg LOC | 15,230 | 9,450 | 38% reduction |
| Cyclomatic Complexity | 8.4 | 4.2 | 50% reduction |
| Bug Density | 12.3/1000 | 7.4/1000 | 40% reduction |
| Feature Dev Time | 8.2 days | 5.1 days | 38% faster |

The statistical significance of these results was confirmed using paired t-tests with $p < 0.01$.

### Performance Analysis

While virtual DOM adds overhead, modern implementations are highly optimized. Our benchmarks show:

$$T_{render} = O(n \\cdot \\log n)$$

where $n$ is the number of components requiring updates. This compares favorably to naive re-rendering which scales as $O(n^2)$.

## Discussion

The results clearly indicate that declarative frameworks provide substantial benefits. However, there are important caveats:

**Learning Curve**: Developers accustomed to imperative programming must shift their mental model. This transition typically requires 2-3 months of practice.

**Abstraction Cost**: The declarative model abstracts away low-level details, which can make performance optimization less intuitive.

**Ecosystem Maturity**: While React's ecosystem is mature, newer frameworks may have limited library support.

### Developer Experience

Our qualitative analysis revealed that developers using declarative frameworks reported higher job satisfaction. Survey responses indicated:

- 78% found code reviews easier with declarative code
- 85% appreciated the predictability of component behavior
- 92% valued the ability to compose complex UIs from simple components

One senior developer noted: *"With React, I can reason about my application one component at a time. The mental load is significantly reduced compared to keeping track of DOM mutations across multiple jQuery callbacks."*

### Industry Adoption Patterns

The adoption curve for declarative frameworks has been steep. Our industry survey of 500+ companies revealed:

1. **Early Adopters (2013-2015)**: Primarily startups and tech-forward companies
2. **Early Majority (2016-2018)**: Mid-sized companies and progressive enterprises
3. **Late Majority (2019-2021)**: Large enterprises and conservative industries
4. **Laggards (2022+)**: Legacy systems with significant technical debt

The diffusion of innovation follows the classic S-curve, with React reaching approximately 67% market penetration among web applications by 2023.

### Challenges and Limitations

Despite the benefits, several challenges persist:

**Initial Bundle Size**: React applications can have larger initial bundle sizes compared to vanilla JavaScript. Our measurements show:

$$S_{bundle} = S_{framework} + S_{app} + S_{dependencies}$$

where $S_{framework}$ averages 45KB (gzipped), and $S_{dependencies}$ can range from 50-500KB depending on the application.

**SEO Considerations**: Client-side rendered applications historically struggled with search engine optimization. However, server-side rendering (SSR) and static site generation (SSG) have largely mitigated this concern.

**Over-Engineering Risk**: For simple websites with minimal interactivity, declarative frameworks may introduce unnecessary complexity. A cost-benefit analysis should consider application requirements.

### Future Directions

The evolution of declarative UI paradigms continues to accelerate. Several emerging trends warrant attention:

**Reactive Primitives**: Frameworks like Solid and Svelte push declarative concepts further by compiling components to optimized imperative code at build time. Early benchmarks suggest performance improvements of 20-30% compared to React.

**Concurrent Rendering**: React 18's concurrent features enable applications to remain responsive during expensive renders by breaking work into interruptible chunks. The scheduling algorithm can be modeled as:

$$Priority(task) = \\frac{Urgency \\times Weight}{Age + 1}$$

This prioritization ensures that user interactions receive immediate attention while background updates proceed when the main thread is idle.

**Type Safety Integration**: TypeScript adoption has grown alongside React, with 72% of React projects now using static typing. This combination provides both declarative clarity and compile-time safety, reducing runtime errors by an estimated 15-20%.

**Cross-Platform Declarative UIs**: React Native, Flutter, and similar frameworks extend declarative principles to mobile development. Our comparative analysis shows code reuse rates of 60-80% between web and mobile platforms when using these technologies.

### Economic Impact

The economic implications of framework choice are substantial. Our cost analysis for a medium-sized project (50,000 LOC) shows:

| Cost Factor | Imperative | Declarative | Savings |
|-------------|-----------|-------------|---------|
| Initial Development | $180,000 | $135,000 | 25% |
| Annual Maintenance | $75,000 | $48,000 | 36% |
| Bug Fixing | $32,000 | $19,000 | 41% |
| Feature Additions | $95,000 | $62,000 | 35% |
| **5-Year TCO** | **$562,000** | **$359,000** | **36%** |

These figures assume a team of 4 developers at market rates. The savings compound over time as declarative codebases remain more maintainable.

### Case Study: Large-Scale Migration

We documented a Fortune 500 company's migration from a jQuery-based application (250,000 LOC) to React over 18 months. Key findings:

- **Phase 1 (Months 1-6)**: Hybrid approach with React components embedded in legacy pages
- **Phase 2 (Months 7-12)**: Gradual replacement of major features
- **Phase 3 (Months 13-18)**: Final migration and legacy code removal

The migration reduced page load time by 42%, decreased customer support tickets related to UI bugs by 58%, and improved developer velocity by 31% (measured by story points per sprint).

Post-migration, the engineering team reported that new features that previously took 2-3 sprints now took 1-2 sprints on average. Technical debt decreased significantly, with code complexity metrics improving across all modules.

### Theoretical Foundations

The success of declarative frameworks can be understood through the lens of cognitive load theory. Imperative programming requires developers to maintain mental models of:

1. Current state
2. Desired state
3. Transformation sequence
4. Side effects and edge cases

Declarative programming reduces this to:

1. Current state
2. Desired state (as a pure function of state)

This represents a 50% reduction in cognitive load, aligning with our empirical findings of improved productivity and reduced bug rates.

Furthermore, functional reactive programming (FRP) principles underlying these frameworks provide mathematical guarantees about program behavior. The composition of pure functions is itself pure:

$$f: S \\rightarrow UI_1, \\quad g: S \\rightarrow UI_2 \\implies h(s) = f(s) \\oplus g(s): S \\rightarrow UI_{combined}$$

This composability is the foundation of component-based architecture.

## Conclusion

This paper has demonstrated the significant advantages of declarative UI frameworks in modern web development. Our empirical analysis shows meaningful improvements in code quality, maintainability, and development speed. As the web continues to evolve toward more complex applications, declarative approaches will become increasingly essential.

The evidence is compelling across multiple dimensions: technical metrics show substantial improvements in code quality and performance; developer experience surveys reveal increased satisfaction and productivity; economic analysis demonstrates clear cost savings; and theoretical foundations provide sound justification for these observed benefits.

Future work should explore:
- Integration with WebAssembly for performance-critical paths
- Advanced state management patterns with distributed systems
- Server-side rendering optimizations for edge computing
- AI-assisted component generation and optimization
- Formal verification methods for UI correctness
- Accessibility improvements through declarative patterns

As we look toward the next decade of web development, the declarative paradigm appears poised to dominate. The question is no longer whether to adopt these frameworks, but rather how to optimize their usage and extend their benefits to new domains.

## Acknowledgments

This research was supported by the Japan Science and Technology Agency (JST) and the Ministry of Education, Culture, Sports, Science and Technology (MEXT). We thank the developers who participated in our surveys and case studies. Special thanks to the React core team for their technical insights.

## References

[1] Smith, J. et al. (2018). "Component-Based Architecture Patterns." *Journal of Software Engineering*, 42(3), 234-256.

[2] Johnson, M. (2020). "Virtual DOM Performance Analysis." *ACM Computing Surveys*, 53(2), 1-34.

[3] Chen, L. & Park, S. (2019). "Empirical Study of Framework Adoption." *IEEE Software*, 36(4), 45-52.

[4] Williams, K. (2021). "Cognitive Load in Software Development." *Communications of the ACM*, 64(8), 88-95.

[5] Anderson, R. & Thompson, D. (2022). "Economic Analysis of Technical Debt." *IEEE Transactions on Software Engineering*, 48(6), 2234-2251.

[6] Garcia, M. et al. (2020). "Declarative UI Frameworks: A Comparative Study." *Proceedings of the International Conference on Software Engineering*, 412-423.

[7] Lee, S. (2023). "The Future of Web Development: Trends and Predictions." *ACM Computing Surveys*, 55(9), 1-42.

[8] Brown, A. & Davis, J. (2019). "Type Safety in Dynamic Languages." *Programming Language Design and Implementation*, 301-315.
`;
function R2({
  initialMarkdown: e = D2,
  defaultShowEditor: t = !1
}) {
  const [r, n] = _i(e), [i, a] = _i(t), { singleColumnContent: l, restContent: o } = $i(() => {
    const u = /\*\*Keywords:?\*\*[^\n]*\n/i, m = r.match(u);
    if (m) {
      const p = m.index + m[0].length;
      return {
        singleColumnContent: r.substring(0, p),
        restContent: r.substring(p)
      };
    }
    const h = /## Abstract[\s\S]*?\n\n/i, d = r.match(h);
    if (d) {
      const p = d.index + d[0].length;
      return {
        singleColumnContent: r.substring(0, p),
        restContent: r.substring(p)
      };
    }
    return {
      singleColumnContent: "",
      restContent: r
    };
  }, [r]), s = $i(() => {
    const m = o.split(`
`), h = [];
    let d = [];
    m.forEach((z, T) => {
      z.match(/^## /) && d.length > 0 ? (h.push(d.join(`
`)), d = [z]) : d.push(z);
    }), d.length > 0 && h.push(d.join(`
`));
    const p = [];
    let y = [], b = 0;
    return h.forEach((z) => {
      const T = z.split(`
`).length;
      b + T > 50 && y.length > 0 ? (p.push(y.join(`

`)), y = [z], b = T) : (y.push(z), b += T);
    }), y.length > 0 && p.push(y.join(`

`)), p;
  }, [o]);
  return /* @__PURE__ */ ke.jsxs("div", { style: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #faf9f7 0%, #f5f4f2 100%)",
    fontFamily: "system-ui, -apple-system, sans-serif"
  }, children: [
    /* @__PURE__ */ ke.jsxs("div", { style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #e5e3df",
      padding: "16px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ ke.jsx("h1", { style: {
        margin: 0,
        fontSize: "18px",
        fontWeight: 600,
        color: "#2c2823",
        letterSpacing: "-0.02em"
      }, children: "Academic Paper Viewer" }),
      /* @__PURE__ */ ke.jsx(
        "button",
        {
          onClick: () => a(!i),
          style: {
            padding: "8px 16px",
            background: "#2c2823",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            transition: "all 0.2s ease"
          },
          onMouseEnter: (u) => u.target.style.background = "#1a1715",
          onMouseLeave: (u) => u.target.style.background = "#2c2823",
          children: i ? "Show Preview" : "Show Markdown"
        }
      )
    ] }),
    /* @__PURE__ */ ke.jsx("div", { style: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "1800px",
      margin: "0 auto"
    }, children: i ? (
      /* Editor Panel */
      /* @__PURE__ */ ke.jsxs("div", { style: {
        width: "100%",
        maxWidth: "1200px",
        padding: "40px"
      }, children: [
        /* @__PURE__ */ ke.jsx("h2", { style: {
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: "16px",
          color: "#2c2823"
        }, children: "Markdown Editor" }),
        /* @__PURE__ */ ke.jsx(
          "textarea",
          {
            value: r,
            onChange: (u) => n(u.target.value),
            style: {
              width: "100%",
              height: "calc(100vh - 200px)",
              padding: "20px",
              fontFamily: '"JetBrains Mono", "Fira Code", monospace',
              fontSize: "13px",
              lineHeight: "1.7",
              border: "1px solid #e5e3df",
              borderRadius: "8px",
              resize: "none",
              background: "white",
              color: "#2c2823"
            },
            spellCheck: !1
          }
        )
      ] })
    ) : (
      /* Paper Display */
      /* @__PURE__ */ ke.jsx("div", { style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        padding: "60px 40px"
      }, children: /* @__PURE__ */ ke.jsxs("div", { className: "paper-pages-container", style: {
        width: "210mm",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ ke.jsx("style", { children: `
              @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@400;600;700&display=swap');
              @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

              .paper-page {
                width: 210mm;
                min-height: 297mm;
                background: white;
                box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
                margin-bottom: 20px;
                padding: 25mm;
                padding-bottom: 35mm;
                box-sizing: border-box;
                position: relative;
                page-break-after: always;
              }

              .paper-page-number {
                position: absolute;
                bottom: 15mm;
                left: 50%;
                transform: translateX(-50%);
                font-family: 'Source Sans 3', sans-serif;
                font-size: 11px;
                color: #666;
              }

              .paper-content {
                font-family: 'Crimson Text', Georgia, serif;
                font-size: 16px;
                line-height: 1.8;
                color: #1a1715;
              }

              .single-column-section {
                text-align: center;
                margin-bottom: 40px;
              }

              .two-column-section {
                column-count: 2;
                column-gap: 48px;
                column-rule: 1px solid #e5e3df;
                text-align: justify;
                hyphens: auto;
              }

              .paper-content h1 {
                font-family: 'Source Sans 3', sans-serif;
                font-size: 32px;
                font-weight: 700;
                line-height: 1.3;
                margin: 0 0 24px 0;
                color: #1a1715;
                text-align: center;
                letter-spacing: -0.02em;
              }

              .paper-content h2 {
                font-family: 'Source Sans 3', sans-serif;
                font-size: 20px;
                font-weight: 700;
                margin: 32px 0 16px 0;
                color: #1a1715;
                break-after: avoid;
                break-inside: avoid;
                letter-spacing: -0.01em;
              }

              .paper-content h3 {
                font-family: 'Source Sans 3', sans-serif;
                font-size: 16px;
                font-weight: 600;
                margin: 24px 0 12px 0;
                color: #2c2823;
                break-after: avoid;
                break-inside: avoid;
              }

              .paper-content p {
                margin: 0 0 14px 0;
              }

              .single-column-section p {
                text-align: center;
                margin: 8px auto;
                max-width: 800px;
              }

              .paper-content strong {
                font-weight: 600;
                color: #1a1715;
              }

              .paper-content em {
                font-style: italic;
              }

              .paper-content code {
                font-family: 'JetBrains Mono', 'Courier New', monospace;
                font-size: 13px;
                background: #f5f4f2;
                padding: 2px 6px;
                borderRadius: 3px;
                color: #c7254e;
              }

              .paper-content pre {
                background: #f5f4f2;
                padding: 16px;
                borderRadius: 4px;
                overflow-x: auto;
                margin: 16px 0;
                border-left: 3px solid #2c2823;
                column-span: all;
              }

              .paper-content pre code {
                background: none;
                padding: 0;
                color: #2c2823;
                font-size: 13px;
                line-height: 1.6;
              }

              .paper-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                font-size: 14px;
                column-span: all;
                font-family: 'Source Sans 3', sans-serif;
              }

              .paper-content th {
                background: #2c2823;
                color: white;
                padding: 10px 12px;
                text-align: left;
                font-weight: 600;
                border: 1px solid #1a1715;
              }

              .paper-content td {
                padding: 10px 12px;
                border: 1px solid #e5e3df;
              }

              .paper-content tr:nth-child(even) {
                background: #faf9f7;
              }

              .paper-content ul, .paper-content ol {
                margin: 12px 0;
                padding-left: 24px;
              }

              .paper-content li {
                margin: 6px 0;
              }

              .paper-content blockquote {
                border-left: 3px solid #2c2823;
                padding-left: 20px;
                margin: 16px 0;
                color: #4a4541;
                font-style: italic;
              }

              .paper-content .katex {
                font-size: 1.1em;
              }

              .paper-content .katex-display {
                margin: 20px 0;
                column-span: all;
                text-align: center;
              }

              .paper-content a {
                color: #2c2823;
                text-decoration: none;
                border-bottom: 1px solid #2c2823;
              }

              .paper-content a:hover {
                background: #f5f4f2;
              }

              /* Print styles */
              @media print {
                body {
                  margin: 0;
                  padding: 0;
                }

                .paper-page {
                  box-shadow: none;
                  margin: 0;
                  page-break-after: always;
                  width: 210mm;
                  height: 297mm;
                }

                .paper-page:last-child {
                  page-break-after: auto;
                }

                @page {
                  size: A4;
                  margin: 0;
                }
              }
            ` }),
        /* @__PURE__ */ ke.jsxs("div", { className: "paper-page", children: [
          /* @__PURE__ */ ke.jsxs("div", { className: "paper-content", children: [
            /* @__PURE__ */ ke.jsx("div", { className: "single-column-section", children: /* @__PURE__ */ ke.jsx(
              r0,
              {
                remarkPlugins: [y0, A0],
                rehypePlugins: [x0],
                children: l
              }
            ) }),
            s.length > 0 && /* @__PURE__ */ ke.jsx("div", { className: "two-column-section", children: /* @__PURE__ */ ke.jsx(
              r0,
              {
                remarkPlugins: [y0, A0],
                rehypePlugins: [x0],
                children: s[0]
              }
            ) })
          ] }),
          /* @__PURE__ */ ke.jsx("div", { className: "paper-page-number", "aria-label": "Page 1", children: "1" })
        ] }),
        s.slice(1).map((u, m) => /* @__PURE__ */ ke.jsxs("div", { className: "paper-page", children: [
          /* @__PURE__ */ ke.jsx("div", { className: "paper-content", children: /* @__PURE__ */ ke.jsx("div", { className: "two-column-section", children: /* @__PURE__ */ ke.jsx(
            r0,
            {
              remarkPlugins: [y0, A0],
              rehypePlugins: [x0],
              children: u
            }
          ) }) }),
          /* @__PURE__ */ ke.jsx("div", { className: "paper-page-number", "aria-label": `Page ${m + 2}`, children: m + 2 })
        ] }, m + 1))
      ] }) })
    ) })
  ] });
}
export {
  R2 as AcademicPaperViewer,
  R2 as default
};
