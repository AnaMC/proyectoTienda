/*!
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
! function(t) { t.fn.appear = function(e, i) { var n = t.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, i); return this.each(function() { var i = t(this); if (i.appeared = !1, !e) return void i.trigger("appear", n.data); var o = t(window),
                a = function() { if (!i.is(":visible")) return void(i.appeared = !1); var t = o.scrollLeft(),
                        e = o.scrollTop(),
                        a = i.offset(),
                        r = a.left,
                        s = a.top,
                        l = n.accX,
                        u = n.accY,
                        d = i.height(),
                        c = o.height(),
                        p = i.width(),
                        m = o.width();
                    s + d + u >= e && s <= e + c + u && r + p + l >= t && r <= t + m + l ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1 },
                r = function() { if (i.appeared = !0, n.one) { o.unbind("scroll", a); var r = t.inArray(a, t.fn.appear.checks);
                        r >= 0 && t.fn.appear.checks.splice(r, 1) } e.apply(this, arguments) };
            n.one ? i.one("appear", n.data, r) : i.bind("appear", n.data, r), o.scroll(a), t.fn.appear.checks.push(a), a() }) }, t.extend(t.fn.appear, { checks: [], timeout: null, checkAll: function() { var e = t.fn.appear.checks.length; if (e > 0)
                for (; e--;) t.fn.appear.checks[e]() }, run: function() { t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20) } }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, i) { var n = t.fn[i];
        n && (t.fn[i] = function() { var e = n.apply(this, arguments); return t.fn.appear.run(), e }) }) }(jQuery),
function(t) { t.fn.countTo = function(e) { e = t.extend({}, t.fn.countTo.defaults, e || {}); var i = Math.ceil(e.speed / e.refreshInterval),
            n = (e.to - e.from) / i; return t(this).each(function() {
            function o() { s += n, r++, t(a).html(s.toFixed(e.decimals)), "function" == typeof e.onUpdate && e.onUpdate.call(a, s), r >= i && (clearInterval(l), s = e.to, "function" == typeof e.onComplete && e.onComplete.call(a, s)) } var a = this,
                r = 0,
                s = e.from,
                l = setInterval(o, e.refreshInterval) }) }, t.fn.countTo.defaults = { from: 0, to: 100, speed: 1e3, refreshInterval: 100, decimals: 0, onUpdate: null, onComplete: null } }(jQuery),
function(t, e) {
    function i(t) { return "object" == typeof t }

    function n(t) { return "string" == typeof t }

    function o(t) { return "number" == typeof t }

    function a(t) { return t === e }

    function r() { W = google.maps, D || (D = { verbose: !1, queryLimit: { attempt: 5, delay: 250, random: 250 }, classes: function() { var e = {}; return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(t, i) { e[i] = W[i] }), e }(), map: { mapTypeId: W.MapTypeId.ROADMAP, center: [46.578498, 2.457275], zoom: 2 }, overlay: { pane: "floatPane", content: "", offset: { x: 0, y: 0 } }, geoloc: { getCurrentPosition: { maximumAge: 6e4, timeout: 5e3 } } }) }

    function s(t, e) { return a(t) ? "gmap3_" + (e ? B + 1 : ++B) : t }

    function l(t) { var e, i = W.version.split("."); for (t = t.split("."), e = 0; e < i.length; e++) i[e] = parseInt(i[e], 10); for (e = 0; e < t.length; e++) { if (t[e] = parseInt(t[e], 10), !i.hasOwnProperty(e)) return !1; if (i[e] < t[e]) return !1 } return !0 }

    function u(e, i, n, o, a) {
        function r(i, o) { i && t.each(i, function(t, i) { var r = e,
                    s = i;
                F(i) && (r = i[0], s = i[1]), o(n, t, function(t) { s.apply(r, [a || n, t, l]) }) }) } var s = i.td || {},
            l = { id: o, data: s.data, tag: s.tag };
        r(s.events, W.event.addListener), r(s.onces, W.event.addListenerOnce) }

    function d(t) { var e, i = []; for (e in t) t.hasOwnProperty(e) && i.push(e); return i }

    function c(t, e) { var i, n = arguments; for (i = 2; i < n.length; i++)
            if (e in n[i] && n[i].hasOwnProperty(e)) return void(t[e] = n[i][e]) }

    function p(e, i) { var n, o, a = ["data", "tag", "id", "events", "onces"],
            r = {}; if (e.td)
            for (n in e.td) e.td.hasOwnProperty(n) && "options" !== n && "values" !== n && (r[n] = e.td[n]); for (o = 0; o < a.length; o++) c(r, a[o], i, e.td); return r.options = t.extend({}, e.opts || {}, i.options || {}), r }

    function m() { if (D.verbose) { var t, e = []; if (window.console && N(console.error)) { for (t = 0; t < arguments.length; t++) e.push(arguments[t]);
                console.error.apply(console, e) } else { for (e = "", t = 0; t < arguments.length; t++) e += arguments[t].toString() + " ";
                alert(e) } } }

    function f(t) { return (o(t) || n(t)) && "" !== t && !isNaN(t) }

    function h(t) { var e, n = []; if (!a(t))
            if (i(t))
                if (o(t.length)) n = t;
                else
                    for (e in t) n.push(t[e]);
        else n.push(t); return n }

    function g(e) { if (e) return N(e) ? e : (e = h(e), function(n) { var o; if (a(n)) return !1; if (i(n)) { for (o = 0; o < n.length; o++)
                    if (t.inArray(n[o], e) >= 0) return !0; return !1 } return t.inArray(n, e) >= 0 }) }

    function v(t, e, i) { var o = e ? t : null; return !t || n(t) ? o : t.latLng ? v(t.latLng) : t instanceof W.LatLng ? t : f(t.lat) ? new W.LatLng(t.lat, t.lng) : !i && F(t) && f(t[0]) && f(t[1]) ? new W.LatLng(t[0], t[1]) : o }

    function y(t) { var e, i; return !t || t instanceof W.LatLngBounds ? t || null : (F(t) ? 2 === t.length ? (e = v(t[0]), i = v(t[1])) : 4 === t.length && (e = v([t[0], t[1]]), i = v([t[2], t[3]])) : "ne" in t && "sw" in t ? (e = v(t.ne), i = v(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (e = v([t.n, t.e]), i = v([t.s, t.w])), e && i ? new W.LatLngBounds(i, e) : null) }

    function w(t, e, i, o, a) { var r = !!i && v(o.td, !1, !0),
            s = r ? { latLng: r } : !!o.td.address && (n(o.td.address) ? { address: o.td.address } : o.td.address),
            l = !!s && R.get(s),
            u = this;
        s ? (a = a || 0, l ? (o.latLng = l.results[0].geometry.location, o.results = l.results, o.status = l.status, e.apply(t, [o])) : (s.location && (s.location = v(s.location)), s.bounds && (s.bounds = y(s.bounds)), C().geocode(s, function(n, r) { r === W.GeocoderStatus.OK ? (R.store(s, { results: n, status: r }), o.latLng = n[0].geometry.location, o.results = n, o.status = r, e.apply(t, [o])) : r === W.GeocoderStatus.OVER_QUERY_LIMIT && a < D.queryLimit.attempt ? setTimeout(function() { w.apply(u, [t, e, i, o, a + 1]) }, D.queryLimit.delay + Math.floor(Math.random() * D.queryLimit.random)) : (m("geocode failed", r, s), o.latLng = o.results = !1, o.status = r, e.apply(t, [o])) }))) : (o.latLng = v(o.td, !1, !0), e.apply(t, [o])) }

    function b(e, i, n, o) {
        function a() { do s++; while (s < e.length && !("address" in e[s])); return s >= e.length ? void n.apply(i, [o]) : void w(r, function(i) { delete i.td, t.extend(e[s], i), a.apply(r, []) }, !0, { td: e[s] }) } var r = this,
            s = -1;
        a() }

    function I(t, e, i) { var n = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(o) { n || (n = !0, i.latLng = new W.LatLng(o.coords.latitude, o.coords.longitude), e.apply(t, [i])) }, function() { n || (n = !0, i.latLng = !1, e.apply(t, [i])) }, i.opts.getCurrentPosition) : (i.latLng = !1, e.apply(t, [i])) }

    function x(t) { var e, n = !1; if (i(t) && t.hasOwnProperty("get")) { for (e in t)
                if ("get" !== e) return !1;
            n = !t.get.hasOwnProperty("callback") } return n }

    function C() { return H.geocoder || (H.geocoder = new W.Geocoder), H.geocoder }

    function _() { var t = [];
        this.get = function(e) { if (t.length) { var n, o, a, r, s, l = d(e); for (n = 0; n < t.length; n++) { for (r = t[n], s = l.length === r.keys.length, o = 0; o < l.length && s; o++) a = l[o], s = a in r.request, s && (s = i(e[a]) && "equals" in e[a] && N(e[a]) ? e[a].equals(r.request[a]) : e[a] === r.request[a]); if (s) return r.results } } }, this.store = function(e, i) { t.push({ request: e, keys: d(e), results: i }) } }

    function k() { var t = [],
            e = this;
        e.empty = function() { return !t.length }, e.add = function(e) { t.push(e) }, e.get = function() { return !!t.length && t[0] }, e.ack = function() { t.shift() } }

    function S() {
        function e(t) { return { id: t.id, name: t.name, object: t.obj, tag: t.tag, data: t.data } }

        function i(t) { N(t.setMap) && t.setMap(null), N(t.remove) && t.remove(), N(t.free) && t.free(), t = null } var n = {},
            o = {},
            r = this;
        r.add = function(t, e, i, a) { var l = t.td || {},
                u = s(l.id); return n[e] || (n[e] = []), u in o && r.clearById(u), o[u] = { obj: i, sub: a, name: e, id: u, tag: l.tag, data: l.data }, n[e].push(u), u }, r.getById = function(t, i, n) { var a = !1; return t in o && (a = i ? o[t].sub : n ? e(o[t]) : o[t].obj), a }, r.get = function(t, i, a, r) { var s, l, u = g(a); if (!n[t] || !n[t].length) return null; for (s = n[t].length; s;)
                if (s--, l = n[t][i ? s : n[t].length - s - 1], l && o[l]) { if (u && !u(o[l].tag)) continue; return r ? e(o[l]) : o[l].obj }
            return null }, r.all = function(t, i, r) { var s = [],
                l = g(i),
                u = function(t) { var i, a; for (i = 0; i < n[t].length; i++)
                        if (a = n[t][i], a && o[a]) { if (l && !l(o[a].tag)) continue;
                            s.push(r ? e(o[a]) : o[a].obj) } }; if (t in n) u(t);
            else if (a(t))
                for (t in n) u(t); return s }, r.rm = function(t, e, i) { var a, s; if (!n[t]) return !1; if (e)
                if (i)
                    for (a = n[t].length - 1; a >= 0 && (s = n[t][a], !e(o[s].tag)); a--);
                else
                    for (a = 0; a < n[t].length && (s = n[t][a], !e(o[s].tag)); a++);
            else a = i ? n[t].length - 1 : 0; return a in n[t] && r.clearById(n[t][a], a) }, r.clearById = function(t, e) { if (t in o) { var r, s = o[t].name; for (r = 0; a(e) && r < n[s].length; r++) t === n[s][r] && (e = r); return i(o[t].obj), o[t].sub && i(o[t].sub), delete o[t], n[s].splice(e, 1), !0 } return !1 }, r.objGetById = function(t) { var e, i; if (n.clusterer)
                for (i in n.clusterer)
                    if ((e = o[n.clusterer[i]].obj.getById(t)) !== !1) return e; return !1 }, r.objClearById = function(t) { var e; if (n.clusterer)
                for (e in n.clusterer)
                    if (o[n.clusterer[e]].obj.clearById(t)) return !0; return null }, r.clear = function(t, e, i, o) { var a, s, l, u = g(o); if (t && t.length) t = h(t);
            else { t = []; for (a in n) t.push(a) } for (s = 0; s < t.length; s++)
                if (l = t[s], e) r.rm(l, u, !0);
                else if (i) r.rm(l, u, !1);
            else
                for (; r.rm(l, u, !1);); }, r.objClear = function(e, i, a, r) { var s; if (n.clusterer && (t.inArray("marker", e) >= 0 || !e.length))
                for (s in n.clusterer) o[n.clusterer[s]].obj.clear(i, a, r) } }

    function T(e, i, o) {
        function a(t) { var e = {}; return e[t] = {}, e }

        function r() { var t; for (t in o)
                if (o.hasOwnProperty(t) && !l.hasOwnProperty(t)) return t } var s, l = {},
            u = this,
            d = { latLng: { map: !1, marker: !1, infowindow: !1, circle: !1, overlay: !1, getlatlng: !1, getmaxzoom: !1, getelevation: !1, streetviewpanorama: !1, getaddress: !0 }, geoloc: { getgeoloc: !0 } };
        n(o) && (o = a(o)), u.run = function() { for (var n, a; n = r();) { if (N(e[n])) return s = n, a = t.extend(!0, {}, D[n] || {}, o[n].options || {}), void(n in d.latLng ? o[n].values ? b(o[n].values, e, e[n], { td: o[n], opts: a, session: l }) : w(e, e[n], d.latLng[n], { td: o[n], opts: a, session: l }) : n in d.geoloc ? I(e, e[n], { td: o[n], opts: a, session: l }) : e[n].apply(e, [{ td: o[n], opts: a, session: l }]));
                l[n] = null } i.apply(e, [o, l]) }, u.ack = function(t) { l[s] = t, u.run.apply(u, []) } }

    function E() { return H.ds || (H.ds = new W.DirectionsService), H.ds }

    function L() { return H.dms || (H.dms = new W.DistanceMatrixService), H.dms }

    function M() { return H.mzs || (H.mzs = new W.MaxZoomService), H.mzs }

    function P() { return H.es || (H.es = new W.ElevationService), H.es }

    function z(t, e) {
        function i() { var t = this; return t.onAdd = function() {}, t.onRemove = function() {}, t.draw = function() {}, D.classes.OverlayView.apply(t, []) } i.prototype = D.classes.OverlayView.prototype; var n = new i; return n.setMap(t), n }

    function A(e, n, o) {
        function a(t) { A[t] || (delete $[t].options.map, A[t] = new D.classes.Marker($[t].options), u(e, { td: $[t] }, A[t], $[t].id)) }

        function r() { return (y = j.getProjection()) ? (k = !0, E.push(W.event.addListener(n, "zoom_changed", m)), E.push(W.event.addListener(n, "bounds_changed", m)), void h()) : void setTimeout(function() { r.apply(T, []) }, 25) }

        function l(t) { i(L[t]) ? (N(L[t].obj.setMap) && L[t].obj.setMap(null), N(L[t].obj.remove) && L[t].obj.remove(), N(L[t].shadow.remove) && L[t].obj.remove(), N(L[t].shadow.setMap) && L[t].shadow.setMap(null), delete L[t].obj, delete L[t].shadow) : A[t] && A[t].setMap(null), delete L[t] }

        function d() { var t, e, i, n, o, a, r, s, l = Math.cos,
                u = Math.sin,
                d = arguments; return d[0] instanceof W.LatLng ? (t = d[0].lat(), i = d[0].lng(), d[1] instanceof W.LatLng ? (e = d[1].lat(), n = d[1].lng()) : (e = d[1], n = d[2])) : (t = d[0], i = d[1], d[2] instanceof W.LatLng ? (e = d[2].lat(), n = d[2].lng()) : (e = d[2], n = d[3])), o = Math.PI * t / 180, a = Math.PI * i / 180, r = Math.PI * e / 180, s = Math.PI * n / 180, 6371e3 * Math.acos(Math.min(l(o) * l(r) * l(a) * l(s) + l(o) * u(a) * l(r) * u(s) + u(o) * u(r), 1)) }

        function c() { var t = d(n.getCenter(), n.getBounds().getNorthEast()),
                e = new W.Circle({ center: n.getCenter(), radius: 1.25 * t }); return e.getBounds() }

        function p() { var t, e = {}; for (t in L) e[t] = !0; return e }

        function m() { clearTimeout(v), v = setTimeout(h, 25) }

        function f(t) { var e = y.fromLatLngToDivPixel(t),
                i = y.fromDivPixelToLatLng(new W.Point(e.x + o.radius, e.y - o.radius)),
                n = y.fromDivPixelToLatLng(new W.Point(e.x - o.radius, e.y + o.radius)); return new W.LatLngBounds(n, i) }

        function h() { if (!x && !_ && k) { var e, i, a, r, s, u, d, m, h, g, v, y = !1,
                    I = [],
                    T = {},
                    E = n.getZoom(),
                    M = "maxZoom" in o && E > o.maxZoom,
                    P = p(); for (C = !1, E > 3 && (s = c(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), e = 0; e < $.length; e++) !$[e] || y && !s.contains($[e].options.position) || w && !w(O[e]) || I.push(e); for (;;) { for (e = 0; T[e] && e < I.length;) e++; if (e === I.length) break; if (r = [], S && !M) { v = 10;
                        do
                            for (m = r, r = [], v--, d = m.length ? s.getCenter() : $[I[e]].options.position, s = f(d), i = e; i < I.length; i++) T[i] || s.contains($[I[i]].options.position) && r.push(i); while (m.length < r.length && r.length > 1 && v) } else
                        for (i = e; i < I.length; i++)
                            if (!T[i]) { r.push(i); break } for (u = { indexes: [], ref: [] }, h = g = 0, a = 0; a < r.length; a++) T[r[a]] = !0, u.indexes.push(I[r[a]]), u.ref.push(I[r[a]]), h += $[I[r[a]]].options.position.lat(), g += $[I[r[a]]].options.position.lng();
                    h /= r.length, g /= r.length, u.latLng = new W.LatLng(h, g), u.ref = u.ref.join("-"), u.ref in P ? delete P[u.ref] : (1 === r.length && (L[u.ref] = !0), b(u)) } t.each(P, function(t) { l(t) }), _ = !1 } } var v, y, w, b, I, x = !1,
            C = !1,
            _ = !1,
            k = !1,
            S = !0,
            T = this,
            E = [],
            L = {},
            M = {},
            P = {},
            A = [],
            $ = [],
            O = [],
            j = z(n, o.radius);
        r(), T.getById = function(t) { return t in M && (a(M[t]), A[M[t]]) }, T.rm = function(t) { var e = M[t];
            A[e] && A[e].setMap(null), delete A[e], A[e] = !1, delete $[e], $[e] = !1, delete O[e], O[e] = !1, delete M[t], delete P[e], C = !0 }, T.clearById = function(t) { if (t in M) return T.rm(t), !0 }, T.clear = function(t, e, i) { var n, o, a, r, s, l = [],
                u = g(i); for (t ? (n = $.length - 1, o = -1, a = -1) : (n = 0, o = $.length, a = 1), r = n; r !== o && (!$[r] || u && !u($[r].tag) || (l.push(P[r]), !e && !t)); r += a); for (s = 0; s < l.length; s++) T.rm(l[s]) }, T.add = function(t, e) { t.id = s(t.id), T.clearById(t.id), M[t.id] = A.length, P[A.length] = t.id, A.push(null), $.push(t), O.push(e), C = !0 }, T.addMarker = function(t, i) { i = i || {}, i.id = s(i.id), T.clearById(i.id), i.options || (i.options = {}), i.options.position = t.getPosition(), u(e, { td: i }, t, i.id), M[i.id] = A.length, P[A.length] = i.id, A.push(t), $.push(i), O.push(i.data || {}), C = !0 }, T.td = function(t) { return $[t] }, T.value = function(t) { return O[t] }, T.marker = function(t) { return t in A && (a(t), A[t]) }, T.markerIsSet = function(t) { return Boolean(A[t]) }, T.setMarker = function(t, e) { A[t] = e }, T.store = function(t, e, i) { L[t.ref] = { obj: e, shadow: i } }, T.free = function() { var e; for (e = 0; e < E.length; e++) W.event.removeListener(E[e]);
            E = [], t.each(L, function(t) { l(t) }), L = {}, t.each($, function(t) { $[t] = null }), $ = [], t.each(A, function(t) { A[t] && (A[t].setMap(null), delete A[t]) }), A = [], t.each(O, function(t) { delete O[t] }), O = [], M = {}, P = {} }, T.filter = function(t) { w = t, h() }, T.enable = function(t) { S !== t && (S = t, h()) }, T.display = function(t) { b = t }, T.error = function(t) { I = t }, T.beginUpdate = function() { x = !0 }, T.endUpdate = function() { x = !1, C && h() }, T.autofit = function(t) { var e; for (e = 0; e < $.length; e++) $[e] && t.extend($[e].options.position) } }

    function $(t, e) { var i = this;
        i.id = function() { return t }, i.filter = function(t) { e.filter(t) }, i.enable = function() { e.enable(!0) }, i.disable = function() { e.enable(!1) }, i.add = function(t, i, n) { n || e.beginUpdate(), e.addMarker(t, i), n || e.endUpdate() }, i.getById = function(t) { return e.getById(t) }, i.clearById = function(t, i) { var n; return i || e.beginUpdate(), n = e.clearById(t), i || e.endUpdate(), n }, i.clear = function(t, i, n, o) { o || e.beginUpdate(), e.clear(t, i, n), o || e.endUpdate() } }

    function O(e, i, n, o) { var a = this,
            r = [];
        D.classes.OverlayView.call(a), a.setMap(e), a.onAdd = function() { var e = a.getPanes();
            i.pane in e && t(e[i.pane]).append(o), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(e, i) { r.push(W.event.addDomListener(o[0], i, function(e) { t.Event(e).stopPropagation(), W.event.trigger(a, i, [e]), a.draw() })) }), r.push(W.event.addDomListener(o[0], "contextmenu", function(e) { t.Event(e).stopPropagation(), W.event.trigger(a, "rightclick", [e]), a.draw() })) }, a.getPosition = function() { return n }, a.setPosition = function(t) { n = t, a.draw() }, a.draw = function() { var t = a.getProjection().fromLatLngToDivPixel(n);
            o.css("left", t.x + i.offset.x + "px").css("top", t.y + i.offset.y + "px") }, a.onRemove = function() { var t; for (t = 0; t < r.length; t++) W.event.removeListener(r[t]);
            o.remove() }, a.hide = function() { o.hide() }, a.show = function() { o.show() }, a.toggle = function() { o && (o.is(":visible") ? a.show() : a.hide()) }, a.toggleDOM = function() { a.setMap(a.getMap() ? null : e) }, a.getDOMElement = function() { return o[0] } }

    function j(o) {
        function r() {!I && (I = C.get()) && I.run() }

        function d() { I = null, C.ack(), r.call(x) }

        function c(t) { var e, i = t.td.callback;
            i && (e = Array.prototype.slice.call(arguments, 1), N(i) ? i.apply(o, e) : F(i) && N(i[1]) && i[1].apply(i[0], e)) }

        function f(t, e, i) { i && u(o, t, e, i), c(t, e), I.ack(e) }

        function g(e, i) { i = i || {}; var n = i.td && i.td.options ? i.td.options : 0;
            z ? n && (n.center && (n.center = v(n.center)), z.setOptions(n)) : (n = i.opts || t.extend(!0, {}, D.map, n || {}), n.center = e || v(n.center), z = new D.classes.Map(o.get(0), n)) }

        function w(i) { var n, a, r = new A(o, z, i),
                s = {},
                l = {},
                d = [],
                c = /^[0-9]+$/; for (a in i) c.test(a) ? (d.push(1 * a), l[a] = i[a], l[a].width = l[a].width || 0, l[a].height = l[a].height || 0) : s[a] = i[a]; return d.sort(function(t, e) { return t > e }), n = s.calculator ? function(e) { var i = []; return t.each(e, function(t, e) { i.push(r.value(e)) }), s.calculator.apply(o, [i]) } : function(t) { return t.length }, r.error(function() { m.apply(x, arguments) }), r.display(function(a) { var c, p, m, f, h, g, y = n(a.indexes); if (i.force || y > 1)
                    for (c = 0; c < d.length; c++) d[c] <= y && (p = l[d[c]]);
                p ? (h = p.offset || [-p.width / 2, -p.height / 2], m = t.extend({}, s), m.options = t.extend({ pane: "overlayLayer", content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "", offset: { x: ("x" in h ? h.x : h[0]) || 0, y: ("y" in h ? h.y : h[1]) || 0 } }, s.options || {}), f = x.overlay({ td: m, opts: m.options, latLng: v(a) }, !0), m.options.pane = "floatShadow", m.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({ cursor: "pointer" }), g = x.overlay({ td: m, opts: m.options, latLng: v(a) }, !0), s.data = { latLng: v(a), markers: [] }, t.each(a.indexes, function(t, e) { s.data.markers.push(r.value(e)), r.markerIsSet(e) && r.marker(e).setMap(null) }), u(o, { td: s }, g, e, { main: f, shadow: g }), r.store(a, f, g)) : t.each(a.indexes, function(t, e) { r.marker(e).setMap(z) }) }), r }

        function b(e, i, n) { var a = [],
                r = "values" in e.td; return r || (e.td.values = [{ options: e.opts }]), e.td.values.length ? (g(), t.each(e.td.values, function(t, r) { var s, l, d, c, m = p(e, r); if (m.options[n])
                    if (m.options[n][0][0] && F(m.options[n][0][0]))
                        for (l = 0; l < m.options[n].length; l++)
                            for (d = 0; d < m.options[n][l].length; d++) m.options[n][l][d] = v(m.options[n][l][d]);
                    else
                        for (l = 0; l < m.options[n].length; l++) m.options[n][l] = v(m.options[n][l]);
                m.options.map = z, c = new W[i](m.options), a.push(c), s = _.add({ td: m }, i.toLowerCase(), c), u(o, { td: m }, c, s) }), void f(e, r ? a : a[0])) : void f(e, !1) } var I, x = this,
            C = new k,
            _ = new S,
            z = null;
        x._plan = function(t) { var e; for (e = 0; e < t.length; e++) C.add(new T(x, d, t[e]));
            r() }, x.map = function(t) { g(t.latLng, t), u(o, t, z), f(t, z) }, x.destroy = function(t) { _.clear(), o.empty(), z && (z = null), f(t, !0) }, x.overlay = function(e, i) { var n = [],
                a = "values" in e.td; return a || (e.td.values = [{ latLng: e.latLng, options: e.opts }]), e.td.values.length ? (O.__initialised || (O.prototype = new D.classes.OverlayView, O.__initialised = !0), t.each(e.td.values, function(a, r) { var s, l, d = p(e, r),
                    c = t(document.createElement("div")).css({ border: "none", borderWidth: 0, position: "absolute" });
                c.append(d.options.content), l = new O(z, d.options, v(d) || v(r), c), n.push(l), c = null, i || (s = _.add(e, "overlay", l), u(o, { td: d }, l, s)) }), i ? n[0] : void f(e, a ? n : n[0])) : void f(e, !1) }, x.marker = function(e) { var i, n, a, r = "values" in e.td,
                l = !z; return r || (e.opts.position = e.latLng || v(e.opts.position), e.td.values = [{ options: e.opts }]), e.td.values.length ? (l && g(), e.td.cluster && !z.getBounds() ? void W.event.addListenerOnce(z, "bounds_changed", function() { x.marker.apply(x, [e]) }) : void(e.td.cluster ? (e.td.cluster instanceof $ ? (n = e.td.cluster, a = _.getById(n.id(), !0)) : (a = w(e.td.cluster), n = new $(s(e.td.id, !0), a), _.add(e, "clusterer", n, a)), a.beginUpdate(), t.each(e.td.values, function(t, i) { var n = p(e, i);
                n.options.position = v(n.options.position ? n.options.position : i), n.options.position && (n.options.map = z, l && (z.setCenter(n.options.position), l = !1), a.add(n, i)) }), a.endUpdate(), f(e, n)) : (i = [], t.each(e.td.values, function(t, n) { var a, r, s = p(e, n);
                s.options.position = v(s.options.position ? s.options.position : n), s.options.position && (s.options.map = z, l && (z.setCenter(s.options.position), l = !1), r = new D.classes.Marker(s.options), i.push(r), a = _.add({ td: s }, "marker", r), u(o, { td: s }, r, a)) }), f(e, r ? i : i[0])))) : void f(e, !1) }, x.getroute = function(t) { t.opts.origin = v(t.opts.origin, !0), t.opts.destination = v(t.opts.destination, !0), E().route(t.opts, function(e, i) { c(t, i === W.DirectionsStatus.OK && e, i), I.ack() }) }, x.getdistance = function(t) { var e; for (t.opts.origins = h(t.opts.origins), e = 0; e < t.opts.origins.length; e++) t.opts.origins[e] = v(t.opts.origins[e], !0); for (t.opts.destinations = h(t.opts.destinations), e = 0; e < t.opts.destinations.length; e++) t.opts.destinations[e] = v(t.opts.destinations[e], !0);
            L().getDistanceMatrix(t.opts, function(e, i) { c(t, i === W.DistanceMatrixStatus.OK && e, i), I.ack() }) }, x.infowindow = function(i) { var n = [],
                r = "values" in i.td;
            r || (i.latLng && (i.opts.position = i.latLng), i.td.values = [{ options: i.opts }]), t.each(i.td.values, function(t, s) { var l, d, c = p(i, s);
                c.options.position = v(c.options.position ? c.options.position : s.latLng), z || g(c.options.position), d = new D.classes.InfoWindow(c.options), d && (a(c.open) || c.open) && (r ? d.open(z, c.anchor || e) : d.open(z, c.anchor || (i.latLng ? e : i.session.marker ? i.session.marker : e))), n.push(d), l = _.add({ td: c }, "infowindow", d), u(o, { td: c }, d, l) }), f(i, r ? n : n[0]) }, x.circle = function(e) { var i = [],
                n = "values" in e.td; return n || (e.opts.center = e.latLng || v(e.opts.center), e.td.values = [{ options: e.opts }]), e.td.values.length ? (t.each(e.td.values, function(t, n) { var a, r, s = p(e, n);
                s.options.center = v(s.options.center ? s.options.center : n), z || g(s.options.center), s.options.map = z, r = new D.classes.Circle(s.options), i.push(r), a = _.add({ td: s }, "circle", r), u(o, { td: s }, r, a) }), void f(e, n ? i : i[0])) : void f(e, !1) }, x.getaddress = function(t) { c(t, t.results, t.status), I.ack() }, x.getlatlng = function(t) { c(t, t.results, t.status), I.ack() }, x.getmaxzoom = function(t) { M().getMaxZoomAtLatLng(t.latLng, function(e) { c(t, e.status === W.MaxZoomStatus.OK && e.zoom, status), I.ack() }) }, x.getelevation = function(t) { var e, i = [],
                n = function(e, i) { c(t, i === W.ElevationStatus.OK && e, i), I.ack() }; if (t.latLng) i.push(t.latLng);
            else
                for (i = h(t.td.locations || []), e = 0; e < i.length; e++) i[e] = v(i[e]); if (i.length) P().getElevationForLocations({ locations: i }, n);
            else { if (t.td.path && t.td.path.length)
                    for (e = 0; e < t.td.path.length; e++) i.push(v(t.td.path[e]));
                i.length ? P().getElevationAlongPath({ path: i, samples: t.td.samples }, n) : I.ack() } }, x.defaults = function(e) { t.each(e.td, function(e, n) { i(D[e]) ? D[e] = t.extend({}, D[e], n) : D[e] = n }), I.ack(!0) }, x.rectangle = function(e) { var i = [],
                n = "values" in e.td; return n || (e.td.values = [{ options: e.opts }]), e.td.values.length ? (t.each(e.td.values, function(t, n) { var a, r, s = p(e, n);
                s.options.bounds = y(s.options.bounds ? s.options.bounds : n), z || g(s.options.bounds.getCenter()), s.options.map = z, r = new D.classes.Rectangle(s.options), i.push(r), a = _.add({ td: s }, "rectangle", r), u(o, { td: s }, r, a) }), void f(e, n ? i : i[0])) : void f(e, !1) }, x.polyline = function(t) { b(t, "Polyline", "path") }, x.polygon = function(t) { b(t, "Polygon", "paths") }, x.trafficlayer = function(t) { g(); var e = _.get("trafficlayer");
            e || (e = new D.classes.TrafficLayer, e.setMap(z), _.add(t, "trafficlayer", e)), f(t, e) }, x.bicyclinglayer = function(t) { g(); var e = _.get("bicyclinglayer");
            e || (e = new D.classes.BicyclingLayer, e.setMap(z), _.add(t, "bicyclinglayer", e)), f(t, e) }, x.groundoverlay = function(t) { t.opts.bounds = y(t.opts.bounds), t.opts.bounds && g(t.opts.bounds.getCenter()); var e, i = new D.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
            i.setMap(z), e = _.add(t, "groundoverlay", i), f(t, i, e) }, x.streetviewpanorama = function(e) { e.opts.opts || (e.opts.opts = {}), e.latLng ? e.opts.opts.position = e.latLng : e.opts.opts.position && (e.opts.opts.position = v(e.opts.opts.position)), e.td.divId ? e.opts.container = document.getElementById(e.td.divId) : e.opts.container && (e.opts.container = t(e.opts.container).get(0)); var i, n = new D.classes.StreetViewPanorama(e.opts.container, e.opts.opts);
            n && z.setStreetView(n), i = _.add(e, "streetviewpanorama", n), f(e, n, i) }, x.kmllayer = function(e) { var i = [],
                n = "values" in e.td; return n || (e.td.values = [{ options: e.opts }]), e.td.values.length ? (t.each(e.td.values, function(t, n) { var a, r, s, d = p(e, n);
                z || g(), s = d.options, d.options.opts && (s = d.options.opts, d.options.url && (s.url = d.options.url)), s.map = z, r = l("3.10") ? new D.classes.KmlLayer(s) : new D.classes.KmlLayer(s.url, s), i.push(r), a = _.add({ td: d }, "kmllayer", r), u(o, { td: d }, r, a) }), void f(e, n ? i : i[0])) : void f(e, !1) }, x.panel = function(e) { g(); var i, n, r = 0,
                s = 0,
                l = t(document.createElement("div"));
            l.css({ position: "absolute", zIndex: 1e3, visibility: "hidden" }), e.opts.content && (n = t(e.opts.content), l.append(n), o.first().prepend(l), a(e.opts.left) ? a(e.opts.right) ? e.opts.center && (r = (o.width() - n.width()) / 2) : r = o.width() - n.width() - e.opts.right : r = e.opts.left, a(e.opts.top) ? a(e.opts.bottom) ? e.opts.middle && (s = (o.height() - n.height()) / 2) : s = o.height() - n.height() - e.opts.bottom : s = e.opts.top, l.css({ top: s, left: r, visibility: "visible" })), i = _.add(e, "panel", l), f(e, l, i), l = null }, x.directionsrenderer = function(e) { e.opts.map = z; var i, n = new W.DirectionsRenderer(e.opts);
            e.td.divId ? n.setPanel(document.getElementById(e.td.divId)) : e.td.container && n.setPanel(t(e.td.container).get(0)), i = _.add(e, "directionsrenderer", n), f(e, n, i) }, x.getgeoloc = function(t) { f(t, t.latLng) }, x.styledmaptype = function(t) { g(); var e = new D.classes.StyledMapType(t.td.styles, t.opts);
            z.mapTypes.set(t.td.id, e), f(t, e) }, x.imagemaptype = function(t) { g(); var e = new D.classes.ImageMapType(t.opts);
            z.mapTypes.set(t.td.id, e), f(t, e) }, x.autofit = function(e) { var i = new W.LatLngBounds;
            t.each(_.all(), function(t, e) { e.getPosition ? i.extend(e.getPosition()) : e.getBounds ? (i.extend(e.getBounds().getNorthEast()), i.extend(e.getBounds().getSouthWest())) : e.getPaths ? e.getPaths().forEach(function(t) { t.forEach(function(t) { i.extend(t) }) }) : e.getPath ? e.getPath().forEach(function(t) { i.extend(t) }) : e.getCenter ? i.extend(e.getCenter()) : "function" == typeof $ && e instanceof $ && (e = _.getById(e.id(), !0), e && e.autofit(i)) }), i.isEmpty() || z.getBounds() && z.getBounds().equals(i) || ("maxZoom" in e.td && W.event.addListenerOnce(z, "bounds_changed", function() { this.getZoom() > e.td.maxZoom && this.setZoom(e.td.maxZoom) }), z.fitBounds(i)), f(e, !0) }, x.clear = function(e) { if (n(e.td)) { if (_.clearById(e.td) || _.objClearById(e.td)) return void f(e, !0);
                e.td = { name: e.td } } e.td.id ? t.each(h(e.td.id), function(t, e) { _.clearById(e) || _.objClearById(e) }) : (_.clear(h(e.td.name), e.td.last, e.td.first, e.td.tag), _.objClear(h(e.td.name), e.td.last, e.td.first, e.td.tag)), f(e, !0) }, x.get = function(i, o, a) { var r, s, l = o ? i : i.td; return o || (a = l.full), n(l) ? (s = _.getById(l, !1, a) || _.objGetById(l), s === !1 && (r = l, l = {})) : r = l.name, "map" === r && (s = z), s || (s = [], l.id ? (t.each(h(l.id), function(t, e) { s.push(_.getById(e, !1, a) || _.objGetById(e)) }), F(l.id) || (s = s[0])) : (t.each(r ? h(r) : [e], function(e, i) { var n;
                l.first ? (n = _.get(i, !1, l.tag, a), n && s.push(n)) : l.all ? t.each(_.all(i, l.tag, a), function(t, e) { s.push(e) }) : (n = _.get(i, !0, l.tag, a), n && s.push(n)) }), l.all || F(r) || (s = s[0]))), s = F(s) || !l.all ? s : [s], o ? s : void f(i, s) }, x.exec = function(e) { t.each(h(e.td.func), function(i, n) { t.each(x.get(e.td, !0, !e.td.hasOwnProperty("full") || e.td.full), function(t, e) { n.call(o, e) }) }), f(e, !0) }, x.trigger = function(e) { if (n(e.td)) W.event.trigger(z, e.td);
            else { var i = [z, e.td.eventName];
                e.td.var_args && t.each(e.td.var_args, function(t, e) { i.push(e) }), W.event.trigger.apply(W.event, i) } c(e), I.ack() } } var D, W, B = 0,
        N = t.isFunction,
        F = t.isArray,
        H = {},
        R = new _;
    t.fn.gmap3 = function() { var e, i = [],
            n = !0,
            o = []; for (r(), e = 0; e < arguments.length; e++) arguments[e] && i.push(arguments[e]); return i.length || i.push("map"), t.each(this, function() { var e = t(this),
                a = e.data("gmap3");
            n = !1, a || (a = new j(e), e.data("gmap3", a)), 1 !== i.length || "get" !== i[0] && !x(i[0]) ? a._plan(i) : "get" === i[0] ? o.push(a.get("map", !0)) : o.push(a.get(i[0].get, !0, i[0].get.full)) }), o.length ? 1 === o.length ? o[0] : o : this } }(jQuery),
/*!
 * imagesLoaded PACKAGED v3.0.2
 * JavaScript is all like "You images are done yet or what?"
 */
