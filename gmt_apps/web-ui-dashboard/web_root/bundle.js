var n,
  t,
  e,
  _,
  r,
  o,
  i,
  u,
  l,
  c = {},
  a = [],
  s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function f(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function p(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function h(t, e, _) {
  var r,
    o,
    i,
    u = {};
  for (i in e)
    "key" == i ? (r = e[i]) : "ref" == i ? (o = e[i]) : (u[i] = e[i]);
  if (
    (arguments.length > 2 &&
      (u.children = arguments.length > 3 ? n.call(arguments, 2) : _),
    "function" == typeof t && null != t.defaultProps)
  )
    for (i in t.defaultProps) void 0 === u[i] && (u[i] = t.defaultProps[i]);
  return d(t, u, r, o, null);
}
function d(n, _, r, o, i) {
  var u = {
    type: n,
    props: _,
    key: r,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == i ? ++e : i,
  };
  return null == i && null != t.vnode && t.vnode(u), u;
}
function v() {
  return { current: null };
}
function m(n) {
  return n.children;
}
function y(n, t) {
  (this.props = n), (this.context = t);
}
function g(n, t) {
  if (null == t) return n.__ ? g(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if (null != (e = n.__k[t]) && null != e.__e) return e.__e;
  return "function" == typeof n.type ? g(n) : null;
}
function b(n) {
  var t, e;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if (null != (e = n.__k[t]) && null != e.__e) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return b(n);
  }
}
function k(n) {
  ((!n.__d && (n.__d = !0) && r.push(n) && !C.__r++) ||
    o !== t.debounceRendering) &&
    ((o = t.debounceRendering) || i)(C);
}
function C() {
  var n, t, e, _, o, i, l, c;
  for (r.sort(u); (n = r.shift()); )
    n.__d &&
      ((t = r.length),
      (_ = void 0),
      (o = void 0),
      (l = (i = (e = n).__v).__e),
      (c = e.__P) &&
        ((_ = []),
        ((o = f({}, i)).__v = i.__v + 1),
        T(
          c,
          i,
          o,
          e.__n,
          void 0 !== c.ownerSVGElement,
          null != i.__h ? [l] : null,
          _,
          null == l ? g(i) : l,
          i.__h
        ),
        R(_, i),
        i.__e != l && b(i)),
      r.length > t && r.sort(u));
  C.__r = 0;
}
function x(n, t, e, _, r, o, i, u, l, s) {
  var f,
    p,
    h,
    v,
    y,
    b,
    k,
    C = (_ && _.__k) || a,
    x = C.length;
  for (e.__k = [], f = 0; f < t.length; f++)
    if (
      null !=
      (v = e.__k[f] =
        null == (v = t[f]) || "boolean" == typeof v || "function" == typeof v
          ? null
          : "string" == typeof v || "number" == typeof v || "bigint" == typeof v
          ? d(null, v, null, null, v)
          : Array.isArray(v)
          ? d(m, { children: v }, null, null, null)
          : v.__b > 0
          ? d(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v)
          : v)
    ) {
      if (
        ((v.__ = e),
        (v.__b = e.__b + 1),
        null === (h = C[f]) || (h && v.key == h.key && v.type === h.type))
      )
        C[f] = void 0;
      else
        for (p = 0; p < x; p++) {
          if ((h = C[p]) && v.key == h.key && v.type === h.type) {
            C[p] = void 0;
            break;
          }
          h = null;
        }
      T(n, v, (h = h || c), r, o, i, u, l, s),
        (y = v.__e),
        (p = v.ref) &&
          h.ref != p &&
          (k || (k = []),
          h.ref && k.push(h.ref, null, v),
          k.push(p, v.__c || y, v)),
        null != y
          ? (null == b && (b = y),
            "function" == typeof v.type && v.__k === h.__k
              ? (v.__d = l = E(v, l, n))
              : (l = U(n, v, h, C, y, l)),
            "function" == typeof e.type && (e.__d = l))
          : l && h.__e == l && l.parentNode != n && (l = g(h));
    }
  for (e.__e = b, f = x; f--; )
    null != C[f] &&
      ("function" == typeof e.type &&
        null != C[f].__e &&
        C[f].__e == e.__d &&
        (e.__d = A(_).nextSibling),
      W(C[f], C[f]));
  if (k) for (f = 0; f < k.length; f++) M(k[f], k[++f], k[++f]);
}
function E(n, t, e) {
  for (var _, r = n.__k, o = 0; r && o < r.length; o++)
    (_ = r[o]) &&
      ((_.__ = n),
      (t = "function" == typeof _.type ? E(_, t, e) : U(e, _, _, r, _.__e, t)));
  return t;
}
function H(n, t) {
  return (
    (t = t || []),
    null == n ||
      "boolean" == typeof n ||
      (Array.isArray(n)
        ? n.some(function (n) {
            H(n, t);
          })
        : t.push(n)),
    t
  );
}
function U(n, t, e, _, r, o) {
  var i, u, l;
  if (void 0 !== t.__d) (i = t.__d), (t.__d = void 0);
  else if (null == e || r != o || null == r.parentNode)
    n: if (null == o || o.parentNode !== n) n.appendChild(r), (i = null);
    else {
      for (u = o, l = 0; (u = u.nextSibling) && l < _.length; l += 1)
        if (u == r) break n;
      n.insertBefore(r, o), (i = o);
    }
  return void 0 !== i ? i : r.nextSibling;
}
function A(n) {
  var t, e, _;
  if (null == n.type || "string" == typeof n.type) return n.__e;
  if (n.__k)
    for (t = n.__k.length - 1; t >= 0; t--)
      if ((e = n.__k[t]) && (_ = A(e))) return _;
  return null;
}
function P(n, t, e, _, r) {
  var o;
  for (o in e)
    "children" === o || "key" === o || o in t || N(n, o, null, e[o], _);
  for (o in t)
    (r && "function" != typeof t[o]) ||
      "children" === o ||
      "key" === o ||
      "value" === o ||
      "checked" === o ||
      e[o] === t[o] ||
      N(n, o, t[o], e[o], _);
}
function S(n, t, e) {
  "-" === t[0]
    ? n.setProperty(t, null == e ? "" : e)
    : (n[t] =
        null == e ? "" : "number" != typeof e || s.test(t) ? e : e + "px");
}
function N(n, t, e, _, r) {
  var o;
  n: if ("style" === t)
    if ("string" == typeof e) n.style.cssText = e;
    else {
      if (("string" == typeof _ && (n.style.cssText = _ = ""), _))
        for (t in _) (e && t in e) || S(n.style, t, "");
      if (e) for (t in e) (_ && e[t] === _[t]) || S(n.style, t, e[t]);
    }
  else if ("o" === t[0] && "n" === t[1])
    (o = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2)),
      n.l || (n.l = {}),
      (n.l[t + o] = e),
      e
        ? _ || n.addEventListener(t, o ? D : w, o)
        : n.removeEventListener(t, o ? D : w, o);
  else if ("dangerouslySetInnerHTML" !== t) {
    if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      "width" !== t &&
      "height" !== t &&
      "href" !== t &&
      "list" !== t &&
      "form" !== t &&
      "tabIndex" !== t &&
      "download" !== t &&
      t in n
    )
      try {
        n[t] = null == e ? "" : e;
        break n;
      } catch (n) {}
    "function" == typeof e ||
      (null == e || (!1 === e && "-" !== t[4])
        ? n.removeAttribute(t)
        : n.setAttribute(t, e));
  }
}
function w(n) {
  return this.l[n.type + !1](t.event ? t.event(n) : n);
}
function D(n) {
  return this.l[n.type + !0](t.event ? t.event(n) : n);
}
function T(n, e, _, r, o, i, u, l, c) {
  var a,
    s,
    p,
    h,
    d,
    v,
    g,
    b,
    k,
    C,
    E,
    H,
    U,
    A,
    P,
    S = e.type;
  if (void 0 !== e.constructor) return null;
  null != _.__h &&
    ((c = _.__h), (l = e.__e = _.__e), (e.__h = null), (i = [l])),
    (a = t.__b) && a(e);
  try {
    n: if ("function" == typeof S) {
      if (
        ((b = e.props),
        (k = (a = S.contextType) && r[a.__c]),
        (C = a ? (k ? k.props.value : a.__) : r),
        _.__c
          ? (g = (s = e.__c = _.__c).__ = s.__E)
          : ("prototype" in S && S.prototype.render
              ? (e.__c = s = new S(b, C))
              : ((e.__c = s = new y(b, C)),
                (s.constructor = S),
                (s.render = V)),
            k && k.sub(s),
            (s.props = b),
            s.state || (s.state = {}),
            (s.context = C),
            (s.__n = r),
            (p = s.__d = !0),
            (s.__h = []),
            (s._sb = [])),
        null == s.__s && (s.__s = s.state),
        null != S.getDerivedStateFromProps &&
          (s.__s == s.state && (s.__s = f({}, s.__s)),
          f(s.__s, S.getDerivedStateFromProps(b, s.__s))),
        (h = s.props),
        (d = s.state),
        (s.__v = e),
        p)
      )
        null == S.getDerivedStateFromProps &&
          null != s.componentWillMount &&
          s.componentWillMount(),
          null != s.componentDidMount && s.__h.push(s.componentDidMount);
      else {
        if (
          (null == S.getDerivedStateFromProps &&
            b !== h &&
            null != s.componentWillReceiveProps &&
            s.componentWillReceiveProps(b, C),
          (!s.__e &&
            null != s.shouldComponentUpdate &&
            !1 === s.shouldComponentUpdate(b, s.__s, C)) ||
            e.__v === _.__v)
        ) {
          for (
            e.__v !== _.__v && ((s.props = b), (s.state = s.__s), (s.__d = !1)),
              s.__e = !1,
              e.__e = _.__e,
              e.__k = _.__k,
              e.__k.forEach(function (n) {
                n && (n.__ = e);
              }),
              E = 0;
            E < s._sb.length;
            E++
          )
            s.__h.push(s._sb[E]);
          (s._sb = []), s.__h.length && u.push(s);
          break n;
        }
        null != s.componentWillUpdate && s.componentWillUpdate(b, s.__s, C),
          null != s.componentDidUpdate &&
            s.__h.push(function () {
              s.componentDidUpdate(h, d, v);
            });
      }
      if (
        ((s.context = C),
        (s.props = b),
        (s.__P = n),
        (H = t.__r),
        (U = 0),
        "prototype" in S && S.prototype.render)
      ) {
        for (
          s.state = s.__s,
            s.__d = !1,
            H && H(e),
            a = s.render(s.props, s.state, s.context),
            A = 0;
          A < s._sb.length;
          A++
        )
          s.__h.push(s._sb[A]);
        s._sb = [];
      } else
        do {
          (s.__d = !1),
            H && H(e),
            (a = s.render(s.props, s.state, s.context)),
            (s.state = s.__s);
        } while (s.__d && ++U < 25);
      (s.state = s.__s),
        null != s.getChildContext && (r = f(f({}, r), s.getChildContext())),
        p ||
          null == s.getSnapshotBeforeUpdate ||
          (v = s.getSnapshotBeforeUpdate(h, d)),
        (P = null != a && a.type === m && null == a.key ? a.props.children : a),
        x(n, Array.isArray(P) ? P : [P], e, _, r, o, i, u, l, c),
        (s.base = e.__e),
        (e.__h = null),
        s.__h.length && u.push(s),
        g && (s.__E = s.__ = null),
        (s.__e = !1);
    } else
      null == i && e.__v === _.__v
        ? ((e.__k = _.__k), (e.__e = _.__e))
        : (e.__e = L(_.__e, e, _, r, o, i, u, c));
    (a = t.diffed) && a(e);
  } catch (n) {
    (e.__v = null),
      (c || null != i) &&
        ((e.__e = l), (e.__h = !!c), (i[i.indexOf(l)] = null)),
      t.__e(n, e, _);
  }
}
function R(n, e) {
  t.__c && t.__c(e, n),
    n.some(function (e) {
      try {
        (n = e.__h),
          (e.__h = []),
          n.some(function (n) {
            n.call(e);
          });
      } catch (n) {
        t.__e(n, e.__v);
      }
    });
}
function L(t, e, _, r, o, i, u, l) {
  var a,
    s,
    f,
    h = _.props,
    d = e.props,
    v = e.type,
    m = 0;
  if (("svg" === v && (o = !0), null != i))
    for (; m < i.length; m++)
      if (
        (a = i[m]) &&
        "setAttribute" in a == !!v &&
        (v ? a.localName === v : 3 === a.nodeType)
      ) {
        (t = a), (i[m] = null);
        break;
      }
  if (null == t) {
    if (null === v) return document.createTextNode(d);
    (t = o
      ? document.createElementNS("http://www.w3.org/2000/svg", v)
      : document.createElement(v, d.is && d)),
      (i = null),
      (l = !1);
  }
  if (null === v) h === d || (l && t.data === d) || (t.data = d);
  else {
    if (
      ((i = i && n.call(t.childNodes)),
      (s = (h = _.props || c).dangerouslySetInnerHTML),
      (f = d.dangerouslySetInnerHTML),
      !l)
    ) {
      if (null != i)
        for (h = {}, m = 0; m < t.attributes.length; m++)
          h[t.attributes[m].name] = t.attributes[m].value;
      (f || s) &&
        ((f && ((s && f.__html == s.__html) || f.__html === t.innerHTML)) ||
          (t.innerHTML = (f && f.__html) || ""));
    }
    if ((P(t, d, h, o, l), f)) e.__k = [];
    else if (
      ((m = e.props.children),
      x(
        t,
        Array.isArray(m) ? m : [m],
        e,
        _,
        r,
        o && "foreignObject" !== v,
        i,
        u,
        i ? i[0] : _.__k && g(_, 0),
        l
      ),
      null != i)
    )
      for (m = i.length; m--; ) null != i[m] && p(i[m]);
    l ||
      ("value" in d &&
        void 0 !== (m = d.value) &&
        (m !== t.value ||
          ("progress" === v && !m) ||
          ("option" === v && m !== h.value)) &&
        N(t, "value", m, h.value, !1),
      "checked" in d &&
        void 0 !== (m = d.checked) &&
        m !== t.checked &&
        N(t, "checked", m, h.checked, !1));
  }
  return t;
}
function M(n, e, _) {
  try {
    "function" == typeof n ? n(e) : (n.current = e);
  } catch (n) {
    t.__e(n, _);
  }
}
function W(n, e, _) {
  var r, o;
  if (
    (t.unmount && t.unmount(n),
    (r = n.ref) && ((r.current && r.current !== n.__e) || M(r, null, e)),
    null != (r = n.__c))
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (n) {
        t.__e(n, e);
      }
    (r.base = r.__P = null), (n.__c = void 0);
  }
  if ((r = n.__k))
    for (o = 0; o < r.length; o++)
      r[o] && W(r[o], e, _ || "function" != typeof n.type);
  _ || null == n.__e || p(n.__e), (n.__ = n.__e = n.__d = void 0);
}
function V(n, t, e) {
  return this.constructor(n, e);
}
function F(e, _, r) {
  var o, i, u;
  t.__ && t.__(e, _),
    (i = (o = "function" == typeof r) ? null : (r && r.__k) || _.__k),
    (u = []),
    T(
      _,
      (e = ((!o && r) || _).__k = h(m, null, [e])),
      i || c,
      c,
      void 0 !== _.ownerSVGElement,
      !o && r ? [r] : i ? null : _.firstChild ? n.call(_.childNodes) : null,
      u,
      !o && r ? r : i ? i.__e : _.firstChild,
      o
    ),
    R(u, e);
}
function I(n, t) {
  F(n, t, I);
}
function O(t, e, _) {
  var r,
    o,
    i,
    u = f({}, t.props);
  for (i in e)
    "key" == i ? (r = e[i]) : "ref" == i ? (o = e[i]) : (u[i] = e[i]);
  return (
    arguments.length > 2 &&
      (u.children = arguments.length > 3 ? n.call(arguments, 2) : _),
    d(t.type, u, r || t.key, o || t.ref, null)
  );
}
function $(n, t) {
  var e = {
    __c: (t = "__cC" + l++),
    __: n,
    Consumer: function (n, t) {
      return n.children(t);
    },
    Provider: function (n) {
      var e, _;
      return (
        this.getChildContext ||
          ((e = []),
          ((_ = {})[t] = this),
          (this.getChildContext = function () {
            return _;
          }),
          (this.shouldComponentUpdate = function (n) {
            this.props.value !== n.value &&
              e.some(function (n) {
                (n.__e = !0), k(n);
              });
          }),
          (this.sub = function (n) {
            e.push(n);
            var t = n.componentWillUnmount;
            n.componentWillUnmount = function () {
              e.splice(e.indexOf(n), 1), t && t.call(n);
            };
          })),
        n.children
      );
    },
  };
  return (e.Provider.__ = e.Consumer.contextType = e);
}
(n = a.slice),
  (t = {
    __e: function (n, t, e, _) {
      for (var r, o, i; (t = t.__); )
        if ((r = t.__c) && !r.__)
          try {
            if (
              ((o = r.constructor) &&
                null != o.getDerivedStateFromError &&
                (r.setState(o.getDerivedStateFromError(n)), (i = r.__d)),
              null != r.componentDidCatch &&
                (r.componentDidCatch(n, _ || {}), (i = r.__d)),
              i)
            )
              return (r.__E = r);
          } catch (t) {
            n = t;
          }
      throw n;
    },
  }),
  (e = 0),
  (_ = function (n) {
    return null != n && void 0 === n.constructor;
  }),
  (y.prototype.setState = function (n, t) {
    var e;
    (e =
      null != this.__s && this.__s !== this.state
        ? this.__s
        : (this.__s = f({}, this.state))),
      "function" == typeof n && (n = n(f({}, e), this.props)),
      n && f(e, n),
      null != n && this.__v && (t && this._sb.push(t), k(this));
  }),
  (y.prototype.forceUpdate = function (n) {
    this.__v && ((this.__e = !0), n && this.__h.push(n), k(this));
  }),
  (y.prototype.render = m),
  (r = []),
  (i =
    "function" == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (u = function (n, t) {
    return n.__v.__b - t.__v.__b;
  }),
  (C.__r = 0),
  (l = 0);
var j,
  q,
  B,
  K,
  G = 0,
  z = [],
  J = [],
  Q = t.__b,
  X = t.__r,
  Y = t.diffed,
  Z = t.__c,
  nn = t.unmount;
function tn(n, e) {
  t.__h && t.__h(q, n, G || e), (G = 0);
  var _ = q.__H || (q.__H = { __: [], __h: [] });
  return n >= _.__.length && _.__.push({ __V: J }), _.__[n];
}
function en(n) {
  return (G = 1), _n(kn, n);
}
function _n(n, t, e) {
  var _ = tn(j++, 2);
  if (
    ((_.t = n),
    !_.__c &&
      ((_.__ = [
        e ? e(t) : kn(void 0, t),
        function (n) {
          var t = _.__N ? _.__N[0] : _.__[0],
            e = _.t(t, n);
          t !== e && ((_.__N = [e, _.__[1]]), _.__c.setState({}));
        },
      ]),
      (_.__c = q),
      !q.u))
  ) {
    var r = function (n, t, e) {
      if (!_.__c.__H) return !0;
      var r = _.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (
        r.every(function (n) {
          return !n.__N;
        })
      )
        return !o || o.call(this, n, t, e);
      var i = !1;
      return (
        r.forEach(function (n) {
          if (n.__N) {
            var t = n.__[0];
            (n.__ = n.__N), (n.__N = void 0), t !== n.__[0] && (i = !0);
          }
        }),
        !(!i && _.__c.props === n) && (!o || o.call(this, n, t, e))
      );
    };
    q.u = !0;
    var o = q.shouldComponentUpdate,
      i = q.componentWillUpdate;
    (q.componentWillUpdate = function (n, t, e) {
      if (this.__e) {
        var _ = o;
        (o = void 0), r(n, t, e), (o = _);
      }
      i && i.call(this, n, t, e);
    }),
      (q.shouldComponentUpdate = r);
  }
  return _.__N || _.__;
}
function rn(n, e) {
  var _ = tn(j++, 3);
  !t.__s && bn(_.__H, e) && ((_.__ = n), (_.i = e), q.__H.__h.push(_));
}
function on(n, e) {
  var _ = tn(j++, 4);
  !t.__s && bn(_.__H, e) && ((_.__ = n), (_.i = e), q.__h.push(_));
}
function un(n) {
  return (
    (G = 5),
    cn(function () {
      return { current: n };
    }, [])
  );
}
function ln(n, t, e) {
  (G = 6),
    on(
      function () {
        return "function" == typeof n
          ? (n(t()),
            function () {
              return n(null);
            })
          : n
          ? ((n.current = t()),
            function () {
              return (n.current = null);
            })
          : void 0;
      },
      null == e ? e : e.concat(n)
    );
}
function cn(n, t) {
  var e = tn(j++, 7);
  return bn(e.__H, t) ? ((e.__V = n()), (e.i = t), (e.__h = n), e.__V) : e.__;
}
function an(n, t) {
  return (
    (G = 8),
    cn(function () {
      return n;
    }, t)
  );
}
function sn(n) {
  var t = q.context[n.__c],
    e = tn(j++, 9);
  return (
    (e.c = n),
    t ? (null == e.__ && ((e.__ = !0), t.sub(q)), t.props.value) : n.__
  );
}
function fn(n, e) {
  t.useDebugValue && t.useDebugValue(e ? e(n) : n);
}
function pn(n) {
  var t = tn(j++, 10),
    e = en();
  return (
    (t.__ = n),
    q.componentDidCatch ||
      (q.componentDidCatch = function (n, _) {
        t.__ && t.__(n, _), e[1](n);
      }),
    [
      e[0],
      function () {
        e[1](void 0);
      },
    ]
  );
}
function hn() {
  var n = tn(j++, 11);
  if (!n.__) {
    for (var t = q.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
    var e = t.__m || (t.__m = [0, 0]);
    n.__ = "P" + e[0] + "-" + e[1]++;
  }
  return n.__;
}
function dn() {
  for (var n; (n = z.shift()); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(yn), n.__H.__h.forEach(gn), (n.__H.__h = []);
      } catch (o) {
        (n.__H.__h = []), t.__e(o, n.__v);
      }
}
(t.__b = function (n) {
  (q = null), Q && Q(n);
}),
  (t.__r = function (n) {
    X && X(n), (j = 0);
    var t = (q = n.__c).__H;
    t &&
      (B === q
        ? ((t.__h = []),
          (q.__h = []),
          t.__.forEach(function (n) {
            n.__N && (n.__ = n.__N), (n.__V = J), (n.__N = n.i = void 0);
          }))
        : (t.__h.forEach(yn), t.__h.forEach(gn), (t.__h = []))),
      (B = q);
  }),
  (t.diffed = function (n) {
    Y && Y(n);
    var e = n.__c;
    e &&
      e.__H &&
      (e.__H.__h.length &&
        ((1 !== z.push(e) && K === t.requestAnimationFrame) ||
          ((K = t.requestAnimationFrame) || mn)(dn)),
      e.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i),
          n.__V !== J && (n.__ = n.__V),
          (n.i = void 0),
          (n.__V = J);
      })),
      (B = q = null);
  }),
  (t.__c = function (n, _) {
    _.some(function (n) {
      try {
        n.__h.forEach(yn),
          (n.__h = n.__h.filter(function (n) {
            return !n.__ || gn(n);
          }));
      } catch (e) {
        _.some(function (n) {
          n.__h && (n.__h = []);
        }),
          (_ = []),
          t.__e(e, n.__v);
      }
    }),
      Z && Z(n, _);
  }),
  (t.unmount = function (n) {
    nn && nn(n);
    var e,
      _ = n.__c;
    _ &&
      _.__H &&
      (_.__H.__.forEach(function (n) {
        try {
          yn(n);
        } catch (n) {
          e = n;
        }
      }),
      (_.__H = void 0),
      e && t.__e(e, _.__v));
  });
