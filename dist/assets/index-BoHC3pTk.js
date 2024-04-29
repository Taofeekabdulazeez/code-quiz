var Jg = Object.defineProperty;
var Yg = (e, t, n) =>
  t in e
    ? Jg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var nl = (e, t, n) => (Yg(e, typeof t != "symbol" ? t + "" : t, n), n),
  rl = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  };
var g = (e, t, n) => (
    rl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  j = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  b = (e, t, n, r) => (
    rl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  );
var eo = (e, t, n, r) => ({
    set _(i) {
      b(e, t, i, n);
    },
    get _() {
      return g(e, t, r);
    },
  }),
  D = (e, t, n) => (rl(e, t, "access private method"), n);
function Xg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Zg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var hp = { exports: {} },
  Oa = {},
  pp = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hs = Symbol.for("react.element"),
  ev = Symbol.for("react.portal"),
  tv = Symbol.for("react.fragment"),
  nv = Symbol.for("react.strict_mode"),
  rv = Symbol.for("react.profiler"),
  iv = Symbol.for("react.provider"),
  sv = Symbol.for("react.context"),
  ov = Symbol.for("react.forward_ref"),
  av = Symbol.for("react.suspense"),
  lv = Symbol.for("react.memo"),
  uv = Symbol.for("react.lazy"),
  zd = Symbol.iterator;
function cv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (zd && e[zd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yp = Object.assign,
  gp = {};
function xi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || mp);
}
xi.prototype.isReactComponent = {};
xi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vp() {}
vp.prototype = xi.prototype;
function wc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || mp);
}
var _c = (wc.prototype = new vp());
_c.constructor = wc;
yp(_c, xi.prototype);
_c.isPureReactComponent = !0;
var Fd = Array.isArray,
  wp = Object.prototype.hasOwnProperty,
  Sc = { current: null },
  _p = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sp(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      wp.call(t, r) && !_p.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Hs,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Sc.current,
  };
}
function dv(e, t) {
  return {
    $$typeof: Hs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function kc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hs;
}
function fv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Md = /\/+/g;
function il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fv("" + e.key)
    : t.toString(36);
}
function Oo(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Hs:
          case ev:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + il(o, 0) : r),
      Fd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Md, "$&/") + "/"),
          Oo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (kc(i) &&
            (i = dv(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Md, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Fd(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + il(s, a);
      o += Oo(s, t, n, l, i);
    }
  else if (((l = cv(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + il(s, a++)), (o += Oo(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function to(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oo(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function hv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  Po = { transition: null },
  pv = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: Po,
    ReactCurrentOwner: Sc,
  };
M.Children = {
  map: to,
  forEach: function (e, t, n) {
    to(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      to(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      to(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!kc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = xi;
M.Fragment = tv;
M.Profiler = rv;
M.PureComponent = wc;
M.StrictMode = nv;
M.Suspense = av;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pv;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = yp({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Sc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      wp.call(t, l) &&
        !_p.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Hs, type: e.type, key: i, ref: s, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: sv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: iv, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Sp;
M.createFactory = function (e) {
  var t = Sp.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: ov, render: e };
};
M.isValidElement = kc;
M.lazy = function (e) {
  return { $$typeof: uv, _payload: { _status: -1, _result: e }, _init: hv };
};
M.memo = function (e, t) {
  return { $$typeof: lv, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Po.transition;
  Po.transition = {};
  try {
    e();
  } finally {
    Po.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
M.useContext = function (e) {
  return je.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
M.useId = function () {
  return je.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return je.current.useRef(e);
};
M.useState = function (e) {
  return je.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return je.current.useTransition();
};
M.version = "18.2.0";
pp.exports = M;
var W = pp.exports;
const Te = Zg(W),
  Ud = Xg({ __proto__: null, default: Te }, [W]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mv = W,
  yv = Symbol.for("react.element"),
  gv = Symbol.for("react.fragment"),
  vv = Object.prototype.hasOwnProperty,
  wv = mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _v = { key: !0, ref: !0, __self: !0, __source: !0 };
function kp(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) vv.call(t, r) && !_v.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: yv,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: wv.current,
  };
}
Oa.Fragment = gv;
Oa.jsx = kp;
Oa.jsxs = kp;
hp.exports = Oa;
var O = hp.exports,
  Kl = {},
  Ep = { exports: {} },
  Ze = {},
  Cp = { exports: {} },
  xp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, $) {
    var L = T.length;
    T.push($);
    e: for (; 0 < L; ) {
      var q = (L - 1) >>> 1,
        V = T[q];
      if (0 < i(V, $)) (T[q] = $), (T[L] = V), (L = q);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var $ = T[0],
      L = T.pop();
    if (L !== $) {
      T[0] = L;
      e: for (var q = 0, V = T.length, Fn = V >>> 1; q < Fn; ) {
        var ht = 2 * (q + 1) - 1,
          Xt = T[ht],
          Be = ht + 1,
          Nt = T[Be];
        if (0 > i(Xt, L))
          Be < V && 0 > i(Nt, Xt)
            ? ((T[q] = Nt), (T[Be] = L), (q = Be))
            : ((T[q] = Xt), (T[ht] = L), (q = ht));
        else if (Be < V && 0 > i(Nt, L)) (T[q] = Nt), (T[Be] = L), (q = Be);
        else break e;
      }
    }
    return $;
  }
  function i(T, $) {
    var L = T.sortIndex - $.sortIndex;
    return L !== 0 ? L : T.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    y = !1,
    v = !1,
    _ = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= T)
        r(u), ($.sortIndex = $.expirationTime), t(l, $);
      else break;
      $ = n(u);
    }
  }
  function w(T) {
    if (((_ = !1), m(T), !v))
      if (n(l) !== null) (v = !0), ji(k);
      else {
        var $ = n(u);
        $ !== null && zn(w, $.startTime - T);
      }
  }
  function k(T, $) {
    (v = !1), _ && ((_ = !1), p(C), (C = -1)), (y = !0);
    var L = d;
    try {
      for (
        m($), f = n(l);
        f !== null && (!(f.expirationTime > $) || (T && !xe()));

      ) {
        var q = f.callback;
        if (typeof q == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var V = q(f.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof V == "function" ? (f.callback = V) : f === n(l) && r(l),
            m($);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Fn = !0;
      else {
        var ht = n(u);
        ht !== null && zn(w, ht.startTime - $), (Fn = !1);
      }
      return Fn;
    } finally {
      (f = null), (d = L), (y = !1);
    }
  }
  var E = !1,
    x = null,
    C = -1,
    I = 5,
    N = -1;
  function xe() {
    return !(e.unstable_now() - N < I);
  }
  function Nn() {
    if (x !== null) {
      var T = e.unstable_now();
      N = T;
      var $ = !0;
      try {
        $ = x(!0, T);
      } finally {
        $ ? Dn() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var Dn;
  if (typeof h == "function")
    Dn = function () {
      h(Nn);
    };
  else if (typeof MessageChannel < "u") {
    var Xs = new MessageChannel(),
      el = Xs.port2;
    (Xs.port1.onmessage = Nn),
      (Dn = function () {
        el.postMessage(null);
      });
  } else
    Dn = function () {
      S(Nn, 0);
    };
  function ji(T) {
    (x = T), E || ((E = !0), Dn());
  }
  function zn(T, $) {
    C = S(function () {
      T(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), ji(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = d;
      }
      var L = d;
      d = $;
      try {
        return T();
      } finally {
        d = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, $) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var L = d;
      d = T;
      try {
        return $();
      } finally {
        d = L;
      }
    }),
    (e.unstable_scheduleCallback = function (T, $, L) {
      var q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? q + L : q))
          : (L = q),
        T)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = L + V),
        (T = {
          id: c++,
          callback: $,
          priorityLevel: T,
          startTime: L,
          expirationTime: V,
          sortIndex: -1,
        }),
        L > q
          ? ((T.sortIndex = L),
            t(u, T),
            n(l) === null &&
              T === n(u) &&
              (_ ? (p(C), (C = -1)) : (_ = !0), zn(w, L - q)))
          : ((T.sortIndex = V), t(l, T), v || y || ((v = !0), ji(k))),
        T
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (T) {
      var $ = d;
      return function () {
        var L = d;
        d = $;
        try {
          return T.apply(this, arguments);
        } finally {
          d = L;
        }
      };
    });
})(xp);
Cp.exports = xp;
var Sv = Cp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op = W,
  Je = Sv;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pp = new Set(),
  ls = {};
function yr(e, t) {
  li(e, t), li(e + "Capture", t);
}
function li(e, t) {
  for (ls[e] = t, e = 0; e < t.length; e++) Pp.add(t[e]);
}
var qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  kv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bd = {},
  Qd = {};
function Ev(e) {
  return Gl.call(Qd, e)
    ? !0
    : Gl.call(Bd, e)
    ? !1
    : kv.test(e)
    ? (Qd[e] = !0)
    : ((Bd[e] = !0), !1);
}
function Cv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xv(e, t, n, r) {
  if (t === null || typeof t > "u" || Cv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    we[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  we[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  we[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  we[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    we[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  we[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  we[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  we[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  we[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ec = /[\-:]([a-z])/g;
function Cc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ec, Cc);
    we[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ec, Cc);
    we[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ec, Cc);
  we[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  we[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  we[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xc(e, t, n, r) {
  var i = we.hasOwnProperty(t) ? we[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xv(t, n, i, r) && (n = null),
    r || i === null
      ? Ev(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  no = Symbol.for("react.element"),
  Pr = Symbol.for("react.portal"),
  br = Symbol.for("react.fragment"),
  Oc = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  bp = Symbol.for("react.provider"),
  Tp = Symbol.for("react.context"),
  Pc = Symbol.for("react.forward_ref"),
  Yl = Symbol.for("react.suspense"),
  Xl = Symbol.for("react.suspense_list"),
  bc = Symbol.for("react.memo"),
  sn = Symbol.for("react.lazy"),
  Rp = Symbol.for("react.offscreen"),
  Hd = Symbol.iterator;
function Ai(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hd && e[Hd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  sl;
function Bi(e) {
  if (sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sl = (t && t[1]) || "";
    }
  return (
    `
` +
    sl +
    e
  );
}
var ol = !1;
function al(e, t) {
  if (!e || ol) return "";
  ol = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (ol = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Bi(e) : "";
}
function Ov(e) {
  switch (e.tag) {
    case 5:
      return Bi(e.type);
    case 16:
      return Bi("Lazy");
    case 13:
      return Bi("Suspense");
    case 19:
      return Bi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = al(e.type, !1)), e;
    case 11:
      return (e = al(e.type.render, !1)), e;
    case 1:
      return (e = al(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case br:
      return "Fragment";
    case Pr:
      return "Portal";
    case Jl:
      return "Profiler";
    case Oc:
      return "StrictMode";
    case Yl:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tp:
        return (e.displayName || "Context") + ".Consumer";
      case bp:
        return (e._context.displayName || "Context") + ".Provider";
      case Pc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bc:
        return (
          (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo"
        );
      case sn:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function Pv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === Oc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Tn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function jp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function bv(e) {
  var t = jp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ro(e) {
  e._valueTracker || (e._valueTracker = bv(e));
}
function $p(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = jp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ho(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eu(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Tn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ap(e, t) {
  (t = t.checked), t != null && xc(e, "checked", t, !1);
}
function tu(e, t) {
  Ap(e, t);
  var n = Tn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? nu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && nu(e, t.type, Tn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function nu(e, t, n) {
  (t !== "number" || Ho(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qi = Array.isArray;
function Mr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ru(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Qi(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Tn(n) };
}
function Ip(e, t) {
  var n = Tn(t.value),
    r = Tn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Kd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function iu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var io,
  Np = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        io = io || document.createElement("div"),
          io.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = io.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function us(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ji = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ji).forEach(function (e) {
  Tv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ji[t] = Ji[e]);
  });
});
function Dp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ji.hasOwnProperty(e) && Ji[e])
    ? ("" + t).trim()
    : t + "px";
}
function zp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Dp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Rv = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function su(e, t) {
  if (t) {
    if (Rv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function ou(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var au = null;
function Tc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var lu = null,
  Ur = null,
  Br = null;
function Gd(e) {
  if ((e = Vs(e))) {
    if (typeof lu != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = ja(t)), lu(e.stateNode, e.type, t));
  }
}
function Fp(e) {
  Ur ? (Br ? Br.push(e) : (Br = [e])) : (Ur = e);
}
function Mp() {
  if (Ur) {
    var e = Ur,
      t = Br;
    if (((Br = Ur = null), Gd(e), t)) for (e = 0; e < t.length; e++) Gd(t[e]);
  }
}
function Up(e, t) {
  return e(t);
}
function Bp() {}
var ll = !1;
function Qp(e, t, n) {
  if (ll) return e(t, n);
  ll = !0;
  try {
    return Up(e, t, n);
  } finally {
    (ll = !1), (Ur !== null || Br !== null) && (Bp(), Mp());
  }
}
function cs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ja(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var uu = !1;
if (qt)
  try {
    var Ii = {};
    Object.defineProperty(Ii, "passive", {
      get: function () {
        uu = !0;
      },
    }),
      window.addEventListener("test", Ii, Ii),
      window.removeEventListener("test", Ii, Ii);
  } catch {
    uu = !1;
  }
function jv(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Yi = !1,
  Wo = null,
  qo = !1,
  cu = null,
  $v = {
    onError: function (e) {
      (Yi = !0), (Wo = e);
    },
  };
function Av(e, t, n, r, i, s, o, a, l) {
  (Yi = !1), (Wo = null), jv.apply($v, arguments);
}
function Iv(e, t, n, r, i, s, o, a, l) {
  if ((Av.apply(this, arguments), Yi)) {
    if (Yi) {
      var u = Wo;
      (Yi = !1), (Wo = null);
    } else throw Error(P(198));
    qo || ((qo = !0), (cu = u));
  }
}
function gr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Jd(e) {
  if (gr(e) !== e) throw Error(P(188));
}
function Lv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gr(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Jd(i), e;
        if (s === r) return Jd(i), t;
        s = s.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Wp(e) {
  return (e = Lv(e)), e !== null ? qp(e) : null;
}
function qp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vp = Je.unstable_scheduleCallback,
  Yd = Je.unstable_cancelCallback,
  Nv = Je.unstable_shouldYield,
  Dv = Je.unstable_requestPaint,
  oe = Je.unstable_now,
  zv = Je.unstable_getCurrentPriorityLevel,
  Rc = Je.unstable_ImmediatePriority,
  Kp = Je.unstable_UserBlockingPriority,
  Vo = Je.unstable_NormalPriority,
  Fv = Je.unstable_LowPriority,
  Gp = Je.unstable_IdlePriority,
  Pa = null,
  It = null;
function Mv(e) {
  if (It && typeof It.onCommitFiberRoot == "function")
    try {
      It.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : Qv,
  Uv = Math.log,
  Bv = Math.LN2;
function Qv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uv(e) / Bv) | 0)) | 0;
}
var so = 64,
  oo = 4194304;
function Hi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ko(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Hi(a)) : ((s &= o), s !== 0 && (r = Hi(s)));
  } else (o = n & ~i), o !== 0 ? (r = Hi(o)) : s !== 0 && (r = Hi(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Hv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - kt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = Hv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function du(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jp() {
  var e = so;
  return (so <<= 1), !(so & 4194240) && (so = 64), e;
}
function ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ws(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function qv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - kt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function jc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var H = 0;
function Yp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xp,
  $c,
  Zp,
  em,
  tm,
  fu = !1,
  ao = [],
  Sn = null,
  kn = null,
  En = null,
  ds = new Map(),
  fs = new Map(),
  ln = [],
  Vv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      kn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      ds.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fs.delete(t.pointerId);
  }
}
function Li(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Vs(t)), t !== null && $c(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Kv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Sn = Li(Sn, e, t, n, r, i)), !0;
    case "dragenter":
      return (kn = Li(kn, e, t, n, r, i)), !0;
    case "mouseover":
      return (En = Li(En, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ds.set(s, Li(ds.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), fs.set(s, Li(fs.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function nm(e) {
  var t = Vn(e.target);
  if (t !== null) {
    var n = gr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hp(n)), t !== null)) {
          (e.blockedOn = t),
            tm(e.priority, function () {
              Zp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function bo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (au = r), n.target.dispatchEvent(r), (au = null);
    } else return (t = Vs(n)), t !== null && $c(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zd(e, t, n) {
  bo(e) && n.delete(t);
}
function Gv() {
  (fu = !1),
    Sn !== null && bo(Sn) && (Sn = null),
    kn !== null && bo(kn) && (kn = null),
    En !== null && bo(En) && (En = null),
    ds.forEach(Zd),
    fs.forEach(Zd);
}
function Ni(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fu ||
      ((fu = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Gv)));
}
function hs(e) {
  function t(i) {
    return Ni(i, e);
  }
  if (0 < ao.length) {
    Ni(ao[0], e);
    for (var n = 1; n < ao.length; n++) {
      var r = ao[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Sn !== null && Ni(Sn, e),
      kn !== null && Ni(kn, e),
      En !== null && Ni(En, e),
      ds.forEach(t),
      fs.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    nm(n), n.blockedOn === null && ln.shift();
}
var Qr = Yt.ReactCurrentBatchConfig,
  Go = !0;
function Jv(e, t, n, r) {
  var i = H,
    s = Qr.transition;
  Qr.transition = null;
  try {
    (H = 1), Ac(e, t, n, r);
  } finally {
    (H = i), (Qr.transition = s);
  }
}
function Yv(e, t, n, r) {
  var i = H,
    s = Qr.transition;
  Qr.transition = null;
  try {
    (H = 4), Ac(e, t, n, r);
  } finally {
    (H = i), (Qr.transition = s);
  }
}
function Ac(e, t, n, r) {
  if (Go) {
    var i = hu(e, t, n, r);
    if (i === null) wl(e, t, r, Jo, n), Xd(e, r);
    else if (Kv(i, e, t, n, r)) r.stopPropagation();
    else if ((Xd(e, r), t & 4 && -1 < Vv.indexOf(e))) {
      for (; i !== null; ) {
        var s = Vs(i);
        if (
          (s !== null && Xp(s),
          (s = hu(e, t, n, r)),
          s === null && wl(e, t, r, Jo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else wl(e, t, r, null, n);
  }
}
var Jo = null;
function hu(e, t, n, r) {
  if (((Jo = null), (e = Tc(r)), (e = Vn(e)), e !== null))
    if (((t = gr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Jo = e), null;
}
function rm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zv()) {
        case Rc:
          return 1;
        case Kp:
          return 4;
        case Vo:
        case Fv:
          return 16;
        case Gp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  Ic = null,
  To = null;
function im() {
  if (To) return To;
  var e,
    t = Ic,
    n = t.length,
    r,
    i = "value" in wn ? wn.value : wn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (To = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ro(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function lo() {
  return !0;
}
function ef() {
  return !1;
}
function et(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? lo
        : ef),
      (this.isPropagationStopped = ef),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = lo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = lo));
      },
      persist: function () {},
      isPersistent: lo,
    }),
    t
  );
}
var Oi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Lc = et(Oi),
  qs = re({}, Oi, { view: 0, detail: 0 }),
  Xv = et(qs),
  cl,
  dl,
  Di,
  ba = re({}, qs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Di &&
            (Di && e.type === "mousemove"
              ? ((cl = e.screenX - Di.screenX), (dl = e.screenY - Di.screenY))
              : (dl = cl = 0),
            (Di = e)),
          cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : dl;
    },
  }),
  tf = et(ba),
  Zv = re({}, ba, { dataTransfer: 0 }),
  e0 = et(Zv),
  t0 = re({}, qs, { relatedTarget: 0 }),
  fl = et(t0),
  n0 = re({}, Oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  r0 = et(n0),
  i0 = re({}, Oi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  s0 = et(i0),
  o0 = re({}, Oi, { data: 0 }),
  nf = et(o0),
  a0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  l0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  u0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function c0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = u0[e]) ? !!t[e] : !1;
}
function Nc() {
  return c0;
}
var d0 = re({}, qs, {
    key: function (e) {
      if (e.key) {
        var t = a0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? l0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nc,
    charCode: function (e) {
      return e.type === "keypress" ? Ro(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ro(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  f0 = et(d0),
  h0 = re({}, ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  rf = et(h0),
  p0 = re({}, qs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nc,
  }),
  m0 = et(p0),
  y0 = re({}, Oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g0 = et(y0),
  v0 = re({}, ba, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  w0 = et(v0),
  _0 = [9, 13, 27, 32],
  Dc = qt && "CompositionEvent" in window,
  Xi = null;
qt && "documentMode" in document && (Xi = document.documentMode);
var S0 = qt && "TextEvent" in window && !Xi,
  sm = qt && (!Dc || (Xi && 8 < Xi && 11 >= Xi)),
  sf = " ",
  of = !1;
function om(e, t) {
  switch (e) {
    case "keyup":
      return _0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function am(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tr = !1;
function k0(e, t) {
  switch (e) {
    case "compositionend":
      return am(t);
    case "keypress":
      return t.which !== 32 ? null : ((of = !0), sf);
    case "textInput":
      return (e = t.data), e === sf && of ? null : e;
    default:
      return null;
  }
}
function E0(e, t) {
  if (Tr)
    return e === "compositionend" || (!Dc && om(e, t))
      ? ((e = im()), (To = Ic = wn = null), (Tr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var C0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function af(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!C0[e.type] : t === "textarea";
}
function lm(e, t, n, r) {
  Fp(r),
    (t = Yo(t, "onChange")),
    0 < t.length &&
      ((n = new Lc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zi = null,
  ps = null;
function x0(e) {
  wm(e, 0);
}
function Ta(e) {
  var t = $r(e);
  if ($p(t)) return e;
}
function O0(e, t) {
  if (e === "change") return t;
}
var um = !1;
if (qt) {
  var hl;
  if (qt) {
    var pl = "oninput" in document;
    if (!pl) {
      var lf = document.createElement("div");
      lf.setAttribute("oninput", "return;"),
        (pl = typeof lf.oninput == "function");
    }
    hl = pl;
  } else hl = !1;
  um = hl && (!document.documentMode || 9 < document.documentMode);
}
function uf() {
  Zi && (Zi.detachEvent("onpropertychange", cm), (ps = Zi = null));
}
function cm(e) {
  if (e.propertyName === "value" && Ta(ps)) {
    var t = [];
    lm(t, ps, e, Tc(e)), Qp(x0, t);
  }
}
function P0(e, t, n) {
  e === "focusin"
    ? (uf(), (Zi = t), (ps = n), Zi.attachEvent("onpropertychange", cm))
    : e === "focusout" && uf();
}
function b0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ta(ps);
}
function T0(e, t) {
  if (e === "click") return Ta(t);
}
function R0(e, t) {
  if (e === "input" || e === "change") return Ta(t);
}
function j0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : j0;
function ms(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Gl.call(t, i) || !xt(e[i], t[i])) return !1;
  }
  return !0;
}
function cf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function df(e, t) {
  var n = cf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cf(n);
  }
}
function dm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? dm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function fm() {
  for (var e = window, t = Ho(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ho(e.document);
  }
  return t;
}
function zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $0(e) {
  var t = fm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = df(n, s));
        var o = df(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var A0 = qt && "documentMode" in document && 11 >= document.documentMode,
  Rr = null,
  pu = null,
  es = null,
  mu = !1;
function ff(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mu ||
    Rr == null ||
    Rr !== Ho(r) ||
    ((r = Rr),
    "selectionStart" in r && zc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (es && ms(es, r)) ||
      ((es = r),
      (r = Yo(pu, "onSelect")),
      0 < r.length &&
        ((t = new Lc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rr))));
}
function uo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var jr = {
    animationend: uo("Animation", "AnimationEnd"),
    animationiteration: uo("Animation", "AnimationIteration"),
    animationstart: uo("Animation", "AnimationStart"),
    transitionend: uo("Transition", "TransitionEnd"),
  },
  ml = {},
  hm = {};
qt &&
  ((hm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete jr.animationend.animation,
    delete jr.animationiteration.animation,
    delete jr.animationstart.animation),
  "TransitionEvent" in window || delete jr.transitionend.transition);
function Ra(e) {
  if (ml[e]) return ml[e];
  if (!jr[e]) return e;
  var t = jr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hm) return (ml[e] = t[n]);
  return e;
}
var pm = Ra("animationend"),
  mm = Ra("animationiteration"),
  ym = Ra("animationstart"),
  gm = Ra("transitionend"),
  vm = new Map(),
  hf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function An(e, t) {
  vm.set(e, t), yr(t, [e]);
}
for (var yl = 0; yl < hf.length; yl++) {
  var gl = hf[yl],
    I0 = gl.toLowerCase(),
    L0 = gl[0].toUpperCase() + gl.slice(1);
  An(I0, "on" + L0);
}
An(pm, "onAnimationEnd");
An(mm, "onAnimationIteration");
An(ym, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(gm, "onTransitionEnd");
li("onMouseEnter", ["mouseout", "mouseover"]);
li("onMouseLeave", ["mouseout", "mouseover"]);
li("onPointerEnter", ["pointerout", "pointerover"]);
li("onPointerLeave", ["pointerout", "pointerover"]);
yr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  N0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));
function pf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Iv(r, t, void 0, e), (e.currentTarget = null);
}
function wm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          pf(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          pf(i, a, u), (s = l);
        }
    }
  }
  if (qo) throw ((e = cu), (qo = !1), (cu = null), e);
}
function Y(e, t) {
  var n = t[_u];
  n === void 0 && (n = t[_u] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_m(t, e, 2, !1), n.add(r));
}
function vl(e, t, n) {
  var r = 0;
  t && (r |= 4), _m(n, e, r, t);
}
var co = "_reactListening" + Math.random().toString(36).slice(2);
function ys(e) {
  if (!e[co]) {
    (e[co] = !0),
      Pp.forEach(function (n) {
        n !== "selectionchange" && (N0.has(n) || vl(n, !1, e), vl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[co] || ((t[co] = !0), vl("selectionchange", !1, t));
  }
}
function _m(e, t, n, r) {
  switch (rm(t)) {
    case 1:
      var i = Jv;
      break;
    case 4:
      i = Yv;
      break;
    default:
      i = Ac;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !uu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function wl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Vn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Qp(function () {
    var u = s,
      c = Tc(n),
      f = [];
    e: {
      var d = vm.get(e);
      if (d !== void 0) {
        var y = Lc,
          v = e;
        switch (e) {
          case "keypress":
            if (Ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = f0;
            break;
          case "focusin":
            (v = "focus"), (y = fl);
            break;
          case "focusout":
            (v = "blur"), (y = fl);
            break;
          case "beforeblur":
          case "afterblur":
            y = fl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = tf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = e0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = m0;
            break;
          case pm:
          case mm:
          case ym:
            y = r0;
            break;
          case gm:
            y = g0;
            break;
          case "scroll":
            y = Xv;
            break;
          case "wheel":
            y = w0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = s0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = rf;
        }
        var _ = (t & 4) !== 0,
          S = !_ && e === "scroll",
          p = _ ? (d !== null ? d + "Capture" : null) : d;
        _ = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = cs(h, p)), w != null && _.push(gs(h, w, m)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < _.length &&
          ((d = new y(d, v, null, n, c)), f.push({ event: d, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          d &&
            n !== au &&
            (v = n.relatedTarget || n.fromElement) &&
            (Vn(v) || v[Vt]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Vn(v) : null),
              v !== null &&
                ((S = gr(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((_ = tf),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = rf),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (S = y == null ? d : $r(y)),
            (m = v == null ? d : $r(v)),
            (d = new _(w, h + "leave", y, n, c)),
            (d.target = S),
            (d.relatedTarget = m),
            (w = null),
            Vn(c) === u &&
              ((_ = new _(p, h + "enter", v, n, c)),
              (_.target = m),
              (_.relatedTarget = S),
              (w = _)),
            (S = w),
            y && v)
          )
            t: {
              for (_ = y, p = v, h = 0, m = _; m; m = _r(m)) h++;
              for (m = 0, w = p; w; w = _r(w)) m++;
              for (; 0 < h - m; ) (_ = _r(_)), h--;
              for (; 0 < m - h; ) (p = _r(p)), m--;
              for (; h--; ) {
                if (_ === p || (p !== null && _ === p.alternate)) break t;
                (_ = _r(_)), (p = _r(p));
              }
              _ = null;
            }
          else _ = null;
          y !== null && mf(f, d, y, _, !1),
            v !== null && S !== null && mf(f, S, v, _, !0);
        }
      }
      e: {
        if (
          ((d = u ? $r(u) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === "select" || (y === "input" && d.type === "file"))
        )
          var k = O0;
        else if (af(d))
          if (um) k = R0;
          else {
            k = b0;
            var E = P0;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (k = T0);
        if (k && (k = k(e, u))) {
          lm(f, k, n, c);
          break e;
        }
        E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            nu(d, "number", d.value);
      }
      switch (((E = u ? $r(u) : window), e)) {
        case "focusin":
          (af(E) || E.contentEditable === "true") &&
            ((Rr = E), (pu = u), (es = null));
          break;
        case "focusout":
          es = pu = Rr = null;
          break;
        case "mousedown":
          mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mu = !1), ff(f, n, c);
          break;
        case "selectionchange":
          if (A0) break;
        case "keydown":
        case "keyup":
          ff(f, n, c);
      }
      var x;
      if (Dc)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Tr
          ? om(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (sm &&
          n.locale !== "ko" &&
          (Tr || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Tr && (x = im())
            : ((wn = c),
              (Ic = "value" in wn ? wn.value : wn.textContent),
              (Tr = !0))),
        (E = Yo(u, C)),
        0 < E.length &&
          ((C = new nf(C, e, null, n, c)),
          f.push({ event: C, listeners: E }),
          x ? (C.data = x) : ((x = am(n)), x !== null && (C.data = x)))),
        (x = S0 ? k0(e, n) : E0(e, n)) &&
          ((u = Yo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new nf("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    wm(f, t);
  });
}
function gs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = cs(e, n)),
      s != null && r.unshift(gs(e, s, i)),
      (s = cs(e, t)),
      s != null && r.push(gs(e, s, i))),
      (e = e.return);
  }
  return r;
}
function _r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mf(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = cs(n, s)), l != null && o.unshift(gs(n, l, a)))
        : i || ((l = cs(n, s)), l != null && o.push(gs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var D0 = /\r\n?/g,
  z0 = /\u0000|\uFFFD/g;
function yf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      D0,
      `
`
    )
    .replace(z0, "");
}
function fo(e, t, n) {
  if (((t = yf(t)), yf(e) !== t && n)) throw Error(P(425));
}
function Xo() {}
var yu = null,
  gu = null;
function vu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wu = typeof setTimeout == "function" ? setTimeout : void 0,
  F0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gf = typeof Promise == "function" ? Promise : void 0,
  M0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gf < "u"
      ? function (e) {
          return gf.resolve(null).then(e).catch(U0);
        }
      : wu;
function U0(e) {
  setTimeout(function () {
    throw e;
  });
}
function _l(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), hs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  hs(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pi = Math.random().toString(36).slice(2),
  At = "__reactFiber$" + Pi,
  vs = "__reactProps$" + Pi,
  Vt = "__reactContainer$" + Pi,
  _u = "__reactEvents$" + Pi,
  B0 = "__reactListeners$" + Pi,
  Q0 = "__reactHandles$" + Pi;
function Vn(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[At])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vf(e); e !== null; ) {
          if ((n = e[At])) return n;
          e = vf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Vs(e) {
  return (
    (e = e[At] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $r(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function ja(e) {
  return e[vs] || null;
}
var Su = [],
  Ar = -1;
function In(e) {
  return { current: e };
}
function Z(e) {
  0 > Ar || ((e.current = Su[Ar]), (Su[Ar] = null), Ar--);
}
function J(e, t) {
  Ar++, (Su[Ar] = e.current), (e.current = t);
}
var Rn = {},
  Ce = In(Rn),
  ze = In(!1),
  ur = Rn;
function ui(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Zo() {
  Z(ze), Z(Ce);
}
function wf(e, t, n) {
  if (Ce.current !== Rn) throw Error(P(168));
  J(Ce, t), J(ze, n);
}
function Sm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, Pv(e) || "Unknown", i));
  return re({}, n, r);
}
function ea(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rn),
    (ur = Ce.current),
    J(Ce, e),
    J(ze, ze.current),
    !0
  );
}
function _f(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Sm(e, t, ur)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(ze),
      Z(Ce),
      J(Ce, e))
    : Z(ze),
    J(ze, n);
}
var Mt = null,
  $a = !1,
  Sl = !1;
function km(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function H0(e) {
  ($a = !0), km(e);
}
function Ln() {
  if (!Sl && Mt !== null) {
    Sl = !0;
    var e = 0,
      t = H;
    try {
      var n = Mt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mt = null), ($a = !1);
    } catch (i) {
      throw (Mt !== null && (Mt = Mt.slice(e + 1)), Vp(Rc, Ln), i);
    } finally {
      (H = t), (Sl = !1);
    }
  }
  return null;
}
var Ir = [],
  Lr = 0,
  ta = null,
  na = 0,
  st = [],
  ot = 0,
  cr = null,
  Bt = 1,
  Qt = "";
function Bn(e, t) {
  (Ir[Lr++] = na), (Ir[Lr++] = ta), (ta = e), (na = t);
}
function Em(e, t, n) {
  (st[ot++] = Bt), (st[ot++] = Qt), (st[ot++] = cr), (cr = e);
  var r = Bt;
  e = Qt;
  var i = 32 - kt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - kt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Bt = (1 << (32 - kt(t) + i)) | (n << i) | r),
      (Qt = s + e);
  } else (Bt = (1 << s) | (n << i) | r), (Qt = e);
}
function Fc(e) {
  e.return !== null && (Bn(e, 1), Em(e, 1, 0));
}
function Mc(e) {
  for (; e === ta; )
    (ta = Ir[--Lr]), (Ir[Lr] = null), (na = Ir[--Lr]), (Ir[Lr] = null);
  for (; e === cr; )
    (cr = st[--ot]),
      (st[ot] = null),
      (Qt = st[--ot]),
      (st[ot] = null),
      (Bt = st[--ot]),
      (st[ot] = null);
}
var Ge = null,
  Ve = null,
  ee = !1,
  _t = null;
function Cm(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Sf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (Ve = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (Ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cr !== null ? { id: Bt, overflow: Qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (Ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ku(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eu(e) {
  if (ee) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Sf(e, t)) {
        if (ku(e)) throw Error(P(418));
        t = Cn(n.nextSibling);
        var r = Ge;
        t && Sf(e, t)
          ? Cm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ge = e));
      }
    } else {
      if (ku(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ge = e);
    }
  }
}
function kf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function ho(e) {
  if (e !== Ge) return !1;
  if (!ee) return kf(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vu(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (ku(e)) throw (xm(), Error(P(418)));
    for (; t; ) Cm(e, t), (t = Cn(t.nextSibling));
  }
  if ((kf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = Ge ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function xm() {
  for (var e = Ve; e; ) e = Cn(e.nextSibling);
}
function ci() {
  (Ve = Ge = null), (ee = !1);
}
function Uc(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
var W0 = Yt.ReactCurrentBatchConfig;
function yt(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ra = In(null),
  ia = null,
  Nr = null,
  Bc = null;
function Qc() {
  Bc = Nr = ia = null;
}
function Hc(e) {
  var t = ra.current;
  Z(ra), (e._currentValue = t);
}
function Cu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Hr(e, t) {
  (ia = e),
    (Bc = Nr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (Bc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nr === null)) {
      if (ia === null) throw Error(P(308));
      (Nr = e), (ia.dependencies = { lanes: 0, firstContext: e });
    } else Nr = Nr.next = e;
  return t;
}
var Kn = null;
function Wc(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
function Om(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var on = !1;
function qc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Pm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function jo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jc(e, n);
  }
}
function Ef(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function sa(e, t, n, r) {
  var i = e.updateQueue;
  on = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var d = a.lane,
        y = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            _ = a;
          switch (((d = t), (y = n), _.tag)) {
            case 1:
              if (((v = _.payload), typeof v == "function")) {
                f = v.call(y, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = _.payload),
                (d = typeof v == "function" ? v.call(y, f, d) : v),
                d == null)
              )
                break e;
              f = re({}, f, d);
              break e;
            case 2:
              on = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (y = {
          eventTime: y,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = f)) : (c = c.next = y),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (fr |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Cf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var bm = new Op.Component().refs;
function xu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Aa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      i = Pn(e),
      s = Ht(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = xn(e, s, i)),
      t !== null && (Et(t, e, i, r), jo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      i = Pn(e),
      s = Ht(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = xn(e, s, i)),
      t !== null && (Et(t, e, i, r), jo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Pn(e),
      i = Ht(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = xn(e, i, r)),
      t !== null && (Et(t, e, r, n), jo(t, e, r));
  },
};
function xf(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ms(n, r) || !ms(i, s)
      : !0
  );
}
function Tm(e, t, n) {
  var r = !1,
    i = Rn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ut(s))
      : ((i = Fe(t) ? ur : Ce.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ui(e, i) : Rn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Aa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Of(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Aa.enqueueReplaceState(t, t.state, null);
}
function Ou(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = bm), qc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ut(s))
    : ((s = Fe(t) ? ur : Ce.current), (i.context = ui(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (xu(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Aa.enqueueReplaceState(i, i.state, null),
      sa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            a === bm && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function po(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Pf(e) {
  var t = e._init;
  return t(e._payload);
}
function Rm(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = bn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = bl(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, w) {
    var k = m.type;
    return k === br
      ? c(p, h, m.props.children, w, m.key)
      : h !== null &&
        (h.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === sn &&
            Pf(k) === h.type))
      ? ((w = i(h, m.props)), (w.ref = zi(p, h, m)), (w.return = p), w)
      : ((w = Do(m.type, m.key, m.props, null, p.mode, w)),
        (w.ref = zi(p, h, m)),
        (w.return = p),
        w);
  }
  function u(p, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Tl(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, w, k) {
    return h === null || h.tag !== 7
      ? ((h = or(m, p.mode, w, k)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = bl("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case no:
          return (
            (m = Do(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = zi(p, null, h)),
            (m.return = p),
            m
          );
        case Pr:
          return (h = Tl(h, p.mode, m)), (h.return = p), h;
        case sn:
          var w = h._init;
          return f(p, w(h._payload), m);
      }
      if (Qi(h) || Ai(h))
        return (h = or(h, p.mode, m, null)), (h.return = p), h;
      po(p, h);
    }
    return null;
  }
  function d(p, h, m, w) {
    var k = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : a(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case no:
          return m.key === k ? l(p, h, m, w) : null;
        case Pr:
          return m.key === k ? u(p, h, m, w) : null;
        case sn:
          return (k = m._init), d(p, h, k(m._payload), w);
      }
      if (Qi(m) || Ai(m)) return k !== null ? null : c(p, h, m, w, null);
      po(p, m);
    }
    return null;
  }
  function y(p, h, m, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), a(h, p, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case no:
          return (p = p.get(w.key === null ? m : w.key) || null), l(h, p, w, k);
        case Pr:
          return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, k);
        case sn:
          var E = w._init;
          return y(p, h, m, E(w._payload), k);
      }
      if (Qi(w) || Ai(w)) return (p = p.get(m) || null), c(h, p, w, k, null);
      po(h, w);
    }
    return null;
  }
  function v(p, h, m, w) {
    for (
      var k = null, E = null, x = h, C = (h = 0), I = null;
      x !== null && C < m.length;
      C++
    ) {
      x.index > C ? ((I = x), (x = null)) : (I = x.sibling);
      var N = d(p, x, m[C], w);
      if (N === null) {
        x === null && (x = I);
        break;
      }
      e && x && N.alternate === null && t(p, x),
        (h = s(N, h, C)),
        E === null ? (k = N) : (E.sibling = N),
        (E = N),
        (x = I);
    }
    if (C === m.length) return n(p, x), ee && Bn(p, C), k;
    if (x === null) {
      for (; C < m.length; C++)
        (x = f(p, m[C], w)),
          x !== null &&
            ((h = s(x, h, C)), E === null ? (k = x) : (E.sibling = x), (E = x));
      return ee && Bn(p, C), k;
    }
    for (x = r(p, x); C < m.length; C++)
      (I = y(x, p, C, m[C], w)),
        I !== null &&
          (e && I.alternate !== null && x.delete(I.key === null ? C : I.key),
          (h = s(I, h, C)),
          E === null ? (k = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        x.forEach(function (xe) {
          return t(p, xe);
        }),
      ee && Bn(p, C),
      k
    );
  }
  function _(p, h, m, w) {
    var k = Ai(m);
    if (typeof k != "function") throw Error(P(150));
    if (((m = k.call(m)), m == null)) throw Error(P(151));
    for (
      var E = (k = null), x = h, C = (h = 0), I = null, N = m.next();
      x !== null && !N.done;
      C++, N = m.next()
    ) {
      x.index > C ? ((I = x), (x = null)) : (I = x.sibling);
      var xe = d(p, x, N.value, w);
      if (xe === null) {
        x === null && (x = I);
        break;
      }
      e && x && xe.alternate === null && t(p, x),
        (h = s(xe, h, C)),
        E === null ? (k = xe) : (E.sibling = xe),
        (E = xe),
        (x = I);
    }
    if (N.done) return n(p, x), ee && Bn(p, C), k;
    if (x === null) {
      for (; !N.done; C++, N = m.next())
        (N = f(p, N.value, w)),
          N !== null &&
            ((h = s(N, h, C)), E === null ? (k = N) : (E.sibling = N), (E = N));
      return ee && Bn(p, C), k;
    }
    for (x = r(p, x); !N.done; C++, N = m.next())
      (N = y(x, p, C, N.value, w)),
        N !== null &&
          (e && N.alternate !== null && x.delete(N.key === null ? C : N.key),
          (h = s(N, h, C)),
          E === null ? (k = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        x.forEach(function (Nn) {
          return t(p, Nn);
        }),
      ee && Bn(p, C),
      k
    );
  }
  function S(p, h, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === br &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case no:
          e: {
            for (var k = m.key, E = h; E !== null; ) {
              if (E.key === k) {
                if (((k = m.type), k === br)) {
                  if (E.tag === 7) {
                    n(p, E.sibling),
                      (h = i(E, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === sn &&
                    Pf(k) === E.type)
                ) {
                  n(p, E.sibling),
                    (h = i(E, m.props)),
                    (h.ref = zi(p, E, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            m.type === br
              ? ((h = or(m.props.children, p.mode, w, m.key)),
                (h.return = p),
                (p = h))
              : ((w = Do(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = zi(p, h, m)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case Pr:
          e: {
            for (E = m.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Tl(m, p.mode, w)), (h.return = p), (p = h);
          }
          return o(p);
        case sn:
          return (E = m._init), S(p, h, E(m._payload), w);
      }
      if (Qi(m)) return v(p, h, m, w);
      if (Ai(m)) return _(p, h, m, w);
      po(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = bl(m, p.mode, w)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return S;
}
var di = Rm(!0),
  jm = Rm(!1),
  Ks = {},
  Lt = In(Ks),
  ws = In(Ks),
  _s = In(Ks);
function Gn(e) {
  if (e === Ks) throw Error(P(174));
  return e;
}
function Vc(e, t) {
  switch ((J(_s, t), J(ws, e), J(Lt, Ks), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : iu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = iu(t, e));
  }
  Z(Lt), J(Lt, t);
}
function fi() {
  Z(Lt), Z(ws), Z(_s);
}
function $m(e) {
  Gn(_s.current);
  var t = Gn(Lt.current),
    n = iu(t, e.type);
  t !== n && (J(ws, e), J(Lt, n));
}
function Kc(e) {
  ws.current === e && (Z(Lt), Z(ws));
}
var te = In(0);
function oa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var kl = [];
function Gc() {
  for (var e = 0; e < kl.length; e++)
    kl[e]._workInProgressVersionPrimary = null;
  kl.length = 0;
}
var $o = Yt.ReactCurrentDispatcher,
  El = Yt.ReactCurrentBatchConfig,
  dr = 0,
  ne = null,
  ue = null,
  he = null,
  aa = !1,
  ts = !1,
  Ss = 0,
  q0 = 0;
function _e() {
  throw Error(P(321));
}
function Jc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function Yc(e, t, n, r, i, s) {
  if (
    ((dr = s),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($o.current = e === null || e.memoizedState === null ? J0 : Y0),
    (e = n(r, i)),
    ts)
  ) {
    s = 0;
    do {
      if (((ts = !1), (Ss = 0), 25 <= s)) throw Error(P(301));
      (s += 1),
        (he = ue = null),
        (t.updateQueue = null),
        ($o.current = X0),
        (e = n(r, i));
    } while (ts);
  }
  if (
    (($o.current = la),
    (t = ue !== null && ue.next !== null),
    (dr = 0),
    (he = ue = ne = null),
    (aa = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Xc() {
  var e = Ss !== 0;
  return (Ss = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (ne.memoizedState = he = e) : (he = he.next = e), he;
}
function ct() {
  if (ue === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = he === null ? ne.memoizedState : he.next;
  if (t !== null) (he = t), (ue = e);
  else {
    if (e === null) throw Error(P(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      he === null ? (ne.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function ks(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ue,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((dr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (ne.lanes |= c),
          (fr |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      xt(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ne.lanes |= s), (fr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xl(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    xt(s, t.memoizedState) || (Ne = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Am() {}
function Im(e, t) {
  var n = ne,
    r = ct(),
    i = t(),
    s = !xt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    Zc(Dm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Es(9, Nm.bind(null, n, r, i, t), void 0, null),
      me === null)
    )
      throw Error(P(349));
    dr & 30 || Lm(n, t, i);
  }
  return i;
}
function Lm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zm(t) && Fm(e);
}
function Dm(e, t, n) {
  return n(function () {
    zm(t) && Fm(e);
  });
}
function zm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function Fm(e) {
  var t = Kt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function bf(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ks,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = G0.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function Es(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mm() {
  return ct().memoizedState;
}
function Ao(e, t, n, r) {
  var i = Pt();
  (ne.flags |= e),
    (i.memoizedState = Es(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ia(e, t, n, r) {
  var i = ct();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ue !== null) {
    var o = ue.memoizedState;
    if (((s = o.destroy), r !== null && Jc(r, o.deps))) {
      i.memoizedState = Es(t, n, s, r);
      return;
    }
  }
  (ne.flags |= e), (i.memoizedState = Es(1 | t, n, s, r));
}
function Tf(e, t) {
  return Ao(8390656, 8, e, t);
}
function Zc(e, t) {
  return Ia(2048, 8, e, t);
}
function Um(e, t) {
  return Ia(4, 2, e, t);
}
function Bm(e, t) {
  return Ia(4, 4, e, t);
}
function Qm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ia(4, 4, Qm.bind(null, t, e), n)
  );
}
function ed() {}
function Wm(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qm(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vm(e, t, n) {
  return dr & 21
    ? (xt(n, t) || ((n = Jp()), (ne.lanes |= n), (fr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function V0(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = El.transition;
  El.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (El.transition = r);
  }
}
function Km() {
  return ct().memoizedState;
}
function K0(e, t, n) {
  var r = Pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gm(e))
  )
    Jm(t, n);
  else if (((n = Om(e, t, n, r)), n !== null)) {
    var i = Re();
    Et(n, e, r, i), Ym(n, t, r);
  }
}
function G0(e, t, n) {
  var r = Pn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gm(e)) Jm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), xt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Wc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Om(e, t, i, r)),
      n !== null && ((i = Re()), Et(n, e, r, i), Ym(n, t, r));
  }
}
function Gm(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function Jm(e, t) {
  ts = aa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ym(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jc(e, n);
  }
}
var la = {
    readContext: ut,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  J0 = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: Tf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ao(4194308, 4, Qm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ao(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ao(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = K0.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bf,
    useDebugValue: ed,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = bf(!1),
        t = e[0];
      return (e = V0.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        i = Pt();
      if (ee) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(P(349));
        dr & 30 || Lm(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Tf(Dm.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Es(9, Nm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = me.identifierPrefix;
      if (ee) {
        var n = Qt,
          r = Bt;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ss++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = q0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Y0 = {
    readContext: ut,
    useCallback: Wm,
    useContext: ut,
    useEffect: Zc,
    useImperativeHandle: Hm,
    useInsertionEffect: Um,
    useLayoutEffect: Bm,
    useMemo: qm,
    useReducer: Cl,
    useRef: Mm,
    useState: function () {
      return Cl(ks);
    },
    useDebugValue: ed,
    useDeferredValue: function (e) {
      var t = ct();
      return Vm(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(ks)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Am,
    useSyncExternalStore: Im,
    useId: Km,
    unstable_isNewReconciler: !1,
  },
  X0 = {
    readContext: ut,
    useCallback: Wm,
    useContext: ut,
    useEffect: Zc,
    useImperativeHandle: Hm,
    useInsertionEffect: Um,
    useLayoutEffect: Bm,
    useMemo: qm,
    useReducer: xl,
    useRef: Mm,
    useState: function () {
      return xl(ks);
    },
    useDebugValue: ed,
    useDeferredValue: function (e) {
      var t = ct();
      return ue === null ? (t.memoizedState = e) : Vm(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = xl(ks)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Am,
    useSyncExternalStore: Im,
    useId: Km,
    unstable_isNewReconciler: !1,
  };
function hi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ov(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Z0 = typeof WeakMap == "function" ? WeakMap : Map;
function Xm(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ca || ((ca = !0), (Du = r)), Pu(e, t);
    }),
    n
  );
}
function Zm(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Pu(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Pu(e, t),
          typeof r != "function" &&
            (On === null ? (On = new Set([this])) : On.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Rf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Z0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = hw.bind(null, e, t, n)), t.then(e, e));
}
function jf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $f(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ht(-1, 1)), (t.tag = 2), xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ew = Yt.ReactCurrentOwner,
  Ne = !1;
function be(e, t, n, r) {
  t.child = e === null ? jm(t, null, n, r) : di(t, e.child, n, r);
}
function Af(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Hr(t, i),
    (r = Yc(e, t, n, r, s, i)),
    (n = Xc()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (ee && n && Fc(t), (t.flags |= 1), be(e, t, r, i), t.child)
  );
}
function If(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ld(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), ey(e, t, s, r, i))
      : ((e = Do(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ms), n(o, r) && e.ref === t.ref)
    )
      return Gt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = bn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ey(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ms(s, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Gt(e, t, i);
  }
  return bu(e, t, n, r, i);
}
function ty(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(zr, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          J(zr, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        J(zr, qe),
        (qe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(zr, qe),
      (qe |= r);
  return be(e, t, i, n), t.child;
}
function ny(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bu(e, t, n, r, i) {
  var s = Fe(n) ? ur : Ce.current;
  return (
    (s = ui(t, s)),
    Hr(t, i),
    (n = Yc(e, t, n, r, s, i)),
    (r = Xc()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (ee && r && Fc(t), (t.flags |= 1), be(e, t, n, i), t.child)
  );
}
function Lf(e, t, n, r, i) {
  if (Fe(n)) {
    var s = !0;
    ea(t);
  } else s = !1;
  if ((Hr(t, i), t.stateNode === null))
    Io(e, t), Tm(t, n, r), Ou(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ut(u))
      : ((u = Fe(n) ? ur : Ce.current), (u = ui(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Of(t, o, r, u)),
      (on = !1);
    var d = t.memoizedState;
    (o.state = d),
      sa(t, r, o, i),
      (l = t.memoizedState),
      a !== r || d !== l || ze.current || on
        ? (typeof c == "function" && (xu(t, n, c, r), (l = t.memoizedState)),
          (a = on || xf(t, n, a, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Pm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : yt(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ut(l))
        : ((l = Fe(n) ? ur : Ce.current), (l = ui(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Of(t, o, r, l)),
      (on = !1),
      (d = t.memoizedState),
      (o.state = d),
      sa(t, r, o, i);
    var v = t.memoizedState;
    a !== f || d !== v || ze.current || on
      ? (typeof y == "function" && (xu(t, n, y, r), (v = t.memoizedState)),
        (u = on || xf(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Tu(e, t, n, r, s, i);
}
function Tu(e, t, n, r, i, s) {
  ny(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && _f(t, n, !1), Gt(e, t, s);
  (r = t.stateNode), (ew.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = di(t, e.child, null, s)), (t.child = di(t, null, a, s)))
      : be(e, t, a, s),
    (t.memoizedState = r.state),
    i && _f(t, n, !0),
    t.child
  );
}
function ry(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wf(e, t.context, !1),
    Vc(e, t.containerInfo);
}
function Nf(e, t, n, r, i) {
  return ci(), Uc(i), (t.flags |= 256), be(e, t, n, r), t.child;
}
var Ru = { dehydrated: null, treeContext: null, retryLane: 0 };
function ju(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function iy(e, t, n) {
  var r = t.pendingProps,
    i = te.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    J(te, i & 1),
    e === null)
  )
    return (
      Eu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Da(o, r, 0, null)),
              (e = or(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ju(n)),
              (t.memoizedState = Ru),
              e)
            : td(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return tw(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = bn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = bn(a, s)) : ((s = or(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ju(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ru),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = bn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function td(e, t) {
  return (
    (t = Da({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mo(e, t, n, r) {
  return (
    r !== null && Uc(r),
    di(t, e.child, null, n),
    (e = td(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tw(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ol(Error(P(422)))), mo(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Da({ mode: "visible", children: r.children }, i, 0, null)),
        (s = or(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && di(t, e.child, null, o),
        (t.child.memoizedState = ju(o)),
        (t.memoizedState = Ru),
        s);
  if (!(t.mode & 1)) return mo(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(P(419))), (r = Ol(s, r, void 0)), mo(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ne || a)) {
    if (((r = me), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Kt(e, i), Et(r, e, i, -1));
    }
    return ad(), (r = Ol(Error(P(421)))), mo(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ve = Cn(i.nextSibling)),
      (Ge = t),
      (ee = !0),
      (_t = null),
      e !== null &&
        ((st[ot++] = Bt),
        (st[ot++] = Qt),
        (st[ot++] = cr),
        (Bt = e.id),
        (Qt = e.overflow),
        (cr = t)),
      (t = td(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Df(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cu(e.return, t, n);
}
function Pl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function sy(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((be(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Df(e, n, t);
        else if (e.tag === 19) Df(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((J(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && oa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Pl(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && oa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Pl(t, !0, n, null, s);
        break;
      case "together":
        Pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Io(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nw(e, t, n) {
  switch (t.tag) {
    case 3:
      ry(t), ci();
      break;
    case 5:
      $m(t);
      break;
    case 1:
      Fe(t.type) && ea(t);
      break;
    case 4:
      Vc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      J(ra, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? iy(e, t, n)
          : (J(te, te.current & 1),
            (e = Gt(e, t, n)),
            e !== null ? e.sibling : null);
      J(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        J(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ty(e, t, n);
  }
  return Gt(e, t, n);
}
var oy, $u, ay, ly;
oy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$u = function () {};
ay = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Gn(Lt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = eu(e, i)), (r = eu(e, r)), (s = []);
        break;
      case "select":
        (i = re({}, i, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ru(e, i)), (r = ru(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xo);
    }
    su(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ls.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ls.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Y("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ly = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fi(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rw(e, t, n) {
  var r = t.pendingProps;
  switch ((Mc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return Fe(t.type) && Zo(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fi(),
        Z(ze),
        Z(Ce),
        Gc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ho(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _t !== null && (Mu(_t), (_t = null)))),
        $u(e, t),
        Se(t),
        null
      );
    case 5:
      Kc(t);
      var i = Gn(_s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ay(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Se(t), null;
        }
        if (((e = Gn(Lt.current)), ho(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[At] = t), (r[vs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Wi.length; i++) Y(Wi[i], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Wd(r, s), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              Vd(r, s), Y("invalid", r);
          }
          su(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      fo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      fo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ls.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              ro(r), qd(r, s, !0);
              break;
            case "textarea":
              ro(r), Kd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Xo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[At] = t),
            (e[vs] = r),
            oy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ou(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Wi.length; i++) Y(Wi[i], e);
                i = r;
                break;
              case "source":
                Y("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (i = r);
                break;
              case "details":
                Y("toggle", e), (i = r);
                break;
              case "input":
                Wd(e, r), (i = eu(e, r)), Y("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = re({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                Vd(e, r), (i = ru(e, r)), Y("invalid", e);
                break;
              default:
                i = r;
            }
            su(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? zp(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Np(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && us(e, l)
                    : typeof l == "number" && us(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (ls.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && Y("scroll", e)
                      : l != null && xc(e, s, l, o));
              }
            switch (n) {
              case "input":
                ro(e), qd(e, r, !1);
                break;
              case "textarea":
                ro(e), Kd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Mr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Mr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Xo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) ly(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = Gn(_s.current)), Gn(Lt.current), ho(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[At] = t),
            (s = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[At] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (Z(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Ve !== null && t.mode & 1 && !(t.flags & 128))
          xm(), ci(), (t.flags |= 98560), (s = !1);
        else if (((s = ho(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(P(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(P(317));
            s[At] = t;
          } else
            ci(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (s = !1);
        } else _t !== null && (Mu(_t), (_t = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? de === 0 && (de = 3) : ad())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        fi(), $u(e, t), e === null && ys(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return Hc(t.type._context), Se(t), null;
    case 17:
      return Fe(t.type) && Zo(), Se(t), null;
    case 19:
      if ((Z(te), (s = t.memoizedState), s === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Fi(s, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = oa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Fi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return J(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            oe() > pi &&
            ((t.flags |= 128), (r = !0), Fi(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ee)
            )
              return Se(t), null;
          } else
            2 * oe() - s.renderingStartTime > pi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fi(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = oe()),
          (t.sibling = null),
          (n = te.current),
          J(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        od(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function iw(e, t) {
  switch ((Mc(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && Zo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        fi(),
        Z(ze),
        Z(Ce),
        Gc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Kc(t), null;
    case 13:
      if ((Z(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        ci();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(te), null;
    case 4:
      return fi(), null;
    case 10:
      return Hc(t.type._context), null;
    case 22:
    case 23:
      return od(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yo = !1,
  Ee = !1,
  sw = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Dr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function Au(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var zf = !1;
function ow(e, t) {
  if (((yu = Go), (e = fm()), zc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (d = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gu = { focusedElem: e, selectionRange: n }, Go = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var _ = v.memoizedProps,
                    S = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : yt(t.type, _),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (w) {
          se(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (v = zf), (zf = !1), v;
}
function ns(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Au(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function La(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Iu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function uy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[At], delete t[vs], delete t[_u], delete t[B0], delete t[Q0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ff(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lu(e, t, n), e = e.sibling; e !== null; ) Lu(e, t, n), (e = e.sibling);
}
function Nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Nu(e, t, n), e = e.sibling; e !== null; ) Nu(e, t, n), (e = e.sibling);
}
var ge = null,
  vt = !1;
function en(e, t, n) {
  for (n = n.child; n !== null; ) dy(e, t, n), (n = n.sibling);
}
function dy(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function")
    try {
      It.onCommitFiberUnmount(Pa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Dr(n, t);
    case 6:
      var r = ge,
        i = vt;
      (ge = null),
        en(e, t, n),
        (ge = r),
        (vt = i),
        ge !== null &&
          (vt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (vt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? _l(e.parentNode, n)
              : e.nodeType === 1 && _l(e, n),
            hs(e))
          : _l(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (i = vt),
        (ge = n.stateNode.containerInfo),
        (vt = !0),
        en(e, t, n),
        (ge = r),
        (vt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Au(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      en(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (Dr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          se(n, t, a);
        }
      en(e, t, n);
      break;
    case 21:
      en(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), en(e, t, n), (Ee = r))
        : en(e, t, n);
      break;
    default:
      en(e, t, n);
  }
}
function Mf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sw()),
      t.forEach(function (r) {
        var i = mw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ge = a.stateNode), (vt = !1);
              break e;
            case 3:
              (ge = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (ge = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(P(160));
        dy(s, o, i), (ge = null), (vt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        se(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) fy(t, e), (t = t.sibling);
}
function fy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), Ot(e), r & 4)) {
        try {
          ns(3, e, e.return), La(3, e);
        } catch (_) {
          se(e, e.return, _);
        }
        try {
          ns(5, e, e.return);
        } catch (_) {
          se(e, e.return, _);
        }
      }
      break;
    case 1:
      pt(t, e), Ot(e), r & 512 && n !== null && Dr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        Ot(e),
        r & 512 && n !== null && Dr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          us(i, "");
        } catch (_) {
          se(e, e.return, _);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Ap(i, s),
              ou(a, o);
            var u = ou(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? zp(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Np(i, f)
                : c === "children"
                ? us(i, f)
                : xc(i, c, f, u);
            }
            switch (a) {
              case "input":
                tu(i, s);
                break;
              case "textarea":
                Ip(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Mr(i, !!s.multiple, y, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Mr(i, !!s.multiple, s.defaultValue, !0)
                      : Mr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[vs] = s;
          } catch (_) {
            se(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((pt(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (_) {
          se(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hs(t.containerInfo);
        } catch (_) {
          se(e, e.return, _);
        }
      break;
    case 4:
      pt(t, e), Ot(e);
      break;
    case 13:
      pt(t, e),
        Ot(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (id = oe())),
        r & 4 && Mf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (u = Ee) || c), pt(t, e), (Ee = u)) : pt(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (f = R = c; R !== null; ) {
              switch (((d = R), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ns(4, d, d.return);
                  break;
                case 1:
                  Dr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (_) {
                      se(r, n, _);
                    }
                  }
                  break;
                case 5:
                  Dr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Bf(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (R = y)) : Bf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Dp("display", o)));
              } catch (_) {
                se(e, e.return, _);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (_) {
                se(e, e.return, _);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), Ot(e), r & 4 && Mf(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (us(i, ""), (r.flags &= -33));
          var s = Ff(e);
          Nu(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ff(e);
          Lu(e, a, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (l) {
      se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function aw(e, t, n) {
  (R = e), hy(e);
}
function hy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || yo;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ee;
        a = yo;
        var u = Ee;
        if (((yo = o), (Ee = l) && !u))
          for (R = i; R !== null; )
            (o = R),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Qf(i)
                : l !== null
                ? ((l.return = o), (R = l))
                : Qf(i);
        for (; s !== null; ) (R = s), hy(s), (s = s.sibling);
        (R = i), (yo = a), (Ee = u);
      }
      Uf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : Uf(e);
  }
}
function Uf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || La(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Cf(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cf(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && hs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Ee || (t.flags & 512 && Iu(t));
      } catch (d) {
        se(t, t.return, d);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Bf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Qf(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            La(4, t);
          } catch (l) {
            se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              se(t, i, l);
            }
          }
          var s = t.return;
          try {
            Iu(t);
          } catch (l) {
            se(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Iu(t);
          } catch (l) {
            se(t, o, l);
          }
      }
    } catch (l) {
      se(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var lw = Math.ceil,
  ua = Yt.ReactCurrentDispatcher,
  nd = Yt.ReactCurrentOwner,
  lt = Yt.ReactCurrentBatchConfig,
  B = 0,
  me = null,
  le = null,
  ve = 0,
  qe = 0,
  zr = In(0),
  de = 0,
  Cs = null,
  fr = 0,
  Na = 0,
  rd = 0,
  rs = null,
  Le = null,
  id = 0,
  pi = 1 / 0,
  zt = null,
  ca = !1,
  Du = null,
  On = null,
  go = !1,
  _n = null,
  da = 0,
  is = 0,
  zu = null,
  Lo = -1,
  No = 0;
function Re() {
  return B & 6 ? oe() : Lo !== -1 ? Lo : (Lo = oe());
}
function Pn(e) {
  return e.mode & 1
    ? B & 2 && ve !== 0
      ? ve & -ve
      : W0.transition !== null
      ? (No === 0 && (No = Jp()), No)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rm(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < is) throw ((is = 0), (zu = null), Error(P(185)));
  Ws(e, n, r),
    (!(B & 2) || e !== me) &&
      (e === me && (!(B & 2) && (Na |= n), de === 4 && un(e, ve)),
      Me(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((pi = oe() + 500), $a && Ln()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Wv(e, t);
  var r = Ko(e, e === me ? ve : 0);
  if (r === 0)
    n !== null && Yd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yd(n), t === 1))
      e.tag === 0 ? H0(Hf.bind(null, e)) : km(Hf.bind(null, e)),
        M0(function () {
          !(B & 6) && Ln();
        }),
        (n = null);
    else {
      switch (Yp(r)) {
        case 1:
          n = Rc;
          break;
        case 4:
          n = Kp;
          break;
        case 16:
          n = Vo;
          break;
        case 536870912:
          n = Gp;
          break;
        default:
          n = Vo;
      }
      n = Sy(n, py.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function py(e, t) {
  if (((Lo = -1), (No = 0), B & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Wr() && e.callbackNode !== n) return null;
  var r = Ko(e, e === me ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fa(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var s = yy();
    (me !== e || ve !== t) && ((zt = null), (pi = oe() + 500), sr(e, t));
    do
      try {
        dw();
        break;
      } catch (a) {
        my(e, a);
      }
    while (!0);
    Qc(),
      (ua.current = s),
      (B = i),
      le !== null ? (t = 0) : ((me = null), (ve = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = du(e)), i !== 0 && ((r = i), (t = Fu(e, i)))), t === 1)
    )
      throw ((n = Cs), sr(e, 0), un(e, r), Me(e, oe()), n);
    if (t === 6) un(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !uw(i) &&
          ((t = fa(e, r)),
          t === 2 && ((s = du(e)), s !== 0 && ((r = s), (t = Fu(e, s)))),
          t === 1))
      )
        throw ((n = Cs), sr(e, 0), un(e, r), Me(e, oe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Qn(e, Le, zt);
          break;
        case 3:
          if (
            (un(e, r), (r & 130023424) === r && ((t = id + 500 - oe()), 10 < t))
          ) {
            if (Ko(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = wu(Qn.bind(null, e, Le, zt), t);
            break;
          }
          Qn(e, Le, zt);
          break;
        case 4:
          if ((un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - kt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * lw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wu(Qn.bind(null, e, Le, zt), r);
            break;
          }
          Qn(e, Le, zt);
          break;
        case 5:
          Qn(e, Le, zt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Me(e, oe()), e.callbackNode === n ? py.bind(null, e) : null;
}
function Fu(e, t) {
  var n = rs;
  return (
    e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256),
    (e = fa(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && Mu(t)),
    e
  );
}
function Mu(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function uw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!xt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function un(e, t) {
  for (
    t &= ~rd,
      t &= ~Na,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hf(e) {
  if (B & 6) throw Error(P(327));
  Wr();
  var t = Ko(e, 0);
  if (!(t & 1)) return Me(e, oe()), null;
  var n = fa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = du(e);
    r !== 0 && ((t = r), (n = Fu(e, r)));
  }
  if (n === 1) throw ((n = Cs), sr(e, 0), un(e, t), Me(e, oe()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qn(e, Le, zt),
    Me(e, oe()),
    null
  );
}
function sd(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((pi = oe() + 500), $a && Ln());
  }
}
function hr(e) {
  _n !== null && _n.tag === 0 && !(B & 6) && Wr();
  var t = B;
  B |= 1;
  var n = lt.transition,
    r = H;
  try {
    if (((lt.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (lt.transition = n), (B = t), !(B & 6) && Ln();
  }
}
function od() {
  (qe = zr.current), Z(zr);
}
function sr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), F0(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Mc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zo();
          break;
        case 3:
          fi(), Z(ze), Z(Ce), Gc();
          break;
        case 5:
          Kc(r);
          break;
        case 4:
          fi();
          break;
        case 13:
          Z(te);
          break;
        case 19:
          Z(te);
          break;
        case 10:
          Hc(r.type._context);
          break;
        case 22:
        case 23:
          od();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (le = e = bn(e.current, null)),
    (ve = qe = t),
    (de = 0),
    (Cs = null),
    (rd = Na = fr = 0),
    (Le = rs = null),
    Kn !== null)
  ) {
    for (t = 0; t < Kn.length; t++)
      if (((n = Kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Kn = null;
  }
  return e;
}
function my(e, t) {
  do {
    var n = le;
    try {
      if ((Qc(), ($o.current = la), aa)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        aa = !1;
      }
      if (
        ((dr = 0),
        (he = ue = ne = null),
        (ts = !1),
        (Ss = 0),
        (nd.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (Cs = t), (le = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ve),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = jf(o);
          if (y !== null) {
            (y.flags &= -257),
              $f(y, o, a, s, t),
              y.mode & 1 && Rf(s, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var _ = new Set();
              _.add(l), (t.updateQueue = _);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Rf(s, u, t), ad();
              break e;
            }
            l = Error(P(426));
          }
        } else if (ee && a.mode & 1) {
          var S = jf(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              $f(S, o, a, s, t),
              Uc(hi(l, a));
            break e;
          }
        }
        (s = l = hi(l, a)),
          de !== 4 && (de = 2),
          rs === null ? (rs = [s]) : rs.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Xm(s, l, t);
              Ef(s, p);
              break e;
            case 1:
              a = l;
              var h = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (On === null || !On.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = Zm(s, a, t);
                Ef(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      vy(n);
    } catch (k) {
      (t = k), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function yy() {
  var e = ua.current;
  return (ua.current = la), e === null ? la : e;
}
function ad() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    me === null || (!(fr & 268435455) && !(Na & 268435455)) || un(me, ve);
}
function fa(e, t) {
  var n = B;
  B |= 2;
  var r = yy();
  (me !== e || ve !== t) && ((zt = null), sr(e, t));
  do
    try {
      cw();
      break;
    } catch (i) {
      my(e, i);
    }
  while (!0);
  if ((Qc(), (B = n), (ua.current = r), le !== null)) throw Error(P(261));
  return (me = null), (ve = 0), de;
}
function cw() {
  for (; le !== null; ) gy(le);
}
function dw() {
  for (; le !== null && !Nv(); ) gy(le);
}
function gy(e) {
  var t = _y(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? vy(e) : (le = t),
    (nd.current = null);
}
function vy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = iw(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (le = null);
        return;
      }
    } else if (((n = rw(n, t, qe)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Qn(e, t, n) {
  var r = H,
    i = lt.transition;
  try {
    (lt.transition = null), (H = 1), fw(e, t, n, r);
  } finally {
    (lt.transition = i), (H = r);
  }
  return null;
}
function fw(e, t, n, r) {
  do Wr();
  while (_n !== null);
  if (B & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (qv(e, s),
    e === me && ((le = me = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      go ||
      ((go = !0),
      Sy(Vo, function () {
        return Wr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = lt.transition), (lt.transition = null);
    var o = H;
    H = 1;
    var a = B;
    (B |= 4),
      (nd.current = null),
      ow(e, n),
      fy(n, e),
      $0(gu),
      (Go = !!yu),
      (gu = yu = null),
      (e.current = n),
      aw(n),
      Dv(),
      (B = a),
      (H = o),
      (lt.transition = s);
  } else e.current = n;
  if (
    (go && ((go = !1), (_n = e), (da = i)),
    (s = e.pendingLanes),
    s === 0 && (On = null),
    Mv(n.stateNode),
    Me(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ca) throw ((ca = !1), (e = Du), (Du = null), e);
  return (
    da & 1 && e.tag !== 0 && Wr(),
    (s = e.pendingLanes),
    s & 1 ? (e === zu ? is++ : ((is = 0), (zu = e))) : (is = 0),
    Ln(),
    null
  );
}
function Wr() {
  if (_n !== null) {
    var e = Yp(da),
      t = lt.transition,
      n = H;
    try {
      if (((lt.transition = null), (H = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (da = 0), B & 6)) throw Error(P(331));
        var i = B;
        for (B |= 4, R = e.current; R !== null; ) {
          var s = R,
            o = s.child;
          if (R.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (R = f);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var d = c.sibling,
                        y = c.return;
                      if ((uy(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = y), (R = d);
                        break;
                      }
                      R = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var _ = v.child;
                if (_ !== null) {
                  v.child = null;
                  do {
                    var S = _.sibling;
                    (_.sibling = null), (_ = S);
                  } while (_ !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o);
          else
            e: for (; R !== null; ) {
              if (((s = R), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ns(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (R = p);
                break e;
              }
              R = s.return;
            }
        }
        var h = e.current;
        for (R = h; R !== null; ) {
          o = R;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (R = m);
          else
            e: for (o = h; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      La(9, a);
                  }
                } catch (k) {
                  se(a, a.return, k);
                }
              if (a === o) {
                R = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (R = w);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((B = i), Ln(), It && typeof It.onPostCommitFiberRoot == "function")
        )
          try {
            It.onPostCommitFiberRoot(Pa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (lt.transition = t);
    }
  }
  return !1;
}
function Wf(e, t, n) {
  (t = hi(n, t)),
    (t = Xm(e, t, 1)),
    (e = xn(e, t, 1)),
    (t = Re()),
    e !== null && (Ws(e, 1, t), Me(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Wf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (On === null || !On.has(r)))
        ) {
          (e = hi(n, e)),
            (e = Zm(t, e, 1)),
            (t = xn(t, e, 1)),
            (e = Re()),
            t !== null && (Ws(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (ve & n) === n &&
      (de === 4 || (de === 3 && (ve & 130023424) === ve && 500 > oe() - id)
        ? sr(e, 0)
        : (rd |= n)),
    Me(e, t);
}
function wy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = oo), (oo <<= 1), !(oo & 130023424) && (oo = 4194304))
      : (t = 1));
  var n = Re();
  (e = Kt(e, t)), e !== null && (Ws(e, t, n), Me(e, n));
}
function pw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wy(e, n);
}
function mw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), wy(e, n);
}
var _y;
_y = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), nw(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), ee && t.flags & 1048576 && Em(t, na, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Io(e, t), (e = t.pendingProps);
      var i = ui(t, Ce.current);
      Hr(t, n), (i = Yc(null, t, r, e, i, n));
      var s = Xc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((s = !0), ea(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            qc(t),
            (i.updater = Aa),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ou(t, r, e, n),
            (t = Tu(null, t, r, !0, s, n)))
          : ((t.tag = 0), ee && s && Fc(t), be(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Io(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = gw(r)),
          (e = yt(r, e)),
          i)
        ) {
          case 0:
            t = bu(null, t, r, e, n);
            break e;
          case 1:
            t = Lf(null, t, r, e, n);
            break e;
          case 11:
            t = Af(null, t, r, e, n);
            break e;
          case 14:
            t = If(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        bu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        Lf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ry(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Pm(e, t),
          sa(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = hi(Error(P(423)), t)), (t = Nf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = hi(Error(P(424)), t)), (t = Nf(e, t, r, n, i));
            break e;
          } else
            for (
              Ve = Cn(t.stateNode.containerInfo.firstChild),
                Ge = t,
                ee = !0,
                _t = null,
                n = jm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ci(), r === i)) {
            t = Gt(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $m(t),
        e === null && Eu(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        vu(r, i) ? (o = null) : s !== null && vu(r, s) && (t.flags |= 32),
        ny(e, t),
        be(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Eu(t), null;
    case 13:
      return iy(e, t, n);
    case 4:
      return (
        Vc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = di(t, null, r, n)) : be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        Af(e, t, r, i, n)
      );
    case 7:
      return be(e, t, t.pendingProps, n), t.child;
    case 8:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          J(ra, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (xt(s.value, o)) {
            if (s.children === i.children && !ze.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Ht(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Cu(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Cu(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        be(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Hr(t, n),
        (i = ut(i)),
        (r = r(i)),
        (t.flags |= 1),
        be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = yt(r, t.pendingProps)),
        (i = yt(r.type, i)),
        If(e, t, r, i, n)
      );
    case 15:
      return ey(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yt(r, i)),
        Io(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), ea(t)) : (e = !1),
        Hr(t, n),
        Tm(t, r, i),
        Ou(t, r, i, n),
        Tu(null, t, r, !0, e, n)
      );
    case 19:
      return sy(e, t, n);
    case 22:
      return ty(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Sy(e, t) {
  return Vp(e, t);
}
function yw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, r) {
  return new yw(e, t, n, r);
}
function ld(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gw(e) {
  if (typeof e == "function") return ld(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pc)) return 11;
    if (e === bc) return 14;
  }
  return 2;
}
function bn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Do(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ld(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case br:
        return or(n.children, i, s, t);
      case Oc:
        (o = 8), (i |= 8);
        break;
      case Jl:
        return (
          (e = at(12, n, t, i | 2)), (e.elementType = Jl), (e.lanes = s), e
        );
      case Yl:
        return (e = at(13, n, t, i)), (e.elementType = Yl), (e.lanes = s), e;
      case Xl:
        return (e = at(19, n, t, i)), (e.elementType = Xl), (e.lanes = s), e;
      case Rp:
        return Da(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bp:
              o = 10;
              break e;
            case Tp:
              o = 9;
              break e;
            case Pc:
              o = 11;
              break e;
            case bc:
              o = 14;
              break e;
            case sn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = at(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function or(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function Da(e, t, n, r) {
  return (
    (e = at(22, e, r, t)),
    (e.elementType = Rp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bl(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function Tl(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vw(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ul(0)),
    (this.expirationTimes = ul(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ul(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ud(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new vw(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = at(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qc(s),
    e
  );
}
function ww(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ky(e) {
  if (!e) return Rn;
  e = e._reactInternals;
  e: {
    if (gr(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return Sm(e, n, t);
  }
  return t;
}
function Ey(e, t, n, r, i, s, o, a, l) {
  return (
    (e = ud(n, r, !0, e, i, s, o, a, l)),
    (e.context = ky(null)),
    (n = e.current),
    (r = Re()),
    (i = Pn(n)),
    (s = Ht(r, i)),
    (s.callback = t ?? null),
    xn(n, s, i),
    (e.current.lanes = i),
    Ws(e, i, r),
    Me(e, r),
    e
  );
}
function za(e, t, n, r) {
  var i = t.current,
    s = Re(),
    o = Pn(i);
  return (
    (n = ky(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xn(i, t, o)),
    e !== null && (Et(e, i, o, s), jo(e, i, o)),
    o
  );
}
function ha(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cd(e, t) {
  qf(e, t), (e = e.alternate) && qf(e, t);
}
function _w() {
  return null;
}
var Cy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function dd(e) {
  this._internalRoot = e;
}
Fa.prototype.render = dd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  za(e, t, null, null);
};
Fa.prototype.unmount = dd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hr(function () {
      za(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function Fa(e) {
  this._internalRoot = e;
}
Fa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = em();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && nm(e);
  }
};
function fd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ma(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vf() {}
function Sw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ha(o);
        s.call(u);
      };
    }
    var o = Ey(t, r, e, 0, null, !1, !1, "", Vf);
    return (
      (e._reactRootContainer = o),
      (e[Vt] = o.current),
      ys(e.nodeType === 8 ? e.parentNode : e),
      hr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ha(l);
      a.call(u);
    };
  }
  var l = ud(e, 0, !1, null, null, !1, !1, "", Vf);
  return (
    (e._reactRootContainer = l),
    (e[Vt] = l.current),
    ys(e.nodeType === 8 ? e.parentNode : e),
    hr(function () {
      za(t, l, n, r);
    }),
    l
  );
}
function Ua(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ha(o);
        a.call(l);
      };
    }
    za(t, o, e, i);
  } else o = Sw(n, t, e, i, r);
  return ha(o);
}
Xp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hi(t.pendingLanes);
        n !== 0 &&
          (jc(t, n | 1), Me(t, oe()), !(B & 6) && ((pi = oe() + 500), Ln()));
      }
      break;
    case 13:
      hr(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var i = Re();
          Et(r, e, 1, i);
        }
      }),
        cd(e, 1);
  }
};
$c = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Re();
      Et(t, e, 134217728, n);
    }
    cd(e, 134217728);
  }
};
Zp = function (e) {
  if (e.tag === 13) {
    var t = Pn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Re();
      Et(n, e, t, r);
    }
    cd(e, t);
  }
};
em = function () {
  return H;
};
tm = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
lu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((tu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ja(r);
            if (!i) throw Error(P(90));
            $p(r), tu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ip(e, n);
      break;
    case "select":
      (t = n.value), t != null && Mr(e, !!n.multiple, t, !1);
  }
};
Up = sd;
Bp = hr;
var kw = { usingClientEntryPoint: !1, Events: [Vs, $r, ja, Fp, Mp, sd] },
  Mi = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ew = {
    bundleType: Mi.bundleType,
    version: Mi.version,
    rendererPackageName: Mi.rendererPackageName,
    rendererConfig: Mi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mi.findFiberByHostInstance || _w,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vo.isDisabled && vo.supportsFiber)
    try {
      (Pa = vo.inject(Ew)), (It = vo);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kw;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fd(t)) throw Error(P(200));
  return ww(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!fd(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = Cy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ud(e, 1, !1, null, null, n, !1, r, i)),
    (e[Vt] = t.current),
    ys(e.nodeType === 8 ? e.parentNode : e),
    new dd(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Wp(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return hr(e);
};
Ze.hydrate = function (e, t, n) {
  if (!Ma(t)) throw Error(P(200));
  return Ua(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!fd(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Cy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Ey(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Vt] = t.current),
    ys(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Fa(t);
};
Ze.render = function (e, t, n) {
  if (!Ma(t)) throw Error(P(200));
  return Ua(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!Ma(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (hr(function () {
        Ua(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = sd;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ma(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Ua(e, t, n, !1, r);
};
Ze.version = "18.2.0-next-9e3b772b8-20220608";
function xy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xy);
    } catch (e) {
      console.error(e);
    }
}
xy(), (Ep.exports = Ze);
var Cw = Ep.exports,
  Kf = Cw;
(Kl.createRoot = Kf.createRoot), (Kl.hydrateRoot = Kf.hydrateRoot);
var Oy = { exports: {} },
  Py = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = W;
function xw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ow = typeof Object.is == "function" ? Object.is : xw,
  Pw = Gs.useSyncExternalStore,
  bw = Gs.useRef,
  Tw = Gs.useEffect,
  Rw = Gs.useMemo,
  jw = Gs.useDebugValue;
Py.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = bw(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = Rw(
    function () {
      function l(y) {
        if (!u) {
          if (((u = !0), (c = y), (y = r(y)), i !== void 0 && o.hasValue)) {
            var v = o.value;
            if (i(v, y)) return (f = v);
          }
          return (f = y);
        }
        if (((v = f), Ow(c, y))) return v;
        var _ = r(y);
        return i !== void 0 && i(v, _) ? v : ((c = y), (f = _));
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = Pw(e, s[0], s[1]);
  return (
    Tw(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    jw(a),
    a
  );
};
Oy.exports = Py;
var $w = Oy.exports,
  Ke = "default" in Ud ? Te : Ud,
  Gf = Symbol.for("react-redux-context"),
  Jf = typeof globalThis < "u" ? globalThis : {};
function Aw() {
  if (!Ke.createContext) return {};
  const e = Jf[Gf] ?? (Jf[Gf] = new Map());
  let t = e.get(Ke.createContext);
  return t || ((t = Ke.createContext(null)), e.set(Ke.createContext, t)), t;
}
var jn = Aw(),
  Iw = () => {
    throw new Error("uSES not initialized!");
  };
function hd(e = jn) {
  return function () {
    return Ke.useContext(e);
  };
}
var by = hd(),
  Ty = Iw,
  Lw = (e) => {
    Ty = e;
  },
  Nw = (e, t) => e === t;
function Dw(e = jn) {
  const t = e === jn ? by : hd(e),
    n = (r, i = {}) => {
      const { equalityFn: s = Nw, devModeChecks: o = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: a,
          subscription: l,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: f,
        } = t();
      Ke.useRef(!0);
      const d = Ke.useCallback(
          {
            [r.name](v) {
              return r(v);
            },
          }[r.name],
          [r, c, o.stabilityCheck]
        ),
        y = Ty(l.addNestedSub, a.getState, u || a.getState, d, s);
      return Ke.useDebugValue(y), y;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var zw = Dw();
function Fw(e) {
  e();
}
function Mw() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Fw(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Yf = { notify() {}, get: () => [] };
function Uw(e, t) {
  let n,
    r = Yf,
    i = 0,
    s = !1;
  function o(_) {
    c();
    const S = r.subscribe(_);
    let p = !1;
    return () => {
      p || ((p = !0), S(), f());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return s;
  }
  function c() {
    i++, n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = Mw()));
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Yf));
  }
  function d() {
    s || ((s = !0), c());
  }
  function y() {
    s && ((s = !1), f());
  }
  const v = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: y,
    getListeners: () => r,
  };
  return v;
}
var Bw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qw = typeof navigator < "u" && navigator.product === "ReactNative",
  Hw = Bw || Qw ? Ke.useLayoutEffect : Ke.useEffect;
function Ww({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: s = "once",
}) {
  const o = Ke.useMemo(() => {
      const u = Uw(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: s,
      };
    }, [e, r, i, s]),
    a = Ke.useMemo(() => e.getState(), [e]);
  Hw(() => {
    const { subscription: u } = o;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [o, a]);
  const l = t || jn;
  return Ke.createElement(l.Provider, { value: o }, n);
}
var qw = Ww;
function Ry(e = jn) {
  const t = e === jn ? by : hd(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Vw = Ry();
function Kw(e = jn) {
  const t = e === jn ? Vw : Ry(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var jy = Kw();
Lw($w.useSyncExternalStoreWithSelector);
var bi = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  mi = typeof window > "u" || "Deno" in globalThis;
function it() {}
function Gw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Uu(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function $y(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: s,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== pd(o, t.options)) return !1;
    } else if (!xs(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function Zf(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (pr(t.options.mutationKey) !== pr(s)) return !1;
    } else if (!xs(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function pd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || pr)(e);
}
function pr(e) {
  return JSON.stringify(e, (t, n) =>
    Bu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function xs(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !xs(e[n], t[n]))
    : !1;
}
function Ay(e, t) {
  if (e === t) return e;
  const n = eh(e) && eh(t);
  if (n || (Bu(e) && Bu(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      s = n ? t : Object.keys(t),
      o = s.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const c = n ? u : s[u];
      !n && e[c] === void 0 && t[c] === void 0 && r.includes(c)
        ? ((a[c] = void 0), l++)
        : ((a[c] = Ay(e[c], t[c])), a[c] === e[c] && e[c] !== void 0 && l++);
    }
    return i === o && l === i ? e : a;
  }
  return t;
}
function pa(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function eh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Bu(e) {
  if (!th(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(!th(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function th(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Jw(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Qu(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Ay(e, t)
    : t;
}
function Yw(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Xw(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var md = Symbol(),
  Yn,
  dn,
  Vr,
  rp,
  Zw =
    ((rp = class extends bi {
      constructor() {
        super();
        j(this, Yn, void 0);
        j(this, dn, void 0);
        j(this, Vr, void 0);
        b(this, Vr, (t) => {
          if (!mi && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        g(this, dn) || this.setEventListener(g(this, Vr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = g(this, dn)) == null || t.call(this), b(this, dn, void 0));
      }
      setEventListener(t) {
        var n;
        b(this, Vr, t),
          (n = g(this, dn)) == null || n.call(this),
          b(
            this,
            dn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        g(this, Yn) !== t && (b(this, Yn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof g(this, Yn) == "boolean"
          ? g(this, Yn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Yn = new WeakMap()),
    (dn = new WeakMap()),
    (Vr = new WeakMap()),
    rp),
  yd = new Zw(),
  Kr,
  fn,
  Gr,
  ip,
  e1 =
    ((ip = class extends bi {
      constructor() {
        super();
        j(this, Kr, !0);
        j(this, fn, void 0);
        j(this, Gr, void 0);
        b(this, Gr, (t) => {
          if (!mi && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        g(this, fn) || this.setEventListener(g(this, Gr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = g(this, fn)) == null || t.call(this), b(this, fn, void 0));
      }
      setEventListener(t) {
        var n;
        b(this, Gr, t),
          (n = g(this, fn)) == null || n.call(this),
          b(this, fn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        g(this, Kr) !== t &&
          (b(this, Kr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return g(this, Kr);
      }
    }),
    (Kr = new WeakMap()),
    (fn = new WeakMap()),
    (Gr = new WeakMap()),
    ip),
  ma = new e1();
function t1(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function gd(e) {
  return (e ?? "online") === "online" ? ma.isOnline() : !0;
}
var Iy = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Rl(e) {
  return e instanceof Iy;
}
function Ly(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    s,
    o;
  const a = new Promise((S, p) => {
      (s = S), (o = p);
    }),
    l = (S) => {
      var p;
      r || (y(new Iy(S)), (p = e.abort) == null || p.call(e));
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    f = () => !yd.isFocused() || (e.networkMode !== "always" && !ma.isOnline()),
    d = (S) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onSuccess) == null || p.call(e, S),
        i == null || i(),
        s(S));
    },
    y = (S) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onError) == null || p.call(e, S),
        i == null || i(),
        o(S));
    },
    v = () =>
      new Promise((S) => {
        var p;
        (i = (h) => {
          const m = r || !f();
          return m && S(h), m;
        }),
          (p = e.onPause) == null || p.call(e);
      }).then(() => {
        var S;
        (i = void 0), r || (S = e.onContinue) == null || S.call(e);
      }),
    _ = () => {
      if (r) return;
      let S;
      try {
        S = e.fn();
      } catch (p) {
        S = Promise.reject(p);
      }
      Promise.resolve(S)
        .then(d)
        .catch((p) => {
          var E;
          if (r) return;
          const h = e.retry ?? (mi ? 0 : 3),
            m = e.retryDelay ?? t1,
            w = typeof m == "function" ? m(n, p) : m,
            k =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, p));
          if (t || !k) {
            y(p);
            return;
          }
          n++,
            (E = e.onFail) == null || E.call(e, n, p),
            Jw(w)
              .then(() => {
                if (f()) return v();
              })
              .then(() => {
                t ? y(p) : _();
              });
        });
    };
  return (
    gd(e.networkMode) ? _() : v().then(_),
    {
      promise: a,
      cancel: l,
      continue: () => ((i == null ? void 0 : i()) ? a : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
function n1() {
  let e = [],
    t = 0,
    n = (d) => {
      d();
    },
    r = (d) => {
      d();
    },
    i = (d) => setTimeout(d, 0);
  const s = (d) => {
      i = d;
    },
    o = (d) => {
      let y;
      t++;
      try {
        y = d();
      } finally {
        t--, t || u();
      }
      return y;
    },
    a = (d) => {
      t
        ? e.push(d)
        : i(() => {
            n(d);
          });
    },
    l =
      (d) =>
      (...y) => {
        a(() => {
          d(...y);
        });
      },
    u = () => {
      const d = e;
      (e = []),
        d.length &&
          i(() => {
            r(() => {
              d.forEach((y) => {
                n(y);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: (d) => {
      n = d;
    },
    setBatchNotifyFunction: (d) => {
      r = d;
    },
    setScheduler: s,
  };
}
var ce = n1(),
  Xn,
  sp,
  Ny =
    ((sp = class {
      constructor() {
        j(this, Xn, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Uu(this.gcTime) &&
            b(
              this,
              Xn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (mi ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        g(this, Xn) && (clearTimeout(g(this, Xn)), b(this, Xn, void 0));
      }
    }),
    (Xn = new WeakMap()),
    sp),
  Jr,
  Yr,
  nt,
  Oe,
  fe,
  js,
  Zn,
  gt,
  Dt,
  op,
  r1 =
    ((op = class extends Ny {
      constructor(t) {
        super();
        j(this, gt);
        j(this, Jr, void 0);
        j(this, Yr, void 0);
        j(this, nt, void 0);
        j(this, Oe, void 0);
        j(this, fe, void 0);
        j(this, js, void 0);
        j(this, Zn, void 0);
        b(this, Zn, !1),
          b(this, js, t.defaultOptions),
          this.setOptions(t.options),
          b(this, fe, []),
          b(this, nt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          b(this, Jr, t.state || i1(this.options)),
          (this.state = g(this, Jr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      setOptions(t) {
        (this.options = { ...g(this, js), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !g(this, fe).length &&
          this.state.fetchStatus === "idle" &&
          g(this, nt).remove(this);
      }
      setData(t, n) {
        const r = Qu(this.state.data, t, this.options);
        return (
          D(this, gt, Dt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        D(this, gt, Dt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = g(this, Oe)) == null ? void 0 : r.promise;
        return (
          (i = g(this, Oe)) == null || i.cancel(t),
          n ? n.then(it).catch(it) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(g(this, Jr));
      }
      isActive() {
        return g(this, fe).some((t) => t.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? g(this, fe).some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !$y(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = g(this, fe).find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = g(this, Oe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = g(this, fe).find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = g(this, Oe)) == null || n.continue();
      }
      addObserver(t) {
        g(this, fe).includes(t) ||
          (g(this, fe).push(t),
          this.clearGcTimeout(),
          g(this, nt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        g(this, fe).includes(t) &&
          (b(
            this,
            fe,
            g(this, fe).filter((n) => n !== t)
          ),
          g(this, fe).length ||
            (g(this, Oe) &&
              (g(this, Zn)
                ? g(this, Oe).cancel({ revert: !0 })
                : g(this, Oe).cancelRetry()),
            this.scheduleGc()),
          g(this, nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return g(this, fe).length;
      }
      invalidate() {
        this.state.isInvalidated ||
          D(this, gt, Dt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (g(this, Oe))
            return g(this, Oe).continueRetry(), g(this, Oe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = g(this, fe).find((y) => y.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          i = { queryKey: this.queryKey, meta: this.meta },
          s = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (b(this, Zn, !0), r.signal),
            });
          };
        s(i);
        const o = () =>
            !this.options.queryFn || this.options.queryFn === md
              ? Promise.reject(
                  new Error(`Missing queryFn: '${this.options.queryHash}'`)
                )
              : (b(this, Zn, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, i, this)
                  : this.options.queryFn(i)),
          a = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o,
          };
        s(a),
          (u = this.options.behavior) == null || u.onFetch(a, this),
          b(this, Yr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            D(this, gt, Dt).call(this, {
              type: "fetch",
              meta: (f = a.fetchOptions) == null ? void 0 : f.meta,
            });
        const l = (d) => {
          var y, v, _, S;
          (Rl(d) && d.silent) ||
            D(this, gt, Dt).call(this, { type: "error", error: d }),
            Rl(d) ||
              ((v = (y = g(this, nt).config).onError) == null ||
                v.call(y, d, this),
              (S = (_ = g(this, nt).config).onSettled) == null ||
                S.call(_, this.state.data, d, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          b(
            this,
            Oe,
            Ly({
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var y, v, _, S;
                if (d === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(d),
                  (v = (y = g(this, nt).config).onSuccess) == null ||
                    v.call(y, d, this),
                  (S = (_ = g(this, nt).config).onSettled) == null ||
                    S.call(_, d, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: l,
              onFail: (d, y) => {
                D(this, gt, Dt).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: y,
                });
              },
              onPause: () => {
                D(this, gt, Dt).call(this, { type: "pause" });
              },
              onContinue: () => {
                D(this, gt, Dt).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
            })
          ),
          g(this, Oe).promise
        );
      }
    }),
    (Jr = new WeakMap()),
    (Yr = new WeakMap()),
    (nt = new WeakMap()),
    (Oe = new WeakMap()),
    (fe = new WeakMap()),
    (js = new WeakMap()),
    (Zn = new WeakMap()),
    (gt = new WeakSet()),
    (Dt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Dy(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const i = t.error;
            return Rl(i) && i.revert && g(this, Yr)
              ? { ...g(this, Yr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        ce.batch(() => {
          g(this, fe).forEach((r) => {
            r.onQueryUpdate();
          }),
            g(this, nt).notify({ query: this, type: "updated", action: t });
        });
    }),
    op);
function Dy(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: gd(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function i1(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var bt,
  ap,
  s1 =
    ((ap = class extends bi {
      constructor(t = {}) {
        super();
        j(this, bt, void 0);
        (this.config = t), b(this, bt, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          s = n.queryHash ?? pd(i, n);
        let o = this.get(s);
        return (
          o ||
            ((o = new r1({
              cache: this,
              queryKey: i,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        g(this, bt).has(t.queryHash) ||
          (g(this, bt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = g(this, bt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && g(this, bt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        ce.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return g(this, bt).get(t);
      }
      getAll() {
        return [...g(this, bt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Xf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Xf(t, r)) : n;
      }
      notify(t) {
        ce.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        ce.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ce.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (bt = new WeakMap()),
    ap),
  Tt,
  $s,
  We,
  Xr,
  Rt,
  tn,
  lp,
  o1 =
    ((lp = class extends Ny {
      constructor(t) {
        super();
        j(this, Rt);
        j(this, Tt, void 0);
        j(this, $s, void 0);
        j(this, We, void 0);
        j(this, Xr, void 0);
        (this.mutationId = t.mutationId),
          b(this, $s, t.defaultOptions),
          b(this, We, t.mutationCache),
          b(this, Tt, []),
          (this.state = t.state || zy()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = { ...g(this, $s), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        g(this, Tt).includes(t) ||
          (g(this, Tt).push(t),
          this.clearGcTimeout(),
          g(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        b(
          this,
          Tt,
          g(this, Tt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          g(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        g(this, Tt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : g(this, We).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = g(this, Xr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, o, a, l, u, c, f, d, y, v, _, S, p, h, m, w, k, E, x;
        const n = () => (
            b(
              this,
              Xr,
              Ly({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(t)
                    : Promise.reject(new Error("No mutationFn found")),
                onFail: (C, I) => {
                  D(this, Rt, tn).call(this, {
                    type: "failed",
                    failureCount: C,
                    error: I,
                  });
                },
                onPause: () => {
                  D(this, Rt, tn).call(this, { type: "pause" });
                },
                onContinue: () => {
                  D(this, Rt, tn).call(this, { type: "continue" });
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
              })
            ),
            g(this, Xr).promise
          ),
          r = this.state.status === "pending";
        try {
          if (!r) {
            D(this, Rt, tn).call(this, { type: "pending", variables: t }),
              await ((s = (i = g(this, We).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const I = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            I !== this.state.context &&
              D(this, Rt, tn).call(this, {
                type: "pending",
                context: I,
                variables: t,
              });
          }
          const C = await n();
          return (
            await ((u = (l = g(this, We).config).onSuccess) == null
              ? void 0
              : u.call(l, C, t, this.state.context, this)),
            await ((f = (c = this.options).onSuccess) == null
              ? void 0
              : f.call(c, C, t, this.state.context)),
            await ((y = (d = g(this, We).config).onSettled) == null
              ? void 0
              : y.call(
                  d,
                  C,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((_ = (v = this.options).onSettled) == null
              ? void 0
              : _.call(v, C, null, t, this.state.context)),
            D(this, Rt, tn).call(this, { type: "success", data: C }),
            C
          );
        } catch (C) {
          try {
            throw (
              (await ((p = (S = g(this, We).config).onError) == null
                ? void 0
                : p.call(S, C, t, this.state.context, this)),
              await ((m = (h = this.options).onError) == null
                ? void 0
                : m.call(h, C, t, this.state.context)),
              await ((k = (w = g(this, We).config).onSettled) == null
                ? void 0
                : k.call(
                    w,
                    void 0,
                    C,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((x = (E = this.options).onSettled) == null
                ? void 0
                : x.call(E, void 0, C, t, this.state.context)),
              C)
            );
          } finally {
            D(this, Rt, tn).call(this, { type: "error", error: C });
          }
        }
      }
    }),
    (Tt = new WeakMap()),
    ($s = new WeakMap()),
    (We = new WeakMap()),
    (Xr = new WeakMap()),
    (Rt = new WeakSet()),
    (tn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: !gd(this.options.networkMode),
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        ce.batch(() => {
          g(this, Tt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            g(this, We).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    lp);
function zy() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var rt,
  As,
  er,
  up,
  a1 =
    ((up = class extends bi {
      constructor(t = {}) {
        super();
        j(this, rt, void 0);
        j(this, As, void 0);
        j(this, er, void 0);
        (this.config = t), b(this, rt, []), b(this, As, 0);
      }
      build(t, n, r) {
        const i = new o1({
          mutationCache: this,
          mutationId: ++eo(this, As)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        g(this, rt).push(t), this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        b(
          this,
          rt,
          g(this, rt).filter((n) => n !== t)
        ),
          this.notify({ type: "removed", mutation: t });
      }
      clear() {
        ce.batch(() => {
          g(this, rt).forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return g(this, rt);
      }
      find(t) {
        const n = { exact: !0, ...t };
        return g(this, rt).find((r) => Zf(n, r));
      }
      findAll(t = {}) {
        return g(this, rt).filter((n) => Zf(t, n));
      }
      notify(t) {
        ce.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        return (
          b(
            this,
            er,
            (g(this, er) ?? Promise.resolve())
              .then(() => {
                const t = g(this, rt).filter((n) => n.state.isPaused);
                return ce.batch(() =>
                  t.reduce(
                    (n, r) => n.then(() => r.continue().catch(it)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                b(this, er, void 0);
              })
          ),
          g(this, er)
        );
      }
    }),
    (rt = new WeakMap()),
    (As = new WeakMap()),
    (er = new WeakMap()),
    up);
function l1(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var v, _, S, p, h;
        const i = t.options,
          s =
            (S =
              (_ = (v = t.fetchOptions) == null ? void 0 : v.meta) == null
                ? void 0
                : _.fetchMore) == null
              ? void 0
              : S.direction,
          o = ((p = t.state.data) == null ? void 0 : p.pages) || [],
          a = ((h = t.state.data) == null ? void 0 : h.pageParams) || [],
          l = { pages: [], pageParams: [] };
        let u = !1;
        const c = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener("abort", () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          f =
            t.options.queryFn && t.options.queryFn !== md
              ? t.options.queryFn
              : () =>
                  Promise.reject(
                    new Error(`Missing queryFn: '${t.options.queryHash}'`)
                  ),
          d = async (m, w, k) => {
            if (u) return Promise.reject();
            if (w == null && m.pages.length) return Promise.resolve(m);
            const E = {
              queryKey: t.queryKey,
              pageParam: w,
              direction: k ? "backward" : "forward",
              meta: t.options.meta,
            };
            c(E);
            const x = await f(E),
              { maxPages: C } = t.options,
              I = k ? Xw : Yw;
            return {
              pages: I(m.pages, x, C),
              pageParams: I(m.pageParams, w, C),
            };
          };
        let y;
        if (s && o.length) {
          const m = s === "backward",
            w = m ? u1 : nh,
            k = { pages: o, pageParams: a },
            E = w(i, k);
          y = await d(k, E, m);
        } else {
          y = await d(l, a[0] ?? i.initialPageParam);
          const m = e ?? o.length;
          for (let w = 1; w < m; w++) {
            const k = nh(i, y);
            y = await d(y, k);
          }
        }
        return y;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var i, s;
            return (s = (i = t.options).persister) == null
              ? void 0
              : s.call(
                  i,
                  r,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = r);
    },
  };
}
function nh(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return e.getNextPageParam(t[r], t, n[r], n);
}
function u1(e, { pages: t, pageParams: n }) {
  var r;
  return (r = e.getPreviousPageParam) == null
    ? void 0
    : r.call(e, t[0], t, n[0], n);
}
var ie,
  hn,
  pn,
  Zr,
  ei,
  mn,
  ti,
  ni,
  cp,
  c1 =
    ((cp = class {
      constructor(e = {}) {
        j(this, ie, void 0);
        j(this, hn, void 0);
        j(this, pn, void 0);
        j(this, Zr, void 0);
        j(this, ei, void 0);
        j(this, mn, void 0);
        j(this, ti, void 0);
        j(this, ni, void 0);
        b(this, ie, e.queryCache || new s1()),
          b(this, hn, e.mutationCache || new a1()),
          b(this, pn, e.defaultOptions || {}),
          b(this, Zr, new Map()),
          b(this, ei, new Map()),
          b(this, mn, 0);
      }
      mount() {
        eo(this, mn)._++,
          g(this, mn) === 1 &&
            (b(
              this,
              ti,
              yd.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), g(this, ie).onFocus());
              })
            ),
            b(
              this,
              ni,
              ma.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), g(this, ie).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        eo(this, mn)._--,
          g(this, mn) === 0 &&
            ((e = g(this, ti)) == null || e.call(this),
            b(this, ti, void 0),
            (t = g(this, ni)) == null || t.call(this),
            b(this, ni, void 0));
      }
      isFetching(e) {
        return g(this, ie).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return g(this, hn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = g(this, ie).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = g(this, ie).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(n.staleTime) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return g(this, ie)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = g(this, ie).get(r.queryHash),
          s = i == null ? void 0 : i.state.data,
          o = Gw(t, s);
        if (o !== void 0)
          return g(this, ie)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return ce.batch(() =>
          g(this, ie)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = g(this, ie).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = g(this, ie);
        ce.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = g(this, ie),
          r = { type: "active", ...e };
        return ce.batch(
          () => (
            n.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = ce.batch(() =>
            g(this, ie)
              .findAll(e)
              .map((i) => i.cancel(n))
          );
        return Promise.all(r).then(it).catch(it);
      }
      invalidateQueries(e = {}, t = {}) {
        return ce.batch(() => {
          if (
            (g(this, ie)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = ce.batch(() =>
            g(this, ie)
              .findAll(e)
              .filter((i) => !i.isDisabled())
              .map((i) => {
                let s = i.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(it)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              })
          );
        return Promise.all(r).then(it);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = g(this, ie).build(this, t);
        return n.isStaleByTime(t.staleTime)
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(it).catch(it);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = l1(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(it).catch(it);
      }
      resumePausedMutations() {
        return ma.isOnline()
          ? g(this, hn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return g(this, ie);
      }
      getMutationCache() {
        return g(this, hn);
      }
      getDefaultOptions() {
        return g(this, pn);
      }
      setDefaultOptions(e) {
        b(this, pn, e);
      }
      setQueryDefaults(e, t) {
        g(this, Zr).set(pr(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...g(this, Zr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            xs(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        g(this, ei).set(pr(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...g(this, ei).values()];
        let n = {};
        return (
          t.forEach((r) => {
            xs(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...g(this, pn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = pd(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === md && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...g(this, pn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        g(this, ie).clear(), g(this, hn).clear();
      }
    }),
    (ie = new WeakMap()),
    (hn = new WeakMap()),
    (pn = new WeakMap()),
    (Zr = new WeakMap()),
    (ei = new WeakMap()),
    (mn = new WeakMap()),
    (ti = new WeakMap()),
    (ni = new WeakMap()),
    cp),
  Ae,
  G,
  Is,
  Pe,
  tr,
  ri,
  jt,
  Ls,
  ii,
  si,
  nr,
  rr,
  yn,
  oi,
  ir,
  qi,
  Ns,
  Hu,
  Ds,
  Wu,
  zs,
  qu,
  Fs,
  Vu,
  Ms,
  Ku,
  Us,
  Gu,
  Bs,
  Ju,
  xa,
  Fy,
  dp,
  d1 =
    ((dp = class extends bi {
      constructor(t, n) {
        super();
        j(this, ir);
        j(this, Ns);
        j(this, Ds);
        j(this, zs);
        j(this, Fs);
        j(this, Ms);
        j(this, Us);
        j(this, Bs);
        j(this, xa);
        j(this, Ae, void 0);
        j(this, G, void 0);
        j(this, Is, void 0);
        j(this, Pe, void 0);
        j(this, tr, void 0);
        j(this, ri, void 0);
        j(this, jt, void 0);
        j(this, Ls, void 0);
        j(this, ii, void 0);
        j(this, si, void 0);
        j(this, nr, void 0);
        j(this, rr, void 0);
        j(this, yn, void 0);
        j(this, oi, new Set());
        (this.options = n),
          b(this, Ae, t),
          b(this, jt, null),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (g(this, G).addObserver(this),
          rh(g(this, G), this.options)
            ? D(this, ir, qi).call(this)
            : this.updateResult(),
          D(this, Fs, Vu).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Yu(g(this, G), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Yu(g(this, G), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          D(this, Ms, Ku).call(this),
          D(this, Us, Gu).call(this),
          g(this, G).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          i = g(this, G);
        if (
          ((this.options = g(this, Ae).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        D(this, Bs, Ju).call(this),
          g(this, G).setOptions(this.options),
          r._defaulted &&
            !pa(this.options, r) &&
            g(this, Ae)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: g(this, G),
                observer: this,
              });
        const s = this.hasListeners();
        s && ih(g(this, G), i, this.options, r) && D(this, ir, qi).call(this),
          this.updateResult(n),
          s &&
            (g(this, G) !== i ||
              this.options.enabled !== r.enabled ||
              this.options.staleTime !== r.staleTime) &&
            D(this, Ns, Hu).call(this);
        const o = D(this, Ds, Wu).call(this);
        s &&
          (g(this, G) !== i ||
            this.options.enabled !== r.enabled ||
            o !== g(this, yn)) &&
          D(this, zs, qu).call(this, o);
      }
      getOptimisticResult(t) {
        const n = g(this, Ae).getQueryCache().build(g(this, Ae), t),
          r = this.createResult(n, t);
        return (
          h1(this, r) &&
            (b(this, Pe, r),
            b(this, ri, this.options),
            b(this, tr, g(this, G).state)),
          r
        );
      }
      getCurrentResult() {
        return g(this, Pe);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((i) => {
            Object.defineProperty(r, i, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(i), n == null || n(i), t[i]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        g(this, oi).add(t);
      }
      getCurrentQuery() {
        return g(this, G);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = g(this, Ae).defaultQueryOptions(t),
          r = g(this, Ae).getQueryCache().build(g(this, Ae), n);
        return (
          (r.isFetchingOptimistic = !0),
          r.fetch().then(() => this.createResult(r, n))
        );
      }
      fetch(t) {
        return D(this, ir, qi)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), g(this, Pe)));
      }
      createResult(t, n) {
        var x;
        const r = g(this, G),
          i = this.options,
          s = g(this, Pe),
          o = g(this, tr),
          a = g(this, ri),
          u = t !== r ? t.state : g(this, Is),
          { state: c } = t;
        let f = { ...c },
          d = !1,
          y;
        if (n._optimisticResults) {
          const C = this.hasListeners(),
            I = !C && rh(t, n),
            N = C && ih(t, r, n, i);
          (I || N) && (f = { ...f, ...Dy(c.data, t.options) }),
            n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
        }
        let { error: v, errorUpdatedAt: _, status: S } = f;
        if (n.select && f.data !== void 0)
          if (
            s &&
            f.data === (o == null ? void 0 : o.data) &&
            n.select === g(this, Ls)
          )
            y = g(this, ii);
          else
            try {
              b(this, Ls, n.select),
                (y = n.select(f.data)),
                (y = Qu(s == null ? void 0 : s.data, y, n)),
                b(this, ii, y),
                b(this, jt, null);
            } catch (C) {
              b(this, jt, C);
            }
        else y = f.data;
        if (n.placeholderData !== void 0 && y === void 0 && S === "pending") {
          let C;
          if (
            s != null &&
            s.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            C = s.data;
          else if (
            ((C =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (x = g(this, si)) == null ? void 0 : x.state.data,
                    g(this, si)
                  )
                : n.placeholderData),
            n.select && C !== void 0)
          )
            try {
              (C = n.select(C)), b(this, jt, null);
            } catch (I) {
              b(this, jt, I);
            }
          C !== void 0 &&
            ((S = "success"),
            (y = Qu(s == null ? void 0 : s.data, C, n)),
            (d = !0));
        }
        g(this, jt) &&
          ((v = g(this, jt)),
          (y = g(this, ii)),
          (_ = Date.now()),
          (S = "error"));
        const p = f.fetchStatus === "fetching",
          h = S === "pending",
          m = S === "error",
          w = h && p,
          k = y !== void 0;
        return {
          status: S,
          fetchStatus: f.fetchStatus,
          isPending: h,
          isSuccess: S === "success",
          isError: m,
          isInitialLoading: w,
          isLoading: w,
          data: y,
          dataUpdatedAt: f.dataUpdatedAt,
          error: v,
          errorUpdatedAt: _,
          failureCount: f.fetchFailureCount,
          failureReason: f.fetchFailureReason,
          errorUpdateCount: f.errorUpdateCount,
          isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
          isFetchedAfterMount:
            f.dataUpdateCount > u.dataUpdateCount ||
            f.errorUpdateCount > u.errorUpdateCount,
          isFetching: p,
          isRefetching: p && !h,
          isLoadingError: m && !k,
          isPaused: f.fetchStatus === "paused",
          isPlaceholderData: d,
          isRefetchError: m && k,
          isStale: vd(t, n),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const n = g(this, Pe),
          r = this.createResult(g(this, G), this.options);
        if (
          (b(this, tr, g(this, G).state),
          b(this, ri, this.options),
          g(this, tr).data !== void 0 && b(this, si, g(this, G)),
          pa(r, n))
        )
          return;
        b(this, Pe, r);
        const i = {},
          s = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == "function" ? o() : o;
            if (a === "all" || (!a && !g(this, oi).size)) return !0;
            const l = new Set(a ?? g(this, oi));
            return (
              this.options.throwOnError && l.add("error"),
              Object.keys(g(this, Pe)).some((u) => {
                const c = u;
                return g(this, Pe)[c] !== n[c] && l.has(c);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0),
          D(this, xa, Fy).call(this, { ...i, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && D(this, Fs, Vu).call(this);
      }
    }),
    (Ae = new WeakMap()),
    (G = new WeakMap()),
    (Is = new WeakMap()),
    (Pe = new WeakMap()),
    (tr = new WeakMap()),
    (ri = new WeakMap()),
    (jt = new WeakMap()),
    (Ls = new WeakMap()),
    (ii = new WeakMap()),
    (si = new WeakMap()),
    (nr = new WeakMap()),
    (rr = new WeakMap()),
    (yn = new WeakMap()),
    (oi = new WeakMap()),
    (ir = new WeakSet()),
    (qi = function (t) {
      D(this, Bs, Ju).call(this);
      let n = g(this, G).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(it)), n;
    }),
    (Ns = new WeakSet()),
    (Hu = function () {
      if (
        (D(this, Ms, Ku).call(this),
        mi || g(this, Pe).isStale || !Uu(this.options.staleTime))
      )
        return;
      const n = $y(g(this, Pe).dataUpdatedAt, this.options.staleTime) + 1;
      b(
        this,
        nr,
        setTimeout(() => {
          g(this, Pe).isStale || this.updateResult();
        }, n)
      );
    }),
    (Ds = new WeakSet()),
    (Wu = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(g(this, G))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (zs = new WeakSet()),
    (qu = function (t) {
      D(this, Us, Gu).call(this),
        b(this, yn, t),
        !(
          mi ||
          this.options.enabled === !1 ||
          !Uu(g(this, yn)) ||
          g(this, yn) === 0
        ) &&
          b(
            this,
            rr,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || yd.isFocused()) &&
                D(this, ir, qi).call(this);
            }, g(this, yn))
          );
    }),
    (Fs = new WeakSet()),
    (Vu = function () {
      D(this, Ns, Hu).call(this),
        D(this, zs, qu).call(this, D(this, Ds, Wu).call(this));
    }),
    (Ms = new WeakSet()),
    (Ku = function () {
      g(this, nr) && (clearTimeout(g(this, nr)), b(this, nr, void 0));
    }),
    (Us = new WeakSet()),
    (Gu = function () {
      g(this, rr) && (clearInterval(g(this, rr)), b(this, rr, void 0));
    }),
    (Bs = new WeakSet()),
    (Ju = function () {
      const t = g(this, Ae).getQueryCache().build(g(this, Ae), this.options);
      if (t === g(this, G)) return;
      const n = g(this, G);
      b(this, G, t),
        b(this, Is, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (xa = new WeakSet()),
    (Fy = function (t) {
      ce.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(g(this, Pe));
          }),
          g(this, Ae)
            .getQueryCache()
            .notify({ query: g(this, G), type: "observerResultsUpdated" });
      });
    }),
    dp);
function f1(e, t) {
  return (
    t.enabled !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function rh(e, t) {
  return f1(e, t) || (e.state.data !== void 0 && Yu(e, t, t.refetchOnMount));
}
function Yu(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && vd(e, t));
  }
  return !1;
}
function ih(e, t, n, r) {
  return (
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    vd(e, n)
  );
}
function vd(e, t) {
  return t.enabled !== !1 && e.isStaleByTime(t.staleTime);
}
function h1(e, t) {
  return !pa(e.getCurrentResult(), t);
}
var gn,
  vn,
  Ie,
  Ut,
  ai,
  zo,
  Qs,
  Xu,
  fp,
  p1 =
    ((fp = class extends bi {
      constructor(n, r) {
        super();
        j(this, ai);
        j(this, Qs);
        j(this, gn, void 0);
        j(this, vn, void 0);
        j(this, Ie, void 0);
        j(this, Ut, void 0);
        b(this, gn, n),
          this.setOptions(r),
          this.bindMethods(),
          D(this, ai, zo).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(n) {
        var i;
        const r = this.options;
        (this.options = g(this, gn).defaultMutationOptions(n)),
          pa(this.options, r) ||
            g(this, gn)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: g(this, Ie),
                observer: this,
              }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          pr(r.mutationKey) !== pr(this.options.mutationKey)
            ? this.reset()
            : ((i = g(this, Ie)) == null ? void 0 : i.state.status) ===
                "pending" && g(this, Ie).setOptions(this.options);
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          (n = g(this, Ie)) == null ||
          n.removeObserver(this);
      }
      onMutationUpdate(n) {
        D(this, ai, zo).call(this), D(this, Qs, Xu).call(this, n);
      }
      getCurrentResult() {
        return g(this, vn);
      }
      reset() {
        var n;
        (n = g(this, Ie)) == null || n.removeObserver(this),
          b(this, Ie, void 0),
          D(this, ai, zo).call(this),
          D(this, Qs, Xu).call(this);
      }
      mutate(n, r) {
        var i;
        return (
          b(this, Ut, r),
          (i = g(this, Ie)) == null || i.removeObserver(this),
          b(
            this,
            Ie,
            g(this, gn).getMutationCache().build(g(this, gn), this.options)
          ),
          g(this, Ie).addObserver(this),
          g(this, Ie).execute(n)
        );
      }
    }),
    (gn = new WeakMap()),
    (vn = new WeakMap()),
    (Ie = new WeakMap()),
    (Ut = new WeakMap()),
    (ai = new WeakSet()),
    (zo = function () {
      var r;
      const n = ((r = g(this, Ie)) == null ? void 0 : r.state) ?? zy();
      b(this, vn, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Qs = new WeakSet()),
    (Xu = function (n) {
      ce.batch(() => {
        var r, i, s, o, a, l, u, c;
        if (g(this, Ut) && this.hasListeners()) {
          const f = g(this, vn).variables,
            d = g(this, vn).context;
          (n == null ? void 0 : n.type) === "success"
            ? ((i = (r = g(this, Ut)).onSuccess) == null ||
                i.call(r, n.data, f, d),
              (o = (s = g(this, Ut)).onSettled) == null ||
                o.call(s, n.data, null, f, d))
            : (n == null ? void 0 : n.type) === "error" &&
              ((l = (a = g(this, Ut)).onError) == null ||
                l.call(a, n.error, f, d),
              (c = (u = g(this, Ut)).onSettled) == null ||
                c.call(u, void 0, n.error, f, d));
        }
        this.listeners.forEach((f) => {
          f(g(this, vn));
        });
      });
    }),
    fp),
  My = W.createContext(void 0),
  Uy = (e) => {
    const t = W.useContext(My);
    if (e) return e;
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  m1 = ({ client: e, children: t }) => (
    W.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    O.jsx(My.Provider, { value: e, children: t })
  ),
  By = W.createContext(!1),
  y1 = () => W.useContext(By);
By.Provider;
function g1() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var v1 = W.createContext(g1()),
  w1 = () => W.useContext(v1);
function Qy(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function _1() {}
var S1 = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  k1 = (e) => {
    W.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  E1 = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && Qy(n, [e.error, r]),
  C1 = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  x1 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  O1 = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function P1(e, t, n) {
  const r = Uy(n),
    i = y1(),
    s = w1(),
    o = r.defaultQueryOptions(e);
  (o._optimisticResults = i ? "isRestoring" : "optimistic"),
    C1(o),
    S1(o, s),
    k1(s);
  const [a] = W.useState(() => new t(r, o)),
    l = a.getOptimisticResult(o);
  if (
    (W.useSyncExternalStore(
      W.useCallback(
        (u) => {
          const c = i ? () => {} : a.subscribe(ce.batchCalls(u));
          return a.updateResult(), c;
        },
        [a, i]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    W.useEffect(() => {
      a.setOptions(o, { listeners: !1 });
    }, [o, a]),
    x1(o, l))
  )
    throw O1(o, a, s);
  if (
    E1({
      result: l,
      errorResetBoundary: s,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
    })
  )
    throw l.error;
  return o.notifyOnChangeProps ? l : a.trackResult(l);
}
function b1(e, t) {
  return P1(e, d1, t);
}
function T1(e, t) {
  const n = Uy(t),
    [r] = W.useState(() => new p1(n, e));
  W.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const i = W.useSyncExternalStore(
      W.useCallback((o) => r.subscribe(ce.batchCalls(o)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult()
    ),
    s = W.useCallback(
      (o, a) => {
        r.mutate(o, a).catch(_1);
      },
      [r]
    );
  if (i.error && Qy(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: s, mutateAsync: i.mutate };
}
function ye(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var R1 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  sh = R1,
  jl = () => Math.random().toString(36).substring(7).split("").join("."),
  j1 = {
    INIT: `@@redux/INIT${jl()}`,
    REPLACE: `@@redux/REPLACE${jl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${jl()}`,
  },
  ya = j1;
function wd(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Hy(e, t, n) {
  if (typeof e != "function") throw new Error(ye(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ye(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ye(1));
    return n(Hy)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    o = s,
    a = 0,
    l = !1;
  function u() {
    o === s &&
      ((o = new Map()),
      s.forEach((S, p) => {
        o.set(p, S);
      }));
  }
  function c() {
    if (l) throw new Error(ye(3));
    return i;
  }
  function f(S) {
    if (typeof S != "function") throw new Error(ye(4));
    if (l) throw new Error(ye(5));
    let p = !0;
    u();
    const h = a++;
    return (
      o.set(h, S),
      function () {
        if (p) {
          if (l) throw new Error(ye(6));
          (p = !1), u(), o.delete(h), (s = null);
        }
      }
    );
  }
  function d(S) {
    if (!wd(S)) throw new Error(ye(7));
    if (typeof S.type > "u") throw new Error(ye(8));
    if (typeof S.type != "string") throw new Error(ye(17));
    if (l) throw new Error(ye(9));
    try {
      (l = !0), (i = r(i, S));
    } finally {
      l = !1;
    }
    return (
      (s = o).forEach((h) => {
        h();
      }),
      S
    );
  }
  function y(S) {
    if (typeof S != "function") throw new Error(ye(10));
    (r = S), d({ type: ya.REPLACE });
  }
  function v() {
    const S = f;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(ye(11));
        function h() {
          const w = p;
          w.next && w.next(c());
        }
        return h(), { unsubscribe: S(h) };
      },
      [sh]() {
        return this;
      },
    };
  }
  return (
    d({ type: ya.INIT }),
    { dispatch: d, subscribe: f, getState: c, replaceReducer: y, [sh]: v }
  );
}
function $1(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: ya.INIT }) > "u") throw new Error(ye(12));
    if (typeof n(void 0, { type: ya.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ye(13));
  });
}
function A1(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let i;
  try {
    $1(n);
  } catch (s) {
    i = s;
  }
  return function (o = {}, a) {
    if (i) throw i;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        d = n[f],
        y = o[f],
        v = d(y, a);
      if (typeof v > "u") throw (a && a.type, new Error(ye(14)));
      (u[f] = v), (l = l || v !== y);
    }
    return (l = l || r.length !== Object.keys(o).length), l ? u : o;
  };
}
function ga(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function I1(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let s = () => {
      throw new Error(ye(15));
    };
    const o = { getState: i.getState, dispatch: (l, ...u) => s(l, ...u) },
      a = e.map((l) => l(o));
    return (s = ga(...a)(i.dispatch)), { ...i, dispatch: s };
  };
}
function L1(e) {
  return wd(e) && "type" in e && typeof e.type == "string";
}
var Wy = Symbol.for("immer-nothing"),
  oh = Symbol.for("immer-draftable"),
  Ye = Symbol.for("immer-state");
function St(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var yi = Object.getPrototypeOf;
function $n(e) {
  return !!e && !!e[Ye];
}
function Jt(e) {
  var t;
  return e
    ? qy(e) ||
        Array.isArray(e) ||
        !!e[oh] ||
        !!((t = e.constructor) != null && t[oh]) ||
        Qa(e) ||
        Ha(e)
    : !1;
}
var N1 = Object.prototype.constructor.toString();
function qy(e) {
  if (!e || typeof e != "object") return !1;
  const t = yi(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === N1;
}
function va(e, t) {
  Ba(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Ba(e) {
  const t = e[Ye];
  return t ? t.type_ : Array.isArray(e) ? 1 : Qa(e) ? 2 : Ha(e) ? 3 : 0;
}
function Zu(e, t) {
  return Ba(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Vy(e, t, n) {
  const r = Ba(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function D1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Qa(e) {
  return e instanceof Map;
}
function Ha(e) {
  return e instanceof Set;
}
function Hn(e) {
  return e.copy_ || e.base_;
}
function ec(e, t) {
  if (Qa(e)) return new Map(e);
  if (Ha(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && qy(e))
    return yi(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Ye];
  let r = Reflect.ownKeys(n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i],
      o = n[s];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (n[s] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[s],
        });
  }
  return Object.create(yi(e), n);
}
function _d(e, t = !1) {
  return (
    Wa(e) ||
      $n(e) ||
      !Jt(e) ||
      (Ba(e) > 1 && (e.set = e.add = e.clear = e.delete = z1),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => _d(r, !0))),
    e
  );
}
function z1() {
  St(2);
}
function Wa(e) {
  return Object.isFrozen(e);
}
var F1 = {};
function mr(e) {
  const t = F1[e];
  return t || St(0, e), t;
}
var Os;
function Ky() {
  return Os;
}
function M1(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function ah(e, t) {
  t &&
    (mr("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function tc(e) {
  nc(e), e.drafts_.forEach(U1), (e.drafts_ = null);
}
function nc(e) {
  e === Os && (Os = e.parent_);
}
function lh(e) {
  return (Os = M1(Os, e));
}
function U1(e) {
  const t = e[Ye];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function uh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ye].modified_ && (tc(t), St(4)),
        Jt(e) && ((e = wa(t, e)), t.parent_ || _a(t, e)),
        t.patches_ &&
          mr("Patches").generateReplacementPatches_(
            n[Ye].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = wa(t, n, [])),
    tc(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Wy ? e : void 0
  );
}
function wa(e, t, n) {
  if (Wa(t)) return t;
  const r = t[Ye];
  if (!r) return va(t, (i, s) => ch(e, r, t, i, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return _a(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i,
      o = !1;
    r.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      va(s, (a, l) => ch(e, r, i, a, l, n, o)),
      _a(e, i, !1),
      n &&
        e.patches_ &&
        mr("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function ch(e, t, n, r, i, s, o) {
  if ($n(i)) {
    const a =
        s && t && t.type_ !== 3 && !Zu(t.assigned_, r) ? s.concat(r) : void 0,
      l = wa(e, i, a);
    if ((Vy(n, r, l), $n(l))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(i);
  if (Jt(i) && !Wa(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    wa(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        _a(e, i);
  }
}
function _a(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && _d(t, n);
}
function B1(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Ky(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    s = Sd;
  n && ((i = [r]), (s = Ps));
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return (r.draft_ = a), (r.revoke_ = o), a;
}
var Sd = {
    get(e, t) {
      if (t === Ye) return e;
      const n = Hn(e);
      if (!Zu(n, t)) return Q1(e, n, t);
      const r = n[t];
      return e.finalized_ || !Jt(r)
        ? r
        : r === $l(e.base_, t)
        ? (Al(e), (e.copy_[t] = ic(r, e)))
        : r;
    },
    has(e, t) {
      return t in Hn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Hn(e));
    },
    set(e, t, n) {
      const r = Gy(Hn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = $l(Hn(e), t),
          s = i == null ? void 0 : i[Ye];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (D1(n, i) && (n !== void 0 || Zu(e.base_, t))) return !0;
        Al(e), rc(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        $l(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Al(e), rc(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Hn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      St(11);
    },
    getPrototypeOf(e) {
      return yi(e.base_);
    },
    setPrototypeOf() {
      St(12);
    },
  },
  Ps = {};
va(Sd, (e, t) => {
  Ps[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Ps.deleteProperty = function (e, t) {
  return Ps.set.call(this, e, t, void 0);
};
Ps.set = function (e, t, n) {
  return Sd.set.call(this, e[0], t, n, e[0]);
};
function $l(e, t) {
  const n = e[Ye];
  return (n ? Hn(n) : e)[t];
}
function Q1(e, t, n) {
  var i;
  const r = Gy(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function Gy(e, t) {
  if (!(t in e)) return;
  let n = yi(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = yi(n);
  }
}
function rc(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && rc(e.parent_));
}
function Al(e) {
  e.copy_ || (e.copy_ = ec(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var H1 = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const o = this;
          return function (l = s, ...u) {
            return o.produce(l, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != "function" && St(6),
          r !== void 0 && typeof r != "function" && St(7);
        let i;
        if (Jt(t)) {
          const s = lh(this),
            o = ic(t, void 0);
          let a = !0;
          try {
            (i = n(o)), (a = !1);
          } finally {
            a ? tc(s) : nc(s);
          }
          return ah(s, r), uh(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === Wy && (i = void 0),
            this.autoFreeze_ && _d(i, !0),
            r)
          ) {
            const s = [],
              o = [];
            mr("Patches").generateReplacementPatches_(t, i, s, o), r(s, o);
          }
          return i;
        } else St(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...a) => this.produceWithPatches(o, (l) => t(l, ...a));
        let r, i;
        return [
          this.produce(t, n, (o, a) => {
            (r = o), (i = a);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Jt(e) || St(8), $n(e) && (e = Jy(e));
    const t = lh(this),
      n = ic(e, void 0);
    return (n[Ye].isManual_ = !0), nc(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ye];
    (!n || !n.isManual_) && St(9);
    const { scope_: r } = n;
    return ah(r, t), uh(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = mr("Patches").applyPatches_;
    return $n(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function ic(e, t) {
  const n = Qa(e)
    ? mr("MapSet").proxyMap_(e, t)
    : Ha(e)
    ? mr("MapSet").proxySet_(e, t)
    : B1(e, t);
  return (t ? t.scope_ : Ky()).drafts_.push(n), n;
}
function Jy(e) {
  return $n(e) || St(10, e), Yy(e);
}
function Yy(e) {
  if (!Jt(e) || Wa(e)) return e;
  const t = e[Ye];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = ec(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = ec(e, !0);
  return (
    va(n, (r, i) => {
      Vy(n, r, Yy(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Xe = new H1(),
  Xy = Xe.produce;
Xe.produceWithPatches.bind(Xe);
Xe.setAutoFreeze.bind(Xe);
Xe.setUseStrictShallowCopy.bind(Xe);
Xe.applyPatches.bind(Xe);
Xe.createDraft.bind(Xe);
Xe.finishDraft.bind(Xe);
function W1(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function q1(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function V1(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var dh = (e) => (Array.isArray(e) ? e : [e]);
function K1(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    V1(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function G1(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var J1 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Y1 = typeof WeakRef < "u" ? WeakRef : J1,
  X1 = 0,
  fh = 1;
function wo() {
  return { s: X1, v: void 0, o: null, p: null };
}
function kd(e, t = {}) {
  let n = wo();
  const { resultEqualityCheck: r } = t;
  let i,
    s = 0;
  function o() {
    var f;
    let a = n;
    const { length: l } = arguments;
    for (let d = 0, y = l; d < y; d++) {
      const v = arguments[d];
      if (typeof v == "function" || (typeof v == "object" && v !== null)) {
        let _ = a.o;
        _ === null && (a.o = _ = new WeakMap());
        const S = _.get(v);
        S === void 0 ? ((a = wo()), _.set(v, a)) : (a = S);
      } else {
        let _ = a.p;
        _ === null && (a.p = _ = new Map());
        const S = _.get(v);
        S === void 0 ? ((a = wo()), _.set(v, a)) : (a = S);
      }
    }
    const u = a;
    let c;
    if (
      (a.s === fh ? (c = a.v) : ((c = e.apply(null, arguments)), s++),
      (u.s = fh),
      r)
    ) {
      const d =
        ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i;
      d != null && r(d, c) && ((c = d), s !== 0 && s--),
        (i =
          (typeof c == "object" && c !== null) || typeof c == "function"
            ? new Y1(c)
            : c);
    }
    return (u.v = c), c;
  }
  return (
    (o.clearCache = () => {
      (n = wo()), o.resetResultsCount();
    }),
    (o.resultsCount = () => s),
    (o.resetResultsCount = () => {
      s = 0;
    }),
    o
  );
}
function Zy(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let s = 0,
        o = 0,
        a,
        l = {},
        u = i.pop();
      typeof u == "object" && ((l = u), (u = i.pop())),
        W1(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        );
      const c = { ...n, ...l },
        {
          memoize: f,
          memoizeOptions: d = [],
          argsMemoize: y = kd,
          argsMemoizeOptions: v = [],
          devModeChecks: _ = {},
        } = c,
        S = dh(d),
        p = dh(v),
        h = K1(i),
        m = f(function () {
          return s++, u.apply(null, arguments);
        }, ...S),
        w = y(function () {
          o++;
          const E = G1(h, arguments);
          return (a = m.apply(null, E)), a;
        }, ...p);
      return Object.assign(w, {
        resultFunc: u,
        memoizedResultFunc: m,
        dependencies: h,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => a,
        recomputations: () => s,
        resetRecomputations: () => {
          s = 0;
        },
        memoize: f,
        argsMemoize: y,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Z1 = Zy(kd),
  e_ = Object.assign(
    (e, t = Z1) => {
      q1(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((s) => e[s]);
      return t(r, (...s) => s.reduce((o, a, l) => ((o[n[l]] = a), o), {}));
    },
    { withTypes: () => e_ }
  );
function eg(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : i(s);
}
var t_ = eg(),
  n_ = eg,
  r_ = (...e) => {
    const t = Zy(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            s = (o, ...a) => i($n(o) ? Jy(o) : o, ...a);
          return Object.assign(s, i), s;
        },
        { withTypes: () => n }
      );
    return n;
  };
r_(kd);
var i_ =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ga
              : ga.apply(null, arguments);
        },
  s_ = (e) => e && typeof e.match == "function";
function Wt(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(Ue(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => L1(r) && r.type === e),
    n
  );
}
var tg = class Vi extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Vi.prototype);
  }
  static get [Symbol.species]() {
    return Vi;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Vi(...t[0].concat(this))
      : new Vi(...t.concat(this));
  }
};
function hh(e) {
  return Jt(e) ? Xy(e, () => {}) : e;
}
function ph(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(Ue(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function o_(e) {
  return typeof e == "boolean";
}
var a_ = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let o = new tg();
      return n && (o_(n) ? o.push(t_) : o.push(n_(n.extraArgument))), o;
    },
  l_ = "RTK_autoBatch",
  ng = (e) => (t) => {
    setTimeout(t, e);
  },
  u_ =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : ng(10),
  c_ =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        s = !1,
        o = !1;
      const a = new Set(),
        l =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? u_
            : e.type === "callback"
            ? e.queueNotification
            : ng(e.timeout),
        u = () => {
          (o = !1), s && ((s = !1), a.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => i && c(),
            d = r.subscribe(f);
          return (
            a.add(c),
            () => {
              d(), a.delete(c);
            }
          );
        },
        dispatch(c) {
          var f;
          try {
            return (
              (i = !((f = c == null ? void 0 : c.meta) != null && f[l_])),
              (s = !i),
              s && (o || ((o = !0), l(u))),
              r.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  d_ = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new tg(e);
      return r && i.push(c_(typeof r == "object" ? r : void 0)), i;
    },
  f_ = !0;
function h_(e) {
  const t = a_(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: o = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (wd(n)) a = A1(n);
  else throw new Error(Ue(1));
  let l;
  typeof r == "function" ? (l = r(t)) : (l = t());
  let u = ga;
  i && (u = i_({ trace: !f_, ...(typeof i == "object" && i) }));
  const c = I1(...l),
    f = d_(c);
  let d = typeof o == "function" ? o(f) : f();
  const y = u(...d);
  return Hy(a, s, y);
}
function rg(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(s, o) {
      const a = typeof s == "string" ? s : s.type;
      if (!a) throw new Error(Ue(28));
      if (a in t) throw new Error(Ue(29));
      return (t[a] = o), i;
    },
    addMatcher(s, o) {
      return n.push({ matcher: s, reducer: o }), i;
    },
    addDefaultCase(s) {
      return (r = s), i;
    },
  };
  return e(i), [t, n, r];
}
function p_(e) {
  return typeof e == "function";
}
function m_(e, t) {
  let [n, r, i] = rg(t),
    s;
  if (p_(e)) s = () => hh(e());
  else {
    const a = hh(e);
    s = () => a;
  }
  function o(a = s(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [i]),
      u.reduce((c, f) => {
        if (f)
          if ($n(c)) {
            const y = f(c, l);
            return y === void 0 ? c : y;
          } else {
            if (Jt(c)) return Xy(c, (d) => f(d, l));
            {
              const d = f(c, l);
              if (d === void 0) {
                if (c === null) return c;
                throw new Error(Ue(9));
              }
              return d;
            }
          }
        return c;
      }, a)
    );
  }
  return (o.getInitialState = s), o;
}
var y_ = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  ig = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += y_[(Math.random() * 64) | 0];
    return t;
  },
  g_ = (e, t) => (s_(e) ? e.match(t) : e(t));
function v_(...e) {
  return (t) => e.some((n) => g_(n, t));
}
var w_ = ["name", "message", "stack", "code"],
  Il = class {
    constructor(e, t) {
      nl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  mh = class {
    constructor(e, t) {
      nl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  __ = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of w_) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  S_ = (() => {
    function e(t, n, r) {
      const i = Wt(t + "/fulfilled", (l, u, c, f) => ({
          payload: l,
          meta: {
            ...(f || {}),
            arg: c,
            requestId: u,
            requestStatus: "fulfilled",
          },
        })),
        s = Wt(t + "/pending", (l, u, c) => ({
          payload: void 0,
          meta: {
            ...(c || {}),
            arg: u,
            requestId: l,
            requestStatus: "pending",
          },
        })),
        o = Wt(t + "/rejected", (l, u, c, f, d) => ({
          payload: f,
          error: ((r && r.serializeError) || __)(l || "Rejected"),
          meta: {
            ...(d || {}),
            arg: c,
            requestId: u,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (l == null ? void 0 : l.name) === "AbortError",
            condition: (l == null ? void 0 : l.name) === "ConditionError",
          },
        }));
      function a(l) {
        return (u, c, f) => {
          const d = r != null && r.idGenerator ? r.idGenerator(l) : ig(),
            y = new AbortController();
          let v, _;
          function S(h) {
            (_ = h), y.abort();
          }
          const p = (async function () {
            var w, k;
            let h;
            try {
              let E =
                (w = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : w.call(r, l, { getState: c, extra: f });
              if ((E_(E) && (E = await E), E === !1 || y.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const x = new Promise((C, I) => {
                (v = () => {
                  I({ name: "AbortError", message: _ || "Aborted" });
                }),
                  y.signal.addEventListener("abort", v);
              });
              u(
                s(
                  d,
                  l,
                  (k = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : k.call(
                        r,
                        { requestId: d, arg: l },
                        { getState: c, extra: f }
                      )
                )
              ),
                (h = await Promise.race([
                  x,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: c,
                      extra: f,
                      requestId: d,
                      signal: y.signal,
                      abort: S,
                      rejectWithValue: (C, I) => new Il(C, I),
                      fulfillWithValue: (C, I) => new mh(C, I),
                    })
                  ).then((C) => {
                    if (C instanceof Il) throw C;
                    return C instanceof mh
                      ? i(C.payload, d, l, C.meta)
                      : i(C, d, l);
                  }),
                ]));
            } catch (E) {
              h =
                E instanceof Il ? o(null, d, l, E.payload, E.meta) : o(E, d, l);
            } finally {
              v && y.signal.removeEventListener("abort", v);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                o.match(h) &&
                h.meta.condition) ||
                u(h),
              h
            );
          })();
          return Object.assign(p, {
            abort: S,
            requestId: d,
            arg: l,
            unwrap() {
              return p.then(k_);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: s,
        rejected: o,
        fulfilled: i,
        settled: v_(o, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function k_(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function E_(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var C_ = Symbol.for("rtk-slice-createasyncthunk");
function x_(e, t) {
  return `${e}/${t}`;
}
function O_({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[C_];
  return function (i) {
    const { name: s, reducerPath: o = s } = i;
    if (!s) throw new Error(Ue(11));
    typeof process < "u";
    const a =
        (typeof i.reducers == "function" ? i.reducers(b_()) : i.reducers) || {},
      l = Object.keys(a),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(m, w) {
          const k = typeof m == "string" ? m : m.type;
          if (!k) throw new Error(Ue(12));
          if (k in u.sliceCaseReducersByType) throw new Error(Ue(13));
          return (u.sliceCaseReducersByType[k] = w), c;
        },
        addMatcher(m, w) {
          return u.sliceMatchers.push({ matcher: m, reducer: w }), c;
        },
        exposeAction(m, w) {
          return (u.actionCreators[m] = w), c;
        },
        exposeCaseReducer(m, w) {
          return (u.sliceCaseReducersByName[m] = w), c;
        },
      };
    l.forEach((m) => {
      const w = a[m],
        k = {
          reducerName: m,
          type: x_(s, m),
          createNotation: typeof i.reducers == "function",
        };
      R_(w) ? $_(k, w, c, t) : T_(k, w, c);
    });
    function f() {
      const [m = {}, w = [], k = void 0] =
          typeof i.extraReducers == "function"
            ? rg(i.extraReducers)
            : [i.extraReducers],
        E = { ...m, ...u.sliceCaseReducersByType };
      return m_(i.initialState, (x) => {
        for (let C in E) x.addCase(C, E[C]);
        for (let C of u.sliceMatchers) x.addMatcher(C.matcher, C.reducer);
        for (let C of w) x.addMatcher(C.matcher, C.reducer);
        k && x.addDefaultCase(k);
      });
    }
    const d = (m) => m,
      y = new Map();
    let v;
    function _(m, w) {
      return v || (v = f()), v(m, w);
    }
    function S() {
      return v || (v = f()), v.getInitialState();
    }
    function p(m, w = !1) {
      function k(x) {
        let C = x[m];
        return typeof C > "u" && w && (C = S()), C;
      }
      function E(x = d) {
        const C = ph(y, w, { insert: () => new WeakMap() });
        return ph(C, x, {
          insert: () => {
            const I = {};
            for (const [N, xe] of Object.entries(i.selectors ?? {}))
              I[N] = P_(xe, x, S, w);
            return I;
          },
        });
      }
      return {
        reducerPath: m,
        getSelectors: E,
        get selectors() {
          return E(k);
        },
        selectSlice: k,
      };
    }
    const h = {
      name: s,
      reducer: _,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: S,
      ...p(o),
      injectInto(m, { reducerPath: w, ...k } = {}) {
        const E = w ?? o;
        return (
          m.inject({ reducerPath: E, reducer: _ }, k), { ...h, ...p(E, !0) }
        );
      },
    };
    return h;
  };
}
function P_(e, t, n, r) {
  function i(s, ...o) {
    let a = t(s);
    return typeof a > "u" && r && (a = n()), e(a, ...o);
  }
  return (i.unwrapped = e), i;
}
var sg = O_();
function b_() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function T_({ type: e, reducerName: t, createNotation: n }, r, i) {
  let s, o;
  if ("reducer" in r) {
    if (n && !j_(r)) throw new Error(Ue(17));
    (s = r.reducer), (o = r.prepare);
  } else s = r;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, o ? Wt(e, o) : Wt(e));
}
function R_(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function j_(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function $_({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(Ue(18));
  const {
      payloadCreator: s,
      fulfilled: o,
      pending: a,
      rejected: l,
      settled: u,
      options: c,
    } = n,
    f = i(e, s, c);
  r.exposeAction(t, f),
    o && r.addCase(f.fulfilled, o),
    a && r.addCase(f.pending, a),
    l && r.addCase(f.rejected, l),
    u && r.addMatcher(f.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: o || _o,
      pending: a || _o,
      rejected: l || _o,
      settled: u || _o,
    });
}
function _o() {}
var A_ = (e, t) => {
    if (typeof e != "function") throw new Error(Ue(32));
  },
  Ed = "listenerMiddleware",
  I_ = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: s } = e;
    if (t) i = Wt(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw new Error(Ue(21));
    return A_(s), { predicate: i, type: t, effect: s };
  },
  L_ = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = I_(e);
      return {
        id: ig(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Ue(22));
        },
      };
    },
    { withTypes: () => L_ }
  ),
  N_ = Object.assign(Wt(`${Ed}/add`), { withTypes: () => N_ });
Wt(`${Ed}/removeAll`);
var D_ = Object.assign(Wt(`${Ed}/remove`), { withTypes: () => D_ });
function Ue(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const z_ = "modulepreload",
  F_ = function (e) {
    return "/" + e;
  },
  yh = {},
  gi = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName("link"),
        o = document.querySelector("meta[property=csp-nonce]"),
        a =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.all(
        n.map((l) => {
          if (((l = F_(l)), l in yh)) return;
          yh[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let y = s.length - 1; y >= 0; y--) {
              const v = s[y];
              if (v.href === l && (!u || v.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : z_),
            u || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = l),
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            u)
          )
            return new Promise((y, v) => {
              d.addEventListener("load", y),
                d.addEventListener("error", () =>
                  v(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch((s) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented))
          throw s;
      });
  },
  M_ = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...n) =>
            gi(() => Promise.resolve().then(() => Js), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  };
class Cd extends Error {
  constructor(t, n = "FunctionsError", r) {
    super(t), (this.name = n), (this.context = r);
  }
}
class U_ extends Cd {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t
    );
  }
}
class B_ extends Cd {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Q_ extends Cd {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t
    );
  }
}
var sc;
(function (e) {
  (e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2");
})(sc || (sc = {}));
var H_ = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class W_ {
  constructor(t, { headers: n = {}, customFetch: r, region: i = sc.Any } = {}) {
    (this.url = t), (this.headers = n), (this.region = i), (this.fetch = M_(r));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t, n = {}) {
    var r;
    return H_(this, void 0, void 0, function* () {
      try {
        const { headers: i, method: s, body: o } = n;
        let a = {},
          { region: l } = n;
        l || (l = this.region), l && l !== "any" && (a["x-region"] = l);
        let u;
        o &&
          ((i && !Object.prototype.hasOwnProperty.call(i, "Content-Type")) ||
            !i) &&
          ((typeof Blob < "u" && o instanceof Blob) || o instanceof ArrayBuffer
            ? ((a["Content-Type"] = "application/octet-stream"), (u = o))
            : typeof o == "string"
            ? ((a["Content-Type"] = "text/plain"), (u = o))
            : typeof FormData < "u" && o instanceof FormData
            ? (u = o)
            : ((a["Content-Type"] = "application/json"),
              (u = JSON.stringify(o))));
        const c = yield this.fetch(`${this.url}/${t}`, {
            method: s || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, a), this.headers),
              i
            ),
            body: u,
          }).catch((v) => {
            throw new U_(v);
          }),
          f = c.headers.get("x-relay-error");
        if (f && f === "true") throw new B_(c);
        if (!c.ok) throw new Q_(c);
        let d = (
            (r = c.headers.get("Content-Type")) !== null && r !== void 0
              ? r
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          y;
        return (
          d === "application/json"
            ? (y = yield c.json())
            : d === "application/octet-stream"
            ? (y = yield c.blob())
            : d === "text/event-stream"
            ? (y = c)
            : d === "multipart/form-data"
            ? (y = yield c.formData())
            : (y = yield c.text()),
          { data: y, error: null }
        );
      } catch (i) {
        return { data: null, error: i };
      }
    });
  }
}
var q_ = function () {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  },
  vi = q_();
const V_ = vi.fetch,
  xd = vi.fetch.bind(vi),
  og = vi.Headers,
  K_ = vi.Request,
  G_ = vi.Response,
  Js = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: og,
        Request: K_,
        Response: G_,
        default: xd,
        fetch: V_,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class J_ extends Error {
  constructor(t) {
    super(t.message),
      (this.name = "PostgrestError"),
      (this.details = t.details),
      (this.hint = t.hint),
      (this.code = t.code);
  }
}
class Y_ {
  constructor(t) {
    (this.shouldThrowOnError = !1),
      (this.method = t.method),
      (this.url = t.url),
      (this.headers = t.headers),
      (this.schema = t.schema),
      (this.body = t.body),
      (this.shouldThrowOnError = t.shouldThrowOnError),
      (this.signal = t.signal),
      (this.isMaybeSingle = t.isMaybeSingle),
      t.fetch
        ? (this.fetch = t.fetch)
        : typeof fetch > "u"
        ? (this.fetch = xd)
        : (this.fetch = fetch);
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  then(t, n) {
    this.schema === void 0 ||
      (["GET", "HEAD"].includes(this.method)
        ? (this.headers["Accept-Profile"] = this.schema)
        : (this.headers["Content-Profile"] = this.schema)),
      this.method !== "GET" &&
        this.method !== "HEAD" &&
        (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let i = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then(async (s) => {
      var o, a, l;
      let u = null,
        c = null,
        f = null,
        d = s.status,
        y = s.statusText;
      if (s.ok) {
        if (this.method !== "HEAD") {
          const p = await s.text();
          p === "" ||
            (this.headers.Accept === "text/csv" ||
            (this.headers.Accept &&
              this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
              ? (c = p)
              : (c = JSON.parse(p)));
        }
        const _ =
            (o = this.headers.Prefer) === null || o === void 0
              ? void 0
              : o.match(/count=(exact|planned|estimated)/),
          S =
            (a = s.headers.get("content-range")) === null || a === void 0
              ? void 0
              : a.split("/");
        _ && S && S.length > 1 && (f = parseInt(S[1])),
          this.isMaybeSingle &&
            this.method === "GET" &&
            Array.isArray(c) &&
            (c.length > 1
              ? ((u = {
                  code: "PGRST116",
                  details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    "JSON object requested, multiple (or no) rows returned",
                }),
                (c = null),
                (f = null),
                (d = 406),
                (y = "Not Acceptable"))
              : c.length === 1
              ? (c = c[0])
              : (c = null));
      } else {
        const _ = await s.text();
        try {
          (u = JSON.parse(_)),
            Array.isArray(u) &&
              s.status === 404 &&
              ((c = []), (u = null), (d = 200), (y = "OK"));
        } catch {
          s.status === 404 && _ === ""
            ? ((d = 204), (y = "No Content"))
            : (u = { message: _ });
        }
        if (
          (u &&
            this.isMaybeSingle &&
            !((l = u == null ? void 0 : u.details) === null || l === void 0) &&
            l.includes("0 rows") &&
            ((u = null), (d = 200), (y = "OK")),
          u && this.shouldThrowOnError)
        )
          throw new J_(u);
      }
      return { error: u, data: c, count: f, status: d, statusText: y };
    });
    return (
      this.shouldThrowOnError ||
        (i = i.catch((s) => {
          var o, a, l;
          return {
            error: {
              message: `${
                (o = s == null ? void 0 : s.name) !== null && o !== void 0
                  ? o
                  : "FetchError"
              }: ${s == null ? void 0 : s.message}`,
              details: `${
                (a = s == null ? void 0 : s.stack) !== null && a !== void 0
                  ? a
                  : ""
              }`,
              hint: "",
              code: `${
                (l = s == null ? void 0 : s.code) !== null && l !== void 0
                  ? l
                  : ""
              }`,
            },
            data: null,
            count: null,
            status: 0,
            statusText: "",
          };
        })),
      i.then(t, n)
    );
  }
}
class X_ extends Y_ {
  select(t) {
    let n = !1;
    const r = (t ?? "*")
      .split("")
      .map((i) => (/\s/.test(i) && !n ? "" : (i === '"' && (n = !n), i)))
      .join("");
    return (
      this.url.searchParams.set("select", r),
      this.headers.Prefer && (this.headers.Prefer += ","),
      (this.headers.Prefer += "return=representation"),
      this
    );
  }
  order(
    t,
    {
      ascending: n = !0,
      nullsFirst: r,
      foreignTable: i,
      referencedTable: s = i,
    } = {}
  ) {
    const o = s ? `${s}.order` : "order",
      a = this.url.searchParams.get(o);
    return (
      this.url.searchParams.set(
        o,
        `${a ? `${a},` : ""}${t}.${n ? "asc" : "desc"}${
          r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"
        }`
      ),
      this
    );
  }
  limit(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(i, `${t}`), this;
  }
  range(t, n, { foreignTable: r, referencedTable: i = r } = {}) {
    const s = typeof i > "u" ? "offset" : `${i}.offset`,
      o = typeof i > "u" ? "limit" : `${i}.limit`;
    return (
      this.url.searchParams.set(s, `${t}`),
      this.url.searchParams.set(o, `${n - t + 1}`),
      this
    );
  }
  abortSignal(t) {
    return (this.signal = t), this;
  }
  single() {
    return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
  }
  maybeSingle() {
    return (
      this.method === "GET"
        ? (this.headers.Accept = "application/json")
        : (this.headers.Accept = "application/vnd.pgrst.object+json"),
      (this.isMaybeSingle = !0),
      this
    );
  }
  csv() {
    return (this.headers.Accept = "text/csv"), this;
  }
  geojson() {
    return (this.headers.Accept = "application/geo+json"), this;
  }
  explain({
    analyze: t = !1,
    verbose: n = !1,
    settings: r = !1,
    buffers: i = !1,
    wal: s = !1,
    format: o = "text",
  } = {}) {
    var a;
    const l = [
        t ? "analyze" : null,
        n ? "verbose" : null,
        r ? "settings" : null,
        i ? "buffers" : null,
        s ? "wal" : null,
      ]
        .filter(Boolean)
        .join("|"),
      u =
        (a = this.headers.Accept) !== null && a !== void 0
          ? a
          : "application/json";
    return (
      (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`),
      o === "json" ? this : this
    );
  }
  rollback() {
    var t;
    return (
      ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim()
        .length > 0
        ? (this.headers.Prefer += ",tx=rollback")
        : (this.headers.Prefer = "tx=rollback"),
      this
    );
  }
  returns() {
    return this;
  }
}
class Or extends X_ {
  eq(t, n) {
    return this.url.searchParams.append(t, `eq.${n}`), this;
  }
  neq(t, n) {
    return this.url.searchParams.append(t, `neq.${n}`), this;
  }
  gt(t, n) {
    return this.url.searchParams.append(t, `gt.${n}`), this;
  }
  gte(t, n) {
    return this.url.searchParams.append(t, `gte.${n}`), this;
  }
  lt(t, n) {
    return this.url.searchParams.append(t, `lt.${n}`), this;
  }
  lte(t, n) {
    return this.url.searchParams.append(t, `lte.${n}`), this;
  }
  like(t, n) {
    return this.url.searchParams.append(t, `like.${n}`), this;
  }
  likeAllOf(t, n) {
    return this.url.searchParams.append(t, `like(all).{${n.join(",")}}`), this;
  }
  likeAnyOf(t, n) {
    return this.url.searchParams.append(t, `like(any).{${n.join(",")}}`), this;
  }
  ilike(t, n) {
    return this.url.searchParams.append(t, `ilike.${n}`), this;
  }
  ilikeAllOf(t, n) {
    return this.url.searchParams.append(t, `ilike(all).{${n.join(",")}}`), this;
  }
  ilikeAnyOf(t, n) {
    return this.url.searchParams.append(t, `ilike(any).{${n.join(",")}}`), this;
  }
  is(t, n) {
    return this.url.searchParams.append(t, `is.${n}`), this;
  }
  in(t, n) {
    const r = Array.from(new Set(n))
      .map((i) =>
        typeof i == "string" && new RegExp("[,()]").test(i) ? `"${i}"` : `${i}`
      )
      .join(",");
    return this.url.searchParams.append(t, `in.(${r})`), this;
  }
  contains(t, n) {
    return (
      typeof n == "string"
        ? this.url.searchParams.append(t, `cs.${n}`)
        : Array.isArray(n)
        ? this.url.searchParams.append(t, `cs.{${n.join(",")}}`)
        : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
      this
    );
  }
  containedBy(t, n) {
    return (
      typeof n == "string"
        ? this.url.searchParams.append(t, `cd.${n}`)
        : Array.isArray(n)
        ? this.url.searchParams.append(t, `cd.{${n.join(",")}}`)
        : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
      this
    );
  }
  rangeGt(t, n) {
    return this.url.searchParams.append(t, `sr.${n}`), this;
  }
  rangeGte(t, n) {
    return this.url.searchParams.append(t, `nxl.${n}`), this;
  }
  rangeLt(t, n) {
    return this.url.searchParams.append(t, `sl.${n}`), this;
  }
  rangeLte(t, n) {
    return this.url.searchParams.append(t, `nxr.${n}`), this;
  }
  rangeAdjacent(t, n) {
    return this.url.searchParams.append(t, `adj.${n}`), this;
  }
  overlaps(t, n) {
    return (
      typeof n == "string"
        ? this.url.searchParams.append(t, `ov.${n}`)
        : this.url.searchParams.append(t, `ov.{${n.join(",")}}`),
      this
    );
  }
  textSearch(t, n, { config: r, type: i } = {}) {
    let s = "";
    i === "plain"
      ? (s = "pl")
      : i === "phrase"
      ? (s = "ph")
      : i === "websearch" && (s = "w");
    const o = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(t, `${s}fts${o}.${n}`), this;
  }
  match(t) {
    return (
      Object.entries(t).forEach(([n, r]) => {
        this.url.searchParams.append(n, `eq.${r}`);
      }),
      this
    );
  }
  not(t, n, r) {
    return this.url.searchParams.append(t, `not.${n}.${r}`), this;
  }
  or(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = r ? `${r}.or` : "or";
    return this.url.searchParams.append(i, `(${t})`), this;
  }
  filter(t, n, r) {
    return this.url.searchParams.append(t, `${n}.${r}`), this;
  }
}
class Z_ {
  constructor(t, { headers: n = {}, schema: r, fetch: i }) {
    (this.url = t), (this.headers = n), (this.schema = r), (this.fetch = i);
  }
  select(t, { head: n = !1, count: r } = {}) {
    const i = n ? "HEAD" : "GET";
    let s = !1;
    const o = (t ?? "*")
      .split("")
      .map((a) => (/\s/.test(a) && !s ? "" : (a === '"' && (s = !s), a)))
      .join("");
    return (
      this.url.searchParams.set("select", o),
      r && (this.headers.Prefer = `count=${r}`),
      new Or({
        method: i,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  insert(t, { count: n, defaultToNull: r = !0 } = {}) {
    const i = "POST",
      s = [];
    if (
      (this.headers.Prefer && s.push(this.headers.Prefer),
      n && s.push(`count=${n}`),
      r || s.push("missing=default"),
      (this.headers.Prefer = s.join(",")),
      Array.isArray(t))
    ) {
      const o = t.reduce((a, l) => a.concat(Object.keys(l)), []);
      if (o.length > 0) {
        const a = [...new Set(o)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", a.join(","));
      }
    }
    return new Or({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  upsert(
    t,
    {
      onConflict: n,
      ignoreDuplicates: r = !1,
      count: i,
      defaultToNull: s = !0,
    } = {}
  ) {
    const o = "POST",
      a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    if (
      (n !== void 0 && this.url.searchParams.set("on_conflict", n),
      this.headers.Prefer && a.push(this.headers.Prefer),
      i && a.push(`count=${i}`),
      s || a.push("missing=default"),
      (this.headers.Prefer = a.join(",")),
      Array.isArray(t))
    ) {
      const l = t.reduce((u, c) => u.concat(Object.keys(c)), []);
      if (l.length > 0) {
        const u = [...new Set(l)].map((c) => `"${c}"`);
        this.url.searchParams.set("columns", u.join(","));
      }
    }
    return new Or({
      method: o,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  update(t, { count: n } = {}) {
    const r = "PATCH",
      i = [];
    return (
      this.headers.Prefer && i.push(this.headers.Prefer),
      n && i.push(`count=${n}`),
      (this.headers.Prefer = i.join(",")),
      new Or({
        method: r,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: t,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  delete({ count: t } = {}) {
    const n = "DELETE",
      r = [];
    return (
      t && r.push(`count=${t}`),
      this.headers.Prefer && r.unshift(this.headers.Prefer),
      (this.headers.Prefer = r.join(",")),
      new Or({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const eS = "1.15.2",
  tS = { "X-Client-Info": `postgrest-js/${eS}` };
class Od {
  constructor(t, { headers: n = {}, schema: r, fetch: i } = {}) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, tS), n)),
      (this.schemaName = r),
      (this.fetch = i);
  }
  from(t) {
    const n = new URL(`${this.url}/${t}`);
    return new Z_(n, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
    });
  }
  schema(t) {
    return new Od(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
    });
  }
  rpc(t, n = {}, { head: r = !1, get: i = !1, count: s } = {}) {
    let o;
    const a = new URL(`${this.url}/rpc/${t}`);
    let l;
    r || i
      ? ((o = r ? "HEAD" : "GET"),
        Object.entries(n)
          .filter(([c, f]) => f !== void 0)
          .map(([c, f]) => [c, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`])
          .forEach(([c, f]) => {
            a.searchParams.append(c, f);
          }))
      : ((o = "POST"), (l = n));
    const u = Object.assign({}, this.headers);
    return (
      s && (u.Prefer = `count=${s}`),
      new Or({
        method: o,
        url: a,
        headers: u,
        schema: this.schemaName,
        body: l,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const nS = "2.9.4",
  rS = { "X-Client-Info": `realtime-js/${nS}` },
  iS = "1.0.0",
  ag = 1e4,
  sS = 1e3;
var qr;
(function (e) {
  (e[(e.connecting = 0)] = "connecting"),
    (e[(e.open = 1)] = "open"),
    (e[(e.closing = 2)] = "closing"),
    (e[(e.closed = 3)] = "closed");
})(qr || (qr = {}));
var Qe;
(function (e) {
  (e.closed = "closed"),
    (e.errored = "errored"),
    (e.joined = "joined"),
    (e.joining = "joining"),
    (e.leaving = "leaving");
})(Qe || (Qe = {}));
var wt;
(function (e) {
  (e.close = "phx_close"),
    (e.error = "phx_error"),
    (e.join = "phx_join"),
    (e.reply = "phx_reply"),
    (e.leave = "phx_leave"),
    (e.access_token = "access_token");
})(wt || (wt = {}));
var oc;
(function (e) {
  e.websocket = "websocket";
})(oc || (oc = {}));
var qn;
(function (e) {
  (e.Connecting = "connecting"),
    (e.Open = "open"),
    (e.Closing = "closing"),
    (e.Closed = "closed");
})(qn || (qn = {}));
class lg {
  constructor(t, n) {
    (this.callback = t),
      (this.timerCalc = n),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = n);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
class oS {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(t, n) {
    return t.constructor === ArrayBuffer
      ? n(this._binaryDecode(t))
      : n(typeof t == "string" ? JSON.parse(t) : {});
  }
  _binaryDecode(t) {
    const n = new DataView(t),
      r = new TextDecoder();
    return this._decodeBroadcast(t, n, r);
  }
  _decodeBroadcast(t, n, r) {
    const i = n.getUint8(1),
      s = n.getUint8(2);
    let o = this.HEADER_LENGTH + 2;
    const a = r.decode(t.slice(o, o + i));
    o = o + i;
    const l = r.decode(t.slice(o, o + s));
    o = o + s;
    const u = JSON.parse(r.decode(t.slice(o, t.byteLength)));
    return { ref: null, topic: a, event: l, payload: u };
  }
}
class Ll {
  constructor(t, n, r = {}, i = ag) {
    (this.channel = t),
      (this.event = n),
      (this.payload = r),
      (this.timeout = i),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(t) {
    (this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, n) {
    var r;
    return (
      this._hasReceived(t) &&
        n(
          (r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
        ),
      this.recHooks.push({ status: t, callback: n }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const t = (n) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = n),
        this._matchReceive(n);
    };
    this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(t, n) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: n });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: t, response: n }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(n));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var gh;
(function (e) {
  (e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
})(gh || (gh = {}));
class ss {
  constructor(t, n) {
    (this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const r = (n == null ? void 0 : n.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(r.state, {}, (i) => {
      const { onJoin: s, onLeave: o, onSync: a } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = ss.syncState(this.state, i, s, o)),
        this.pendingDiffs.forEach((l) => {
          this.state = ss.syncDiff(this.state, l, s, o);
        }),
        (this.pendingDiffs = []),
        a();
    }),
      this.channel._on(r.diff, {}, (i) => {
        const { onJoin: s, onLeave: o, onSync: a } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(i)
          : ((this.state = ss.syncDiff(this.state, i, s, o)), a());
      }),
      this.onJoin((i, s, o) => {
        this.channel._trigger("presence", {
          event: "join",
          key: i,
          currentPresences: s,
          newPresences: o,
        });
      }),
      this.onLeave((i, s, o) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: i,
          currentPresences: s,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(t, n, r, i) {
    const s = this.cloneDeep(t),
      o = this.transformState(n),
      a = {},
      l = {};
    return (
      this.map(s, (u, c) => {
        o[u] || (l[u] = c);
      }),
      this.map(o, (u, c) => {
        const f = s[u];
        if (f) {
          const d = c.map((S) => S.presence_ref),
            y = f.map((S) => S.presence_ref),
            v = c.filter((S) => y.indexOf(S.presence_ref) < 0),
            _ = f.filter((S) => d.indexOf(S.presence_ref) < 0);
          v.length > 0 && (a[u] = v), _.length > 0 && (l[u] = _);
        } else a[u] = c;
      }),
      this.syncDiff(s, { joins: a, leaves: l }, r, i)
    );
  }
  static syncDiff(t, n, r, i) {
    const { joins: s, leaves: o } = {
      joins: this.transformState(n.joins),
      leaves: this.transformState(n.leaves),
    };
    return (
      r || (r = () => {}),
      i || (i = () => {}),
      this.map(s, (a, l) => {
        var u;
        const c = (u = t[a]) !== null && u !== void 0 ? u : [];
        if (((t[a] = this.cloneDeep(l)), c.length > 0)) {
          const f = t[a].map((y) => y.presence_ref),
            d = c.filter((y) => f.indexOf(y.presence_ref) < 0);
          t[a].unshift(...d);
        }
        r(a, c, l);
      }),
      this.map(o, (a, l) => {
        let u = t[a];
        if (!u) return;
        const c = l.map((f) => f.presence_ref);
        (u = u.filter((f) => c.indexOf(f.presence_ref) < 0)),
          (t[a] = u),
          i(a, u, l),
          u.length === 0 && delete t[a];
      }),
      t
    );
  }
  static map(t, n) {
    return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((n, r) => {
        const i = t[r];
        return (
          "metas" in i
            ? (n[r] = i.metas.map(
                (s) => (
                  (s.presence_ref = s.phx_ref),
                  delete s.phx_ref,
                  delete s.phx_ref_prev,
                  s
                )
              ))
            : (n[r] = i),
          n
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var K;
(function (e) {
  (e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange");
})(K || (K = {}));
const vh = (e, t, n = {}) => {
    var r;
    const i = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce((s, o) => ((s[o] = aS(o, e, t, i)), s), {});
  },
  aS = (e, t, n, r) => {
    const i = t.find((a) => a.name === e),
      s = i == null ? void 0 : i.type,
      o = n[e];
    return s && !r.includes(s) ? ug(s, o) : ac(o);
  },
  ug = (e, t) => {
    if (e.charAt(0) === "_") {
      const n = e.slice(1, e.length);
      return dS(t, n);
    }
    switch (e) {
      case K.bool:
        return lS(t);
      case K.float4:
      case K.float8:
      case K.int2:
      case K.int4:
      case K.int8:
      case K.numeric:
      case K.oid:
        return uS(t);
      case K.json:
      case K.jsonb:
        return cS(t);
      case K.timestamp:
        return fS(t);
      case K.abstime:
      case K.date:
      case K.daterange:
      case K.int4range:
      case K.int8range:
      case K.money:
      case K.reltime:
      case K.text:
      case K.time:
      case K.timestamptz:
      case K.timetz:
      case K.tsrange:
      case K.tstzrange:
        return ac(t);
      default:
        return ac(t);
    }
  },
  ac = (e) => e,
  lS = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  uS = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  cS = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch (t) {
        return console.log(`JSON parse error: ${t}`), e;
      }
    return e;
  },
  dS = (e, t) => {
    if (typeof e != "string") return e;
    const n = e.length - 1,
      r = e[n];
    if (e[0] === "{" && r === "}") {
      let s;
      const o = e.slice(1, n);
      try {
        s = JSON.parse("[" + o + "]");
      } catch {
        s = o ? o.split(",") : [];
      }
      return s.map((a) => ug(t, a));
    }
    return e;
  },
  fS = (e) => (typeof e == "string" ? e.replace(" ", "T") : e);
var wh;
(function (e) {
  (e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE");
})(wh || (wh = {}));
var _h;
(function (e) {
  (e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes");
})(_h || (_h = {}));
var Sh;
(function (e) {
  (e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR");
})(Sh || (Sh = {}));
class Pd {
  constructor(t, n = { config: {} }, r) {
    (this.topic = t),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = Qe.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
        n.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Ll(this, wt.join, this.params, this.timeout)),
      (this.rejoinTimer = new lg(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = Qe.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((i) => i.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = Qe.closed),
          this.socket._remove(this);
      }),
      this._onError((i) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, i),
          (this.state = Qe.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = Qe.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(wt.reply, {}, (i, s) => {
        this._trigger(this._replyEventName(s), i);
      }),
      (this.presence = new ss(this)),
      (this.broadcastEndpointURL = this._broadcastEndpointURL());
  }
  subscribe(t, n = this.timeout) {
    var r, i;
    if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: s, presence: o },
      } = this.params;
      this._onError((u) => t && t("CHANNEL_ERROR", u)),
        this._onClose(() => t && t("CLOSED"));
      const a = {},
        l = {
          broadcast: s,
          presence: o,
          postgres_changes:
            (i =
              (r = this.bindings.postgres_changes) === null || r === void 0
                ? void 0
                : r.map((u) => u.filter)) !== null && i !== void 0
              ? i
              : [],
        };
      this.socket.accessToken && (a.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: l }, a)),
        (this.joinedOnce = !0),
        this._rejoin(n),
        this.joinPush
          .receive("ok", ({ postgres_changes: u }) => {
            var c;
            if (
              (this.socket.accessToken &&
                this.socket.setAuth(this.socket.accessToken),
              u === void 0)
            ) {
              t && t("SUBSCRIBED");
              return;
            } else {
              const f = this.bindings.postgres_changes,
                d =
                  (c = f == null ? void 0 : f.length) !== null && c !== void 0
                    ? c
                    : 0,
                y = [];
              for (let v = 0; v < d; v++) {
                const _ = f[v],
                  {
                    filter: { event: S, schema: p, table: h, filter: m },
                  } = _,
                  w = u && u[v];
                if (
                  w &&
                  w.event === S &&
                  w.schema === p &&
                  w.table === h &&
                  w.filter === m
                )
                  y.push(Object.assign(Object.assign({}, _), { id: w.id }));
                else {
                  this.unsubscribe(),
                    t &&
                      t(
                        "CHANNEL_ERROR",
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = y), t && t("SUBSCRIBED");
              return;
            }
          })
          .receive("error", (u) => {
            t &&
              t(
                "CHANNEL_ERROR",
                new Error(
                  JSON.stringify(Object.values(u).join(", ") || "error")
                )
              );
          })
          .receive("timeout", () => {
            t && t("TIMED_OUT");
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, n = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      n.timeout || this.timeout
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, n, r) {
    return this._on(t, n, r);
  }
  async send(t, n = {}) {
    var r, i;
    if (!this._canPush() && t.type === "broadcast") {
      const { event: s, payload: o } = t,
        a = {
          method: "POST",
          headers: {
            apikey: (r = this.socket.apiKey) !== null && r !== void 0 ? r : "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [{ topic: this.subTopic, event: s, payload: o }],
          }),
        };
      try {
        return (
          await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            a,
            (i = n.timeout) !== null && i !== void 0 ? i : this.timeout
          )
        ).ok
          ? "ok"
          : "error";
      } catch (l) {
        return l.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((s) => {
        var o, a, l;
        const u = this._push(t.type, t, n.timeout || this.timeout);
        t.type === "broadcast" &&
          !(
            !(
              (l =
                (a =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || a === void 0
                  ? void 0
                  : a.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          s("ok"),
          u.receive("ok", () => s("ok")),
          u.receive("error", () => s("error")),
          u.receive("timeout", () => s("timed out"));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = Qe.leaving;
    const n = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(wt.close, "leave", this._joinRef());
    };
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((r) => {
        const i = new Ll(this, wt.leave, {}, t);
        i
          .receive("ok", () => {
            n(), r("ok");
          })
          .receive("timeout", () => {
            n(), r("timed out");
          })
          .receive("error", () => {
            r("error");
          }),
          i.send(),
          this._canPush() || i.trigger("ok", {});
      })
    );
  }
  _broadcastEndpointURL() {
    let t = this.socket.endPoint;
    return (
      (t = t.replace(/^ws/i, "http")),
      (t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
      t.replace(/\/+$/, "") + "/api/broadcast"
    );
  }
  async _fetchWithTimeout(t, n, r) {
    const i = new AbortController(),
      s = setTimeout(() => i.abort(), r),
      o = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, n), { signal: i.signal })
      );
    return clearTimeout(s), o;
  }
  _push(t, n, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new Ll(this, t, n, r);
    return (
      this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)),
      i
    );
  }
  _onMessage(t, n, r) {
    return n;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, n, r) {
    var i, s;
    const o = t.toLocaleLowerCase(),
      { close: a, error: l, leave: u, join: c } = wt;
    if (r && [a, l, u, c].indexOf(o) >= 0 && r !== this._joinRef()) return;
    let d = this._onMessage(o, n, r);
    if (n && !d)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o)
      ? (i = this.bindings.postgres_changes) === null ||
        i === void 0 ||
        i
          .filter((y) => {
            var v, _, S;
            return (
              ((v = y.filter) === null || v === void 0 ? void 0 : v.event) ===
                "*" ||
              ((S =
                (_ = y.filter) === null || _ === void 0 ? void 0 : _.event) ===
                null || S === void 0
                ? void 0
                : S.toLocaleLowerCase()) === o
            );
          })
          .map((y) => y.callback(d, r))
      : (s = this.bindings[o]) === null ||
        s === void 0 ||
        s
          .filter((y) => {
            var v, _, S, p, h, m;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
              if ("id" in y) {
                const w = y.id,
                  k =
                    (v = y.filter) === null || v === void 0 ? void 0 : v.event;
                return (
                  w &&
                  ((_ = n.ids) === null || _ === void 0
                    ? void 0
                    : _.includes(w)) &&
                  (k === "*" ||
                    (k == null ? void 0 : k.toLocaleLowerCase()) ===
                      ((S = n.data) === null || S === void 0
                        ? void 0
                        : S.type.toLocaleLowerCase()))
                );
              } else {
                const w =
                  (h =
                    (p = y == null ? void 0 : y.filter) === null || p === void 0
                      ? void 0
                      : p.event) === null || h === void 0
                    ? void 0
                    : h.toLocaleLowerCase();
                return (
                  w === "*" ||
                  w ===
                    ((m = n == null ? void 0 : n.event) === null || m === void 0
                      ? void 0
                      : m.toLocaleLowerCase())
                );
              }
            else return y.type.toLocaleLowerCase() === o;
          })
          .map((y) => {
            if (typeof d == "object" && "ids" in d) {
              const v = d.data,
                {
                  schema: _,
                  table: S,
                  commit_timestamp: p,
                  type: h,
                  errors: m,
                } = v;
              d = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: _,
                    table: S,
                    commit_timestamp: p,
                    eventType: h,
                    new: {},
                    old: {},
                    errors: m,
                  }
                ),
                this._getPayloadRecords(v)
              );
            }
            y.callback(d, r);
          });
  }
  _isClosed() {
    return this.state === Qe.closed;
  }
  _isJoined() {
    return this.state === Qe.joined;
  }
  _isJoining() {
    return this.state === Qe.joining;
  }
  _isLeaving() {
    return this.state === Qe.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, n, r) {
    const i = t.toLocaleLowerCase(),
      s = { type: i, filter: n, callback: r };
    return (
      this.bindings[i] ? this.bindings[i].push(s) : (this.bindings[i] = [s]),
      this
    );
  }
  _off(t, n) {
    const r = t.toLocaleLowerCase();
    return (
      (this.bindings[r] = this.bindings[r].filter((i) => {
        var s;
        return !(
          ((s = i.type) === null || s === void 0
            ? void 0
            : s.toLocaleLowerCase()) === r && Pd.isEqual(i.filter, n)
        );
      })),
      this
    );
  }
  static isEqual(t, n) {
    if (Object.keys(t).length !== Object.keys(n).length) return !1;
    for (const r in t) if (t[r] !== n[r]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(t) {
    this._on(wt.close, {}, t);
  }
  _onError(t) {
    this._on(wt.error, {}, (n) => t(n));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = Qe.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const n = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (n.new = vh(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (n.old = vh(t.columns, t.old_record)),
      n
    );
  }
}
const hS = () => {},
  pS = typeof WebSocket < "u";
class mS {
  constructor(t, n) {
    var r;
    (this.accessToken = null),
      (this.apiKey = null),
      (this.channels = []),
      (this.endPoint = ""),
      (this.headers = rS),
      (this.params = {}),
      (this.timeout = ag),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = hS),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new oS()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this._resolveFetch = (s) => {
        let o;
        return (
          s
            ? (o = s)
            : typeof fetch > "u"
            ? (o = (...a) =>
                gi(() => Promise.resolve().then(() => Js), void 0).then(
                  ({ default: l }) => l(...a)
                ))
            : (o = fetch),
          (...a) => o(...a)
        );
      }),
      (this.endPoint = `${t}/${oc.websocket}`),
      n != null && n.transport
        ? (this.transport = n.transport)
        : (this.transport = null),
      n != null && n.params && (this.params = n.params),
      n != null &&
        n.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          n.headers
        )),
      n != null && n.timeout && (this.timeout = n.timeout),
      n != null && n.logger && (this.logger = n.logger),
      n != null &&
        n.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
    const i =
      (r = n == null ? void 0 : n.params) === null || r === void 0
        ? void 0
        : r.apikey;
    i && ((this.accessToken = i), (this.apiKey = i)),
      (this.reconnectAfterMs =
        n != null && n.reconnectAfterMs
          ? n.reconnectAfterMs
          : (s) => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4),
      (this.encode =
        n != null && n.encode ? n.encode : (s, o) => o(JSON.stringify(s))),
      (this.decode =
        n != null && n.decode
          ? n.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new lg(async () => {
        this.disconnect(), this.connect();
      }, this.reconnectAfterMs)),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch));
  }
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this._endPointURL(), void 0, {
          headers: this.headers,
        });
        return;
      }
      if (pS) {
        (this.conn = new WebSocket(this._endPointURL())),
          this.setupConnection();
        return;
      }
      (this.conn = new yS(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        },
      })),
        gi(() => import("./browser-DcWiZ5Rf.js").then((t) => t.b), []).then(
          ({ default: t }) => {
            (this.conn = new t(this._endPointURL(), void 0, {
              headers: this.headers,
            })),
              this.setupConnection();
          }
        );
    }
  }
  disconnect(t, n) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      t ? this.conn.close(t, n ?? "") : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset());
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const n = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), n;
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((n) => n.unsubscribe()));
    return this.disconnect(), t;
  }
  log(t, n, r) {
    this.logger(t, n, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case qr.connecting:
        return qn.Connecting;
      case qr.open:
        return qn.Open;
      case qr.closing:
        return qn.Closing;
      default:
        return qn.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === qn.Open;
  }
  channel(t, n = { config: {} }) {
    const r = new Pd(`realtime:${t}`, n, this);
    return this.channels.push(r), r;
  }
  push(t) {
    const { topic: n, event: r, payload: i, ref: s } = t,
      o = () => {
        this.encode(t, (a) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(a);
        });
      };
    this.log("push", `${n} ${r} (${s})`, i),
      this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  setAuth(t) {
    (this.accessToken = t),
      this.channels.forEach((n) => {
        t && n.updateJoinPayload({ access_token: t }),
          n.joinedOnce &&
            n._isJoined() &&
            n._push(wt.access_token, { access_token: t });
      });
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let n = this.channels.find(
      (r) => r.topic === t && (r._isJoined() || r._isJoining())
    );
    n &&
      (this.log("transport", `leaving duplicate topic "${t}"`),
      n.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((n) => n._joinRef() !== t._joinRef());
  }
  setupConnection() {
    this.conn &&
      ((this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (t) => this._onConnError(t)),
      (this.conn.onmessage = (t) => this._onConnMessage(t)),
      (this.conn.onclose = (t) => this._onConnClose(t)));
  }
  _endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: iS })
    );
  }
  _onConnMessage(t) {
    this.decode(t.data, (n) => {
      let { topic: r, event: i, payload: s, ref: o } = n;
      ((o && o === this.pendingHeartbeatRef) ||
        i === (s == null ? void 0 : s.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          "receive",
          `${s.status || ""} ${r} ${i} ${(o && "(" + o + ")") || ""}`,
          s
        ),
        this.channels
          .filter((a) => a._isMember(r))
          .forEach((a) => a._trigger(i, s, o)),
        this.stateChangeCallbacks.message.forEach((a) => a(n));
    });
  }
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((t) => t());
  }
  _onConnClose(t) {
    this.log("transport", "close", t),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((n) => n(t));
  }
  _onConnError(t) {
    this.log("transport", t.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((n) => n(t));
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(wt.error));
  }
  _appendParams(t, n) {
    if (Object.keys(n).length === 0) return t;
    const r = t.match(/\?/) ? "&" : "?",
      i = new URLSearchParams(n);
    return `${t}${r}${i}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var t;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            "transport",
            "heartbeat timeout. Attempting to re-establish connection"
          ),
          (t = this.conn) === null ||
            t === void 0 ||
            t.close(sS, "hearbeat timeout");
        return;
      }
      (this.pendingHeartbeatRef = this._makeRef()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
}
class yS {
  constructor(t, n, r) {
    (this.binaryType = "arraybuffer"),
      (this.onclose = () => {}),
      (this.onerror = () => {}),
      (this.onmessage = () => {}),
      (this.onopen = () => {}),
      (this.readyState = qr.connecting),
      (this.send = () => {}),
      (this.url = null),
      (this.url = t),
      (this.close = r.close);
  }
}
class bd extends Error {
  constructor(t) {
    super(t), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function ke(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
class gS extends bd {
  constructor(t, n) {
    super(t), (this.name = "StorageApiError"), (this.status = n);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class kh extends bd {
  constructor(t, n) {
    super(t), (this.name = "StorageUnknownError"), (this.originalError = n);
  }
}
var vS = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const cg = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...n) =>
            gi(() => Promise.resolve().then(() => Js), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  },
  wS = () =>
    vS(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield gi(() => Promise.resolve().then(() => Js), void 0)).Response
        : Response;
    });
var Ti = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const Nl = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  _S = (e, t) =>
    Ti(void 0, void 0, void 0, function* () {
      const n = yield wS();
      e instanceof n
        ? e
            .json()
            .then((r) => {
              t(new gS(Nl(r), e.status || 500));
            })
            .catch((r) => {
              t(new kh(Nl(r), r));
            })
        : t(new kh(Nl(e), e));
    }),
  SS = (e, t, n, r) => {
    const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === "GET"
      ? i
      : ((i.headers = Object.assign(
          { "Content-Type": "application/json" },
          t == null ? void 0 : t.headers
        )),
        (i.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, i), n));
  };
function qa(e, t, n, r, i, s) {
  return Ti(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      e(n, SS(t, r, i, s))
        .then((l) => {
          if (!l.ok) throw l;
          return r != null && r.noResolveJson ? l : l.json();
        })
        .then((l) => o(l))
        .catch((l) => _S(l, a));
    });
  });
}
function lc(e, t, n, r) {
  return Ti(this, void 0, void 0, function* () {
    return qa(e, "GET", t, n, r);
  });
}
function an(e, t, n, r, i) {
  return Ti(this, void 0, void 0, function* () {
    return qa(e, "POST", t, r, i, n);
  });
}
function kS(e, t, n, r, i) {
  return Ti(this, void 0, void 0, function* () {
    return qa(e, "PUT", t, r, i, n);
  });
}
function dg(e, t, n, r, i) {
  return Ti(this, void 0, void 0, function* () {
    return qa(e, "DELETE", t, r, i, n);
  });
}
var tt = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const ES = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Eh = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class CS {
  constructor(t, n = {}, r, i) {
    (this.url = t),
      (this.headers = n),
      (this.bucketId = r),
      (this.fetch = cg(i));
  }
  uploadOrUpdate(t, n, r, i) {
    return tt(this, void 0, void 0, function* () {
      try {
        let s;
        const o = Object.assign(Object.assign({}, Eh), i),
          a = Object.assign(
            Object.assign({}, this.headers),
            t === "POST" && { "x-upsert": String(o.upsert) }
          );
        typeof Blob < "u" && r instanceof Blob
          ? ((s = new FormData()),
            s.append("cacheControl", o.cacheControl),
            s.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((s = r), s.append("cacheControl", o.cacheControl))
          : ((s = r),
            (a["cache-control"] = `max-age=${o.cacheControl}`),
            (a["content-type"] = o.contentType));
        const l = this._removeEmptyFolders(n),
          u = this._getFinalPath(l),
          c = yield this.fetch(
            `${this.url}/object/${u}`,
            Object.assign(
              { method: t, body: s, headers: a },
              o != null && o.duplex ? { duplex: o.duplex } : {}
            )
          ),
          f = yield c.json();
        return c.ok
          ? { data: { path: l, id: f.Id, fullPath: f.Key }, error: null }
          : { data: null, error: f };
      } catch (s) {
        if (ke(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  upload(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", t, n, r);
    });
  }
  uploadToSignedUrl(t, n, r, i) {
    return tt(this, void 0, void 0, function* () {
      const s = this._removeEmptyFolders(t),
        o = this._getFinalPath(s),
        a = new URL(this.url + `/object/upload/sign/${o}`);
      a.searchParams.set("token", n);
      try {
        let l;
        const u = Object.assign({ upsert: Eh.upsert }, i),
          c = Object.assign(Object.assign({}, this.headers), {
            "x-upsert": String(u.upsert),
          });
        typeof Blob < "u" && r instanceof Blob
          ? ((l = new FormData()),
            l.append("cacheControl", u.cacheControl),
            l.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((l = r), l.append("cacheControl", u.cacheControl))
          : ((l = r),
            (c["cache-control"] = `max-age=${u.cacheControl}`),
            (c["content-type"] = u.contentType));
        const f = yield this.fetch(a.toString(), {
            method: "PUT",
            body: l,
            headers: c,
          }),
          d = yield f.json();
        return f.ok
          ? { data: { path: s, fullPath: d.Key }, error: null }
          : { data: null, error: d };
      } catch (l) {
        if (ke(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
  createSignedUploadUrl(t) {
    return tt(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(t);
        const r = yield an(
            this.fetch,
            `${this.url}/object/upload/sign/${n}`,
            {},
            { headers: this.headers }
          ),
          i = new URL(this.url + r.url),
          s = i.searchParams.get("token");
        if (!s) throw new bd("No token returned by API");
        return {
          data: { signedUrl: i.toString(), path: t, token: s },
          error: null,
        };
      } catch (n) {
        if (ke(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  update(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", t, n, r);
    });
  }
  move(t, n) {
    return tt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield an(
            this.fetch,
            `${this.url}/object/move`,
            { bucketId: this.bucketId, sourceKey: t, destinationKey: n },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (ke(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  copy(t, n) {
    return tt(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield an(
              this.fetch,
              `${this.url}/object/copy`,
              { bucketId: this.bucketId, sourceKey: t, destinationKey: n },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (r) {
        if (ke(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  createSignedUrl(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(t),
          s = yield an(
            this.fetch,
            `${this.url}/object/sign/${i}`,
            Object.assign(
              { expiresIn: n },
              r != null && r.transform ? { transform: r.transform } : {}
            ),
            { headers: this.headers }
          );
        const o =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
        return (
          (s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${o}`) }),
          { data: s, error: null }
        );
      } catch (i) {
        if (ke(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  createSignedUrls(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      try {
        const i = yield an(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: n, paths: t },
            { headers: this.headers }
          ),
          s =
            r != null && r.download
              ? `&download=${r.download === !0 ? "" : r.download}`
              : "";
        return {
          data: i.map((o) =>
            Object.assign(Object.assign({}, o), {
              signedUrl: o.signedURL
                ? encodeURI(`${this.url}${o.signedURL}${s}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (i) {
        if (ke(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  download(t, n) {
    return tt(this, void 0, void 0, function* () {
      const i =
          typeof (n == null ? void 0 : n.transform) < "u"
            ? "render/image/authenticated"
            : "object",
        s = this.transformOptsToQueryString(
          (n == null ? void 0 : n.transform) || {}
        ),
        o = s ? `?${s}` : "";
      try {
        const a = this._getFinalPath(t);
        return {
          data: yield (yield lc(this.fetch, `${this.url}/${i}/${a}${o}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (a) {
        if (ke(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  getPublicUrl(t, n) {
    const r = this._getFinalPath(t),
      i = [],
      s =
        n != null && n.download
          ? `download=${n.download === !0 ? "" : n.download}`
          : "";
    s !== "" && i.push(s);
    const a =
        typeof (n == null ? void 0 : n.transform) < "u"
          ? "render/image"
          : "object",
      l = this.transformOptsToQueryString(
        (n == null ? void 0 : n.transform) || {}
      );
    l !== "" && i.push(l);
    let u = i.join("&");
    return (
      u !== "" && (u = `?${u}`),
      { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${u}`) } }
    );
  }
  remove(t) {
    return tt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield dg(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (ke(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  list(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, ES), n), {
          prefix: t || "",
        });
        return {
          data: yield an(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            i,
            { headers: this.headers },
            r
          ),
          error: null,
        };
      } catch (i) {
        if (ke(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(t) {
    const n = [];
    return (
      t.width && n.push(`width=${t.width}`),
      t.height && n.push(`height=${t.height}`),
      t.resize && n.push(`resize=${t.resize}`),
      t.format && n.push(`format=${t.format}`),
      t.quality && n.push(`quality=${t.quality}`),
      n.join("&")
    );
  }
}
const xS = "2.5.5",
  OS = { "X-Client-Info": `storage-js/${xS}` };
var Sr = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class PS {
  constructor(t, n = {}, r) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, OS), n)),
      (this.fetch = cg(r));
  }
  listBuckets() {
    return Sr(this, void 0, void 0, function* () {
      try {
        return {
          data: yield lc(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        if (ke(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  getBucket(t) {
    return Sr(this, void 0, void 0, function* () {
      try {
        return {
          data: yield lc(this.fetch, `${this.url}/bucket/${t}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (n) {
        if (ke(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  createBucket(t, n = { public: !1 }) {
    return Sr(this, void 0, void 0, function* () {
      try {
        return {
          data: yield an(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (ke(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  updateBucket(t, n) {
    return Sr(this, void 0, void 0, function* () {
      try {
        return {
          data: yield kS(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (ke(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  emptyBucket(t) {
    return Sr(this, void 0, void 0, function* () {
      try {
        return {
          data: yield an(
            this.fetch,
            `${this.url}/bucket/${t}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (ke(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  deleteBucket(t) {
    return Sr(this, void 0, void 0, function* () {
      try {
        return {
          data: yield dg(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (ke(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
}
class bS extends PS {
  constructor(t, n = {}, r) {
    super(t, n, r);
  }
  from(t) {
    return new CS(this.url, this.headers, t, this.fetch);
  }
}
const TS = "2.42.4";
let Ki = "";
typeof Deno < "u"
  ? (Ki = "deno")
  : typeof document < "u"
  ? (Ki = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (Ki = "react-native")
  : (Ki = "node");
const RS = { "X-Client-Info": `supabase-js-${Ki}/${TS}` },
  jS = { headers: RS },
  $S = { schema: "public" },
  AS = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  IS = {};
var LS = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const NS = (e) => {
    let t;
    return (
      e ? (t = e) : typeof fetch > "u" ? (t = xd) : (t = fetch),
      (...n) => t(...n)
    );
  },
  DS = () => (typeof Headers > "u" ? og : Headers),
  zS = (e, t, n) => {
    const r = NS(n),
      i = DS();
    return (s, o) =>
      LS(void 0, void 0, void 0, function* () {
        var a;
        const l = (a = yield t()) !== null && a !== void 0 ? a : e;
        let u = new i(o == null ? void 0 : o.headers);
        return (
          u.has("apikey") || u.set("apikey", e),
          u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
          r(s, Object.assign(Object.assign({}, o), { headers: u }))
        );
      });
  };
function FS(e) {
  return e.replace(/\/$/, "");
}
function MS(e, t) {
  const { db: n, auth: r, realtime: i, global: s } = e,
    { db: o, auth: a, realtime: l, global: u } = t;
  return {
    db: Object.assign(Object.assign({}, o), n),
    auth: Object.assign(Object.assign({}, a), r),
    realtime: Object.assign(Object.assign({}, l), i),
    global: Object.assign(Object.assign({}, u), s),
  };
}
const fg = "2.63.0",
  US = "http://localhost:9999",
  BS = "supabase.auth.token",
  QS = { "X-Client-Info": `gotrue-js/${fg}` },
  Ch = 10,
  uc = "X-Supabase-Api-Version",
  hg = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  };
function HS(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function WS() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    const t = (Math.random() * 16) | 0;
    return (e == "x" ? t : (t & 3) | 8).toString(16);
  });
}
const mt = () => typeof document < "u",
  Un = { tested: !1, writable: !1 },
  os = () => {
    if (!mt()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (Un.tested) return Un.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (Un.tested = !0),
        (Un.writable = !0);
    } catch {
      (Un.tested = !0), (Un.writable = !1);
    }
    return Un.writable;
  };
function Dl(e) {
  const t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((i, s) => {
        t[s] = i;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, i) => {
      t[i] = r;
    }),
    t
  );
}
const pg = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...n) =>
            gi(() => Promise.resolve().then(() => Js), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  },
  qS = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  mg = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  So = async (e, t) => {
    const n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  },
  zl = async (e, t) => {
    await e.removeItem(t);
  };
function VS(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let n = "",
    r,
    i,
    s,
    o,
    a,
    l,
    u,
    c = 0;
  for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
    (o = t.indexOf(e.charAt(c++))),
      (a = t.indexOf(e.charAt(c++))),
      (l = t.indexOf(e.charAt(c++))),
      (u = t.indexOf(e.charAt(c++))),
      (r = (o << 2) | (a >> 4)),
      (i = ((a & 15) << 4) | (l >> 2)),
      (s = ((l & 3) << 6) | u),
      (n = n + String.fromCharCode(r)),
      l != 64 && i != 0 && (n = n + String.fromCharCode(i)),
      u != 64 && s != 0 && (n = n + String.fromCharCode(s));
  return n;
}
class Va {
  constructor() {
    this.promise = new Va.promiseConstructor((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
Va.promiseConstructor = Promise;
function xh(e) {
  const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
    n = e.split(".");
  if (n.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
  if (!t.test(n[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const r = n[1];
  return JSON.parse(VS(r));
}
async function KS(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function GS(e, t) {
  return new Promise((r, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const o = await e(s);
          if (!t(s, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!t(s, o)) {
            i(o);
            return;
          }
        }
    })();
  });
}
function JS(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function YS() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = n.length;
    let i = "";
    for (let s = 0; s < 56; s++) i += n.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, JS).join("");
}
async function XS(e) {
  const n = new TextEncoder().encode(e),
    r = await crypto.subtle.digest("SHA-256", n),
    i = new Uint8Array(r);
  return Array.from(i)
    .map((s) => String.fromCharCode(s))
    .join("");
}
function ZS(e) {
  return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function ek(e) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      e
    );
  const n = await XS(e);
  return ZS(n);
}
async function kr(e, t, n = !1) {
  const r = YS();
  let i = r;
  n && (i += "/PASSWORD_RECOVERY"), await mg(e, `${t}-code-verifier`, i);
  const s = await ek(r);
  return [s, r === s ? "plain" : "s256"];
}
const tk = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function nk(e) {
  const t = e.headers.get(uc);
  if (!t || !t.match(tk)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class Td extends Error {
  constructor(t, n, r) {
    super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = n),
      (this.code = r);
  }
}
function F(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class rk extends Td {
  constructor(t, n, r) {
    super(t, n, r),
      (this.name = "AuthApiError"),
      (this.status = n),
      (this.code = r);
  }
}
function ik(e) {
  return F(e) && e.name === "AuthApiError";
}
class yg extends Td {
  constructor(t, n) {
    super(t), (this.name = "AuthUnknownError"), (this.originalError = n);
  }
}
class vr extends Td {
  constructor(t, n, r, i) {
    super(t, r, i), (this.name = n), (this.status = r);
  }
}
class Er extends vr {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
class Fl extends vr {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class ko extends vr {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Eo extends vr {
  constructor(t, n = null) {
    super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Oh extends vr {
  constructor(t, n = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class cc extends vr {
  constructor(t, n) {
    super(t, "AuthRetryableFetchError", n, void 0);
  }
}
function Ml(e) {
  return F(e) && e.name === "AuthRetryableFetchError";
}
class Ph extends vr {
  constructor(t, n, r) {
    super(t, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r);
  }
}
var sk = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
};
const Wn = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  ok = [502, 503, 504];
async function bh(e) {
  var t;
  if (!qS(e)) throw new cc(Wn(e), 0);
  if (ok.includes(e.status)) throw new cc(Wn(e), e.status);
  let n;
  try {
    n = await e.json();
  } catch (s) {
    throw new yg(Wn(s), s);
  }
  let r;
  const i = nk(e);
  if (
    (i &&
    i.getTime() >= hg["2024-01-01"].timestamp &&
    typeof n == "object" &&
    n &&
    typeof n.code == "string"
      ? (r = n.code)
      : typeof n == "object" &&
        n &&
        typeof n.error_code == "string" &&
        (r = n.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new Ph(
        Wn(n),
        e.status,
        ((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          []
      );
  } else if (
    typeof n == "object" &&
    n &&
    typeof n.weak_password == "object" &&
    n.weak_password &&
    Array.isArray(n.weak_password.reasons) &&
    n.weak_password.reasons.length &&
    n.weak_password.reasons.reduce((s, o) => s && typeof o == "string", !0)
  )
    throw new Ph(Wn(n), e.status, n.weak_password.reasons);
  throw new rk(Wn(n), e.status || 500, r);
}
const ak = (e, t, n, r) => {
  const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? i
    : ((i.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers
      )),
      (i.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, i), n));
};
async function U(e, t, n, r) {
  var i;
  const s = Object.assign({}, r == null ? void 0 : r.headers);
  s[uc] || (s[uc] = hg["2024-01-01"].name),
    r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
  const o =
    (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
  const a = Object.keys(o).length
      ? "?" + new URLSearchParams(o).toString()
      : "",
    l = await lk(
      e,
      t,
      n + a,
      { headers: s, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function lk(e, t, n, r, i, s) {
  const o = ak(t, r, i, s);
  let a;
  try {
    a = await e(n, Object.assign(Object.assign({}, o), { cache: "no-store" }));
  } catch (l) {
    throw (console.error(l), new cc(Wn(l), 0));
  }
  if ((a.ok || (await bh(a)), r != null && r.noResolveJson)) return a;
  try {
    return await a.json();
  } catch (l) {
    await bh(l);
  }
}
function nn(e) {
  var t;
  let n = null;
  fk(e) &&
    ((n = Object.assign({}, e)),
    e.expires_at || (n.expires_at = HS(e.expires_in)));
  const r = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: n, user: r }, error: null };
}
function Th(e) {
  const t = nn(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function cn(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function uk(e) {
  return { data: e, error: null };
}
function ck(e) {
  const {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: s,
    } = e,
    o = sk(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: s,
    },
    l = Object.assign({}, o);
  return { data: { properties: a, user: l }, error: null };
}
function dk(e) {
  return e;
}
function fk(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
var hk = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
};
class pk {
  constructor({ url: t = "", headers: n = {}, fetch: r }) {
    (this.url = t),
      (this.headers = n),
      (this.fetch = pg(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(t, n = "global") {
    try {
      return (
        await U(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (F(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(t, n = {}) {
    try {
      return await U(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: cn,
      });
    } catch (r) {
      if (F(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(t) {
    try {
      const { options: n } = t,
        r = hk(t, ["options"]),
        i = Object.assign(Object.assign({}, r), n);
      return (
        "newEmail" in r &&
          ((i.new_email = r == null ? void 0 : r.newEmail), delete i.newEmail),
        await U(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: i,
          headers: this.headers,
          xform: ck,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (F(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(t) {
    try {
      return await U(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: cn,
      });
    } catch (n) {
      if (F(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(t) {
    var n, r, i, s, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await U(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (s =
                (i = t == null ? void 0 : t.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && s !== void 0
                ? s
                : "",
          },
          xform: dk,
        });
      if (c.error) throw c.error;
      const f = await c.json(),
        d =
          (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        y =
          (l =
            (a = c.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        y.length > 0 &&
          (y.forEach((v) => {
            const _ = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
              S = JSON.parse(v.split(";")[1].split("=")[1]);
            u[`${S}Page`] = _;
          }),
          (u.total = parseInt(d))),
        { data: Object.assign(Object.assign({}, f), u), error: null }
      );
    } catch (u) {
      if (F(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    try {
      return await U(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: cn,
      });
    } catch (n) {
      if (F(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(t, n) {
    try {
      return await U(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: n,
        headers: this.headers,
        xform: cn,
      });
    } catch (r) {
      if (F(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(t, n = !1) {
    try {
      return await U(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: cn,
      });
    } catch (r) {
      if (F(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(t) {
    try {
      const { data: n, error: r } = await U(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (i) => ({ data: { factors: i }, error: null }),
        }
      );
      return { data: n, error: r };
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(t) {
    try {
      return {
        data: await U(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
}
const mk = {
  getItem: (e) => (os() ? globalThis.localStorage.getItem(e) : null),
  setItem: (e, t) => {
    os() && globalThis.localStorage.setItem(e, t);
  },
  removeItem: (e) => {
    os() && globalThis.localStorage.removeItem(e);
  },
};
function Rh(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
function yk() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const Cr = {
  debug: !!(
    globalThis &&
    os() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class gg extends Error {
  constructor(t) {
    super(t), (this.isAcquireTimeout = !0);
  }
}
class gk extends gg {}
async function vk(e, t, n) {
  Cr.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const r = new globalThis.AbortController();
  return (
    t > 0 &&
      setTimeout(() => {
        r.abort(),
          Cr.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              e
            );
      }, t),
    await globalThis.navigator.locks.request(
      e,
      t === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: r.signal },
      async (i) => {
        if (i) {
          Cr.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquired",
              e,
              i.name
            );
          try {
            return await n();
          } finally {
            Cr.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                e,
                i.name
              );
          }
        } else {
          if (t === 0)
            throw (
              (Cr.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  e
                ),
              new gk(
                `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
              ))
            );
          if (Cr.debug)
            try {
              const s = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(s, null, "  ")
              );
            } catch (s) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                s
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
            ),
            await n()
          );
        }
      }
    )
  );
}
yk();
const wk = {
    url: US,
    storageKey: BS,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: QS,
    flowType: "implicit",
    debug: !1,
  },
  Ui = 30 * 1e3,
  jh = 3;
async function $h(e, t, n) {
  return await n();
}
class bs {
  constructor(t) {
    var n, r;
    (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.insecureGetSessionWarningShown = !1),
      (this.instanceID = bs.nextInstanceID),
      (bs.nextInstanceID += 1),
      this.instanceID > 0 &&
        mt() &&
        console.warn(
          "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
        );
    const i = Object.assign(Object.assign({}, wk), t);
    if (
      ((this.logDebugMessages = !!i.debug),
      typeof i.debug == "function" && (this.logger = i.debug),
      (this.persistSession = i.persistSession),
      (this.storageKey = i.storageKey),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.admin = new pk({ url: i.url, headers: i.headers, fetch: i.fetch })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = pg(i.fetch)),
      (this.lock = i.lock || $h),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      i.lock
        ? (this.lock = i.lock)
        : mt() &&
          !(
            (n = globalThis == null ? void 0 : globalThis.navigator) === null ||
            n === void 0
          ) &&
          n.locks
        ? (this.lock = vk)
        : (this.lock = $h),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? i.storage
          ? (this.storage = i.storage)
          : os()
          ? (this.storage = mk)
          : ((this.memoryStorage = {}), (this.storage = Rh(this.memoryStorage)))
        : ((this.memoryStorage = {}), (this.storage = Rh(this.memoryStorage))),
      mt() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (s) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          s
        );
      }
      (r = this.broadcastChannel) === null ||
        r === void 0 ||
        r.addEventListener("message", async (s) => {
          this._debug(
            "received broadcast notification from other tab or client",
            s
          ),
            await this._notifyAllSubscribers(s.data.event, s.data.session, !1);
        });
    }
    this.initialize();
  }
  _debug(...t) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${fg}) ${new Date().toISOString()}`,
          ...t
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    try {
      const t = mt() ? await this._isPKCEFlow() : !1;
      if (
        (this._debug("#_initialize()", "begin", "is PKCE flow", t),
        t || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
      ) {
        const { data: n, error: r } = await this._getSessionFromURL(t);
        if (r)
          return (
            this._debug(
              "#_initialize()",
              "error detecting session from URL",
              r
            ),
            (r == null ? void 0 : r.message) === "Identity is already linked" ||
            (r == null ? void 0 : r.message) ===
              "Identity is already linked to another user"
              ? { error: r }
              : (await this._removeSession(), { error: r })
          );
        const { session: i, redirectType: s } = n;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            i,
            "redirect type",
            s
          ),
          await this._saveSession(i),
          setTimeout(async () => {
            s === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i)
              : await this._notifyAllSubscribers("SIGNED_IN", i);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return F(t)
        ? { error: t }
        : { error: new yg("Unexpected error during initialization", t) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(t) {
    var n, r, i;
    try {
      await this._removeSession();
      const s = await U(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (n = t == null ? void 0 : t.options) === null || n === void 0
                  ? void 0
                  : n.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (i = t == null ? void 0 : t.options) === null || i === void 0
                  ? void 0
                  : i.captchaToken,
            },
          },
          xform: nn,
        }),
        { data: o, error: a } = s;
      if (a || !o) return { data: { user: null, session: null }, error: a };
      const l = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        { data: { user: u, session: l }, error: null }
      );
    } catch (s) {
      if (F(s)) return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  async signUp(t) {
    var n, r, i;
    try {
      await this._removeSession();
      let s;
      if ("email" in t) {
        const { email: c, password: f, options: d } = t;
        let y = null,
          v = null;
        this.flowType === "pkce" &&
          ([y, v] = await kr(this.storage, this.storageKey)),
          (s = await U(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: d == null ? void 0 : d.emailRedirectTo,
            body: {
              email: c,
              password: f,
              data:
                (n = d == null ? void 0 : d.data) !== null && n !== void 0
                  ? n
                  : {},
              gotrue_meta_security: {
                captcha_token: d == null ? void 0 : d.captchaToken,
              },
              code_challenge: y,
              code_challenge_method: v,
            },
            xform: nn,
          }));
      } else if ("phone" in t) {
        const { phone: c, password: f, options: d } = t;
        s = await U(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: f,
            data:
              (r = d == null ? void 0 : d.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (i = d == null ? void 0 : d.channel) !== null && i !== void 0
                ? i
                : "sms",
            gotrue_meta_security: {
              captcha_token: d == null ? void 0 : d.captchaToken,
            },
          },
          xform: nn,
        });
      } else
        throw new ko(
          "You must provide either an email or phone number and a password"
        );
      const { data: o, error: a } = s;
      if (a || !o) return { data: { user: null, session: null }, error: a };
      const l = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        { data: { user: u, session: l }, error: null }
      );
    } catch (s) {
      if (F(s)) return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  async signInWithPassword(t) {
    try {
      await this._removeSession();
      let n;
      if ("email" in t) {
        const { email: s, password: o, options: a } = t;
        n = await U(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: s,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: Th,
          }
        );
      } else if ("phone" in t) {
        const { phone: s, password: o, options: a } = t;
        n = await U(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: s,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: Th,
          }
        );
      } else
        throw new ko(
          "You must provide either an email or phone number and a password"
        );
      const { data: r, error: i } = n;
      return i
        ? { data: { user: null, session: null }, error: i }
        : !r || !r.session || !r.user
        ? { data: { user: null, session: null }, error: new Fl() }
        : (r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
          {
            data: Object.assign(
              { user: r.user, session: r.session },
              r.weak_password ? { weakPassword: r.weak_password } : null
            ),
            error: i,
          });
    } catch (n) {
      if (F(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOAuth(t) {
    var n, r, i, s;
    return (
      await this._removeSession(),
      await this._handleProviderSignIn(t.provider, {
        redirectTo:
          (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
        scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
        queryParams:
          (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
        skipBrowserRedirect:
          (s = t.options) === null || s === void 0
            ? void 0
            : s.skipBrowserRedirect,
      })
    );
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    );
  }
  async _exchangeCodeForSession(t) {
    const n = await So(this.storage, `${this.storageKey}-code-verifier`),
      [r, i] = (n ?? "").split("/"),
      { data: s, error: o } = await U(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: r },
          xform: nn,
        }
      );
    return (
      await zl(this.storage, `${this.storageKey}-code-verifier`),
      o
        ? { data: { user: null, session: null, redirectType: null }, error: o }
        : !s || !s.session || !s.user
        ? {
            data: { user: null, session: null, redirectType: null },
            error: new Fl(),
          }
        : (s.session &&
            (await this._saveSession(s.session),
            await this._notifyAllSubscribers("SIGNED_IN", s.session)),
          {
            data: Object.assign(Object.assign({}, s), {
              redirectType: i ?? null,
            }),
            error: o,
          })
    );
  }
  async signInWithIdToken(t) {
    await this._removeSession();
    try {
      const {
          options: n,
          provider: r,
          token: i,
          access_token: s,
          nonce: o,
        } = t,
        a = await U(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: i,
              access_token: s,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: nn,
          }
        ),
        { data: l, error: u } = a;
      return u
        ? { data: { user: null, session: null }, error: u }
        : !l || !l.session || !l.user
        ? { data: { user: null, session: null }, error: new Fl() }
        : (l.session &&
            (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
          { data: l, error: u });
    } catch (n) {
      if (F(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOtp(t) {
    var n, r, i, s, o;
    try {
      if ((await this._removeSession(), "email" in t)) {
        const { email: a, options: l } = t;
        let u = null,
          c = null;
        this.flowType === "pkce" &&
          ([u, c] = await kr(this.storage, this.storageKey));
        const { error: f } = await U(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data:
              (n = l == null ? void 0 : l.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: c,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: f };
      }
      if ("phone" in t) {
        const { phone: a, options: l } = t,
          { data: u, error: c } = await U(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: a,
                data:
                  (i = l == null ? void 0 : l.data) !== null && i !== void 0
                    ? i
                    : {},
                create_user:
                  (s = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  s !== void 0
                    ? s
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (o = l == null ? void 0 : l.channel) !== null && o !== void 0
                    ? o
                    : "sms",
              },
            }
          );
        return {
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: c,
        };
      }
      throw new ko("You must provide either an email or phone number.");
    } catch (a) {
      if (F(a)) return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  async verifyOtp(t) {
    var n, r;
    try {
      t.type !== "email_change" &&
        t.type !== "phone_change" &&
        (await this._removeSession());
      let i, s;
      "options" in t &&
        ((i = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (s =
          (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: o, error: a } = await U(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: s },
          }),
          redirectTo: i,
          xform: nn,
        }
      );
      if (a) throw a;
      if (!o) throw new Error("An error occurred on token verification.");
      const l = o.session,
        u = o.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l
          )),
        { data: { user: u, session: l }, error: null }
      );
    } catch (i) {
      if (F(i)) return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  async signInWithSSO(t) {
    var n, r, i;
    try {
      await this._removeSession();
      let s = null,
        o = null;
      return (
        this.flowType === "pkce" &&
          ([s, o] = await kr(this.storage, this.storageKey)),
        await U(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    "providerId" in t ? { provider_id: t.providerId } : null
                  ),
                  "domain" in t ? { domain: t.domain } : null
                ),
                {
                  redirect_to:
                    (r =
                      (n = t.options) === null || n === void 0
                        ? void 0
                        : n.redirectTo) !== null && r !== void 0
                      ? r
                      : void 0,
                }
              ),
              !(
                (i = t == null ? void 0 : t.options) === null || i === void 0
              ) && i.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: t.options.captchaToken,
                    },
                  }
                : null
            ),
            {
              skip_http_redirect: !0,
              code_challenge: s,
              code_challenge_method: o,
            }
          ),
          headers: this.headers,
          xform: uk,
        })
      );
    } catch (s) {
      if (F(s)) return { data: null, error: s };
      throw s;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        if (r) throw r;
        if (!n) throw new Er();
        const { error: i } = await U(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token }
        );
        return { data: { user: null, session: null }, error: i };
      });
    } catch (t) {
      if (F(t)) return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  async resend(t) {
    try {
      t.type != "email_change" &&
        t.type != "phone_change" &&
        (await this._removeSession());
      const n = `${this.url}/resend`;
      if ("email" in t) {
        const { email: r, type: i, options: s } = t,
          { error: o } = await U(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              email: r,
              type: i,
              gotrue_meta_security: {
                captcha_token: s == null ? void 0 : s.captchaToken,
              },
            },
            redirectTo: s == null ? void 0 : s.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: o };
      } else if ("phone" in t) {
        const { phone: r, type: i, options: s } = t,
          { data: o, error: a } = await U(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              phone: r,
              type: i,
              gotrue_meta_security: {
                captcha_token: s == null ? void 0 : s.captchaToken,
              },
            },
          });
        return {
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: a,
        };
      }
      throw new ko(
        "You must provide either an email or phone number and a type"
      );
    } catch (n) {
      if (F(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async getSession() {
    await this.initializePromise;
    const t = await this._acquireLock(-1, async () =>
      this._useSession(async (n) => n)
    );
    return (
      t.data &&
        this.storage.isServer &&
        (this.insecureGetSessionWarningShown ||
          (console.warn(
            "Using supabase.auth.getSession() is potentially insecure as it loads data directly from the storage medium (typically cookies) which may not be authentic. Prefer using supabase.auth.getUser() instead. To suppress this warning call supabase.auth.getUser() before you call supabase.auth.getSession()."
          ),
          (this.insecureGetSessionWarningShown = !0))),
      t
    );
  }
  async _acquireLock(t, n) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          i = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await i;
              } catch {}
            })()
          ),
          i
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })()
            ),
              await r;
            this.pendingInLock.length;

          ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await r;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await t(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let t = null;
      const n = await So(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", n),
        n !== null &&
          (this._isValidSession(n)
            ? (t = n)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const r = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          t.expires_at
        ),
        !r)
      ) {
        if (this.storage.isServer) {
          let o = t.user;
          delete t.user,
            Object.defineProperty(t, "user", {
              enumerable: !0,
              get: () => (
                t.__suppressUserWarning ||
                  console.warn(
                    "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                  ),
                o
              ),
              set: (a) => {
                o = a;
              },
            });
        }
        return { data: { session: t }, error: null };
      }
      const { session: i, error: s } = await this._callRefreshToken(
        t.refresh_token
      );
      return s
        ? { data: { session: null }, error: s }
        : { data: { session: i }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    const n = await this._acquireLock(-1, async () => await this._getUser());
    return (
      n.data &&
        this.storage.isServer &&
        (this.insecureGetSessionWarningShown = !0),
      n
    );
  }
  async _getUser(t) {
    try {
      return t
        ? await U(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: cn,
          })
        : await this._useSession(async (n) => {
            var r, i;
            const { data: s, error: o } = n;
            if (o) throw o;
            return await U(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt:
                (i =
                  (r = s.session) === null || r === void 0
                    ? void 0
                    : r.access_token) !== null && i !== void 0
                  ? i
                  : void 0,
              xform: cn,
            });
          });
    } catch (n) {
      if (F(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUser(t, n = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(t, n))
    );
  }
  async _updateUser(t, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: i, error: s } = r;
        if (s) throw s;
        if (!i.session) throw new Er();
        const o = i.session;
        let a = null,
          l = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([a, l] = await kr(this.storage, this.storageKey));
        const { data: u, error: c } = await U(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: a,
              code_challenge_method: l,
            }),
            jwt: o.access_token,
            xform: cn,
          }
        );
        if (c) throw c;
        return (
          (o.user = u.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers("USER_UPDATED", o),
          { data: { user: o.user }, error: null }
        );
      });
    } catch (r) {
      if (F(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  _decodeJWT(t) {
    return xh(t);
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(t))
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new Er();
      const n = Date.now() / 1e3;
      let r = n,
        i = !0,
        s = null;
      const o = xh(t.access_token);
      if ((o.exp && ((r = o.exp), (i = r <= n)), i)) {
        const { session: a, error: l } = await this._callRefreshToken(
          t.refresh_token
        );
        if (l) return { data: { user: null, session: null }, error: l };
        if (!a) return { data: { user: null, session: null }, error: null };
        s = a;
      } else {
        const { data: a, error: l } = await this._getUser(t.access_token);
        if (l) throw l;
        (s = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(s),
          await this._notifyAllSubscribers("SIGNED_IN", s);
      }
      return { data: { user: s.user, session: s }, error: null };
    } catch (n) {
      if (F(n)) return { data: { session: null, user: null }, error: n };
      throw n;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(t))
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!t) {
          const { data: o, error: a } = n;
          if (a) throw a;
          t = (r = o.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new Er();
        const { session: i, error: s } = await this._callRefreshToken(
          t.refresh_token
        );
        return s
          ? { data: { user: null, session: null }, error: s }
          : i
          ? { data: { user: i.user, session: i }, error: null }
          : { data: { user: null, session: null }, error: null };
      });
    } catch (n) {
      if (F(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async _getSessionFromURL(t) {
    try {
      if (!mt()) throw new Eo("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new Eo("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !t)
        throw new Oh("Not a valid PKCE flow url.");
      const n = Dl(window.location.href);
      if (t) {
        if (!n.code) throw new Oh("No code detected.");
        const { data: h, error: m } = await this._exchangeCodeForSession(
          n.code
        );
        if (m) throw m;
        const w = new URL(window.location.href);
        return (
          w.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", w.toString()),
          { data: { session: h.session, redirectType: null }, error: null }
        );
      }
      if (n.error || n.error_description || n.error_code)
        throw new Eo(
          n.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: n.error || "unspecified_error",
            code: n.error_code || "unspecified_code",
          }
        );
      const {
        provider_token: r,
        provider_refresh_token: i,
        access_token: s,
        refresh_token: o,
        expires_in: a,
        expires_at: l,
        token_type: u,
      } = n;
      if (!s || !a || !o || !u) throw new Eo("No session defined in URL");
      const c = Math.round(Date.now() / 1e3),
        f = parseInt(a);
      let d = c + f;
      l && (d = parseInt(l));
      const y = d - c;
      y * 1e3 <= Ui &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${f}s`
        );
      const v = d - f;
      c - v >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            v,
            d,
            c
          )
        : c - v < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
            v,
            d,
            c
          );
      const { data: _, error: S } = await this._getUser(s);
      if (S) throw S;
      const p = {
        provider_token: r,
        provider_refresh_token: i,
        access_token: s,
        expires_in: f,
        expires_at: d,
        refresh_token: o,
        token_type: u,
        user: _.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        { data: { session: p, redirectType: n.type }, error: null }
      );
    } catch (n) {
      if (F(n))
        return { data: { session: null, redirectType: null }, error: n };
      throw n;
    }
  }
  _isImplicitGrantFlow() {
    const t = Dl(window.location.href);
    return !!(mt() && (t.access_token || t.error_description));
  }
  async _isPKCEFlow() {
    const t = Dl(window.location.href),
      n = await So(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && n);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(t))
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: i, error: s } = n;
      if (s) return { error: s };
      const o =
        (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, t);
        if (a && !(ik(a) && (a.status === 404 || a.status === 401)))
          return { error: a };
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await zl(this.storage, `${this.storageKey}-code-verifier`),
          await this._notifyAllSubscribers("SIGNED_OUT", null)),
        { error: null }
      );
    });
  }
  onAuthStateChange(t) {
    const n = WS(),
      r = {
        id: n,
        callback: t,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            n
          ),
            this.stateChangeEmitters.delete(n);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(n);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (n) => {
      var r, i;
      try {
        const {
          data: { session: s },
          error: o,
        } = n;
        if (o) throw o;
        await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", s)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", s);
      } catch (s) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0
          ? void 0
          : i.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", s),
          console.error(s);
      }
    });
  }
  async resetPasswordForEmail(t, n = {}) {
    let r = null,
      i = null;
    this.flowType === "pkce" &&
      ([r, i] = await kr(this.storage, this.storageKey, !0));
    try {
      return await U(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
      });
    } catch (s) {
      if (F(s)) return { data: null, error: s };
      throw s;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return {
        data: {
          identities: (t = n.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      };
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async linkIdentity(t) {
    var n;
    try {
      const { data: r, error: i } = await this._useSession(async (s) => {
        var o, a, l, u, c;
        const { data: f, error: d } = s;
        if (d) throw d;
        const y = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await U(this.fetch, "GET", y, {
          headers: this.headers,
          jwt:
            (c =
              (u = f.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && c !== void 0
              ? c
              : void 0,
        });
      });
      if (i) throw i;
      return (
        mt() &&
          !(
            !((n = t.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        {
          data: { provider: t.provider, url: r == null ? void 0 : r.url },
          error: null,
        }
      );
    } catch (r) {
      if (F(r)) return { data: { provider: t.provider, url: null }, error: r };
      throw r;
    }
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: o } = n;
        if (o) throw o;
        return await U(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (i =
                (r = s.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && i !== void 0
                ? i
                : void 0,
          }
        );
      });
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _refreshAccessToken(t) {
    const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await GS(
        async (i) => (
          await KS(i * 200),
          this._debug(n, "refreshing attempt", i),
          await U(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: nn }
          )
        ),
        (i, s, o) =>
          o && o.error && Ml(o.error) && Date.now() + (i + 1) * 200 - r < Ui
      );
    } catch (r) {
      if ((this._debug(n, "error", r), F(r)))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        n,
        "url",
        r
      ),
      mt() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: t, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const r = await So(this.storage, this.storageKey);
      if (
        (this._debug(n, "session from storage", r), !this._isValidSession(r))
      ) {
        this._debug(n, "session is not valid"),
          r !== null && (await this._removeSession());
        return;
      }
      const i = Math.round(Date.now() / 1e3),
        s = ((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) < i + Ch;
      if (
        (this._debug(
          n,
          `session has${s ? "" : " not"} expired with margin of ${Ch}s`
        ),
        s)
      ) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: o } = await this._callRefreshToken(r.refresh_token);
          o &&
            (console.error(o),
            Ml(o) ||
              (this._debug(
                n,
                "refresh failed with a non-retryable error, removing the session",
                o
              ),
              await this._removeSession()));
        }
      } else await this._notifyAllSubscribers("SIGNED_IN", r);
    } catch (r) {
      this._debug(n, "error", r), console.error(r);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var n, r;
    if (!t) throw new Er();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new Va();
      const { data: s, error: o } = await this._refreshAccessToken(t);
      if (o) throw o;
      if (!s.session) throw new Er();
      await this._saveSession(s.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
      const a = { session: s.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (s) {
      if ((this._debug(i, "error", s), F(s))) {
        const o = { session: null, error: s };
        return (
          Ml(s) ||
            (await this._removeSession(),
            await this._notifyAllSubscribers("SIGNED_OUT", null)),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(o),
          o
        );
      }
      throw (
        ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(s),
        s)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(t, n, r = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: t, session: n });
      const s = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
          try {
            await a.callback(t, n);
          } catch (l) {
            s.push(l);
          }
        });
      if ((await Promise.all(o), s.length > 0)) {
        for (let a = 0; a < s.length; a += 1) console.error(s[a]);
        throw s[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  async _saveSession(t) {
    this._debug("#_saveSession()", t),
      await mg(this.storage, this.storageKey, t);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await zl(this.storage, this.storageKey);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        mt() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), Ui);
    (this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), t && clearInterval(t);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (n) => {
              const {
                data: { session: r },
              } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((r.expires_at * 1e3 - t) / Ui);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${i} ticks, a tick lasts ${Ui}ms, refresh threshold is ${jh} ticks`
              ),
                i <= jh && (await this._callRefreshToken(r.refresh_token));
            });
          } catch (n) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              n
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof gg)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !mt() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const n = `#_onVisibilityChanged(${t})`;
    this._debug(n, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  n,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(t, n, r) {
    const i = [`provider=${encodeURIComponent(n)}`];
    if (
      (r != null &&
        r.redirectTo &&
        i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && i.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [s, o] = await kr(this.storage, this.storageKey),
        a = new URLSearchParams({
          code_challenge: `${encodeURIComponent(s)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      i.push(a.toString());
    }
    if (r != null && r.queryParams) {
      const s = new URLSearchParams(r.queryParams);
      i.push(s.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${t}?${i.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: i, error: s } = n;
        return s
          ? { data: null, error: s }
          : await U(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: o } = n;
        if (o) return { data: null, error: o };
        const { data: a, error: l } = await U(
          this.fetch,
          "POST",
          `${this.url}/factors`,
          {
            body: {
              friendly_name: t.friendlyName,
              factor_type: t.factorType,
              issuer: t.issuer,
            },
            headers: this.headers,
            jwt:
              (r = s == null ? void 0 : s.session) === null || r === void 0
                ? void 0
                : r.access_token,
          }
        );
        return l
          ? { data: null, error: l }
          : (!((i = a == null ? void 0 : a.totp) === null || i === void 0) &&
              i.qr_code &&
              (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
            { data: a, error: null });
      });
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _verify(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: s } = n;
          if (s) return { data: null, error: s };
          const { data: o, error: a } = await U(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/verify`,
            {
              body: { code: t.code, challenge_id: t.challengeId },
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
          return a
            ? { data: null, error: a }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
                  o
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
              { data: o, error: a });
        });
      } catch (n) {
        if (F(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: s } = n;
          return s
            ? { data: null, error: s }
            : await U(
                this.fetch,
                "POST",
                `${this.url}/factors/${t.factorId}/challenge`,
                {
                  headers: this.headers,
                  jwt:
                    (r = i == null ? void 0 : i.session) === null ||
                    r === void 0
                      ? void 0
                      : r.access_token,
                }
              );
        });
      } catch (n) {
        if (F(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: n, error: r } = await this._challenge({
      factorId: t.factorId,
    });
    return r
      ? { data: null, error: r }
      : await this._verify({
          factorId: t.factorId,
          challengeId: n.id,
          code: t.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: t },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const r = (t == null ? void 0 : t.factors) || [],
      i = r.filter((s) => s.factor_type === "totp" && s.status === "verified");
    return { data: { all: r, totp: i }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (t) => {
          var n, r;
          const {
            data: { session: i },
            error: s,
          } = t;
          if (s) return { data: null, error: s };
          if (!i)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const o = this._decodeJWT(i.access_token);
          let a = null;
          o.aal && (a = o.aal);
          let l = a;
          ((r =
            (n = i.user.factors) === null || n === void 0
              ? void 0
              : n.filter((f) => f.status === "verified")) !== null &&
          r !== void 0
            ? r
            : []
          ).length > 0 && (l = "aal2");
          const c = o.amr || [];
          return {
            data: {
              currentLevel: a,
              nextLevel: l,
              currentAuthenticationMethods: c,
            },
            error: null,
          };
        })
    );
  }
}
bs.nextInstanceID = 0;
const _k = bs;
class Sk extends _k {
  constructor(t) {
    super(t);
  }
}
var kk = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class Ek {
  constructor(t, n, r) {
    var i, s, o, a, l, u, c, f;
    if (((this.supabaseUrl = t), (this.supabaseKey = n), !t))
      throw new Error("supabaseUrl is required.");
    if (!n) throw new Error("supabaseKey is required.");
    const d = FS(t);
    (this.realtimeUrl = `${d}/realtime/v1`.replace(/^http/i, "ws")),
      (this.authUrl = `${d}/auth/v1`),
      (this.storageUrl = `${d}/storage/v1`),
      (this.functionsUrl = `${d}/functions/v1`);
    const y = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
      v = {
        db: $S,
        realtime: IS,
        auth: Object.assign(Object.assign({}, AS), { storageKey: y }),
        global: jS,
      },
      _ = MS(r ?? {}, v);
    (this.storageKey =
      (s = (i = _.auth) === null || i === void 0 ? void 0 : i.storageKey) !==
        null && s !== void 0
        ? s
        : ""),
      (this.headers =
        (a = (o = _.global) === null || o === void 0 ? void 0 : o.headers) !==
          null && a !== void 0
          ? a
          : {}),
      (this.auth = this._initSupabaseAuthClient(
        (l = _.auth) !== null && l !== void 0 ? l : {},
        this.headers,
        (u = _.global) === null || u === void 0 ? void 0 : u.fetch
      )),
      (this.fetch = zS(
        n,
        this._getAccessToken.bind(this),
        (c = _.global) === null || c === void 0 ? void 0 : c.fetch
      )),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, _.realtime)
      )),
      (this.rest = new Od(`${d}/rest/v1`, {
        headers: this.headers,
        schema: (f = _.db) === null || f === void 0 ? void 0 : f.schema,
        fetch: this.fetch,
      })),
      this._listenForAuthEvents();
  }
  get functions() {
    return new W_(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new bS(this.storageUrl, this.headers, this.fetch);
  }
  from(t) {
    return this.rest.from(t);
  }
  schema(t) {
    return this.rest.schema(t);
  }
  rpc(t, n = {}, r = {}) {
    return this.rest.rpc(t, n, r);
  }
  channel(t, n = { config: {} }) {
    return this.realtime.channel(t, n);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var t, n;
    return kk(this, void 0, void 0, function* () {
      const { data: r } = yield this.auth.getSession();
      return (n =
        (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !==
        null && n !== void 0
        ? n
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: i,
      storageKey: s,
      flowType: o,
      debug: a,
    },
    l,
    u
  ) {
    const c = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new Sk({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, c), l),
      storageKey: s,
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: i,
      flowType: o,
      debug: a,
      fetch: u,
    });
  }
  _initRealtimeClient(t) {
    return new mS(
      this.realtimeUrl,
      Object.assign(Object.assign({}, t), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          t == null ? void 0 : t.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, r) => {
      this._handleTokenChanged(
        n,
        "CLIENT",
        r == null ? void 0 : r.access_token
      );
    });
  }
  _handleTokenChanged(t, n, r) {
    (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
    this.changedAccessToken !== r
      ? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
      : t === "SIGNED_OUT" &&
        (this.realtime.setAuth(this.supabaseKey),
        n == "STORAGE" && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const Ck = (e, t, n) => new Ek(e, t, n),
  xk = "https://pfnqonnqfqxgtfevrgbo.supabase.co",
  Ok =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmbnFvbm5xZnF4Z3RmZXZyZ2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0NTQwMjgsImV4cCI6MjAyOTAzMDAyOH0.mkoCnT8vyvfsyRSjU-7NA5ickhLF51h7ZffjVW8aaz8",
  Rd = Ck(xk, Ok);
async function Pk(e) {
  const { data: t, error: n } = await Rd.from("students").insert([e]).select();
  if (n) throw new Error("There was an uploading student!");
  return t;
}
async function bk(e) {
  const { data: t, error: n } = await Rd.from("students")
    .select("*")
    .eq("email", e)
    .single();
  return n && console.log(n), t;
}
const Tk = { name: "", email: "" },
  Ah = S_("user/confirmEmail", async (e) => await bk(e)),
  vg = sg({
    name: "user",
    initialState: Tk,
    reducers: {
      storeUser(e, t) {
        (e.name = t.payload.email), (e.email = t.payload.email);
      },
    },
    extraReducers: function (e) {
      e.addCase(Ah.pending, () => console.log("pending")),
        e.addCase(Ah.fulfilled, () => console.log("founded"));
    },
  }),
  { storeUser: Rk } = vg.actions,
  jk = vg.reducer,
  $k = 30,
  Ak = {
    questions: [],
    index: 0,
    answers: [],
    onSubmit: !1,
    score: 0,
    time: null,
    status: "ready",
  },
  wg = sg({
    name: "quiz",
    initialState: Ak,
    reducers: {
      storeQuestions(e, t) {
        (e.questions = t.payload),
          (e.answers = Array.from({ length: e.questions.length }, () => null)),
          (e.time = $k * e.questions.length);
      },
      startQuiz(e) {
        e.status = "start";
      },
      nextQuestion(e) {
        e.index !== e.questions.length - 1 && e.index++;
      },
      prevQuestion(e) {
        e.index !== 0 && e.index--;
      },
      gotoQuestion(e, t) {
        e.index = t.payload - 1;
      },
      newAnwser(e, t) {
        (e.answers[e.index] = t.payload),
          (e.score = e.answers.filter(
            (n, r) => n === e.questions[r].correctOption
          ).length);
      },
      confirmSubmission(e) {
        e.onSubmit = !0;
      },
      unConfirmSubmission(e) {
        e.onSubmit = !1;
      },
      isSubmitting(e) {
        e.status = "submitting";
      },
      submit(e) {
        e.status = "finish";
      },
    },
  }),
  {
    startQuiz: Ik,
    nextQuestion: Lk,
    storeQuestions: Nk,
    prevQuestion: Dk,
    gotoQuestion: zk,
    newAnwser: Fk,
    confirmSubmission: Mk,
    unConfirmSubmission: Ih,
    isSubmitting: Uk,
    submit: Bk,
  } = wg.actions,
  Qk = wg.reducer,
  Hk = h_({ reducer: { user: jk, quiz: Qk } }),
  wr = jy.withTypes(),
  dt = zw.withTypes();
var De = function () {
  return (
    (De =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    De.apply(this, arguments)
  );
};
function Ts(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var X = "-ms-",
  as = "-moz-",
  Q = "-webkit-",
  _g = "comm",
  Ka = "rule",
  jd = "decl",
  Wk = "@import",
  Sg = "@keyframes",
  qk = "@layer",
  kg = Math.abs,
  $d = String.fromCharCode,
  dc = Object.assign;
function Vk(e, t) {
  return pe(e, 0) ^ 45
    ? (((((((t << 2) ^ pe(e, 0)) << 2) ^ pe(e, 1)) << 2) ^ pe(e, 2)) << 2) ^
        pe(e, 3)
    : 0;
}
function Eg(e) {
  return e.trim();
}
function Ft(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function z(e, t, n) {
  return e.replace(t, n);
}
function Fo(e, t, n) {
  return e.indexOf(t, n);
}
function pe(e, t) {
  return e.charCodeAt(t) | 0;
}
function wi(e, t, n) {
  return e.slice(t, n);
}
function $t(e) {
  return e.length;
}
function Cg(e) {
  return e.length;
}
function Gi(e, t) {
  return t.push(e), e;
}
function Kk(e, t) {
  return e.map(t).join("");
}
function Lh(e, t) {
  return e.filter(function (n) {
    return !Ft(n, t);
  });
}
var Ga = 1,
  _i = 1,
  xg = 0,
  ft = 0,
  ae = 0,
  Ri = "";
function Ja(e, t, n, r, i, s, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: s,
    line: Ga,
    column: _i,
    length: o,
    return: "",
    siblings: a,
  };
}
function rn(e, t) {
  return dc(
    Ja("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function xr(e) {
  for (; e.root; ) e = rn(e.root, { children: [e] });
  Gi(e, e.siblings);
}
function Gk() {
  return ae;
}
function Jk() {
  return (
    (ae = ft > 0 ? pe(Ri, --ft) : 0), _i--, ae === 10 && ((_i = 1), Ga--), ae
  );
}
function Ct() {
  return (
    (ae = ft < xg ? pe(Ri, ft++) : 0), _i++, ae === 10 && ((_i = 1), Ga++), ae
  );
}
function ar() {
  return pe(Ri, ft);
}
function Mo() {
  return ft;
}
function Ya(e, t) {
  return wi(Ri, e, t);
}
function fc(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Yk(e) {
  return (Ga = _i = 1), (xg = $t((Ri = e))), (ft = 0), [];
}
function Xk(e) {
  return (Ri = ""), e;
}
function Ul(e) {
  return Eg(Ya(ft - 1, hc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Zk(e) {
  for (; (ae = ar()) && ae < 33; ) Ct();
  return fc(e) > 2 || fc(ae) > 3 ? "" : " ";
}
function eE(e, t) {
  for (
    ;
    --t &&
    Ct() &&
    !(ae < 48 || ae > 102 || (ae > 57 && ae < 65) || (ae > 70 && ae < 97));

  );
  return Ya(e, Mo() + (t < 6 && ar() == 32 && Ct() == 32));
}
function hc(e) {
  for (; Ct(); )
    switch (ae) {
      case e:
        return ft;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hc(ae);
        break;
      case 40:
        e === 41 && hc(e);
        break;
      case 92:
        Ct();
        break;
    }
  return ft;
}
function tE(e, t) {
  for (; Ct() && e + ae !== 57; ) if (e + ae === 84 && ar() === 47) break;
  return "/*" + Ya(t, ft - 1) + "*" + $d(e === 47 ? e : Ct());
}
function nE(e) {
  for (; !fc(ar()); ) Ct();
  return Ya(e, ft);
}
function rE(e) {
  return Xk(Uo("", null, null, null, [""], (e = Yk(e)), 0, [0], e));
}
function Uo(e, t, n, r, i, s, o, a, l) {
  for (
    var u = 0,
      c = 0,
      f = o,
      d = 0,
      y = 0,
      v = 0,
      _ = 1,
      S = 1,
      p = 1,
      h = 0,
      m = "",
      w = i,
      k = s,
      E = r,
      x = m;
    S;

  )
    switch (((v = h), (h = Ct()))) {
      case 40:
        if (v != 108 && pe(x, f - 1) == 58) {
          Fo((x += z(Ul(h), "&", "&\f")), "&\f", kg(u ? a[u - 1] : 0)) != -1 &&
            (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Ul(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Zk(v);
        break;
      case 92:
        x += eE(Mo() - 1, 7);
        continue;
      case 47:
        switch (ar()) {
          case 42:
          case 47:
            Gi(iE(tE(Ct(), Mo()), t, n, l), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * _:
        a[u++] = $t(x) * p;
      case 125 * _:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            p == -1 && (x = z(x, /\f/g, "")),
              y > 0 &&
                $t(x) - f &&
                Gi(
                  y > 32
                    ? Dh(x + ";", r, n, f - 1, l)
                    : Dh(z(x, " ", "") + ";", r, n, f - 2, l),
                  l
                );
            break;
          case 59:
            x += ";";
          default:
            if (
              (Gi(
                (E = Nh(x, t, n, u, c, i, a, m, (w = []), (k = []), f, s)),
                s
              ),
              h === 123)
            )
              if (c === 0) Uo(x, t, E, E, w, s, f, a, k);
              else
                switch (d === 99 && pe(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Uo(
                      e,
                      E,
                      E,
                      r && Gi(Nh(e, E, E, 0, 0, i, a, m, i, (w = []), f, k), k),
                      i,
                      k,
                      f,
                      a,
                      r ? w : k
                    );
                    break;
                  default:
                    Uo(x, E, E, E, [""], k, 0, a, k);
                }
        }
        (u = c = y = 0), (_ = p = 1), (m = x = ""), (f = o);
        break;
      case 58:
        (f = 1 + $t(x)), (y = v);
      default:
        if (_ < 1) {
          if (h == 123) --_;
          else if (h == 125 && _++ == 0 && Jk() == 125) continue;
        }
        switch (((x += $d(h)), h * _)) {
          case 38:
            p = c > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (a[u++] = ($t(x) - 1) * p), (p = 1);
            break;
          case 64:
            ar() === 45 && (x += Ul(Ct())),
              (d = ar()),
              (c = f = $t((m = x += nE(Mo())))),
              h++;
            break;
          case 45:
            v === 45 && $t(x) == 2 && (_ = 0);
        }
    }
  return s;
}
function Nh(e, t, n, r, i, s, o, a, l, u, c, f) {
  for (
    var d = i - 1, y = i === 0 ? s : [""], v = Cg(y), _ = 0, S = 0, p = 0;
    _ < r;
    ++_
  )
    for (var h = 0, m = wi(e, d + 1, (d = kg((S = o[_])))), w = e; h < v; ++h)
      (w = Eg(S > 0 ? y[h] + " " + m : z(m, /&\f/g, y[h]))) && (l[p++] = w);
  return Ja(e, t, n, i === 0 ? Ka : a, l, u, c, f);
}
function iE(e, t, n, r) {
  return Ja(e, t, n, _g, $d(Gk()), wi(e, 2, -2), 0, r);
}
function Dh(e, t, n, r, i) {
  return Ja(e, t, n, jd, wi(e, 0, r), wi(e, r + 1, -1), r, i);
}
function Og(e, t, n) {
  switch (Vk(e, t)) {
    case 5103:
      return Q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Q + e + e;
    case 4789:
      return as + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Q + e + as + e + X + e + e;
    case 5936:
      switch (pe(e, t + 11)) {
        case 114:
          return Q + e + X + z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + X + z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + X + z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return Q + e + X + e + e;
    case 6165:
      return Q + e + X + "flex-" + e + e;
    case 5187:
      return (
        Q + e + z(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + X + "flex-$1$2") + e
      );
    case 5443:
      return (
        Q +
        e +
        X +
        "flex-item-" +
        z(e, /flex-|-self/g, "") +
        (Ft(e, /flex-|baseline/)
          ? ""
          : X + "grid-row-" + z(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        Q +
        e +
        X +
        "flex-line-pack" +
        z(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return Q + e + X + z(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + X + z(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Q +
        "box-" +
        z(e, "-grow", "") +
        Q +
        e +
        X +
        z(e, "grow", "positive") +
        e
      );
    case 4554:
      return Q + z(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return (
        z(z(z(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return z(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return (
        z(
          z(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + X + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Q +
        e +
        e
      );
    case 4200:
      if (!Ft(e, /flex-|baseline/))
        return X + "grid-column-align" + wi(e, t) + e;
      break;
    case 2592:
    case 3360:
      return X + z(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Ft(r.props, /grid-\w+-end/);
        })
        ? ~Fo(e + (n = n[t].value), "span", 0)
          ? e
          : X +
            z(e, "-start", "") +
            e +
            X +
            "grid-row-span:" +
            (~Fo(n, "span", 0) ? Ft(n, /\d+/) : +Ft(n, /\d+/) - +Ft(e, /\d+/)) +
            ";"
        : X + z(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Ft(r.props, /grid-\w+-start/);
        })
        ? e
        : X + z(z(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return z(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($t(e) - 1 - t > 6)
        switch (pe(e, t + 1)) {
          case 109:
            if (pe(e, t + 4) !== 45) break;
          case 102:
            return (
              z(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Q +
                  "$2-$3$1" +
                  as +
                  (pe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Fo(e, "stretch", 0)
              ? Og(z(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return z(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, s, o, a, l, u) {
          return (
            X +
            i +
            ":" +
            s +
            u +
            (o ? X + i + "-span:" + (a ? l : +l - +s) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (pe(e, t + 6) === 121) return z(e, ":", ":" + Q) + e;
      break;
    case 6444:
      switch (pe(e, pe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            z(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                Q +
                (pe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Q +
                "$2$3$1" +
                X +
                "$2box$3"
            ) + e
          );
        case 100:
          return z(e, ":", ":" + X) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return z(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Sa(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function sE(e, t, n, r) {
  switch (e.type) {
    case qk:
      if (e.children.length) break;
    case Wk:
    case jd:
      return (e.return = e.return || e.value);
    case _g:
      return "";
    case Sg:
      return (e.return = e.value + "{" + Sa(e.children, r) + "}");
    case Ka:
      if (!$t((e.value = e.props.join(",")))) return "";
  }
  return $t((n = Sa(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function oE(e) {
  var t = Cg(e);
  return function (n, r, i, s) {
    for (var o = "", a = 0; a < t; a++) o += e[a](n, r, i, s) || "";
    return o;
  };
}
function aE(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function lE(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case jd:
        e.return = Og(e.value, e.length, n);
        return;
      case Sg:
        return Sa([rn(e, { value: z(e.value, "@", "@" + Q) })], r);
      case Ka:
        if (e.length)
          return Kk((n = e.props), function (i) {
            switch (Ft(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                xr(rn(e, { props: [z(i, /:(read-\w+)/, ":" + as + "$1")] })),
                  xr(rn(e, { props: [i] })),
                  dc(e, { props: Lh(n, r) });
                break;
              case "::placeholder":
                xr(
                  rn(e, { props: [z(i, /:(plac\w+)/, ":" + Q + "input-$1")] })
                ),
                  xr(rn(e, { props: [z(i, /:(plac\w+)/, ":" + as + "$1")] })),
                  xr(rn(e, { props: [z(i, /:(plac\w+)/, X + "input-$1")] })),
                  xr(rn(e, { props: [i] })),
                  dc(e, { props: Lh(n, r) });
                break;
            }
            return "";
          });
    }
}
var uE = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  He = {},
  Si =
    (typeof process < "u" &&
      He !== void 0 &&
      (He.REACT_APP_SC_ATTR || He.SC_ATTR)) ||
    "data-styled",
  Pg = "active",
  bg = "data-styled-version",
  Xa = "6.1.8",
  Ad = `/*!sc*/
`,
  Id = typeof window < "u" && "HTMLElement" in window,
  cE = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      He !== void 0 &&
      He.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      He.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? He.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      He.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      He !== void 0 &&
      He.SC_DISABLE_SPEEDY !== void 0 &&
      He.SC_DISABLE_SPEEDY !== "" &&
      He.SC_DISABLE_SPEEDY !== "false" &&
      He.SC_DISABLE_SPEEDY),
  Za = Object.freeze([]),
  ki = Object.freeze({});
function dE(e, t, n) {
  return (
    n === void 0 && (n = ki), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var Tg = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  fE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  hE = /(^-|-$)/g;
function zh(e) {
  return e.replace(fE, "-").replace(hE, "");
}
var pE = /(a)(d)/gi,
  Co = 52,
  Fh = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function pc(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > Co; t = (t / Co) | 0) n = Fh(t % Co) + n;
  return (Fh(t % Co) + n).replace(pE, "$1-$2");
}
var Bl,
  Rg = 5381,
  Fr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  jg = function (e) {
    return Fr(Rg, e);
  };
function $g(e) {
  return pc(jg(e) >>> 0);
}
function mE(e) {
  return e.displayName || e.name || "Component";
}
function Ql(e) {
  return typeof e == "string" && !0;
}
var Ag = typeof Symbol == "function" && Symbol.for,
  Ig = Ag ? Symbol.for("react.memo") : 60115,
  yE = Ag ? Symbol.for("react.forward_ref") : 60112,
  gE = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  vE = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Lg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  wE =
    (((Bl = {})[yE] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Bl[Ig] = Lg),
    Bl);
function Mh(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ig
    ? Lg
    : "$$typeof" in e
    ? wE[e.$$typeof]
    : gE;
  var t;
}
var _E = Object.defineProperty,
  SE = Object.getOwnPropertyNames,
  Uh = Object.getOwnPropertySymbols,
  kE = Object.getOwnPropertyDescriptor,
  EE = Object.getPrototypeOf,
  Bh = Object.prototype;
function Ng(e, t, n) {
  if (typeof t != "string") {
    if (Bh) {
      var r = EE(t);
      r && r !== Bh && Ng(e, r, n);
    }
    var i = SE(t);
    Uh && (i = i.concat(Uh(t)));
    for (var s = Mh(e), o = Mh(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!(l in vE || (n && n[l]) || (o && l in o) || (s && l in s))) {
        var u = kE(t, l);
        try {
          _E(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Ei(e) {
  return typeof e == "function";
}
function Ld(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Jn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function mc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Rs(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function yc(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Rs(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = yc(e[r], t[r]);
  else if (Rs(t)) for (var r in t) e[r] = yc(e[r], t[r]);
  return e;
}
function Nd(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Ys(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var CE = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, s = i; t >= s; )
            if ((s <<= 1) < 0) throw Ys(16, "".concat(t));
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(r),
            (this.length = s);
          for (var o = i; o < s; o++) this.groupSizes[o] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((o = 0), n.length);
          o < l;
          o++
        )
          this.tag.insertRule(a, n[o]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var s = r; s < i; s++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            s = i + r,
            o = i;
          o < s;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(Ad);
        return n;
      }),
      e
    );
  })(),
  Bo = new Map(),
  ka = new Map(),
  Qo = 1,
  xo = function (e) {
    if (Bo.has(e)) return Bo.get(e);
    for (; ka.has(Qo); ) Qo++;
    var t = Qo++;
    return Bo.set(e, t), ka.set(t, e), t;
  },
  xE = function (e, t) {
    (Qo = t + 1), Bo.set(e, t), ka.set(t, e);
  },
  OE = "style[".concat(Si, "][").concat(bg, '="').concat(Xa, '"]'),
  PE = new RegExp(
    "^".concat(Si, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  bE = function (e, t, n) {
    for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
      (r = i[s]) && e.registerName(t, r);
  },
  TE = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Ad),
        i = [],
        s = 0,
        o = r.length;
      s < o;
      s++
    ) {
      var a = r[s].trim();
      if (a) {
        var l = a.match(PE);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (xE(c, u), bE(e, c, l[3]), e.getTag().insertRules(u, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  };
function RE() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Dg = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Si, "]")));
        return l[l.length - 1];
      })(n),
      s = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Si, Pg), r.setAttribute(bg, Xa);
    var o = RE();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
  },
  jE = (function () {
    function e(t) {
      (this.element = Dg(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
            var o = r[i];
            if (o.ownerNode === n) return o;
          }
          throw Ys(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  $E = (function () {
    function e(t) {
      (this.element = Dg(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  AE = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Qh = Id,
  IE = { isServer: !Id, useCSSOMInjection: !cE },
  zg = (function () {
    function e(t, n, r) {
      t === void 0 && (t = ki), n === void 0 && (n = {});
      var i = this;
      (this.options = De(De({}, IE), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Id &&
          Qh &&
          ((Qh = !1),
          (function (s) {
            for (
              var o = document.querySelectorAll(OE), a = 0, l = o.length;
              a < l;
              a++
            ) {
              var u = o[a];
              u &&
                u.getAttribute(Si) !== Pg &&
                (TE(s, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Nd(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
                a = o.length,
                l = "",
                u = function (f) {
                  var d = (function (p) {
                    return ka.get(p);
                  })(f);
                  if (d === void 0) return "continue";
                  var y = s.names.get(d),
                    v = o.getGroup(f);
                  if (y === void 0 || v.length === 0) return "continue";
                  var _ = ""
                      .concat(Si, ".g")
                      .concat(f, '[id="')
                      .concat(d, '"]'),
                    S = "";
                  y !== void 0 &&
                    y.forEach(function (p) {
                      p.length > 0 && (S += "".concat(p, ","));
                    }),
                    (l += ""
                      .concat(v)
                      .concat(_, '{content:"')
                      .concat(S, '"}')
                      .concat(Ad));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return l;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return xo(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            De(De({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new AE(i) : r ? new jE(i) : new $E(i);
            })(this.options)),
            new CE(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((xo(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(xo(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(xo(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  LE = /&/g,
  NE = /^\s*\/\/.*$/gm;
function Fg(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Fg(n.children, t)),
      n
    );
  });
}
function DE(e) {
  var t,
    n,
    r,
    i = e === void 0 ? ki : e,
    s = i.options,
    o = s === void 0 ? ki : s,
    a = i.plugins,
    l = a === void 0 ? Za : a,
    u = function (d, y, v) {
      return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : d;
    },
    c = l.slice();
  c.push(function (d) {
    d.type === Ka &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(LE, n).replace(r, u));
  }),
    o.prefix && c.push(lE),
    c.push(sE);
  var f = function (d, y, v, _) {
    y === void 0 && (y = ""),
      v === void 0 && (v = ""),
      _ === void 0 && (_ = "&"),
      (t = _),
      (n = y),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var S = d.replace(NE, ""),
      p = rE(v || y ? "".concat(v, " ").concat(y, " { ").concat(S, " }") : S);
    o.namespace && (p = Fg(p, o.namespace));
    var h = [];
    return (
      Sa(
        p,
        oE(
          c.concat(
            aE(function (m) {
              return h.push(m);
            })
          )
        )
      ),
      h
    );
  };
  return (
    (f.hash = l.length
      ? l
          .reduce(function (d, y) {
            return y.name || Ys(15), Fr(d, y.name);
          }, Rg)
          .toString()
      : ""),
    f
  );
}
var zE = new zg(),
  gc = DE(),
  Mg = Te.createContext({
    shouldForwardProp: void 0,
    styleSheet: zE,
    stylis: gc,
  });
Mg.Consumer;
Te.createContext(void 0);
function Hh() {
  return W.useContext(Mg);
}
var Ug = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, s) {
        s === void 0 && (s = gc);
        var o = r.name + s.hash;
        i.hasNameForId(r.id, o) ||
          i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Nd(this, function () {
          throw Ys(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = gc), this.name + t.hash;
      }),
      e
    );
  })(),
  FE = function (e) {
    return e >= "A" && e <= "Z";
  };
function Wh(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    FE(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Bg = function (e) {
    return e == null || e === !1 || e === "";
  },
  Qg = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var s = e[i];
      e.hasOwnProperty(i) &&
        !Bg(s) &&
        ((Array.isArray(s) && s.isCss) || Ei(s)
          ? r.push("".concat(Wh(i), ":"), s, ";")
          : Rs(s)
          ? r.push.apply(r, Ts(Ts(["".concat(i, " {")], Qg(s), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Wh(i), ": ")
                .concat(
                  ((t = i),
                  (n = s) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in uE ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function lr(e, t, n, r) {
  if (Bg(e)) return [];
  if (Ld(e)) return [".".concat(e.styledComponentId)];
  if (Ei(e)) {
    if (!Ei((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return lr(i, t, n, r);
  }
  var s;
  return e instanceof Ug
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Rs(e)
    ? Qg(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Za,
        e.map(function (o) {
          return lr(o, t, n, r);
        })
      )
    : [e.toString()];
}
function ME(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ei(n) && !Ld(n)) return !1;
  }
  return !0;
}
var UE = jg(Xa),
  BE = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && ME(t)),
        (this.componentId = n),
        (this.baseHash = Fr(UE, n)),
        (this.baseStyle = r),
        zg.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = Jn(i, this.staticRulesId);
          else {
            var s = mc(lr(this.rules, t, n, r)),
              o = pc(Fr(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var a = r(s, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, a);
            }
            (i = Jn(i, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var l = Fr(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var f = this.rules[c];
            if (typeof f == "string") u += f;
            else if (f) {
              var d = mc(lr(f, t, n, r));
              (l = Fr(l, d + c)), (u += d);
            }
          }
          if (u) {
            var y = pc(l >>> 0);
            n.hasNameForId(this.componentId, y) ||
              n.insertRules(
                this.componentId,
                y,
                r(u, ".".concat(y), void 0, this.componentId)
              ),
              (i = Jn(i, y));
          }
        }
        return i;
      }),
      e
    );
  })(),
  Hg = Te.createContext(void 0);
Hg.Consumer;
var Hl = {};
function QE(e, t, n) {
  var r = Ld(e),
    i = e,
    s = !Ql(e),
    o = t.attrs,
    a = o === void 0 ? Za : o,
    l = t.componentId,
    u =
      l === void 0
        ? (function (w, k) {
            var E = typeof w != "string" ? "sc" : zh(w);
            Hl[E] = (Hl[E] || 0) + 1;
            var x = "".concat(E, "-").concat($g(Xa + E + Hl[E]));
            return k ? "".concat(k, "-").concat(x) : x;
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName,
    f =
      c === void 0
        ? (function (w) {
            return Ql(w) ? "styled.".concat(w) : "Styled(".concat(mE(w), ")");
          })(e)
        : c,
    d =
      t.displayName && t.componentId
        ? "".concat(zh(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    y = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    v = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var _ = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      v = function (w, k) {
        return _(w, k) && S(w, k);
      };
    } else v = _;
  }
  var p = new BE(n, d, r ? i.componentStyle : void 0);
  function h(w, k) {
    return (function (E, x, C) {
      var I = E.attrs,
        N = E.componentStyle,
        xe = E.defaultProps,
        Nn = E.foldedComponentIds,
        Dn = E.styledComponentId,
        Xs = E.target,
        el = Te.useContext(Hg),
        ji = Hh(),
        zn = E.shouldForwardProp || ji.shouldForwardProp,
        T = dE(x, el, xe) || ki,
        $ = (function (Xt, Be, Nt) {
          for (
            var $i,
              Mn = De(De({}, Be), { className: void 0, theme: Nt }),
              tl = 0;
            tl < Xt.length;
            tl += 1
          ) {
            var Zs = Ei(($i = Xt[tl])) ? $i(Mn) : $i;
            for (var Zt in Zs)
              Mn[Zt] =
                Zt === "className"
                  ? Jn(Mn[Zt], Zs[Zt])
                  : Zt === "style"
                  ? De(De({}, Mn[Zt]), Zs[Zt])
                  : Zs[Zt];
          }
          return (
            Be.className && (Mn.className = Jn(Mn.className, Be.className)), Mn
          );
        })(I, x, T),
        L = $.as || Xs,
        q = {};
      for (var V in $)
        $[V] === void 0 ||
          V[0] === "$" ||
          V === "as" ||
          (V === "theme" && $.theme === T) ||
          (V === "forwardedAs"
            ? (q.as = $.forwardedAs)
            : (zn && !zn(V, L)) || (q[V] = $[V]));
      var Fn = (function (Xt, Be) {
          var Nt = Hh(),
            $i = Xt.generateAndInjectStyles(Be, Nt.styleSheet, Nt.stylis);
          return $i;
        })(N, $),
        ht = Jn(Nn, Dn);
      return (
        Fn && (ht += " " + Fn),
        $.className && (ht += " " + $.className),
        (q[Ql(L) && !Tg.has(L) ? "class" : "className"] = ht),
        (q.ref = C),
        W.createElement(L, q)
      );
    })(m, w, k);
  }
  h.displayName = f;
  var m = Te.forwardRef(h);
  return (
    (m.attrs = y),
    (m.componentStyle = p),
    (m.displayName = f),
    (m.shouldForwardProp = v),
    (m.foldedComponentIds = r
      ? Jn(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (m.styledComponentId = d),
    (m.target = r ? i.target : e),
    Object.defineProperty(m, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (w) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var E = [], x = 1; x < arguments.length; x++)
                E[x - 1] = arguments[x];
              for (var C = 0, I = E; C < I.length; C++) yc(k, I[C], !0);
              return k;
            })({}, i.defaultProps, w)
          : w;
      },
    }),
    Nd(m, function () {
      return ".".concat(m.styledComponentId);
    }),
    s &&
      Ng(m, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    m
  );
}
function qh(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Vh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Ci(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ei(e) || Rs(e)) return Vh(lr(qh(Za, Ts([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? lr(r)
    : Vh(lr(qh(r, t)));
}
function vc(e, t, n) {
  if ((n === void 0 && (n = ki), !t)) throw Ys(1, t);
  var r = function (i) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return e(t, n, Ci.apply(void 0, Ts([i], s, !1)));
  };
  return (
    (r.attrs = function (i) {
      return vc(
        e,
        t,
        De(De({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return vc(e, t, De(De({}, n), i));
    }),
    r
  );
}
var Wg = function (e) {
    return vc(QE, e);
  },
  A = Wg;
Tg.forEach(function (e) {
  A[e] = Wg(e);
});
function HE(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = mc(Ci.apply(void 0, Ts([e], t, !1))),
    i = $g(r);
  return new Ug(i, r);
}
const WE = A.div`
  height: 100vh;
  /* background-color: var(--color-primary); */
  background: linear-gradient(to top left, #02223d, #033966);
  display: grid;
  place-content: center;
`,
  qE = A.form`
  background: linear-gradient(to bottom right, #e6f1fa, #f7f7f8);
  width: 50rem;
  padding: 3.2rem;
  border-radius: 23px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
`,
  VE = A.h1`
  font-size: 3.2rem;
  margin-bottom: 4rem;
  font-weight: 600;
  text-align: center;
  /* color: #e6f1fa; */
`,
  KE = A.button`
  background-color: var(--color-primary);
  color: #fff;
  border: 0;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  padding: 1.2rem 1.4rem;
  border-radius: 19px;
  cursor: pointer;

  &.empty {
    background-color: #3291df;
  }
`,
  Kh = A.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin-right: 1rem;
  color: var(--color-text);
  line-height: 1.6;
`,
  Gh = A.input`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 1.8rem;
  border-radius: 17px;
  outline: none;
  background-color: #fff;
  border: 0.2rem solid transparent;

  &:focus {
    border: 0.2rem solid var(--color-primary);
  }
`,
  Jh = A.div`
  display: grid;
  gap: 1rem;
`,
  GE = A.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;
function JE() {
  const [e, t] = W.useState("a"),
    [n, r] = W.useState("a"),
    i = jy(),
    s = function (o) {
      o.preventDefault(),
        !(!e || !n) && (i(Rk({ name: e, email: n })), i(Ik()));
    };
  return O.jsx(WE, {
    children: O.jsxs(qE, {
      onSubmit: s,
      children: [
        O.jsx(VE, { children: "Welcome" }),
        O.jsxs(GE, {
          children: [
            O.jsxs(Jh, {
              children: [
                O.jsx(Kh, { children: "Name" }),
                O.jsx(Gh, {
                  type: "name",
                  value: e,
                  spellCheck: !1,
                  onChange: (o) => t(o.target.value),
                }),
              ],
            }),
            O.jsxs(Jh, {
              children: [
                O.jsx(Kh, { children: "Email" }),
                O.jsx(Gh, {
                  type: "email",
                  value: n,
                  spellCheck: !1,
                  onChange: (o) => r(o.target.value),
                }),
              ],
            }),
            O.jsx(KE, {
              className: !e || !n ? "empty" : "",
              children: "Start Quiz",
            }),
          ],
        }),
      ],
    }),
  });
}
const YE = A.div`
  margin-top: 12rem;
  text-align: center;
  font-weight: 500;
  font-size: 2.4rem;
`;
function XE() {
  const { questions: e, score: t } = dt((n) => n.quiz);
  return O.jsxs(YE, {
    children: [
      "Total score:",
      O.jsxs("strong", { children: ["", t, " / ", e.length] }),
    ],
  });
}
const ZE = HE`
   to {
      width: 100%;
    }
`,
  eC = A.h1`
  font-weight: 500;
  font-size: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 16rem;
`,
  tC = A.span`
  display: block;
  position: relative;
  height: 1.2rem;
  width: 30rem;
  border: 0.1rem solid #fff;
  border-radius: 1rem;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: var(--color-primary);
    animation: 0.3s ${ZE} ease-in infinite;
  }
`;
function qg({ message: e = "Loading" }) {
  return O.jsxs(eC, {
    children: [O.jsx("span", { children: e }), O.jsx(tC, {})],
  });
}
function Vg() {
  const e = wr(),
    { mutate: t } = T1({
      mutationFn: Pk,
      onSuccess: () => e(Bk()),
      onMutate: () => e(Uk()),
    });
  return { submitQuiz: t };
}
const nC = A.div`
  position: fixed;
  text-align: center;
  /* width: 60rem; */
  padding: 1.6rem;
  font-size: 8rem;
  z-index: 3;
  background-color: var(--color-bg-900);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
  border-radius: 9px;
`,
  rC = A.div`
  position: fixed;
  /* width: 100%; */
  inset: 0;
  background-color: #000;
  opacity: 0.3;
  z-index: 2;
`,
  iC = A.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 3.2rem;
`,
  Yh = A.p`
  font-size: 1.4rem;
  color: #555;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 3.2rem;
`,
  sC = A.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 8rem; */
`,
  Xh = A.div`
  border: 0;
  background: 0;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  border-radius: 9px;
  background-color: var(--color-primary);
  color: #fff;
  cursor: pointer;

  ${(e) =>
    e.$type === "inverted" &&
    Ci`
      background-color: var(--color-bg-700);
      color: var(--color-text);
    `}
`;
function oC() {
  const { submitQuiz: e } = Vg(),
    { onSubmit: t, score: n } = dt((o) => o.quiz),
    { name: r, email: i } = dt((o) => o.user),
    s = wr();
  return (
    t &&
    O.jsxs(O.Fragment, {
      children: [
        O.jsxs(nC, {
          children: [
            O.jsx(iC, { children: "Are you sure you want to end the Exam?" }),
            O.jsx(Yh, { children: "You still have 23 seconds remaining" }),
            O.jsx(Yh, {
              children:
                "If you want to check your answer again, press NO to cancel. if you want to end the exam and submit your answers you can press YES",
            }),
            O.jsxs(sC, {
              children: [
                O.jsx(Xh, {
                  onClick: () => {
                    e({ name: r, email: i, score: n });
                  },
                  children: "Yes",
                }),
                O.jsx(Xh, {
                  $type: "inverted",
                  onClick: () => s(Ih()),
                  children: "No",
                }),
              ],
            }),
          ],
        }),
        O.jsx(rC, {
          onClick: () => {
            s(Ih());
          },
        }),
      ],
    })
  );
}
var Kg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Zh = Te.createContext && Te.createContext(Kg),
  aC = ["attr", "size", "title"];
function lC(e, t) {
  if (e == null) return {};
  var n = uC(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function uC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ea() {
  return (
    (Ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ea.apply(this, arguments)
  );
}
function ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ep(Object(n), !0).forEach(function (r) {
          cC(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ep(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function cC(e, t, n) {
  return (
    (t = dC(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dC(e) {
  var t = fC(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function fC(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gg(e) {
  return (
    e &&
    e.map((t, n) =>
      Te.createElement(t.tag, Ca({ key: n }, t.attr), Gg(t.child))
    )
  );
}
function Dd(e) {
  return (t) =>
    Te.createElement(hC, Ea({ attr: Ca({}, e.attr) }, t), Gg(e.child));
}
function hC(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = lC(e, aC),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Te.createElement(
        "svg",
        Ea(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: Ca(Ca({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && Te.createElement("title", null, s),
        e.children
      )
    );
  };
  return Zh !== void 0
    ? Te.createElement(Zh.Consumer, null, (n) => t(n))
    : t(Kg);
}
function pC(e) {
  return Dd({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function mC(e) {
  return Dd({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
const yC = A.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 0rem;
`;
function gC({ children: e }) {
  return O.jsx(yC, { children: e });
}
const vC = A.span`
  height: 2.4rem;
  width: 2.4rem;
  position: relative;

  & svg {
    position: absolute;
    left: 0;
  }

  & svg:nth-child(2) {
    opacity: 0;
    transition: transform 0.5s;
  }

  & svg:nth-child(3) {
    transform: none;
    transition: scale 1s;
    z-index: -1;
    scale: 0.1;
  }

  /*####### CHECKED STATES #######*/

  &.checked svg {
    transform: rotate(360deg);
    z-index: 6;
    scale: 1;
  }

  &.checked svg:nth-child(1) {
    opacity: 0;
  }

  &.checked svg:nth-child(2) {
    opacity: 1;
  }
`;
function wC({ isChecked: e }) {
  return O.jsxs(vC, {
    className: e ? "checked" : "",
    children: [
      O.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: O.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "#c8e3f3",
          strokeWidth: "2.08333",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
      O.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: O.jsx("path", {
          d: "M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2",
          stroke: "var(--color-primary)",
          strokeWidth: "2.08333",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
      O.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          O.jsx("circle", {
            cx: "11.9996",
            cy: "12",
            r: "10",
            fill: "var(--color-primary)",
            stroke: "var(--color-primary)",
            strokeWidth: "2.08333",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          O.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z",
            fill: "white",
          }),
        ],
      }),
    ],
  });
}
const _C = A.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-bg-900);
  border-radius: 9px;
  cursor: pointer;
`,
  SC = A.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.4;
`;
function kC({ children: e, optIndex: t }) {
  const { answers: n, index: r } = dt((s) => s.quiz),
    i = wr();
  return O.jsxs(_C, {
    onClick: () => i(Fk(t)),
    children: [
      O.jsx(wC, { isChecked: n[r] === t }),
      O.jsx(SC, { children: e }),
    ],
  });
}
const EC = A.span`
  font-size: 1.6rem;
  font-weight: 600;
  display: block;
  text-transform: uppercase;
  margin-bottom: 2rem;
`,
  CC = A.p`
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 3rem;
`,
  xC = A.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style: none;
`;
function OC() {
  const { questions: e, index: t } = dt((i) => i.quiz),
    { question: n, options: r } = e[t];
  return O.jsxs("div", {
    children: [
      O.jsxs(EC, { children: ["Question ", t + 1, " of ", e.length] }),
      O.jsx(CC, { children: n }),
      O.jsx(xC, {
        children: r.map((i, s) => O.jsx(kC, { optIndex: s, children: i }, i)),
      }),
    ],
  });
}
function PC(e) {
  return Dd({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" },
        child: [],
      },
    ],
  })(e);
}
A.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
A.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
A.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
`;
A.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-text);
`;
const tp = A.button`
  background: none;
  border: 0;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: 0.2rem solid var(--color-primary);
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 9px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  ${(e) =>
    e.$type === "inverted" &&
    Ci`
      background-color: var(--color-bg-900);
      color: var(--color-text);
      border: 0.2rem solid transparent;
    `}
`,
  bC = A.div`
  /* max-width: 80rem; */
  /* width: 100%; */
  /* margin: 0 auto; */
  background-color: var(--color-bg-700);
  padding: 1rem 1.6rem;
  position: relative;

  @media (max-width: 40em) {
    height: 100dvh;
  }
`,
  TC = A.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 1.2rem;
  @media (max-width: 40em) {
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -50%);
  }
`,
  RC = A.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 4rem;
`;
function jC() {
  const e = wr();
  return O.jsxs(bC, {
    children: [
      O.jsxs(gC, { children: [O.jsx(RC, { children: "GNS112 CA" }), !1] }),
      O.jsx(OC, {}),
      O.jsxs(TC, {
        children: [
          O.jsxs(tp, {
            onClick: () => {
              e(Dk());
            },
            children: [O.jsx(pC, {}), " Previous"],
          }),
          O.jsxs(tp, {
            onClick: () => {
              e(Lk());
            },
            children: ["Next ", O.jsx(mC, {})],
          }),
        ],
      }),
    ],
  });
}
const $C = A.button`
  position: relative;
  background: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--color-primary); */
  color: var(--color-primary);
  border: 0.15rem solid var(--color-primary);
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  /* transition: all 0.3s; */

  & svg {
    display: none;
    position: absolute;
    top: 0;
    right: 0.1rem;
  }

  &.answered {
    /* background-color: var(--color-green); */
    /* color: #fff; */
    background-color: #bee0f5;
    color: #0672cb;
    /* border: 0.15rem solid var(--color-green); */
    svg {
      display: block;
    }
  }

  &.active {
    background-color: var(--color-primary);
    color: #fff;
    border: 0.15rem solid var(--color-primary);
  }
`;
function AC({ qNumber: e }) {
  const { index: t, answers: n } = dt((s) => s.quiz),
    r = wr(),
    i = typeof n[e - 1] == "number";
  return O.jsxs($C, {
    className: `${t + 1 === e ? "active" : ""} ${i ? "answered" : ""}`,
    onClick: () => r(zk(e)),
    children: [!1, e],
  });
}
const IC = A.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 3rem;
`;
function LC() {
  const e = dt((n) => n.quiz.questions),
    t = Number(e == null ? void 0 : e.length);
  return O.jsx("div", {
    children: O.jsx(IC, {
      children: Array.from({ length: t }, (n, r) =>
        O.jsx(AC, { qNumber: r + 1 }, r)
      ),
    }),
  });
}
const NC = A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`,
  np = A.span`
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 600;
  width: 4.8rem;
  aspect-ratio: 1 /1;
  border-radius: 7px;
  background-color: var(--color-bg-900);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,
  DC = A.div`
  /* margin: 0 auto; */
  margin-bottom: 2.4rem;
`,
  zC = A.span`
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 600;
`,
  FC = A.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: var(--color-text);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;
function MC() {
  const { submitQuiz: e } = Vg(),
    { name: t, email: n } = dt((a) => a.user),
    { time: r, score: i } = dt((a) => a.quiz),
    [s, o] = W.useState(r);
  return (
    W.useEffect(
      function () {
        if (s === 0) {
          e({ name: t, email: n, score: i });
          return;
        }
        const a = setInterval(function () {
          o((l) => (typeof l == "number" ? l - 1 : l));
        }, 1e3);
        return () => clearInterval(a);
      },
      [s, t, n, i, e]
    ),
    s
      ? O.jsxs(DC, {
          children: [
            O.jsxs(FC, {
              children: [O.jsx(PC, { size: 20 }), "Time Remaining"],
            }),
            O.jsxs(NC, {
              children: [
                O.jsx(np, {
                  children: String(Math.trunc(s / 60)).padStart(2, "0"),
                }),
                O.jsx(zC, { children: ":" }),
                O.jsx(np, { children: String(s % 60).padStart(2, "0") }),
              ],
            }),
          ],
        })
      : null
  );
}
const UC = A.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;
function BC() {
  const { questions: e } = dt((n) => n.quiz),
    t = dt((n) => n.quiz.answers.filter((r) => r !== null).length);
  return O.jsxs(UC, { children: [t, " of ", e.length, " questions answered"] });
}
const QC = A.button`
  text-align: center;
  display: block;
  margin: 0 auto;
  background: none;
  border: 0;
  padding: 0.6rem 6rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: 0.2rem solid var(--color-primary);
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 9px;
  cursor: pointer;
`;
function HC() {
  const e = wr();
  return O.jsx(QC, {
    onClick: () => {
      e(Mk());
    },
    children: "SUBMIT",
  });
}
const WC = A.div`
  background-color: var(--color-bg-700);
  padding: 1.2rem;
  @media (max-width: 35em) {
    order: -1;
    display: none;
  }
`;
function qC({ children: e }) {
  return O.jsx(WC, { children: e });
}
const VC = A.div`
  margin-top: 6rem;
`,
  KC = A.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,
  Wl = A.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`,
  ql = A.span`
  background: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--color-primary); */
  color: var(--color-primary);
  border: 0.15rem solid var(--color-primary);
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.4rem;

  ${(e) =>
    e.$type === "answered" &&
    Ci`
      background-color: #bee0f5;
      color: #0672cb;
    `}

  ${(e) =>
    e.$type === "current" &&
    Ci`
      background-color: var(--color-primary);
      color: #fff;
      border: 0.15rem solid var(--color-primary);
    `}
`,
  Vl = A.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-text);
`;
function GC() {
  return O.jsx(VC, {
    children: O.jsxs(KC, {
      children: [
        O.jsxs(Wl, {
          children: [
            O.jsx(ql, { children: "X" }),
            O.jsx(Vl, { children: "Unanswered" }),
          ],
        }),
        O.jsxs(Wl, {
          children: [
            O.jsx(ql, { $type: "answered", children: "X" }),
            O.jsx(Vl, { children: "Answered" }),
          ],
        }),
        O.jsxs(Wl, {
          children: [
            O.jsx(ql, { $type: "current", children: "X" }),
            O.jsx(Vl, { children: "Current" }),
          ],
        }),
      ],
    }),
  });
}
async function JC() {
  const { data: e, error: t } = await Rd.from("questions").select("*");
  if (t) throw new Error("Questions was not loaded!");
  return e;
}
function YC() {
  const { data: e, isLoading: t } = b1({
    queryKey: ["questions"],
    queryFn: JC,
  });
  return { isLoading: t, questions: e };
}
const XC = A.main`
  display: grid;
  padding: 1.2rem;
  grid-template-columns: 1fr 0.3fr;
  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
  margin: 0 auto;
  position: relative;
  gap: 1.6rem;
  background-color: var(--color-bg-900);
  height: 100dvh;
`;
function ZC() {
  const { isLoading: e, questions: t } = YC(),
    n = wr();
  return (
    t && n(Nk(t)),
    e
      ? O.jsx(qg, { message: "Loading Questions..." })
      : O.jsxs(XC, {
          children: [
            O.jsx(oC, {}),
            O.jsxs("div", { children: [O.jsx(jC, {}), O.jsx(LC, {})] }),
            O.jsxs(qC, {
              children: [
                O.jsx(MC, {}),
                O.jsx(BC, {}),
                O.jsx(HC, {}),
                O.jsx(GC, {}),
              ],
            }),
          ],
        })
  );
}
const ex = A.div`
  /* padding: 1.6rem; */

  @media (max-width: 35em) {
    padding: 0;
  }
`;
function tx({ children: e }) {
  return O.jsx(ex, { children: e });
}
function nx() {
  const e = dt((t) => t.quiz.status);
  return O.jsxs(tx, {
    children: [
      e === "ready" && O.jsx(JE, {}),
      e === "start" && O.jsx(ZC, {}),
      e === "submitting" && O.jsx(qg, { message: "Submitting.." }),
      e === "finish" && O.jsx(XE, {}),
    ],
  });
}
const rx = new c1({});
Kl.createRoot(document.getElementById("root")).render(
  O.jsx(Te.StrictMode, {
    children: O.jsx(m1, {
      client: rx,
      children: O.jsx(qw, { store: Hk, children: O.jsx(nx, {}) }),
    }),
  })
);
export { Zg as g };