/*!
 * EventEmitter v4.1.0 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
function(t) { "use strict";

    function e() {}

    function i(t, e) { if (o) return e.indexOf(t); for (var i = e.length; i--;)
            if (e[i] === t) return i; return -1 } var n = e.prototype,
        o = !!Array.prototype.indexOf;
    n._getEvents = function() { return this._events || (this._events = {}) }, n.getListeners = function(t) { var e, i, n = this._getEvents(); if ("object" == typeof t) { e = {}; for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]) } else e = n[t] || (n[t] = []); return e }, n.getListenersAsObject = function(t) { var e, i = this.getListeners(t); return i instanceof Array && (e = {}, e[t] = i), e || i }, n.addListener = function(t, e) { var n, o = this.getListenersAsObject(t); for (n in o) o.hasOwnProperty(n) && i(e, o[n]) === -1 && o[n].push(e); return this }, n.on = n.addListener, n.defineEvent = function(t) { return this.getListeners(t), this }, n.defineEvents = function(t) { for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]); return this }, n.removeListener = function(t, e) { var n, o, a = this.getListenersAsObject(t); for (o in a) a.hasOwnProperty(o) && (n = i(e, a[o]), n !== -1 && a[o].splice(n, 1)); return this }, n.off = n.removeListener, n.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, n.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, n.manipulateListeners = function(t, e, i) { var n, o, a = t ? this.removeListener : this.addListener,
            r = t ? this.removeListeners : this.addListeners; if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) a.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? a.call(this, n, o) : r.call(this, n, o)); return this }, n.removeEvent = function(t) { var e, i = typeof t,
            n = this._getEvents(); if ("string" === i) delete n[t];
        else if ("object" === i)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events; return this }, n.emitEvent = function(t, e) { var i, n, o, a = this.getListenersAsObject(t); for (n in a)
            if (a.hasOwnProperty(n))
                for (i = a[n].length; i--;) o = e ? a[n][i].apply(null, e) : a[n][i](), o === !0 && this.removeListener(t, a[n][i]); return this }, n.trigger = n.emitEvent, n.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, "function" == typeof define && define.amd ? define(function() { return e }) : t.EventEmitter = e }(this),
/*!
 * eventie v1.0.3
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */
function(t) { "use strict"; var e = document.documentElement,
        i = function() {};
    e.addEventListener ? i = function(t, e, i) { t.addEventListener(e, i, !1) } : e.attachEvent && (i = function(e, i, n) { e[i + n] = n.handleEvent ? function() { var e = t.event;
            e.target = e.target || e.srcElement, n.handleEvent.call(n, e) } : function() { var i = t.event;
            i.target = i.target || i.srcElement, n.call(e, i) }, e.attachEvent("on" + i, e[i + n]) }); var n = function() {};
    e.removeEventListener ? n = function(t, e, i) { t.removeEventListener(e, i, !1) } : e.detachEvent && (n = function(t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (n) { t[e + i] = void 0 } }); var o = { bind: i, unbind: n }; "function" == typeof define && define.amd ? define(o) : t.eventie = o }(this),
/*!
 * imagesLoaded v3.0.2
 * JavaScript is all like "You images are done yet or what?"
 */