var vn = "function" == typeof requestAnimationFrame;
function mn(n) {
  var t,
    e = function () {
      clearTimeout(_), vn && cancelAnimationFrame(t), setTimeout(n);
    },
    _ = setTimeout(e, 100);
  vn && (t = requestAnimationFrame(e));
}
function yn(n) {
  var t = q,
    e = n.__c;
  "function" == typeof e && ((n.__c = void 0), e()), (q = t);
}
function gn(n) {
  var t = q;
  (n.__c = n.__()), (q = t);
}
function bn(n, t) {
  return (
    !n ||
    n.length !== t.length ||
    t.some(function (t, e) {
      return t !== n[e];
    })
  );
}
function kn(n, t) {
  return "function" == typeof t ? t(n) : t;
}
var Cn = function (n, t, e, _) {
    var r;
    t[0] = 0;
    for (var o = 1; o < t.length; o++) {
      var i = t[o++],
        u = t[o] ? ((t[0] |= i ? 1 : 2), e[t[o++]]) : t[++o];
      3 === i
        ? (_[0] = u)
        : 4 === i
        ? (_[1] = Object.assign(_[1] || {}, u))
        : 5 === i
        ? ((_[1] = _[1] || {})[t[++o]] = u)
        : 6 === i
        ? (_[1][t[++o]] += u + "")
        : i
        ? ((r = n.apply(u, Cn(n, u, e, ["", null]))),
          _.push(r),
          u[0] ? (t[0] |= 2) : ((t[o - 2] = 0), (t[o] = r)))
        : _.push(u);
    }
    return _;
  },
  xn = new Map();
