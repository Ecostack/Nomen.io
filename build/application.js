"use strict";

if (function(O, U, t) {
    function J(b) {
        return function() {
            var c, a = arguments[0];
            for (c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.4.3/" + (b ? b + "/" : "") + a, 
            a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var e, d = encodeURIComponent;
                e = arguments[a], e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e, 
                c += d(e);
            }
            return Error(c);
        };
    }
    function Ea(b) {
        if (null == b || Wa(b)) return !1;
        var a = "length" in Object(b) && b.length;
        return b.nodeType === qa && a ? !0 : L(b) || G(b) || 0 === a || "number" == typeof a && a > 0 && a - 1 in b;
    }
    function m(b, a, c) {
        var d, e;
        if (b) if (z(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (G(b) || Ea(b)) {
            var f = "object" != typeof b;
            for (d = 0, e = b.length; e > d; d++) (f || d in b) && a.call(c, b[d], d, b);
        } else if (b.forEach && b.forEach !== m) b.forEach(a, c, b); else if (nc(b)) for (d in b) a.call(c, b[d], d, b); else if ("function" == typeof b.hasOwnProperty) for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b); else for (d in b) Xa.call(b, d) && a.call(c, b[d], d, b);
        return b;
    }
    function oc(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d;
    }
    function pc(b) {
        return function(a, c) {
            b(c, a);
        };
    }
    function Ud() {
        return ++nb;
    }
    function qc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey;
    }
    function Nb(b, a, c) {
        for (var d = b.$$hashKey, e = 0, f = a.length; f > e; ++e) {
            var g = a[e];
            if (H(g) || z(g)) for (var h = Object.keys(g), l = 0, k = h.length; k > l; l++) {
                var n = h[l], r = g[n];
                c && H(r) ? aa(r) ? b[n] = new Date(r.valueOf()) : (H(b[n]) || (b[n] = G(r) ? [] : {}), 
                Nb(b[n], [ r ], !0)) : b[n] = r;
            }
        }
        return qc(b, d), b;
    }
    function P(b) {
        return Nb(b, za.call(arguments, 1), !1);
    }
    function Vd(b) {
        return Nb(b, za.call(arguments, 1), !0);
    }
    function W(b) {
        return parseInt(b, 10);
    }
    function Ob(b, a) {
        return P(Object.create(b), a);
    }
    function v() {}
    function Ya(b) {
        return b;
    }
    function ra(b) {
        return function() {
            return b;
        };
    }
    function rc(b) {
        return z(b.toString) && b.toString !== Object.prototype.toString;
    }
    function A(b) {
        return "undefined" == typeof b;
    }
    function w(b) {
        return "undefined" != typeof b;
    }
    function H(b) {
        return null !== b && "object" == typeof b;
    }
    function nc(b) {
        return null !== b && "object" == typeof b && !sc(b);
    }
    function L(b) {
        return "string" == typeof b;
    }
    function V(b) {
        return "number" == typeof b;
    }
    function aa(b) {
        return "[object Date]" === sa.call(b);
    }
    function z(b) {
        return "function" == typeof b;
    }
    function Za(b) {
        return "[object RegExp]" === sa.call(b);
    }
    function Wa(b) {
        return b && b.window === b;
    }
    function $a(b) {
        return b && b.$evalAsync && b.$watch;
    }
    function ab(b) {
        return "boolean" == typeof b;
    }
    function tc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
    }
    function Wd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++) a[b[c]] = !0;
        return a;
    }
    function ta(b) {
        return M(b.nodeName || b[0] && b[0].nodeName);
    }
    function bb(b, a) {
        var c = b.indexOf(a);
        return c >= 0 && b.splice(c, 1), c;
    }
    function fa(b, a, c, d) {
        if (Wa(b) || $a(b)) throw Fa("cpws");
        if (uc.test(sa.call(a))) throw Fa("cpta");
        if (a) {
            if (b === a) throw Fa("cpi");
            c = c || [], d = d || [], H(b) && (c.push(b), d.push(a));
            var e;
            if (G(b)) for (e = a.length = 0; e < b.length; e++) a.push(fa(b[e], null, c, d)); else {
                var f = a.$$hashKey;
                if (G(a) ? a.length = 0 : m(a, function(b, c) {
                    delete a[c];
                }), nc(b)) for (e in b) a[e] = fa(b[e], null, c, d); else if (b && "function" == typeof b.hasOwnProperty) for (e in b) b.hasOwnProperty(e) && (a[e] = fa(b[e], null, c, d)); else for (e in b) Xa.call(b, e) && (a[e] = fa(b[e], null, c, d));
                qc(a, f);
            }
        } else if (a = b, H(b)) {
            if (c && -1 !== (f = c.indexOf(b))) return d[f];
            if (G(b)) return fa(b, [], c, d);
            if (uc.test(sa.call(b))) a = new b.constructor(b); else if (aa(b)) a = new Date(b.getTime()); else {
                if (!Za(b)) return e = Object.create(sc(b)), fa(b, e, c, d);
                a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex;
            }
            d && (c.push(b), d.push(a));
        }
        return a;
    }
    function ia(b, a) {
        if (G(b)) {
            a = a || [];
            for (var c = 0, d = b.length; d > c; c++) a[c] = b[c];
        } else if (H(b)) for (c in a = a || {}, b) ("$" !== c.charAt(0) || "$" !== c.charAt(1)) && (a[c] = b[c]);
        return a || b;
    }
    function ka(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var d, c = typeof b;
        if (c == typeof a && "object" == c) {
            if (!G(b)) {
                if (aa(b)) return aa(a) ? ka(b.getTime(), a.getTime()) : !1;
                if (Za(b)) return Za(a) ? b.toString() == a.toString() : !1;
                if ($a(b) || $a(a) || Wa(b) || Wa(a) || G(a) || aa(a) || Za(a)) return !1;
                c = ga();
                for (d in b) if ("$" !== d.charAt(0) && !z(b[d])) {
                    if (!ka(b[d], a[d])) return !1;
                    c[d] = !0;
                }
                for (d in a) if (!(d in c || "$" === d.charAt(0) || a[d] === t || z(a[d]))) return !1;
                return !0;
            }
            if (!G(a)) return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; c > d; d++) if (!ka(b[d], a[d])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function cb(b, a, c) {
        return b.concat(za.call(a, c));
    }
    function vc(b, a) {
        var c = 2 < arguments.length ? za.call(arguments, 2) : [];
        return !z(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, cb(c, arguments, 0)) : a.apply(b, c);
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b);
        };
    }
    function Xd(b, a) {
        var c = a;
        return "string" == typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Wa(a) ? c = "$WINDOW" : a && U === a ? c = "$DOCUMENT" : $a(a) && (c = "$SCOPE"), 
        c;
    }
    function db(b, a) {
        return "undefined" == typeof b ? t : (V(a) || (a = a ? 2 : null), JSON.stringify(b, Xd, a));
    }
    function wc(b) {
        return L(b) ? JSON.parse(b) : b;
    }
    function xc(b, a) {
        var c = Date.parse("Jan 01, 1970 00:00:00 " + b) / 6e4;
        return isNaN(c) ? a : c;
    }
    function Pb(b, a, c) {
        c = c ? -1 : 1;
        var d = xc(a, b.getTimezoneOffset());
        return a = b, b = c * (d - b.getTimezoneOffset()), a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), 
        a;
    }
    function ua(b) {
        b = y(b).clone();
        try {
            b.empty();
        } catch (a) {}
        var c = y("<div>").append(b).html();
        try {
            return b[0].nodeType === Na ? M(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + M(b);
            });
        } catch (d) {
            return M(c);
        }
    }
    function yc(b) {
        try {
            return decodeURIComponent(b);
        } catch (a) {}
    }
    function zc(b) {
        var c, d, a = {};
        return m((b || "").split("&"), function(b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = yc(c[0]), w(d) && (b = w(c[1]) ? yc(c[1]) : !0, 
            Xa.call(a, d) ? G(a[d]) ? a[d].push(b) : a[d] = [ a[d], b ] : a[d] = b));
        }), a;
    }
    function Qb(b) {
        var a = [];
        return m(b, function(b, d) {
            G(b) ? m(b, function(b) {
                a.push(ma(d, !0) + (!0 === b ? "" : "=" + ma(b, !0)));
            }) : a.push(ma(d, !0) + (!0 === b ? "" : "=" + ma(b, !0)));
        }), a.length ? a.join("&") : "";
    }
    function ob(b) {
        return ma(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function ma(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+");
    }
    function Yd(b, a) {
        var c, d, e = Oa.length;
        for (d = 0; e > d; ++d) if (c = Oa[d] + a, L(c = b.getAttribute(c))) return c;
        return null;
    }
    function Zd(b, a) {
        var c, d, e = {};
        m(Oa, function(a) {
            a += "app", !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
        }), m(Oa, function(a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a));
        }), c && (e.strictDi = null !== Yd(c, "strict-di"), a(c, d ? [ d ] : [], e));
    }
    function Ac(b, a, c) {
        H(c) || (c = {}), c = P({
            strictDi: !1
        }, c);
        var d = function() {
            if (b = y(b), b.injector()) {
                var d = b[0] === U ? "document" : ua(b);
                throw Fa("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            return a = a || [], a.unshift([ "$provide", function(a) {
                a.value("$rootElement", b);
            } ]), c.debugInfoEnabled && a.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]), a.unshift("ng"), d = eb(a, c.strictDi), d.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), d;
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        return O && e.test(O.name) && (c.debugInfoEnabled = !0, O.name = O.name.replace(e, "")), 
        O && !f.test(O.name) ? d() : (O.name = O.name.replace(f, ""), ca.resumeBootstrap = function(b) {
            return m(b, function(b) {
                a.push(b);
            }), d();
        }, void (z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()));
    }
    function $d() {
        O.name = "NG_ENABLE_DEBUG_INFO!" + O.name, O.location.reload();
    }
    function ae(b) {
        if (b = ca.element(b).injector(), !b) throw Fa("test");
        return b.get("$$testability");
    }
    function Bc(b, a) {
        return a = a || "_", b.replace(be, function(b, d) {
            return (d ? a : "") + b.toLowerCase();
        });
    }
    function ce() {
        var b;
        if (!Cc) {
            var a = pb();
            la = O.jQuery, w(a) && (la = null === a ? t : O[a]), la && la.fn.on ? (y = la, P(la.fn, {
                scope: Pa.scope,
                isolateScope: Pa.isolateScope,
                controller: Pa.controller,
                injector: Pa.injector,
                inheritedData: Pa.inheritedData
            }), b = la.cleanData, la.cleanData = function(a) {
                var d;
                if (Rb) Rb = !1; else for (var f, e = 0; null != (f = a[e]); e++) (d = la._data(f, "events")) && d.$destroy && la(f).triggerHandler("$destroy");
                b(a);
            }) : y = Q, ca.element = y, Cc = !0;
        }
    }
    function Sb(b, a, c) {
        if (!b) throw Fa("areq", a || "?", c || "required");
        return b;
    }
    function Qa(b, a, c) {
        return c && G(b) && (b = b[b.length - 1]), Sb(z(b), a, "not a function, got " + (b && "object" == typeof b ? b.constructor.name || "Object" : typeof b)), 
        b;
    }
    function Ra(b, a) {
        if ("hasOwnProperty" === b) throw Fa("badname", a);
    }
    function Dc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; f > g; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && z(b) ? vc(e, b) : b;
    }
    function qb(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [ a ];
        do {
            if (a = a.nextSibling, !a) break;
            c.push(a);
        } while (a !== b);
        return y(c);
    }
    function ga() {
        return Object.create(null);
    }
    function de(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var c = J("$injector"), d = J("ng");
        return b = a(b, "angular", Object), b.$$minErr = b.$$minErr || J, a(b, "module", function() {
            var b = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw d("badname", "module");
                return g && b.hasOwnProperty(f) && (b[f] = null), a(b, f, function() {
                    function a(b, c, e, f) {
                        return f || (f = d), function() {
                            return f[e || "push"]([ b, c, arguments ]), C;
                        };
                    }
                    function b(a, c) {
                        return function(b, e) {
                            return e && z(e) && (e.$$moduleName = f), d.push([ a, c, arguments ]), C;
                        };
                    }
                    if (!g) throw c("nomod", f);
                    var d = [], e = [], s = [], x = a("$injector", "invoke", "push", e), C = {
                        _invokeQueue: d,
                        _configBlocks: e,
                        _runBlocks: s,
                        requires: g,
                        name: f,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator"),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        config: x,
                        run: function(a) {
                            return s.push(a), this;
                        }
                    };
                    return h && x(h), C;
                });
            };
        });
    }
    function ee(b) {
        P(b, {
            bootstrap: Ac,
            copy: fa,
            extend: P,
            merge: Vd,
            equals: ka,
            element: y,
            forEach: m,
            injector: eb,
            noop: v,
            bind: vc,
            toJson: db,
            fromJson: wc,
            identity: Ya,
            isUndefined: A,
            isDefined: w,
            isString: L,
            isFunction: z,
            isObject: H,
            isNumber: V,
            isElement: tc,
            isArray: G,
            version: fe,
            isDate: aa,
            lowercase: M,
            uppercase: rb,
            callbacks: {
                counter: 0
            },
            getTestability: ae,
            $$minErr: J,
            $$csp: fb,
            reloadWithDebugInfo: $d
        }), gb = de(O);
        try {
            gb("ngLocale");
        } catch (a) {
            gb("ngLocale", []).provider("$locale", ge);
        }
        gb("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: he
            }), a.provider("$compile", Ec).directive({
                a: ie,
                input: Fc,
                textarea: Fc,
                form: je,
                script: ke,
                select: le,
                style: me,
                option: ne,
                ngBind: oe,
                ngBindHtml: pe,
                ngBindTemplate: qe,
                ngClass: re,
                ngClassEven: se,
                ngClassOdd: te,
                ngCloak: ue,
                ngController: ve,
                ngForm: we,
                ngHide: xe,
                ngIf: ye,
                ngInclude: ze,
                ngInit: Ae,
                ngNonBindable: Be,
                ngPluralize: Ce,
                ngRepeat: De,
                ngShow: Ee,
                ngStyle: Fe,
                ngSwitch: Ge,
                ngSwitchWhen: He,
                ngSwitchDefault: Ie,
                ngOptions: Je,
                ngTransclude: Ke,
                ngModel: Le,
                ngList: Me,
                ngChange: Ne,
                pattern: Gc,
                ngPattern: Gc,
                required: Hc,
                ngRequired: Hc,
                minlength: Ic,
                ngMinlength: Ic,
                maxlength: Jc,
                ngMaxlength: Jc,
                ngValue: Oe,
                ngModelOptions: Pe
            }).directive({
                ngInclude: Qe
            }).directive(sb).directive(Kc), a.provider({
                $anchorScroll: Re,
                $animate: Se,
                $$animateQueue: Te,
                $$AnimateRunner: Ue,
                $browser: Ve,
                $cacheFactory: We,
                $controller: Xe,
                $document: Ye,
                $exceptionHandler: Ze,
                $filter: Lc,
                $interpolate: $e,
                $interval: af,
                $http: bf,
                $httpParamSerializer: cf,
                $httpParamSerializerJQLike: df,
                $httpBackend: ef,
                $location: ff,
                $log: gf,
                $parse: hf,
                $rootScope: jf,
                $q: kf,
                $$q: lf,
                $sce: mf,
                $sceDelegate: nf,
                $sniffer: of,
                $templateCache: pf,
                $templateRequest: qf,
                $$testability: rf,
                $timeout: sf,
                $window: tf,
                $$rAF: uf,
                $$jqLite: vf,
                $$HashMap: wf,
                $$cookieReader: xf
            });
        } ]);
    }
    function hb(b) {
        return b.replace(yf, function(a, b, d, e) {
            return e ? d.toUpperCase() : d;
        }).replace(zf, "Moz$1");
    }
    function Mc(b) {
        return b = b.nodeType, b === qa || !b || 9 === b;
    }
    function Nc(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Tb.test(b)) {
            for (c = c || e.appendChild(a.createElement("div")), d = (Af.exec(b) || [ "", "" ])[1].toLowerCase(), 
            d = na[d] || na._default, c.innerHTML = d[1] + b.replace(Bf, "<$1></$2>") + d[2], 
            d = d[0]; d--; ) c = c.lastChild;
            f = cb(f, c.childNodes), c = e.firstChild, c.textContent = "";
        } else f.push(a.createTextNode(b));
        return e.textContent = "", e.innerHTML = "", m(f, function(a) {
            e.appendChild(a);
        }), e;
    }
    function Q(b) {
        if (b instanceof Q) return b;
        var a;
        if (L(b) && (b = R(b), a = !0), !(this instanceof Q)) {
            if (a && "<" != b.charAt(0)) throw Ub("nosel");
            return new Q(b);
        }
        if (a) {
            a = U;
            var c;
            b = (c = Cf.exec(b)) ? [ a.createElement(c[1]) ] : (c = Nc(b, a)) ? c.childNodes : [];
        }
        Oc(this, b);
    }
    function Vb(b) {
        return b.cloneNode(!0);
    }
    function tb(b, a) {
        if (a || ub(b), b.querySelectorAll) for (var c = b.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) ub(c[d]);
    }
    function Pc(b, a, c, d) {
        if (w(d)) throw Ub("offargs");
        var e = (d = vb(b)) && d.events, f = d && d.handle;
        if (f) if (a) m(a.split(" "), function(a) {
            if (w(c)) {
                var d = e[a];
                if (bb(d || [], c), d && 0 < d.length) return;
            }
            b.removeEventListener(a, f, !1), delete e[a];
        }); else for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a];
    }
    function ub(b, a) {
        var c = b.ng339, d = c && ib[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), 
        Pc(b)), delete ib[c], b.ng339 = t));
    }
    function vb(b, a) {
        var c = b.ng339, c = c && ib[c];
        return a && !c && (b.ng339 = c = ++Df, c = ib[c] = {
            events: {},
            data: {},
            handle: t
        }), c;
    }
    function Wb(b, a, c) {
        if (Mc(b)) {
            var d = w(c), e = !d && a && !H(a), f = !a;
            if (b = (b = vb(b, !e)) && b.data, d) b[a] = c; else {
                if (f) return b;
                if (e) return b && b[a];
                P(b, a);
            }
        }
    }
    function wb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
    }
    function xb(b, a) {
        a && b.setAttribute && m(a.split(" "), function(a) {
            b.setAttribute("class", R((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + R(a) + " ", " ")));
        });
    }
    function yb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            m(a.split(" "), function(a) {
                a = R(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), b.setAttribute("class", R(c));
        }
    }
    function Oc(b, a) {
        if (a) if (a.nodeType) b[b.length++] = a; else {
            var c = a.length;
            if ("number" == typeof c && a.window !== a) {
                if (c) for (var d = 0; c > d; d++) b[b.length++] = a[d];
            } else b[b.length++] = a;
        }
    }
    function Qc(b, a) {
        return zb(b, "$" + (a || "ngController") + "Controller");
    }
    function zb(b, a, c) {
        for (9 == b.nodeType && (b = b.documentElement), a = G(a) ? a : [ a ]; b; ) {
            for (var d = 0, e = a.length; e > d; d++) if ((c = y.data(b, a[d])) !== t) return c;
            b = b.parentNode || 11 === b.nodeType && b.host;
        }
    }
    function Rc(b) {
        for (tb(b, !0); b.firstChild; ) b.removeChild(b.firstChild);
    }
    function Xb(b, a) {
        a || tb(b);
        var c = b.parentNode;
        c && c.removeChild(b);
    }
    function Ef(b, a) {
        a = a || O, "complete" === a.document.readyState ? a.setTimeout(b) : y(a).on("load", b);
    }
    function Sc(b, a) {
        var c = Ab[a.toLowerCase()];
        return c && Tc[ta(b)] && c;
    }
    function Ff(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Uc[a];
    }
    function Gf(b, a) {
        var c = function(c, e) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented;
            };
            var f = a[e || c.type], g = f ? f.length : 0;
            if (g) {
                if (A(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), h && h.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped;
                }, g > 1 && (f = ia(f));
                for (var l = 0; g > l; l++) c.isImmediatePropagationStopped() || f[l].call(b, c);
            }
        };
        return c.elem = b, c;
    }
    function vf() {
        this.$get = function() {
            return P(Q, {
                hasClass: function(b, a) {
                    return b.attr && (b = b[0]), wb(b, a);
                },
                addClass: function(b, a) {
                    return b.attr && (b = b[0]), yb(b, a);
                },
                removeClass: function(b, a) {
                    return b.attr && (b = b[0]), xb(b, a);
                }
            });
        };
    }
    function Ga(b, a) {
        var c = b && b.$$hashKey;
        return c ? ("function" == typeof c && (c = b.$$hashKey()), c) : (c = typeof b, c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Ud)() : c + ":" + b);
    }
    function Sa(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        m(b, this.put, this);
    }
    function Hf(b) {
        return (b = b.toString().replace(Vc, "").match(Wc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function eb(b, a) {
        function c(a) {
            return function(b, c) {
                return H(b) ? void m(b, pc(a)) : a(b, c);
            };
        }
        function d(a, b) {
            if (Ra(a, "service"), (z(b) || G(b)) && (b = s.instantiate(b)), !b.$get) throw Ha("pget", a);
            return r[a + "Provider"] = b;
        }
        function e(a, b) {
            return function() {
                var c = C.invoke(b, this);
                if (A(c)) throw Ha("undef", a);
                return c;
            };
        }
        function f(a, b, c) {
            return d(a, {
                $get: !1 !== c ? e(a, b) : b
            });
        }
        function g(a) {
            var c, b = [];
            return m(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var e = a[b], f = s.get(e[0]);
                        f[e[1]].apply(f, e[2]);
                    }
                }
                if (!n.get(a)) {
                    n.put(a, !0);
                    try {
                        L(a) ? (c = gb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), 
                        d(c._configBlocks)) : z(a) ? b.push(s.invoke(a)) : G(a) ? b.push(s.invoke(a)) : Qa(a, "module");
                    } catch (e) {
                        throw G(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        Ha("modulerr", a, e.stack || e.message || e);
                    }
                }
            }), b;
        }
        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l) throw Ha("cdep", a + " <- " + k.join(" <- "));
                    return b[a];
                }
                try {
                    return k.unshift(a), b[a] = l, b[a] = c(a, e);
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift();
                }
            }
            function e(b, c, f, g) {
                "string" == typeof f && (g = f, f = null);
                var l, s, n, h = [], k = eb.$$annotate(b, a, g);
                for (s = 0, l = k.length; l > s; s++) {
                    if (n = k[s], "string" != typeof n) throw Ha("itkn", n);
                    h.push(f && f.hasOwnProperty(n) ? f[n] : d(n, g));
                }
                return G(b) && (b = b[l]), b.apply(c, h);
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((G(a) ? a[a.length - 1] : a).prototype || null);
                    return a = e(a, d, b, c), H(a) || z(a) ? a : d;
                },
                get: d,
                annotate: eb.$$annotate,
                has: function(a) {
                    return r.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
                }
            };
        }
        a = !0 === a;
        var l = {}, k = [], n = new Sa([], !0), r = {
            $provide: {
                provider: c(d),
                factory: c(f),
                service: c(function(a, b) {
                    return f(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: c(function(a, b) {
                    return f(a, ra(b), !1);
                }),
                constant: c(function(a, b) {
                    Ra(a, "constant"), r[a] = b, x[a] = b;
                }),
                decorator: function(a, b) {
                    var c = s.get(a + "Provider"), d = c.$get;
                    c.$get = function() {
                        var a = C.invoke(d, c);
                        return C.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, s = r.$injector = h(r, function(a, b) {
            throw ca.isString(b) && k.push(b), Ha("unpr", k.join(" <- "));
        }), x = {}, C = x.$injector = h(x, function(a, b) {
            var c = s.get(a + "Provider", b);
            return C.invoke(c.$get, c, t, a);
        });
        return m(g(b), function(a) {
            a && C.invoke(a);
        }), C;
    }
    function Re() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === ta(a) ? (b = a, !0) : void 0;
                }), b;
            }
            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset, z(c) ? c = c() : tc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0), 
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
                } else a.scrollTo(0, 0);
            }
            function g(a) {
                a = L(a) ? a : c.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
            }
            var h = a.document;
            return b && d.$watch(function() {
                return c.hash();
            }, function(a, b) {
                a === b && "" === a || Ef(function() {
                    d.$evalAsync(g);
                });
            }), g;
        } ];
    }
    function jb(b, a) {
        return b || a ? b ? a ? (G(b) && (b = b.join(" ")), G(a) && (a = a.join(" ")), b + " " + a) : b : a : "";
    }
    function If(b) {
        L(b) && (b = b.split(" "));
        var a = ga();
        return m(b, function(b) {
            b.length && (a[b] = !0);
        }), a;
    }
    function Ia(b) {
        return H(b) ? b : {};
    }
    function Jf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, za.call(arguments, 1));
            } finally {
                if (C--, 0 === C) for (;F.length; ) try {
                    F.pop()();
                } catch (b) {
                    c.error(b);
                }
            }
        }
        function f() {
            g(), h();
        }
        function g() {
            a: {
                try {
                    u = n.state;
                    break a;
                } catch (a) {}
                u = void 0;
            }
            u = A(u) ? null : u, ka(u, D) && (u = D), D = u;
        }
        function h() {
            (K !== l.url() || p !== u) && (K = l.url(), p = u, m(B, function(a) {
                a(l.url(), u);
            }));
        }
        var l = this, k = b.location, n = b.history, r = b.setTimeout, s = b.clearTimeout, x = {};
        l.isMock = !1;
        var C = 0, F = [];
        l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function() {
            C++;
        }, l.notifyWhenNoOutstandingRequests = function(a) {
            0 === C ? a() : F.push(a);
        };
        var u, p, K = k.href, q = a.find("base"), I = null;
        g(), p = u, l.url = function(a, c, e) {
            if (A(e) && (e = null), k !== b.location && (k = b.location), n !== b.history && (n = b.history), 
            a) {
                var f = p === e;
                if (K === a && (!d.history || f)) return l;
                var h = K && Ja(K) === Ja(a);
                return K = a, p = e, !d.history || h && f ? ((!h || I) && (I = a), c ? k.replace(a) : h ? (c = k, 
                e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e), c.hash = a) : k.href = a) : (n[c ? "replaceState" : "pushState"](e, "", a), 
                g(), p = u), l;
            }
            return I || k.href.replace(/%27/g, "'");
        }, l.state = function() {
            return u;
        };
        var B = [], N = !1, D = null;
        l.onUrlChange = function(a) {
            return N || (d.history && y(b).on("popstate", f), y(b).on("hashchange", f), N = !0), 
            B.push(a), a;
        }, l.$$applicationDestroyed = function() {
            y(b).off("hashchange popstate", f);
        }, l.$$checkUrlChange = h, l.baseHref = function() {
            var a = q.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        }, l.defer = function(a, b) {
            var c;
            return C++, c = r(function() {
                delete x[c], e(a);
            }, b || 0), x[c] = !0, c;
        }, l.defer.cancel = function(a) {
            return x[a] ? (delete x[a], s(a), e(v), !0) : !1;
        };
    }
    function Ve() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new Jf(b, d, a, c);
        } ];
    }
    function We() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != r && (s ? s == a && (s = a.n) : s = a, f(a.n, a.p), f(a, r), r = a, r.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (b in a) throw J("$cacheFactory")("iid", b);
                var g = 0, h = P({}, d, {
                    id: b
                }), l = {}, k = d && d.capacity || Number.MAX_VALUE, n = {}, r = null, s = null;
                return a[b] = {
                    put: function(a, b) {
                        if (!A(b)) {
                            if (k < Number.MAX_VALUE) {
                                var c = n[a] || (n[a] = {
                                    key: a
                                });
                                e(c);
                            }
                            return a in l || g++, l[a] = b, g > k && this.remove(s.key), b;
                        }
                    },
                    get: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b) return;
                            e(b);
                        }
                        return l[a];
                    },
                    remove: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = n[a];
                            if (!b) return;
                            b == r && (r = b.p), b == s && (s = b.n), f(b.n, b.p), delete n[a];
                        }
                        delete l[a], g--;
                    },
                    removeAll: function() {
                        l = {}, g = 0, n = {}, r = s = null;
                    },
                    destroy: function() {
                        n = h = l = null, delete a[b];
                    },
                    info: function() {
                        return P({}, h, {
                            size: g
                        });
                    }
                };
            }
            var a = {};
            return b.info = function() {
                var b = {};
                return m(a, function(a, e) {
                    b[e] = a.info();
                }), b;
            }, b.get = function(b) {
                return a[b];
            }, b;
        };
    }
    function pf() {
        this.$get = [ "$cacheFactory", function(b) {
            return b("templates");
        } ];
    }
    function Ec(b, a) {
        function c(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            return m(a, function(a, f) {
                var g = a.match(d);
                if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                };
            }), e;
        }
        function d(a) {
            var b = a.charAt(0);
            if (!b || b !== M(b)) throw ea("baddir", a);
            if (a !== a.trim()) throw ea("baddir", a);
        }
        var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = Wd("ngSrc,ngSrcset,src,srcset"), l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, k = /^(on[a-z]+|formaction)$/;
        this.directive = function s(a, f) {
            return Ra(a, "directive"), L(a) ? (d(a), Sb(f, "directiveFactory"), e.hasOwnProperty(a) || (e[a] = [], 
            b.factory(a + "Directive", [ "$injector", "$exceptionHandler", function(b, d) {
                var f = [];
                return m(e[a], function(e, g) {
                    try {
                        var h = b.invoke(e);
                        z(h) ? h = {
                            compile: ra(h)
                        } : !h.compile && h.link && (h.compile = ra(h.link)), h.priority = h.priority || 0, 
                        h.index = g, h.name = h.name || a, h.require = h.require || h.controller && h.name, 
                        h.restrict = h.restrict || "EA";
                        var k = h, l = h, s = h.name, n = {
                            isolateScope: null,
                            bindToController: null
                        };
                        if (H(l.scope) && (!0 === l.bindToController ? (n.bindToController = c(l.scope, s, !0), 
                        n.isolateScope = {}) : n.isolateScope = c(l.scope, s, !1)), H(l.bindToController) && (n.bindToController = c(l.bindToController, s, !0)), 
                        H(n.bindToController)) {
                            var C = l.controller, $ = l.controllerAs;
                            if (!C) throw ea("noctrl", s);
                            var ha;
                            a: if ($ && L($)) ha = $; else {
                                if (L(C)) {
                                    var m = Xc.exec(C);
                                    if (m) {
                                        ha = m[3];
                                        break a;
                                    }
                                }
                                ha = void 0;
                            }
                            if (!ha) throw ea("noident", s);
                        }
                        var q = k.$$bindings = n;
                        H(q.isolateScope) && (h.$$isolateBindings = q.isolateScope), h.$$moduleName = e.$$moduleName, 
                        f.push(h);
                    } catch (t) {
                        d(t);
                    }
                }), f;
            } ])), e[a].push(f)) : m(a, pc(s)), this;
        }, this.aHrefSanitizationWhitelist = function(b) {
            return w(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(b) {
            return w(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
        };
        var n = !0;
        this.debugInfoEnabled = function(a) {
            return w(a) ? (n = a, this) : n;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, d, u, p, K, q, I, B, N) {
            function D(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function Z(a, b, c, d, e) {
                a instanceof y || (a = y(a)), m(a, function(b, c) {
                    b.nodeType == Na && b.nodeValue.match(/\S+/) && (a[c] = y(b).wrap("<span></span>").parent()[0]);
                });
                var f = S(a, b, a, c, d, e);
                Z.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    Sb(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                    if (d = d.futureParentElement, e && e.$$boundTransclude && (e = e.$$boundTransclude), 
                    g || (g = (d = d && d[0]) && "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html"), 
                    d = "html" !== g ? y(Yb(g, y("<div>").append(a).html())) : c ? Pa.clone.call(a) : a, 
                    h) for (var k in h) d.data("$" + k + "Controller", h[k].instance);
                    return Z.$$addScopeInfo(d, b), c && c(d, b), f && f(b, d, d, e), d;
                };
            }
            function S(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, s, n, B, C;
                    if (p) for (C = Array(c.length), s = 0; s < h.length; s += 3) f = h[s], C[f] = c[f]; else C = c;
                    for (s = 0, n = h.length; n > s; ) k = C[h[s++]], c = h[s++], f = h[s++], c ? (c.scope ? (l = a.$new(), 
                    Z.$$addScopeInfo(y(k), l), (B = c.$$destroyBindings) && (c.$$destroyBindings = null, 
                    l.$on("$destroyed", B))) : l = a, B = c.transcludeOnThisElement ? $(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? $(a, b) : null, 
                    c(f, l, k, d, B, c)) : f && f(a, k.childNodes, t, e);
                }
                for (var k, l, s, n, p, h = [], B = 0; B < a.length; B++) k = new aa(), l = ha(a[B], [], k, 0 === B ? d : t, e), 
                (f = l.length ? E(l, a[B], k, b, c, null, [], [], f) : null) && f.scope && Z.$$addScopeClass(k.$$element), 
                k = f && f.terminal || !(s = a[B].childNodes) || !s.length ? null : S(s, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), 
                (f || k) && (h.push(B, f, k), n = !0, p = p || f), f = null;
                return n ? g : null;
            }
            function $(a, b, c) {
                return function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    });
                };
            }
            function ha(a, b, c, d, e) {
                var k, h = c.$attr;
                switch (a.nodeType) {
                  case qa:
                    w(b, wa(ta(a)), "E", d, e);
                    for (var l, s, n, p = a.attributes, B = 0, C = p && p.length; C > B; B++) {
                        var x = !1, S = !1;
                        l = p[B], k = l.name, s = R(l.value), l = wa(k), (n = ia.test(l)) && (k = k.replace(Zc, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        }));
                        var F = l.replace(/(Start|End)$/, "");
                        A(F) && l === F + "Start" && (x = k, S = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), 
                        l = wa(k.toLowerCase()), h[l] = k, (n || !c.hasOwnProperty(l)) && (c[l] = s, Sc(a, l) && (c[l] = !0)), 
                        V(a, b, s, l, n), w(b, l, "A", d, e, x, S);
                    }
                    if (a = a.className, H(a) && (a = a.animVal), L(a) && "" !== a) for (;k = g.exec(a); ) l = wa(k[2]), 
                    w(b, l, "C", d, e) && (c[l] = R(k[3])), a = a.substr(k.index + k[0].length);
                    break;

                  case Na:
                    if (11 === Ua) for (;a.parentNode && a.nextSibling && a.nextSibling.nodeType === Na; ) a.nodeValue += a.nextSibling.nodeValue, 
                    a.parentNode.removeChild(a.nextSibling);
                    xa(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        (k = f.exec(a.nodeValue)) && (l = wa(k[1]), w(b, l, "M", d, e) && (c[l] = R(k[2])));
                    } catch ($) {}
                }
                return b.sort(Aa), b;
            }
            function va(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ea("uterdir", b, c);
                        a.nodeType == qa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return y(d);
            }
            function Yc(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = va(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function E(a, b, d, e, f, g, h, k, s) {
                function n(a, b, c, d) {
                    a && (c && (a = Yc(a, c, d)), a.require = E.require, a.directiveName = w, (u === E || E.$$isolateScope) && (a = X(a, {
                        isolateScope: !0
                    })), h.push(a)), b && (c && (b = Yc(b, c, d)), b.require = E.require, b.directiveName = w, 
                    (u === E || E.$$isolateScope) && (b = X(b, {
                        isolateScope: !0
                    })), k.push(b));
                }
                function B(a, b, c, d) {
                    var e;
                    if (L(b)) {
                        var f = b.match(l);
                        b = b.substring(f[0].length);
                        var g = f[1] || f[3], f = "?" === f[2];
                        if ("^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance, e || (d = "$" + b + "Controller", 
                        e = g ? c.inheritedData(d) : c.data(d)), !e && !f) throw ea("ctreq", b, a);
                    } else if (G(b)) for (e = [], g = 0, f = b.length; f > g; g++) e[g] = B(a, b[g], c, d);
                    return e || null;
                }
                function x(a, b, c, d, e, f) {
                    var h, g = ga();
                    for (h in d) {
                        var k = d[h], l = {
                            $scope: k === u || k.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        }, s = k.controller;
                        "@" == s && (s = b[k.name]), l = p(s, l, !0, k.controllerAs), g[k.name] = l, q || a.data("$" + k.name + "Controller", l.instance);
                    }
                    return g;
                }
                function S(a, c, e, f, g, l) {
                    function s(a, b, c) {
                        var d;
                        return $a(a) || (c = b, b = a, a = t), q && (d = m), c || (c = q ? ja.parent() : ja), 
                        g(a, b, d, c, va);
                    }
                    var n, p, C, F, m, ha, ja;
                    if (b === e ? (f = d, ja = d.$$element) : (ja = y(e), f = new aa(ja, d)), u && (F = c.$new(!0)), 
                    g && (ha = s, ha.$$boundTransclude = g), N && (m = x(ja, f, ha, N, F, c)), u && (Z.$$addScopeInfo(ja, F, !0, !(D && (D === u || D === u.$$originalDirective))), 
                    Z.$$addScopeClass(ja, !0), F.$$isolateBindings = u.$$isolateBindings, W(c, f, F, F.$$isolateBindings, u, F)), 
                    m) {
                        var I, K = u || $;
                        K && m[K.name] && (p = K.$$bindings.bindToController, (C = m[K.name]) && C.identifier && p && (I = C, 
                        l.$$destroyBindings = W(c, f, C.instance, p, K)));
                        for (n in m) {
                            C = m[n];
                            var E = C();
                            E !== C.instance && (C.instance = E, ja.data("$" + n + "Controller", E), C === I && (l.$$destroyBindings(), 
                            l.$$destroyBindings = W(c, f, E, p, K)));
                        }
                    }
                    for (n = 0, l = h.length; l > n; n++) p = h[n], Y(p, p.isolateScope ? F : c, ja, f, p.require && B(p.directiveName, p.require, ja, m), ha);
                    var va = c;
                    for (u && (u.template || null === u.templateUrl) && (va = F), a && a(va, e.childNodes, t, g), 
                    n = k.length - 1; n >= 0; n--) p = k[n], Y(p, p.isolateScope ? F : c, ja, f, p.require && B(p.directiveName, p.require, ja, m), ha);
                }
                s = s || {};
                for (var E, w, v, Aa, F = -Number.MAX_VALUE, $ = s.newScopeDirective, N = s.controllerDirectives, u = s.newIsolateScopeDirective, D = s.templateDirective, m = s.nonTlbTranscludeDirective, K = !1, I = !1, q = s.hasElementTranscludeDirective, ba = d.$$element = y(b), A = e, xa = 0, Ta = a.length; Ta > xa; xa++) {
                    E = a[xa];
                    var M = E.$$start, P = E.$$end;
                    if (M && (ba = va(b, M, P)), v = t, F > E.priority) break;
                    if ((v = E.scope) && (E.templateUrl || (H(v) ? (O("new/isolated scope", u || $, E, ba), 
                    u = E) : O("new/isolated scope", u, E, ba)), $ = $ || E), w = E.name, !E.templateUrl && E.controller && (v = E.controller, 
                    N = N || ga(), O("'" + w + "' controller", N[w], E, ba), N[w] = E), (v = E.transclude) && (K = !0, 
                    E.$$tlb || (O("transclusion", m, E, ba), m = E), "element" == v ? (q = !0, F = E.priority, 
                    v = ba, ba = d.$$element = y(U.createComment(" " + w + ": " + d[w] + " ")), b = ba[0], 
                    T(f, za.call(v, 0), b), A = Z(v, e, F, g && g.name, {
                        nonTlbTranscludeDirective: m
                    })) : (v = y(Vb(b)).contents(), ba.empty(), A = Z(v, e))), E.template) if (I = !0, 
                    O("template", D, E, ba), D = E, v = z(E.template) ? E.template(ba, d) : E.template, 
                    v = fa(v), E.replace) {
                        if (g = E, v = Tb.test(v) ? $c(Yb(E.templateNamespace, R(v))) : [], b = v[0], 1 != v.length || b.nodeType !== qa) throw ea("tplrt", w, "");
                        T(f, ba, b), Ta = {
                            $attr: {}
                        }, v = ha(b, [], Ta);
                        var Q = a.splice(xa + 1, a.length - (xa + 1));
                        u && ad(v), a = a.concat(v).concat(Q), J(d, Ta), Ta = a.length;
                    } else ba.html(v);
                    if (E.templateUrl) I = !0, O("template", D, E, ba), D = E, E.replace && (g = E), 
                    S = Lf(a.splice(xa, a.length - xa), ba, d, f, K && A, h, k, {
                        controllerDirectives: N,
                        newScopeDirective: $ !== E && $,
                        newIsolateScopeDirective: u,
                        templateDirective: D,
                        nonTlbTranscludeDirective: m
                    }), Ta = a.length; else if (E.compile) try {
                        Aa = E.compile(ba, d, A), z(Aa) ? n(null, Aa, M, P) : Aa && n(Aa.pre, Aa.post, M, P);
                    } catch (Kf) {
                        c(Kf, ua(ba));
                    }
                    E.terminal && (S.terminal = !0, F = Math.max(F, E.priority));
                }
                return S.scope = $ && !0 === $.scope, S.transcludeOnThisElement = K, S.templateOnThisElement = I, 
                S.transclude = A, s.hasElementTranscludeDirective = q, S;
            }
            function ad(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = Ob(a[b], {
                    $$isolateScope: !0
                });
            }
            function w(b, d, f, g, h, k, l) {
                if (d === h) return null;
                if (h = null, e.hasOwnProperty(d)) {
                    var n;
                    d = a.get(d + "Directive");
                    for (var p = 0, B = d.length; B > p; p++) try {
                        n = d[p], (g === t || g > n.priority) && -1 != n.restrict.indexOf(f) && (k && (n = Ob(n, {
                            $$start: k,
                            $$end: l
                        })), b.push(n), h = n);
                    } catch (x) {
                        c(x);
                    }
                }
                return h;
            }
            function A(b) {
                if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; f > d; d++) if (b = c[d], 
                b.multiElement) return !0;
                return !1;
            }
            function J(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                m(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), m(b, function(b, f) {
                    "class" == f ? (D(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function Lf(a, b, c, e, f, g, h, k) {
                var s, n, l = [], p = b[0], B = a.shift(), C = Ob(B, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: B
                }), x = z(B.templateUrl) ? B.templateUrl(b, c) : B.templateUrl, N = B.templateNamespace;
                return b.empty(), d(x).then(function(d) {
                    var F, u;
                    if (d = fa(d), B.replace) {
                        if (d = Tb.test(d) ? $c(Yb(N, R(d))) : [], F = d[0], 1 != d.length || F.nodeType !== qa) throw ea("tplrt", B.name, x);
                        d = {
                            $attr: {}
                        }, T(e, b, F);
                        var K = ha(F, [], d);
                        H(B.scope) && ad(K), a = K.concat(a), J(c, d);
                    } else F = p, b.html(d);
                    for (a.unshift(C), s = E(a, F, c, f, b, B, g, h, k), m(e, function(a, c) {
                        a == F && (e[c] = b[0]);
                    }), n = S(b[0].childNodes, f); l.length; ) {
                        d = l.shift(), u = l.shift();
                        var I = l.shift(), va = l.shift(), K = b[0];
                        if (!d.$$destroyed) {
                            if (u !== p) {
                                var Z = u.className;
                                k.hasElementTranscludeDirective && B.replace || (K = Vb(F)), T(I, y(u), K), D(y(K), Z);
                            }
                            u = s.transcludeOnThisElement ? $(d, s.transclude, va) : va, s(n, d, K, e, u, s);
                        }
                    }
                    l = null;
                }), function(a, b, c, d, e) {
                    a = e, b.$$destroyed || (l ? l.push(b, c, d, a) : (s.transcludeOnThisElement && (a = $(b, s.transclude, e)), 
                    s(n, b, c, d, a, s)));
                };
            }
            function Aa(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function O(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : "";
                }
                if (b) throw ea("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
            }
            function xa(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        return b && Z.$$addBindingClass(a), function(a, c) {
                            var e = c.parent();
                            b || Z.$$addBindingClass(e), Z.$$addBindingInfo(e, d.expressions), a.$watch(d, function(a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function Yb(a, b) {
                switch (a = M(a || "html")) {
                  case "svg":
                  case "math":
                    var c = U.createElement("div");
                    return c.innerHTML = "<" + a + ">" + b + "</" + a + ">", c.childNodes[0].childNodes;

                  default:
                    return b;
                }
            }
            function Q(a, b) {
                if ("srcdoc" == b) return I.HTML;
                var c = ta(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? I.RESOURCE_URL : void 0;
            }
            function V(a, c, d, e, f) {
                var g = Q(a, e);
                f = h[e] || f;
                var l = b(d, !0, g, f);
                if (l) {
                    if ("multiple" === e && "select" === ta(a)) throw ea("selmulti", ua(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, h) {
                                    if (c = h.$$observers || (h.$$observers = {}), k.test(e)) throw ea("nodomevents");
                                    var s = h[e];
                                    s !== d && (l = s && b(s, !0, g, f), d = s), l && (h[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, 
                                    (h.$$observers && h.$$observers[e].$$scope || a).$watch(l, function(a, b) {
                                        "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function T(a, b, c) {
                var g, h, d = b[0], e = b.length, f = d.parentNode;
                if (a) for (g = 0, h = a.length; h > g; g++) if (a[g] == d) {
                    a[g++] = c, h = g + e - 1;
                    for (var k = a.length; k > g; g++, h++) k > h ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1, a.context === d && (a.context = c);
                    break;
                }
                for (f && f.replaceChild(c, d), a = U.createDocumentFragment(), a.appendChild(d), 
                y.hasData(d) && (y(c).data(y(d).data()), la ? (Rb = !0, la.cleanData([ d ])) : delete y.cache[d[y.expando]]), 
                d = 1, e = b.length; e > d; d++) f = b[d], y(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c, b.length = 1;
            }
            function X(a, b) {
                return P(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function Y(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g);
                } catch (h) {
                    c(h, ua(d));
                }
            }
            function W(a, c, d, e, f, g) {
                var h;
                return m(e, function(e, g) {
                    var n, p, B, C, k = e.attrName, l = e.optional, s = e.mode;
                    switch (Xa.call(c, k) || (c[k] = t), s) {
                      case "@":
                        c[k] || l || (d[g] = t), c.$observe(k, function(a) {
                            d[g] = a;
                        }), c.$$observers[k].$$scope = a, c[k] && (d[g] = b(c[k])(a));
                        break;

                      case "=":
                        if (l && !c[k]) break;
                        p = u(c[k]), C = p.literal ? ka : function(a, b) {
                            return a === b || a !== a && b !== b;
                        }, B = p.assign || function() {
                            throw n = d[g] = p(a), ea("nonassign", c[k], f.name);
                        }, n = d[g] = p(a), l = function(b) {
                            return C(b, d[g]) || (C(b, n) ? B(a, b = d[g]) : d[g] = b), n = b;
                        }, l.$stateful = !0, l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(u(c[k], l), null, p.literal), 
                        h = h || [], h.push(l);
                        break;

                      case "&":
                        if (p = u(c[k]), p === v && l) break;
                        d[g] = function(b) {
                            return p(a, b);
                        };
                    }
                }), e = h ? function() {
                    for (var a = 0, b = h.length; b > a; ++a) h[a]();
                } : v, g && e !== v ? (g.$on("$destroy", e), v) : e;
            }
            var aa = function(a, b) {
                if (b) {
                    var d, e, f, c = Object.keys(b);
                    for (d = 0, e = c.length; e > d; d++) f = c[d], this[f] = b[f];
                } else this.$attr = {};
                this.$$element = a;
            };
            aa.prototype = {
                $normalize: wa,
                $addClass: function(a) {
                    a && 0 < a.length && B.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && B.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = bd(a, b);
                    c && c.length && B.addClass(this.$$element, c), (c = bd(b, a)) && c.length && B.removeClass(this.$$element, c);
                },
                $set: function(a, b, d, e) {
                    var f = this.$$element[0], g = Sc(f, a), h = Ff(f, a), f = a;
                    if (g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h), this[a] = b, 
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Bc(a, "-")), 
                    g = ta(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = N(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = R(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(h) ? k : /(,)/, h = h.split(k), k = Math.floor(h.length / 2), l = 0; k > l; l++) var s = 2 * l, g = g + N(R(h[s]), !0), g = g + (" " + R(h[s + 1]));
                        h = R(h[2 * l]).split(/\s/), g += N(R(h[0]), !0), 2 === h.length && (g += " " + R(h[1])), 
                        this[a] = b = g;
                    }
                    !1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)), 
                    (a = this.$$observers) && m(a[f], function(a) {
                        try {
                            a(b);
                        } catch (d) {
                            c(d);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = ga()), e = d[a] || (d[a] = []);
                    return e.push(b), K.$evalAsync(function() {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
                    }), function() {
                        bb(e, b);
                    };
                }
            };
            var ca = b.startSymbol(), da = b.endSymbol(), fa = "{{" == ca || "}}" == da ? Ya : function(a) {
                return a.replace(/\{\{/g, ca).replace(/}}/g, da);
            }, ia = /^ngAttr[A-Z]/;
            return Z.$$addBindingInfo = n ? function(a, b) {
                var c = a.data("$binding") || [];
                G(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : v, Z.$$addBindingClass = n ? function(a) {
                D(a, "ng-binding");
            } : v, Z.$$addScopeInfo = n ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
            } : v, Z.$$addScopeClass = n ? function(a, b) {
                D(a, b ? "ng-isolate-scope" : "ng-scope");
            } : v, Z;
        } ];
    }
    function wa(b) {
        return hb(b.replace(Zc, ""));
    }
    function bd(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a: for (;f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g;
        }
        return c;
    }
    function $c(b) {
        b = y(b);
        var a = b.length;
        if (1 >= a) return b;
        for (;a--; ) 8 === b[a].nodeType && Mf.call(b, a, 1);
        return b;
    }
    function Xe() {
        var b = {}, a = !1;
        this.register = function(a, d) {
            Ra(a, "controller"), H(a) ? P(b, a) : b[a] = d;
        }, this.allowGlobals = function() {
            a = !0;
        }, this.$get = [ "$injector", "$window", function(c, d) {
            function e(a, b, c, d) {
                if (!a || !H(a.$scope)) throw J("$controller")("noscp", d, b);
                a.$scope[b] = c;
            }
            return function(f, g, h, l) {
                var k, n, r;
                if (h = !0 === h, l && L(l) && (r = l), L(f)) {
                    if (l = f.match(Xc), !l) throw Nf("ctrlfmt", f);
                    n = l[1], r = r || l[3], f = b.hasOwnProperty(n) ? b[n] : Dc(g.$scope, n, !0) || (a ? Dc(d, n, !0) : t), 
                    Qa(f, n, !0);
                }
                return h ? (h = (G(f) ? f[f.length - 1] : f).prototype, k = Object.create(h || null), 
                r && e(g, r, k, n || f.name), P(function() {
                    var a = c.invoke(f, k, g, n);
                    return a !== k && (H(a) || z(a)) && (k = a, r && e(g, r, k, n || f.name)), k;
                }, {
                    instance: k,
                    identifier: r
                })) : (k = c.instantiate(f, g, n), r && e(g, r, k, n || f.name), k);
            };
        } ];
    }
    function Ye() {
        this.$get = [ "$window", function(b) {
            return y(b.document);
        } ];
    }
    function Ze() {
        this.$get = [ "$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments);
            };
        } ];
    }
    function Zb(b) {
        return H(b) ? aa(b) ? b.toISOString() : db(b) : b;
    }
    function cf() {
        this.$get = function() {
            return function(b) {
                if (!b) return "";
                var a = [];
                return oc(b, function(b, d) {
                    null === b || A(b) || (G(b) ? m(b, function(b, c) {
                        a.push(ma(d) + "=" + ma(Zb(b)));
                    }) : a.push(ma(d) + "=" + ma(Zb(b))));
                }), a.join("&");
            };
        };
    }
    function df() {
        this.$get = function() {
            return function(b) {
                function a(b, e, f) {
                    null === b || A(b) || (G(b) ? m(b, function(b) {
                        a(b, e + "[]");
                    }) : H(b) && !aa(b) ? oc(b, function(b, c) {
                        a(b, e + (f ? "" : "[") + c + (f ? "" : "]"));
                    }) : c.push(ma(e) + "=" + ma(Zb(b))));
                }
                if (!b) return "";
                var c = [];
                return a(b, "", !0), c.join("&");
            };
        };
    }
    function $b(b, a) {
        if (L(b)) {
            var c = b.replace(Of, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(cd)) || (d = (d = c.match(Pf)) && Qf[d[0]].test(c)), d && (b = wc(c));
            }
        }
        return b;
    }
    function dd(b) {
        var c, a = ga();
        return L(b) ? m(b.split("\n"), function(b) {
            c = b.indexOf(":");
            var e = M(R(b.substr(0, c)));
            b = R(b.substr(c + 1)), e && (a[e] = a[e] ? a[e] + ", " + b : b);
        }) : H(b) && m(b, function(b, c) {
            var f = M(c), g = R(b);
            f && (a[f] = a[f] ? a[f] + ", " + g : g);
        }), a;
    }
    function ed(b) {
        var a;
        return function(c) {
            return a || (a = dd(b)), c ? (c = a[M(c)], void 0 === c && (c = null), c) : a;
        };
    }
    function fd(b, a, c, d) {
        return z(d) ? d(b, a, c) : (m(d, function(d) {
            b = d(b, a, c);
        }), b);
    }
    function bf() {
        var b = this.defaults = {
            transformResponse: [ $b ],
            transformRequest: [ function(a) {
                return H(a) && "[object File]" !== sa.call(a) && "[object Blob]" !== sa.call(a) && "[object FormData]" !== sa.call(a) ? db(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: ia(ac),
                put: ia(ac),
                patch: ia(ac)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, a = !1;
        this.useApplyAsync = function(b) {
            return w(b) ? (a = !!b, this) : a;
        };
        var c = this.interceptors = [];
        this.$get = [ "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(d, e, f, g, h, l) {
            function k(a) {
                function c(a) {
                    var b = P({}, a);
                    return b.data = a.data ? fd(a.data, a.headers, a.status, e.transformResponse) : a.data, 
                    a = a.status, a >= 200 && 300 > a ? b : h.reject(b);
                }
                function d(a, b) {
                    var c, e = {};
                    return m(a, function(a, d) {
                        z(a) ? (c = a(b), null != c && (e[d] = c)) : e[d] = a;
                    }), e;
                }
                if (!ca.isObject(a)) throw J("$http")("badreq", a);
                var e = P({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse,
                    paramSerializer: b.paramSerializer
                }, a);
                e.headers = function(a) {
                    var f, g, h, c = b.headers, e = P({}, a.headers), c = P({}, c.common, c[M(a.method)]);
                    a: for (f in c) {
                        g = M(f);
                        for (h in e) if (M(h) === g) continue a;
                        e[f] = c[f];
                    }
                    return d(e, ia(a));
                }(a), e.method = rb(e.method), e.paramSerializer = L(e.paramSerializer) ? l.get(e.paramSerializer) : e.paramSerializer;
                var f = [ function(a) {
                    var d = a.headers, e = fd(a.data, ed(d), t, a.transformRequest);
                    return A(e) && m(d, function(a, b) {
                        "content-type" === M(b) && delete d[b];
                    }), A(a.withCredentials) && !A(b.withCredentials) && (a.withCredentials = b.withCredentials), 
                    n(a, e).then(c, c);
                }, t ], g = h.when(e);
                for (m(x, function(a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError), (a.response || a.responseError) && f.push(a.response, a.responseError);
                }); f.length; ) {
                    a = f.shift();
                    var k = f.shift(), g = g.then(a, k);
                }
                return g.success = function(a) {
                    return Qa(a, "fn"), g.then(function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), g;
                }, g.error = function(a) {
                    return Qa(a, "fn"), g.then(null, function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), g;
                }, g;
            }
            function n(c, f) {
                function l(b, c, d, e) {
                    function f() {
                        n(c, b, d, e);
                    }
                    N && (b >= 200 && 300 > b ? N.put(S, [ b, c, dd(d), e ]) : N.remove(S)), a ? g.$applyAsync(f) : (f(), 
                    g.$$phase || g.$apply());
                }
                function n(a, b, d, e) {
                    b = Math.max(b, 0), (b >= 200 && 300 > b ? I.resolve : I.reject)({
                        data: a,
                        status: b,
                        headers: ed(d),
                        config: c,
                        statusText: e
                    });
                }
                function x(a) {
                    n(a.data, a.status, ia(a.headers()), a.statusText);
                }
                function m() {
                    var a = k.pendingRequests.indexOf(c);
                    -1 !== a && k.pendingRequests.splice(a, 1);
                }
                var N, D, I = h.defer(), B = I.promise, q = c.headers, S = r(c.url, c.paramSerializer(c.params));
                return k.pendingRequests.push(c), B.then(m, m), !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = H(c.cache) ? c.cache : H(b.cache) ? b.cache : s), 
                N && (D = N.get(S), w(D) ? D && z(D.then) ? D.then(x, x) : G(D) ? n(D[1], D[0], ia(D[2]), D[3]) : n(D, 200, {}, "OK") : N.put(S, B)), 
                A(D) && ((D = gd(c.url) ? e()[c.xsrfCookieName || b.xsrfCookieName] : t) && (q[c.xsrfHeaderName || b.xsrfHeaderName] = D), 
                d(c.method, S, f, l, q, c.timeout, c.withCredentials, c.responseType)), B;
            }
            function r(a, b) {
                return 0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a;
            }
            var s = f("$http");
            b.paramSerializer = L(b.paramSerializer) ? l.get(b.paramSerializer) : b.paramSerializer;
            var x = [];
            return m(c, function(a) {
                x.unshift(L(a) ? l.get(a) : l.invoke(a));
            }), k.pendingRequests = [], function(a) {
                m(arguments, function(a) {
                    k[a] = function(b, c) {
                        return k(P({}, c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }("get", "delete", "head", "jsonp"), function(a) {
                m(arguments, function(a) {
                    k[a] = function(b, c, d) {
                        return k(P({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }("post", "put", "patch"), k.defaults = b, k;
        } ];
    }
    function Rf() {
        return new O.XMLHttpRequest();
    }
    function ef() {
        this.$get = [ "$browser", "$window", "$document", function(b, a, c) {
            return Sf(b, Rf, b.defer, a.angular.callbacks, c[0]);
        } ];
    }
    function Sf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), n = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, n = function(a) {
                f.removeEventListener("load", n, !1), f.removeEventListener("error", n, !1), e.body.removeChild(f), 
                f = null;
                var g = -1, x = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), x = a.type, g = "error" === a.type ? 404 : 200), c && c(g, x);
            }, f.addEventListener("load", n, !1), f.addEventListener("error", n, !1), e.body.appendChild(f), 
            n;
        }
        return function(e, h, l, k, n, r, s, x) {
            function C() {
                p && p(), K && K.abort();
            }
            function F(a, d, e, f, g) {
                I !== t && c.cancel(I), p = K = null, a(d, e, f, g), b.$$completeOutstandingRequest(v);
            }
            if (b.$$incOutstandingRequestCount(), h = h || b.url(), "jsonp" == M(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function(a) {
                    d[u].data = a, d[u].called = !0;
                };
                var p = f(h.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function(a, b) {
                    F(k, a, d[u].data, "", b), d[u] = v;
                });
            } else {
                var K = a();
                if (K.open(e, h, !0), m(n, function(a, b) {
                    w(a) && K.setRequestHeader(b, a);
                }), K.onload = function() {
                    var a = K.statusText || "", b = "response" in K ? K.response : K.responseText, c = 1223 === K.status ? 204 : K.status;
                    0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0), F(k, c, b, K.getAllResponseHeaders(), a);
                }, e = function() {
                    F(k, -1, null, null, "");
                }, K.onerror = e, K.onabort = e, s && (K.withCredentials = !0), x) try {
                    K.responseType = x;
                } catch (q) {
                    if ("json" !== x) throw q;
                }
                K.send(l);
            }
            if (r > 0) var I = c(C, r); else r && z(r.then) && r.then(C);
        };
    }
    function $e() {
        var b = "{{", a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.endSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a;
            }
            function g(c) {
                return c.replace(n, b).replace(r, a);
            }
            function h(f, h, n, r) {
                function u(a) {
                    try {
                        var b = a;
                        a = n ? e.getTrusted(n, b) : e.valueOf(b);
                        var c;
                        if (r && !w(a)) c = a; else if (null == a) c = ""; else {
                            switch (typeof a) {
                              case "string":
                                break;

                              case "number":
                                a = "" + a;
                                break;

                              default:
                                a = db(a);
                            }
                            c = a;
                        }
                        return c;
                    } catch (g) {
                        d(Ka.interr(f, g));
                    }
                }
                r = !!r;
                for (var p, m, q = 0, I = [], B = [], N = f.length, D = [], t = []; N > q; ) {
                    if (-1 == (p = f.indexOf(b, q)) || -1 == (m = f.indexOf(a, p + l))) {
                        q !== N && D.push(g(f.substring(q)));
                        break;
                    }
                    q !== p && D.push(g(f.substring(q, p))), q = f.substring(p + l, m), I.push(q), B.push(c(q, u)), 
                    q = m + k, t.push(D.length), D.push("");
                }
                if (n && 1 < D.length && Ka.throwNoconcat(f), !h || I.length) {
                    var S = function(a) {
                        for (var b = 0, c = I.length; c > b; b++) {
                            if (r && A(a[b])) return;
                            D[t[b]] = a[b];
                        }
                        return D.join("");
                    };
                    return P(function(a) {
                        var b = 0, c = I.length, e = Array(c);
                        try {
                            for (;c > b; b++) e[b] = B[b](a);
                            return S(e);
                        } catch (g) {
                            d(Ka.interr(f, g));
                        }
                    }, {
                        exp: f,
                        expressions: I,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(B, function(d, e) {
                                var f = S(d);
                                z(b) && b.call(this, f, d !== e ? c : f, a), c = f;
                            });
                        }
                    });
                }
            }
            var l = b.length, k = a.length, n = new RegExp(b.replace(/./g, f), "g"), r = new RegExp(a.replace(/./g, f), "g");
            return h.startSymbol = function() {
                return b;
            }, h.endSymbol = function() {
                return a;
            }, h;
        } ];
    }
    function af() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
            function e(e, h, l, k) {
                var n = 4 < arguments.length, r = n ? za.call(arguments, 4) : [], s = a.setInterval, x = a.clearInterval, C = 0, F = w(k) && !k, u = (F ? d : c).defer(), p = u.promise;
                return l = w(l) ? l : 0, p.then(null, null, n ? function() {
                    e.apply(null, r);
                } : e), p.$$intervalId = s(function() {
                    u.notify(C++), l > 0 && C >= l && (u.resolve(C), x(p.$$intervalId), delete f[p.$$intervalId]), 
                    F || b.$apply();
                }, h), f[p.$$intervalId] = u, p;
            }
            var f = {};
            return e.cancel = function(b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), 
                delete f[b.$$intervalId], !0) : !1;
            }, e;
        } ];
    }
    function ge() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: [ "Before Christ", "Anno Domini" ],
                    ERAS: [ "BC", "AD" ]
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other";
                }
            };
        };
    }
    function bc(b) {
        b = b.split("/");
        for (var a = b.length; a--; ) b[a] = ob(b[a]);
        return b.join("/");
    }
    function hd(b, a) {
        var c = Ba(b);
        a.$$protocol = c.protocol, a.$$host = c.hostname, a.$$port = W(c.port) || Tf[c.protocol] || null;
    }
    function id(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Ba(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), 
        a.$$search = zc(d.search), a.$$hash = decodeURIComponent(d.hash), a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
    }
    function ya(b, a) {
        return 0 === a.indexOf(b) ? a.substr(b.length) : void 0;
    }
    function Ja(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a);
    }
    function Bb(b) {
        return b.replace(/(#.+)|#$/, "$1");
    }
    function cc(b) {
        return b.substr(0, Ja(b).lastIndexOf("/") + 1);
    }
    function dc(b, a) {
        this.$$html5 = !0, a = a || "";
        var c = cc(b);
        hd(b, this), this.$$parse = function(a) {
            var b = ya(c, a);
            if (!L(b)) throw Cb("ipthprfx", a, c);
            id(b, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = Qb(this.$$search), b = this.$$hash ? "#" + ob(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = c + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return (f = ya(b, d)) !== t ? (g = f, g = (f = ya(a, f)) !== t ? c + (ya("/", f) || f) : b + g) : (f = ya(c, d)) !== t ? g = c + f : c == d + "/" && (g = c), 
            g && this.$$parse(g), !!g;
        };
    }
    function ec(b, a) {
        var c = cc(b);
        hd(b, this), this.$$parse = function(d) {
            var f, e = ya(b, d) || ya(c, d);
            A(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", A(e) && (b = d, this.replace())) : (f = ya(a, e), 
            A(f) && (f = e)), id(f, this), d = this.$$path;
            var e = b, g = /^\/[A-Z]:(\/.*)/;
            0 === f.indexOf(e) && (f = f.replace(e, "")), g.exec(f) || (d = (f = g.exec(d)) ? f[1] : d), 
            this.$$path = d, this.$$compose();
        }, this.$$compose = function() {
            var c = Qb(this.$$search), e = this.$$hash ? "#" + ob(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e, this.$$absUrl = b + (this.$$url ? a + this.$$url : "");
        }, this.$$parseLinkUrl = function(a, c) {
            return Ja(b) == Ja(a) ? (this.$$parse(a), !0) : !1;
        };
    }
    function jd(b, a) {
        this.$$html5 = !0, ec.apply(this, arguments);
        var c = cc(b);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return b == Ja(d) ? f = d : (g = ya(c, d)) ? f = b + a + g : c === d + "/" && (f = c), 
            f && this.$$parse(f), !!f;
        }, this.$$compose = function() {
            var c = Qb(this.$$search), e = this.$$hash ? "#" + ob(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e, this.$$absUrl = b + a + this.$$url;
        };
    }
    function Db(b) {
        return function() {
            return this[b];
        };
    }
    function kd(b, a) {
        return function(c) {
            return A(c) ? this[b] : (this[b] = a(c), this.$$compose(), this);
        };
    }
    function ff() {
        var b = "", a = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(a) {
            return w(a) ? (b = a, this) : b;
        }, this.html5Mode = function(b) {
            return ab(b) ? (a.enabled = b, this) : H(b) ? (ab(b.enabled) && (a.enabled = b.enabled), 
            ab(b.requireBase) && (a.requireBase = b.requireBase), ab(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), 
            this) : a;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(), f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state();
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }
            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b);
            }
            var k, n;
            n = d.baseHref();
            var s, r = d.url();
            if (a.enabled) {
                if (!n && a.requireBase) throw Cb("nobase");
                s = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (n || "/"), n = e.history ? dc : jd;
            } else s = Ja(r), n = ec;
            k = new n(s, "#" + b), k.$$parseLinkUrl(r, r), k.$$state = d.state();
            var x = /^\s*(javascript|mailto):/i;
            f.on("click", function(b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = y(b.target); "a" !== ta(e[0]); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), l = e.attr("href") || e.attr("xlink:href");
                    H(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href), 
                    x.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), 
                    k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                }
            }), Bb(k.absUrl()) != Bb(r) && d.url(k.absUrl(), !0);
            var C = !0;
            return d.onUrlChange(function(a, b) {
                c.$evalAsync(function() {
                    var f, d = k.absUrl(), e = k.$$state;
                    k.$$parse(a), k.$$state = b, f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented, 
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (C = !1, l(d, e)));
                }), c.$$phase || c.$digest();
            }), c.$watch(function() {
                var a = Bb(d.url()), b = Bb(k.absUrl()), f = d.state(), g = k.$$replace, n = a !== b || k.$$html5 && e.history && f !== k.$$state;
                (C || n) && (C = !1, c.$evalAsync(function() {
                    var b = k.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (n && h(b, g, f === k.$$state ? null : k.$$state), 
                    l(a, f)));
                })), k.$$replace = !1;
            }), k;
        } ];
    }
    function gf() {
        var b = !0, a = this;
        this.debugEnabled = function(a) {
            return w(a) ? (b = a, this) : b;
        }, this.$get = [ "$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || v;
                a = !1;
                try {
                    a = !!e.apply;
                } catch (l) {}
                return a ? function() {
                    var a = [];
                    return m(arguments, function(b) {
                        a.push(d(b));
                    }), e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        b && c.apply(a, arguments);
                    };
                }()
            };
        } ];
    }
    function Ca(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw da("isecfld", a);
        return b;
    }
    function oa(b, a) {
        if (b) {
            if (b.constructor === b) throw da("isecfn", a);
            if (b.window === b) throw da("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw da("isecdom", a);
            if (b === Object) throw da("isecobj", a);
        }
        return b;
    }
    function ld(b, a) {
        if (b) {
            if (b.constructor === b) throw da("isecfn", a);
            if (b === Uf || b === Vf || b === Wf) throw da("isecff", a);
        }
    }
    function Xf(b, a) {
        return "undefined" != typeof b ? b : a;
    }
    function md(b, a) {
        return "undefined" == typeof b ? a : "undefined" == typeof a ? b : b + a;
    }
    function T(b, a) {
        var c, d;
        switch (b.type) {
          case q.Program:
            c = !0, m(b.body, function(b) {
                T(b.expression, a), c = c && b.expression.constant;
            }), b.constant = c;
            break;

          case q.Literal:
            b.constant = !0, b.toWatch = [];
            break;

          case q.UnaryExpression:
            T(b.argument, a), b.constant = b.argument.constant, b.toWatch = b.argument.toWatch;
            break;

          case q.BinaryExpression:
            T(b.left, a), T(b.right, a), b.constant = b.left.constant && b.right.constant, b.toWatch = b.left.toWatch.concat(b.right.toWatch);
            break;

          case q.LogicalExpression:
            T(b.left, a), T(b.right, a), b.constant = b.left.constant && b.right.constant, b.toWatch = b.constant ? [] : [ b ];
            break;

          case q.ConditionalExpression:
            T(b.test, a), T(b.alternate, a), T(b.consequent, a), b.constant = b.test.constant && b.alternate.constant && b.consequent.constant, 
            b.toWatch = b.constant ? [] : [ b ];
            break;

          case q.Identifier:
            b.constant = !1, b.toWatch = [ b ];
            break;

          case q.MemberExpression:
            T(b.object, a), b.computed && T(b.property, a), b.constant = b.object.constant && (!b.computed || b.property.constant), 
            b.toWatch = [ b ];
            break;

          case q.CallExpression:
            c = b.filter ? !a(b.callee.name).$stateful : !1, d = [], m(b.arguments, function(b) {
                T(b, a), c = c && b.constant, b.constant || d.push.apply(d, b.toWatch);
            }), b.constant = c, b.toWatch = b.filter && !a(b.callee.name).$stateful ? d : [ b ];
            break;

          case q.AssignmentExpression:
            T(b.left, a), T(b.right, a), b.constant = b.left.constant && b.right.constant, b.toWatch = [ b ];
            break;

          case q.ArrayExpression:
            c = !0, d = [], m(b.elements, function(b) {
                T(b, a), c = c && b.constant, b.constant || d.push.apply(d, b.toWatch);
            }), b.constant = c, b.toWatch = d;
            break;

          case q.ObjectExpression:
            c = !0, d = [], m(b.properties, function(b) {
                T(b.value, a), c = c && b.value.constant, b.value.constant || d.push.apply(d, b.value.toWatch);
            }), b.constant = c, b.toWatch = d;
            break;

          case q.ThisExpression:
            b.constant = !1, b.toWatch = [];
        }
    }
    function nd(b) {
        if (1 == b.length) {
            b = b[0].expression;
            var a = b.toWatch;
            return 1 !== a.length ? a : a[0] !== b ? a : t;
        }
    }
    function od(b) {
        return b.type === q.Identifier || b.type === q.MemberExpression;
    }
    function pd(b) {
        return 1 === b.body.length && od(b.body[0].expression) ? {
            type: q.AssignmentExpression,
            left: b.body[0].expression,
            right: {
                type: q.NGValueParameter
            },
            operator: "="
        } : void 0;
    }
    function qd(b) {
        return 0 === b.body.length || 1 === b.body.length && (b.body[0].expression.type === q.Literal || b.body[0].expression.type === q.ArrayExpression || b.body[0].expression.type === q.ObjectExpression);
    }
    function rd(b, a) {
        this.astBuilder = b, this.$filter = a;
    }
    function sd(b, a) {
        this.astBuilder = b, this.$filter = a;
    }
    function Eb(b, a, c, d) {
        oa(b, d), a = a.split(".");
        for (var e, f = 0; 1 < a.length; f++) {
            e = Ca(a.shift(), d);
            var g = oa(b[e], d);
            g || (g = {}, b[e] = g), b = g;
        }
        return e = Ca(a.shift(), d), oa(b[e], d), b[e] = c;
    }
    function Fb(b) {
        return "constructor" == b;
    }
    function fc(b) {
        return z(b.valueOf) ? b.valueOf() : Yf.call(b);
    }
    function hf() {
        var b = ga(), a = ga();
        this.$get = [ "$filter", "$sniffer", function(c, d) {
            function e(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = fc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b;
            }
            function f(a, b, c, d, f) {
                var h, g = d.inputs;
                if (1 === g.length) {
                    var k = e, g = g[0];
                    return a.$watch(function(a) {
                        var b = g(a);
                        return e(b, k) || (h = d(a, t, t, [ b ]), k = b && fc(b)), h;
                    }, b, c, f);
                }
                for (var l = [], n = [], r = 0, m = g.length; m > r; r++) l[r] = e, n[r] = null;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, f = g.length; f > c; c++) {
                        var k = g[c](a);
                        (b || (b = !e(k, l[c]))) && (n[c] = k, l[c] = k && fc(k));
                    }
                    return b && (h = d(a, t, t, n)), h;
                }, b, c, f);
            }
            function g(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    f = a, z(b) && b.apply(this, arguments), w(a) && d.$$postDigest(function() {
                        w(f) && e();
                    });
                }, c);
            }
            function h(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return m(a, function(a) {
                        w(a) || (b = !1);
                    }), b;
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    g = a, z(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(g) && f();
                    });
                }, c);
            }
            function l(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    z(b) && b.apply(this, arguments), e();
                }, c);
            }
            function k(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, c = c !== h && c !== g ? function(c, d, e, f) {
                    return e = a(c, d, e, f), b(e, c, d);
                } : function(c, d, e, f) {
                    return e = a(c, d, e, f), c = b(e, c, d), w(e) ? c : e;
                };
                return a.$$watchDelegate && a.$$watchDelegate !== f ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = f, 
                c.inputs = a.inputs ? a.inputs : [ a ]), c;
            }
            var n = {
                csp: d.csp,
                expensiveChecks: !1
            }, r = {
                csp: d.csp,
                expensiveChecks: !0
            };
            return function(d, e, C) {
                var m, u, p;
                switch (typeof d) {
                  case "string":
                    p = d = d.trim();
                    var q = C ? a : b;
                    return m = q[p], m || (":" === d.charAt(0) && ":" === d.charAt(1) && (u = !0, d = d.substring(2)), 
                    C = C ? r : n, m = new gc(C), m = new hc(m, c, C).parse(d), m.constant ? m.$$watchDelegate = l : u ? m.$$watchDelegate = m.literal ? h : g : m.inputs && (m.$$watchDelegate = f), 
                    q[p] = m), k(m, e);

                  case "function":
                    return k(d, e);

                  default:
                    return v;
                }
            };
        } ];
    }
    function kf() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(b, a) {
            return td(function(a) {
                b.$evalAsync(a);
            }, a);
        } ];
    }
    function lf() {
        this.$get = [ "$browser", "$exceptionHandler", function(b, a) {
            return td(function(a) {
                b.defer(a);
            }, a);
        } ];
    }
    function td(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c));
                };
            }
            var e = !1;
            return [ d(b), d(c) ];
        }
        function d() {
            this.$$state = {
                status: 0
            };
        }
        function e(a, b) {
            return function(c) {
                b.call(a, c);
            };
        }
        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, b(function() {
                var b, d, e;
                e = c.pending, c.processScheduled = !1, c.pending = t;
                for (var f = 0, g = e.length; g > f; ++f) {
                    d = e[f][0], b = e[f][c.status];
                    try {
                        z(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
                    } catch (h) {
                        d.reject(h), a(h);
                    }
                }
            }));
        }
        function g() {
            this.promise = new d(), this.resolve = e(this, this.resolve), this.reject = e(this, this.reject), 
            this.notify = e(this, this.notify);
        }
        var h = J("$q", TypeError);
        d.prototype = {
            then: function(a, b, c) {
                var d = new g();
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ d, a, b, c ]), 
                0 < this.$$state.status && f(this.$$state), d.promise;
            },
            "catch": function(a) {
                return this.then(null, a);
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return k(b, !0, a);
                }, function(b) {
                    return k(b, !1, a);
                }, b);
            }
        }, g.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
            },
            $$resolve: function(b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    (H(b) || z(b)) && (d = b && b.then), z(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, 
                    this.promise.$$state.status = 1, f(this.promise.$$state));
                } catch (g) {
                    e[1](g), a(g);
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a);
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, f(this.promise.$$state);
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function() {
                    for (var b, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], b = d[f][3];
                        try {
                            e.notify(z(b) ? b(c) : c);
                        } catch (h) {
                            a(h);
                        }
                    }
                });
            }
        };
        var l = function(a, b) {
            var c = new g();
            return b ? c.resolve(a) : c.reject(a), c.promise;
        }, k = function(a, b, c) {
            var d = null;
            try {
                z(c) && (d = c());
            } catch (e) {
                return l(e, !1);
            }
            return d && z(d.then) ? d.then(function() {
                return l(a, b);
            }, function(a) {
                return l(a, !1);
            }) : l(a, b);
        }, n = function(a, b, c, d) {
            var e = new g();
            return e.resolve(a), e.promise.then(b, c, d);
        }, r = function x(a) {
            if (!z(a)) throw h("norslvr", a);
            if (!(this instanceof x)) return new x(a);
            var b = new g();
            return a(function(a) {
                b.resolve(a);
            }, function(a) {
                b.reject(a);
            }), b.promise;
        };
        return r.defer = function() {
            return new g();
        }, r.reject = function(a) {
            var b = new g();
            return b.reject(a), b.promise;
        }, r.when = n, r.resolve = n, r.all = function(a) {
            var b = new g(), c = 0, d = G(a) ? [] : {};
            return m(a, function(a, e) {
                c++, n(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a);
                });
            }), 0 === c && b.resolve(d), b.promise;
        }, r;
    }
    function uf() {
        this.$get = [ "$window", "$timeout", function(b, a) {
            function c() {
                for (var a = 0; a < n.length; a++) {
                    var b = n[a];
                    b && (n[a] = null, b());
                }
                k = n.length = 0;
            }
            function d(a) {
                var b = n.length;
                return k++, n.push(a), 0 === b && (l = h(c)), function() {
                    b >= 0 && (b = n[b] = null, 0 === --k && l && (l(), l = null, n.length = 0));
                };
            }
            var e = b.requestAnimationFrame || b.webkitRequestAnimationFrame, f = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, g = !!e, h = g ? function(a) {
                var b = e(a);
                return function() {
                    f(b);
                };
            } : function(b) {
                var c = a(b, 16.66, !1);
                return function() {
                    a.cancel(c);
                };
            };
            d.supported = g;
            var l, k = 0, n = [];
            return d;
        } ];
    }
    function jf() {
        function b(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++nb, 
                this.$$ChildScope = null;
            }
            return b.prototype = a, b;
        }
        var a = 10, c = J("$rootScope"), d = null, e = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(f, g, h, l) {
            function k(a) {
                a.currentScope.$$destroyed = !0;
            }
            function n() {
                this.$id = ++nb, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                this.$$watchersCount = 0, this.$$isolateBindings = null;
            }
            function r(a) {
                if (p.$$phase) throw c("inprog", p.$$phase);
                p.$$phase = a;
            }
            function s(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent);
            }
            function x(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function q() {}
            function F() {
                for (;I.length; ) try {
                    I.shift()();
                } catch (a) {
                    g(a);
                }
                e = null;
            }
            function u() {
                null === e && (e = l.defer(function() {
                    p.$apply(F);
                }));
            }
            n.prototype = {
                constructor: n,
                $new: function(a, c) {
                    var d;
                    return c = c || this, a ? (d = new n(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), 
                    d = new this.$$ChildScope()), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, 
                    c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (a || c != this) && d.$on("$destroy", k), 
                    d;
                },
                $watch: function(a, b, c, e) {
                    var f = h(a);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, b, c, f, a);
                    var g = this, k = g.$$watchers, l = {
                        fn: b,
                        last: q,
                        get: f,
                        exp: e || a,
                        eq: !!c
                    };
                    return d = null, z(b) || (l.fn = v), k || (k = g.$$watchers = []), k.unshift(l), 
                    s(this, 1), function() {
                        0 <= bb(k, l) && s(g, -1), d = null;
                    };
                },
                $watchGroup: function(a, b) {
                    function c() {
                        h = !1, k ? (k = !1, b(e, e, g)) : b(e, d, g);
                    }
                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                    if (!a.length) {
                        var l = !0;
                        return g.$evalAsync(function() {
                            l && b(e, e, g);
                        }), function() {
                            l = !1;
                        };
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f);
                    }) : (m(a, function(a, b) {
                        var k = g.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, h || (h = !0, g.$evalAsync(c));
                        });
                        f.push(k);
                    }), function() {
                        for (;f.length; ) f.shift()();
                    });
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!A(e)) {
                            if (H(e)) if (Ea(e)) for (f !== r && (f = r, m = f.length = 0, l++), a = e.length, 
                            m !== a && (l++, f.length = m = a), b = 0; a > b; b++) h = f[b], g = e[b], d = h !== h && g !== g, 
                            d || h === g || (l++, f[b] = g); else {
                                f !== s && (f = s = {}, m = 0, l++), a = 0;
                                for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, 
                                d || h === g || (l++, f[b] = g)) : (m++, f[b] = g, l++));
                                if (m > a) for (b in l++, f) e.hasOwnProperty(b) || (m--, delete f[b]);
                            } else f !== e && (f = e, l++);
                            return l;
                        }
                    }
                    c.$stateful = !0;
                    var e, f, g, d = this, k = 1 < b.length, l = 0, n = h(a, c), r = [], s = {}, p = !0, m = 0;
                    return this.$watch(n, function() {
                        if (p ? (p = !1, b(e, e, d)) : b(e, g, d), k) if (H(e)) if (Ea(e)) {
                            g = Array(e.length);
                            for (var a = 0; a < e.length; a++) g[a] = e[a];
                        } else for (a in g = {}, e) Xa.call(e, a) && (g[a] = e[a]); else g = e;
                    });
                },
                $digest: function() {
                    var b, f, h, k, n, s, x, E, I, m = a, u = [];
                    r("$digest"), l.$$checkUrlChange(), this === p && null !== e && (l.defer.cancel(e), 
                    F()), d = null;
                    do {
                        for (s = !1, x = this; t.length; ) {
                            try {
                                I = t.shift(), I.scope.$eval(I.expression, I.locals);
                            } catch (v) {
                                g(v);
                            }
                            d = null;
                        }
                        a: do {
                            if (k = x.$$watchers) for (n = k.length; n--; ) try {
                                if (b = k[n]) if ((f = b.get(x)) === (h = b.last) || (b.eq ? ka(f, h) : "number" == typeof f && "number" == typeof h && isNaN(f) && isNaN(h))) {
                                    if (b === d) {
                                        s = !1;
                                        break a;
                                    }
                                } else s = !0, d = b, b.last = b.eq ? fa(f, null) : f, b.fn(f, h === q ? f : h, x), 
                                5 > m && (E = 4 - m, u[E] || (u[E] = []), u[E].push({
                                    msg: z(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
                                    newVal: f,
                                    oldVal: h
                                }));
                            } catch (A) {
                                g(A);
                            }
                            if (!(k = x.$$watchersCount && x.$$childHead || x !== this && x.$$nextSibling)) for (;x !== this && !(k = x.$$nextSibling); ) x = x.$parent;
                        } while (x = k);
                        if ((s || t.length) && !m--) throw p.$$phase = null, c("infdig", a, u);
                    } while (s || t.length);
                    for (p.$$phase = null; w.length; ) try {
                        w.shift()();
                    } catch (y) {
                        g(y);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === p && l.$$applicationDestroyed(), 
                        s(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) x(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = v, 
                        this.$on = this.$watch = this.$watchGroup = function() {
                            return v;
                        }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                    }
                },
                $eval: function(a, b) {
                    return h(a)(this, b);
                },
                $evalAsync: function(a, b) {
                    p.$$phase || t.length || l.defer(function() {
                        t.length && p.$digest();
                    }), t.push({
                        scope: this,
                        expression: a,
                        locals: b
                    });
                },
                $$postDigest: function(a) {
                    w.push(a);
                },
                $apply: function(a) {
                    try {
                        return r("$apply"), this.$eval(a);
                    } catch (b) {
                        g(b);
                    } finally {
                        p.$$phase = null;
                        try {
                            p.$digest();
                        } catch (c) {
                            throw g(c), c;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a);
                    }
                    var c = this;
                    a && I.push(b), u();
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, x(e, 1, a));
                    };
                },
                $emit: function(a, b) {
                    var d, l, n, c = [], e = this, f = !1, h = {
                        name: a,
                        targetScope: e,
                        stopPropagation: function() {
                            f = !0;
                        },
                        preventDefault: function() {
                            h.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, k = cb([ h ], arguments, 1);
                    do {
                        for (d = e.$$listeners[a] || c, h.currentScope = e, l = 0, n = d.length; n > l; l++) if (d[l]) try {
                            d[l].apply(null, k);
                        } catch (r) {
                            g(r);
                        } else d.splice(l, 1), l--, n--;
                        if (f) return h.currentScope = null, h;
                        e = e.$parent;
                    } while (e);
                    return h.currentScope = null, h;
                },
                $broadcast: function(a, b) {
                    var c = this, d = this, e = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            e.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a]) return e;
                    for (var h, k, f = cb([ e ], arguments, 1); c = d; ) {
                        for (e.currentScope = c, d = c.$$listeners[a] || [], h = 0, k = d.length; k > h; h++) if (d[h]) try {
                            d[h].apply(null, f);
                        } catch (l) {
                            g(l);
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (;c !== this && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    return e.currentScope = null, e;
                }
            };
            var p = new n(), t = p.$$asyncQueue = [], w = p.$$postDigestQueue = [], I = p.$$applyAsyncQueue = [];
            return p;
        } ];
    }
    function he() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
            return w(a) ? (b = a, this) : b;
        }, this.imgSrcSanitizationWhitelist = function(b) {
            return w(b) ? (a = b, this) : a;
        }, this.$get = function() {
            return function(c, d) {
                var f, e = d ? a : b;
                return f = Ba(c).href, "" === f || f.match(e) ? c : "unsafe:" + f;
            };
        };
    }
    function Zf(b) {
        if ("self" === b) return b;
        if (L(b)) {
            if (-1 < b.indexOf("***")) throw Da("iwcard", b);
            return b = ud(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + b + "$");
        }
        if (Za(b)) return new RegExp("^" + b.source + "$");
        throw Da("imatcher");
    }
    function vd(b) {
        var a = [];
        return w(b) && m(b, function(b) {
            a.push(Zf(b));
        }), a;
    }
    function nf() {
        this.SCE_CONTEXTS = pa;
        var b = [ "self" ], a = [];
        this.resourceUrlWhitelist = function(a) {
            return arguments.length && (b = vd(a)), b;
        }, this.resourceUrlBlacklist = function(b) {
            return arguments.length && (a = vd(b)), a;
        }, this.$get = [ "$injector", function(c) {
            function d(a, b) {
                return "self" === a ? gd(b) : !!a.exec(b.href);
            }
            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            var f = function(a) {
                throw Da("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(), h = {};
            return h[pa.HTML] = e(g), h[pa.CSS] = e(g), h[pa.URL] = e(g), h[pa.JS] = e(g), h[pa.RESOURCE_URL] = e(h[pa.URL]), 
            {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw Da("icontext", a, b);
                    if (null === b || b === t || "" === b) return b;
                    if ("string" != typeof b) throw Da("itype", a);
                    return new c(b);
                },
                getTrusted: function(c, e) {
                    if (null === e || e === t || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === pa.RESOURCE_URL) {
                        var r, s, g = Ba(e.toString()), m = !1;
                        for (r = 0, s = b.length; s > r; r++) if (d(b[r], g)) {
                            m = !0;
                            break;
                        }
                        if (m) for (r = 0, s = a.length; s > r; r++) if (d(a[r], g)) {
                            m = !1;
                            break;
                        }
                        if (m) return e;
                        throw Da("insecurl", e.toString());
                    }
                    if (c === pa.HTML) return f(e);
                    throw Da("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function mf() {
        var b = !0;
        this.enabled = function(a) {
            return arguments.length && (b = !!a), b;
        }, this.$get = [ "$parse", "$sceDelegate", function(a, c) {
            if (b && 8 > Ua) throw Da("iequirks");
            var d = ia(pa);
            d.isEnabled = function() {
                return b;
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, b || (d.trustAs = d.getTrusted = function(a, b) {
                return b;
            }, d.valueOf = Ya), d.parseAs = function(b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function(a) {
                    return d.getTrusted(b, a);
                });
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            return m(pa, function(a, b) {
                var c = M(b);
                d[hb("parse_as_" + c)] = function(b) {
                    return e(a, b);
                }, d[hb("get_trusted_" + c)] = function(b) {
                    return f(a, b);
                }, d[hb("trust_as_" + c)] = function(b) {
                    return g(a, b);
                };
            }), d;
        } ];
    }
    function of() {
        this.$get = [ "$window", "$document", function(b, a) {
            var g, c = {}, d = W((/android (\d+)/.exec(M((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, n = !1;
            if (l) {
                for (var r in l) if (k = h.exec(r)) {
                    g = k[0], g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break;
                }
                g || (g = "WebkitOpacity" in l && "webkit"), k = !!("transition" in l || g + "Transition" in l), 
                n = !!("animation" in l || g + "Animation" in l), !d || k && n || (k = L(l.webkitTransition), 
                n = L(l.webkitAnimation));
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Ua) return !1;
                    if (A(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b;
                    }
                    return c[a];
                },
                csp: fb(),
                vendorPrefix: g,
                transitions: k,
                animations: n,
                android: d
            };
        } ];
    }
    function qf() {
        this.$get = [ "$templateCache", "$http", "$q", "$sce", function(b, a, c, d) {
            function e(f, g) {
                e.totalPendingRequests++, L(f) && b.get(f) || (f = d.getTrustedResourceUrl(f));
                var h = a.defaults && a.defaults.transformResponse;
                return G(h) ? h = h.filter(function(a) {
                    return a !== $b;
                }) : h === $b && (h = null), a.get(f, {
                    cache: b,
                    transformResponse: h
                })["finally"](function() {
                    e.totalPendingRequests--;
                }).then(function(a) {
                    return b.put(f, a.data), a.data;
                }, function(a) {
                    if (!g) throw ea("tpload", f, a.status, a.statusText);
                    return c.reject(a);
                });
            }
            return e.totalPendingRequests = 0, e;
        } ];
    }
    function rf() {
        this.$get = [ "$rootScope", "$browser", "$location", function(b, a, c) {
            return {
                findBindings: function(a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    return m(a, function(a) {
                        var d = ca.element(a).data("$binding");
                        d && m(d, function(d) {
                            c ? new RegExp("(^|\\s)" + ud(b) + "(\\s|\\||$)").test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
                        });
                    }), g;
                },
                findModels: function(a, b, c) {
                    for (var g = [ "ng-", "data-ng-", "ng\\:" ], h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length) return l;
                    }
                },
                getLocation: function() {
                    return c.url();
                },
                setLocation: function(a) {
                    a !== c.url() && (c.url(a), b.$digest());
                },
                whenStable: function(b) {
                    a.notifyWhenNoOutstandingRequests(b);
                }
            };
        } ];
    }
    function sf() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(b, a, c, d, e) {
            function f(f, l, k) {
                z(f) || (k = l, l = f, f = v);
                var q, n = za.call(arguments, 3), r = w(k) && !k, s = (r ? d : c).defer(), m = s.promise;
                return q = a.defer(function() {
                    try {
                        s.resolve(f.apply(null, n));
                    } catch (a) {
                        s.reject(a), e(a);
                    } finally {
                        delete g[m.$$timeoutId];
                    }
                    r || b.$apply();
                }, l), m.$$timeoutId = q, g[q] = s, m;
            }
            var g = {};
            return f.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], 
                a.defer.cancel(b.$$timeoutId)) : !1;
            }, f;
        } ];
    }
    function Ba(b) {
        return Ua && (X.setAttribute("href", b), b = X.href), X.setAttribute("href", b), 
        {
            href: X.href,
            protocol: X.protocol ? X.protocol.replace(/:$/, "") : "",
            host: X.host,
            search: X.search ? X.search.replace(/^\?/, "") : "",
            hash: X.hash ? X.hash.replace(/^#/, "") : "",
            hostname: X.hostname,
            port: X.port,
            pathname: "/" === X.pathname.charAt(0) ? X.pathname : "/" + X.pathname
        };
    }
    function gd(b) {
        return b = L(b) ? Ba(b) : b, b.protocol === wd.protocol && b.host === wd.host;
    }
    function tf() {
        this.$get = ra(O);
    }
    function xd(b) {
        function a(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }
        var c = b[0] || {}, d = {}, e = "";
        return function() {
            var b, g, h, l, k;
            if (b = c.cookie || "", b !== e) for (e = b, b = e.split("; "), d = {}, h = 0; h < b.length; h++) g = b[h], 
            l = g.indexOf("="), l > 0 && (k = a(g.substring(0, l)), d[k] === t && (d[k] = a(g.substring(l + 1))));
            return d;
        };
    }
    function xf() {
        this.$get = xd;
    }
    function Lc(b) {
        function a(c, d) {
            if (H(c)) {
                var e = {};
                return m(c, function(b, c) {
                    e[c] = a(c, b);
                }), e;
            }
            return b.factory(c + "Filter", d);
        }
        this.register = a, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter");
            };
        } ], a("currency", yd), a("date", zd), a("filter", $f), a("json", ag), a("limitTo", bg), 
        a("lowercase", cg), a("number", Ad), a("orderBy", Bd), a("uppercase", dg);
    }
    function $f() {
        return function(b, a, c) {
            if (!Ea(b)) {
                if (null == b) return b;
                throw J("filter")("notarray", b);
            }
            var d;
            switch (ic(a)) {
              case "function":
                break;

              case "boolean":
              case "null":
              case "number":
              case "string":
                d = !0;

              case "object":
                a = eg(a, c, d);
                break;

              default:
                return b;
            }
            return Array.prototype.filter.call(b, a);
        };
    }
    function eg(b, a, c) {
        var d = H(b) && "$" in b;
        return !0 === a ? a = ka : z(a) || (a = function(a, b) {
            return A(a) ? !1 : null === a || null === b ? a === b : H(b) || H(a) && !rc(a) ? !1 : (a = M("" + a), 
            b = M("" + b), -1 !== a.indexOf(b));
        }), function(e) {
            return d && !H(e) ? La(e, b.$, a, !1) : La(e, b, a, c);
        };
    }
    function La(b, a, c, d, e) {
        var f = ic(b), g = ic(a);
        if ("string" === g && "!" === a.charAt(0)) return !La(b, a.substring(1), c, d);
        if (G(b)) return b.some(function(b) {
            return La(b, a, c, d);
        });
        switch (f) {
          case "object":
            var h;
            if (d) {
                for (h in b) if ("$" !== h.charAt(0) && La(b[h], a, c, !0)) return !0;
                return e ? !1 : La(b, a, c, !1);
            }
            if ("object" === g) {
                for (h in a) if (e = a[h], !z(e) && !A(e) && (f = "$" === h, !La(f ? b : b[h], e, c, f, f))) return !1;
                return !0;
            }
            return c(b, a);

          case "function":
            return !1;

          default:
            return c(b, a);
        }
    }
    function ic(b) {
        return null === b ? "null" : typeof b;
    }
    function yd(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d, e) {
            return A(d) && (d = a.CURRENCY_SYM), A(e) && (e = a.PATTERNS[1].maxFrac), null == b ? b : Cd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
        };
    }
    function Ad(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return null == b ? b : Cd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
        };
    }
    function Cd(b, a, c, d, e) {
        if (H(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = 1 / 0 === b;
        if (!g && !isFinite(b)) return "";
        var h = b + "", l = "", k = !1, n = [];
        if (g && (l = "∞"), !g && -1 !== h.indexOf("e")) {
            var r = h.match(/([\d\.]+)e(-?)(\d+)/);
            r && "-" == r[2] && r[3] > e + 1 ? b = 0 : (l = h, k = !0);
        }
        if (g || k) e > 0 && 1 > b && (l = b.toFixed(e), b = parseFloat(l)); else {
            g = (h.split(Dd)[1] || "").length, A(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac)), 
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(Dd), h = g[0], g = g[1] || "", r = 0, s = a.lgSize, m = a.gSize;
            if (h.length >= s + m) for (r = h.length - s, k = 0; r > k; k++) 0 === (r - k) % m && 0 !== k && (l += c), 
            l += h.charAt(k);
            for (k = r; k < h.length; k++) 0 === (h.length - k) % s && 0 !== k && (l += c), 
            l += h.charAt(k);
            for (;g.length < e; ) g += "0";
            e && "0" !== e && (l += d + g.substr(0, e));
        }
        return 0 === b && (f = !1), n.push(f ? a.negPre : a.posPre, l, f ? a.negSuf : a.posSuf), 
        n.join("");
    }
    function Gb(b, a, c) {
        var d = "";
        for (0 > b && (d = "-", b = -b), b = "" + b; b.length < a; ) b = "0" + b;
        return c && (b = b.substr(b.length - a)), d + b;
    }
    function Y(b, a, c, d) {
        return c = c || 0, function(e) {
            return e = e["get" + b](), (c > 0 || e > -c) && (e += c), 0 === e && -12 == c && (e = 12), 
            Gb(e, a, d);
        };
    }
    function Hb(b, a) {
        return function(c, d) {
            var e = c["get" + b](), f = rb(a ? "SHORT" + b : b);
            return d[f][e];
        };
    }
    function Ed(b) {
        var a = new Date(b, 0, 1).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a);
    }
    function Fd(b) {
        return function(a) {
            var c = Ed(a.getFullYear());
            return a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c, 
            a = 1 + Math.round(a / 6048e5), Gb(a, b);
        };
    }
    function jc(b, a) {
        return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1];
    }
    function zd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = W(b[9] + b[10]), g = W(b[9] + b[11])), h.call(a, W(b[1]), W(b[2]) - 1, W(b[3])), 
                f = W(b[4] || 0) - f, g = W(b[5] || 0) - g, h = W(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), 
                l.call(a, f, g, h, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e, f) {
            var l, k, g = "", h = [];
            if (e = e || "mediumDate", e = b.DATETIME_FORMATS[e] || e, L(c) && (c = fg.test(c) ? W(c) : a(c)), 
            V(c) && (c = new Date(c)), !aa(c) || !isFinite(c.getTime())) return c;
            for (;e; ) (k = gg.exec(e)) ? (h = cb(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            var n = c.getTimezoneOffset();
            return f && (n = xc(f, c.getTimezoneOffset()), c = Pb(c, f, !0)), m(h, function(a) {
                l = hg[a], g += l ? l(c, b.DATETIME_FORMATS, n) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), g;
        };
    }
    function ag() {
        return function(b, a) {
            return A(a) && (a = 2), db(b, a);
        };
    }
    function bg() {
        return function(b, a, c) {
            return a = 1 / 0 === Math.abs(Number(a)) ? Number(a) : W(a), isNaN(a) ? b : (V(b) && (b = b.toString()), 
            G(b) || L(b) ? (c = !c || isNaN(c) ? 0 : W(c), c = 0 > c && c >= -b.length ? b.length + c : c, 
            a >= 0 ? b.slice(c, c + a) : 0 === c ? b.slice(a, b.length) : b.slice(Math.max(0, c + a), c)) : b);
        };
    }
    function Bd(b) {
        function a(a, c) {
            return c = c ? -1 : 1, a.map(function(a) {
                var d = 1, h = Ya;
                if (z(a)) h = a; else if (L(a) && (("+" == a.charAt(0) || "-" == a.charAt(0)) && (d = "-" == a.charAt(0) ? -1 : 1, 
                a = a.substring(1)), "" !== a && (h = b(a), h.constant))) var l = h(), h = function(a) {
                    return a[l];
                };
                return {
                    get: h,
                    descending: d * c
                };
            });
        }
        function c(a) {
            switch (typeof a) {
              case "number":
              case "boolean":
              case "string":
                return !0;

              default:
                return !1;
            }
        }
        return function(b, e, f) {
            if (!Ea(b)) return b;
            G(e) || (e = [ e ]), 0 === e.length && (e = [ "+" ]);
            var g = a(e, f);
            return b = Array.prototype.map.call(b, function(a, b) {
                return {
                    value: a,
                    predicateValues: g.map(function(d) {
                        var e = d.get(a);
                        return d = typeof e, null === e ? (d = "string", e = "null") : "string" === d ? e = e.toLowerCase() : "object" === d && ("function" == typeof e.valueOf && (e = e.valueOf(), 
                        c(e)) || rc(e) && (e = e.toString(), c(e)) || (e = b)), {
                            value: e,
                            type: d
                        };
                    })
                };
            }), b.sort(function(a, b) {
                for (var c = 0, d = 0, e = g.length; e > d; ++d) {
                    var c = a.predicateValues[d], f = b.predicateValues[d], m = 0;
                    if (c.type === f.type ? c.value !== f.value && (m = c.value < f.value ? -1 : 1) : m = c.type < f.type ? -1 : 1, 
                    c = m * g[d].descending) break;
                }
                return c;
            }), b = b.map(function(a) {
                return a.value;
            });
        };
    }
    function Ma(b) {
        return z(b) && (b = {
            link: b
        }), b.restrict = b.restrict || "AC", ra(b);
    }
    function Gd(b, a, c, d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Ib;
        f.$error = {}, f.$$success = {}, f.$pending = t, f.$name = e(a.name || a.ngForm || "")(c), 
        f.$dirty = !1, f.$pristine = !0, f.$valid = !0, f.$invalid = !1, f.$submitted = !1, 
        h.$addControl(f), f.$rollbackViewValue = function() {
            m(g, function(a) {
                a.$rollbackViewValue();
            });
        }, f.$commitViewValue = function() {
            m(g, function(a) {
                a.$commitViewValue();
            });
        }, f.$addControl = function(a) {
            Ra(a.$name, "input"), g.push(a), a.$name && (f[a.$name] = a);
        }, f.$$renameControl = function(a, b) {
            var c = a.$name;
            f[c] === a && delete f[c], f[b] = a, a.$name = b;
        }, f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name], m(f.$pending, function(b, c) {
                f.$setValidity(c, null, a);
            }), m(f.$error, function(b, c) {
                f.$setValidity(c, null, a);
            }), m(f.$$success, function(b, c) {
                f.$setValidity(c, null, a);
            }), bb(g, a);
        }, Hd({
            ctrl: this,
            $element: b,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [ c ];
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (bb(d, c), 0 === d.length && delete a[b]);
            },
            parentForm: h,
            $animate: d
        }), f.$setDirty = function() {
            d.removeClass(b, Va), d.addClass(b, Jb), f.$dirty = !0, f.$pristine = !1, h.$setDirty();
        }, f.$setPristine = function() {
            d.setClass(b, Va, Jb + " ng-submitted"), f.$dirty = !1, f.$pristine = !0, f.$submitted = !1, 
            m(g, function(a) {
                a.$setPristine();
            });
        }, f.$setUntouched = function() {
            m(g, function(a) {
                a.$setUntouched();
            });
        }, f.$setSubmitted = function() {
            d.addClass(b, "ng-submitted"), f.$submitted = !0, h.$setSubmitted();
        };
    }
    function kc(b) {
        b.$formatters.push(function(a) {
            return b.$isEmpty(a) ? a : a.toString();
        });
    }
    function kb(b, a, c, d, e, f) {
        var g = M(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function(a) {
                h = !0;
            }), a.on("compositionend", function() {
                h = !1, l();
            });
        }
        var l = function(b) {
            if (k && (f.defer.cancel(k), k = null), !h) {
                var e = a.val();
                b = b && b.type, "password" === g || c.ngTrim && "false" === c.ngTrim || (e = R(e)), 
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
            }
        };
        if (e.hasEvent("input")) a.on("input", l); else {
            var k, n = function(a, b, c) {
                k || (k = f.defer(function() {
                    k = null, b && b.value === c || l(a);
                }));
            };
            a.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || n(a, this, this.value);
            }), e.hasEvent("paste") && a.on("paste cut", n);
        }
        a.on("change", l), d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
        };
    }
    function Kb(b, a) {
        return function(c, d) {
            var e, f;
            if (aa(c)) return c;
            if (L(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), 
                ig.test(c)) return new Date(c);
                if (b.lastIndex = 0, e = b.exec(c)) return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, m(e, function(b, c) {
                    c < a.length && (f[a[c]] = +b);
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1e3 * f.sss || 0);
            }
            return NaN;
        };
    }
    function lb(b, a, c, d) {
        return function(e, f, g, h, l, k, n) {
            function r(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }
            function s(a) {
                return w(a) ? aa(a) ? a : c(a) : t;
            }
            Id(e, f, g, h), kb(e, f, g, h, l, k);
            var q, m = h && h.$options && h.$options.timezone;
            if (h.$$parserName = b, h.$parsers.push(function(b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, q), m && (b = Pb(b, m)), b) : t;
            }), h.$formatters.push(function(a) {
                if (a && !aa(a)) throw Lb("datefmt", a);
                return r(a) ? ((q = a) && m && (q = Pb(q, m, !0)), n("date")(a, d, m)) : (q = null, 
                "");
            }), w(g.min) || g.ngMin) {
                var F;
                h.$validators.min = function(a) {
                    return !r(a) || A(F) || c(a) >= F;
                }, g.$observe("min", function(a) {
                    F = s(a), h.$validate();
                });
            }
            if (w(g.max) || g.ngMax) {
                var u;
                h.$validators.max = function(a) {
                    return !r(a) || A(u) || c(a) <= u;
                }, g.$observe("max", function(a) {
                    u = s(a), h.$validate();
                });
            }
        };
    }
    function Id(b, a, c, d) {
        (d.$$hasNativeValidators = H(a[0].validity)) && d.$parsers.push(function(b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? t : b;
        });
    }
    function Jd(b, a, c, d, e) {
        if (w(d)) {
            if (b = b(d), !b.constant) throw J("ngModel")("constexpr", c, d);
            return b(a);
        }
        return e;
    }
    function lc(b, a) {
        return b = "ngClass" + b, [ "$animate", function(c) {
            function d(a, b) {
                var c = [], d = 0;
                a: for (;d < a.length; d++) {
                    for (var e = a[d], n = 0; n < b.length; n++) if (e == b[n]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                var b = [];
                return G(a) ? (m(a, function(a) {
                    b = b.concat(e(a));
                }), b) : L(a) ? a.split(" ") : H(a) ? (m(a, function(a, c) {
                    a && (b = b.concat(c.split(" ")));
                }), b) : a;
            }
            return {
                restrict: "AC",
                link: function(f, g, h) {
                    function l(a, b) {
                        var c = g.data("$classCounts") || ga(), d = [];
                        return m(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a));
                        }), g.data("$classCounts", c), d.join(" ");
                    }
                    function k(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var k = e(b || []);
                            if (n) {
                                if (!ka(b, n)) {
                                    var q = e(n), m = d(k, q), k = d(q, k), m = l(m, 1), k = l(k, -1);
                                    m && m.length && c.addClass(g, m), k && k.length && c.removeClass(g, k);
                                }
                            } else {
                                var m = l(k, 1);
                                h.$addClass(m);
                            }
                        }
                        n = ia(b);
                    }
                    var n;
                    f.$watch(h[b], k, !0), h.$observe("class", function(a) {
                        k(f.$eval(h[b]));
                    }), "ngClass" !== b && f.$watch("$index", function(c, d) {
                        var g = 1 & c;
                        if (g !== (1 & d)) {
                            var k = e(f.$eval(h[b]));
                            g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
                        }
                    });
                }
            };
        } ];
    }
    function Hd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), 
            f[a] = !1);
        }
        function c(b, c) {
            b = b ? "-" + Bc(b, "-") : "", a(mb + b, !0 === c), a(Kd + b, !1 === c);
        }
        var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
        f[Kd] = !(f[mb] = e.hasClass(mb)), d.$setValidity = function(b, e, f) {
            e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), 
            Ld(d.$pending) && (d.$pending = t)), ab(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), 
            h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f)), d.$pending ? (a(Md, !0), 
            d.$valid = d.$invalid = t, c("", null)) : (a(Md, !1), d.$valid = Ld(d.$error), d.$invalid = !d.$valid, 
            c("", d.$valid)), e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null, 
            c(b, e), l.$setValidity(b, e, d);
        };
    }
    function Ld(b) {
        if (b) for (var a in b) if (b.hasOwnProperty(a)) return !1;
        return !0;
    }
    var Ua, y, la, gb, jg = /^\/(.+)\/([a-z]*)$/, M = function(b) {
        return L(b) ? b.toLowerCase() : b;
    }, Xa = Object.prototype.hasOwnProperty, rb = function(b) {
        return L(b) ? b.toUpperCase() : b;
    }, za = [].slice, Mf = [].splice, kg = [].push, sa = Object.prototype.toString, sc = Object.getPrototypeOf, Fa = J("ng"), ca = O.angular || (O.angular = {}), nb = 0;
    Ua = U.documentMode, v.$inject = [], Ya.$inject = [];
    var Rb, G = Array.isArray, uc = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/, R = function(b) {
        return L(b) ? b.trim() : b;
    }, ud = function(b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, fb = function() {
        if (w(fb.isActive_)) return fb.isActive_;
        var b = !(!U.querySelector("[ng-csp]") && !U.querySelector("[data-ng-csp]"));
        if (!b) try {
            new Function("");
        } catch (a) {
            b = !0;
        }
        return fb.isActive_ = b;
    }, pb = function() {
        if (w(pb.name_)) return pb.name_;
        var b, a, d, e, c = Oa.length;
        for (a = 0; c > a; ++a) if (d = Oa[a], b = U.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
            e = b.getAttribute(d + "jq");
            break;
        }
        return pb.name_ = e;
    }, Oa = [ "ng-", "data-ng-", "ng:", "x-ng-" ], be = /[A-Z]/g, Cc = !1, qa = 1, Na = 3, fe = {
        full: "1.4.3",
        major: 1,
        minor: 4,
        dot: 3,
        codeName: "foam-acceleration"
    };
    Q.expando = "ng339";
    var ib = Q.cache = {}, Df = 1;
    Q._data = function(b) {
        return this.cache[b[this.expando]] || {};
    };
    var yf = /([\:\-\_]+(.))/g, zf = /^moz([A-Z])/, lg = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Ub = J("jqLite"), Cf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Tb = /<|&#?\w+;/, Af = /<([\w:]+)/, Bf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, na = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    na.optgroup = na.option, na.tbody = na.tfoot = na.colgroup = na.caption = na.thead, 
    na.th = na.td;
    var Pa = Q.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0, b());
            }
            var c = !1;
            "complete" === U.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), Q(O).on("load", a));
        },
        toString: function() {
            var b = [];
            return m(this, function(a) {
                b.push("" + a);
            }), "[" + b.join(", ") + "]";
        },
        eq: function(b) {
            return y(b >= 0 ? this[b] : this[this.length + b]);
        },
        length: 0,
        push: kg,
        sort: [].sort,
        splice: [].splice
    }, Ab = {};
    m("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        Ab[M(b)] = b;
    });
    var Tc = {};
    m("input select option textarea button form details".split(" "), function(b) {
        Tc[b] = !0;
    });
    var Uc = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    m({
        data: Wb,
        removeData: ub,
        hasData: function(b) {
            for (var a in ib[b.ng339]) return !0;
            return !1;
        }
    }, function(b, a) {
        Q[a] = b;
    }), m({
        data: Wb,
        inheritedData: zb,
        scope: function(b) {
            return y.data(b, "$scope") || zb(b.parentNode || b, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(b) {
            return y.data(b, "$isolateScope") || y.data(b, "$isolateScopeNoTemplate");
        },
        controller: Qc,
        injector: function(b) {
            return zb(b, "$injector");
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a);
        },
        hasClass: wb,
        css: function(b, a, c) {
            return a = hb(a), w(c) ? void (b.style[a] = c) : b.style[a];
        },
        attr: function(b, a, c) {
            var d = b.nodeType;
            if (d !== Na && 2 !== d && 8 !== d) if (d = M(a), Ab[d]) {
                if (!w(c)) return b[a] || (b.attributes.getNamedItem(a) || v).specified ? d : t;
                c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
            } else if (w(c)) b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), 
            null === b ? t : b;
        },
        prop: function(b, a, c) {
            return w(c) ? void (b[a] = c) : b[a];
        },
        text: function() {
            function b(a, b) {
                if (A(b)) {
                    var d = a.nodeType;
                    return d === qa || d === Na ? a.textContent : "";
                }
                a.textContent = b;
            }
            return b.$dv = "", b;
        }(),
        val: function(b, a) {
            if (A(a)) {
                if (b.multiple && "select" === ta(b)) {
                    var c = [];
                    return m(b.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    }), 0 === c.length ? null : c;
                }
                return b.value;
            }
            b.value = a;
        },
        html: function(b, a) {
            return A(a) ? b.innerHTML : (tb(b, !0), void (b.innerHTML = a));
        },
        empty: Rc
    }, function(b, a) {
        Q.prototype[a] = function(a, d) {
            var e, f, g = this.length;
            if (b !== Rc && (2 == b.length && b !== wb && b !== Qc ? a : d) === t) {
                if (H(a)) {
                    for (e = 0; g > e; e++) if (b === Wb) b(this[e], a); else for (f in a) b(this[e], f, a[f]);
                    return this;
                }
                for (e = b.$dv, g = e === t ? Math.min(g, 1) : g, f = 0; g > f; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h;
                }
                return e;
            }
            for (e = 0; g > e; e++) b(this[e], a, d);
            return this;
        };
    }), m({
        removeData: ub,
        on: function a(c, d, e, f) {
            if (w(f)) throw Ub("onargs");
            if (Mc(c)) {
                var g = vb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h = g.handle = Gf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [ d ], l = g.length; l--; ) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, lg[d], function(a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d);
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]), k.push(e);
                }
            }
        },
        off: Pc,
        one: function(a, c, d) {
            a = y(a), a.on(c, function f() {
                a.off(c, d), a.off(c, f);
            }), a.on(c, d);
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            tb(a), m(new Q(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a), d = c;
            });
        },
        children: function(a) {
            var c = [];
            return m(a.childNodes, function(a) {
                a.nodeType === qa && c.push(a);
            }), c;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, c) {
            var d = a.nodeType;
            if (d === qa || 11 === d) {
                c = new Q(c);
                for (var d = 0, e = c.length; e > d; d++) a.appendChild(c[d]);
            }
        },
        prepend: function(a, c) {
            if (a.nodeType === qa) {
                var d = a.firstChild;
                m(new Q(c), function(c) {
                    a.insertBefore(c, d);
                });
            }
        },
        wrap: function(a, c) {
            c = y(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a), c.appendChild(a);
        },
        remove: Xb,
        detach: function(a) {
            Xb(a, !0);
        },
        after: function(a, c) {
            var d = a, e = a.parentNode;
            c = new Q(c);
            for (var f = 0, g = c.length; g > f; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling), d = h;
            }
        },
        addClass: yb,
        removeClass: xb,
        toggleClass: function(a, c, d) {
            c && m(c.split(" "), function(c) {
                var f = d;
                A(f) && (f = !wb(a, c)), (f ? yb : xb)(a, c);
            });
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
        },
        clone: Vb,
        triggerHandler: function(a, c, d) {
            var e, f, g = c.type || c, h = vb(a);
            (h = (h = h && h.events) && h[g]) && (e = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped;
                },
                stopPropagation: v,
                type: g,
                target: a
            }, c.type && (e = P(e, c)), c = ia(h), f = d ? [ e ].concat(d) : [ e ], m(c, function(c) {
                e.isImmediatePropagationStopped() || c.apply(a, f);
            }));
        }
    }, function(a, c) {
        Q.prototype[c] = function(c, e, f) {
            for (var g, h = 0, l = this.length; l > h; h++) A(g) ? (g = a(this[h], c, e, f), 
            w(g) && (g = y(g))) : Oc(g, a(this[h], c, e, f));
            return w(g) ? g : this;
        }, Q.prototype.bind = Q.prototype.on, Q.prototype.unbind = Q.prototype.off;
    }), Sa.prototype = {
        put: function(a, c) {
            this[Ga(a, this.nextUid)] = c;
        },
        get: function(a) {
            return this[Ga(a, this.nextUid)];
        },
        remove: function(a) {
            var c = this[a = Ga(a, this.nextUid)];
            return delete this[a], c;
        }
    };
    var wf = [ function() {
        this.$get = [ function() {
            return Sa;
        } ];
    } ], Wc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, mg = /,/, ng = /^\s*(_?)(\S+?)\1\s*$/, Vc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ha = J("$injector");
    eb.$$annotate = function(a, c, d) {
        var e;
        if ("function" == typeof a) {
            if (!(e = a.$inject)) {
                if (e = [], a.length) {
                    if (c) throw L(d) && d || (d = a.name || Hf(a)), Ha("strictdi", d);
                    c = a.toString().replace(Vc, ""), c = c.match(Wc), m(c[1].split(mg), function(a) {
                        a.replace(ng, function(a, c, d) {
                            e.push(d);
                        });
                    });
                }
                a.$inject = e;
            }
        } else G(a) ? (c = a.length - 1, Qa(a[c], "fn"), e = a.slice(0, c)) : Qa(a, "fn", !0);
        return e;
    };
    var Nd = J("$animate"), Ue = function() {
        this.$get = [ "$q", "$$rAF", function(a, c) {
            function d() {}
            return d.all = v, d.chain = v, d.prototype = {
                end: v,
                cancel: v,
                resume: v,
                pause: v,
                complete: v,
                then: function(d, f) {
                    return a(function(a) {
                        c(function() {
                            a();
                        });
                    }).then(d, f);
                }
            }, d;
        } ];
    }, Te = function() {
        var a = new Sa(), c = [];
        this.$get = [ "$$AnimateRunner", "$rootScope", function(d, e) {
            function f(d, f, l) {
                var k = a.get(d);
                k || (a.put(d, k = {}), c.push(d)), f && m(f.split(" "), function(a) {
                    a && (k[a] = !0);
                }), l && m(l.split(" "), function(a) {
                    a && (k[a] = !1);
                }), 1 < c.length || e.$$postDigest(function() {
                    m(c, function(c) {
                        var d = a.get(c);
                        if (d) {
                            var e = If(c.attr("class")), f = "", g = "";
                            m(d, function(a, c) {
                                a !== !!e[c] && (a ? f += (f.length ? " " : "") + c : g += (g.length ? " " : "") + c);
                            }), m(c, function(a) {
                                f && yb(a, f), g && xb(a, g);
                            }), a.remove(c);
                        }
                    }), c.length = 0;
                });
            }
            return {
                enabled: v,
                on: v,
                off: v,
                pin: v,
                push: function(a, c, e, k) {
                    return k && k(), e = e || {}, e.from && a.css(e.from), e.to && a.css(e.to), (e.addClass || e.removeClass) && f(a, e.addClass, e.removeClass), 
                    new d();
                }
            };
        } ];
    }, Se = [ "$provide", function(a) {
        var c = this;
        this.$$registeredAnimations = Object.create(null), this.register = function(d, e) {
            if (d && "." !== d.charAt(0)) throw Nd("notcsel", d);
            var f = d + "-animation";
            c.$$registeredAnimations[d.substr(1)] = f, a.factory(f, e);
        }, this.classNameFilter = function(a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Nd("nongcls", "ng-animate");
            return this.$$classNameFilter;
        }, this.$get = [ "$$animateQueue", function(a) {
            function c(a, d, e) {
                if (e) {
                    var l;
                    a: {
                        for (l = 0; l < e.length; l++) {
                            var k = e[l];
                            if (1 === k.nodeType) {
                                l = k;
                                break a;
                            }
                        }
                        l = void 0;
                    }
                    !l || l.parentNode || l.previousElementSibling || (e = null);
                }
                e ? e.after(a) : d.prepend(a);
            }
            return {
                on: a.on,
                off: a.off,
                pin: a.pin,
                enabled: a.enabled,
                cancel: function(a) {
                    a.end && a.end();
                },
                enter: function(f, g, h, l) {
                    return g = g && y(g), h = h && y(h), g = g || h.parent(), c(f, g, h), a.push(f, "enter", Ia(l));
                },
                move: function(f, g, h, l) {
                    return g = g && y(g), h = h && y(h), g = g || h.parent(), c(f, g, h), a.push(f, "move", Ia(l));
                },
                leave: function(c, e) {
                    return a.push(c, "leave", Ia(e), function() {
                        c.remove();
                    });
                },
                addClass: function(c, e, h) {
                    return h = Ia(h), h.addClass = jb(h.addclass, e), a.push(c, "addClass", h);
                },
                removeClass: function(c, e, h) {
                    return h = Ia(h), h.removeClass = jb(h.removeClass, e), a.push(c, "removeClass", h);
                },
                setClass: function(c, e, h, l) {
                    return l = Ia(l), l.addClass = jb(l.addClass, e), l.removeClass = jb(l.removeClass, h), 
                    a.push(c, "setClass", l);
                },
                animate: function(c, e, h, l, k) {
                    return k = Ia(k), k.from = k.from ? P(k.from, e) : e, k.to = k.to ? P(k.to, h) : h, 
                    k.tempClasses = jb(k.tempClasses, l || "ng-inline-animate"), a.push(c, "animate", k);
                }
            };
        } ];
    } ], ea = J("$compile");
    Ec.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Zc = /^((?:x|data)[\:\-_])/i, Nf = J("$controller"), Xc = /^(\S+)(\s+as\s+(\w+))?$/, cd = "application/json", ac = {
        "Content-Type": cd + ";charset=utf-8"
    }, Pf = /^\[|^\{(?!\{)/, Qf = {
        "[": /]$/,
        "{": /}$/
    }, Of = /^\)\]\}',?\n/, Ka = ca.$interpolateMinErr = J("$interpolate");
    Ka.throwNoconcat = function(a) {
        throw Ka("noconcat", a);
    }, Ka.interr = function(a, c) {
        return Ka("interr", a, c.toString());
    };
    var og = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Tf = {
        http: 80,
        https: 443,
        ftp: 21
    }, Cb = J("$location"), pg = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Db("$$absUrl"),
        url: function(a) {
            if (A(a)) return this.$$url;
            var c = og.exec(a);
            return (c[1] || "" === a) && this.path(decodeURIComponent(c[1])), (c[2] || c[1] || "" === a) && this.search(c[3] || ""), 
            this.hash(c[5] || ""), this;
        },
        protocol: Db("$$protocol"),
        host: Db("$$host"),
        port: Db("$$port"),
        path: kd("$$path", function(a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, c) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (L(a) || V(a)) a = a.toString(), this.$$search = zc(a); else {
                    if (!H(a)) throw Cb("isrcharg");
                    a = fa(a, {}), m(a, function(c, e) {
                        null == c && delete a[e];
                    }), this.$$search = a;
                }
                break;

              default:
                A(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
            }
            return this.$$compose(), this;
        },
        hash: kd("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    m([ jd, ec, dc ], function(a) {
        a.prototype = Object.create(pg), a.prototype.state = function(c) {
            if (!arguments.length) return this.$$state;
            if (a !== dc || !this.$$html5) throw Cb("nostate");
            return this.$$state = A(c) ? null : c, this;
        };
    });
    var da = J("$parse"), Uf = Function.prototype.call, Vf = Function.prototype.apply, Wf = Function.prototype.bind, Mb = ga();
    m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        Mb[a] = !0;
    });
    var qg = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, gc = function(a) {
        this.options = a;
    };
    gc.prototype = {
        constructor: gc,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length; ) if (a = this.text.charAt(this.index), 
            '"' === a || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(a)) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                var c = a + this.peek(), d = c + this.peek(2), e = Mb[c], f = Mb[d];
                Mb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
            }
            return this.tokens;
        },
        is: function(a, c) {
            return -1 !== c.indexOf(a);
        },
        peek: function(a) {
            return a = a || 1, this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, c, d) {
            throw d = d || this.index, c = w(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d, 
            da("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length; ) {
                var d = M(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d; else {
                        if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            this.tokens.push({
                index: c,
                text: a,
                constant: !0,
                value: Number(a)
            });
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length; ) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c)) break;
                this.index++;
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            });
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length; ) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), 
                this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += qg[g] || g, f = !1; else if ("\\" === g) f = !0; else {
                    if (g === a) return this.index++, void this.tokens.push({
                        index: c,
                        text: e,
                        constant: !0,
                        value: d
                    });
                    d += g;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", c);
        }
    };
    var q = function(a, c) {
        this.lexer = a, this.options = c;
    };
    q.Program = "Program", q.ExpressionStatement = "ExpressionStatement", q.AssignmentExpression = "AssignmentExpression", 
    q.ConditionalExpression = "ConditionalExpression", q.LogicalExpression = "LogicalExpression", 
    q.BinaryExpression = "BinaryExpression", q.UnaryExpression = "UnaryExpression", 
    q.CallExpression = "CallExpression", q.MemberExpression = "MemberExpression", q.Identifier = "Identifier", 
    q.Literal = "Literal", q.ArrayExpression = "ArrayExpression", q.Property = "Property", 
    q.ObjectExpression = "ObjectExpression", q.ThisExpression = "ThisExpression", q.NGValueParameter = "NGValueParameter", 
    q.prototype = {
        ast: function(a) {
            return this.text = a, this.tokens = this.lexer.lex(a), a = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            a;
        },
        program: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), 
            !this.expect(";")) return {
                type: q.Program,
                body: a
            };
        },
        expressionStatement: function() {
            return {
                type: q.ExpressionStatement,
                expression: this.filterChain()
            };
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|"); ) a = this.filter(a);
            return a;
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: q.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a;
        },
        ternary: function() {
            var c, d, a = this.logicalOR();
            return this.expect("?") && (c = this.expression(), this.consume(":")) ? (d = this.expression(), 
            {
                type: q.ConditionalExpression,
                test: a,
                alternate: c,
                consequent: d
            }) : a;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||"); ) a = {
                type: q.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a;
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&"); ) a = {
                type: q.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a;
        },
        equality: function() {
            for (var c, a = this.relational(); c = this.expect("==", "!=", "===", "!=="); ) a = {
                type: q.BinaryExpression,
                operator: c.text,
                left: a,
                right: this.relational()
            };
            return a;
        },
        relational: function() {
            for (var c, a = this.additive(); c = this.expect("<", ">", "<=", ">="); ) a = {
                type: q.BinaryExpression,
                operator: c.text,
                left: a,
                right: this.additive()
            };
            return a;
        },
        additive: function() {
            for (var c, a = this.multiplicative(); c = this.expect("+", "-"); ) a = {
                type: q.BinaryExpression,
                operator: c.text,
                left: a,
                right: this.multiplicative()
            };
            return a;
        },
        multiplicative: function() {
            for (var c, a = this.unary(); c = this.expect("*", "/", "%"); ) a = {
                type: q.BinaryExpression,
                operator: c.text,
                left: a,
                right: this.unary()
            };
            return a;
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: q.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary();
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = fa(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var c; c = this.expect("(", "[", "."); ) "(" === c.text ? (a = {
                type: q.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === c.text ? (a = {
                type: q.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === c.text ? a = {
                type: q.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a;
        },
        filter: function(a) {
            a = [ a ];
            for (var c = {
                type: q.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":"); ) a.push(this.expression());
            return c;
        },
        parseArguments: function() {
            var a = [];
            if (")" !== this.peekToken().text) do a.push(this.expression()); while (this.expect(","));
            return a;
        },
        identifier: function() {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {
                type: q.Identifier,
                name: a.text
            };
        },
        constant: function() {
            return {
                type: q.Literal,
                value: this.consume().value
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                a.push(this.expression());
            } while (this.expect(","));
            return this.consume("]"), {
                type: q.ArrayExpression,
                elements: a
            };
        },
        object: function() {
            var c, a = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                c = {
                    type: q.Property,
                    kind: "init"
                }, this.peek().constant ? c.key = this.constant() : this.peek().identifier ? c.key = this.identifier() : this.throwError("invalid key", this.peek()), 
                this.consume(":"), c.value = this.expression(), a.push(c);
            } while (this.expect(","));
            return this.consume("}"), {
                type: q.ObjectExpression,
                properties: a
            };
        },
        throwError: function(a, c) {
            throw da("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw da("ueoe", this.text);
            var c = this.expect(a);
            return c || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), 
            c;
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw da("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, c, d, e) {
            return this.peekAhead(0, a, c, d, e);
        },
        peekAhead: function(a, c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a;
            }
            return !1;
        },
        expect: function(a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
        },
        constants: {
            "true": {
                type: q.Literal,
                value: !0
            },
            "false": {
                type: q.Literal,
                value: !1
            },
            "null": {
                type: q.Literal,
                value: null
            },
            undefined: {
                type: q.Literal,
                value: t
            },
            "this": {
                type: q.ThisExpression
            }
        }
    }, rd.prototype = {
        compile: function(a, c) {
            var d = this, e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: c,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, T(e, d.$filter);
            var g, f = "";
            return this.stage = "assign", (g = pd(e)) && (this.state.computing = "assign", f = this.nextId(), 
            this.recurse(g, f), f = "fn.assign=" + this.generateFunction("assign", "s,v,l")), 
            g = nd(e.body), d.stage = "inputs", m(g, function(a, c) {
                var e = "fn" + c;
                d.state[e] = {
                    vars: [],
                    body: [],
                    own: {}
                }, d.state.computing = e;
                var f = d.nextId();
                d.recurse(a, f), d.return_(f), d.state.inputs.push(e), a.watchId = c;
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e), f = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + f + this.watchFns() + "return fn;", 
            f = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", f)(this.$filter, Ca, oa, ld, Xf, md, a), 
            this.state = this.stage = t, f.literal = qd(e), f.constant = e.constant, f;
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [], c = this.state.inputs, d = this;
            return m(c, function(c) {
                a.push("var " + c + "=" + d.generateFunction(c, "s"));
            }), c.length && a.push("fn.inputs=[" + c.join(",") + "];"), a.join("");
        },
        generateFunction: function(a, c) {
            return "function(" + c + "){" + this.varsPrefix(a) + this.body(a) + "};";
        },
        filterPrefix: function() {
            var a = [], c = this;
            return m(this.state.filters, function(d, e) {
                a.push(d + "=$filter(" + c.escape(e) + ")");
            }), a.length ? "var " + a.join(",") + ";" : "";
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
        },
        body: function(a) {
            return this.state[a].body.join("");
        },
        recurse: function(a, c, d, e, f, g) {
            var h, l, n, r, k = this;
            if (e = e || v, !g && w(a.watchId)) c = c || this.nextId(), this.if_("i", this.lazyAssign(c, this.computedMember("i", a.watchId)), this.lazyRecurse(a, c, d, e, f, !0)); else switch (a.type) {
              case q.Program:
                m(a.body, function(c, d) {
                    k.recurse(c.expression, t, t, function(a) {
                        l = a;
                    }), d !== a.body.length - 1 ? k.current().body.push(l, ";") : k.return_(l);
                });
                break;

              case q.Literal:
                r = this.escape(a.value), this.assign(c, r), e(r);
                break;

              case q.UnaryExpression:
                this.recurse(a.argument, t, t, function(a) {
                    l = a;
                }), r = a.operator + "(" + this.ifDefined(l, 0) + ")", this.assign(c, r), e(r);
                break;

              case q.BinaryExpression:
                this.recurse(a.left, t, t, function(a) {
                    h = a;
                }), this.recurse(a.right, t, t, function(a) {
                    l = a;
                }), r = "+" === a.operator ? this.plus(h, l) : "-" === a.operator ? this.ifDefined(h, 0) + a.operator + this.ifDefined(l, 0) : "(" + h + ")" + a.operator + "(" + l + ")", 
                this.assign(c, r), e(r);
                break;

              case q.LogicalExpression:
                c = c || this.nextId(), k.recurse(a.left, c), k.if_("&&" === a.operator ? c : k.not(c), k.lazyRecurse(a.right, c)), 
                e(c);
                break;

              case q.ConditionalExpression:
                c = c || this.nextId(), k.recurse(a.test, c), k.if_(c, k.lazyRecurse(a.alternate, c), k.lazyRecurse(a.consequent, c)), 
                e(c);
                break;

              case q.Identifier:
                c = c || this.nextId(), d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), 
                d.computed = !1, d.name = a.name), Ca(a.name), k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function() {
                    k.if_("inputs" === k.stage || "s", function() {
                        f && 1 !== f && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}")), 
                        k.assign(c, k.nonComputedMember("s", a.name));
                    });
                }, c && k.lazyAssign(c, k.nonComputedMember("l", a.name))), (k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(c), 
                e(c);
                break;

              case q.MemberExpression:
                h = d && (d.context = this.nextId()) || this.nextId(), c = c || this.nextId(), k.recurse(a.object, h, t, function() {
                    k.if_(k.notNull(h), function() {
                        a.computed ? (l = k.nextId(), k.recurse(a.property, l), k.addEnsureSafeMemberName(l), 
                        f && 1 !== f && k.if_(k.not(k.computedMember(h, l)), k.lazyAssign(k.computedMember(h, l), "{}")), 
                        r = k.ensureSafeObject(k.computedMember(h, l)), k.assign(c, r), d && (d.computed = !0, 
                        d.name = l)) : (Ca(a.property.name), f && 1 !== f && k.if_(k.not(k.nonComputedMember(h, a.property.name)), k.lazyAssign(k.nonComputedMember(h, a.property.name), "{}")), 
                        r = k.nonComputedMember(h, a.property.name), (k.state.expensiveChecks || Fb(a.property.name)) && (r = k.ensureSafeObject(r)), 
                        k.assign(c, r), d && (d.computed = !1, d.name = a.property.name));
                    }, function() {
                        k.assign(c, "undefined");
                    }), e(c);
                }, !!f);
                break;

              case q.CallExpression:
                c = c || this.nextId(), a.filter ? (l = k.filter(a.callee.name), n = [], m(a.arguments, function(a) {
                    var c = k.nextId();
                    k.recurse(a, c), n.push(c);
                }), r = l + "(" + n.join(",") + ")", k.assign(c, r), e(c)) : (l = k.nextId(), h = {}, 
                n = [], k.recurse(a.callee, l, h, function() {
                    k.if_(k.notNull(l), function() {
                        k.addEnsureSafeFunction(l), m(a.arguments, function(a) {
                            k.recurse(a, k.nextId(), t, function(a) {
                                n.push(k.ensureSafeObject(a));
                            });
                        }), h.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(h.context), r = k.member(h.context, h.name, h.computed) + "(" + n.join(",") + ")") : r = l + "(" + n.join(",") + ")", 
                        r = k.ensureSafeObject(r), k.assign(c, r);
                    }, function() {
                        k.assign(c, "undefined");
                    }), e(c);
                }));
                break;

              case q.AssignmentExpression:
                if (l = this.nextId(), h = {}, !od(a.left)) throw da("lval");
                this.recurse(a.left, t, h, function() {
                    k.if_(k.notNull(h.context), function() {
                        k.recurse(a.right, l), k.addEnsureSafeObject(k.member(h.context, h.name, h.computed)), 
                        r = k.member(h.context, h.name, h.computed) + a.operator + l, k.assign(c, r), e(c || r);
                    });
                }, 1);
                break;

              case q.ArrayExpression:
                n = [], m(a.elements, function(a) {
                    k.recurse(a, k.nextId(), t, function(a) {
                        n.push(a);
                    });
                }), r = "[" + n.join(",") + "]", this.assign(c, r), e(r);
                break;

              case q.ObjectExpression:
                n = [], m(a.properties, function(a) {
                    k.recurse(a.value, k.nextId(), t, function(c) {
                        n.push(k.escape(a.key.type === q.Identifier ? a.key.name : "" + a.key.value) + ":" + c);
                    });
                }), r = "{" + n.join(",") + "}", this.assign(c, r), e(r);
                break;

              case q.ThisExpression:
                this.assign(c, "s"), e("s");
                break;

              case q.NGValueParameter:
                this.assign(c, "v"), e("v");
            }
        },
        getHasOwnProperty: function(a, c) {
            var d = a + "." + c, e = this.current().own;
            return e.hasOwnProperty(d) || (e[d] = this.nextId(!1, a + "&&(" + this.escape(c) + " in " + a + ")")), 
            e[d];
        },
        assign: function(a, c) {
            return a ? (this.current().body.push(a, "=", c, ";"), a) : void 0;
        },
        filter: function(a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), 
            this.state.filters[a];
        },
        ifDefined: function(a, c) {
            return "ifDefined(" + a + "," + this.escape(c) + ")";
        },
        plus: function(a, c) {
            return "plus(" + a + "," + c + ")";
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";");
        },
        if_: function(a, c, d) {
            if (!0 === a) c(); else {
                var e = this.current().body;
                e.push("if(", a, "){"), c(), e.push("}"), d && (e.push("else{"), d(), e.push("}"));
            }
        },
        not: function(a) {
            return "!(" + a + ")";
        },
        notNull: function(a) {
            return a + "!=null";
        },
        nonComputedMember: function(a, c) {
            return a + "." + c;
        },
        computedMember: function(a, c) {
            return a + "[" + c + "]";
        },
        member: function(a, c, d) {
            return d ? this.computedMember(a, c) : this.nonComputedMember(a, c);
        },
        addEnsureSafeObject: function(a) {
            this.current().body.push(this.ensureSafeObject(a), ";");
        },
        addEnsureSafeMemberName: function(a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";");
        },
        addEnsureSafeFunction: function(a) {
            this.current().body.push(this.ensureSafeFunction(a), ";");
        },
        ensureSafeObject: function(a) {
            return "ensureSafeObject(" + a + ",text)";
        },
        ensureSafeMemberName: function(a) {
            return "ensureSafeMemberName(" + a + ",text)";
        },
        ensureSafeFunction: function(a) {
            return "ensureSafeFunction(" + a + ",text)";
        },
        lazyRecurse: function(a, c, d, e, f, g) {
            var h = this;
            return function() {
                h.recurse(a, c, d, e, f, g);
            };
        },
        lazyAssign: function(a, c) {
            var d = this;
            return function() {
                d.assign(a, c);
            };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(a) {
            if (L(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (V(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if ("undefined" == typeof a) return "undefined";
            throw da("esc");
        },
        nextId: function(a, c) {
            var d = "v" + this.state.nextId++;
            return a || this.current().vars.push(d + (c ? "=" + c : "")), d;
        },
        current: function() {
            return this.state[this.state.computing];
        }
    }, sd.prototype = {
        compile: function(a, c) {
            var d = this, e = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = c, T(e, d.$filter);
            var f, g;
            (f = pd(e)) && (g = this.recurse(f)), f = nd(e.body);
            var h;
            f && (h = [], m(f, function(a, c) {
                var e = d.recurse(a);
                a.input = e, h.push(e), a.watchId = c;
            }));
            var l = [];
            return m(e.body, function(a) {
                l.push(d.recurse(a.expression));
            }), f = 0 === e.body.length ? function() {} : 1 === e.body.length ? l[0] : function(a, c) {
                var d;
                return m(l, function(e) {
                    d = e(a, c);
                }), d;
            }, g && (f.assign = function(a, c, d) {
                return g(a, d, c);
            }), h && (f.inputs = h), f.literal = qd(e), f.constant = e.constant, f;
        },
        recurse: function(a, c, d) {
            var e, f, h, g = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
              case q.Literal:
                return this.value(a.value, c);

              case q.UnaryExpression:
                return f = this.recurse(a.argument), this["unary" + a.operator](f, c);

              case q.BinaryExpression:
                return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);

              case q.LogicalExpression:
                return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);

              case q.ConditionalExpression:
                return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), c);

              case q.Identifier:
                return Ca(a.name, g.expression), g.identifier(a.name, g.expensiveChecks || Fb(a.name), c, d, g.expression);

              case q.MemberExpression:
                return e = this.recurse(a.object, !1, !!d), a.computed || (Ca(a.property.name, g.expression), 
                f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(e, f, c, d, g.expression) : this.nonComputedMember(e, f, g.expensiveChecks, c, d, g.expression);

              case q.CallExpression:
                return h = [], m(a.arguments, function(a) {
                    h.push(g.recurse(a));
                }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), 
                a.filter ? function(a, d, e, g) {
                    for (var m = [], q = 0; q < h.length; ++q) m.push(h[q](a, d, e, g));
                    return a = f.apply(t, m, g), c ? {
                        context: t,
                        name: t,
                        value: a
                    } : a;
                } : function(a, d, e, r) {
                    var q, m = f(a, d, e, r);
                    if (null != m.value) {
                        oa(m.context, g.expression), ld(m.value, g.expression), q = [];
                        for (var t = 0; t < h.length; ++t) q.push(oa(h[t](a, d, e, r), g.expression));
                        q = oa(m.value.apply(m.context, q), g.expression);
                    }
                    return c ? {
                        value: q
                    } : q;
                };

              case q.AssignmentExpression:
                return e = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function(a, d, h, r) {
                    var m = e(a, d, h, r);
                    return a = f(a, d, h, r), oa(m.value, g.expression), m.context[m.name] = a, c ? {
                        value: a
                    } : a;
                };

              case q.ArrayExpression:
                return h = [], m(a.elements, function(a) {
                    h.push(g.recurse(a));
                }), function(a, d, e, f) {
                    for (var g = [], m = 0; m < h.length; ++m) g.push(h[m](a, d, e, f));
                    return c ? {
                        value: g
                    } : g;
                };

              case q.ObjectExpression:
                return h = [], m(a.properties, function(a) {
                    h.push({
                        key: a.key.type === q.Identifier ? a.key.name : "" + a.key.value,
                        value: g.recurse(a.value)
                    });
                }), function(a, d, e, f) {
                    for (var g = {}, m = 0; m < h.length; ++m) g[h[m].key] = h[m].value(a, d, e, f);
                    return c ? {
                        value: g
                    } : g;
                };

              case q.ThisExpression:
                return function(a) {
                    return c ? {
                        value: a
                    } : a;
                };

              case q.NGValueParameter:
                return function(a, d, e, f) {
                    return c ? {
                        value: e
                    } : e;
                };
            }
        },
        "unary+": function(a, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g), d = w(d) ? +d : 0, c ? {
                    value: d
                } : d;
            };
        },
        "unary-": function(a, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g), d = w(d) ? -d : 0, c ? {
                    value: d
                } : d;
            };
        },
        "unary!": function(a, c) {
            return function(d, e, f, g) {
                return d = !a(d, e, f, g), c ? {
                    value: d
                } : d;
            };
        },
        "binary+": function(a, c, d) {
            return function(e, f, g, h) {
                var l = a(e, f, g, h);
                return e = c(e, f, g, h), l = md(l, e), d ? {
                    value: l
                } : l;
            };
        },
        "binary-": function(a, c, d) {
            return function(e, f, g, h) {
                var l = a(e, f, g, h);
                return e = c(e, f, g, h), l = (w(l) ? l : 0) - (w(e) ? e : 0), d ? {
                    value: l
                } : l;
            };
        },
        "binary*": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) * c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary/": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) / c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary%": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) % c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary===": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) === c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary!==": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) !== c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary==": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) == c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary!=": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) != c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary<": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) < c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary>": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) > c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary<=": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) <= c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary>=": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) >= c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary&&": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) && c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "binary||": function(a, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) || c(e, f, g, h), d ? {
                    value: e
                } : e;
            };
        },
        "ternary?:": function(a, c, d, e) {
            return function(f, g, h, l) {
                return f = a(f, g, h, l) ? c(f, g, h, l) : d(f, g, h, l), e ? {
                    value: f
                } : f;
            };
        },
        value: function(a, c) {
            return function() {
                return c ? {
                    context: t,
                    name: t,
                    value: a
                } : a;
            };
        },
        identifier: function(a, c, d, e, f) {
            return function(g, h, l, k) {
                return g = h && a in h ? h : g, e && 1 !== e && g && !g[a] && (g[a] = {}), h = g ? g[a] : t, 
                c && oa(h, f), d ? {
                    context: g,
                    name: a,
                    value: h
                } : h;
            };
        },
        computedMember: function(a, c, d, e, f) {
            return function(g, h, l, k) {
                var m, s, n = a(g, h, l, k);
                return null != n && (m = c(g, h, l, k), Ca(m, f), e && 1 !== e && n && !n[m] && (n[m] = {}), 
                s = n[m], oa(s, f)), d ? {
                    context: n,
                    name: m,
                    value: s
                } : s;
            };
        },
        nonComputedMember: function(a, c, d, e, f, g) {
            return function(h, l, k, n) {
                return h = a(h, l, k, n), f && 1 !== f && h && !h[c] && (h[c] = {}), l = null != h ? h[c] : t, 
                (d || Fb(c)) && oa(l, g), e ? {
                    context: h,
                    name: c,
                    value: l
                } : l;
            };
        },
        inputs: function(a, c) {
            return function(d, e, f, g) {
                return g ? g[c] : a(d, e, f);
            };
        }
    };
    var hc = function(a, c, d) {
        this.lexer = a, this.$filter = c, this.options = d, this.ast = new q(this.lexer), 
        this.astCompiler = d.csp ? new sd(this.ast, c) : new rd(this.ast, c);
    };
    hc.prototype = {
        constructor: hc,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks);
        }
    }, ga(), ga();
    var Yf = Object.prototype.valueOf, Da = J("$sce"), pa = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, ea = J("$compile"), X = U.createElement("a"), wd = Ba(O.location.href);
    xd.$inject = [ "$document" ], Lc.$inject = [ "$provide" ], yd.$inject = [ "$locale" ], 
    Ad.$inject = [ "$locale" ];
    var Dd = ".", hg = {
        yyyy: Y("FullYear", 4),
        yy: Y("FullYear", 2, 0, !0),
        y: Y("FullYear", 1),
        MMMM: Hb("Month"),
        MMM: Hb("Month", !0),
        MM: Y("Month", 2, 1),
        M: Y("Month", 1, 1),
        dd: Y("Date", 2),
        d: Y("Date", 1),
        HH: Y("Hours", 2),
        H: Y("Hours", 1),
        hh: Y("Hours", 2, -12),
        h: Y("Hours", 1, -12),
        mm: Y("Minutes", 2),
        m: Y("Minutes", 1),
        ss: Y("Seconds", 2),
        s: Y("Seconds", 1),
        sss: Y("Milliseconds", 3),
        EEEE: Hb("Day"),
        EEE: Hb("Day", !0),
        a: function(a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
        },
        Z: function(a, c, d) {
            return a = -1 * d, a = (a >= 0 ? "+" : "") + (Gb(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + Gb(Math.abs(a % 60), 2));
        },
        ww: Fd(2),
        w: Fd(1),
        G: jc,
        GG: jc,
        GGG: jc,
        GGGG: function(a, c) {
            return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1];
        }
    }, gg = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, fg = /^\-?\d+$/;
    zd.$inject = [ "$locale" ];
    var cg = ra(M), dg = ra(rb);
    Bd.$inject = [ "$parse" ];
    var ie = ra({
        restrict: "E",
        compile: function(a, c) {
            return c.href || c.xlinkHref ? void 0 : function(a, c) {
                if ("a" === c[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === sa.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function(a) {
                        c.attr(f) || a.preventDefault();
                    });
                }
            };
        }
    }), sb = {};
    m(Ab, function(a, c) {
        function d(a, d, f) {
            a.$watch(f[e], function(a) {
                f.$set(c, !!a);
            });
        }
        if ("multiple" != a) {
            var e = wa("ng-" + c), f = d;
            "checked" === a && (f = function(a, c, f) {
                f.ngModel !== f[e] && d(a, c, f);
            }), sb[e] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: f
                };
            };
        }
    }), m(Uc, function(a, c) {
        sb[c] = function() {
            return {
                priority: 100,
                link: function(a, e, f) {
                    return "ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(jg)) ? void f.$set("ngPattern", new RegExp(e[1], e[2])) : void a.$watch(f[c], function(a) {
                        f.$set(c, a);
                    });
                }
            };
        };
    }), m([ "src", "srcset", "href" ], function(a) {
        var c = wa("ng-" + a);
        sb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === sa.call(e.prop("href")) && (h = "xlinkHref", 
                    f.$attr[h] = "xlink:href", g = null), f.$observe(c, function(c) {
                        c ? (f.$set(h, c), Ua && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null);
                    });
                }
            };
        };
    });
    var Ib = {
        $addControl: v,
        $$renameControl: function(a, c) {
            a.$name = c;
        },
        $removeControl: v,
        $setValidity: v,
        $setDirty: v,
        $setPristine: v,
        $setSubmitted: v
    };
    Gd.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var Od = function(a) {
        return [ "$timeout", function(c) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Gd,
                compile: function(d, e) {
                    d.addClass(Va).addClass(mb);
                    var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                    return {
                        pre: function(a, d, e, k) {
                            if (!("action" in e)) {
                                var n = function(c) {
                                    a.$apply(function() {
                                        k.$commitViewValue(), k.$setSubmitted();
                                    }), c.preventDefault();
                                };
                                d[0].addEventListener("submit", n, !1), d.on("$destroy", function() {
                                    c(function() {
                                        d[0].removeEventListener("submit", n, !1);
                                    }, 0, !1);
                                });
                            }
                            var m = k.$$parentForm;
                            f && (Eb(a, k.$name, k, k.$name), e.$observe(f, function(c) {
                                k.$name !== c && (Eb(a, k.$name, t, k.$name), m.$$renameControl(k, c), Eb(a, k.$name, k, k.$name));
                            })), d.on("$destroy", function() {
                                m.$removeControl(k), f && Eb(a, e[f], t, k.$name), P(k, Ib);
                            });
                        }
                    };
                }
            };
        } ];
    }, je = Od(), we = Od(!0), ig = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, rg = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, sg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, tg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Pd = /^(\d{4})-(\d{2})-(\d{2})$/, Qd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, mc = /^(\d{4})-W(\d\d)$/, Rd = /^(\d{4})-(\d\d)$/, Sd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Td = {
        text: function(a, c, d, e, f, g) {
            kb(a, c, d, e, f, g), kc(e);
        },
        date: lb("date", Pd, Kb(Pd, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": lb("datetimelocal", Qd, Kb(Qd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: lb("time", Sd, Kb(Sd, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: lb("week", mc, function(a, c) {
            if (aa(a)) return a;
            if (L(a)) {
                mc.lastIndex = 0;
                var d = mc.exec(a);
                if (d) {
                    var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = Ed(e), f = 7 * (f - 1);
                    return c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds()), 
                    new Date(e, 0, k.getDate() + f, d, g, h, l);
                }
            }
            return NaN;
        }, "yyyy-Www"),
        month: lb("month", Rd, Kb(Rd, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: function(a, c, d, e, f, g) {
            if (Id(a, c, d, e), kb(a, c, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                return e.$isEmpty(a) ? null : tg.test(a) ? parseFloat(a) : t;
            }), e.$formatters.push(function(a) {
                if (!e.$isEmpty(a)) {
                    if (!V(a)) throw Lb("numfmt", a);
                    a = a.toString();
                }
                return a;
            }), w(d.min) || d.ngMin) {
                var h;
                e.$validators.min = function(a) {
                    return e.$isEmpty(a) || A(h) || a >= h;
                }, d.$observe("min", function(a) {
                    w(a) && !V(a) && (a = parseFloat(a, 10)), h = V(a) && !isNaN(a) ? a : t, e.$validate();
                });
            }
            if (w(d.max) || d.ngMax) {
                var l;
                e.$validators.max = function(a) {
                    return e.$isEmpty(a) || A(l) || l >= a;
                }, d.$observe("max", function(a) {
                    w(a) && !V(a) && (a = parseFloat(a, 10)), l = V(a) && !isNaN(a) ? a : t, e.$validate();
                });
            }
        },
        url: function(a, c, d, e, f, g) {
            kb(a, c, d, e, f, g), kc(e), e.$$parserName = "url", e.$validators.url = function(a, c) {
                var d = a || c;
                return e.$isEmpty(d) || rg.test(d);
            };
        },
        email: function(a, c, d, e, f, g) {
            kb(a, c, d, e, f, g), kc(e), e.$$parserName = "email", e.$validators.email = function(a, c) {
                var d = a || c;
                return e.$isEmpty(d) || sg.test(d);
            };
        },
        radio: function(a, c, d, e) {
            A(d.name) && c.attr("name", ++nb), c.on("click", function(a) {
                c[0].checked && e.$setViewValue(d.value, a && a.type);
            }), e.$render = function() {
                c[0].checked = d.value == e.$viewValue;
            }, d.$observe("value", e.$render);
        },
        checkbox: function(a, c, d, e, f, g, h, l) {
            var k = Jd(l, a, "ngTrueValue", d.ngTrueValue, !0), n = Jd(l, a, "ngFalseValue", d.ngFalseValue, !1);
            c.on("click", function(a) {
                e.$setViewValue(c[0].checked, a && a.type);
            }), e.$render = function() {
                c[0].checked = e.$viewValue;
            }, e.$isEmpty = function(a) {
                return !1 === a;
            }, e.$formatters.push(function(a) {
                return ka(a, k);
            }), e.$parsers.push(function(a) {
                return a ? k : n;
            });
        },
        hidden: v,
        button: v,
        submit: v,
        reset: v,
        file: v
    }, Fc = [ "$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(f, g, h, l) {
                    l[0] && (Td[M(h.type)] || Td.text)(f, g, h, l[0], c, a, d, e);
                }
            }
        };
    } ], ug = /^(true|false|\d+)$/, Oe = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, c) {
                return ug.test(c.ngValue) ? function(a, c, f) {
                    f.$set("value", a.$eval(f.ngValue));
                } : function(a, c, f) {
                    a.$watch(f.ngValue, function(a) {
                        f.$set("value", a);
                    });
                };
            }
        };
    }, oe = [ "$compile", function(a) {
        return {
            restrict: "AC",
            compile: function(c) {
                return a.$$addBindingClass(c), function(c, e, f) {
                    a.$$addBindingInfo(e, f.ngBind), e = e[0], c.$watch(f.ngBind, function(a) {
                        e.textContent = a === t ? "" : a;
                    });
                };
            }
        };
    } ], qe = [ "$interpolate", "$compile", function(a, c) {
        return {
            compile: function(d) {
                return c.$$addBindingClass(d), function(d, f, g) {
                    d = a(f.attr(g.$attr.ngBindTemplate)), c.$$addBindingInfo(f, d.expressions), f = f[0], 
                    g.$observe("ngBindTemplate", function(a) {
                        f.textContent = a === t ? "" : a;
                    });
                };
            }
        };
    } ], pe = [ "$sce", "$parse", "$compile", function(a, c, d) {
        return {
            restrict: "A",
            compile: function(e, f) {
                var g = c(f.ngBindHtml), h = c(f.ngBindHtml, function(a) {
                    return (a || "").toString();
                });
                return d.$$addBindingClass(e), function(c, e, f) {
                    d.$$addBindingInfo(e, f.ngBindHtml), c.$watch(h, function() {
                        e.html(a.getTrustedHtml(g(c)) || "");
                    });
                };
            }
        };
    } ], Ne = ra({
        restrict: "A",
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
            });
        }
    }), re = lc("", !0), te = lc("Odd", 0), se = lc("Even", 1), ue = Ma({
        compile: function(a, c) {
            c.$set("ngCloak", t), a.removeClass("ng-cloak");
        }
    }), ve = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], Kc = {}, vg = {
        blur: !0,
        focus: !0
    };
    m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = wa("ng-" + a);
        Kc[c] = [ "$parse", "$rootScope", function(d, e) {
            return {
                restrict: "A",
                compile: function(f, g) {
                    var h = d(g[c], null, !0);
                    return function(c, d) {
                        d.on(a, function(d) {
                            var f = function() {
                                h(c, {
                                    $event: d
                                });
                            };
                            vg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
                        });
                    };
                }
            };
        } ];
    });
    var ye = [ "$animate", function(a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, l, k;
                c.$watch(e.ngIf, function(c) {
                    c ? l || g(function(c, f) {
                        l = f, c[c.length++] = U.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d);
                    }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = qb(h.clone), 
                    a.leave(k).then(function() {
                        k = null;
                    }), h = null));
                });
            }
        };
    } ], ze = [ "$templateRequest", "$anchorScroll", "$animate", function(a, c, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: ca.noop,
            compile: function(e, f) {
                var g = f.ngInclude || f.src, h = f.onload || "", l = f.autoscroll;
                return function(e, f, m, s, q) {
                    var F, u, p, t = 0, v = function() {
                        u && (u.remove(), u = null), F && (F.$destroy(), F = null), p && (d.leave(p).then(function() {
                            u = null;
                        }), u = p, p = null);
                    };
                    e.$watch(g, function(g) {
                        var m = function() {
                            !w(l) || l && !e.$eval(l) || c();
                        }, r = ++t;
                        g ? (a(g, !0).then(function(a) {
                            if (r === t) {
                                var c = e.$new();
                                s.template = a, a = q(c, function(a) {
                                    v(), d.enter(a, null, f).then(m);
                                }), F = c, p = a, F.$emit("$includeContentLoaded", g), e.$eval(h);
                            }
                        }, function() {
                            r === t && (v(), e.$emit("$includeContentError", g));
                        }), e.$emit("$includeContentRequested", g)) : (v(), s.template = null);
                    });
                };
            }
        };
    } ], Qe = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(c, d, e, f) {
                /SVG/.test(d[0].toString()) ? (d.empty(), a(Nc(f.template, U).childNodes)(c, function(a) {
                    d.append(a);
                }, {
                    futureParentElement: d
                })) : (d.html(f.template), a(d.contents())(c));
            }
        };
    } ], Ae = Ma({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, c, d) {
                    a.$eval(d.ngInit);
                }
            };
        }
    }), Me = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, c, d, e) {
                var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? R(f) : f;
                e.$parsers.push(function(a) {
                    if (!A(a)) {
                        var c = [];
                        return a && m(a.split(h), function(a) {
                            a && c.push(g ? R(a) : a);
                        }), c;
                    }
                }), e.$formatters.push(function(a) {
                    return G(a) ? a.join(f) : t;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, mb = "ng-valid", Kd = "ng-invalid", Va = "ng-pristine", Jb = "ng-dirty", Md = "ng-pending", Lb = new J("ngModel"), wg = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, n) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = t, this.$validators = {}, 
        this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], 
        this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, 
        this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = t, 
        this.$name = n(d.name || "", !1)(a);
        var u, r = f(d.ngModel), s = r.assign, q = r, C = s, F = null, p = this;
        this.$$setOptions = function(a) {
            if ((p.$options = a) && a.getterSetter) {
                var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                q = function(a) {
                    var d = r(a);
                    return z(d) && (d = c(a)), d;
                }, C = function(a, c) {
                    z(r(a)) ? g(a, {
                        $$$p: p.$modelValue
                    }) : s(a, p.$modelValue);
                };
            } else if (!r.assign) throw Lb("nonassign", d.ngModel, ua(e));
        }, this.$render = v, this.$isEmpty = function(a) {
            return A(a) || "" === a || null === a || a !== a;
        };
        var K = e.inheritedData("$formController") || Ib, y = 0;
        Hd({
            ctrl: this,
            $element: e,
            set: function(a, c) {
                a[c] = !0;
            },
            unset: function(a, c) {
                delete a[c];
            },
            parentForm: K,
            $animate: g
        }), this.$setPristine = function() {
            p.$dirty = !1, p.$pristine = !0, g.removeClass(e, Jb), g.addClass(e, Va);
        }, this.$setDirty = function() {
            p.$dirty = !0, p.$pristine = !1, g.removeClass(e, Va), g.addClass(e, Jb), K.$setDirty();
        }, this.$setUntouched = function() {
            p.$touched = !1, p.$untouched = !0, g.setClass(e, "ng-untouched", "ng-touched");
        }, this.$setTouched = function() {
            p.$touched = !0, p.$untouched = !1, g.setClass(e, "ng-touched", "ng-untouched");
        }, this.$rollbackViewValue = function() {
            h.cancel(F), p.$viewValue = p.$$lastCommittedViewValue, p.$render();
        }, this.$validate = function() {
            if (!V(p.$modelValue) || !isNaN(p.$modelValue)) {
                var a = p.$$rawModelValue, c = p.$valid, d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
                p.$$runValidators(a, p.$$lastCommittedViewValue, function(f) {
                    e || c === f || (p.$modelValue = f ? a : t, p.$modelValue !== d && p.$$writeModelToScope());
                });
            }
        }, this.$$runValidators = function(a, c, d) {
            function e() {
                var d = !0;
                return m(p.$validators, function(e, f) {
                    var h = e(a, c);
                    d = d && h, g(f, h);
                }), d ? !0 : (m(p.$asyncValidators, function(a, c) {
                    g(c, null);
                }), !1);
            }
            function f() {
                var d = [], e = !0;
                m(p.$asyncValidators, function(f, h) {
                    var k = f(a, c);
                    if (!k || !z(k.then)) throw Lb("$asyncValidators", k);
                    g(h, t), d.push(k.then(function() {
                        g(h, !0);
                    }, function(a) {
                        e = !1, g(h, !1);
                    }));
                }), d.length ? k.all(d).then(function() {
                    h(e);
                }, v) : h(!0);
            }
            function g(a, c) {
                l === y && p.$setValidity(a, c);
            }
            function h(a) {
                l === y && d(a);
            }
            y++;
            var l = y;
            (function() {
                var a = p.$$parserName || "parse";
                return u !== t ? (u || (m(p.$validators, function(a, c) {
                    g(c, null);
                }), m(p.$asyncValidators, function(a, c) {
                    g(c, null);
                })), g(a, u), u) : (g(a, null), !0);
            })() && e() ? f() : h(!1);
        }, this.$commitViewValue = function() {
            var a = p.$viewValue;
            h.cancel(F), (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) && (p.$$lastCommittedViewValue = a, 
            p.$pristine && this.$setDirty(), this.$$parseAndValidate());
        }, this.$$parseAndValidate = function() {
            var c = p.$$lastCommittedViewValue;
            if (u = A(c) ? t : !0) for (var d = 0; d < p.$parsers.length; d++) if (c = p.$parsers[d](c), 
            A(c)) {
                u = !1;
                break;
            }
            V(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = q(a));
            var e = p.$modelValue, f = p.$options && p.$options.allowInvalid;
            p.$$rawModelValue = c, f && (p.$modelValue = c, p.$modelValue !== e && p.$$writeModelToScope()), 
            p.$$runValidators(c, p.$$lastCommittedViewValue, function(a) {
                f || (p.$modelValue = a ? c : t, p.$modelValue !== e && p.$$writeModelToScope());
            });
        }, this.$$writeModelToScope = function() {
            C(a, p.$modelValue), m(p.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (d) {
                    c(d);
                }
            });
        }, this.$setViewValue = function(a, c) {
            p.$viewValue = a, p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(c);
        }, this.$$debounceViewValueCommit = function(c) {
            var d = 0, e = p.$options;
            e && w(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"])), 
            h.cancel(F), d ? F = h(function() {
                p.$commitViewValue();
            }, d) : l.$$phase ? p.$commitViewValue() : a.$apply(function() {
                p.$commitViewValue();
            });
        }, a.$watch(function() {
            var c = q(a);
            if (c !== p.$modelValue && (p.$modelValue === p.$modelValue || c === c)) {
                p.$modelValue = p.$$rawModelValue = c, u = t;
                for (var d = p.$formatters, e = d.length, f = c; e--; ) f = d[e](f);
                p.$viewValue !== f && (p.$viewValue = p.$$lastCommittedViewValue = f, p.$render(), 
                p.$$runValidators(c, f, v));
            }
            return c;
        });
    } ], Le = [ "$rootScope", function(a) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: wg,
            priority: 1,
            compile: function(c) {
                return c.addClass(Va).addClass("ng-untouched").addClass(mb), {
                    pre: function(a, c, f, g) {
                        var h = g[0], l = g[1] || Ib;
                        h.$$setOptions(g[2] && g[2].$options), l.$addControl(h), f.$observe("name", function(a) {
                            h.$name !== a && l.$$renameControl(h, a);
                        }), a.$on("$destroy", function() {
                            l.$removeControl(h);
                        });
                    },
                    post: function(c, e, f, g) {
                        var h = g[0];
                        h.$options && h.$options.updateOn && e.on(h.$options.updateOn, function(a) {
                            h.$$debounceViewValueCommit(a && a.type);
                        }), e.on("blur", function(e) {
                            h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
                        });
                    }
                };
            }
        };
    } ], xg = /(\s+|^)default(\s+|$)/, Pe = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(a, c) {
                var d = this;
                this.$options = fa(a.$eval(c.ngModelOptions)), this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = R(this.$options.updateOn.replace(xg, function() {
                    return d.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, Be = Ma({
        terminal: !0,
        priority: 1e3
    }), yg = J("ngOptions"), zg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Je = [ "$compile", "$parse", function(a, c) {
        function d(a, d, e) {
            function f(a, c, d, e, g) {
                this.selectValue = a, this.viewValue = c, this.label = d, this.group = e, this.disabled = g;
            }
            function n(a) {
                var c;
                if (!q && Ea(a)) c = a; else {
                    c = [];
                    for (var d in a) a.hasOwnProperty(d) && "$" !== d.charAt(0) && c.push(d);
                }
                return c;
            }
            var m = a.match(zg);
            if (!m) throw yg("iexp", a, ua(d));
            var s = m[5] || m[7], q = m[6];
            a = / as /.test(m[0]) && m[1];
            var t = m[9];
            d = c(m[2] ? m[1] : s);
            var v = a && c(a) || d, u = t && c(t), p = t ? function(a, c) {
                return u(e, c);
            } : function(a) {
                return Ga(a);
            }, w = function(a, c) {
                return p(a, z(a, c));
            }, y = c(m[2] || m[1]), A = c(m[3] || ""), B = c(m[4] || ""), N = c(m[8]), D = {}, z = q ? function(a, c) {
                return D[q] = c, D[s] = a, D;
            } : function(a) {
                return D[s] = a, D;
            };
            return {
                trackBy: t,
                getTrackByValue: w,
                getWatchables: c(N, function(a) {
                    var c = [];
                    a = a || [];
                    for (var d = n(a), f = d.length, g = 0; f > g; g++) {
                        var h = a === d ? g : d[g], k = z(a[h], h), h = p(a[h], k);
                        c.push(h), (m[2] || m[1]) && (h = y(e, k), c.push(h)), m[4] && (k = B(e, k), c.push(k));
                    }
                    return c;
                }),
                getOptions: function() {
                    for (var a = [], c = {}, d = N(e) || [], g = n(d), h = g.length, m = 0; h > m; m++) {
                        var r = d === g ? m : g[m], s = z(d[r], r), q = v(e, s), r = p(q, s), u = y(e, s), x = A(e, s), s = B(e, s), q = new f(r, q, u, x, s);
                        a.push(q), c[r] = q;
                    }
                    return {
                        items: a,
                        selectValueMap: c,
                        getOptionFromViewValue: function(a) {
                            return c[w(a)];
                        },
                        getViewValueFromOption: function(a) {
                            return t ? ca.copy(a.viewValue) : a.viewValue;
                        }
                    };
                }
            };
        }
        var e = U.createElement("option"), f = U.createElement("optgroup");
        return {
            restrict: "A",
            terminal: !0,
            require: [ "select", "?ngModel" ],
            link: function(c, h, l, k) {
                function n(a, c) {
                    a.element = c, c.disabled = a.disabled, a.value !== c.value && (c.value = a.selectValue), 
                    a.label !== c.label && (c.label = a.label, c.textContent = a.label);
                }
                function r(a, c, d, e) {
                    return c && M(c.nodeName) === d ? d = c : (d = e.cloneNode(!1), c ? a.insertBefore(d, c) : a.appendChild(d)), 
                    d;
                }
                function s(a) {
                    for (var c; a; ) c = a.nextSibling, Xb(a), a = c;
                }
                function q(a) {
                    var c = p && p[0], d = N && N[0];
                    if (c || d) for (;a && (a === c || a === d); ) a = a.nextSibling;
                    return a;
                }
                function t() {
                    var a = D && u.readValue();
                    D = z.getOptions();
                    var c = {}, d = h[0].firstChild;
                    if (B && h.prepend(p), d = q(d), D.items.forEach(function(a) {
                        var g, k;
                        a.group ? (g = c[a.group], g || (g = r(h[0], d, "optgroup", f), d = g.nextSibling, 
                        g.label = a.group, g = c[a.group] = {
                            groupElement: g,
                            currentOptionElement: g.firstChild
                        }), k = r(g.groupElement, g.currentOptionElement, "option", e), n(a, k), g.currentOptionElement = k.nextSibling) : (k = r(h[0], d, "option", e), 
                        n(a, k), d = k.nextSibling);
                    }), Object.keys(c).forEach(function(a) {
                        s(c[a].currentOptionElement);
                    }), s(d), v.$render(), !v.$isEmpty(a)) {
                        var g = u.readValue();
                        (z.trackBy ? ka(a, g) : a === g) || (v.$setViewValue(g), v.$render());
                    }
                }
                var v = k[1];
                if (v) {
                    var u = k[0];
                    k = l.multiple;
                    for (var p, w = 0, A = h.children(), I = A.length; I > w; w++) if ("" === A[w].value) {
                        p = A.eq(w);
                        break;
                    }
                    var B = !!p, N = y(e.cloneNode(!1));
                    N.val("?");
                    var D, z = d(l.ngOptions, h, c);
                    k ? (v.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    }, u.writeValue = function(a) {
                        D.items.forEach(function(a) {
                            a.element.selected = !1;
                        }), a && a.forEach(function(a) {
                            (a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);
                        });
                    }, u.readValue = function() {
                        var a = h.val() || [], c = [];
                        return m(a, function(a) {
                            a = D.selectValueMap[a], a.disabled || c.push(D.getViewValueFromOption(a));
                        }), c;
                    }, z.trackBy && c.$watchCollection(function() {
                        return G(v.$viewValue) ? v.$viewValue.map(function(a) {
                            return z.getTrackByValue(a);
                        }) : void 0;
                    }, function() {
                        v.$render();
                    })) : (u.writeValue = function(a) {
                        var c = D.getOptionFromViewValue(a);
                        c && !c.disabled ? h[0].value !== c.selectValue && (N.remove(), B || p.remove(), 
                        h[0].value = c.selectValue, c.element.selected = !0, c.element.setAttribute("selected", "selected")) : null === a || B ? (N.remove(), 
                        B || h.prepend(p), h.val(""), p.prop("selected", !0), p.attr("selected", !0)) : (B || p.remove(), 
                        h.prepend(N), h.val("?"), N.prop("selected", !0), N.attr("selected", !0));
                    }, u.readValue = function() {
                        var a = D.selectValueMap[h.val()];
                        return a && !a.disabled ? (B || p.remove(), N.remove(), D.getViewValueFromOption(a)) : null;
                    }, z.trackBy && c.$watch(function() {
                        return z.getTrackByValue(v.$viewValue);
                    }, function() {
                        v.$render();
                    })), B ? (p.remove(), a(p)(c), p.removeClass("ng-scope")) : p = y(e.cloneNode(!1)), 
                    t(), c.$watchCollection(z.getWatchables, t);
                }
            }
        };
    } ], Ce = [ "$locale", "$interpolate", "$log", function(a, c, d) {
        var e = /{}/g, f = /^when(Minus)?(.+)$/;
        return {
            link: function(g, h, l) {
                function k(a) {
                    h.text(a || "");
                }
                var z, n = l.count, r = l.$attr.when && h.attr(l.$attr.when), s = l.offset || 0, q = g.$eval(r) || {}, t = {}, w = c.startSymbol(), u = c.endSymbol(), p = w + n + "-" + s + u, y = ca.noop;
                m(l, function(a, c) {
                    var d = f.exec(c);
                    d && (d = (d[1] ? "-" : "") + M(d[2]), q[d] = h.attr(l.$attr[c]));
                }), m(q, function(a, d) {
                    t[d] = c(a.replace(e, p));
                }), g.$watch(n, function(c) {
                    var e = parseFloat(c), f = isNaN(e);
                    f || e in q || (e = a.pluralCat(e - s)), e === z || f && V(z) && isNaN(z) || (y(), 
                    f = t[e], A(f) ? (null != c && d.debug("ngPluralize: no rule defined for '" + e + "' in " + r), 
                    y = v, k()) : y = g.$watch(f, k), z = e);
                });
            }
        };
    } ], De = [ "$parse", "$animate", function(a, c) {
        var d = J("ngRepeat"), e = function(a, c, d, e, k, m, r) {
            a[d] = e, k && (a[k] = m), a.$index = c, a.$first = 0 === c, a.$last = c === r - 1, 
            a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & c));
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(f, g) {
                var h = g.ngRepeat, l = U.createComment(" end ngRepeat: " + h + " "), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!k) throw d("iexp", h);
                var n = k[1], r = k[2], s = k[3], q = k[4], k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                if (!k) throw d("iidexp", n);
                var v = k[3] || k[1], w = k[2];
                if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw d("badident", s);
                var u, p, z, A, I = {
                    $id: Ga
                };
                return q ? u = a(q) : (z = function(a, c) {
                    return Ga(c);
                }, A = function(a) {
                    return a;
                }), function(a, f, g, k, n) {
                    u && (p = function(c, d, e) {
                        return w && (I[w] = c), I[v] = d, I.$index = e, u(a, I);
                    });
                    var q = ga();
                    a.$watchCollection(r, function(g) {
                        var k, r, x, I, H, L, G, M, J, O, u = f[0], D = ga();
                        if (s && (a[s] = g), Ea(g)) M = g, r = p || z; else for (O in r = p || A, M = [], 
                        g) g.hasOwnProperty(O) && "$" !== O.charAt(0) && M.push(O);
                        for (I = M.length, O = Array(I), k = 0; I > k; k++) if (H = g === M ? k : M[k], 
                        L = g[H], G = r(H, L, k), q[G]) J = q[G], delete q[G], D[G] = J, O[k] = J; else {
                            if (D[G]) throw m(O, function(a) {
                                a && a.scope && (q[a.id] = a);
                            }), d("dupes", h, G, L);
                            O[k] = {
                                id: G,
                                scope: t,
                                clone: t
                            }, D[G] = !0;
                        }
                        for (x in q) {
                            if (J = q[x], G = qb(J.clone), c.leave(G), G[0].parentNode) for (k = 0, r = G.length; r > k; k++) G[k].$$NG_REMOVED = !0;
                            J.scope.$destroy();
                        }
                        for (k = 0; I > k; k++) if (H = g === M ? k : M[k], L = g[H], J = O[k], J.scope) {
                            x = u;
                            do x = x.nextSibling; while (x && x.$$NG_REMOVED);
                            J.clone[0] != x && c.move(qb(J.clone), null, y(u)), u = J.clone[J.clone.length - 1], 
                            e(J.scope, k, v, L, w, H, I);
                        } else n(function(a, d) {
                            J.scope = d;
                            var f = l.cloneNode(!1);
                            a[a.length++] = f, c.enter(a, null, y(u)), u = f, J.clone = a, D[J.id] = J, e(J.scope, k, v, L, w, H, I);
                        });
                        q = D;
                    });
                };
            }
        };
    } ], Ee = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(c, d, e) {
                c.$watch(e.ngShow, function(c) {
                    a[c ? "removeClass" : "addClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], xe = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(c, d, e) {
                c.$watch(e.ngHide, function(c) {
                    a[c ? "addClass" : "removeClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], Fe = Ma(function(a, c, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && m(d, function(a, d) {
                c.css(d, "");
            }), a && c.css(a);
        }, !0);
    }), Ge = [ "$animate", function(a) {
        return {
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(c, d, e, f) {
                var g = [], h = [], l = [], k = [], n = function(a, c) {
                    return function() {
                        a.splice(c, 1);
                    };
                };
                c.$watch(e.ngSwitch || e.on, function(c) {
                    var d, e;
                    for (d = 0, e = l.length; e > d; ++d) a.cancel(l[d]);
                    for (d = l.length = 0, e = k.length; e > d; ++d) {
                        var q = qb(h[d].clone);
                        k[d].$destroy(), (l[d] = a.leave(q)).then(n(l, d));
                    }
                    h.length = 0, k.length = 0, (g = f.cases["!" + c] || f.cases["?"]) && m(g, function(c) {
                        c.transclude(function(d, e) {
                            k.push(e);
                            var f = c.element;
                            d[d.length++] = U.createComment(" end ngSwitchWhen: "), h.push({
                                clone: d
                            }), a.enter(d, f.parent(), f);
                        });
                    });
                });
            }
        };
    } ], He = Ma({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, c, d, e, f) {
            e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [], e.cases["!" + d.ngSwitchWhen].push({
                transclude: f,
                element: c
            });
        }
    }), Ie = Ma({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, c, d, e, f) {
            e.cases["?"] = e.cases["?"] || [], e.cases["?"].push({
                transclude: f,
                element: c
            });
        }
    }), Ke = Ma({
        restrict: "EAC",
        link: function(a, c, d, e, f) {
            if (!f) throw J("ngTransclude")("orphan", ua(c));
            f(function(a) {
                c.empty(), c.append(a);
            });
        }
    }), ke = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text);
            }
        };
    } ], Ag = {
        $setViewValue: v,
        $render: v
    }, Bg = [ "$element", "$scope", "$attrs", function(a, c, d) {
        var e = this, f = new Sa();
        e.ngModelCtrl = Ag, e.unknownOption = y(U.createElement("option")), e.renderUnknownOption = function(c) {
            c = "? " + Ga(c) + " ?", e.unknownOption.val(c), a.prepend(e.unknownOption), a.val(c);
        }, c.$on("$destroy", function() {
            e.renderUnknownOption = v;
        }), e.removeUnknownOption = function() {
            e.unknownOption.parent() && e.unknownOption.remove();
        }, e.readValue = function() {
            return e.removeUnknownOption(), a.val();
        }, e.writeValue = function(c) {
            e.hasOption(c) ? (e.removeUnknownOption(), a.val(c), "" === c && e.emptyOption.prop("selected", !0)) : null == c && e.emptyOption ? (e.removeUnknownOption(), 
            a.val("")) : e.renderUnknownOption(c);
        }, e.addOption = function(a, c) {
            Ra(a, '"option value"'), "" === a && (e.emptyOption = c);
            var d = f.get(a) || 0;
            f.put(a, d + 1);
        }, e.removeOption = function(a) {
            var c = f.get(a);
            c && (1 === c ? (f.remove(a), "" === a && (e.emptyOption = t)) : f.put(a, c - 1));
        }, e.hasOption = function(a) {
            return !!f.get(a);
        };
    } ], le = function() {
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: Bg,
            link: function(a, c, d, e) {
                var f = e[1];
                if (f) {
                    var g = e[0];
                    if (g.ngModelCtrl = f, f.$render = function() {
                        g.writeValue(f.$viewValue);
                    }, c.on("change", function() {
                        a.$apply(function() {
                            f.$setViewValue(g.readValue());
                        });
                    }), d.multiple) {
                        g.readValue = function() {
                            var a = [];
                            return m(c.find("option"), function(c) {
                                c.selected && a.push(c.value);
                            }), a;
                        }, g.writeValue = function(a) {
                            var d = new Sa(a);
                            m(c.find("option"), function(a) {
                                a.selected = w(d.get(a.value));
                            });
                        };
                        var h, l = NaN;
                        a.$watch(function() {
                            l !== f.$viewValue || ka(h, f.$viewValue) || (h = ia(f.$viewValue), f.$render()), 
                            l = f.$viewValue;
                        }), f.$isEmpty = function(a) {
                            return !a || 0 === a.length;
                        };
                    }
                }
            }
        };
    }, ne = [ "$interpolate", function(a) {
        function c(a) {
            a[0].hasAttribute("selected") && (a[0].selected = !0);
        }
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (A(e.value)) {
                    var f = a(d.text(), !0);
                    f || e.$set("value", d.text());
                }
                return function(a, d, e) {
                    var k = d.parent(), m = k.data("$selectController") || k.parent().data("$selectController");
                    m && m.ngModelCtrl && (f ? a.$watch(f, function(a, f) {
                        e.$set("value", a), f !== a && m.removeOption(f), m.addOption(a, d), m.ngModelCtrl.$render(), 
                        c(d);
                    }) : (m.addOption(e.value, d), m.ngModelCtrl.$render(), c(d)), d.on("$destroy", function() {
                        m.removeOption(e.value), m.ngModelCtrl.$render();
                    }));
                };
            }
        };
    } ], me = ra({
        restrict: "E",
        terminal: !1
    }), Hc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                e && (d.required = !0, e.$validators.required = function(a, c) {
                    return !d.required || !e.$isEmpty(c);
                }, d.$observe("required", function() {
                    e.$validate();
                }));
            }
        };
    }, Gc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    var f, g = d.ngPattern || d.pattern;
                    d.$observe("pattern", function(a) {
                        if (L(a) && 0 < a.length && (a = new RegExp("^" + a + "$")), a && !a.test) throw J("ngPattern")("noregexp", g, a, ua(c));
                        f = a || t, e.$validate();
                    }), e.$validators.pattern = function(a) {
                        return e.$isEmpty(a) || A(f) || f.test(a);
                    };
                }
            }
        };
    }, Jc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    var f = -1;
                    d.$observe("maxlength", function(a) {
                        a = W(a), f = isNaN(a) ? -1 : a, e.$validate();
                    }), e.$validators.maxlength = function(a, c) {
                        return 0 > f || e.$isEmpty(c) || c.length <= f;
                    };
                }
            }
        };
    }, Ic = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    var f = 0;
                    d.$observe("minlength", function(a) {
                        f = W(a) || 0, e.$validate();
                    }), e.$validators.minlength = function(a, c) {
                        return e.$isEmpty(c) || c.length >= f;
                    };
                }
            }
        };
    };
    O.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (ce(), 
    ee(ca), y(U).ready(function() {
        Zd(U, Ac);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), 
function(p, c, C) {
    function v(r, h, g) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(a, f, b, d, y) {
                function z() {
                    k && (g.cancel(k), k = null), l && (l.$destroy(), l = null), m && (k = g.leave(m), 
                    k.then(function() {
                        k = null;
                    }), m = null);
                }
                function x() {
                    var b = r.current && r.current.locals;
                    if (c.isDefined(b && b.$template)) {
                        var b = a.$new(), d = r.current;
                        m = y(b, function(b) {
                            g.enter(b, null, m || f).then(function() {
                                !c.isDefined(t) || t && !a.$eval(t) || h();
                            }), z();
                        }), l = d.scope = b, l.$emit("$viewContentLoaded"), l.$eval(w);
                    } else z();
                }
                var l, m, k, t = b.autoscroll, w = b.onload || "";
                a.$on("$routeChangeSuccess", x), x();
            }
        };
    }
    function A(c, h, g) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(a, f) {
                var b = g.current, d = b.locals;
                f.html(d.$template);
                var y = c(f.contents());
                b.controller && (d.$scope = a, d = h(b.controller, d), b.controllerAs && (a[b.controllerAs] = d), 
                f.data("$ngControllerController", d), f.children().data("$ngControllerController", d)), 
                y(a);
            }
        };
    }
    p = c.module("ngRoute", [ "ng" ]).provider("$route", function() {
        function r(a, f) {
            return c.extend(Object.create(a), f);
        }
        function h(a, c) {
            var b = c.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, g = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, c, b, d) {
                return a = "?" === d ? d : null, d = "*" === d ? d : null, g.push({
                    name: b,
                    optional: !!a
                }), c = c || "", "" + (a ? "" : c) + "(?:" + (a ? c : "") + (d && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "");
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", b ? "i" : ""), 
            d;
        }
        var g = {};
        this.when = function(a, f) {
            var b = c.copy(f);
            if (c.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0), c.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch), 
            g[a] = c.extend(b, a && h(a, b)), a) {
                var d = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                g[d] = c.extend({
                    redirectTo: a
                }, h(d, b));
            }
            return this;
        }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
            return "string" == typeof a && (a = {
                redirectTo: a
            }), this.when(null, a), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(a, f, b, d, h, p, x) {
            function l(b) {
                var e = s.current;
                (v = (n = k()) && e && n.$$route === e.$$route && c.equals(n.pathParams, e.pathParams) && !n.reloadOnSearch && !w) || !e && !n || a.$broadcast("$routeChangeStart", n, e).defaultPrevented && b && b.preventDefault();
            }
            function m() {
                var u = s.current, e = n;
                v ? (u.params = e.params, c.copy(u.params, b), a.$broadcast("$routeUpdate", u)) : (e || u) && (w = !1, 
                (s.current = e) && e.redirectTo && (c.isString(e.redirectTo) ? f.path(t(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), 
                d.when(e).then(function() {
                    if (e) {
                        var b, f, a = c.extend({}, e.resolve);
                        return c.forEach(a, function(b, e) {
                            a[e] = c.isString(b) ? h.get(b) : h.invoke(b, null, null, e);
                        }), c.isDefined(b = e.template) ? c.isFunction(b) && (b = b(e.params)) : c.isDefined(f = e.templateUrl) && (c.isFunction(f) && (f = f(e.params)), 
                        c.isDefined(f) && (e.loadedTemplateUrl = x.valueOf(f), b = p(f))), c.isDefined(b) && (a.$template = b), 
                        d.all(a);
                    }
                }).then(function(f) {
                    e == s.current && (e && (e.locals = f, c.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, u));
                }, function(b) {
                    e == s.current && a.$broadcast("$routeChangeError", e, u, b);
                }));
            }
            function k() {
                var a, b;
                return c.forEach(g, function(d, g) {
                    var q;
                    if (q = !b) {
                        var h = f.path();
                        q = d.keys;
                        var l = {};
                        if (d.regexp) if (h = d.regexp.exec(h)) {
                            for (var k = 1, m = h.length; m > k; ++k) {
                                var n = q[k - 1], p = h[k];
                                n && p && (l[n.name] = p);
                            }
                            q = l;
                        } else q = null; else q = null;
                        q = a = q;
                    }
                    q && (b = r(d, {
                        params: c.extend({}, f.search(), a),
                        pathParams: a
                    }), b.$$route = d);
                }), b || g[null] && r(g[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function t(a, b) {
                var d = [];
                return c.forEach((a || "").split(":"), function(a, c) {
                    if (0 === c) d.push(a); else {
                        var f = a.match(/(\w+)(?:[?*])?(.*)/), g = f[1];
                        d.push(b[g]), d.push(f[2] || ""), delete b[g];
                    }
                }), d.join("");
            }
            var n, v, w = !1, s = {
                routes: g,
                reload: function() {
                    w = !0, a.$evalAsync(function() {
                        l(), m();
                    });
                },
                updateParams: function(a) {
                    if (!this.current || !this.current.$$route) throw B("norout");
                    a = c.extend({}, this.current.params, a), f.path(t(this.current.$$route.originalPath, a)), 
                    f.search(a);
                }
            };
            return a.$on("$locationChangeStart", l), a.$on("$locationChangeSuccess", m), s;
        } ];
    });
    var B = c.$$minErr("ngRoute");
    p.provider("$routeParams", function() {
        this.$get = function() {
            return {};
        };
    }), p.directive("ngView", v), p.directive("ngView", A), v.$inject = [ "$route", "$anchorScroll", "$animate" ], 
    A.$inject = [ "$compile", "$controller", "$route" ];
}(window, window.angular), !function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    function D(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), 
        n.ready();
    }
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = n.expando + K.uid++;
    }
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            M.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f;
    }
    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), 
        c;
    }
    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function Fa(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length; e--; ) if (b = Ea[e] + c, 
        b in a) return b;
        return d;
    }
    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g;
    }
    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), 
        "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e);
    }
    function Sa() {
        return setTimeout(function() {
            La = void 0;
        }), La = n.now();
    }
    function Ta(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function rb(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        var e = {}, f = a === mb;
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tb(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return n.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), 
            b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) for (;f > e && (d = b.apply(a[e], c), d !== !1); e++) ; else for (e in a) if (d = b.apply(a[e], c), 
                d === !1) break;
            } else if (g) for (;f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++) ; else for (e in a) if (d = b.call(a[e], e, a[e]), 
            d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    var t = function(a) {
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length; l--; ) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function ha() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            var a = [];
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function qa() {}
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = va(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b;
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e && !d.relative[a[e].type]; e++) ;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }
                m.push(c);
            }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        for (m = 0; o = a[m++]; ) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    for (m = 0; o = b[m++]; ) o(r, s, g, h);
                    if (f) {
                        if (p > 0) for (;q--; ) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ia(f) : f;
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ea = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
            p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                for (c = a; c = c.parentNode; ) h.unshift(c);
                for (c = b; c = c.parentNode; ) i.unshift(c);
                for (;h[d] === i[d]; ) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (;b = a[f++]; ) b === a[f] && (e = d.push(f));
                for (;e--; ) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else for (;b = a[d++]; ) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: oa(function() {
                    return [ 0 ];
                }),
                last: oa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: oa(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        return qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h; ) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        }, h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--; ) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]); ) if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                    if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                    break;
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), 
                v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = l, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return n.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return n.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    }(arguments), d ? f = h.length : b && (e = c, j(b));
                }
                return this;
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    for (var c; (c = n.inArray(b, h, c)) > -1; ) h.splice(c, 1), d && (f >= c && f--, 
                    g >= c && g--);
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], f = 0, this;
            },
            disable: function() {
                return h = i = b = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, b || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? i.push(b) : j(b)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return k;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            };
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [ n ]), 
            n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        }
    }), n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), 
        a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(E) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function(a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function(a, b) {
            M.remove(a, b);
        },
        _data: function(a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function(a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a);
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = L.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [ "Top", "Right", "Bottom", "Left" ], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
            (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(E) || [ "" ], j = b.length; j--; ) h = Y.exec(b[j]) || [], 
            o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, 
            o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                type: o,
                origType: q,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && n.expr.match.needsContext.test(e),
                namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            n.event.global[o] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(E) || [ "" ], j = b.length; j--; ) if (h = Y.exec(b[j]) || [], 
                o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), 
            q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), 
                    h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : o.bindType || q, 
                m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), 
                m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], 
                h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, 
    ia.th = ia.td, n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), 
            f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [ e ] : e); else if (ca.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), 
            f = oa(k.appendChild(e), "script"), i && ma(f), c)) for (j = 0; e = f[j++]; ) fa.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), 
            c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), 
                g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], 
                fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
            }
            return this;
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), 
            n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qa, ra = {}, ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        function g() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            f.innerHTML = "", d.appendChild(e);
            var g = a.getComputedStyle(f, null);
            b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
        }
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
        k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        e.appendChild(f), a.getComputedStyle && n.extend(k, {
            pixelPosition: function() {
                return g(), b;
            },
            boxSizingReliable: function() {
                return null == c && g(), c;
            },
            reliableMarginRight: function() {
                var b, c = f.appendChild(l.createElement("div"));
                return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                b;
            }
        }));
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Da = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ea = [ "Webkit", "O", "Moz", "ms" ];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), 
                f = "number"), void (null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d);
                }) : Ia(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Ja(this, !0);
        },
        hide: function() {
            return Ja(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    }), n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [ Va ], Ra = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    n.Animation = n.extend(Xa, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Qa.unshift(a) : Qa.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        clearInterval(Ma), Ma = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, 
        k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", 
        k.radioValue = "t" === a.value;
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void n.removeAttr(a, b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            $a[b] = f), e;
        };
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)) : void 0;
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), 
        b;
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), 
                w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), i && (m.trigger("ajaxComplete", [ v, k ]), --n.active || n.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) for (f = {}; b = gb.exec(e); ) f[b[1].toLowerCase()] = b[2];
                        b = f[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), 
            rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), 
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), 
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b));
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Bb = 0, Cb = {}, Db = {
        0: 200,
        1223: 204
    }, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb) Cb[a]();
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = n.buildFragment([ a ], b, e), e && e.length && n(e).remove(), 
        n.merge([], d.childNodes));
    };
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Ib = a.document.documentElement;
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), 
            c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Ib; a && !n.nodeName(a, "html") && "static" === n.css(a, "position"); ) a = a.offsetParent;
                return a || Ib;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function() {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

+function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function(a) {
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return !1;
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0;
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
            }
        });
    });
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close);
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), 
        b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, 
            d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), 
            this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), 
            this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), 
            a && c.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            a.preventDefault();
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f);
    }, c.prototype.to = function(a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active");
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), 
            f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([ b, h ].join(" ")).addClass("active"), e.removeClass([ "active", h ].join(" ")), 
                i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), 
            this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this;
    };
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), 
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data());
        });
    });
}(jQuery), +function(a) {
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d);
    }
    function c(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), 
            "string" == typeof b && e[b]();
        });
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase([ "scroll", g ].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h);
    });
}(jQuery), +function(a) {
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this), e = b(d), f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), 
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))));
        }));
    }
    function d(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
            }
            return !1;
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), 
                d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), 
                    i.eq(j).trigger("focus");
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function(a) {
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, 
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), 
            d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b();
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        });
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), 
            "string" == typeof b && e[b]());
        });
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), 
        this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), 
        c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), 
        c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), 
        c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide());
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, 
                f.removeClass(n).addClass(h);
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                });
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), 
            b && b();
        }
        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), 
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), 
        this.hoverState = null, this);
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function() {
        return this.getTitle();
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset(), g = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }, h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f);
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a;
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function() {
        this.enabled = !0;
    }, c.prototype.disable = function() {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, 
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), 
            a.$tip = null, a.$arrow = null, a.$viewport = null;
        });
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this;
    };
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), 
            "string" == typeof b && e[b]());
        });
    }
    var c = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, 
    c.prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), 
        a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this;
    };
}(jQuery), +function(a) {
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), 
        this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function() {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [ [ f[c]().top + d, e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1]);
        });
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
        d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data());
        });
    });
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b) {
        this.element = a(b);
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            }), g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    });
                });
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, 
            b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            e && e();
        }
        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), 
        g.removeClass("in");
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this;
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show");
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
        this.checkPosition();
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), 
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            });
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), 
            null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery), angular.module("myApp", [ "ngRoute", "myApp.view1", "myApp.version", "myApp.usernameServices" ]).config([ "$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: "/view1"
    });
} ]), angular.module("myApp.usernameServices", []).factory("UsernameService", [ "$filter", function($filter) {
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""), vowel = "aeiouy".split(""), lcIsVowel = function(pChar) {
        var lcReturn = !1;
        return angular.forEach(vowel, function(pItem) {
            return pItem == pChar ? (lcReturn = !0, !1) : void 0;
        }), lcReturn;
    }, lcIsLastVowel = function(pName) {
        var lcReturn = !1;
        return pName.length > 0 && (lcReturn = lcIsVowel(pName.charAt(pName.length - 1))), 
        lcReturn;
    }, lcGetNewChar = function(pName) {
        var lcChar = alphabet[randomIntFromInterval(0, alphabet.length - 1)];
        if (pName.length > 0) {
            var lcLastChar = pName.charAt(pName.length - 1);
            if (lcChar != lcLastChar || lcIsLastVowel(pName)) {
                if (lcChar == lcLastChar && lcIsLastVowel(pName) && pName.length > 1) {
                    var lcLastTwoCharsTheSame = pName.charAt(pName.length - 1) == pName.charAt(pName.length - 2);
                    lcLastTwoCharsTheSame && (lcChar = lcGetNewChar(pName));
                }
            } else lcChar = lcGetNewChar(pName);
        }
        return lcChar;
    }, lcGetNewChar = function(pVowel) {
        var lcChar = alphabet[randomIntFromInterval(0, alphabet.length - 1)];
        return pVowel && !lcIsVowel(lcChar) ? lcChar = lcGetNewChar(pVowel) : !pVowel && lcIsVowel(lcChar) && (lcChar = lcGetNewChar(pVowel)), 
        lcChar;
    }, lcGetSyllab = function() {
        var lcReturn = "";
        return lcReturn += lcGetNewChar(!1), lcReturn += lcGetNewChar(!0), 1 == randomIntFromInterval(1, 4) && (lcReturn += lcGetNewChar(!0)), 
        lcReturn += lcGetNewChar(!1);
    }, lcGen2 = function() {
        for (var lcNameLength = randomIntFromInterval(2, 3), lcReturn = "", i = 0; lcNameLength > i; i++) lcReturn += lcGetSyllab();
        return capitalizeFirstLetter(lcReturn);
    };
    return {
        generateUsernames: function(pCount) {
            pCount = pCount || 1;
            for (var lcReturn = [], i = 0; pCount > i; i++) lcReturn.push(lcGen2());
            return lcReturn = $filter("orderBy")(lcReturn);
        }
    };
} ]), angular.module("myApp.version.interpolate-filter", []).filter("interpolate", [ "version", function(version) {
    return function(text) {
        return String(text).replace(/\%VERSION\%/gm, version);
    };
} ]), angular.module("myApp.version.version-directive", []).directive("appVersion", [ "version", function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
} ]), angular.module("myApp.version", [ "myApp.version.interpolate-filter", "myApp.version.version-directive" ]).value("version", "0.1"), 
angular.module("myApp.view1", [ "ngRoute" ]).config([ "$routeProvider", function($routeProvider) {
    $routeProvider.when("/view1", {
        templateUrl: "view1/view1.html",
        controller: "View1Ctrl"
    });
} ]).controller("View1Ctrl", [ "$scope", "UsernameService", function($scope, UsernameService) {
    $scope.generateUsernames = function() {
        $scope.usernames = UsernameService.generateUsernames(20);
        for (var lcUsernamesForTable = [], i = 0; i < $scope.usernames.length; i += 3) {
            var lcTemp = {};
            lcTemp.first = $scope.usernames[i], lcTemp.second = i + 1 < $scope.usernames.length ? $scope.usernames[i + 1] : "", 
            lcTemp.third = i + 2 < $scope.usernames.length ? $scope.usernames[i + 2] : "", lcUsernamesForTable.push(lcTemp);
        }
        $scope.usernamesForTable = lcUsernamesForTable;
    }, $scope.generateUsernames();
} ]);