function(t) { "use strict";

    function e(t, e) { for (var i in e) t[i] = e[i]; return t }

    function i(t) { return "[object Array]" === l.call(t) }

    function n(t) { var e = []; if (i(t)) e = t;
        else if ("number" == typeof t.length)
            for (var n = 0, o = t.length; n < o; n++) e.push(t[n]);
        else e.push(t); return e }

    function o(t, i) {
        function o(t, i, r) { if (!(this instanceof o)) return new o(t, i); "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = e({}, this.options), "function" == typeof i ? r = i : e(this.options, i), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred); var s = this;
            setTimeout(function() { s.check() }) }

        function l(t) { this.img = t } o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function() { this.images = []; for (var t = 0, e = this.elements.length; t < e; t++) { var i = this.elements[t]; "IMG" === i.nodeName && this.addImage(i); for (var n = i.querySelectorAll("img"), o = 0, a = n.length; o < a; o++) { var r = n[o];
                    this.addImage(r) } } }, o.prototype.addImage = function(t) { var e = new l(t);
            this.images.push(e) }, o.prototype.check = function() {
            function t(t, o) { return e.options.debug && s && r.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0 } var e = this,
                i = 0,
                n = this.images.length; if (this.hasAnyBroken = !1, !n) return void this.complete(); for (var o = 0; o < n; o++) { var a = this.images[o];
                a.on("confirm", t), a.check() } }, o.prototype.progress = function(t) { this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emit("progress", this, t), this.jqDeferred && this.jqDeferred.notify(this, t) }, o.prototype.complete = function() { var t = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emit(t, this), this.emit("always", this), this.jqDeferred) { var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this) } }, a && (a.fn.imagesLoaded = function(t, e) { var i = new o(this, t, e); return i.jqDeferred.promise(a(this)) }); var u = {}; return l.prototype = new t, l.prototype.check = function() { var t = u[this.img.src]; if (t) return void this.useCached(t); if (u[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth"); var e = this.proxyImage = new Image;
            i.bind(e, "load", this), i.bind(e, "error", this), e.src = this.img.src }, l.prototype.useCached = function(t) { if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
            else { var e = this;
                t.on("confirm", function(t) { return e.confirm(t.isLoaded, "cache emitted confirmed"), !0 }) } }, l.prototype.confirm = function(t, e) { this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e) }, l.prototype.handleEvent = function(t) { var e = "on" + t.type;
            this[e] && this[e](t) }, l.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindProxyEvents() }, l.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindProxyEvents() }, l.prototype.unbindProxyEvents = function() { i.unbind(this.proxyImage, "load", this), i.unbind(this.proxyImage, "error", this) }, o } var a = t.jQuery,
        r = t.console,
        s = "undefined" != typeof r,
        l = Object.prototype.toString; "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], o) : t.imagesLoaded = o(t.EventEmitter, t.eventie) }(window),
/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) { "use strict";

    function i(i, a, s) {
        function l(t, e, n) { var o, a = "$()." + i + '("' + e + '")'; return t.each(function(t, l) { var u = s.data(l, i); if (!u) return void r(i + " not initialized. Cannot call methods, i.e. " + a); var d = u[e]; if (!d || "_" == e.charAt(0)) return void r(a + " is not a valid method"); var c = d.apply(u, n);
                o = void 0 === o ? c : o }), void 0 !== o ? o : t }

        function u(t, e) { t.each(function(t, n) { var o = s.data(n, i);
                o ? (o.option(e), o._init()) : (o = new a(n, e), s.data(n, i, o)) }) } s = s || e || t.jQuery, s && (a.prototype.option || (a.prototype.option = function(t) { s.isPlainObject(t) && (this.options = s.extend(!0, this.options, t)) }), s.fn[i] = function(t) { if ("string" == typeof t) { var e = o.call(arguments, 1); return l(this, t, e) } return u(this, t), this }, n(s)) }

    function n(t) {!t || t && t.bridget || (t.bridget = i) } var o = Array.prototype.slice,
        a = t.console,
        r = "undefined" == typeof a ? function() {} : function(t) { a.error(t) }; return n(e || t.jQuery), i }),
/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {} var e = t.prototype; return e.on = function(t, e) { if (t && e) { var i = this._events = this._events || {},
                n = i[t] = i[t] || []; return n.indexOf(e) == -1 && n.push(e), this } }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {}; return n[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return n != -1 && i.splice(n, 1), this } }, e.emitEvent = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = 0,
                o = i[n];
            e = e || []; for (var a = this._onceEvents && this._onceEvents[t]; o;) { var r = a && a[o];
                r && (this.off(t, o), delete a[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n] } return this } }, t }),
/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() { "use strict";

    function t(t) { var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e); return i && e }

    function e() {}

    function i() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < u; e++) { var i = l[e];
            t[i] = 0 } return t }

    function n(t) { var e = getComputedStyle(t); return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

    function o() { if (!d) { d = !0; var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box"; var i = document.body || document.documentElement;
            i.appendChild(e); var o = n(e);
            a.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e) } }

    function a(e) { if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) { var a = n(e); if ("none" == a.display) return i(); var s = {};
            s.width = e.offsetWidth, s.height = e.offsetHeight; for (var d = s.isBorderBox = "border-box" == a.boxSizing, c = 0; c < u; c++) { var p = l[c],
                    m = a[p],
                    f = parseFloat(m);
                s[p] = isNaN(f) ? 0 : f } var h = s.paddingLeft + s.paddingRight,
                g = s.paddingTop + s.paddingBottom,
                v = s.marginLeft + s.marginRight,
                y = s.marginTop + s.marginBottom,
                w = s.borderLeftWidth + s.borderRightWidth,
                b = s.borderTopWidth + s.borderBottomWidth,
                I = d && r,
                x = t(a.width);
            x !== !1 && (s.width = x + (I ? 0 : h + w)); var C = t(a.height); return C !== !1 && (s.height = C + (I ? 0 : g + b)), s.innerWidth = s.width - (h + w), s.innerHeight = s.height - (g + b), s.outerWidth = s.width + v, s.outerHeight = s.height + y, s } } var r, s = "undefined" == typeof console ? e : function(t) { console.error(t) },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = l.length,
        d = !1; return a }),
/**
 * matchesSelector v2.0.1
 * matchesSelector( element, '.selector' )
 * MIT license
 */
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() { "use strict"; var t = function() { var t = Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var n = e[i],
                o = n + "MatchesSelector"; if (t[o]) return o } }(); return function(e, i) { return e[t](i) } }),
/**
 * Fizzy UI utils v2.0.2
 * MIT license
 */
function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) { var i = {};
    i.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function(t, e) { return (t % e + e) % e }, i.makeArray = function(t) { var e = []; if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t); return e }, i.removeFrom = function(t, e) { var i = t.indexOf(e);
        i != -1 && t.splice(i, 1) }, i.getParent = function(t, i) { for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) { var e = "on" + t.type;
        this[e] && this[e](t) }, i.filterFindElements = function(t, n) { t = i.makeArray(t); var o = []; return t.forEach(function(t) { if (t instanceof HTMLElement) { if (!n) return void o.push(t);
                e(t, n) && o.push(t); for (var i = t.querySelectorAll(n), a = 0; a < i.length; a++) o.push(i[a]) } }), o }, i.debounceMethod = function(t, e, i) { var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() { var t = this[o];
            t && clearTimeout(t); var e = arguments,
                a = this;
            this[o] = setTimeout(function() { n.apply(a, e), delete a[o] }, i || 100) } }, i.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() }; var n = t.console; return i.htmlInit = function(e, o) { i.docReady(function() { var a = i.toDashed(o),
                r = "data-" + a,
                s = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + a),
                u = i.makeArray(s).concat(i.makeArray(l)),
                d = r + "-options",
                c = t.jQuery;
            u.forEach(function(t) { var i, a = t.getAttribute(r) || t.getAttribute(d); try { i = a && JSON.parse(a) } catch (s) { return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + s)) } var l = new e(t, i);
                c && c.data(t, o, l) }) }) }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) { "use strict";

    function i(t) { for (var e in t) return !1; return e = null, !0 }

    function n(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

    function o(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) } var a = document.documentElement.style,
        r = "string" == typeof a.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof a.transform ? "transform" : "WebkitTransform",
        l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
        u = { transform: s, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, d.handleEvent = function(t) { var e = "on" + t.type;
        this[e] && this[e](t) }, d.getSize = function() { this.size = e(this.element) }, d.css = function(t) { var e = this.element.style; for (var i in t) { var n = u[i] || i;
            e[n] = t[i] } }, d.getPosition = function() { var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            a = this.layout.size,
            r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * a.width : parseInt(n, 10),
            s = o.indexOf("%") != -1 ? parseFloat(o) / 100 * a.height : parseInt(o, 10);
        r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s }, d.layoutPosition = function() { var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            a = i ? "left" : "right",
            r = i ? "right" : "left",
            s = this.position.x + t[o];
        e[a] = this.getXValue(s), e[r] = ""; var l = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            c = this.position.y + t[l];
        e[u] = this.getYValue(c), e[d] = "", this.css(e), this.emitEvent("layout", [this]) }, d.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, d.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, d._transitionTo = function(t, e) { this.getPosition(); var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            a = parseInt(e, 10),
            r = o === this.position.x && a === this.position.y; if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition(); var s = t - i,
            l = e - n,
            u = {};
        u.transform = this.getTranslate(s, l), this.transition({ to: u, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, d.getTranslate = function(t, e) { var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"); return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, d.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, d._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, d.transition = function(t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var n = this.element.offsetHeight;
            n = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var c = "opacity," + o(s);
    d.enableTransition = function() { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: c, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1) } }, d.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, d.onotransitionend = function(t) { this.ontransitionend(t) }; var p = { "-webkit-transform": "transform" };
    d.ontransitionend = function(t) { if (t.target === this.element) { var e = this._transn,
                n = p[t.propertyName] || t.propertyName; if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) { var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n] } this.emitEvent("transitionEnd", [this]) } }, d.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1 }, d._removeStyles = function(t) { var e = {}; for (var i in t) e[i] = "";
        this.css(e) }; var m = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return d.removeTransitionStyles = function() { this.css(m) }, d.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, d.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, d.remove = function() { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, d.reveal = function() { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, d.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, d.hide = function() { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, d.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n }),
/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, a) { return e(t, i, n, o, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, n, o) { "use strict";

    function a(t, e) { var i = n.getQueryElement(t); if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e); var o = ++c;
        this.element.outlayerGUID = o, p[o] = this, this._create(); var a = this._getOption("initLayout");
        a && this.layout() }

    function r(t) {
        function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e }

    function s(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2]; if (!i.length) return 0;
        i = parseFloat(i); var o = f[n] || 1; return i * o } var l = t.console,
        u = t.jQuery,
        d = function() {},
        c = 0,
        p = {};
    a.namespace = "outlayer", a.Item = o, a.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var m = a.prototype;
    n.extend(m, e.prototype), m.option = function(t) { n.extend(this.options, t) }, m._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, a.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, m._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle); var t = this._getOption("resize");
        t && this.bindResize() }, m.reloadItems = function() { this.items = this._itemize(this.element.children) }, m._itemize = function(t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) { var a = e[o],
                r = new i(a, this);
            n.push(r) } return n }, m._filterFindItemElements = function(t) { return n.filterFindElements(t, this.options.itemSelector) }, m.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, m.layout = function() { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0 }, m._init = m.layout, m._resetLayout = function() { this.getSize() }, m.getSize = function() { this.size = i(this.element) }, m._getMeasurement = function(t, e) { var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0 }, m.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, m._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, m._layoutItems = function(t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var i = [];
            t.forEach(function(t) { var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n) }, this), this._processLayoutQueue(i) } }, m._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, m._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, m.updateStagger = function() { var t = this.options.stagger; return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = s(t), this.stagger) }, m._positionItem = function(t, e, i, n, o) { n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i)) }, m._postLayout = function() { this.resizeContainer() }, m.resizeContainer = function() { var t = this._getOption("resizeContainer"); if (t) { var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, m._getContainerSize = d, m._setContainerMeasure = function(t, e) { if (void 0 !== t) { var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, m._emitCompleteOnItems = function(t, e) {
        function i() { o.dispatchEvent(t + "Complete", null, [e]) }

        function n() { r++, r == a && i() } var o = this,
            a = e.length; if (!e || !a) return void i(); var r = 0;
        e.forEach(function(e) { e.once(t, n) }) }, m.dispatchEvent = function(t, e, i) { var n = e ? [e].concat(i) : i; if (this.emitEvent(t, n), u)
            if (this.$element = this.$element || u(this.element), e) { var o = u.Event(e);
                o.type = t, this.$element.trigger(o, i) }
        else this.$element.trigger(t, i) }, m.ignore = function(t) { var e = this.getItem(t);
        e && (e.isIgnored = !0) }, m.unignore = function(t) { var e = this.getItem(t);
        e && delete e.isIgnored }, m.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, m.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, m._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t) }, m._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, m._getBoundingRect = function() { var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, m._manageStamp = d, m._getElementOffset = function(t) { var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            a = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom }; return a }, m.handleEvent = n.handleEvent, m.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, m.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, m.onresize = function() { this.resize() }, n.debounceMethod(a, "onresize", 100), m.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, m.needsResizeLayout = function() { var t = i(this.element),
            e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, m.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, m.appended = function(t) { var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e)) }, m.prepended = function(t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, m.reveal = function(t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.reveal() }) } }, m.hide = function(t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.hide() }) } }, m.revealItemElements = function(t) { var e = this.getItems(t);
        this.reveal(e) }, m.hideItemElements = function(t) { var e = this.getItems(t);
        this.hide(e) }, m.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, m.getItems = function(t) { t = n.makeArray(t); var e = []; return t.forEach(function(t) { var i = this.getItem(t);
            i && e.push(i) }, this), e }, m.remove = function(t) { var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), n.removeFrom(this.items, t) }, this) }, m.destroy = function() { var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID;
        delete p[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace) }, a.data = function(t) { t = n.getQueryElement(t); var e = t && t.outlayerGUID; return e && p[e] }, a.create = function(t, e) { var i = r(a); return i.defaults = n.extend({}, a.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, a.compatOptions), i.namespace = t, i.data = a.data, i.Item = r(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i }; var f = { ms: 1, s: 1e3 }; return a.Item = o, a }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) { "use strict";

    function e() { t.Item.apply(this, arguments) } var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() { this.id = this.layout.itemGUID++, n.call(this), this.sortData = {} }, i.updateSortData = function() { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData,
                e = this.layout._sorters; for (var i in t) { var n = e[i];
                this.sortData[i] = n(this.element, this) } } }; var o = i.destroy; return i.destroy = function() { o.apply(this, arguments), this.css({ display: "" }) }, e }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) { "use strict";

    function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } var n = i.prototype,
        o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"]; return o.forEach(function(t) { n[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), n.needsVerticalResizeLayout = function() { var e = t(this.isotope.element),
            i = this.isotope.size && e; return i && e.innerHeight != this.isotope.size.innerHeight }, n._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, n.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, n.getRowHeight = function() { this.getSegmentSize("row", "Height") }, n.getSegmentSize = function(t, e) { var i = t + e,
            n = "outer" + e; if (this._getMeasurement(i, n), !this[i]) { var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e] } }, n.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, n.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, n.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
        function o() { i.apply(this, arguments) } return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o }, i }),
