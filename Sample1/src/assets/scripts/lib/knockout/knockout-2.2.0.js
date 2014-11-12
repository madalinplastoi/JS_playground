// Knockout JavaScript library v2.2.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function () {
    function k(j) { throw j; } var n = !0, r = null, t = !1; function J(j) { return function () { return j } }; (function (j) {
        var z = this || (0, eval)("this"), u = z.document, W = z.navigator, q = z.jQuery, H = z.JSON; !function (j) { "function" === typeof require && "object" === typeof exports && "object" === typeof module ? j(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], j) : j(z.ko = {}) }(function (v) {
            function oa(a, d, c, e, f) {
                var g = []; a = b.i(function () { var a = d(c, f) || []; 0 < g.length && (b.a.ab(N(g), a), e && b.r.L(e, r, [c, a, f])); g.splice(0, g.length); b.a.Q(g, a) }, r, { Y: a, Na: function () { return !b.a.nb(g) } }); return {
                    N: g, i: a.ra() ?
                        a : j
                }
            } function N(a) { for (; a.length && !b.a.Z(a[0]) ;) a.splice(0, 1); if (1 < a.length) { for (var d = a[0], c = a[a.length - 1], e = [d]; d !== c;) { d = d.nextSibling; if (!d) return; e.push(d) } Array.prototype.splice.apply(a, [0, a.length].concat(e)) } return a } function X(a, b, c, e, f) {
                var g = Math.min, h = Math.max, l = [], m, A = a.length, p, j = b.length, w = j - A || 1, F = A + j + 1, q, u, x; for (m = 0; m <= A; m++) { u = q; l.push(q = []); x = g(j, m + w); for (p = h(0, m - 1) ; p <= x; p++) q[p] = p ? m ? a[m - 1] === b[p - 1] ? u[p - 1] : g(u[p] || F, q[p - 1] || F) + 1 : p + 1 : m + 1 } g = []; h = []; w = []; m = A; for (p = j; m || p;) j = l[m][p] -
                1, p && j === l[m][p - 1] ? h.push(g[g.length] = { status: c, value: b[--p], index: p }) : m && j === l[m - 1][p] ? w.push(g[g.length] = { status: e, value: a[--m], index: m }) : (g.push({ status: "retained", value: b[--p] }), --m); if (h.length && w.length) { a = 10 * A; var s; for (b = c = 0; (f || b < a) && (s = h[c]) ; c++) { for (e = 0; l = w[e]; e++) if (s.value === l.value) { s.moved = l.index; l.moved = s.index; w.splice(e, 1); b = e = 0; break } b += e } } return g.reverse()
            } function Y(a, d, c, e, f) {
                f = f || {}; var g = a && P(a), g = g && g.ownerDocument, h = f.templateEngine || Q; b.Ba.yb(c, h, g); c = h.renderTemplate(c,
                e, f, g); ("number" != typeof c.length || 0 < c.length && "number" != typeof c[0].nodeType) && k(Error("Template engine must return an array of DOM nodes")); g = t; switch (d) { case "replaceChildren": b.e.O(a, c); g = n; break; case "replaceNode": b.a.ab(a, c); g = n; break; case "ignoreTargetNode": break; default: k(Error("Unknown renderMode: " + d)) } g && (Z(c, e), f.afterRender && b.r.L(f.afterRender, r, [c, e.$data])); return c
            } function P(a) { return a.nodeType ? a : 0 < a.length ? a[0] : r } function Z(a, d) {
                if (a.length) {
                    var c = a[0], e = a[a.length - 1]; $(c, e, function (a) {
                        b.Fa(d,
                        a)
                    }); $(c, e, function (a) { b.s.lb(a, [d]) })
                }
            } function $(a, d, c) { var e; for (d = b.e.nextSibling(d) ; a && (e = a) !== d;) a = b.e.nextSibling(e), (1 === e.nodeType || 8 === e.nodeType) && c(e) } function aa(a, d, c) {
                a = b.g.ba(a); for (var e = b.g.R, f = 0; f < a.length; f++) { var g = a[f].key; if (e.hasOwnProperty(g)) { var h = e[g]; "function" === typeof h ? (g = h(a[f].value)) && k(Error(g)) : h || k(Error("This template engine does not support the '" + g + "' binding within its templates")) } } a = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " +
                b.g.ca(a) + " } })()})"; return c.createJavaScriptEvaluatorBlock(a) + d
            } function K(a, d) { return "checkedValue" in d ? b.a.d(d.checkedValue) : a.value } function ba(a, d, c, e) {
                function f(a) { return function () { return l[a] } } function g() { return l } var h = 0, l, m, A = b.a.f.get(a, ca); d || (A && k(Error("You cannot apply bindings multiple times to the same element.")), b.a.f.set(a, ca, n)); b.i(function () {
                    var p = c && c instanceof b.z ? c : new b.z(b.a.d(c)), q = p.$data; !A && e && b.hb(a, p); if (l = ("function" == typeof d ? d(p, a) : d) || b.K.instance.getBindings(a,
                    p)) 0 === h && (h = 1, b.a.w(l, function (d) { var c = b.c[d]; c && 8 === a.nodeType && !b.e.J[d] && k(Error("The binding '" + d + "' cannot be used with virtual elements")); if (c && "function" == typeof c.init && (c = (0, c.init)(a, f(d), g, q, p)) && c.controlsDescendantBindings) m !== j && k(Error("Multiple bindings (" + m + " and " + d + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")), m = d }), h = 2), 2 === h && b.a.w(l, function (d) {
                        var c = b.c[d]; c && "function" == typeof c.update && (0, c.update)(a,
                        f(d), g, q, p)
                    })
                }, r, { Y: a }); return { Qb: m === j }
            } function da(a, d, c) { var e = n, f = 1 === d.nodeType; f && b.e.Wa(d); if (f && c || b.K.instance.nodeHasBindings(d)) e = ba(d, r, a, c).Qb; e && ea(a, d, !f) } function ea(a, d, c) { for (var e = b.e.firstChild(d) ; d = e;) e = b.e.nextSibling(d), da(a, d, c) } function fa(a, b) { var c = ga(a, b); return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : r } function ga(a, b) {
                for (var c = a, e = 1, f = []; c = c.nextSibling;) { if (L(c) && (e--, 0 === e)) return f; f.push(c); B(c) && e++ } b || k(Error("Cannot find closing comment tag to match: " +
                a.nodeValue)); return r
            } function L(a) { return 8 == a.nodeType && (M ? a.text : a.nodeValue).match(pa) } function B(a) { return 8 == a.nodeType && (M ? a.text : a.nodeValue).match(qa) } function R(a, b) { for (var c = r; a != c;) c = a, a = a.replace(ra, function (a, c) { return b[c] }); return a } function sa() { var a = [], d = []; this.save = function (c, e) { var f = b.a.k(a, c); 0 <= f ? d[f] = e : (a.push(c), d.push(e)) }; this.get = function (c) { c = b.a.k(a, c); return 0 <= c ? d[c] : j } } function ha(a, b, c) {
                function e(e) {
                    var g = b(a[e]); switch (typeof g) {
                        case "boolean": case "number": case "string": case "function": f[e] =
                        g; break; case "object": case "undefined": var h = c.get(g); f[e] = h !== j ? h : ha(g, b, c)
                    }
                } c = c || new sa; a = b(a); if (!("object" == typeof a && a !== r && a !== j && !(a instanceof Date))) return a; var f = a instanceof Array ? [] : {}; c.save(a, f); var g = a; if (g instanceof Array) { for (var h = 0; h < g.length; h++) e(h); "function" == typeof g.toJSON && e("toJSON") } else for (h in g) e(h); return f
            } function ia(a, d) {
                if (a) if (8 == a.nodeType) { var c = b.s.Xa(a.nodeValue); c != r && d.push({ vb: a, Ib: c }) } else if (1 == a.nodeType) for (var c = 0, e = a.childNodes, f = e.length; c < f; c++) ia(e[c],
                d)
            } function S(a, b) { for (var c in a) a.hasOwnProperty(c) && b(c, a[c]) } function T(a, d) { if ("input" !== b.a.u(a) || !a.type || "click" != d.toLowerCase()) return t; var c = a.type; return "checkbox" == c || "radio" == c } function U(a, d, c, e) {
                b.c[a] = { init: function (a) { b.a.f.set(a, ja, {}); return { controlsDescendantBindings: n } }, update: function (a, g, h, l, m) { h = b.a.f.get(a, ja); g = b.a.d(g()); l = !c !== !g; var j = !h.bb; if (j || d || l !== h.tb) j && (h.bb = b.a.La(b.e.childNodes(a), n)), l ? (j || b.e.O(a, b.a.La(h.bb)), b.Ga(e ? e(m, g) : m, a)) : b.e.$(a), h.tb = l } }; b.g.R[a] =
                t; b.e.J[a] = n
            } function ka(a, d, c) { c && d !== b.j.q(a) && b.j.V(a, d); d !== b.j.q(a) && b.r.L(b.a.Da, r, [a, "change"]) } var b = "undefined" !== typeof v ? v : {}; b.b = function (a, d) { for (var c = a.split("."), e = b, f = 0; f < c.length - 1; f++) e = e[c[f]]; e[c[c.length - 1]] = d }; b.p = function (a, b, c) { a[b] = c }; b.version = "2.2.0"; b.b("version", b.version); v = b; var ta = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, y = {}, la = {}; y[W && /Firefox\/2/i.test(W.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]; y.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
            S(y, function (a, b) { if (b.length) for (var c = 0, e = b.length; c < e; c++) la[b[c]] = a }); var ua = { propertychange: n }; if (y = u) { for (var y = 3, ma = u.createElement("div"), va = ma.getElementsByTagName("i") ; ma.innerHTML = "\x3c!--[if gt IE " + ++y + "]><i></i><![endif]--\x3e", va[0];); y = 4 < y ? y : j } var D = y; v.a = {
                Qa: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], o: function (a, b) { for (var c = 0, e = a.length; c < e; c++) b(a[c]) }, k: function (a, b) {
                    if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b); for (var c =
                    0, e = a.length; c < e; c++) if (a[c] === b) return c; return -1
                }, Ia: function (a, b, c) { for (var e = 0, f = a.length; e < f; e++) if (b.call(c, a[e])) return a[e]; return r }, ia: function (a, d) { var c = b.a.k(a, d); 0 <= c && a.splice(c, 1) }, Ja: function (a) { a = a || []; for (var d = [], c = 0, e = a.length; c < e; c++) 0 > b.a.k(d, a[c]) && d.push(a[c]); return d }, X: function (a, b) { a = a || []; for (var c = [], e = 0, f = a.length; e < f; e++) c.push(b(a[e])); return c }, ha: function (a, b) { a = a || []; for (var c = [], e = 0, f = a.length; e < f; e++) b(a[e]) && c.push(a[e]); return c }, Q: function (a, b) {
                    if (b instanceof
                    Array) a.push.apply(a, b); else for (var c = 0, e = b.length; c < e; c++) a.push(b[c]); return a
                }, ga: function (a, d, c) { var e = a.indexOf ? a.indexOf(d) : b.a.k(a, d); 0 > e ? c && a.push(d) : c || a.splice(e, 1) }, extend: function (a, b) { if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]); return a }, w: S, ma: function (a) { for (; a.firstChild;) b.removeNode(a.firstChild) }, Kb: function (a) { a = b.a.M(a); for (var d = u.createElement("div"), c = 0, e = a.length; c < e; c++) d.appendChild(b.A(a[c])); return d }, La: function (a, d) {
                    for (var c = 0, e = a.length, f = []; c < e; c++) {
                        var g =
                        a[c].cloneNode(n); f.push(d ? b.A(g) : g)
                    } return f
                }, O: function (a, d) { b.a.ma(a); if (d) for (var c = 0, e = d.length; c < e; c++) a.appendChild(d[c]) }, ab: function (a, d) { var c = a.nodeType ? [a] : a; if (0 < c.length) { for (var e = c[0], f = e.parentNode, g = 0, h = d.length; g < h; g++) f.insertBefore(d[g], e); g = 0; for (h = c.length; g < h; g++) b.removeNode(c[g]) } }, fb: function (a, b) { 7 > D ? a.setAttribute("selected", b) : a.selected = b }, D: function (a) { return (a || "").replace(ta, "") }, Ub: function (a, d) {
                    for (var c = [], e = (a || "").split(d), f = 0, g = e.length; f < g; f++) {
                        var h = b.a.D(e[f]);
                        "" !== h && c.push(h)
                    } return c
                }, Rb: function (a, b) { a = a || ""; return b.length > a.length ? t : a.substring(0, b.length) === b }, wb: function (a, b) { if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16); for (; a != r;) { if (a == b) return n; a = a.parentNode } return t }, Z: function (a) { return b.a.wb(a, a.ownerDocument) }, nb: function (a) { return !!b.a.Ia(a, b.a.Z) }, u: function (a) { return a && a.tagName && a.tagName.toLowerCase() }, n: function (a, b, c) {
                    var e = D && ua[b]; if (!e && "undefined" != typeof q) {
                        if (T(a, b)) {
                            var f = c; c = function (a, b) {
                                var c =
                                this.checked; b && (this.checked = b.qb !== n); f.call(this, a); this.checked = c
                            }
                        } q(a).bind(b, c)
                    } else !e && "function" == typeof a.addEventListener ? a.addEventListener(b, c, t) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, function (b) { c.call(a, b) }) : k(Error("Browser doesn't support addEventListener or attachEvent"))
                }, Da: function (a, b) {
                    (!a || !a.nodeType) && k(Error("element must be a DOM node when calling triggerEvent")); if ("undefined" != typeof q) { var c = []; T(a, b) && c.push({ qb: a.checked }); q(a).trigger(b, c) } else "function" ==
                    typeof u.createEvent ? "function" == typeof a.dispatchEvent ? (c = u.createEvent(la[b] || "HTMLEvents"), c.initEvent(b, n, n, z, 0, 0, 0, 0, 0, t, t, t, t, 0, a), a.dispatchEvent(c)) : k(Error("The supplied element doesn't support dispatchEvent")) : "undefined" != typeof a.fireEvent ? (T(a, b) && (a.checked = a.checked !== n), a.fireEvent("on" + b)) : k(Error("Browser doesn't support triggering events"))
                }, d: function (a) { return b.S(a) ? a() : a }, wa: function (a) { return b.S(a) ? a.t() : a }, ea: function (a, d, c) {
                    if (d) {
                        var e = /\S+/g, f = a.className.match(e) || [];
                        b.a.o(d.match(e), function (a) { b.a.ga(f, a, c) }); a.className = f.join(" ")
                    }
                }, gb: function (a, d) { var c = b.a.d(d); if (c === r || c === j) c = ""; if (3 === a.nodeType) a.data = c; else { var e = b.e.firstChild(a); !e || 3 != e.nodeType || b.e.nextSibling(e) ? b.e.O(a, [u.createTextNode(c)]) : e.data = c; b.a.zb(a) } }, eb: function (a, b) { a.name = b; if (7 >= D) try { a.mergeAttributes(u.createElement("<input name='" + a.name + "'/>"), t) } catch (c) { } }, zb: function (a) { 9 <= D && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, xb: function (a) {
                    if (9 <= D) {
                        var b =
                        a.style.width; a.style.width = 0; a.style.width = b
                    }
                }, Ob: function (a, d) { a = b.a.d(a); d = b.a.d(d); for (var c = [], e = a; e <= d; e++) c.push(e); return c }, M: function (a) { for (var b = [], c = 0, e = a.length; c < e; c++) b.push(a[c]); return b }, Sb: 6 === D, Tb: 7 === D, aa: D, Ra: function (a, d) { for (var c = b.a.M(a.getElementsByTagName("input")).concat(b.a.M(a.getElementsByTagName("textarea"))), e = "string" == typeof d ? function (a) { return a.name === d } : function (a) { return d.test(a.name) }, f = [], g = c.length - 1; 0 <= g; g--) e(c[g]) && f.push(c[g]); return f }, Lb: function (a) {
                    return "string" ==
                    typeof a && (a = b.a.D(a)) ? H && H.parse ? H.parse(a) : (new Function("return " + a))() : r
                }, za: function (a, d, c) { (!H || !H.stringify) && k(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")); return H.stringify(b.a.d(a), d, c) }, Mb: function (a, d, c) {
                    c = c || {}; var e = c.params || {}, f = c.includeFields || this.Qa, g = a; if ("object" == typeof a && "form" === b.a.u(a)) for (var g = a.action,
                    h = f.length - 1; 0 <= h; h--) for (var l = b.a.Ra(a, f[h]), m = l.length - 1; 0 <= m; m--) e[l[m].name] = l[m].value; d = b.a.d(d); var j = u.createElement("form"); j.style.display = "none"; j.action = g; j.method = "post"; for (var p in d) a = u.createElement("input"), a.name = p, a.value = b.a.za(b.a.d(d[p])), j.appendChild(a); S(e, function (a, b) { var c = u.createElement("input"); c.name = a; c.value = b; j.appendChild(c) }); u.body.appendChild(j); c.submitter ? c.submitter(j) : j.submit(); setTimeout(function () { j.parentNode.removeChild(j) }, 0)
                }
            }; b.b("utils", b.a); b.b("utils.arrayForEach",
            b.a.o); b.b("utils.arrayFirst", b.a.Ia); b.b("utils.arrayFilter", b.a.ha); b.b("utils.arrayGetDistinctValues", b.a.Ja); b.b("utils.arrayIndexOf", b.a.k); b.b("utils.arrayMap", b.a.X); b.b("utils.arrayPushAll", b.a.Q); b.b("utils.arrayRemoveItem", b.a.ia); b.b("utils.extend", b.a.extend); b.b("utils.fieldsIncludedWithJsonPost", b.a.Qa); b.b("utils.getFormFields", b.a.Ra); b.b("utils.peekObservable", b.a.wa); b.b("utils.postJson", b.a.Mb); b.b("utils.parseJson", b.a.Lb); b.b("utils.registerEventHandler", b.a.n); b.b("utils.stringifyJson",
            b.a.za); b.b("utils.range", b.a.Ob); b.b("utils.toggleDomNodeCssClass", b.a.ea); b.b("utils.triggerEvent", b.a.Da); b.b("utils.unwrapObservable", b.a.d); b.b("utils.objectForEach", b.a.w); b.b("utils.addOrRemoveItem", b.a.ga); Function.prototype.bind || (Function.prototype.bind = function (a) { var b = this, c = Array.prototype.slice.call(arguments); a = c.shift(); return function () { return b.apply(a, c.concat(Array.prototype.slice.call(arguments))) } }); b.a.f = new function () {
                var a = 0, d = "__ko__" + (new Date).getTime(), c = {}; return {
                    get: function (a,
                    c) { var d = b.a.f.na(a, t); return d === j ? j : d[c] }, set: function (a, c, d) { d === j && b.a.f.na(a, t) === j || (b.a.f.na(a, n)[c] = d) }, na: function (b, f) { var g = b[d]; if (!g || !("null" !== g && c[g])) { if (!f) return j; g = b[d] = "ko" + a++; c[g] = {} } return c[g] }, clear: function (a) { var b = a[d]; return b ? (delete c[b], a[d] = r, n) : t }
                }
            }; b.b("utils.domData", b.a.f); b.b("utils.domData.clear", b.a.f.clear); b.a.G = new function () {
                function a(a, d) { var e = b.a.f.get(a, c); e === j && d && (e = [], b.a.f.set(a, c, e)); return e } function d(c) {
                    var e = a(c, t); if (e) for (var e = e.slice(0),
                    l = 0; l < e.length; l++) e[l](c); b.a.f.clear(c); "function" == typeof q && "function" == typeof q.cleanData && q.cleanData([c]); if (f[c.nodeType]) for (e = c.firstChild; c = e;) e = c.nextSibling, 8 === c.nodeType && d(c)
                } var c = "__ko_domNodeDisposal__" + (new Date).getTime(), e = { 1: n, 8: n, 9: n }, f = { 1: n, 9: n }; return {
                    Ea: function (b, c) { "function" != typeof c && k(Error("Callback must be a function")); a(b, n).push(c) }, $a: function (d, e) { var f = a(d, t); f && (b.a.ia(f, e), 0 == f.length && b.a.f.set(d, c, j)) }, A: function (a) {
                        if (e[a.nodeType] && (d(a), f[a.nodeType])) {
                            var c =
                            []; b.a.Q(c, a.getElementsByTagName("*")); for (var l = 0, m = c.length; l < m; l++) d(c[l])
                        } return a
                    }, removeNode: function (a) { b.A(a); a.parentNode && a.parentNode.removeChild(a) }
                }
            }; b.A = b.a.G.A; b.removeNode = b.a.G.removeNode; b.b("cleanNode", b.A); b.b("removeNode", b.removeNode); b.b("utils.domNodeDisposal", b.a.G); b.b("utils.domNodeDisposal.addDisposeCallback", b.a.G.Ea); b.b("utils.domNodeDisposal.removeDisposeCallback", b.a.G.$a); b.a.va = function (a) {
                var d; if ("undefined" != typeof q) if (q.parseHTML) d = q.parseHTML(a) || []; else {
                    if ((d =
                    q.clean([a])) && d[0]) { for (a = d[0]; a.parentNode && 11 !== a.parentNode.nodeType;) a = a.parentNode; a.parentNode && a.parentNode.removeChild(a) }
                } else {
                    var c = b.a.D(a).toLowerCase(); d = u.createElement("div"); c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""]; a = "ignored<div>" + c[1] + a + c[2] + "</div>"; for ("function" == typeof z.innerShiv ? d.appendChild(z.innerShiv(a)) :
                    d.innerHTML = a; c[0]--;) d = d.lastChild; d = b.a.M(d.lastChild.childNodes)
                } return d
            }; b.a.da = function (a, d) { b.a.ma(a); d = b.a.d(d); if (d !== r && d !== j) if ("string" != typeof d && (d = d.toString()), "undefined" != typeof q) q(a).html(d); else for (var c = b.a.va(d), e = 0; e < c.length; e++) a.appendChild(c[e]) }; b.b("utils.parseHtmlFragment", b.a.va); b.b("utils.setHtml", b.a.da); var V = {}; b.s = {
                ta: function (a) {
                    "function" != typeof a && k(Error("You can only pass a function to ko.memoization.memoize()")); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) +
                    (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1); V[b] = a; return "\x3c!--[ko_memo:" + b + "]--\x3e"
                }, kb: function (a, b) { var c = V[a]; c === j && k(Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.")); try { return c.apply(r, b || []), n } finally { delete V[a] } }, lb: function (a, d) { var c = []; ia(a, c); for (var e = 0, f = c.length; e < f; e++) { var g = c[e].vb, h = [g]; d && b.a.Q(h, d); b.s.kb(c[e].Ib, h); g.nodeValue = ""; g.parentNode && g.parentNode.removeChild(g) } }, Xa: function (a) {
                    return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ?
                    a[1] : r
                }
            }; b.b("memoization", b.s); b.b("memoization.memoize", b.s.ta); b.b("memoization.unmemoize", b.s.kb); b.b("memoization.parseMemoText", b.s.Xa); b.b("memoization.unmemoizeDomNodeAndDescendants", b.s.lb); b.Pa = { throttle: function (a, d) { a.throttleEvaluation = d; var c = r; return b.i({ read: a, write: function (b) { clearTimeout(c); c = setTimeout(function () { a(b) }, d) } }) }, notify: function (a, d) { a.equalityComparer = "always" == d ? J(t) : b.m.fn.equalityComparer; return a } }; b.b("extenders", b.Pa); b.ib = function (a, d, c) {
                this.target = a; this.ja =
                d; this.ub = c; b.p(this, "dispose", this.B)
            }; b.ib.prototype.B = function () { this.Fb = n; this.ub() }; b.U = function () { this.F = {}; b.a.extend(this, b.U.fn); b.p(this, "subscribe", this.Aa); b.p(this, "extend", this.extend); b.p(this, "getSubscriptionsCount", this.Bb) }; b.U.fn = {
                Aa: function (a, d, c) { c = c || "change"; var e = new b.ib(this, d ? a.bind(d) : a, function () { b.a.ia(this.F[c], e) }.bind(this)); this.F[c] || (this.F[c] = []); this.F[c].push(e); return e }, notifySubscribers: function (a, d) {
                    d = d || "change"; this.F[d] && b.r.L(function () {
                        b.a.o(this.F[d].slice(0),
                        function (b) { b && b.Fb !== n && b.ja(a) })
                    }, this)
                }, Bb: function () { var a = 0; b.a.w(this.F, function (b, c) { a += c.length }); return a }, extend: function (a) { var d = this; a && b.a.w(a, function (a, e) { var f = b.Pa[a]; "function" == typeof f && (d = f(d, e)) }); return d }
            }; b.Ta = function (a) { return a != r && "function" == typeof a.Aa && "function" == typeof a.notifySubscribers }; b.b("subscribable", b.U); b.b("isSubscribable", b.Ta); var G = []; b.r = {
                pb: function (a) { G.push({ ja: a, Oa: [] }) }, end: function () { G.pop() }, Za: function (a) {
                    b.Ta(a) || k(Error("Only subscribable things can act as dependencies"));
                    if (0 < G.length) { var d = G[G.length - 1]; d && !(0 <= b.a.k(d.Oa, a)) && (d.Oa.push(a), d.ja(a)) }
                }, L: function (a, b, c) { try { return G.push(r), a.apply(b, c || []) } finally { G.pop() } }
            }; var wa = { undefined: n, "boolean": n, number: n, string: n }; b.m = function (a) {
                function d() { if (0 < arguments.length) { if (!d.equalityComparer || !d.equalityComparer(c, arguments[0])) d.I(), c = arguments[0], d.H(); return this } b.r.Za(d); return c } var c = a; b.U.call(d); d.t = function () { return c }; d.H = function () { d.notifySubscribers(c) }; d.I = function () {
                    d.notifySubscribers(c,
                    "beforeChange")
                }; b.a.extend(d, b.m.fn); b.p(d, "peek", d.t); b.p(d, "valueHasMutated", d.H); b.p(d, "valueWillMutate", d.I); return d
            }; b.m.fn = { equalityComparer: function (a, b) { return a === r || typeof a in wa ? a === b : t } }; var I = b.m.Nb = "__ko_proto__"; b.m.fn[I] = b.m; b.oa = function (a, d) { return a === r || a === j || a[I] === j ? t : a[I] === d ? n : b.oa(a[I], d) }; b.S = function (a) { return b.oa(a, b.m) }; b.Ua = function (a) { return "function" == typeof a && a[I] === b.m || "function" == typeof a && a[I] === b.i && a.Cb ? n : t }; b.b("observable", b.m); b.b("isObservable", b.S);
            b.b("isWriteableObservable", b.Ua); b.T = function (a) { 0 == arguments.length && (a = []); a !== r && (a !== j && !("length" in a)) && k(Error("The argument passed when initializing an observable array must be an array, or null, or undefined.")); var d = b.m(a); b.a.extend(d, b.T.fn); return d }; b.T.fn = {
                remove: function (a) { for (var b = this.t(), c = [], e = "function" == typeof a ? a : function (b) { return b === a }, f = 0; f < b.length; f++) { var g = b[f]; e(g) && (0 === c.length && this.I(), c.push(g), b.splice(f, 1), f--) } c.length && this.H(); return c }, removeAll: function (a) {
                    if (a ===
                    j) { var d = this.t(), c = d.slice(0); this.I(); d.splice(0, d.length); this.H(); return c } return !a ? [] : this.remove(function (c) { return 0 <= b.a.k(a, c) })
                }, destroy: function (a) { var b = this.t(), c = "function" == typeof a ? a : function (b) { return b === a }; this.I(); for (var e = b.length - 1; 0 <= e; e--) c(b[e]) && (b[e]._destroy = n); this.H() }, destroyAll: function (a) { return a === j ? this.destroy(J(n)) : !a ? [] : this.destroy(function (d) { return 0 <= b.a.k(a, d) }) }, indexOf: function (a) { var d = this(); return b.a.k(d, a) }, replace: function (a, b) {
                    var c = this.indexOf(a);
                    0 <= c && (this.I(), this.t()[c] = b, this.H())
                }
            }; b.a.o("pop push reverse shift sort splice unshift".split(" "), function (a) { b.T.fn[a] = function () { var b = this.t(); this.I(); b = b[a].apply(b, arguments); this.H(); return b } }); b.a.o(["slice"], function (a) { b.T.fn[a] = function () { var b = this(); return b[a].apply(b, arguments) } }); b.b("observableArray", b.T); b.i = function (a, d, c) {
                function e() { b.a.o(x, function (a) { a.B() }); x = [] } function f() { var a = h.throttleEvaluation; a && 0 <= a ? (clearTimeout(s), s = setTimeout(g, a)) : g() } function g() {
                    if (!p) if (A &&
                    O()) C(); else { p = n; try { var a = b.a.X(x, function (a) { return a.target }); b.r.pb(function (c) { var d; 0 <= (d = b.a.k(a, c)) ? a[d] = j : x.push(c.Aa(f)) }); for (var c = q.call(d), e = a.length - 1; 0 <= e; e--) a[e] && x.splice(e, 1)[0].B(); A = n; h.notifySubscribers(m, "beforeChange"); m = c } finally { b.r.end() } h.notifySubscribers(m); p = t; x.length || C() }
                } function h() {
                    if (0 < arguments.length) return "function" === typeof u ? u.apply(d, arguments) : k(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")),
                    this; A || g(); b.r.Za(h); return m
                } function l() { return !A || 0 < x.length } var m, A = t, p = t, q = a; q && "object" == typeof q ? (c = q, q = c.read) : (c = c || {}, q || (q = c.read)); "function" != typeof q && k(Error("Pass a function that returns the value of the ko.computed")); var u = c.write, F = c.disposeWhenNodeIsRemoved || c.Y || r, O = c.disposeWhen || c.Na || J(t), C = e, x = [], s = r; d || (d = c.owner); h.t = function () { A || g(); return m }; h.Ab = function () { return x.length }; h.Cb = "function" === typeof c.write; h.B = function () { C() }; h.ra = l; b.U.call(h); b.a.extend(h, b.i.fn);
                b.p(h, "peek", h.t); b.p(h, "dispose", h.B); b.p(h, "isActive", h.ra); b.p(h, "getDependenciesCount", h.Ab); c.deferEvaluation !== n && g(); if (F && l()) { C = function () { b.a.G.$a(F, C); e() }; b.a.G.Ea(F, C); var E = O, O = function () { return !b.a.Z(F) || E() } } return h
            }; b.Eb = function (a) { return b.oa(a, b.i) }; v = b.m.Nb; b.i[v] = b.m; b.i.fn = {}; b.i.fn[v] = b.i; b.b("dependentObservable", b.i); b.b("computed", b.i); b.b("isComputed", b.Eb); b.jb = function (a) {
                0 == arguments.length && k(Error("When calling ko.toJS, pass the object you want to convert.")); return ha(a,
                function (a) { for (var c = 0; b.S(a) && 10 > c; c++) a = a(); return a })
            }; b.toJSON = function (a, d, c) { a = b.jb(a); return b.a.za(a, d, c) }; b.b("toJS", b.jb); b.b("toJSON", b.toJSON); b.j = {
                q: function (a) { switch (b.a.u(a)) { case "option": return a.__ko__hasDomDataOptionValue__ === n ? b.a.f.get(a, b.c.options.ua) : 7 >= b.a.aa ? a.getAttributeNode("value").specified ? a.value : a.text : a.value; case "select": return 0 <= a.selectedIndex ? b.j.q(a.options[a.selectedIndex]) : j; default: return a.value } }, V: function (a, d) {
                    switch (b.a.u(a)) {
                        case "option": switch (typeof d) {
                            case "string": b.a.f.set(a,
                            b.c.options.ua, j); "__ko__hasDomDataOptionValue__" in a && delete a.__ko__hasDomDataOptionValue__; a.value = d; break; default: b.a.f.set(a, b.c.options.ua, d), a.__ko__hasDomDataOptionValue__ = n, a.value = "number" === typeof d ? d : ""
                        } break; case "select": for (var c = a.options.length - 1; 0 <= c; c--) if (b.j.q(a.options[c]) == d) { a.selectedIndex = c; break } break; default: if (d === r || d === j) d = ""; a.value = d
                    }
                }
            }; b.b("selectExtensions", b.j); b.b("selectExtensions.readValue", b.j.q); b.b("selectExtensions.writeValue", b.j.V); var ra = /\@ko_token_(\d+)\@/g,
            xa = ["true", "false", "null", "undefined"], ya = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i; b.g = {
                R: [], ba: function (a) {
                    var d = b.a.D(a); if (3 > d.length) return []; "{" === d.charAt(0) && (d = d.substring(1, d.length - 1)); a = []; for (var c = r, e, f = 0; f < d.length; f++) { var g = d.charAt(f); if (c === r) switch (g) { case '"': case "'": case "/": c = f, e = g } else if (g == e && "\\" !== d.charAt(f - 1)) { g = d.substring(c, f + 1); a.push(g); var h = "@ko_token_" + (a.length - 1) + "@", d = d.substring(0, c) + h + d.substring(f + 1), f = f - (g.length - h.length), c = r } } e = c = r; for (var l =
                    0, m = r, f = 0; f < d.length; f++) { g = d.charAt(f); if (c === r) switch (g) { case "{": c = f; m = g; e = "}"; break; case "(": c = f; m = g; e = ")"; break; case "[": c = f, m = g, e = "]" } g === m ? l++ : g === e && (l--, 0 === l && (g = d.substring(c, f + 1), a.push(g), h = "@ko_token_" + (a.length - 1) + "@", d = d.substring(0, c) + h + d.substring(f + 1), f -= g.length - h.length, c = r)) } e = []; d = d.split(","); c = 0; for (f = d.length; c < f; c++) l = d[c], m = l.indexOf(":"), 0 < m && m < l.length - 1 ? (g = l.substring(m + 1), e.push({ key: R(l.substring(0, m), a), value: R(g, a) })) : e.push({ unknown: R(l, a) }); return e
                }, ca: function (a) {
                    var d =
                    "string" === typeof a ? b.g.ba(a) : a, c = []; a = []; for (var e, f = 0; e = d[f]; f++) if (0 < c.length && c.push(","), e.key) { var g; a: { g = e.key; var h = b.a.D(g); switch (h.length && h.charAt(0)) { case "'": case '"': break a; default: g = "'" + h + "'" } } e = e.value; c.push(g); c.push(":"); c.push(e); e = b.a.D(e); 0 <= b.a.k(xa, b.a.D(e).toLowerCase()) ? e = t : (h = e.match(ya), e = h === r ? t : h[1] ? "Object(" + h[1] + ")" + h[2] : e); e && (0 < a.length && a.push(", "), a.push(g + " : function(__ko_value) { " + e + " = __ko_value; }")) } else e.unknown && c.push(e.unknown); d = c.join(""); 0 < a.length &&
                    (d = d + ", '_ko_property_writers' : { " + a.join("") + " } "); return d
                }, Hb: function (a, d) { for (var c = 0; c < a.length; c++) if (b.a.D(a[c].key) == d) return n; return t }, fa: function (a, d, c, e, f) { if (!a || !b.S(a)) { if ((a = d()._ko_property_writers) && a[c]) a[c](e) } else b.Ua(a) && (!f || a.t() !== e) && a(e) }
            }; b.b("expressionRewriting", b.g); b.b("expressionRewriting.bindingRewriteValidators", b.g.R); b.b("expressionRewriting.parseObjectLiteral", b.g.ba); b.b("expressionRewriting.preProcessBindings", b.g.ca); b.b("jsonExpressionRewriting", b.g);
            b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", b.g.ca); var M = u && "\x3c!--test--\x3e" === u.createComment("test").text, qa = M ? /^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/, pa = M ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, za = { ul: n, ol: n }; b.e = {
                J: {}, childNodes: function (a) { return B(a) ? ga(a) : a.childNodes }, $: function (a) { if (B(a)) { a = b.e.childNodes(a); for (var d = 0, c = a.length; d < c; d++) b.removeNode(a[d]) } else b.a.ma(a) }, O: function (a, d) {
                    if (B(a)) {
                        b.e.$(a); for (var c =
                        a.nextSibling, e = 0, f = d.length; e < f; e++) c.parentNode.insertBefore(d[e], c)
                    } else b.a.O(a, d)
                }, Ya: function (a, b) { B(a) ? a.parentNode.insertBefore(b, a.nextSibling) : a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b) }, Sa: function (a, d, c) { c ? B(a) ? a.parentNode.insertBefore(d, c.nextSibling) : c.nextSibling ? a.insertBefore(d, c.nextSibling) : a.appendChild(d) : b.e.Ya(a, d) }, firstChild: function (a) { return !B(a) ? a.firstChild : !a.nextSibling || L(a.nextSibling) ? r : a.nextSibling }, nextSibling: function (a) {
                    B(a) && (a = fa(a)); return a.nextSibling &&
                    L(a.nextSibling) ? r : a.nextSibling
                }, mb: function (a) { return (a = B(a)) ? a[1] : r }, Wa: function (a) { if (za[b.a.u(a)]) { var d = a.firstChild; if (d) { do if (1 === d.nodeType) { var c; c = d.firstChild; var e = r; if (c) { do if (e) e.push(c); else if (B(c)) { var f = fa(c, n); f ? c = f : e = [c] } else L(c) && (e = [c]); while (c = c.nextSibling) } if (c = e) { e = d.nextSibling; for (f = 0; f < c.length; f++) e ? a.insertBefore(c[f], e) : a.appendChild(c[f]) } } while (d = d.nextSibling) } } }
            }; b.b("virtualElements", b.e); b.b("virtualElements.allowedBindings", b.e.J); b.b("virtualElements.emptyNode",
            b.e.$); b.b("virtualElements.insertAfter", b.e.Sa); b.b("virtualElements.prepend", b.e.Ya); b.b("virtualElements.setDomNodeChildren", b.e.O); b.K = function () { this.Ka = {} }; b.a.extend(b.K.prototype, {
                nodeHasBindings: function (a) { switch (a.nodeType) { case 1: return a.getAttribute("data-bind") != r; case 8: return b.e.mb(a) != r; default: return t } }, getBindings: function (a, b) { var c = this.getBindingsString(a, b); return c ? this.parseBindingsString(c, b, a) : r }, getBindingsString: function (a) {
                    switch (a.nodeType) {
                        case 1: return a.getAttribute("data-bind");
                        case 8: return b.e.mb(a); default: return r
                    }
                }, parseBindingsString: function (a, d, c) { try { var e; if (!(e = this.Ka[a])) { var f = this.Ka, g, h = "with($context){with($data||{}){return{" + b.g.ca(a) + "}}}"; g = new Function("$context", "$element", h); e = f[a] = g } return e(d, c) } catch (l) { l.message = "Unable to parse bindings.\nBindings value: " + a + "\nMessage: " + l.message, k(l) } }
            }); b.K.instance = new b.K; b.b("bindingProvider", b.K); b.c = {}; b.z = function (a, d, c) {
                d ? (b.a.extend(this, d), this.$parentContext = d, this.$parent = d.$data, this.$parents =
                (d.$parents || []).slice(0), this.$parents.unshift(this.$parent)) : (this.$parents = [], this.$root = a, this.ko = b); this.$data = a; c && (this[c] = a)
            }; b.z.prototype.createChildContext = function (a, d) { return new b.z(a, this, d) }; b.z.prototype.extend = function (a) { var d = b.a.extend(new b.z, this); return b.a.extend(d, a) }; var ca = "__ko_boundElement"; b.hb = function (a, d) { if (2 == arguments.length) b.a.f.set(a, "__ko_bindingContext__", d); else return b.a.f.get(a, "__ko_bindingContext__") }; b.Ha = function (a, d, c) {
                1 === a.nodeType && b.e.Wa(a); return ba(a,
                d, c, n)
            }; b.Ga = function (a, b) { (1 === b.nodeType || 8 === b.nodeType) && ea(a, b, n) }; b.Fa = function (a, b) { b && (1 !== b.nodeType && 8 !== b.nodeType) && k(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")); b = b || z.document.body; da(a, b, n) }; b.la = function (a) { switch (a.nodeType) { case 1: case 8: var d = b.hb(a); if (d) return d; if (a.parentNode) return b.la(a.parentNode) } return j }; b.sb = function (a) { return (a = b.la(a)) ? a.$data : j }; b.b("bindingHandlers", b.c); b.b("applyBindings", b.Fa); b.b("applyBindingsToDescendants",
            b.Ga); b.b("applyBindingsToNode", b.Ha); b.b("contextFor", b.la); b.b("dataFor", b.sb); var na = { "class": "className", "for": "htmlFor" }; b.c.attr = { update: function (a, d) { var c = b.a.d(d()) || {}; b.a.w(c, function (c, d) { d = b.a.d(d); var g = d === t || d === r || d === j; g && a.removeAttribute(c); 8 >= b.a.aa && c in na ? (c = na[c], g ? a.removeAttribute(c) : a[c] = d) : g || a.setAttribute(c, d.toString()); "name" === c && b.a.eb(a, g ? "" : d.toString()) }) } }; b.c.checked = {
                init: function (a, d, c) {
                    b.a.n(a, "click", function () {
                        var e; if ("checkbox" == a.type) e = a.checked; else if ("radio" ==
                        a.type && a.checked) e = K(a, c()); else return; var f = d(), g = b.a.d(f); "checkbox" == a.type && g instanceof Array ? b.a.ga(f, K(a, c()), a.checked) : b.g.fa(f, c, "checked", e, n)
                    }); "radio" == a.type && !a.name && b.c.uniqueName.init(a, J(n))
                }, update: function (a, d, c) { d = b.a.d(d()); "checkbox" == a.type ? a.checked = d instanceof Array ? 0 <= b.a.k(d, K(a, c())) : d : "radio" == a.type && (a.checked = K(a, c()) === d) }
            }; b.c.checkedValue = { update: function (a, d) { a.value = b.a.d(d()) } }; b.c.css = {
                update: function (a, d) {
                    var c = b.a.d(d()); "object" == typeof c ? b.a.w(c, function (c,
                    d) { d = b.a.d(d); b.a.ea(a, c, d) }) : (c = String(c || ""), b.a.ea(a, a.__ko__cssValue, t), a.__ko__cssValue = c, b.a.ea(a, c, n))
                }
            }; b.c.enable = { update: function (a, d) { var c = b.a.d(d()); c && a.disabled ? a.removeAttribute("disabled") : !c && !a.disabled && (a.disabled = n) } }; b.c.disable = { update: function (a, d) { b.c.enable.update(a, function () { return !b.a.d(d()) }) } }; b.c.event = {
                init: function (a, d, c, e) {
                    var f = d() || {}; b.a.w(f, function (f) {
                        "string" == typeof f && b.a.n(a, f, function (a) {
                            var l, m = d()[f]; if (m) {
                                var j = c(); try {
                                    var p = b.a.M(arguments); p.unshift(e);
                                    l = m.apply(e, p)
                                } finally { l !== n && (a.preventDefault ? a.preventDefault() : a.returnValue = t) } j[f + "Bubble"] === t && (a.cancelBubble = n, a.stopPropagation && a.stopPropagation())
                            }
                        })
                    })
                }
            }; b.c.foreach = {
                Va: function (a) {
                    return function () {
                        var d = a(), c = b.a.wa(d); if (!c || "number" == typeof c.length) return { foreach: d, templateEngine: b.C.qa }; b.a.d(d); return {
                            foreach: c.data, as: c.as, includeDestroyed: c.includeDestroyed, afterAdd: c.afterAdd, beforeRemove: c.beforeRemove, afterRender: c.afterRender, beforeMove: c.beforeMove, afterMove: c.afterMove,
                            templateEngine: b.C.qa
                        }
                    }
                }, init: function (a, d) { return b.c.template.init(a, b.c.foreach.Va(d)) }, update: function (a, d, c, e, f) { return b.c.template.update(a, b.c.foreach.Va(d), c, e, f) }
            }; b.g.R.foreach = t; b.e.J.foreach = n; b.c.hasfocus = {
                init: function (a, d, c) {
                    function e(e) { a.__ko_hasfocusUpdating = n; var f = a.ownerDocument; "activeElement" in f && (e = f.activeElement === a); f = d(); b.g.fa(f, c, "hasfocus", e, n); a.__ko_hasfocusLastValue = e; a.__ko_hasfocusUpdating = t } var f = e.bind(r, n), g = e.bind(r, t); b.a.n(a, "focus", f); b.a.n(a, "focusin",
                    f); b.a.n(a, "blur", g); b.a.n(a, "focusout", g)
                }, update: function (a, d) { var c = !!b.a.d(d()); !a.__ko_hasfocusUpdating && a.__ko_hasfocusLastValue !== c && (c ? a.focus() : a.blur(), b.r.L(b.a.Da, r, [a, c ? "focusin" : "focusout"])) }
            }; b.c.hasFocus = b.c.hasfocus; b.c.html = { init: function () { return { controlsDescendantBindings: n } }, update: function (a, d) { b.a.da(a, d()) } }; var ja = "__ko_withIfBindingData"; U("if"); U("ifnot", t, n); U("with", n, t, function (a, b) { return a.createChildContext(b) }); b.c.options = {
                update: function (a, d, c) {
                    "select" !== b.a.u(a) &&
                    k(Error("options binding applies only to SELECT elements")); for (var e = 0 == a.length, f = b.a.X(b.a.ha(a.childNodes, function (a) { return a.tagName && "option" === b.a.u(a) && a.selected }), function (a) { return b.j.q(a) || a.innerText || a.textContent }), g = a.scrollTop, h = b.a.d(d()) ; 0 < a.length;) b.A(a.options[0]), a.remove(0); if (h) {
                        c = c(); var l = c.optionsIncludeDestroyed; "number" != typeof h.length && (h = [h]); if (c.optionsCaption) { var m = u.createElement("option"); b.a.da(m, c.optionsCaption); b.j.V(m, j); a.appendChild(m) } d = 0; for (var q =
                        h.length; d < q; d++) { var p = h[d]; if (!p || !p._destroy || l) { var m = u.createElement("option"), v = function (a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c }, w = v(p, c.optionsValue, p); b.j.V(m, b.a.d(w)); p = v(p, c.optionsText, w); b.a.gb(m, p); a.appendChild(m) } } h = a.getElementsByTagName("option"); d = l = 0; for (q = h.length; d < q; d++) 0 <= b.a.k(f, b.j.q(h[d])) && (b.a.fb(h[d], n), l++); a.scrollTop = g; e && "value" in c && ka(a, b.a.wa(c.value), n); b.a.xb(a)
                    }
                }
            }; b.c.options.ua = "__ko.optionValueDomData__"; b.c.selectedOptions = {
                init: function (a,
                d, c) { b.a.n(a, "change", function () { var e = d(), f = []; b.a.o(a.getElementsByTagName("option"), function (a) { a.selected && f.push(b.j.q(a)) }); b.g.fa(e, c, "selectedOptions", f) }) }, update: function (a, d) { "select" != b.a.u(a) && k(Error("values binding applies only to SELECT elements")); var c = b.a.d(d()); c && "number" == typeof c.length && b.a.o(a.getElementsByTagName("option"), function (a) { var d = 0 <= b.a.k(c, b.j.q(a)); b.a.fb(a, d) }) }
            }; b.c.style = {
                update: function (a, d) {
                    var c = b.a.d(d() || {}); b.a.w(c, function (c, d) {
                        d = b.a.d(d); a.style[c] =
                        d || ""
                    })
                }
            }; b.c.submit = { init: function (a, d, c, e) { "function" != typeof d() && k(Error("The value for a submit binding must be a function")); b.a.n(a, "submit", function (b) { var c, h = d(); try { c = h.call(e, a) } finally { c !== n && (b.preventDefault ? b.preventDefault() : b.returnValue = t) } }) } }; b.c.text = { update: function (a, d) { b.a.gb(a, d()) } }; b.e.J.text = n; b.c.uniqueName = { init: function (a, d) { if (d()) { var c = "ko_unique_" + ++b.c.uniqueName.rb; b.a.eb(a, c) } } }; b.c.uniqueName.rb = 0; b.c.value = {
                init: function (a, d, c) {
                    function e() {
                        h = t; var e = d(),
                        f = b.j.q(a); b.g.fa(e, c, "value", f)
                    } var f = ["change"], g = c().valueUpdate, h = t; g && ("string" == typeof g && (g = [g]), b.a.Q(f, g), f = b.a.Ja(f)); if (b.a.aa && ("input" == a.tagName.toLowerCase() && "text" == a.type && "off" != a.autocomplete && (!a.form || "off" != a.form.autocomplete)) && -1 == b.a.k(f, "propertychange")) b.a.n(a, "propertychange", function () { h = n }), b.a.n(a, "blur", function () { h && e() }); b.a.o(f, function (c) { var d = e; b.a.Rb(c, "after") && (d = function () { setTimeout(e, 0) }, c = c.substring(5)); b.a.n(a, c, d) })
                }, update: function (a, d) {
                    var c = "select" ===
                    b.a.u(a), e = b.a.d(d()), f = b.j.q(a), g = e != f; 0 === e && (0 !== f && "0" !== f) && (g = n); g && (f = function () { b.j.V(a, e) }, f(), c && setTimeout(f, 0)); c && 0 < a.length && ka(a, e, t)
                }
            }; b.c.visible = { update: function (a, d) { var c = b.a.d(d()), e = "none" != a.style.display; c && !e ? a.style.display = "" : !c && e && (a.style.display = "none") } }; b.c.click = { init: function (a, d, c, e) { return b.c.event.init.call(this, a, function () { var a = {}; a.click = d(); return a }, c, e) } }; b.v = function () { }; b.v.prototype.renderTemplateSource = function () { k(Error("Override renderTemplateSource")) };
            b.v.prototype.createJavaScriptEvaluatorBlock = function () { k(Error("Override createJavaScriptEvaluatorBlock")) }; b.v.prototype.makeTemplateSource = function (a, d) { if ("string" == typeof a) { d = d || u; var c = d.getElementById(a); c || k(Error("Cannot find template with ID " + a)); return new b.l.h(c) } if (1 == a.nodeType || 8 == a.nodeType) return new b.l.P(a); k(Error("Unknown template type: " + a)) }; b.v.prototype.renderTemplate = function (a, b, c, e) { a = this.makeTemplateSource(a, e); return this.renderTemplateSource(a, b, c) }; b.v.prototype.isTemplateRewritten =
            function (a, b) { return this.allowTemplateRewriting === t ? n : this.makeTemplateSource(a, b).data("isRewritten") }; b.v.prototype.rewriteTemplate = function (a, b, c) { a = this.makeTemplateSource(a, c); b = b(a.text()); a.text(b); a.data("isRewritten", n) }; b.b("templateEngine", b.v); var Aa = /(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi, Ba = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g; b.Ba = {
                yb: function (a, d, c) {
                    d.isTemplateRewritten(a, c) || d.rewriteTemplate(a, function (a) {
                        return b.Ba.Jb(a,
                        d)
                    }, c)
                }, Jb: function (a, b) { return a.replace(Aa, function (a, e, f, g, h, j, m) { return aa(m, e, b) }).replace(Ba, function (a, e) { return aa(e, "\x3c!-- ko --\x3e", b) }) }, ob: function (a) { return b.s.ta(function (d, c) { d.nextSibling && b.Ha(d.nextSibling, a, c) }) }
            }; b.b("__tr_ambtns", b.Ba.ob); b.l = {}; b.l.h = function (a) { this.h = a }; b.l.h.prototype.text = function () {
                var a = b.a.u(this.h), a = "script" === a ? "text" : "textarea" === a ? "value" : "innerHTML"; if (0 == arguments.length) return this.h[a]; var d = arguments[0]; "innerHTML" === a ? b.a.da(this.h, d) : this.h[a] =
                d
            }; b.l.h.prototype.data = function (a) { if (1 === arguments.length) return b.a.f.get(this.h, "templateSourceData_" + a); b.a.f.set(this.h, "templateSourceData_" + a, arguments[1]) }; b.l.P = function (a) { this.h = a }; b.l.P.prototype = new b.l.h; b.l.P.prototype.text = function () { if (0 == arguments.length) { var a = b.a.f.get(this.h, "__ko_anon_template__") || {}; a.Ca === j && a.ka && (a.Ca = a.ka.innerHTML); return a.Ca } b.a.f.set(this.h, "__ko_anon_template__", { Ca: arguments[0] }) }; b.l.h.prototype.nodes = function () {
                if (0 == arguments.length) return (b.a.f.get(this.h,
                "__ko_anon_template__") || {}).ka; b.a.f.set(this.h, "__ko_anon_template__", { ka: arguments[0] })
            }; b.b("templateSources", b.l); b.b("templateSources.domElement", b.l.h); b.b("templateSources.anonymousTemplate", b.l.P); var Q; b.ya = function (a) { a != j && !(a instanceof b.v) && k(Error("templateEngine must inherit from ko.templateEngine")); Q = a }; b.xa = function (a, d, c, e, f) {
                c = c || {}; (c.templateEngine || Q) == j && k(Error("Set a template engine before calling renderTemplate")); f = f || "replaceChildren"; if (e) {
                    var g = P(e); return b.i(function () {
                        var h =
                        d && d instanceof b.z ? d : new b.z(b.a.d(d)), j = "function" == typeof a ? a(h.$data, h) : a, h = Y(e, f, j, h, c); "replaceNode" == f && (e = h, g = P(e))
                    }, r, { Na: function () { return !g || !b.a.Z(g) }, Y: g && "replaceNode" == f ? g.parentNode : g })
                } return b.s.ta(function (e) { b.xa(a, d, c, e, "replaceNode") })
            }; b.Pb = function (a, d, c, e, f) {
                function g(a, b) { Z(b, l); c.afterRender && c.afterRender(b, a) } function h(d, e) { l = f.createChildContext(b.a.d(d), c.as); l.$index = e; var g = "function" == typeof a ? a(d, l) : a; return Y(r, "ignoreTargetNode", g, l, c) } var l; return b.i(function () {
                    var a =
                    b.a.d(d) || []; "undefined" == typeof a.length && (a = [a]); a = b.a.ha(a, function (a) { return c.includeDestroyed || a === j || a === r || !b.a.d(a._destroy) }); b.r.L(b.a.cb, r, [e, a, h, c, g])
                }, r, { Y: e })
            }; b.c.template = {
                init: function (a, d) { var c = b.a.d(d()); if ("string" != typeof c && !c.name && (1 == a.nodeType || 8 == a.nodeType)) c = 1 == a.nodeType ? a.childNodes : b.e.childNodes(a), c = b.a.Kb(c), (new b.l.P(a)).nodes(c); return { controlsDescendantBindings: n } }, update: function (a, d, c, e, f) {
                    d = b.a.d(d()); c = {}; e = n; var g, h = r; "string" != typeof d && (c = d, d = b.a.d(c.name),
                    "if" in c && (e = b.a.d(c["if"])), e && "ifnot" in c && (e = !b.a.d(c.ifnot)), g = b.a.d(c.data)); "foreach" in c ? h = b.Pb(d || a, e && c.foreach || [], c, a, f) : e ? (f = "data" in c ? f.createChildContext(g, c.as) : f, h = b.xa(d || a, f, c, a)) : b.e.$(a); f = h; (g = b.a.f.get(a, "__ko__templateComputedDomDataKey__")) && "function" == typeof g.B && g.B(); b.a.f.set(a, "__ko__templateComputedDomDataKey__", f && f.ra() ? f : j)
                }
            }; b.g.R.template = function (a) { a = b.g.ba(a); return 1 == a.length && a[0].unknown || b.g.Hb(a, "name") ? r : "This template engine does not support anonymous templates nested within its templates" };
            b.e.J.template = n; b.b("setTemplateEngine", b.ya); b.b("renderTemplate", b.xa); b.a.Ma = function (a, b, c) { a = a || []; b = b || []; return a.length <= b.length ? X(a, b, "added", "deleted", c) : X(b, a, "deleted", "added", c) }; b.b("utils.compareArrays", b.a.Ma); b.a.cb = function (a, d, c, e, f) {
                function g(a, b) { s = m[b]; v !== b && (x[a] = s); s.pa(v++); N(s.N); u.push(s); C.push(s) } function h(a, c) { if (a) for (var d = 0, e = c.length; d < e; d++) c[d] && b.a.o(c[d].N, function (b) { a(b, d, c[d].W) }) } d = d || []; e = e || {}; var l = b.a.f.get(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult") ===
                j, m = b.a.f.get(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [], q = b.a.X(m, function (a) { return a.W }), p = b.a.Ma(q, d), u = [], w = 0, v = 0, B = [], C = []; d = []; for (var x = [], q = [], s, E = 0, y, z; y = p[E]; E++) switch (z = y.moved, y.status) { case "deleted": z === j && (s = m[w], s.i && s.i.B(), B.push.apply(B, N(s.N)), e.beforeRemove && (d[E] = s, C.push(s))); w++; break; case "retained": g(E, w++); break; case "added": z !== j ? g(E, z) : (s = { W: y.value, pa: b.m(v++) }, u.push(s), C.push(s), l || (q[E] = s)) } h(e.beforeMove, x); b.a.o(B, e.beforeRemove ? b.A : b.removeNode);
                for (var E = 0, l = b.e.firstChild(a), D; s = C[E]; E++) { s.N || b.a.extend(s, oa(a, c, s.W, f, s.pa)); for (w = 0; p = s.N[w]; l = p.nextSibling, D = p, w++) p !== l && b.e.Sa(a, p, D); !s.Db && f && (f(s.W, s.N, s.pa), s.Db = n) } h(e.beforeRemove, d); h(e.afterMove, x); h(e.afterAdd, q); b.a.f.set(a, "setDomNodeChildrenFromArrayMapping_lastMappingResult", u)
            }; b.b("utils.setDomNodeChildrenFromArrayMapping", b.a.cb); b.C = function () { this.allowTemplateRewriting = t }; b.C.prototype = new b.v; b.C.prototype.renderTemplateSource = function (a) {
                var d = !(9 > b.a.aa) && a.nodes ?
                a.nodes() : r; if (d) return b.a.M(d.cloneNode(n).childNodes); a = a.text(); return b.a.va(a)
            }; b.C.qa = new b.C; b.ya(b.C.qa); b.b("nativeTemplateEngine", b.C); b.sa = function () {
                var a = this.Gb = function () { if ("undefined" == typeof q || !q.tmpl) return 0; try { if (0 <= q.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2 } catch (a) { } return 1 }(); this.renderTemplateSource = function (b, c, e) {
                    e = e || {}; 2 > a && k(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")); var f = b.data("precompiled");
                    f || (f = b.text() || "", f = q.template(r, "{{ko_with $item.koBindingContext}}" + f + "{{/ko_with}}"), b.data("precompiled", f)); b = [c.$data]; c = q.extend({ koBindingContext: c }, e.templateOptions); c = q.tmpl(f, b, c); c.appendTo(u.createElement("div")); q.fragments = {}; return c
                }; this.createJavaScriptEvaluatorBlock = function (a) { return "{{ko_code ((function() { return " + a + " })()) }}" }; this.addTemplate = function (a, b) { u.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>") }; 0 < a && (q.tmpl.tag.ko_code = { open: "__.push($1 || '');" },
                q.tmpl.tag.ko_with = { open: "with($1) {", close: "} " })
            }; b.sa.prototype = new b.v; v = new b.sa; 0 < v.Gb && b.ya(v); b.b("jqueryTmplTemplateEngine", b.sa)
        })
    })();
})();