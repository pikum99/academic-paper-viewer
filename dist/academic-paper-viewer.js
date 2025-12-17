import De, { useState as Oe, useMemo as je } from "react";
import ee from "react-markdown";
import te from "remark-math";
import re from "rehype-katex";
import ae from "remark-gfm";
var ne = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function gt() {
  if ($e) return L;
  $e = 1;
  var M = De, P = Symbol.for("react.element"), w = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, C = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(k, p, m) {
    var c, h = {}, f = null, y = null;
    m !== void 0 && (f = "" + m), p.key !== void 0 && (f = "" + p.key), p.ref !== void 0 && (y = p.ref);
    for (c in p) T.call(p, c) && !A.hasOwnProperty(c) && (h[c] = p[c]);
    if (k && k.defaultProps) for (c in p = k.defaultProps, p) h[c] === void 0 && (h[c] = p[c]);
    return { $$typeof: P, type: k, key: f, ref: y, props: h, _owner: C.current };
  }
  return L.Fragment = w, L.jsx = O, L.jsxs = O, L;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function vt() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var M = De, P = Symbol.for("react.element"), w = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), k = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), R = Symbol.iterator, F = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = R && e[R] || e[F];
      return typeof t == "function" ? t : null;
    }
    var E = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          r[a - 1] = arguments[a];
        Ie("error", e, r);
      }
    }
    function Ie(e, t, r) {
      {
        var a = E.ReactDebugCurrentFrame, o = a.getStackAddendum();
        o !== "" && (t += "%s", r = r.concat([o]));
        var s = r.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Me = !1, Fe = !1, We = !1, ze = !1, Le = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === A || Le || e === C || e === m || e === c || ze || e === y || Me || Fe || We || typeof e == "object" && e !== null && (e.$$typeof === f || e.$$typeof === h || e.$$typeof === O || e.$$typeof === k || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ne(e, t, r) {
      var a = e.displayName;
      if (a)
        return a;
      var o = t.displayName || t.name || "";
      return o !== "" ? r + "(" + o + ")" : r;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case w:
          return "Portal";
        case A:
          return "Profiler";
        case C:
          return "StrictMode";
        case m:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var t = e;
            return oe(t) + ".Consumer";
          case O:
            var r = e;
            return oe(r._context) + ".Provider";
          case p:
            return Ne(e, e.render, "ForwardRef");
          case h:
            var a = e.displayName || null;
            return a !== null ? a : _(e.type) || "Memo";
          case f: {
            var o = e, s = o._payload, i = o._init;
            try {
              return _(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, W = 0, se, ce, le, ue, de, pe, fe;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Be() {
      {
        if (W === 0) {
          se = console.log, ce = console.info, le = console.warn, ue = console.error, de = console.group, pe = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ye() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: se
            }),
            info: j({}, e, {
              value: ce
            }),
            warn: j({}, e, {
              value: le
            }),
            error: j({}, e, {
              value: ue
            }),
            group: j({}, e, {
              value: de
            }),
            groupCollapsed: j({}, e, {
              value: pe
            }),
            groupEnd: j({}, e, {
              value: fe
            })
          });
        }
        W < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = E.ReactCurrentDispatcher, J;
    function N(e, t, r) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (o) {
            var a = o.stack.trim().match(/\n( *(at )?)/);
            J = a && a[1] || "";
          }
        return `
` + J + e;
      }
    }
    var K = !1, B;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      B = new qe();
    }
    function he(e, t) {
      if (!e || K)
        return "";
      {
        var r = B.get(e);
        if (r !== void 0)
          return r;
      }
      var a;
      K = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = V.current, V.current = null, Be();
      try {
        if (t) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              a = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              a = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            a = b;
          }
          e();
        }
      } catch (b) {
        if (b && a && typeof b.stack == "string") {
          for (var n = b.stack.split(`
`), v = a.stack.split(`
`), u = n.length - 1, d = v.length - 1; u >= 1 && d >= 0 && n[u] !== v[d]; )
            d--;
          for (; u >= 1 && d >= 0; u--, d--)
            if (n[u] !== v[d]) {
              if (u !== 1 || d !== 1)
                do
                  if (u--, d--, d < 0 || n[u] !== v[d]) {
                    var x = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, x), x;
                  }
                while (u >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        K = !1, V.current = s, Ye(), Error.prepareStackTrace = o;
      }
      var I = e ? e.displayName || e.name : "", $ = I ? N(I) : "";
      return typeof e == "function" && B.set(e, $), $;
    }
    function Ve(e, t, r) {
      return he(e, !1);
    }
    function Je(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Y(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Je(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case m:
          return N("Suspense");
        case c:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ve(e.render);
          case h:
            return Y(e.type, t, r);
          case f: {
            var a = e, o = a._payload, s = a._init;
            try {
              return Y(s(o), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ge = {}, ve = E.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, r = Y(e.type, e._source, t ? t.type : null);
        ve.setExtraStackFrame(r);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ke(e, t, r, a, o) {
      {
        var s = Function.call.bind(z);
        for (var i in e)
          if (s(e, i)) {
            var n = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((a || "React class") + ": " + r + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              n = e[i](t, i, a, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              n = u;
            }
            n && !(n instanceof Error) && (q(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", r, i, typeof n), q(null)), n instanceof Error && !(n.message in ge) && (ge[n.message] = !0, q(o), g("Failed %s type: %s", r, n.message), q(null));
          }
      }
    }
    var Ge = Array.isArray;
    function G(e) {
      return Ge(e);
    }
    function Xe(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function He(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (He(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), ye(e);
    }
    var we = E.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Ee;
    function Ze(e) {
      if (z.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (z.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, t) {
      typeof e.ref == "string" && we.current;
    }
    function rt(e, t) {
      {
        var r = function() {
          xe || (xe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function at(e, t) {
      {
        var r = function() {
          Ee || (Ee = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var nt = function(e, t, r, a, o, s, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: P,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function it(e, t, r, a, o) {
      {
        var s, i = {}, n = null, v = null;
        r !== void 0 && (be(r), n = "" + r), et(t) && (be(t.key), n = "" + t.key), Ze(t) && (v = t.ref, tt(t, o));
        for (s in t)
          z.call(t, s) && !Qe.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (n || v) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && rt(i, d), v && at(i, d);
        }
        return nt(e, n, v, o, a, we.current, i);
      }
    }
    var X = E.ReactCurrentOwner, ke = E.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var t = e._owner, r = Y(e.type, e._source, t ? t.type : null);
        ke.setExtraStackFrame(r);
      } else
        ke.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function Re() {
      {
        if (X.current) {
          var e = _(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ot(e) {
      return "";
    }
    var Se = {};
    function st(e) {
      {
        var t = Re();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Te(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = st(t);
        if (Se[r])
          return;
        Se[r] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + _(e._owner.type) + "."), D(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, a), D(null);
      }
    }
    function Ce(e, t) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            Q(a) && Te(a, t);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = S(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              Q(i.value) && Te(i.value, t);
        }
      }
    }
    function ct(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === h))
          r = t.propTypes;
        else
          return;
        if (r) {
          var a = _(t);
          Ke(r, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !H) {
          H = !0;
          var o = _(t);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a !== "children" && a !== "key") {
            D(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var _e = {};
    function Pe(e, t, r, a, o, s) {
      {
        var i = Ue(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = ot();
          v ? n += v : n += Re();
          var u;
          e === null ? u = "null" : G(e) ? u = "array" : e !== void 0 && e.$$typeof === P ? (u = "<" + (_(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var d = it(e, t, r, o, s);
        if (d == null)
          return d;
        if (i) {
          var x = t.children;
          if (x !== void 0)
            if (a)
              if (G(x)) {
                for (var I = 0; I < x.length; I++)
                  Ce(x[I], e);
                Object.freeze && Object.freeze(x);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(x, e);
        }
        if (z.call(t, "key")) {
          var $ = _(e), b = Object.keys(t).filter(function(ht) {
            return ht !== "key";
          }), Z = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_e[$ + Z]) {
            var mt = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, $, mt, $), _e[$ + Z] = !0;
          }
        }
        return e === T ? lt(d) : ct(d), d;
      }
    }
    function ut(e, t, r) {
      return Pe(e, t, r, !0);
    }
    function dt(e, t, r) {
      return Pe(e, t, r, !1);
    }
    var pt = dt, ft = ut;
    U.Fragment = T, U.jsx = pt, U.jsxs = ft;
  }()), U;
}
process.env.NODE_ENV === "production" ? ne.exports = gt() : ne.exports = vt();
var l = ne.exports;
const yt = `# A Novel Approach to Declarative UI Rendering

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
function Rt({
  initialMarkdown: M = yt,
  defaultShowEditor: P = !1
}) {
  const [w, T] = Oe(M), [C, A] = Oe(P), { singleColumnContent: O, restContent: k } = je(() => {
    const m = /\*\*Keywords:?\*\*[^\n]*\n/i, c = w.match(m);
    if (c) {
      const y = c.index + c[0].length;
      return {
        singleColumnContent: w.substring(0, y),
        restContent: w.substring(y)
      };
    }
    const h = /## Abstract[\s\S]*?\n\n/i, f = w.match(h);
    if (f) {
      const y = f.index + f[0].length;
      return {
        singleColumnContent: w.substring(0, y),
        restContent: w.substring(y)
      };
    }
    return {
      singleColumnContent: "",
      restContent: w
    };
  }, [w]), p = je(() => {
    const c = k.split(`
`), h = [];
    let f = [];
    c.forEach((S, E) => {
      S.match(/^## /) && f.length > 0 ? (h.push(f.join(`
`)), f = [S]) : f.push(S);
    }), f.length > 0 && h.push(f.join(`
`));
    const y = [];
    let R = [], F = 0;
    return h.forEach((S) => {
      const E = S.split(`
`).length;
      F + E > 50 && R.length > 0 ? (y.push(R.join(`

`)), R = [S], F = E) : (R.push(S), F += E);
    }), R.length > 0 && y.push(R.join(`

`)), y;
  }, [k]);
  return /* @__PURE__ */ l.jsxs("div", { style: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #faf9f7 0%, #f5f4f2 100%)",
    fontFamily: "system-ui, -apple-system, sans-serif"
  }, children: [
    /* @__PURE__ */ l.jsxs("div", { style: {
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
      /* @__PURE__ */ l.jsx("h1", { style: {
        margin: 0,
        fontSize: "18px",
        fontWeight: 600,
        color: "#2c2823",
        letterSpacing: "-0.02em"
      }, children: "Academic Paper Viewer" }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: () => A(!C),
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
          onMouseEnter: (m) => m.target.style.background = "#1a1715",
          onMouseLeave: (m) => m.target.style.background = "#2c2823",
          children: C ? "Show Preview" : "Show Markdown"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { style: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "1800px",
      margin: "0 auto"
    }, children: C ? (
      /* Editor Panel */
      /* @__PURE__ */ l.jsxs("div", { style: {
        width: "100%",
        maxWidth: "1200px",
        padding: "40px"
      }, children: [
        /* @__PURE__ */ l.jsx("h2", { style: {
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: "16px",
          color: "#2c2823"
        }, children: "Markdown Editor" }),
        /* @__PURE__ */ l.jsx(
          "textarea",
          {
            value: w,
            onChange: (m) => T(m.target.value),
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
      /* @__PURE__ */ l.jsx("div", { style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        padding: "60px 40px"
      }, children: /* @__PURE__ */ l.jsxs("div", { className: "paper-pages-container", style: {
        width: "210mm",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ l.jsx("style", { children: `
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
        /* @__PURE__ */ l.jsxs("div", { className: "paper-page", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "paper-content", children: [
            /* @__PURE__ */ l.jsx("div", { className: "single-column-section", children: /* @__PURE__ */ l.jsx(
              ee,
              {
                remarkPlugins: [te, ae],
                rehypePlugins: [re],
                children: O
              }
            ) }),
            p.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "two-column-section", children: /* @__PURE__ */ l.jsx(
              ee,
              {
                remarkPlugins: [te, ae],
                rehypePlugins: [re],
                children: p[0]
              }
            ) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "paper-page-number", "aria-label": "Page 1", children: "1" })
        ] }),
        p.slice(1).map((m, c) => /* @__PURE__ */ l.jsxs("div", { className: "paper-page", children: [
          /* @__PURE__ */ l.jsx("div", { className: "paper-content", children: /* @__PURE__ */ l.jsx("div", { className: "two-column-section", children: /* @__PURE__ */ l.jsx(
            ee,
            {
              remarkPlugins: [te, ae],
              rehypePlugins: [re],
              children: m
            }
          ) }) }),
          /* @__PURE__ */ l.jsx("div", { className: "paper-page-number", "aria-label": `Page ${c + 2}`, children: c + 2 })
        ] }, c + 1))
      ] }) })
    ) })
  ] });
}
export {
  Rt as AcademicPaperViewer,
  Rt as default
};