function En(n) {
  var t = xn.get(this);
  return (
    t || ((t = new Map()), xn.set(this, t)),
    (t = Cn(
      this,
      t.get(n) ||
        (t.set(
          n,
          (t = (function (n) {
            for (
              var t,
                e,
                _ = 1,
                r = "",
                o = "",
                i = [0],
                u = function (n) {
                  1 === _ && (n || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, "")))
                    ? i.push(0, n, r)
                    : 3 === _ && (n || r)
                    ? (i.push(3, n, r), (_ = 2))
                    : 2 === _ && "..." === r && n
                    ? i.push(4, n, 0)
                    : 2 === _ && r && !n
                    ? i.push(5, 0, !0, r)
                    : _ >= 5 &&
                      ((r || (!n && 5 === _)) && (i.push(_, 0, r, e), (_ = 6)),
                      n && (i.push(_, n, 0, e), (_ = 6))),
                    (r = "");
                },
                l = 0;
              l < n.length;
              l++
            ) {
              l && (1 === _ && u(), u(l));
              for (var c = 0; c < n[l].length; c++)
                (t = n[l][c]),
                  1 === _
                    ? "<" === t
                      ? (u(), (i = [i]), (_ = 3))
                      : (r += t)
                    : 4 === _
                    ? "--" === r && ">" === t
                      ? ((_ = 1), (r = ""))
                      : (r = t + r[0])
                    : o
                    ? t === o
                      ? (o = "")
                      : (r += t)
                    : '"' === t || "'" === t
                    ? (o = t)
                    : ">" === t
                    ? (u(), (_ = 1))
                    : _ &&
                      ("=" === t
                        ? ((_ = 5), (e = r), (r = ""))
                        : "/" === t && (_ < 5 || ">" === n[l][c + 1])
                        ? (u(),
                          3 === _ && (i = i[0]),
                          (_ = i),
                          (i = i[0]).push(2, 0, _),
                          (_ = 0))
                        : " " === t || "\t" === t || "\n" === t || "\r" === t
                        ? (u(), (_ = 2))
                        : (r += t)),
                  3 === _ && "!--" === r && ((_ = 4), (i = i[0]));
            }
            return u(), i;
          })(n))
        ),
        t),
      arguments,
      []
    )).length > 1
      ? t
      : t[0]
  );
}
var Hn = En.bind(h);
var Un = {};
function An(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function Pn(n, t, e) {
  var _,
    r = /(?:\?([^#]*))?(#.*)?$/,
    o = n.match(r),
    i = {};
  if (o && o[1])
    for (var u = o[1].split("&"), l = 0; l < u.length; l++) {
      var c = u[l].split("=");
      i[decodeURIComponent(c[0])] = decodeURIComponent(c.slice(1).join("="));
    }
  (n = wn(n.replace(r, ""))), (t = wn(t || ""));
  for (var a = Math.max(n.length, t.length), s = 0; s < a; s++)
    if (t[s] && ":" === t[s].charAt(0)) {
      var f = t[s].replace(/(^:|[+*?]+$)/g, ""),
        p = (t[s].match(/[+*?]+$/) || Un)[0] || "",
        h = ~p.indexOf("+"),
        d = ~p.indexOf("*"),
        v = n[s] || "";
      if (!v && !d && (p.indexOf("?") < 0 || h)) {
        _ = !1;
        break;
      }
      if (((i[f] = decodeURIComponent(v)), h || d)) {
        i[f] = n.slice(s).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[s] !== n[s]) {
      _ = !1;
      break;
    }
  return (!0 === e.default || !1 !== _) && i;
}
function Sn(n, t) {
  return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}
function Nn(n, t) {
  return (
    (n.index = t),
    (n.rank = (function (n) {
      return n.props.default ? 0 : wn(n.props.path).map(Dn).join("");
    })(n)),
    n.props
  );
}
function wn(n) {
  return n.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Dn(n) {
  return ":" == n.charAt(0)
    ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4
    : 5;
}
var Tn = {},
  Rn = [],
  Ln = [],
  Mn = null,
  Wn = { url: In() },
  Vn = $(Wn);
function Fn() {
  var n = sn(Vn);
  if (n === Wn) {
    var t = en()[1];
    rn(function () {
      return (
        Ln.push(t),
        function () {
          return Ln.splice(Ln.indexOf(t), 1);
        }
      );
    }, []);
  }
  return [n, On];
}
function In() {
  var n;
  return (
    "" +
    ((n =
      Mn && Mn.location
        ? Mn.location
        : Mn && Mn.getCurrentLocation
        ? Mn.getCurrentLocation()
        : "undefined" != typeof location
        ? location
        : Tn).pathname || "") +
    (n.search || "")
  );
}
function On(n, t) {
  return (
    void 0 === t && (t = !1),
    "string" != typeof n && n.url && ((t = n.replace), (n = n.url)),
    (function (n) {
      for (var t = Rn.length; t--; ) if (Rn[t].canRoute(n)) return !0;
      return !1;
    })(n) &&
      (function (n, t) {
        void 0 === t && (t = "push"),
          Mn && Mn[t]
            ? Mn[t](n)
            : "undefined" != typeof history &&
              history[t + "State"] &&
              history[t + "State"](null, null, n);
      })(n, t ? "replace" : "push"),
    $n(n)
  );
}
function $n(n) {
  for (var t = !1, e = 0; e < Rn.length; e++) Rn[e].routeTo(n) && (t = !0);
  return t;
}
function jn(n) {
  if (n && n.getAttribute) {
    var t = n.getAttribute("href"),
      e = n.getAttribute("target");
    if (t && t.match(/^\//g) && (!e || e.match(/^_?self$/i))) return On(t);
  }
}
function qn(n) {
  return (
    n.stopImmediatePropagation && n.stopImmediatePropagation(),
    n.stopPropagation && n.stopPropagation(),
    n.preventDefault(),
    !1
  );
}
function Bn(n) {
  if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
    var t = n.target;
    do {
      if ("a" === t.localName && t.getAttribute("href")) {
        if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
        if (jn(t)) return qn(n);
      }
    } while ((t = t.parentNode));
  }
}
var Kn = !1;
function Gn(n) {
  n.history && (Mn = n.history), (this.state = { url: n.url || In() });
}
An((Gn.prototype = new y()), {
  shouldComponentUpdate: function (n) {
    return (
      !0 !== n.static ||
      n.url !== this.props.url ||
      n.onChange !== this.props.onChange
    );
  },
  canRoute: function (n) {
    var t = H(this.props.children);
    return void 0 !== this.g(t, n);
  },
  routeTo: function (n) {
    this.setState({ url: n });
    var t = this.canRoute(n);
    return this.p || this.forceUpdate(), t;
  },
  componentWillMount: function () {
    this.p = !0;
  },
  componentDidMount: function () {
    var n = this;
    Kn ||
      ((Kn = !0),
      Mn ||
        addEventListener("popstate", function () {
          $n(In());
        }),
      addEventListener("click", Bn)),
      Rn.push(this),
      Mn &&
        (this.u = Mn.listen(function (t) {
          var e = t.location || t;
          n.routeTo("" + (e.pathname || "") + (e.search || ""));
        })),
      (this.p = !1);
  },
  componentWillUnmount: function () {
    "function" == typeof this.u && this.u(), Rn.splice(Rn.indexOf(this), 1);
  },
  componentWillUpdate: function () {
    this.p = !0;
  },
  componentDidUpdate: function () {
    this.p = !1;
  },
  g: function (n, t) {
    n = n.filter(Nn).sort(Sn);
    for (var e = 0; e < n.length; e++) {
      var _ = n[e],
        r = Pn(t, _.props.path, _.props);
      if (r) return [_, r];
    }
  },
  render: function (n, t) {
    var e,
      _,
      r = n.onChange,
      o = t.url,
      i = this.c,
      u = this.g(H(n.children), o);
    if (
      (u &&
        (_ = O(
          u[0],
          An(An({ url: o, matches: (e = u[1]) }, e), {
            key: void 0,
            ref: void 0,
          })
        )),
      o !== (i && i.url))
    ) {
      An(
        Wn,
        (i = this.c =
          {
            url: o,
            previous: i && i.url,
            current: _,
            path: _ ? _.props.path : null,
            matches: e,
          })
      ),
        (i.router = this),
        (i.active = _ ? [_] : []);
      for (var l = Ln.length; l--; ) Ln[l]({});
      "function" == typeof r && r(i);
    }
    return h(Vn.Provider, { value: i }, _);
  },
});
var zn = function (n) {
    return h("a", An({ onClick: Bn }, n));
  },
  Jn = function (n) {
    return h(n.component, n);
  };
export {
  y as Component,
  m as Fragment,
  zn as Link,
  Jn as Route,
  Gn as Router,
  O as cloneElement,
  $ as createContext,
  h as createElement,
  v as createRef,
  Pn as exec,
  In as getCurrentUrl,
  h,
  Hn as html,
  I as hydrate,
  _ as isValidElement,
  t as options,
  F as render,
  On as route,
  H as toChildArray,
  an as useCallback,
  sn as useContext,
  fn as useDebugValue,
  rn as useEffect,
  pn as useErrorBoundary,
  hn as useId,
  ln as useImperativeHandle,
  on as useLayoutEffect,
  cn as useMemo,
  _n as useReducer,
  un as useRef,
  Fn as useRouter,
  en as useState,
};
