var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (e && (t = e((e = 0))), t),
  s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports),
  c = (e, n) => {
    let r = {}
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 })
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r)
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }))
    return e
  },
  u = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    l(r || !n || !n.__esModule ? t(a, `default`, { value: n, enumerable: !0 }) : a, n)
  ),
  d = (e) =>
    a.call(e, `module.exports`) ? e[`module.exports`] : l(t({}, `__esModule`, { value: !0 }), e)
;(function () {
  let e = document.createElement(`link`).relList
  if (e && e.supports && e.supports(`modulepreload`)) return
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e)
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(e) {
    let t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    )
  }
  function n(e) {
    if (e.ep) return
    e.ep = !0
    let n = t(e)
    fetch(e.href, n)
  }
})()
var f = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]), typeof e == `function` ? e : null)
    }
    var h = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {}
    function v(e, t, n) {
      ;((this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h))
    }
    ;((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`
          )
        this.updater.enqueueSetState(this, e, t, `setState`)
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
      }))
    function y() {}
    y.prototype = v.prototype
    function b(e, t, n) {
      ;((this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h))
    }
    var x = (b.prototype = new y())
    ;((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0))
    var S = Array.isArray
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty
    function E(e, n, r) {
      var i = r.ref
      return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r }
    }
    function ee(e, t) {
      return E(e.type, t, e.props)
    }
    function D(e) {
      return typeof e == `object` && !!e && e.$$typeof === t
    }
    function te(e) {
      var t = { "=": `=0`, ":": `=2` }
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e]
        })
      )
    }
    var ne = /\/+/g
    function re(e, t) {
      return typeof e == `object` && e && e.key != null ? te(`` + e.key) : t.toString(36)
    }
    function ie(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value
        case `rejected`:
          throw e.reason
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` && ((e.status = `fulfilled`), (e.value = t))
                  },
                  function (t) {
                    e.status === `pending` && ((e.status = `rejected`), (e.reason = t))
                  }
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value
            case `rejected`:
              throw e.reason
          }
      }
      throw e
    }
    function ae(e, r, i, a, o) {
      var s = typeof e
      ;(s === `undefined` || s === `boolean`) && (e = null)
      var c = !1
      if (e === null) c = !0
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0
            break
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0
                break
              case d:
                return ((c = e._init), ae(c(e._payload), r, i, a, o))
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + re(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(ne, `$&/`) + `/`),
              ae(o, r, i, ``, function (e) {
                return e
              }))
            : o != null &&
              (D(o) &&
                (o = ee(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ne, `$&/`) + `/`) +
                    c
                )),
              r.push(o)),
          1
        )
      c = 0
      var l = a === `` ? `.` : a + `:`
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + re(a, u)), (c += ae(a, r, i, s, o)))
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + re(a, u++)), (c += ae(a, r, i, s, o)))
      else if (s === `object`) {
        if (typeof e.then == `function`) return ae(ie(e), r, i, a, o)
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`
          )
        )
      }
      return c
    }
    function oe(e, t, n) {
      if (e == null) return e
      var r = [],
        i = 0
      return (
        ae(e, r, ``, ``, function (e) {
          return t.call(n, e, i++)
        }),
        r
      )
    }
    function se(e) {
      if (e._status === -1) {
        var t = e._result
        ;((t = t()),
          t.then(
            function (t) {
              ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t))
            },
            function (t) {
              ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t))
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)))
      }
      if (e._status === 1) return e._result.default
      throw e._result
    }
    var O =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                })
                if (!window.dispatchEvent(t)) return
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e)
                return
              }
              console.error(e)
            },
      k = {
        map: oe,
        forEach: function (e, t, n) {
          oe(
            e,
            function () {
              t.apply(this, arguments)
            },
            n
          )
        },
        count: function (e) {
          var t = 0
          return (
            oe(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            oe(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!D(e))
            throw Error(`React.Children.only expected to receive a single React element child.`)
          return e
        },
      }
    ;((e.Activity = f),
      (e.Children = k),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e)
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments)
        }
      }),
      (e.cacheSignal = function () {
        return null
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(`The argument must be a React element, but you passed ` + e + `.`)
        var r = g({}, e.props),
          i = e.key
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a])
        var a = arguments.length - 2
        if (a === 1) r.children = n
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2]
          r.children = o
        }
        return E(e.type, i, r)
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        )
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r])
        var o = arguments.length - 2
        if (o === 1) i.children = n
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2]
          i.children = s
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r])
        return E(e, a, i)
      }),
      (e.createRef = function () {
        return { current: null }
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e }
      }),
      (e.isValidElement = D),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: se }
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t }
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {}
        w.T = n
        try {
          var r = e(),
            i = w.S
          ;(i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, O))
        } catch (e) {
          O(e)
        } finally {
          ;(t !== null && n.types !== null && (t.types = n.types), (w.T = t))
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh()
      }),
      (e.use = function (e) {
        return w.H.use(e)
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n)
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t)
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e)
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t)
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t)
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e)
      }),
      (e.useId = function () {
        return w.H.useId()
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n)
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t)
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t)
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t)
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t)
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n)
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e)
      }),
      (e.useState = function (e) {
        return w.H.useState(e)
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n)
      }),
      (e.useTransition = function () {
        return w.H.useTransition()
      }),
      (e.version = `19.2.4`))
  }),
  p = s((e, t) => {
    t.exports = f()
  }),
  m = s((e) => {
    function t(e, t) {
      var n = e.length
      e.push(t)
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r]
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r))
        else break a
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0]
    }
    function r(e) {
      if (e.length === 0) return null
      var t = e[0],
        n = e.pop()
      if (n !== t) {
        e[0] = n
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l]
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s))
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l))
          else break a
        }
      }
      return t
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex
      return n === 0 ? e.id - t.id : n
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance
      e.unstable_now = function () {
        return a.now()
      }
    } else {
      var o = Date,
        s = o.now()
      e.unstable_now = function () {
        return o.now() - s
      }
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l)
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i))
        else break
        i = n(l)
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), D()))
        else {
          var t = n(l)
          t !== null && re(x, t.startTime - e)
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w)
    }
    function ee() {
      if (((g = !1), S)) {
        var t = e.unstable_now()
        T = t
        var i = !0
        try {
          a: {
            ;((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0))
            var a = f
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E()); ) {
                  var o = d.callback
                  if (typeof o == `function`) {
                    ;((d.callback = null), (f = d.priorityLevel))
                    var s = o(d.expirationTime <= t)
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ;((d.callback = s), b(t), (i = !0))
                      break b
                    }
                    ;(d === n(c) && r(c), b(t))
                  } else r(c)
                  d = n(c)
                }
                if (d !== null) i = !0
                else {
                  var u = n(l)
                  ;(u !== null && re(x, u.startTime - t), (i = !1))
                }
              }
              break a
            } finally {
              ;((d = null), (f = a), (p = !1))
            }
            i = void 0
          }
        } finally {
          i ? D() : (S = !1)
        }
      }
    }
    var D
    if (typeof y == `function`)
      D = function () {
        y(ee)
      }
    else if (typeof MessageChannel < `u`) {
      var te = new MessageChannel(),
        ne = te.port2
      ;((te.port1.onmessage = ee),
        (D = function () {
          ne.postMessage(null)
        }))
    } else
      D = function () {
        _(ee, 0)
      }
    function re(t, n) {
      C = _(function () {
        t(e.unstable_now())
      }, n)
    }
    ;((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5)
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3
            break
          default:
            t = f
        }
        var n = f
        f = t
        try {
          return e()
        } finally {
          f = n
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break
          default:
            e = 3
        }
        var n = f
        f = e
        try {
          return t()
        } finally {
          f = n
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now()
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1
            break
          case 2:
            s = 250
            break
          case 5:
            s = 1073741823
            break
          case 4:
            s = 1e4
            break
          default:
            s = 5e3
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), re(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), D()))),
          r
        )
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f
        return function () {
          var n = f
          f = t
          try {
            return e.apply(this, arguments)
          } finally {
            f = n
          }
        }
      }))
  }),
  h = s((e, t) => {
    t.exports = m()
  }),
  g = s((e) => {
    var t = p()
    function n(e) {
      var t = `https://react.dev/errors/` + e
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1])
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n])
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      )
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522))
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`)
    function o(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    function c(e, t) {
      if (e === `font`) return ``
      if (typeof t == `string`) return t === `use-credentials` ? t : ``
    }
    ;((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(n(299))
        return o(e, t, null, r)
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p
        try {
          if (((s.T = null), (i.p = 2), e)) return e()
        } finally {
          ;((s.T = t), (i.p = n), i.d.f())
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
            : (t = null),
          i.d.C(e, t))
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e)
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0
          n === `style`
            ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
              })
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              })
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin)
              i.d.M(e, {
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              })
            }
          } else t ?? i.d.M(e)
      }),
      (e.preload = function (e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin)
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          })
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin)
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            })
          } else i.d.m(e)
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e)
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t)
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n)
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus()
      }),
      (e.version = `19.2.4`))
  }),
  _ = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (e) {
          console.error(e)
        }
    }
    ;(n(), (t.exports = g()))
  }),
  v = s((e) => {
    var t = h(),
      n = p(),
      r = _()
    function i(e) {
      var t = `https://react.dev/errors/` + e
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1])
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n])
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      )
    }
    function a(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
    }
    function o(e) {
      var t = e,
        n = e
      if (e.alternate) for (; t.return; ) t = t.return
      else {
        e = t
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return))
        while (e)
      }
      return t.tag === 3 ? n : null
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated
      }
      return null
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated
      }
      return null
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188))
    }
    function u(e) {
      var t = e.alternate
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188))
        return t === e ? e : null
      }
      for (var n = e, r = t; ; ) {
        var a = n.return
        if (a === null) break
        var s = a.alternate
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r
            continue
          }
          break
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return (l(a), e)
            if (s === r) return (l(a), t)
            s = s.sibling
          }
          throw Error(i(188))
        }
        if (n.return !== r.return) ((n = a), (r = s))
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              ;((c = !0), (n = a), (r = s))
              break
            }
            if (u === r) {
              ;((c = !0), (r = a), (n = s))
              break
            }
            u = u.sibling
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                ;((c = !0), (n = s), (r = a))
                break
              }
              if (u === r) {
                ;((c = !0), (r = s), (n = a))
                break
              }
              u = u.sibling
            }
            if (!c) throw Error(i(189))
          }
        }
        if (n.alternate !== r) throw Error(i(190))
      }
      if (n.tag !== 3) throw Error(i(188))
      return n.stateNode.current === n ? e : t
    }
    function d(e) {
      var t = e.tag
      if (t === 5 || t === 26 || t === 27 || t === 6) return e
      for (e = e.child; e !== null; ) {
        if (((t = d(e)), t !== null)) return t
        e = e.sibling
      }
      return null
    }
    var f = Object.assign,
      m = Symbol.for(`react.element`),
      g = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      T = Symbol.for(`react.suspense`),
      E = Symbol.for(`react.suspense_list`),
      ee = Symbol.for(`react.memo`),
      D = Symbol.for(`react.lazy`),
      te = Symbol.for(`react.activity`),
      ne = Symbol.for(`react.memo_cache_sentinel`),
      re = Symbol.iterator
    function ie(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (re && e[re]) || e[`@@iterator`]), typeof e == `function` ? e : null)
    }
    var ae = Symbol.for(`react.client.reference`)
    function oe(e) {
      if (e == null) return null
      if (typeof e == `function`) return e.$$typeof === ae ? null : e.displayName || e.name || null
      if (typeof e == `string`) return e
      switch (e) {
        case y:
          return `Fragment`
        case x:
          return `Profiler`
        case b:
          return `StrictMode`
        case T:
          return `Suspense`
        case E:
          return `SuspenseList`
        case te:
          return `Activity`
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`
          case C:
            return e.displayName || `Context`
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`
          case w:
            var t = e.render
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            )
          case ee:
            return ((t = e.displayName || null), t === null ? oe(e.type) || `Memo` : t)
          case D:
            ;((t = e._payload), (e = e._init))
            try {
              return oe(e(t))
            } catch {}
        }
      return null
    }
    var se = Array.isArray,
      O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      ce = { pending: !1, data: null, method: null, action: null },
      le = [],
      ue = -1
    function de(e) {
      return { current: e }
    }
    function fe(e) {
      0 > ue || ((e.current = le[ue]), (le[ue] = null), ue--)
    }
    function A(e, t) {
      ;(ue++, (le[ue] = e.current), (e.current = t))
    }
    var pe = de(null),
      me = de(null),
      he = de(null),
      ge = de(null)
    function _e(e, t) {
      switch ((A(he, t), A(me, e), A(pe, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? qd(e) : 0
          break
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = qd(t)), (e = Jd(t, e)))
          else
            switch (e) {
              case `svg`:
                e = 1
                break
              case `math`:
                e = 2
                break
              default:
                e = 0
            }
      }
      ;(fe(pe), A(pe, e))
    }
    function ve() {
      ;(fe(pe), fe(me), fe(he))
    }
    function ye(e) {
      e.memoizedState !== null && A(ge, e)
      var t = pe.current,
        n = Jd(t, e.type)
      t !== n && (A(me, e), A(pe, n))
    }
    function be(e) {
      ;(me.current === e && (fe(pe), fe(me)), ge.current === e && (fe(ge), (tp._currentValue = ce)))
    }
    var xe, Se
    function Ce(e) {
      if (xe === void 0)
        try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/)
          ;((xe = (t && t[1]) || ``),
            (Se =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``))
        }
      return (
        `
` +
        xe +
        e +
        Se
      )
    }
    var we = !1
    function Te(e, t) {
      if (!e || we) return ``
      we = !0
      var n = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error()
                }
                if (
                  (Object.defineProperty(n.prototype, `props`, {
                    set: function () {
                      throw Error()
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, [])
                  } catch (e) {
                    var r = e
                  }
                  Reflect.construct(e, [], n)
                } else {
                  try {
                    n.call()
                  } catch (e) {
                    r = e
                  }
                  e.call(n.prototype)
                }
              } else {
                try {
                  throw Error()
                } catch (e) {
                  r = e
                }
                ;(n = e()) && typeof n.catch == `function` && n.catch(function () {})
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack]
            }
            return [null, null]
          },
        }
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`)
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, `name`, {
            value: `DetermineComponentFrameRoot`,
          })
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1]
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`)
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`); ) r++
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`); ) i++
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i]; ) i--
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `)
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    )
                  }
                while (1 <= r && 0 <= i)
              break
            }
        }
      } finally {
        ;((we = !1), (Error.prepareStackTrace = n))
      }
      return (n = e ? e.displayName || e.name : ``) ? Ce(n) : ``
    }
    function Ee(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ce(e.type)
        case 16:
          return Ce(`Lazy`)
        case 13:
          return e.child !== t && t !== null ? Ce(`Suspense Fallback`) : Ce(`Suspense`)
        case 19:
          return Ce(`SuspenseList`)
        case 0:
        case 15:
          return Te(e.type, !1)
        case 11:
          return Te(e.type.render, !1)
        case 1:
          return Te(e.type, !0)
        case 31:
          return Ce(`Activity`)
        default:
          return ``
      }
    }
    function De(e) {
      try {
        var t = ``,
          n = null
        do ((t += Ee(e, n)), (n = e), (e = e.return))
        while (e)
        return t
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        )
      }
    }
    var Oe = Object.prototype.hasOwnProperty,
      ke = t.unstable_scheduleCallback,
      Ae = t.unstable_cancelCallback,
      je = t.unstable_shouldYield,
      Me = t.unstable_requestPaint,
      Ne = t.unstable_now,
      Pe = t.unstable_getCurrentPriorityLevel,
      Fe = t.unstable_ImmediatePriority,
      Ie = t.unstable_UserBlockingPriority,
      Le = t.unstable_NormalPriority,
      Re = t.unstable_LowPriority,
      ze = t.unstable_IdlePriority,
      Be = t.log,
      Ve = t.unstable_setDisableYieldValue,
      He = null,
      Ue = null
    function We(e) {
      if ((typeof Be == `function` && Ve(e), Ue && typeof Ue.setStrictMode == `function`))
        try {
          Ue.setStrictMode(He, e)
        } catch {}
    }
    var Ge = Math.clz32 ? Math.clz32 : Je,
      Ke = Math.log,
      qe = Math.LN2
    function Je(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ke(e) / qe) | 0)) | 0)
    }
    var Ye = 256,
      Xe = 262144,
      Ze = 4194304
    function Qe(e) {
      var t = e & 42
      if (t !== 0) return t
      switch (e & -e) {
        case 1:
          return 1
        case 2:
          return 2
        case 4:
          return 4
        case 8:
          return 8
        case 16:
          return 16
        case 32:
          return 32
        case 64:
          return 64
        case 128:
          return 128
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
          return e & 261888
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560
        case 67108864:
          return 67108864
        case 134217728:
          return 134217728
        case 268435456:
          return 268435456
        case 536870912:
          return 536870912
        case 1073741824:
          return 0
        default:
          return e
      }
    }
    function $e(e, t, n) {
      var r = e.pendingLanes
      if (r === 0) return 0
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes
      e = e.warmLanes
      var s = r & 134217727
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Qe(n)))
                : (i = Qe(o))
              : (i = Qe(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = Qe(n))) : (i = Qe(o)))
              : (i = Qe(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      )
    }
    function et(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function tt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250
        case 16:
        case 32:
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
          return t + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1
        default:
          return -1
      }
    }
    function j() {
      var e = Ze
      return ((Ze <<= 1), !(Ze & 62914560) && (Ze = 4194304), e)
    }
    function nt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e)
      return t
    }
    function rt(e, t) {
      ;((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
    }
    function it(e, t, n, r, i, a) {
      var o = e.pendingLanes
      ;((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0))
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ge(n),
          d = 1 << u
        ;((s[u] = 0), (c[u] = -1))
        var f = l[u]
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u]
            p !== null && (p.lane &= -536870913)
          }
        n &= ~d
      }
      ;(r !== 0 && at(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)))
    }
    function at(e, t, n) {
      ;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
      var r = 31 - Ge(t)
      ;((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)))
    }
    function ot(e, t) {
      var n = (e.entangledLanes |= t)
      for (e = e.entanglements; n; ) {
        var r = 31 - Ge(n),
          i = 1 << r
        ;((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i))
      }
    }
    function st(e, t) {
      var n = t & -t
      return ((n = n & 42 ? 1 : ct(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0)
    }
    function ct(e) {
      switch (e) {
        case 2:
          e = 1
          break
        case 8:
          e = 4
          break
        case 32:
          e = 16
          break
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
          e = 128
          break
        case 268435456:
          e = 134217728
          break
        default:
          e = 0
      }
      return e
    }
    function lt(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2)
    }
    function ut() {
      var e = k.p
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : _p(e.type)) : e
    }
    function dt(e, t) {
      var n = k.p
      try {
        return ((k.p = e), t())
      } finally {
        k.p = n
      }
    }
    var ft = Math.random().toString(36).slice(2),
      pt = `__reactFiber$` + ft,
      mt = `__reactProps$` + ft,
      ht = `__reactContainer$` + ft,
      gt = `__reactEvents$` + ft,
      _t = `__reactListeners$` + ft,
      vt = `__reactHandles$` + ft,
      yt = `__reactResources$` + ft,
      bt = `__reactMarker$` + ft
    function xt(e) {
      ;(delete e[pt], delete e[mt], delete e[gt], delete e[_t], delete e[vt])
    }
    function St(e) {
      var t = e[pt]
      if (t) return t
      for (var n = e.parentNode; n; ) {
        if ((t = n[ht] || n[pt])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = _f(e); e !== null; ) {
              if ((n = e[pt])) return n
              e = _f(e)
            }
          return t
        }
        ;((e = n), (n = e.parentNode))
      }
      return null
    }
    function Ct(e) {
      if ((e = e[pt] || e[ht])) {
        var t = e.tag
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
      }
      return null
    }
    function wt(e) {
      var t = e.tag
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
      throw Error(i(33))
    }
    function Tt(e) {
      var t = e[yt]
      return ((t ||= e[yt] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t)
    }
    function Et(e) {
      e[bt] = !0
    }
    var Dt = new Set(),
      Ot = {}
    function kt(e, t) {
      ;(At(e, t), At(e + `Capture`, t))
    }
    function At(e, t) {
      for (Ot[e] = t, e = 0; e < t.length; e++) Dt.add(t[e])
    }
    var jt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`
      ),
      M = {},
      Mt = {}
    function Nt(e) {
      return Oe.call(Mt, e)
        ? !0
        : Oe.call(M, e)
          ? !1
          : jt.test(e)
            ? (Mt[e] = !0)
            : ((M[e] = !0), !1)
    }
    function Pt(e, t, n) {
      if (Nt(t))
        if (n === null) e.removeAttribute(t)
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t)
              return
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5)
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t)
                return
              }
          }
          e.setAttribute(t, `` + n)
        }
    }
    function Ft(e, t, n) {
      if (n === null) e.removeAttribute(t)
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t)
            return
        }
        e.setAttribute(t, `` + n)
      }
    }
    function N(e, t, n, r) {
      if (r === null) e.removeAttribute(n)
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n)
            return
        }
        e.setAttributeNS(t, n, `` + r)
      }
    }
    function It(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e
        case `object`:
          return e
        default:
          return ``
      }
    }
    function Lt(e) {
      var t = e.type
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
    }
    function Rt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this)
            },
            set: function (e) {
              ;((n = `` + e), a.call(this, e))
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n
            },
            setValue: function (e) {
              n = `` + e
            },
            stopTracking: function () {
              ;((e._valueTracker = null), delete e[t])
            },
          }
        )
      }
    }
    function zt(e) {
      if (!e._valueTracker) {
        var t = Lt(e) ? `checked` : `value`
        e._valueTracker = Rt(e, t, `` + e[t])
      }
    }
    function Bt(e) {
      if (!e) return !1
      var t = e._valueTracker
      if (!t) return !0
      var n = t.getValue(),
        r = ``
      return (
        e && (r = Lt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      )
    }
    function Vt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null
      try {
        return e.activeElement || e.body
      } catch {
        return e.body
      }
    }
    var Ht = /[\n"\\]/g
    function Ut(e) {
      return e.replace(Ht, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `
      })
    }
    function Wt(e, t, n, r, i, a, o, s) {
      ;((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + It(t))
            : e.value !== `` + It(t) && (e.value = `` + It(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Kt(e, o, It(n))
          : Kt(e, o, It(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + It(s))
          : e.removeAttribute(`name`))
    }
    function Gt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          zt(e)
          return
        }
        ;((n = n == null ? `` : `` + It(n)),
          (t = t == null ? n : `` + It(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t))
      }
      ;((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        zt(e))
    }
    function Kt(e, t, n) {
      ;(t === `number` && Vt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n)
    }
    function qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0))
      } else {
        for (n = `` + It(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ;((e[i].selected = !0), r && (e[i].defaultSelected = !0))
            return
          }
          t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
      }
    }
    function Jt(e, t, n) {
      if (t != null && ((t = `` + It(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t)
        return
      }
      e.defaultValue = n == null ? `` : `` + It(n)
    }
    function Yt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92))
          if (se(r)) {
            if (1 < r.length) throw Error(i(93))
            r = r[0]
          }
          n = r
        }
        ;((n ??= ``), (t = n))
      }
      ;((n = It(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        zt(e))
    }
    function Xt(e, t) {
      if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t
          return
        }
      }
      e.textContent = t
    }
    var Zt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `
      )
    )
    function Qt(e, t, n) {
      var r = t.indexOf(`--`) === 0
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Zt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`)
    }
    function $t(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62))
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``))
        for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Qt(e, a, r))
      } else for (var o in t) t.hasOwnProperty(o) && Qt(e, o, t[o])
    }
    function en(e) {
      if (e.indexOf(`-`) === -1) return !1
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1
        default:
          return !0
      }
    }
    var tn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      nn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
    function rn(e) {
      return nn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e
    }
    function an() {}
    var on = null
    function sn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      )
    }
    var cn = null,
      ln = null
    function un(e) {
      var t = Ct(e)
      if (t && (e = t.stateNode)) {
        var n = e[mt] || null
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Wt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode
              for (
                n = n.querySelectorAll(`input[name="` + Ut(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t]
                if (r !== e && r.form === e.form) {
                  var a = r[mt] || null
                  if (!a) throw Error(i(90))
                  Wt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name
                  )
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Bt(r))
            }
            break a
          case `textarea`:
            Jt(e, n.value, n.defaultValue)
            break a
          case `select`:
            ;((t = n.value), t != null && qt(e, !!n.multiple, t, !1))
        }
      }
    }
    var dn = !1
    function fn(e, t, n) {
      if (dn) return e(t, n)
      dn = !0
      try {
        return e(t)
      } finally {
        if (
          ((dn = !1),
          (cn !== null || ln !== null) &&
            (Du(), cn && ((t = cn), (e = ln), (ln = cn = null), un(t), e)))
        )
          for (t = 0; t < e.length; t++) un(e[t])
      }
    }
    function pn(e, t) {
      var n = e.stateNode
      if (n === null) return null
      var r = n[mt] || null
      if (r === null) return null
      n = r[t]
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ;((r = !r.disabled) ||
            ((e = e.type),
            (r = !(e === `button` || e === `input` || e === `select` || e === `textarea`))),
            (e = !r))
          break a
        default:
          e = !1
      }
      if (e) return null
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n))
      return n
    }
    var mn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      hn = !1
    if (mn)
      try {
        var gn = {}
        ;(Object.defineProperty(gn, `passive`, {
          get: function () {
            hn = !0
          },
        }),
          window.addEventListener(`test`, gn, gn),
          window.removeEventListener(`test`, gn, gn))
      } catch {
        hn = !1
      }
    var _n = null,
      vn = null,
      yn = null
    function bn() {
      if (yn) return yn
      var e,
        t = vn,
        n = t.length,
        r,
        i = `value` in _n ? _n.value : _n.textContent,
        a = i.length
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (yn = i.slice(e, 1 < r ? 1 - r : void 0))
    }
    function xn(e) {
      var t = e.keyCode
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      )
    }
    function Sn() {
      return !0
    }
    function Cn() {
      return !1
    }
    function wn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]))
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
          )
            ? Sn
            : Cn),
          (this.isPropagationStopped = Cn),
          this
        )
      }
      return (
        f(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0
            var e = this.nativeEvent
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Sn))
          },
          stopPropagation: function () {
            var e = this.nativeEvent
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Sn))
          },
          persist: function () {},
          isPersistent: Sn,
        }),
        t
      )
    }
    var Tn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      En = wn(Tn),
      Dn = f({}, Tn, { view: 0, detail: 0 }),
      On = wn(Dn),
      kn,
      An,
      jn,
      Mn = f({}, Dn, {
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
        getModifierState: Un,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== jn &&
                (jn && e.type === `mousemove`
                  ? ((kn = e.screenX - jn.screenX), (An = e.screenY - jn.screenY))
                  : (An = kn = 0),
                (jn = e)),
              kn)
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : An
        },
      }),
      Nn = wn(Mn),
      Pn = wn(f({}, Mn, { dataTransfer: 0 })),
      Fn = wn(f({}, Dn, { relatedTarget: 0 })),
      In = wn(f({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Ln = wn(
        f({}, Tn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData
          },
        })
      ),
      Rn = wn(f({}, Tn, { data: 0 })),
      zn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Bn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Vn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` }
    function Hn(e) {
      var t = this.nativeEvent
      return t.getModifierState ? t.getModifierState(e) : (e = Vn[e]) ? !!t[e] : !1
    }
    function Un() {
      return Hn
    }
    var Wn = wn(
        f({}, Dn, {
          key: function (e) {
            if (e.key) {
              var t = zn[e.key] || e.key
              if (t !== `Unidentified`) return t
            }
            return e.type === `keypress`
              ? ((e = xn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Bn[e.keyCode] || `Unidentified`
                : ``
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Un,
          charCode: function (e) {
            return e.type === `keypress` ? xn(e) : 0
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
          },
          which: function (e) {
            return e.type === `keypress`
              ? xn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0
          },
        })
      ),
      Gn = wn(
        f({}, Mn, {
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
        })
      ),
      Kn = wn(
        f({}, Dn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Un,
        })
      ),
      qn = wn(f({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Jn = wn(
        f({}, Mn, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      Yn = wn(f({}, Tn, { newState: 0, oldState: 0 })),
      Xn = [9, 13, 27, 32],
      Zn = mn && `CompositionEvent` in window,
      Qn = null
    mn && `documentMode` in document && (Qn = document.documentMode)
    var $n = mn && `TextEvent` in window && !Qn,
      er = mn && (!Zn || (Qn && 8 < Qn && 11 >= Qn)),
      tr = ` `,
      nr = !1
    function rr(e, t) {
      switch (e) {
        case `keyup`:
          return Xn.indexOf(t.keyCode) !== -1
        case `keydown`:
          return t.keyCode !== 229
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0
        default:
          return !1
      }
    }
    function ir(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null)
    }
    var ar = !1
    function or(e, t) {
      switch (e) {
        case `compositionend`:
          return ir(t)
        case `keypress`:
          return t.which === 32 ? ((nr = !0), tr) : null
        case `textInput`:
          return ((e = t.data), e === tr && nr ? null : e)
        default:
          return null
      }
    }
    function sr(e, t) {
      if (ar)
        return e === `compositionend` || (!Zn && rr(e, t))
          ? ((e = bn()), (yn = vn = _n = null), (ar = !1), e)
          : null
      switch (e) {
        case `paste`:
          return null
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char
            if (t.which) return String.fromCharCode(t.which)
          }
          return null
        case `compositionend`:
          return er && t.locale !== `ko` ? null : t.data
        default:
          return null
      }
    }
    var cr = {
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
    }
    function lr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return t === `input` ? !!cr[e.type] : t === `textarea`
    }
    function ur(e, t, n, r) {
      ;(cn ? (ln ? ln.push(r) : (ln = [r])) : (cn = r),
        (t = Md(t, `onChange`)),
        0 < t.length &&
          ((n = new En(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })))
    }
    var dr = null,
      fr = null
    function pr(e) {
      Ed(e, 0)
    }
    function mr(e) {
      if (Bt(wt(e))) return e
    }
    function hr(e, t) {
      if (e === `change`) return t
    }
    var gr = !1
    if (mn) {
      var _r
      if (mn) {
        var vr = `oninput` in document
        if (!vr) {
          var yr = document.createElement(`div`)
          ;(yr.setAttribute(`oninput`, `return;`), (vr = typeof yr.oninput == `function`))
        }
        _r = vr
      } else _r = !1
      gr = _r && (!document.documentMode || 9 < document.documentMode)
    }
    function br() {
      dr && (dr.detachEvent(`onpropertychange`, xr), (fr = dr = null))
    }
    function xr(e) {
      if (e.propertyName === `value` && mr(fr)) {
        var t = []
        ;(ur(t, fr, e, sn(e)), fn(pr, t))
      }
    }
    function Sr(e, t, n) {
      e === `focusin`
        ? (br(), (dr = t), (fr = n), dr.attachEvent(`onpropertychange`, xr))
        : e === `focusout` && br()
    }
    function Cr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return mr(fr)
    }
    function wr(e, t) {
      if (e === `click`) return mr(t)
    }
    function Tr(e, t) {
      if (e === `input` || e === `change`) return mr(t)
    }
    function Er(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
    }
    var Dr = typeof Object.is == `function` ? Object.is : Er
    function Or(e, t) {
      if (Dr(e, t)) return !0
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1
      var n = Object.keys(e),
        r = Object.keys(t)
      if (n.length !== r.length) return !1
      for (r = 0; r < n.length; r++) {
        var i = n[r]
        if (!Oe.call(t, i) || !Dr(e[i], t[i])) return !1
      }
      return !0
    }
    function kr(e) {
      for (; e && e.firstChild; ) e = e.firstChild
      return e
    }
    function Ar(e, t) {
      var n = kr(e)
      e = 0
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
          e = r
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling
              break a
            }
            n = n.parentNode
          }
          n = void 0
        }
        n = kr(n)
      }
    }
    function jr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? jr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1
    }
    function Mr(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window
      for (var t = Vt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`
        } catch {
          n = !1
        }
        if (n) e = t.contentWindow
        else break
        t = Vt(e.document)
      }
      return t
    }
    function Nr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      )
    }
    var Pr = mn && `documentMode` in document && 11 >= document.documentMode,
      Fr = null,
      Ir = null,
      Lr = null,
      Rr = !1
    function zr(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
      Rr ||
        Fr == null ||
        Fr !== Vt(r) ||
        ((r = Fr),
        `selectionStart` in r && Nr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Lr && Or(Lr, r)) ||
          ((Lr = r),
          (r = Md(Ir, `onSelect`)),
          0 < r.length &&
            ((t = new En(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Fr))))
    }
    function Br(e, t) {
      var n = {}
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      )
    }
    var Vr = {
        animationend: Br(`Animation`, `AnimationEnd`),
        animationiteration: Br(`Animation`, `AnimationIteration`),
        animationstart: Br(`Animation`, `AnimationStart`),
        transitionrun: Br(`Transition`, `TransitionRun`),
        transitionstart: Br(`Transition`, `TransitionStart`),
        transitioncancel: Br(`Transition`, `TransitionCancel`),
        transitionend: Br(`Transition`, `TransitionEnd`),
      },
      Hr = {},
      Ur = {}
    mn &&
      ((Ur = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Vr.animationend.animation,
        delete Vr.animationiteration.animation,
        delete Vr.animationstart.animation),
      `TransitionEvent` in window || delete Vr.transitionend.transition)
    function Wr(e) {
      if (Hr[e]) return Hr[e]
      if (!Vr[e]) return e
      var t = Vr[e],
        n
      for (n in t) if (t.hasOwnProperty(n) && n in Ur) return (Hr[e] = t[n])
      return e
    }
    var Gr = Wr(`animationend`),
      Kr = Wr(`animationiteration`),
      qr = Wr(`animationstart`),
      Jr = Wr(`transitionrun`),
      Yr = Wr(`transitionstart`),
      Xr = Wr(`transitioncancel`),
      Zr = Wr(`transitionend`),
      Qr = new Map(),
      $r =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        )
    $r.push(`scrollEnd`)
    function ei(e, t) {
      ;(Qr.set(e, t), kt(t, [e]))
    }
    var ti =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                })
                if (!window.dispatchEvent(t)) return
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e)
                return
              }
              console.error(e)
            },
      ni = [],
      ri = 0,
      ii = 0
    function ai() {
      for (var e = ri, t = (ii = ri = 0); t < e; ) {
        var n = ni[t]
        ni[t++] = null
        var r = ni[t]
        ni[t++] = null
        var i = ni[t]
        ni[t++] = null
        var a = ni[t]
        if (((ni[t++] = null), r !== null && i !== null)) {
          var o = r.pending
          ;(o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i))
        }
        a !== 0 && li(n, i, a)
      }
    }
    function oi(e, t, n, r) {
      ;((ni[ri++] = e),
        (ni[ri++] = t),
        (ni[ri++] = n),
        (ni[ri++] = r),
        (ii |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r))
    }
    function si(e, t, n, r) {
      return (oi(e, t, n, r), ui(e))
    }
    function ci(e, t) {
      return (oi(e, null, null, t), ui(e))
    }
    function li(e, t, n) {
      e.lanes |= n
      var r = e.alternate
      r !== null && (r.lanes |= n)
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return))
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ge(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null
    }
    function ui(e) {
      if (50 < vu) throw ((vu = 0), (yu = null), Error(i(185)))
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return))
      return e.tag === 3 ? e.stateNode : null
    }
    var di = {}
    function fi(e, t, n, r) {
      ;((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null))
    }
    function pi(e, t, n, r) {
      return new fi(e, t, n, r)
    }
    function mi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent))
    }
    function hi(e, t) {
      var n = e.alternate
      return (
        n === null
          ? ((n = pi(e.tag, t, e.key, e.mode)),
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
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      )
    }
    function gi(e, t) {
      e.flags &= 65011714
      var n = e.alternate
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      )
    }
    function _i(e, t, n, r, a, o) {
      var s = 0
      if (((r = e), typeof e == `function`)) mi(e) && (s = 1)
      else if (typeof e == `string`)
        s = Kf(e, n, pe.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5
      else
        a: switch (e) {
          case te:
            return ((e = pi(31, n, t, a)), (e.elementType = te), (e.lanes = o), e)
          case y:
            return vi(n.children, a, o, t)
          case b:
            ;((s = 8), (a |= 24))
            break
          case x:
            return ((e = pi(12, n, t, a | 2)), (e.elementType = x), (e.lanes = o), e)
          case T:
            return ((e = pi(13, n, t, a)), (e.elementType = T), (e.lanes = o), e)
          case E:
            return ((e = pi(19, n, t, a)), (e.elementType = E), (e.lanes = o), e)
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10
                  break a
                case S:
                  s = 9
                  break a
                case w:
                  s = 11
                  break a
                case ee:
                  s = 14
                  break a
                case D:
                  ;((s = 16), (r = null))
                  break a
              }
            ;((s = 29), (n = Error(i(130, e === null ? `null` : typeof e, ``))), (r = null))
        }
      return ((t = pi(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t)
    }
    function vi(e, t, n, r) {
      return ((e = pi(7, e, r, t)), (e.lanes = n), e)
    }
    function yi(e, t, n) {
      return ((e = pi(6, e, null, t)), (e.lanes = n), e)
    }
    function bi(e) {
      var t = pi(18, null, null, 0)
      return ((t.stateNode = e), t)
    }
    function xi(e, t, n) {
      return (
        (t = pi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      )
    }
    var Si = new WeakMap()
    function Ci(e, t) {
      if (typeof e == `object` && e) {
        var n = Si.get(e)
        return n === void 0 ? ((t = { value: e, source: t, stack: De(t) }), Si.set(e, t), t) : n
      }
      return { value: e, source: t, stack: De(t) }
    }
    var wi = [],
      Ti = 0,
      Ei = null,
      Di = 0,
      Oi = [],
      ki = 0,
      Ai = null,
      ji = 1,
      Mi = ``
    function Ni(e, t) {
      ;((wi[Ti++] = Di), (wi[Ti++] = Ei), (Ei = e), (Di = t))
    }
    function Pi(e, t, n) {
      ;((Oi[ki++] = ji), (Oi[ki++] = Mi), (Oi[ki++] = Ai), (Ai = e))
      var r = ji
      e = Mi
      var i = 32 - Ge(r) - 1
      ;((r &= ~(1 << i)), (n += 1))
      var a = 32 - Ge(t) + i
      if (30 < a) {
        var o = i - (i % 5)
        ;((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ji = (1 << (32 - Ge(t) + i)) | (n << i) | r),
          (Mi = a + e))
      } else ((ji = (1 << a) | (n << i) | r), (Mi = e))
    }
    function Fi(e) {
      e.return !== null && (Ni(e, 1), Pi(e, 1, 0))
    }
    function Ii(e) {
      for (; e === Ei; ) ((Ei = wi[--Ti]), (wi[Ti] = null), (Di = wi[--Ti]), (wi[Ti] = null))
      for (; e === Ai; )
        ((Ai = Oi[--ki]),
          (Oi[ki] = null),
          (Mi = Oi[--ki]),
          (Oi[ki] = null),
          (ji = Oi[--ki]),
          (Oi[ki] = null))
    }
    function Li(e, t) {
      ;((Oi[ki++] = ji), (Oi[ki++] = Mi), (Oi[ki++] = Ai), (ji = t.id), (Mi = t.overflow), (Ai = e))
    }
    var Ri = null,
      zi = null,
      P = !1,
      Bi = null,
      Vi = !1,
      Hi = Error(i(519))
    function Ui(e) {
      throw (
        Yi(
          Ci(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`,
                ``
              )
            ),
            e
          )
        ),
        Hi
      )
    }
    function Wi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps
      switch (((t[pt] = e), (t[mt] = r), n)) {
        case `dialog`:
          ;(G(`cancel`, t), G(`close`, t))
          break
        case `iframe`:
        case `object`:
        case `embed`:
          G(`load`, t)
          break
        case `video`:
        case `audio`:
          for (n = 0; n < wd.length; n++) G(wd[n], t)
          break
        case `source`:
          G(`error`, t)
          break
        case `img`:
        case `image`:
        case `link`:
          ;(G(`error`, t), G(`load`, t))
          break
        case `details`:
          G(`toggle`, t)
          break
        case `input`:
          ;(G(`invalid`, t),
            Gt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0))
          break
        case `select`:
          G(`invalid`, t)
          break
        case `textarea`:
          ;(G(`invalid`, t), Yt(t, r.value, r.defaultValue, r.children))
      }
      ;((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Rd(t.textContent, n)
          ? (r.popover != null && (G(`beforetoggle`, t), G(`toggle`, t)),
            r.onScroll != null && G(`scroll`, t),
            r.onScrollEnd != null && G(`scrollend`, t),
            r.onClick != null && (t.onclick = an),
            (t = !0))
          : (t = !1),
        t || Ui(e, !0))
    }
    function Gi(e) {
      for (Ri = e.return; Ri; )
        switch (Ri.tag) {
          case 5:
          case 31:
          case 13:
            Vi = !1
            return
          case 27:
          case 3:
            Vi = !0
            return
          default:
            Ri = Ri.return
        }
    }
    function Ki(e) {
      if (e !== Ri) return !1
      if (!P) return (Gi(e), (P = !0), !1)
      var t = e.tag,
        n
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = !(n !== `form` && n !== `button`) || Yd(e.type, e.memoizedProps))),
          (n = !n)),
        n && zi && Ui(e),
        Gi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317))
        zi = gf(e)
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317))
        zi = gf(e)
      } else
        t === 27
          ? ((t = zi), rf(e.type) ? ((e = hf), (hf = null), (zi = e)) : (zi = t))
          : (zi = Ri ? mf(e.stateNode.nextSibling) : null)
      return !0
    }
    function qi() {
      ;((zi = Ri = null), (P = !1))
    }
    function Ji() {
      var e = Bi
      return (e !== null && (iu === null ? (iu = e) : iu.push.apply(iu, e), (Bi = null)), e)
    }
    function Yi(e) {
      Bi === null ? (Bi = [e]) : Bi.push(e)
    }
    var Xi = de(null),
      Zi = null,
      Qi = null
    function $i(e, t, n) {
      ;(A(Xi, t._currentValue), (t._currentValue = n))
    }
    function ea(e) {
      ;((e._currentValue = Xi.current), fe(Xi))
    }
    function ta(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break
        e = e.return
      }
    }
    function na(e, t, n, r) {
      var a = e.child
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies
        if (o !== null) {
          var s = a.child
          o = o.firstContext
          a: for (; o !== null; ) {
            var c = o
            o = a
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ;((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ta(o.return, n, e),
                  r || (s = null))
                break a
              }
            o = c.next
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341))
          ;((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ta(s, n, e),
            (s = null))
        } else s = a.child
        if (s !== null) s.return = a
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null
              break
            }
            if (((a = s.sibling), a !== null)) {
              ;((a.return = s.return), (s = a))
              break
            }
            s = s.return
          }
        a = s
      }
    }
    function ra(e, t, n, r) {
      e = null
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0
          else if (a.flags & 262144) break
        }
        if (a.tag === 10) {
          var s = a.alternate
          if (s === null) throw Error(i(387))
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type
            Dr(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c))
          }
        } else if (a === ge.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387))
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [tp]) : e.push(tp))
        }
        a = a.return
      }
      ;(e !== null && na(t, e, n, r), (t.flags |= 262144))
    }
    function ia(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Dr(e.context._currentValue, e.memoizedValue)) return !0
        e = e.next
      }
      return !1
    }
    function aa(e) {
      ;((Zi = e), (Qi = null), (e = e.dependencies), e !== null && (e.firstContext = null))
    }
    function oa(e) {
      return ca(Zi, e)
    }
    function sa(e, t) {
      return (Zi === null && aa(e), ca(e, t))
    }
    function ca(e, t) {
      var n = t._currentValue
      if (((t = { context: t, memoizedValue: n, next: null }), Qi === null)) {
        if (e === null) throw Error(i(308))
        ;((Qi = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288))
      } else Qi = Qi.next = t
      return n
    }
    var la =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n)
                  },
                })
              this.abort = function () {
                ;((t.aborted = !0),
                  e.forEach(function (e) {
                    return e()
                  }))
              }
            },
      ua = t.unstable_scheduleCallback,
      da = t.unstable_NormalPriority,
      fa = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      }
    function pa() {
      return { controller: new la(), data: new Map(), refCount: 0 }
    }
    function ma(e) {
      ;(e.refCount--,
        e.refCount === 0 &&
          ua(da, function () {
            e.controller.abort()
          }))
    }
    var ha = null,
      ga = 0,
      _a = 0,
      va = null
    function ya(e, t) {
      if (ha === null) {
        var n = (ha = [])
        ;((ga = 0),
          (_a = vd()),
          (va = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e)
            },
          }))
      }
      return (ga++, t.then(ba, ba), t)
    }
    function ba() {
      if (--ga === 0 && ha !== null) {
        va !== null && (va.status = `fulfilled`)
        var e = ha
        ;((ha = null), (_a = 0), (va = null))
        for (var t = 0; t < e.length; t++) (0, e[t])()
      }
    }
    function xa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e)
          },
        }
      return (
        e.then(
          function () {
            ;((r.status = `fulfilled`), (r.value = t))
            for (var e = 0; e < n.length; e++) (0, n[e])(t)
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0)
          }
        ),
        r
      )
    }
    var Sa = O.S
    O.S = function (e, t) {
      ;((su = Ne()),
        typeof t == `object` && t && typeof t.then == `function` && ya(e, t),
        Sa !== null && Sa(e, t))
    }
    var Ca = de(null)
    function wa() {
      var e = Ca.current
      return e === null ? B.pooledCache : e
    }
    function Ta(e, t) {
      t === null ? A(Ca, Ca.current) : A(Ca, t.pool)
    }
    function Ea() {
      var e = wa()
      return e === null ? null : { parent: fa._currentValue, pool: e }
    }
    var Da = Error(i(460)),
      Oa = Error(i(474)),
      ka = Error(i(542)),
      Aa = { then: function () {} }
    function ja(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`)
    }
    function Ma(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(an, an), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value
        case `rejected`:
          throw ((e = t.reason), Ia(e), e)
        default:
          if (typeof t.status == `string`) t.then(an, an)
          else {
            if (((e = B), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482))
            ;((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t
                    ;((n.status = `fulfilled`), (n.value = e))
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t
                    ;((n.status = `rejected`), (n.reason = e))
                  }
                }
              ))
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value
            case `rejected`:
              throw ((e = t.reason), Ia(e), e)
          }
          throw ((Pa = t), Da)
      }
    }
    function Na(e) {
      try {
        var t = e._init
        return t(e._payload)
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Pa = e), Da) : e
      }
    }
    var Pa = null
    function Fa() {
      if (Pa === null) throw Error(i(459))
      var e = Pa
      return ((Pa = null), e)
    }
    function Ia(e) {
      if (e === Da || e === ka) throw Error(i(483))
    }
    var La = null,
      Ra = 0
    function za(e) {
      var t = Ra
      return ((Ra += 1), La === null && (La = []), Ma(La, e, t))
    }
    function Ba(e, t) {
      ;((t = t.props.ref), (e.ref = t === void 0 ? null : t))
    }
    function Va(e, t) {
      throw t.$$typeof === m
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e
            )
          ))
    }
    function Ha(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
        }
      }
      function n(n, r) {
        if (!e) return null
        for (; r !== null; ) (t(n, r), (r = r.sibling))
        return null
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling))
        return t
      }
      function a(e, t) {
        return ((e = hi(e, t)), (e.index = 0), (e.sibling = null), e)
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        )
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t)
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t)
      }
      function l(e, t, n, r) {
        var i = n.type
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` && i && i.$$typeof === D && Na(i) === t.type))
            ? ((t = a(t, n.props)), Ba(t, n), (t.return = e), t)
            : ((t = _i(n.type, n.key, n.props, null, e.mode, r)), Ba(t, n), (t.return = e), t)
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t)
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = vi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t)
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = yi(`` + t, e.mode, n)), (t.return = e), t)
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case g:
              return (
                (n = _i(t.type, t.key, t.props, null, e.mode, n)),
                Ba(n, t),
                (n.return = e),
                n
              )
            case v:
              return ((t = xi(t, e.mode, n)), (t.return = e), t)
            case D:
              return ((t = Na(t)), f(e, t, n))
          }
          if (se(t) || ie(t)) return ((t = vi(t, e.mode, n, null)), (t.return = e), t)
          if (typeof t.then == `function`) return f(e, za(t), n)
          if (t.$$typeof === C) return f(e, sa(e, t), n)
          Va(e, t)
        }
        return null
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case g:
              return n.key === i ? l(e, t, n, r) : null
            case v:
              return n.key === i ? u(e, t, n, r) : null
            case D:
              return ((n = Na(n)), p(e, t, n, r))
          }
          if (se(n) || ie(n)) return i === null ? d(e, t, n, r, null) : null
          if (typeof n.then == `function`) return p(e, t, za(n), r)
          if (n.$$typeof === C) return p(e, t, sa(e, n), r)
          Va(e, n)
        }
        return null
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i))
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case g:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i))
            case v:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i))
            case D:
              return ((r = Na(r)), m(e, t, n, r, i))
          }
          if (se(r) || ie(r)) return ((e = e.get(n) || null), d(t, e, r, i, null))
          if (typeof r.then == `function`) return m(e, t, n, za(r), i)
          if (r.$$typeof === C) return m(e, t, n, sa(t, r), i)
          Va(t, r)
        }
        return null
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling)
          var _ = p(i, d, s[h], c)
          if (_ === null) {
            d === null && (d = g)
            break
          }
          ;(e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g))
        }
        if (h === s.length) return (n(i, d), P && Ni(i, h), l)
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null && ((a = o(d, a, h)), u === null ? (l = d) : (u.sibling = d), (u = d)))
          return (P && Ni(i, h), l)
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)))
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e)
            }),
          P && Ni(i, h),
          l
        )
      }
      function _(a, s, c, l) {
        if (c == null) throw Error(i(151))
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling)
          var y = p(a, h, v.value, l)
          if (y === null) {
            h === null && (h = _)
            break
          }
          ;(e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _))
        }
        if (v.done) return (n(a, h), P && Ni(a, g), u)
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v)))
          return (P && Ni(a, g), u)
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)))
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e)
            }),
          P && Ni(a, g),
          u
        )
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` && o && o.type === y && o.key === null && (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case g:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        ;(n(e, r.sibling), (c = a(r, o.props.children)), (c.return = e), (e = c))
                        break a
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === D && Na(l) === r.type)
                    ) {
                      ;(n(e, r.sibling), (c = a(r, o.props)), Ba(c, o), (c.return = e), (e = c))
                      break a
                    }
                    n(e, r)
                    break
                  } else t(e, r)
                  r = r.sibling
                }
                o.type === y
                  ? ((c = vi(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = _i(o.type, o.key, o.props, null, e.mode, c)),
                    Ba(c, o),
                    (c.return = e),
                    (e = c))
              }
              return s(e)
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      ;(n(e, r.sibling), (c = a(r, o.children || [])), (c.return = e), (e = c))
                      break a
                    } else {
                      n(e, r)
                      break
                    }
                  else t(e, r)
                  r = r.sibling
                }
                ;((c = xi(o, e.mode, c)), (c.return = e), (e = c))
              }
              return s(e)
            case D:
              return ((o = Na(o)), b(e, r, o, c))
          }
          if (se(o)) return h(e, r, o, c)
          if (ie(o)) {
            if (((l = ie(o)), typeof l != `function`)) throw Error(i(150))
            return ((o = l.call(o)), _(e, r, o, c))
          }
          if (typeof o.then == `function`) return b(e, r, za(o), c)
          if (o.$$typeof === C) return b(e, r, sa(e, o), c)
          Va(e, o)
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = yi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r)
      }
      return function (e, t, n, r) {
        try {
          Ra = 0
          var i = b(e, t, n, r)
          return ((La = null), i)
        } catch (t) {
          if (t === Da || t === ka) throw t
          var a = pi(29, t, null, e.mode)
          return ((a.lanes = r), (a.return = e), a)
        }
      }
    }
    var Ua = Ha(!0),
      Wa = Ha(!1),
      Ga = !1
    function Ka(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      }
    }
    function qa(e, t) {
      ;((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }))
    }
    function Ja(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null }
    }
    function Ya(e, t, n) {
      var r = e.updateQueue
      if (r === null) return null
      if (((r = r.shared), z & 2)) {
        var i = r.pending
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ui(e)),
          li(e, null, n),
          t
        )
      }
      return (oi(e, r, t, n), ui(e))
    }
    function Xa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes
        ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), ot(e, n))
      }
    }
    function Za(e, t) {
      var n = e.updateQueue,
        r = e.alternate
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null }
            ;(a === null ? (i = a = o) : (a = a.next = o), (n = n.next))
          } while (n !== null)
          a === null ? (i = a = t) : (a = a.next = t)
        } else i = a = t
        ;((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n))
        return
      }
      ;((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t))
    }
    var Qa = !1
    function $a() {
      if (Qa) {
        var e = va
        if (e !== null) throw e
      }
    }
    function eo(e, t, n, r) {
      Qa = !1
      var i = e.updateQueue
      Ga = !1
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending
      if (s !== null) {
        i.shared.pending = null
        var c = s,
          l = c.next
        ;((c.next = null), o === null ? (a = l) : (o.next = l), (o = c))
        var u = e.alternate
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)))
      }
      if (a !== null) {
        var d = i.baseState
        ;((o = 0), (u = l = c = null), (s = a))
        do {
          var p = s.lane & -536870913,
            m = p !== s.lane
          if (m ? (H & p) === p : (r & p) === p) {
            ;(p !== 0 && p === _a && (Qa = !0),
              u !== null &&
                (u = u.next =
                  { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }))
            a: {
              var h = e,
                g = s
              p = t
              var _ = n
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, p)
                    break a
                  }
                  d = h
                  break a
                case 3:
                  h.flags = (h.flags & -65537) | 128
                case 0:
                  if (
                    ((h = g.payload), (p = typeof h == `function` ? h.call(_, d, p) : h), p == null)
                  )
                    break a
                  d = f({}, d, p)
                  break a
                case 2:
                  Ga = !0
              }
            }
            ;((p = s.callback),
              p !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [p]) : m.push(p)))
          } else
            ((m = { lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= p))
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break
            ;((m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null))
          }
        } while (1)
        ;(u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Ql |= o),
          (e.lanes = o),
          (e.memoizedState = d))
      }
    }
    function to(e, t) {
      if (typeof e != `function`) throw Error(i(191, e))
      e.call(t)
    }
    function no(e, t) {
      var n = e.callbacks
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) to(n[e], t)
    }
    var ro = de(null),
      io = de(0)
    function ao(e, t) {
      ;((e = Xl), A(io, e), A(ro, t), (Xl = e | t.baseLanes))
    }
    function oo() {
      ;(A(io, Xl), A(ro, ro.current))
    }
    function so() {
      ;((Xl = io.current), fe(ro), fe(io))
    }
    var co = de(null),
      lo = null
    function uo(e) {
      var t = e.alternate
      ;(A(go, go.current & 1),
        A(co, e),
        lo === null && (t === null || ro.current !== null || t.memoizedState !== null) && (lo = e))
    }
    function fo(e) {
      ;(A(go, go.current), A(co, e), lo === null && (lo = e))
    }
    function po(e) {
      e.tag === 22 ? (A(go, go.current), A(co, e), lo === null && (lo = e)) : mo(e)
    }
    function mo() {
      ;(A(go, go.current), A(co, co.current))
    }
    function ho(e) {
      ;(fe(co), lo === e && (lo = null), fe(go))
    }
    var go = de(0)
    function _o(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState
          if (n !== null && ((n = n.dehydrated), n === null || df(n) || ff(n))) return t
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t
        } else if (t.child !== null) {
          ;((t.child.return = t), (t = t.child))
          continue
        }
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
      return null
    }
    var vo = 0,
      F = null,
      I = null,
      yo = null,
      bo = !1,
      xo = !1,
      So = !1,
      Co = 0,
      wo = 0,
      To = null,
      Eo = 0
    function L() {
      throw Error(i(321))
    }
    function Do(e, t) {
      if (t === null) return !1
      for (var n = 0; n < t.length && n < e.length; n++) if (!Dr(e[n], t[n])) return !1
      return !0
    }
    function Oo(e, t, n, r, i, a) {
      return (
        (vo = a),
        (F = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (O.H = e === null || e.memoizedState === null ? Gs : Ks),
        (So = !1),
        (a = n(r, i)),
        (So = !1),
        xo && (a = Ao(t, n, r, i)),
        ko(e),
        a
      )
    }
    function ko(e) {
      O.H = Ws
      var t = I !== null && I.next !== null
      if (((vo = 0), (yo = I = F = null), (bo = !1), (wo = 0), (To = null), t)) throw Error(i(300))
      e === null || lc || ((e = e.dependencies), e !== null && ia(e) && (lc = !0))
    }
    function Ao(e, t, n, r) {
      F = e
      var a = 0
      do {
        if ((xo && (To = null), (wo = 0), (xo = !1), 25 <= a)) throw Error(i(301))
        if (((a += 1), (yo = I = null), e.updateQueue != null)) {
          var o = e.updateQueue
          ;((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0))
        }
        ;((O.H = qs), (o = t(n, r)))
      } while (xo)
      return o
    }
    function jo() {
      var e = O.H,
        t = e.useState()[0]
      return (
        (t = typeof t.then == `function` ? Ro(t) : t),
        (e = e.useState()[0]),
        (I === null ? null : I.memoizedState) !== e && (F.flags |= 1024),
        t
      )
    }
    function Mo() {
      var e = Co !== 0
      return ((Co = 0), e)
    }
    function No(e, t, n) {
      ;((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n))
    }
    function Po(e) {
      if (bo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue
          ;(t !== null && (t.pending = null), (e = e.next))
        }
        bo = !1
      }
      ;((vo = 0), (yo = I = F = null), (xo = !1), (wo = Co = 0), (To = null))
    }
    function Fo() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
      return (yo === null ? (F.memoizedState = yo = e) : (yo = yo.next = e), yo)
    }
    function Io() {
      if (I === null) {
        var e = F.alternate
        e = e === null ? null : e.memoizedState
      } else e = I.next
      var t = yo === null ? F.memoizedState : yo.next
      if (t !== null) ((yo = t), (I = e))
      else {
        if (e === null) throw F.alternate === null ? Error(i(467)) : Error(i(310))
        ;((I = e),
          (e = {
            memoizedState: I.memoizedState,
            baseState: I.baseState,
            baseQueue: I.baseQueue,
            queue: I.queue,
            next: null,
          }),
          yo === null ? (F.memoizedState = yo = e) : (yo = yo.next = e))
      }
      return yo
    }
    function Lo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null }
    }
    function Ro(e) {
      var t = wo
      return (
        (wo += 1),
        To === null && (To = []),
        (e = Ma(To, e, t)),
        (t = F),
        (yo === null ? t.memoizedState : yo.next) === null &&
          ((t = t.alternate), (O.H = t === null || t.memoizedState === null ? Gs : Ks)),
        e
      )
    }
    function zo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Ro(e)
        if (e.$$typeof === C) return oa(e)
      }
      throw Error(i(438, String(e)))
    }
    function Bo(e) {
      var t = null,
        n = F.updateQueue
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = F.alternate
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice()
                }),
                index: 0,
              })))
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Lo()), (F.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ne
      return (t.index++, n)
    }
    function Vo(e, t) {
      return typeof t == `function` ? t(e) : t
    }
    function Ho(e) {
      return Uo(Io(), I, e)
    }
    function Uo(e, t, n) {
      var r = e.queue
      if (r === null) throw Error(i(311))
      r.lastRenderedReducer = n
      var a = e.baseQueue,
        o = r.pending
      if (o !== null) {
        if (a !== null) {
          var s = a.next
          ;((a.next = o.next), (o.next = s))
        }
        ;((t.baseQueue = a = o), (r.pending = null))
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o
      else {
        t = a.next
        var c = (s = null),
          l = null,
          u = t,
          d = !1
        do {
          var f = u.lane & -536870913
          if (f === u.lane ? (vo & f) === f : (H & f) === f) {
            var p = u.revertLane
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === _a && (d = !0))
            else if ((vo & p) === p) {
              ;((u = u.next), p === _a && (d = !0))
              continue
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (F.lanes |= p),
                (Ql |= p))
            ;((f = u.action), So && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)))
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (F.lanes |= f),
              (Ql |= f))
          u = u.next
        } while (u !== null && u !== t)
        if (
          (l === null ? (s = o) : (l.next = c),
          !Dr(o, e.memoizedState) && ((lc = !0), d && ((n = va), n !== null)))
        )
          throw n
        ;((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o))
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch])
    }
    function Wo(e) {
      var t = Io(),
        n = t.queue
      if (n === null) throw Error(i(311))
      n.lastRenderedReducer = e
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState
      if (a !== null) {
        n.pending = null
        var s = (a = a.next)
        do ((o = e(o, s.action)), (s = s.next))
        while (s !== a)
        ;(Dr(o, t.memoizedState) || (lc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o))
      }
      return [o, r]
    }
    function Go(e, t, n) {
      var r = F,
        a = Io(),
        o = P
      if (o) {
        if (n === void 0) throw Error(i(407))
        n = n()
      } else n = t()
      var s = !Dr((I || a).memoizedState, n)
      if (
        (s && ((a.memoizedState = n), (lc = !0)),
        (a = a.queue),
        gs(Jo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (yo !== null && yo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ds(9, { destroy: void 0 }, qo.bind(null, r, a, n, t), null),
          B === null)
        )
          throw Error(i(349))
        o || vo & 127 || Ko(r, t, n)
      }
      return n
    }
    function Ko(e, t, n) {
      ;((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = F.updateQueue),
        t === null
          ? ((t = Lo()), (F.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)))
    }
    function qo(e, t, n, r) {
      ;((t.value = n), (t.getSnapshot = r), Yo(t) && Xo(e))
    }
    function Jo(e, t, n) {
      return n(function () {
        Yo(t) && Xo(e)
      })
    }
    function Yo(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !Dr(e, n)
      } catch {
        return !0
      }
    }
    function Xo(e) {
      var t = ci(e, 2)
      t !== null && Su(t, e, 2)
    }
    function Zo(e) {
      var t = Fo()
      if (typeof e == `function`) {
        var n = e
        if (((e = n()), So)) {
          We(!0)
          try {
            n()
          } finally {
            We(!1)
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: e,
        }),
        t
      )
    }
    function Qo(e, t, n, r) {
      return ((e.baseState = n), Uo(e, I, typeof r == `function` ? r : Vo))
    }
    function $o(e, t, n, r, a) {
      if (Vs(e)) throw Error(i(485))
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e)
          },
        }
        ;(O.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), es(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)))
      }
    }
    function es(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state
      if (t.isTransition) {
        var a = O.T,
          o = {}
        O.T = o
        try {
          var s = n(i, r),
            c = O.S
          ;(c !== null && c(o, s), ts(e, t, s))
        } catch (n) {
          rs(e, t, n)
        } finally {
          ;(a !== null && o.types !== null && (a.types = o.types), (O.T = a))
        }
      } else
        try {
          ;((a = n(i, r)), ts(e, t, a))
        } catch (n) {
          rs(e, t, n)
        }
    }
    function ts(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ns(e, t, n)
            },
            function (n) {
              return rs(e, t, n)
            }
          )
        : ns(e, t, n)
    }
    function ns(e, t, n) {
      ;((t.status = `fulfilled`),
        (t.value = n),
        is(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), es(e, n))))
    }
    function rs(e, t, n) {
      var r = e.pending
      if (((e.pending = null), r !== null)) {
        r = r.next
        do ((t.status = `rejected`), (t.reason = n), is(t), (t = t.next))
        while (t !== r)
      }
      e.action = null
    }
    function is(e) {
      e = e.listeners
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
    function as(e, t) {
      return t
    }
    function os(e, t) {
      if (P) {
        var n = B.formState
        if (n !== null) {
          a: {
            var r = F
            if (P) {
              if (zi) {
                b: {
                  for (var i = zi, a = Vi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null
                      break b
                    }
                    if (((i = mf(i.nextSibling)), i === null)) {
                      i = null
                      break b
                    }
                  }
                  ;((a = i.data), (i = a === `F!` || a === `F` ? i : null))
                }
                if (i) {
                  ;((zi = mf(i.nextSibling)), (r = i.data === `F!`))
                  break a
                }
              }
              Ui(r)
            }
            r = !1
          }
          r && (t = n[0])
        }
      }
      return (
        (n = Fo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: as,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Rs.bind(null, F, r)),
        (r.dispatch = n),
        (r = Zo(!1)),
        (a = Bs.bind(null, F, !1, r.queue)),
        (r = Fo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = $o.bind(null, F, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      )
    }
    function ss(e) {
      return cs(Io(), I, e)
    }
    function cs(e, t, n) {
      if (
        ((t = Uo(e, t, as)[0]),
        (e = Ho(Vo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Ro(t)
        } catch (e) {
          throw e === Da ? ka : e
        }
      else r = t
      t = Io()
      var i = t.queue,
        a = i.dispatch
      return (
        n !== t.memoizedState &&
          ((F.flags |= 2048), ds(9, { destroy: void 0 }, ls.bind(null, i, n), null)),
        [r, a, e]
      )
    }
    function ls(e, t) {
      e.action = t
    }
    function us(e) {
      var t = Io(),
        n = I
      if (n !== null) return cs(t, n, e)
      ;(Io(), (t = t.memoizedState), (n = Io()))
      var r = n.queue.dispatch
      return ((n.memoizedState = e), [t, r, !1])
    }
    function ds(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = F.updateQueue),
        t === null && ((t = Lo()), (F.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      )
    }
    function fs() {
      return Io().memoizedState
    }
    function ps(e, t, n, r) {
      var i = Fo()
      ;((F.flags |= e),
        (i.memoizedState = ds(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)))
    }
    function ms(e, t, n, r) {
      var i = Io()
      r = r === void 0 ? null : r
      var a = i.memoizedState.inst
      I !== null && r !== null && Do(r, I.memoizedState.deps)
        ? (i.memoizedState = ds(t, a, n, r))
        : ((F.flags |= e), (i.memoizedState = ds(1 | t, a, n, r)))
    }
    function hs(e, t) {
      ps(8390656, 8, e, t)
    }
    function gs(e, t) {
      ms(2048, 8, e, t)
    }
    function _s(e) {
      F.flags |= 4
      var t = F.updateQueue
      if (t === null) ((t = Lo()), (F.updateQueue = t), (t.events = [e]))
      else {
        var n = t.events
        n === null ? (t.events = [e]) : n.push(e)
      }
    }
    function vs(e) {
      var t = Io().memoizedState
      return (
        _s({ ref: t, nextImpl: e }),
        function () {
          if (z & 2) throw Error(i(440))
          return t.impl.apply(void 0, arguments)
        }
      )
    }
    function ys(e, t) {
      return ms(4, 2, e, t)
    }
    function bs(e, t) {
      return ms(4, 4, e, t)
    }
    function xs(e, t) {
      if (typeof t == `function`) {
        e = e()
        var n = t(e)
        return function () {
          typeof n == `function` ? n() : t(null)
        }
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null
          }
        )
    }
    function Ss(e, t, n) {
      ;((n = n == null ? null : n.concat([e])), ms(4, 4, xs.bind(null, t, e), n))
    }
    function Cs() {}
    function ws(e, t) {
      var n = Io()
      t = t === void 0 ? null : t
      var r = n.memoizedState
      return t !== null && Do(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
    }
    function Ts(e, t) {
      var n = Io()
      t = t === void 0 ? null : t
      var r = n.memoizedState
      if (t !== null && Do(t, r[1])) return r[0]
      if (((r = e()), So)) {
        We(!0)
        try {
          e()
        } finally {
          We(!1)
        }
      }
      return ((n.memoizedState = [r, t]), r)
    }
    function Es(e, t, n) {
      return n === void 0 || (vo & 1073741824 && !(H & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = xu()), (F.lanes |= e), (Ql |= e), n)
    }
    function Ds(e, t, n, r) {
      return Dr(n, t)
        ? n
        : ro.current === null
          ? !(vo & 42) || (vo & 1073741824 && !(H & 261930))
            ? ((lc = !0), (e.memoizedState = n))
            : ((e = xu()), (F.lanes |= e), (Ql |= e), t)
          : ((e = Es(e, n, r)), Dr(e, t) || (lc = !0), e)
    }
    function Os(e, t, n, r, i) {
      var a = k.p
      k.p = a !== 0 && 8 > a ? a : 8
      var o = O.T,
        s = {}
      ;((O.T = s), Bs(e, !1, t, n))
      try {
        var c = i(),
          l = O.S
        ;(l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? zs(e, t, xa(c, r), bu(e))
            : zs(e, t, r, bu(e)))
      } catch (n) {
        zs(e, t, { then: function () {}, status: `rejected`, reason: n }, bu())
      } finally {
        ;((k.p = a), o !== null && s.types !== null && (o.types = s.types), (O.T = o))
      }
    }
    function ks() {}
    function As(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476))
      var a = js(e).queue
      Os(
        e,
        a,
        t,
        ce,
        n === null
          ? ks
          : function () {
              return (Ms(e), n(r))
            }
      )
    }
    function js(e) {
      var t = e.memoizedState
      if (t !== null) return t
      t = {
        memoizedState: ce,
        baseState: ce,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: ce,
        },
        next: null,
      }
      var n = {}
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      )
    }
    function Ms(e) {
      var t = js(e)
      ;(t.next === null && (t = e.alternate.memoizedState), zs(e, t.next.queue, {}, bu()))
    }
    function Ns() {
      return oa(tp)
    }
    function Ps() {
      return Io().memoizedState
    }
    function Fs() {
      return Io().memoizedState
    }
    function Is(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = bu()
            e = Ja(n)
            var r = Ya(t, e, n)
            ;(r !== null && (Su(r, t, n), Xa(r, t, n)), (t = { cache: pa() }), (e.payload = t))
            return
        }
        t = t.return
      }
    }
    function Ls(e, t, n) {
      var r = bu()
      ;((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Vs(e) ? Hs(t, n) : ((n = si(e, t, n, r)), n !== null && (Su(n, e, r), Us(n, t, r))))
    }
    function Rs(e, t, n) {
      zs(e, t, n, bu())
    }
    function zs(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
      if (Vs(e)) Hs(t, i)
      else {
        var a = e.alternate
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n)
            if (((i.hasEagerState = !0), (i.eagerState = s), Dr(s, o)))
              return (oi(e, t, i, 0), B === null && ai(), !1)
          } catch {}
        if (((n = si(e, t, i, r)), n !== null)) return (Su(n, e, r), Us(n, t, r), !0)
      }
      return !1
    }
    function Bs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: vd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Vs(e))
      ) {
        if (t) throw Error(i(479))
      } else ((t = si(e, n, r, 2)), t !== null && Su(t, e, 2))
    }
    function Vs(e) {
      var t = e.alternate
      return e === F || (t !== null && t === F)
    }
    function Hs(e, t) {
      xo = bo = !0
      var n = e.pending
      ;(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t))
    }
    function Us(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes
        ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), ot(e, n))
      }
    }
    var Ws = {
      readContext: oa,
      use: zo,
      useCallback: L,
      useContext: L,
      useEffect: L,
      useImperativeHandle: L,
      useLayoutEffect: L,
      useInsertionEffect: L,
      useMemo: L,
      useReducer: L,
      useRef: L,
      useState: L,
      useDebugValue: L,
      useDeferredValue: L,
      useTransition: L,
      useSyncExternalStore: L,
      useId: L,
      useHostTransitionStatus: L,
      useFormState: L,
      useActionState: L,
      useOptimistic: L,
      useMemoCache: L,
      useCacheRefresh: L,
    }
    Ws.useEffectEvent = L
    var Gs = {
        readContext: oa,
        use: zo,
        useCallback: function (e, t) {
          return ((Fo().memoizedState = [e, t === void 0 ? null : t]), e)
        },
        useContext: oa,
        useEffect: hs,
        useImperativeHandle: function (e, t, n) {
          ;((n = n == null ? null : n.concat([e])), ps(4194308, 4, xs.bind(null, t, e), n))
        },
        useLayoutEffect: function (e, t) {
          return ps(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
          ps(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var n = Fo()
          t = t === void 0 ? null : t
          var r = e()
          if (So) {
            We(!0)
            try {
              e()
            } finally {
              We(!1)
            }
          }
          return ((n.memoizedState = [r, t]), r)
        },
        useReducer: function (e, t, n) {
          var r = Fo()
          if (n !== void 0) {
            var i = n(t)
            if (So) {
              We(!0)
              try {
                n(t)
              } finally {
                We(!1)
              }
            }
          } else i = t
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ls.bind(null, F, e)),
            [r.memoizedState, e]
          )
        },
        useRef: function (e) {
          var t = Fo()
          return ((e = { current: e }), (t.memoizedState = e))
        },
        useState: function (e) {
          e = Zo(e)
          var t = e.queue,
            n = Rs.bind(null, F, t)
          return ((t.dispatch = n), [e.memoizedState, n])
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Es(Fo(), e, t)
        },
        useTransition: function () {
          var e = Zo(!1)
          return ((e = Os.bind(null, F, e.queue, !0, !1)), (Fo().memoizedState = e), [!1, e])
        },
        useSyncExternalStore: function (e, t, n) {
          var r = F,
            a = Fo()
          if (P) {
            if (n === void 0) throw Error(i(407))
            n = n()
          } else {
            if (((n = t()), B === null)) throw Error(i(349))
            H & 127 || Ko(r, t, n)
          }
          a.memoizedState = n
          var o = { value: n, getSnapshot: t }
          return (
            (a.queue = o),
            hs(Jo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ds(9, { destroy: void 0 }, qo.bind(null, r, o, n, t), null),
            n
          )
        },
        useId: function () {
          var e = Fo(),
            t = B.identifierPrefix
          if (P) {
            var n = Mi,
              r = ji
            ;((n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = Co++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`))
          } else ((n = Eo++), (t = `_` + t + `r_` + n.toString(32) + `_`))
          return (e.memoizedState = t)
        },
        useHostTransitionStatus: Ns,
        useFormState: os,
        useActionState: os,
        useOptimistic: function (e) {
          var t = Fo()
          t.memoizedState = t.baseState = e
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          }
          return ((t.queue = n), (t = Bs.bind(null, F, !0, n)), (n.dispatch = t), [e, t])
        },
        useMemoCache: Bo,
        useCacheRefresh: function () {
          return (Fo().memoizedState = Is.bind(null, F))
        },
        useEffectEvent: function (e) {
          var t = Fo(),
            n = { impl: e }
          return (
            (t.memoizedState = n),
            function () {
              if (z & 2) throw Error(i(440))
              return n.impl.apply(void 0, arguments)
            }
          )
        },
      },
      Ks = {
        readContext: oa,
        use: zo,
        useCallback: ws,
        useContext: oa,
        useEffect: gs,
        useImperativeHandle: Ss,
        useInsertionEffect: ys,
        useLayoutEffect: bs,
        useMemo: Ts,
        useReducer: Ho,
        useRef: fs,
        useState: function () {
          return Ho(Vo)
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Ds(Io(), I.memoizedState, e, t)
        },
        useTransition: function () {
          var e = Ho(Vo)[0],
            t = Io().memoizedState
          return [typeof e == `boolean` ? e : Ro(e), t]
        },
        useSyncExternalStore: Go,
        useId: Ps,
        useHostTransitionStatus: Ns,
        useFormState: ss,
        useActionState: ss,
        useOptimistic: function (e, t) {
          return Qo(Io(), I, e, t)
        },
        useMemoCache: Bo,
        useCacheRefresh: Fs,
      }
    Ks.useEffectEvent = vs
    var qs = {
      readContext: oa,
      use: zo,
      useCallback: ws,
      useContext: oa,
      useEffect: gs,
      useImperativeHandle: Ss,
      useInsertionEffect: ys,
      useLayoutEffect: bs,
      useMemo: Ts,
      useReducer: Wo,
      useRef: fs,
      useState: function () {
        return Wo(Vo)
      },
      useDebugValue: Cs,
      useDeferredValue: function (e, t) {
        var n = Io()
        return I === null ? Es(n, e, t) : Ds(n, I.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Wo(Vo)[0],
          t = Io().memoizedState
        return [typeof e == `boolean` ? e : Ro(e), t]
      },
      useSyncExternalStore: Go,
      useId: Ps,
      useHostTransitionStatus: Ns,
      useFormState: us,
      useActionState: us,
      useOptimistic: function (e, t) {
        var n = Io()
        return I === null ? ((n.baseState = e), [e, n.queue.dispatch]) : Qo(n, I, e, t)
      },
      useMemoCache: Bo,
      useCacheRefresh: Fs,
    }
    qs.useEffectEvent = vs
    function Js(e, t, n, r) {
      ;((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : f({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n))
    }
    var Ys = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = bu(),
          i = Ja(r)
        ;((i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (Su(t, e, r), Xa(t, e, r)))
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = bu(),
          i = Ja(r)
        ;((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (Su(t, e, r), Xa(t, e, r)))
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = bu(),
          r = Ja(n)
        ;((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ya(e, r, n)),
          t !== null && (Su(t, e, n), Xa(t, e, n)))
      },
    }
    function Xs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Or(n, r) || !Or(i, a)
            : !0
      )
    }
    function Zs(e, t, n, r) {
      ;((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ys.enqueueReplaceState(t, t.state, null))
    }
    function Qs(e, t) {
      var n = t
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r])
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = f({}, n)), e)) n[i] === void 0 && (n[i] = e[i])
      return n
    }
    function $s(e) {
      ti(e)
    }
    function ec(e) {
      console.error(e)
    }
    function tc(e) {
      ti(e)
    }
    function nc(e, t) {
      try {
        var n = e.onUncaughtError
        n(t.value, { componentStack: t.stack })
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    function rc(e, t, n) {
      try {
        var r = e.onCaughtError
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null })
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    function ic(e, t, n) {
      return (
        (n = Ja(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          nc(e, t)
        }),
        n
      )
    }
    function ac(e) {
      return ((e = Ja(e)), (e.tag = 3), e)
    }
    function oc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError
      if (typeof i == `function`) {
        var a = r.value
        ;((e.payload = function () {
          return i(a)
        }),
          (e.callback = function () {
            rc(t, n, r)
          }))
      }
      var o = n.stateNode
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          ;(rc(t, n, r),
            typeof i != `function` && (uu === null ? (uu = new Set([this])) : uu.add(this)))
          var e = r.stack
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e })
        })
    }
    function sc(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && ra(t, n, a, !0), (n = co.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                lo === null ? Pu() : n.alternate === null && Zl === 0 && (Zl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Qu(e, r, a)),
                !1
              )
            case 22:
              return (
                (n.flags |= 65536),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Qu(e, r, a)),
                !1
              )
          }
          throw Error(i(435, n.tag))
        }
        return (Qu(e, r, a), Pu(), !1)
      }
      if (P)
        return (
          (t = co.current),
          t === null
            ? (r !== Hi && ((t = Error(i(423), { cause: r })), Yi(Ci(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Ci(r, n)),
              (a = ic(e.stateNode, r, a)),
              Za(e, a),
              Zl !== 4 && (Zl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Hi && ((e = Error(i(422), { cause: r })), Yi(Ci(e, n)))),
          !1
        )
      var o = Error(i(520), { cause: r })
      if (((o = Ci(o, n)), ru === null ? (ru = [o]) : ru.push(o), Zl !== 4 && (Zl = 2), t === null))
        return !0
      ;((r = Ci(r, n)), (n = t))
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = ic(n.stateNode, r, e)),
              Za(n, e),
              !1
            )
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (uu === null || !uu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = ac(a)),
                oc(a, e, n, r),
                Za(n, a),
                !1
              )
        }
        n = n.return
      } while (n !== null)
      return !1
    }
    var cc = Error(i(461)),
      lc = !1
    function uc(e, t, n, r) {
      t.child = e === null ? Wa(t, null, n, r) : Ua(t, e.child, n, r)
    }
    function dc(e, t, n, r, i) {
      n = n.render
      var a = t.ref
      if (`ref` in r) {
        var o = {}
        for (var s in r) s !== `ref` && (o[s] = r[s])
      } else o = r
      return (
        aa(t),
        (r = Oo(e, t, n, o, a, i)),
        (s = Mo()),
        e !== null && !lc
          ? (No(e, t, i), Fc(e, t, i))
          : (P && s && Fi(t), (t.flags |= 1), uc(e, t, r, i), t.child)
      )
    }
    function fc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type
        return typeof a == `function` && !mi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), pc(e, t, a, r, i))
          : ((e = _i(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e))
      }
      if (((a = e.child), !Ic(e, i))) {
        var o = a.memoizedProps
        if (((n = n.compare), (n = n === null ? Or : n), n(o, r) && e.ref === t.ref))
          return Fc(e, t, i)
      }
      return ((t.flags |= 1), (e = hi(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
    }
    function pc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps
        if (Or(a, r) && e.ref === t.ref)
          if (((lc = !1), (t.pendingProps = r = a), Ic(e, i))) e.flags & 131072 && (lc = !0)
          else return ((t.lanes = e.lanes), Fc(e, t, i))
      }
      return xc(e, t, n, r, i)
    }
    function mc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling))
            r = i & ~a
          } else ((r = 0), (t.child = null))
          return gc(e, t, a, n, r)
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ta(t, a === null ? null : a.cachePool),
            a === null ? oo() : ao(t, a),
            po(t))
        else return ((r = t.lanes = 536870912), gc(e, t, a === null ? n : a.baseLanes | n, n, r))
      } else
        a === null
          ? (e !== null && Ta(t, null), oo(), mo(t))
          : (Ta(t, a.cachePool), ao(t, a), mo(t), (t.memoizedState = null))
      return (uc(e, t, i, n), t.child)
    }
    function hc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      )
    }
    function gc(e, t, n, r, i) {
      var a = wa()
      return (
        (a = a === null ? null : { parent: fa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ta(t, null),
        oo(),
        po(t),
        e !== null && ra(e, t, r, !0),
        (t.childLanes = i),
        null
      )
    }
    function _c(e, t) {
      return (
        (t = Ac({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      )
    }
    function vc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = _c(t, t.pendingProps)),
        (e.flags |= 2),
        ho(t),
        (t.memoizedState = null),
        e
      )
    }
    function yc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0
      if (((t.flags &= -129), e === null)) {
        if (P) {
          if (r.mode === `hidden`) return ((e = _c(t, r)), (t.lanes = 536870912), hc(null, e))
          if (
            (fo(t),
            (e = zi)
              ? ((e = uf(e, Vi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ai === null ? null : { id: ji, overflow: Mi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ri = t),
                  (zi = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t)
          return ((t.lanes = 536870912), null)
        }
        return _c(t, r)
      }
      var o = e.memoizedState
      if (o !== null) {
        var s = o.dehydrated
        if ((fo(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = vc(e, t, n)))
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null))
          else throw Error(i(558))
        else if ((lc || ra(e, t, n, !1), (a = (n & e.childLanes) !== 0), lc || a)) {
          if (((r = B), r !== null && ((s = st(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), ci(e, s), Su(r, e, s), cc)
          ;(Pu(), (t = vc(e, t, n)))
        } else
          ((e = o.treeContext),
            (zi = mf(s.nextSibling)),
            (Ri = t),
            (P = !0),
            (Bi = null),
            (Vi = !1),
            e !== null && Li(t, e),
            (t = _c(t, r)),
            (t.flags |= 4096))
        return t
      }
      return (
        (e = hi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      )
    }
    function bc(e, t) {
      var n = t.ref
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816)
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284))
        ;(e === null || e.ref !== n) && (t.flags |= 4194816)
      }
    }
    function xc(e, t, n, r, i) {
      return (
        aa(t),
        (n = Oo(e, t, n, r, void 0, i)),
        (r = Mo()),
        e !== null && !lc
          ? (No(e, t, i), Fc(e, t, i))
          : (P && r && Fi(t), (t.flags |= 1), uc(e, t, n, i), t.child)
      )
    }
    function Sc(e, t, n, r, i, a) {
      return (
        aa(t),
        (t.updateQueue = null),
        (n = Ao(t, r, n, i)),
        ko(e),
        (r = Mo()),
        e !== null && !lc
          ? (No(e, t, a), Fc(e, t, a))
          : (P && r && Fi(t), (t.flags |= 1), uc(e, t, n, a), t.child)
      )
    }
    function Cc(e, t, n, r, i) {
      if ((aa(t), t.stateNode === null)) {
        var a = di,
          o = n.contextType
        ;(typeof o == `object` && o && (a = oa(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ys),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ka(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? oa(o) : di),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Js(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Ys.enqueueReplaceState(a, a.state, null),
            eo(t, r, a, i),
            $a(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0))
      } else if (e === null) {
        a = t.stateNode
        var s = t.memoizedProps,
          c = Qs(n, s)
        a.props = c
        var l = a.context,
          u = n.contextType
        ;((o = di), typeof u == `object` && u && (o = oa(u)))
        var d = n.getDerivedStateFromProps
        ;((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Zs(t, a, r, o)),
          (Ga = !1))
        var f = t.memoizedState
        ;((a.state = f),
          eo(t, r, a, i),
          $a(),
          (l = t.memoizedState),
          s || f !== l || Ga
            ? (typeof d == `function` && (Js(t, n, d, r), (l = t.memoizedState)),
              (c = Ga || Xs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)))
      } else {
        ;((a = t.stateNode),
          qa(e, t),
          (o = t.memoizedProps),
          (u = Qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = di),
          typeof l == `object` && l && (c = oa(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Zs(t, a, r, c)),
          (Ga = !1),
          (f = t.memoizedState),
          (a.state = f),
          eo(t, r, a, i),
          $a())
        var p = t.memoizedState
        o !== d || f !== p || Ga || (e !== null && e.dependencies !== null && ia(e.dependencies))
          ? (typeof s == `function` && (Js(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ga ||
              Xs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ia(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1))
      }
      return (
        (a = r),
        bc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ua(t, e.child, null, i)), (t.child = Ua(t, null, n, i)))
              : uc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Fc(e, t, i)),
        e
      )
    }
    function wc(e, t, n, r) {
      return (qi(), (t.flags |= 256), uc(e, t, n, r), t.child)
    }
    var Tc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }
    function Ec(e) {
      return { baseLanes: e, cachePool: Ea() }
    }
    function Dc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= tu), e)
    }
    function Oc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (go.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (P) {
          if (
            (a ? uo(t) : mo(t),
            (e = zi)
              ? ((e = uf(e, Vi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ai === null ? null : { id: ji, overflow: Mi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ri = t),
                  (zi = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t)
          return (ff(e) ? (t.lanes = 32) : (t.lanes = 536870912), null)
        }
        var c = r.children
        return (
          (r = r.fallback),
          a
            ? (mo(t),
              (a = t.mode),
              (c = Ac({ mode: `hidden`, children: c }, a)),
              (r = vi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Ec(n)),
              (r.childLanes = Dc(e, s, n)),
              (t.memoizedState = Tc),
              hc(null, r))
            : (uo(t), kc(t, c))
        )
      }
      var l = e.memoizedState
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (uo(t), (t.flags &= -257), (t = jc(e, t, n)))
            : t.memoizedState === null
              ? (mo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Ac({ mode: `visible`, children: r.children }, a)),
                (c = vi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ua(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Ec(n)),
                (r.childLanes = Dc(e, s, n)),
                (t.memoizedState = Tc),
                (t = hc(null, r)))
              : (mo(t), (t.child = e.child), (t.flags |= 128), (t = null))
        else if ((uo(t), ff(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst
          ;((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Yi({ value: r, source: null, stack: null }),
            (t = jc(e, t, n)))
        } else if ((lc || ra(e, t, n, !1), (s = (n & e.childLanes) !== 0), lc || s)) {
          if (((s = B), s !== null && ((r = st(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), ci(e, r), Su(s, e, r), cc)
          ;(df(c) || Pu(), (t = jc(e, t, n)))
        } else
          df(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (zi = mf(c.nextSibling)),
              (Ri = t),
              (P = !0),
              (Bi = null),
              (Vi = !1),
              e !== null && Li(t, e),
              (t = kc(t, r.children)),
              (t.flags |= 4096))
        return t
      }
      return a
        ? (mo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = hi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = vi(c, a, n, null)), (c.flags |= 2)) : (c = hi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          hc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Ec(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ea())
                : ((l = fa._currentValue), (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = Dc(e, s, n)),
          (t.memoizedState = Tc),
          hc(e.child, r))
        : (uo(t),
          (n = e.child),
          (e = n.sibling),
          (n = hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n)
    }
    function kc(e, t) {
      return ((t = Ac({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t))
    }
    function Ac(e, t) {
      return ((e = pi(22, e, null, t)), (e.lanes = 0), e)
    }
    function jc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = kc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      )
    }
    function Mc(e, t, n) {
      e.lanes |= t
      var r = e.alternate
      ;(r !== null && (r.lanes |= t), ta(e.return, t, n))
    }
    function Nc(e, t, n, r, i, a) {
      var o = e.memoizedState
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a))
    }
    function Pc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail
      r = r.children
      var o = go.current,
        s = (o & 2) != 0
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        A(go, o),
        uc(e, t, r, n),
        (r = P ? Di : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Mc(e, n, t)
          else if (e.tag === 19) Mc(e, n, t)
          else if (e.child !== null) {
            ;((e.child.return = e), (e = e.child))
            continue
          }
          if (e === t) break a
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a
            e = e.return
          }
          ;((e.sibling.return = e.return), (e = e.sibling))
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate), e !== null && _o(e) === null && (i = n), (n = n.sibling))
          ;((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Nc(t, !1, i, n, a, r))
          break
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && _o(e) === null)) {
              t.child = i
              break
            }
            ;((e = i.sibling), (i.sibling = n), (n = i), (i = e))
          }
          Nc(t, !0, n, null, a, r)
          break
        case `together`:
          Nc(t, !1, null, null, void 0, r)
          break
        default:
          t.memoizedState = null
      }
      return t.child
    }
    function Fc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Ql |= t.lanes), (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ra(e, t, n, !1), (n & t.childLanes) === 0)) return null
        } else return null
      if (e !== null && t.child !== e.child) throw Error(i(153))
      if (t.child !== null) {
        for (
          e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling), (n = n.sibling = hi(e, e.pendingProps)), (n.return = t))
        n.sibling = null
      }
      return t.child
    }
    function Ic(e, t) {
      return (e.lanes & t) === 0 ? ((e = e.dependencies), !!(e !== null && ia(e))) : !0
    }
    function Lc(e, t, n) {
      switch (t.tag) {
        case 3:
          ;(_e(t, t.stateNode.containerInfo), $i(t, fa, e.memoizedState.cache), qi())
          break
        case 27:
        case 5:
          ye(t)
          break
        case 4:
          _e(t, t.stateNode.containerInfo)
          break
        case 10:
          $i(t, t.type, t.memoizedProps.value)
          break
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), fo(t), null)
          break
        case 13:
          var r = t.memoizedState
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (uo(t), (e = Fc(e, t, n)), e === null ? null : e.sibling)
                : Oc(e, t, n)
              : (uo(t), (t.flags |= 128), null)
          uo(t)
          break
        case 19:
          var i = (e.flags & 128) != 0
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (ra(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return Pc(e, t, n)
            t.flags |= 128
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            A(go, go.current),
            r)
          )
            break
          return null
        case 22:
          return ((t.lanes = 0), mc(e, t, n, t.pendingProps))
        case 24:
          $i(t, fa, e.memoizedState.cache)
      }
      return Fc(e, t, n)
    }
    function Rc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) lc = !0
        else {
          if (!Ic(e, n) && !(t.flags & 128)) return ((lc = !1), Lc(e, t, n))
          lc = !!(e.flags & 131072)
        }
      else ((lc = !1), P && t.flags & 1048576 && Pi(t, Di, t.index))
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps
            if (((e = Na(t.elementType)), (t.type = e), typeof e == `function`))
              mi(e)
                ? ((r = Qs(e, r)), (t.tag = 1), (t = Cc(null, t, e, r, n)))
                : ((t.tag = 0), (t = xc(null, t, e, r, n)))
            else {
              if (e != null) {
                var a = e.$$typeof
                if (a === w) {
                  ;((t.tag = 11), (t = dc(null, t, e, r, n)))
                  break a
                } else if (a === ee) {
                  ;((t.tag = 14), (t = fc(null, t, e, r, n)))
                  break a
                }
              }
              throw ((t = oe(e) || e), Error(i(306, t, ``)))
            }
          }
          return t
        case 0:
          return xc(e, t, t.type, t.pendingProps, n)
        case 1:
          return ((r = t.type), (a = Qs(r, t.pendingProps)), Cc(e, t, r, a, n))
        case 3:
          a: {
            if ((_e(t, t.stateNode.containerInfo), e === null)) throw Error(i(387))
            r = t.pendingProps
            var o = t.memoizedState
            ;((a = o.element), qa(e, t), eo(t, r, null, n))
            var s = t.memoizedState
            if (
              ((r = s.cache),
              $i(t, fa, r),
              r !== o.cache && na(t, [fa], n, !0),
              $a(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = wc(e, t, r, n)
                break a
              } else if (r !== a) {
                ;((a = Ci(Error(i(424)), t)), Yi(a), (t = wc(e, t, r, n)))
                break a
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body
                    break
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e
                }
                for (
                  zi = mf(e.firstChild),
                    Ri = t,
                    P = !0,
                    Bi = null,
                    Vi = !0,
                    n = Wa(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling))
              }
            else {
              if ((qi(), r === a)) {
                t = Fc(e, t, n)
                break a
              }
              uc(e, t, r, n)
            }
            t = t.child
          }
          return t
        case 26:
          return (
            bc(e, t),
            e === null
              ? (n = Mf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : P ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Kd(he.current).createElement(n)),
                  (r[pt] = t),
                  (r[mt] = e),
                  Bd(r, n, e),
                  Et(r),
                  (t.stateNode = r))
              : (t.memoizedState = Mf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          )
        case 27:
          return (
            ye(t),
            e === null &&
              P &&
              ((r = t.stateNode = J(t.type, t.pendingProps, he.current)),
              (Ri = t),
              (Vi = !0),
              (a = zi),
              rf(t.type) ? ((hf = a), (zi = mf(r.firstChild))) : (zi = a)),
            uc(e, t, t.pendingProps.children, n),
            bc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          )
        case 5:
          return (
            e === null &&
              P &&
              ((a = r = zi) &&
                ((r = cf(r, t.type, t.pendingProps, Vi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r), (Ri = t), (zi = mf(r.firstChild)), (Vi = !1), (a = !0))),
              a || Ui(t)),
            ye(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Yd(a, o) ? (r = null) : s !== null && Yd(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = Oo(e, t, jo, null, null, n)), (tp._currentValue = a)),
            bc(e, t),
            uc(e, t, r, n),
            t.child
          )
        case 6:
          return (
            e === null &&
              P &&
              ((e = n = zi) &&
                ((n = lf(n, t.pendingProps, Vi)),
                n === null ? (e = !1) : ((t.stateNode = n), (Ri = t), (zi = null), (e = !0))),
              e || Ui(t)),
            null
          )
        case 13:
          return Oc(e, t, n)
        case 4:
          return (
            _e(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ua(t, null, r, n)) : uc(e, t, r, n),
            t.child
          )
        case 11:
          return dc(e, t, t.type, t.pendingProps, n)
        case 7:
          return (uc(e, t, t.pendingProps, n), t.child)
        case 8:
          return (uc(e, t, t.pendingProps.children, n), t.child)
        case 12:
          return (uc(e, t, t.pendingProps.children, n), t.child)
        case 10:
          return ((r = t.pendingProps), $i(t, t.type, r.value), uc(e, t, r.children, n), t.child)
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            aa(t),
            (a = oa(a)),
            (r = r(a)),
            (t.flags |= 1),
            uc(e, t, r, n),
            t.child
          )
        case 14:
          return fc(e, t, t.type, t.pendingProps, n)
        case 15:
          return pc(e, t, t.type, t.pendingProps, n)
        case 19:
          return Pc(e, t, n)
        case 31:
          return yc(e, t, n)
        case 22:
          return mc(e, t, n, t.pendingProps)
        case 24:
          return (
            aa(t),
            (r = oa(fa)),
            e === null
              ? ((a = wa()),
                a === null &&
                  ((a = B),
                  (o = pa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ka(t),
                $i(t, fa, a))
              : ((e.lanes & n) !== 0 && (qa(e, t), eo(t, null, null, n), $a()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), $i(t, fa, r), r !== a.cache && na(t, [fa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    $i(t, fa, r))),
            uc(e, t, t.pendingProps.children, n),
            t.child
          )
        case 29:
          throw t.pendingProps
      }
      throw Error(i(156, t.tag))
    }
    function zc(e) {
      e.flags |= 4
    }
    function Bc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192
          else if (ju()) e.flags |= 8192
          else throw ((Pa = Aa), Oa)
      } else e.flags &= -16777217
    }
    function Vc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217
      else if (((e.flags |= 16777216), !qf(t)))
        if (ju()) e.flags |= 8192
        else throw ((Pa = Aa), Oa)
    }
    function Hc(e, t) {
      ;(t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : j()), (e.lanes |= t), (nu |= t)))
    }
    function Uc(e, t) {
      if (!P)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail
            for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling))
            n === null ? (e.tail = null) : (n.sibling = null)
            break
          case `collapsed`:
            n = e.tail
            for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling))
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null)
        }
    }
    function Wc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling))
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling))
      return ((e.subtreeFlags |= r), (e.childLanes = n), t)
    }
    function Gc(e, t, n) {
      var r = t.pendingProps
      switch ((Ii(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Wc(t), null)
        case 1:
          return (Wc(t), null)
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ea(fa),
            ve(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ki(t)
                ? zc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ji())),
            Wc(t),
            null
          )
        case 26:
          var a = t.type,
            o = t.memoizedState
          return (
            e === null
              ? (zc(t), o === null ? (Wc(t), Bc(t, a, null, r, n)) : (Wc(t), Vc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (Wc(t), (t.flags &= -16777217))
                  : (zc(t), Wc(t), Vc(t, o))
                : ((e = e.memoizedProps), e !== r && zc(t), Wc(t), Bc(t, a, e, r, n)),
            null
          )
        case 27:
          if ((be(t), (n = he.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && zc(t)
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166))
              return (Wc(t), null)
            }
            ;((e = pe.current), Ki(t) ? Wi(t, e) : ((e = J(a, r, n)), (t.stateNode = e), zc(t)))
          }
          return (Wc(t), null)
        case 5:
          if ((be(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && zc(t)
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166))
              return (Wc(t), null)
            }
            if (((o = pe.current), Ki(t))) Wi(t, o)
            else {
              var s = Kd(he.current)
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
                  break
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a)
                  break
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
                      break
                    case `math`:
                      o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a)
                      break
                    case `script`:
                      ;((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)))
                      break
                    case `select`:
                      ;((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size))
                      break
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a)
                  }
              }
              ;((o[pt] = t), (o[mt] = r))
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode)
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ;((s.child.return = s), (s = s.child))
                  continue
                }
                if (s === t) break a
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a
                  s = s.return
                }
                ;((s.sibling.return = s.return), (s = s.sibling))
              }
              t.stateNode = o
              a: switch ((Bd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus
                  break a
                case `img`:
                  r = !0
                  break a
                default:
                  r = !1
              }
              r && zc(t)
            }
          }
          return (
            Wc(t),
            Bc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null
          )
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && zc(t)
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166))
            if (((e = he.current), Ki(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = Ri), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps
                }
              ;((e[pt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Rd(e.nodeValue, n)
                )),
                e || Ui(t, !0))
            } else ((e = Kd(e).createTextNode(r)), (e[pt] = t), (t.stateNode = e))
          }
          return (Wc(t), null)
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ki(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318))
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(i(557))
                e[pt] = t
              } else (qi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4))
              ;(Wc(t), (e = !1))
            } else
              ((n = Ji()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0))
            if (!e) return t.flags & 256 ? (ho(t), t) : (ho(t), null)
            if (t.flags & 128) throw Error(i(558))
          }
          return (Wc(t), null)
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ki(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318))
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a))
                  throw Error(i(317))
                a[pt] = t
              } else (qi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4))
              ;(Wc(t), (a = !1))
            } else
              ((a = Ji()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                (a = !0))
            if (!a) return t.flags & 256 ? (ho(t), t) : (ho(t), null)
          }
          return (
            ho(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Hc(t, t.updateQueue),
                Wc(t),
                null)
          )
        case 4:
          return (ve(), e === null && kd(t.stateNode.containerInfo), Wc(t), null)
        case 10:
          return (ea(t.type), Wc(t), null)
        case 19:
          if ((fe(go), (r = t.memoizedState), r === null)) return (Wc(t), null)
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Uc(r, !1)
            else {
              if (Zl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = _o(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Uc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Hc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (gi(n, e), (n = n.sibling))
                    return (A(go, (go.current & 1) | 2), P && Ni(t, r.treeForkCount), t.child)
                  }
                  e = e.sibling
                }
              r.tail !== null &&
                Ne() > cu &&
                ((t.flags |= 128), (a = !0), Uc(r, !1), (t.lanes = 4194304))
            }
          else {
            if (!a)
              if (((e = _o(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Hc(t, e),
                  Uc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !P)
                )
                  return (Wc(t), null)
              } else
                2 * Ne() - r.renderingStartTime > cu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Uc(r, !1), (t.lanes = 4194304))
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o))
          }
          return r.tail === null
            ? (Wc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ne()),
              (e.sibling = null),
              (n = go.current),
              A(go, a ? (n & 1) | 2 : n & 1),
              P && Ni(t, r.treeForkCount),
              e)
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (Wc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Wc(t),
            (n = t.updateQueue),
            n !== null && Hc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && fe(Ca),
            null
          )
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ea(fa),
            Wc(t),
            null
          )
        case 25:
          return null
        case 30:
          return null
      }
      throw Error(i(156, t.tag))
    }
    function Kc(e, t) {
      switch ((Ii(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
        case 3:
          return (
            ea(fa),
            ve(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 26:
        case 27:
        case 5:
          return (be(t), null)
        case 31:
          if (t.memoizedState !== null) {
            if ((ho(t), t.alternate === null)) throw Error(i(340))
            qi()
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
        case 13:
          if ((ho(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340))
            qi()
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
        case 19:
          return (fe(go), null)
        case 4:
          return (ve(), null)
        case 10:
          return (ea(t.type), null)
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            e !== null && fe(Ca),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 24:
          return (ea(fa), null)
        case 25:
          return null
        default:
          return null
      }
    }
    function qc(e, t) {
      switch ((Ii(t), t.tag)) {
        case 3:
          ;(ea(fa), ve())
          break
        case 26:
        case 27:
        case 5:
          be(t)
          break
        case 4:
          ve()
          break
        case 31:
          t.memoizedState !== null && ho(t)
          break
        case 13:
          ho(t)
          break
        case 19:
          fe(go)
          break
        case 10:
          ea(t.type)
          break
        case 22:
        case 23:
          ;(ho(t), so(), e !== null && fe(Ca))
          break
        case 24:
          ea(fa)
      }
    }
    function Jc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect
        if (r !== null) {
          var i = r.next
          n = i
          do {
            if ((n.tag & e) === e) {
              r = void 0
              var a = n.create,
                o = n.inst
              ;((r = a()), (o.destroy = r))
            }
            n = n.next
          } while (n !== i)
        }
      } catch (e) {
        W(t, t.return, e)
      }
    }
    function Yc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect
        if (i !== null) {
          var a = i.next
          r = a
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy
              if (s !== void 0) {
                ;((o.destroy = void 0), (i = t))
                var c = n,
                  l = s
                try {
                  l()
                } catch (e) {
                  W(i, c, e)
                }
              }
            }
            r = r.next
          } while (r !== a)
        }
      } catch (e) {
        W(t, t.return, e)
      }
    }
    function Xc(e) {
      var t = e.updateQueue
      if (t !== null) {
        var n = e.stateNode
        try {
          no(t, n)
        } catch (t) {
          W(e, e.return, t)
        }
      }
    }
    function Zc(e, t, n) {
      ;((n.props = Qs(e.type, e.memoizedProps)), (n.state = e.memoizedState))
      try {
        n.componentWillUnmount()
      } catch (n) {
        W(e, t, n)
      }
    }
    function Qc(e, t) {
      try {
        var n = e.ref
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode
              break
            case 30:
              r = e.stateNode
              break
            default:
              r = e.stateNode
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r)
        }
      } catch (n) {
        W(e, t, n)
      }
    }
    function $c(e, t) {
      var n = e.ref,
        r = e.refCleanup
      if (n !== null)
        if (typeof r == `function`)
          try {
            r()
          } catch (n) {
            W(e, t, n)
          } finally {
            ;((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null))
          }
        else if (typeof n == `function`)
          try {
            n(null)
          } catch (n) {
            W(e, t, n)
          }
        else n.current = null
    }
    function el(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus()
            break a
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet)
        }
      } catch (t) {
        W(e, e.return, t)
      }
    }
    function tl(e, t, n) {
      try {
        var r = e.stateNode
        ;(Vd(r, e.type, n, t), (r[mt] = t))
      } catch (t) {
        W(e, e.return, t)
      }
    }
    function nl(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && rf(e.type)) || e.tag === 4
      )
    }
    function rl(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || nl(e.return)) return null
          e = e.return
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && rf(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a
          ;((e.child.return = e), (e = e.child))
        }
        if (!(e.flags & 2)) return e.stateNode
      }
    }
    function il(e, t, n) {
      var r = e.tag
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = an)))
      else if (
        r !== 4 &&
        (r === 27 && rf(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (il(e, t, n), e = e.sibling; e !== null; ) (il(e, t, n), (e = e.sibling))
    }
    function al(e, t, n) {
      var r = e.tag
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e))
      else if (r !== 4 && (r === 27 && rf(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for (al(e, t, n), e = e.sibling; e !== null; ) (al(e, t, n), (e = e.sibling))
    }
    function ol(e) {
      var t = e.stateNode,
        n = e.memoizedProps
      try {
        for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0])
        ;(Bd(t, r, n), (t[pt] = e), (t[mt] = n))
      } catch (t) {
        W(e, e.return, t)
      }
    }
    var sl = !1,
      cl = !1,
      ll = !1,
      ul = typeof WeakSet == `function` ? WeakSet : Set,
      dl = null
    function fl(e, t) {
      if (((e = e.containerInfo), (Wd = up), (e = Mr(e)), Nr(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd }
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window
            var r = n.getSelection && n.getSelection()
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode
              var a = r.anchorOffset,
                o = r.focusNode
              r = r.focusOffset
              try {
                ;(n.nodeType, o.nodeType)
              } catch {
                n = null
                break a
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m))
                for (;;) {
                  if (f === e) break b
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break
                  ;((f = p), (p = f.parentNode))
                }
                f = m
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l }
            } else n = null
          }
        n ||= { start: 0, end: 0 }
      } else n = null
      for (Gd = { focusedElem: e, selectionRange: n }, up = !1, dl = t; dl !== null; )
        if (((t = dl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (dl = e))
        else
          for (; dl !== null; ) {
            switch (((t = dl), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) ((a = e[n]), (a.ref.impl = a.nextImpl))
                break
              case 11:
              case 15:
                break
              case 1:
                if (e & 1024 && o !== null) {
                  ;((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode))
                  try {
                    var h = Qs(n.type, a)
                    ;((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e))
                  } catch (e) {
                    W(n, n.return, e)
                  }
                }
                break
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) sf(e)
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        sf(e)
                        break
                      default:
                        e.textContent = ``
                    }
                }
                break
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break
              default:
                if (e & 1024) throw Error(i(163))
            }
            if (((e = t.sibling), e !== null)) {
              ;((e.return = t.return), (dl = e))
              break
            }
            dl = t.return
          }
    }
    function pl(e, t, n) {
      var r = n.flags
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ;(Dl(e, n), r & 4 && Jc(5, n))
          break
        case 1:
          if ((Dl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount()
              } catch (e) {
                W(n, n.return, e)
              }
            else {
              var i = Qs(n.type, t.memoizedProps)
              t = t.memoizedState
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
              } catch (e) {
                W(n, n.return, e)
              }
            }
          ;(r & 64 && Xc(n), r & 512 && Qc(n, n.return))
          break
        case 3:
          if ((Dl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode
                  break
                case 1:
                  t = n.child.stateNode
              }
            try {
              no(e, t)
            } catch (e) {
              W(n, n.return, e)
            }
          }
          break
        case 27:
          t === null && r & 4 && ol(n)
        case 26:
        case 5:
          ;(Dl(e, n), t === null && r & 4 && el(n), r & 512 && Qc(n, n.return))
          break
        case 12:
          Dl(e, n)
          break
        case 31:
          ;(Dl(e, n), r & 4 && vl(e, n))
          break
        case 13:
          ;(Dl(e, n),
            r & 4 && yl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null && ((e = e.dehydrated), e !== null && ((n = td.bind(null, n)), pf(e, n)))))
          break
        case 22:
          if (((r = n.memoizedState !== null || sl), !r)) {
            ;((t = (t !== null && t.memoizedState !== null) || cl), (i = sl))
            var a = cl
            ;((sl = r),
              (cl = t) && !a ? kl(e, n, (n.subtreeFlags & 8772) != 0) : Dl(e, n),
              (sl = i),
              (cl = a))
          }
          break
        case 30:
          break
        default:
          Dl(e, n)
      }
    }
    function ml(e) {
      var t = e.alternate
      ;(t !== null && ((e.alternate = null), ml(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && xt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null))
    }
    var R = null,
      hl = !1
    function gl(e, t, n) {
      for (n = n.child; n !== null; ) (_l(e, t, n), (n = n.sibling))
    }
    function _l(e, t, n) {
      if (Ue && typeof Ue.onCommitFiberUnmount == `function`)
        try {
          Ue.onCommitFiberUnmount(He, n)
        } catch {}
      switch (n.tag) {
        case 26:
          ;(cl || $c(n, t),
            gl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)))
          break
        case 27:
          cl || $c(n, t)
          var r = R,
            i = hl
          ;(rf(n.type) && ((R = n.stateNode), (hl = !1)),
            gl(e, t, n),
            vf(n.stateNode),
            (R = r),
            (hl = i))
          break
        case 5:
          cl || $c(n, t)
        case 6:
          if (((r = R), (i = hl), (R = null), gl(e, t, n), (R = r), (hl = i), R !== null))
            if (hl)
              try {
                ;(R.nodeType === 9
                  ? R.body
                  : R.nodeName === `HTML`
                    ? R.ownerDocument.body
                    : R
                ).removeChild(n.stateNode)
              } catch (e) {
                W(n, t, e)
              }
            else
              try {
                R.removeChild(n.stateNode)
              } catch (e) {
                W(n, t, e)
              }
          break
        case 18:
          R !== null &&
            (hl
              ? ((e = R),
                af(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode
                ),
                Ip(e))
              : af(R, n.stateNode))
          break
        case 4:
          ;((r = R),
            (i = hl),
            (R = n.stateNode.containerInfo),
            (hl = !0),
            gl(e, t, n),
            (R = r),
            (hl = i))
          break
        case 0:
        case 11:
        case 14:
        case 15:
          ;(Yc(2, n, t), cl || Yc(4, n, t), gl(e, t, n))
          break
        case 1:
          ;(cl ||
            ($c(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Zc(n, t, r)),
            gl(e, t, n))
          break
        case 21:
          gl(e, t, n)
          break
        case 22:
          ;((cl = (r = cl) || n.memoizedState !== null), gl(e, t, n), (cl = r))
          break
        default:
          gl(e, t, n)
      }
    }
    function vl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated
        try {
          Ip(e)
        } catch (e) {
          W(t, t.return, e)
        }
      }
    }
    function yl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Ip(e)
        } catch (e) {
          W(t, t.return, e)
        }
    }
    function bl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode
          return (t === null && (t = e.stateNode = new ul()), t)
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new ul()),
            t
          )
        default:
          throw Error(i(435, e.tag))
      }
    }
    function xl(e, t) {
      var n = bl(e)
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t)
          var r = nd.bind(null, e, t)
          t.then(r, r)
        }
      })
    }
    function Sl(e, t) {
      var n = t.deletions
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (rf(c.type)) {
                  ;((R = c.stateNode), (hl = !1))
                  break a
                }
                break
              case 5:
                ;((R = c.stateNode), (hl = !1))
                break a
              case 3:
              case 4:
                ;((R = c.stateNode.containerInfo), (hl = !0))
                break a
            }
            c = c.return
          }
          if (R === null) throw Error(i(160))
          ;(_l(o, s, a),
            (R = null),
            (hl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null))
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (wl(t, e), (t = t.sibling))
    }
    var Cl = null
    function wl(e, t) {
      var n = e.alternate,
        r = e.flags
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(Sl(t, e), Tl(e), r & 4 && (Yc(3, e, e.return), Jc(3, e), Yc(5, e, e.return)))
          break
        case 1:
          ;(Sl(t, e),
            Tl(e),
            r & 512 && (cl || n === null || $c(n, n.return)),
            r & 64 &&
              sl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))))
          break
        case 26:
          var a = Cl
          if ((Sl(t, e), Tl(e), r & 512 && (cl || n === null || $c(n, n.return)), r & 4)) {
            var o = n === null ? null : n.memoizedState
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ;((r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a))
                    b: switch (r) {
                      case `title`:
                        ;((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[bt] ||
                            o[pt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(o, a.querySelector(`head > title`))),
                          Bd(o, r, n),
                          (o[pt] = e),
                          Et(o),
                          (r = o))
                        break a
                      case `link`:
                        var s = Wf(`link`, `href`, a).get(r + (n.href || ``))
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === `` ? null : n.href) &&
                                o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              s.splice(c, 1)
                              break b
                            }
                        }
                        ;((o = a.createElement(r)), Bd(o, r, n), a.head.appendChild(o))
                        break
                      case `meta`:
                        if ((s = Wf(`meta`, `content`, a).get(r + (n.content || ``)))) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1)
                              break b
                            }
                        }
                        ;((o = a.createElement(r)), Bd(o, r, n), a.head.appendChild(o))
                        break
                      default:
                        throw Error(i(468, r))
                    }
                    ;((o[pt] = e), Et(o), (r = o))
                  }
                  e.stateNode = r
                } else Gf(a, e.type, e.stateNode)
              else e.stateNode = zf(a, r, e.memoizedProps)
            else
              o === r
                ? r === null && e.stateNode !== null && tl(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Gf(a, e.type, e.stateNode) : zf(a, r, e.memoizedProps))
          }
          break
        case 27:
          ;(Sl(t, e),
            Tl(e),
            r & 512 && (cl || n === null || $c(n, n.return)),
            n !== null && r & 4 && tl(e, e.memoizedProps, n.memoizedProps))
          break
        case 5:
          if ((Sl(t, e), Tl(e), r & 512 && (cl || n === null || $c(n, n.return)), e.flags & 32)) {
            a = e.stateNode
            try {
              Xt(a, ``)
            } catch (t) {
              W(e, e.return, t)
            }
          }
          ;(r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), tl(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (ll = !0))
          break
        case 6:
          if ((Sl(t, e), Tl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162))
            ;((r = e.memoizedProps), (n = e.stateNode))
            try {
              n.nodeValue = r
            } catch (t) {
              W(e, e.return, t)
            }
          }
          break
        case 3:
          if (
            ((Uf = null),
            (a = Cl),
            (Cl = X(t.containerInfo)),
            Sl(t, e),
            (Cl = a),
            Tl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Ip(t.containerInfo)
            } catch (t) {
              W(e, e.return, t)
            }
          ll && ((ll = !1), El(e))
          break
        case 4:
          ;((r = Cl), (Cl = X(e.stateNode.containerInfo)), Sl(t, e), Tl(e), (Cl = r))
          break
        case 12:
          ;(Sl(t, e), Tl(e))
          break
        case 31:
          ;(Sl(t, e),
            Tl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), xl(e, r))))
          break
        case 13:
          ;(Sl(t, e),
            Tl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              (ou = Ne()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), xl(e, r))))
          break
        case 22:
          a = e.memoizedState !== null
          var l = n !== null && n.memoizedState !== null,
            u = sl,
            d = cl
          if (((sl = u || a), (cl = d || l), Sl(t, e), (cl = d), (sl = u), Tl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || sl || cl || Ol(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`))
                    else {
                      c = l.stateNode
                      var f = l.memoizedProps.style,
                        p = f != null && f.hasOwnProperty(`display`) ? f.display : null
                      c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim()
                    }
                  } catch (e) {
                    W(l, l.return, e)
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps
                  } catch (e) {
                    W(l, l.return, e)
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t
                  try {
                    var m = l.stateNode
                    a ? of(m, !0) : of(l.stateNode, !1)
                  } catch (e) {
                    W(l, l.return, e)
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                t.child !== null
              ) {
                ;((t.child.return = t), (t = t.child))
                continue
              }
              if (t === e) break a
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a
                ;(n === t && (n = null), (t = t.return))
              }
              ;(n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling))
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), xl(e, n))))
          break
        case 19:
          ;(Sl(t, e),
            Tl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), xl(e, r))))
          break
        case 30:
          break
        case 21:
          break
        default:
          ;(Sl(t, e), Tl(e))
      }
    }
    function Tl(e) {
      var t = e.flags
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (nl(r)) {
              n = r
              break
            }
            r = r.return
          }
          if (n == null) throw Error(i(160))
          switch (n.tag) {
            case 27:
              var a = n.stateNode
              al(e, rl(e), a)
              break
            case 5:
              var o = n.stateNode
              ;(n.flags & 32 && (Xt(o, ``), (n.flags &= -33)), al(e, rl(e), o))
              break
            case 3:
            case 4:
              var s = n.stateNode.containerInfo
              il(e, rl(e), s)
              break
            default:
              throw Error(i(161))
          }
        } catch (t) {
          W(e, e.return, t)
        }
        e.flags &= -3
      }
      t & 4096 && (e.flags &= -4097)
    }
    function El(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e
          ;(El(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling))
        }
    }
    function Dl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) (pl(e, t.alternate, t), (t = t.sibling))
    }
    function Ol(e) {
      for (e = e.child; e !== null; ) {
        var t = e
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ;(Yc(4, t, t.return), Ol(t))
            break
          case 1:
            $c(t, t.return)
            var n = t.stateNode
            ;(typeof n.componentWillUnmount == `function` && Zc(t, t.return, n), Ol(t))
            break
          case 27:
            vf(t.stateNode)
          case 26:
          case 5:
            ;($c(t, t.return), Ol(t))
            break
          case 22:
            t.memoizedState === null && Ol(t)
            break
          case 30:
            Ol(t)
            break
          default:
            Ol(t)
        }
        e = e.sibling
      }
    }
    function kl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            ;(kl(i, a, n), Jc(4, a))
            break
          case 1:
            if ((kl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount()
              } catch (e) {
                W(r, r.return, e)
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode
              try {
                var c = i.shared.hiddenCallbacks
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) to(c[i], s)
              } catch (e) {
                W(r, r.return, e)
              }
            }
            ;(n && o & 64 && Xc(a), Qc(a, a.return))
            break
          case 27:
            ol(a)
          case 26:
          case 5:
            ;(kl(i, a, n), n && r === null && o & 4 && el(a), Qc(a, a.return))
            break
          case 12:
            kl(i, a, n)
            break
          case 31:
            ;(kl(i, a, n), n && o & 4 && vl(i, a))
            break
          case 13:
            ;(kl(i, a, n), n && o & 4 && yl(i, a))
            break
          case 22:
            ;(a.memoizedState === null && kl(i, a, n), Qc(a, a.return))
            break
          case 30:
            break
          default:
            kl(i, a, n)
        }
        t = t.sibling
      }
    }
    function Al(e, t) {
      var n = null
      ;(e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ma(n)))
    }
    function jl(e, t) {
      ;((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ma(e)))
    }
    function Ml(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Nl(e, t, n, r), (t = t.sibling))
    }
    function Nl(e, t, n, r) {
      var i = t.flags
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ;(Ml(e, t, n, r), i & 2048 && Jc(9, t))
          break
        case 1:
          Ml(e, t, n, r)
          break
        case 3:
          ;(Ml(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ma(e))))
          break
        case 12:
          if (i & 2048) {
            ;(Ml(e, t, n, r), (e = t.stateNode))
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0)
            } catch (e) {
              W(t, t.return, e)
            }
          } else Ml(e, t, n, r)
          break
        case 31:
          Ml(e, t, n, r)
          break
        case 13:
          Ml(e, t, n, r)
          break
        case 23:
          break
        case 22:
          ;((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Ml(e, t, n, r)
                : ((a._visibility |= 2), Pl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Ml(e, t, n, r)
                : Fl(e, t),
            i & 2048 && Al(o, t))
          break
        case 24:
          ;(Ml(e, t, n, r), i & 2048 && jl(t.alternate, t))
          break
        default:
          Ml(e, t, n, r)
      }
    }
    function Pl(e, t, n, r, i) {
      for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null; ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            ;(Pl(a, o, s, c, i), Jc(8, o))
            break
          case 23:
            break
          case 22:
            var u = o.stateNode
            ;(o.memoizedState === null
              ? ((u._visibility |= 2), Pl(a, o, s, c, i))
              : u._visibility & 2
                ? Pl(a, o, s, c, i)
                : Fl(a, o),
              i && l & 2048 && Al(o.alternate, o))
            break
          case 24:
            ;(Pl(a, o, s, c, i), i && l & 2048 && jl(o.alternate, o))
            break
          default:
            Pl(a, o, s, c, i)
        }
        t = t.sibling
      }
    }
    function Fl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags
          switch (r.tag) {
            case 22:
              ;(Fl(n, r), i & 2048 && Al(r.alternate, r))
              break
            case 24:
              ;(Fl(n, r), i & 2048 && jl(r.alternate, r))
              break
            default:
              Fl(n, r)
          }
          t = t.sibling
        }
    }
    var Il = 8192
    function Ll(e, t, n) {
      if (e.subtreeFlags & Il) for (e = e.child; e !== null; ) (Rl(e, t, n), (e = e.sibling))
    }
    function Rl(e, t, n) {
      switch (e.tag) {
        case 26:
          ;(Ll(e, t, n),
            e.flags & Il && e.memoizedState !== null && Jf(n, Cl, e.memoizedState, e.memoizedProps))
          break
        case 5:
          Ll(e, t, n)
          break
        case 3:
        case 4:
          var r = Cl
          ;((Cl = X(e.stateNode.containerInfo)), Ll(e, t, n), (Cl = r))
          break
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Il), (Il = 16777216), Ll(e, t, n), (Il = r))
              : Ll(e, t, n))
          break
        default:
          Ll(e, t, n)
      }
    }
    function zl(e) {
      var t = e.alternate
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null
        do ((t = e.sibling), (e.sibling = null), (e = t))
        while (e !== null)
      }
    }
    function Bl(e) {
      var t = e.deletions
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;((dl = r), Ul(r, e))
          }
        zl(e)
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Vl(e), (e = e.sibling))
    }
    function Vl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ;(Bl(e), e.flags & 2048 && Yc(9, e, e.return))
          break
        case 3:
          Bl(e)
          break
        case 12:
          Bl(e)
          break
        case 22:
          var t = e.stateNode
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Hl(e))
            : Bl(e)
          break
        default:
          Bl(e)
      }
    }
    function Hl(e) {
      var t = e.deletions
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;((dl = r), Ul(r, e))
          }
        zl(e)
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            ;(Yc(8, t, t.return), Hl(t))
            break
          case 22:
            ;((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Hl(t)))
            break
          default:
            Hl(t)
        }
        e = e.sibling
      }
    }
    function Ul(e, t) {
      for (; dl !== null; ) {
        var n = dl
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Yc(8, n, t)
            break
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool
              r != null && r.refCount++
            }
            break
          case 24:
            ma(n.memoizedState.cache)
        }
        if (((r = n.child), r !== null)) ((r.return = n), (dl = r))
        else
          a: for (n = e; dl !== null; ) {
            r = dl
            var i = r.sibling,
              a = r.return
            if ((ml(r), r === n)) {
              dl = null
              break a
            }
            if (i !== null) {
              ;((i.return = a), (dl = i))
              break a
            }
            dl = a
          }
      }
    }
    var Wl = {
        getCacheForType: function (e) {
          var t = oa(fa),
            n = t.data.get(e)
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n)
        },
        cacheSignal: function () {
          return oa(fa).controller.signal
        },
      },
      Gl = typeof WeakMap == `function` ? WeakMap : Map,
      z = 0,
      B = null,
      V = null,
      H = 0,
      U = 0,
      Kl = null,
      ql = !1,
      Jl = !1,
      Yl = !1,
      Xl = 0,
      Zl = 0,
      Ql = 0,
      $l = 0,
      eu = 0,
      tu = 0,
      nu = 0,
      ru = null,
      iu = null,
      au = !1,
      ou = 0,
      su = 0,
      cu = 1 / 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null,
      pu = null,
      mu = 0,
      hu = 0,
      gu = null,
      _u = null,
      vu = 0,
      yu = null
    function bu() {
      return z & 2 && H !== 0 ? H & -H : O.T === null ? ut() : vd()
    }
    function xu() {
      if (tu === 0)
        if (!(H & 536870912) || P) {
          var e = Xe
          ;((Xe <<= 1), !(Xe & 3932160) && (Xe = 262144), (tu = e))
        } else tu = 536870912
      return ((e = co.current), e !== null && (e.flags |= 32), tu)
    }
    function Su(e, t, n) {
      ;(((e === B && (U === 2 || U === 9)) || e.cancelPendingCommit !== null) &&
        (ku(e, 0), Eu(e, H, tu, !1)),
        rt(e, n),
        (!(z & 2) || e !== B) &&
          (e === B && (!(z & 2) && ($l |= n), Zl === 4 && Eu(e, H, tu, !1)), ud(e)))
    }
    function Cu(e, t, n) {
      if (z & 6) throw Error(i(327))
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || et(e, t),
        a = r ? Lu(e, t) : Fu(e, t, !0),
        o = r
      do {
        if (a === 0) {
          Jl && !r && Eu(e, t, 0, !1)
          break
        } else {
          if (((n = e.current.alternate), o && !Tu(n))) {
            ;((a = Fu(e, t, !1)), (o = !1))
            continue
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s))
            if (s !== 0) {
              t = s
              a: {
                var c = e
                a = ru
                var l = c.current.memoizedState.isDehydrated
                if ((l && (ku(c, s).flags |= 256), (s = Fu(c, s, !1)), s !== 2)) {
                  if (Yl && !l) {
                    ;((c.errorRecoveryDisabledLanes |= o), ($l |= o), (a = 4))
                    break a
                  }
                  ;((o = iu),
                    (iu = a),
                    o !== null && (iu === null ? (iu = o) : iu.push.apply(iu, o)))
                }
                a = s
              }
              if (((o = !1), a !== 2)) continue
            }
          }
          if (a === 1) {
            ;(ku(e, 0), Eu(e, t, 0, !0))
            break
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345))
              case 4:
                if ((t & 4194048) !== t) break
              case 6:
                Eu(r, t, tu, !ql)
                break a
              case 2:
                iu = null
                break
              case 3:
              case 5:
                break
              default:
                throw Error(i(329))
            }
            if ((t & 62914560) === t && ((a = ou + 300 - Ne()), 10 < a)) {
              if ((Eu(r, t, tu, !ql), $e(r, 0, !0) !== 0)) break a
              ;((mu = t),
                (r.timeoutHandle = Qd(
                  wu.bind(null, r, n, iu, lu, au, t, tu, $l, nu, ql, o, `Throttled`, -0, 0),
                  a
                )))
              break a
            }
            wu(r, n, iu, lu, au, t, tu, $l, nu, ql, o, null, -0, 0)
          }
        }
        break
      } while (1)
      ud(e)
    }
    function wu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ;((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: an,
        }),
          Rl(t, a, d))
        var m = (a & 62914560) === a ? ou - Ne() : (a & 4194048) === a ? su - Ne() : 0
        if (((m = Xf(d, m)), m !== null)) {
          ;((mu = a),
            (e.cancelPendingCommit = m(Wu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            Eu(e, a, o, !l))
          return
        }
      }
      Wu(e, t, a, n, r, i, o, s, c)
    }
    function Tu(e) {
      for (var t = e; ; ) {
        var n = t.tag
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot
            i = i.value
            try {
              if (!Dr(a(), i)) return !1
            } catch {
              return !1
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n))
        else {
          if (t === e) break
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0
            t = t.return
          }
          ;((t.sibling.return = t.return), (t = t.sibling))
        }
      }
      return !0
    }
    function Eu(e, t, n, r) {
      ;((t &= ~eu),
        (t &= ~$l),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes))
      for (var i = t; 0 < i; ) {
        var a = 31 - Ge(i),
          o = 1 << a
        ;((r[a] = -1), (i &= ~o))
      }
      n !== 0 && at(e, n, t)
    }
    function Du() {
      return z & 6 ? !0 : (dd(0, !1), !1)
    }
    function Ou() {
      if (V !== null) {
        if (U === 0) var e = V.return
        else ((e = V), (Qi = Zi = null), Po(e), (La = null), (Ra = 0), (e = V))
        for (; e !== null; ) (qc(e.alternate, e), (e = e.return))
        V = null
      }
    }
    function ku(e, t) {
      var n = e.timeoutHandle
      ;(n !== -1 && ((e.timeoutHandle = -1), $d(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (mu = 0),
        Ou(),
        (B = e),
        (V = n = hi(e.current, null)),
        (H = t),
        (U = 0),
        (Kl = null),
        (ql = !1),
        (Jl = et(e, t)),
        (Yl = !1),
        (nu = tu = eu = $l = Ql = Zl = 0),
        (iu = ru = null),
        (au = !1),
        t & 8 && (t |= t & 32))
      var r = e.entangledLanes
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ge(r),
            a = 1 << i
          ;((t |= e[i]), (r &= ~a))
        }
      return ((Xl = t), ai(), n)
    }
    function Au(e, t) {
      ;((F = null),
        (O.H = Ws),
        t === Da || t === ka
          ? ((t = Fa()), (U = 3))
          : t === Oa
            ? ((t = Fa()), (U = 4))
            : (U = t === cc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Kl = t),
        V === null && ((Zl = 1), nc(e, Ci(t, e.current))))
    }
    function ju() {
      var e = co.current
      return e === null
        ? !0
        : (H & 4194048) === H
          ? lo === null
          : (H & 62914560) === H || H & 536870912
            ? e === lo
            : !1
    }
    function Mu() {
      var e = O.H
      return ((O.H = Ws), e === null ? Ws : e)
    }
    function Nu() {
      var e = O.A
      return ((O.A = Wl), e)
    }
    function Pu() {
      ;((Zl = 4),
        ql || ((H & 4194048) !== H && co.current !== null) || (Jl = !0),
        (!(Ql & 134217727) && !($l & 134217727)) || B === null || Eu(B, H, tu, !1))
    }
    function Fu(e, t, n) {
      var r = z
      z |= 2
      var i = Mu(),
        a = Nu()
      ;((B !== e || H !== t) && ((lu = null), ku(e, t)), (t = !1))
      var o = Zl
      a: do
        try {
          if (U !== 0 && V !== null) {
            var s = V,
              c = Kl
            switch (U) {
              case 8:
                ;(Ou(), (o = 6))
                break a
              case 3:
              case 2:
              case 9:
              case 6:
                co.current === null && (t = !0)
                var l = U
                if (((U = 0), (Kl = null), Vu(e, s, c, l), n && Jl)) {
                  o = 0
                  break a
                }
                break
              default:
                ;((l = U), (U = 0), (Kl = null), Vu(e, s, c, l))
            }
          }
          ;(Iu(), (o = Zl))
          break
        } catch (t) {
          Au(e, t)
        }
      while (1)
      return (
        t && e.shellSuspendCounter++,
        (Qi = Zi = null),
        (z = r),
        (O.H = i),
        (O.A = a),
        V === null && ((B = null), (H = 0), ai()),
        o
      )
    }
    function Iu() {
      for (; V !== null; ) zu(V)
    }
    function Lu(e, t) {
      var n = z
      z |= 2
      var r = Mu(),
        a = Nu()
      B !== e || H !== t ? ((lu = null), (cu = Ne() + 500), ku(e, t)) : (Jl = et(e, t))
      a: do
        try {
          if (U !== 0 && V !== null) {
            t = V
            var o = Kl
            b: switch (U) {
              case 1:
                ;((U = 0), (Kl = null), Vu(e, t, o, 1))
                break
              case 2:
              case 9:
                if (ja(o)) {
                  ;((U = 0), (Kl = null), Bu(t))
                  break
                }
                ;((t = function () {
                  ;((U !== 2 && U !== 9) || B !== e || (U = 7), ud(e))
                }),
                  o.then(t, t))
                break a
              case 3:
                U = 7
                break a
              case 4:
                U = 5
                break a
              case 7:
                ja(o) ? ((U = 0), (Kl = null), Bu(t)) : ((U = 0), (Kl = null), Vu(e, t, o, 7))
                break
              case 5:
                var s = null
                switch (V.tag) {
                  case 26:
                    s = V.memoizedState
                  case 5:
                  case 27:
                    var c = V
                    if (s ? qf(s) : c.stateNode.complete) {
                      ;((U = 0), (Kl = null))
                      var l = c.sibling
                      if (l !== null) V = l
                      else {
                        var u = c.return
                        u === null ? (V = null) : ((V = u), Hu(u))
                      }
                      break b
                    }
                }
                ;((U = 0), (Kl = null), Vu(e, t, o, 5))
                break
              case 6:
                ;((U = 0), (Kl = null), Vu(e, t, o, 6))
                break
              case 8:
                ;(Ou(), (Zl = 6))
                break a
              default:
                throw Error(i(462))
            }
          }
          Ru()
          break
        } catch (t) {
          Au(e, t)
        }
      while (1)
      return (
        (Qi = Zi = null),
        (O.H = r),
        (O.A = a),
        (z = n),
        V === null ? ((B = null), (H = 0), ai(), Zl) : 0
      )
    }
    function Ru() {
      for (; V !== null && !je(); ) zu(V)
    }
    function zu(e) {
      var t = Rc(e.alternate, e, Xl)
      ;((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (V = t))
    }
    function Bu(e) {
      var t = e,
        n = t.alternate
      switch (t.tag) {
        case 15:
        case 0:
          t = Sc(n, t, t.pendingProps, t.type, void 0, H)
          break
        case 11:
          t = Sc(n, t, t.pendingProps, t.type.render, t.ref, H)
          break
        case 5:
          Po(t)
        default:
          ;(qc(n, t), (t = V = gi(t, Xl)), (t = Rc(n, t, Xl)))
      }
      ;((e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (V = t))
    }
    function Vu(e, t, n, r) {
      ;((Qi = Zi = null), Po(t), (La = null), (Ra = 0))
      var i = t.return
      try {
        if (sc(e, i, t, n, H)) {
          ;((Zl = 1), nc(e, Ci(n, e.current)), (V = null))
          return
        }
      } catch (t) {
        if (i !== null) throw ((V = i), t)
        ;((Zl = 1), nc(e, Ci(n, e.current)), (V = null))
        return
      }
      t.flags & 32768
        ? (P || r === 1
            ? (e = !0)
            : Jl || H & 536870912
              ? (e = !1)
              : ((ql = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = co.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Uu(t, e))
        : Hu(t)
    }
    function Hu(e) {
      var t = e
      do {
        if (t.flags & 32768) {
          Uu(t, ql)
          return
        }
        e = t.return
        var n = Gc(t.alternate, t, Xl)
        if (n !== null) {
          V = n
          return
        }
        if (((t = t.sibling), t !== null)) {
          V = t
          return
        }
        V = t = e
      } while (t !== null)
      Zl === 0 && (Zl = 5)
    }
    function Uu(e, t) {
      do {
        var n = Kc(e.alternate, e)
        if (n !== null) {
          ;((n.flags &= 32767), (V = n))
          return
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          V = e
          return
        }
        V = e = n
      } while (e !== null)
      ;((Zl = 6), (V = null))
    }
    function Wu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null
      do Yu()
      while (du !== 0)
      if (z & 6) throw Error(i(327))
      if (t !== null) {
        if (t === e.current) throw Error(i(177))
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ii),
          it(e, n, o, s, c, l),
          e === B && ((V = B = null), (H = 0)),
          (pu = t),
          (fu = e),
          (mu = n),
          (hu = o),
          (gu = a),
          (_u = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              rd(Le, function () {
                return (Xu(), null)
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ;((r = O.T), (O.T = null), (a = k.p), (k.p = 2), (s = z), (z |= 4))
          try {
            fl(e, t, n)
          } finally {
            ;((z = s), (k.p = a), (O.T = r))
          }
        }
        ;((du = 1), Gu(), Ku(), qu())
      }
    }
    function Gu() {
      if (du === 1) {
        du = 0
        var e = fu,
          t = pu,
          n = (t.flags & 13878) != 0
        if (t.subtreeFlags & 13878 || n) {
          ;((n = O.T), (O.T = null))
          var r = k.p
          k.p = 2
          var i = z
          z |= 4
          try {
            wl(t, e)
            var a = Gd,
              o = Mr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange
            if (o !== s && s && s.ownerDocument && jr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Nr(s)) {
                var l = c.start,
                  u = c.end
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)))
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m)
                    !p.extend && h > g && ((o = g), (g = h), (h = o))
                    var _ = Ar(s, h),
                      v = Ar(s, g)
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange()
                      ;(y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)))
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop })
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s]
                ;((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top))
              }
            }
            ;((up = !!Wd), (Gd = Wd = null))
          } finally {
            ;((z = i), (k.p = r), (O.T = n))
          }
        }
        ;((e.current = t), (du = 2))
      }
    }
    function Ku() {
      if (du === 2) {
        du = 0
        var e = fu,
          t = pu,
          n = (t.flags & 8772) != 0
        if (t.subtreeFlags & 8772 || n) {
          ;((n = O.T), (O.T = null))
          var r = k.p
          k.p = 2
          var i = z
          z |= 4
          try {
            pl(e, t.alternate, t)
          } finally {
            ;((z = i), (k.p = r), (O.T = n))
          }
        }
        du = 3
      }
    }
    function qu() {
      if (du === 4 || du === 3) {
        ;((du = 0), Me())
        var e = fu,
          t = pu,
          n = mu,
          r = _u
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (du = 5)
          : ((du = 0), (pu = fu = null), Ju(e, e.pendingLanes))
        var i = e.pendingLanes
        if (
          (i === 0 && (uu = null),
          lt(n),
          (t = t.stateNode),
          Ue && typeof Ue.onCommitFiberRoot == `function`)
        )
          try {
            Ue.onCommitFiberRoot(He, t, void 0, (t.current.flags & 128) == 128)
          } catch {}
        if (r !== null) {
          ;((t = O.T), (i = k.p), (k.p = 2), (O.T = null))
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o]
              a(s.value, { componentStack: s.stack })
            }
          } finally {
            ;((O.T = t), (k.p = i))
          }
        }
        ;(mu & 3 && Yu(),
          ud(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === yu ? vu++ : ((vu = 0), (yu = e))) : (vu = 0),
          dd(0, !1))
      }
    }
    function Ju(e, t) {
      ;(e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ma(t)))
    }
    function Yu() {
      return (Gu(), Ku(), qu(), Xu())
    }
    function Xu() {
      if (du !== 5) return !1
      var e = fu,
        t = hu
      hu = 0
      var n = lt(mu),
        r = O.T,
        a = k.p
      try {
        ;((k.p = 32 > n ? 32 : n), (O.T = null), (n = gu), (gu = null))
        var o = fu,
          s = mu
        if (((du = 0), (pu = fu = null), (mu = 0), z & 6)) throw Error(i(331))
        var c = z
        if (
          ((z |= 4),
          Vl(o.current),
          Nl(o, o.current, s, n),
          (z = c),
          dd(0, !1),
          Ue && typeof Ue.onPostCommitFiberRoot == `function`)
        )
          try {
            Ue.onPostCommitFiberRoot(He, o)
          } catch {}
        return !0
      } finally {
        ;((k.p = a), (O.T = r), Ju(e, t))
      }
    }
    function Zu(e, t, n) {
      ;((t = Ci(n, t)),
        (t = ic(e.stateNode, t, 2)),
        (e = Ya(e, t, 2)),
        e !== null && (rt(e, 2), ud(e)))
    }
    function W(e, t, n) {
      if (e.tag === 3) Zu(e, e, n)
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Zu(t, e, n)
            break
          } else if (t.tag === 1) {
            var r = t.stateNode
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (uu === null || !uu.has(r)))
            ) {
              ;((e = Ci(n, e)),
                (n = ac(2)),
                (r = Ya(t, n, 2)),
                r !== null && (oc(n, r, t, e), rt(r, 2), ud(r)))
              break
            }
          }
          t = t.return
        }
    }
    function Qu(e, t, n) {
      var r = e.pingCache
      if (r === null) {
        r = e.pingCache = new Gl()
        var i = new Set()
        r.set(t, i)
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)))
      i.has(n) || ((Yl = !0), i.add(n), (e = $u.bind(null, e, t, n)), t.then(e, e))
    }
    function $u(e, t, n) {
      var r = e.pingCache
      ;(r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        B === e &&
          (H & n) === n &&
          (Zl === 4 || (Zl === 3 && (H & 62914560) === H && 300 > Ne() - ou)
            ? !(z & 2) && ku(e, 0)
            : (eu |= n),
          nu === H && (nu = 0)),
        ud(e))
    }
    function ed(e, t) {
      ;(t === 0 && (t = j()), (e = ci(e, t)), e !== null && (rt(e, t), ud(e)))
    }
    function td(e) {
      var t = e.memoizedState,
        n = 0
      ;(t !== null && (n = t.retryLane), ed(e, n))
    }
    function nd(e, t) {
      var n = 0
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState
          a !== null && (n = a.retryLane)
          break
        case 19:
          r = e.stateNode
          break
        case 22:
          r = e.stateNode._retryCache
          break
        default:
          throw Error(i(314))
      }
      ;(r !== null && r.delete(t), ed(e, n))
    }
    function rd(e, t) {
      return ke(e, t)
    }
    var id = null,
      ad = null,
      od = !1,
      sd = !1,
      cd = !1,
      ld = 0
    function ud(e) {
      ;(e !== ad && e.next === null && (ad === null ? (id = ad = e) : (ad = ad.next = e)),
        (sd = !0),
        od || ((od = !0), _d()))
    }
    function dd(e, t) {
      if (!cd && sd) {
        cd = !0
        do
          for (var n = !1, r = id; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes
                if (i === 0) var a = 0
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes
                  ;((a = (1 << (31 - Ge(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0))
                }
                a !== 0 && ((n = !0), gd(r, a))
              } else
                ((a = H),
                  (a = $e(
                    r,
                    r === B ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1
                  )),
                  !(a & 3) || et(r, a) || ((n = !0), gd(r, a)))
            r = r.next
          }
        while (n)
        cd = !1
      }
    }
    function fd() {
      pd()
    }
    function pd() {
      sd = od = !1
      var e = 0
      ld !== 0 && Zd() && (e = ld)
      for (var t = Ne(), n = null, r = id; r !== null; ) {
        var i = r.next,
          a = md(r, t)
        ;(a === 0
          ? ((r.next = null), n === null ? (id = i) : (n.next = i), i === null && (ad = n))
          : ((n = r), (e !== 0 || a & 3) && (sd = !0)),
          (r = i))
      }
      ;((du !== 0 && du !== 5) || dd(e, !1), ld !== 0 && (ld = 0))
    }
    function md(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ge(a),
          s = 1 << o,
          c = i[o]
        ;(c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = tt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s))
      }
      if (
        ((t = B),
        (n = H),
        (n = $e(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (U === 2 || U === 9)) || e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ae(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        )
      if (!(n & 3) || et(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t
        switch ((r !== null && Ae(r), lt(n))) {
          case 2:
          case 8:
            n = Ie
            break
          case 32:
            n = Le
            break
          case 268435456:
            n = ze
            break
          default:
            n = Le
        }
        return (
          (r = hd.bind(null, e)),
          (n = ke(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        )
      }
      return (
        r !== null && r !== null && Ae(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      )
    }
    function hd(e, t) {
      if (du !== 0 && du !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null)
      var n = e.callbackNode
      if (Yu() && e.callbackNode !== n) return null
      var r = H
      return (
        (r = $e(e, e === B ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (Cu(e, r, t),
            md(e, Ne()),
            e.callbackNode != null && e.callbackNode === n ? hd.bind(null, e) : null)
      )
    }
    function gd(e, t) {
      if (Yu()) return null
      Cu(e, t, !0)
    }
    function _d() {
      tf(function () {
        z & 6 ? ke(Fe, fd) : pd()
      })
    }
    function vd() {
      if (ld === 0) {
        var e = _a
        ;(e === 0 && ((e = Ye), (Ye <<= 1), !(Ye & 261888) && (Ye = 256)), (ld = e))
      }
      return ld
    }
    function yd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : rn(`` + e)
    }
    function bd(e, t) {
      var n = t.ownerDocument.createElement(`input`)
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      )
    }
    function xd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = yd((i[mt] || null).action),
          o = r.submitter
        o &&
          ((t = (t = o[mt] || null) ? yd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)))
        var s = new En(`action`, `action`, null, r, i)
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (ld !== 0) {
                    var e = o ? bd(i, o) : new FormData(i)
                    As(n, { pending: !0, data: e, method: i.method, action: a }, null, e)
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? bd(i, o) : new FormData(i)),
                    As(n, { pending: !0, data: e, method: i.method, action: a }, a, e))
              },
              currentTarget: i,
            },
          ],
        })
      }
    }
    for (var Sd = 0; Sd < $r.length; Sd++) {
      var Cd = $r[Sd]
      ei(Cd.toLowerCase(), `on` + (Cd[0].toUpperCase() + Cd.slice(1)))
    }
    ;(ei(Gr, `onAnimationEnd`),
      ei(Kr, `onAnimationIteration`),
      ei(qr, `onAnimationStart`),
      ei(`dblclick`, `onDoubleClick`),
      ei(`focusin`, `onFocus`),
      ei(`focusout`, `onBlur`),
      ei(Jr, `onTransitionRun`),
      ei(Yr, `onTransitionStart`),
      ei(Xr, `onTransitionCancel`),
      ei(Zr, `onTransitionEnd`),
      At(`onMouseEnter`, [`mouseout`, `mouseover`]),
      At(`onMouseLeave`, [`mouseout`, `mouseover`]),
      At(`onPointerEnter`, [`pointerout`, `pointerover`]),
      At(`onPointerLeave`, [`pointerout`, `pointerover`]),
      kt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `)
      ),
      kt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `
        )
      ),
      kt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      kt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      kt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `)
      ),
      kt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)
      ))
    var wd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      Td = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(wd)
      )
    function Ed(e, t) {
      t = (t & 4) != 0
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event
        r = r.listeners
        a: {
          var a = void 0
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a
              ;((a = s), (i.currentTarget = l))
              try {
                a(i)
              } catch (e) {
                ti(e)
              }
              ;((i.currentTarget = null), (a = c))
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a
              ;((a = s), (i.currentTarget = l))
              try {
                a(i)
              } catch (e) {
                ti(e)
              }
              ;((i.currentTarget = null), (a = c))
            }
        }
      }
    }
    function G(e, t) {
      var n = t[gt]
      n === void 0 && (n = t[gt] = new Set())
      var r = e + `__bubble`
      n.has(r) || (Ad(t, e, 2, !1), n.add(r))
    }
    function Dd(e, t, n) {
      var r = 0
      ;(t && (r |= 4), Ad(n, e, r, t))
    }
    var Od = `_reactListening` + Math.random().toString(36).slice(2)
    function kd(e) {
      if (!e[Od]) {
        ;((e[Od] = !0),
          Dt.forEach(function (t) {
            t !== `selectionchange` && (Td.has(t) || Dd(t, !1, e), Dd(t, !0, e))
          }))
        var t = e.nodeType === 9 ? e : e.ownerDocument
        t === null || t[Od] || ((t[Od] = !0), Dd(`selectionchange`, !1, t))
      }
    }
    function Ad(e, t, n, r) {
      switch (_p(t)) {
        case 2:
          var i = dp
          break
        case 8:
          i = fp
          break
        default:
          i = pp
      }
      ;((n = i.bind(null, t, n, e)),
        (i = void 0),
        !hn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }))
    }
    function K(e, t, n, r, i) {
      var a = r
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return
          var s = r.tag
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo
            if (c === i) break
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return
                s = s.return
              }
            for (; c !== null; ) {
              if (((s = St(c)), s === null)) return
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s
                continue a
              }
              c = c.parentNode
            }
          }
          r = r.return
        }
      fn(function () {
        var r = a,
          i = sn(n),
          s = []
        a: {
          var c = Qr.get(e)
          if (c !== void 0) {
            var l = En,
              u = e
            switch (e) {
              case `keypress`:
                if (xn(n) === 0) break a
              case `keydown`:
              case `keyup`:
                l = Wn
                break
              case `focusin`:
                ;((u = `focus`), (l = Fn))
                break
              case `focusout`:
                ;((u = `blur`), (l = Fn))
                break
              case `beforeblur`:
              case `afterblur`:
                l = Fn
                break
              case `click`:
                if (n.button === 2) break a
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Nn
                break
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Pn
                break
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Kn
                break
              case Gr:
              case Kr:
              case qr:
                l = In
                break
              case Zr:
                l = qn
                break
              case `scroll`:
              case `scrollend`:
                l = On
                break
              case `wheel`:
                l = Jn
                break
              case `copy`:
              case `cut`:
              case `paste`:
                l = Ln
                break
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Gn
                break
              case `toggle`:
              case `beforetoggle`:
                l = Yn
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c
            d = []
            for (var m = r, h; m !== null; ) {
              var g = m
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = pn(m, p)), g != null && d.push(jd(m, g, h))),
                f)
              )
                break
              m = m.return
            }
            0 < d.length && ((c = new l(c, u, null, n, i)), s.push({ event: c, listeners: d }))
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c && n !== on && (u = n.relatedTarget || n.fromElement) && (St(u) || u[ht]))
            )
              break a
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? St(u) : null),
                  u !== null &&
                    ((f = o(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Nn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Gn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? c : wt(l)),
                (h = u == null ? c : wt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                St(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Nd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++
                  g = 0
                  for (var _ = m; _; _ = d(_)) g++
                  for (; 0 < h - g; ) ((p = d(p)), h--)
                  for (; 0 < g - h; ) ((m = d(m)), g--)
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p
                      break b
                    }
                    ;((p = d(p)), (m = d(m)))
                  }
                  d = null
                }
              else d = null
              ;(l !== null && Pd(s, c, l, d, !1), u !== null && f !== null && Pd(s, f, u, d, !0))
            }
          }
          a: {
            if (
              ((c = r ? wt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = hr
            else if (lr(c))
              if (gr) v = Tr
              else {
                v = Cr
                var y = Sr
              }
            else
              ((l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && en(r.elementType) && (v = hr)
                  : (v = wr))
            if ((v &&= v(e, r))) {
              ur(s, v, n, i)
              break a
            }
            ;(y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Kt(c, `number`, c.value))
          }
          switch (((y = r ? wt(r) : window), e)) {
            case `focusin`:
              ;(lr(y) || y.contentEditable === `true`) && ((Fr = y), (Ir = r), (Lr = null))
              break
            case `focusout`:
              Lr = Ir = Fr = null
              break
            case `mousedown`:
              Rr = !0
              break
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ;((Rr = !1), zr(s, n, i))
              break
            case `selectionchange`:
              if (Pr) break
            case `keydown`:
            case `keyup`:
              zr(s, n, i)
          }
          var b
          if (Zn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`
                  break b
                case `compositionend`:
                  x = `onCompositionEnd`
                  break b
                case `compositionupdate`:
                  x = `onCompositionUpdate`
                  break b
              }
              x = void 0
            }
          else
            ar
              ? rr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`)
          ;(x &&
            (er &&
              n.locale !== `ko` &&
              (ar || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && ar && (b = bn())
                : ((_n = i), (vn = `value` in _n ? _n.value : _n.textContent), (ar = !0))),
            (y = Md(r, x)),
            0 < y.length &&
              ((x = new Rn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = ir(n)), b !== null && (x.data = b)))),
            (b = $n ? or(e, n) : sr(e, n)) &&
              ((x = Md(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Rn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            xd(s, e, r, n, i))
        }
        Ed(s, t)
      })
    }
    function jd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n }
    }
    function Md(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = pn(e, n)),
            i != null && r.unshift(jd(e, i, a)),
            (i = pn(e, t)),
            i != null && r.push(jd(e, i, a))),
          e.tag === 3)
        )
          return r
        e = e.return
      }
      return []
    }
    function Nd(e) {
      if (e === null) return null
      do e = e.return
      while (e && e.tag !== 5 && e.tag !== 27)
      return e || null
    }
    function Pd(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode
        if (((s = s.tag), c !== null && c === r)) break
        ;((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = pn(n, a)), l != null && o.unshift(jd(n, l, c)))
            : i || ((l = pn(n, a)), l != null && o.push(jd(n, l, c)))),
          (n = n.return))
      }
      o.length !== 0 && e.push({ event: t, listeners: o })
    }
    var Fd = /\r\n?/g,
      Id = /\u0000|\uFFFD/g
    function Ld(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Fd,
          `
`
        )
        .replace(Id, ``)
    }
    function Rd(e, t) {
      return ((t = Ld(t)), Ld(e) === t)
    }
    function q(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Xt(e, `` + r)
          break
        case `className`:
          Ft(e, `class`, r)
          break
        case `tabIndex`:
          Ft(e, `tabindex`, r)
          break
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Ft(e, n, r)
          break
        case `style`:
          $t(e, r, o)
          break
        case `data`:
          if (t !== `object`) {
            Ft(e, `data`, r)
            break
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n)
            break
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n)
            break
          }
          ;((r = rn(`` + r)), e.setAttribute(n, r))
          break
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`
            )
            break
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && q(e, t, `name`, a.name, a, null),
                  q(e, t, `formEncType`, a.formEncType, a, null),
                  q(e, t, `formMethod`, a.formMethod, a, null),
                  q(e, t, `formTarget`, a.formTarget, a, null))
                : (q(e, t, `encType`, a.encType, a, null),
                  q(e, t, `method`, a.method, a, null),
                  q(e, t, `target`, a.target, a, null)))
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n)
            break
          }
          ;((r = rn(`` + r)), e.setAttribute(n, r))
          break
        case `onClick`:
          r != null && (e.onclick = an)
          break
        case `onScroll`:
          r != null && G(`scroll`, e)
          break
        case `onScrollEnd`:
          r != null && G(`scrollend`, e)
          break
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60))
              e.innerHTML = n
            }
          }
          break
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`
          break
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`
          break
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break
        case `autoFocus`:
          break
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`)
            break
          }
          ;((n = rn(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n))
          break
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n)
          break
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n)
          break
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n)
          break
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n)
          break
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r)
          break
        case `popover`:
          ;(G(`beforetoggle`, e), G(`toggle`, e), Pt(e, `popover`, r))
          break
        case `xlinkActuate`:
          N(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r)
          break
        case `xlinkArcrole`:
          N(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r)
          break
        case `xlinkRole`:
          N(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r)
          break
        case `xlinkShow`:
          N(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r)
          break
        case `xlinkTitle`:
          N(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r)
          break
        case `xlinkType`:
          N(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r)
          break
        case `xmlBase`:
          N(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r)
          break
        case `xmlLang`:
          N(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r)
          break
        case `xmlSpace`:
          N(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r)
          break
        case `is`:
          Pt(e, `is`, r)
          break
        case `innerText`:
        case `textContent`:
          break
        default:
          ;(!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = tn.get(n) || n), Pt(e, n, r))
      }
    }
    function zd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          $t(e, r, o)
          break
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60))
              e.innerHTML = n
            }
          }
          break
        case `children`:
          typeof r == `string`
            ? Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Xt(e, `` + r)
          break
        case `onScroll`:
          r != null && G(`scroll`, e)
          break
        case `onScrollEnd`:
          r != null && G(`scrollend`, e)
          break
        case `onClick`:
          r != null && (e.onclick = an)
          break
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break
        case `innerText`:
        case `textContent`:
          break
        default:
          if (!Ot.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[mt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                ;(typeof o != `function` &&
                  o !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a))
                break a
              }
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Pt(e, n, r)
            }
      }
    }
    function Bd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break
        case `img`:
          ;(G(`error`, e), G(`load`, e))
          var r = !1,
            a = !1,
            o
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o]
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0
                    break
                  case `srcSet`:
                    a = !0
                    break
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t))
                  default:
                    q(e, t, o, s, n, null)
                }
            }
          ;(a && q(e, t, `srcSet`, n.srcSet, n, null), r && q(e, t, `src`, n.src, n, null))
          return
        case `input`:
          G(`invalid`, e)
          var c = (o = s = a = null),
            l = null,
            u = null
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r]
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d
                    break
                  case `type`:
                    s = d
                    break
                  case `checked`:
                    l = d
                    break
                  case `defaultChecked`:
                    u = d
                    break
                  case `value`:
                    o = d
                    break
                  case `defaultValue`:
                    c = d
                    break
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t))
                    break
                  default:
                    q(e, t, r, d, n, null)
                }
            }
          Gt(e, o, c, l, u, s, a, !1)
          return
        case `select`:
          for (a in (G(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c
                  break
                case `defaultValue`:
                  s = c
                  break
                case `multiple`:
                  r = c
                default:
                  q(e, t, a, c, n, null)
              }
          ;((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && qt(e, !!r, n, !0) : qt(e, !!r, t, !1))
          return
        case `textarea`:
          for (s in (G(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c
                  break
                case `defaultValue`:
                  a = c
                  break
                case `children`:
                  o = c
                  break
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91))
                  break
                default:
                  q(e, t, s, c, n, null)
              }
          Yt(e, r, a, o)
          return
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`
                  break
                default:
                  q(e, t, l, r, n, null)
              }
          return
        case `dialog`:
          ;(G(`beforetoggle`, e), G(`toggle`, e), G(`cancel`, e), G(`close`, e))
          break
        case `iframe`:
        case `object`:
          G(`load`, e)
          break
        case `video`:
        case `audio`:
          for (r = 0; r < wd.length; r++) G(wd[r], e)
          break
        case `image`:
          ;(G(`error`, e), G(`load`, e))
          break
        case `details`:
          G(`toggle`, e)
          break
        case `embed`:
        case `source`:
        case `link`:
          ;(G(`error`, e), G(`load`, e))
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t))
                default:
                  q(e, t, u, r, n, null)
              }
          return
        default:
          if (en(t)) {
            for (d in n)
              n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && zd(e, t, d, r, n, void 0))
            return
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && q(e, t, c, r, n, null))
    }
    function Vd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null
          for (m in n) {
            var f = n[m]
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break
                case `value`:
                  break
                case `defaultValue`:
                  l = f
                default:
                  r.hasOwnProperty(m) || q(e, t, m, null, r, f)
              }
          }
          for (var p in r) {
            var m = r[p]
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m
                  break
                case `name`:
                  a = m
                  break
                case `checked`:
                  u = m
                  break
                case `defaultChecked`:
                  d = m
                  break
                case `value`:
                  s = m
                  break
                case `defaultValue`:
                  c = m
                  break
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t))
                  break
                default:
                  m !== f && q(e, t, p, m, r, f)
              }
          }
          Wt(e, s, c, l, u, d, o, a)
          return
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break
                case `multiple`:
                  m = l
                default:
                  r.hasOwnProperty(o) || q(e, t, o, null, r, l)
              }
          for (a in r)
            if (((o = r[a]), (l = n[a]), r.hasOwnProperty(a) && (o != null || l != null)))
              switch (a) {
                case `value`:
                  p = o
                  break
                case `defaultValue`:
                  c = o
                  break
                case `multiple`:
                  s = o
                default:
                  o !== l && q(e, t, a, o, r, l)
              }
          ;((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? qt(e, !!n, n ? [] : ``, !1) : qt(e, !!n, t, !0))
              : qt(e, !!n, p, !1))
          return
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((a = n[c]), n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)))
              switch (c) {
                case `value`:
                  break
                case `children`:
                  break
                default:
                  q(e, t, c, null, r, a)
              }
          for (s in r)
            if (((a = r[s]), (o = n[s]), r.hasOwnProperty(s) && (a != null || o != null)))
              switch (s) {
                case `value`:
                  p = a
                  break
                case `defaultValue`:
                  m = a
                  break
                case `children`:
                  break
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91))
                  break
                default:
                  a !== o && q(e, t, s, a, r, o)
              }
          Jt(e, p, m)
          return
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1
                  break
                default:
                  q(e, t, h, null, r, p)
              }
          for (l in r)
            if (
              ((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`
                  break
                default:
                  q(e, t, l, p, r, m)
              }
          return
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && q(e, t, g, null, r, p))
          for (u in r)
            if (
              ((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t))
                  break
                default:
                  q(e, t, u, p, r, m)
              }
          return
        default:
          if (en(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  zd(e, t, _, void 0, r, p))
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  zd(e, t, d, p, r, m))
            return
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && q(e, t, v, null, r, p))
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || q(e, t, f, p, r, m))
    }
    function Hd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0
        default:
          return !1
      }
    }
    function Ud() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration
          if (a && s && Hd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime
              if (l > s) break
              var u = c.transferSize,
                d = c.initiatorType
              u && Hd(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))))
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break
          }
        }
        if (0 < e) return t / e / 1e6
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5
    }
    var Wd = null,
      Gd = null
    function Kd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument
    }
    function qd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1
        case `http://www.w3.org/1998/Math/MathML`:
          return 2
        default:
          return 0
      }
    }
    function Jd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1
          case `math`:
            return 2
          default:
            return 0
        }
      return e === 1 && t === `foreignObject` ? 0 : e
    }
    function Yd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      )
    }
    var Xd = null
    function Zd() {
      var e = window.event
      return e && e.type === `popstate` ? (e === Xd ? !1 : ((Xd = e), !0)) : ((Xd = null), !1)
    }
    var Qd = typeof setTimeout == `function` ? setTimeout : void 0,
      $d = typeof clearTimeout == `function` ? clearTimeout : void 0,
      ef = typeof Promise == `function` ? Promise : void 0,
      tf =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : ef === void 0
            ? Qd
            : function (e) {
                return ef.resolve(null).then(e).catch(nf)
              }
    function nf(e) {
      setTimeout(function () {
        throw e
      })
    }
    function rf(e) {
      return e === `head`
    }
    function af(e, t) {
      var n = t,
        r = 0
      do {
        var i = n.nextSibling
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              ;(e.removeChild(i), Ip(t))
              return
            }
            r--
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++
          else if (n === `html`) vf(e.ownerDocument.documentElement)
          else if (n === `head`) {
            ;((n = e.ownerDocument.head), vf(n))
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName
              ;(a[bt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o))
            }
          } else n === `body` && vf(e.ownerDocument.body)
        n = i
      } while (n)
      Ip(t)
    }
    function of(e, t) {
      var n = e
      e = 0
      do {
        var r = n.nextSibling
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break
            e--
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++
        n = r
      } while (n)
    }
    function sf(e) {
      var t = e.firstChild
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            ;(sf(n), xt(n))
            continue
          case `SCRIPT`:
          case `STYLE`:
            continue
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue
        }
        e.removeChild(n)
      }
    }
    function cf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e
          } else return e
        else if (!e[bt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break
              return e
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break
              return e
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break
              return e
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break
              return e
            default:
              return e
          }
        if (((e = mf(e.nextSibling)), e === null)) break
      }
      return null
    }
    function lf(e, t, n) {
      if (t === ``) return null
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = mf(e.nextSibling)), e === null)
        )
          return null
      return e
    }
    function uf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = mf(e.nextSibling)), e === null)
        )
          return null
      return e
    }
    function df(e) {
      return e.data === `$?` || e.data === `$~`
    }
    function ff(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
    }
    function pf(e, t) {
      var n = e.ownerDocument
      if (e.data === `$~`) e._reactRetry = t
      else if (e.data !== `$?` || n.readyState !== `loading`) t()
      else {
        var r = function () {
          ;(t(), n.removeEventListener(`DOMContentLoaded`, r))
        }
        ;(n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r))
      }
    }
    function mf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break
          if (t === `/$` || t === `/&`) return null
        }
      }
      return e
    }
    var hf = null
    function gf(e) {
      e = e.nextSibling
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === `/$` || n === `/&`) {
            if (t === 0) return mf(e.nextSibling)
            t--
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++
        }
        e = e.nextSibling
      }
      return null
    }
    function _f(e) {
      e = e.previousSibling
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e
            t--
          } else (n !== `/$` && n !== `/&`) || t++
        }
        e = e.previousSibling
      }
      return null
    }
    function J(e, t, n) {
      switch (((t = Kd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452))
          return e
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453))
          return e
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454))
          return e
        default:
          throw Error(i(451))
      }
    }
    function vf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
      xt(e)
    }
    var yf = new Map(),
      Y = new Set()
    function X(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument
    }
    var bf = k.d
    k.d = { f: xf, r: Sf, D: Tf, C: Ef, L: Df, m: Of, X: Af, S: kf, M: jf }
    function xf() {
      var e = bf.f(),
        t = Du()
      return e || t
    }
    function Sf(e) {
      var t = Ct(e)
      t !== null && t.tag === 5 && t.type === `form` ? Ms(t) : bf.r(e)
    }
    var Cf = typeof document > `u` ? null : document
    function wf(e, t, n) {
      var r = Cf
      if (r && typeof t == `string` && t) {
        var i = Ut(t)
        ;((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          Y.has(i) ||
            (Y.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Bd(t, `link`, e), Et(t), r.head.appendChild(t))))
      }
    }
    function Tf(e) {
      ;(bf.D(e), wf(`dns-prefetch`, e, null))
    }
    function Ef(e, t) {
      ;(bf.C(e, t), wf(`preconnect`, e, t))
    }
    function Df(e, t, n) {
      bf.L(e, t, n)
      var r = Cf
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Ut(t) + `"]`
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Ut(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Ut(n.imageSizes) + `"]`))
          : (i += `[href="` + Ut(e) + `"]`)
        var a = i
        switch (t) {
          case `style`:
            a = Nf(e)
            break
          case `script`:
            a = Lf(e)
        }
        yf.has(a) ||
          ((e = f(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n
          )),
          yf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Pf(a))) ||
            (t === `script` && r.querySelector(Rf(a))) ||
            ((t = r.createElement(`link`)), Bd(t, `link`, e), Et(t), r.head.appendChild(t)))
      }
    }
    function Of(e, t) {
      bf.m(e, t)
      var n = Cf
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Ut(r) + `"][href="` + Ut(e) + `"]`,
          a = i
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Lf(e)
        }
        if (
          !yf.has(a) &&
          ((e = f({ rel: `modulepreload`, href: e }, t)), yf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Rf(a))) return
          }
          ;((r = n.createElement(`link`)), Bd(r, `link`, e), Et(r), n.head.appendChild(r))
        }
      }
    }
    function kf(e, t, n) {
      bf.S(e, t, n)
      var r = Cf
      if (r && e) {
        var i = Tt(r).hoistableStyles,
          a = Nf(e)
        t ||= `default`
        var o = i.get(a)
        if (!o) {
          var s = { loading: 0, preload: null }
          if ((o = r.querySelector(Pf(a)))) s.loading = 5
          else {
            ;((e = f({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = yf.get(a)) && Vf(e, n))
            var c = (o = r.createElement(`link`))
            ;(Et(c),
              Bd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ;((c.onload = e), (c.onerror = t))
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2
              }),
              (s.loading |= 4),
              Bf(o, t, r))
          }
          ;((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o))
        }
      }
    }
    function Af(e, t) {
      bf.X(e, t)
      var n = Cf
      if (n && e) {
        var r = Tt(n).hoistableScripts,
          i = Lf(e),
          a = r.get(i)
        a ||
          ((a = n.querySelector(Rf(i))),
          a ||
            ((e = f({ src: e, async: !0 }, t)),
            (t = yf.get(i)) && Hf(e, t),
            (a = n.createElement(`script`)),
            Et(a),
            Bd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a))
      }
    }
    function jf(e, t) {
      bf.M(e, t)
      var n = Cf
      if (n && e) {
        var r = Tt(n).hoistableScripts,
          i = Lf(e),
          a = r.get(i)
        a ||
          ((a = n.querySelector(Rf(i))),
          a ||
            ((e = f({ src: e, async: !0, type: `module` }, t)),
            (t = yf.get(i)) && Hf(e, t),
            (a = n.createElement(`script`)),
            Et(a),
            Bd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a))
      }
    }
    function Mf(e, t, n, r) {
      var a = (a = he.current) ? X(a) : null
      if (!a) throw Error(i(446))
      switch (e) {
        case `meta`:
        case `title`:
          return null
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Nf(n.href)),
              (n = Tt(a).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null }
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Nf(n.href)
            var o = Tt(a).hoistableStyles,
              s = o.get(e)
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Pf(e))) && !o._p && ((s.instance = o), (s.state.loading = 5)),
                yf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  yf.set(e, n),
                  o || If(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``))
            return s
          }
          if (t && r !== null) throw Error(i(529, ``))
          return null
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((t = Lf(n)),
                (n = Tt(a).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          )
        default:
          throw Error(i(444, e))
      }
    }
    function Nf(e) {
      return `href="` + Ut(e) + `"`
    }
    function Pf(e) {
      return `link[rel="stylesheet"][` + e + `]`
    }
    function Ff(e) {
      return f({}, e, { "data-precedence": e.precedence, precedence: null })
    }
    function If(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1)
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2)
          }),
          Bd(t, `link`, n),
          Et(t),
          e.head.appendChild(t))
    }
    function Lf(e) {
      return `[src="` + Ut(e) + `"]`
    }
    function Rf(e) {
      return `script[async]` + e
    }
    function zf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Ut(n.href) + `"]`)
            if (r) return ((t.instance = r), Et(r), r)
            var a = f({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            })
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Et(r),
              Bd(r, `style`, a),
              Bf(r, n.precedence, e),
              (t.instance = r)
            )
          case `stylesheet`:
            a = Nf(n.href)
            var o = e.querySelector(Pf(a))
            if (o) return ((t.state.loading |= 4), (t.instance = o), Et(o), o)
            ;((r = Ff(n)),
              (a = yf.get(a)) && Vf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Et(o))
            var s = o
            return (
              (s._p = new Promise(function (e, t) {
                ;((s.onload = e), (s.onerror = t))
              })),
              Bd(o, `link`, r),
              (t.state.loading |= 4),
              Bf(o, n.precedence, e),
              (t.instance = o)
            )
          case `script`:
            return (
              (o = Lf(n.src)),
              (a = e.querySelector(Rf(o)))
                ? ((t.instance = a), Et(a), a)
                : ((r = n),
                  (a = yf.get(o)) && ((r = f({}, n)), Hf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Et(a),
                  Bd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            )
          case `void`:
            return null
          default:
            throw Error(i(443, t.type))
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Bf(r, n.precedence, e))
      return t.instance
    }
    function Bf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o]
        if (s.dataset.precedence === t) a = s
        else if (a !== i) break
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild))
    }
    function Vf(e, t) {
      ;((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title))
    }
    function Hf(e, t) {
      ;((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity))
    }
    var Uf = null
    function Wf(e, t, n) {
      if (Uf === null) {
        var r = new Map(),
          i = (Uf = new Map())
        i.set(n, r)
      } else ((i = Uf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)))
      if (r.has(e)) return r
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i]
        if (
          !(a[bt] || a[pt] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``
          o = e + o
          var s = r.get(o)
          s ? s.push(a) : r.set(o, [a])
        }
      }
      return r
    }
    function Gf(e, t, n) {
      ;((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null))
    }
    function Kf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1
      switch (e) {
        case `meta`:
        case `title`:
          return !0
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break
          return !0
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break
          switch (t.rel) {
            case `stylesheet`:
              return ((e = t.disabled), typeof t.precedence == `string` && e == null)
            default:
              return !0
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0
      }
      return !1
    }
    function qf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3))
    }
    function Jf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Nf(r.href),
            a = t.querySelector(Pf(i))
          if (a) {
            ;((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Zf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Et(a))
            return
          }
          ;((a = t.ownerDocument || t),
            (r = Ff(r)),
            (i = yf.get(i)) && Vf(r, i),
            (a = a.createElement(`link`)),
            Et(a))
          var o = a
          ;((o._p = new Promise(function (e, t) {
            ;((o.onload = e), (o.onerror = t))
          })),
            Bd(a, `link`, r),
            (n.instance = a))
        }
        ;(e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Zf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)))
      }
    }
    var Yf = 0
    function Xf(e, t) {
      return (
        e.stylesheets && e.count === 0 && $f(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && $f(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend
                  ;((e.unsuspend = null), t())
                }
              }, 6e4 + t)
              0 < e.imgBytes && Yf === 0 && (Yf = 62500 * Ud())
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && $f(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend
                    ;((e.unsuspend = null), t())
                  }
                },
                (e.imgBytes > Yf ? 50 : 800) + t
              )
              return (
                (e.unsuspend = n),
                function () {
                  ;((e.unsuspend = null), clearTimeout(r), clearTimeout(i))
                }
              )
            }
          : null
      )
    }
    function Zf() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) $f(this, this.stylesheets)
        else if (this.unsuspend) {
          var e = this.unsuspend
          ;((this.unsuspend = null), e())
        }
      }
    }
    var Qf = null
    function $f(e, t) {
      ;((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, (Qf = new Map()), t.forEach(ep, e), (Qf = null), Zf.call(e)))
    }
    function ep(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Qf.get(e)
        if (n) var r = n.get(null)
        else {
          ;((n = new Map()), Qf.set(e, n))
          for (
            var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a]
            ;(o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o))
          }
          r && n.set(null, r)
        }
        ;((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Zf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4))
      }
    }
    var tp = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: ce,
      _currentValue2: ce,
      _threadCount: 0,
    }
    function np(e, t, n, r, i, a, o, s, c) {
      ;((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = nt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = nt(0)),
        (this.hiddenUpdates = nt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()))
    }
    function rp(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new np(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = pi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = pa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ka(a),
        e
      )
    }
    function ip(e) {
      return e ? ((e = di), e) : di
    }
    function ap(e, t, n, r, i, a) {
      ;((i = ip(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ja(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ya(e, r, t)),
        n !== null && (Su(n, e, t), Xa(n, e, t)))
    }
    function op(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane
        e.retryLane = n !== 0 && n < t ? n : t
      }
    }
    function sp(e, t) {
      ;(op(e, t), (e = e.alternate) && op(e, t))
    }
    function cp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ci(e, 67108864)
        ;(t !== null && Su(t, e, 67108864), sp(e, 67108864))
      }
    }
    function lp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = bu()
        t = ct(t)
        var n = ci(e, t)
        ;(n !== null && Su(n, e, t), sp(e, t))
      }
    }
    var up = !0
    function dp(e, t, n, r) {
      var i = O.T
      O.T = null
      var a = k.p
      try {
        ;((k.p = 2), pp(e, t, n, r))
      } finally {
        ;((k.p = a), (O.T = i))
      }
    }
    function fp(e, t, n, r) {
      var i = O.T
      O.T = null
      var a = k.p
      try {
        ;((k.p = 8), pp(e, t, n, r))
      } finally {
        ;((k.p = a), (O.T = i))
      }
    }
    function pp(e, t, n, r) {
      if (up) {
        var i = mp(r)
        if (i === null) (K(e, t, r, hp, n), Ep(e, r))
        else if (Op(i, e, t, n, r)) r.stopPropagation()
        else if ((Ep(e, r), t & 4 && -1 < Tp.indexOf(e))) {
          for (; i !== null; ) {
            var a = Ct(i)
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = Qe(a.pendingLanes)
                    if (o !== 0) {
                      var s = a
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ge(o))
                        ;((s.entanglements[1] |= c), (o &= ~c))
                      }
                      ;(ud(a), !(z & 6) && ((cu = Ne() + 500), dd(0, !1)))
                    }
                  }
                  break
                case 31:
                case 13:
                  ;((s = ci(a, 2)), s !== null && Su(s, a, 2), Du(), sp(a, 2))
              }
            if (((a = mp(r)), a === null && K(e, t, r, hp, n), a === i)) break
            i = a
          }
          i !== null && r.stopPropagation()
        } else K(e, t, r, null, n)
      }
    }
    function mp(e) {
      return ((e = sn(e)), gp(e))
    }
    var hp = null
    function gp(e) {
      if (((hp = null), (e = St(e)), e !== null)) {
        var t = o(e)
        if (t === null) e = null
        else {
          var n = t.tag
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e
            e = null
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e
            e = null
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null
            e = null
          } else t !== e && (e = null)
        }
      }
      return ((hp = e), null)
    }
    function _p(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8
        case `message`:
          switch (Pe()) {
            case Fe:
              return 2
            case Ie:
              return 8
            case Le:
            case Re:
              return 32
            case ze:
              return 268435456
            default:
              return 32
          }
        default:
          return 32
      }
    }
    var vp = !1,
      yp = null,
      bp = null,
      xp = null,
      Sp = new Map(),
      Cp = new Map(),
      wp = [],
      Tp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `
        )
    function Ep(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          yp = null
          break
        case `dragenter`:
        case `dragleave`:
          bp = null
          break
        case `mouseover`:
        case `mouseout`:
          xp = null
          break
        case `pointerover`:
        case `pointerout`:
          Sp.delete(t.pointerId)
          break
        case `gotpointercapture`:
        case `lostpointercapture`:
          Cp.delete(t.pointerId)
      }
    }
    function Dp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Ct(t)), t !== null && cp(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e)
    }
    function Op(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((yp = Dp(yp, e, t, n, r, i)), !0)
        case `dragenter`:
          return ((bp = Dp(bp, e, t, n, r, i)), !0)
        case `mouseover`:
          return ((xp = Dp(xp, e, t, n, r, i)), !0)
        case `pointerover`:
          var a = i.pointerId
          return (Sp.set(a, Dp(Sp.get(a) || null, e, t, n, r, i)), !0)
        case `gotpointercapture`:
          return ((a = i.pointerId), Cp.set(a, Dp(Cp.get(a) || null, e, t, n, r, i)), !0)
      }
      return !1
    }
    function kp(e) {
      var t = St(e.target)
      if (t !== null) {
        var n = o(t)
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ;((e.blockedOn = t),
                dt(e.priority, function () {
                  lp(n)
                }))
              return
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ;((e.blockedOn = t),
                dt(e.priority, function () {
                  lp(n)
                }))
              return
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
            return
          }
        }
      }
      e.blockedOn = null
    }
    function Ap(e) {
      if (e.blockedOn !== null) return !1
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = mp(e.nativeEvent)
        if (n === null) {
          n = e.nativeEvent
          var r = new n.constructor(n.type, n)
          ;((on = r), n.target.dispatchEvent(r), (on = null))
        } else return ((t = Ct(n)), t !== null && cp(t), (e.blockedOn = n), !1)
        t.shift()
      }
      return !0
    }
    function jp(e, t, n) {
      Ap(e) && n.delete(t)
    }
    function Mp() {
      ;((vp = !1),
        yp !== null && Ap(yp) && (yp = null),
        bp !== null && Ap(bp) && (bp = null),
        xp !== null && Ap(xp) && (xp = null),
        Sp.forEach(jp),
        Cp.forEach(jp))
    }
    function Np(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        vp || ((vp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, Mp)))
    }
    var Pp = null
    function Fp(e) {
      Pp !== e &&
        ((Pp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Pp === e && (Pp = null)
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2]
            if (typeof r != `function`) {
              if (gp(r || n) === null) continue
              break
            }
            var a = Ct(n)
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              As(a, { pending: !0, data: i, method: n.method, action: r }, r, i))
          }
        }))
    }
    function Ip(e) {
      function t(t) {
        return Np(t, e)
      }
      ;(yp !== null && Np(yp, e),
        bp !== null && Np(bp, e),
        xp !== null && Np(xp, e),
        Sp.forEach(t),
        Cp.forEach(t))
      for (var n = 0; n < wp.length; n++) {
        var r = wp[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
      for (; 0 < wp.length && ((n = wp[0]), n.blockedOn === null); )
        (kp(n), n.blockedOn === null && wp.shift())
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[mt] || null
          if (typeof a == `function`) o || Fp(n)
          else if (o) {
            var s = null
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[mt] || null))) s = o.formAction
              else if (gp(i) !== null) continue
            } else s = o.action
            ;(typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Fp(n))
          }
        }
    }
    function Lp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e)
              })
            },
            focusReset: `manual`,
            scroll: `manual`,
          })
      }
      function t() {
        ;(i !== null && (i(), (i = null)), r || setTimeout(n, 20))
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            })
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ;((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)))
          }
        )
      }
    }
    function Rp(e) {
      this._internalRoot = e
    }
    ;((zp.prototype.render = Rp.prototype.render =
      function (e) {
        var t = this._internalRoot
        if (t === null) throw Error(i(409))
        var n = t.current
        ap(n, bu(), e, t, null, null)
      }),
      (zp.prototype.unmount = Rp.prototype.unmount =
        function () {
          var e = this._internalRoot
          if (e !== null) {
            this._internalRoot = null
            var t = e.containerInfo
            ;(ap(e.current, 2, null, e, null, null), Du(), (t[ht] = null))
          }
        }))
    function zp(e) {
      this._internalRoot = e
    }
    zp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = ut()
        e = { blockedOn: null, target: e, priority: t }
        for (var n = 0; n < wp.length && t !== 0 && t < wp[n].priority; n++);
        ;(wp.splice(n, 0, e), n === 0 && kp(e))
      }
    }
    var Bp = n.version
    if (Bp !== `19.2.4`) throw Error(i(527, Bp, `19.2.4`))
    k.findDOMNode = function (e) {
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)))
      return ((e = u(t)), (e = e === null ? null : d(e)), (e = e === null ? null : e.stateNode), e)
    }
    var Vp = {
      bundleType: 0,
      version: `19.2.4`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: O,
      reconcilerVersion: `19.2.4`,
    }
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Hp = __REACT_DEVTOOLS_GLOBAL_HOOK__
      if (!Hp.isDisabled && Hp.supportsFiber)
        try {
          ;((He = Hp.inject(Vp)), (Ue = Hp))
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299))
      var n = !1,
        r = ``,
        o = $s,
        s = ec,
        c = tc
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = rp(e, 1, !1, null, null, n, r, null, o, s, c, Lp)),
        (e[ht] = t.current),
        kd(e),
        new Rp(t)
      )
    }
  }),
  y = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (e) {
          console.error(e)
        }
    }
    ;(n(), (t.exports = v()))
  }),
  b = u(p(), 1),
  x = y(),
  S = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e
        if (!Object.is(i, t)) {
          let e = t
          ;((t = (r ?? (typeof i != `object` || !i)) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e)))
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a))
    return a
  },
  C = (e) => (e ? S(e) : S),
  w = (e) => e
function T(e, t = w) {
  let n = b.useSyncExternalStore(
    e.subscribe,
    b.useCallback(() => t(e.getState()), [e, t]),
    b.useCallback(() => t(e.getInitialState()), [e, t])
  )
  return (b.useDebugValue(n), n)
}
var E = (e) => {
    let t = C(e),
      n = (e) => T(t, e)
    return (Object.assign(n, t), n)
  },
  ee = (e) => (e ? E(e) : E),
  D = {
    planner: `idle`,
    researcher: `idle`,
    summarizer: `idle`,
    synthesizer: `idle`,
    orchestrator: `idle`,
  },
  te = ee((e, t) => ({
    sessionId: null,
    query: ``,
    events: [],
    subtopics: [],
    sources: {},
    reportChunks: [],
    agentStatuses: { ...D },
    isRunning: !1,
    sessions: [],
    setQuery: (t) => e({ query: t }),
    startSession: (t, n) =>
      e({
        sessionId: t,
        query: n,
        events: [],
        subtopics: [],
        sources: {},
        reportChunks: [],
        agentStatuses: { ...D },
        isRunning: !0,
      }),
    addEvent: (n) => {
      e((e) => ({ events: [...e.events, n] }))
      let { setAgentStatus: r } = t()
      switch (n.event) {
        case `PLAN_CREATED`:
          ;(e({ subtopics: n.data.subtopics ?? [] }),
            r(`planner`, `done`),
            r(`researcher`, `active`))
          break
        case `SOURCES_COLLECTED`: {
          let t = n.subtopic ?? `general`,
            r = n.data.sources ?? []
          e((e) => ({ sources: { ...e.sources, [t]: r } }))
          break
        }
        case `SUMMARY_DONE`:
          r(`summarizer`, `active`)
          break
        case `REPORT_CHUNK`: {
          let t = n.data.chunk ?? ``
          ;(e((e) => ({ reportChunks: [...e.reportChunks, t] })), r(`synthesizer`, `active`))
          break
        }
        case `REPORT_DONE`:
          ;(r(`synthesizer`, `done`), e({ isRunning: !1 }))
          break
        case `ERROR`:
          ;(r(n.agent, `error`), e({ isRunning: !1 }))
          break
      }
    },
    setAgentStatus: (t, n) => e((e) => ({ agentStatuses: { ...e.agentStatuses, [t]: n } })),
    setSessions: (t) => e({ sessions: t }),
    reset: () =>
      e({
        sessionId: null,
        events: [],
        subtopics: [],
        sources: {},
        reportChunks: [],
        agentStatuses: { ...D },
        isRunning: !1,
      }),
  })),
  ne = `http://localhost:8000`,
  re = `ws://localhost:8000`
async function ie(e) {
  let t = await fetch(`${ne}/api/research`, {
    method: `POST`,
    headers: { "Content-Type": `application/json` },
    body: JSON.stringify({ query: e }),
  })
  if (!t.ok) throw Error(`Failed to start research`)
  return t.json()
}
function ae(e, t) {
  let n = new WebSocket(`${re}/ws/${e}`)
  return (
    (n.onmessage = (e) => {
      try {
        t(JSON.parse(e.data))
      } catch {}
    }),
    n
  )
}
async function oe() {
  let e = await fetch(`${ne}/api/sessions`)
  return e.ok ? e.json() : []
}
async function se(e) {
  await fetch(`${ne}/api/sessions/${e}`, { method: `DELETE` })
}
var O = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`)
    function r(e, n, r) {
      var i = null
      if ((r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n))
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a])
      else r = n
      return ((n = r.ref), { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r })
    }
    ;((e.Fragment = n), (e.jsx = r), (e.jsxs = r))
  }),
  k = s((e, t) => {
    t.exports = O()
  })(),
  ce = [
    `What is the future of AI agents in healthcare?`,
    `How is quantum computing changing cryptography?`,
    `What are the economic impacts of renewable energy adoption?`,
    `How do large language models reason about code?`,
  ]
function le() {
  let { query: e, setQuery: t, startSession: n, addEvent: r, isRunning: i } = te(),
    [a, o] = (0, b.useState)(ce[0]),
    [s, c] = (0, b.useState)(null),
    l = (0, b.useRef)(null),
    u = (0, b.useRef)(0)
  ;(0, b.useEffect)(() => {
    let e = setInterval(() => {
      ;((u.current = (u.current + 1) % ce.length), o(ce[u.current]))
    }, 4e3)
    return () => clearInterval(e)
  }, [])
  async function d(t) {
    if ((t.preventDefault(), !(!e.trim() || i))) {
      ;(c(null), l.current?.close())
      try {
        let { session_id: t } = await ie(e)
        ;(n(t, e),
          (l.current = ae(t, (e) => {
            r(e)
          })))
      } catch {
        c(`Failed to connect. Is the backend running?`)
      }
    }
  }
  return (0, k.jsxs)(`form`, {
    onSubmit: d,
    className: `w-full`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `relative flex items-center rounded-lg border border-indigo-500/30 bg-black/40 backdrop-blur-sm focus-within:border-indigo-400/60 transition-colors`,
        children: [
          (0, k.jsx)(`span`, {
            className: `pl-4 text-indigo-400 font-mono text-sm select-none`,
            children: `▶`,
          }),
          (0, k.jsx)(`input`, {
            type: `text`,
            value: e,
            onChange: (e) => t(e.target.value),
            placeholder: a,
            disabled: i,
            className: `flex-1 bg-transparent px-3 py-4 text-white placeholder-zinc-600 font-mono text-sm outline-none disabled:opacity-50`,
          }),
          (0, k.jsx)(`button`, {
            type: `submit`,
            disabled: i || !e.trim(),
            className: `mr-2 px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs transition-colors`,
            children: i ? `RESEARCHING...` : `RESEARCH ▶`,
          }),
        ],
      }),
      s && (0, k.jsx)(`p`, { className: `mt-2 text-red-400 font-mono text-xs`, children: s }),
    ],
  })
}
var ue = (0, b.createContext)({})
function de(e) {
  let t = (0, b.useRef)(null)
  return (t.current === null && (t.current = e()), t.current)
}
var fe = typeof window < `u` ? b.useLayoutEffect : b.useEffect,
  A = (0, b.createContext)(null)
function pe(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function me(e, t) {
  let n = e.indexOf(t)
  n > -1 && e.splice(n, 1)
}
var he = (e, t, n) => (n > t ? t : n < e ? e : n),
  ge = {},
  _e = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
function ve(e) {
  return typeof e == `object` && !!e
}
var ye = (e) => /^0[^.\s]+$/u.test(e)
function be(e) {
  let t
  return () => (t === void 0 && (t = e()), t)
}
var xe = (e) => e,
  Se = (e, t) => (n) => t(e(n)),
  Ce = (...e) => e.reduce(Se),
  we = (e, t, n) => {
    let r = t - e
    return r === 0 ? 1 : (n - e) / r
  },
  Te = class {
    constructor() {
      this.subscriptions = []
    }
    add(e) {
      return (pe(this.subscriptions, e), () => me(this.subscriptions, e))
    }
    notify(e, t, n) {
      let r = this.subscriptions.length
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n)
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i]
            r && r(e, t, n)
          }
    }
    getSize() {
      return this.subscriptions.length
    }
    clear() {
      this.subscriptions.length = 0
    }
  },
  Ee = (e) => e * 1e3,
  De = (e) => e / 1e3
function Oe(e, t) {
  return t ? (1e3 / t) * e : 0
}
var ke = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Ae = 1e-7,
  je = 12
function Me(e, t, n, r, i) {
  let a,
    o,
    s = 0
  do ((o = t + (n - t) / 2), (a = ke(o, r, i) - e), a > 0 ? (n = o) : (t = o))
  while (Math.abs(a) > Ae && ++s < je)
  return o
}
function Ne(e, t, n, r) {
  if (e === t && n === r) return xe
  let i = (t) => Me(t, 0, 1, e, n)
  return (e) => (e === 0 || e === 1 ? e : ke(i(e), t, r))
}
var Pe = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Fe = (e) => (t) => 1 - e(1 - t),
  Ie = Ne(0.33, 1.53, 0.69, 0.99),
  Le = Fe(Ie),
  Re = Pe(Le),
  ze = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * Le(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  Be = (e) => 1 - Math.sin(Math.acos(e)),
  Ve = Fe(Be),
  He = Pe(Be),
  Ue = Ne(0.42, 0, 1, 1),
  We = Ne(0, 0, 0.58, 1),
  Ge = Ne(0.42, 0, 0.58, 1),
  Ke = (e) => Array.isArray(e) && typeof e[0] != `number`,
  qe = (e) => Array.isArray(e) && typeof e[0] == `number`,
  Je = {
    linear: xe,
    easeIn: Ue,
    easeInOut: Ge,
    easeOut: We,
    circIn: Be,
    circInOut: He,
    circOut: Ve,
    backIn: Le,
    backInOut: Re,
    backOut: Ie,
    anticipate: ze,
  },
  Ye = (e) => typeof e == `string`,
  Xe = (e) => {
    if (qe(e)) {
      e.length
      let [t, n, r, i] = e
      return Ne(t, n, r, i)
    } else if (Ye(e)) return (Je[e], `${e}`, Je[e])
    return e
  },
  Ze = [
    `setup`,
    `read`,
    `resolveKeyframes`,
    `preUpdate`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ],
  Qe = { value: null, addProjectionMetrics: null }
function $e(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    a = !1,
    o = new WeakSet(),
    s = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = 0
  function l(t) {
    ;(o.has(t) && (u.schedule(t), e()), c++, t(s))
  }
  let u = {
    schedule: (e, t = !1, a = !1) => {
      let s = a && i ? n : r
      return (t && o.add(e), s.add(e), e)
    },
    cancel: (e) => {
      ;(r.delete(e), o.delete(e))
    },
    process: (e) => {
      if (((s = e), i)) {
        a = !0
        return
      }
      i = !0
      let o = n
      ;((n = r),
        (r = o),
        n.forEach(l),
        t && Qe.value && Qe.value.frameloop[t].push(c),
        (c = 0),
        n.clear(),
        (i = !1),
        a && ((a = !1), u.process(e)))
    },
  }
  return u
}
var et = 40
function tt(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Ze.reduce((e, n) => ((e[n] = $e(a, t ? n : void 0)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = ge.useManualTiming,
        o = a ? i.timestamp : performance.now()
      ;((n = !1),
        a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, et), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)))
    },
    g = () => {
      ;((n = !0), (r = !0), i.isProcessing || e(h))
    }
  return {
    schedule: Ze.reduce((e, t) => {
      let r = o[t]
      return ((e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))), e)
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Ze.length; t++) o[Ze[t]].cancel(e)
    },
    state: i,
    steps: o,
  }
}
var {
    schedule: j,
    cancel: nt,
    state: rt,
    steps: it,
  } = tt(typeof requestAnimationFrame < `u` ? requestAnimationFrame : xe, !0),
  at
function ot() {
  at = void 0
}
var st = {
    now: () => (
      at === void 0 &&
        st.set(rt.isProcessing || ge.useManualTiming ? rt.timestamp : performance.now()),
      at
    ),
    set: (e) => {
      ;((at = e), queueMicrotask(ot))
    },
  },
  ct = { layout: 0, mainThread: 0, waapi: 0 },
  lt = (e) => (t) => typeof t == `string` && t.startsWith(e),
  ut = lt(`--`),
  dt = lt(`var(--`),
  ft = (e) => (dt(e) ? pt.test(e.split(`/*`)[0].trim()) : !1),
  pt = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
function mt(e) {
  return typeof e == `string` ? e.split(`/*`)[0].includes(`var(--`) : !1
}
var ht = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e },
  gt = { ...ht, transform: (e) => he(0, 1, e) },
  _t = { ...ht, default: 1 },
  vt = (e) => Math.round(e * 1e5) / 1e5,
  yt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
function bt(e) {
  return e == null
}
var xt =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  St = (e, t) => (n) =>
    !!(
      (typeof n == `string` && xt.test(n) && n.startsWith(e)) ||
      (t && !bt(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Ct = (e, t, n) => (r) => {
    if (typeof r != `string`) return r
    let [i, a, o, s] = r.match(yt)
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    }
  },
  wt = (e) => he(0, 255, e),
  Tt = { ...ht, transform: (e) => Math.round(wt(e)) },
  Et = {
    test: St(`rgb`, `red`),
    parse: Ct(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      Tt.transform(e) +
      `, ` +
      Tt.transform(t) +
      `, ` +
      Tt.transform(n) +
      `, ` +
      vt(gt.transform(r)) +
      `)`,
  }
function Dt(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  )
}
var Ot = { test: St(`#`), parse: Dt, transform: Et.transform },
  kt = (e) => ({
    test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  At = kt(`deg`),
  jt = kt(`%`),
  M = kt(`px`),
  Mt = kt(`vh`),
  Nt = kt(`vw`),
  Pt = { ...jt, parse: (e) => jt.parse(e) / 100, transform: (e) => jt.transform(e * 100) },
  Ft = {
    test: St(`hsl`, `hue`),
    parse: Ct(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      jt.transform(vt(t)) +
      `, ` +
      jt.transform(vt(n)) +
      `, ` +
      vt(gt.transform(r)) +
      `)`,
  },
  N = {
    test: (e) => Et.test(e) || Ot.test(e) || Ft.test(e),
    parse: (e) => (Et.test(e) ? Et.parse(e) : Ft.test(e) ? Ft.parse(e) : Ot.parse(e)),
    transform: (e) =>
      typeof e == `string` ? e : e.hasOwnProperty(`red`) ? Et.transform(e) : Ft.transform(e),
    getAnimatableNone: (e) => {
      let t = N.parse(e)
      return ((t.alpha = 0), N.transform(t))
    },
  },
  It =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
function Lt(e) {
  return (
    isNaN(e) && typeof e == `string` && (e.match(yt)?.length || 0) + (e.match(It)?.length || 0) > 0
  )
}
var Rt = `number`,
  zt = `color`,
  Bt = `var`,
  Vt = `var(`,
  Ht = "${}",
  Ut =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function Wt(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0
  return {
    values: n,
    split: t
      .replace(
        Ut,
        (e) => (
          N.test(e)
            ? (r.color.push(a), i.push(zt), n.push(N.parse(e)))
            : e.startsWith(Vt)
              ? (r.var.push(a), i.push(Bt), n.push(e))
              : (r.number.push(a), i.push(Rt), n.push(parseFloat(e))),
          ++a,
          Ht
        )
      )
      .split(Ht),
    indexes: r,
    types: i,
  }
}
function Gt(e) {
  return Wt(e).values
}
function Kt({ split: e, types: t }) {
  let n = e.length
  return (r) => {
    let i = ``
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a]
        e === Rt ? (i += vt(r[a])) : e === zt ? (i += N.transform(r[a])) : (i += r[a])
      }
    return i
  }
}
function qt(e) {
  return Kt(Wt(e))
}
var Jt = (e) => (typeof e == `number` ? 0 : N.test(e) ? N.getAnimatableNone(e) : e),
  Yt = (e, t) => (typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : Jt(e))
function Xt(e) {
  let t = Wt(e)
  return Kt(t)(t.values.map((e, n) => Yt(e, t.split[n])))
}
var Zt = { test: Lt, parse: Gt, createTransformer: qt, getAnimatableNone: Xt }
function Qt(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  )
}
function $t({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ;((e /= 360), (t /= 100), (n /= 100))
  let i = 0,
    a = 0,
    o = 0
  if (!t) i = a = o = n
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r
    ;((i = Qt(s, r, e + 1 / 3)), (a = Qt(s, r, e)), (o = Qt(s, r, e - 1 / 3)))
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  }
}
function en(e, t) {
  return (n) => (n > 0 ? t : e)
}
var tn = (e, t, n) => e + (t - e) * n,
  nn = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r
    return i < 0 ? 0 : Math.sqrt(i)
  },
  rn = [Ot, Et, Ft],
  an = (e) => rn.find((t) => t.test(e))
function on(e) {
  let t = an(e)
  if ((`${e}`, !t)) return !1
  let n = t.parse(e)
  return (t === Ft && (n = $t(n)), n)
}
var sn = (e, t) => {
    let n = on(e),
      r = on(t)
    if (!n || !r) return en(e, t)
    let i = { ...n }
    return (e) => (
      (i.red = nn(n.red, r.red, e)),
      (i.green = nn(n.green, r.green, e)),
      (i.blue = nn(n.blue, r.blue, e)),
      (i.alpha = tn(n.alpha, r.alpha, e)),
      Et.transform(i)
    )
  },
  cn = new Set([`none`, `hidden`])
function ln(e, t) {
  return cn.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e)
}
function un(e, t) {
  return (n) => tn(e, t, n)
}
function dn(e) {
  return typeof e == `number`
    ? un
    : typeof e == `string`
      ? ft(e)
        ? en
        : N.test(e)
          ? sn
          : hn
      : Array.isArray(e)
        ? fn
        : typeof e == `object`
          ? N.test(e)
            ? sn
            : pn
          : en
}
function fn(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => dn(e)(e, t[n]))
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e)
    return n
  }
}
function pn(e, t) {
  let n = { ...e, ...t },
    r = {}
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = dn(e[i])(e[i], t[i]))
  return (e) => {
    for (let t in r) n[t] = r[t](e)
    return n
  }
}
function mn(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 }
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]]
    ;((n[i] = e.values[o] ?? 0), r[a]++)
  }
  return n
}
var hn = (e, t) => {
  let n = Zt.createTransformer(t),
    r = Wt(e),
    i = Wt(t)
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (cn.has(e) && !i.values.length) || (cn.has(t) && !r.values.length)
      ? ln(e, t)
      : Ce(fn(mn(r, i), i.values), n)
    : (`${e}${t}`, en(e, t))
}
function gn(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? tn(e, t, n)
    : dn(e)(e, t)
}
var _n = (e) => {
    let t = ({ timestamp: t }) => e(t)
    return {
      start: (e = !0) => j.update(t, e),
      stop: () => nt(t),
      now: () => (rt.isProcessing ? rt.timestamp : st.now()),
    }
  },
  vn = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2)
    for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `
    return `linear(${r.substring(0, r.length - 2)})`
  },
  yn = 2e4
function bn(e) {
  let t = 0,
    n = e.next(t)
  for (; !n.done && t < 2e4; ) ((t += 50), (n = e.next(t)))
  return t >= 2e4 ? 1 / 0 : t
}
function xn(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(bn(r), yn)
  return { type: `keyframes`, ease: (e) => r.next(i * e).value / t, duration: De(i) }
}
var Sn = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
}
function Cn(e, t) {
  return e * Math.sqrt(1 - t * t)
}
var wn = 12
function Tn(e, t, n) {
  let r = n
  for (let n = 1; n < wn; n++) r -= e(r) / t(r)
  return r
}
var En = 0.001
function Dn({
  duration: e = Sn.duration,
  bounce: t = Sn.bounce,
  velocity: n = Sn.velocity,
  mass: r = Sn.mass,
}) {
  let i, a
  Sn.maxDuration
  let o = 1 - t
  ;((o = he(Sn.minDamping, Sn.maxDamping, o)),
    (e = he(Sn.minDuration, Sn.maxDuration, De(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = Cn(t, o),
            c = Math.exp(-i)
          return En - (a / s) * c
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Cn(t ** 2, o)
          return ((-i(t) + En > 0 ? -1 : 1) * ((a - s) * c)) / l
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1
          return -En + r * i
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))))
  let s = 5 / e,
    c = Tn(i, a, s)
  if (((e = Ee(e)), isNaN(c))) return { stiffness: Sn.stiffness, damping: Sn.damping, duration: e }
  {
    let t = c ** 2 * r
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e }
  }
}
var On = [`duration`, `bounce`],
  kn = [`stiffness`, `damping`, `mass`]
function An(e, t) {
  return t.some((t) => e[t] !== void 0)
}
function jn(e) {
  let t = {
    velocity: Sn.velocity,
    stiffness: Sn.stiffness,
    damping: Sn.damping,
    mass: Sn.mass,
    isResolvedFromDuration: !1,
    ...e,
  }
  if (!An(e, kn) && An(e, On))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * he(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i)
      t = { ...t, mass: Sn.mass, stiffness: i, damping: a }
    } else {
      let n = Dn({ ...e, velocity: 0 })
      ;((t = { ...t, ...n, mass: Sn.mass }), (t.isResolvedFromDuration = !0))
    }
  return t
}
function Mn(e = Sn.visualDuration, t = Sn.bounce) {
  let n = typeof e == `object` ? e : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = jn({ ...n, velocity: -De(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = De(Math.sqrt(c / u)),
    v = Math.abs(g) < 5
  ;((r ||= v ? Sn.restSpeed.granular : Sn.restSpeed.default),
    (i ||= v ? Sn.restDelta.granular : Sn.restDelta.default))
  let y, b, x, S, C, w
  if (h < 1)
    ((x = Cn(_, h)),
      (S = (m + h * _ * g) / x),
      (y = (e) => o - Math.exp(-h * _ * e) * (S * Math.sin(x * e) + g * Math.cos(x * e))),
      (C = h * _ * S + g * x),
      (w = h * _ * g - S * x),
      (b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e))))
  else if (h === 1) {
    y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e)
    let e = m + _ * g
    b = (t) => Math.exp(-_ * t) * (_ * e * t - m)
  } else {
    let e = _ * Math.sqrt(h * h - 1)
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300)
      return o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
    }
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e
    b = (t) => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300)
      return i * (n * Math.sinh(a) + r * Math.cosh(a))
    }
  }
  let T = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => Ee(b(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(x * e),
          a = Math.cos(x * e),
          c = o - t * (S * n + g * a),
          l = Ee(t * (C * n + w * a))
        return ((s.done = Math.abs(l) <= r && Math.abs(o - c) <= i), (s.value = s.done ? o : c), s)
      }
      let t = y(e)
      if (p) s.done = e >= d
      else {
        let n = Ee(b(e))
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i
      }
      return ((s.value = s.done ? o : t), s)
    },
    toString: () => {
      let e = Math.min(bn(T), yn),
        t = vn((t) => T.next(e * t).value, e, 30)
      return e + `ms ` + t
    },
    toTransition: () => {},
  }
  return T
}
Mn.applyToOptions = (e) => {
  let t = xn(e, 100, Mn)
  return ((e.ease = t.ease), (e.duration = Ee(t.duration)), (e.type = `keyframes`), e)
}
var Nn = 5
function Pn(e, t, n) {
  let r = Math.max(t - Nn, 0)
  return Oe(n - e(r), t - r)
}
function Fn({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g)
  _ !== g && (h = _ - d)
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e)
      ;((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n))
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Mn({
          keyframes: [f.value, m(f.value)],
          velocity: Pn(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })))
    }
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        )
      },
    }
  )
}
function In(e, t, n) {
  let r = [],
    i = n || ge.mix || gn,
    a = e.length - 1
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1])
    ;(t && (a = Ce(Array.isArray(t) ? t[n] || xe : t, a)), r.push(a))
  }
  return r
}
function Ln(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length
  if ((t.length, a === 1)) return () => t[0]
  if (a === 2 && t[0] === t[1]) return () => t[1]
  let o = e[0] === e[1]
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  let s = In(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0]
      let r = 0
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = we(e[r], e[r + 1], n)
      return s[r](i)
    }
  return n ? (t) => l(he(e[0], e[a - 1], t)) : l
}
function Rn(e, t) {
  let n = e[e.length - 1]
  for (let r = 1; r <= t; r++) {
    let i = we(0, t, r)
    e.push(tn(n, 1, i))
  }
}
function zn(e) {
  let t = [0]
  return (Rn(t, e.length - 1), t)
}
function Bn(e, t) {
  return e.map((e) => e * t)
}
function Vn(e, t) {
  return e.map(() => t || Ge).splice(0, e.length - 1)
}
function Hn({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = Ke(r) ? r.map(Xe) : Xe(r),
    a = { done: !1, value: t[0] },
    o = Ln(Bn(n && n.length === t.length ? n : zn(t), e), t, {
      ease: Array.isArray(i) ? i : Vn(t, i),
    })
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) }
}
var Un = (e) => e !== null
function Wn(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(Un),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1
  return !o || r === void 0 ? a[o] : r
}
var Gn = { decay: Fn, inertia: Fn, tween: Hn, keyframes: Hn, spring: Mn }
function Kn(e) {
  typeof e.type == `string` && (e.type = Gn[e.type])
}
var qn = class {
    constructor() {
      this.updateFinished()
    }
    get finished() {
      return this._finished
    }
    updateFinished() {
      this._finished = new Promise((e) => {
        this.resolve = e
      })
    }
    notifyFinished() {
      this.resolve()
    }
    then(e, t) {
      return this.finished.then(e, t)
    }
  },
  Jn = (e) => e / 100,
  Yn = class extends qn {
    constructor(e) {
      ;(super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: e } = this.options
          ;(e && e.updatedAt !== st.now() && this.tick(st.now()),
            (this.isStopped = !0),
            this.state !== `idle` && (this.teardown(), this.options.onStop?.()))
        }),
        ct.mainThread++,
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause())
    }
    initAnimation() {
      let { options: e } = this
      Kn(e)
      let { type: t = Hn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e,
        { keyframes: o } = e,
        s = t || Hn
      s !== Hn &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = Ce(Jn, gn(o[0], o[1]))), (o = [0, 100]))
      let c = s({ ...e, keyframes: o })
      ;(i === `mirror` &&
        (this.mirroredGenerator = s({ ...e, keyframes: [...o].reverse(), velocity: -a })),
        c.calculatedDuration === null && (c.calculatedDuration = bn(c)))
      let { calculatedDuration: l } = c
      ;((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c))
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed
      this.holdTime === null ? (this.currentTime = t) : (this.currentTime = this.holdTime)
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this
      if (this.startTime === null) return n.next(0)
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: m,
        finalKeyframe: h,
      } = this.options
      ;(this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e))
      let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        _ = this.playbackSpeed >= 0 ? g < 0 : g > r
      ;((this.currentTime = Math.max(g, 0)),
        this.state === `finished` && this.holdTime === null && (this.currentTime = r))
      let v = this.currentTime,
        y = n
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1
        ;(!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, u + 1)),
          t % 2 && (d === `reverse` ? ((n = 1 - n), f && (n -= f / o)) : d === `mirror` && (y = a)),
          (v = he(0, 1, n) * o))
      }
      let b
      ;(_ ? ((this.delayState.value = l[0]), (b = this.delayState)) : (b = y.next(v)),
        i && !_ && (b.value = i(b.value)))
      let { done: x } = b
      !_ &&
        s !== null &&
        (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0)
      let S =
        this.holdTime === null && (this.state === `finished` || (this.state === `running` && x))
      return (
        S && p !== Fn && (b.value = Wn(l, this.options, h, this.speed)),
        m && m(b.value),
        S && this.finish(),
        b
      )
    }
    then(e, t) {
      return this.finished.then(e, t)
    }
    get duration() {
      return De(this.calculatedDuration)
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {}
      return this.duration + De(e)
    }
    get time() {
      return De(this.currentTime)
    }
    set time(e) {
      ;((e = Ee(e)),
        (this.currentTime = e),
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0), (this.state = `paused`), (this.holdTime = e), this.tick(e)))
    }
    getGeneratorVelocity() {
      let e = this.currentTime
      if (e <= 0) return this.options.velocity || 0
      if (this.generator.velocity) return this.generator.velocity(e)
      let t = this.generator.next(e).value
      return Pn((e) => this.generator.next(e).value, e, t)
    }
    get speed() {
      return this.playbackSpeed
    }
    set speed(e) {
      let t = this.playbackSpeed !== e
      ;(t && this.driver && this.updateTime(st.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = De(this.currentTime)))
    }
    play() {
      if (this.isStopped) return
      let { driver: e = _n, startTime: t } = this.options
      ;((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.())
      let n = this.driver.now()
      ;(this.state === `finished`
        ? (this.updateFinished(), (this.startTime = n))
        : this.holdTime === null
          ? (this.startTime ||= t ?? n)
          : (this.startTime = n - this.holdTime),
        this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start())
    }
    pause() {
      ;((this.state = `paused`), this.updateTime(st.now()), (this.holdTime = this.currentTime))
    }
    complete() {
      ;(this.state !== `running` && this.play(), (this.state = `finished`), (this.holdTime = null))
    }
    finish() {
      ;(this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        this.options.onComplete?.())
    }
    cancel() {
      ;((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.())
    }
    teardown() {
      ;((this.state = `idle`),
        this.stopDriver(),
        (this.startTime = this.holdTime = null),
        ct.mainThread--)
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0)
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0))
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`), (this.options.ease = `linear`), this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      )
    }
  }
function Xn(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
}
var Zn = (e) => (e * 180) / Math.PI,
  Qn = (e) => er(Zn(Math.atan2(e[1], e[0]))),
  $n = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Qn,
    rotateZ: Qn,
    skewX: (e) => Zn(Math.atan(e[1])),
    skewY: (e) => Zn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  er = (e) => ((e %= 360), e < 0 && (e += 360), e),
  tr = Qn,
  nr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  rr = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  ir = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: nr,
    scaleY: rr,
    scale: (e) => (nr(e) + rr(e)) / 2,
    rotateX: (e) => er(Zn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => er(Zn(Math.atan2(-e[2], e[0]))),
    rotateZ: tr,
    rotate: tr,
    skewX: (e) => Zn(Math.atan(e[4])),
    skewY: (e) => Zn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  }
function ar(e) {
  return +!!e.includes(`scale`)
}
function or(e, t) {
  if (!e || e === `none`) return ar(t)
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i
  if (n) ((r = ir), (i = n))
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u)
    ;((r = $n), (i = t))
  }
  if (!i) return ar(t)
  let a = r[t],
    o = i[1].split(`,`).map(cr)
  return typeof a == `function` ? a(o) : o[a]
}
var sr = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e)
  return or(n, t)
}
function cr(e) {
  return parseFloat(e.trim())
}
var lr = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  ur = new Set(lr),
  dr = (e) => e === ht || e === M,
  fr = new Set([`x`, `y`, `z`]),
  pr = lr.filter((e) => !fr.has(e))
function mr(e) {
  let t = []
  return (
    pr.forEach((n) => {
      let r = e.getValue(n)
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)))
    }),
    t
  )
}
var hr = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r }) => {
    let i = e.max - e.min
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n)
  },
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r }) => {
    let i = e.max - e.min
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n)
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => or(t, `x`),
  y: (e, { transform: t }) => or(t, `y`),
}
;((hr.translateX = hr.x), (hr.translateY = hr.y))
var gr = new Set(),
  _r = !1,
  vr = !1,
  yr = !1
function br() {
  if (vr) {
    let e = Array.from(gr).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map()
    ;(t.forEach((e) => {
      let t = mr(e)
      t.length && (n.set(e, t), e.render())
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render()
        let t = n.get(e)
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n)
          })
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY)
      }))
  }
  ;((vr = !1), (_r = !1), gr.forEach((e) => e.complete(yr)), gr.clear())
}
function xr() {
  gr.forEach((e) => {
    ;(e.readKeyframes(), e.needsMeasurement && (vr = !0))
  })
}
function Sr() {
  ;((yr = !0), xr(), br(), (yr = !1))
}
var Cr = class {
    constructor(e, t, n, r, i, a = !1) {
      ;((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a))
    }
    scheduleResolve() {
      ;((this.state = `scheduled`),
        this.isAsync
          ? (gr.add(this), _r || ((_r = !0), j.read(xr), j.resolveKeyframes(br)))
          : (this.readKeyframes(), this.complete()))
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1]
        if (i !== void 0) e[0] = i
        else if (n && t) {
          let r = n.readValue(t, a)
          r != null && (e[0] = r)
        }
        ;(e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]))
      }
      Xn(e)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ;((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        gr.delete(this))
    }
    cancel() {
      this.state === `scheduled` && (gr.delete(this), (this.state = `pending`))
    }
    resume() {
      this.state === `pending` && this.scheduleResolve()
    }
  },
  wr = (e) => e.startsWith(`--`)
function Tr(e, t, n) {
  wr(t) ? e.style.setProperty(t, n) : (e.style[t] = n)
}
var Er = {}
function Dr(e, t) {
  let n = be(e)
  return () => Er[t] ?? n()
}
var Or = Dr(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  kr = Dr(() => {
    try {
      document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` })
    } catch {
      return !1
    }
    return !0
  }, `linearEasing`),
  Ar = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  jr = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Ar([0, 0.65, 0.55, 1]),
    circOut: Ar([0.55, 0, 1, 0.45]),
    backIn: Ar([0.31, 0.01, 0.66, -0.59]),
    backOut: Ar([0.33, 1.53, 0.69, 0.99]),
  }
function Mr(e, t) {
  if (e)
    return typeof e == `function`
      ? kr()
        ? vn(e, t)
        : `ease-out`
      : qe(e)
        ? Ar(e)
        : Array.isArray(e)
          ? e.map((e) => Mr(e, t) || jr.easeOut)
          : jr[e]
}
function Nr(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0
) {
  let u = { [t]: n }
  c && (u.offset = c)
  let d = Mr(s, i)
  ;(Array.isArray(d) && (u.easing = d), Qe.value && ct.waapi++)
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  }
  l && (f.pseudoElement = l)
  let p = e.animate(u, f)
  return (
    Qe.value &&
      p.finished.finally(() => {
        ct.waapi--
      }),
    p
  )
}
function Pr(e) {
  return typeof e == `function` && `applyToOptions` in e
}
function Fr({ type: e, ...t }) {
  return Pr(e) && kr() ? e.applyToOptions(t) : ((t.duration ??= 300), (t.ease ??= `easeOut`), t)
}
var Ir = class extends qn {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e
      ;((this.isPseudoElement = !!i), (this.allowFlatten = a), (this.options = e), e.type)
      let c = Fr(e)
      ;((this.animation = Nr(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = Wn(r, this.options, o, this.speed)
            ;(this.updateMotionValue && this.updateMotionValue(e),
              Tr(t, n, e),
              this.animation.cancel())
          }
          ;(s?.(), this.notifyFinished())
        }))
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished())
    }
    pause() {
      this.animation.pause()
    }
    complete() {
      this.animation.finish?.()
    }
    cancel() {
      try {
        this.animation.cancel()
      } catch {}
    }
    stop() {
      if (this.isStopped) return
      this.isStopped = !0
      let { state: e } = this
      e === `idle` ||
        e === `finished` ||
        (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
      let e = this.options?.element
      !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.()
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0
      return De(Number(e))
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {}
      return this.duration + De(e)
    }
    get time() {
      return De(Number(this.animation.currentTime) || 0)
    }
    set time(e) {
      let t = this.finishedTime !== null
      ;((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = Ee(e)),
        t && this.animation.pause())
    }
    get speed() {
      return this.animation.playbackRate
    }
    set speed(e) {
      ;(e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e))
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e
    }
    attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
      return (
        this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }),
        (this.animation.onfinish = null),
        e && Or()
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            n && (this.animation.rangeEnd = n),
            xe)
          : r(this)
      )
    }
  },
  Lr = { anticipate: ze, backInOut: Re, circInOut: He }
function Rr(e) {
  return e in Lr
}
function zr(e) {
  typeof e.ease == `string` && Rr(e.ease) && (e.ease = Lr[e.ease])
}
var Br = 10,
  Vr = class extends Ir {
    constructor(e) {
      ;(zr(e),
        Kn(e),
        super(e),
        e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
        (this.options = e))
    }
    updateMotionValue(e) {
      let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options
      if (!t) return
      if (e !== void 0) {
        t.set(e)
        return
      }
      let o = new Yn({ ...a, autoplay: !1 }),
        s = Math.max(Br, st.now() - this.startTime),
        c = he(0, Br, s - Br),
        l = o.sample(s).value,
        { name: u } = this.options
      ;(i && u && Tr(i, u, l),
        t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
        o.stop())
    }
  },
  Hr = (e, t) =>
    t === `zIndex`
      ? !1
      : !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (Zt.test(e) || e === `0`) && !e.startsWith(`url(`))
        )
function Ur(e) {
  let t = e[0]
  if (e.length === 1) return !0
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function Wr(e, t, n, r) {
  let i = e[0]
  if (i === null) return !1
  if (t === `display` || t === `visibility`) return !0
  let a = e[e.length - 1],
    o = Hr(i, t),
    s = Hr(a, t)
  return (`${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : Ur(e) || ((n === `spring` || Pr(n)) && r))
}
function Gr(e) {
  ;((e.duration = 0), (e.type = `keyframes`))
}
var Kr = new Set([`opacity`, `clipPath`, `filter`, `transform`]),
  qr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/
function Jr(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && qr.test(e[t])) return !0
  return !1
}
var Yr = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  Xr = be(() => Object.hasOwnProperty.call(Element.prototype, `animate`))
function Zr(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e
  if (!(t?.owner?.current instanceof HTMLElement)) return !1
  let { onUpdate: c, transformTemplate: l } = t.owner.getProps()
  return (
    Xr() &&
    n &&
    (Kr.has(n) || (Yr.has(n) && Jr(s))) &&
    (n !== `transform` || !l) &&
    !c &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  )
}
var Qr = 40,
  $r = class extends qn {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      keyframes: o,
      name: s,
      motionValue: c,
      element: l,
      ...u
    }) {
      ;(super(),
        (this.stop = () => {
          ;(this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel())
        }),
        (this.createdAt = st.now()))
      let d = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          name: s,
          motionValue: c,
          element: l,
          ...u,
        },
        f = l?.KeyframeResolver || Cr
      ;((this.keyframeResolver = new f(
        o,
        (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
        s,
        c,
        l
      )),
        this.keyframeResolver?.scheduleResolve())
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0
      let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n
      this.resolvedAt = st.now()
      let u = !0
      Wr(e, i, a, o) ||
        ((u = !1),
        (ge.instantAnimations || !s) && l?.(Wn(e, n, t)),
        (e[0] = e[e.length - 1]),
        Gr(n),
        (n.repeat = 0))
      let d = {
          startTime: r
            ? this.resolvedAt && this.resolvedAt - this.createdAt > Qr
              ? this.resolvedAt
              : this.createdAt
            : void 0,
          finalKeyframe: t,
          ...n,
          keyframes: e,
        },
        f = u && !c && Zr(d),
        p = d.motionValue?.owner?.current,
        m
      if (f)
        try {
          m = new Vr({ ...d, element: p })
        } catch {
          m = new Yn(d)
        }
      else m = new Yn(d)
      ;(m.finished
        .then(() => {
          this.notifyFinished()
        })
        .catch(xe),
        (this.pendingTimeline &&=
          ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)), void 0)),
        (this._animation = m))
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {})
    }
    get animation() {
      return (this._animation || (this.keyframeResolver?.resume(), Sr()), this._animation)
    }
    get duration() {
      return this.animation.duration
    }
    get iterationDuration() {
      return this.animation.iterationDuration
    }
    get time() {
      return this.animation.time
    }
    set time(e) {
      this.animation.time = e
    }
    get speed() {
      return this.animation.speed
    }
    get state() {
      return this.animation.state
    }
    set speed(e) {
      this.animation.speed = e
    }
    get startTime() {
      return this.animation.startTime
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      )
    }
    play() {
      this.animation.play()
    }
    pause() {
      this.animation.pause()
    }
    complete() {
      this.animation.complete()
    }
    cancel() {
      ;(this._animation && this.animation.cancel(), this.keyframeResolver?.cancel())
    }
  }
function ei(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r
}
var ti = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function ni(e) {
  let t = ti.exec(e)
  if (!t) return [,]
  let [, n, r, i] = t
  return [`--${n ?? r}`, i]
}
function ri(e, t, n = 1) {
  ;`${e}`
  let [r, i] = ni(e)
  if (!r) return
  let a = window.getComputedStyle(t).getPropertyValue(r)
  if (a) {
    let e = a.trim()
    return _e(e) ? parseFloat(e) : e
  }
  return ft(i) ? ri(i, t, n + 1) : i
}
var ii = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  ai = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  oi = { type: `keyframes`, duration: 0.8 },
  si = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ci = (e, { keyframes: t }) =>
    t.length > 2 ? oi : ur.has(e) ? (e.startsWith(`scale`) ? ai(t[1]) : ii) : si
function li(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e
    return { ...t, ...r }
  }
  return e
}
function ui(e, t) {
  let n = e?.[t] ?? e?.default ?? e
  return n === e ? n : li(n, e)
}
var di = new Set([
  `when`,
  `delay`,
  `delayChildren`,
  `staggerChildren`,
  `staggerDirection`,
  `repeat`,
  `repeatType`,
  `repeatDelay`,
  `from`,
  `elapsed`,
])
function fi(e) {
  for (let t in e) if (!di.has(t)) return !0
  return !1
}
var pi =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = ui(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r
    l -= Ee(c)
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        ;(t.set(e), s.onUpdate && s.onUpdate(e))
      },
      onComplete: () => {
        ;(o(), s.onComplete && s.onComplete())
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    }
    ;(fi(s) || Object.assign(u, ci(e, u)),
      (u.duration &&= Ee(u.duration)),
      (u.repeatDelay &&= Ee(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from))
    let d = !1
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (Gr(u), u.delay === 0 && (d = !0)),
      (ge.instantAnimations || ge.skipAnimations || i?.shouldSkipAnimations) &&
        ((d = !0), Gr(u), (u.delay = 0)),
      (u.allowFlatten = !s.type && !s.ease),
      d && !a && t.get() !== void 0)
    ) {
      let e = Wn(u.keyframes, s)
      if (e !== void 0) {
        j.update(() => {
          ;(u.onUpdate(e), u.onComplete())
        })
        return
      }
    }
    return s.isSync ? new Yn(u) : new $r(u)
  }
function mi(e) {
  let t = [{}, {}]
  return (
    e?.values.forEach((e, n) => {
      ;((t[0][n] = e.get()), (t[1][n] = e.getVelocity()))
    }),
    t
  )
}
function hi(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = mi(r)
    t = t(n === void 0 ? e.custom : n, i, a)
  }
  if ((typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`)) {
    let [i, a] = mi(r)
    t = t(n === void 0 ? e.custom : n, i, a)
  }
  return t
}
function gi(e, t, n) {
  let r = e.getProps()
  return hi(r, t, n === void 0 ? r.custom : n, e)
}
var _i = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...lr]),
  vi = 30,
  yi = (e) => !isNaN(parseFloat(e)),
  bi = { current: void 0 },
  xi = class {
    constructor(e, t = {}) {
      ;((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = st.now()
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (let e of this.dependents) e.dirty()
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner))
    }
    setCurrent(e) {
      ;((this.current = e),
        (this.updatedAt = st.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = yi(this.current)))
    }
    setPrevFrameValue(e = this.current) {
      ;((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt))
    }
    onChange(e) {
      return this.on(`change`, e)
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Te())
      let n = this.events[e].add(t)
      return e === `change`
        ? () => {
            ;(n(),
              j.read(() => {
                this.events.change.getSize() || this.stop()
              }))
          }
        : n
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear()
    }
    attach(e, t) {
      ;((this.passiveEffect = e), (this.stopPassiveEffect = t))
    }
    set(e) {
      this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
    }
    setWithVelocity(e, t, n) {
      ;(this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n))
    }
    jump(e, t = !0) {
      ;(this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect())
    }
    dirty() {
      this.events.change?.notify(this.current)
    }
    addDependent(e) {
      ;((this.dependents ||= new Set()), this.dependents.add(e))
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e)
    }
    get() {
      return (bi.current && bi.current.push(this), this.current)
    }
    getPrevious() {
      return this.prev
    }
    getVelocity() {
      let e = st.now()
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > vi)
        return 0
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, vi)
      return Oe(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ;((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify())
        }).then(() => {
          ;(this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation())
        })
      )
    }
    stop() {
      ;(this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation())
    }
    isAnimating() {
      return !!this.animation
    }
    clearAnimation() {
      delete this.animation
    }
    destroy() {
      ;(this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect())
    }
  }
function Si(e, t) {
  return new xi(e, t)
}
var Ci = (e) => Array.isArray(e)
function wi(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Si(n))
}
function Ti(e) {
  return Ci(e) ? e[e.length - 1] || 0 : e
}
function Ei(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = gi(e, t) || {}
  i = { ...i, ...n }
  for (let t in i) wi(e, t, Ti(i[t]))
}
var Di = (e) => !!(e && e.getVelocity)
function Oi(e) {
  return !!(Di(e) && e.add)
}
function ki(e, t) {
  let n = e.getValue(`willChange`)
  if (Oi(n)) return n.add(t)
  if (!n && ge.WillChange) {
    let n = new ge.WillChange(`auto`)
    ;(e.addValue(`willChange`, n), n.add(t))
  }
}
function Ai(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`)
}
var ji = `data-` + Ai(`framerAppearId`)
function Mi(e) {
  return e.props[ji]
}
function Ni({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0
  return ((t[n] = !1), r)
}
function Pi(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition()
  a = a ? li(a, c) : c
  let l = a?.reduceMotion
  r && (a = r)
  let u = [],
    d = i && e.animationState && e.animationState.getState()[i]
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t]
    if (i === void 0 || (d && Ni(d, t))) continue
    let o = { delay: n, ...ui(a || {}, t) },
      c = r.get()
    if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
      j.update(() => r.set(i))
      continue
    }
    let f = !1
    if (window.MotionHandoffAnimation) {
      let n = Mi(e)
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, j)
        e !== null && ((o.startTime = e), (f = !0))
      }
    }
    ki(e, t)
    let p = l ?? e.shouldReduceMotion
    r.start(pi(t, r, i, p && _i.has(t) ? { type: !1 } : o, e, f))
    let m = r.animation
    m && u.push(m)
  }
  if (o) {
    let t = () =>
      j.update(() => {
        o && Ei(e, o)
      })
    u.length ? Promise.all(u).then(t) : t()
  }
  return u
}
function Fi(e, t, n = {}) {
  let r = gi(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {}
  n.transitionOverride && (i = n.transitionOverride)
  let a = r ? () => Promise.all(Pi(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i
            return Ii(e, t, r, a, o, s, n)
          }
        : () => Promise.resolve(),
    { when: s } = i
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a]
    return e().then(() => t())
  } else return Promise.all([a(), o(n.delay)])
}
function Ii(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = []
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        Fi(c, t, {
          ...o,
          delay: n + (typeof r == `function` ? 0 : r) + ei(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t))
      ))
  return Promise.all(s)
}
function Li(e, t, n = {}) {
  e.notify(`AnimationStart`, t)
  let r
  if (Array.isArray(t)) {
    let i = t.map((t) => Fi(e, t, n))
    r = Promise.all(i)
  } else if (typeof t == `string`) r = Fi(e, t, n)
  else {
    let i = typeof t == `function` ? gi(e, t, n.custom) : t
    r = Promise.all(Pi(e, i, n))
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t)
  })
}
var Ri = { test: (e) => e === `auto`, parse: (e) => e },
  zi = (e) => (t) => t.test(e),
  P = [ht, M, jt, At, Nt, Mt, Ri],
  Bi = (e) => P.find(zi(e))
function Vi(e) {
  return typeof e == `number` ? e === 0 : e === null ? !0 : e === `none` || e === `0` || ye(e)
}
var Hi = new Set([`brightness`, `contrast`, `saturate`, `opacity`])
function Ui(e) {
  let [t, n] = e.slice(0, -1).split(`(`)
  if (t === `drop-shadow`) return e
  let [r] = n.match(yt) || []
  if (!r) return e
  let i = n.replace(r, ``),
    a = +!!Hi.has(t)
  return (r !== n && (a *= 100), t + `(` + a + i + `)`)
}
var Wi = /\b([a-z-]*)\(.*?\)/gu,
  Gi = {
    ...Zt,
    getAnimatableNone: (e) => {
      let t = e.match(Wi)
      return t ? t.map(Ui).join(` `) : e
    },
  },
  Ki = {
    ...Zt,
    getAnimatableNone: (e) => {
      let t = Zt.parse(e)
      return Zt.createTransformer(e)(
        t.map((e) => (typeof e == `number` ? 0 : typeof e == `object` ? { ...e, alpha: 1 } : e))
      )
    },
  },
  qi = { ...ht, transform: Math.round },
  Ji = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    inset: M,
    insetBlock: M,
    insetBlockStart: M,
    insetBlockEnd: M,
    insetInline: M,
    insetInlineStart: M,
    insetInlineEnd: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    paddingBlock: M,
    paddingBlockStart: M,
    paddingBlockEnd: M,
    paddingInline: M,
    paddingInlineStart: M,
    paddingInlineEnd: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    marginBlock: M,
    marginBlockStart: M,
    marginBlockEnd: M,
    marginInline: M,
    marginInlineStart: M,
    marginInlineEnd: M,
    fontSize: M,
    backgroundPositionX: M,
    backgroundPositionY: M,
    rotate: At,
    rotateX: At,
    rotateY: At,
    rotateZ: At,
    scale: _t,
    scaleX: _t,
    scaleY: _t,
    scaleZ: _t,
    skew: At,
    skewX: At,
    skewY: At,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: gt,
    originX: Pt,
    originY: Pt,
    originZ: M,
    zIndex: qi,
    fillOpacity: gt,
    strokeOpacity: gt,
    numOctaves: qi,
  },
  Yi = {
    ...Ji,
    color: N,
    backgroundColor: N,
    outlineColor: N,
    fill: N,
    stroke: N,
    borderColor: N,
    borderTopColor: N,
    borderRightColor: N,
    borderBottomColor: N,
    borderLeftColor: N,
    filter: Gi,
    WebkitFilter: Gi,
    mask: Ki,
    WebkitMask: Ki,
  },
  Xi = (e) => Yi[e],
  Zi = new Set([Gi, Ki])
function Qi(e, t) {
  let n = Xi(e)
  return (Zi.has(n) || (n = Zt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0)
}
var $i = new Set([`auto`, `none`, `0`])
function ea(e, t, n) {
  let r = 0,
    i
  for (; r < e.length && !i; ) {
    let t = e[r]
    ;(typeof t == `string` && !$i.has(t) && Wt(t).values.length && (i = e[r]), r++)
  }
  if (i && n) for (let r of t) e[r] = Qi(n, i)
}
var ta = class extends Cr {
  constructor(e, t, n, r, i) {
    super(e, t, n, r, i, !0)
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this
    if (!t || !t.current) return
    super.readKeyframes()
    for (let n = 0; n < e.length; n++) {
      let r = e[n]
      if (typeof r == `string` && ((r = r.trim()), ft(r))) {
        let i = ri(r, t.current)
        ;(i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r))
      }
    }
    if ((this.resolveNoneKeyframes(), !_i.has(n) || e.length !== 2)) return
    let [r, i] = e,
      a = Bi(r),
      o = Bi(i)
    if (mt(r) !== mt(i) && hr[n]) {
      this.needsMeasurement = !0
      return
    }
    if (a !== o)
      if (dr(a) && dr(o))
        for (let t = 0; t < e.length; t++) {
          let n = e[t]
          typeof n == `string` && (e[t] = parseFloat(n))
        }
      else hr[n] && (this.needsMeasurement = !0)
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = []
    for (let t = 0; t < e.length; t++) (e[t] === null || Vi(e[t])) && n.push(t)
    n.length && ea(e, n, t)
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this
    if (!e || !e.current) return
    ;(n === `height` && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = hr[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      (t[0] = this.measuredOrigin))
    let r = t[t.length - 1]
    r !== void 0 && e.getValue(n, r).jump(r, !1)
  }
  measureEndState() {
    let { element: e, name: t, unresolvedKeyframes: n } = this
    if (!e || !e.current) return
    let r = e.getValue(t)
    r && r.jump(this.measuredOrigin, !1)
    let i = n.length - 1,
      a = n[i]
    ;((n[i] = hr[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([t, n]) => {
          e.getValue(t).set(n)
        }),
      this.resolveNoneKeyframes())
  }
}
function na(e, t, n) {
  if (e == null) return []
  if (e instanceof EventTarget) return [e]
  if (typeof e == `string`) {
    let r = document
    t && (r = t.current)
    let i = n?.[e] ?? r.querySelectorAll(e)
    return i ? Array.from(i) : []
  }
  return Array.from(e).filter((e) => e != null)
}
var ra = (e, t) => (t && typeof e == `number` ? t.transform(e) : e)
function ia(e) {
  return ve(e) && `offsetHeight` in e && !(`ownerSVGElement` in e)
}
var { schedule: aa, cancel: oa } = tt(queueMicrotask, !1),
  sa = { x: !1, y: !1 }
function ca() {
  return sa.x || sa.y
}
function la(e) {
  return e === `x` || e === `y`
    ? sa[e]
      ? null
      : ((sa[e] = !0),
        () => {
          sa[e] = !1
        })
    : sa.x || sa.y
      ? null
      : ((sa.x = sa.y = !0),
        () => {
          sa.x = sa.y = !1
        })
}
function ua(e, t) {
  let n = na(e),
    r = new AbortController()
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()]
}
function da(e) {
  return !(e.pointerType === `touch` || ca())
}
function fa(e, t, n = {}) {
  let [r, i, a] = ua(e, n)
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u)
        },
        s = (e) => {
          ;((a &&= (a(e), void 0)), o())
        },
        c = (e) => {
          ;((n = !1),
            window.removeEventListener(`pointerup`, c),
            window.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)))
        },
        l = () => {
          ;((n = !0),
            window.addEventListener(`pointerup`, c, i),
            window.addEventListener(`pointercancel`, c, i))
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0
              return
            }
            s(e)
          }
        }
      ;(e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!da(n)) return
          r = !1
          let o = t(e, n)
          typeof o == `function` && ((a = o), e.addEventListener(`pointerleave`, u, i))
        },
        i
      ),
        e.addEventListener(`pointerdown`, l, i))
    }),
    a
  )
}
var pa = (e, t) => (t ? (e === t ? !0 : pa(e, t.parentElement)) : !1),
  ma = (e) =>
    e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1,
  ha = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`])
function ga(e) {
  return ha.has(e.tagName) || e.isContentEditable === !0
}
var _a = new Set([`INPUT`, `SELECT`, `TEXTAREA`])
function va(e) {
  return _a.has(e.tagName) || e.isContentEditable === !0
}
var ya = new WeakSet()
function ba(e) {
  return (t) => {
    t.key === `Enter` && e(t)
  }
}
function xa(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }))
}
var Sa = (e, t) => {
  let n = e.currentTarget
  if (!n) return
  let r = ba(() => {
    if (ya.has(n)) return
    xa(n, `down`)
    let e = ba(() => {
      xa(n, `up`)
    })
    ;(n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => xa(n, `cancel`), t))
  })
  ;(n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t))
}
function Ca(e) {
  return ma(e) && !ca()
}
var wa = new WeakSet()
function Ta(e, t, n = {}) {
  let [r, i, a] = ua(e, n),
    o = (e) => {
      let r = e.currentTarget
      if (!Ca(e) || wa.has(e)) return
      ;(ya.add(r), n.stopPropagation && wa.add(e))
      let a = t(r, e),
        o = (e, t) => {
          ;(window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            ya.has(r) && ya.delete(r),
            Ca(e) && typeof a == `function` && a(e, { success: t }))
        },
        s = (e) => {
          o(e, r === window || r === document || n.useGlobalTarget || pa(r, e.target))
        },
        c = (e) => {
          o(e, !1)
        }
      ;(window.addEventListener(`pointerup`, s, i), window.addEventListener(`pointercancel`, c, i))
    }
  return (
    r.forEach((e) => {
      ;((n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        ia(e) &&
          (e.addEventListener(`focus`, (e) => Sa(e, i)),
          !ga(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)))
    }),
    a
  )
}
function Ea(e) {
  return ve(e) && `ownerSVGElement` in e
}
var Da = new WeakMap(),
  Oa,
  ka = (e, t, n) => (r, i) =>
    i && i[0] ? i[0][e + `Size`] : Ea(r) && `getBBox` in r ? r.getBBox()[t] : r[n],
  Aa = ka(`inline`, `width`, `offsetWidth`),
  ja = ka(`block`, `height`, `offsetHeight`)
function Ma({ target: e, borderBoxSize: t }) {
  Da.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return Aa(e, t)
      },
      get height() {
        return ja(e, t)
      },
    })
  })
}
function Na(e) {
  e.forEach(Ma)
}
function Pa() {
  typeof ResizeObserver > `u` || (Oa = new ResizeObserver(Na))
}
function Fa(e, t) {
  Oa || Pa()
  let n = na(e)
  return (
    n.forEach((e) => {
      let n = Da.get(e)
      ;(n || ((n = new Set()), Da.set(e, n)), n.add(t), Oa?.observe(e))
    }),
    () => {
      n.forEach((e) => {
        let n = Da.get(e)
        ;(n?.delete(t), n?.size || Oa?.unobserve(e))
      })
    }
  )
}
var Ia = new Set(),
  La
function Ra() {
  ;((La = () => {
    let e = {
      get width() {
        return window.innerWidth
      },
      get height() {
        return window.innerHeight
      },
    }
    Ia.forEach((t) => t(e))
  }),
    window.addEventListener(`resize`, La))
}
function za(e) {
  return (
    Ia.add(e),
    La || Ra(),
    () => {
      ;(Ia.delete(e),
        !Ia.size &&
          typeof La == `function` &&
          (window.removeEventListener(`resize`, La), (La = void 0)))
    }
  )
}
function Ba(e, t) {
  return typeof e == `function` ? za(e) : Fa(e, t)
}
function Va(e) {
  return Ea(e) && e.tagName === `svg`
}
var Ha = [...P, N, Zt],
  Ua = (e) => Ha.find(zi(e)),
  Wa = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ga = () => ({ x: Wa(), y: Wa() }),
  Ka = () => ({ min: 0, max: 0 }),
  qa = () => ({ x: Ka(), y: Ka() }),
  Ja = new WeakMap()
function Ya(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`
}
function Xa(e) {
  return typeof e == `string` || Array.isArray(e)
}
var Za = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`],
  Qa = [`initial`, ...Za]
function $a(e) {
  return Ya(e.animate) || Qa.some((t) => Xa(e[t]))
}
function eo(e) {
  return !!($a(e) || e.variants)
}
function to(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r]
    if (Di(i)) e.addValue(r, i)
    else if (Di(a)) e.addValue(r, Si(i, { owner: e }))
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r)
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i)
      } else {
        let t = e.getStaticValue(r)
        e.addValue(r, Si(t === void 0 ? i : t, { owner: e }))
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r)
  return t
}
var no = { current: null },
  ro = { current: !1 },
  io = typeof window < `u`
function ao() {
  if (((ro.current = !0), io))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (no.current = e.matches)
      ;(e.addEventListener(`change`, t), t())
    } else no.current = !1
}
var oo = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  so = {}
function co(e) {
  so = e
}
function lo() {
  return so
}
var uo = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {}
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {}
    ) {
      ;((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = Cr),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = st.now()
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), j.render(this.render, !1, !0))
        }))
      let { latestValues: c, renderState: l } = o
      ;((this.latestValues = c),
        (this.baseTarget = { ...c }),
        (this.initialValues = t.initial ? { ...c } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = $a(t)),
        (this.isVariantNode = eo(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)))
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this)
      for (let e in d) {
        let t = d[e]
        c[e] !== void 0 && Di(t) && t.set(c[e])
      }
    }
    mount(e) {
      if (this.hasBeenMounted)
        for (let e in this.initialValues)
          (this.values.get(e)?.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]))
      ;((this.current = e),
        Ja.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (ro.current || ao(), (this.shouldReduceMotion = no.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0))
    }
    unmount() {
      ;(this.projection && this.projection.unmount(),
        nt(this.notifyUpdate),
        nt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this))
      for (let e in this.events) this.events[e].clear()
      for (let e in this.features) {
        let t = this.features[e]
        t && (t.unmount(), (t.isMounted = !1))
      }
      this.current = null
    }
    addChild(e) {
      ;(this.children.add(e), (this.enteringChildren ??= new Set()), this.enteringChildren.add(e))
    }
    removeChild(e) {
      ;(this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e))
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && Kr.has(e) && this.current instanceof HTMLElement)
      ) {
        let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate,
          s = new Ir({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: Ee(o),
          }),
          c = n(s)
        this.valueSubscriptions.set(e, () => {
          ;(c(), s.cancel())
        })
        return
      }
      let n = ur.has(e)
      n && this.onBindTransform && this.onBindTransform()
      let r = t.on(`change`, (t) => {
          ;((this.latestValues[e] = t),
            this.props.onUpdate && j.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender())
        }),
        i
      ;(typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          ;(r(), i && i(), t.owner && t.stop())
        }))
    }
    sortNodePosition(e) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
      let e = `animation`
      for (e in so) {
        let t = so[e]
        if (!t) continue
        let { isEnabled: n, Feature: r } = t
        if (
          (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e]
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0))
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : qa()
    }
    getStaticValue(e) {
      return this.latestValues[e]
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t
    }
    update(e, t) {
      ;((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t))
      for (let t = 0; t < oo.length; t++) {
        let n = oo[t]
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n])
        let r = e[`on` + n]
        r && (this.propEventSubscriptions[n] = this.on(n, r))
      }
      ;((this.prevMotionValues = to(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue())
    }
    getProps() {
      return this.props
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
      return this.props.transition
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode()
      if (t)
        return (t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e))
    }
    addValue(e, t) {
      let n = this.values.get(e)
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()))
    }
    removeValue(e) {
      this.values.delete(e)
      let t = this.valueSubscriptions.get(e)
      ;(t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState))
    }
    hasValue(e) {
      return this.values.has(e)
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e]) return this.props.values[e]
      let n = this.values.get(e)
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Si(t === null ? void 0 : t, { owner: this })), this.addValue(e, n)),
        n
      )
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options))
      return (
        n != null &&
          (typeof n == `string` && (_e(n) || ye(n))
            ? (n = parseFloat(n))
            : !Ua(n) && Zt.test(t) && (n = Qi(e, t)),
          this.setBaseTarget(e, Di(n) ? n.get() : n)),
        Di(n) ? n.get() : n
      )
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n
      if (typeof t == `string` || typeof t == `object`) {
        let r = hi(this.props, t, this.presenceContext?.custom)
        r && (n = r[e])
      }
      if (t && n !== void 0) return n
      let r = this.getBaseTargetFromProps(this.props, e)
      return r !== void 0 && !Di(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e]
    }
    on(e, t) {
      return (this.events[e] || (this.events[e] = new Te()), this.events[e].add(t))
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t)
    }
    scheduleRenderMicrotask() {
      aa.render(this.render)
    }
  },
  fo = class extends uo {
    constructor() {
      ;(super(...arguments), (this.KeyframeResolver = ta))
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style
      return n ? n[t] : void 0
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      ;(delete t[e], delete n[e])
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription)
      let { children: e } = this.props
      Di(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`)
        }))
    }
  },
  po = class {
    constructor(e) {
      ;((this.isMounted = !1), (this.node = e))
    }
    update() {}
  }
function mo({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } }
}
function ho({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function go(e, t) {
  if (!t) return e
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom })
  return { top: n.y, left: n.x, bottom: r.y, right: r.x }
}
function _o(e) {
  return e === void 0 || e === 1
}
function vo({ scale: e, scaleX: t, scaleY: n }) {
  return !_o(e) || !_o(t) || !_o(n)
}
function F(e) {
  return vo(e) || I(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function I(e) {
  return yo(e.x) || yo(e.y)
}
function yo(e) {
  return e && e !== `0%`
}
function bo(e, t, n) {
  return n + t * (e - n)
}
function xo(e, t, n, r, i) {
  return (i !== void 0 && (e = bo(e, i, r)), bo(e, n, r) + t)
}
function So(e, t = 0, n = 1, r, i) {
  ;((e.min = xo(e.min, t, n, r, i)), (e.max = xo(e.max, t, n, r, i)))
}
function Co(e, { x: t, y: n }) {
  ;(So(e.x, t.translate, t.scale, t.originPoint), So(e.y, n.translate, n.scale, n.originPoint))
}
var wo = 0.999999999999,
  To = 1.0000000000001
function Eo(e, t, n, r = !1) {
  let i = n.length
  if (!i) return
  t.x = t.y = 1
  let a, o
  for (let s = 0; s < i; s++) {
    ;((a = n[s]), (o = a.projectionDelta))
    let { visualElement: i } = a.options
    ;(i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (L(e.x, -a.scroll.offset.x), L(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Co(e, o)),
      r && F(a.latestValues) && ko(e, a.latestValues, a.layout?.layoutBox))
  }
  ;(t.x < To && t.x > wo && (t.x = 1), t.y < To && t.y > wo && (t.y = 1))
}
function L(e, t) {
  ;((e.min += t), (e.max += t))
}
function Do(e, t, n, r, i = 0.5) {
  So(e, t, n, tn(e.min, e.max, i), r)
}
function Oo(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e
}
function ko(e, t, n) {
  let r = n ?? e
  ;(Do(e.x, Oo(t.x, r.x), t.scaleX, t.scale, t.originX),
    Do(e.y, Oo(t.y, r.y), t.scaleY, t.scale, t.originY))
}
function Ao(e, t) {
  return mo(go(e.getBoundingClientRect(), t))
}
function jo(e, t, n) {
  let r = Ao(e, n),
    { scroll: i } = t
  return (i && (L(r.x, i.offset.x), L(r.y, i.offset.y)), r)
}
var Mo = { x: `translateX`, y: `translateY`, z: `translateZ`, transformPerspective: `perspective` },
  No = lr.length
function Po(e, t, n) {
  let r = ``,
    i = !0
  for (let a = 0; a < No; a++) {
    let o = lr[a],
      s = e[o]
    if (s === void 0) continue
    let c = !0
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`)
    else {
      let e = parseFloat(s)
      c = o.startsWith(`scale`) ? e === 1 : e === 0
    }
    if (!c || n) {
      let e = ra(s, Ji[o])
      if (!c) {
        i = !1
        let t = Mo[o] || o
        r += `${t}(${e}) `
      }
      n && (t[o] = e)
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r)
}
function Fo(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1
  for (let e in t) {
    let n = t[e]
    if (ur.has(e)) {
      o = !0
      continue
    } else if (ut(e)) {
      i[e] = n
      continue
    } else {
      let t = ra(n, Ji[e])
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t)
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = Po(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a
    r.transformOrigin = `${e} ${t} ${n}`
  }
}
function Io(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o
  for (o in t) a[o] = t[o]
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o])
}
function Lo(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
var Ro = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == `string`)
        if (M.test(e)) e = parseFloat(e)
        else return e
      return `${Lo(e, t.target.x)}% ${Lo(e, t.target.y)}%`
    },
  },
  zo = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = Zt.parse(e)
      if (i.length > 5) return r
      let a = Zt.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y
      ;((i[0 + o] /= s), (i[1 + o] /= c))
      let l = tn(s, c, 0.5)
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      )
    },
  },
  Bo = {
    borderRadius: {
      ...Ro,
      applyTo: [
        `borderTopLeftRadius`,
        `borderTopRightRadius`,
        `borderBottomLeftRadius`,
        `borderBottomRightRadius`,
      ],
    },
    borderTopLeftRadius: Ro,
    borderTopRightRadius: Ro,
    borderBottomLeftRadius: Ro,
    borderBottomRightRadius: Ro,
    boxShadow: zo,
  }
function Vo(e, { layout: t, layoutId: n }) {
  return (
    ur.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!Bo[e] || e === `opacity`))
  )
}
function Ho(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {}
  if (!r) return a
  for (let t in r)
    (Di(r[t]) || (i && Di(i[t])) || Vo(t, e) || n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t])
  return a
}
function Uo(e) {
  return window.getComputedStyle(e)
}
var Wo = class extends fo {
    constructor() {
      ;(super(...arguments), (this.type = `html`), (this.renderInstance = Io))
    }
    readValueFromInstance(e, t) {
      if (ur.has(t)) return this.projection?.isProjecting ? ar(t) : sr(e, t)
      {
        let n = Uo(e),
          r = (ut(t) ? n.getPropertyValue(t) : n[t]) || 0
        return typeof r == `string` ? r.trim() : r
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Ao(e, t)
    }
    build(e, t, n) {
      Fo(e, t, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Ho(e, t, n)
    }
  },
  Go = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  Ko = { offset: `strokeDashoffset`, array: `strokeDasharray` }
function qo(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1
  let a = i ? Go : Ko
  ;((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`))
}
var Jo = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`]
function Yo(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s },
  c,
  l,
  u
) {
  if ((Fo(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;((e.attrs = e.style), (e.style = {}))
  let { attrs: d, style: f } = e
  ;(d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`), delete d.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox))
  for (let e of Jo) d[e] !== void 0 && ((f[e] = d[e]), delete d[e])
  ;(t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && qo(d, i, a, o, !1))
}
var Xo = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  Zo = (e) => typeof e == `string` && e.toLowerCase() === `svg`
function Qo(e, t, n, r) {
  Io(e, t, void 0, r)
  for (let n in t.attrs) e.setAttribute(Xo.has(n) ? n : Ai(n), t.attrs[n])
}
function $o(e, t, n) {
  let r = Ho(e, t, n)
  for (let n in e)
    if (Di(e[n]) || Di(t[n])) {
      let t = lr.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1)
      r[t] = e[n]
    }
  return r
}
var es = class extends fo {
    constructor() {
      ;(super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = qa))
    }
    getBaseTargetFromProps(e, t) {
      return e[t]
    }
    readValueFromInstance(e, t) {
      if (ur.has(t)) {
        let e = Xi(t)
        return (e && e.default) || 0
      }
      return ((t = Xo.has(t) ? t : Ai(t)), e.getAttribute(t))
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return $o(e, t, n)
    }
    build(e, t, n) {
      Yo(e, t, this.isSVGTag, n.transformTemplate, n.style)
    }
    renderInstance(e, t, n, r) {
      Qo(e, t, n, r)
    }
    mount(e) {
      ;((this.isSVGTag = Zo(e.tagName)), super.mount(e))
    }
  },
  ts = Qa.length
function ns(e) {
  if (!e) return
  if (!e.isControllingVariants) {
    let t = (e.parent && ns(e.parent)) || {}
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t)
  }
  let t = {}
  for (let n = 0; n < ts; n++) {
    let r = Qa[n],
      i = e.props[r]
    ;(Xa(i) || i === !1) && (t[r] = i)
  }
  return t
}
function rs(e, t) {
  if (!Array.isArray(t)) return !1
  let n = t.length
  if (n !== e.length) return !1
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
  return !0
}
var is = [...Za].reverse(),
  as = Za.length
function os(e) {
  return (t) => Promise.all(t.map(({ animation: t, options: n }) => Li(e, t, n)))
}
function ss(e) {
  let t = os(e),
    n = us(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      let i = gi(e, r, t === `exit` ? e.presenceContext?.custom : void 0)
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i
        n = { ...n, ...r, ...t }
      }
      return n
    }
  function o(n) {
    t = n(e)
  }
  function s(o) {
    let { props: s } = e,
      c = ns(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0
    for (let t = 0; t < as; t++) {
      let p = is[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = Xa(h),
        _ = p === o ? m.isActive : null
      _ === !1 && (f = t)
      let v = h === c[p] && h !== s[p] && g
      if (
        (v && (r || i) && e.manuallyAnimateOnMount && (v = !1),
        (m.protectedKeys = { ...d }),
        (!m.isActive && _ === null) || (!h && !m.prevProp) || Ya(h) || typeof h == `boolean`)
      )
        continue
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = { ...d, ...m.prevResolvedValues })
        continue
      }
      let y = cs(m.prevProp, h),
        b = y || (p === o && m.isActive && !v && g) || (t > f && g),
        x = !1,
        S = Array.isArray(h) ? h : [h],
        C = S.reduce(a(p), {})
      _ === !1 && (C = {})
      let { prevResolvedValues: w = {} } = m,
        T = { ...w, ...C },
        E = (t) => {
          ;((b = !0), u.has(t) && ((x = !0), u.delete(t)), (m.needsAnimating[t] = !0))
          let n = e.getValue(t)
          n && (n.liveStyle = !1)
        }
      for (let e in T) {
        let t = C[e],
          n = w[e]
        if (d.hasOwnProperty(e)) continue
        let r = !1
        ;((r = Ci(t) && Ci(n) ? !rs(t, n) : t !== n),
          r
            ? t == null
              ? u.add(e)
              : E(e)
            : t !== void 0 && u.has(e)
              ? E(e)
              : (m.protectedKeys[e] = !0))
      }
      ;((m.prevProp = h),
        (m.prevResolvedValues = C),
        m.isActive && (d = { ...d, ...C }),
        (r || i) && e.blockInitialAnimation && (b = !1))
      let ee = v && y
      b &&
        (!ee || x) &&
        l.push(
          ...S.map((t) => {
            let n = { type: p }
            if (typeof t == `string` && (r || i) && !ee && e.manuallyAnimateOnMount && e.parent) {
              let { parent: r } = e,
                i = gi(r, t)
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {}
                n.delay = ei(r.enteringChildren, e, t)
              }
            }
            return { animation: t, options: n }
          })
        )
    }
    if (u.size) {
      let t = {}
      if (typeof s.initial != `boolean`) {
        let n = gi(e, Array.isArray(s.initial) ? s.initial[0] : s.initial)
        n && n.transition && (t.transition = n.transition)
      }
      ;(u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n)
        ;(i && (i.liveStyle = !0), (t[n] = r ?? null))
      }),
        l.push({ animation: t }))
    }
    let p = !!l.length
    return (
      r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    )
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve()
    ;(e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), (n[t].isActive = r))
    let i = s(t)
    for (let e in n) n[e].protectedKeys = {}
    return i
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ;((n = us()), (i = !0))
    },
  }
}
function cs(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !rs(t, e) : !1
}
function ls(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function us() {
  return {
    animate: ls(!0),
    whileInView: ls(),
    whileHover: ls(),
    whileTap: ls(),
    whileDrag: ls(),
    whileFocus: ls(),
    exit: ls(),
  }
}
function ds(e, t) {
  ;((e.min = t.min), (e.max = t.max))
}
function fs(e, t) {
  ;(ds(e.x, t.x), ds(e.y, t.y))
}
function ps(e, t) {
  ;((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin))
}
var ms = 1e-4,
  hs = 1 - ms,
  gs = 1 + ms,
  _s = 0.01,
  vs = 0 - _s,
  ys = 0 + _s
function bs(e) {
  return e.max - e.min
}
function xs(e, t, n) {
  return Math.abs(e - t) <= n
}
function Ss(e, t, n, r = 0.5) {
  ;((e.origin = r),
    (e.originPoint = tn(t.min, t.max, e.origin)),
    (e.scale = bs(n) / bs(t)),
    (e.translate = tn(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= hs && e.scale <= gs) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= vs && e.translate <= ys) || isNaN(e.translate)) && (e.translate = 0))
}
function Cs(e, t, n, r) {
  ;(Ss(e.x, t.x, n.x, r ? r.originX : void 0), Ss(e.y, t.y, n.y, r ? r.originY : void 0))
}
function ws(e, t, n, r = 0) {
  ;((e.min = (r ? tn(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + bs(t)))
}
function Ts(e, t, n, r) {
  ;(ws(e.x, t.x, n.x, r?.x), ws(e.y, t.y, n.y, r?.y))
}
function Es(e, t, n, r = 0) {
  let i = r ? tn(n.min, n.max, r) : n.min
  ;((e.min = t.min - i), (e.max = e.min + bs(t)))
}
function Ds(e, t, n, r) {
  ;(Es(e.x, t.x, n.x, r?.x), Es(e.y, t.y, n.y, r?.y))
}
function Os(e, t, n, r, i) {
  return ((e -= t), (e = bo(e, 1 / n, r)), i !== void 0 && (e = bo(e, 1 / i, r)), e)
}
function ks(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (jt.test(t) && ((t = parseFloat(t)), (t = tn(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return
  let s = tn(a.min, a.max, r)
  ;(e === a && (s -= t), (e.min = Os(e.min, t, n, s, i)), (e.max = Os(e.max, t, n, s, i)))
}
function As(e, t, [n, r, i], a, o) {
  ks(e, t[n], t[r], t[i], t.scale, a, o)
}
var js = [`x`, `scaleX`, `originX`],
  Ms = [`y`, `scaleY`, `originY`]
function Ns(e, t, n, r) {
  ;(As(e.x, t, js, n ? n.x : void 0, r ? r.x : void 0),
    As(e.y, t, Ms, n ? n.y : void 0, r ? r.y : void 0))
}
function Ps(e) {
  return e.translate === 0 && e.scale === 1
}
function Fs(e) {
  return Ps(e.x) && Ps(e.y)
}
function Is(e, t) {
  return e.min === t.min && e.max === t.max
}
function Ls(e, t) {
  return Is(e.x, t.x) && Is(e.y, t.y)
}
function Rs(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function zs(e, t) {
  return Rs(e.x, t.x) && Rs(e.y, t.y)
}
function Bs(e) {
  return bs(e.x) / bs(e.y)
}
function Vs(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Hs(e) {
  return [e(`x`), e(`y`)]
}
function Us(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n
    ;(e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `))
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`)
}
var Ws = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomLeftRadius`,
    `borderBottomRightRadius`,
  ],
  Gs = Ws.length,
  Ks = (e) => (typeof e == `string` ? parseFloat(e) : e),
  qs = (e) => typeof e == `number` || M.test(e)
function Js(e, t, n, r, i, a) {
  i
    ? ((e.opacity = tn(0, n.opacity ?? 1, Xs(r))), (e.opacityExit = tn(t.opacity ?? 1, 0, Zs(r))))
    : a && (e.opacity = tn(t.opacity ?? 1, n.opacity ?? 1, r))
  for (let i = 0; i < Gs; i++) {
    let a = Ws[i],
      o = Ys(t, a),
      s = Ys(n, a)
    ;(o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || qs(o) === qs(s)
        ? ((e[a] = Math.max(tn(Ks(o), Ks(s), r), 0)), (jt.test(s) || jt.test(o)) && (e[a] += `%`))
        : (e[a] = s))
  }
  ;(t.rotate || n.rotate) && (e.rotate = tn(t.rotate || 0, n.rotate || 0, r))
}
function Ys(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t]
}
var Xs = Qs(0, 0.5, Ve),
  Zs = Qs(0.5, 0.95, xe)
function Qs(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(we(e, t, r)))
}
function $s(e, t, n) {
  let r = Di(e) ? e : Si(e)
  return (r.start(pi(``, r, t, n)), r.animation)
}
function ec(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n))
}
var tc = (e, t) => e.depth - t.depth,
  nc = class {
    constructor() {
      ;((this.children = []), (this.isDirty = !1))
    }
    add(e) {
      ;(pe(this.children, e), (this.isDirty = !0))
    }
    remove(e) {
      ;(me(this.children, e), (this.isDirty = !0))
    }
    forEach(e) {
      ;(this.isDirty && this.children.sort(tc), (this.isDirty = !1), this.children.forEach(e))
    }
  }
function rc(e, t) {
  let n = st.now(),
    r = ({ timestamp: i }) => {
      let a = i - n
      a >= t && (nt(r), e(a - t))
    }
  return (j.setup(r, !0), () => nt(r))
}
function ic(e) {
  return Di(e) ? e.get() : e
}
var ac = class {
    constructor() {
      this.members = []
    }
    add(e) {
      pe(this.members, e)
      for (let t = this.members.length - 1; t >= 0; t--) {
        let n = this.members[t]
        if (n === e || n === this.lead || n === this.prevLead) continue
        let r = n.instance
        ;(!r || r.isConnected === !1) && !n.snapshot && (me(this.members, n), n.unmount())
      }
      e.scheduleRender()
    }
    remove(e) {
      if ((me(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
        let e = this.members[this.members.length - 1]
        e && this.promote(e)
      }
    }
    relegate(e) {
      for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
        let e = this.members[t]
        if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return (this.promote(e), !0)
      }
      return !1
    }
    promote(e, t) {
      let n = this.lead
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        ;(n.updateSnapshot(), e.scheduleRender())
        let { layoutDependency: r } = n.options,
          { layoutDependency: i } = e.options
        ;((r === void 0 || r !== i) &&
          ((e.resumeFrom = n),
          t && (n.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root?.isUpdating && (e.isLayoutDirty = !0)),
          e.options.crossfade === !1 && n.hide())
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        ;(e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.())
      })
    }
    scheduleRender() {
      this.members.forEach((e) => e.instance && e.scheduleRender(!1))
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0)
    }
  },
  oc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  sc = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  cc = [``, `X`, `Y`, `Z`],
  lc = 1e3,
  uc = 0
function dc(e, t, n, r) {
  let { latestValues: i } = t
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function fc(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return
  let { visualElement: t } = e.options
  if (!t) return
  let n = Mi(t)
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options
    window.MotionCancelOptimisedAnimation(n, `transform`, j, !(t || r))
  }
  let { parent: r } = e
  r && !r.hasCheckedOptimisedAppear && fc(r)
}
function pc({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ;((this.id = uc++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;((this.projectionUpdateScheduled = !1),
            Qe.value && (sc.nodes = sc.calculatedTargetDeltas = sc.calculatedProjections = 0),
            this.nodes.forEach(gc),
            this.nodes.forEach(Tc),
            this.nodes.forEach(Ec),
            this.nodes.forEach(_c),
            Qe.addProjectionMetrics && Qe.addProjectionMetrics(sc))
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0))
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0
      this.root === this && (this.nodes = new nc())
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new Te()),
        this.eventHandlers.get(e).add(t)
      )
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e)
      n && n.notify(...t)
    }
    hasListeners(e) {
      return this.eventHandlers.has(e)
    }
    mount(t) {
      if (this.instance) return
      ;((this.isSVG = Ea(t) && !Va(t)), (this.instance = t))
      let { layoutId: n, layout: r, visualElement: i } = this.options
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1)
        ;(j.read(() => {
          r = window.innerWidth
        }),
          e(t, () => {
            let e = window.innerWidth
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = rc(i, 250)),
              oc.hasAnimatedSinceResize &&
                ((oc.hasAnimatedSinceResize = !1), this.nodes.forEach(wc)))
          }))
      }
      ;(n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
              if (this.isTreeAnimationBlocked()) {
                ;((this.target = void 0), (this.relativeTarget = void 0))
                return
              }
              let a = this.options.transition || i.getDefaultTransition() || Nc,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(),
                c = !this.targetLayout || !zs(this.targetLayout, r),
                l = !t && n
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0))
                let t = { ...ui(a, `layout`), onPlay: o, onComplete: s }
                ;((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l))
              } else
                (t || wc(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete())
              this.targetLayout = r
            }
          ))
    }
    unmount() {
      ;(this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this))
      let e = this.getStack()
      ;(e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        nt(this.updateProjection))
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Dc), this.animationId++)
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options
      return e && e.getProps().transformTemplate
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && fc(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return
      this.isLayoutDirty = !0
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e]
        ;((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1))
      }
      let { layoutId: t, layout: n } = this.options
      if (t === void 0 && !n) return
      let r = this.getTransformTemplate()
      ;((this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`))
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize
        ;(this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(bc),
          this.nodes.forEach(yc))
        return
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(xc)
        return
      }
      ;((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Sc),
            this.nodes.forEach(Cc),
            this.nodes.forEach(mc),
            this.nodes.forEach(hc))
          : this.nodes.forEach(xc),
        this.clearAllSnapshots())
      let e = st.now()
      ;((rt.delta = he(0, 1e3 / 60, e - rt.timestamp)),
        (rt.timestamp = e),
        (rt.isProcessing = !0),
        it.update.process(rt),
        it.preRender.process(rt),
        it.render.process(rt),
        (rt.isProcessing = !1))
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), aa.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      ;(this.nodes.forEach(vc), this.sharedNodes.forEach(Oc))
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), j.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      j.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !bs(this.snapshot.measuredBox.x) &&
          !bs(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0))
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll()
      let e = this.layout
      ;((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected ||= qa()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox))
      let { visualElement: t } = this.options
      t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0)
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance)
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance)
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        }
      }
    }
    resetTransform() {
      if (!i) return
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Fs(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue
      e &&
        this.instance &&
        (t || F(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t)
      return (
        e && (n = this.removeTransform(n)),
        Lc(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      let { visualElement: e } = this.options
      if (!e) return qa()
      let t = e.measureViewportBox()
      if (!(this.scroll?.wasRoot || this.path.some(zc))) {
        let { scroll: e } = this.root
        e && (L(t.x, e.offset.x), L(t.y, e.offset.y))
      }
      return t
    }
    removeElementScroll(e) {
      let t = qa()
      if ((fs(t, e), this.scroll?.wasRoot)) return t
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && fs(t, e), L(t.x, i.offset.x), L(t.y, i.offset.y))
      }
      return t
    }
    applyTransform(e, t = !1, n) {
      let r = n || qa()
      fs(r, e)
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e]
        ;(!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (L(r.x, -n.scroll.offset.x), L(r.y, -n.scroll.offset.y)),
          F(n.latestValues) && ko(r, n.latestValues, n.layout?.layoutBox))
      }
      return (F(this.latestValues) && ko(r, this.latestValues, this.layout?.layoutBox), r)
    }
    removeTransform(e) {
      let t = qa()
      fs(t, e)
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e]
        if (!F(n.latestValues)) continue
        let r
        ;(n.instance &&
          (vo(n.latestValues) && n.updateSnapshot(), (r = qa()), fs(r, n.measurePageBox())),
          Ns(t, n.latestValues, n.snapshot?.layoutBox, r))
      }
      return (F(this.latestValues) && Ns(t, this.latestValues), t)
    }
    setTargetDelta(e) {
      ;((this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0))
    }
    setOptions(e) {
      this.options = { ...this.options, ...e, crossfade: e.crossfade === void 0 ? !0 : e.crossfade }
    }
    clearMeasurements() {
      ;((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1))
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== rt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead()
      ;((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty))
      let n = !!this.resumingFrom || this !== t
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return
      let { layout: r, layoutId: i } = this.options
      if (!this.layout || !(r || i)) return
      this.resolvedRelativeTargetAt = rt.timestamp
      let a = this.getClosestProjectingParent()
      ;(a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && a && a.layout
            ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = qa()), (this.targetWithTransforms = qa())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Ts(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : fs(this.target, this.layout.layoutBox),
                Co(this.target, this.targetDelta))
              : fs(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          Qe.value && sc.calculatedTargetDeltas++))
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vo(this.parent.latestValues) || I(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    createRelativeTarget(e, t, n) {
      ;((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = qa()),
        (this.relativeTargetOrigin = qa()),
        Ds(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0),
        fs(this.relativeTarget, this.relativeTargetOrigin))
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
        this.resolvedRelativeTargetAt === rt.timestamp && (n = !1),
        n)
      )
        return
      let { layout: r, layoutId: i } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return
      fs(this.layoutCorrected, this.layout.layoutBox)
      let a = this.treeScale.x,
        o = this.treeScale.y
      ;(Eo(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = qa())))
      let { target: s } = e
      if (!s) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
        return
      }
      ;(!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ps(this.prevProjectionDelta.x, this.projectionDelta.x),
          ps(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Cs(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !Vs(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Vs(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        Qe.value && sc.calculatedProjections++)
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack()
        e && e.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      ;((this.prevProjectionDelta = Ga()),
        (this.projectionDelta = Ga()),
        (this.projectionDeltaWithTransform = Ga()))
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = Ga()
      ;((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t))
      let o = qa(),
        s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Mc))
      this.animationProgress = 0
      let d
      ;((this.mixTargetDelta = (t) => {
        let n = t / 1e3
        ;(kc(a.x, e.x, n),
          kc(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ds(
              o,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            jc(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && Ls(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= qa()),
            fs(d, this.relativeTarget)),
          s && ((this.animationValues = i), Js(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n))
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0))
    }
    startAnimation(e) {
      ;(this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (nt(this.pendingAnimation), void 0)),
        (this.pendingAnimation = j.update(() => {
          ;((oc.hasAnimatedSinceResize = !0),
            ct.layout++,
            (this.motionValue ||= Si(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = $s(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                ;(this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t))
              },
              onStop: () => {
                ct.layout--
              },
              onComplete: () => {
                ;(ct.layout--, e.onComplete && e.onComplete(), this.completeAnimation())
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0))
        })))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      let e = this.getStack()
      ;(e && e.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners(`animationComplete`))
    }
    finishAnimation() {
      ;(this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(lc), this.currentAnimation.stop()),
        this.completeAnimation())
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          Rc(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || qa()
          let t = bs(this.layout.layoutBox.x)
          ;((n.x.min = e.target.x.min), (n.x.max = n.x.min + t))
          let r = bs(this.layout.layoutBox.y)
          ;((n.y.min = e.target.y.min), (n.y.max = n.y.min + r))
        }
        ;(fs(t, n), ko(t, i), Cs(this.projectionDeltaWithTransform, this.layoutCorrected, t, i))
      }
    }
    registerSharedNode(e, t) {
      ;(this.sharedNodes.has(e) || this.sharedNodes.set(e, new ac()),
        this.sharedNodes.get(e).add(t))
      let n = t.options.initialPromotionConfig
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0,
      })
    }
    isLead() {
      let e = this.getStack()
      return e ? e.lead === this : !0
    }
    getLead() {
      let { layoutId: e } = this.options
      return (e && this.getStack()?.lead) || this
    }
    getPrevLead() {
      let { layoutId: e } = this.options
      return e ? this.getStack()?.prevLead : void 0
    }
    getStack() {
      let { layoutId: e } = this.options
      if (e) return this.root.sharedNodes.get(e)
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack()
      ;(r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }))
    }
    relegate() {
      let e = this.getStack()
      return e ? e.relegate(this) : !1
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options
      if (!e) return
      let t = !1,
        { latestValues: n } = e
      if (
        ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
        !t)
      )
        return
      let r = {}
      n.z && dc(`z`, e, r, this.animationValues)
      for (let t = 0; t < cc.length; t++)
        (dc(`rotate${cc[t]}`, e, r, this.animationValues),
          dc(`skew${cc[t]}`, e, r, this.animationValues))
      e.render()
      for (let t in r)
        (e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]))
      e.scheduleRender()
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) {
        e.visibility = `hidden`
        return
      }
      let n = this.getTransformTemplate()
      if (this.needsReset) {
        ;((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = ic(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`))
        return
      }
      let r = this.getLead()
      if (!this.projectionDelta || !this.layout || !r.target) {
        ;(this.options.layoutId &&
          ((e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
          (e.pointerEvents = ic(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !F(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)))
        return
      }
      e.visibility = ``
      let i = r.animationValues || r.latestValues
      this.applyTransformsToTarget()
      let a = Us(this.projectionDeltaWithTransform, this.treeScale, i)
      ;(n && (a = n(i, a)), (e.transform = a))
      let { x: o, y: s } = this.projectionDelta
      ;((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        r.animationValues
          ? (e.opacity =
              r === this
                ? (i.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : i.opacityExit)
          : (e.opacity =
              r === this
                ? i.opacity === void 0
                  ? ``
                  : i.opacity
                : i.opacityExit === void 0
                  ? 0
                  : i.opacityExit))
      for (let t in Bo) {
        if (i[t] === void 0) continue
        let { correct: n, applyTo: o, isCSSVariable: s } = Bo[t],
          c = a === `none` ? i[t] : n(i[t], r)
        if (o) {
          let t = o.length
          for (let n = 0; n < t; n++) e[o[n]] = c
        } else s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c)
      }
      this.options.layoutId && (e.pointerEvents = r === this ? ic(t?.pointerEvents) || `` : `none`)
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      ;(this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(yc),
        this.root.sharedNodes.clear())
    }
  }
}
function mc(e) {
  e.updateLayout()
}
function hc(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source
    if (i === `size`)
      Hs((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = bs(r)
        ;((r.min = n[e].min), (r.max = r.min + i))
      })
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`
      ds(a ? t.measuredBox[e] : t.layoutBox[e], n[e])
    } else
      Rc(i, t.layoutBox, n) &&
        Hs((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = bs(n[r])
          ;((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[r].max = e.relativeTarget[r].min + o)))
        })
    let o = Ga()
    Cs(o, n, t.layoutBox)
    let s = Ga()
    a ? Cs(s, e.applyTransform(r, !0), t.measuredBox) : Cs(s, n, t.layoutBox)
    let c = !Fs(o),
      l = !1
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent()
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = qa()
          Ds(s, t.layoutBox, i.layoutBox, o)
          let c = qa()
          ;(Ds(c, n, a.layoutBox, o),
            zs(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c), (e.relativeTargetOrigin = s), (e.relativeParent = r)))
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    })
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options
    t && t()
  }
  e.options.transition = void 0
}
function gc(e) {
  ;(Qe.value && sc.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)))
}
function _c(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function vc(e) {
  e.clearSnapshot()
}
function yc(e) {
  e.clearMeasurements()
}
function bc(e) {
  ;((e.isLayoutDirty = !0), e.updateLayout())
}
function xc(e) {
  e.isLayoutDirty = !1
}
function Sc(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0))
}
function Cc(e) {
  let { visualElement: t } = e.options
  ;(t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform())
}
function wc(e) {
  ;(e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0))
}
function Tc(e) {
  e.resolveTargetDelta()
}
function Ec(e) {
  e.calcProjection()
}
function Dc(e) {
  e.resetSkewAndRotation()
}
function Oc(e) {
  e.removeLeadSnapshot()
}
function kc(e, t, n) {
  ;((e.translate = tn(t.translate, 0, n)),
    (e.scale = tn(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint))
}
function Ac(e, t, n, r) {
  ;((e.min = tn(t.min, n.min, r)), (e.max = tn(t.max, n.max, r)))
}
function jc(e, t, n, r) {
  ;(Ac(e.x, t.x, n.x, r), Ac(e.y, t.y, n.y, r))
}
function Mc(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
var Nc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Pc = (e) =>
    typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  Fc = Pc(`applewebkit/`) && !Pc(`chrome/`) ? Math.round : xe
function Ic(e) {
  ;((e.min = Fc(e.min)), (e.max = Fc(e.max)))
}
function Lc(e) {
  ;(Ic(e.x), Ic(e.y))
}
function Rc(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !xs(Bs(t), Bs(n), 0.2))
}
function zc(e) {
  return e !== e.root && e.scroll?.wasRoot
}
var Bc = pc({
    attachResizeListener: (e, t) => ec(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Vc = { current: void 0 },
  Hc = pc({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Vc.current) {
        let e = new Bc({})
        ;(e.mount(window), e.setOptions({ layoutScroll: !0 }), (Vc.current = e))
      }
      return Vc.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  Uc = (0, b.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` })
function Wc(e, t) {
  if (typeof e == `function`) return e(t)
  e != null && (e.current = t)
}
function Gc(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Wc(e, t)
        return (!n && typeof r == `function` && (n = !0), r)
      })
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t]
          typeof n == `function` ? n() : Wc(e[t], null)
        }
      }
  }
}
function Kc(...e) {
  return b.useCallback(Gc(...e), e)
}
var qc = class extends b.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current
    if (ia(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      let e = t.offsetParent,
        n = (ia(e) && e.offsetWidth) || 0,
        r = (ia(e) && e.offsetHeight) || 0,
        i = getComputedStyle(t),
        a = this.props.sizeRef.current
      ;((a.height = parseFloat(i.height)),
        (a.width = parseFloat(i.width)),
        (a.top = t.offsetTop),
        (a.left = t.offsetLeft),
        (a.right = n - a.width - a.left),
        (a.bottom = r - a.height - a.top))
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}
function Jc({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
  let o = (0, b.useId)(),
    s = (0, b.useRef)(null),
    c = (0, b.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: l } = (0, b.useContext)(Uc),
    u = Kc(s, e.props?.ref ?? e?.ref)
  return (
    (0, b.useInsertionEffect)(() => {
      let { width: e, height: u, top: d, left: f, right: p, bottom: m } = c.current
      if (t || a === !1 || !s.current || !e || !u) return
      let h = n === `left` ? `left: ${f}` : `right: ${p}`,
        g = r === `bottom` ? `bottom: ${m}` : `top: ${d}`
      s.current.dataset.motionPopId = o
      let _ = document.createElement(`style`)
      l && (_.nonce = l)
      let v = i ?? document.head
      return (
        v.appendChild(_),
        _.sheet &&
          _.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),
        () => {
          ;(s.current?.removeAttribute(`data-motion-pop-id`), v.contains(_) && v.removeChild(_))
        }
      )
    }, [t]),
    (0, k.jsx)(qc, {
      isPresent: t,
      childRef: s,
      sizeRef: c,
      pop: a,
      children: a === !1 ? e : b.cloneElement(e, { ref: u }),
    })
  )
}
var Yc = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
  anchorX: s,
  anchorY: c,
  root: l,
}) => {
  let u = de(Xc),
    d = (0, b.useId)(),
    f = !0,
    p = (0, b.useMemo)(
      () => (
        (f = !1),
        {
          id: d,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (e) => {
            u.set(e, !0)
            for (let e of u.values()) if (!e) return
            r && r()
          },
          register: (e) => (u.set(e, !1), () => u.delete(e)),
        }
      ),
      [n, u, r]
    )
  return (
    a && f && (p = { ...p }),
    (0, b.useMemo)(() => {
      u.forEach((e, t) => u.set(t, !1))
    }, [n]),
    b.useEffect(() => {
      !n && !u.size && r && r()
    }, [n]),
    (e = (0, k.jsx)(Jc, {
      pop: o === `popLayout`,
      isPresent: n,
      anchorX: s,
      anchorY: c,
      root: l,
      children: e,
    })),
    (0, k.jsx)(A.Provider, { value: p, children: e })
  )
}
function Xc() {
  return new Map()
}
function Zc(e = !0) {
  let t = (0, b.useContext)(A)
  if (t === null) return [!0, null]
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, b.useId)()
  ;(0, b.useEffect)(() => {
    if (e) return i(a)
  }, [e])
  let o = (0, b.useCallback)(() => e && r && r(a), [a, r, e])
  return !n && r ? [!1, o] : [!0]
}
var Qc = (e) => e.key || ``
function $c(e) {
  let t = []
  return (
    b.Children.forEach(e, (e) => {
      ;(0, b.isValidElement)(e) && t.push(e)
    }),
    t
  )
}
var el = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
    anchorX: s = `left`,
    anchorY: c = `top`,
    root: l,
  }) => {
    let [u, d] = Zc(o),
      f = (0, b.useMemo)(() => $c(e), [e]),
      p = o && !u ? [] : f.map(Qc),
      m = (0, b.useRef)(!0),
      h = (0, b.useRef)(f),
      g = de(() => new Map()),
      _ = (0, b.useRef)(new Set()),
      [v, y] = (0, b.useState)(f),
      [x, S] = (0, b.useState)(f)
    fe(() => {
      ;((m.current = !1), (h.current = f))
      for (let e = 0; e < x.length; e++) {
        let t = Qc(x[e])
        p.includes(t) ? (g.delete(t), _.current.delete(t)) : g.get(t) !== !0 && g.set(t, !1)
      }
    }, [x, p.length, p.join(`-`)])
    let C = []
    if (f !== v) {
      let e = [...f]
      for (let t = 0; t < x.length; t++) {
        let n = x[t],
          r = Qc(n)
        p.includes(r) || (e.splice(t, 0, n), C.push(n))
      }
      return (a === `wait` && C.length && (e = C), S($c(e)), y(f), null)
    }
    let { forceRender: w } = (0, b.useContext)(ue)
    return (0, k.jsx)(k.Fragment, {
      children: x.map((e) => {
        let v = Qc(e),
          y = o && !u ? !1 : f === x || p.includes(v)
        return (0, k.jsx)(
          Yc,
          {
            isPresent: y,
            initial: !m.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
            root: l,
            onExitComplete: y
              ? void 0
              : () => {
                  if (_.current.has(v)) return
                  if (g.has(v)) (_.current.add(v), g.set(v, !0))
                  else return
                  let e = !0
                  ;(g.forEach((t) => {
                    t || (e = !1)
                  }),
                    e && (w?.(), S(h.current), o && d?.(), r && r()))
                },
            anchorX: s,
            anchorY: c,
            children: e,
          },
          v
        )
      }),
    })
  },
  tl = (0, b.createContext)({ strict: !1 }),
  nl = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  rl = !1
function il() {
  if (rl) return
  let e = {}
  for (let t in nl) e[t] = { isEnabled: (e) => nl[t].some((t) => !!e[t]) }
  ;(co(e), (rl = !0))
}
function al() {
  return (il(), lo())
}
function ol(e) {
  let t = al()
  for (let n in e) t[n] = { ...t[n], ...e[n] }
  co(t)
}
var sl = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`
  )
)
function cl(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    sl.has(e)
  )
}
var ll = c({ default: () => ul }),
  ul,
  dl = o(() => {
    throw (
      (ul = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`
      )
    )
  }),
  fl = (e) => !cl(e)
function pl(e) {
  typeof e == `function` && (fl = (t) => (t.startsWith(`on`) ? !cl(t) : e(t)))
}
try {
  pl((dl(), d(ll)).default)
} catch {}
function ml(e, t, n) {
  let r = {}
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      Di(e[i]) ||
      ((fl(i) ||
        (n === !0 && cl(i)) ||
        (!t && !cl(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]))
  return r
}
var R = (0, b.createContext)({})
function hl(e, t) {
  if ($a(e)) {
    let { initial: t, animate: n } = e
    return { initial: t === !1 || Xa(t) ? t : void 0, animate: Xa(n) ? n : void 0 }
  }
  return e.inherit === !1 ? {} : t
}
function gl(e) {
  let { initial: t, animate: n } = hl(e, (0, b.useContext)(R))
  return (0, b.useMemo)(() => ({ initial: t, animate: n }), [_l(t), _l(n)])
}
function _l(e) {
  return Array.isArray(e) ? e.join(` `) : e
}
var vl = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function yl(e, t, n) {
  for (let r in t) !Di(t[r]) && !Vo(r, n) && (e[r] = t[r])
}
function bl({ transformTemplate: e }, t) {
  return (0, b.useMemo)(() => {
    let n = vl()
    return (Fo(n, t, e), Object.assign({}, n.vars, n.style))
  }, [t])
}
function xl(e, t) {
  let n = e.style || {},
    r = {}
  return (yl(r, n, e), Object.assign(r, bl(e, t)), r)
}
function Sl(e, t) {
  let n = {},
    r = xl(e, t)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  )
}
var Cl = () => ({ ...vl(), attrs: {} })
function wl(e, t, n, r) {
  let i = (0, b.useMemo)(() => {
    let n = Cl()
    return (Yo(n, t, Zo(r), e.transformTemplate, e.style), { ...n.attrs, style: { ...n.style } })
  }, [t])
  if (e.style) {
    let t = {}
    ;(yl(t, e.style, e), (i.style = { ...t, ...i.style }))
  }
  return i
}
var Tl = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
]
function El(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(Tl.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Dl(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o ?? El(e)) ? wl : Sl)(t, r, i, e),
    c = ml(t, typeof e == `string`, a),
    l = e === b.Fragment ? {} : { ...c, ...s, ref: n },
    { children: u } = t,
    d = (0, b.useMemo)(() => (Di(u) ? u.get() : u), [u])
  return (0, b.createElement)(e, { ...l, children: d })
}
function Ol({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: kl(n, r, i, e), renderState: t() }
}
function kl(e, t, n, r) {
  let i = {},
    a = r(e, {})
  for (let e in a) i[e] = ic(a[e])
  let { initial: o, animate: s } = e,
    c = $a(e),
    l = eo(e)
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate))
  let u = n ? n.initial === !1 : !1
  u ||= o === !1
  let d = u ? s : o
  if (d && typeof d != `boolean` && !Ya(d)) {
    let t = Array.isArray(d) ? d : [d]
    for (let n = 0; n < t.length; n++) {
      let r = hi(e, t[n])
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r
        for (let e in n) {
          let t = n[e]
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0
            t = t[e]
          }
          t !== null && (i[e] = t)
        }
        for (let t in e) i[t] = e[t]
      }
    }
  }
  return i
}
var Al = (e) => (t, n) => {
    let r = (0, b.useContext)(R),
      i = (0, b.useContext)(A),
      a = () => Ol(e, t, r, i)
    return n ? a() : de(a)
  },
  jl = Al({ scrapeMotionValuesFromProps: Ho, createRenderState: vl }),
  Ml = Al({ scrapeMotionValuesFromProps: $o, createRenderState: Cl }),
  Nl = Symbol.for(`motionComponentSymbol`)
function Pl(e, t, n) {
  let r = (0, b.useRef)(n)
  ;(0, b.useInsertionEffect)(() => {
    r.current = n
  })
  let i = (0, b.useRef)(null)
  return (0, b.useCallback)(
    (n) => {
      n && e.onMount?.(n)
      let a = r.current
      if (typeof a == `function`)
        if (n) {
          let e = a(n)
          typeof e == `function` && (i.current = e)
        } else i.current ? (i.current(), (i.current = null)) : a(n)
      else a && (a.current = n)
      t && (n ? t.mount(n) : t.unmount())
    },
    [t]
  )
}
var Fl = (0, b.createContext)({})
function Il(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`)
}
function Ll(e, t, n, r, i, a) {
  let { visualElement: o } = (0, b.useContext)(R),
    s = (0, b.useContext)(tl),
    c = (0, b.useContext)(A),
    l = (0, b.useContext)(Uc),
    u = l.reducedMotion,
    d = l.skipAnimations,
    f = (0, b.useRef)(null),
    p = (0, b.useRef)(!1)
  ;((r ||= s.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: d,
        isSVG: a,
      })),
      p.current && f.current && (f.current.manuallyAnimateOnMount = !0)))
  let m = f.current,
    h = (0, b.useContext)(Fl)
  m && !m.projection && i && (m.type === `html` || m.type === `svg`) && Rl(f.current, n, i, h)
  let g = (0, b.useRef)(!1)
  ;(0, b.useInsertionEffect)(() => {
    m && g.current && m.update(n, c)
  })
  let _ = n[ji],
    v = (0, b.useRef)(
      !!_ &&
        typeof window < `u` &&
        !window.MotionHandoffIsComplete?.(_) &&
        window.MotionHasOptimisedAnimation?.(_)
    )
  return (
    fe(() => {
      ;((p.current = !0),
        m &&
          ((g.current = !0),
          (window.MotionIsMounted = !0),
          m.updateFeatures(),
          m.scheduleRenderMicrotask(),
          v.current && m.animationState && m.animationState.animateChanges()))
    }),
    (0, b.useEffect)(() => {
      m &&
        (!v.current && m.animationState && m.animationState.animateChanges(),
        (v.current &&=
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(_)
          }),
          !1)),
        (m.enteringChildren = void 0))
    }),
    m
  )
}
function Rl(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t
  ;((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : zl(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Il(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }))
}
function zl(e) {
  if (e) return e.options.allowProjection === !1 ? zl(e.parent) : e.projection
}
function Bl(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && ol(r)
  let a = n ? n === `svg` : El(e),
    o = a ? Ml : jl
  function s(n, s) {
    let c,
      l = { ...(0, b.useContext)(Uc), ...n, layoutId: Vl(n) },
      { isStatic: u } = l,
      d = gl(n),
      f = o(n, u)
    if (!u && typeof window < `u`) {
      Hl(l, r)
      let t = Ul(l)
      ;((c = t.MeasureLayout), (d.visualElement = Ll(e, f, l, i, t.ProjectionNode, a)))
    }
    return (0, k.jsxs)(R.Provider, {
      value: d,
      children: [
        c && d.visualElement ? (0, k.jsx)(c, { visualElement: d.visualElement, ...l }) : null,
        Dl(e, n, Pl(f, d.visualElement, s), f, u, t, a),
      ],
    })
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`
  let c = (0, b.forwardRef)(s)
  return ((c[Nl] = e), c)
}
function Vl({ layoutId: e }) {
  let t = (0, b.useContext)(ue).id
  return t && e !== void 0 ? t + `-` + e : e
}
function Hl(e, t) {
  ;(0, b.useContext)(tl).strict
}
function Ul(e) {
  let { drag: t, layout: n } = al()
  if (!t && !n) return {}
  let r = { ...t, ...n }
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  }
}
function Wl(e, t) {
  if (typeof Proxy > `u`) return Bl
  let n = new Map(),
    r = (n, r) => Bl(n, r, e, t)
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, Bl(a, void 0, e, t)), n.get(a))),
  })
}
var Gl = (e, t) =>
    (t.isSVG ?? El(e)) ? new es(t) : new Wo(t, { allowProjection: e !== b.Fragment }),
  z = class extends po {
    constructor(e) {
      ;(super(e), (e.animationState ||= ss(e)))
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps()
      Ya(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
      this.updateAnimationControlsSubscription()
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {}
      e !== t && this.updateAnimationControlsSubscription()
    }
    unmount() {
      ;(this.node.animationState.reset(), this.unmountControls?.())
    }
  },
  B = 0,
  V = {
    animation: { Feature: z },
    exit: {
      Feature: class extends po {
        constructor() {
          ;(super(...arguments), (this.id = B++), (this.isExitComplete = !1))
        }
        update() {
          if (!this.node.presenceContext) return
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {}
          if (!this.node.animationState || e === n) return
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps()
              if (typeof e == `string`) {
                let n = gi(this.node, e, t)
                if (n) {
                  let { transition: e, transitionEnd: t, ...r } = n
                  for (let e in r) this.node.getValue(e)?.jump(r[e])
                }
              }
              ;(this.node.animationState.reset(), this.node.animationState.animateChanges())
            } else this.node.animationState.setActive(`exit`, !1)
            this.isExitComplete = !1
            return
          }
          let r = this.node.animationState.setActive(`exit`, !e)
          t &&
            !e &&
            r.then(() => {
              ;((this.isExitComplete = !0), t(this.id))
            })
        }
        mount() {
          let { register: e, onExitComplete: t } = this.node.presenceContext || {}
          ;(t && t(this.id), e && (this.unmount = e(this.id)))
        }
        unmount() {}
      },
    },
  }
function H(e) {
  return { point: { x: e.pageX, y: e.pageY } }
}
var U = (e) => (t) => ma(t) && e(t, H(t))
function Kl(e, t, n, r) {
  return ec(e, t, U(n), r)
}
var ql = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Jl = (e, t) => Math.abs(e - t)
function Yl(e, t) {
  let n = Jl(e.x, t.x),
    r = Jl(e.y, t.y)
  return Math.sqrt(n ** 2 + r ** 2)
}
var Xl = new Set([`auto`, `scroll`]),
  Zl = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: a = 3,
        element: o,
      } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (e) => {
          this.handleScroll(e.target)
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window)
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = Ql(this.lastRawMoveEventInfo, this.transformPagePoint))
          let e = eu(this.lastMoveEventInfo, this.history),
            t = this.startEvent !== null,
            n = Yl(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold
          if (!t && !n) return
          let { point: r } = e,
            { timestamp: i } = rt
          this.history.push({ ...r, timestamp: i })
          let { onStart: a, onMove: o } = this.handlers
          ;(t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e))
        }),
        (this.handlePointerMove = (e, t) => {
          ;((this.lastMoveEvent = e),
            (this.lastRawMoveEventInfo = t),
            (this.lastMoveEventInfo = Ql(t, this.transformPagePoint)),
            j.update(this.updatePoint, !0))
        }),
        (this.handlePointerUp = (e, t) => {
          this.end()
          let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return
          let a = eu(
            e.type === `pointercancel` ? this.lastMoveEventInfo : Ql(t, this.transformPagePoint),
            this.history
          )
          ;(this.startEvent && n && n(e, a), r && r(e, a))
        }),
        !ma(e))
      )
        return
      ;((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.distanceThreshold = a),
        (this.contextWindow = r || window))
      let s = Ql(H(e), this.transformPagePoint),
        { point: c } = s,
        { timestamp: l } = rt
      this.history = [{ ...c, timestamp: l }]
      let { onSessionStart: u } = t
      ;(u && u(e, eu(s, this.history)),
        (this.removeListeners = Ce(
          Kl(this.contextWindow, `pointermove`, this.handlePointerMove),
          Kl(this.contextWindow, `pointerup`, this.handlePointerUp),
          Kl(this.contextWindow, `pointercancel`, this.handlePointerUp)
        )),
        o && this.startScrollTracking(o))
    }
    startScrollTracking(e) {
      let t = e.parentElement
      for (; t; ) {
        let e = getComputedStyle(t)
        ;((Xl.has(e.overflowX) || Xl.has(e.overflowY)) &&
          this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
          (t = t.parentElement))
      }
      ;(this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
        window.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
        window.addEventListener(`scroll`, this.onWindowScroll),
        (this.removeScrollListeners = () => {
          ;(window.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
            window.removeEventListener(`scroll`, this.onWindowScroll))
        }))
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e)
      if (!t) return
      let n = e === window,
        r = n ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: r.x - t.x, y: r.y - t.y }
      ;(i.x === 0 && i.y === 0) ||
        (n
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, r),
        j.update(this.updatePoint, !0))
    }
    updateHandlers(e) {
      this.handlers = e
    }
    end() {
      ;(this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        nt(this.updatePoint))
    }
  }
function Ql(e, t) {
  return t ? { point: t(e.point) } : e
}
function $l(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function eu({ point: e }, t) {
  return { point: e, delta: $l(e, nu(t)), offset: $l(e, tu(t)), velocity: ru(t, 0.1) }
}
function tu(e) {
  return e[0]
}
function nu(e) {
  return e[e.length - 1]
}
function ru(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let n = e.length - 1,
    r = null,
    i = nu(e)
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ee(t))); ) n--
  if (!r) return { x: 0, y: 0 }
  r === e[0] && e.length > 2 && i.timestamp - r.timestamp > Ee(t) * 2 && (r = e[1])
  let a = De(i.timestamp - r.timestamp)
  if (a === 0) return { x: 0, y: 0 }
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a }
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o)
}
function iu(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? tn(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? tn(n, e, r.max) : Math.min(e, n)),
    e
  )
}
function au(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  }
}
function ou(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: au(e.x, n, i), y: au(e.y, t, r) }
}
function su(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r })
}
function cu(e, t) {
  return { x: su(e.x, t.x), y: su(e.y, t.y) }
}
function lu(e, t) {
  let n = 0.5,
    r = bs(e),
    i = bs(t)
  return (
    i > r ? (n = we(t.min, t.max - r, e.min)) : r > i && (n = we(e.min, e.max - i, t.min)),
    he(0, 1, n)
  )
}
function uu(e, t) {
  let n = {}
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  )
}
var du = 0.35
function fu(e = du) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = du),
    { x: pu(e, `left`, `right`), y: pu(e, `top`, `bottom`) }
  )
}
function pu(e, t, n) {
  return { min: mu(e, t), max: mu(e, n) }
}
function mu(e, t) {
  return typeof e == `number` ? e : e[t] || 0
}
var hu = new WeakMap(),
  gu = class {
    constructor(e) {
      ;((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = qa()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e))
    }
    start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
      let { presenceContext: r } = this.visualElement
      if (r && r.isPresent === !1) return
      let i = (e) => {
          ;(t && this.snapToCursor(H(e).point), this.stopAnimation())
        },
        a = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps()
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = la(n)),
            !this.openDragLock)
          )
            return
          ;((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Hs((e) => {
              let t = this.getAxisMotionValue(e).get() || 0
              if (jt.test(t)) {
                let { projection: n } = this.visualElement
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e]
                  r && (t = bs(r) * (parseFloat(t) / 100))
                }
              }
              this.originPoint[e] = t
            }),
            i && j.update(() => i(e, t), !1, !0),
            ki(this.visualElement, `transform`))
          let { animationState: a } = this.visualElement
          a && a.setActive(`whileDrag`, !0)
        },
        o = (e, t) => {
          ;((this.latestPointerEvent = e), (this.latestPanInfo = t))
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps()
          if (!n && !this.openDragLock) return
          let { offset: o } = t
          if (r && this.currentDirection === null) {
            ;((this.currentDirection = bu(o)),
              this.currentDirection !== null && i && i(this.currentDirection))
            return
          }
          ;(this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && j.update(() => a(e, t), !1, !0))
        },
        s = (e, t) => {
          ;((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            this.stop(e, t),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null))
        },
        c = () => {
          let { dragSnapToOrigin: e } = this.getProps()
          ;(e || this.constraints) && this.startAnimation({ x: 0, y: 0 })
        },
        { dragSnapToOrigin: l } = this.getProps()
      this.panSession = new Zl(
        e,
        { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s, resumeAnimation: c },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          distanceThreshold: n,
          contextWindow: ql(this.visualElement),
          element: this.visualElement.current,
        }
      )
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging
      if ((this.cancel(), !i || !r || !n)) return
      let { velocity: a } = r
      this.startAnimation(a)
      let { onDragEnd: o } = this.getProps()
      o && j.postRender(() => o(n, r))
    }
    cancel() {
      this.isDragging = !1
      let { projection: e, animationState: t } = this.visualElement
      ;(e && (e.isAnimationBlocked = !1), this.endPanSession())
      let { dragPropagation: n } = this.getProps()
      ;(!n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1))
    }
    endPanSession() {
      ;(this.panSession && this.panSession.end(), (this.panSession = void 0))
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps()
      if (!n || !yu(e, r, this.currentDirection)) return
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e]
      ;(this.constraints &&
        this.constraints[e] &&
        (a = iu(a, this.constraints[e], this.elastic[e])),
        i.set(a))
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints
      ;(e && Il(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : e && n
          ? (this.constraints = ou(n.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = fu(t)),
        r !== this.constraints &&
          !Il(e) &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Hs((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = uu(n.layoutBox[e], this.constraints[e]))
          }))
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps()
      if (!e || !Il(e)) return !1
      let n = e.current,
        { projection: r } = this.visualElement
      if (!r || !r.layout) return !1
      let i = jo(n, r.root, this.visualElement.getTransformPagePoint()),
        a = cu(r.layout.layoutBox, i)
      if (t) {
        let e = t(ho(a))
        ;((this.hasMutatedConstraints = !!e), e && (a = mo(e)))
      }
      return a
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = Hs((o) => {
          if (!yu(o, t, this.currentDirection)) return
          let c = (s && s[o]) || {}
          ;(a === !0 || a === o) && (c = { min: 0, max: 0 })
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            }
          return this.startAxisValueAnimation(o, d)
        })
      return Promise.all(c).then(o)
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e)
      return (ki(this.visualElement, e), n.start(pi(e, n, 0, t, this.visualElement, !1)))
    }
    stopAnimation() {
      Hs((e) => this.getAxisMotionValue(e).stop())
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps()
      return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
      Hs((t) => {
        let { drag: n } = this.getProps()
        if (!yu(t, n, this.currentDirection)) return
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t)
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t],
            o = i.get() || 0
          i.set(e[t] - tn(n, a, 0.5) + o)
        }
      })
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement
      if (!Il(t) || !n || !this.constraints) return
      this.stopAnimation()
      let r = { x: 0, y: 0 }
      Hs((e) => {
        let t = this.getAxisMotionValue(e)
        if (t && this.constraints !== !1) {
          let n = t.get()
          r[e] = lu({ min: n, max: n }, this.constraints[e])
        }
      })
      let { transformTemplate: i } = this.visualElement.getProps()
      ;((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        Hs((t) => {
          if (!yu(t, e, null)) return
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t]
          n.set(tn(i, a, r[t]))
        }),
        this.visualElement.render())
    }
    addListeners() {
      if (!this.visualElement.current) return
      hu.set(this.visualElement, this)
      let e = this.visualElement.current,
        t = Kl(e, `pointerdown`, (t) => {
          let { drag: n, dragListener: r = !0 } = this.getProps(),
            i = t.target,
            a = i !== e && va(i)
          n && r && !a && this.start(t)
        }),
        n,
        r = () => {
          let { dragConstraints: t } = this.getProps()
          Il(t) &&
            t.current &&
            ((this.constraints = this.resolveRefConstraints()),
            (n ||= vu(e, t.current, () => this.scalePositionWithinConstraints())))
        },
        { projection: i } = this.visualElement,
        a = i.addEventListener(`measure`, r)
      ;(i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), j.read(r))
      let o = ec(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
          this.isDragging &&
            t &&
            (Hs((t) => {
              let n = this.getAxisMotionValue(t)
              n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate))
            }),
            this.visualElement.render())
        })
      return () => {
        ;(o(), t(), a(), s && s(), n && n())
      }
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = du,
          dragMomentum: o = !0,
        } = e
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      }
    }
  }
function _u(e) {
  let t = !0
  return () => {
    if (t) {
      t = !1
      return
    }
    e()
  }
}
function vu(e, t, n) {
  let r = Ba(e, _u(n)),
    i = Ba(t, _u(n))
  return () => {
    ;(r(), i())
  }
}
function yu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function bu(e, t = 10) {
  let n = null
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n)
}
var xu = class extends po {
    constructor(e) {
      ;(super(e),
        (this.removeGroupControls = xe),
        (this.removeListeners = xe),
        (this.controls = new gu(e)))
    }
    mount() {
      let { dragControls: e } = this.node.getProps()
      ;(e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || xe))
    }
    update() {
      let { dragControls: e } = this.node.getProps(),
        { dragControls: t } = this.node.prevProps || {}
      e !== t &&
        (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)))
    }
    unmount() {
      ;(this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession())
    }
  },
  Su = (e) => (t, n) => {
    e && j.update(() => e(t, n), !1, !0)
  },
  Cu = class extends po {
    constructor() {
      ;(super(...arguments), (this.removePointerDownListener = xe))
    }
    onPointerDown(e) {
      this.session = new Zl(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: ql(this.node),
      })
    }
    createPanHandlers() {
      let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps()
      return {
        onSessionStart: Su(e),
        onStart: Su(t),
        onMove: Su(n),
        onEnd: (e, t) => {
          ;(delete this.session, r && j.postRender(() => r(e, t)))
        },
      }
    }
    mount() {
      this.removePointerDownListener = Kl(this.node.current, `pointerdown`, (e) =>
        this.onPointerDown(e)
      )
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
      ;(this.removePointerDownListener(), this.session && this.session.end())
    }
  },
  wu = !1,
  Tu = class extends b.Component {
    componentDidMount() {
      let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
        { projection: i } = e
      ;(i &&
        (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        wu && i.root.didUpdate(),
        i.addEventListener(`animationComplete`, () => {
          this.safeToRemove()
        }),
        i.setOptions({
          ...i.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (oc.hasEverUpdated = !0))
    }
    getSnapshotBeforeUpdate(e) {
      let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
        { projection: a } = n
      return a
        ? ((a.isPresent = i),
          e.layoutDependency !== t && a.setOptions({ ...a.options, layoutDependency: t }),
          (wu = !0),
          r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                j.postRender(() => {
                  let e = a.getStack()
                  ;(!e || !e.members.length) && this.safeToRemove()
                })),
          null)
        : null
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: t } = this.props,
        { projection: n } = e
      n &&
        ((n.options.layoutAnchor = t),
        n.root.didUpdate(),
        aa.postRender(() => {
          !n.currentAnimation && n.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
      let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
        { projection: r } = e
      ;((wu = !0),
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r)))
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props
      e && e()
    }
    render() {
      return null
    }
  }
function Eu(e) {
  let [t, n] = Zc(),
    r = (0, b.useContext)(ue)
  return (0, k.jsx)(Tu, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, b.useContext)(Fl),
    isPresent: t,
    safeToRemove: n,
  })
}
var Du = { pan: { Feature: Cu }, drag: { Feature: xu, ProjectionNode: Hc, MeasureLayout: Eu } }
function Ou(e, t, n) {
  let { props: r } = e
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`)
  let i = r[`onHover` + n]
  i && j.postRender(() => i(t, H(t)))
}
var ku = class extends po {
    mount() {
      let { current: e } = this.node
      e &&
        (this.unmount = fa(
          e,
          (e, t) => (Ou(this.node, t, `Start`), (e) => Ou(this.node, e, `End`))
        ))
    }
    unmount() {}
  },
  Au = class extends po {
    constructor() {
      ;(super(...arguments), (this.isActive = !1))
    }
    onFocus() {
      let e = !1
      try {
        e = this.node.current.matches(`:focus-visible`)
      } catch {
        e = !0
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0))
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1))
    }
    mount() {
      this.unmount = Ce(
        ec(this.node.current, `focus`, () => this.onFocus()),
        ec(this.node.current, `blur`, () => this.onBlur())
      )
    }
    unmount() {}
  }
function ju(e, t, n) {
  let { props: r } = e
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`)
  let i = r[`onTap` + (n === `End` ? `` : n)]
  i && j.postRender(() => i(t, H(t)))
}
var Mu = class extends po {
    mount() {
      let { current: e } = this.node
      if (!e) return
      let { globalTapTarget: t, propagate: n } = this.node.props
      this.unmount = Ta(
        e,
        (e, t) => (
          ju(this.node, t, `Start`),
          (e, { success: t }) => ju(this.node, e, t ? `End` : `Cancel`)
        ),
        { useGlobalTarget: t, stopPropagation: n?.tap === !1 }
      )
    }
    unmount() {}
  },
  Nu = new WeakMap(),
  Pu = new WeakMap(),
  Fu = (e) => {
    let t = Nu.get(e.target)
    t && t(e)
  },
  Iu = (e) => {
    e.forEach(Fu)
  }
function Lu({ root: e, ...t }) {
  let n = e || document
  Pu.has(n) || Pu.set(n, {})
  let r = Pu.get(n),
    i = JSON.stringify(t)
  return (r[i] || (r[i] = new IntersectionObserver(Iu, { root: e, ...t })), r[i])
}
function Ru(e, t, n) {
  let r = Lu(t)
  return (
    Nu.set(e, n),
    r.observe(e),
    () => {
      ;(Nu.delete(e), r.unobserve(e))
    }
  )
}
var zu = { some: 0, all: 1 },
  Bu = class extends po {
    constructor() {
      ;(super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1))
    }
    startObserver() {
      this.stopObserver?.()
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : zu[r],
        },
        o = (e) => {
          let { isIntersecting: t } = e
          if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView)) return
          ;(t && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive(`whileInView`, t))
          let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
            a = t ? n : r
          a && a(e)
        }
      this.stopObserver = Ru(this.node.current, a, o)
    }
    mount() {
      this.startObserver()
    }
    update() {
      if (typeof IntersectionObserver > `u`) return
      let { props: e, prevProps: t } = this.node
      ;[`amount`, `margin`, `root`].some(Vu(e, t)) && this.startObserver()
    }
    unmount() {
      ;(this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1))
    }
  }
function Vu({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n]
}
var Hu = {
    inView: { Feature: Bu },
    tap: { Feature: Mu },
    focus: { Feature: Au },
    hover: { Feature: ku },
  },
  Uu = { layout: { ProjectionNode: Hc, MeasureLayout: Eu } },
  Wu = Wl({ ...V, ...Hu, ...Du, ...Uu }, Gl),
  Gu = [
    { name: `planner`, label: `Planner` },
    { name: `researcher`, label: `Researcher ×N`, indent: !0 },
    { name: `summarizer`, label: `Summarizer`, indent: !0 },
    { name: `synthesizer`, label: `Synthesizer` },
  ],
  Ku = { idle: `bg-zinc-700`, active: `bg-indigo-500`, done: `bg-cyan-500`, error: `bg-red-500` },
  qu = { idle: `○`, active: `●`, done: `✓`, error: `✗` }
function Ju() {
  let { agentStatuses: e, subtopics: t } = te()
  return (0, k.jsxs)(`div`, {
    className: `font-mono text-xs space-y-2`,
    children: [
      (0, k.jsx)(`p`, {
        className: `text-zinc-500 uppercase tracking-widest text-[10px] mb-3`,
        children: `Agent Trace`,
      }),
      Gu.map(({ name: t, label: n, indent: r }) => {
        let i = e[t]
        return (0, k.jsxs)(
          Wu.div,
          {
            className: `flex items-center gap-2 ${r ? `ml-4` : ``}`,
            animate: { opacity: i === `idle` ? 0.4 : 1 },
            transition: { duration: 0.3 },
            children: [
              (0, k.jsx)(Wu.span, {
                className: `w-2 h-2 rounded-full ${Ku[i]}`,
                animate: i === `active` ? { scale: [1, 1.4, 1] } : { scale: 1 },
                transition: { repeat: 1 / 0, duration: 1 },
              }),
              (0, k.jsxs)(`span`, {
                className: i === `active` ? `text-indigo-300` : `text-zinc-400`,
                children: [qu[i], ` `, n],
              }),
            ],
          },
          t
        )
      }),
      t.length > 0 &&
        (0, k.jsxs)(`div`, {
          className: `mt-3 ml-4 space-y-1`,
          children: [
            (0, k.jsx)(`p`, {
              className: `text-zinc-600 text-[10px] uppercase tracking-widest`,
              children: `Subtopics`,
            }),
            t.map((e, t) =>
              (0, k.jsxs)(
                `div`,
                { className: `text-zinc-500 text-[10px] truncate`, children: [`· `, e] },
                t
              )
            ),
          ],
        }),
    ],
  })
}
var Yu = 365.2425,
  Xu = 6048e5,
  Zu = 864e5,
  W = 3600 * 24
;(W * 7, ((W * Yu) / 12) * 3)
var Qu = Symbol.for(`constructDateFrom`)
function $u(e, t) {
  return typeof e == `function`
    ? e(t)
    : e && typeof e == `object` && Qu in e
      ? e[Qu](t)
      : e instanceof Date
        ? new e.constructor(t)
        : new Date(t)
}
function ed(e, t) {
  return $u(t || e, e)
}
var td = {}
function nd() {
  return td
}
function rd(e, t) {
  let n = nd(),
    r =
      t?.weekStartsOn ??
      t?.locale?.options?.weekStartsOn ??
      n.weekStartsOn ??
      n.locale?.options?.weekStartsOn ??
      0,
    i = ed(e, t?.in),
    a = i.getDay(),
    o = (a < r ? 7 : 0) + a - r
  return (i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i)
}
function id(e, t) {
  return rd(e, { ...t, weekStartsOn: 1 })
}
function ad(e, t) {
  let n = ed(e, t?.in),
    r = n.getFullYear(),
    i = $u(n, 0)
  ;(i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0))
  let a = id(i),
    o = $u(n, 0)
  ;(o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0))
  let s = id(o)
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1
}
function od(e) {
  let t = ed(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    )
  return (n.setUTCFullYear(t.getFullYear()), e - +n)
}
function sd(e, ...t) {
  let n = $u.bind(null, e || t.find((e) => typeof e == `object`))
  return t.map(n)
}
function cd(e, t) {
  let n = ed(e, t?.in)
  return (n.setHours(0, 0, 0, 0), n)
}
function ld(e, t, n) {
  let [r, i] = sd(n?.in, e, t),
    a = cd(r),
    o = cd(i),
    s = +a - od(a),
    c = +o - od(o)
  return Math.round((s - c) / Zu)
}
function ud(e, t) {
  let n = ad(e, t),
    r = $u(t?.in || e, 0)
  return (r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), id(r))
}
function dd(e) {
  return (
    e instanceof Date ||
    (typeof e == `object` && Object.prototype.toString.call(e) === `[object Date]`)
  )
}
function fd(e) {
  return !((!dd(e) && typeof e != `number`) || isNaN(+ed(e)))
}
function pd(e, t) {
  let n = ed(e, t?.in)
  return (n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n)
}
var md = {
    lessThanXSeconds: { one: `less than a second`, other: `less than {{count}} seconds` },
    xSeconds: { one: `1 second`, other: `{{count}} seconds` },
    halfAMinute: `half a minute`,
    lessThanXMinutes: { one: `less than a minute`, other: `less than {{count}} minutes` },
    xMinutes: { one: `1 minute`, other: `{{count}} minutes` },
    aboutXHours: { one: `about 1 hour`, other: `about {{count}} hours` },
    xHours: { one: `1 hour`, other: `{{count}} hours` },
    xDays: { one: `1 day`, other: `{{count}} days` },
    aboutXWeeks: { one: `about 1 week`, other: `about {{count}} weeks` },
    xWeeks: { one: `1 week`, other: `{{count}} weeks` },
    aboutXMonths: { one: `about 1 month`, other: `about {{count}} months` },
    xMonths: { one: `1 month`, other: `{{count}} months` },
    aboutXYears: { one: `about 1 year`, other: `about {{count}} years` },
    xYears: { one: `1 year`, other: `{{count}} years` },
    overXYears: { one: `over 1 year`, other: `over {{count}} years` },
    almostXYears: { one: `almost 1 year`, other: `almost {{count}} years` },
  },
  hd = (e, t, n) => {
    let r,
      i = md[e]
    return (
      (r = typeof i == `string` ? i : t === 1 ? i.one : i.other.replace(`{{count}}`, t.toString())),
      n?.addSuffix ? (n.comparison && n.comparison > 0 ? `in ` + r : r + ` ago`) : r
    )
  }
function gd(e) {
  return (t = {}) => {
    let n = t.width ? String(t.width) : e.defaultWidth
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
var _d = {
    date: gd({
      formats: {
        full: `EEEE, MMMM do, y`,
        long: `MMMM do, y`,
        medium: `MMM d, y`,
        short: `MM/dd/yyyy`,
      },
      defaultWidth: `full`,
    }),
    time: gd({
      formats: {
        full: `h:mm:ss a zzzz`,
        long: `h:mm:ss a z`,
        medium: `h:mm:ss a`,
        short: `h:mm a`,
      },
      defaultWidth: `full`,
    }),
    dateTime: gd({
      formats: {
        full: `{{date}} 'at' {{time}}`,
        long: `{{date}} 'at' {{time}}`,
        medium: `{{date}}, {{time}}`,
        short: `{{date}}, {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  vd = {
    lastWeek: `'last' eeee 'at' p`,
    yesterday: `'yesterday at' p`,
    today: `'today at' p`,
    tomorrow: `'tomorrow at' p`,
    nextWeek: `eeee 'at' p`,
    other: `P`,
  },
  yd = (e, t, n, r) => vd[e]
function bd(e) {
  return (t, n) => {
    let r = n?.context ? String(n.context) : `standalone`,
      i
    if (r === `formatting` && e.formattingValues) {
      let t = e.defaultFormattingWidth || e.defaultWidth,
        r = n?.width ? String(n.width) : t
      i = e.formattingValues[r] || e.formattingValues[t]
    } else {
      let t = e.defaultWidth,
        r = n?.width ? String(n.width) : e.defaultWidth
      i = e.values[r] || e.values[t]
    }
    let a = e.argumentCallback ? e.argumentCallback(t) : t
    return i[a]
  }
}
var xd = {
  ordinalNumber: (e, t) => {
    let n = Number(e),
      r = n % 100
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + `st`
        case 2:
          return n + `nd`
        case 3:
          return n + `rd`
      }
    return n + `th`
  },
  era: bd({
    values: {
      narrow: [`B`, `A`],
      abbreviated: [`BC`, `AD`],
      wide: [`Before Christ`, `Anno Domini`],
    },
    defaultWidth: `wide`,
  }),
  quarter: bd({
    values: {
      narrow: [`1`, `2`, `3`, `4`],
      abbreviated: [`Q1`, `Q2`, `Q3`, `Q4`],
      wide: [`1st quarter`, `2nd quarter`, `3rd quarter`, `4th quarter`],
    },
    defaultWidth: `wide`,
    argumentCallback: (e) => e - 1,
  }),
  month: bd({
    values: {
      narrow: [`J`, `F`, `M`, `A`, `M`, `J`, `J`, `A`, `S`, `O`, `N`, `D`],
      abbreviated: [
        `Jan`,
        `Feb`,
        `Mar`,
        `Apr`,
        `May`,
        `Jun`,
        `Jul`,
        `Aug`,
        `Sep`,
        `Oct`,
        `Nov`,
        `Dec`,
      ],
      wide: [
        `January`,
        `February`,
        `March`,
        `April`,
        `May`,
        `June`,
        `July`,
        `August`,
        `September`,
        `October`,
        `November`,
        `December`,
      ],
    },
    defaultWidth: `wide`,
  }),
  day: bd({
    values: {
      narrow: [`S`, `M`, `T`, `W`, `T`, `F`, `S`],
      short: [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`],
      abbreviated: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
      wide: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
    },
    defaultWidth: `wide`,
  }),
  dayPeriod: bd({
    values: {
      narrow: {
        am: `a`,
        pm: `p`,
        midnight: `mi`,
        noon: `n`,
        morning: `morning`,
        afternoon: `afternoon`,
        evening: `evening`,
        night: `night`,
      },
      abbreviated: {
        am: `AM`,
        pm: `PM`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `morning`,
        afternoon: `afternoon`,
        evening: `evening`,
        night: `night`,
      },
      wide: {
        am: `a.m.`,
        pm: `p.m.`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `morning`,
        afternoon: `afternoon`,
        evening: `evening`,
        night: `night`,
      },
    },
    defaultWidth: `wide`,
    formattingValues: {
      narrow: {
        am: `a`,
        pm: `p`,
        midnight: `mi`,
        noon: `n`,
        morning: `in the morning`,
        afternoon: `in the afternoon`,
        evening: `in the evening`,
        night: `at night`,
      },
      abbreviated: {
        am: `AM`,
        pm: `PM`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `in the morning`,
        afternoon: `in the afternoon`,
        evening: `in the evening`,
        night: `at night`,
      },
      wide: {
        am: `a.m.`,
        pm: `p.m.`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `in the morning`,
        afternoon: `in the afternoon`,
        evening: `in the evening`,
        night: `at night`,
      },
    },
    defaultFormattingWidth: `wide`,
  }),
}
function Sd(e) {
  return (t, n = {}) => {
    let r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      a = t.match(i)
    if (!a) return null
    let o = a[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      c = Array.isArray(s) ? wd(s, (e) => e.test(o)) : Cd(s, (e) => e.test(o)),
      l
    ;((l = e.valueCallback ? e.valueCallback(c) : c),
      (l = n.valueCallback ? n.valueCallback(l) : l))
    let u = t.slice(o.length)
    return { value: l, rest: u }
  }
}
function Cd(e, t) {
  for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n
}
function wd(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n
}
function Td(e) {
  return (t, n = {}) => {
    let r = t.match(e.matchPattern)
    if (!r) return null
    let i = r[0],
      a = t.match(e.parsePattern)
    if (!a) return null
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0]
    o = n.valueCallback ? n.valueCallback(o) : o
    let s = t.slice(i.length)
    return { value: o, rest: s }
  }
}
var Ed = {
  code: `en-US`,
  formatDistance: hd,
  formatLong: _d,
  formatRelative: yd,
  localize: xd,
  match: {
    ordinalNumber: Td({
      matchPattern: /^(\d+)(th|st|nd|rd)?/i,
      parsePattern: /\d+/i,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Sd({
      matchPatterns: {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: { any: [/^b/i, /^(a|c)/i] },
      defaultParseWidth: `any`,
    }),
    quarter: Sd({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
      defaultParseWidth: `any`,
      valueCallback: (e) => e + 1,
    }),
    month: Sd({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      defaultParseWidth: `any`,
    }),
    day: Sd({
      matchPatterns: {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      defaultParseWidth: `any`,
    }),
    dayPeriod: Sd({
      matchPatterns: {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      defaultMatchWidth: `any`,
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      defaultParseWidth: `any`,
    }),
  },
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
}
function G(e, t) {
  let n = ed(e, t?.in)
  return ld(n, pd(n)) + 1
}
function Dd(e, t) {
  let n = ed(e, t?.in),
    r = id(n) - +ud(n)
  return Math.round(r / Xu) + 1
}
function Od(e, t) {
  let n = ed(e, t?.in),
    r = n.getFullYear(),
    i = nd(),
    a =
      t?.firstWeekContainsDate ??
      t?.locale?.options?.firstWeekContainsDate ??
      i.firstWeekContainsDate ??
      i.locale?.options?.firstWeekContainsDate ??
      1,
    o = $u(t?.in || e, 0)
  ;(o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0))
  let s = rd(o, t),
    c = $u(t?.in || e, 0)
  ;(c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0))
  let l = rd(c, t)
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1
}
function kd(e, t) {
  let n = nd(),
    r =
      t?.firstWeekContainsDate ??
      t?.locale?.options?.firstWeekContainsDate ??
      n.firstWeekContainsDate ??
      n.locale?.options?.firstWeekContainsDate ??
      1,
    i = Od(e, t),
    a = $u(t?.in || e, 0)
  return (a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), rd(a, t))
}
function Ad(e, t) {
  let n = ed(e, t?.in),
    r = rd(n, t) - +kd(n, t)
  return Math.round(r / Xu) + 1
}
function K(e, t) {
  return (e < 0 ? `-` : ``) + Math.abs(e).toString().padStart(t, `0`)
}
var jd = {
    y(e, t) {
      let n = e.getFullYear(),
        r = n > 0 ? n : 1 - n
      return K(t === `yy` ? r % 100 : r, t.length)
    },
    M(e, t) {
      let n = e.getMonth()
      return t === `M` ? String(n + 1) : K(n + 1, 2)
    },
    d(e, t) {
      return K(e.getDate(), t.length)
    },
    a(e, t) {
      let n = e.getHours() / 12 >= 1 ? `pm` : `am`
      switch (t) {
        case `a`:
        case `aa`:
          return n.toUpperCase()
        case `aaa`:
          return n
        case `aaaaa`:
          return n[0]
        default:
          return n === `am` ? `a.m.` : `p.m.`
      }
    },
    h(e, t) {
      return K(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
      return K(e.getHours(), t.length)
    },
    m(e, t) {
      return K(e.getMinutes(), t.length)
    },
    s(e, t) {
      return K(e.getSeconds(), t.length)
    },
    S(e, t) {
      let n = t.length,
        r = e.getMilliseconds()
      return K(Math.trunc(r * 10 ** (n - 3)), t.length)
    },
  },
  Md = {
    am: `am`,
    pm: `pm`,
    midnight: `midnight`,
    noon: `noon`,
    morning: `morning`,
    afternoon: `afternoon`,
    evening: `evening`,
    night: `night`,
  },
  Nd = {
    G: function (e, t, n) {
      let r = +(e.getFullYear() > 0)
      switch (t) {
        case `G`:
        case `GG`:
        case `GGG`:
          return n.era(r, { width: `abbreviated` })
        case `GGGGG`:
          return n.era(r, { width: `narrow` })
        default:
          return n.era(r, { width: `wide` })
      }
    },
    y: function (e, t, n) {
      if (t === `yo`) {
        let t = e.getFullYear(),
          r = t > 0 ? t : 1 - t
        return n.ordinalNumber(r, { unit: `year` })
      }
      return jd.y(e, t)
    },
    Y: function (e, t, n, r) {
      let i = Od(e, r),
        a = i > 0 ? i : 1 - i
      return t === `YY`
        ? K(a % 100, 2)
        : t === `Yo`
          ? n.ordinalNumber(a, { unit: `year` })
          : K(a, t.length)
    },
    R: function (e, t) {
      return K(ad(e), t.length)
    },
    u: function (e, t) {
      return K(e.getFullYear(), t.length)
    },
    Q: function (e, t, n) {
      let r = Math.ceil((e.getMonth() + 1) / 3)
      switch (t) {
        case `Q`:
          return String(r)
        case `QQ`:
          return K(r, 2)
        case `Qo`:
          return n.ordinalNumber(r, { unit: `quarter` })
        case `QQQ`:
          return n.quarter(r, { width: `abbreviated`, context: `formatting` })
        case `QQQQQ`:
          return n.quarter(r, { width: `narrow`, context: `formatting` })
        default:
          return n.quarter(r, { width: `wide`, context: `formatting` })
      }
    },
    q: function (e, t, n) {
      let r = Math.ceil((e.getMonth() + 1) / 3)
      switch (t) {
        case `q`:
          return String(r)
        case `qq`:
          return K(r, 2)
        case `qo`:
          return n.ordinalNumber(r, { unit: `quarter` })
        case `qqq`:
          return n.quarter(r, { width: `abbreviated`, context: `standalone` })
        case `qqqqq`:
          return n.quarter(r, { width: `narrow`, context: `standalone` })
        default:
          return n.quarter(r, { width: `wide`, context: `standalone` })
      }
    },
    M: function (e, t, n) {
      let r = e.getMonth()
      switch (t) {
        case `M`:
        case `MM`:
          return jd.M(e, t)
        case `Mo`:
          return n.ordinalNumber(r + 1, { unit: `month` })
        case `MMM`:
          return n.month(r, { width: `abbreviated`, context: `formatting` })
        case `MMMMM`:
          return n.month(r, { width: `narrow`, context: `formatting` })
        default:
          return n.month(r, { width: `wide`, context: `formatting` })
      }
    },
    L: function (e, t, n) {
      let r = e.getMonth()
      switch (t) {
        case `L`:
          return String(r + 1)
        case `LL`:
          return K(r + 1, 2)
        case `Lo`:
          return n.ordinalNumber(r + 1, { unit: `month` })
        case `LLL`:
          return n.month(r, { width: `abbreviated`, context: `standalone` })
        case `LLLLL`:
          return n.month(r, { width: `narrow`, context: `standalone` })
        default:
          return n.month(r, { width: `wide`, context: `standalone` })
      }
    },
    w: function (e, t, n, r) {
      let i = Ad(e, r)
      return t === `wo` ? n.ordinalNumber(i, { unit: `week` }) : K(i, t.length)
    },
    I: function (e, t, n) {
      let r = Dd(e)
      return t === `Io` ? n.ordinalNumber(r, { unit: `week` }) : K(r, t.length)
    },
    d: function (e, t, n) {
      return t === `do` ? n.ordinalNumber(e.getDate(), { unit: `date` }) : jd.d(e, t)
    },
    D: function (e, t, n) {
      let r = G(e)
      return t === `Do` ? n.ordinalNumber(r, { unit: `dayOfYear` }) : K(r, t.length)
    },
    E: function (e, t, n) {
      let r = e.getDay()
      switch (t) {
        case `E`:
        case `EE`:
        case `EEE`:
          return n.day(r, { width: `abbreviated`, context: `formatting` })
        case `EEEEE`:
          return n.day(r, { width: `narrow`, context: `formatting` })
        case `EEEEEE`:
          return n.day(r, { width: `short`, context: `formatting` })
        default:
          return n.day(r, { width: `wide`, context: `formatting` })
      }
    },
    e: function (e, t, n, r) {
      let i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case `e`:
          return String(a)
        case `ee`:
          return K(a, 2)
        case `eo`:
          return n.ordinalNumber(a, { unit: `day` })
        case `eee`:
          return n.day(i, { width: `abbreviated`, context: `formatting` })
        case `eeeee`:
          return n.day(i, { width: `narrow`, context: `formatting` })
        case `eeeeee`:
          return n.day(i, { width: `short`, context: `formatting` })
        default:
          return n.day(i, { width: `wide`, context: `formatting` })
      }
    },
    c: function (e, t, n, r) {
      let i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case `c`:
          return String(a)
        case `cc`:
          return K(a, t.length)
        case `co`:
          return n.ordinalNumber(a, { unit: `day` })
        case `ccc`:
          return n.day(i, { width: `abbreviated`, context: `standalone` })
        case `ccccc`:
          return n.day(i, { width: `narrow`, context: `standalone` })
        case `cccccc`:
          return n.day(i, { width: `short`, context: `standalone` })
        default:
          return n.day(i, { width: `wide`, context: `standalone` })
      }
    },
    i: function (e, t, n) {
      let r = e.getDay(),
        i = r === 0 ? 7 : r
      switch (t) {
        case `i`:
          return String(i)
        case `ii`:
          return K(i, t.length)
        case `io`:
          return n.ordinalNumber(i, { unit: `day` })
        case `iii`:
          return n.day(r, { width: `abbreviated`, context: `formatting` })
        case `iiiii`:
          return n.day(r, { width: `narrow`, context: `formatting` })
        case `iiiiii`:
          return n.day(r, { width: `short`, context: `formatting` })
        default:
          return n.day(r, { width: `wide`, context: `formatting` })
      }
    },
    a: function (e, t, n) {
      let r = e.getHours() / 12 >= 1 ? `pm` : `am`
      switch (t) {
        case `a`:
        case `aa`:
          return n.dayPeriod(r, { width: `abbreviated`, context: `formatting` })
        case `aaa`:
          return n.dayPeriod(r, { width: `abbreviated`, context: `formatting` }).toLowerCase()
        case `aaaaa`:
          return n.dayPeriod(r, { width: `narrow`, context: `formatting` })
        default:
          return n.dayPeriod(r, { width: `wide`, context: `formatting` })
      }
    },
    b: function (e, t, n) {
      let r = e.getHours(),
        i
      switch (((i = r === 12 ? Md.noon : r === 0 ? Md.midnight : r / 12 >= 1 ? `pm` : `am`), t)) {
        case `b`:
        case `bb`:
          return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` })
        case `bbb`:
          return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` }).toLowerCase()
        case `bbbbb`:
          return n.dayPeriod(i, { width: `narrow`, context: `formatting` })
        default:
          return n.dayPeriod(i, { width: `wide`, context: `formatting` })
      }
    },
    B: function (e, t, n) {
      let r = e.getHours(),
        i
      switch (
        ((i = r >= 17 ? Md.evening : r >= 12 ? Md.afternoon : r >= 4 ? Md.morning : Md.night), t)
      ) {
        case `B`:
        case `BB`:
        case `BBB`:
          return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` })
        case `BBBBB`:
          return n.dayPeriod(i, { width: `narrow`, context: `formatting` })
        default:
          return n.dayPeriod(i, { width: `wide`, context: `formatting` })
      }
    },
    h: function (e, t, n) {
      if (t === `ho`) {
        let t = e.getHours() % 12
        return (t === 0 && (t = 12), n.ordinalNumber(t, { unit: `hour` }))
      }
      return jd.h(e, t)
    },
    H: function (e, t, n) {
      return t === `Ho` ? n.ordinalNumber(e.getHours(), { unit: `hour` }) : jd.H(e, t)
    },
    K: function (e, t, n) {
      let r = e.getHours() % 12
      return t === `Ko` ? n.ordinalNumber(r, { unit: `hour` }) : K(r, t.length)
    },
    k: function (e, t, n) {
      let r = e.getHours()
      return (
        r === 0 && (r = 24),
        t === `ko` ? n.ordinalNumber(r, { unit: `hour` }) : K(r, t.length)
      )
    },
    m: function (e, t, n) {
      return t === `mo` ? n.ordinalNumber(e.getMinutes(), { unit: `minute` }) : jd.m(e, t)
    },
    s: function (e, t, n) {
      return t === `so` ? n.ordinalNumber(e.getSeconds(), { unit: `second` }) : jd.s(e, t)
    },
    S: function (e, t) {
      return jd.S(e, t)
    },
    X: function (e, t, n) {
      let r = e.getTimezoneOffset()
      if (r === 0) return `Z`
      switch (t) {
        case `X`:
          return Fd(r)
        case `XXXX`:
        case `XX`:
          return Id(r)
        default:
          return Id(r, `:`)
      }
    },
    x: function (e, t, n) {
      let r = e.getTimezoneOffset()
      switch (t) {
        case `x`:
          return Fd(r)
        case `xxxx`:
        case `xx`:
          return Id(r)
        default:
          return Id(r, `:`)
      }
    },
    O: function (e, t, n) {
      let r = e.getTimezoneOffset()
      switch (t) {
        case `O`:
        case `OO`:
        case `OOO`:
          return `GMT` + Pd(r, `:`)
        default:
          return `GMT` + Id(r, `:`)
      }
    },
    z: function (e, t, n) {
      let r = e.getTimezoneOffset()
      switch (t) {
        case `z`:
        case `zz`:
        case `zzz`:
          return `GMT` + Pd(r, `:`)
        default:
          return `GMT` + Id(r, `:`)
      }
    },
    t: function (e, t, n) {
      return K(Math.trunc(e / 1e3), t.length)
    },
    T: function (e, t, n) {
      return K(+e, t.length)
    },
  }
function Pd(e, t = ``) {
  let n = e > 0 ? `-` : `+`,
    r = Math.abs(e),
    i = Math.trunc(r / 60),
    a = r % 60
  return a === 0 ? n + String(i) : n + String(i) + t + K(a, 2)
}
function Fd(e, t) {
  return e % 60 == 0 ? (e > 0 ? `-` : `+`) + K(Math.abs(e) / 60, 2) : Id(e, t)
}
function Id(e, t = ``) {
  let n = e > 0 ? `-` : `+`,
    r = Math.abs(e),
    i = K(Math.trunc(r / 60), 2),
    a = K(r % 60, 2)
  return n + i + t + a
}
var Ld = (e, t) => {
    switch (e) {
      case `P`:
        return t.date({ width: `short` })
      case `PP`:
        return t.date({ width: `medium` })
      case `PPP`:
        return t.date({ width: `long` })
      default:
        return t.date({ width: `full` })
    }
  },
  Rd = (e, t) => {
    switch (e) {
      case `p`:
        return t.time({ width: `short` })
      case `pp`:
        return t.time({ width: `medium` })
      case `ppp`:
        return t.time({ width: `long` })
      default:
        return t.time({ width: `full` })
    }
  },
  q = {
    p: Rd,
    P: (e, t) => {
      let n = e.match(/(P+)(p+)?/) || [],
        r = n[1],
        i = n[2]
      if (!i) return Ld(e, t)
      let a
      switch (r) {
        case `P`:
          a = t.dateTime({ width: `short` })
          break
        case `PP`:
          a = t.dateTime({ width: `medium` })
          break
        case `PPP`:
          a = t.dateTime({ width: `long` })
          break
        default:
          a = t.dateTime({ width: `full` })
          break
      }
      return a.replace(`{{date}}`, Ld(r, t)).replace(`{{time}}`, Rd(i, t))
    },
  },
  zd = /^D+$/,
  Bd = /^Y+$/,
  Vd = [`D`, `DD`, `YY`, `YYYY`]
function Hd(e) {
  return zd.test(e)
}
function Ud(e) {
  return Bd.test(e)
}
function Wd(e, t, n) {
  let r = Gd(e, t, n)
  if ((console.warn(r), Vd.includes(e))) throw RangeError(r)
}
function Gd(e, t, n) {
  let r = e[0] === `Y` ? `years` : `days of the month`
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
var Kd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  qd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Jd = /^'([^]*?)'?$/,
  Yd = /''/g,
  Xd = /[a-zA-Z]/
function Zd(e, t, n) {
  let r = nd(),
    i = n?.locale ?? r.locale ?? Ed,
    a =
      n?.firstWeekContainsDate ??
      n?.locale?.options?.firstWeekContainsDate ??
      r.firstWeekContainsDate ??
      r.locale?.options?.firstWeekContainsDate ??
      1,
    o =
      n?.weekStartsOn ??
      n?.locale?.options?.weekStartsOn ??
      r.weekStartsOn ??
      r.locale?.options?.weekStartsOn ??
      0,
    s = ed(e, n?.in)
  if (!fd(s)) throw RangeError(`Invalid time value`)
  let c = t
    .match(qd)
    .map((e) => {
      let t = e[0]
      if (t === `p` || t === `P`) {
        let n = q[t]
        return n(e, i.formatLong)
      }
      return e
    })
    .join(``)
    .match(Kd)
    .map((e) => {
      if (e === `''`) return { isToken: !1, value: `'` }
      let t = e[0]
      if (t === `'`) return { isToken: !1, value: Qd(e) }
      if (Nd[t]) return { isToken: !0, value: e }
      if (t.match(Xd))
        throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`")
      return { isToken: !1, value: e }
    })
  i.localize.preprocessor && (c = i.localize.preprocessor(s, c))
  let l = { firstWeekContainsDate: a, weekStartsOn: o, locale: i }
  return c
    .map((r) => {
      if (!r.isToken) return r.value
      let a = r.value
      ;((!n?.useAdditionalWeekYearTokens && Ud(a)) ||
        (!n?.useAdditionalDayOfYearTokens && Hd(a))) &&
        Wd(a, t, String(e))
      let o = Nd[a[0]]
      return o(s, a, i.localize, l)
    })
    .join(``)
}
function Qd(e) {
  let t = e.match(Jd)
  return t ? t[1].replace(Yd, `'`) : e
}
var $d = {
  PLAN_CREATED: `text-cyan-400`,
  SEARCH_DONE: `text-blue-400`,
  RAG_DONE: `text-violet-400`,
  SOURCES_COLLECTED: `text-green-400`,
  SUMMARY_CHUNK: `text-yellow-400`,
  SUMMARY_DONE: `text-yellow-300`,
  REPORT_CHUNK: `text-indigo-400`,
  REPORT_DONE: `text-indigo-300`,
  ERROR: `text-red-400`,
}
function ef(e, t, n) {
  switch (e) {
    case `PLAN_CREATED`:
      return `Plan created — ${t.subtopics?.length ?? 0} subtopics`
    case `SOURCES_COLLECTED`:
      return `Sources collected${n ? ` [${n}]` : ``} — ${t.count ?? 0} results`
    case `SUMMARY_DONE`:
      return `Summary done${n ? ` [${n}]` : ``}`
    case `REPORT_CHUNK`:
      return `Synthesizing report...`
    case `REPORT_DONE`:
      return `Report complete`
    case `ERROR`:
      return `Error: ${t.message ?? `unknown`}`
    default:
      return e
  }
}
function tf() {
  let e = te((e) => e.events),
    t = (0, b.useRef)(null)
  return (
    (0, b.useEffect)(() => {
      t.current?.scrollIntoView({ behavior: `smooth` })
    }, [e]),
    e.length === 0
      ? (0, k.jsx)(`div`, {
          className: `h-full flex items-center justify-center`,
          children: (0, k.jsx)(`p`, {
            className: `font-mono text-xs text-zinc-700`,
            children: `Awaiting research query...`,
          }),
        })
      : (0, k.jsxs)(`div`, {
          className: `h-full overflow-y-auto font-mono text-xs space-y-1 pr-1`,
          children: [
            e
              .filter((e) => e.event !== `REPORT_CHUNK`)
              .map((e, t) =>
                (0, k.jsxs)(
                  `div`,
                  {
                    className: `flex gap-2 items-start`,
                    children: [
                      (0, k.jsx)(`span`, {
                        className: `text-zinc-600 shrink-0`,
                        children: Zd(new Date(e.timestamp), `HH:mm:ss`),
                      }),
                      (0, k.jsx)(`span`, { className: `${$d[e.event]} shrink-0`, children: `●` }),
                      (0, k.jsx)(`span`, {
                        className: `text-zinc-300`,
                        children: ef(e.event, e.data, e.subtopic),
                      }),
                    ],
                  },
                  t
                )
              ),
            (0, k.jsx)(`div`, { ref: t }),
          ],
        })
  )
}
function nf() {
  let { sources: e, subtopics: t } = te(),
    [n, r] = (0, b.useState)(0),
    i = t.length > 0 ? t : Object.keys(e),
    a = i[n],
    o = a ? (e[a] ?? []) : []
  return i.length === 0
    ? (0, k.jsx)(`div`, {
        className: `h-full flex items-center justify-center`,
        children: (0, k.jsx)(`p`, {
          className: `font-mono text-xs text-zinc-700`,
          children: `Sources will appear here...`,
        }),
      })
    : (0, k.jsxs)(`div`, {
        className: `h-full flex flex-col gap-2`,
        children: [
          (0, k.jsx)(`div`, {
            className: `flex gap-1 overflow-x-auto pb-1`,
            children: i.map((e, t) =>
              (0, k.jsx)(
                `button`,
                {
                  onClick: () => r(t),
                  className: `shrink-0 px-2 py-1 rounded font-mono text-[10px] transition-colors ${t === n ? `bg-indigo-600/30 border border-indigo-500/50 text-indigo-300` : `border border-zinc-800 text-zinc-600 hover:border-zinc-600`}`,
                  children: e.slice(0, 20),
                },
                t
              )
            ),
          }),
          (0, k.jsxs)(`div`, {
            className: `flex-1 overflow-y-auto space-y-2 pr-1`,
            children: [
              o.map((e, t) =>
                (0, k.jsxs)(
                  `div`,
                  {
                    className: `rounded border border-zinc-800 bg-zinc-900/50 p-3 space-y-1`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-start justify-between gap-2`,
                        children: [
                          (0, k.jsx)(`p`, {
                            className: `font-mono text-xs text-zinc-300 line-clamp-2`,
                            children: e.title,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `shrink-0 px-1.5 py-0.5 rounded text-[9px] font-mono bg-zinc-800 text-zinc-500`,
                            children: new URL(e.url).hostname.replace(`www.`, ``),
                          }),
                        ],
                      }),
                      (0, k.jsx)(`p`, {
                        className: `font-mono text-[10px] text-zinc-600 line-clamp-3`,
                        children: e.snippet,
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex items-center gap-1`,
                            children: [
                              (0, k.jsx)(`div`, {
                                className: `h-1 w-16 bg-zinc-800 rounded-full overflow-hidden`,
                                children: (0, k.jsx)(`div`, {
                                  className: `h-full bg-indigo-500 rounded-full`,
                                  style: { width: `${Math.round(e.score * 100)}%` },
                                }),
                              }),
                              (0, k.jsxs)(`span`, {
                                className: `font-mono text-[9px] text-zinc-600`,
                                children: [Math.round(e.score * 100), `%`],
                              }),
                            ],
                          }),
                          (0, k.jsx)(`a`, {
                            href: e.url,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `font-mono text-[10px] text-indigo-500 hover:text-indigo-400`,
                            children: `open ↗`,
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
              o.length === 0 &&
                (0, k.jsx)(`p`, {
                  className: `font-mono text-xs text-zinc-700 text-center pt-4`,
                  children: `Gathering sources...`,
                }),
            ],
          }),
        ],
      })
}
function rf(e, t) {
  let n = t || {}
  return (e[e.length - 1] === `` ? [...e, ``] : e)
    .join((n.padRight ? ` ` : ``) + `,` + (n.padLeft === !1 ? `` : ` `))
    .trim()
}
var af = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  of = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  sf = {}
function cf(e, t) {
  return ((t || sf).jsx ? of : af).test(e)
}
var lf = /[ \t\n\f\r]/g
function uf(e) {
  return typeof e == `object` ? (e.type === `text` ? df(e.value) : !1) : df(e)
}
function df(e) {
  return e.replace(lf, ``) === ``
}
var ff = class {
  constructor(e, t, n) {
    ;((this.normal = t), (this.property = e), n && (this.space = n))
  }
}
;((ff.prototype.normal = {}), (ff.prototype.property = {}), (ff.prototype.space = void 0))
function pf(e, t) {
  let n = {},
    r = {}
  for (let t of e) (Object.assign(n, t.property), Object.assign(r, t.normal))
  return new ff(n, r, t)
}
function mf(e) {
  return e.toLowerCase()
}
var hf = class {
  constructor(e, t) {
    ;((this.attribute = t), (this.property = e))
  }
}
;((hf.prototype.attribute = ``),
  (hf.prototype.booleanish = !1),
  (hf.prototype.boolean = !1),
  (hf.prototype.commaOrSpaceSeparated = !1),
  (hf.prototype.commaSeparated = !1),
  (hf.prototype.defined = !1),
  (hf.prototype.mustUseProperty = !1),
  (hf.prototype.number = !1),
  (hf.prototype.overloadedBoolean = !1),
  (hf.prototype.property = ``),
  (hf.prototype.spaceSeparated = !1),
  (hf.prototype.space = void 0))
var gf = c({
    boolean: () => J,
    booleanish: () => vf,
    commaOrSpaceSeparated: () => xf,
    commaSeparated: () => bf,
    number: () => Y,
    overloadedBoolean: () => yf,
    spaceSeparated: () => X,
  }),
  _f = 0,
  J = Sf(),
  vf = Sf(),
  yf = Sf(),
  Y = Sf(),
  X = Sf(),
  bf = Sf(),
  xf = Sf()
function Sf() {
  return 2 ** ++_f
}
var Cf = Object.keys(gf),
  wf = class extends hf {
    constructor(e, t, n, r) {
      let i = -1
      if ((super(e, t), Tf(this, `space`, r), typeof n == `number`))
        for (; ++i < Cf.length; ) {
          let e = Cf[i]
          Tf(this, Cf[i], (n & gf[e]) === gf[e])
        }
    }
  }
wf.prototype.defined = !0
function Tf(e, t, n) {
  n && (e[t] = n)
}
function Ef(e) {
  let t = {},
    n = {}
  for (let [r, i] of Object.entries(e.properties)) {
    let a = new wf(r, e.transform(e.attributes || {}, r), i, e.space)
    ;(e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0),
      (t[r] = a),
      (n[mf(r)] = r),
      (n[mf(a.attribute)] = r))
  }
  return new ff(t, n, e.space)
}
var Df = Ef({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: vf,
    ariaAutoComplete: null,
    ariaBusy: vf,
    ariaChecked: vf,
    ariaColCount: Y,
    ariaColIndex: Y,
    ariaColSpan: Y,
    ariaControls: X,
    ariaCurrent: null,
    ariaDescribedBy: X,
    ariaDetails: null,
    ariaDisabled: vf,
    ariaDropEffect: X,
    ariaErrorMessage: null,
    ariaExpanded: vf,
    ariaFlowTo: X,
    ariaGrabbed: vf,
    ariaHasPopup: null,
    ariaHidden: vf,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: X,
    ariaLevel: Y,
    ariaLive: null,
    ariaModal: vf,
    ariaMultiLine: vf,
    ariaMultiSelectable: vf,
    ariaOrientation: null,
    ariaOwns: X,
    ariaPlaceholder: null,
    ariaPosInSet: Y,
    ariaPressed: vf,
    ariaReadOnly: vf,
    ariaRelevant: null,
    ariaRequired: vf,
    ariaRoleDescription: X,
    ariaRowCount: Y,
    ariaRowIndex: Y,
    ariaRowSpan: Y,
    ariaSelected: vf,
    ariaSetSize: Y,
    ariaSort: null,
    ariaValueMax: Y,
    ariaValueMin: Y,
    ariaValueNow: Y,
    ariaValueText: null,
    role: null,
  },
  transform(e, t) {
    return t === `role` ? t : `aria-` + t.slice(4).toLowerCase()
  },
})
function Of(e, t) {
  return t in e ? e[t] : t
}
function kf(e, t) {
  return Of(e, t.toLowerCase())
}
var Af = Ef({
    attributes: {
      acceptcharset: `accept-charset`,
      classname: `class`,
      htmlfor: `for`,
      httpequiv: `http-equiv`,
    },
    mustUseProperty: [`checked`, `multiple`, `muted`, `selected`],
    properties: {
      abbr: null,
      accept: bf,
      acceptCharset: X,
      accessKey: X,
      action: null,
      allow: null,
      allowFullScreen: J,
      allowPaymentRequest: J,
      allowUserMedia: J,
      alt: null,
      as: null,
      async: J,
      autoCapitalize: null,
      autoComplete: X,
      autoFocus: J,
      autoPlay: J,
      blocking: X,
      capture: null,
      charSet: null,
      checked: J,
      cite: null,
      className: X,
      cols: Y,
      colSpan: null,
      content: null,
      contentEditable: vf,
      controls: J,
      controlsList: X,
      coords: Y | bf,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: J,
      defer: J,
      dir: null,
      dirName: null,
      disabled: J,
      download: yf,
      draggable: vf,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: J,
      formTarget: null,
      headers: X,
      height: Y,
      hidden: yf,
      high: Y,
      href: null,
      hrefLang: null,
      htmlFor: X,
      httpEquiv: X,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: J,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: J,
      itemId: null,
      itemProp: X,
      itemRef: X,
      itemScope: J,
      itemType: X,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: J,
      low: Y,
      manifest: null,
      max: null,
      maxLength: Y,
      media: null,
      method: null,
      min: null,
      minLength: Y,
      multiple: J,
      muted: J,
      name: null,
      nonce: null,
      noModule: J,
      noValidate: J,
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
      open: J,
      optimum: Y,
      pattern: null,
      ping: X,
      placeholder: null,
      playsInline: J,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: J,
      referrerPolicy: null,
      rel: X,
      required: J,
      reversed: J,
      rows: Y,
      rowSpan: Y,
      sandbox: X,
      scope: null,
      scoped: J,
      seamless: J,
      selected: J,
      shadowRootClonable: J,
      shadowRootDelegatesFocus: J,
      shadowRootMode: null,
      shape: null,
      size: Y,
      sizes: null,
      slot: null,
      span: Y,
      spellCheck: vf,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: Y,
      step: null,
      style: null,
      tabIndex: Y,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: J,
      useMap: null,
      value: vf,
      width: Y,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: X,
      axis: null,
      background: null,
      bgColor: null,
      border: Y,
      borderColor: null,
      bottomMargin: Y,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: J,
      declare: J,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: Y,
      leftMargin: Y,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: Y,
      marginWidth: Y,
      noResize: J,
      noHref: J,
      noShade: J,
      noWrap: J,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: Y,
      rules: null,
      scheme: null,
      scrolling: vf,
      standby: null,
      summary: null,
      text: null,
      topMargin: Y,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: Y,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: J,
      disableRemotePlayback: J,
      prefix: null,
      property: null,
      results: Y,
      security: null,
      unselectable: null,
    },
    space: `html`,
    transform: kf,
  }),
  jf = Ef({
    attributes: {
      accentHeight: `accent-height`,
      alignmentBaseline: `alignment-baseline`,
      arabicForm: `arabic-form`,
      baselineShift: `baseline-shift`,
      capHeight: `cap-height`,
      className: `class`,
      clipPath: `clip-path`,
      clipRule: `clip-rule`,
      colorInterpolation: `color-interpolation`,
      colorInterpolationFilters: `color-interpolation-filters`,
      colorProfile: `color-profile`,
      colorRendering: `color-rendering`,
      crossOrigin: `crossorigin`,
      dataType: `datatype`,
      dominantBaseline: `dominant-baseline`,
      enableBackground: `enable-background`,
      fillOpacity: `fill-opacity`,
      fillRule: `fill-rule`,
      floodColor: `flood-color`,
      floodOpacity: `flood-opacity`,
      fontFamily: `font-family`,
      fontSize: `font-size`,
      fontSizeAdjust: `font-size-adjust`,
      fontStretch: `font-stretch`,
      fontStyle: `font-style`,
      fontVariant: `font-variant`,
      fontWeight: `font-weight`,
      glyphName: `glyph-name`,
      glyphOrientationHorizontal: `glyph-orientation-horizontal`,
      glyphOrientationVertical: `glyph-orientation-vertical`,
      hrefLang: `hreflang`,
      horizAdvX: `horiz-adv-x`,
      horizOriginX: `horiz-origin-x`,
      horizOriginY: `horiz-origin-y`,
      imageRendering: `image-rendering`,
      letterSpacing: `letter-spacing`,
      lightingColor: `lighting-color`,
      markerEnd: `marker-end`,
      markerMid: `marker-mid`,
      markerStart: `marker-start`,
      navDown: `nav-down`,
      navDownLeft: `nav-down-left`,
      navDownRight: `nav-down-right`,
      navLeft: `nav-left`,
      navNext: `nav-next`,
      navPrev: `nav-prev`,
      navRight: `nav-right`,
      navUp: `nav-up`,
      navUpLeft: `nav-up-left`,
      navUpRight: `nav-up-right`,
      onAbort: `onabort`,
      onActivate: `onactivate`,
      onAfterPrint: `onafterprint`,
      onBeforePrint: `onbeforeprint`,
      onBegin: `onbegin`,
      onCancel: `oncancel`,
      onCanPlay: `oncanplay`,
      onCanPlayThrough: `oncanplaythrough`,
      onChange: `onchange`,
      onClick: `onclick`,
      onClose: `onclose`,
      onCopy: `oncopy`,
      onCueChange: `oncuechange`,
      onCut: `oncut`,
      onDblClick: `ondblclick`,
      onDrag: `ondrag`,
      onDragEnd: `ondragend`,
      onDragEnter: `ondragenter`,
      onDragExit: `ondragexit`,
      onDragLeave: `ondragleave`,
      onDragOver: `ondragover`,
      onDragStart: `ondragstart`,
      onDrop: `ondrop`,
      onDurationChange: `ondurationchange`,
      onEmptied: `onemptied`,
      onEnd: `onend`,
      onEnded: `onended`,
      onError: `onerror`,
      onFocus: `onfocus`,
      onFocusIn: `onfocusin`,
      onFocusOut: `onfocusout`,
      onHashChange: `onhashchange`,
      onInput: `oninput`,
      onInvalid: `oninvalid`,
      onKeyDown: `onkeydown`,
      onKeyPress: `onkeypress`,
      onKeyUp: `onkeyup`,
      onLoad: `onload`,
      onLoadedData: `onloadeddata`,
      onLoadedMetadata: `onloadedmetadata`,
      onLoadStart: `onloadstart`,
      onMessage: `onmessage`,
      onMouseDown: `onmousedown`,
      onMouseEnter: `onmouseenter`,
      onMouseLeave: `onmouseleave`,
      onMouseMove: `onmousemove`,
      onMouseOut: `onmouseout`,
      onMouseOver: `onmouseover`,
      onMouseUp: `onmouseup`,
      onMouseWheel: `onmousewheel`,
      onOffline: `onoffline`,
      onOnline: `ononline`,
      onPageHide: `onpagehide`,
      onPageShow: `onpageshow`,
      onPaste: `onpaste`,
      onPause: `onpause`,
      onPlay: `onplay`,
      onPlaying: `onplaying`,
      onPopState: `onpopstate`,
      onProgress: `onprogress`,
      onRateChange: `onratechange`,
      onRepeat: `onrepeat`,
      onReset: `onreset`,
      onResize: `onresize`,
      onScroll: `onscroll`,
      onSeeked: `onseeked`,
      onSeeking: `onseeking`,
      onSelect: `onselect`,
      onShow: `onshow`,
      onStalled: `onstalled`,
      onStorage: `onstorage`,
      onSubmit: `onsubmit`,
      onSuspend: `onsuspend`,
      onTimeUpdate: `ontimeupdate`,
      onToggle: `ontoggle`,
      onUnload: `onunload`,
      onVolumeChange: `onvolumechange`,
      onWaiting: `onwaiting`,
      onZoom: `onzoom`,
      overlinePosition: `overline-position`,
      overlineThickness: `overline-thickness`,
      paintOrder: `paint-order`,
      panose1: `panose-1`,
      pointerEvents: `pointer-events`,
      referrerPolicy: `referrerpolicy`,
      renderingIntent: `rendering-intent`,
      shapeRendering: `shape-rendering`,
      stopColor: `stop-color`,
      stopOpacity: `stop-opacity`,
      strikethroughPosition: `strikethrough-position`,
      strikethroughThickness: `strikethrough-thickness`,
      strokeDashArray: `stroke-dasharray`,
      strokeDashOffset: `stroke-dashoffset`,
      strokeLineCap: `stroke-linecap`,
      strokeLineJoin: `stroke-linejoin`,
      strokeMiterLimit: `stroke-miterlimit`,
      strokeOpacity: `stroke-opacity`,
      strokeWidth: `stroke-width`,
      tabIndex: `tabindex`,
      textAnchor: `text-anchor`,
      textDecoration: `text-decoration`,
      textRendering: `text-rendering`,
      transformOrigin: `transform-origin`,
      typeOf: `typeof`,
      underlinePosition: `underline-position`,
      underlineThickness: `underline-thickness`,
      unicodeBidi: `unicode-bidi`,
      unicodeRange: `unicode-range`,
      unitsPerEm: `units-per-em`,
      vAlphabetic: `v-alphabetic`,
      vHanging: `v-hanging`,
      vIdeographic: `v-ideographic`,
      vMathematical: `v-mathematical`,
      vectorEffect: `vector-effect`,
      vertAdvY: `vert-adv-y`,
      vertOriginX: `vert-origin-x`,
      vertOriginY: `vert-origin-y`,
      wordSpacing: `word-spacing`,
      writingMode: `writing-mode`,
      xHeight: `x-height`,
      playbackOrder: `playbackorder`,
      timelineBegin: `timelinebegin`,
    },
    properties: {
      about: xf,
      accentHeight: Y,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: Y,
      amplitude: Y,
      arabicForm: null,
      ascent: Y,
      attributeName: null,
      attributeType: null,
      azimuth: Y,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: Y,
      by: null,
      calcMode: null,
      capHeight: Y,
      className: X,
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
      descent: Y,
      diffuseConstant: Y,
      direction: null,
      display: null,
      dur: null,
      divisor: Y,
      dominantBaseline: null,
      download: J,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: Y,
      enableBackground: null,
      end: null,
      event: null,
      exponent: Y,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: Y,
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
      g1: bf,
      g2: bf,
      glyphName: bf,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: Y,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: Y,
      horizOriginX: Y,
      horizOriginY: Y,
      id: null,
      ideographic: Y,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: Y,
      k: Y,
      k1: Y,
      k2: Y,
      k3: Y,
      k4: Y,
      kernelMatrix: xf,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: Y,
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
      mediaSize: Y,
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
      overlinePosition: Y,
      overlineThickness: Y,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: Y,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: X,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: Y,
      pointsAtY: Y,
      pointsAtZ: Y,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: xf,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: xf,
      rev: xf,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: xf,
      requiredFeatures: xf,
      requiredFonts: xf,
      requiredFormats: xf,
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
      specularConstant: Y,
      specularExponent: Y,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: Y,
      strikethroughThickness: Y,
      string: null,
      stroke: null,
      strokeDashArray: xf,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: Y,
      strokeOpacity: Y,
      strokeWidth: null,
      style: null,
      surfaceScale: Y,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: xf,
      tabIndex: Y,
      tableValues: null,
      target: null,
      targetX: Y,
      targetY: Y,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: xf,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: Y,
      underlineThickness: Y,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: Y,
      values: null,
      vAlphabetic: Y,
      vMathematical: Y,
      vectorEffect: null,
      vHanging: Y,
      vIdeographic: Y,
      version: null,
      vertAdvY: Y,
      vertOriginX: Y,
      vertOriginY: Y,
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
      xHeight: Y,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: `svg`,
    transform: Of,
  }),
  Mf = Ef({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: `xlink`,
    transform(e, t) {
      return `xlink:` + t.slice(5).toLowerCase()
    },
  }),
  Nf = Ef({
    attributes: { xmlnsxlink: `xmlns:xlink` },
    properties: { xmlnsXLink: null, xmlns: null },
    space: `xmlns`,
    transform: kf,
  }),
  Pf = Ef({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: `xml`,
    transform(e, t) {
      return `xml:` + t.slice(3).toLowerCase()
    },
  }),
  Ff = {
    classId: `classID`,
    dataType: `datatype`,
    itemId: `itemID`,
    strokeDashArray: `strokeDasharray`,
    strokeDashOffset: `strokeDashoffset`,
    strokeLineCap: `strokeLinecap`,
    strokeLineJoin: `strokeLinejoin`,
    strokeMiterLimit: `strokeMiterlimit`,
    typeOf: `typeof`,
    xLinkActuate: `xlinkActuate`,
    xLinkArcRole: `xlinkArcrole`,
    xLinkHref: `xlinkHref`,
    xLinkRole: `xlinkRole`,
    xLinkShow: `xlinkShow`,
    xLinkTitle: `xlinkTitle`,
    xLinkType: `xlinkType`,
    xmlnsXLink: `xmlnsXlink`,
  },
  If = /[A-Z]/g,
  Lf = /-[a-z]/g,
  Rf = /^data[-\w.:]+$/i
function zf(e, t) {
  let n = mf(t),
    r = t,
    i = hf
  if (n in e.normal) return e.property[e.normal[n]]
  if (n.length > 4 && n.slice(0, 4) === `data` && Rf.test(t)) {
    if (t.charAt(4) === `-`) {
      let e = t.slice(5).replace(Lf, Vf)
      r = `data` + e.charAt(0).toUpperCase() + e.slice(1)
    } else {
      let e = t.slice(4)
      if (!Lf.test(e)) {
        let n = e.replace(If, Bf)
        ;(n.charAt(0) !== `-` && (n = `-` + n), (t = `data` + n))
      }
    }
    i = wf
  }
  return new i(r, t)
}
function Bf(e) {
  return `-` + e.toLowerCase()
}
function Vf(e) {
  return e.charAt(1).toUpperCase()
}
var Hf = pf([Df, Af, Mf, Nf, Pf], `html`),
  Uf = pf([Df, jf, Mf, Nf, Pf], `svg`)
function Wf(e) {
  return e.join(` `).trim()
}
var Gf = s((e, t) => {
    var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      r = /\n/g,
      i = /^\s*/,
      a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      o = /^:\s*/,
      s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      c = /^[;\s]*/,
      l = /^\s+|\s+$/g,
      u = `
`,
      d = `/`,
      f = `*`,
      p = ``,
      m = `comment`,
      h = `declaration`
    function g(e, t) {
      if (typeof e != `string`) throw TypeError(`First argument must be a string`)
      if (!e) return []
      t ||= {}
      var l = 1,
        g = 1
      function v(e) {
        var t = e.match(r)
        t && (l += t.length)
        var n = e.lastIndexOf(u)
        g = ~n ? e.length - n : g + e.length
      }
      function y() {
        var e = { line: l, column: g }
        return function (t) {
          return ((t.position = new b(e)), C(), t)
        }
      }
      function b(e) {
        ;((this.start = e), (this.end = { line: l, column: g }), (this.source = t.source))
      }
      b.prototype.content = e
      function x(n) {
        var r = Error(t.source + `:` + l + `:` + g + `: ` + n)
        if (
          ((r.reason = n),
          (r.filename = t.source),
          (r.line = l),
          (r.column = g),
          (r.source = e),
          !t.silent)
        )
          throw r
      }
      function S(t) {
        var n = t.exec(e)
        if (n) {
          var r = n[0]
          return (v(r), (e = e.slice(r.length)), n)
        }
      }
      function C() {
        S(i)
      }
      function w(e) {
        var t
        for (e ||= []; (t = T()); ) t !== !1 && e.push(t)
        return e
      }
      function T() {
        var t = y()
        if (!(d != e.charAt(0) || f != e.charAt(1))) {
          for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1)); ) ++n
          if (((n += 2), p === e.charAt(n - 1))) return x(`End of comment missing`)
          var r = e.slice(2, n - 2)
          return ((g += 2), v(r), (e = e.slice(n)), (g += 2), t({ type: m, comment: r }))
        }
      }
      function E() {
        var e = y(),
          t = S(a)
        if (t) {
          if ((T(), !S(o))) return x(`property missing ':'`)
          var r = S(s),
            i = e({
              type: h,
              property: _(t[0].replace(n, p)),
              value: r ? _(r[0].replace(n, p)) : p,
            })
          return (S(c), i)
        }
      }
      function ee() {
        var e = []
        w(e)
        for (var t; (t = E()); ) t !== !1 && (e.push(t), w(e))
        return e
      }
      return (C(), ee())
    }
    function _(e) {
      return e ? e.replace(l, p) : p
    }
    t.exports = g
  }),
  Kf = s((e) => {
    var t =
      (e && e.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    ;(Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = r))
    var n = t(Gf())
    function r(e, t) {
      let r = null
      if (!e || typeof e != `string`) return r
      let i = (0, n.default)(e),
        a = typeof t == `function`
      return (
        i.forEach((e) => {
          if (e.type !== `declaration`) return
          let { property: n, value: i } = e
          a ? t(n, i, e) : i && ((r ||= {}), (r[n] = i))
        }),
        r
      )
    }
  }),
  qf = s((e) => {
    ;(Object.defineProperty(e, `__esModule`, { value: !0 }), (e.camelCase = void 0))
    var t = /^--[a-zA-Z0-9_-]+$/,
      n = /-([a-z])/g,
      r = /^[^-]+$/,
      i = /^-(webkit|moz|ms|o|khtml)-/,
      a = /^-(ms)-/,
      o = function (e) {
        return !e || r.test(e) || t.test(e)
      },
      s = function (e, t) {
        return t.toUpperCase()
      },
      c = function (e, t) {
        return `${t}-`
      }
    e.camelCase = function (e, t) {
      return (
        t === void 0 && (t = {}),
        o(e)
          ? e
          : ((e = e.toLowerCase()),
            (e = t.reactCompat ? e.replace(a, c) : e.replace(i, c)),
            e.replace(n, s))
      )
    }
  }),
  Jf = s((e, t) => {
    var n = (
        (e && e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      )(Kf()),
      r = qf()
    function i(e, t) {
      var i = {}
      return (
        !e ||
          typeof e != `string` ||
          (0, n.default)(e, function (e, n) {
            e && n && (i[(0, r.camelCase)(e, t)] = n)
          }),
        i
      )
    }
    ;((i.default = i), (t.exports = i))
  }),
  Yf = Zf(`end`),
  Xf = Zf(`start`)
function Zf(e) {
  return t
  function t(t) {
    let n = (t && t.position && t.position[e]) || {}
    if (typeof n.line == `number` && n.line > 0 && typeof n.column == `number` && n.column > 0)
      return {
        line: n.line,
        column: n.column,
        offset: typeof n.offset == `number` && n.offset > -1 ? n.offset : void 0,
      }
  }
}
function Qf(e) {
  let t = Xf(e),
    n = Yf(e)
  if (t && n) return { start: t, end: n }
}
function $f(e) {
  return !e || typeof e != `object`
    ? ``
    : `position` in e || `type` in e
      ? tp(e.position)
      : `start` in e || `end` in e
        ? tp(e)
        : `line` in e || `column` in e
          ? ep(e)
          : ``
}
function ep(e) {
  return np(e && e.line) + `:` + np(e && e.column)
}
function tp(e) {
  return ep(e && e.start) + `-` + ep(e && e.end)
}
function np(e) {
  return e && typeof e == `number` ? e : 1
}
var rp = class extends Error {
  constructor(e, t, n) {
    ;(super(), typeof t == `string` && ((n = t), (t = void 0)))
    let r = ``,
      i = {},
      a = !1
    if (
      (t &&
        (i =
          (`line` in t && `column` in t) || (`start` in t && `end` in t)
            ? { place: t }
            : `type` in t
              ? { ancestors: [t], place: t.position }
              : { ...t }),
      typeof e == `string` ? (r = e) : !i.cause && e && ((a = !0), (r = e.message), (i.cause = e)),
      !i.ruleId && !i.source && typeof n == `string`)
    ) {
      let e = n.indexOf(`:`)
      e === -1 ? (i.ruleId = n) : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)))
    }
    if (!i.place && i.ancestors && i.ancestors) {
      let e = i.ancestors[i.ancestors.length - 1]
      e && (i.place = e.position)
    }
    let o = i.place && `start` in i.place ? i.place.start : i.place
    ;((this.ancestors = i.ancestors || void 0),
      (this.cause = i.cause || void 0),
      (this.column = o ? o.column : void 0),
      (this.fatal = void 0),
      (this.file = ``),
      (this.message = r),
      (this.line = o ? o.line : void 0),
      (this.name = $f(i.place) || `1:1`),
      (this.place = i.place || void 0),
      (this.reason = this.message),
      (this.ruleId = i.ruleId || void 0),
      (this.source = i.source || void 0),
      (this.stack = a && i.cause && typeof i.cause.stack == `string` ? i.cause.stack : ``),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0))
  }
}
;((rp.prototype.file = ``),
  (rp.prototype.name = ``),
  (rp.prototype.reason = ``),
  (rp.prototype.message = ``),
  (rp.prototype.stack = ``),
  (rp.prototype.column = void 0),
  (rp.prototype.line = void 0),
  (rp.prototype.ancestors = void 0),
  (rp.prototype.cause = void 0),
  (rp.prototype.fatal = void 0),
  (rp.prototype.place = void 0),
  (rp.prototype.ruleId = void 0),
  (rp.prototype.source = void 0))
var ip = u(Jf(), 1),
  ap = {}.hasOwnProperty,
  op = new Map(),
  sp = /[A-Z]/g,
  cp = new Set([`table`, `tbody`, `thead`, `tfoot`, `tr`]),
  lp = new Set([`td`, `th`]),
  up = `https://github.com/syntax-tree/hast-util-to-jsx-runtime`
function dp(e, t) {
  if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options")
  let n = t.filePath || void 0,
    r
  if (t.development) {
    if (typeof t.jsxDEV != `function`)
      throw TypeError("Expected `jsxDEV` in options when `development: true`")
    r = Sp(n, t.jsxDEV)
  } else {
    if (typeof t.jsx != `function`) throw TypeError("Expected `jsx` in production options")
    if (typeof t.jsxs != `function`) throw TypeError("Expected `jsxs` in production options")
    r = xp(n, t.jsx, t.jsxs)
  }
  let i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || `react`,
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === `svg` ? Uf : Hf,
      stylePropertyNameCase: t.stylePropertyNameCase || `dom`,
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    a = fp(i, e, void 0)
  return a && typeof a != `string` ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0)
}
function fp(e, t, n) {
  if (t.type === `element`) return pp(e, t, n)
  if (t.type === `mdxFlowExpression` || t.type === `mdxTextExpression`) return mp(e, t)
  if (t.type === `mdxJsxFlowElement` || t.type === `mdxJsxTextElement`) return gp(e, t, n)
  if (t.type === `mdxjsEsm`) return hp(e, t)
  if (t.type === `root`) return _p(e, t, n)
  if (t.type === `text`) return vp(e, t)
}
function pp(e, t, n) {
  let r = e.schema,
    i = r
  ;(t.tagName.toLowerCase() === `svg` && r.space === `html` && ((i = Uf), (e.schema = i)),
    e.ancestors.push(t))
  let a = Op(e, t.tagName, !1),
    o = Cp(e, t),
    s = Tp(e, t)
  return (
    cp.has(t.tagName) &&
      (s = s.filter(function (e) {
        return typeof e == `string` ? !uf(e) : !0
      })),
    yp(e, o, a, t),
    bp(o, s),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, a, o, n)
  )
}
function mp(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    let n = t.data.estree.body[0]
    return (n.type, e.evaluater.evaluateExpression(n.expression))
  }
  kp(e, t.position)
}
function hp(e, t) {
  if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree)
  kp(e, t.position)
}
function gp(e, t, n) {
  let r = e.schema,
    i = r
  ;(t.name === `svg` && r.space === `html` && ((i = Uf), (e.schema = i)), e.ancestors.push(t))
  let a = t.name === null ? e.Fragment : Op(e, t.name, !0),
    o = wp(e, t),
    s = Tp(e, t)
  return (yp(e, o, a, t), bp(o, s), e.ancestors.pop(), (e.schema = r), e.create(t, a, o, n))
}
function _p(e, t, n) {
  let r = {}
  return (bp(r, Tp(e, t)), e.create(t, e.Fragment, r, n))
}
function vp(e, t) {
  return t.value
}
function yp(e, t, n, r) {
  typeof n != `string` && n !== e.Fragment && e.passNode && (t.node = r)
}
function bp(e, t) {
  if (t.length > 0) {
    let n = t.length > 1 ? t : t[0]
    n && (e.children = n)
  }
}
function xp(e, t, n) {
  return r
  function r(e, r, i, a) {
    let o = Array.isArray(i.children) ? n : t
    return a ? o(r, i, a) : o(r, i)
  }
}
function Sp(e, t) {
  return n
  function n(n, r, i, a) {
    let o = Array.isArray(i.children),
      s = Xf(n)
    return t(
      r,
      i,
      a,
      o,
      { columnNumber: s ? s.column - 1 : void 0, fileName: e, lineNumber: s ? s.line : void 0 },
      void 0
    )
  }
}
function Cp(e, t) {
  let n = {},
    r,
    i
  for (i in t.properties)
    if (i !== `children` && ap.call(t.properties, i)) {
      let a = Ep(e, i, t.properties[i])
      if (a) {
        let [i, o] = a
        e.tableCellAlignToStyle && i === `align` && typeof o == `string` && lp.has(t.tagName)
          ? (r = o)
          : (n[i] = o)
      }
    }
  if (r) {
    let t = (n.style ||= {})
    t[e.stylePropertyNameCase === `css` ? `text-align` : `textAlign`] = r
  }
  return n
}
function wp(e, t) {
  let n = {}
  for (let r of t.attributes)
    if (r.type === `mdxJsxExpressionAttribute`)
      if (r.data && r.data.estree && e.evaluater) {
        let t = r.data.estree.body[0]
        t.type
        let i = t.expression
        i.type
        let a = i.properties[0]
        ;(a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument)))
      } else kp(e, t.position)
    else {
      let i = r.name,
        a
      if (r.value && typeof r.value == `object`)
        if (r.value.data && r.value.data.estree && e.evaluater) {
          let t = r.value.data.estree.body[0]
          ;(t.type, (a = e.evaluater.evaluateExpression(t.expression)))
        } else kp(e, t.position)
      else a = r.value === null ? !0 : r.value
      n[i] = a
    }
  return n
}
function Tp(e, t) {
  let n = [],
    r = -1,
    i = e.passKeys ? new Map() : op
  for (; ++r < t.children.length; ) {
    let a = t.children[r],
      o
    if (e.passKeys) {
      let e =
        a.type === `element`
          ? a.tagName
          : a.type === `mdxJsxFlowElement` || a.type === `mdxJsxTextElement`
            ? a.name
            : void 0
      if (e) {
        let t = i.get(e) || 0
        ;((o = e + `-` + t), i.set(e, t + 1))
      }
    }
    let s = fp(e, a, o)
    s !== void 0 && n.push(s)
  }
  return n
}
function Ep(e, t, n) {
  let r = zf(e.schema, t)
  if (!(n == null || (typeof n == `number` && Number.isNaN(n)))) {
    if ((Array.isArray(n) && (n = r.commaSeparated ? rf(n) : Wf(n)), r.property === `style`)) {
      let t = typeof n == `object` ? n : Dp(e, String(n))
      return (e.stylePropertyNameCase === `css` && (t = Ap(t)), [`style`, t])
    }
    return [
      e.elementAttributeNameCase === `react` && r.space
        ? Ff[r.property] || r.property
        : r.attribute,
      n,
    ]
  }
}
function Dp(e, t) {
  try {
    return (0, ip.default)(t, { reactCompat: !0 })
  } catch (t) {
    if (e.ignoreInvalidStyle) return {}
    let n = t,
      r = new rp("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: n,
        ruleId: `style`,
        source: `hast-util-to-jsx-runtime`,
      })
    throw ((r.file = e.filePath || void 0), (r.url = up + `#cannot-parse-style-attribute`), r)
  }
}
function Op(e, t, n) {
  let r
  if (!n) r = { type: `Literal`, value: t }
  else if (t.includes(`.`)) {
    let e = t.split(`.`),
      n = -1,
      i
    for (; ++n < e.length; ) {
      let t = cf(e[n]) ? { type: `Identifier`, name: e[n] } : { type: `Literal`, value: e[n] }
      i = i
        ? {
            type: `MemberExpression`,
            object: i,
            property: t,
            computed: !!(n && t.type === `Literal`),
            optional: !1,
          }
        : t
    }
    r = i
  } else
    r = cf(t) && !/^[a-z]/.test(t) ? { type: `Identifier`, name: t } : { type: `Literal`, value: t }
  if (r.type === `Literal`) {
    let t = r.value
    return ap.call(e.components, t) ? e.components[t] : t
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r)
  kp(e)
}
function kp(e, t) {
  let n = new rp("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: `mdx-estree`,
    source: `hast-util-to-jsx-runtime`,
  })
  throw (
    (n.file = e.filePath || void 0),
    (n.url = up + `#cannot-handle-mdx-estrees-without-createevaluater`),
    n
  )
}
function Ap(e) {
  let t = {},
    n
  for (n in e) ap.call(e, n) && (t[jp(n)] = e[n])
  return t
}
function jp(e) {
  let t = e.replace(sp, Mp)
  return (t.slice(0, 3) === `ms-` && (t = `-` + t), t)
}
function Mp(e) {
  return `-` + e.toLowerCase()
}
var Np = {
    action: [`form`],
    cite: [`blockquote`, `del`, `ins`, `q`],
    data: [`object`],
    formAction: [`button`, `input`],
    href: [`a`, `area`, `base`, `link`],
    icon: [`menuitem`],
    itemId: null,
    manifest: [`html`],
    ping: [`a`, `area`],
    poster: [`video`],
    src: [`audio`, `embed`, `iframe`, `img`, `input`, `script`, `source`, `track`, `video`],
  },
  Pp = {}
function Fp(e, t) {
  let n = t || Pp
  return Ip(
    e,
    typeof n.includeImageAlt == `boolean` ? n.includeImageAlt : !0,
    typeof n.includeHtml == `boolean` ? n.includeHtml : !0
  )
}
function Ip(e, t, n) {
  if (Rp(e)) {
    if (`value` in e) return e.type === `html` && !n ? `` : e.value
    if (t && `alt` in e && e.alt) return e.alt
    if (`children` in e) return Lp(e.children, t, n)
  }
  return Array.isArray(e) ? Lp(e, t, n) : ``
}
function Lp(e, t, n) {
  let r = [],
    i = -1
  for (; ++i < e.length; ) r[i] = Ip(e[i], t, n)
  return r.join(``)
}
function Rp(e) {
  return !!(e && typeof e == `object`)
}
var zp = document.createElement(`i`)
function Bp(e) {
  let t = `&` + e + `;`
  zp.innerHTML = t
  let n = zp.textContent
  return (n.charCodeAt(n.length - 1) === 59 && e !== `semi`) || n === t ? !1 : n
}
function Vp(e, t, n, r) {
  let i = e.length,
    a = 0,
    o
  if (((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t), (n = n > 0 ? n : 0), r.length < 1e4))
    ((o = Array.from(r)), o.unshift(t, n), e.splice(...o))
  else
    for (n && e.splice(t, n); a < r.length; )
      ((o = r.slice(a, a + 1e4)), o.unshift(t, 0), e.splice(...o), (a += 1e4), (t += 1e4))
}
function Hp(e, t) {
  return e.length > 0 ? (Vp(e, e.length, 0, t), e) : t
}
var Up = {}.hasOwnProperty
function Wp(e) {
  let t = {},
    n = -1
  for (; ++n < e.length; ) Gp(t, e[n])
  return t
}
function Gp(e, t) {
  let n
  for (n in t) {
    let r = (Up.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      i = t[n],
      a
    if (i)
      for (a in i) {
        Up.call(r, a) || (r[a] = [])
        let e = i[a]
        Kp(r[a], Array.isArray(e) ? e : e ? [e] : [])
      }
  }
}
function Kp(e, t) {
  let n = -1,
    r = []
  for (; ++n < t.length; ) (t[n].add === `after` ? e : r).push(t[n])
  Vp(e, 0, 0, r)
}
function qp(e, t) {
  let n = Number.parseInt(e, t)
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) == 65535 ||
    (n & 65535) == 65534 ||
    n > 1114111
    ? `�`
    : String.fromCodePoint(n)
}
function Jp(e) {
  return e
    .replace(/[\t\n\r ]+/g, ` `)
    .replace(/^ | $/g, ``)
    .toLowerCase()
    .toUpperCase()
}
var Yp = am(/[A-Za-z]/),
  Xp = am(/[\dA-Za-z]/),
  Zp = am(/[#-'*+\--9=?A-Z^-~]/)
function Qp(e) {
  return e !== null && (e < 32 || e === 127)
}
var $p = am(/\d/),
  em = am(/[\dA-Fa-f]/),
  tm = am(/[!-/:-@[-`{-~]/)
function Z(e) {
  return e !== null && e < -2
}
function nm(e) {
  return e !== null && (e < 0 || e === 32)
}
function Q(e) {
  return e === -2 || e === -1 || e === 32
}
var rm = am(/\p{P}|\p{S}/u),
  im = am(/\s/)
function am(e) {
  return t
  function t(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t))
  }
}
function om(e) {
  let t = [],
    n = -1,
    r = 0,
    i = 0
  for (; ++n < e.length; ) {
    let a = e.charCodeAt(n),
      o = ``
    if (a === 37 && Xp(e.charCodeAt(n + 1)) && Xp(e.charCodeAt(n + 2))) i = 2
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a))
    else if (a > 55295 && a < 57344) {
      let t = e.charCodeAt(n + 1)
      a < 56320 && t > 56319 && t < 57344 ? ((o = String.fromCharCode(a, t)), (i = 1)) : (o = `�`)
    } else o = String.fromCharCode(a)
    ;((o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), (r = n + i + 1), ``)),
      (i &&= ((n += i), 0)))
  }
  return t.join(``) + e.slice(r)
}
function $(e, t, n, r) {
  let i = r ? r - 1 : 1 / 0,
    a = 0
  return o
  function o(r) {
    return Q(r) ? (e.enter(n), s(r)) : t(r)
  }
  function s(r) {
    return Q(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r))
  }
}
var sm = { tokenize: cm }
function cm(e) {
  let t = e.attempt(this.parser.constructs.contentInitial, r, i),
    n
  return t
  function r(n) {
    if (n === null) {
      e.consume(n)
      return
    }
    return (e.enter(`lineEnding`), e.consume(n), e.exit(`lineEnding`), $(e, t, `linePrefix`))
  }
  function i(t) {
    return (e.enter(`paragraph`), a(t))
  }
  function a(t) {
    let r = e.enter(`chunkText`, { contentType: `text`, previous: n })
    return (n && (n.next = r), (n = r), o(t))
  }
  function o(t) {
    if (t === null) {
      ;(e.exit(`chunkText`), e.exit(`paragraph`), e.consume(t))
      return
    }
    return Z(t) ? (e.consume(t), e.exit(`chunkText`), a) : (e.consume(t), o)
  }
}
var lm = { tokenize: dm },
  um = { tokenize: fm }
function dm(e) {
  let t = this,
    n = [],
    r = 0,
    i,
    a,
    o
  return s
  function s(i) {
    if (r < n.length) {
      let a = n[r]
      return ((t.containerState = a[1]), e.attempt(a[0].continuation, c, l)(i))
    }
    return l(i)
  }
  function c(e) {
    if ((r++, t.containerState._closeFlow)) {
      ;((t.containerState._closeFlow = void 0), i && v())
      let n = t.events.length,
        a = n,
        o
      for (; a--; )
        if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
          o = t.events[a][1].end
          break
        }
      _(r)
      let s = n
      for (; s < t.events.length; ) ((t.events[s][1].end = { ...o }), s++)
      return (Vp(t.events, a + 1, 0, t.events.slice(n)), (t.events.length = s), l(e))
    }
    return s(e)
  }
  function l(a) {
    if (r === n.length) {
      if (!i) return f(a)
      if (i.currentConstruct && i.currentConstruct.concrete) return m(a)
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
    }
    return ((t.containerState = {}), e.check(um, u, d)(a))
  }
  function u(e) {
    return (i && v(), _(r), f(e))
  }
  function d(e) {
    return ((t.parser.lazy[t.now().line] = r !== n.length), (o = t.now().offset), m(e))
  }
  function f(n) {
    return ((t.containerState = {}), e.attempt(um, p, m)(n))
  }
  function p(e) {
    return (r++, n.push([t.currentConstruct, t.containerState]), f(e))
  }
  function m(n) {
    if (n === null) {
      ;(i && v(), _(0), e.consume(n))
      return
    }
    return (
      (i ||= t.parser.flow(t.now())),
      e.enter(`chunkFlow`, { _tokenizer: i, contentType: `flow`, previous: a }),
      h(n)
    )
  }
  function h(n) {
    if (n === null) {
      ;(g(e.exit(`chunkFlow`), !0), _(0), e.consume(n))
      return
    }
    return Z(n)
      ? (e.consume(n), g(e.exit(`chunkFlow`)), (r = 0), (t.interrupt = void 0), s)
      : (e.consume(n), h)
  }
  function g(e, n) {
    let s = t.sliceStream(e)
    if (
      (n && s.push(null),
      (e.previous = a),
      a && (a.next = e),
      (a = e),
      i.defineSkip(e.start),
      i.write(s),
      t.parser.lazy[e.start.line])
    ) {
      let e = i.events.length
      for (; e--; )
        if (
          i.events[e][1].start.offset < o &&
          (!i.events[e][1].end || i.events[e][1].end.offset > o)
        )
          return
      let n = t.events.length,
        a = n,
        s,
        c
      for (; a--; )
        if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
          if (s) {
            c = t.events[a][1].end
            break
          }
          s = !0
        }
      for (_(r), e = n; e < t.events.length; ) ((t.events[e][1].end = { ...c }), e++)
      ;(Vp(t.events, a + 1, 0, t.events.slice(n)), (t.events.length = e))
    }
  }
  function _(r) {
    let i = n.length
    for (; i-- > r; ) {
      let r = n[i]
      ;((t.containerState = r[1]), r[0].exit.call(t, e))
    }
    n.length = r
  }
  function v() {
    ;(i.write([null]), (a = void 0), (i = void 0), (t.containerState._closeFlow = void 0))
  }
}
function fm(e, t, n) {
  return $(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    `linePrefix`,
    this.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4
  )
}
function pm(e) {
  if (e === null || nm(e) || im(e)) return 1
  if (rm(e)) return 2
}
function mm(e, t, n) {
  let r = [],
    i = -1
  for (; ++i < e.length; ) {
    let a = e[i].resolveAll
    a && !r.includes(a) && ((t = a(t, n)), r.push(a))
  }
  return t
}
var hm = { name: `attention`, resolveAll: gm, tokenize: _m }
function gm(e, t) {
  let n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u
  for (; ++n < e.length; )
    if (e[n][0] === `enter` && e[n][1].type === `attentionSequence` && e[n][1]._close) {
      for (r = n; r--; )
        if (
          e[r][0] === `exit` &&
          e[r][1].type === `attentionSequence` &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue
          c =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1
          let d = { ...e[r][1].end },
            f = { ...e[n][1].start }
          ;(vm(d, -c),
            vm(f, c),
            (o = {
              type: c > 1 ? `strongSequence` : `emphasisSequence`,
              start: d,
              end: { ...e[r][1].end },
            }),
            (s = {
              type: c > 1 ? `strongSequence` : `emphasisSequence`,
              start: { ...e[n][1].start },
              end: f,
            }),
            (a = {
              type: c > 1 ? `strongText` : `emphasisText`,
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = { type: c > 1 ? `strong` : `emphasis`, start: { ...o.start }, end: { ...s.end } }),
            (e[r][1].end = { ...o.start }),
            (e[n][1].start = { ...s.end }),
            (l = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (l = Hp(l, [
                [`enter`, e[r][1], t],
                [`exit`, e[r][1], t],
              ])),
            (l = Hp(l, [
              [`enter`, i, t],
              [`enter`, o, t],
              [`exit`, o, t],
              [`enter`, a, t],
            ])),
            (l = Hp(l, mm(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t))),
            (l = Hp(l, [
              [`exit`, a, t],
              [`enter`, s, t],
              [`exit`, s, t],
              [`exit`, i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((u = 2),
                (l = Hp(l, [
                  [`enter`, e[n][1], t],
                  [`exit`, e[n][1], t],
                ])))
              : (u = 0),
            Vp(e, r - 1, n - r + 3, l),
            (n = r + l.length - u - 2))
          break
        }
    }
  for (n = -1; ++n < e.length; ) e[n][1].type === `attentionSequence` && (e[n][1].type = `data`)
  return e
}
function _m(e, t) {
  let n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = pm(r),
    a
  return o
  function o(t) {
    return ((a = t), e.enter(`attentionSequence`), s(t))
  }
  function s(o) {
    if (o === a) return (e.consume(o), s)
    let c = e.exit(`attentionSequence`),
      l = pm(o),
      u = !l || (l === 2 && i) || n.includes(o),
      d = !i || (i === 2 && l) || n.includes(r)
    return (
      (c._open = !!(a === 42 ? u : u && (i || !d))),
      (c._close = !!(a === 42 ? d : d && (l || !u))),
      t(o)
    )
  }
}
function vm(e, t) {
  ;((e.column += t), (e.offset += t), (e._bufferIndex += t))
}
var ym = { name: `autolink`, tokenize: bm }
function bm(e, t, n) {
  let r = 0
  return i
  function i(t) {
    return (
      e.enter(`autolink`),
      e.enter(`autolinkMarker`),
      e.consume(t),
      e.exit(`autolinkMarker`),
      e.enter(`autolinkProtocol`),
      a
    )
  }
  function a(t) {
    return Yp(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t)
  }
  function o(e) {
    return e === 43 || e === 45 || e === 46 || Xp(e) ? ((r = 1), s(e)) : l(e)
  }
  function s(t) {
    return t === 58
      ? (e.consume(t), (r = 0), c)
      : (t === 43 || t === 45 || t === 46 || Xp(t)) && r++ < 32
        ? (e.consume(t), s)
        : ((r = 0), l(t))
  }
  function c(r) {
    return r === 62
      ? (e.exit(`autolinkProtocol`),
        e.enter(`autolinkMarker`),
        e.consume(r),
        e.exit(`autolinkMarker`),
        e.exit(`autolink`),
        t)
      : r === null || r === 32 || r === 60 || Qp(r)
        ? n(r)
        : (e.consume(r), c)
  }
  function l(t) {
    return t === 64 ? (e.consume(t), u) : Zp(t) ? (e.consume(t), l) : n(t)
  }
  function u(e) {
    return Xp(e) ? d(e) : n(e)
  }
  function d(n) {
    return n === 46
      ? (e.consume(n), (r = 0), u)
      : n === 62
        ? ((e.exit(`autolinkProtocol`).type = `autolinkEmail`),
          e.enter(`autolinkMarker`),
          e.consume(n),
          e.exit(`autolinkMarker`),
          e.exit(`autolink`),
          t)
        : f(n)
  }
  function f(t) {
    if ((t === 45 || Xp(t)) && r++ < 63) {
      let n = t === 45 ? f : d
      return (e.consume(t), n)
    }
    return n(t)
  }
}
var xm = { partial: !0, tokenize: Sm }
function Sm(e, t, n) {
  return r
  function r(t) {
    return Q(t) ? $(e, i, `linePrefix`)(t) : i(t)
  }
  function i(e) {
    return e === null || Z(e) ? t(e) : n(e)
  }
}
var Cm = { continuation: { tokenize: Tm }, exit: Em, name: `blockQuote`, tokenize: wm }
function wm(e, t, n) {
  let r = this
  return i
  function i(t) {
    if (t === 62) {
      let n = r.containerState
      return (
        (n.open ||= (e.enter(`blockQuote`, { _container: !0 }), !0)),
        e.enter(`blockQuotePrefix`),
        e.enter(`blockQuoteMarker`),
        e.consume(t),
        e.exit(`blockQuoteMarker`),
        a
      )
    }
    return n(t)
  }
  function a(n) {
    return Q(n)
      ? (e.enter(`blockQuotePrefixWhitespace`),
        e.consume(n),
        e.exit(`blockQuotePrefixWhitespace`),
        e.exit(`blockQuotePrefix`),
        t)
      : (e.exit(`blockQuotePrefix`), t(n))
  }
}
function Tm(e, t, n) {
  let r = this
  return i
  function i(t) {
    return Q(t)
      ? $(
          e,
          a,
          `linePrefix`,
          r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4
        )(t)
      : a(t)
  }
  function a(r) {
    return e.attempt(Cm, t, n)(r)
  }
}
function Em(e) {
  e.exit(`blockQuote`)
}
var Dm = { name: `characterEscape`, tokenize: Om }
function Om(e, t, n) {
  return r
  function r(t) {
    return (
      e.enter(`characterEscape`),
      e.enter(`escapeMarker`),
      e.consume(t),
      e.exit(`escapeMarker`),
      i
    )
  }
  function i(r) {
    return tm(r)
      ? (e.enter(`characterEscapeValue`),
        e.consume(r),
        e.exit(`characterEscapeValue`),
        e.exit(`characterEscape`),
        t)
      : n(r)
  }
}
var km = { name: `characterReference`, tokenize: Am }
function Am(e, t, n) {
  let r = this,
    i = 0,
    a,
    o
  return s
  function s(t) {
    return (
      e.enter(`characterReference`),
      e.enter(`characterReferenceMarker`),
      e.consume(t),
      e.exit(`characterReferenceMarker`),
      c
    )
  }
  function c(t) {
    return t === 35
      ? (e.enter(`characterReferenceMarkerNumeric`),
        e.consume(t),
        e.exit(`characterReferenceMarkerNumeric`),
        l)
      : (e.enter(`characterReferenceValue`), (a = 31), (o = Xp), u(t))
  }
  function l(t) {
    return t === 88 || t === 120
      ? (e.enter(`characterReferenceMarkerHexadecimal`),
        e.consume(t),
        e.exit(`characterReferenceMarkerHexadecimal`),
        e.enter(`characterReferenceValue`),
        (a = 6),
        (o = em),
        u)
      : (e.enter(`characterReferenceValue`), (a = 7), (o = $p), u(t))
  }
  function u(s) {
    if (s === 59 && i) {
      let i = e.exit(`characterReferenceValue`)
      return o === Xp && !Bp(r.sliceSerialize(i))
        ? n(s)
        : (e.enter(`characterReferenceMarker`),
          e.consume(s),
          e.exit(`characterReferenceMarker`),
          e.exit(`characterReference`),
          t)
    }
    return o(s) && i++ < a ? (e.consume(s), u) : n(s)
  }
}
var jm = { partial: !0, tokenize: Pm },
  Mm = { concrete: !0, name: `codeFenced`, tokenize: Nm }
function Nm(e, t, n) {
  let r = this,
    i = { partial: !0, tokenize: x },
    a = 0,
    o = 0,
    s
  return c
  function c(e) {
    return l(e)
  }
  function l(t) {
    let n = r.events[r.events.length - 1]
    return (
      (a = n && n[1].type === `linePrefix` ? n[2].sliceSerialize(n[1], !0).length : 0),
      (s = t),
      e.enter(`codeFenced`),
      e.enter(`codeFencedFence`),
      e.enter(`codeFencedFenceSequence`),
      u(t)
    )
  }
  function u(t) {
    return t === s
      ? (o++, e.consume(t), u)
      : o < 3
        ? n(t)
        : (e.exit(`codeFencedFenceSequence`), Q(t) ? $(e, d, `whitespace`)(t) : d(t))
  }
  function d(n) {
    return n === null || Z(n)
      ? (e.exit(`codeFencedFence`), r.interrupt ? t(n) : e.check(jm, h, b)(n))
      : (e.enter(`codeFencedFenceInfo`), e.enter(`chunkString`, { contentType: `string` }), f(n))
  }
  function f(t) {
    return t === null || Z(t)
      ? (e.exit(`chunkString`), e.exit(`codeFencedFenceInfo`), d(t))
      : Q(t)
        ? (e.exit(`chunkString`), e.exit(`codeFencedFenceInfo`), $(e, p, `whitespace`)(t))
        : t === 96 && t === s
          ? n(t)
          : (e.consume(t), f)
  }
  function p(t) {
    return t === null || Z(t)
      ? d(t)
      : (e.enter(`codeFencedFenceMeta`), e.enter(`chunkString`, { contentType: `string` }), m(t))
  }
  function m(t) {
    return t === null || Z(t)
      ? (e.exit(`chunkString`), e.exit(`codeFencedFenceMeta`), d(t))
      : t === 96 && t === s
        ? n(t)
        : (e.consume(t), m)
  }
  function h(t) {
    return e.attempt(i, b, g)(t)
  }
  function g(t) {
    return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), _)
  }
  function _(t) {
    return a > 0 && Q(t) ? $(e, v, `linePrefix`, a + 1)(t) : v(t)
  }
  function v(t) {
    return t === null || Z(t) ? e.check(jm, h, b)(t) : (e.enter(`codeFlowValue`), y(t))
  }
  function y(t) {
    return t === null || Z(t) ? (e.exit(`codeFlowValue`), v(t)) : (e.consume(t), y)
  }
  function b(n) {
    return (e.exit(`codeFenced`), t(n))
  }
  function x(e, t, n) {
    let i = 0
    return a
    function a(t) {
      return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), c)
    }
    function c(t) {
      return (
        e.enter(`codeFencedFence`),
        Q(t)
          ? $(
              e,
              l,
              `linePrefix`,
              r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4
            )(t)
          : l(t)
      )
    }
    function l(t) {
      return t === s ? (e.enter(`codeFencedFenceSequence`), u(t)) : n(t)
    }
    function u(t) {
      return t === s
        ? (i++, e.consume(t), u)
        : i >= o
          ? (e.exit(`codeFencedFenceSequence`), Q(t) ? $(e, d, `whitespace`)(t) : d(t))
          : n(t)
    }
    function d(r) {
      return r === null || Z(r) ? (e.exit(`codeFencedFence`), t(r)) : n(r)
    }
  }
}
function Pm(e, t, n) {
  let r = this
  return i
  function i(t) {
    return t === null ? n(t) : (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), a)
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e)
  }
}
var Fm = { name: `codeIndented`, tokenize: Lm },
  Im = { partial: !0, tokenize: Rm }
function Lm(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (e.enter(`codeIndented`), $(e, a, `linePrefix`, 5)(t))
  }
  function a(e) {
    let t = r.events[r.events.length - 1]
    return t && t[1].type === `linePrefix` && t[2].sliceSerialize(t[1], !0).length >= 4
      ? o(e)
      : n(e)
  }
  function o(t) {
    return t === null ? c(t) : Z(t) ? e.attempt(Im, o, c)(t) : (e.enter(`codeFlowValue`), s(t))
  }
  function s(t) {
    return t === null || Z(t) ? (e.exit(`codeFlowValue`), o(t)) : (e.consume(t), s)
  }
  function c(n) {
    return (e.exit(`codeIndented`), t(n))
  }
}
function Rm(e, t, n) {
  let r = this
  return i
  function i(t) {
    return r.parser.lazy[r.now().line]
      ? n(t)
      : Z(t)
        ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), i)
        : $(e, a, `linePrefix`, 5)(t)
  }
  function a(e) {
    let a = r.events[r.events.length - 1]
    return a && a[1].type === `linePrefix` && a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(e)
      : Z(e)
        ? i(e)
        : n(e)
  }
}
var zm = { name: `codeText`, previous: Vm, resolve: Bm, tokenize: Hm }
function Bm(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i
  if (
    (e[n][1].type === `lineEnding` || e[n][1].type === `space`) &&
    (e[t][1].type === `lineEnding` || e[t][1].type === `space`)
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === `codeTextData`) {
        ;((e[n][1].type = `codeTextPadding`),
          (e[t][1].type = `codeTextPadding`),
          (n += 2),
          (t -= 2))
        break
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== `lineEnding` && (i = r)
      : (r === t || e[r][1].type === `lineEnding`) &&
        ((e[i][1].type = `codeTextData`),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0))
  return e
}
function Vm(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === `characterEscape`
}
function Hm(e, t, n) {
  let r = 0,
    i,
    a
  return o
  function o(t) {
    return (e.enter(`codeText`), e.enter(`codeTextSequence`), s(t))
  }
  function s(t) {
    return t === 96 ? (e.consume(t), r++, s) : (e.exit(`codeTextSequence`), c(t))
  }
  function c(t) {
    return t === null
      ? n(t)
      : t === 32
        ? (e.enter(`space`), e.consume(t), e.exit(`space`), c)
        : t === 96
          ? ((a = e.enter(`codeTextSequence`)), (i = 0), u(t))
          : Z(t)
            ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), c)
            : (e.enter(`codeTextData`), l(t))
  }
  function l(t) {
    return t === null || t === 32 || t === 96 || Z(t)
      ? (e.exit(`codeTextData`), c(t))
      : (e.consume(t), l)
  }
  function u(n) {
    return n === 96
      ? (e.consume(n), i++, u)
      : i === r
        ? (e.exit(`codeTextSequence`), e.exit(`codeText`), t(n))
        : ((a.type = `codeTextData`), l(n))
  }
}
var Um = class {
  constructor(e) {
    ;((this.left = e ? [...e] : []), (this.right = []))
  }
  get(e) {
    if (e < 0 || e >= this.left.length + this.right.length)
      throw RangeError(
        "Cannot access index `" +
          e +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`"
      )
    return e < this.left.length
      ? this.left[e]
      : this.right[this.right.length - e + this.left.length - 1]
  }
  get length() {
    return this.left.length + this.right.length
  }
  shift() {
    return (this.setCursor(0), this.right.pop())
  }
  slice(e, t) {
    let n = t ?? 1 / 0
    return n < this.left.length
      ? this.left.slice(e, n)
      : e > this.left.length
        ? this.right
            .slice(
              this.right.length - n + this.left.length,
              this.right.length - e + this.left.length
            )
            .reverse()
        : this.left
            .slice(e)
            .concat(this.right.slice(this.right.length - n + this.left.length).reverse())
  }
  splice(e, t, n) {
    let r = t || 0
    this.setCursor(Math.trunc(e))
    let i = this.right.splice(this.right.length - r, 1 / 0)
    return (n && Wm(this.left, n), i.reverse())
  }
  pop() {
    return (this.setCursor(1 / 0), this.left.pop())
  }
  push(e) {
    ;(this.setCursor(1 / 0), this.left.push(e))
  }
  pushMany(e) {
    ;(this.setCursor(1 / 0), Wm(this.left, e))
  }
  unshift(e) {
    ;(this.setCursor(0), this.right.push(e))
  }
  unshiftMany(e) {
    ;(this.setCursor(0), Wm(this.right, e.reverse()))
  }
  setCursor(e) {
    if (
      !(
        e === this.left.length ||
        (e > this.left.length && this.right.length === 0) ||
        (e < 0 && this.left.length === 0)
      )
    )
      if (e < this.left.length) {
        let t = this.left.splice(e, 1 / 0)
        Wm(this.right, t.reverse())
      } else {
        let t = this.right.splice(this.left.length + this.right.length - e, 1 / 0)
        Wm(this.left, t.reverse())
      }
  }
}
function Wm(e, t) {
  let n = 0
  if (t.length < 1e4) e.push(...t)
  else for (; n < t.length; ) (e.push(...t.slice(n, n + 1e4)), (n += 1e4))
}
function Gm(e) {
  let t = {},
    n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u = new Um(e)
  for (; ++n < u.length; ) {
    for (; n in t; ) n = t[n]
    if (
      ((r = u.get(n)),
      n &&
        r[1].type === `chunkFlow` &&
        u.get(n - 1)[1].type === `listItemPrefix` &&
        ((c = r[1]._tokenizer.events),
        (a = 0),
        a < c.length && c[a][1].type === `lineEndingBlank` && (a += 2),
        a < c.length && c[a][1].type === `content`))
    )
      for (; ++a < c.length && c[a][1].type !== `content`; )
        c[a][1].type === `chunkText` && ((c[a][1]._isInFirstContentOfListItem = !0), a++)
    if (r[0] === `enter`) r[1].contentType && (Object.assign(t, Km(u, n)), (n = t[n]), (l = !0))
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (((o = u.get(a)), o[1].type === `lineEnding` || o[1].type === `lineEndingBlank`))
          o[0] === `enter` &&
            (i && (u.get(i)[1].type = `lineEndingBlank`), (o[1].type = `lineEnding`), (i = a))
        else if (!(o[1].type === `linePrefix` || o[1].type === `listItemIndent`)) break
      i &&
        ((r[1].end = { ...u.get(i)[1].start }),
        (s = u.slice(i, n)),
        s.unshift(r),
        u.splice(i, n - i + 1, s))
    }
  }
  return (Vp(e, 0, 1 / 0, u.slice(0)), !l)
}
function Km(e, t) {
  let n = e.get(t)[1],
    r = e.get(t)[2],
    i = t - 1,
    a = [],
    o = n._tokenizer
  o ||
    ((o = r.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0))
  let s = o.events,
    c = [],
    l = {},
    u,
    d,
    f = -1,
    p = n,
    m = 0,
    h = 0,
    g = [h]
  for (; p; ) {
    for (; e.get(++i)[1] !== p; );
    ;(a.push(i),
      p._tokenizer ||
        ((u = r.sliceStream(p)),
        p.next || u.push(null),
        d && o.defineSkip(p.start),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)),
      (d = p),
      (p = p.next))
  }
  for (p = n; ++f < s.length; )
    s[f][0] === `exit` &&
      s[f - 1][0] === `enter` &&
      s[f][1].type === s[f - 1][1].type &&
      s[f][1].start.line !== s[f][1].end.line &&
      ((h = f + 1), g.push(h), (p._tokenizer = void 0), (p.previous = void 0), (p = p.next))
  for (
    o.events = [], p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(), f = g.length;
    f--;
  ) {
    let t = s.slice(g[f], g[f + 1]),
      n = a.pop()
    ;(c.push([n, n + t.length - 1]), e.splice(n, 2, t))
  }
  for (c.reverse(), f = -1; ++f < c.length; )
    ((l[m + c[f][0]] = m + c[f][1]), (m += c[f][1] - c[f][0] - 1))
  return l
}
var qm = { resolve: Ym, tokenize: Xm },
  Jm = { partial: !0, tokenize: Zm }
function Ym(e) {
  return (Gm(e), e)
}
function Xm(e, t) {
  let n
  return r
  function r(t) {
    return (e.enter(`content`), (n = e.enter(`chunkContent`, { contentType: `content` })), i(t))
  }
  function i(t) {
    return t === null ? a(t) : Z(t) ? e.check(Jm, o, a)(t) : (e.consume(t), i)
  }
  function a(n) {
    return (e.exit(`chunkContent`), e.exit(`content`), t(n))
  }
  function o(t) {
    return (
      e.consume(t),
      e.exit(`chunkContent`),
      (n.next = e.enter(`chunkContent`, { contentType: `content`, previous: n })),
      (n = n.next),
      i
    )
  }
}
function Zm(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (
      e.exit(`chunkContent`),
      e.enter(`lineEnding`),
      e.consume(t),
      e.exit(`lineEnding`),
      $(e, a, `linePrefix`)
    )
  }
  function a(i) {
    if (i === null || Z(i)) return n(i)
    let a = r.events[r.events.length - 1]
    return !r.parser.constructs.disable.null.includes(`codeIndented`) &&
      a &&
      a[1].type === `linePrefix` &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(i)
      : e.interrupt(r.parser.constructs.flow, n, t)(i)
  }
}
function Qm(e, t, n, r, i, a, o, s, c) {
  let l = c || 1 / 0,
    u = 0
  return d
  function d(t) {
    return t === 60
      ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f)
      : t === null || t === 32 || t === 41 || Qp(t)
        ? n(t)
        : (e.enter(r),
          e.enter(o),
          e.enter(s),
          e.enter(`chunkString`, { contentType: `string` }),
          h(t))
  }
  function f(n) {
    return n === 62
      ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t)
      : (e.enter(s), e.enter(`chunkString`, { contentType: `string` }), p(n))
  }
  function p(t) {
    return t === 62
      ? (e.exit(`chunkString`), e.exit(s), f(t))
      : t === null || t === 60 || Z(t)
        ? n(t)
        : (e.consume(t), t === 92 ? m : p)
  }
  function m(t) {
    return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t)
  }
  function h(i) {
    return !u && (i === null || i === 41 || nm(i))
      ? (e.exit(`chunkString`), e.exit(s), e.exit(o), e.exit(r), t(i))
      : u < l && i === 40
        ? (e.consume(i), u++, h)
        : i === 41
          ? (e.consume(i), u--, h)
          : i === null || i === 32 || i === 40 || Qp(i)
            ? n(i)
            : (e.consume(i), i === 92 ? g : h)
  }
  function g(t) {
    return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t)
  }
}
function $m(e, t, n, r, i, a) {
  let o = this,
    s = 0,
    c
  return l
  function l(t) {
    return (e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u)
  }
  function u(l) {
    return s > 999 ||
      l === null ||
      l === 91 ||
      (l === 93 && !c) ||
      (l === 94 && !s && `_hiddenFootnoteSupport` in o.parser.constructs)
      ? n(l)
      : l === 93
        ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t)
        : Z(l)
          ? (e.enter(`lineEnding`), e.consume(l), e.exit(`lineEnding`), u)
          : (e.enter(`chunkString`, { contentType: `string` }), d(l))
  }
  function d(t) {
    return t === null || t === 91 || t === 93 || Z(t) || s++ > 999
      ? (e.exit(`chunkString`), u(t))
      : (e.consume(t), (c ||= !Q(t)), t === 92 ? f : d)
  }
  function f(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t)
  }
}
function eh(e, t, n, r, i, a) {
  let o
  return s
  function s(t) {
    return t === 34 || t === 39 || t === 40
      ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), (o = t === 40 ? 41 : t), c)
      : n(t)
  }
  function c(n) {
    return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n))
  }
  function l(t) {
    return t === o
      ? (e.exit(a), c(o))
      : t === null
        ? n(t)
        : Z(t)
          ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), $(e, l, `linePrefix`))
          : (e.enter(`chunkString`, { contentType: `string` }), u(t))
  }
  function u(t) {
    return t === o || t === null || Z(t)
      ? (e.exit(`chunkString`), l(t))
      : (e.consume(t), t === 92 ? d : u)
  }
  function d(t) {
    return t === o || t === 92 ? (e.consume(t), u) : u(t)
  }
}
function th(e, t) {
  let n
  return r
  function r(i) {
    return Z(i)
      ? (e.enter(`lineEnding`), e.consume(i), e.exit(`lineEnding`), (n = !0), r)
      : Q(i)
        ? $(e, r, n ? `linePrefix` : `lineSuffix`)(i)
        : t(i)
  }
}
var nh = { name: `definition`, tokenize: ih },
  rh = { partial: !0, tokenize: ah }
function ih(e, t, n) {
  let r = this,
    i
  return a
  function a(t) {
    return (e.enter(`definition`), o(t))
  }
  function o(t) {
    return $m.call(
      r,
      e,
      s,
      n,
      `definitionLabel`,
      `definitionLabelMarker`,
      `definitionLabelString`
    )(t)
  }
  function s(t) {
    return (
      (i = Jp(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      t === 58 ? (e.enter(`definitionMarker`), e.consume(t), e.exit(`definitionMarker`), c) : n(t)
    )
  }
  function c(t) {
    return nm(t) ? th(e, l)(t) : l(t)
  }
  function l(t) {
    return Qm(
      e,
      u,
      n,
      `definitionDestination`,
      `definitionDestinationLiteral`,
      `definitionDestinationLiteralMarker`,
      `definitionDestinationRaw`,
      `definitionDestinationString`
    )(t)
  }
  function u(t) {
    return e.attempt(rh, d, d)(t)
  }
  function d(t) {
    return Q(t) ? $(e, f, `whitespace`)(t) : f(t)
  }
  function f(a) {
    return a === null || Z(a) ? (e.exit(`definition`), r.parser.defined.push(i), t(a)) : n(a)
  }
}
function ah(e, t, n) {
  return r
  function r(t) {
    return nm(t) ? th(e, i)(t) : n(t)
  }
  function i(t) {
    return eh(e, a, n, `definitionTitle`, `definitionTitleMarker`, `definitionTitleString`)(t)
  }
  function a(t) {
    return Q(t) ? $(e, o, `whitespace`)(t) : o(t)
  }
  function o(e) {
    return e === null || Z(e) ? t(e) : n(e)
  }
}
var oh = { name: `hardBreakEscape`, tokenize: sh }
function sh(e, t, n) {
  return r
  function r(t) {
    return (e.enter(`hardBreakEscape`), e.consume(t), i)
  }
  function i(r) {
    return Z(r) ? (e.exit(`hardBreakEscape`), t(r)) : n(r)
  }
}
var ch = { name: `headingAtx`, resolve: lh, tokenize: uh }
function lh(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    a
  return (
    e[r][1].type === `whitespace` && (r += 2),
    n - 2 > r && e[n][1].type === `whitespace` && (n -= 2),
    e[n][1].type === `atxHeadingSequence` &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === `whitespace`)) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: `atxHeadingText`, start: e[r][1].start, end: e[n][1].end }),
      (a = { type: `chunkText`, start: e[r][1].start, end: e[n][1].end, contentType: `text` }),
      Vp(e, r, n - r + 1, [
        [`enter`, i, t],
        [`enter`, a, t],
        [`exit`, a, t],
        [`exit`, i, t],
      ])),
    e
  )
}
function uh(e, t, n) {
  let r = 0
  return i
  function i(t) {
    return (e.enter(`atxHeading`), a(t))
  }
  function a(t) {
    return (e.enter(`atxHeadingSequence`), o(t))
  }
  function o(t) {
    return t === 35 && r++ < 6
      ? (e.consume(t), o)
      : t === null || nm(t)
        ? (e.exit(`atxHeadingSequence`), s(t))
        : n(t)
  }
  function s(n) {
    return n === 35
      ? (e.enter(`atxHeadingSequence`), c(n))
      : n === null || Z(n)
        ? (e.exit(`atxHeading`), t(n))
        : Q(n)
          ? $(e, s, `whitespace`)(n)
          : (e.enter(`atxHeadingText`), l(n))
  }
  function c(t) {
    return t === 35 ? (e.consume(t), c) : (e.exit(`atxHeadingSequence`), s(t))
  }
  function l(t) {
    return t === null || t === 35 || nm(t) ? (e.exit(`atxHeadingText`), s(t)) : (e.consume(t), l)
  }
}
var dh =
    `address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(
      `.`
    ),
  fh = [`pre`, `script`, `style`, `textarea`],
  ph = { concrete: !0, name: `htmlFlow`, resolveTo: gh, tokenize: _h },
  mh = { partial: !0, tokenize: yh },
  hh = { partial: !0, tokenize: vh }
function gh(e) {
  let t = e.length
  for (; t-- && !(e[t][0] === `enter` && e[t][1].type === `htmlFlow`); );
  return (
    t > 1 &&
      e[t - 2][1].type === `linePrefix` &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  )
}
function _h(e, t, n) {
  let r = this,
    i,
    a,
    o,
    s,
    c
  return l
  function l(e) {
    return u(e)
  }
  function u(t) {
    return (e.enter(`htmlFlow`), e.enter(`htmlFlowData`), e.consume(t), d)
  }
  function d(s) {
    return s === 33
      ? (e.consume(s), f)
      : s === 47
        ? (e.consume(s), (a = !0), h)
        : s === 63
          ? (e.consume(s), (i = 3), r.interrupt ? t : O)
          : Yp(s)
            ? (e.consume(s), (o = String.fromCharCode(s)), g)
            : n(s)
  }
  function f(a) {
    return a === 45
      ? (e.consume(a), (i = 2), p)
      : a === 91
        ? (e.consume(a), (i = 5), (s = 0), m)
        : Yp(a)
          ? (e.consume(a), (i = 4), r.interrupt ? t : O)
          : n(a)
  }
  function p(i) {
    return i === 45 ? (e.consume(i), r.interrupt ? t : O) : n(i)
  }
  function m(i) {
    return i === `CDATA[`.charCodeAt(s++)
      ? (e.consume(i), s === 6 ? (r.interrupt ? t : D) : m)
      : n(i)
  }
  function h(t) {
    return Yp(t) ? (e.consume(t), (o = String.fromCharCode(t)), g) : n(t)
  }
  function g(s) {
    if (s === null || s === 47 || s === 62 || nm(s)) {
      let c = s === 47,
        l = o.toLowerCase()
      return !c && !a && fh.includes(l)
        ? ((i = 1), r.interrupt ? t(s) : D(s))
        : dh.includes(o.toLowerCase())
          ? ((i = 6), c ? (e.consume(s), _) : r.interrupt ? t(s) : D(s))
          : ((i = 7), r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s))
    }
    return s === 45 || Xp(s) ? (e.consume(s), (o += String.fromCharCode(s)), g) : n(s)
  }
  function _(i) {
    return i === 62 ? (e.consume(i), r.interrupt ? t : D) : n(i)
  }
  function v(t) {
    return Q(t) ? (e.consume(t), v) : E(t)
  }
  function y(t) {
    return t === 47
      ? (e.consume(t), E)
      : t === 58 || t === 95 || Yp(t)
        ? (e.consume(t), b)
        : Q(t)
          ? (e.consume(t), y)
          : E(t)
  }
  function b(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || Xp(t) ? (e.consume(t), b) : x(t)
  }
  function x(t) {
    return t === 61 ? (e.consume(t), S) : Q(t) ? (e.consume(t), x) : y(t)
  }
  function S(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
        ? (e.consume(t), (c = t), C)
        : Q(t)
          ? (e.consume(t), S)
          : w(t)
  }
  function C(t) {
    return t === c ? (e.consume(t), (c = null), T) : t === null || Z(t) ? n(t) : (e.consume(t), C)
  }
  function w(t) {
    return t === null ||
      t === 34 ||
      t === 39 ||
      t === 47 ||
      t === 60 ||
      t === 61 ||
      t === 62 ||
      t === 96 ||
      nm(t)
      ? x(t)
      : (e.consume(t), w)
  }
  function T(e) {
    return e === 47 || e === 62 || Q(e) ? y(e) : n(e)
  }
  function E(t) {
    return t === 62 ? (e.consume(t), ee) : n(t)
  }
  function ee(t) {
    return t === null || Z(t) ? D(t) : Q(t) ? (e.consume(t), ee) : n(t)
  }
  function D(t) {
    return t === 45 && i === 2
      ? (e.consume(t), ie)
      : t === 60 && i === 1
        ? (e.consume(t), ae)
        : t === 62 && i === 4
          ? (e.consume(t), k)
          : t === 63 && i === 3
            ? (e.consume(t), O)
            : t === 93 && i === 5
              ? (e.consume(t), se)
              : Z(t) && (i === 6 || i === 7)
                ? (e.exit(`htmlFlowData`), e.check(mh, ce, te)(t))
                : t === null || Z(t)
                  ? (e.exit(`htmlFlowData`), te(t))
                  : (e.consume(t), D)
  }
  function te(t) {
    return e.check(hh, ne, ce)(t)
  }
  function ne(t) {
    return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), re)
  }
  function re(t) {
    return t === null || Z(t) ? te(t) : (e.enter(`htmlFlowData`), D(t))
  }
  function ie(t) {
    return t === 45 ? (e.consume(t), O) : D(t)
  }
  function ae(t) {
    return t === 47 ? (e.consume(t), (o = ``), oe) : D(t)
  }
  function oe(t) {
    if (t === 62) {
      let n = o.toLowerCase()
      return fh.includes(n) ? (e.consume(t), k) : D(t)
    }
    return Yp(t) && o.length < 8 ? (e.consume(t), (o += String.fromCharCode(t)), oe) : D(t)
  }
  function se(t) {
    return t === 93 ? (e.consume(t), O) : D(t)
  }
  function O(t) {
    return t === 62 ? (e.consume(t), k) : t === 45 && i === 2 ? (e.consume(t), O) : D(t)
  }
  function k(t) {
    return t === null || Z(t) ? (e.exit(`htmlFlowData`), ce(t)) : (e.consume(t), k)
  }
  function ce(n) {
    return (e.exit(`htmlFlow`), t(n))
  }
}
function vh(e, t, n) {
  let r = this
  return i
  function i(t) {
    return Z(t) ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), a) : n(t)
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e)
  }
}
function yh(e, t, n) {
  return r
  function r(r) {
    return (e.enter(`lineEnding`), e.consume(r), e.exit(`lineEnding`), e.attempt(xm, t, n))
  }
}
var bh = { name: `htmlText`, tokenize: xh }
function xh(e, t, n) {
  let r = this,
    i,
    a,
    o
  return s
  function s(t) {
    return (e.enter(`htmlText`), e.enter(`htmlTextData`), e.consume(t), c)
  }
  function c(t) {
    return t === 33
      ? (e.consume(t), l)
      : t === 47
        ? (e.consume(t), x)
        : t === 63
          ? (e.consume(t), y)
          : Yp(t)
            ? (e.consume(t), w)
            : n(t)
  }
  function l(t) {
    return t === 45
      ? (e.consume(t), u)
      : t === 91
        ? (e.consume(t), (a = 0), m)
        : Yp(t)
          ? (e.consume(t), v)
          : n(t)
  }
  function u(t) {
    return t === 45 ? (e.consume(t), p) : n(t)
  }
  function d(t) {
    return t === null
      ? n(t)
      : t === 45
        ? (e.consume(t), f)
        : Z(t)
          ? ((o = d), ae(t))
          : (e.consume(t), d)
  }
  function f(t) {
    return t === 45 ? (e.consume(t), p) : d(t)
  }
  function p(e) {
    return e === 62 ? ie(e) : e === 45 ? f(e) : d(e)
  }
  function m(t) {
    return t === `CDATA[`.charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t)
  }
  function h(t) {
    return t === null
      ? n(t)
      : t === 93
        ? (e.consume(t), g)
        : Z(t)
          ? ((o = h), ae(t))
          : (e.consume(t), h)
  }
  function g(t) {
    return t === 93 ? (e.consume(t), _) : h(t)
  }
  function _(t) {
    return t === 62 ? ie(t) : t === 93 ? (e.consume(t), _) : h(t)
  }
  function v(t) {
    return t === null || t === 62 ? ie(t) : Z(t) ? ((o = v), ae(t)) : (e.consume(t), v)
  }
  function y(t) {
    return t === null
      ? n(t)
      : t === 63
        ? (e.consume(t), b)
        : Z(t)
          ? ((o = y), ae(t))
          : (e.consume(t), y)
  }
  function b(e) {
    return e === 62 ? ie(e) : y(e)
  }
  function x(t) {
    return Yp(t) ? (e.consume(t), S) : n(t)
  }
  function S(t) {
    return t === 45 || Xp(t) ? (e.consume(t), S) : C(t)
  }
  function C(t) {
    return Z(t) ? ((o = C), ae(t)) : Q(t) ? (e.consume(t), C) : ie(t)
  }
  function w(t) {
    return t === 45 || Xp(t) ? (e.consume(t), w) : t === 47 || t === 62 || nm(t) ? T(t) : n(t)
  }
  function T(t) {
    return t === 47
      ? (e.consume(t), ie)
      : t === 58 || t === 95 || Yp(t)
        ? (e.consume(t), E)
        : Z(t)
          ? ((o = T), ae(t))
          : Q(t)
            ? (e.consume(t), T)
            : ie(t)
  }
  function E(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || Xp(t) ? (e.consume(t), E) : ee(t)
  }
  function ee(t) {
    return t === 61
      ? (e.consume(t), D)
      : Z(t)
        ? ((o = ee), ae(t))
        : Q(t)
          ? (e.consume(t), ee)
          : T(t)
  }
  function D(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
        ? (e.consume(t), (i = t), te)
        : Z(t)
          ? ((o = D), ae(t))
          : Q(t)
            ? (e.consume(t), D)
            : (e.consume(t), ne)
  }
  function te(t) {
    return t === i
      ? (e.consume(t), (i = void 0), re)
      : t === null
        ? n(t)
        : Z(t)
          ? ((o = te), ae(t))
          : (e.consume(t), te)
  }
  function ne(t) {
    return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96
      ? n(t)
      : t === 47 || t === 62 || nm(t)
        ? T(t)
        : (e.consume(t), ne)
  }
  function re(e) {
    return e === 47 || e === 62 || nm(e) ? T(e) : n(e)
  }
  function ie(r) {
    return r === 62 ? (e.consume(r), e.exit(`htmlTextData`), e.exit(`htmlText`), t) : n(r)
  }
  function ae(t) {
    return (e.exit(`htmlTextData`), e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), oe)
  }
  function oe(t) {
    return Q(t)
      ? $(
          e,
          se,
          `linePrefix`,
          r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4
        )(t)
      : se(t)
  }
  function se(t) {
    return (e.enter(`htmlTextData`), o(t))
  }
}
var Sh = { name: `labelEnd`, resolveAll: Eh, resolveTo: Dh, tokenize: Oh },
  Ch = { tokenize: kh },
  wh = { tokenize: Ah },
  Th = { tokenize: jh }
function Eh(e) {
  let t = -1,
    n = []
  for (; ++t < e.length; ) {
    let r = e[t][1]
    if (
      (n.push(e[t]), r.type === `labelImage` || r.type === `labelLink` || r.type === `labelEnd`)
    ) {
      let e = r.type === `labelImage` ? 4 : 2
      ;((r.type = `data`), (t += e))
    }
  }
  return (e.length !== n.length && Vp(e, 0, e.length, n), e)
}
function Dh(e, t) {
  let n = e.length,
    r = 0,
    i,
    a,
    o,
    s
  for (; n--; )
    if (((i = e[n][1]), a)) {
      if (i.type === `link` || (i.type === `labelLink` && i._inactive)) break
      e[n][0] === `enter` && i.type === `labelLink` && (i._inactive = !0)
    } else if (o) {
      if (
        e[n][0] === `enter` &&
        (i.type === `labelImage` || i.type === `labelLink`) &&
        !i._balanced &&
        ((a = n), i.type !== `labelLink`)
      ) {
        r = 2
        break
      }
    } else i.type === `labelEnd` && (o = n)
  let c = {
      type: e[a][1].type === `labelLink` ? `link` : `image`,
      start: { ...e[a][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    l = { type: `label`, start: { ...e[a][1].start }, end: { ...e[o][1].end } },
    u = { type: `labelText`, start: { ...e[a + r + 2][1].end }, end: { ...e[o - 2][1].start } }
  return (
    (s = [
      [`enter`, c, t],
      [`enter`, l, t],
    ]),
    (s = Hp(s, e.slice(a + 1, a + r + 3))),
    (s = Hp(s, [[`enter`, u, t]])),
    (s = Hp(s, mm(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t))),
    (s = Hp(s, [[`exit`, u, t], e[o - 2], e[o - 1], [`exit`, l, t]])),
    (s = Hp(s, e.slice(o + 1))),
    (s = Hp(s, [[`exit`, c, t]])),
    Vp(e, a, e.length, s),
    e
  )
}
function Oh(e, t, n) {
  let r = this,
    i = r.events.length,
    a,
    o
  for (; i--; )
    if (
      (r.events[i][1].type === `labelImage` || r.events[i][1].type === `labelLink`) &&
      !r.events[i][1]._balanced
    ) {
      a = r.events[i][1]
      break
    }
  return s
  function s(t) {
    return a
      ? a._inactive
        ? d(t)
        : ((o = r.parser.defined.includes(Jp(r.sliceSerialize({ start: a.end, end: r.now() })))),
          e.enter(`labelEnd`),
          e.enter(`labelMarker`),
          e.consume(t),
          e.exit(`labelMarker`),
          e.exit(`labelEnd`),
          c)
      : n(t)
  }
  function c(t) {
    return t === 40
      ? e.attempt(Ch, u, o ? u : d)(t)
      : t === 91
        ? e.attempt(wh, u, o ? l : d)(t)
        : o
          ? u(t)
          : d(t)
  }
  function l(t) {
    return e.attempt(Th, u, d)(t)
  }
  function u(e) {
    return t(e)
  }
  function d(e) {
    return ((a._balanced = !0), n(e))
  }
}
function kh(e, t, n) {
  return r
  function r(t) {
    return (
      e.enter(`resource`),
      e.enter(`resourceMarker`),
      e.consume(t),
      e.exit(`resourceMarker`),
      i
    )
  }
  function i(t) {
    return nm(t) ? th(e, a)(t) : a(t)
  }
  function a(t) {
    return t === 41
      ? u(t)
      : Qm(
          e,
          o,
          s,
          `resourceDestination`,
          `resourceDestinationLiteral`,
          `resourceDestinationLiteralMarker`,
          `resourceDestinationRaw`,
          `resourceDestinationString`,
          32
        )(t)
  }
  function o(t) {
    return nm(t) ? th(e, c)(t) : u(t)
  }
  function s(e) {
    return n(e)
  }
  function c(t) {
    return t === 34 || t === 39 || t === 40
      ? eh(e, l, n, `resourceTitle`, `resourceTitleMarker`, `resourceTitleString`)(t)
      : u(t)
  }
  function l(t) {
    return nm(t) ? th(e, u)(t) : u(t)
  }
  function u(r) {
    return r === 41
      ? (e.enter(`resourceMarker`), e.consume(r), e.exit(`resourceMarker`), e.exit(`resource`), t)
      : n(r)
  }
}
function Ah(e, t, n) {
  let r = this
  return i
  function i(t) {
    return $m.call(r, e, a, o, `reference`, `referenceMarker`, `referenceString`)(t)
  }
  function a(e) {
    return r.parser.defined.includes(
      Jp(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? t(e)
      : n(e)
  }
  function o(e) {
    return n(e)
  }
}
function jh(e, t, n) {
  return r
  function r(t) {
    return (
      e.enter(`reference`),
      e.enter(`referenceMarker`),
      e.consume(t),
      e.exit(`referenceMarker`),
      i
    )
  }
  function i(r) {
    return r === 93
      ? (e.enter(`referenceMarker`),
        e.consume(r),
        e.exit(`referenceMarker`),
        e.exit(`reference`),
        t)
      : n(r)
  }
}
var Mh = { name: `labelStartImage`, resolveAll: Sh.resolveAll, tokenize: Nh }
function Nh(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (
      e.enter(`labelImage`),
      e.enter(`labelImageMarker`),
      e.consume(t),
      e.exit(`labelImageMarker`),
      a
    )
  }
  function a(t) {
    return t === 91
      ? (e.enter(`labelMarker`), e.consume(t), e.exit(`labelMarker`), e.exit(`labelImage`), o)
      : n(t)
  }
  function o(e) {
    return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs ? n(e) : t(e)
  }
}
var Ph = { name: `labelStartLink`, resolveAll: Sh.resolveAll, tokenize: Fh }
function Fh(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (
      e.enter(`labelLink`),
      e.enter(`labelMarker`),
      e.consume(t),
      e.exit(`labelMarker`),
      e.exit(`labelLink`),
      a
    )
  }
  function a(e) {
    return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs ? n(e) : t(e)
  }
}
var Ih = { name: `lineEnding`, tokenize: Lh }
function Lh(e, t) {
  return n
  function n(n) {
    return (e.enter(`lineEnding`), e.consume(n), e.exit(`lineEnding`), $(e, t, `linePrefix`))
  }
}
var Rh = { name: `thematicBreak`, tokenize: zh }
function zh(e, t, n) {
  let r = 0,
    i
  return a
  function a(t) {
    return (e.enter(`thematicBreak`), o(t))
  }
  function o(e) {
    return ((i = e), s(e))
  }
  function s(a) {
    return a === i
      ? (e.enter(`thematicBreakSequence`), c(a))
      : r >= 3 && (a === null || Z(a))
        ? (e.exit(`thematicBreak`), t(a))
        : n(a)
  }
  function c(t) {
    return t === i
      ? (e.consume(t), r++, c)
      : (e.exit(`thematicBreakSequence`), Q(t) ? $(e, s, `whitespace`)(t) : s(t))
  }
}
var Bh = { continuation: { tokenize: Wh }, exit: Kh, name: `list`, tokenize: Uh },
  Vh = { partial: !0, tokenize: qh },
  Hh = { partial: !0, tokenize: Gh }
function Uh(e, t, n) {
  let r = this,
    i = r.events[r.events.length - 1],
    a = i && i[1].type === `linePrefix` ? i[2].sliceSerialize(i[1], !0).length : 0,
    o = 0
  return s
  function s(t) {
    let i =
      r.containerState.type || (t === 42 || t === 43 || t === 45 ? `listUnordered` : `listOrdered`)
    if (i === `listUnordered` ? !r.containerState.marker || t === r.containerState.marker : $p(t)) {
      if (
        (r.containerState.type || ((r.containerState.type = i), e.enter(i, { _container: !0 })),
        i === `listUnordered`)
      )
        return (e.enter(`listItemPrefix`), t === 42 || t === 45 ? e.check(Rh, n, l)(t) : l(t))
      if (!r.interrupt || t === 49)
        return (e.enter(`listItemPrefix`), e.enter(`listItemValue`), c(t))
    }
    return n(t)
  }
  function c(t) {
    return $p(t) && ++o < 10
      ? (e.consume(t), c)
      : (!r.interrupt || o < 2) &&
          (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46)
        ? (e.exit(`listItemValue`), l(t))
        : n(t)
  }
  function l(t) {
    return (
      e.enter(`listItemMarker`),
      e.consume(t),
      e.exit(`listItemMarker`),
      (r.containerState.marker = r.containerState.marker || t),
      e.check(xm, r.interrupt ? n : u, e.attempt(Vh, f, d))
    )
  }
  function u(e) {
    return ((r.containerState.initialBlankLine = !0), a++, f(e))
  }
  function d(t) {
    return Q(t)
      ? (e.enter(`listItemPrefixWhitespace`), e.consume(t), e.exit(`listItemPrefixWhitespace`), f)
      : n(t)
  }
  function f(n) {
    return (
      (r.containerState.size = a + r.sliceSerialize(e.exit(`listItemPrefix`), !0).length),
      t(n)
    )
  }
}
function Wh(e, t, n) {
  let r = this
  return ((r.containerState._closeFlow = void 0), e.check(xm, i, a))
  function i(n) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
      $(e, t, `listItemIndent`, r.containerState.size + 1)(n)
    )
  }
  function a(n) {
    return r.containerState.furtherBlankLines || !Q(n)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(n))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(Hh, t, o)(n))
  }
  function o(i) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      $(
        e,
        e.attempt(Bh, t, n),
        `linePrefix`,
        r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4
      )(i)
    )
  }
}
function Gh(e, t, n) {
  let r = this
  return $(e, i, `listItemIndent`, r.containerState.size + 1)
  function i(e) {
    let i = r.events[r.events.length - 1]
    return i &&
      i[1].type === `listItemIndent` &&
      i[2].sliceSerialize(i[1], !0).length === r.containerState.size
      ? t(e)
      : n(e)
  }
}
function Kh(e) {
  e.exit(this.containerState.type)
}
function qh(e, t, n) {
  let r = this
  return $(
    e,
    i,
    `listItemPrefixWhitespace`,
    r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 5
  )
  function i(e) {
    let i = r.events[r.events.length - 1]
    return !Q(e) && i && i[1].type === `listItemPrefixWhitespace` ? t(e) : n(e)
  }
}
var Jh = { name: `setextUnderline`, resolveTo: Yh, tokenize: Xh }
function Yh(e, t) {
  let n = e.length,
    r,
    i,
    a
  for (; n--; )
    if (e[n][0] === `enter`) {
      if (e[n][1].type === `content`) {
        r = n
        break
      }
      e[n][1].type === `paragraph` && (i = n)
    } else
      (e[n][1].type === `content` && e.splice(n, 1), !a && e[n][1].type === `definition` && (a = n))
  let o = { type: `setextHeading`, start: { ...e[r][1].start }, end: { ...e[e.length - 1][1].end } }
  return (
    (e[i][1].type = `setextHeadingText`),
    a
      ? (e.splice(i, 0, [`enter`, o, t]),
        e.splice(a + 1, 0, [`exit`, e[r][1], t]),
        (e[r][1].end = { ...e[a][1].end }))
      : (e[r][1] = o),
    e.push([`exit`, o, t]),
    e
  )
}
function Xh(e, t, n) {
  let r = this,
    i
  return a
  function a(t) {
    let a = r.events.length,
      s
    for (; a--; )
      if (
        r.events[a][1].type !== `lineEnding` &&
        r.events[a][1].type !== `linePrefix` &&
        r.events[a][1].type !== `content`
      ) {
        s = r.events[a][1].type === `paragraph`
        break
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || s)
      ? (e.enter(`setextHeadingLine`), (i = t), o(t))
      : n(t)
  }
  function o(t) {
    return (e.enter(`setextHeadingLineSequence`), s(t))
  }
  function s(t) {
    return t === i
      ? (e.consume(t), s)
      : (e.exit(`setextHeadingLineSequence`), Q(t) ? $(e, c, `lineSuffix`)(t) : c(t))
  }
  function c(r) {
    return r === null || Z(r) ? (e.exit(`setextHeadingLine`), t(r)) : n(r)
  }
}
var Zh = { tokenize: Qh }
function Qh(e) {
  let t = this,
    n = e.attempt(
      xm,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(qm, i)), `linePrefix`)
      )
    )
  return n
  function r(r) {
    if (r === null) {
      e.consume(r)
      return
    }
    return (
      e.enter(`lineEndingBlank`),
      e.consume(r),
      e.exit(`lineEndingBlank`),
      (t.currentConstruct = void 0),
      n
    )
  }
  function i(r) {
    if (r === null) {
      e.consume(r)
      return
    }
    return (
      e.enter(`lineEnding`),
      e.consume(r),
      e.exit(`lineEnding`),
      (t.currentConstruct = void 0),
      n
    )
  }
}
var $h = { resolveAll: rg() },
  eg = ng(`string`),
  tg = ng(`text`)
function ng(e) {
  return { resolveAll: rg(e === `text` ? ig : void 0), tokenize: t }
  function t(t) {
    let n = this,
      r = this.parser.constructs[e],
      i = t.attempt(r, a, o)
    return a
    function a(e) {
      return c(e) ? i(e) : o(e)
    }
    function o(e) {
      if (e === null) {
        t.consume(e)
        return
      }
      return (t.enter(`data`), t.consume(e), s)
    }
    function s(e) {
      return c(e) ? (t.exit(`data`), i(e)) : (t.consume(e), s)
    }
    function c(e) {
      if (e === null) return !0
      let t = r[e],
        i = -1
      if (t)
        for (; ++i < t.length; ) {
          let e = t[i]
          if (!e.previous || e.previous.call(n, n.previous)) return !0
        }
      return !1
    }
  }
}
function rg(e) {
  return t
  function t(t, n) {
    let r = -1,
      i
    for (; ++r <= t.length; )
      i === void 0
        ? t[r] && t[r][1].type === `data` && ((i = r), r++)
        : (!t[r] || t[r][1].type !== `data`) &&
          (r !== i + 2 &&
            ((t[i][1].end = t[r - 1][1].end), t.splice(i + 2, r - i - 2), (r = i + 2)),
          (i = void 0))
    return e ? e(t, n) : t
  }
}
function ig(e, t) {
  let n = 0
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === `lineEnding`) && e[n - 1][1].type === `data`) {
      let r = e[n - 1][1],
        i = t.sliceStream(r),
        a = i.length,
        o = -1,
        s = 0,
        c
      for (; a--; ) {
        let e = i[a]
        if (typeof e == `string`) {
          for (o = e.length; e.charCodeAt(o - 1) === 32; ) (s++, o--)
          if (o) break
          o = -1
        } else if (e === -2) ((c = !0), s++)
        else if (e !== -1) {
          a++
          break
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (s = 0), s)) {
        let i = {
          type: n === e.length || c || s < 2 ? `lineSuffix` : `hardBreakTrailing`,
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s,
          },
          end: { ...r.end },
        }
        ;((r.end = { ...i.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, i)
            : (e.splice(n, 0, [`enter`, i, t], [`exit`, i, t]), (n += 2)))
      }
      n++
    }
  return e
}
var ag = c({
    attentionMarkers: () => pg,
    contentInitial: () => sg,
    disable: () => mg,
    document: () => og,
    flow: () => lg,
    flowInitial: () => cg,
    insideSpan: () => fg,
    string: () => ug,
    text: () => dg,
  }),
  og = {
    42: Bh,
    43: Bh,
    45: Bh,
    48: Bh,
    49: Bh,
    50: Bh,
    51: Bh,
    52: Bh,
    53: Bh,
    54: Bh,
    55: Bh,
    56: Bh,
    57: Bh,
    62: Cm,
  },
  sg = { 91: nh },
  cg = { [-2]: Fm, [-1]: Fm, 32: Fm },
  lg = { 35: ch, 42: Rh, 45: [Jh, Rh], 60: ph, 61: Jh, 95: Rh, 96: Mm, 126: Mm },
  ug = { 38: km, 92: Dm },
  dg = {
    [-5]: Ih,
    [-4]: Ih,
    [-3]: Ih,
    33: Mh,
    38: km,
    42: hm,
    60: [ym, bh],
    91: Ph,
    92: [oh, Dm],
    93: Sh,
    95: hm,
    96: zm,
  },
  fg = { null: [hm, $h] },
  pg = { null: [42, 95] },
  mg = { null: [] }
function hg(e, t, n) {
  let r = {
      _bufferIndex: -1,
      _index: 0,
      line: (n && n.line) || 1,
      column: (n && n.column) || 1,
      offset: (n && n.offset) || 0,
    },
    i = {},
    a = [],
    o = [],
    s = [],
    c = {
      attempt: C(x),
      check: C(S),
      consume: v,
      enter: y,
      exit: b,
      interrupt: C(S, { interrupt: !0 }),
    },
    l = {
      code: null,
      containerState: {},
      defineSkip: h,
      events: [],
      now: m,
      parser: e,
      previous: null,
      sliceSerialize: f,
      sliceStream: p,
      write: d,
    },
    u = t.tokenize.call(l, c)
  return (t.resolveAll && a.push(t), l)
  function d(e) {
    return (
      (o = Hp(o, e)),
      g(),
      o[o.length - 1] === null ? (w(t, 0), (l.events = mm(a, l.events, l)), l.events) : []
    )
  }
  function f(e, t) {
    return _g(p(e), t)
  }
  function p(e) {
    return gg(o, e)
  }
  function m() {
    let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r
    return { _bufferIndex: e, _index: t, line: n, column: i, offset: a }
  }
  function h(e) {
    ;((i[e.line] = e.column), E())
  }
  function g() {
    let e
    for (; r._index < o.length; ) {
      let t = o[r._index]
      if (typeof t == `string`)
        for (
          e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === e && r._bufferIndex < t.length;
        )
          _(t.charCodeAt(r._bufferIndex))
      else _(t)
    }
  }
  function _(e) {
    u = u(e)
  }
  function v(e) {
    ;(Z(e)
      ? (r.line++, (r.column = 1), (r.offset += e === -3 ? 2 : 1), E())
      : e !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length && ((r._bufferIndex = -1), r._index++)),
      (l.previous = e))
  }
  function y(e, t) {
    let n = t || {}
    return ((n.type = e), (n.start = m()), l.events.push([`enter`, n, l]), s.push(n), n)
  }
  function b(e) {
    let t = s.pop()
    return ((t.end = m()), l.events.push([`exit`, t, l]), t)
  }
  function x(e, t) {
    w(e, t.from)
  }
  function S(e, t) {
    t.restore()
  }
  function C(e, t) {
    return n
    function n(n, r, i) {
      let a, o, s, u
      return Array.isArray(n) ? f(n) : `tokenize` in n ? f([n]) : d(n)
      function d(e) {
        return t
        function t(t) {
          let n = t !== null && e[t],
            r = t !== null && e.null
          return f([
            ...(Array.isArray(n) ? n : n ? [n] : []),
            ...(Array.isArray(r) ? r : r ? [r] : []),
          ])(t)
        }
      }
      function f(e) {
        return ((a = e), (o = 0), e.length === 0 ? i : p(e[o]))
      }
      function p(e) {
        return n
        function n(n) {
          return (
            (u = T()),
            (s = e),
            e.partial || (l.currentConstruct = e),
            e.name && l.parser.constructs.disable.null.includes(e.name)
              ? h(n)
              : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n)
          )
        }
      }
      function m(t) {
        return (e(s, u), r)
      }
      function h(e) {
        return (u.restore(), ++o < a.length ? p(a[o]) : i)
      }
    }
  }
  function w(e, t) {
    ;(e.resolveAll && !a.includes(e) && a.push(e),
      e.resolve && Vp(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)),
      e.resolveTo && (l.events = e.resolveTo(l.events, l)))
  }
  function T() {
    let e = m(),
      t = l.previous,
      n = l.currentConstruct,
      i = l.events.length,
      a = Array.from(s)
    return { from: i, restore: o }
    function o() {
      ;((r = e), (l.previous = t), (l.currentConstruct = n), (l.events.length = i), (s = a), E())
    }
  }
  function E() {
    r.line in i && r.column < 2 && ((r.column = i[r.line]), (r.offset += i[r.line] - 1))
  }
}
function gg(e, t) {
  let n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    a = t.end._bufferIndex,
    o
  if (n === i) o = [e[n].slice(r, a)]
  else {
    if (((o = e.slice(n, i)), r > -1)) {
      let e = o[0]
      typeof e == `string` ? (o[0] = e.slice(r)) : o.shift()
    }
    a > 0 && o.push(e[i].slice(0, a))
  }
  return o
}
function _g(e, t) {
  let n = -1,
    r = [],
    i
  for (; ++n < e.length; ) {
    let a = e[n],
      o
    if (typeof a == `string`) o = a
    else
      switch (a) {
        case -5:
          o = `\r`
          break
        case -4:
          o = `
`
          break
        case -3:
          o = `\r
`
          break
        case -2:
          o = t ? ` ` : `	`
          break
        case -1:
          if (!t && i) continue
          o = ` `
          break
        default:
          o = String.fromCharCode(a)
      }
    ;((i = a === -2), r.push(o))
  }
  return r.join(``)
}
function vg(e) {
  let t = {
    constructs: Wp([ag, ...((e || {}).extensions || [])]),
    content: n(sm),
    defined: [],
    document: n(lm),
    flow: n(Zh),
    lazy: {},
    string: n(eg),
    text: n(tg),
  }
  return t
  function n(e) {
    return n
    function n(n) {
      return hg(t, e, n)
    }
  }
}
function yg(e) {
  for (; !Gm(e); );
  return e
}
var bg = /[\0\t\n\r]/g
function xg() {
  let e = 1,
    t = ``,
    n = !0,
    r
  return i
  function i(i, a, o) {
    let s = [],
      c,
      l,
      u,
      d,
      f
    for (
      i = t + (typeof i == `string` ? i.toString() : new TextDecoder(a || void 0).decode(i)),
        u = 0,
        t = ``,
        n &&= (i.charCodeAt(0) === 65279 && u++, void 0);
      u < i.length;
    ) {
      if (
        ((bg.lastIndex = u),
        (c = bg.exec(i)),
        (d = c && c.index !== void 0 ? c.index : i.length),
        (f = i.charCodeAt(d)),
        !c)
      ) {
        t = i.slice(u)
        break
      }
      if (f === 10 && u === d && r) (s.push(-3), (r = void 0))
      else
        switch (((r &&= (s.push(-5), void 0)), u < d && (s.push(i.slice(u, d)), (e += d - u)), f)) {
          case 0:
            ;(s.push(65533), e++)
            break
          case 9:
            for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l; ) s.push(-1)
            break
          case 10:
            ;(s.push(-4), (e = 1))
            break
          default:
            ;((r = !0), (e = 1))
        }
      u = d + 1
    }
    return (o && (r && s.push(-5), t && s.push(t), s.push(null)), s)
  }
}
var Sg = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function Cg(e) {
  return e.replace(Sg, wg)
}
function wg(e, t, n) {
  if (t) return t
  if (n.charCodeAt(0) === 35) {
    let e = n.charCodeAt(1),
      t = e === 120 || e === 88
    return qp(n.slice(t ? 2 : 1), t ? 16 : 10)
  }
  return Bp(n) || e
}
var Tg = {}.hasOwnProperty
function Eg(e, t, n) {
  return (
    t && typeof t == `object` && ((n = t), (t = void 0)),
    Dg(n)(
      yg(
        vg(n)
          .document()
          .write(xg()(e, t, !0))
      )
    )
  )
}
function Dg(e) {
  let t = {
    transforms: [],
    canContainEols: [`emphasis`, `fragment`, `heading`, `paragraph`, `strong`],
    enter: {
      autolink: a(we),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: a(be),
      blockQuote: a(he),
      characterEscape: T,
      characterReference: T,
      codeFenced: a(ge),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(ge, o),
      codeText: a(_e, o),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(ve),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(ye),
      hardBreakEscape: a(xe),
      hardBreakTrailing: a(xe),
      htmlFlow: a(Se, o),
      htmlFlowData: T,
      htmlText: a(Se, o),
      htmlTextData: T,
      image: a(Ce),
      label: o,
      link: a(we),
      listItem: a(Ee),
      listItemValue: f,
      listOrdered: a(Te, d),
      listUnordered: a(Te),
      paragraph: a(De),
      reference: le,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(be),
      strong: a(Oe),
      thematicBreak: a(Ae),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: x,
      autolink: c(),
      autolinkEmail: me,
      autolinkProtocol: pe,
      blockQuote: c(),
      characterEscapeValue: E,
      characterReferenceMarkerHexadecimal: de,
      characterReferenceMarkerNumeric: de,
      characterReferenceValue: fe,
      characterReference: A,
      codeFenced: c(g),
      codeFencedFence: h,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: m,
      codeFlowValue: E,
      codeIndented: c(_),
      codeText: c(re),
      codeTextData: E,
      data: E,
      definition: c(),
      definitionDestinationString: b,
      definitionLabelString: v,
      definitionTitleString: y,
      emphasis: c(),
      hardBreakEscape: c(D),
      hardBreakTrailing: c(D),
      htmlFlow: c(te),
      htmlFlowData: E,
      htmlText: c(ne),
      htmlTextData: E,
      image: c(ae),
      label: se,
      labelText: oe,
      lineEnding: ee,
      link: c(ie),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: ue,
      resourceDestinationString: O,
      resourceTitleString: k,
      resource: ce,
      setextHeading: c(w),
      setextHeadingLineSequence: C,
      setextHeadingText: S,
      strong: c(),
      thematicBreak: c(),
    },
  }
  kg(t, (e || {}).mdastExtensions || [])
  let n = {}
  return r
  function r(e) {
    let r = { type: `root`, children: [] },
      a = {
        stack: [r],
        tokenStack: [],
        config: t,
        enter: s,
        exit: l,
        buffer: o,
        resume: u,
        data: n,
      },
      c = [],
      d = -1
    for (; ++d < e.length; )
      (e[d][1].type === `listOrdered` || e[d][1].type === `listUnordered`) &&
        (e[d][0] === `enter` ? c.push(d) : (d = i(e, c.pop(), d)))
    for (d = -1; ++d < e.length; ) {
      let n = t[e[d][0]]
      Tg.call(n, e[d][1].type) &&
        n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1])
    }
    if (a.tokenStack.length > 0) {
      let e = a.tokenStack[a.tokenStack.length - 1]
      ;(e[1] || jg).call(a, void 0, e[0])
    }
    for (
      r.position = {
        start: Og(e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: Og(e.length > 0 ? e[e.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        d = -1;
      ++d < t.transforms.length;
    )
      r = t.transforms[d](r) || r
    return r
  }
  function i(e, t, n) {
    let r = t - 1,
      i = -1,
      a = !1,
      o,
      s,
      c,
      l
    for (; ++r <= n; ) {
      let t = e[r]
      switch (t[1].type) {
        case `listUnordered`:
        case `listOrdered`:
        case `blockQuote`:
          ;(t[0] === `enter` ? i++ : i--, (l = void 0))
          break
        case `lineEndingBlank`:
          t[0] === `enter` && (o && !l && !i && !c && (c = r), (l = void 0))
          break
        case `linePrefix`:
        case `listItemValue`:
        case `listItemMarker`:
        case `listItemPrefix`:
        case `listItemPrefixWhitespace`:
          break
        default:
          l = void 0
      }
      if (
        (!i && t[0] === `enter` && t[1].type === `listItemPrefix`) ||
        (i === -1 &&
          t[0] === `exit` &&
          (t[1].type === `listUnordered` || t[1].type === `listOrdered`))
      ) {
        if (o) {
          let i = r
          for (s = void 0; i--; ) {
            let t = e[i]
            if (t[1].type === `lineEnding` || t[1].type === `lineEndingBlank`) {
              if (t[0] === `exit`) continue
              ;(s && ((e[s][1].type = `lineEndingBlank`), (a = !0)),
                (t[1].type = `lineEnding`),
                (s = i))
            } else if (
              !(
                t[1].type === `linePrefix` ||
                t[1].type === `blockQuotePrefix` ||
                t[1].type === `blockQuotePrefixWhitespace` ||
                t[1].type === `blockQuoteMarker` ||
                t[1].type === `listItemIndent`
              )
            )
              break
          }
          ;(c && (!s || c < s) && (o._spread = !0),
            (o.end = Object.assign({}, s ? e[s][1].start : t[1].end)),
            e.splice(s || r, 0, [`exit`, o, t[2]]),
            r++,
            n++)
        }
        if (t[1].type === `listItemPrefix`) {
          let i = {
            type: `listItem`,
            _spread: !1,
            start: Object.assign({}, t[1].start),
            end: void 0,
          }
          ;((o = i), e.splice(r, 0, [`enter`, i, t[2]]), r++, n++, (c = void 0), (l = !0))
        }
      }
    }
    return ((e[t][1]._spread = a), n)
  }
  function a(e, t) {
    return n
    function n(n) {
      ;(s.call(this, e(n), n), t && t.call(this, n))
    }
  }
  function o() {
    this.stack.push({ type: `fragment`, children: [] })
  }
  function s(e, t, n) {
    ;(this.stack[this.stack.length - 1].children.push(e),
      this.stack.push(e),
      this.tokenStack.push([t, n || void 0]),
      (e.position = { start: Og(t.start), end: void 0 }))
  }
  function c(e) {
    return t
    function t(t) {
      ;(e && e.call(this, t), l.call(this, t))
    }
  }
  function l(e, t) {
    let n = this.stack.pop(),
      r = this.tokenStack.pop()
    if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || jg).call(this, e, r[0]))
    else
      throw Error(
        "Cannot close `" + e.type + "` (" + $f({ start: e.start, end: e.end }) + `): it’s not open`
      )
    n.position.end = Og(e.end)
  }
  function u() {
    return Fp(this.stack.pop())
  }
  function d() {
    this.data.expectingFirstListItemValue = !0
  }
  function f(e) {
    if (this.data.expectingFirstListItemValue) {
      let t = this.stack[this.stack.length - 2]
      ;((t.start = Number.parseInt(this.sliceSerialize(e), 10)),
        (this.data.expectingFirstListItemValue = void 0))
    }
  }
  function p() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.lang = e
  }
  function m() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.meta = e
  }
  function h() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0))
  }
  function g() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    ;((t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ``)), (this.data.flowCodeInside = void 0))
  }
  function _() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e.replace(/(\r?\n|\r)$/g, ``)
  }
  function v(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1]
    ;((n.label = t), (n.identifier = Jp(this.sliceSerialize(e)).toLowerCase()))
  }
  function y() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.title = e
  }
  function b() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.url = e
  }
  function x(e) {
    let t = this.stack[this.stack.length - 1]
    t.depth ||= this.sliceSerialize(e).length
  }
  function S() {
    this.data.setextHeadingSlurpLineEnding = !0
  }
  function C(e) {
    let t = this.stack[this.stack.length - 1]
    t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = void 0
  }
  function T(e) {
    let t = this.stack[this.stack.length - 1].children,
      n = t[t.length - 1]
    ;((!n || n.type !== `text`) &&
      ((n = ke()), (n.position = { start: Og(e.start), end: void 0 }), t.push(n)),
      this.stack.push(n))
  }
  function E(e) {
    let t = this.stack.pop()
    ;((t.value += this.sliceSerialize(e)), (t.position.end = Og(e.end)))
  }
  function ee(e) {
    let n = this.stack[this.stack.length - 1]
    if (this.data.atHardBreak) {
      let t = n.children[n.children.length - 1]
      ;((t.position.end = Og(e.end)), (this.data.atHardBreak = void 0))
      return
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(n.type) &&
      (T.call(this, e), E.call(this, e))
  }
  function D() {
    this.data.atHardBreak = !0
  }
  function te() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e
  }
  function ne() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e
  }
  function re() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e
  }
  function ie() {
    let e = this.stack[this.stack.length - 1]
    if (this.data.inReference) {
      let t = this.data.referenceType || `shortcut`
      ;((e.type += `Reference`), (e.referenceType = t), delete e.url, delete e.title)
    } else (delete e.identifier, delete e.label)
    this.data.referenceType = void 0
  }
  function ae() {
    let e = this.stack[this.stack.length - 1]
    if (this.data.inReference) {
      let t = this.data.referenceType || `shortcut`
      ;((e.type += `Reference`), (e.referenceType = t), delete e.url, delete e.title)
    } else (delete e.identifier, delete e.label)
    this.data.referenceType = void 0
  }
  function oe(e) {
    let t = this.sliceSerialize(e),
      n = this.stack[this.stack.length - 2]
    ;((n.label = Cg(t)), (n.identifier = Jp(t).toLowerCase()))
  }
  function se() {
    let e = this.stack[this.stack.length - 1],
      t = this.resume(),
      n = this.stack[this.stack.length - 1]
    ;((this.data.inReference = !0), n.type === `link` ? (n.children = e.children) : (n.alt = t))
  }
  function O() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.url = e
  }
  function k() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.title = e
  }
  function ce() {
    this.data.inReference = void 0
  }
  function le() {
    this.data.referenceType = `collapsed`
  }
  function ue(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1]
    ;((n.label = t),
      (n.identifier = Jp(this.sliceSerialize(e)).toLowerCase()),
      (this.data.referenceType = `full`))
  }
  function de(e) {
    this.data.characterReferenceType = e.type
  }
  function fe(e) {
    let t = this.sliceSerialize(e),
      n = this.data.characterReferenceType,
      r
    n
      ? ((r = qp(t, n === `characterReferenceMarkerNumeric` ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (r = Bp(t))
    let i = this.stack[this.stack.length - 1]
    i.value += r
  }
  function A(e) {
    let t = this.stack.pop()
    t.position.end = Og(e.end)
  }
  function pe(e) {
    E.call(this, e)
    let t = this.stack[this.stack.length - 1]
    t.url = this.sliceSerialize(e)
  }
  function me(e) {
    E.call(this, e)
    let t = this.stack[this.stack.length - 1]
    t.url = `mailto:` + this.sliceSerialize(e)
  }
  function he() {
    return { type: `blockquote`, children: [] }
  }
  function ge() {
    return { type: `code`, lang: null, meta: null, value: `` }
  }
  function _e() {
    return { type: `inlineCode`, value: `` }
  }
  function ve() {
    return { type: `definition`, identifier: ``, label: null, title: null, url: `` }
  }
  function ye() {
    return { type: `emphasis`, children: [] }
  }
  function be() {
    return { type: `heading`, depth: 0, children: [] }
  }
  function xe() {
    return { type: `break` }
  }
  function Se() {
    return { type: `html`, value: `` }
  }
  function Ce() {
    return { type: `image`, title: null, url: ``, alt: null }
  }
  function we() {
    return { type: `link`, title: null, url: ``, children: [] }
  }
  function Te(e) {
    return {
      type: `list`,
      ordered: e.type === `listOrdered`,
      start: null,
      spread: e._spread,
      children: [],
    }
  }
  function Ee(e) {
    return { type: `listItem`, spread: e._spread, checked: null, children: [] }
  }
  function De() {
    return { type: `paragraph`, children: [] }
  }
  function Oe() {
    return { type: `strong`, children: [] }
  }
  function ke() {
    return { type: `text`, value: `` }
  }
  function Ae() {
    return { type: `thematicBreak` }
  }
}
function Og(e) {
  return { line: e.line, column: e.column, offset: e.offset }
}
function kg(e, t) {
  let n = -1
  for (; ++n < t.length; ) {
    let r = t[n]
    Array.isArray(r) ? kg(e, r) : Ag(e, r)
  }
}
function Ag(e, t) {
  let n
  for (n in t)
    if (Tg.call(t, n))
      switch (n) {
        case `canContainEols`: {
          let r = t[n]
          r && e[n].push(...r)
          break
        }
        case `transforms`: {
          let r = t[n]
          r && e[n].push(...r)
          break
        }
        case `enter`:
        case `exit`: {
          let r = t[n]
          r && Object.assign(e[n], r)
          break
        }
      }
}
function jg(e, t) {
  throw Error(
    e
      ? "Cannot close `" +
          e.type +
          "` (" +
          $f({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          $f({ start: t.start, end: t.end }) +
          `) is open`
      : "Cannot close document, a token (`" +
          t.type +
          "`, " +
          $f({ start: t.start, end: t.end }) +
          `) is still open`
  )
}
function Mg(e) {
  let t = this
  t.parser = n
  function n(n) {
    return Eg(n, {
      ...t.data(`settings`),
      ...e,
      extensions: t.data(`micromarkExtensions`) || [],
      mdastExtensions: t.data(`fromMarkdownExtensions`) || [],
    })
  }
}
function Ng(e, t) {
  let n = { type: `element`, tagName: `blockquote`, properties: {}, children: e.wrap(e.all(t), !0) }
  return (e.patch(t, n), e.applyData(t, n))
}
function Pg(e, t) {
  let n = { type: `element`, tagName: `br`, properties: {}, children: [] }
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: `text`,
        value: `
`,
      },
    ]
  )
}
function Fg(e, t) {
  let n = t.value
      ? t.value +
        `
`
      : ``,
    r = {},
    i = t.lang ? t.lang.split(/\s+/) : []
  i.length > 0 && (r.className = [`language-` + i[0]])
  let a = {
    type: `element`,
    tagName: `code`,
    properties: r,
    children: [{ type: `text`, value: n }],
  }
  return (
    t.meta && (a.data = { meta: t.meta }),
    e.patch(t, a),
    (a = e.applyData(t, a)),
    (a = { type: `element`, tagName: `pre`, properties: {}, children: [a] }),
    e.patch(t, a),
    a
  )
}
function Ig(e, t) {
  let n = { type: `element`, tagName: `del`, properties: {}, children: e.all(t) }
  return (e.patch(t, n), e.applyData(t, n))
}
function Lg(e, t) {
  let n = { type: `element`, tagName: `em`, properties: {}, children: e.all(t) }
  return (e.patch(t, n), e.applyData(t, n))
}
function Rg(e, t) {
  let n = typeof e.options.clobberPrefix == `string` ? e.options.clobberPrefix : `user-content-`,
    r = String(t.identifier).toUpperCase(),
    i = om(r.toLowerCase()),
    a = e.footnoteOrder.indexOf(r),
    o,
    s = e.footnoteCounts.get(r)
  ;(s === void 0 ? ((s = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length)) : (o = a + 1),
    (s += 1),
    e.footnoteCounts.set(r, s))
  let c = {
    type: `element`,
    tagName: `a`,
    properties: {
      href: `#` + n + `fn-` + i,
      id: n + `fnref-` + i + (s > 1 ? `-` + s : ``),
      dataFootnoteRef: !0,
      ariaDescribedBy: [`footnote-label`],
    },
    children: [{ type: `text`, value: String(o) }],
  }
  e.patch(t, c)
  let l = { type: `element`, tagName: `sup`, properties: {}, children: [c] }
  return (e.patch(t, l), e.applyData(t, l))
}
function zg(e, t) {
  let n = { type: `element`, tagName: `h` + t.depth, properties: {}, children: e.all(t) }
  return (e.patch(t, n), e.applyData(t, n))
}
function Bg(e, t) {
  if (e.options.allowDangerousHtml) {
    let n = { type: `raw`, value: t.value }
    return (e.patch(t, n), e.applyData(t, n))
  }
}
function Vg(e, t) {
  let n = t.referenceType,
    r = `]`
  if (
    (n === `collapsed` ? (r += `[]`) : n === `full` && (r += `[` + (t.label || t.identifier) + `]`),
    t.type === `imageReference`)
  )
    return [{ type: `text`, value: `![` + t.alt + r }]
  let i = e.all(t),
    a = i[0]
  a && a.type === `text` ? (a.value = `[` + a.value) : i.unshift({ type: `text`, value: `[` })
  let o = i[i.length - 1]
  return (o && o.type === `text` ? (o.value += r) : i.push({ type: `text`, value: r }), i)
}
function Hg(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n)
  if (!r) return Vg(e, t)
  let i = { src: om(r.url || ``), alt: t.alt }
  r.title !== null && r.title !== void 0 && (i.title = r.title)
  let a = { type: `element`, tagName: `img`, properties: i, children: [] }
  return (e.patch(t, a), e.applyData(t, a))
}
function Ug(e, t) {
  let n = { src: om(t.url) }
  ;(t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title))
  let r = { type: `element`, tagName: `img`, properties: n, children: [] }
  return (e.patch(t, r), e.applyData(t, r))
}
function Wg(e, t) {
  let n = { type: `text`, value: t.value.replace(/\r?\n|\r/g, ` `) }
  e.patch(t, n)
  let r = { type: `element`, tagName: `code`, properties: {}, children: [n] }
  return (e.patch(t, r), e.applyData(t, r))
}
function Gg(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n)
  if (!r) return Vg(e, t)
  let i = { href: om(r.url || ``) }
  r.title !== null && r.title !== void 0 && (i.title = r.title)
  let a = { type: `element`, tagName: `a`, properties: i, children: e.all(t) }
  return (e.patch(t, a), e.applyData(t, a))
}
function Kg(e, t) {
  let n = { href: om(t.url) }
  t.title !== null && t.title !== void 0 && (n.title = t.title)
  let r = { type: `element`, tagName: `a`, properties: n, children: e.all(t) }
  return (e.patch(t, r), e.applyData(t, r))
}
function qg(e, t, n) {
  let r = e.all(t),
    i = n ? Jg(n) : Yg(t),
    a = {},
    o = []
  if (typeof t.checked == `boolean`) {
    let e = r[0],
      n
    ;(e && e.type === `element` && e.tagName === `p`
      ? (n = e)
      : ((n = { type: `element`, tagName: `p`, properties: {}, children: [] }), r.unshift(n)),
      n.children.length > 0 && n.children.unshift({ type: `text`, value: ` ` }),
      n.children.unshift({
        type: `element`,
        tagName: `input`,
        properties: { type: `checkbox`, checked: t.checked, disabled: !0 },
        children: [],
      }),
      (a.className = [`task-list-item`]))
  }
  let s = -1
  for (; ++s < r.length; ) {
    let e = r[s]
    ;((i || s !== 0 || e.type !== `element` || e.tagName !== `p`) &&
      o.push({
        type: `text`,
        value: `
`,
      }),
      e.type === `element` && e.tagName === `p` && !i ? o.push(...e.children) : o.push(e))
  }
  let c = r[r.length - 1]
  c &&
    (i || c.type !== `element` || c.tagName !== `p`) &&
    o.push({
      type: `text`,
      value: `
`,
    })
  let l = { type: `element`, tagName: `li`, properties: a, children: o }
  return (e.patch(t, l), e.applyData(t, l))
}
function Jg(e) {
  let t = !1
  if (e.type === `list`) {
    t = e.spread || !1
    let n = e.children,
      r = -1
    for (; !t && ++r < n.length; ) t = Yg(n[r])
  }
  return t
}
function Yg(e) {
  return e.spread ?? e.children.length > 1
}
function Xg(e, t) {
  let n = {},
    r = e.all(t),
    i = -1
  for (typeof t.start == `number` && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    let e = r[i]
    if (
      e.type === `element` &&
      e.tagName === `li` &&
      e.properties &&
      Array.isArray(e.properties.className) &&
      e.properties.className.includes(`task-list-item`)
    ) {
      n.className = [`contains-task-list`]
      break
    }
  }
  let a = {
    type: `element`,
    tagName: t.ordered ? `ol` : `ul`,
    properties: n,
    children: e.wrap(r, !0),
  }
  return (e.patch(t, a), e.applyData(t, a))
}
function Zg(e, t) {
  let n = { type: `element`, tagName: `p`, properties: {}, children: e.all(t) }
  return (e.patch(t, n), e.applyData(t, n))
}
function Qg(e, t) {
  let n = { type: `root`, children: e.wrap(e.all(t)) }
  return (e.patch(t, n), e.applyData(t, n))
}
function $g(e, t) {
  let n = { type: `element`, tagName: `strong`, properties: {}, children: e.all(t) }
  return (e.patch(t, n), e.applyData(t, n))
}
function e_(e, t) {
  let n = e.all(t),
    r = n.shift(),
    i = []
  if (r) {
    let n = { type: `element`, tagName: `thead`, properties: {}, children: e.wrap([r], !0) }
    ;(e.patch(t.children[0], n), i.push(n))
  }
  if (n.length > 0) {
    let r = { type: `element`, tagName: `tbody`, properties: {}, children: e.wrap(n, !0) },
      a = Xf(t.children[1]),
      o = Yf(t.children[t.children.length - 1])
    ;(a && o && (r.position = { start: a, end: o }), i.push(r))
  }
  let a = { type: `element`, tagName: `table`, properties: {}, children: e.wrap(i, !0) }
  return (e.patch(t, a), e.applyData(t, a))
}
function t_(e, t, n) {
  let r = n ? n.children : void 0,
    i = (r ? r.indexOf(t) : 1) === 0 ? `th` : `td`,
    a = n && n.type === `table` ? n.align : void 0,
    o = a ? a.length : t.children.length,
    s = -1,
    c = []
  for (; ++s < o; ) {
    let n = t.children[s],
      r = {},
      o = a ? a[s] : void 0
    o && (r.align = o)
    let l = { type: `element`, tagName: i, properties: r, children: [] }
    ;(n && ((l.children = e.all(n)), e.patch(n, l), (l = e.applyData(n, l))), c.push(l))
  }
  let l = { type: `element`, tagName: `tr`, properties: {}, children: e.wrap(c, !0) }
  return (e.patch(t, l), e.applyData(t, l))
}
function n_(e, t) {
  let n = { type: `element`, tagName: `td`, properties: {}, children: e.all(t) }
  return (e.patch(t, n), e.applyData(t, n))
}
var r_ = 9,
  i_ = 32
function a_(e) {
  let t = String(e),
    n = /\r?\n|\r/g,
    r = n.exec(t),
    i = 0,
    a = []
  for (; r; )
    (a.push(o_(t.slice(i, r.index), i > 0, !0), r[0]), (i = r.index + r[0].length), (r = n.exec(t)))
  return (a.push(o_(t.slice(i), i > 0, !1)), a.join(``))
}
function o_(e, t, n) {
  let r = 0,
    i = e.length
  if (t) {
    let t = e.codePointAt(r)
    for (; t === r_ || t === i_; ) (r++, (t = e.codePointAt(r)))
  }
  if (n) {
    let t = e.codePointAt(i - 1)
    for (; t === r_ || t === i_; ) (i--, (t = e.codePointAt(i - 1)))
  }
  return i > r ? e.slice(r, i) : ``
}
function s_(e, t) {
  let n = { type: `text`, value: a_(String(t.value)) }
  return (e.patch(t, n), e.applyData(t, n))
}
function c_(e, t) {
  let n = { type: `element`, tagName: `hr`, properties: {}, children: [] }
  return (e.patch(t, n), e.applyData(t, n))
}
var l_ = {
  blockquote: Ng,
  break: Pg,
  code: Fg,
  delete: Ig,
  emphasis: Lg,
  footnoteReference: Rg,
  heading: zg,
  html: Bg,
  imageReference: Hg,
  image: Ug,
  inlineCode: Wg,
  linkReference: Gg,
  link: Kg,
  listItem: qg,
  list: Xg,
  paragraph: Zg,
  root: Qg,
  strong: $g,
  table: e_,
  tableCell: n_,
  tableRow: t_,
  text: s_,
  thematicBreak: c_,
  toml: u_,
  yaml: u_,
  definition: u_,
  footnoteDefinition: u_,
}
function u_() {}
var d_ = typeof self == `object` ? self : globalThis,
  f_ = (e, t) => {
    switch (e) {
      case `Function`:
      case `SharedWorker`:
      case `Worker`:
      case `eval`:
      case `setInterval`:
      case `setTimeout`:
        throw TypeError(`unable to deserialize ` + e)
    }
    return new d_[e](t)
  },
  p_ = (e, t) => {
    let n = (t, n) => (e.set(n, t), t),
      r = (i) => {
        if (e.has(i)) return e.get(i)
        let [a, o] = t[i]
        switch (a) {
          case 0:
          case -1:
            return n(o, i)
          case 1: {
            let e = n([], i)
            for (let t of o) e.push(r(t))
            return e
          }
          case 2: {
            let e = n({}, i)
            for (let [t, n] of o) e[r(t)] = r(n)
            return e
          }
          case 3:
            return n(new Date(o), i)
          case 4: {
            let { source: e, flags: t } = o
            return n(new RegExp(e, t), i)
          }
          case 5: {
            let e = n(new Map(), i)
            for (let [t, n] of o) e.set(r(t), r(n))
            return e
          }
          case 6: {
            let e = n(new Set(), i)
            for (let t of o) e.add(r(t))
            return e
          }
          case 7: {
            let { name: e, message: t } = o
            return n(f_(e, t), i)
          }
          case 8:
            return n(BigInt(o), i)
          case `BigInt`:
            return n(Object(BigInt(o)), i)
          case `ArrayBuffer`:
            return n(new Uint8Array(o).buffer, o)
          case `DataView`: {
            let { buffer: e } = new Uint8Array(o)
            return n(new DataView(e), o)
          }
        }
        return n(f_(a, o), i)
      }
    return r
  },
  m_ = (e) => p_(new Map(), e)(0),
  h_ = ``,
  { toString: g_ } = {},
  { keys: __ } = Object,
  v_ = (e) => {
    let t = typeof e
    if (t !== `object` || !e) return [0, t]
    let n = g_.call(e).slice(8, -1)
    switch (n) {
      case `Array`:
        return [1, h_]
      case `Object`:
        return [2, h_]
      case `Date`:
        return [3, h_]
      case `RegExp`:
        return [4, h_]
      case `Map`:
        return [5, h_]
      case `Set`:
        return [6, h_]
      case `DataView`:
        return [1, n]
    }
    return n.includes(`Array`) ? [1, n] : n.includes(`Error`) ? [7, n] : [2, n]
  },
  y_ = ([e, t]) => e === 0 && (t === `function` || t === `symbol`),
  b_ = (e, t, n, r) => {
    let i = (e, t) => {
        let i = r.push(e) - 1
        return (n.set(t, i), i)
      },
      a = (r) => {
        if (n.has(r)) return n.get(r)
        let [o, s] = v_(r)
        switch (o) {
          case 0: {
            let t = r
            switch (s) {
              case `bigint`:
                ;((o = 8), (t = r.toString()))
                break
              case `function`:
              case `symbol`:
                if (e) throw TypeError(`unable to serialize ` + s)
                t = null
                break
              case `undefined`:
                return i([-1], r)
            }
            return i([o, t], r)
          }
          case 1: {
            if (s) {
              let e = r
              return (
                s === `DataView`
                  ? (e = new Uint8Array(r.buffer))
                  : s === `ArrayBuffer` && (e = new Uint8Array(r)),
                i([s, [...e]], r)
              )
            }
            let e = [],
              t = i([o, e], r)
            for (let t of r) e.push(a(t))
            return t
          }
          case 2: {
            if (s)
              switch (s) {
                case `BigInt`:
                  return i([s, r.toString()], r)
                case `Boolean`:
                case `Number`:
                case `String`:
                  return i([s, r.valueOf()], r)
              }
            if (t && `toJSON` in r) return a(r.toJSON())
            let n = [],
              c = i([o, n], r)
            for (let t of __(r)) (e || !y_(v_(r[t]))) && n.push([a(t), a(r[t])])
            return c
          }
          case 3:
            return i([o, r.toISOString()], r)
          case 4: {
            let { source: e, flags: t } = r
            return i([o, { source: e, flags: t }], r)
          }
          case 5: {
            let t = [],
              n = i([o, t], r)
            for (let [n, i] of r) (e || !(y_(v_(n)) || y_(v_(i)))) && t.push([a(n), a(i)])
            return n
          }
          case 6: {
            let t = [],
              n = i([o, t], r)
            for (let n of r) (e || !y_(v_(n))) && t.push(a(n))
            return n
          }
        }
        let { message: c } = r
        return i([o, { name: s, message: c }], r)
      }
    return a
  },
  x_ = (e, { json: t, lossy: n } = {}) => {
    let r = []
    return (b_(!(t || n), !!t, new Map(), r)(e), r)
  },
  S_ =
    typeof structuredClone == `function`
      ? (e, t) => (t && (`json` in t || `lossy` in t) ? m_(x_(e, t)) : structuredClone(e))
      : (e, t) => m_(x_(e, t))
function C_(e, t) {
  let n = [{ type: `text`, value: `↩` }]
  return (
    t > 1 &&
      n.push({
        type: `element`,
        tagName: `sup`,
        properties: {},
        children: [{ type: `text`, value: String(t) }],
      }),
    n
  )
}
function w_(e, t) {
  return `Back to reference ` + (e + 1) + (t > 1 ? `-` + t : ``)
}
function T_(e) {
  let t = typeof e.options.clobberPrefix == `string` ? e.options.clobberPrefix : `user-content-`,
    n = e.options.footnoteBackContent || C_,
    r = e.options.footnoteBackLabel || w_,
    i = e.options.footnoteLabel || `Footnotes`,
    a = e.options.footnoteLabelTagName || `h2`,
    o = e.options.footnoteLabelProperties || { className: [`sr-only`] },
    s = [],
    c = -1
  for (; ++c < e.footnoteOrder.length; ) {
    let i = e.footnoteById.get(e.footnoteOrder[c])
    if (!i) continue
    let a = e.all(i),
      o = String(i.identifier).toUpperCase(),
      l = om(o.toLowerCase()),
      u = 0,
      d = [],
      f = e.footnoteCounts.get(o)
    for (; f !== void 0 && ++u <= f; ) {
      d.length > 0 && d.push({ type: `text`, value: ` ` })
      let e = typeof n == `string` ? n : n(c, u)
      ;(typeof e == `string` && (e = { type: `text`, value: e }),
        d.push({
          type: `element`,
          tagName: `a`,
          properties: {
            href: `#` + t + `fnref-` + l + (u > 1 ? `-` + u : ``),
            dataFootnoteBackref: ``,
            ariaLabel: typeof r == `string` ? r : r(c, u),
            className: [`data-footnote-backref`],
          },
          children: Array.isArray(e) ? e : [e],
        }))
    }
    let p = a[a.length - 1]
    if (p && p.type === `element` && p.tagName === `p`) {
      let e = p.children[p.children.length - 1]
      ;(e && e.type === `text` ? (e.value += ` `) : p.children.push({ type: `text`, value: ` ` }),
        p.children.push(...d))
    } else a.push(...d)
    let m = {
      type: `element`,
      tagName: `li`,
      properties: { id: t + `fn-` + l },
      children: e.wrap(a, !0),
    }
    ;(e.patch(i, m), s.push(m))
  }
  if (s.length !== 0)
    return {
      type: `element`,
      tagName: `section`,
      properties: { dataFootnotes: !0, className: [`footnotes`] },
      children: [
        {
          type: `element`,
          tagName: a,
          properties: { ...S_(o), id: `footnote-label` },
          children: [{ type: `text`, value: i }],
        },
        {
          type: `text`,
          value: `
`,
        },
        { type: `element`, tagName: `ol`, properties: {}, children: e.wrap(s, !0) },
        {
          type: `text`,
          value: `
`,
        },
      ],
    }
}
var E_ = function (e) {
  if (e == null) return j_
  if (typeof e == `function`) return A_(e)
  if (typeof e == `object`) return Array.isArray(e) ? D_(e) : O_(e)
  if (typeof e == `string`) return k_(e)
  throw Error(`Expected function, string, or object as test`)
}
function D_(e) {
  let t = [],
    n = -1
  for (; ++n < e.length; ) t[n] = E_(e[n])
  return A_(r)
  function r(...e) {
    let n = -1
    for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0
    return !1
  }
}
function O_(e) {
  let t = e
  return A_(n)
  function n(n) {
    let r = n,
      i
    for (i in e) if (r[i] !== t[i]) return !1
    return !0
  }
}
function k_(e) {
  return A_(t)
  function t(t) {
    return t && t.type === e
  }
}
function A_(e) {
  return t
  function t(t, n, r) {
    return !!(M_(t) && e.call(this, t, typeof n == `number` ? n : void 0, r || void 0))
  }
}
function j_() {
  return !0
}
function M_(e) {
  return typeof e == `object` && !!e && `type` in e
}
function N_(e) {
  return e
}
var P_ = []
function F_(e, t, n, r) {
  let i
  typeof t == `function` && typeof n != `function` ? ((r = n), (n = t)) : (i = t)
  let a = E_(i),
    o = r ? -1 : 1
  s(e, void 0, [])()
  function s(e, i, c) {
    let l = e && typeof e == `object` ? e : {}
    if (typeof l.type == `string`) {
      let t = typeof l.tagName == `string` ? l.tagName : typeof l.name == `string` ? l.name : void 0
      Object.defineProperty(u, `name`, {
        value: `node (` + N_(e.type + (t ? `<` + t + `>` : ``)) + `)`,
      })
    }
    return u
    function u() {
      let l = P_,
        u,
        d,
        f
      if ((!t || a(e, i, c[c.length - 1] || void 0)) && ((l = I_(n(e, c))), l[0] === !1)) return l
      if (`children` in e && e.children) {
        let t = e
        if (t.children && l[0] !== `skip`)
          for (
            d = (r ? t.children.length : -1) + o, f = c.concat(t);
            d > -1 && d < t.children.length;
          ) {
            let e = t.children[d]
            if (((u = s(e, d, f)()), u[0] === !1)) return u
            d = typeof u[1] == `number` ? u[1] : d + o
          }
      }
      return l
    }
  }
}
function I_(e) {
  return Array.isArray(e) ? e : typeof e == `number` ? [!0, e] : e == null ? P_ : [e]
}
function L_(e, t, n, r) {
  let i, a, o
  ;(typeof t == `function` && typeof n != `function`
    ? ((a = void 0), (o = t), (i = n))
    : ((a = t), (o = n), (i = r)),
    F_(e, a, s, i))
  function s(e, t) {
    let n = t[t.length - 1],
      r = n ? n.children.indexOf(e) : void 0
    return o(e, r, n)
  }
}
var R_ = {}.hasOwnProperty,
  z_ = {}
function B_(e, t) {
  let n = t || z_,
    r = new Map(),
    i = new Map(),
    a = {
      all: s,
      applyData: H_,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: new Map(),
      footnoteOrder: [],
      handlers: { ...l_, ...n.handlers },
      one: o,
      options: n,
      patch: V_,
      wrap: W_,
    }
  return (
    L_(e, function (e) {
      if (e.type === `definition` || e.type === `footnoteDefinition`) {
        let t = e.type === `definition` ? r : i,
          n = String(e.identifier).toUpperCase()
        t.has(n) || t.set(n, e)
      }
    }),
    a
  )
  function o(e, t) {
    let n = e.type,
      r = a.handlers[n]
    if (R_.call(a.handlers, n) && r) return r(a, e, t)
    if (a.options.passThrough && a.options.passThrough.includes(n)) {
      if (`children` in e) {
        let { children: t, ...n } = e,
          r = S_(n)
        return ((r.children = a.all(e)), r)
      }
      return S_(e)
    }
    return (a.options.unknownHandler || U_)(a, e, t)
  }
  function s(e) {
    let t = []
    if (`children` in e) {
      let n = e.children,
        r = -1
      for (; ++r < n.length; ) {
        let i = a.one(n[r], e)
        if (i) {
          if (
            r &&
            n[r - 1].type === `break` &&
            (!Array.isArray(i) && i.type === `text` && (i.value = G_(i.value)),
            !Array.isArray(i) && i.type === `element`)
          ) {
            let e = i.children[0]
            e && e.type === `text` && (e.value = G_(e.value))
          }
          Array.isArray(i) ? t.push(...i) : t.push(i)
        }
      }
    }
    return t
  }
}
function V_(e, t) {
  e.position && (t.position = Qf(e))
}
function H_(e, t) {
  let n = t
  if (e && e.data) {
    let t = e.data.hName,
      r = e.data.hChildren,
      i = e.data.hProperties
    ;(typeof t == `string` &&
      (n.type === `element`
        ? (n.tagName = t)
        : (n = {
            type: `element`,
            tagName: t,
            properties: {},
            children: `children` in n ? n.children : [n],
          })),
      n.type === `element` && i && Object.assign(n.properties, S_(i)),
      `children` in n && n.children && r != null && (n.children = r))
  }
  return n
}
function U_(e, t) {
  let n = t.data || {},
    r =
      `value` in t && !(R_.call(n, `hProperties`) || R_.call(n, `hChildren`))
        ? { type: `text`, value: t.value }
        : { type: `element`, tagName: `div`, properties: {}, children: e.all(t) }
  return (e.patch(t, r), e.applyData(t, r))
}
function W_(e, t) {
  let n = [],
    r = -1
  for (
    t &&
    n.push({
      type: `text`,
      value: `
`,
    });
    ++r < e.length;
  )
    (r &&
      n.push({
        type: `text`,
        value: `
`,
      }),
      n.push(e[r]))
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: `text`,
        value: `
`,
      }),
    n
  )
}
function G_(e) {
  let t = 0,
    n = e.charCodeAt(t)
  for (; n === 9 || n === 32; ) (t++, (n = e.charCodeAt(t)))
  return e.slice(t)
}
function K_(e, t) {
  let n = B_(e, t),
    r = n.one(e, void 0),
    i = T_(n),
    a = Array.isArray(r) ? { type: `root`, children: r } : r || { type: `root`, children: [] }
  return (
    i &&
      (`children` in a,
      a.children.push(
        {
          type: `text`,
          value: `
`,
        },
        i
      )),
    a
  )
}
function q_(e, t) {
  return e && `run` in e
    ? async function (n, r) {
        let i = K_(n, { file: r, ...t })
        await e.run(i, r)
      }
    : function (n, r) {
        return K_(n, { file: r, ...(e || t) })
      }
}
function J_(e) {
  if (e) throw e
}
var Y_ = s((e, t) => {
  var n = Object.prototype.hasOwnProperty,
    r = Object.prototype.toString,
    i = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    o = function (e) {
      return typeof Array.isArray == `function` ? Array.isArray(e) : r.call(e) === `[object Array]`
    },
    s = function (e) {
      if (!e || r.call(e) !== `[object Object]`) return !1
      var t = n.call(e, `constructor`),
        i =
          e.constructor &&
          e.constructor.prototype &&
          n.call(e.constructor.prototype, `isPrototypeOf`)
      if (e.constructor && !t && !i) return !1
      for (var a in e);
      return a === void 0 || n.call(e, a)
    },
    c = function (e, t) {
      i && t.name === `__proto__`
        ? i(e, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 })
        : (e[t.name] = t.newValue)
    },
    l = function (e, t) {
      if (t === `__proto__`) {
        if (!n.call(e, t)) return
        if (a) return a(e, t).value
      }
      return e[t]
    }
  t.exports = function e() {
    var t,
      n,
      r,
      i,
      a,
      u,
      d = arguments[0],
      f = 1,
      p = arguments.length,
      m = !1
    for (
      typeof d == `boolean` && ((m = d), (d = arguments[1] || {}), (f = 2)),
        (d == null || (typeof d != `object` && typeof d != `function`)) && (d = {});
      f < p;
      ++f
    )
      if (((t = arguments[f]), t != null))
        for (n in t)
          ((r = l(d, n)),
            (i = l(t, n)),
            d !== i &&
              (m && i && (s(i) || (a = o(i)))
                ? (a ? ((a = !1), (u = r && o(r) ? r : [])) : (u = r && s(r) ? r : {}),
                  c(d, { name: n, newValue: e(m, u, i) }))
                : i !== void 0 && c(d, { name: n, newValue: i })))
    return d
  }
})
function X_(e) {
  if (typeof e != `object` || !e) return !1
  let t = Object.getPrototypeOf(e)
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
function Z_() {
  let e = [],
    t = { run: n, use: r }
  return t
  function n(...t) {
    let n = -1,
      r = t.pop()
    if (typeof r != `function`) throw TypeError(`Expected function as last argument, not ` + r)
    i(null, ...t)
    function i(a, ...o) {
      let s = e[++n],
        c = -1
      if (a) {
        r(a)
        return
      }
      for (; ++c < t.length; ) (o[c] === null || o[c] === void 0) && (o[c] = t[c])
      ;((t = o), s ? Q_(s, i)(...o) : r(null, ...o))
    }
  }
  function r(n) {
    if (typeof n != `function`) throw TypeError("Expected `middelware` to be a function, not " + n)
    return (e.push(n), t)
  }
}
function Q_(e, t) {
  let n
  return r
  function r(...t) {
    let r = e.length > t.length,
      o
    r && t.push(i)
    try {
      o = e.apply(this, t)
    } catch (e) {
      let t = e
      if (r && n) throw t
      return i(t)
    }
    r ||
      (o && o.then && typeof o.then == `function` ? o.then(a, i) : o instanceof Error ? i(o) : a(o))
  }
  function i(e, ...r) {
    n || ((n = !0), t(e, ...r))
  }
  function a(e) {
    i(null, e)
  }
}
var $_ = { basename: ev, dirname: tv, extname: nv, join: rv, sep: `/` }
function ev(e, t) {
  if (t !== void 0 && typeof t != `string`) throw TypeError(`"ext" argument must be a string`)
  ov(e)
  let n = 0,
    r = -1,
    i = e.length,
    a
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1
          break
        }
      } else r < 0 && ((a = !0), (r = i + 1))
    return r < 0 ? `` : e.slice(n, r)
  }
  if (t === e) return ``
  let o = -1,
    s = t.length - 1
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1
        break
      }
    } else
      (o < 0 && ((a = !0), (o = i + 1)),
        s > -1 &&
          (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : ((s = -1), (r = o))))
  return (n === r ? (r = o) : r < 0 && (r = e.length), e.slice(n, r))
}
function tv(e) {
  if ((ov(e), e.length === 0)) return `.`
  let t = -1,
    n = e.length,
    r
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n
        break
      }
    } else r ||= !0
  return t < 0
    ? e.codePointAt(0) === 47
      ? `/`
      : `.`
    : t === 1 && e.codePointAt(0) === 47
      ? `//`
      : e.slice(0, t)
}
function nv(e) {
  ov(e)
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    a = 0,
    o
  for (; t--; ) {
    let s = e.codePointAt(t)
    if (s === 47) {
      if (o) {
        r = t + 1
        break
      }
      continue
    }
    ;(n < 0 && ((o = !0), (n = t + 1)),
      s === 46 ? (i < 0 ? (i = t) : a !== 1 && (a = 1)) : i > -1 && (a = -1))
  }
  return i < 0 || n < 0 || a === 0 || (a === 1 && i === n - 1 && i === r + 1) ? `` : e.slice(i, n)
}
function rv(...e) {
  let t = -1,
    n
  for (; ++t < e.length; ) (ov(e[t]), e[t] && (n = n === void 0 ? e[t] : n + `/` + e[t]))
  return n === void 0 ? `.` : iv(n)
}
function iv(e) {
  ov(e)
  let t = e.codePointAt(0) === 47,
    n = av(e, !t)
  return (
    n.length === 0 && !t && (n = `.`),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += `/`),
    t ? `/` + n : n
  )
}
function av(e, t) {
  let n = ``,
    r = 0,
    i = -1,
    a = 0,
    o = -1,
    s,
    c
  for (; ++o <= e.length; ) {
    if (o < e.length) s = e.codePointAt(o)
    else if (s === 47) break
    else s = 47
    if (s === 47) {
      if (!(i === o - 1 || a === 1))
        if (i !== o - 1 && a === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((c = n.lastIndexOf(`/`)), c !== n.length - 1)) {
                ;(c < 0
                  ? ((n = ``), (r = 0))
                  : ((n = n.slice(0, c)), (r = n.length - 1 - n.lastIndexOf(`/`))),
                  (i = o),
                  (a = 0))
                continue
              }
            } else if (n.length > 0) {
              ;((n = ``), (r = 0), (i = o), (a = 0))
              continue
            }
          }
          t && ((n = n.length > 0 ? n + `/..` : `..`), (r = 2))
        } else
          (n.length > 0 ? (n += `/` + e.slice(i + 1, o)) : (n = e.slice(i + 1, o)), (r = o - i - 1))
      ;((i = o), (a = 0))
    } else s === 46 && a > -1 ? a++ : (a = -1)
  }
  return n
}
function ov(e) {
  if (typeof e != `string`) throw TypeError(`Path must be a string. Received ` + JSON.stringify(e))
}
var sv = { cwd: cv }
function cv() {
  return `/`
}
function lv(e) {
  return !!(
    typeof e == `object` &&
    e &&
    `href` in e &&
    e.href &&
    `protocol` in e &&
    e.protocol &&
    e.auth === void 0
  )
}
function uv(e) {
  if (typeof e == `string`) e = new URL(e)
  else if (!lv(e)) {
    let t = TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    )
    throw ((t.code = `ERR_INVALID_ARG_TYPE`), t)
  }
  if (e.protocol !== `file:`) {
    let e = TypeError(`The URL must be of scheme file`)
    throw ((e.code = `ERR_INVALID_URL_SCHEME`), e)
  }
  return dv(e)
}
function dv(e) {
  if (e.hostname !== ``) {
    let e = TypeError(`File URL host must be "localhost" or empty on darwin`)
    throw ((e.code = `ERR_INVALID_FILE_URL_HOST`), e)
  }
  let t = e.pathname,
    n = -1
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      let e = t.codePointAt(n + 2)
      if (e === 70 || e === 102) {
        let e = TypeError(`File URL path must not include encoded / characters`)
        throw ((e.code = `ERR_INVALID_FILE_URL_PATH`), e)
      }
    }
  return decodeURIComponent(t)
}
var fv = [`history`, `path`, `basename`, `stem`, `extname`, `dirname`],
  pv = class {
    constructor(e) {
      let t
      ;((t = e ? (lv(e) ? { path: e } : typeof e == `string` || _v(e) ? { value: e } : e) : {}),
        (this.cwd = `cwd` in t ? `` : sv.cwd()),
        (this.data = {}),
        (this.history = []),
        (this.messages = []),
        this.value,
        this.map,
        this.result,
        this.stored)
      let n = -1
      for (; ++n < fv.length; ) {
        let e = fv[n]
        e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === `history` ? [...t[e]] : t[e])
      }
      let r
      for (r in t) fv.includes(r) || (this[r] = t[r])
    }
    get basename() {
      return typeof this.path == `string` ? $_.basename(this.path) : void 0
    }
    set basename(e) {
      ;(hv(e, `basename`), mv(e, `basename`), (this.path = $_.join(this.dirname || ``, e)))
    }
    get dirname() {
      return typeof this.path == `string` ? $_.dirname(this.path) : void 0
    }
    set dirname(e) {
      ;(gv(this.basename, `dirname`), (this.path = $_.join(e || ``, this.basename)))
    }
    get extname() {
      return typeof this.path == `string` ? $_.extname(this.path) : void 0
    }
    set extname(e) {
      if ((mv(e, `extname`), gv(this.dirname, `extname`), e)) {
        if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`")
        if (e.includes(`.`, 1)) throw Error("`extname` cannot contain multiple dots")
      }
      this.path = $_.join(this.dirname, this.stem + (e || ``))
    }
    get path() {
      return this.history[this.history.length - 1]
    }
    set path(e) {
      ;(lv(e) && (e = uv(e)), hv(e, `path`), this.path !== e && this.history.push(e))
    }
    get stem() {
      return typeof this.path == `string` ? $_.basename(this.path, this.extname) : void 0
    }
    set stem(e) {
      ;(hv(e, `stem`),
        mv(e, `stem`),
        (this.path = $_.join(this.dirname || ``, e + (this.extname || ``))))
    }
    fail(e, t, n) {
      let r = this.message(e, t, n)
      throw ((r.fatal = !0), r)
    }
    info(e, t, n) {
      let r = this.message(e, t, n)
      return ((r.fatal = void 0), r)
    }
    message(e, t, n) {
      let r = new rp(e, t, n)
      return (
        this.path && ((r.name = this.path + `:` + r.name), (r.file = this.path)),
        (r.fatal = !1),
        this.messages.push(r),
        r
      )
    }
    toString(e) {
      return this.value === void 0
        ? ``
        : typeof this.value == `string`
          ? this.value
          : new TextDecoder(e || void 0).decode(this.value)
    }
  }
function mv(e, t) {
  if (e && e.includes($_.sep))
    throw Error("`" + t + "` cannot be a path: did not expect `" + $_.sep + "`")
}
function hv(e, t) {
  if (!e) throw Error("`" + t + "` cannot be empty")
}
function gv(e, t) {
  if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
}
function _v(e) {
  return !!(e && typeof e == `object` && `byteLength` in e && `byteOffset` in e)
}
var vv = function (e) {
    let t = this.constructor.prototype,
      n = t[e],
      r = function () {
        return n.apply(r, arguments)
      }
    return (Object.setPrototypeOf(r, t), r)
  },
  yv = u(Y_(), 1),
  bv = {}.hasOwnProperty,
  xv = new (class e extends vv {
    constructor() {
      ;(super(`copy`),
        (this.Compiler = void 0),
        (this.Parser = void 0),
        (this.attachers = []),
        (this.compiler = void 0),
        (this.freezeIndex = -1),
        (this.frozen = void 0),
        (this.namespace = {}),
        (this.parser = void 0),
        (this.transformers = Z_()))
    }
    copy() {
      let t = new e(),
        n = -1
      for (; ++n < this.attachers.length; ) {
        let e = this.attachers[n]
        t.use(...e)
      }
      return (t.data((0, yv.default)(!0, {}, this.namespace)), t)
    }
    data(e, t) {
      return typeof e == `string`
        ? arguments.length === 2
          ? (wv(`data`, this.frozen), (this.namespace[e] = t), this)
          : (bv.call(this.namespace, e) && this.namespace[e]) || void 0
        : e
          ? (wv(`data`, this.frozen), (this.namespace = e), this)
          : this.namespace
    }
    freeze() {
      if (this.frozen) return this
      let e = this
      for (; ++this.freezeIndex < this.attachers.length; ) {
        let [t, ...n] = this.attachers[this.freezeIndex]
        if (n[0] === !1) continue
        n[0] === !0 && (n[0] = void 0)
        let r = t.call(e, ...n)
        typeof r == `function` && this.transformers.use(r)
      }
      return ((this.frozen = !0), (this.freezeIndex = 1 / 0), this)
    }
    parse(e) {
      this.freeze()
      let t = Dv(e),
        n = this.parser || this.Parser
      return (Sv(`parse`, n), n(String(t), t))
    }
    process(e, t) {
      let n = this
      return (
        this.freeze(),
        Sv(`process`, this.parser || this.Parser),
        Cv(`process`, this.compiler || this.Compiler),
        t ? r(void 0, t) : new Promise(r)
      )
      function r(r, i) {
        let a = Dv(e),
          o = n.parse(a)
        n.run(o, a, function (e, t, r) {
          if (e || !t || !r) return s(e)
          let i = t,
            a = n.stringify(i, r)
          ;(kv(a) ? (r.value = a) : (r.result = a), s(e, r))
        })
        function s(e, n) {
          e || !n ? i(e) : r ? r(n) : t(void 0, n)
        }
      }
    }
    processSync(e) {
      let t = !1,
        n
      return (
        this.freeze(),
        Sv(`processSync`, this.parser || this.Parser),
        Cv(`processSync`, this.compiler || this.Compiler),
        this.process(e, r),
        Ev(`processSync`, `process`, t),
        n
      )
      function r(e, r) {
        ;((t = !0), J_(e), (n = r))
      }
    }
    run(e, t, n) {
      ;(Tv(e), this.freeze())
      let r = this.transformers
      return (
        !n && typeof t == `function` && ((n = t), (t = void 0)),
        n ? i(void 0, n) : new Promise(i)
      )
      function i(i, a) {
        let o = Dv(t)
        r.run(e, o, s)
        function s(t, r, o) {
          let s = r || e
          t ? a(t) : i ? i(s) : n(void 0, s, o)
        }
      }
    }
    runSync(e, t) {
      let n = !1,
        r
      return (this.run(e, t, i), Ev(`runSync`, `run`, n), r)
      function i(e, t) {
        ;(J_(e), (r = t), (n = !0))
      }
    }
    stringify(e, t) {
      this.freeze()
      let n = Dv(t),
        r = this.compiler || this.Compiler
      return (Cv(`stringify`, r), Tv(e), r(e, n))
    }
    use(e, ...t) {
      let n = this.attachers,
        r = this.namespace
      if ((wv(`use`, this.frozen), e != null))
        if (typeof e == `function`) s(e, t)
        else if (typeof e == `object`) Array.isArray(e) ? o(e) : a(e)
        else throw TypeError("Expected usable value, not `" + e + "`")
      return this
      function i(e) {
        if (typeof e == `function`) s(e, [])
        else if (typeof e == `object`)
          if (Array.isArray(e)) {
            let [t, ...n] = e
            s(t, n)
          } else a(e)
        else throw TypeError("Expected usable value, not `" + e + "`")
      }
      function a(e) {
        if (!(`plugins` in e) && !(`settings` in e))
          throw Error(
            "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
          )
        ;(o(e.plugins), e.settings && (r.settings = (0, yv.default)(!0, r.settings, e.settings)))
      }
      function o(e) {
        let t = -1
        if (e != null)
          if (Array.isArray(e))
            for (; ++t < e.length; ) {
              let n = e[t]
              i(n)
            }
          else throw TypeError("Expected a list of plugins, not `" + e + "`")
      }
      function s(e, t) {
        let r = -1,
          i = -1
        for (; ++r < n.length; )
          if (n[r][0] === e) {
            i = r
            break
          }
        if (i === -1) n.push([e, ...t])
        else if (t.length > 0) {
          let [r, ...a] = t,
            o = n[i][1]
          ;(X_(o) && X_(r) && (r = (0, yv.default)(!0, o, r)), (n[i] = [e, r, ...a]))
        }
      }
    }
  })().freeze()
function Sv(e, t) {
  if (typeof t != `function`) throw TypeError("Cannot `" + e + "` without `parser`")
}
function Cv(e, t) {
  if (typeof t != `function`) throw TypeError("Cannot `" + e + "` without `compiler`")
}
function wv(e, t) {
  if (t)
    throw Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    )
}
function Tv(e) {
  if (!X_(e) || typeof e.type != `string`) throw TypeError("Expected node, got `" + e + "`")
}
function Ev(e, t, n) {
  if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
}
function Dv(e) {
  return Ov(e) ? e : new pv(e)
}
function Ov(e) {
  return !!(e && typeof e == `object` && `message` in e && `messages` in e)
}
function kv(e) {
  return typeof e == `string` || Av(e)
}
function Av(e) {
  return !!(e && typeof e == `object` && `byteLength` in e && `byteOffset` in e)
}
var jv = [],
  Mv = { allowDangerousHtml: !0 },
  Nv = /^(https?|ircs?|mailto|xmpp)$/i,
  Pv = [
    { from: `astPlugins`, id: `remove-buggy-html-in-markdown-parser` },
    { from: `allowDangerousHtml`, id: `remove-buggy-html-in-markdown-parser` },
    {
      from: `allowNode`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `allowElement`,
    },
    {
      from: `allowedTypes`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `allowedElements`,
    },
    { from: `className`, id: `remove-classname` },
    {
      from: `disallowedTypes`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `disallowedElements`,
    },
    { from: `escapeHtml`, id: `remove-buggy-html-in-markdown-parser` },
    { from: `includeElementIndex`, id: `#remove-includeelementindex` },
    { from: `includeNodeIndex`, id: `change-includenodeindex-to-includeelementindex` },
    { from: `linkTarget`, id: `remove-linktarget` },
    { from: `plugins`, id: `change-plugins-to-remarkplugins`, to: `remarkPlugins` },
    { from: `rawSourcePos`, id: `#remove-rawsourcepos` },
    { from: `renderers`, id: `change-renderers-to-components`, to: `components` },
    { from: `source`, id: `change-source-to-children`, to: `children` },
    { from: `sourcePos`, id: `#remove-sourcepos` },
    { from: `transformImageUri`, id: `#add-urltransform`, to: `urlTransform` },
    { from: `transformLinkUri`, id: `#add-urltransform`, to: `urlTransform` },
  ]
function Fv(e) {
  let t = Iv(e),
    n = Lv(e)
  return Rv(t.runSync(t.parse(n), n), e)
}
function Iv(e) {
  let t = e.rehypePlugins || jv,
    n = e.remarkPlugins || jv,
    r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Mv } : Mv
  return xv().use(Mg).use(n).use(q_, r).use(t)
}
function Lv(e) {
  let t = e.children || ``,
    n = new pv()
  return (typeof t == `string` ? (n.value = t) : `` + t, n)
}
function Rv(e, t) {
  let n = t.allowedElements,
    r = t.allowElement,
    i = t.components,
    a = t.disallowedElements,
    o = t.skipHtml,
    s = t.unwrapDisallowed,
    c = t.urlTransform || zv
  for (let e of Pv)
    Object.hasOwn(t, e.from) &&
      `` + e.from + (e.to ? "use `" + e.to + "` instead" : `remove it`) + e.id
  return (
    L_(e, l),
    dp(e, {
      Fragment: k.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: k.jsx,
      jsxs: k.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  )
  function l(e, t, i) {
    if (e.type === `raw` && i && typeof t == `number`)
      return (o ? i.children.splice(t, 1) : (i.children[t] = { type: `text`, value: e.value }), t)
    if (e.type === `element`) {
      let t
      for (t in Np)
        if (Object.hasOwn(Np, t) && Object.hasOwn(e.properties, t)) {
          let n = e.properties[t],
            r = Np[t]
          ;(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ``), t, e))
        }
    }
    if (e.type === `element`) {
      let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1
      if ((!o && r && typeof t == `number` && (o = !r(e, t, i)), o && i && typeof t == `number`))
        return (
          s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1),
          t
        )
    }
  }
}
function zv(e) {
  let t = e.indexOf(`:`),
    n = e.indexOf(`?`),
    r = e.indexOf(`#`),
    i = e.indexOf(`/`)
  return t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    Nv.test(e.slice(0, t))
    ? e
    : ``
}
function Bv(e, t) {
  let n = String(e)
  if (typeof t != `string`) throw TypeError(`Expected character`)
  let r = 0,
    i = n.indexOf(t)
  for (; i !== -1; ) (r++, (i = n.indexOf(t, i + t.length)))
  return r
}
function Vv(e) {
  if (typeof e != `string`) throw TypeError(`Expected a string`)
  return e.replace(/[|\\{}()[\]^$+*?.]/g, `\\$&`).replace(/-/g, `\\x2d`)
}
function Hv(e, t, n) {
  let r = E_((n || {}).ignore || []),
    i = Uv(t),
    a = -1
  for (; ++a < i.length; ) F_(e, `text`, o)
  function o(e, t) {
    let n = -1,
      i
    for (; ++n < t.length; ) {
      let e = t[n],
        a = i ? i.children : void 0
      if (r(e, a ? a.indexOf(e) : void 0, i)) return
      i = e
    }
    if (i) return s(e, t)
  }
  function s(e, t) {
    let n = t[t.length - 1],
      r = i[a][0],
      o = i[a][1],
      s = 0,
      c = n.children.indexOf(e),
      l = !1,
      u = []
    r.lastIndex = 0
    let d = r.exec(e.value)
    for (; d; ) {
      let n = d.index,
        i = { index: d.index, input: d.input, stack: [...t, e] },
        a = o(...d, i)
      if (
        (typeof a == `string` && (a = a.length > 0 ? { type: `text`, value: a } : void 0),
        a === !1
          ? (r.lastIndex = n + 1)
          : (s !== n && u.push({ type: `text`, value: e.value.slice(s, n) }),
            Array.isArray(a) ? u.push(...a) : a && u.push(a),
            (s = n + d[0].length),
            (l = !0)),
        !r.global)
      )
        break
      d = r.exec(e.value)
    }
    return (
      l
        ? (s < e.value.length && u.push({ type: `text`, value: e.value.slice(s) }),
          n.children.splice(c, 1, ...u))
        : (u = [e]),
      c + u.length
    )
  }
}
function Uv(e) {
  let t = []
  if (!Array.isArray(e)) throw TypeError(`Expected find and replace tuple or list of tuples`)
  let n = !e[0] || Array.isArray(e[0]) ? e : [e],
    r = -1
  for (; ++r < n.length; ) {
    let e = n[r]
    t.push([Wv(e[0]), Gv(e[1])])
  }
  return t
}
function Wv(e) {
  return typeof e == `string` ? new RegExp(Vv(e), `g`) : e
}
function Gv(e) {
  return typeof e == `function`
    ? e
    : function () {
        return e
      }
}
var Kv = `phrasing`,
  qv = [`autolink`, `link`, `image`, `label`]
function Jv() {
  return {
    transforms: [ny],
    enter: {
      literalAutolink: Xv,
      literalAutolinkEmail: Zv,
      literalAutolinkHttp: Zv,
      literalAutolinkWww: Zv,
    },
    exit: {
      literalAutolink: ty,
      literalAutolinkEmail: ey,
      literalAutolinkHttp: Qv,
      literalAutolinkWww: $v,
    },
  }
}
function Yv() {
  return {
    unsafe: [
      {
        character: `@`,
        before: `[+\\-.\\w]`,
        after: `[\\-.\\w]`,
        inConstruct: Kv,
        notInConstruct: qv,
      },
      { character: `.`, before: `[Ww]`, after: `[\\-.\\w]`, inConstruct: Kv, notInConstruct: qv },
      { character: `:`, before: `[ps]`, after: `\\/`, inConstruct: Kv, notInConstruct: qv },
    ],
  }
}
function Xv(e) {
  this.enter({ type: `link`, title: null, url: ``, children: [] }, e)
}
function Zv(e) {
  this.config.enter.autolinkProtocol.call(this, e)
}
function Qv(e) {
  this.config.exit.autolinkProtocol.call(this, e)
}
function $v(e) {
  this.config.exit.data.call(this, e)
  let t = this.stack[this.stack.length - 1]
  ;(t.type, (t.url = `http://` + this.sliceSerialize(e)))
}
function ey(e) {
  this.config.exit.autolinkEmail.call(this, e)
}
function ty(e) {
  this.exit(e)
}
function ny(e) {
  Hv(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, ry],
      [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, iy],
    ],
    { ignore: [`link`, `linkReference`] }
  )
}
function ry(e, t, n, r, i) {
  let a = ``
  if (!sy(i) || (/^w/i.test(t) && ((n = t + n), (t = ``), (a = `http://`)), !ay(n))) return !1
  let o = oy(n + r)
  if (!o[0]) return !1
  let s = {
    type: `link`,
    title: null,
    url: a + t + o[0],
    children: [{ type: `text`, value: t + o[0] }],
  }
  return o[1] ? [s, { type: `text`, value: o[1] }] : s
}
function iy(e, t, n, r) {
  return !sy(r, !0) || /[-\d_]$/.test(n)
    ? !1
    : {
        type: `link`,
        title: null,
        url: `mailto:` + t + `@` + n,
        children: [{ type: `text`, value: t + `@` + n }],
      }
}
function ay(e) {
  let t = e.split(`.`)
  return !(
    t.length < 2 ||
    (t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
    (t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
  )
}
function oy(e) {
  let t = /[!"&'),.:;<>?\]}]+$/.exec(e)
  if (!t) return [e, void 0]
  e = e.slice(0, t.index)
  let n = t[0],
    r = n.indexOf(`)`),
    i = Bv(e, `(`),
    a = Bv(e, `)`)
  for (; r !== -1 && i > a; )
    ((e += n.slice(0, r + 1)), (n = n.slice(r + 1)), (r = n.indexOf(`)`)), a++)
  return [e, n]
}
function sy(e, t) {
  let n = e.input.charCodeAt(e.index - 1)
  return (e.index === 0 || im(n) || rm(n)) && (!t || n !== 47)
}
_y.peek = gy
function cy() {
  this.buffer()
}
function ly(e) {
  this.enter({ type: `footnoteReference`, identifier: ``, label: `` }, e)
}
function uy() {
  this.buffer()
}
function dy(e) {
  this.enter({ type: `footnoteDefinition`, identifier: ``, label: ``, children: [] }, e)
}
function fy(e) {
  let t = this.resume(),
    n = this.stack[this.stack.length - 1]
  ;(n.type, (n.identifier = Jp(this.sliceSerialize(e)).toLowerCase()), (n.label = t))
}
function py(e) {
  this.exit(e)
}
function my(e) {
  let t = this.resume(),
    n = this.stack[this.stack.length - 1]
  ;(n.type, (n.identifier = Jp(this.sliceSerialize(e)).toLowerCase()), (n.label = t))
}
function hy(e) {
  this.exit(e)
}
function gy() {
  return `[`
}
function _y(e, t, n, r) {
  let i = n.createTracker(r),
    a = i.move(`[^`),
    o = n.enter(`footnoteReference`),
    s = n.enter(`reference`)
  return (
    (a += i.move(n.safe(n.associationId(e), { after: `]`, before: a }))),
    s(),
    o(),
    (a += i.move(`]`)),
    a
  )
}
function vy() {
  return {
    enter: {
      gfmFootnoteCallString: cy,
      gfmFootnoteCall: ly,
      gfmFootnoteDefinitionLabelString: uy,
      gfmFootnoteDefinition: dy,
    },
    exit: {
      gfmFootnoteCallString: fy,
      gfmFootnoteCall: py,
      gfmFootnoteDefinitionLabelString: my,
      gfmFootnoteDefinition: hy,
    },
  }
}
function yy(e) {
  let t = !1
  return (
    e && e.firstLineBlank && (t = !0),
    {
      handlers: { footnoteDefinition: n, footnoteReference: _y },
      unsafe: [{ character: `[`, inConstruct: [`label`, `phrasing`, `reference`] }],
    }
  )
  function n(e, n, r, i) {
    let a = r.createTracker(i),
      o = a.move(`[^`),
      s = r.enter(`footnoteDefinition`),
      c = r.enter(`label`)
    return (
      (o += a.move(r.safe(r.associationId(e), { before: o, after: `]` }))),
      c(),
      (o += a.move(`]:`)),
      e.children &&
        e.children.length > 0 &&
        (a.shift(4),
        (o += a.move(
          (t
            ? `
`
            : ` `) + r.indentLines(r.containerFlow(e, a.current()), t ? xy : by)
        ))),
      s(),
      o
    )
  }
}
function by(e, t, n) {
  return t === 0 ? e : xy(e, t, n)
}
function xy(e, t, n) {
  return (n ? `` : `    `) + e
}
var Sy = [
  `autolink`,
  `destinationLiteral`,
  `destinationRaw`,
  `reference`,
  `titleQuote`,
  `titleApostrophe`,
]
Dy.peek = Oy
function Cy() {
  return { canContainEols: [`delete`], enter: { strikethrough: Ty }, exit: { strikethrough: Ey } }
}
function wy() {
  return {
    unsafe: [{ character: `~`, inConstruct: `phrasing`, notInConstruct: Sy }],
    handlers: { delete: Dy },
  }
}
function Ty(e) {
  this.enter({ type: `delete`, children: [] }, e)
}
function Ey(e) {
  this.exit(e)
}
function Dy(e, t, n, r) {
  let i = n.createTracker(r),
    a = n.enter(`strikethrough`),
    o = i.move(`~~`)
  return (
    (o += n.containerPhrasing(e, { ...i.current(), before: o, after: `~` })),
    (o += i.move(`~~`)),
    a(),
    o
  )
}
function Oy() {
  return `~`
}
function ky(e) {
  return e.length
}
function Ay(e, t) {
  let n = t || {},
    r = (n.align || []).concat(),
    i = n.stringLength || ky,
    a = [],
    o = [],
    s = [],
    c = [],
    l = 0,
    u = -1
  for (; ++u < e.length; ) {
    let t = [],
      r = [],
      a = -1
    for (e[u].length > l && (l = e[u].length); ++a < e[u].length; ) {
      let o = jy(e[u][a])
      if (n.alignDelimiters !== !1) {
        let e = i(o)
        ;((r[a] = e), (c[a] === void 0 || e > c[a]) && (c[a] = e))
      }
      t.push(o)
    }
    ;((o[u] = t), (s[u] = r))
  }
  let d = -1
  if (typeof r == `object` && `length` in r) for (; ++d < l; ) a[d] = My(r[d])
  else {
    let e = My(r)
    for (; ++d < l; ) a[d] = e
  }
  d = -1
  let f = [],
    p = []
  for (; ++d < l; ) {
    let e = a[d],
      t = ``,
      r = ``
    e === 99 ? ((t = `:`), (r = `:`)) : e === 108 ? (t = `:`) : e === 114 && (r = `:`)
    let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length),
      o = t + `-`.repeat(i) + r
    ;(n.alignDelimiters !== !1 &&
      ((i = t.length + i + r.length), i > c[d] && (c[d] = i), (p[d] = i)),
      (f[d] = o))
  }
  ;(o.splice(1, 0, f), s.splice(1, 0, p), (u = -1))
  let m = []
  for (; ++u < o.length; ) {
    let e = o[u],
      t = s[u]
    d = -1
    let r = []
    for (; ++d < l; ) {
      let i = e[d] || ``,
        o = ``,
        s = ``
      if (n.alignDelimiters !== !1) {
        let e = c[d] - (t[d] || 0),
          n = a[d]
        n === 114
          ? (o = ` `.repeat(e))
          : n === 99
            ? e % 2
              ? ((o = ` `.repeat(e / 2 + 0.5)), (s = ` `.repeat(e / 2 - 0.5)))
              : ((o = ` `.repeat(e / 2)), (s = o))
            : (s = ` `.repeat(e))
      }
      ;(n.delimiterStart !== !1 && !d && r.push(`|`),
        n.padding !== !1 &&
          !(n.alignDelimiters === !1 && i === ``) &&
          (n.delimiterStart !== !1 || d) &&
          r.push(` `),
        n.alignDelimiters !== !1 && r.push(o),
        r.push(i),
        n.alignDelimiters !== !1 && r.push(s),
        n.padding !== !1 && r.push(` `),
        (n.delimiterEnd !== !1 || d !== l - 1) && r.push(`|`))
    }
    m.push(n.delimiterEnd === !1 ? r.join(``).replace(/ +$/, ``) : r.join(``))
  }
  return m.join(`
`)
}
function jy(e) {
  return e == null ? `` : String(e)
}
function My(e) {
  let t = typeof e == `string` ? e.codePointAt(0) : 0
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0
}
function Ny(e, t, n, r) {
  let i = n.enter(`blockquote`),
    a = n.createTracker(r)
  ;(a.move(`> `), a.shift(2))
  let o = n.indentLines(n.containerFlow(e, a.current()), Py)
  return (i(), o)
}
function Py(e, t, n) {
  return `>` + (n ? `` : ` `) + e
}
function Fy(e, t) {
  return Iy(e, t.inConstruct, !0) && !Iy(e, t.notInConstruct, !1)
}
function Iy(e, t, n) {
  if ((typeof t == `string` && (t = [t]), !t || t.length === 0)) return n
  let r = -1
  for (; ++r < t.length; ) if (e.includes(t[r])) return !0
  return !1
}
function Ly(e, t, n, r) {
  let i = -1
  for (; ++i < n.unsafe.length; )
    if (
      n.unsafe[i].character ===
        `
` &&
      Fy(n.stack, n.unsafe[i])
    )
      return /[ \t]/.test(r.before) ? `` : ` `
  return `\\
`
}
function Ry(e, t) {
  let n = String(e),
    r = n.indexOf(t),
    i = r,
    a = 0,
    o = 0
  if (typeof t != `string`) throw TypeError(`Expected substring`)
  for (; r !== -1; )
    (r === i ? ++a > o && (o = a) : (a = 1), (i = r + t.length), (r = n.indexOf(t, i)))
  return o
}
function zy(e, t) {
  return !!(
    t.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  )
}
function By(e) {
  let t = e.options.fence || "`"
  if (t !== "`" && t !== `~`)
    throw Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    )
  return t
}
function Vy(e, t, n, r) {
  let i = By(n),
    a = e.value || ``,
    o = i === "`" ? `GraveAccent` : `Tilde`
  if (zy(e, n)) {
    let e = n.enter(`codeIndented`),
      t = n.indentLines(a, Hy)
    return (e(), t)
  }
  let s = n.createTracker(r),
    c = i.repeat(Math.max(Ry(a, i) + 1, 3)),
    l = n.enter(`codeFenced`),
    u = s.move(c)
  if (e.lang) {
    let t = n.enter(`codeFencedLang${o}`)
    ;((u += s.move(n.safe(e.lang, { before: u, after: ` `, encode: ["`"], ...s.current() }))), t())
  }
  if (e.lang && e.meta) {
    let t = n.enter(`codeFencedMeta${o}`)
    ;((u += s.move(` `)),
      (u += s.move(
        n.safe(e.meta, {
          before: u,
          after: `
`,
          encode: ["`"],
          ...s.current(),
        })
      )),
      t())
  }
  return (
    (u += s.move(`
`)),
    a &&
      (u += s.move(
        a +
          `
`
      )),
    (u += s.move(c)),
    l(),
    u
  )
}
function Hy(e, t, n) {
  return (n ? `` : `    `) + e
}
function Uy(e) {
  let t = e.options.quote || `"`
  if (t !== `"` && t !== `'`)
    throw Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    )
  return t
}
function Wy(e, t, n, r) {
  let i = Uy(n),
    a = i === `"` ? `Quote` : `Apostrophe`,
    o = n.enter(`definition`),
    s = n.enter(`label`),
    c = n.createTracker(r),
    l = c.move(`[`)
  return (
    (l += c.move(n.safe(n.associationId(e), { before: l, after: `]`, ...c.current() }))),
    (l += c.move(`]: `)),
    s(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((s = n.enter(`destinationLiteral`)),
        (l += c.move(`<`)),
        (l += c.move(n.safe(e.url, { before: l, after: `>`, ...c.current() }))),
        (l += c.move(`>`)))
      : ((s = n.enter(`destinationRaw`)),
        (l += c.move(
          n.safe(e.url, {
            before: l,
            after: e.title
              ? ` `
              : `
`,
            ...c.current(),
          })
        ))),
    s(),
    e.title &&
      ((s = n.enter(`title${a}`)),
      (l += c.move(` ` + i)),
      (l += c.move(n.safe(e.title, { before: l, after: i, ...c.current() }))),
      (l += c.move(i)),
      s()),
    o(),
    l
  )
}
function Gy(e) {
  let t = e.options.emphasis || `*`
  if (t !== `*` && t !== `_`)
    throw Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    )
  return t
}
function Ky(e) {
  return `&#x` + e.toString(16).toUpperCase() + `;`
}
function qy(e, t, n) {
  let r = pm(e),
    i = pm(t)
  return r === void 0
    ? i === void 0
      ? n === `_`
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !1 }
      : i === 1
        ? { inside: !0, outside: !0 }
        : { inside: !1, outside: !0 }
    : r === 1
      ? i === void 0
        ? { inside: !1, outside: !1 }
        : i === 1
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
      : i === void 0
        ? { inside: !1, outside: !1 }
        : i === 1
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 }
}
Jy.peek = Yy
function Jy(e, t, n, r) {
  let i = Gy(n),
    a = n.enter(`emphasis`),
    o = n.createTracker(r),
    s = o.move(i),
    c = o.move(n.containerPhrasing(e, { after: i, before: s, ...o.current() })),
    l = c.charCodeAt(0),
    u = qy(r.before.charCodeAt(r.before.length - 1), l, i)
  u.inside && (c = Ky(l) + c.slice(1))
  let d = c.charCodeAt(c.length - 1),
    f = qy(r.after.charCodeAt(0), d, i)
  f.inside && (c = c.slice(0, -1) + Ky(d))
  let p = o.move(i)
  return (
    a(),
    (n.attentionEncodeSurroundingInfo = { after: f.outside, before: u.outside }),
    s + c + p
  )
}
function Yy(e, t, n) {
  return n.options.emphasis || `*`
}
function Xy(e, t) {
  let n = !1
  return (
    L_(e, function (e) {
      if ((`value` in e && /\r?\n|\r/.test(e.value)) || e.type === `break`) return ((n = !0), !1)
    }),
    !!((!e.depth || e.depth < 3) && Fp(e) && (t.options.setext || n))
  )
}
function Zy(e, t, n, r) {
  let i = Math.max(Math.min(6, e.depth || 1), 1),
    a = n.createTracker(r)
  if (Xy(e, n)) {
    let t = n.enter(`headingSetext`),
      r = n.enter(`phrasing`),
      o = n.containerPhrasing(e, {
        ...a.current(),
        before: `
`,
        after: `
`,
      })
    return (
      r(),
      t(),
      o +
        `
` +
        (i === 1 ? `=` : `-`).repeat(
          o.length -
            (Math.max(
              o.lastIndexOf(`\r`),
              o.lastIndexOf(`
`)
            ) +
              1)
        )
    )
  }
  let o = `#`.repeat(i),
    s = n.enter(`headingAtx`),
    c = n.enter(`phrasing`)
  a.move(o + ` `)
  let l = n.containerPhrasing(e, {
    before: `# `,
    after: `
`,
    ...a.current(),
  })
  return (
    /^[\t ]/.test(l) && (l = Ky(l.charCodeAt(0)) + l.slice(1)),
    (l = l ? o + ` ` + l : o),
    n.options.closeAtx && (l += ` ` + o),
    c(),
    s(),
    l
  )
}
Qy.peek = $y
function Qy(e) {
  return e.value || ``
}
function $y() {
  return `<`
}
eb.peek = tb
function eb(e, t, n, r) {
  let i = Uy(n),
    a = i === `"` ? `Quote` : `Apostrophe`,
    o = n.enter(`image`),
    s = n.enter(`label`),
    c = n.createTracker(r),
    l = c.move(`![`)
  return (
    (l += c.move(n.safe(e.alt, { before: l, after: `]`, ...c.current() }))),
    (l += c.move(`](`)),
    s(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((s = n.enter(`destinationLiteral`)),
        (l += c.move(`<`)),
        (l += c.move(n.safe(e.url, { before: l, after: `>`, ...c.current() }))),
        (l += c.move(`>`)))
      : ((s = n.enter(`destinationRaw`)),
        (l += c.move(n.safe(e.url, { before: l, after: e.title ? ` ` : `)`, ...c.current() })))),
    s(),
    e.title &&
      ((s = n.enter(`title${a}`)),
      (l += c.move(` ` + i)),
      (l += c.move(n.safe(e.title, { before: l, after: i, ...c.current() }))),
      (l += c.move(i)),
      s()),
    (l += c.move(`)`)),
    o(),
    l
  )
}
function tb() {
  return `!`
}
nb.peek = rb
function nb(e, t, n, r) {
  let i = e.referenceType,
    a = n.enter(`imageReference`),
    o = n.enter(`label`),
    s = n.createTracker(r),
    c = s.move(`![`),
    l = n.safe(e.alt, { before: c, after: `]`, ...s.current() })
  ;((c += s.move(l + `][`)), o())
  let u = n.stack
  ;((n.stack = []), (o = n.enter(`reference`)))
  let d = n.safe(n.associationId(e), { before: c, after: `]`, ...s.current() })
  return (
    o(),
    (n.stack = u),
    a(),
    i === `full` || !l || l !== d
      ? (c += s.move(d + `]`))
      : i === `shortcut`
        ? (c = c.slice(0, -1))
        : (c += s.move(`]`)),
    c
  )
}
function rb() {
  return `!`
}
ib.peek = ab
function ib(e, t, n) {
  let r = e.value || ``,
    i = "`",
    a = -1
  for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`"
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = ` ` + r + ` `);
    ++a < n.unsafe.length;
  ) {
    let e = n.unsafe[a],
      t = n.compilePattern(e),
      i
    if (e.atBreak)
      for (; (i = t.exec(r)); ) {
        let e = i.index
        ;(r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--,
          (r = r.slice(0, e) + ` ` + r.slice(i.index + 1)))
      }
  }
  return i + r + i
}
function ab() {
  return "`"
}
function ob(e, t) {
  let n = Fp(e)
  return !!(
    !t.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === `text` &&
    (n === e.url || `mailto:` + n === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  )
}
sb.peek = cb
function sb(e, t, n, r) {
  let i = Uy(n),
    a = i === `"` ? `Quote` : `Apostrophe`,
    o = n.createTracker(r),
    s,
    c
  if (ob(e, n)) {
    let t = n.stack
    ;((n.stack = []), (s = n.enter(`autolink`)))
    let r = o.move(`<`)
    return (
      (r += o.move(n.containerPhrasing(e, { before: r, after: `>`, ...o.current() }))),
      (r += o.move(`>`)),
      s(),
      (n.stack = t),
      r
    )
  }
  ;((s = n.enter(`link`)), (c = n.enter(`label`)))
  let l = o.move(`[`)
  return (
    (l += o.move(n.containerPhrasing(e, { before: l, after: `](`, ...o.current() }))),
    (l += o.move(`](`)),
    c(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((c = n.enter(`destinationLiteral`)),
        (l += o.move(`<`)),
        (l += o.move(n.safe(e.url, { before: l, after: `>`, ...o.current() }))),
        (l += o.move(`>`)))
      : ((c = n.enter(`destinationRaw`)),
        (l += o.move(n.safe(e.url, { before: l, after: e.title ? ` ` : `)`, ...o.current() })))),
    c(),
    e.title &&
      ((c = n.enter(`title${a}`)),
      (l += o.move(` ` + i)),
      (l += o.move(n.safe(e.title, { before: l, after: i, ...o.current() }))),
      (l += o.move(i)),
      c()),
    (l += o.move(`)`)),
    s(),
    l
  )
}
function cb(e, t, n) {
  return ob(e, n) ? `<` : `[`
}
lb.peek = ub
function lb(e, t, n, r) {
  let i = e.referenceType,
    a = n.enter(`linkReference`),
    o = n.enter(`label`),
    s = n.createTracker(r),
    c = s.move(`[`),
    l = n.containerPhrasing(e, { before: c, after: `]`, ...s.current() })
  ;((c += s.move(l + `][`)), o())
  let u = n.stack
  ;((n.stack = []), (o = n.enter(`reference`)))
  let d = n.safe(n.associationId(e), { before: c, after: `]`, ...s.current() })
  return (
    o(),
    (n.stack = u),
    a(),
    i === `full` || !l || l !== d
      ? (c += s.move(d + `]`))
      : i === `shortcut`
        ? (c = c.slice(0, -1))
        : (c += s.move(`]`)),
    c
  )
}
function ub() {
  return `[`
}
function db(e) {
  let t = e.options.bullet || `*`
  if (t !== `*` && t !== `+` && t !== `-`)
    throw Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    )
  return t
}
function fb(e) {
  let t = db(e),
    n = e.options.bulletOther
  if (!n) return t === `*` ? `-` : `*`
  if (n !== `*` && n !== `+` && n !== `-`)
    throw Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    )
  if (n === t)
    throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different")
  return n
}
function pb(e) {
  let t = e.options.bulletOrdered || `.`
  if (t !== `.` && t !== `)`)
    throw Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    )
  return t
}
function mb(e) {
  let t = e.options.rule || `*`
  if (t !== `*` && t !== `-` && t !== `_`)
    throw Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    )
  return t
}
function hb(e, t, n, r) {
  let i = n.enter(`list`),
    a = n.bulletCurrent,
    o = e.ordered ? pb(n) : db(n),
    s = e.ordered ? (o === `.` ? `)` : `.`) : fb(n),
    c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1
  if (!e.ordered) {
    let t = e.children ? e.children[0] : void 0
    if (
      ((o === `*` || o === `-`) &&
        t &&
        (!t.children || !t.children[0]) &&
        n.stack[n.stack.length - 1] === `list` &&
        n.stack[n.stack.length - 2] === `listItem` &&
        n.stack[n.stack.length - 3] === `list` &&
        n.stack[n.stack.length - 4] === `listItem` &&
        n.indexStack[n.indexStack.length - 1] === 0 &&
        n.indexStack[n.indexStack.length - 2] === 0 &&
        n.indexStack[n.indexStack.length - 3] === 0 &&
        (c = !0),
      mb(n) === o && t)
    ) {
      let t = -1
      for (; ++t < e.children.length; ) {
        let n = e.children[t]
        if (
          n &&
          n.type === `listItem` &&
          n.children &&
          n.children[0] &&
          n.children[0].type === `thematicBreak`
        ) {
          c = !0
          break
        }
      }
    }
  }
  ;(c && (o = s), (n.bulletCurrent = o))
  let l = n.containerFlow(e, r)
  return ((n.bulletLastUsed = o), (n.bulletCurrent = a), i(), l)
}
function gb(e) {
  let t = e.options.listItemIndent || `one`
  if (t !== `tab` && t !== `one` && t !== `mixed`)
    throw Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    )
  return t
}
function _b(e, t, n, r) {
  let i = gb(n),
    a = n.bulletCurrent || db(n)
  t &&
    t.type === `list` &&
    t.ordered &&
    (a =
      (typeof t.start == `number` && t.start > -1 ? t.start : 1) +
      (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) +
      a)
  let o = a.length + 1
  ;(i === `tab` || (i === `mixed` && ((t && t.type === `list` && t.spread) || e.spread))) &&
    (o = Math.ceil(o / 4) * 4)
  let s = n.createTracker(r)
  ;(s.move(a + ` `.repeat(o - a.length)), s.shift(o))
  let c = n.enter(`listItem`),
    l = n.indentLines(n.containerFlow(e, s.current()), u)
  return (c(), l)
  function u(e, t, n) {
    return t ? (n ? `` : ` `.repeat(o)) + e : (n ? a : a + ` `.repeat(o - a.length)) + e
  }
}
function vb(e, t, n, r) {
  let i = n.enter(`paragraph`),
    a = n.enter(`phrasing`),
    o = n.containerPhrasing(e, r)
  return (a(), i(), o)
}
var yb = E_([
  `break`,
  `delete`,
  `emphasis`,
  `footnote`,
  `footnoteReference`,
  `image`,
  `imageReference`,
  `inlineCode`,
  `inlineMath`,
  `link`,
  `linkReference`,
  `mdxJsxTextElement`,
  `mdxTextExpression`,
  `strong`,
  `text`,
  `textDirective`,
])
function bb(e, t, n, r) {
  return (
    e.children.some(function (e) {
      return yb(e)
    })
      ? n.containerPhrasing
      : n.containerFlow
  ).call(n, e, r)
}
function xb(e) {
  let t = e.options.strong || `*`
  if (t !== `*` && t !== `_`)
    throw Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    )
  return t
}
Sb.peek = Cb
function Sb(e, t, n, r) {
  let i = xb(n),
    a = n.enter(`strong`),
    o = n.createTracker(r),
    s = o.move(i + i),
    c = o.move(n.containerPhrasing(e, { after: i, before: s, ...o.current() })),
    l = c.charCodeAt(0),
    u = qy(r.before.charCodeAt(r.before.length - 1), l, i)
  u.inside && (c = Ky(l) + c.slice(1))
  let d = c.charCodeAt(c.length - 1),
    f = qy(r.after.charCodeAt(0), d, i)
  f.inside && (c = c.slice(0, -1) + Ky(d))
  let p = o.move(i + i)
  return (
    a(),
    (n.attentionEncodeSurroundingInfo = { after: f.outside, before: u.outside }),
    s + c + p
  )
}
function Cb(e, t, n) {
  return n.options.strong || `*`
}
function wb(e, t, n, r) {
  return n.safe(e.value, r)
}
function Tb(e) {
  let t = e.options.ruleRepetition || 3
  if (t < 3)
    throw Error(
      "Cannot serialize rules with repetition `" +
        t +
        "` for `options.ruleRepetition`, expected `3` or more"
    )
  return t
}
function Eb(e, t, n) {
  let r = (mb(n) + (n.options.ruleSpaces ? ` ` : ``)).repeat(Tb(n))
  return n.options.ruleSpaces ? r.slice(0, -1) : r
}
var Db = {
  blockquote: Ny,
  break: Ly,
  code: Vy,
  definition: Wy,
  emphasis: Jy,
  hardBreak: Ly,
  heading: Zy,
  html: Qy,
  image: eb,
  imageReference: nb,
  inlineCode: ib,
  link: sb,
  linkReference: lb,
  list: hb,
  listItem: _b,
  paragraph: vb,
  root: bb,
  strong: Sb,
  text: wb,
  thematicBreak: Eb,
}
function Ob() {
  return {
    enter: { table: kb, tableData: Nb, tableHeader: Nb, tableRow: jb },
    exit: { codeText: Pb, table: Ab, tableData: Mb, tableHeader: Mb, tableRow: Mb },
  }
}
function kb(e) {
  let t = e._align
  ;(this.enter(
    {
      type: `table`,
      align: t.map(function (e) {
        return e === `none` ? null : e
      }),
      children: [],
    },
    e
  ),
    (this.data.inTable = !0))
}
function Ab(e) {
  ;(this.exit(e), (this.data.inTable = void 0))
}
function jb(e) {
  this.enter({ type: `tableRow`, children: [] }, e)
}
function Mb(e) {
  this.exit(e)
}
function Nb(e) {
  this.enter({ type: `tableCell`, children: [] }, e)
}
function Pb(e) {
  let t = this.resume()
  this.data.inTable && (t = t.replace(/\\([\\|])/g, Fb))
  let n = this.stack[this.stack.length - 1]
  ;(n.type, (n.value = t), this.exit(e))
}
function Fb(e, t) {
  return t === `|` ? t : e
}
function Ib(e) {
  let t = e || {},
    n = t.tableCellPadding,
    r = t.tablePipeAlign,
    i = t.stringLength,
    a = n ? ` ` : `|`
  return {
    unsafe: [
      { character: `\r`, inConstruct: `tableCell` },
      {
        character: `
`,
        inConstruct: `tableCell`,
      },
      { atBreak: !0, character: `|`, after: `[	 :-]` },
      { character: `|`, inConstruct: `tableCell` },
      { atBreak: !0, character: `:`, after: `-` },
      { atBreak: !0, character: `-`, after: `[:|-]` },
    ],
    handlers: { inlineCode: f, table: o, tableCell: c, tableRow: s },
  }
  function o(e, t, n, r) {
    return l(u(e, n, r), e.align)
  }
  function s(e, t, n, r) {
    let i = l([d(e, n, r)])
    return i.slice(
      0,
      i.indexOf(`
`)
    )
  }
  function c(e, t, n, r) {
    let i = n.enter(`tableCell`),
      o = n.enter(`phrasing`),
      s = n.containerPhrasing(e, { ...r, before: a, after: a })
    return (o(), i(), s)
  }
  function l(e, t) {
    return Ay(e, { align: t, alignDelimiters: r, padding: n, stringLength: i })
  }
  function u(e, t, n) {
    let r = e.children,
      i = -1,
      a = [],
      o = t.enter(`table`)
    for (; ++i < r.length; ) a[i] = d(r[i], t, n)
    return (o(), a)
  }
  function d(e, t, n) {
    let r = e.children,
      i = -1,
      a = [],
      o = t.enter(`tableRow`)
    for (; ++i < r.length; ) a[i] = c(r[i], e, t, n)
    return (o(), a)
  }
  function f(e, t, n) {
    let r = Db.inlineCode(e, t, n)
    return (n.stack.includes(`tableCell`) && (r = r.replace(/\|/g, `\\$&`)), r)
  }
}
function Lb() {
  return { exit: { taskListCheckValueChecked: zb, taskListCheckValueUnchecked: zb, paragraph: Bb } }
}
function Rb() {
  return { unsafe: [{ atBreak: !0, character: `-`, after: `[:|-]` }], handlers: { listItem: Vb } }
}
function zb(e) {
  let t = this.stack[this.stack.length - 2]
  ;(t.type, (t.checked = e.type === `taskListCheckValueChecked`))
}
function Bb(e) {
  let t = this.stack[this.stack.length - 2]
  if (t && t.type === `listItem` && typeof t.checked == `boolean`) {
    let e = this.stack[this.stack.length - 1]
    e.type
    let n = e.children[0]
    if (n && n.type === `text`) {
      let r = t.children,
        i = -1,
        a
      for (; ++i < r.length; ) {
        let e = r[i]
        if (e.type === `paragraph`) {
          a = e
          break
        }
      }
      a === e &&
        ((n.value = n.value.slice(1)),
        n.value.length === 0
          ? e.children.shift()
          : e.position &&
            n.position &&
            typeof n.position.start.offset == `number` &&
            (n.position.start.column++,
            n.position.start.offset++,
            (e.position.start = Object.assign({}, n.position.start))))
    }
  }
  this.exit(e)
}
function Vb(e, t, n, r) {
  let i = e.children[0],
    a = typeof e.checked == `boolean` && i && i.type === `paragraph`,
    o = `[` + (e.checked ? `x` : ` `) + `] `,
    s = n.createTracker(r)
  a && s.move(o)
  let c = Db.listItem(e, t, n, { ...r, ...s.current() })
  return (a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c)
  function l(e) {
    return e + o
  }
}
function Hb() {
  return [Jv(), vy(), Cy(), Ob(), Lb()]
}
function Ub(e) {
  return { extensions: [Yv(), yy(e), wy(), Ib(e), Rb()] }
}
var Wb = { tokenize: ix, partial: !0 },
  Gb = { tokenize: ax, partial: !0 },
  Kb = { tokenize: ox, partial: !0 },
  qb = { tokenize: sx, partial: !0 },
  Jb = { tokenize: cx, partial: !0 },
  Yb = { name: `wwwAutolink`, tokenize: nx, previous: lx },
  Xb = { name: `protocolAutolink`, tokenize: rx, previous: ux },
  Zb = { name: `emailAutolink`, tokenize: tx, previous: dx },
  Qb = {}
function $b() {
  return { text: Qb }
}
for (var ex = 48; ex < 123; ) ((Qb[ex] = Zb), ex++, ex === 58 ? (ex = 65) : ex === 91 && (ex = 97))
;((Qb[43] = Zb),
  (Qb[45] = Zb),
  (Qb[46] = Zb),
  (Qb[95] = Zb),
  (Qb[72] = [Zb, Xb]),
  (Qb[104] = [Zb, Xb]),
  (Qb[87] = [Zb, Yb]),
  (Qb[119] = [Zb, Yb]))
function tx(e, t, n) {
  let r = this,
    i,
    a
  return o
  function o(t) {
    return !fx(t) || !dx.call(r, r.previous) || px(r.events)
      ? n(t)
      : (e.enter(`literalAutolink`), e.enter(`literalAutolinkEmail`), s(t))
  }
  function s(t) {
    return fx(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t)
  }
  function c(t) {
    return t === 46
      ? e.check(Jb, u, l)(t)
      : t === 45 || t === 95 || Xp(t)
        ? ((a = !0), e.consume(t), c)
        : u(t)
  }
  function l(t) {
    return (e.consume(t), (i = !0), c)
  }
  function u(o) {
    return a && i && Yp(r.previous)
      ? (e.exit(`literalAutolinkEmail`), e.exit(`literalAutolink`), t(o))
      : n(o)
  }
}
function nx(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (t !== 87 && t !== 119) || !lx.call(r, r.previous) || px(r.events)
      ? n(t)
      : (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkWww`),
        e.check(Wb, e.attempt(Gb, e.attempt(Kb, a), n), n)(t))
  }
  function a(n) {
    return (e.exit(`literalAutolinkWww`), e.exit(`literalAutolink`), t(n))
  }
}
function rx(e, t, n) {
  let r = this,
    i = ``,
    a = !1
  return o
  function o(t) {
    return (t === 72 || t === 104) && ux.call(r, r.previous) && !px(r.events)
      ? (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkHttp`),
        (i += String.fromCodePoint(t)),
        e.consume(t),
        s)
      : n(t)
  }
  function s(t) {
    if (Yp(t) && i.length < 5) return ((i += String.fromCodePoint(t)), e.consume(t), s)
    if (t === 58) {
      let n = i.toLowerCase()
      if (n === `http` || n === `https`) return (e.consume(t), c)
    }
    return n(t)
  }
  function c(t) {
    return t === 47 ? (e.consume(t), a ? l : ((a = !0), c)) : n(t)
  }
  function l(t) {
    return t === null || Qp(t) || nm(t) || im(t) || rm(t)
      ? n(t)
      : e.attempt(Gb, e.attempt(Kb, u), n)(t)
  }
  function u(n) {
    return (e.exit(`literalAutolinkHttp`), e.exit(`literalAutolink`), t(n))
  }
}
function ix(e, t, n) {
  let r = 0
  return i
  function i(t) {
    return (t === 87 || t === 119) && r < 3
      ? (r++, e.consume(t), i)
      : t === 46 && r === 3
        ? (e.consume(t), a)
        : n(t)
  }
  function a(e) {
    return e === null ? n(e) : t(e)
  }
}
function ax(e, t, n) {
  let r, i, a
  return o
  function o(t) {
    return t === 46 || t === 95
      ? e.check(qb, c, s)(t)
      : t === null || nm(t) || im(t) || (t !== 45 && rm(t))
        ? c(t)
        : ((a = !0), e.consume(t), o)
  }
  function s(t) {
    return (t === 95 ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), o)
  }
  function c(e) {
    return i || r || !a ? n(e) : t(e)
  }
}
function ox(e, t) {
  let n = 0,
    r = 0
  return i
  function i(o) {
    return o === 40
      ? (n++, e.consume(o), i)
      : o === 41 && r < n
        ? a(o)
        : o === 33 ||
            o === 34 ||
            o === 38 ||
            o === 39 ||
            o === 41 ||
            o === 42 ||
            o === 44 ||
            o === 46 ||
            o === 58 ||
            o === 59 ||
            o === 60 ||
            o === 63 ||
            o === 93 ||
            o === 95 ||
            o === 126
          ? e.check(qb, t, a)(o)
          : o === null || nm(o) || im(o)
            ? t(o)
            : (e.consume(o), i)
  }
  function a(t) {
    return (t === 41 && r++, e.consume(t), i)
  }
}
function sx(e, t, n) {
  return r
  function r(o) {
    return o === 33 ||
      o === 34 ||
      o === 39 ||
      o === 41 ||
      o === 42 ||
      o === 44 ||
      o === 46 ||
      o === 58 ||
      o === 59 ||
      o === 63 ||
      o === 95 ||
      o === 126
      ? (e.consume(o), r)
      : o === 38
        ? (e.consume(o), a)
        : o === 93
          ? (e.consume(o), i)
          : o === 60 || o === null || nm(o) || im(o)
            ? t(o)
            : n(o)
  }
  function i(e) {
    return e === null || e === 40 || e === 91 || nm(e) || im(e) ? t(e) : r(e)
  }
  function a(e) {
    return Yp(e) ? o(e) : n(e)
  }
  function o(t) {
    return t === 59 ? (e.consume(t), r) : Yp(t) ? (e.consume(t), o) : n(t)
  }
}
function cx(e, t, n) {
  return r
  function r(t) {
    return (e.consume(t), i)
  }
  function i(e) {
    return Xp(e) ? n(e) : t(e)
  }
}
function lx(e) {
  return (
    e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || nm(e)
  )
}
function ux(e) {
  return !Yp(e)
}
function dx(e) {
  return !(e === 47 || fx(e))
}
function fx(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Xp(e)
}
function px(e) {
  let t = e.length,
    n = !1
  for (; t--; ) {
    let r = e[t][1]
    if ((r.type === `labelLink` || r.type === `labelImage`) && !r._balanced) {
      n = !0
      break
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1
      break
    }
  }
  return (e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n)
}
var mx = { tokenize: Sx, partial: !0 }
function hx() {
  return {
    document: {
      91: { name: `gfmFootnoteDefinition`, tokenize: yx, continuation: { tokenize: bx }, exit: xx },
    },
    text: {
      91: { name: `gfmFootnoteCall`, tokenize: vx },
      93: { name: `gfmPotentialFootnoteCall`, add: `after`, tokenize: gx, resolveTo: _x },
    },
  }
}
function gx(e, t, n) {
  let r = this,
    i = r.events.length,
    a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
    o
  for (; i--; ) {
    let e = r.events[i][1]
    if (e.type === `labelImage`) {
      o = e
      break
    }
    if (
      e.type === `gfmFootnoteCall` ||
      e.type === `labelLink` ||
      e.type === `label` ||
      e.type === `image` ||
      e.type === `link`
    )
      break
  }
  return s
  function s(i) {
    if (!o || !o._balanced) return n(i)
    let s = Jp(r.sliceSerialize({ start: o.end, end: r.now() }))
    return s.codePointAt(0) !== 94 || !a.includes(s.slice(1))
      ? n(i)
      : (e.enter(`gfmFootnoteCallLabelMarker`),
        e.consume(i),
        e.exit(`gfmFootnoteCallLabelMarker`),
        t(i))
  }
}
function _x(e, t) {
  let n = e.length
  for (; n--; )
    if (e[n][1].type === `labelImage` && e[n][0] === `enter`) {
      e[n][1]
      break
    }
  ;((e[n + 1][1].type = `data`), (e[n + 3][1].type = `gfmFootnoteCallLabelMarker`))
  let r = {
      type: `gfmFootnoteCall`,
      start: Object.assign({}, e[n + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    i = {
      type: `gfmFootnoteCallMarker`,
      start: Object.assign({}, e[n + 3][1].end),
      end: Object.assign({}, e[n + 3][1].end),
    }
  ;(i.end.column++, i.end.offset++, i.end._bufferIndex++)
  let a = {
      type: `gfmFootnoteCallString`,
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    o = {
      type: `chunkString`,
      contentType: `string`,
      start: Object.assign({}, a.start),
      end: Object.assign({}, a.end),
    },
    s = [
      e[n + 1],
      e[n + 2],
      [`enter`, r, t],
      e[n + 3],
      e[n + 4],
      [`enter`, i, t],
      [`exit`, i, t],
      [`enter`, a, t],
      [`enter`, o, t],
      [`exit`, o, t],
      [`exit`, a, t],
      e[e.length - 2],
      e[e.length - 1],
      [`exit`, r, t],
    ]
  return (e.splice(n, e.length - n + 1, ...s), e)
}
function vx(e, t, n) {
  let r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
    a = 0,
    o
  return s
  function s(t) {
    return (
      e.enter(`gfmFootnoteCall`),
      e.enter(`gfmFootnoteCallLabelMarker`),
      e.consume(t),
      e.exit(`gfmFootnoteCallLabelMarker`),
      c
    )
  }
  function c(t) {
    return t === 94
      ? (e.enter(`gfmFootnoteCallMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteCallMarker`),
        e.enter(`gfmFootnoteCallString`),
        (e.enter(`chunkString`).contentType = `string`),
        l)
      : n(t)
  }
  function l(s) {
    if (a > 999 || (s === 93 && !o) || s === null || s === 91 || nm(s)) return n(s)
    if (s === 93) {
      e.exit(`chunkString`)
      let a = e.exit(`gfmFootnoteCallString`)
      return i.includes(Jp(r.sliceSerialize(a)))
        ? (e.enter(`gfmFootnoteCallLabelMarker`),
          e.consume(s),
          e.exit(`gfmFootnoteCallLabelMarker`),
          e.exit(`gfmFootnoteCall`),
          t)
        : n(s)
    }
    return (nm(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l)
  }
  function u(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t)
  }
}
function yx(e, t, n) {
  let r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
    a,
    o = 0,
    s
  return c
  function c(t) {
    return (
      (e.enter(`gfmFootnoteDefinition`)._container = !0),
      e.enter(`gfmFootnoteDefinitionLabel`),
      e.enter(`gfmFootnoteDefinitionLabelMarker`),
      e.consume(t),
      e.exit(`gfmFootnoteDefinitionLabelMarker`),
      l
    )
  }
  function l(t) {
    return t === 94
      ? (e.enter(`gfmFootnoteDefinitionMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionMarker`),
        e.enter(`gfmFootnoteDefinitionLabelString`),
        (e.enter(`chunkString`).contentType = `string`),
        u)
      : n(t)
  }
  function u(t) {
    if (o > 999 || (t === 93 && !s) || t === null || t === 91 || nm(t)) return n(t)
    if (t === 93) {
      e.exit(`chunkString`)
      let n = e.exit(`gfmFootnoteDefinitionLabelString`)
      return (
        (a = Jp(r.sliceSerialize(n))),
        e.enter(`gfmFootnoteDefinitionLabelMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionLabelMarker`),
        e.exit(`gfmFootnoteDefinitionLabel`),
        f
      )
    }
    return (nm(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u)
  }
  function d(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t)
  }
  function f(t) {
    return t === 58
      ? (e.enter(`definitionMarker`),
        e.consume(t),
        e.exit(`definitionMarker`),
        i.includes(a) || i.push(a),
        $(e, p, `gfmFootnoteDefinitionWhitespace`))
      : n(t)
  }
  function p(e) {
    return t(e)
  }
}
function bx(e, t, n) {
  return e.check(xm, t, e.attempt(mx, t, n))
}
function xx(e) {
  e.exit(`gfmFootnoteDefinition`)
}
function Sx(e, t, n) {
  let r = this
  return $(e, i, `gfmFootnoteDefinitionIndent`, 5)
  function i(e) {
    let i = r.events[r.events.length - 1]
    return i &&
      i[1].type === `gfmFootnoteDefinitionIndent` &&
      i[2].sliceSerialize(i[1], !0).length === 4
      ? t(e)
      : n(e)
  }
}
function Cx(e) {
  let t = (e || {}).singleTilde,
    n = { name: `strikethrough`, tokenize: i, resolveAll: r }
  return (
    (t ??= !0),
    { text: { 126: n }, insideSpan: { null: [n] }, attentionMarkers: { null: [126] } }
  )
  function r(e, t) {
    let n = -1
    for (; ++n < e.length; )
      if (
        e[n][0] === `enter` &&
        e[n][1].type === `strikethroughSequenceTemporary` &&
        e[n][1]._close
      ) {
        let r = n
        for (; r--; )
          if (
            e[r][0] === `exit` &&
            e[r][1].type === `strikethroughSequenceTemporary` &&
            e[r][1]._open &&
            e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset
          ) {
            ;((e[n][1].type = `strikethroughSequence`), (e[r][1].type = `strikethroughSequence`))
            let i = {
                type: `strikethrough`,
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[n][1].end),
              },
              a = {
                type: `strikethroughText`,
                start: Object.assign({}, e[r][1].end),
                end: Object.assign({}, e[n][1].start),
              },
              o = [
                [`enter`, i, t],
                [`enter`, e[r][1], t],
                [`exit`, e[r][1], t],
                [`enter`, a, t],
              ],
              s = t.parser.constructs.insideSpan.null
            ;(s && Vp(o, o.length, 0, mm(s, e.slice(r + 1, n), t)),
              Vp(o, o.length, 0, [
                [`exit`, a, t],
                [`enter`, e[n][1], t],
                [`exit`, e[n][1], t],
                [`exit`, i, t],
              ]),
              Vp(e, r - 1, n - r + 3, o),
              (n = r + o.length - 2))
            break
          }
      }
    for (n = -1; ++n < e.length; )
      e[n][1].type === `strikethroughSequenceTemporary` && (e[n][1].type = `data`)
    return e
  }
  function i(e, n, r) {
    let i = this.previous,
      a = this.events,
      o = 0
    return s
    function s(t) {
      return i === 126 && a[a.length - 1][1].type !== `characterEscape`
        ? r(t)
        : (e.enter(`strikethroughSequenceTemporary`), c(t))
    }
    function c(a) {
      let s = pm(i)
      if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c)
      if (o < 2 && !t) return r(a)
      let l = e.exit(`strikethroughSequenceTemporary`),
        u = pm(a)
      return ((l._open = !u || (u === 2 && !!s)), (l._close = !s || (s === 2 && !!u)), n(a))
    }
  }
}
var wx = class {
  constructor() {
    this.map = []
  }
  add(e, t, n) {
    Tx(this, e, t, n)
  }
  consume(e) {
    if (
      (this.map.sort(function (e, t) {
        return e[0] - t[0]
      }),
      this.map.length === 0)
    )
      return
    let t = this.map.length,
      n = []
    for (; t > 0; )
      (--t,
        n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
        (e.length = this.map[t][0]))
    ;(n.push(e.slice()), (e.length = 0))
    let r = n.pop()
    for (; r; ) {
      for (let t of r) e.push(t)
      r = n.pop()
    }
    this.map.length = 0
  }
}
function Tx(e, t, n, r) {
  let i = 0
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        ;((e.map[i][1] += n), e.map[i][2].push(...r))
        return
      }
      i += 1
    }
    e.map.push([t, n, r])
  }
}
function Ex(e, t) {
  let n = !1,
    r = []
  for (; t < e.length; ) {
    let i = e[t]
    if (n) {
      if (i[0] === `enter`)
        i[1].type === `tableContent` &&
          r.push(e[t + 1][1].type === `tableDelimiterMarker` ? `left` : `none`)
      else if (i[1].type === `tableContent`) {
        if (e[t - 1][1].type === `tableDelimiterMarker`) {
          let e = r.length - 1
          r[e] = r[e] === `left` ? `center` : `right`
        }
      } else if (i[1].type === `tableDelimiterRow`) break
    } else i[0] === `enter` && i[1].type === `tableDelimiterRow` && (n = !0)
    t += 1
  }
  return r
}
function Dx() {
  return { flow: { null: { name: `table`, tokenize: Ox, resolveAll: kx } } }
}
function Ox(e, t, n) {
  let r = this,
    i = 0,
    a = 0,
    o
  return s
  function s(e) {
    let t = r.events.length - 1
    for (; t > -1; ) {
      let e = r.events[t][1].type
      if (e === `lineEnding` || e === `linePrefix`) t--
      else break
    }
    let i = t > -1 ? r.events[t][1].type : null,
      a = i === `tableHead` || i === `tableRow` ? S : c
    return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e)
  }
  function c(t) {
    return (e.enter(`tableHead`), e.enter(`tableRow`), l(t))
  }
  function l(e) {
    return e === 124 ? u(e) : ((o = !0), (a += 1), u(e))
  }
  function u(t) {
    return t === null
      ? n(t)
      : Z(t)
        ? a > 1
          ? ((a = 0),
            (r.interrupt = !0),
            e.exit(`tableRow`),
            e.enter(`lineEnding`),
            e.consume(t),
            e.exit(`lineEnding`),
            p)
          : n(t)
        : Q(t)
          ? $(e, u, `whitespace`)(t)
          : ((a += 1),
            o && ((o = !1), (i += 1)),
            t === 124
              ? (e.enter(`tableCellDivider`), e.consume(t), e.exit(`tableCellDivider`), (o = !0), u)
              : (e.enter(`data`), d(t)))
  }
  function d(t) {
    return t === null || t === 124 || nm(t)
      ? (e.exit(`data`), u(t))
      : (e.consume(t), t === 92 ? f : d)
  }
  function f(t) {
    return t === 92 || t === 124 ? (e.consume(t), d) : d(t)
  }
  function p(t) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? n(t)
        : (e.enter(`tableDelimiterRow`),
          (o = !1),
          Q(t)
            ? $(
                e,
                m,
                `linePrefix`,
                r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4
              )(t)
            : m(t))
    )
  }
  function m(t) {
    return t === 45 || t === 58
      ? g(t)
      : t === 124
        ? ((o = !0), e.enter(`tableCellDivider`), e.consume(t), e.exit(`tableCellDivider`), h)
        : x(t)
  }
  function h(t) {
    return Q(t) ? $(e, g, `whitespace`)(t) : g(t)
  }
  function g(t) {
    return t === 58
      ? ((a += 1),
        (o = !0),
        e.enter(`tableDelimiterMarker`),
        e.consume(t),
        e.exit(`tableDelimiterMarker`),
        _)
      : t === 45
        ? ((a += 1), _(t))
        : t === null || Z(t)
          ? b(t)
          : x(t)
  }
  function _(t) {
    return t === 45 ? (e.enter(`tableDelimiterFiller`), v(t)) : x(t)
  }
  function v(t) {
    return t === 45
      ? (e.consume(t), v)
      : t === 58
        ? ((o = !0),
          e.exit(`tableDelimiterFiller`),
          e.enter(`tableDelimiterMarker`),
          e.consume(t),
          e.exit(`tableDelimiterMarker`),
          y)
        : (e.exit(`tableDelimiterFiller`), y(t))
  }
  function y(t) {
    return Q(t) ? $(e, b, `whitespace`)(t) : b(t)
  }
  function b(n) {
    return n === 124
      ? m(n)
      : n === null || Z(n)
        ? !o || i !== a
          ? x(n)
          : (e.exit(`tableDelimiterRow`), e.exit(`tableHead`), t(n))
        : x(n)
  }
  function x(e) {
    return n(e)
  }
  function S(t) {
    return (e.enter(`tableRow`), C(t))
  }
  function C(n) {
    return n === 124
      ? (e.enter(`tableCellDivider`), e.consume(n), e.exit(`tableCellDivider`), C)
      : n === null || Z(n)
        ? (e.exit(`tableRow`), t(n))
        : Q(n)
          ? $(e, C, `whitespace`)(n)
          : (e.enter(`data`), w(n))
  }
  function w(t) {
    return t === null || t === 124 || nm(t)
      ? (e.exit(`data`), C(t))
      : (e.consume(t), t === 92 ? T : w)
  }
  function T(t) {
    return t === 92 || t === 124 ? (e.consume(t), w) : w(t)
  }
}
function kx(e, t) {
  let n = -1,
    r = !0,
    i = 0,
    a = [0, 0, 0, 0],
    o = [0, 0, 0, 0],
    s = !1,
    c = 0,
    l,
    u,
    d,
    f = new wx()
  for (; ++n < e.length; ) {
    let p = e[n],
      m = p[1]
    p[0] === `enter`
      ? m.type === `tableHead`
        ? ((s = !1),
          c !== 0 && (jx(f, t, c, l, u), (u = void 0), (c = 0)),
          (l = { type: `table`, start: Object.assign({}, m.start), end: Object.assign({}, m.end) }),
          f.add(n, 0, [[`enter`, l, t]]))
        : m.type === `tableRow` || m.type === `tableDelimiterRow`
          ? ((r = !0),
            (d = void 0),
            (a = [0, 0, 0, 0]),
            (o = [0, n + 1, 0, 0]),
            s &&
              ((s = !1),
              (u = {
                type: `tableBody`,
                start: Object.assign({}, m.start),
                end: Object.assign({}, m.end),
              }),
              f.add(n, 0, [[`enter`, u, t]])),
            (i = m.type === `tableDelimiterRow` ? 2 : u ? 3 : 1))
          : i &&
              (m.type === `data` ||
                m.type === `tableDelimiterMarker` ||
                m.type === `tableDelimiterFiller`)
            ? ((r = !1),
              o[2] === 0 &&
                (a[1] !== 0 && ((o[0] = o[1]), (d = Ax(f, t, a, i, void 0, d)), (a = [0, 0, 0, 0])),
                (o[2] = n)))
            : m.type === `tableCellDivider` &&
              (r
                ? (r = !1)
                : (a[1] !== 0 && ((o[0] = o[1]), (d = Ax(f, t, a, i, void 0, d))),
                  (a = o),
                  (o = [a[1], n, 0, 0])))
      : m.type === `tableHead`
        ? ((s = !0), (c = n))
        : m.type === `tableRow` || m.type === `tableDelimiterRow`
          ? ((c = n),
            a[1] === 0
              ? o[1] !== 0 && (d = Ax(f, t, o, i, n, d))
              : ((o[0] = o[1]), (d = Ax(f, t, a, i, n, d))),
            (i = 0))
          : i &&
            (m.type === `data` ||
              m.type === `tableDelimiterMarker` ||
              m.type === `tableDelimiterFiller`) &&
            (o[3] = n)
  }
  for (c !== 0 && jx(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length; ) {
    let e = t.events[n]
    e[0] === `enter` && e[1].type === `table` && (e[1]._align = Ex(t.events, n))
  }
  return e
}
function Ax(e, t, n, r, i, a) {
  let o = r === 1 ? `tableHeader` : r === 2 ? `tableDelimiter` : `tableData`
  n[0] !== 0 && ((a.end = Object.assign({}, Mx(t.events, n[0]))), e.add(n[0], 0, [[`exit`, a, t]]))
  let s = Mx(t.events, n[1])
  if (
    ((a = { type: o, start: Object.assign({}, s), end: Object.assign({}, s) }),
    e.add(n[1], 0, [[`enter`, a, t]]),
    n[2] !== 0)
  ) {
    let i = Mx(t.events, n[2]),
      a = Mx(t.events, n[3]),
      o = { type: `tableContent`, start: Object.assign({}, i), end: Object.assign({}, a) }
    if ((e.add(n[2], 0, [[`enter`, o, t]]), r !== 2)) {
      let r = t.events[n[2]],
        i = t.events[n[3]]
      if (
        ((r[1].end = Object.assign({}, i[1].end)),
        (r[1].type = `chunkText`),
        (r[1].contentType = `text`),
        n[3] > n[2] + 1)
      ) {
        let t = n[2] + 1,
          r = n[3] - n[2] - 1
        e.add(t, r, [])
      }
    }
    e.add(n[3] + 1, 0, [[`exit`, o, t]])
  }
  return (
    i !== void 0 &&
      ((a.end = Object.assign({}, Mx(t.events, i))), e.add(i, 0, [[`exit`, a, t]]), (a = void 0)),
    a
  )
}
function jx(e, t, n, r, i) {
  let a = [],
    o = Mx(t.events, n)
  ;(i && ((i.end = Object.assign({}, o)), a.push([`exit`, i, t])),
    (r.end = Object.assign({}, o)),
    a.push([`exit`, r, t]),
    e.add(n + 1, 0, a))
}
function Mx(e, t) {
  let n = e[t],
    r = n[0] === `enter` ? `start` : `end`
  return n[1][r]
}
var Nx = { name: `tasklistCheck`, tokenize: Fx }
function Px() {
  return { text: { 91: Nx } }
}
function Fx(e, t, n) {
  let r = this
  return i
  function i(t) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
      ? n(t)
      : (e.enter(`taskListCheck`),
        e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        a)
  }
  function a(t) {
    return nm(t)
      ? (e.enter(`taskListCheckValueUnchecked`),
        e.consume(t),
        e.exit(`taskListCheckValueUnchecked`),
        o)
      : t === 88 || t === 120
        ? (e.enter(`taskListCheckValueChecked`),
          e.consume(t),
          e.exit(`taskListCheckValueChecked`),
          o)
        : n(t)
  }
  function o(t) {
    return t === 93
      ? (e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        e.exit(`taskListCheck`),
        s)
      : n(t)
  }
  function s(r) {
    return Z(r) ? t(r) : Q(r) ? e.check({ tokenize: Ix }, t, n)(r) : n(r)
  }
}
function Ix(e, t, n) {
  return $(e, r, `whitespace`)
  function r(e) {
    return e === null ? n(e) : t(e)
  }
}
function Lx(e) {
  return Wp([$b(), hx(), Cx(e), Dx(), Px()])
}
var Rx = {}
function zx(e) {
  let t = this,
    n = e || Rx,
    r = t.data(),
    i = (r.micromarkExtensions ||= []),
    a = (r.fromMarkdownExtensions ||= []),
    o = (r.toMarkdownExtensions ||= [])
  ;(i.push(Lx(n)), a.push(Hb()), o.push(Ub(n)))
}
function Bx() {
  let { reportChunks: e, events: t } = te(),
    n = e.join(``),
    r = t.some((e) => e.event === `REPORT_DONE`)
  return n
    ? (0, k.jsx)(el, {
        children: (0, k.jsxs)(Wu.div, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: `rounded-lg border border-zinc-800 bg-zinc-900/30 p-6`,
          children: [
            r &&
              (0, k.jsxs)(`div`, {
                className: `flex gap-3 mb-4 pb-4 border-b border-zinc-800`,
                children: [
                  (0, k.jsx)(`button`, {
                    onClick: () => navigator.clipboard.writeText(n),
                    className: `font-mono text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded transition-colors`,
                    children: `Copy`,
                  }),
                  (0, k.jsx)(`a`, {
                    href: `data:text/markdown;charset=utf-8,${encodeURIComponent(n)}`,
                    download: `research-report.md`,
                    className: `font-mono text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded transition-colors`,
                    children: `Export MD`,
                  }),
                ],
              }),
            (0, k.jsx)(`div`, {
              className: `prose prose-invert prose-sm max-w-none font-serif`,
              children: (0, k.jsx)(Fv, { remarkPlugins: [zx], children: n }),
            }),
            !r &&
              (0, k.jsx)(`span`, {
                className: `inline-block w-1.5 h-4 bg-indigo-500 animate-pulse ml-0.5`,
              }),
          ],
        }),
      })
    : (0, k.jsx)(`div`, {
        className: `flex items-center justify-center h-32`,
        children: (0, k.jsx)(`p`, {
          className: `font-mono text-xs text-zinc-700`,
          children: `Report will appear here when ready...`,
        }),
      })
}
function Vx() {
  let [e, t] = (0, b.useState)(!1),
    [n, r] = (0, b.useState)([]),
    i = te((e) => e.setQuery)
  async function a() {
    r(await oe())
  }
  ;(0, b.useEffect)(() => {
    e && a()
  }, [e])
  async function o(e, t) {
    ;(t.stopPropagation(), await se(e), r((t) => t.filter((t) => t.session_id !== e)))
  }
  let s = { done: `text-cyan-500`, running: `text-indigo-400`, error: `text-red-400` }
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsxs)(`button`, {
        onClick: () => t((e) => !e),
        className: `font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors`,
        children: [e ? `▼` : `▲`, ` Session History (`, n.length, `)`],
      }),
      (0, k.jsx)(el, {
        children:
          e &&
          (0, k.jsx)(Wu.div, {
            initial: { height: 0, opacity: 0 },
            animate: { height: `auto`, opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: `overflow-hidden`,
            children: (0, k.jsxs)(`div`, {
              className: `mt-2 rounded-lg border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 max-h-64 overflow-y-auto`,
              children: [
                n.length === 0 &&
                  (0, k.jsx)(`p`, {
                    className: `font-mono text-xs text-zinc-700 p-4 text-center`,
                    children: `No past sessions`,
                  }),
                n.map((e) =>
                  (0, k.jsxs)(
                    `div`,
                    {
                      onClick: () => i(e.query),
                      className: `flex items-center justify-between px-4 py-2.5 hover:bg-zinc-900 cursor-pointer transition-colors`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          className: `min-w-0`,
                          children: [
                            (0, k.jsx)(`p`, {
                              className: `font-mono text-xs text-zinc-300 truncate`,
                              children: e.query,
                            }),
                            (0, k.jsxs)(`p`, {
                              className: `font-mono text-[10px] text-zinc-600`,
                              children: [
                                Zd(new Date(e.created_at), `MMM d, HH:mm`),
                                ` ·`,
                                ` `,
                                (0, k.jsx)(`span`, {
                                  className: s[e.status] ?? `text-zinc-600`,
                                  children: e.status,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsx)(`button`, {
                          onClick: (t) => o(e.session_id, t),
                          className: `ml-3 text-zinc-700 hover:text-red-500 font-mono text-xs transition-colors`,
                          children: `✕`,
                        }),
                      ],
                    },
                    e.session_id
                  )
                ),
              ],
            }),
          }),
      }),
    ],
  })
}
function Hx() {
  let { agentStatuses: e, events: t, sources: n, isRunning: r } = te(),
    i = Object.entries(e).find(([, e]) => e === `active`)?.[0],
    a = Object.values(n).reduce((e, t) => e + t.length, 0),
    o = t.length
  return (0, k.jsxs)(`div`, {
    className: `flex items-center gap-4 font-mono text-[10px] text-zinc-600`,
    children: [
      (0, k.jsx)(`span`, {
        className: r ? `text-indigo-400` : `text-zinc-700`,
        children: r ? `● ${i ?? `running`}` : `○ idle`,
      }),
      (0, k.jsxs)(`span`, { children: [o, ` events`] }),
      (0, k.jsxs)(`span`, { children: [a, ` sources`] }),
      (0, k.jsx)(`span`, {
        className: `ml-auto text-zinc-800`,
        children: `Research Command Center`,
      }),
    ],
  })
}
function Ux() {
  let e = te((e) => e.reportChunks.length > 0)
  return (0, k.jsxs)(`div`, {
    className: `grid-bg min-h-screen flex flex-col`,
    style: { fontFamily: `var(--font-mono)` },
    children: [
      (0, k.jsxs)(`header`, {
        className: `border-b border-zinc-800/60 bg-black/30 backdrop-blur-sm px-6 py-3 flex items-center gap-3`,
        children: [
          (0, k.jsx)(`span`, { className: `text-indigo-400 text-lg`, children: `⬡` }),
          (0, k.jsx)(`span`, {
            className: `font-mono text-sm text-zinc-300 tracking-wider`,
            children: `RESEARCH COMMAND CENTER`,
          }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `px-6 py-4 border-b border-zinc-800/40 bg-black/20`,
        children: (0, k.jsx)(le, {}),
      }),
      (0, k.jsxs)(`div`, {
        className: `flex flex-1 divide-x divide-zinc-800/40 overflow-hidden`,
        style: { minHeight: 0 },
        children: [
          (0, k.jsx)(`div`, {
            className: `w-52 shrink-0 p-4 overflow-y-auto bg-black/10`,
            children: (0, k.jsx)(Ju, {}),
          }),
          (0, k.jsxs)(`div`, {
            className: `flex-1 p-4 overflow-hidden flex flex-col`,
            children: [
              (0, k.jsx)(`p`, {
                className: `font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3`,
                children: `Live Log`,
              }),
              (0, k.jsx)(`div`, {
                className: `flex-1 overflow-hidden`,
                children: (0, k.jsx)(tf, {}),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `w-72 shrink-0 p-4 overflow-hidden flex flex-col`,
            children: [
              (0, k.jsx)(`p`, {
                className: `font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3`,
                children: `Sources`,
              }),
              (0, k.jsx)(`div`, {
                className: `flex-1 overflow-hidden`,
                children: (0, k.jsx)(nf, {}),
              }),
            ],
          }),
        ],
      }),
      e &&
        (0, k.jsxs)(`div`, {
          className: `border-t border-zinc-800/40 bg-black/20 px-6 py-4 max-h-[50vh] overflow-y-auto`,
          children: [
            (0, k.jsx)(`p`, {
              className: `font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3`,
              children: `Research Report`,
            }),
            (0, k.jsx)(Bx, {}),
          ],
        }),
      (0, k.jsxs)(`footer`, {
        className: `border-t border-zinc-800/40 bg-black/30 px-6 py-2 space-y-2`,
        children: [(0, k.jsx)(Vx, {}), (0, k.jsx)(Hx, {})],
      }),
    ],
  })
}
;(0, x.createRoot)(document.getElementById(`root`)).render(
  (0, k.jsx)(b.StrictMode, { children: (0, k.jsx)(Ux, {}) })
)