/*!
 * Masonry v4.1.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
function(t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, e) { var i = t.create("masonry"); return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0 }, i.prototype.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth } var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            a = o / n,
            r = n - o % n,
            s = r && r < 1 ? "round" : "floor";
        a = Math[s](a), this.cols = Math.max(a, 1) }, i.prototype.getContainerWidth = function() { var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth }, i.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols); for (var o = this._getColGroup(n), a = Math.min.apply(Math, o), r = o.indexOf(a), s = { x: this.columnWidth * r, y: a }, l = a + t.size.outerHeight, u = this.cols + 1 - o.length, d = 0; d < u; d++) this.colYs[r + d] = l; return s }, i.prototype._getColGroup = function(t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) { var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o) } return e }, i.prototype._manageStamp = function(t) { var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            a = o ? n.left : n.right,
            r = a + i.outerWidth,
            s = Math.floor(a / this.columnWidth);
        s = Math.max(0, s); var l = Math.floor(r / this.columnWidth);
        l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l); for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, c = s; c <= l; c++) this.colYs[c] = Math.max(d, this.colYs[c]) }, i.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, i.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, i.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i }),
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) { "use strict"; var i = t.create("masonry"),
        n = i.prototype,
        o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }; for (var a in e.prototype) o[a] || (n[a] = e.prototype[a]); var r = n.measureColumns;
    n.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) }; var s = n._getOption; return n._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : s.apply(this.isotope, arguments) }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("fitRows"),
        i = e.prototype; return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var n = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n }, i._getContainerSize = function() { return { height: this.maxY } }, e }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype; return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function() { return { height: this.y } }, e }),
/*!
 * Isotope v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
function(t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, a, r, s) { return e(t, i, n, o, a, r, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, n, o, a, r) {
    function s(t, e) { return function(i, n) { for (var o = 0; o < t.length; o++) { var a = t[o],
                    r = i.sortData[a],
                    s = n.sortData[a]; if (r > s || r < s) { var l = void 0 !== e[a] ? e[a] : e,
                        u = l ? 1 : -1; return (r > s ? 1 : -1) * u } } return 0 } } var l = t.jQuery,
        u = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
        d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    d.Item = a, d.LayoutMode = r; var c = d.prototype;
    c._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in r.modes) this._initLayoutMode(t) }, c.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, c._itemize = function() { for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) { var n = t[i];
            n.id = this.itemGUID++ } return this._updateItemsSortData(t), t }, c._initLayoutMode = function(t) { var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this) }, c.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, c._layout = function() { var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, c.arrange = function(t) { this.option(t), this._getIsInstant(); var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, c._init = c.arrange, c._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, c._getIsInstant = function() { var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited; return this._isInstant = e, e }, c._bindArrangeComplete = function() {
        function t() { e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems]) } var e, i, n, o = this;
        this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { n = !0, t() }) }, c._filter = function(t) { var e = this.options.filter;
        e = e || "*"; for (var i = [], n = [], o = [], a = this._getFilterTest(e), r = 0; r < t.length; r++) { var s = t[r]; if (!s.isIgnored) { var l = a(s);
                l && i.push(s), l && s.isHidden ? n.push(s) : l || s.isHidden || o.push(s) } } return { matches: i, needReveal: n, needHide: o } }, c._getFilterTest = function(t) { return l && this.options.isJQueryFiltering ? function(e) { return l(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return n(e.element, t) } }, c.updateSortData = function(t) { var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, c._getSorters = function() { var t = this.options.getSortData; for (var e in t) { var i = t[e];
            this._sorters[e] = p(i) } }, c._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && i < e; i++) { var n = t[i];
            n.updateSortData() } }; var p = function() {
        function t(t) { if ("string" != typeof t) return t; var i = u(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                a = o && o[1],
                r = e(a, n),
                s = d.sortDataParsers[i[1]]; return t = s ? function(t) { return t && s(r(t)) } : function(t) { return t && r(t) } }

        function e(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && i.textContent } } return t }();
    d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, c._sort = function() { var t = this.options.sortBy; if (t) { var e = [].concat.apply(t, this.sortHistory),
                i = s(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t) } }, c._mode = function() { var t = this.options.layoutMode,
            e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, c._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, c._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, c._manageStamp = function(t) { this._mode()._manageStamp(t) }, c._getContainerSize = function() { return this._mode()._getContainerSize() }, c.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, c.appended = function(t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i) } }, c.prepended = function(t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, c._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, c.insert = function(t) { var e = this.addItems(t); if (e.length) { var i, n, o = e.length; for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element); var a = this._filter(e).matches; for (i = 0; i < o; i++) e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
            this.reveal(a) } }; var m = c.remove; return c.remove = function(t) { t = o.makeArray(t); var e = this.getItems(t);
        m.call(this, t); for (var i = e && e.length, n = 0; i && n < i; n++) { var a = e[n];
            o.removeFrom(this.filteredItems, a) } }, c.shuffle = function() { for (var t = 0; t < this.items.length; t++) { var e = this.items[t];
            e.sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, c._noTransition = function(t, e) { var i = this.options.transitionDuration;
        this.options.transitionDuration = 0; var n = t.apply(this, e); return this.options.transitionDuration = i, n }, c.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, d }),
/*! jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */
function(t) {
    function e(t) { return new RegExp("^" + t + "$") }

    function i(t, e) { for (var i = Array.prototype.slice.call(arguments).splice(2), n = t.split("."), o = n.pop(), a = 0; a < n.length; a++) e = e[n[a]]; return e[o].apply(this, i) } var n = [],
        o = { options: { prependExistingHelpBlock: !1, sniffHtml: !0, preventSubmit: !0, submitError: !1, submitSuccess: !1, semanticallyStrict: !1, autoAdd: { helpBlocks: !0 }, filter: function() { return !0 } }, methods: { init: function(e) { var i = t.extend(!0, {}, o);
                    i.options = t.extend(!0, i.options, e); var s = this,
                        l = t.unique(s.map(function() { return t(this).parents("form")[0] }).toArray()); return t(l).bind("submit", function(e) { var n = t(this),
                            o = 0,
                            a = n.find("input,textarea,select").not("[type=submit],[type=image]").filter(i.options.filter);
                        a.trigger("submit.validation").trigger("validationLostFocus.validation"), a.each(function(e, i) { var n = t(i),
                                a = n.parents(".form-group").first();
                            a.hasClass("warning") && (a.removeClass("warning").addClass("error"), o++) }), a.trigger("validationLostFocus.validation"), o ? (i.options.preventSubmit && e.preventDefault(), n.addClass("error"), t.isFunction(i.options.submitError) && i.options.submitError(n, e, a.jqBootstrapValidation("collectErrors", !0))) : (n.removeClass("error"), t.isFunction(i.options.submitSuccess) && i.options.submitSuccess(n, e)) }), this.each(function() { var e = t(this),
                            o = e.parents(".form-group").first(),
                            s = o.find(".help-block").first(),
                            l = e.parents("form").first(),
                            u = []; if (!s.length && i.options.autoAdd && i.options.autoAdd.helpBlocks && (s = t('<div class="help-block" />'), o.find(".controls").append(s), n.push(s[0])), i.options.sniffHtml) { var d = ""; if (void 0 !== e.attr("pattern") && (d = "Not in the expected format<!-- data-validation-pattern-message to override -->", e.data("validationPatternMessage") && (d = e.data("validationPatternMessage")), e.data("validationPatternMessage", d), e.data("validationPatternRegex", e.attr("pattern"))), void 0 !== e.attr("max") || void 0 !== e.attr("aria-valuemax")) { var c = void 0 !== e.attr("max") ? e.attr("max") : e.attr("aria-valuemax");
                                d = "Too high: Maximum of '" + c + "'<!-- data-validation-max-message to override -->", e.data("validationMaxMessage") && (d = e.data("validationMaxMessage")), e.data("validationMaxMessage", d), e.data("validationMaxMax", c) } if (void 0 !== e.attr("min") || void 0 !== e.attr("aria-valuemin")) { var p = void 0 !== e.attr("min") ? e.attr("min") : e.attr("aria-valuemin");
                                d = "Too low: Minimum of '" + p + "'<!-- data-validation-min-message to override -->", e.data("validationMinMessage") && (d = e.data("validationMinMessage")), e.data("validationMinMessage", d), e.data("validationMinMin", p) } void 0 !== e.attr("maxlength") && (d = "Too long: Maximum of '" + e.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", e.data("validationMaxlengthMessage") && (d = e.data("validationMaxlengthMessage")), e.data("validationMaxlengthMessage", d), e.data("validationMaxlengthMaxlength", e.attr("maxlength"))), void 0 !== e.attr("minlength") && (d = "Too short: Minimum of '" + e.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", e.data("validationMinlengthMessage") && (d = e.data("validationMinlengthMessage")), e.data("validationMinlengthMessage", d), e.data("validationMinlengthMinlength", e.attr("minlength"))), void 0 === e.attr("required") && void 0 === e.attr("aria-required") || (d = i.builtInValidators.required.message, e.data("validationRequiredMessage") && (d = e.data("validationRequiredMessage")), e.data("validationRequiredMessage", d)), void 0 !== e.attr("type") && "number" === e.attr("type").toLowerCase() && (d = i.builtInValidators.number.message, e.data("validationNumberMessage") && (d = e.data("validationNumberMessage")), e.data("validationNumberMessage", d)), void 0 !== e.attr("type") && "email" === e.attr("type").toLowerCase() && (d = "Not a valid email address<!-- data-validator-validemail-message to override -->", e.data("validationValidemailMessage") ? d = e.data("validationValidemailMessage") : e.data("validationEmailMessage") && (d = e.data("validationEmailMessage")), e.data("validationValidemailMessage", d)), void 0 !== e.attr("minchecked") && (d = "Not enough options checked; Minimum of '" + e.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", e.data("validationMincheckedMessage") && (d = e.data("validationMincheckedMessage")), e.data("validationMincheckedMessage", d), e.data("validationMincheckedMinchecked", e.attr("minchecked"))), void 0 !== e.attr("maxchecked") && (d = "Too many options checked; Maximum of '" + e.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", e.data("validationMaxcheckedMessage") && (d = e.data("validationMaxcheckedMessage")), e.data("validationMaxcheckedMessage", d), e.data("validationMaxcheckedMaxchecked", e.attr("maxchecked"))) } void 0 !== e.data("validation") && (u = e.data("validation").split(",")), t.each(e.data(), function(t, e) { var i = t.replace(/([A-Z])/g, ",$1").split(","); "validation" === i[0] && i[1] && u.push(i[1]) }); var m = u,
                            f = [];
                        do t.each(u, function(t, e) { u[t] = a(e) }), u = t.unique(u), f = [], t.each(m, function(n, o) { if (void 0 !== e.data("validation" + o + "Shortcut")) t.each(e.data("validation" + o + "Shortcut").split(","), function(t, e) { f.push(e) });
                            else if (i.builtInValidators[o.toLowerCase()]) { var r = i.builtInValidators[o.toLowerCase()]; "shortcut" === r.type.toLowerCase() && t.each(r.shortcut.split(","), function(t, e) { e = a(e), f.push(e), u.push(e) }) } }), m = f; while (m.length > 0); var h = {};
                        t.each(u, function(n, o) { var r = e.data("validation" + o + "Message"),
                                s = void 0 !== r,
                                l = !1; if (r = r ? r : "'" + o + "' validation failed <!-- Add attribute 'data-validation-" + o.toLowerCase() + "-message' to input to change this message -->", t.each(i.validatorTypes, function(i, n) { void 0 === h[i] && (h[i] = []), l || void 0 === e.data("validation" + o + a(n.name)) || (h[i].push(t.extend(!0, { name: a(n.name), message: r }, n.init(e, o))), l = !0) }), !l && i.builtInValidators[o.toLowerCase()]) { var u = t.extend(!0, {}, i.builtInValidators[o.toLowerCase()]);
                                s && (u.message = r); var d = u.type.toLowerCase(); "shortcut" === d ? l = !0 : t.each(i.validatorTypes, function(i, n) { void 0 === h[i] && (h[i] = []), l || d !== i.toLowerCase() || (e.data("validation" + o + a(n.name), u[n.name.toLowerCase()]), h[d].push(t.extend(u, n.init(e, o))), l = !0) }) } l || t.error("Cannot find validation info for '" + o + "'") }), s.data("original-contents", s.data("original-contents") ? s.data("original-contents") : s.html()), s.data("original-role", s.data("original-role") ? s.data("original-role") : s.attr("role")), o.data("original-classes", o.data("original-clases") ? o.data("original-classes") : o.attr("class")), e.data("original-aria-invalid", e.data("original-aria-invalid") ? e.data("original-aria-invalid") : e.attr("aria-invalid")), e.bind("validation.validation", function(n, o) { var a = r(e),
                                s = []; return t.each(h, function(n, r) {
                                (a || a.length || o && o.includeEmpty || i.validatorTypes[n].blockSubmit && o && o.submitting) && t.each(r, function(t, o) { i.validatorTypes[n].validate(e, a, o) && s.push(o.message) }) }), s }), e.bind("getValidators.validation", function() { return h }), e.bind("submit.validation", function() { return e.triggerHandler("change.validation", { submitting: !0 }) }), e.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function(n, a) { var u = r(e),
                                d = [];
                            o.find("input,textarea,select").each(function(i, n) { var o = d.length; if (t.each(t(n).triggerHandler("validation.validation", a), function(t, e) { d.push(e) }), d.length > o) t(n).attr("aria-invalid", "true");
                                else { var r = e.data("original-aria-invalid");
                                    t(n).attr("aria-invalid", void 0 !== r && r) } }), l.find("input,select,textarea").not(e).not('[name="' + e.attr("name") + '"]').trigger("validationLostFocus.validation"), d = t.unique(d.sort()), d.length ? (o.removeClass("success error").addClass("warning"), i.options.semanticallyStrict && 1 === d.length ? s.html(d[0] + (i.options.prependExistingHelpBlock ? s.data("original-contents") : "")) : s.html('<ul role="alert"><li>' + d.join("</li><li>") + "</li></ul>" + (i.options.prependExistingHelpBlock ? s.data("original-contents") : ""))) : (o.removeClass("warning error success"), u.length > 0 && o.addClass("success"), s.html(s.data("original-contents"))), "blur" === n.type && o.removeClass("success") }), e.bind("validationLostFocus.validation", function() { o.removeClass("success") }) }) }, destroy: function() { return this.each(function() { var e = t(this),
                            i = e.parents(".form-group").first(),
                            o = i.find(".help-block").first();
                        e.unbind(".validation"), o.html(o.data("original-contents")), i.attr("class", i.data("original-classes")), e.attr("aria-invalid", e.data("original-aria-invalid")), o.attr("role", e.data("original-role")), n.indexOf(o[0]) > -1 && o.remove() }) }, collectErrors: function(e) { var i = {}; return this.each(function(e, n) { var o = t(n),
                            a = o.attr("name"),
                            r = o.triggerHandler("validation.validation", { includeEmpty: !0 });
                        i[a] = t.extend(!0, r, i[a]) }), t.each(i, function(t, e) { 0 === e.length && delete i[t] }), i }, hasErrors: function() { var e = []; return this.each(function(i, n) { e = e.concat(t(n).triggerHandler("getValidators.validation") ? t(n).triggerHandler("validation.validation", { submitting: !0 }) : []) }), e.length > 0 }, override: function(e) { o = t.extend(!0, o, e) } }, validatorTypes: { callback: { name: "callback", init: function(t, e) { return { validatorName: e, callback: t.data("validation" + e + "Callback"), lastValue: t.val(), lastValid: !0, lastFinished: !0 } }, validate: function(t, e, n) { if (n.lastValue === e && n.lastFinished) return !n.lastValid; if (n.lastFinished === !0) { n.lastValue = e, n.lastValid = !0, n.lastFinished = !1; var o = n,
                                a = t;
                            i(n.callback, window, t, e, function(t) { o.lastValue === t.value && (o.lastValid = t.valid, t.message && (o.message = t.message), o.lastFinished = !0, a.data("validation" + o.validatorName + "Message", o.message), setTimeout(function() { a.trigger("change.validation") }, 1)) }) } return !1 } }, ajax: { name: "ajax", init: function(t, e) { return { validatorName: e, url: t.data("validation" + e + "Ajax"), lastValue: t.val(), lastValid: !0, lastFinished: !0 } }, validate: function(e, i, n) { return "" + n.lastValue == "" + i && n.lastFinished === !0 ? n.lastValid === !1 : (n.lastFinished === !0 && (n.lastValue = i, n.lastValid = !0, n.lastFinished = !1, t.ajax({ url: n.url, data: "value=" + i + "&field=" + e.attr("name"), dataType: "json", success: function(t) { "" + n.lastValue == "" + t.value && (n.lastValid = !!t.valid, t.message && (n.message = t.message), n.lastFinished = !0, e.data("validation" + n.validatorName + "Message", n.message), setTimeout(function() { e.trigger("change.validation") }, 1)) }, failure: function() { n.lastValid = !0, n.message = "ajax call failed", n.lastFinished = !0, e.data("validation" + n.validatorName + "Message", n.message), setTimeout(function() { e.trigger("change.validation") }, 1) } })), !1) } }, regex: { name: "regex", init: function(t, i) { return { regex: e(t.data("validation" + i + "Regex")) } }, validate: function(t, e, i) { return !i.regex.test(e) && !i.negative || i.regex.test(e) && i.negative } }, required: { name: "required", init: function(t, e) { return {} }, validate: function(t, e, i) { return !(0 !== e.length || i.negative) || !!(e.length > 0 && i.negative) }, blockSubmit: !0 }, match: { name: "match", init: function(t, e) { var i = t.parents("form").first().find('[name="' + t.data("validation" + e + "Match") + '"]').first(); return i.bind("validation.validation", function() { t.trigger("change.validation", { submitting: !0 }) }), { element: i } }, validate: function(t, e, i) { return e !== i.element.val() && !i.negative || e === i.element.val() && i.negative }, blockSubmit: !0 }, max: { name: "max", init: function(t, e) { return { max: t.data("validation" + e + "Max") } }, validate: function(t, e, i) { return parseFloat(e, 10) > parseFloat(i.max, 10) && !i.negative || parseFloat(e, 10) <= parseFloat(i.max, 10) && i.negative } }, min: { name: "min", init: function(t, e) { return { min: t.data("validation" + e + "Min") } }, validate: function(t, e, i) { return parseFloat(e) < parseFloat(i.min) && !i.negative || parseFloat(e) >= parseFloat(i.min) && i.negative } }, maxlength: { name: "maxlength", init: function(t, e) { return { maxlength: t.data("validation" + e + "Maxlength") } }, validate: function(t, e, i) { return e.length > i.maxlength && !i.negative || e.length <= i.maxlength && i.negative } }, minlength: { name: "minlength", init: function(t, e) { return { minlength: t.data("validation" + e + "Minlength") } }, validate: function(t, e, i) { return e.length < i.minlength && !i.negative || e.length >= i.minlength && i.negative } }, maxchecked: { name: "maxchecked", init: function(t, e) { var i = t.parents("form").first().find('[name="' + t.attr("name") + '"]'); return i.bind("click.validation", function() { t.trigger("change.validation", { includeEmpty: !0 }) }), { maxchecked: t.data("validation" + e + "Maxchecked"), elements: i } }, validate: function(t, e, i) { return i.elements.filter(":checked").length > i.maxchecked && !i.negative || i.elements.filter(":checked").length <= i.maxchecked && i.negative }, blockSubmit: !0 }, minchecked: { name: "minchecked", init: function(t, e) { var i = t.parents("form").first().find('[name="' + t.attr("name") + '"]'); return i.bind("click.validation", function() { t.trigger("change.validation", { includeEmpty: !0 }) }), { minchecked: t.data("validation" + e + "Minchecked"), elements: i } }, validate: function(t, e, i) { return i.elements.filter(":checked").length < i.minchecked && !i.negative || i.elements.filter(":checked").length >= i.minchecked && i.negative }, blockSubmit: !0 } }, builtInValidators: { email: { name: "Email", type: "shortcut", shortcut: "validemail" }, validemail: { name: "Validemail", type: "regex", regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}", message: "Not a valid email address<!-- data-validator-validemail-message to override -->" }, passwordagain: { name: "Passwordagain", type: "match", match: "password", message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->" }, positive: { name: "Positive", type: "shortcut", shortcut: "number,positivenumber" }, negative: { name: "Negative", type: "shortcut", shortcut: "number,negativenumber" }, number: { name: "Number", type: "regex", regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?", message: "Must be a number<!-- data-validator-number-message to override -->" }, integer: { name: "Integer", type: "regex", regex: "[+-]?\\d+", message: "No decimal places allowed<!-- data-validator-integer-message to override -->" }, positivenumber: { name: "Positivenumber", type: "min", min: 0, message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->" }, negativenumber: { name: "Negativenumber", type: "max", max: 0, message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->" }, required: { name: "Required", type: "required", message: "This is required<!-- data-validator-required-message to override -->" }, checkone: { name: "Checkone", type: "minchecked", minchecked: 1, message: "Check at least one option<!-- data-validation-checkone-message to override -->" } } },
        a = function(t) { return t.toLowerCase().replace(/(^|\s)([a-z])/g, function(t, e, i) { return e + i.toUpperCase() }) },
        r = function(e) { var i = e.val(),
                n = e.attr("type"); return "checkbox" === n && (i = e.is(":checked") ? i : ""), "radio" === n && (i = t('input[name="' + e.attr("name") + '"]:checked').length > 0 ? i : ""), i };
    t.fn.jqBootstrapValidation = function(e) { return o.methods[e] ? o.methods[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.jqBootstrapValidation"), null) : o.methods.init.apply(this, arguments) }, t.jqBootstrapValidation = function(e) { t(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments) } }(jQuery),
function() { var t, e, i = function(t, e) { return function() { return t.apply(e, arguments) } };
    t = function() {
        function t() {} return t.prototype.extend = function(t, e) { var i, n; for (i in t) n = t[i], null != n && (e[i] = n); return e }, t.prototype.isMobile = function(t) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) }, t }(), e = this.WeakMap || (e = function() {
        function t() { this.keys = [], this.values = [] } return t.prototype.get = function(t) { var e, i, n, o, a; for (a = this.keys, e = n = 0, o = a.length; n < o; e = ++n)
                if (i = a[e], i === t) return this.values[e] }, t.prototype.set = function(t, e) { var i, n, o, a, r; for (r = this.keys, i = o = 0, a = r.length; o < a; i = ++o)
                if (n = r[i], n === t) return void(this.values[i] = e); return this.keys.push(t), this.values.push(e) }, t }()), this.WOW = function() {
        function n(t) { null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new e } return n.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0 }, n.prototype.init = function() { var t; return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start) }, n.prototype.start = function() { var t, e, i, n; if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) { if (this.disabled()) return this.resetStyle(); for (n = this.boxes, e = 0, i = n.length; e < i; e++) t = n[e], this.applyStyle(t, !0); return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50) } }, n.prototype.stop = function() { if (window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval) return clearInterval(this.interval) }, n.prototype.show = function(t) { return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass }, n.prototype.applyStyle = function(t, e) { var i, n, o; return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(a) { return function() { return a.customStyle(t, e, n, i, o) } }(this)) }, n.prototype.animate = function() { return "requestAnimationFrame" in window ? function(t) { return window.requestAnimationFrame(t) } : function(t) { return t() } }(), n.prototype.resetStyle = function() { var t, e, i, n, o; for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;")); return o }, n.prototype.customStyle = function(t, e, i, n, o) { return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, { animationDuration: i }), n && this.vendorSet(t.style, { animationDelay: n }), o && this.vendorSet(t.style, { animationIterationCount: o }), this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }), t }, n.prototype.vendors = ["moz", "webkit"], n.prototype.vendorSet = function(t, e) { var i, n, o, a;
            a = []; for (i in e) n = e[i], t["" + i] = n, a.push(function() { var e, a, r, s; for (r = this.vendors, s = [], e = 0, a = r.length; e < a; e++) o = r[e], s.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n); return s }.call(this)); return a }, n.prototype.vendorCSS = function(t, e) { var i, n, o, a, r, s; for (n = window.getComputedStyle(t), i = n.getPropertyCSSValue(e), s = this.vendors, a = 0, r = s.length; a < r; a++) o = s[a], i = i || n.getPropertyCSSValue("-" + o + "-" + e); return i }, n.prototype.animationName = function(t) { var e; try { e = this.vendorCSS(t, "animation-name").cssText } catch (i) { e = window.getComputedStyle(t).getPropertyValue("animation-name") } return "none" === e ? "" : e }, n.prototype.cacheAnimationName = function(t) { return this.animationNameCache.set(t, this.animationName(t)) }, n.prototype.cachedAnimationName = function(t) { return this.animationNameCache.get(t) }, n.prototype.scrollHandler = function() { return this.scrolled = !0 }, n.prototype.scrollCallback = function() { var t; if (this.scrolled && (this.scrolled = !1, this.boxes = function() { var e, i, n, o; for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t)); return o }.call(this), !this.boxes.length)) return this.stop() }, n.prototype.offsetTop = function(t) { for (var e; void 0 === t.offsetTop;) t = t.parentNode; for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop; return e }, n.prototype.isVisible = function(t) { var e, i, n, o, a; return i = t.getAttribute("data-wow-offset") || this.config.offset, a = window.pageYOffset, o = a + this.element.clientHeight - i, n = this.offsetTop(t), e = n + t.clientHeight, n <= o && e >= a }, n.prototype.util = function() { return this._util || (this._util = new t) }, n.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, n }() }.call(this),
    /*! Superslides - v0.6.3-wip - 2013-12-17
     * https://github.com/nicinabox/superslides
     * Copyright (c) 2013 Nic Aitch; Licensed MIT */
    function(t, e) { var i, n = "superslides";
        i = function(i, n) { this.options = e.extend({ play: !1, animation_speed: 600, animation_easing: "swing", animation: "slide", inherit_width_from: t, inherit_height_from: t, pagination: !0, hashchange: !1, scrollable: !0, elements: { preserve: ".preserve", nav: ".slides-navigation", container: ".slides-container", pagination: ".slides-pagination" } }, n); var o = this,
                a = e("<div>", { "class": "slides-control" }),
                r = 1;
            this.$el = e(i), this.$container = this.$el.find(this.options.elements.container); var s = function() { return r = o._findMultiplier(), o.$el.on("click", o.options.elements.nav + " a", function(t) { t.preventDefault(), o.stop(), e(this).hasClass("next") ? o.animate("next", function() { o.start() }) : o.animate("prev", function() { o.start() }) }), e(document).on("keyup", function(t) { 37 === t.keyCode && o.animate("prev"), 39 === t.keyCode && o.animate("next") }), e(t).on("resize", function() { setTimeout(function() { var t = o.$container.children();
                            o.width = o._findWidth(), o.height = o._findHeight(), t.css({ width: o.width, left: o.width }), o.css.containers(), o.css.images() }, 10) }), o.options.hashchange && e(t).on("hashchange", function() { var t, e = o._parseHash();
                        t = o._upcomingSlide(e), t >= 0 && t !== o.current && o.animate(t) }), o.pagination._events(), o.start(), o },
                l = { containers: function() { o.init ? (o.$el.css({ height: o.height }), o.$control.css({ width: o.width * r, left: -o.width }), o.$container.css({})) : (e("body").css({ margin: 0 }), o.$el.css({ position: "relative", overflow: "hidden", width: "100%", height: o.height }), o.$control.css({ position: "relative", transform: "translate3d(0)", height: "100%", width: o.width * r, left: -o.width }), o.$container.css({ display: "none", margin: "0", padding: "0", listStyle: "none", position: "relative", height: "100%" })), 1 === o.size() && o.$el.find(o.options.elements.nav).hide() }, images: function() { var t = o.$container.find("img").not(o.options.elements.preserve);
                        t.removeAttr("width").removeAttr("height").css({ "-webkit-backface-visibility": "hidden", "-ms-interpolation-mode": "bicubic", position: "absolute", left: "0", top: "0", "z-index": "-1", "max-width": "none" }), t.each(function() { var t = o.image._aspectRatio(this),
                                i = this; if (e.data(this, "processed")) o.image._scale(i, t), o.image._center(i, t);
                            else { var n = new Image;
                                n.onload = function() { o.image._scale(i, t), o.image._center(i, t), e.data(i, "processed", !0) }, n.src = this.src } }) }, children: function() { var t = o.$container.children();
                        t.is("img") && (t.each(function() { if (e(this).is("img")) { e(this).wrap("<div>"); var t = e(this).attr("id");
                                e(this).removeAttr("id"), e(this).parent().attr("id", t) } }), t = o.$container.children()), o.init || t.css({ display: "none", left: 2 * o.width }), t.css({ position: "absolute", overflow: "hidden", height: "100%", width: o.width, top: 0, zIndex: 0 }) } },
                u = { slide: function(t, e) { var i = o.$container.children(),
                            n = i.eq(t.upcoming_slide);
                        n.css({ left: t.upcoming_position, display: "block" }), o.$control.animate({ left: t.offset }, o.options.animation_speed, o.options.animation_easing, function() { o.size() > 1 && (o.$control.css({ left: -o.width }), i.eq(t.upcoming_slide).css({ left: o.width, zIndex: 2 }), t.outgoing_slide >= 0 && i.eq(t.outgoing_slide).css({ left: o.width, display: "none", zIndex: 0 })), e() }) }, fade: function(t, e) { var i = this,
                            n = i.$container.children(),
                            o = n.eq(t.outgoing_slide),
                            a = n.eq(t.upcoming_slide);
                        a.css({ left: this.width, opacity: 0, display: "block" }).animate({ opacity: 1 }, i.options.animation_speed, i.options.animation_easing), o.animate({ opacity: 0 }), i.$control.animate({ opacity: 1, zIndex: 2, display: "block" }, i.options.animation_speed, i.options.animation_easing, function() { i.size() > 1 && (i.$control.css({ left: -i.width }), n.eq(t.upcoming_slide).css({ zIndex: 2 }), t.outgoing_slide >= 0 && n.eq(t.outgoing_slide).css({ opacity: 1, display: "none", zIndex: 0 })), e() }) } };
            u = e.extend(u, e.fn.superslides.fx); var d = { _centerY: function(t) { var i = e(t);
                        i.css({ top: (o.height - i.height()) / 2 }) }, _centerX: function(t) { var i = e(t);
                        i.css({ left: (o.width - i.width()) / 2 }) }, _center: function(t) { o.image._centerX(t), o.image._centerY(t) }, _aspectRatio: function(t) { if (!t.naturalHeight && !t.naturalWidth) { var e = new Image;
                            e.src = t.src, t.naturalHeight = e.height, t.naturalWidth = e.width } return t.naturalHeight / t.naturalWidth }, _scale: function(t, i) { i = i || o.image._aspectRatio(t); var n = o.height / o.width,
                            a = e(t);
                        n > i ? a.css({ height: o.height, width: o.height / i }) : a.css({ height: o.width * i, width: o.width }) } },
                c = { _setCurrent: function(t) { if (o.$pagination) { var e = o.$pagination.children();
                            e.removeClass("current"), e.eq(t).addClass("current") } }, _addItem: function(t) { var i = t + 1,
                            n = i,
                            a = o.$container.children().eq(t),
                            r = a.attr("id");
                        r && (n = r); var s = e("<a>", { href: "#" + n, text: n });
                        s.appendTo(o.$pagination) }, _setup: function() { if (o.options.pagination && 1 !== o.size()) { var t = e("<nav>", { "class": o.options.elements.pagination.replace(/^\./, "") });
                            o.$pagination = t.appendTo(o.$el); for (var i = 0; i < o.size(); i++) o.pagination._addItem(i) } }, _events: function() { o.$el.on("click", o.options.elements.pagination + " a", function(t) { t.preventDefault(); var e, i = o._parseHash(this.hash);
                            e = o._upcomingSlide(i, !0), e !== o.current && o.animate(e, function() { o.start() }) }) } }; return this.css = l, this.image = d, this.pagination = c, this.fx = u, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(a).parent(".slides-control"), o._findPositions(), o.width = o._findWidth(), o.height = o._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), s() }, i.prototype = { _findWidth: function() { return e(this.options.inherit_width_from).width() }, _findHeight: function() { return e(this.options.inherit_height_from).height() }, _findMultiplier: function() { return 1 === this.size() ? 1 : 3 }, _upcomingSlide: function(t, e) { if (e && !isNaN(t) && (t -= 1), /next/.test(t)) return this._nextInDom(); if (/prev/.test(t)) return this._prevInDom(); if (/\d/.test(t)) return +t; if (t && /\w/.test(t)) { var i = this._findSlideById(t); return i >= 0 ? i : 0 } return 0 }, _findSlideById: function(t) { return this.$container.find("#" + t).index() }, _findPositions: function(t, e) { e = e || this, void 0 === t && (t = -1), e.current = t, e.next = e._nextInDom(), e.prev = e._prevInDom() }, _nextInDom: function() { var t = this.current + 1; return t === this.size() && (t = 0), t }, _prevInDom: function() { var t = this.current - 1; return t < 0 && (t = this.size() - 1), t }, _parseHash: function(e) { return e = e || t.location.hash, e = e.replace(/^#/, ""), e && !isNaN(+e) && (e = +e), e }, size: function() { return this.$container.children().length }, destroy: function() { return this.$el.removeData() }, update: function() { this.css.children(), this.css.containers(), this.css.images(), this.pagination._addItem(this.size()), this._findPositions(this.current), this.$el.trigger("updated.slides") }, stop: function() { clearInterval(this.play_id), delete this.play_id, this.$el.trigger("stopped.slides") }, start: function() { var i = this;
                i.options.hashchange ? e(t).trigger("hashchange") : this.animate(), this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function() { i.animate() }, this.options.play)), this.$el.trigger("started.slides") }, animate: function(e, i) { var n = this,
                    o = {}; if (!(this.animating || (this.animating = !0, void 0 === e && (e = "next"), o.upcoming_slide = this._upcomingSlide(e), o.upcoming_slide >= this.size()))) { if (o.outgoing_slide = this.current, o.upcoming_position = 2 * this.width, o.offset = -o.upcoming_position, ("prev" === e || e < o.outgoing_slide) && (o.upcoming_position = 0, o.offset = 0), n.size() > 1 && n.pagination._setCurrent(o.upcoming_slide), n.options.hashchange) { var a = o.upcoming_slide + 1,
                            r = n.$container.children(":eq(" + o.upcoming_slide + ")").attr("id");
                        r ? t.location.hash = r : t.location.hash = a } 1 === n.size() && (n.stop(), n.options.play = 0, n.options.animation_speed = 0, o.upcoming_slide = 0, o.outgoing_slide = -1), n.$el.trigger("animating.slides", [o]), n.animation(o, function() { n._findPositions(o.upcoming_slide, n), "function" == typeof i && i(), n.animating = !1, n.$el.trigger("animated.slides"), n.init || (n.$el.trigger("init.slides"), n.init = !0, n.$container.fadeIn("fast")) }) } } }, e.fn[n] = function(t, o) { var a = []; return this.each(function() { var r, s, l; if (r = e(this), s = r.data(n), l = "object" == typeof t && t, s || (a = r.data(n, s = new i(this, l))), "string" == typeof t && (a = s[t], "function" == typeof a)) return a = a.call(s, o) }), a }, e.fn[n].fx = {} }(this, jQuery),
    /* ===========================================================
     * jquery-simple-text-rotator.js v1
     * ===========================================================
     * Copyright 2013 Pete Rojwongsuriya.
     * http://www.thepetedesign.com
     *
     * A very simple and light weight jQuery plugin that 
     * allows you to rotate multiple text without changing 
     * the layout
     * https://github.com/peachananr/simple-text-rotator
     *
     * ========================================================== */
    ! function(t) { var e = { animation: "dissolve", separator: ",", speed: 2e3 };
        t.fx.step.textShadowBlur = function(e) { t(e.elem).prop("textShadowBlur", e.now).css({ textShadow: "0 0 " + Math.floor(e.now) + "px black" }) }, t.fn.textrotator = function(i) { var n = t.extend({}, e, i); return this.each(function() { var e = t(this),
                    i = [];
                t.each(e.text().split(n.separator), function(t, e) { i.push(e) }), e.text(i[0]); var o = function() { switch (n.animation) {
                        case "dissolve":
                            e.animate({ textShadowBlur: 20, opacity: 0 }, 500, function() { a = t.inArray(e.text(), i), a + 1 == i.length && (a = -1), e.text(i[a + 1]).animate({ textShadowBlur: 0, opacity: 1 }, 500) }); break;
                        case "flip":
                            e.find(".back").length > 0 && e.html(e.find(".back").html()); var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({ "-webkit-transform": " rotateY(-180deg)", "-moz-transform": " rotateY(-180deg)", "-o-transform": " rotateY(-180deg)", transform: " rotateY(-180deg)" }); break;
                        case "flipUp":
                            e.find(".back").length > 0 && e.html(e.find(".back").html()); var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({ "-webkit-transform": " rotateX(-180deg)", "-moz-transform": " rotateX(-180deg)", "-o-transform": " rotateX(-180deg)", transform: " rotateX(-180deg)" }); break;
                        case "flipCube":
                            e.find(".back").length > 0 && e.html(e.find(".back").html()); var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({ "-webkit-transform": " rotateY(180deg)", "-moz-transform": " rotateY(180deg)", "-o-transform": " rotateY(180deg)", transform: " rotateY(180deg)" }); break;
                        case "flipCubeUp":
                            e.find(".back").length > 0 && e.html(e.find(".back").html()); var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({ "-webkit-transform": " rotateX(180deg)", "-moz-transform": " rotateX(180deg)", "-o-transform": " rotateX(180deg)", transform: " rotateX(180deg)" }); break;
                        case "spin":
                            e.find(".rotating").length > 0 && e.html(e.find(".rotating").html()), a = t.inArray(e.text(), i), a + 1 == i.length && (a = -1), e.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(i[a + 1]).show().css({ "-webkit-transform": " rotate(0) scale(1)", "-moz-transform": "rotate(0) scale(1)", "-o-transform": "rotate(0) scale(1)", transform: "rotate(0) scale(1)" }); break;
                        case "fade":
                            e.fadeOut(n.speed, function() { a = t.inArray(e.text(), i), a + 1 == i.length && (a = -1), e.text(i[a + 1]).fadeIn(n.speed) }) } };
                setInterval(o, n.speed) }) } }(window.jQuery),
    /*!
     * FitVids 1.1
     *
     * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
     * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
     * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
     *
     */
    function(t) { "use strict";
        t.fn.fitVids = function(e) { var i = { customSelector: null, ignore: null }; if (!document.getElementById("fit-vids-style")) { var n = document.head || document.getElementsByTagName("head")[0],
                    o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    a = document.createElement("div");
                a.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", n.appendChild(a.childNodes[1]) } return e && t.extend(i, e), this.each(function() { var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                i.customSelector && e.push(i.customSelector); var n = ".fitvidsignore";
                i.ignore && (n = n + ", " + i.ignore); var o = t(this).find(e.join(","));
                o = o.not("object object"), o = o.not(n), o.each(function() { var e = t(this); if (!(e.parents(n).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) { e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16)); var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                            o = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                            a = i / o; if (!e.attr("id")) { var r = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", r) } e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), e.removeAttr("height").removeAttr("width") } }) }) } }(window.jQuery || window.Zepto),
    function(t) { var e, i, n, o, a, r, s, l = "Close",
            u = "BeforeClose",
            d = "AfterClose",
            c = "BeforeAppend",
            p = "MarkupParse",
            m = "Open",
            f = "Change",
            h = "mfp",
            g = "." + h,
            v = "mfp-ready",
            y = "mfp-removing",
            w = "mfp-prevent-close",
            b = function() {},
            I = !!window.jQuery,
            x = t(window),
            C = function(t, i) { e.ev.on(h + t + g, i) },
            _ = function(e, i, n, o) { var a = document.createElement("div"); return a.className = "mfp-" + e, n && (a.innerHTML = n), o ? i && i.appendChild(a) : (a = t(a), i && a.appendTo(i)), a },
            k = function(i, n) { e.ev.triggerHandler(h + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n])) },
            S = function(i) { return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = i), e.currTemplate.closeBtn },
            T = function() { t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e) },
            E = function() { var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== t.transition) return !0; for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0; return !1 };
        b.prototype = { constructor: b, init: function() { var i = navigator.appVersion;
                e.isIE7 = i.indexOf("MSIE 7.") !== -1, e.isIE8 = i.indexOf("MSIE 8.") !== -1, e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = E(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = t(document), e.popupsCache = {} }, open: function(i) { n || (n = t(document.body)); var a; if (i.isObj === !1) { e.items = i.items.toArray(), e.index = 0; var s, l = i.items; for (a = 0; a < l.length; a++)
                        if (s = l[a], s.parsed && (s = s.el[0]), s === i.el[0]) { e.index = a; break } } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0; if (e.isOpen) return void e.updateItemHTML();
                e.types = [], r = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = _("bg").on("click" + g, function() { e.close() }), e.wrap = _("wrap").attr("tabindex", -1).on("click" + g, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = _("container", e.wrap)), e.contentContainer = _("content"), e.st.preloader && (e.preloader = _("preloader", e.container, e.st.tLoading)); var u = t.magnificPopup.modules; for (a = 0; a < u.length; a++) { var d = u[a];
                    d = d.charAt(0).toUpperCase() + d.slice(1), e["init" + d].call(e) } k("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (C(p, function(t, e, i, n) { i.close_replaceWith = S(n.type) }), r += " mfp-close-btn-in") : e.wrap.append(S())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: x.scrollTop(), position: "absolute" }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: o.height(), position: "absolute" }), e.st.enableEscapeKey && o.on("keyup" + g, function(t) { 27 === t.keyCode && e.close() }), x.on("resize" + g, function() { e.updateSize() }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r); var c = e.wH = x.height(),
                    f = {}; if (e.fixedContentPos && e._hasScrollBar(c)) { var h = e._getScrollbarSize();
                    h && (f.marginRight = h) } e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden"); var y = e.st.mainClass; return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), k("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || n), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(v), e._setFocus()) : e.bgOverlay.addClass(v), o.on("focusin" + g, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(c), k(m), i }, close: function() { e.isOpen && (k(u), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) }, _close: function() { k(l); var i = y + " " + v + " "; if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) { var n = { marginRight: "" };
                    e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n) } o.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, k(d) }, updateSize: function(t) { if (e.isIOS) { var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n } else e.wH = t || x.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), k("Resize") }, updateItemHTML: function() { var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index)); var n = i.type; if (k("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) { var o = !!e.st[n] && e.st[n].markup;
                    k("FirstMarkupParse", o), o ? e.currTemplate[n] = t(o) : e.currTemplate[n] = !0 } a && a !== i.type && e.container.removeClass("mfp-" + a + "-holder"); var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(r, n), i.preloaded = !0, k(f, i), a = i.type, e.container.prepend(e.contentContainer), k("AfterChange") }, appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(S()) : e.content = t : e.content = "", k(c), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) }, parseEl: function(i) { var n, o = e.items[i]; if (o.tagName ? o = { el: t(o) } : (n = o.type, o = { data: o, src: o.src }), o.el) { for (var a = e.types, r = 0; r < a.length; r++)
                        if (o.el.hasClass("mfp-" + a[r])) { n = a[r]; break }
                    o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href")) } return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, k("ElementParse", o), e.items[i] }, addGroup: function(t, i) { var n = function(n) { n.mfpEl = this, e._openClick(n, t, i) };
                i || (i = {}); var o = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n))) }, _openClick: function(i, n, o) { var a = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick; if (a || 2 !== i.which && !i.ctrlKey && !i.metaKey) { var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn; if (r)
                        if (t.isFunction(r)) { if (!r.call(e)) return !0 }
                    else if (x.width() < r) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o) } }, updateStatus: function(t, n) { if (e.preloader) { i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading); var o = { status: t, text: n };
                    k("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t } }, _checkIfClose: function(i) { if (!t(i).hasClass(w)) { var n = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick; if (n && o) return !0; if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0; if (i === e.content[0] || t.contains(e.content[0], i)) { if (n) return !0 } else if (o && t.contains(document, i)) return !0; return !1 } }, _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) }, _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) }, _hasScrollBar: function(t) { return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || x.height()) }, _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus() }, _onFocusIn: function(i) { if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target)) return e._setFocus(), !1 }, _parseMarkup: function(e, i, n) { var o;
                n.data && (i = t.extend(n.data, i)), k(p, [e, i, n]), t.each(i, function(t, i) { if (void 0 === i || i === !1) return !0; if (o = t.split("_"), o.length > 1) { var n = e.find(g + "-" + o[0]); if (n.length > 0) { var a = o[1]; "replaceWith" === a ? n[0] !== i[0] && n.replaceWith(i) : "img" === a ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i) } } else e.find(g + "-" + t).html(i) }) }, _getScrollbarSize: function() { if (void 0 === e.scrollbarSize) { var t = document.createElement("div");
                    t.id = "mfp-sbm", t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t) } return e.scrollbarSize } }, t.magnificPopup = { instance: null, proto: b.prototype, modules: [], open: function(e, i) { return T(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) }, close: function() { return t.magnificPopup.instance && t.magnificPopup.instance.close() }, registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, t.fn.magnificPopup = function(i) { T(); var n = t(this); if ("string" == typeof i)
                if ("open" === i) { var o, a = I ? n.data("magnificPopup") : n[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    a.items ? o = a.items[r] : (o = n, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), e._openClick({ mfpEl: o }, n, a) }
            else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), I ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i); return n }; var L, M, P, z = "inline",
            A = function() { P && (M.after(P.addClass(L)).detach(), P = null) };
        t.magnificPopup.registerModule(z, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { e.types.push(z), C(l + "." + z, function() { A() }) }, getInline: function(i, n) { if (A(), i.src) { var o = e.st.inline,
                            a = t(i.src); if (a.length) { var r = a[0].parentNode;
                            r && r.tagName && (M || (L = o.hiddenClass, M = _(L), L = "mfp-" + L), P = a.after(M).detach().removeClass(L)), e.updateStatus("ready") } else e.updateStatus("error", o.tNotFound), a = t("<div>"); return i.inlineElement = a, a } return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n } } }); var $, O = "ajax",
            j = function() { $ && n.removeClass($) },
            D = function() { j(), e.req && e.req.abort() };
        t.magnificPopup.registerModule(O, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { e.types.push(O), $ = e.st.ajax.cursor, C(l + "." + O, D), C("BeforeChange." + O, D) }, getAjax: function(i) { $ && n.addClass($), e.updateStatus("loading"); var o = t.extend({ url: i.src, success: function(n, o, a) { var r = { data: n, xhr: a };
                            k("ParseAjax", r), e.appendContent(t(r.data), O), i.finished = !0, j(), e._setFocus(), setTimeout(function() { e.wrap.addClass(v) }, 16), e.updateStatus("ready"), k("AjaxContentAdded") }, error: function() { j(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) } }, e.st.ajax.settings); return e.req = t.ajax(o), "" } } }); var W, B = function(i) { if (i.data && void 0 !== i.data.title) return i.data.title; var n = e.st.image.titleSrc; if (n) { if (t.isFunction(n)) return n.call(e, i); if (i.el) return i.el.attr(n) || "" } return "" };
        t.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() { var t = e.st.image,
                        i = ".image";
                    e.types.push("image"), C(m + i, function() { "image" === e.currItem.type && t.cursor && n.addClass(t.cursor) }), C(l + i, function() { t.cursor && n.removeClass(t.cursor), x.off("resize" + g) }), C("Resize" + i, e.resizeImage), e.isLowIE && C("AfterChange", e.resizeImage) }, resizeImage: function() { var t = e.currItem; if (t && t.img && e.st.image.verticalFit) { var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i) } }, _onImageHasSize: function(t) { t.img && (t.hasSize = !0, W && clearInterval(W), t.isCheckingImgSize = !1, k("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) }, findImageSize: function(t) { var i = 0,
                        n = t.img[0],
                        o = function(a) { W && clearInterval(W), W = setInterval(function() { return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(W), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500))) }, a) };
                    o(1) }, getImage: function(i, n) { var o = 0,
                        a = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, k("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(a, 100) : r())) },
                        r = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                        s = e.st.image,
                        l = n.find(".mfp-img"); if (l.length) { var u = document.createElement("img");
                        u.className = "mfp-img", i.img = t(u).on("load.mfploader", a).on("error.mfploader", r), u.src = i.src, l.is("img") && (i.img = i.img.clone()), u = i.img[0], u.naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1) } return e._parseMarkup(n, { title: B(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? (W && clearInterval(W), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n) } } }); var N, F = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
        t.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) { return t.is("img") ? t : t.find("img") } }, proto: { initZoom: function() { var t, i = e.st.zoom,
                        n = ".zoom"; if (i.enabled && e.supportsTransition) { var o, a, r = i.duration,
                            s = function(t) { var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    a = "transition"; return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n, e.css(o), e },
                            d = function() { e.content.css("visibility", "visible") };
                        C("BuildControls" + n, function() { if (e._allowZoom()) { if (clearTimeout(o), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void d();
                                a = s(t), a.css(e._getOffset()), e.wrap.append(a), o = setTimeout(function() { a.css(e._getOffset(!0)), o = setTimeout(function() { d(), setTimeout(function() { a.remove(), t = a = null, k("ZoomAnimationEnded") }, 16) }, r) }, 16) } }), C(u + n, function() { if (e._allowZoom()) { if (clearTimeout(o), e.st.removalDelay = r, !t) { if (t = e._getItemToZoom(), !t) return;
                                    a = s(t) } a.css(e._getOffset(!0)), e.wrap.append(a), e.content.css("visibility", "hidden"), setTimeout(function() { a.css(e._getOffset()) }, 16) } }), C(l + n, function() { e._allowZoom() && (d(), a && a.remove(), t = null) }) } }, _allowZoom: function() { return "image" === e.currItem.type }, _getItemToZoom: function() { return !!e.currItem.hasSize && e.currItem.img }, _getOffset: function(i) { var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem); var o = n.offset(),
                        a = parseInt(n.css("padding-top"), 10),
                        r = parseInt(n.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - a; var s = { width: n.width(), height: (I ? n.innerHeight() : n[0].offsetHeight) - r - a }; return F() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s } } }); var H = "iframe",
            R = "//about:blank",
            q = function(t) { if (e.currTemplate[H]) { var i = e.currTemplate[H].find("iframe");
                    i.length && (t || (i[0].src = R), e.isIE8 && i.css("display", t ? "block" : "none")) } };
        t.magnificPopup.registerModule(H, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { e.types.push(H), C("BeforeChange", function(t, e, i) { e !== i && (e === H ? q() : i === H && q(!0)) }), C(l + "." + H, function() { q() }) }, getIframe: function(i, n) { var o = i.src,
                        a = e.st.iframe;
                    t.each(a.patterns, function() { if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1 }); var r = {}; return a.srcAction && (r[a.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n } } }); var V = function(t) { var i = e.items.length; return t > i - 1 ? t - i : t < 0 ? i + t : t },
            Y = function(t, e, i) { return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
        t.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() { var i = e.st.gallery,
                        n = ".mfp-gallery",
                        a = Boolean(t.fn.mfpFastClick); return e.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", C(m + n, function() { i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() { if (e.items.length > 1) return e.next(), !1 }), o.on("keydown" + n, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), C("UpdateStatus" + n, function(t, i) { i.text && (i.text = Y(i.text, e.currItem.index, e.items.length)) }), C(p + n, function(t, n, o, a) { var r = e.items.length;
                        o.counter = r > 1 ? Y(i.tCounter, a.index, r) : "" }), C("BuildControls" + n, function() { if (e.items.length > 1 && i.arrows && !e.arrowLeft) { var n = i.arrowMarkup,
                                o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(w),
                                r = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(w),
                                s = a ? "mfpFastClick" : "click";
                            o[s](function() { e.prev() }), r[s](function() { e.next() }), e.isIE7 && (_("b", o[0], !1, !0), _("a", o[0], !1, !0), _("b", r[0], !1, !0), _("a", r[0], !1, !0)), e.container.append(o.add(r)) } }), C(f + n, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void C(l + n, function() { o.off(n), e.wrap.off("click" + n), e.arrowLeft && a && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null })) }, next: function() { e.direction = !0, e.index = V(e.index + 1), e.updateItemHTML() }, prev: function() { e.direction = !1, e.index = V(e.index - 1), e.updateItemHTML() }, goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() }, preloadNearbyImages: function() { var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        o = Math.min(i[1], e.items.length); for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t); for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t) }, _preloadItem: function(i) { if (i = V(i), !e.items[i].preloaded) { var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), k("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() { n.hasSize = !0 }).on("error.mfploader", function() { n.hasSize = !0, n.loadError = !0, k("LazyLoadError", n) }).attr("src", n.src)), n.preloaded = !0 } } } }); var U = "retina";
        t.magnificPopup.registerModule(U, { options: { replaceSrc: function(t) { return t.src.replace(/\.\w+$/, function(t) { return "@2x" + t }) }, ratio: 1 }, proto: { initRetina: function() { if (window.devicePixelRatio > 1) { var t = e.st.retina,
                                i = t.ratio;
                            i = isNaN(i) ? i() : i, i > 1 && (C("ImageHasSize." + U, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), C("ElementParse." + U, function(e, n) { n.src = t.replaceSrc(n, i) })) } } } }),
            function() { var e = 1e3,
                    i = "ontouchstart" in window,
                    n = function() { x.off("touchmove" + a + " touchend" + a) },
                    o = "mfpFastClick",
                    a = "." + o;
                t.fn.mfpFastClick = function(o) { return t(this).each(function() { var r, s = t(this); if (i) { var l, u, d, c, p, m;
                            s.on("touchstart" + a, function(t) { c = !1, m = 1, p = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], u = p.clientX, d = p.clientY, x.on("touchmove" + a, function(t) { p = t.originalEvent ? t.originalEvent.touches : t.touches, m = p.length, p = p[0], (Math.abs(p.clientX - u) > 10 || Math.abs(p.clientY - d) > 10) && (c = !0, n()) }).on("touchend" + a, function(t) { n(), c || m > 1 || (r = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function() { r = !1 }, e), o()) }) }) } s.on("click" + a, function() { r || o() }) }) }, t.fn.destroyMfpFastClick = function() { t(this).off("touchstart" + a + " click" + a), i && x.off("touchmove" + a + " touchend" + a) } }(), T() }(window.jQuery || window.Zepto),
    /**!
     * easy-pie-chart
     * Lightweight plugin to render simple, animated and retina optimized pie charts
     *
     * @license 
     * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
     * @version 2.1.7
     **/
    function(t, e) { "function" == typeof define && define.amd ? define(["jquery"], function(t) { return e(t) }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(this, function(t) { var e = function(t, e) { var i, n = document.createElement("canvas");
                t.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n); var o = n.getContext("2d");
                n.width = n.height = e.size; var a = 1;
                window.devicePixelRatio > 1 && (a = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * a, o.scale(a, a)), o.translate(e.size / 2, e.size / 2), o.rotate((-.5 + e.rotate / 180) * Math.PI); var r = (e.size - e.lineWidth) / 2;
                e.scaleColor && e.scaleLength && (r -= e.scaleLength + 2), Date.now = Date.now || function() { return +new Date }; var s = function(t, e, i) { i = Math.min(Math.max(-1, i || 0), 1); var n = i <= 0;
                        o.beginPath(), o.arc(0, 0, r, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke() },
                    l = function() { var t, i;
                        o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save(); for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), o.fillRect(-e.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
                        o.restore() },
                    u = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) } }(),
                    d = function() { e.scaleColor && l(), e.trackColor && s(e.trackColor, e.trackWidth || e.lineWidth, 1) };
                this.getCanvas = function() { return n }, this.getCtx = function() { return o }, this.clear = function() { o.clearRect(e.size / -2, e.size / -2, e.size, e.size) }, this.draw = function(t) { e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (d(), i = o.getImageData(0, 0, e.size * a, e.size * a)) : (this.clear(), d()) : this.clear(), o.lineCap = e.lineCap; var n;
                    n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, s(n, e.lineWidth, t / 100) }.bind(this), this.animate = function(t, i) { var n = Date.now();
                    e.onStart(t, i); var o = function() { var a = Math.min(Date.now() - n, e.animate.duration),
                            r = e.easing(this, a, t, i - t, e.animate.duration);
                        this.draw(r), e.onStep(t, i, r), a >= e.animate.duration ? e.onStop(t, i) : u(o) }.bind(this);
                    u(o) }.bind(this) },
            i = function(t, i) { var n = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, trackWidth: void 0, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function(t, e, i, n, o) { return e /= o / 2, e < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i }, onStart: function(t, e) {}, onStep: function(t, e, i) {}, onStop: function(t, e) {} }; if ("undefined" != typeof e) n.renderer = e;
                else { if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer } var o = {},
                    a = 0,
                    r = function() { this.el = t, this.options = o; for (var e in n) n.hasOwnProperty(e) && (o[e] = i && "undefined" != typeof i[e] ? i[e] : n[e], "function" == typeof o[e] && (o[e] = o[e].bind(this))); "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = { duration: o.animate, enabled: !0 }), "boolean" != typeof o.animate || o.animate || (o.animate = { duration: 1e3, enabled: o.animate }), this.renderer = new o.renderer(t, o), this.renderer.draw(a), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent"))) }.bind(this);
                this.update = function(t) { return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(a, t) : this.renderer.draw(t), a = t, this }.bind(this), this.disableAnimation = function() { return o.animate.enabled = !1, this }, this.enableAnimation = function() { return o.animate.enabled = !0, this }, r() };
        t.fn.easyPieChart = function(e) { return this.each(function() { var n;
                t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n))) }) } }),
    /*
     *  jQuery OwlCarousel v1.3.3
     *
     *  Copyright (c) 2013 Bartosz Wojciechowski
     *  http://www.owlgraphic.com/owlcarousel/
     *
     *  Licensed under MIT
     *
     */
    "function" != typeof Object.create && (Object.create = function(t) {
        function e() {} return e.prototype = t, new e }),
    function(t, e, i) { var n = { init: function(e, i) { var n = this;
                n.$elem = t(i), n.options = t.extend({}, t.fn.owlCarousel.options, n.$elem.data(), e), n.userOptions = e, n.loadContent() }, loadContent: function() {
                function e(t) { var e, i = ""; if ("function" == typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [t]);
                    else { for (e in t.owl) t.owl.hasOwnProperty(e) && (i += t.owl[e].item);
                        n.$elem.html(i) } n.logIn() } var i, n = this; "function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath ? (i = n.options.jsonPath, t.getJSON(i, e)) : n.logIn() }, logIn: function() { var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")), t.$elem.data("owl-originalClasses", t.$elem.attr("class")), t.$elem.css({ opacity: 0 }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars() }, setVars: function() { var t = this; return 0 !== t.$elem.children().length && (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup()) }, onStartup: function() { var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem]) }, eachMoveUpdate: function() { var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem]) }, updateVars: function() { var t = this; "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem]) }, reload: function() { var t = this;
                e.setTimeout(function() { t.updateVars() }, 0) }, watchVisibility: function() { var t = this; return t.$elem.is(":visible") === !1 && (t.$elem.css({ opacity: 0 }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() { t.$elem.is(":visible") && (t.reload(), t.$elem.animate({ opacity: 1 }, 200), e.clearInterval(t.checkVisible)) }, 500))) }, wrapItems: function() { var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block") }, baseClass: function() { var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    i = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), i || t.$elem.addClass(t.options.theme) }, updateItems: function() { var e, i, n = this; if (n.options.responsive === !1) return !1; if (n.options.singleItem === !0) return n.options.items = n.orignalItems = 1, n.options.itemsCustom = !1, n.options.itemsDesktop = !1, n.options.itemsDesktopSmall = !1, n.options.itemsTablet = !1, n.options.itemsTabletSmall = !1, n.options.itemsMobile = !1, !1; if (e = t(n.options.responsiveBaseWidth).width(), e > (n.options.itemsDesktop[0] || n.orignalItems) && (n.options.items = n.orignalItems), n.options.itemsCustom !== !1)
                    for (n.options.itemsCustom.sort(function(t, e) { return t[0] - e[0] }), i = 0; i < n.options.itemsCustom.length; i += 1) n.options.itemsCustom[i][0] <= e && (n.options.items = n.options.itemsCustom[i][1]);
                else e <= n.options.itemsDesktop[0] && n.options.itemsDesktop !== !1 && (n.options.items = n.options.itemsDesktop[1]), e <= n.options.itemsDesktopSmall[0] && n.options.itemsDesktopSmall !== !1 && (n.options.items = n.options.itemsDesktopSmall[1]), e <= n.options.itemsTablet[0] && n.options.itemsTablet !== !1 && (n.options.items = n.options.itemsTablet[1]), e <= n.options.itemsTabletSmall[0] && n.options.itemsTabletSmall !== !1 && (n.options.items = n.options.itemsTabletSmall[1]), e <= n.options.itemsMobile[0] && n.options.itemsMobile !== !1 && (n.options.items = n.options.itemsMobile[1]);
                n.options.items > n.itemsAmount && n.options.itemsScaleUp === !0 && (n.options.items = n.itemsAmount) }, response: function() { var i, n, o = this; return o.options.responsive === !0 && (n = t(e).width(), o.resizer = function() { t(e).width() !== n && (o.options.autoPlay !== !1 && e.clearInterval(o.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function() { n = t(e).width(), o.updateVars() }, o.options.responsiveRefreshRate)) }, void t(e).resize(o.resizer)) }, updatePosition: function() { var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp() }, appendItemsSizes: function() { var e = this,
                    i = 0,
                    n = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(o) { var a = t(this);
                    a.css({ width: e.itemWidth }).data("owl-item", Number(o)), o % e.options.items !== 0 && o !== n || o > n || (i += 1), a.data("owl-roundPages", i) }) }, appendWrapperSizes: function() { var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({ width: 2 * e, left: 0 }), t.appendItemsSizes() }, calculateAll: function() { var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max() }, calculateWidth: function() { var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items) }, max: function() { var t = this,
                    e = (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth) * -1; return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e }, min: function() { return 0 }, loops: function() { var e, i, n, o = this,
                    a = 0,
                    r = 0; for (o.positionsInArray = [0], o.pagesInArray = [], e = 0; e < o.itemsAmount; e += 1) r += o.itemWidth, o.positionsInArray.push(-r), o.options.scrollPerPage === !0 && (i = t(o.$owlItems[e]), n = i.data("owl-roundPages"), n !== a && (o.pagesInArray[a] = o.positionsInArray[e], a = n)) }, buildControls: function() { var e = this;
                e.options.navigation !== !0 && e.options.pagination !== !0 || (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons() }, buildButtons: function() { var e = this,
                    i = t('<div class="owl-buttons"/>');
                e.owlControls.append(i), e.buttonPrev = t("<div/>", { "class": "owl-prev", html: e.options.navigationText[0] || "" }), e.buttonNext = t("<div/>", { "class": "owl-next", html: e.options.navigationText[1] || "" }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) { t.preventDefault() }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) { i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev() }) }, buildPagination: function() { var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) { i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0) }) }, updatePagination: function() { var e, i, n, o, a, r, s = this; if (s.options.pagination === !1) return !1; for (s.paginationWrapper.html(""), e = 0, i = s.itemsAmount - s.itemsAmount % s.options.items, o = 0; o < s.itemsAmount; o += 1) o % s.options.items === 0 && (e += 1, i === o && (n = s.itemsAmount - s.options.items), a = t("<div/>", { "class": "owl-page" }), r = t("<span></span>", { text: s.options.paginationNumbers === !0 ? e : "", "class": s.options.paginationNumbers === !0 ? "owl-numbers" : "" }), a.append(r), a.data("owl-page", i === o ? n : o), a.data("owl-roundPages", e), s.paginationWrapper.append(a));
                s.checkPagination() }, checkPagination: function() { var e = this; return e.options.pagination !== !1 && void e.paginationWrapper.find(".owl-page").each(function() { t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active")) }) }, checkNavigation: function() { var t = this; return t.options.navigation !== !1 && void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled")))) }, updateControls: function() { var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show()) }, destroyControls: function() { var t = this;
                t.owlControls && t.owlControls.remove() }, next: function(t) { var e = this; if (e.isTransition) return !1; if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) { if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind" } e.goTo(e.currentItem, t) }, prev: function(t) { var e = this; if (e.isTransition) return !1; if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) { if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind" } e.goTo(e.currentItem, t) }, goTo: function(t, i, n) { var o, a = this; return !a.isTransition && ("function" == typeof a.options.beforeMove && a.options.beforeMove.apply(this, [a.$elem]), t >= a.maximumItem ? t = a.maximumItem : t <= 0 && (t = 0), a.currentItem = a.owl.currentItem = t, a.options.transitionStyle !== !1 && "drag" !== n && 1 === a.options.items && a.browser.support3d === !0 ? (a.swapSpeed(0), a.browser.support3d === !0 ? a.transition3d(a.positionsInArray[t]) : a.css2slide(a.positionsInArray[t], 1), a.afterGo(), a.singleItemTransition(), !1) : (o = a.positionsInArray[t], a.browser.support3d === !0 ? (a.isCss3Finish = !1, i === !0 ? (a.swapSpeed("paginationSpeed"), e.setTimeout(function() { a.isCss3Finish = !0 }, a.options.paginationSpeed)) : "rewind" === i ? (a.swapSpeed(a.options.rewindSpeed), e.setTimeout(function() { a.isCss3Finish = !0 }, a.options.rewindSpeed)) : (a.swapSpeed("slideSpeed"), e.setTimeout(function() { a.isCss3Finish = !0 }, a.options.slideSpeed)), a.transition3d(o)) : i === !0 ? a.css2slide(o, a.options.paginationSpeed) : "rewind" === i ? a.css2slide(o, a.options.rewindSpeed) : a.css2slide(o, a.options.slideSpeed), void a.afterGo())) }, jumpTo: function(t) { var e = this; "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || t === -1 ? t = e.maximumItem : t <= 0 && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo() }, afterGo: function() { var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem]) }, stop: function() { var t = this;
                t.apStatus = "stop", e.clearInterval(t.autoPlayInterval) }, checkAp: function() { var t = this; "stop" !== t.apStatus && t.play() }, play: function() { var t = this; return t.apStatus = "play", t.options.autoPlay !== !1 && (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() { t.next(!0) }, t.options.autoPlay))) }, swapSpeed: function(t) { var e = this; "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t)) }, addCssSpeed: function(t) { return { "-webkit-transition": "all " + t + "ms ease", "-moz-transition": "all " + t + "ms ease", "-o-transition": "all " + t + "ms ease", transition: "all " + t + "ms ease" } }, removeTransition: function() { return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" } }, doTranslate: function(t) { return { "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)", "-moz-transform": "translate3d(" + t + "px, 0px, 0px)", "-o-transform": "translate3d(" + t + "px, 0px, 0px)", "-ms-transform": "translate3d(" + t + "px, 0px, 0px)", transform: "translate3d(" + t + "px, 0px,0px)" } }, transition3d: function(t) { var e = this;
                e.$owlWrapper.css(e.doTranslate(t)) }, css2move: function(t) { var e = this;
                e.$owlWrapper.css({ left: t }) }, css2slide: function(t, e) { var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({ left: t }, { duration: e || i.options.slideSpeed, complete: function() { i.isCssFinish = !0 } }) }, checkBrowser: function() { var t, n, o, a, r = this,
                    s = "translate3d(0px, 0px, 0px)",
                    l = i.createElement("div");
                l.style.cssText = "  -moz-transform:" + s + "; -ms-transform:" + s + "; -o-transform:" + s + "; -webkit-transform:" + s + "; transform:" + s, t = /translate3d\(0px, 0px, 0px\)/g, n = l.style.cssText.match(t), o = null !== n && 1 === n.length, a = "ontouchstart" in e || e.navigator.msMaxTouchPoints, r.browser = { support3d: o, isTouch: a } }, moveEvents: function() { var t = this;
                t.options.mouseDrag === !1 && t.options.touchDrag === !1 || (t.gestures(), t.disabledEvents()) }, eventTypes: function() { var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2] }, disabledEvents: function() { var e = this;
                e.$elem.on("dragstart.owl", function(t) { t.preventDefault() }), e.$elem.on("mousedown.disableTextSelect", function(e) { return t(e.target).is("input, textarea, select, option") }) }, gestures: function() {
                function n(t) { if (void 0 !== t.touches) return { x: t.touches[0].pageX, y: t.touches[0].pageY }; if (void 0 === t.touches) { if (void 0 !== t.pageX) return { x: t.pageX, y: t.pageY }; if (void 0 === t.pageX) return { x: t.clientX, y: t.clientY } } }

                function o(e) { "on" === e ? (t(i).on(l.ev_types.move, r), t(i).on(l.ev_types.end, s)) : "off" === e && (t(i).off(l.ev_types.move), t(i).off(l.ev_types.end)) }

                function a(i) { var a, r = i.originalEvent || i || e.event; if (3 === r.which) return !1; if (!(l.itemsAmount <= l.options.items)) { if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1; if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), a = t(this).position(), u.relativePos = a.left, u.offsetX = n(r).x - a.left, u.offsetY = n(r).y - a.top, o("on"), u.sliding = !1, u.targetElement = r.target || r.srcElement } }

                function r(o) { var a, r, s = o.originalEvent || o || e.event;
                    l.newPosX = n(s).x - u.offsetX, l.newPosY = n(s).y - u.offsetY, l.newRelativeX = l.newPosX - u.relativePos, "function" == typeof l.options.startDragging && u.dragging !== !0 && 0 !== l.newRelativeX && (u.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== s.preventDefault ? s.preventDefault() : s.returnValue = !1, u.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && u.sliding === !1 && t(i).off("touchmove.owl"), a = function() { return l.newRelativeX / 5 }, r = function() { return l.maximumPixels + l.newRelativeX / 5 }, l.newPosX = Math.max(Math.min(l.newPosX, a()), r()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX) }

                function s(i) { var n, a, r, s = i.originalEvent || i || e.event;
                    s.target = s.target || s.srcElement, u.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.newRelativeX < 0 ? l.dragDirection = l.owl.dragDirection = "left" : l.dragDirection = l.owl.dragDirection = "right", 0 !== l.newRelativeX && (n = l.getNewPosition(), l.goTo(n, !1, "drag"), u.targetElement === s.target && l.browser.isTouch !== !0 && (t(s.target).on("click.disable", function(e) { e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable") }), a = t._data(s.target, "events").click, r = a.pop(), a.splice(0, 0, r))), o("off") } var l = this,
                    u = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", a) }, getNewPosition: function() { var t = this,
                    e = t.closestItem(); return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e }, closestItem: function() { var e = this,
                    i = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    n = e.newPosX,
                    o = null; return t.each(i, function(a, r) { n - e.itemWidth / 20 > i[a + 1] && n - e.itemWidth / 20 < r && "left" === e.moveDirection() ? (o = r, e.options.scrollPerPage === !0 ? e.currentItem = t.inArray(o, e.positionsInArray) : e.currentItem = a) : n + e.itemWidth / 20 < r && n + e.itemWidth / 20 > (i[a + 1] || i[a] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (o = i[a + 1] || i[i.length - 1], e.currentItem = t.inArray(o, e.positionsInArray)) : (o = i[a + 1], e.currentItem = a + 1)) }), e.currentItem }, moveDirection: function() { var t, e = this; return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t }, customEvents: function() { var t = this;
                t.$elem.on("owl.next", function() { t.next() }), t.$elem.on("owl.prev", function() { t.prev() }), t.$elem.on("owl.play", function(e, i) { t.options.autoPlay = i, t.play(), t.hoverStatus = "play" }), t.$elem.on("owl.stop", function() { t.stop(), t.hoverStatus = "stop" }), t.$elem.on("owl.goTo", function(e, i) { t.goTo(i) }), t.$elem.on("owl.jumpTo", function(e, i) { t.jumpTo(i) }) }, stopOnHover: function() { var t = this;
                t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() { t.stop() }), t.$elem.on("mouseout", function() { "stop" !== t.hoverStatus && t.play() })) }, lazyLoad: function() { var e, i, n, o, a, r = this; if (r.options.lazyLoad === !1) return !1; for (e = 0; e < r.itemsAmount; e += 1) i = t(r.$owlItems[e]), "loaded" !== i.data("owl-loaded") && (n = i.data("owl-item"), o = i.find(".lazyOwl"), "string" == typeof o.data("src") ? (void 0 === i.data("owl-loaded") && (o.hide(), i.addClass("loading").data("owl-loaded", "checked")), a = r.options.lazyFollow !== !0 || n >= r.currentItem, a && n < r.currentItem + r.options.items && o.length && r.lazyPreload(i, o)) : i.data("owl-loaded", "loaded")) }, lazyPreload: function(t, i) {
                function n() { t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === r.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem]) }

                function o() { s += 1, r.completeImg(i.get(0)) || a === !0 ? n() : s <= 100 ? e.setTimeout(o, 100) : n() } var a, r = this,
                    s = 0; "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), a = !0) : i[0].src = i.data("src"), o() }, autoHeight: function() {
                function i() { var i = t(a.$owlItems[a.currentItem]).height();
                    a.wrapperOuter.css("height", i + "px"), a.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() { a.wrapperOuter.addClass("autoHeight") }, 0) }

                function n() { o += 1, a.completeImg(r.get(0)) ? i() : o <= 100 ? e.setTimeout(n, 100) : a.wrapperOuter.css("height", "") } var o, a = this,
                    r = t(a.$owlItems[a.currentItem]).find("img");
                void 0 !== r.get(0) ? (o = 0, n()) : i() }, completeImg: function(t) { var e; return !!t.complete && (e = typeof t.naturalWidth, "undefined" === e || 0 !== t.naturalWidth) }, onVisibleItems: function() { var e, i = this; for (i.options.addClassActive === !0 && i.$owlItems.removeClass("active"), i.visibleItems = [], e = i.currentItem; e < i.currentItem + i.options.items; e += 1) i.visibleItems.push(e), i.options.addClassActive === !0 && t(i.$owlItems[e]).addClass("active");
                i.owl.visibleItems = i.visibleItems }, transitionTypes: function(t) { var e = this;
                e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in" }, singleItemTransition: function() {
                function t(t) { return { position: "relative", left: t + "px" } } var e = this,
                    i = e.outClass,
                    n = e.inClass,
                    o = e.$owlItems.eq(e.currentItem),
                    a = e.$owlItems.eq(e.prevItem),
                    r = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    s = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": s + "px", "-moz-perspective-origin": s + "px", "perspective-origin": s + "px" }), a.css(t(r, 10)).addClass(i).on(l, function() { e.endPrev = !0, a.off(l), e.clearTransStyle(a, i) }), o.addClass(n).on(l, function() { e.endCurrent = !0, o.off(l), e.clearTransStyle(o, n) }) }, clearTransStyle: function(t, e) { var i = this;
                t.css({ position: "", left: "" }).removeClass(e), i.endPrev && i.endCurrent && (i.$owlWrapper.removeClass("owl-origin"), i.endPrev = !1, i.endCurrent = !1, i.isTransition = !1) }, owlStatus: function() { var t = this;
                t.owl = { userOptions: t.userOptions, baseElement: t.$elem, userItems: t.$userItems, owlItems: t.$owlItems, currentItem: t.currentItem, prevItem: t.prevItem, visibleItems: t.visibleItems, isTouch: t.browser.isTouch, browser: t.browser, dragDirection: t.dragDirection } }, clearEvents: function() { var n = this;
                n.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", n.resizer) }, unWrap: function() { var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses")) }, destroy: function() { var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData() }, reinit: function(e) { var i = this,
                    n = t.extend({}, i.userOptions, e);
                i.unWrap(), i.init(n, i.$elem) }, addItem: function(t, e) { var i, n = this; return !!t && (0 === n.$elem.children().length ? (n.$elem.append(t), n.setVars(), !1) : (n.unWrap(), i = void 0 === e || e === -1 ? -1 : e, i >= n.$userItems.length || i === -1 ? n.$userItems.eq(-1).after(t) : n.$userItems.eq(i).before(t), void n.setVars())) }, removeItem: function(t) { var e, i = this; return 0 !== i.$elem.children().length && (e = void 0 === t || t === -1 ? -1 : t, i.unWrap(), i.$userItems.eq(e).remove(), void i.setVars()) } };
        t.fn.owlCarousel = function(e) { return this.each(function() { if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0); var i = Object.create(n);
                i.init(e, this), t.data(this, "owlCarousel", i) }) }, t.fn.owlCarousel.options = { items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1e3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1, responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: e, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1 } }(jQuery, window, document),
    function(t, e) { "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : e() }(this, function() {
        function t(t) { if (null === h) { for (var e = t.length, i = 0, n = document.getElementById(a), o = "<ul>"; i < e;) o += "<li>" + t[i] + "</li>", i++;
                o += "</ul>", n.innerHTML = o } else h(t) }

        function e(t) { return t.replace(/<b[^>]*>(.*?)<\/b>/gi, function(t, e) { return e }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "") }

        function i(t) { for (var e = t.getElementsByTagName("a"), i = e.length - 1; i >= 0; i--) e[i].setAttribute("target", "_blank") }

        function n(t, e) { for (var i = [], n = new RegExp("(^| )" + e + "( |$)"), o = t.getElementsByTagName("*"), a = 0, r = o.length; a < r; a++) n.test(o[a].className) && i.push(o[a]); return i }

        function o(t) { if (void 0 !== t && t.innerHTML.indexOf("data-srcset") >= 0) { var e = t.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0]; return decodeURIComponent(e).split('"')[1] } } var a = "",
            r = 20,
            s = !0,
            l = [],
            u = !1,
            d = !0,
            c = !0,
            p = null,
            m = !0,
            f = !0,
            h = null,
            g = !0,
            v = !1,
            y = !0,
            w = "en",
            b = !0,
            I = !1,
            x = null,
            C = { fetch: function(t) { if (void 0 === t.maxTweets && (t.maxTweets = 20), void 0 === t.enableLinks && (t.enableLinks = !0), void 0 === t.showUser && (t.showUser = !0), void 0 === t.showTime && (t.showTime = !0), void 0 === t.dateFunction && (t.dateFunction = "default"), void 0 === t.showRetweet && (t.showRetweet = !0), void 0 === t.customCallback && (t.customCallback = null), void 0 === t.showInteraction && (t.showInteraction = !0), void 0 === t.showImages && (t.showImages = !1), void 0 === t.linksInNewWindow && (t.linksInNewWindow = !0), void 0 === t.showPermalinks && (t.showPermalinks = !0), void 0 === t.dataOnly && (t.dataOnly = !1), u) l.push(t);
                    else { u = !0, a = t.domId, r = t.maxTweets, s = t.enableLinks, c = t.showUser, d = t.showTime, f = t.showRetweet, p = t.dateFunction, h = t.customCallback, g = t.showInteraction, v = t.showImages, y = t.linksInNewWindow, b = t.showPermalinks, I = t.dataOnly; var e = document.getElementsByTagName("head")[0];
                        null !== x && e.removeChild(x), x = document.createElement("script"), x.type = "text/javascript", void 0 !== t.list ? x.src = "https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug=" + t.list.listSlug + "&screen_name=" + t.list.screenName + "&suppress_response_codes=true&lang=" + (t.lang || w) + "&rnd=" + Math.random() : void 0 !== t.profile ? x.src = "https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name=" + t.profile.screenName + "&suppress_response_codes=true&lang=" + (t.lang || w) + "&rnd=" + Math.random() : void 0 !== t.likes ? x.src = "https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name=" + t.likes.screenName + "&suppress_response_codes=true&lang=" + (t.lang || w) + "&rnd=" + Math.random() : x.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + t.id + "?&lang=" + (t.lang || w) + "&callback=__twttrf.callback&suppress_response_codes=true&rnd=" + Math.random(), e.appendChild(x) } }, callback: function(a) {
                    function h(t) { var e = t.getElementsByTagName("img")[0]; return e.src = e.getAttribute("data-src-2x"), t } if (void 0 === a || void 0 === a.body) return u = !1, void(l.length > 0 && (C.fetch(l[0]), l.splice(0, 1)));
                    a.body = a.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, ""), v || (a.body = a.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, "")), c || (a.body = a.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, "")); var w = document.createElement("div");
                    w.innerHTML = a.body, "undefined" == typeof w.getElementsByClassName && (m = !1); var x = [],
                        _ = [],
                        k = [],
                        S = [],
                        T = [],
                        E = [],
                        L = [],
                        M = 0; if (m)
                        for (var P = w.getElementsByClassName("timeline-Tweet"); M < P.length;) P[M].getElementsByClassName("timeline-Tweet-retweetCredit").length > 0 ? T.push(!0) : T.push(!1), (!T[M] || T[M] && f) && (x.push(P[M].getElementsByClassName("timeline-Tweet-text")[0]), E.push(P[M].getAttribute("data-tweet-id")), c && _.push(h(P[M].getElementsByClassName("timeline-Tweet-author")[0])), k.push(P[M].getElementsByClassName("dt-updated")[0]), L.push(P[M].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== P[M].getElementsByClassName("timeline-Tweet-media")[0] ? S.push(P[M].getElementsByClassName("timeline-Tweet-media")[0]) : S.push(void 0)), M++;
                    else
                        for (var P = n(w, "timeline-Tweet"); M < P.length;) n(P[M], "timeline-Tweet-retweetCredit").length > 0 ? T.push(!0) : T.push(!1), (!T[M] || T[M] && f) && (x.push(n(P[M], "timeline-Tweet-text")[0]), E.push(P[M].getAttribute("data-tweet-id")), c && _.push(h(n(P[M], "timeline-Tweet-author")[0])), k.push(n(P[M], "dt-updated")[0]), L.push(n(P[M], "timeline-Tweet-timestamp")[0]), void 0 !== n(P[M], "timeline-Tweet-media")[0] ? S.push(n(P[M], "timeline-Tweet-media")[0]) : S.push(void 0)), M++;
                    x.length > r && (x.splice(r, x.length - r), _.splice(r, _.length - r), k.splice(r, k.length - r), T.splice(r, T.length - r), S.splice(r, S.length - r), L.splice(r, L.length - r)); var z = [],
                        M = x.length,
                        A = 0; if (I)
                        for (; A < M;) z.push({ tweet: x[A].innerHTML, author: _[A] ? _[A].innerHTML : "Unknown Author", time: k[A].textContent, timestamp: k[A].getAttribute("datetime").replace("+0000", "Z").replace(/([\+\-])(\d\d)(\d\d)/, "$1$2:$3"), image: o(S[A]), rt: T[A], tid: E[A], permalinkURL: void 0 === L[A] ? "" : L[A].href }), A++;
                    else
                        for (; A < M;) { if ("string" != typeof p) { var $ = k[A].getAttribute("datetime"),
                                    O = new Date(k[A].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                                    j = p(O, $); if (k[A].setAttribute("aria-label", j), x[A].textContent)
                                    if (m) k[A].textContent = j;
                                    else { var D = document.createElement("p"),
                                            W = document.createTextNode(j);
                                        D.appendChild(W), D.setAttribute("aria-label", j), k[A] = D } else k[A].textContent = j } var B = "";
                            s ? (y && (i(x[A]), c && i(_[A])), c && (B += '<div class="user">' + e(_[A].innerHTML) + "</div>"), B += '<p class="tweet">' + e(x[A].innerHTML) + "</p>", d && (B += b ? '<p class="timePosted"><a href="' + L[A] + '">' + k[A].getAttribute("aria-label") + "</a></p>" : '<p class="timePosted">' + k[A].getAttribute("aria-label") + "</p>")) : x[A].textContent ? (c && (B += '<p class="user">' + _[A].textContent + "</p>"), B += '<p class="tweet">' + x[A].textContent + "</p>", d && (B += '<p class="timePosted">' + k[A].textContent + "</p>")) : (c && (B += '<p class="user">' + _[A].textContent + "</p>"), B += '<p class="tweet">' + x[A].textContent + "</p>", d && (B += '<p class="timePosted">' + k[A].textContent + "</p>")), g && (B += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + E[A] + '" class="twitter_reply_icon"' + (y ? ' target="_blank">' : ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + E[A] + '" class="twitter_retweet_icon"' + (y ? ' target="_blank">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + E[A] + '" class="twitter_fav_icon"' + (y ? ' target="_blank">' : ">") + "Favorite</a></p>"), v && void 0 !== S[A] && void 0 !== o(S[A]) && (B += '<div class="media"><img src="' + o(S[A]) + '" alt="Image from tweet" /></div>'), v ? z.push(B) : !v && x[A].textContent.length && z.push(B), A++ } t(z), u = !1, l.length > 0 && (C.fetch(l[0]), l.splice(0, 1)) } }; return window.__twttrf = C, window.twitterFetcher = C, C }),
    /*!
     * Name    : Just Another Parallax [Jarallax]
     * Version : 1.6.0
     * Author  : _nK http://nkdev.info
     * GitHub  : https://github.com/nk-o/jarallax
     */
    function(t) { "use strict";

        function e() { o = t.innerWidth || document.documentElement.clientWidth, a = t.innerHeight || document.documentElement.clientHeight }

        function i(t, e, i) { t.addEventListener ? t.addEventListener(e, i) : t.attachEvent("on" + e, function() { i.call(t) }) }

        function n(i) { t.requestAnimationFrame(function() { "scroll" !== i.type && e(); for (var t = 0, n = f.length; t < n; t++) "scroll" !== i.type && (f[t].coverImage(), f[t].clipContainer()), f[t].onScroll() }) } Date.now || (Date.now = function() { return (new Date).getTime() }), t.requestAnimationFrame || ! function() { for (var e = ["webkit", "moz"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) { var n = e[i];
                t.requestAnimationFrame = t[n + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"] } if (/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent) || !t.requestAnimationFrame || !t.cancelAnimationFrame) { var o = 0;
                t.requestAnimationFrame = function(t) { var e = Date.now(),
                        i = Math.max(o + 16, e); return setTimeout(function() { t(o = i) }, i - e) }, t.cancelAnimationFrame = clearTimeout } }(); var o, a, r = function() { if (!t.getComputedStyle) return !1; var e, i = document.createElement("p"),
                    n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                (document.body || document.documentElement).insertBefore(i, null); for (var o in n) "undefined" != typeof i.style[o] && (i.style[o] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(n[o])); return (document.body || document.documentElement).removeChild(i), "undefined" != typeof e && e.length > 0 && "none" !== e }(),
            s = navigator.userAgent.toLowerCase().indexOf("android") > -1,
            l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream,
            u = !!t.opera,
            d = /Edge\/\d+/.test(navigator.userAgent),
            c = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
            p = !!Function("/*@cc_on return document.documentMode===10@*/")(),
            m = document.all && !t.atob;
        e(); var f = [],
            h = function() {
                function t(t, i) { var n, o = this;
                    o.$item = t, o.defaults = { type: "scroll", speed: .5, imgSrc: null, imgWidth: null, imgHeight: null, enableTransform: !0, zIndex: -100, noAdnroid: !1, noIos: !0, onScroll: null, onInit: null, onDestroy: null, onCoverImage: null }, n = JSON.parse(o.$item.getAttribute("data-jarallax") || "{}"), o.options = o.extend({}, o.defaults, n, i), s && o.options.noAdnroid || l && o.options.noIos || (o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), o.instanceID = e++, o.image = { src: o.options.imgSrc || null, $container: null, $item: null, width: o.options.imgWidth || null, height: o.options.imgHeight || null, useImgTag: l || s || u || c || p || d }, o.initImg() && o.init()) } var e = 0; return t }();
        h.prototype.css = function(t, e) { if ("string" == typeof e) return t.style[e];
            e.transform && (e.WebkitTransform = e.MozTransform = e.transform); for (var i in e) t.style[i] = e[i]; return t }, h.prototype.extend = function(t) { t = t || {}; for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]); return t }, h.prototype.initImg = function() { var t = this; return null === t.image.src && (t.image.src = t.css(t.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!t.image.src || "none" === t.image.src) }, h.prototype.init = function() {
            function t() { e.coverImage(), e.clipContainer(), e.onScroll(!0), e.$item.setAttribute("data-jarallax-original-styles", e.$item.getAttribute("style")), e.options.onInit && e.options.onInit.call(e), setTimeout(function() { e.$item && e.css(e.$item, { "background-image": "none", "background-attachment": "scroll", "background-size": "auto" }) }, 0) } var e = this,
                i = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" },
                n = { position: "fixed" };
            e.image.$container = document.createElement("div"), e.css(e.image.$container, i), e.css(e.image.$container, { visibility: "hidden", "z-index": e.options.zIndex }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag && r && e.options.enableTransform ? (e.image.$item = document.createElement("img"), e.image.$item.setAttribute("src", e.image.src), n = e.extend({ "max-width": "none" }, i, n)) : (e.image.$item = document.createElement("div"), n = e.extend({ "background-position": "50% 50%", "background-size": "100% auto", "background-repeat": "no-repeat no-repeat", "background-image": 'url("' + e.image.src + '")' }, i, n)), m && (n.backgroundAttachment = "fixed"), e.parentWithTransform = 0; for (var o = e.$item; null !== o && o !== document && 0 === e.parentWithTransform;)(e.css(o, "-webkit-transform") || e.css(o, "-moz-transform") || e.css(o, "transform")) && (e.parentWithTransform = 1, e.css(e.image.$container, { transform: "translateX(0) translateY(0)" })), o = o.parentNode;
            e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.image.width && e.image.height ? t() : e.getImageSize(e.image.src, function(i, n) { e.image.width = i, e.image.height = n, t() }), f.push(e) }, h.prototype.destroy = function() { for (var t = this, e = 0, i = f.length; e < i; e++)
                if (f[e].instanceID === t.instanceID) { f.splice(e, 1); break }
            t.$item.setAttribute("style", t.$item.getAttribute("data-jarallax-original-styles")), t.$item.removeAttribute("data-jarallax-original-styles"), t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles), t.image.$container.parentNode.removeChild(t.image.$container), t.options.onDestroy && t.options.onDestroy.call(t), delete t.$item.jarallax; for (var n in t) delete t[n] }, h.prototype.getImageSize = function(t, e) { if (t && e) { var i = new Image;
                i.onload = function() { e(i.width, i.height) }, i.src = t } }, h.prototype.clipContainer = function() { if (!m) { var t = this,
                    e = t.image.$container.getBoundingClientRect(),
                    i = e.width,
                    n = e.height; if (!t.$clipStyles) { t.$clipStyles = document.createElement("style"), t.$clipStyles.setAttribute("type", "text/css"), t.$clipStyles.setAttribute("id", "#jarallax-clip-" + t.instanceID); var o = document.head || document.getElementsByTagName("head")[0];
                    o.appendChild(t.$clipStyles) } var a = ["#jarallax-container-" + t.instanceID + " {", "   clip: rect(0 " + i + "px " + n + "px 0);", "   clip: rect(0, " + i + "px, " + n + "px, 0);", "}"].join("\n");
                t.$clipStyles.styleSheet ? t.$clipStyles.styleSheet.cssText = a : t.$clipStyles.innerHTML = a } }, h.prototype.coverImage = function() { var t = this; if (t.image.width && t.image.height) { var e = t.image.$container.getBoundingClientRect(),
                    i = e.width,
                    n = e.height,
                    o = e.left,
                    s = t.image.width,
                    l = t.image.height,
                    u = t.options.speed,
                    d = "scroll" === t.options.type || "scroll-opacity" === t.options.type,
                    c = 0,
                    p = 0,
                    m = n,
                    f = 0,
                    h = 0;
                d && (c = u * (n + a) / 2, (u < 0 || u > 1) && (c = u * Math.max(n, a) / 2), u < 0 || u > 1 ? m = Math.max(n, a) + 2 * Math.abs(c) : m += Math.abs(a - n) * (1 - u)), p = m * s / l, p < i && (p = i, m = p * l / s), t.bgPosVerticalCenter = 0, !(d && m < a) || r && t.options.enableTransform || (t.bgPosVerticalCenter = (a - m) / 2, m = a), d ? (f = o + (i - p) / 2, h = (a - m) / 2) : (f = (i - p) / 2, h = (n - m) / 2), t.parentWithTransform && (f -= o), t.parallaxScrollDistance = c, t.css(t.image.$item, { width: p + "px", height: m + "px", marginLeft: f + "px", marginTop: h + "px" }), t.options.onCoverImage && t.options.onCoverImage.call(t) } }, h.prototype.isVisible = function() { return this.isElementInViewport || !1 }, h.prototype.onScroll = function(t) { var e = this; if (e.image.width && e.image.height) { var i = e.$item.getBoundingClientRect(),
                    n = i.top,
                    s = i.height,
                    l = { position: "absolute", visibility: "visible", backgroundPosition: "50% 50%" };
                e.isElementInViewport = i.bottom >= 0 && i.right >= 0 && n <= a && i.left <= o; var u = !t && !e.isElementInViewport; if (!u) { var d = Math.max(0, n),
                        c = Math.max(0, s + n),
                        p = Math.max(0, -n),
                        f = Math.max(0, n + s - a),
                        h = Math.max(0, s - (n + s - a)),
                        g = Math.max(0, -n + a - s),
                        v = 1 - 2 * (a - n) / (a + s),
                        y = 1; if (s < a ? y = 1 - (p || f) / s : c <= a ? y = c / a : h <= a && (y = h / a), "opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type || (l.transform = "translate3d(0, 0, 0)", l.opacity = y), "scale" === e.options.type || "scale-opacity" === e.options.type) { var w = 1;
                        e.options.speed < 0 ? w -= e.options.speed * y : w += e.options.speed * (1 - y), l.transform = "scale(" + w + ") translate3d(0, 0, 0)" } if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) { var b = e.parallaxScrollDistance * v;
                        r && e.options.enableTransform ? (e.parentWithTransform && (b -= n), l.transform = "translate3d(0, " + b + "px, 0)") : (e.bgPosVerticalCenter && (b += e.bgPosVerticalCenter), l.backgroundPosition = "50% " + b + "px"), l.position = m ? "absolute" : "fixed" } e.css(e.image.$item, l), e.options.onScroll && e.options.onScroll.call(e, { section: i, beforeTop: d, beforeTopEnd: c, afterTop: p, beforeBottom: f, beforeBottomEnd: h, afterBottom: g, visiblePercent: y, fromViewportCenter: v }) } } }, i(t, "scroll", n), i(t, "resize", n), i(t, "orientationchange", n), i(t, "load", n); var g = function(t) {
            ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]); var e, i = arguments[1],
                n = Array.prototype.slice.call(arguments, 2),
                o = t.length,
                a = 0; for (a; a < o; a++)
                if ("object" == typeof i || "undefined" == typeof i ? t[a].jarallax || (t[a].jarallax = new h(t[a], i)) : t[a].jarallax && (e = t[a].jarallax[i].apply(t[a].jarallax, n)), "undefined" != typeof e) return e; return t };
        g.constructor = h; var v = t.jarallax; if (t.jarallax = g, t.jarallax.noConflict = function() { return t.jarallax = v, this }, "undefined" != typeof jQuery) { var y = function() { var e = arguments || [];
                Array.prototype.unshift.call(e, this); var i = g.apply(t, e); return "object" != typeof i ? i : this };
            y.constructor = h; var w = jQuery.fn.jarallax;
            jQuery.fn.jarallax = y, jQuery.fn.jarallax.noConflict = function() { return jQuery.fn.jarallax = w, this } } i(t, "DOMContentLoaded", function() { g(document.querySelectorAll("[data-jarallax]")) }) }(window),
    /*!
     * Name    : Video Worker (wrapper for Youtube and Vimeo)
     * Version : 1.1.0
     * Author  : _nK http://nkdev.info
     * GitHub  : https://github.com/nk-o/jarallax
     */
    function(t) { "use strict";

        function e(t) { t = t || {}; for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]); return t }

        function i() { this._done = [], this._fail = [] } i.prototype = { execute: function(t, e) { var i = t.length; for (e = Array.prototype.slice.call(e); i--;) t[i].apply(null, e) }, resolve: function() { this.execute(this._done, arguments) }, reject: function() { this.execute(this._fail, arguments) }, done: function(t) { this._done.push(t) }, fail: function(t) { this._fail.push(t) } }; var n = function() {
            function t(t, n) { var o = this;
                o.url = t, o.options_default = { autoplay: 1, loop: 1, mute: 1, controls: 0 }, o.options = e({}, o.options_default, n), o.videoID = o.parseURL(t), o.videoID && (o.ID = i++, o.loadAPI(), o.init()) } var i = 0; return t }();
        n.prototype.parseURL = function(t) {
            function e(t) { var e = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
                    i = t.match(e); return !(!i || 11 !== i[1].length) && i[1] }

            function i(t) { var e = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                    i = t.match(e); return !(!i || !i[3]) && i[3] } var n = e(t),
                o = i(t); return n ? (this.type = "youtube", n) : !!o && (this.type = "vimeo", o) }, n.prototype.isValid = function() { return !!this.videoID }, n.prototype.on = function(t, e) { this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e) }, n.prototype.off = function(t, e) { if (this.userEventsList && this.userEventsList[t])
                if (e)
                    for (var i = 0; i < this.userEventsList[t].length; i++) this.userEventsList[t][i] === e && (this.userEventsList[t][i] = !1);
                else delete this.userEventsList[t] }, n.prototype.fire = function(t) { var e = [].slice.call(arguments, 1); if (this.userEventsList && "undefined" != typeof this.userEventsList[t])
                for (var i in this.userEventsList[t]) this.userEventsList[t][i] && this.userEventsList[t][i].apply(this, e) }, n.prototype.play = function() { this.player && ("youtube" === this.type && this.player.playVideo && this.player.playVideo(), "vimeo" === this.type && this.player.api("play")) }, n.prototype.pause = function() { this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.api("pause")) }, n.prototype.getImageURL = function(t) { var e = this; if (e.videoImage) return void t(e.videoImage); if ("youtube" === e.type && (e.videoImage = "https://img.youtube.com/vi/" + e.videoID + "/maxresdefault.jpg", t(e.videoImage)), "vimeo" === e.type) { var i = new XMLHttpRequest;
                i.open("GET", "https://vimeo.com/api/v2/video/" + e.videoID + ".json", !0), i.onreadystatechange = function() { if (4 === this.readyState && this.status >= 200 && this.status < 400) { var i = JSON.parse(this.responseText);
                        e.videoImage = i[0].thumbnail_large, t(e.videoImage) } }, i.send(), i = null } }, n.prototype.getIframe = function(e) { var i = this; return i.$iframe ? void e(i.$iframe) : void i.onAPIready(function() { var n; if (i.$iframe || (n = document.createElement("div"), n.style.display = "none"), "youtube" === i.type) { i.playerOptions = {}, i.playerOptions.videoId = i.videoID, i.playerOptions.width = t.innerWidth || document.documentElement.clientWidth, i.playerOptions.playerVars = { autohide: 1, rel: 0, autoplay: 0 }, i.options.controls || (i.playerOptions.playerVars.iv_load_policy = 3, i.playerOptions.playerVars.modestbranding = 1, i.playerOptions.playerVars.controls = 0, i.playerOptions.playerVars.showinfo = 0, i.playerOptions.playerVars.disablekb = 1); var o;
                    i.playerOptions.events = { onReady: function(t) { i.options.mute && t.target.mute(), i.options.autoplay && i.play(), i.fire("ready", t) }, onStateChange: function(t) { i.options.loop && t.data === YT.PlayerState.ENDED && t.target.playVideo(), o || t.data !== YT.PlayerState.PLAYING || (o = 1, i.fire("started", t)) } }; var a = !i.$iframe; if (a) { var r = document.createElement("div");
                        r.setAttribute("id", i.playerID), n.appendChild(r), document.body.appendChild(n) } i.player = i.player || new t.YT.Player(i.playerID, i.playerOptions), a && (i.$iframe = document.getElementById(i.playerID)) } "vimeo" === i.type && (i.playerOptions = "", i.playerOptions += "player_id=" + i.playerID, i.playerOptions += "&autopause=0", i.options.controls || (i.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), i.playerOptions += "&autoplay=0", i.playerOptions += "&loop=" + (i.options.loop ? 1 : 0), i.$iframe || (i.$iframe = document.createElement("iframe"), i.$iframe.setAttribute("id", i.playerID), i.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + i.videoID + "?" + i.playerOptions), i.$iframe.setAttribute("frameborder", "0"), n.appendChild(i.$iframe), document.body.appendChild(n)), i.player = i.player || $f(i.$iframe), i.player.addEvent("ready", function(t) { i.player.api("setVolume", i.options.mute ? 0 : 100), i.options.autoplay && i.play(); var e;
                    i.player.addEvent("playProgress", function(t) { e || i.fire("started", t), e = 1 }), i.fire("ready", t) })), e(i.$iframe) }) }, n.prototype.init = function() { var t = this;
            t.playerID = "VideoWorker-" + t.ID }; var o = 0,
            a = 0;
        n.prototype.loadAPI = function() { var e = this; if (!o || !a) { var i = ""; "youtube" !== e.type || o || (o = 1, i = "//www.youtube.com/iframe_api"), "vimeo" !== e.type || a || (a = 1, i = "//f.vimeocdn.com/js/froogaloop2.min.js"), "file://" === t.location.origin && (i = "http:" + i); var n = document.createElement("script"),
                    r = document.getElementsByTagName("head")[0];
                n.src = i, r.appendChild(n), r = null, n = null } }; var r = 0,
            s = 0,
            l = new i,
            u = new i;
        n.prototype.onAPIready = function(e) { var i = this; if ("youtube" === i.type && ("undefined" != typeof YT && 0 !== YT.loaded || r ? "object" == typeof YT && 1 === YT.loaded ? e() : l.done(function() { e() }) : (r = 1, t.onYouTubeIframeAPIReady = function() { t.onYouTubeIframeAPIReady = null, l.resolve("done"), e() })), "vimeo" === i.type)
                if ("undefined" != typeof $f || s) "undefined" != typeof $f ? e() : u.done(function() { e() });
                else { s = 1; var n = setInterval(function() { "undefined" != typeof $f && (clearInterval(n), u.resolve("done"), e()) }, 20) } }, t.VideoWorker = n }(window),
    /*!
     * Name    : Video Background Extension for Jarallax
     * Version : 1.0.0
     * Author  : _nK http://nkdev.info
     * GitHub  : https://github.com/nk-o/jarallax
     */
    function() { "use strict"; if ("undefined" != typeof jarallax) { var t = jarallax.constructor,
                e = t.prototype.init;
            t.prototype.init = function() { var t = this;
                e.apply(t), t.video && t.video.getIframe(function(e) { t.css(e, { position: "fixed", top: "0px", left: "0px", right: "0px", bottom: "0px", width: "100%", height: "100%", visibility: "visible", zIndex: -1 }), t.$video = e, t.image.$container.appendChild(e) }) }; var i = t.prototype.coverImage;
            t.prototype.coverImage = function() { var t = this;
                i.apply(t), t.video && "IFRAME" === t.image.$item.nodeName && t.css(t.image.$item, { height: t.image.$item.getBoundingClientRect().height + 400 + "px", top: "-200px" }) }; var n = t.prototype.initImg;
            t.prototype.initImg = function() { var t = this; if (t.options.videoSrc || (t.options.videoSrc = t.$item.getAttribute("data-jarallax-video") || !1), t.options.videoSrc) { var e = new VideoWorker(t.options.videoSrc); return e.isValid() && (t.image.useImgTag = !0, e.on("ready", function() { var i = t.onScroll;
                        t.onScroll = function() { i.apply(t), t.isVisible() ? e.play() : e.pause() } }), e.on("started", function() { t.image.$default_item = t.image.$item, t.image.$item = t.$video, t.image.width = t.imgWidth = 1280, t.image.height = t.imgHeight = 720, t.coverImage(), t.clipContainer(), t.onScroll(), t.image.$default_item && (t.image.$default_item.style.display = "none") }), t.video = e, e.getImageURL(function(e) { t.image.src = e, t.init() })), !1 } return n.apply(t) }; var o = t.prototype.destroy;
            t.prototype.destroy = function() { var t = this;
                o.apply(t) } } }(),
    // Licensed under the terms of the MIT license.
    function() {
        function t() { var t = !1;
            t && u("keydown", o), y.keyboardSupport && !t && l("keydown", o) }

        function e() { if (document.body) { var e = document.body,
                    i = document.documentElement,
                    n = window.innerHeight,
                    o = e.scrollHeight; if (C = document.compatMode.indexOf("CSS") >= 0 ? i : e, g = e, t(), x = !0, top != self) b = !0;
                else if (o > n && (e.offsetHeight <= n || i.offsetHeight <= n) && (i.style.height = "auto", C.offsetHeight <= n)) { var a = document.createElement("div");
                    a.style.clear = "both", e.appendChild(a) } y.fixedBackground || w || (e.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll") } }

        function i(t, e, i, n) { if (n || (n = 1e3), c(e, i), 1 != y.accelerationMax) { var o = +new Date,
                    a = o - E; if (a < y.accelerationDelta) { var r = (1 + 30 / a) / 2;
                    r > 1 && (r = Math.min(r, y.accelerationMax), e *= r, i *= r) } E = +new Date } if (S.push({ x: e, y: i, lastX: e < 0 ? .99 : -.99, lastY: i < 0 ? .99 : -.99, start: +new Date }), !T) { var s = t === document.body,
                    l = function(o) { for (var a = +new Date, r = 0, u = 0, d = 0; d < S.length; d++) { var c = S[d],
                                p = a - c.start,
                                m = p >= y.animationTime,
                                f = m ? 1 : p / y.animationTime;
                            y.pulseAlgorithm && (f = h(f)); var g = c.x * f - c.lastX >> 0,
                                v = c.y * f - c.lastY >> 0;
                            r += g, u += v, c.lastX += g, c.lastY += v, m && (S.splice(d, 1), d--) } s ? window.scrollBy(r, u) : (r && (t.scrollLeft += r), u && (t.scrollTop += u)), e || i || (S = []), S.length ? z(l, t, n / y.frameRate + 1) : T = !1 };
                z(l, t, 0), T = !0 } }

        function n(t) { x || e(); var n = t.target,
                o = s(n); if (!o || t.defaultPrevented || d(g, "embed") || d(n, "embed") && /\.pdf/i.test(n.src)) return !0; var a = t.wheelDeltaX || 0,
                r = t.wheelDeltaY || 0; return a || r || (r = t.wheelDelta || 0), !(y.touchpadSupport || !p(r)) || (Math.abs(a) > 1.2 && (a *= y.stepSize / 120), Math.abs(r) > 1.2 && (r *= y.stepSize / 120), i(o, -a, -r), void t.preventDefault()) }

        function o(t) { var e = t.target,
                n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== k.spacebar; if (/input|textarea|select|embed/i.test(e.nodeName) || e.isContentEditable || t.defaultPrevented || n) return !0; if (d(e, "button") && t.keyCode === k.spacebar) return !0; var o, a = 0,
                r = 0,
                l = s(g),
                u = l.clientHeight; switch (l == document.body && (u = window.innerHeight), t.keyCode) {
                case k.up:
                    r = -y.arrowScroll; break;
                case k.down:
                    r = y.arrowScroll; break;
                case k.spacebar:
                    o = t.shiftKey ? 1 : -1, r = -o * u * .9; break;
                case k.pageup:
                    r = .9 * -u; break;
                case k.pagedown:
                    r = .9 * u; break;
                case k.home:
                    r = -l.scrollTop; break;
                case k.end:
                    var c = l.scrollHeight - l.scrollTop - u;
                    r = c > 0 ? c + 10 : 0; break;
                case k.left:
                    a = -y.arrowScroll; break;
                case k.right:
                    a = y.arrowScroll; break;
                default:
                    return !0 } i(l, a, r), t.preventDefault() }

        function a(t) { g = t.target }

        function r(t, e) { for (var i = t.length; i--;) L[P(t[i])] = e; return e }

        function s(t) { var e = [],
                i = C.scrollHeight;
            do { var n = L[P(t)]; if (n) return r(e, n); if (e.push(t), i === t.scrollHeight) { if (!b || C.clientHeight + 10 < i) return r(e, document.body) } else if (t.clientHeight + 10 < t.scrollHeight && (overflow = getComputedStyle(t, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return r(e, t) } while (t = t.parentNode) }

        function l(t, e, i) { window.addEventListener(t, e, i || !1) }

        function u(t, e, i) { window.removeEventListener(t, e, i || !1) }

        function d(t, e) { return (t.nodeName || "").toLowerCase() === e.toLowerCase() }

        function c(t, e) { t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, I.x === t && I.y === e || (I.x = t, I.y = e, S = [], E = 0) }

        function p(t) { if (t) { t = Math.abs(t), _.push(t), _.shift(), clearTimeout(M); var e = _[0] == _[1] && _[1] == _[2],
                    i = m(_[0], 120) && m(_[1], 120) && m(_[2], 120); return !(e || i) } }

        function m(t, e) { return Math.floor(t / e) == t / e }

        function f(t) { var e, i, n; return t *= y.pulseScale, t < 1 ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * y.pulseNormalize }

        function h(t) { return t >= 1 ? 1 : t <= 0 ? 0 : (1 == y.pulseNormalize && (y.pulseNormalize /= f(1)), f(t)) } var g, v = { frameRate: 150, animationTime: 500, stepSize: 150, pulseAlgorithm: !0, pulseScale: 6, pulseNormalize: 1, accelerationDelta: 20, accelerationMax: 1, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: !0, fixedBackground: !0, excluded: "" },
            y = v,
            w = !1,
            b = !1,
            I = { x: 0, y: 0 },
            x = !1,
            C = document.documentElement,
            _ = [120, 120, 120],
            k = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
            y = v,
            S = [],
            T = !1,
            E = +new Date,
            L = {};
        setInterval(function() { L = {} }, 1e4); var M, P = function() { var t = 0; return function(e) { return e.uniqueID || (e.uniqueID = t++) } }(),
            z = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t, e, i) { window.setTimeout(t, i || 1e3 / 60) } }(),
            A = /chrome/i.test(window.navigator.userAgent),
            $ = "onmousewheel" in document;
        $ && A && (l("mousedown", a), l("mousewheel", n), l("load", e)) }(),
    /*!
     *	Bootstrap submenu fix
     *	Version: 1.1
     *	Author web-master72
     */
    function(t) { t(document).ready(function() { var e, i = 991;
            e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t(window).on("resize", function() { var e = Math.max(t(window).width(), window.innerWidth),
                    n = t(".menu-item-has-children");
                e > i && n.removeClass("sub-menu-open") }), t(".menu-item-has-children > a").on("click", function() { return t(this).parent().hasClass("sub-menu-open") ? (t(this).parent().removeClass("sub-menu-open"), t(this).next().slideToggle({ duration: 300, easing: "swing" })) : (t(".menu-item-has-children").removeClass("sub-menu-open"), t(".menu-item-has-children .sub-menu").slideUp({ duration: 300, easing: "swing" }), t(this).parent().addClass("sub-menu-open"), t(this).next().slideToggle({ duration: 300, easing: "swing" })), !1 }) }) }(jQuery),
    function(t) { t(document).ready(function() { t("#contact-form").find("input,textarea").jqBootstrapValidation({ preventSubmit: !0, submitError: function(t, e, i) {}, submitSuccess: function(e, i) { i.preventDefault(); var n = t("#contact-form submit"),
                        o = t("#contact-response"),
                        a = t('#contact-form [name="name"]').val(),
                        r = t('#contact-form [name="email"]').val(),
                        s = t('#contact-form [name="message"]').val();
                    t.ajax({ type: "POST", url: "assets/php/contact.php", dataType: "json", data: { name: a, email: r, message: s }, cache: !1, beforeSend: function(t) { n.empty(), n.append('<i class="fa fa-cog fa-spin"></i> Wait...') }, success: function(t) { 1 == t.sendstatus ? (o.html(t.message), e.fadeOut(500)) : o.html(t.message) } }) } }) }) }(jQuery);
