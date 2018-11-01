(function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    fN0x = NEJ.R,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    P8H = c8g("nej.ut"),
    Fa8S;
    if ( !! P8H.bbS5X) return;
    P8H.bbS5X = NEJ.C();
    Fa8S = P8H.bbS5X.M8E(P8H.cO9F);
    Fa8S.cC9t = function() {
        this.lJ2x = {
            onchange: this.gB1x.f8d(this),
            ondragend: this.gB1x.eO0x(this, !0)
        };
        this.cK9B()
    };
    Fa8S.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.lJ2x.view = a7h.A8s(e8e.track);
        this.lJ2x.body = a7h.A8s(e8e.slide);
        this.lJ2x.mbar = this.lJ2x.view;
        this.xv6p(e8e.range);
        this.bZ9Q([[this.lJ2x.view, "mousedown", this.czo6i.f8d(this)]]);
        this.jC1x = P8H.xf5k.B8t(this.lJ2x)
    };
    Fa8S.bC9t = function() {
        this.bH9y();
        this.jC1x.W8O();
        delete this.jC1x;
        delete this.ia1x;
        delete this.lJ2x.view;
        delete this.lJ2x.body;
        delete this.lJ2x.mbar
    };
    Fa8S.gB1x = function(d8f, dt0x) {
        var bFg4k = d8f.left / this.ia1x.x[1],
        bFh4l = d8f.top / this.ia1x.y[1],
        bFi4m = this.ia1x.x,
        bFj4n = this.ia1x.y;
        this.z8r("onchange", {
            stopped: !!dt0x,
            x: {
                rate: bFg4k,
                value: bFg4k * (bFi4m[1] - bFi4m[0])
            },
            y: {
                rate: bFh4l,
                value: bFh4l * (bFj4n[1] - bFj4n[0])
            }
        })
    };
    Fa8S.czo6i = function(d8f) {
        var bl8d = a7h.ir1x(this.lJ2x.view),
        bFk4o = {
            x: h8b.kr2x(d8f),
            y: h8b.nf2x(d8f)
        },
        dA0x = {
            x: Math.floor(this.lJ2x.body.offsetWidth / 2),
            y: Math.floor(this.lJ2x.body.offsetHeight / 2)
        };
        this.jC1x.hi1x({
            top: bFk4o.y - bl8d.y - dA0x.y,
            left: bFk4o.x - bl8d.x - dA0x.x
        })
    };
    Fa8S.xv6p = function(dm9d) {
        var qZ4d;
        if ( !! this.ia1x) {
            var pg3x = this.jC1x.bsQ1x();
            qZ4d = {
                x: pg3x.left / this.ia1x.x[1],
                y: pg3x.top / this.ia1x.y[1]
            }
        }
        dm9d = dm9d || be8W;
        var czn6h = (dm9d.x || fN0x)[1] || this.lJ2x.view.clientWidth - this.lJ2x.body.offsetWidth,
        czm6g = (dm9d.y || fN0x)[1] || this.lJ2x.view.clientHeight - this.lJ2x.body.offsetHeight;
        this.ia1x = {
            x: dm9d.x || [0, czn6h],
            y: dm9d.y || [0, czm6g]
        };
        if ( !! qZ4d) this.hi1x(qZ4d);
        return this
    };
    Fa8S.hi1x = function(qZ4d) {
        qZ4d = qZ4d || be8W;
        this.jC1x.hi1x({
            top: this.ia1x.y[1] * (qZ4d.y || 0),
            left: this.ia1x.x[1] * (qZ4d.x || 0)
        })
    }
})(); (function() {
    var P8H = NEJ.P("nej.ut"),
    bFn4r;
    if ( !! P8H.Lx0x) return;
    P8H.Lx0x = NEJ.C();
    bFn4r = P8H.Lx0x.M8E(P8H.bbS5X);
    bFn4r.cC9t = function() {
        this.cK9B();
        this.lJ2x.direction = 2
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    P8H = c8g("nej.p"),
    bD9u = c8g("nej.ui"),
    ch9Y = c8g("nej.ut"),
    x8p = c8g("nm.w"),
    b8h,
    L8D;
    x8p.zW6Q = NEJ.C();
    b8h = x8p.zW6Q.M8E(bD9u.eu0x);
    L8D = x8p.zW6Q.cx9o;
    b8h.cC9t = function() {
        this.cK9B()
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.o8g = a7h.A8s(e8e.content);
        this.mS2x = a7h.A8s(e8e.slide);
        this.kb2x = a7h.A8s(e8e.track);
        this.bGG4K = e8e.speed;
        this.buk2x = this.o8g.scrollHeight - this.o8g.clientHeight;
        a7h.bd8V(this.mS2x, "height", (this.o8g.clientHeight / this.o8g.scrollHeight * parseInt(a7h.dp9g(this.kb2x, "height")) || 0) + "px");
        if (this.o8g.scrollHeight <= this.o8g.clientHeight) a7h.bd8V(this.mS2x, "display", "none");
        else a7h.bd8V(this.mS2x, "display", "block");
        this.wF5K = ch9Y.Lx0x.B8t({
            slide: this.mS2x,
            track: this.kb2x,
            onchange: this.bul2x.f8d(this)
        });
        if (P8H.dC0x.browser != "firefox") this.bZ9Q([[this.o8g, "mousewheel", this.KK0x.f8d(this)]]);
        else {
            this.o8g.addEventListener("DOMMouseScroll", this.KK0x.f8d(this), false)
        }
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.wF5K.W8O();
        delete this.o8g;
        delete this.mS2x;
        delete this.kb2x;
        delete this.ia1x;
        delete this.bGG4K
    };
    b8h.bul2x = function(d8f) {
        this.o8g.scrollTop = parseInt(this.buk2x * d8f.y.rate)
    };
    b8h.KK0x = function(d8f) {
        h8b.cu9l(d8f);
        this.buk2x = this.o8g.scrollHeight - this.o8g.clientHeight;
        var dA0x = 0,
        NV0x, cb9S, gU1x;
        cb9S = parseInt(this.kb2x.clientHeight) - parseInt(a7h.dp9g(this.mS2x, "height"));
        dA0x = d8f.wheelDelta ? d8f.wheelDelta / 120 : -d8f.detail / 3;
        NV0x = parseInt(a7h.dp9g(this.mS2x, "top")) - dA0x * this.bGG4K;
        if (NV0x < 0) NV0x = 0;
        if (NV0x > cb9S) NV0x = cb9S;
        a7h.bd8V(this.mS2x, "top", NV0x + "px");
        gU1x = parseInt(a7h.dp9g(this.mS2x, "top"));
        this.wF5K.z8r("onchange", {
            y: {
                rate: gU1x / cb9S
            }
        })
    };
    b8h.ru4y = function() {
        this.buk2x = this.o8g.scrollHeight - this.o8g.clientHeight;
        this.wF5K.hi1x({
            x: 0,
            y: 0
        });
        a7h.bd8V(this.mS2x, "height", this.o8g.clientHeight / this.o8g.scrollHeight * parseInt(this.kb2x.clientHeight) + "px");
        this.wF5K.xv6p({
            x: [],
            y: [0, this.kb2x.clientHeight - parseInt(a7h.dp9g(this.mS2x, "height"))]
        });
        if (this.o8g.scrollHeight <= this.o8g.clientHeight) a7h.bd8V(this.mS2x, "display", "none");
        else a7h.bd8V(this.mS2x, "display", "block")
    };
    b8h.hi1x = function(dU0x) {
        this.wF5K.hi1x(dU0x)
    };
    b8h.Ln0x = function(bum2x) {
        var cxU5Z = parseInt(a7h.dp9g(this.mS2x, "height"));
        var cxS5X = parseInt(a7h.dp9g(this.kb2x, "height"));
        var tU5Z = cxS5X - cxU5Z;
        var gU1x = parseInt(tU5Z * bum2x) + "px";
        a7h.bd8V(this.mS2x, "top", gU1x)
    };
    b8h.bGR5W = function() {
        if (this.o8g.scrollHeight <= this.o8g.clientHeight) return;
        var bum2x = this.o8g.scrollTop / (this.o8g.scrollHeight - this.o8g.clientHeight);
        this.Ln0x(bum2x)
    };
    b8h.cSk0x = function() {
        if (this.wF5K) this.wF5K.xv6p()
    }
})(); (function() {
    var p = NEJ.P("nej.u");
    var oq3x = 8;
    var bgB6v = function(hB1x, cn9e) {
        return hB1x << cn9e | hB1x >>> 32 - cn9e
    };
    var nh2x = function(x, y) {
        var bIf5k = (x & 65535) + (y & 65535),
        cwk5p = (x >> 16) + (y >> 16) + (bIf5k >> 16);
        return cwk5p << 16 | bIf5k & 65535
    };
    var cwj5o = function(t, b, c, d) {
        if (t < 20) return b & c | ~b & d;
        if (t < 40) return b ^ c ^ d;
        if (t < 60) return b & c | b & d | c & d;
        return b ^ c ^ d
    };
    var cwi5n = function(t) {
        if (t < 20) return 1518500249;
        if (t < 40) return 1859775393;
        if (t < 60) return - 1894007588;
        return - 899497514
    };
    var vY5d = function() {
        var Id9U = function(i) {
            return i % 32
        },
        HU9L = function(i) {
            return 32 - oq3x - i % 32
        };
        return function(cT9K, GZ8R) {
            var Xn3x = [],
            mb2x = (1 << oq3x) - 1,
            mT2x = GZ8R ? Id9U: HU9L;
            for (var i = 0,
            l = cT9K.length * oq3x; i < l; i += oq3x) Xn3x[i >> 5] |= (cT9K.charCodeAt(i / oq3x) & mb2x) << mT2x(i);
            return Xn3x
        }
    } ();
    var Xp3x = function() {
        var bHW5b = "0123456789abcdef",
        Id9U = function(i) {
            return i % 4
        },
        HU9L = function(i) {
            return 3 - i % 4
        };
        return function(jk1x, GZ8R) {
            var bv9m = [],
            mT2x = GZ8R ? Id9U: HU9L;
            for (var i = 0,
            l = jk1x.length * 4; i < l; i++) {
                bv9m.push(bHW5b.charAt(jk1x[i >> 2] >> mT2x(i) * 8 + 4 & 15) + bHW5b.charAt(jk1x[i >> 2] >> mT2x(i) * 8 & 15))
            }
            return bv9m.join("")
        }
    } ();
    var bgP6J = function() {
        var Id9U = function(i) {
            return i % 32
        },
        HU9L = function(i) {
            return 32 - oq3x - i % 32
        };
        return function(Xn3x, GZ8R) {
            var bv9m = [],
            mb2x = (1 << oq3x) - 1,
            mT2x = GZ8R ? Id9U: HU9L;
            for (var i = 0,
            l = Xn3x.length * 32; i < l; i += oq3x) bv9m.push(String.fromCharCode(Xn3x[i >> 5] >>> mT2x(i) & mb2x));
            return bv9m.join("")
        }
    } ();
    var OE1x = function() {
        var cwc5h = "=",
        cvX5c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Id9U = function(i) {
            return i % 4
        },
        HU9L = function(i) {
            return 3 - i % 4
        };
        return function(jk1x, GZ8R) {
            var bv9m = [],
            mT2x = GZ8R ? Id9U: HU9L;
            for (var i = 0,
            bHO5T; i < jk1x.length * 4; i += 3) {
                bHO5T = (jk1x[i >> 2] >> 8 * mT2x(i) & 255) << 16 | (jk1x[i + 1 >> 2] >> 8 * mT2x(i + 1) & 255) << 8 | jk1x[i + 2 >> 2] >> 8 * mT2x(i + 2) & 255;
                for (var j = 0; j < 4; j++) bv9m.push(i * 8 + j * 6 > jk1x.length * 32 ? cwc5h: cvX5c.charAt(bHO5T >> 6 * (3 - j) & 63))
            }
            return bv9m.join("")
        }
    } ();
    var bgT6N = function(q, a, b, x, s, t) {
        return nh2x(bgB6v(nh2x(nh2x(a, q), nh2x(x, t)), s), b)
    };
    var qb3x = function(a, b, c, d, x, s, t) {
        return bgT6N(b & c | ~b & d, a, b, x, s, t)
    };
    var qc3x = function(a, b, c, d, x, s, t) {
        return bgT6N(b & d | c & ~d, a, b, x, s, t)
    };
    var qd3x = function(a, b, c, d, x, s, t) {
        return bgT6N(b ^ c ^ d, a, b, x, s, t)
    };
    var qe3x = function(a, b, c, d, x, s, t) {
        return bgT6N(c ^ (b | ~d), a, b, x, s, t)
    };
    var Pt1x = function(x, y) {
        x[y >> 5] |= 128 << y % 32;
        x[(y + 64 >>> 9 << 4) + 14] = y;
        var a = 1732584193,
        b = -271733879,
        c = -1732584194,
        d = 271733878;
        for (var i = 0,
        l = x.length,
        bHF5K, bFF4J, bFl4p, bEr4v; i < l; i += 16) {
            bHF5K = a;
            bFF4J = b;
            bFl4p = c;
            bEr4v = d;
            a = qb3x(a, b, c, d, x[i + 0], 7, -680876936);
            d = qb3x(d, a, b, c, x[i + 1], 12, -389564586);
            c = qb3x(c, d, a, b, x[i + 2], 17, 606105819);
            b = qb3x(b, c, d, a, x[i + 3], 22, -1044525330);
            a = qb3x(a, b, c, d, x[i + 4], 7, -176418897);
            d = qb3x(d, a, b, c, x[i + 5], 12, 1200080426);
            c = qb3x(c, d, a, b, x[i + 6], 17, -1473231341);
            b = qb3x(b, c, d, a, x[i + 7], 22, -45705983);
            a = qb3x(a, b, c, d, x[i + 8], 7, 1770035416);
            d = qb3x(d, a, b, c, x[i + 9], 12, -1958414417);
            c = qb3x(c, d, a, b, x[i + 10], 17, -42063);
            b = qb3x(b, c, d, a, x[i + 11], 22, -1990404162);
            a = qb3x(a, b, c, d, x[i + 12], 7, 1804603682);
            d = qb3x(d, a, b, c, x[i + 13], 12, -40341101);
            c = qb3x(c, d, a, b, x[i + 14], 17, -1502002290);
            b = qb3x(b, c, d, a, x[i + 15], 22, 1236535329);
            a = qc3x(a, b, c, d, x[i + 1], 5, -165796510);
            d = qc3x(d, a, b, c, x[i + 6], 9, -1069501632);
            c = qc3x(c, d, a, b, x[i + 11], 14, 643717713);
            b = qc3x(b, c, d, a, x[i + 0], 20, -373897302);
            a = qc3x(a, b, c, d, x[i + 5], 5, -701558691);
            d = qc3x(d, a, b, c, x[i + 10], 9, 38016083);
            c = qc3x(c, d, a, b, x[i + 15], 14, -660478335);
            b = qc3x(b, c, d, a, x[i + 4], 20, -405537848);
            a = qc3x(a, b, c, d, x[i + 9], 5, 568446438);
            d = qc3x(d, a, b, c, x[i + 14], 9, -1019803690);
            c = qc3x(c, d, a, b, x[i + 3], 14, -187363961);
            b = qc3x(b, c, d, a, x[i + 8], 20, 1163531501);
            a = qc3x(a, b, c, d, x[i + 13], 5, -1444681467);
            d = qc3x(d, a, b, c, x[i + 2], 9, -51403784);
            c = qc3x(c, d, a, b, x[i + 7], 14, 1735328473);
            b = qc3x(b, c, d, a, x[i + 12], 20, -1926607734);
            a = qd3x(a, b, c, d, x[i + 5], 4, -378558);
            d = qd3x(d, a, b, c, x[i + 8], 11, -2022574463);
            c = qd3x(c, d, a, b, x[i + 11], 16, 1839030562);
            b = qd3x(b, c, d, a, x[i + 14], 23, -35309556);
            a = qd3x(a, b, c, d, x[i + 1], 4, -1530992060);
            d = qd3x(d, a, b, c, x[i + 4], 11, 1272893353);
            c = qd3x(c, d, a, b, x[i + 7], 16, -155497632);
            b = qd3x(b, c, d, a, x[i + 10], 23, -1094730640);
            a = qd3x(a, b, c, d, x[i + 13], 4, 681279174);
            d = qd3x(d, a, b, c, x[i + 0], 11, -358537222);
            c = qd3x(c, d, a, b, x[i + 3], 16, -722521979);
            b = qd3x(b, c, d, a, x[i + 6], 23, 76029189);
            a = qd3x(a, b, c, d, x[i + 9], 4, -640364487);
            d = qd3x(d, a, b, c, x[i + 12], 11, -421815835);
            c = qd3x(c, d, a, b, x[i + 15], 16, 530742520);
            b = qd3x(b, c, d, a, x[i + 2], 23, -995338651);
            a = qe3x(a, b, c, d, x[i + 0], 6, -198630844);
            d = qe3x(d, a, b, c, x[i + 7], 10, 1126891415);
            c = qe3x(c, d, a, b, x[i + 14], 15, -1416354905);
            b = qe3x(b, c, d, a, x[i + 5], 21, -57434055);
            a = qe3x(a, b, c, d, x[i + 12], 6, 1700485571);
            d = qe3x(d, a, b, c, x[i + 3], 10, -1894986606);
            c = qe3x(c, d, a, b, x[i + 10], 15, -1051523);
            b = qe3x(b, c, d, a, x[i + 1], 21, -2054922799);
            a = qe3x(a, b, c, d, x[i + 8], 6, 1873313359);
            d = qe3x(d, a, b, c, x[i + 15], 10, -30611744);
            c = qe3x(c, d, a, b, x[i + 6], 15, -1560198380);
            b = qe3x(b, c, d, a, x[i + 13], 21, 1309151649);
            a = qe3x(a, b, c, d, x[i + 4], 6, -145523070);
            d = qe3x(d, a, b, c, x[i + 11], 10, -1120210379);
            c = qe3x(c, d, a, b, x[i + 2], 15, 718787259);
            b = qe3x(b, c, d, a, x[i + 9], 21, -343485551);
            a = nh2x(a, bHF5K);
            b = nh2x(b, bFF4J);
            c = nh2x(c, bFl4p);
            d = nh2x(d, bEr4v)
        }
        return [a, b, c, d]
    };
    var blZ0x = function(K8C, i8a) {
        var wq5v = vY5d(K8C, !0);
        if (wq5v.length > 16) wq5v = Pt1x(wq5v, K8C.length * oq3x);
        var Jz9q = Array(16),
        AI7B = Array(16);
        for (var i = 0; i < 16; i++) {
            Jz9q[i] = wq5v[i] ^ 909522486;
            AI7B[i] = wq5v[i] ^ 1549556828
        }
        var cZ9Q = Pt1x(Jz9q.concat(vY5d(i8a, !0)), 512 + i8a.length * oq3x);
        return Pt1x(AI7B.concat(cZ9Q), 512 + 128)
    };
    var Pv1x = function(x, br8j) {
        x[br8j >> 5] |= 128 << 24 - br8j % 32;
        x[(br8j + 64 >> 9 << 4) + 15] = br8j;
        var w = Array(80),
        a = 1732584193,
        b = -271733879,
        c = -1732584194,
        d = 271733878,
        e = -1009589776;
        for (var i = 0,
        l = x.length,
        ccd1x, caj0x, bbk5p, bYF0x, bYx0x; i < l; i += 16) {
            ccd1x = a;
            caj0x = b;
            bbk5p = c;
            bYF0x = d;
            bYx0x = e;
            for (var j = 0; j < 80; j++) {
                w[j] = j < 16 ? x[i + j] : bgB6v(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                var t = nh2x(nh2x(bgB6v(a, 5), cwj5o(j, b, c, d)), nh2x(nh2x(e, w[j]), cwi5n(j)));
                e = d;
                d = c;
                c = bgB6v(b, 30);
                b = a;
                a = t
            }
            a = nh2x(a, ccd1x);
            b = nh2x(b, caj0x);
            c = nh2x(c, bbk5p);
            d = nh2x(d, bYF0x);
            e = nh2x(e, bYx0x)
        }
        return [a, b, c, d, e]
    };
    var blT0x = function(K8C, i8a) {
        var wq5v = vY5d(K8C);
        if (wq5v.length > 16) wq5v = Pv1x(wq5v, K8C.length * oq3x);
        var Jz9q = Array(16),
        AI7B = Array(16);
        for (var i = 0; i < 16; i++) {
            Jz9q[i] = wq5v[i] ^ 909522486;
            AI7B[i] = wq5v[i] ^ 1549556828
        }
        var cZ9Q = Pv1x(Jz9q.concat(vY5d(i8a)), 512 + i8a.length * oq3x);
        return Pv1x(AI7B.concat(cZ9Q), 512 + 160)
    };
    p.cTg0x = function(K8C, i8a) {
        return Xp3x(blT0x(K8C, i8a))
    };
    p.cTm0x = function(K8C, i8a) {
        return OE1x(blT0x(K8C, i8a))
    };
    p.cTv0x = function(K8C, i8a) {
        return bgP6J(blT0x(K8C, i8a))
    };
    p.cTy0x = function(K8C, i8a) {
        return Xp3x(blZ0x(K8C, i8a), !0)
    };
    p.cTz0x = function(K8C, i8a) {
        return OE1x(blZ0x(K8C, i8a), !0)
    };
    p.cTA0x = function(K8C, i8a) {
        return bgP6J(blZ0x(K8C, i8a), !0)
    };
    p.cTD0x = function(i8a) {
        return Xp3x(Pv1x(vY5d(i8a), i8a.length * oq3x))
    };
    p.cTE0x = function(i8a) {
        return OE1x(Pv1x(vY5d(i8a), i8a.length * oq3x))
    };
    p.cTF0x = function(i8a) {
        return bgP6J(Pv1x(vY5d(i8a), i8a.length * oq3x))
    };
    p.lT2x = function(i8a) {
        return Xp3x(Pt1x(vY5d(i8a, !0), i8a.length * oq3x), !0)
    };
    p.cTG0x = function(i8a) {
        return OE1x(Pt1x(vY5d(i8a, !0), i8a.length * oq3x), !0)
    };
    p.cTH0x = function(i8a) {
        return bgP6J(Pt1x(vY5d(i8a, !0), i8a.length * oq3x), !0)
    };
    p.cTJ0x = function(i8a) {
        return Xp3x(vY5d(i8a, !0), !0)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    v8n = c8g("nej.j"),
    be8W = c8g("nej.o"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    bD9u = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.bKW6Q = NEJ.C();
    b8h = n8f.bKW6Q.M8E(n8f.es0x, !0);
    b8h.cC9t = function() {
        this.cK9B()
    };
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.Jn9e = j8b[0];
        this.blF0x = j8b[1];
        this.bmM0x = j8b[2];
        h8b.s8k(j8b[3], "click", this.blB0x.f8d(this))
    };
    b8h.ci9Z = function() {
        this.cg9X = "ntp-alert"
    };
    b8h.bp8h = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        this.bq8i(e8e);
        a7h.bd8V(this.Jn9e, "display", "");
        if (e8e.type == "noicon") {
            a7h.bd8V(this.Jn9e, "display", "none")
        } else if (e8e.type == "success") {
            a7h.fx0x(this.Jn9e, "u-icn-88", "u-icn-89")
        } else {
            a7h.fx0x(this.Jn9e, "u-icn-89", "u-icn-88")
        }
        this.blF0x.innerHTML = e8e.mesg || "";
        if (e8e.mesg2) {
            a7h.y8q(this.bmM0x, "f-hide");
            this.bmM0x.innerHTML = e8e.mesg2 || ""
        } else {
            a7h.w8o(this.bmM0x, "f-hide")
        }
    };
    b8h.bC9t = function() {
        this.bH9y()
    };
    b8h.blB0x = function(d8f) {
        this.z8r("onnotice");
        this.bu9l()
    };
    n8f.eX0x = function(e8e) {
        if (this.BN7G) {
            this.BN7G.W8O();
            delete this.BN7G
        }
        this.BN7G = n8f.bKW6Q.B8t(e8e);
        this.BN7G.J8B()
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    G8y = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    K8C = "RADIO_LATEST_MAP",
    b8h,
    L8D;
    q8i.fD0x({
        "radio_crt-list": {
            url: "/api/djradio/get/byuser",
            format: function(T8L, e8e) {
                var j8b = T8L.djRadios;
                return {
                    total: j8b.length || 0,
                    list: j8b
                }
            }
        },
        "radio_sub-list": {
            url: "/api/djradio/get/subed",
            format: function(T8L, e8e) {
                var j8b = T8L.djRadios;
                e8e.data.time = T8L.time;
                return {
                    total: T8L.count || 0,
                    list: j8b
                }
            }
        },
        "radio_sub-add": {
            url: "/api/djradio/subscribe/v1",
            filter: function(e8e) {
                e8e.data = {
                    radioId: e8e.id
                };
                if (e8e.ext && e8e.ext.data && e8e.ext.data.token) {
                    e8e.data.token = e8e.ext.data.token
                }
            },
            format: function(T8L, e8e) {
                if (this.bZz0x("firstSub")) {
                    n8f.eX0x({
                        title: "订阅成功",
                        type: "noicon",
                        mesg: "可以在“我的音乐-我的电台”收到节目更新"
                    })
                } else {
                    n8f.bb8T.J8B({
                        tip: "订阅成功"
                    })
                }
                var dN0x = this.eY0x(e8e.id) || e8e.ext.data;
                dN0x.subCount += 1;
                dN0x.subed = true;
                return dN0x
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.pz3x, "listchange", d8f);
                h8b.z8r(q8i.pz3x, "itemchange", {
                    attr: "subCount",
                    data: d8f.data
                })
            },
            onmessage: function(cd9U) {
                if (cd9U == 315) {
                    n8f.bb8T.J8B({
                        tip: "根据对方设置，你没有该操作权限",
                        type: 2
                    })
                } else if (cd9U == 250) {
                    n8f.bb8T.J8B({
                        tip: "操作失败，账号存在异常",
                        type: 2
                    })
                }
            }
        },
        "radio_sub-del": {
            url: "/api/djradio/unsub",
            filter: function(e8e) {
                e8e.data = {
                    id: e8e.id
                }
            },
            format: function(T8L, e8e) {
                n8f.bb8T.J8B({
                    tip: "取消订阅成功"
                });
                var dN0x = this.eY0x(e8e.id) || e8e.ext.data;
                dN0x.subCount -= 1;
                dN0x.subed = false;
                return dN0x
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.pz3x, "listchange", d8f);
                h8b.z8r(q8i.pz3x, "itemchange", {
                    attr: "subCount",
                    data: d8f.data
                })
            }
        }
    });
    q8i.pz3x = NEJ.C();
    b8h = q8i.pz3x.M8E(q8i.if1x);
    b8h.cCp6j = function(dh9Y, bA9r) {
        var bB9s = this.JH9y(K8C, {});
        bB9s[dh9Y.radio.id] = {
            id: dh9Y.id,
            name: dh9Y.name,
            time: bA9r || 0
        };
        this.yx6r(K8C, bB9s)
    };
    b8h.cCo6i = function(D8v) {
        return this.JH9y(K8C, {})[D8v]
    };
    b8h.bZM0x = function(dN0x) {
        var cA9r = {
            key: "radio_sub",
            ext: {}
        };
        if (k8c.mz2x(dN0x)) {
            cA9r.id = dN0x.id;
            cA9r.ext.data = dN0x
        } else {
            cA9r.id = dN0x
        }
        return cA9r
    };
    b8h.oz3x = function(dN0x) {
        if (l8d.hp1x()) this.ka2x(this.bZM0x(dN0x))
    };
    b8h.bZN0x = function(dN0x) {
        l8d.hT1x({
            btnok: "确定",
            btncc: "取消",
            message: "确定取消订阅？",
            action: function(C8u) {
                if (C8u == "ok") {
                    this.Op1x(this.bZM0x(dN0x))
                }
            }.f8d(this)
        })
    };
    b8h.bZz0x = function() {
        var up5u = "RADIO_UPGRADE_TIP";
        return function(t8l) {
            var i8a = this.JH9y(up5u, {});
            if (i8a[t8l]) {
                return false
            } else {
                i8a[t8l] = true;
                this.yx6r(up5u, i8a);
                return true
            }
        }
    } ();
    G8y.fV0x.B8t({
        element: q8i.pz3x,
        event: ["listchange", "itemchange"]
    })
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    h8b = c8g("nej.v"),
    G8y = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    v8n = c8g("nej.j"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    x8p = c8g("nm.w"),
    b8h;
    var QUEUE_KEY = "track-queue";
    var PlayMode = {
        SINGLE_CYCLE: 2,
        LIST_LOOP: 4,
        RANDOM: 5
    };
    x8p.uP5U = NEJ.C();
    b8h = x8p.uP5U.M8E(G8y.cO9F);
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.by9p = x8p.gp1x.fW0x();
        this.ko2x = [];
        this.Cz7s = [];
        this.oy3x = l8d.bxd2x();
        this.fG0x = 0;
        this.bZ9Q([[x8p.gp1x, "playaction", this.yG6A.f8d(this)]]);
        this.lq2x = q8i.ij1x.B8t();
        this.zb6V = q8i.pz3x.B8t();
        this.cuL5Q()
    };
    b8h.bC9t = function() {
        this.bH9y();
        delete this.ko2x;
        delete this.Cz7s;
        delete this.oy3x
    };
    b8h.bhS8K = function() {
        v8n.xR6L(QUEUE_KEY, this.ko2x)
    };
    b8h.cuJ5O = function() {
        var vJ5O = [PlayMode.SINGLE_CYCLE, PlayMode.LIST_LOOP, PlayMode.RANDOM];
        return function() {
            var eE0x, r8j = k8c.du0x(vJ5O, this.oy3x.mode);
            eE0x = r8j < 0 ? PlayMode.LIST_LOOP: vJ5O[(r8j + 1) % 3];
            this.oy3x.mode = eE0x;
            if (this.SA2x()) {
                this.bvV2x()
            }
            l8d.HM9D(this.oy3x);
            return this.oy3x.mode
        }
    } ();
    b8h.cuH5M = function() {
        return this.oy3x.mode
    };
    b8h.qf3x = function() {
        this.Ja9R(this.bKk5p( + 1), "ui")
    };
    b8h.FU8M = function() {
        this.Ja9R(this.bKk5p( - 1), "ui")
    };
    b8h.ti4m = function() {
        return this.ko2x[this.fG0x]
    };
    b8h.cuE5J = function(jB1x, tK4O, gA1x) {
        if (!jB1x || !jB1x.length) return;
        var bB9s = {},
        qQ4U = jB1x[0];
        if (!tK4O) {
            k8c.bf8X(this.ko2x,
            function(bn8f) {
                bB9s[bn8f.id] = bn8f
            });
            k8c.bf8X(jB1x,
            function(bn8f) {
                if (bB9s[bn8f.id]) {
                    if (qQ4U.id == bn8f.id) {
                        qQ4U = bB9s[bn8f.id]
                    }
                } else {
                    this.ko2x.push(bn8f)
                }
            },
            this)
        } else {
            this.ko2x = jB1x
        }
        if (this.SA2x()) {
            this.bvV2x()
        }
        if (gA1x) {
            this.Ja9R(k8c.du0x(this.ko2x, qQ4U));
            this.by9p.ey0x()
        }
        this.bhS8K();
        h8b.z8r(x8p.uP5U, "queuechange", {
            cmd: gA1x ? "play": "addto"
        })
    };
    b8h.no3x = function(BL7E) {
        var r8j = k8c.du0x(this.ko2x,
        function(bn8f) {
            return bn8f.id == BL7E
        });
        if (r8j != -1) {
            var cuA5F = r8j == this.fG0x && this.ko2x.length > 1,
            cuz5E = r8j == this.ko2x.length - 1,
            bn8f = this.ko2x[r8j];
            this.ko2x.splice(r8j, 1);
            if (this.SA2x()) {
                this.Cz7s.splice(k8c.du0x(this.Cz7s, bn8f), 1)
            }
            if (cuA5F) {
                if (cuz5E) {
                    this.Ja9R(r8j - 1)
                } else {
                    this.Ja9R(r8j)
                }
            } else if (r8j < this.fG0x) {
                this.fG0x--
            }
            this.bhS8K();
            h8b.z8r(x8p.uP5U, "queuechange", {
                cmd: "delete"
            })
        }
    };
    b8h.rm4q = function() {
        this.ko2x = [];
        this.Cz7s = [];
        this.oy3x.index = this.fG0x = 0;
        l8d.HM9D(this.oy3x);
        this.bhS8K();
        h8b.z8r(x8p.uP5U, "queuechange", {
            cmd: "clear"
        })
    };
    b8h.ti4m = function() {
        return this.ko2x[this.fG0x]
    };
    b8h.bKp5u = function() {
        return this.ko2x
    };
    b8h.lY2x = function() {
        return this.ko2x.length
    };
    b8h.bwa2x = function(D8v) {
        var r8j = k8c.du0x(this.ko2x,
        function(bn8f) {
            return D8v == bn8f.id
        });
        if (r8j >= 0) {
            return this.ko2x[r8j]
        }
    };
    b8h.cuy5D = function(D8v) {
        var r8j = k8c.du0x(this.ko2x,
        function(bn8f) {
            return D8v == bn8f.id
        });
        if (r8j >= 0) {
            this.Ja9R(r8j);
            this.by9p.ey0x()
        }
    };
    b8h.cuL5Q = function() {
        this.ko2x = v8n.vj5o(QUEUE_KEY) || [];
        this.fG0x = this.oy3x.index || 0;
        if (this.ko2x.length && this.SA2x()) {
            this.bvV2x()
        }
        this.by9p.biJ9A(this.ti4m())
    };
    b8h.bKk5p = function(dA0x) {
        if (this.SA2x()) {
            var hJ1x = this.ti4m(),
            r8j = inRange(k8c.du0x(this.Cz7s, hJ1x) + dA0x, this.Cz7s.length);
            return k8c.du0x(this.ko2x, this.Cz7s[r8j])
        } else {
            return inRange(this.fG0x + dA0x, this.ko2x.length)
        }
        function inRange(r8j, br8j) {
            return r8j < 0 ? br8j - 1 : r8j >= br8j ? 0 : r8j
        }
    };
    b8h.bvV2x = function() {
        var j8b = this.ko2x.slice(0);
        this.Cz7s = [];
        while (j8b.length) {
            var r8j = k8c.Dx7q(0, j8b.length - 1);
            this.Cz7s.push(j8b[r8j]);
            j8b.splice(r8j, 1)
        }
    };
    b8h.Ja9R = function(r8j, t8l) {
        if (!this.ko2x.length) return;
        var jN1x, ou3x = this.ti4m(),
        bKs6m = this.by9p.biY9P();
        this.fG0x = r8j;
        this.oy3x.index = this.fG0x;
        jN1x = this.ko2x[this.fG0x];
        l8d.HM9D(this.oy3x);
        h8b.z8r(x8p.uP5U, "playchange", {
            old: ou3x,
            "new": jN1x,
            type: t8l
        });
        this.by9p.biJ9A(this.ti4m());
        if (ou3x && bKs6m > 3) {
            this.lq2x.bwE2x(ou3x.id, bKs6m, ou3x.source, t8l || "interrupt")
        }
        if (jN1x && jN1x.program) this.zb6V.cCp6j(jN1x.program, 0)
    };
    b8h.SA2x = function() {
        return this.oy3x.mode == PlayMode.RANDOM
    };
    b8h.yG6A = function(d8f) {
        if (d8f.action == "ended") {
            if (this.oy3x.mode == PlayMode.SINGLE_CYCLE) {
                this.Ja9R(this.fG0x, "playend")
            } else {
                this.qf3x()
            }
        }
    };
    G8y.fV0x.B8t({
        element: x8p.uP5U,
        event: ["queuechange", "playchange"]
    })
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    cG9x = c8g("nej.p"),
    v8n = c8g("nej.j"),
    bc8U = c8g("nej.ui"),
    G8y = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    dL0x = c8g("nm.u"),
    x8p = c8g("nm.w"),
    N8F = c8g("nm.m.f"),
    b8h,
    L8D;
    N8F.bKt6n = NEJ.C();
    b8h = N8F.bKt6n.M8E(bc8U.eu0x);
    b8h.cC9t = function() {
        this.cK9B();
        this.hV1x = x8p.uP5U.fW0x();
        h8b.s8k(x8p.uP5U, "queuechange", this.zN6H.f8d(this));
        h8b.s8k(x8p.uP5U, "playchange", this.hU1x.f8d(this))
    };
    b8h.ci9Z = function() {
        this.cg9X = "m-player-panel"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.bhK8C = j8b[0];
        this.ll2x = j8b[1];
        this.SB2x = j8b[2];
        this.bL9C = j8b[3];
        this.SF2x = j8b[4];
        this.jF1x = x8p.zW6Q.B8t({
            track: this.SF2x,
            slide: a7h.dn9e(this.SF2x)[0],
            content: this.bL9C,
            speed: 4
        });
        this.ck9b = {
            nask: j8b[5],
            nmenu: j8b[6],
            nlist: j8b[7],
            nscroll: j8b[8]
        };
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this));
        h8b.s8k(this.SB2x, "load", this.rA4E.f8d(this))
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.po3x = x8p.bKy6s.B8t(this.ck9b);
        this.hU1x({
            "new": this.hV1x.ti4m()
        });
        this.jF1x.ru4y();
        var j8b = a7h.F8x(this.bL9C, "z-sel");
        if (j8b.length) {
            var bl8d = a7h.ir1x(j8b[0], this.bL9C);
            this.bL9C.scrollTop = this.bL9C.scrollTop + (bl8d.y - (this.bL9C.scrollTop + 112));
            this.jF1x.bGR5W()
        }
    };
    b8h.bC9t = function() {
        this.z8r("onclose");
        if (this.po3x) {
            this.po3x.W8O();
            delete this.po3x
        }
        this.bH9y()
    };
    b8h.zN6H = function(d8f) {
        a7h.dI0x(this.bL9C, "m-player-queue", {
            queue: this.hV1x.bKp5u(),
            current: this.hV1x.ti4m()
        },
        {
            dur2time: l8d.lW2x,
            getArtistName: l8d.tM4Q
        });
        this.bhK8C.innerText = this.hV1x.lY2x();
        if (d8f && d8f.cmd == "delete") return;
        var j8b = a7h.F8x(this.bL9C, "z-sel");
        if (j8b.length) {
            var bl8d = a7h.ir1x(j8b[0], this.bL9C);
            this.bL9C.scrollTop = Math.max(Math.min(bl8d.y, this.bL9C.scrollTop), bl8d.y - 224);
            this.jF1x.bGR5W()
        }
    };
    b8h.bT9K = function(d8f) {
        var g8c, D8v, bKz6t;
        g8c = h8b.ba8S(d8f, "a:href");
        if (g8c && g8c.tagName.toLocaleLowerCase() == "a" && /^http/.test(g8c.href)) {
            return
        }
        h8b.uQ5V(d8f);
        g8c = h8b.ba8S(d8f, "d:action");
        D8v = a7h.u8m(g8c, "id");
        switch (a7h.u8m(g8c, "action")) {
        case "likeall":
            var kS2x = this.hV1x.bKp5u();
            if (kS2x && kS2x.length) {
                var j8b = [];
                k8c.bf8X(kS2x,
                function(p8h) {
                    if (!p8h.program) j8b.push(p8h)
                });
                window.subscribe(j8b, !1);
                this.W8O()
            }
            break;
        case "delete":
            this.hV1x.no3x(D8v);
            h8b.bi8a(d8f);
            break;
        case "like":
            var bn8f = this.hV1x.bwa2x(D8v);
            window.subscribe(bn8f, false);
            h8b.bi8a(d8f);
            this.W8O();
            break;
        case "share":
            bn8f = this.hV1x.bwa2x(D8v); ! bn8f.program ? l8d.lE2x({
                rid: bn8f.id,
                type: 18,
                purl: bn8f.album.picUrl,
                name: bn8f.name,
                author: l8d.Ar6l(bn8f.artists)
            }) : l8d.lE2x({
                rid: bn8f.program.id,
                type: 17,
                purl: bn8f.program.coverUrl,
                name: bn8f.program.name,
                author: (bn8f.program.radio || []).name
            });
            h8b.bi8a(d8f);
            this.W8O();
            break;
        case "download":
            bn8f = this.hV1x.bwa2x(D8v);
            if (bn8f.program) {
                l8d.OB1x({
                    type: 17,
                    id: bn8f.program.id
                })
            } else {
                bKz6t = l8d.qJ4N(bn8f);
                if (bKz6t == 1e3) {
                    l8d.jc1x("因版权方要求，该歌曲不支持下载")
                } else {
                    l8d.OB1x({
                        type: 18,
                        id: bn8f.id
                    })
                }
            }
            this.W8O();
            break;
        case "play":
            this.hV1x.cuy5D(D8v);
            break;
        case "clear":
            this.hV1x.rm4q();
            break;
        case "close":
            this.W8O();
            break
        }
    };
    b8h.hU1x = function(d8f) {
        var IR9I = d8f["new"];
        if (IR9I) {
            this.po3x && this.po3x.cut5y(IR9I);
            if (IR9I.program) {
                this.SB2x.src = IR9I.program.blurCoverUrl;
                this.ll2x.innerText = IR9I.program.name
            } else {
                var bkf9W, Mu0x;
                k8c.bf8X(["pic_str", "pic", "picId_str", "picId", "picStr"],
                function(K8C) {
                    var p8h = (IR9I.album || {})[K8C];
                    if (k8c.fX0x(p8h)) {
                        bkf9W = bkf9W || p8h
                    } else {
                        Mu0x = Mu0x || p8h
                    }
                });
                this.SB2x.src = "//music.163.com/api/img/blur/" + (bkf9W || Mu0x);
                this.ll2x.innerText = IR9I.name
            }
        }
        this.zN6H()
    };
    b8h.rA4E = function(d8f) {
        var cb9S = this.SB2x.clientHeight,
        cus5x = this.bL9C.parentNode.clientHeight;
        a7h.bd8V(this.SB2x, "top", (cus5x - cb9S) / 2 + "px")
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    P8H = c8g("nej.ut"),
    b8h;
    if ( !! P8H.bls0x) return;
    P8H.bls0x = NEJ.C();
    b8h = P8H.bls0x.M8E(P8H.cO9F);
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.bhN8F = e8e.to || be8W;
        this.Ye3x = e8e.from || {};
        this.cqo4s = Math.max(0, parseInt(e8e.delay) || 0)
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.bi8a();
        if ( !! this.Yb3x) {
            window.clearTimeout(this.Yb3x);
            delete this.Yb3x
        }
        delete this.bhN8F;
        delete this.Ye3x
    };
    b8h.bNU6O = function(bA9r) {
        if (!this.Ye3x) return;
        if (("" + bA9r).indexOf(".") >= 0) bA9r = +(new Date);
        if (this.bOb6V(bA9r)) {
            this.bi8a();
            return
        }
        this.dM0x = requestAnimationFrame(this.bNU6O.f8d(this))
    };
    b8h.bOb6V = bs8k;
    b8h.ey0x = function() {
        var cqr4v = function() {
            this.Yb3x = window.clearTimeout(this.Yb3x);
            this.Ye3x.time = +(new Date);
            this.dM0x = requestAnimationFrame(this.bNU6O.f8d(this))
        };
        return function() {
            this.Yb3x = window.setTimeout(cqr4v.f8d(this), this.cqo4s);
            return this
        }
    } ();
    b8h.bi8a = function() {
        this.dM0x = cancelRequestAnimationFrame(this.dM0x);
        this.z8r("onstop");
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    k8c = c8g("nej.u"),
    P8H = c8g("nej.ut"),
    b8h,
    L8D;
    if ( !! P8H.Iu9l) return;
    P8H.Iu9l = NEJ.C();
    b8h = P8H.Iu9l.M8E(P8H.bls0x);
    L8D = P8H.Iu9l.cx9o;
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.bhE8w = e8e.duration || 200;
        this.cre4i = 1 / (200 * this.bhE8w);
        this.crl4p(e8e.timing);
        this.crE4I()
    };
    b8h.bC9t = function() {
        this.bH9y();
        delete this.PF1x;
        delete this.blz0x
    };
    b8h.crl4p = function() {
        var ho1x = /^cubic\-bezier\((.*?)\)$/i,
        lp2x = /\s*,\s*/i,
        bPH7A = {
            linear: [0, 0, 1, 1],
            ease: [.25, .1, .25, 1],
            easein: [.42, 0, 1, 1],
            easeout: [0, 0, .58, 1],
            easeinout: [0, 0, .58, 1]
        };
        var crX4b = function(C8u, r8j, j8b) {
            j8b[r8j] = parseFloat(C8u)
        };
        return function(bhC8u) {
            bhC8u = (bhC8u || "").toLowerCase();
            this.PF1x = bPH7A[bhC8u];
            if (ho1x.test(bhC8u)) {
                this.PF1x = RegExp.$1.split(lp2x);
                k8c.bf8X(this.PF1x, crX4b)
            }
            if ( !! this.PF1x) return;
            this.PF1x = bPH7A.ease
        }
    } ();
    b8h.crE4I = function() {
        var PD1x = this.PF1x,
        blC0x = 3 * PD1x[0],
        bQx7q = 3 * (PD1x[2] - PD1x[0]) - blC0x,
        cso4s = 1 - blC0x - bQx7q,
        blD0x = 3 * PD1x[1],
        bQY8Q = 3 * (PD1x[3] - PD1x[1]) - blD0x,
        csp4t = 1 - blD0x - bQY8Q;
        this.blz0x = {
            ax: cso4s,
            ay: csp4t,
            bx: bQx7q,
            by: bQY8Q,
            cx: blC0x,
            cy: blD0x
        }
    };
    b8h.css4w = function() {
        var bRi8a = function(bA9r, qP4T) {
            return ((qP4T.ax * bA9r + qP4T.bx) * bA9r + qP4T.cx) * bA9r
        };
        var ctx4B = function(bA9r, qP4T) {
            return ((qP4T.ay * bA9r + qP4T.by) * bA9r + qP4T.cy) * bA9r
        };
        var ctO5T = function(bA9r, qP4T) {
            return (3 * qP4T.ax * bA9r + 2 * qP4T.bx) * bA9r + qP4T.cx
        };
        var ctY5d = function(bA9r, bRY8Q, qP4T) {
            var t0, t1, t2, x2, d2, i;
            for (t2 = bA9r, i = 0; i < 8; i++) {
                x2 = bRi8a(t2, qP4T) - bA9r;
                if (Math.abs(x2) < bRY8Q) return t2;
                d2 = ctO5T(t2, qP4T);
                if (Math.abs(d2) < 1e-6) break;
                t2 = t2 - x2 / d2
            }
            t0 = 0;
            t1 = 1;
            t2 = bA9r;
            if (t2 < t0) return t0;
            if (t2 > t1) return t1;
            while (t0 < t1) {
                x2 = bRi8a(t2, qP4T);
                if (Math.abs(x2 - bA9r) < bRY8Q) return t2;
                if (bA9r > x2) t0 = t2;
                else t1 = t2;
                t2 = (t1 - t0) * .5 + t0
            }
            return t2
        };
        return function(dA0x) {
            return ctx4B(ctY5d(dA0x / this.bhE8w, this.cre4i, this.blz0x), this.blz0x)
        }
    } ();
    b8h.bOb6V = function(bA9r) {
        var dA0x = bA9r - this.Ye3x.time,
        BT7M = this.css4w(dA0x),
        bl8d = k8c.PU1x(this.Ye3x.offset * (1 - BT7M) + this.bhN8F.offset * BT7M, 2),
        og3x = !1;
        if (dA0x >= this.bhE8w) {
            bl8d = this.bhN8F.offset;
            og3x = !0
        }
        this.z8r("onupdate", {
            offset: bl8d
        });
        return og3x
    };
    b8h.bi8a = function() {
        this.z8r("onupdate", {
            offset: this.bhN8F.offset
        });
        L8D.bi8a.apply(this, arguments);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    P8H = c8g("nej.ut"),
    b8h;
    if ( !! P8H.IS9J) return;
    P8H.IS9J = NEJ.C();
    b8h = P8H.IS9J.M8E(P8H.Iu9l);
    b8h.bp8h = function(e8e) {
        e8e = NEJ.X({},
        e8e);
        e8e.timing = "easein";
        this.bq8i(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    P8H = c8g("nej.ut"),
    yZ6T;
    P8H.Kc9T = NEJ.C();
    yZ6T = P8H.Kc9T.M8E(P8H.cO9F);
    yZ6T.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.czk6e = !!e8e.reset;
        this.Yc3x = parseInt(e8e.delta) || 0;
        this.kb2x = a7h.A8s(e8e.track);
        this.bFs4w = a7h.A8s(e8e.progress);
        this.bZ9Q([[e8e.thumb, "mousedown", this.czi6c.f8d(this)], [document, "mousemove", this.bFu4y.f8d(this)], [document, "mouseup", this.btI1x.f8d(this)], [this.kb2x, "mousedown", this.bFw4A.f8d(this)]]);
        var fC0x = e8e.value;
        if (fC0x == null) {
            fC0x = this.bFs4w.offsetWidth / this.kb2x.offsetWidth
        }
        this.hi1x(fC0x)
    };
    yZ6T.bC9t = function() {
        if ( !! this.czk6e) this.UU2x(0);
        this.bH9y()
    };
    yZ6T.czi6c = function(d8f) {
        if ( !! this.iC1x) return;
        h8b.bi8a(d8f);
        this.iC1x = h8b.kr2x(d8f);
        this.bFy4C = this.kb2x.offsetWidth
    };
    yZ6T.bFu4y = function(d8f) {
        if (!this.iC1x) return;
        var bl8d = h8b.kr2x(d8f),
        dA0x = bl8d - this.iC1x;
        this.iC1x = bl8d;
        this.UU2x(this.Ko9f + dA0x / this.bFy4C);
        this.z8r("onslidechange", {
            ratio: this.Ko9f
        })
    };
    yZ6T.btI1x = function(d8f) {
        if (!this.iC1x) return;
        this.bFu4y(d8f);
        delete this.iC1x;
        delete this.bFy4C;
        this.z8r("onslidestop", {
            ratio: this.Ko9f
        })
    };
    yZ6T.bFw4A = function(d8f) {
        var czh6b = a7h.ir1x(this.kb2x).x,
        czg6a = h8b.kr2x(d8f);
        this.UU2x((czg6a - czh6b + this.Yc3x) / this.kb2x.offsetWidth);
        this.z8r("onslidestop", {
            ratio: this.Ko9f
        })
    };
    yZ6T.UU2x = function(fC0x) {
        this.Ko9f = Math.max(0, Math.min(1, fC0x));
        a7h.bd8V(this.bFs4w, "width", this.Ko9f * 100 + "%")
    };
    yZ6T.hi1x = function(fC0x) {
        if ( !! this.iC1x) return;
        this.UU2x(fC0x)
    };
    yZ6T.bsQ1x = function(fC0x) {
        return this.Ko9f
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    gL1x = c8g("nm.ut");
    gL1x.cur5w = function() {
        var LF0x = function(bv9m, cl9c, qm3x, ql3x, Aq6k) {
            if (qm3x < ql3x) {
                var IM9D = Math.floor((qm3x + ql3x) / 2);
                LF0x(bv9m, cl9c, qm3x, IM9D, Aq6k);
                LF0x(bv9m, cl9c, IM9D + 1, ql3x, Aq6k);
                cuo5t(bv9m, cl9c, qm3x, IM9D, ql3x, Aq6k)
            }
        };
        var cuo5t = function(bv9m, cl9c, qm3x, IM9D, ql3x, Aq6k) {
            var i = qm3x,
            j = IM9D + 1,
            k = qm3x;
            while (i <= IM9D && j <= ql3x) {
                if (Aq6k(bv9m[i], bv9m[j]) <= 0) {
                    cl9c[k++] = bv9m[i++]
                } else {
                    cl9c[k++] = bv9m[j++]
                }
            }
            while (i <= IM9D) {
                cl9c[k++] = bv9m[i++]
            }
            while (j <= ql3x) {
                cl9c[k++] = bv9m[j++]
            }
            for (i = qm3x; i <= ql3x; i++) {
                bv9m[i] = cl9c[i]
            }
        };
        var cul5q = function(hz1x, bwh2x) {
            return hz1x < bwh2x
        };
        return function(bv9m, Aq6k) {
            if (!bv9m || bv9m.length == 0) return bv9m;
            Aq6k = Aq6k || cul5q;
            LF0x(bv9m, new Array(bv9m.length), 0, bv9m.length - 1, Aq6k);
            return bv9m
        }
    } ();
    gL1x.bwi2x = function() {
        var ho1x = /\r\n|\r|\n/,
        lp2x = /\[(.*?)\]/gi,
        buw2x = {
            ar: "artist",
            ti: "track",
            al: "album",
            offset: "offset"
        };
        var bux2x = function(m8e, ie1x) {
            var bv9m = [];
            ie1x = ie1x.replace(lp2x,
            function($1, $2) {
                var bA9r = buy2x.call(this, m8e, $2);
                if (bA9r != null) {
                    bv9m.push({
                        time: bA9r,
                        tag: $2
                    });
                    m8e.scrollable = !0
                }
                return ""
            }.f8d(this)).trim();
            if (!bv9m.length) {
                if (!ie1x || ie1x.length == 0) return;
                bv9m.push({
                    time: -1
                })
            }
            k8c.bf8X(bv9m,
            function(p8h) {
                p8h.lyric = ie1x
            });
            var zC6w = m8e.lines;
            zC6w.push.apply(zC6w, bv9m)
        };
        var buy2x = function(m8e, bA9r) {
            var bv9m = bA9r.split(":"),
            wP5U = bv9m.shift(),
            K8C = buw2x[wP5U];
            if ( !! K8C) {
                m8e[K8C] = bv9m.join(":");
                return null
            }
            wP5U = parseInt(wP5U);
            if (isNaN(wP5U)) {
                return null
            } else {
                var bl8d = parseInt(m8e.offset) || 0;
                return wP5U * 60 + parseFloat(bv9m.join(".")) + bl8d / 1e3
            }
        };
        var buA2x = function(buB2x, kJ2x) {
            return buB2x.time - kJ2x.time
        };
        return function(D8v, bt9k) {
            var m8e = {
                id: D8v,
                lines: [],
                scrollable: !1,
                source: bt9k
            };
            k8c.bf8X((bt9k || "").trim().split(ho1x), bux2x.f8d(null, m8e));
            if (m8e.scrollable) {
                gL1x.cur5w(m8e.lines, buA2x);
                var r8j;
                for (var i = 0; i < m8e.lines.length; i++) {
                    if ( !! m8e.lines[i].lyric) {
                        r8j = i;
                        break
                    }
                }
                m8e.lines.splice(0, r8j)
            }
            return m8e
        }
    } ();
    gL1x.bKM6G = function(xU6O, bhv8n) {
        var bwk2x = gL1x.bwi2x(0, xU6O),
        bwl2x = gL1x.bwi2x(0, bhv8n);
        if (bwk2x.scrollable && bwl2x.scrollable) {
            k8c.bf8X(bwk2x.lines,
            function(p8h) {
                var bhu8m = getTranslate(p8h.time);
                if (bhu8m) {
                    p8h.lyric = p8h.lyric + "<br>" + bhu8m.lyric
                }
            })
        }
        return bwk2x;
        function getTranslate(bA9r) {
            var r8j = k8c.du0x(bwl2x.lines,
            function(p8h) {
                return p8h.time == bA9r
            });
            if (r8j != -1) {
                return bwl2x.lines[r8j]
            }
        }
    }
})(); (function() {
    var P8H = NEJ.P("nej.ut"),
    bSp8h;
    if ( !! P8H.uE5J) return;
    P8H.uE5J = NEJ.C();
    bSp8h = P8H.uE5J.M8E(P8H.Iu9l);
    bSp8h.bp8h = function(e8e) {
        e8e = NEJ.X({},
        e8e);
        e8e.timing = "linear";
        this.bq8i(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    v8n = c8g("nej.j"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    q8i = c8g("nm.d");
    var bKS6M = function(i8a) {
        if (i8a.errorType == 6 || i8a.errorType == 7 || i8a.errorType == 8) {
            if (!l8d.hp1x()) return;
            l8d.kI2x({
                txt: "m-report-point",
                title: "提示",
                onaction: bKT6N.f8d(this, i8a)
            })
        } else {
            bKT6N(i8a)
        }
    };
    var cud5i = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:action");
        if (a7h.u8m(g8c, "action") == "feedLyric") {
            h8b.bi8a(d8f);
            var cd9U = a7h.u8m(g8c, "code"),
            i8a = {
                songId: a7h.u8m(g8c, "id"),
                errorType: cd9U
            };
            bKS6M(i8a)
        }
    };
    var bKT6N = function(i8a, d8f) {
        if (!d8f || d8f.action == "ok") {
            v8n.bm8e("/api/v1/feedback/lyric", {
                type: "json",
                method: "post",
                data: k8c.cE9v(i8a),
                onload: function(d8f) {
                    if (d8f.code == 200) {
                        n8f.bb8T.J8B({
                            tip: "提交成功"
                        });
                        if (k8c.hf1x(i8a.onok)) {
                            i8a.onok()
                        }
                    } else if (d8f.code == -2) {
                        l8d.hT1x({
                            title: "提示",
                            message: "您的积分不足",
                            btnok: "赚积分",
                            action: function(X8P) {
                                if (X8P == "ok") {
                                    location.dispatch2("/store/gain/index")
                                }
                            }
                        })
                    } else {
                        n8f.bb8T.J8B({
                            type: 2,
                            tip: "提交失败"
                        })
                    }
                }
            })
        }
    };
    l8d.bKV6P = function(g8c) {
        var g8c = g8c || document.body,
        eS0x = cud5i.f8d(this);
        h8b.s8k(g8c, "click", eS0x);
        return {
            destroy: function() {
                h8b.nt3x(g8c, "click", eS0x)
            }
        }
    };
    l8d.cTI0x = function(i8a) {
        bKS6M(i8a)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    v8n = c8g("nej.j"),
    G8y = c8g("nej.ut"),
    P8H = c8g("nej.p"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    dL0x = c8g("nm.ut"),
    x8p = c8g("nm.w"),
    b8h,
    L8D;
    var bwp2x = {};
    x8p.bKy6s = NEJ.C();
    b8h = x8p.bKy6s.M8E(G8y.cO9F);
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.bL9C = e8e.nlist;
        this.TS2x = e8e.nmenu;
        this.bKZ6T = e8e.nask;
        this.wJ5O = {
            track: e8e.nscroll,
            slide: a7h.dn9e(e8e.nscroll)[0],
            content: this.bL9C,
            speed: 4
        };
        this.bwq2x = this.KK0x.f8d(this);
        this.bZ9Q([[e8e.nask, "click", this.ctX5c.f8d(this)], [this.wJ5O.slide, "mousedown", this.bam4q.f8d(this)], [document, "mouseup", this.bal4p.f8d(this)], [x8p.gp1x, "playaction", this.yG6A.f8d(this)]]);
        if (P8H.dC0x.browser != "firefox") {
            this.bZ9Q([[this.bL9C, "mousewheel", this.bwq2x]])
        } else {
            this.bL9C.addEventListener("DOMMouseScroll", this.bwq2x, false)
        }
        this.jF1x = x8p.zW6Q.B8t(this.wJ5O);
        this.bws2x = l8d.bKV6P(this.bL9C);
        this.by9p = x8p.gp1x.fW0x()
    };
    b8h.bC9t = function() {
        this.bH9y();
        delete this.Au6o;
        delete this.uK5P;
        delete this.bho8g;
        if (this.bws2x) {
            this.bws2x.destroy();
            delete this.bws2x
        }
        if (P8H.dC0x.browser == "firefox") {
            this.bL9C.removeEventListener("DOMMouseScroll", this.bwq2x)
        }
        a7h.bd8V(this.TS2x, "display", "none")
    };
    b8h.ctX5c = function() {
        if (a7h.dp9g(this.TS2x, "display") == "none") {
            a7h.bd8V(this.TS2x, "display", "block")
        } else {
            a7h.bd8V(this.TS2x, "display", "none")
        }
    };
    b8h.bwt2x = function() {
        var iB1x = 0;
        return function(XA3x) {
            clearTimeout(iB1x);
            this.bho8g = true;
            if (this.uK5P) {
                this.uK5P.W8O();
                delete this.uK5P
            }
            if (!XA3x) {
                iB1x = setTimeout(function() {
                    delete this.bho8g
                }.f8d(this), 3e3)
            }
        }
    } ();
    b8h.KK0x = function() {
        this.bwt2x()
    };
    b8h.bam4q = function() {
        this.bwt2x(true)
    };
    b8h.yG6A = function(d8f) {
        if (d8f.action == "timeupdate") {
            this.bLh6b(d8f.data.time, true)
        }
    };
    b8h.bLh6b = function(bA9r, ctW5b) {
        if (! (this.Au6o && this.Au6o.scrollable) || this.bho8g) return;
        var i = this.Au6o.lines.length - 1,
        ii, dA0x, r8j = -1,
        bLj6d = 0,
        gw1x = 0;
        for (; i >= 0; i--) {
            ii = this.Au6o.lines[i];
            dA0x = ii.time - bA9r;
            if (dA0x < 0 && (i > 0 || dA0x <= -2)) {
                r8j = i;
                break
            }
        }
        for (var j = 0,
        jj; j < this.bwu2x.length; j++) {
            jj = this.bwu2x[j];
            if (j < r8j) {
                bLj6d += jj.clientHeight
            }
            if (r8j == j) {
                a7h.w8o(jj, "z-sel")
            } else {
                a7h.y8q(jj, "z-sel")
            }
        }
        if (r8j < 0 || a7h.ir1x(this.bwu2x[r8j], this.bL9C).y < 96) {
            gw1x = 0
        } else {
            gw1x = bLj6d - 96
        }
        if (Math.abs(gw1x - this.bL9C.scrollTop) <= 4 || this.uK5P) return;
        if (ctW5b) {
            var cA9r = {
                from: {
                    offset: this.bL9C.scrollTop
                },
                to: {
                    offset: gw1x
                },
                duration: 500,
                onupdate: function(d8f) {
                    this.bL9C.scrollTop = d8f.offset;
                    this.jF1x.Ln0x(this.bL9C.scrollTop / (this.bL9C.scrollHeight - this.bL9C.clientHeight))
                }.f8d(this),
                onstop: function() {
                    if (this.uK5P) {
                        this.uK5P.W8O();
                        delete this.uK5P
                    }
                }.f8d(this)
            };
            this.uK5P = G8y.uE5J.B8t(cA9r);
            this.uK5P.ey0x()
        } else {
            this.bL9C.scrollTop = gw1x;
            this.jF1x.Ln0x(this.bL9C.scrollTop / (this.bL9C.scrollHeight - this.bL9C.clientHeight))
        }
    };
    b8h.cut5y = function(bn8f) {
        this.bhm8e = bn8f;
        delete this.Au6o;
        if (bn8f && !bn8f.program) {
            var Z8R = "/api/song/lyric",
            bx9o = {
                id: bn8f.id,
                lv: -1,
                tv: -1
            };
            if (bwp2x[bn8f.id]) {
                this.bwv2x(bwp2x[bn8f.id])
            } else {
                v8n.bm8e(Z8R, {
                    sync: false,
                    type: "json",
                    query: bx9o,
                    method: "get",
                    onload: this.bwv2x.eO0x(this, bn8f.id),
                    onerror: this.bwv2x.f8d(this)
                })
            }
            a7h.y8q(this.bKZ6T, "f-hide")
        } else {
            a7h.w8o(this.bKZ6T, "f-hide");
            this.bah4l({})
        }
    };
    b8h.bwv2x = function(d8f, D8v) {
        if (d8f.code == 200) {
            if (D8v) {
                bwp2x[D8v] = d8f
            }
            var xU6O = d8f.lrc || {},
            bhu8m = d8f.tlyric || {};
            if (!xU6O.lyric) {
                this.bah4l(d8f)
            } else {
                this.Au6o = dL0x.bKM6G(xU6O.lyric, bhu8m.lyric);
                d8f.scrollable = this.Au6o.scrollable;
                a7h.dI0x(this.bL9C, "m-lyric-line", {
                    id: this.bhm8e.id,
                    lines: this.Au6o.lines,
                    scrollable: this.Au6o.scrollable
                });
                this.bwu2x = a7h.F8x(this.bL9C, "j-flag")
            }
            d8f.songId = this.bhm8e.id;
            a7h.dI0x(this.TS2x, "m-player-lyric-ask", d8f)
        } else {}
        if (this.uK5P) {
            this.uK5P.W8O();
            delete this.uK5P
        }
        this.jF1x.ru4y();
        this.bLh6b(this.by9p.biY9P() || 0, false)
    };
    b8h.bal4p = function() {
        if (this.bho8g) {
            this.bwt2x()
        }
    };
    b8h.bah4l = function(i8a) {
        if (this.bhm8e.program) {
            this.bL9C.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">电台节目，无歌词</span></div>'
        } else if (i8a.nolyric) {
            this.bL9C.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">纯音乐，无歌词</span></div>'
        } else {
            this.bL9C.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">暂时没有歌词</span><a data-action="feedLyric" data-code="6"' + "data-id=" + this.bhm8e.id + ' href="#" class="f-tdu">求歌词</a></div>'
        }
        this.jF1x && this.jF1x.ru4y()
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    cG9x = c8g("nej.p"),
    v8n = c8g("nej.j"),
    G8y = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    dL0x = c8g("nm.u"),
    x8p = c8g("nm.w"),
    N8F = c8g("nm.m.f"),
    dJ0x = c8g("player"),
    b8h,
    L8D;
    N8F.TT2x = NEJ.C();
    b8h = N8F.TT2x.M8E(G8y.cO9F);
    b8h.cC9t = function() {
        this.cK9B();
        this.If9W = a7h.A8s("g_player");
        this.mc2x = this.If9W.parentNode;
        var j8b = a7h.F8x(this.If9W, "j-flag");
        this.hF1x = j8b[0];
        this.lB2x = j8b[1];
        this.ll2x = j8b[2];
        this.LG0x = j8b[3];
        this.rk4o = j8b[4];
        this.iM1x = j8b[5];
        j8b = a7h.dn9e(j8b[6]);
        this.DW8O = j8b[0];
        this.xJ6D = j8b[1];
        this.bLr6l = j8b[2];
        this.bhK8C = j8b[3];
        this.bwy2x = j8b[4];
        this.bwz2x = a7h.dn9e(this.bhK8C)[0];
        this.yE6y = l8d.bxd2x();
        this.bhd7W(3e3);
        this.UK2x();
        this.ctU5Z();
        this.ctT5Y();
        this.bLz6t();
        this.bwB2x();
        dJ0x.setLike = this.bLB6v.f8d(this);
        h8b.s8k(this.mc2x, "click", this.bT9K.f8d(this));
        h8b.s8k(x8p.gp1x, "playaction", this.yG6A.f8d(this));
        h8b.s8k(x8p.uP5U, "queuechange", this.zN6H.f8d(this));
        h8b.s8k(x8p.uP5U, "playchange", this.hU1x.f8d(this));
        h8b.s8k(this.mc2x, cG9x.dC0x.browser == "ie" ? "mouseleave": "mouseout", this.bLC6w.f8d(this, !1));
        h8b.s8k(this.mc2x, cG9x.dC0x.browser == "ie" ? "mouseenter": "mouseover", this.bLC6w.f8d(this, !0));
        h8b.s8k(document, "keyup", this.bLD6x.f8d(this));
        h8b.s8k(window, "iframeclick", this.uH5M.f8d(this));
        h8b.s8k(document, "click", this.uH5M.f8d(this));
        h8b.s8k(this.DW8O, "click", h8b.bi8a.f8d(h8b));
        dJ0x.hotkeys = this.bLD6x.f8d(this);
        this.bLE6y = k8c.oP3x()
    };
    b8h.bwB2x = function() {
        var LH0x = a7h.A8s("g-topbar"),
        cB9s = this.If9W.offsetWidth,
        ctQ5V = this.mc2x.offsetWidth;
        if (!LH0x) return;
        a7h.bd8V(this.If9W, "marginLeft", -(ctQ5V - LH0x.offsetWidth + this.If9W.offsetWidth) / 2 + "px")
    };
    b8h.bLz6t = function() {
        if (this.yE6y.lock) {
            a7h.y8q(this.mc2x, "m-playbar-unlock");
            a7h.w8o(this.mc2x, "m-playbar-lock");
            window.g_bottomBarHeight = 47
        } else {
            a7h.w8o(this.mc2x, "m-playbar-unlock");
            a7h.y8q(this.mc2x, "m-playbar-lock");
            window.g_bottomBarHeight = 0
        }
    };
    b8h.UK2x = function() {
        var j8b = a7h.dn9e(this.LG0x);
        this.UV2x = j8b[0];
        this.bgV6P = a7h.dn9e(j8b[1])[0];
        this.LI0x = G8y.Kc9T.B8t({
            track: this.LG0x,
            thumb: this.bgV6P,
            progress: j8b[1],
            onslidestop: function(d8f) {
                this.bLK6E = false;
                this.by9p.qA4E(this.by9p.bpM1x() * d8f.ratio)
            }.f8d(this),
            onslidechange: function(d8f) {
                this.bLK6E = true;
                this.bwC2x({
                    time: d8f.ratio * this.by9p.bpM1x(),
                    duration: this.by9p.bpM1x()
                })
            }.f8d(this)
        })
    };
    b8h.ctT5Y = function() {
        var j8b = a7h.F8x(this.DW8O, "j-t"),
        fC0x = j8b[1],
        rX4b = this.yE6y.volume;
        if (rX4b == null) {
            rX4b = .8
        }
        this.zu6o = G8y.Lx0x.B8t({
            track: j8b[0],
            slide: j8b[2],
            onchange: function(d8f) {
                var C8u = 1 - d8f.y.rate,
                cb9S = 93 * C8u;
                a7h.bd8V(fC0x, "height", cb9S + "px");
                cb9S > 0 ? a7h.y8q(this.xJ6D, "icn-volno") : a7h.w8o(this.xJ6D, "icn-volno");
                this.by9p.nl2x(C8u);
                this.yE6y.volume = C8u;
                l8d.HM9D(this.yE6y)
            }.f8d(this)
        });
        this.zu6o.hi1x({
            x: 0,
            y: 1 - rX4b
        })
    };
    b8h.ctU5Z = function() {
        var bx9o = k8c.ha1x(location.hash.slice(1)) || {},
        t8l = bx9o["__media"] || "auto";
        if (this.yE6y.useFlash) {
            this.yE6y.useFlash = false;
            l8d.HM9D(this.yE6y)
        }
        this.by9p = x8p.gp1x.fW0x({
            media: t8l
        });
        this.hV1x = x8p.uP5U.fW0x();
        dJ0x.addTo = function(jB1x, tK4O, gA1x) {
            this.hV1x.cuE5J(JSON.parse(JSON.stringify(jB1x)), tK4O, gA1x)
        }.f8d(this);
        dJ0x.tipPlay = this.bwD2x.f8d(this);
        dJ0x.getPlaying = function() {
            return {
                track: this.hV1x.ti4m(),
                playing: this.by9p.vZ5e()
            }
        }.f8d(this);
        dJ0x.pause = this.by9p.fT0x.f8d(this.by9p);
        var hJ1x = this.hV1x.ti4m();
        if (hJ1x) {
            this.bLN6H(hJ1x)
        }
        this.bLO6I(this.hV1x.cuH5M());
        this.bLP6J()
    };
    b8h.zN6H = function() {
        var iB1x = 0;
        return function(d8f) {
            if (d8f.cmd == "play" || d8f.cmd == "addto") {
                this.bwD2x(d8f.cmd == "play" ? "已开始播放": "已添加到播放列表")
            }
            this.bLP6J()
        }
    } ();
    b8h.hU1x = function(d8f) {
        var bn8f = d8f["new"];
        this.bLN6H(bn8f);
        if (this.by9p.vZ5e()) {
            document.title = decodeURIComponent("%E2%96%B6%20") + bn8f.name
        }
        h8b.z8r(window, "playchange", {
            trackId: bn8f.id,
            track: bn8f
        })
    };
    b8h.bT9K = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:action"),
        X8P = a7h.u8m(g8c, "action"),
        mY2x = h8b.ba8S(d8f, "a:href");
        if (mY2x && mY2x.tagName.toLocaleLowerCase() == "a" && /^http/.test(mY2x.href)) {
            this.W8O();
            return
        } else {
            h8b.bi8a(d8f)
        }
        switch (X8P) {
        case "lock":
            this.yE6y.lock = !a7h.bG9x(this.mc2x, "m-playbar-lock");
            l8d.HM9D(this.yE6y);
            this.bLz6t();
            break;
        case "prev":
            this.hV1x.FU8M();
            break;
        case "next":
            this.hV1x.qf3x();
            break;
        case "play":
            this.by9p.ey0x();
            break;
        case "pause":
            this.by9p.fT0x();
            break;
        case "like":
            var bn8f = this.hV1x.ti4m();
            if (bn8f) {
                window.subscribe(bn8f, bn8f.program)
            } ! bn8f.program && this.uN5S && this.uN5S.W8O();
            break;
        case "share":
            var bn8f = this.hV1x.ti4m();
            if (bn8f.program && bn8f.program.auditStatus == 1) {
                l8d.jc1x("由于版权问题，该节目暂时无法分享。")
            } else {
                if (bn8f) { ! bn8f.program ? l8d.lE2x({
                        rid: bn8f.id,
                        type: 18,
                        purl: bn8f.album.picUrl,
                        name: bn8f.name,
                        author: l8d.Ar6l(bn8f.artists)
                    }) : l8d.lE2x({
                        rid: bn8f.program.id,
                        type: 17,
                        purl: bn8f.program.coverUrl,
                        name: bn8f.program.name,
                        author: (bn8f.program.radio || []).name
                    })
                }
                this.uN5S && this.uN5S.W8O()
            }
            break;
        case "mode":
            this.bLO6I(this.hV1x.cuJ5O(), true);
            break;
        case "volume":
            h8b.bi8a(d8f);
            if (this.DW8O.style.visibility != "hidden") {
                a7h.bd8V(this.DW8O, "visibility", "hidden")
            } else {
                a7h.bd8V(this.DW8O, "visibility", "visible")
            }
            break;
        case "panel":
            h8b.bi8a(d8f);
            if (!this.uN5S) {
                this.uN5S = N8F.bKt6n.B8t({
                    parent: this.mc2x,
                    onclose: function() {
                        delete this.uN5S;
                        this.bhd7W()
                    }.f8d(this)
                })
            } else {
                if (this.uN5S) {
                    this.uN5S.W8O();
                    delete this.uN5S
                }
            }
            break
        }
    };
    b8h.bwC2x = function(d8f) {
        this.rk4o.innerHTML = l8d.fD0x("<em>{0}</em> / {1}", l8d.lW2x(d8f.time), l8d.lW2x(d8f.duration))
    };
    b8h.bLO6I = function(eE0x, cU9L) {
        var bB9s = {
            2 : {
                icn: "icn-one",
                title: "单曲循环"
            },
            4 : {
                icn: "icn-loop",
                title: "循环"
            },
            5 : {
                icn: "icn-shuffle",
                title: "随机"
            }
        },
        bk8c = bB9s[eE0x];
        a7h.fx0x(this.bLr6l, "icn-one icn-loop icn-shuffle", bk8c.icn);
        this.bwy2x.innerText = this.bLr6l.title = bk8c.title;
        clearTimeout(this.ctN5S);
        if (cU9L) {
            a7h.bd8V(this.bwy2x, "display", "");
            this.ctN5S = setTimeout(function() {
                a7h.bd8V(this.bwy2x, "display", "none")
            }.f8d(this), 2e3)
        }
    };
    b8h.bLB6v = function(dh9Y) {
        var hJ1x = this.hV1x.ti4m();
        if (hJ1x && hJ1x.program && hJ1x.program.id == dh9Y.id) {
            hJ1x.program.liked = dh9Y.liked;
            this.iM1x.title = "赞";
            if (dh9Y.liked) {
                a7h.fx0x(this.iM1x, "icn-zan", "icn-yizan")
            } else {
                a7h.fx0x(this.iM1x, "icn-yizan", "icn-zan")
            }
            this.hV1x.bhS8K()
        }
    };
    b8h.bLN6H = function(bn8f) {
        var R8J;
        a7h.bd8V(this.UV2x, "width", 0);
        this.bwC2x(0);
        this.LI0x.hi1x(0);
        if (bn8f) {
            R8J = this.ctK5P(bn8f);
            if (bn8f.program) {
                a7h.fx0x(this.iM1x, "icn-add", "icn-zan");
                this.iM1x.title = "赞";
                v8n.lk2x(this.qR4V);
                this.qR4V = v8n.bm8e("/api/dj/program/detail", {
                    type: "json",
                    query: {
                        id: bn8f.program.id
                    },
                    onload: function(d8f) {
                        if (d8f.code == 200) {
                            this.bLB6v(d8f.program)
                        }
                    }.f8d(this)
                })
            } else {
                a7h.fx0x(this.iM1x, "icn-zan icn-yizan", "icn-add");
                this.iM1x.title = "收藏"
            }
            this.lB2x.innerHTML = l8d.fD0x('<img src="{0}?param=34y34"><a href="{1}" hidefocus="true" class="mask"></a>', R8J.cover, R8J.titleUrl);
            a7h.dI0x(this.ll2x, "m-player-playinfo", R8J)
        }
    };
    b8h.bLP6J = function() {
        var j8b = a7h.dn9e(this.bhK8C);
        j8b[1].innerText = this.hV1x.lY2x()
    };
    b8h.ctK5P = function(bn8f) {
        var m8e = {
            duration: bn8f.duration,
            cover: "http://s4.music.126.net/style/web2/img/default_album.jpg",
            source: bn8f.source
        };
        if (bn8f.program) {
            m8e.type = "program";
            m8e.name = k8c.dP0x(bn8f.program.name);
            m8e.cover = bn8f.program.coverUrl;
            m8e.titleUrl = "/program?id=" + bn8f.program.id;
            m8e.artistHtml = l8d.fD0x('<a hidefocus="true" href="/radio?id={0}" title="{1}">{1}</a>', bn8f.program.radio.id, k8c.dP0x(bn8f.program.radio.name))
        } else {
            m8e.type = "song";
            m8e.name = bn8f.name;
            m8e.mvid = bn8f.mvid;
            if (!bn8f.album) {
                bn8f.album = {}
            }
            if (bn8f.album.pic && bn8f.album.picUrl) {
                m8e.cover = bn8f.album.picUrl
            }
            m8e.titleUrl = "/song?id=" + bn8f.id;
            m8e.artistHtml = l8d.tM4Q(bn8f.artists)
        }
        return m8e
    };
    b8h.yG6A = function(d8f) {
        var i8a = d8f.data;
        switch (d8f.action) {
        case "play":
            a7h.w8o(this.hF1x, "pas");
            a7h.u8m(this.hF1x, "action", "pause");
            v8n.gW1x("playerid", this.bLE6y);
            var bn8f = this.hV1x.ti4m();
            if (bn8f) {
                document.title = decodeURIComponent("%E2%96%B6%20") + bn8f.name
            }
            h8b.z8r(window, "playstatechange", d8f);
            break;
        case "pause":
            a7h.y8q(this.hF1x, "pas");
            a7h.u8m(this.hF1x, "action", "play");
            document.title = this.ctJ5O() || "网易云音乐";
            break;
        case "timeupdate":
            if (this.bLK6E) return;
            var hN1x = v8n.gW1x("playerid");
            if (hN1x && hN1x !== this.bLE6y) {
                this.by9p.fT0x()
            }
            this.LI0x.hi1x(i8a.time / i8a.duration);
            this.bwC2x(i8a);
            break;
        case "progress":
            a7h.bd8V(this.UV2x, "width", i8a.loaded * 100 / i8a.total + "%");
            break;
        case "error":
            this.bwD2x("播放失败");
            a7h.y8q(this.bgV6P, "z-load");
            break;
        case "playing":
            a7h.y8q(this.bgV6P, "z-load");
            break;
        case "waiting":
            a7h.w8o(this.bgV6P, "z-load");
            break
        }
    };
    b8h.bwD2x = function() {
        var iB1x = 0;
        return function(dR0x) {
            if (dR0x) {
                this.bwz2x.innerText = dR0x;
                a7h.bd8V(this.bwz2x, "display", "");
                clearTimeout(iB1x);
                iB1x = setTimeout(function() {
                    a7h.bd8V(this.bwz2x, "display", "none")
                }.f8d(this), 2e3);
                this.rF4J(true);
                this.bhd7W(2e3)
            }
        }
    } ();
    b8h.bLC6w = function(MX0x, d8f) {
        if (!this.uN5S) {
            if (MX0x) {
                if (!l8d.NF0x(this.mc2x, d8f.relatedTarget || d8f.fromElement)) {
                    this.rF4J(true)
                }
            } else {
                if (!l8d.NF0x(this.mc2x, d8f.relatedTarget || d8f.toElement)) {
                    this.bhd7W()
                }
            }
        }
    };
    b8h.bhd7W = function(uM5R) {
        clearTimeout(this.bLU6O);
        this.bLU6O = setTimeout(function() {
            if (!this.yE6y.lock) {
                this.rF4J(false)
            }
        }.f8d(this), uM5R || 500)
    };
    b8h.rF4J = function() {
        var AM7F, bgL6F = true;
        return function(mV2x) {
            clearTimeout(this.bLU6O);
            if (AM7F || mV2x == bgL6F) return;
            bgL6F = mV2x;
            AM7F = G8y.IS9J.B8t({
                to: {
                    offset: mV2x ? -53 : -7
                },
                from: {
                    offset: mV2x ? -7 : -53
                },
                onstop: function() {
                    AM7F.W8O();
                    AM7F = null
                },
                onupdate: function(d8f) {
                    a7h.bd8V(this.mc2x, "top", d8f.offset + "px")
                }.f8d(this),
                duration: mV2x ? 100 : 350
            });
            AM7F.ey0x()
        }
    } ();
    b8h.bLD6x = function(d8f) {
        if (d8f.keyCode == 80 && !l8d.bWL9C()) {
            this.by9p.vZ5e() ? this.by9p.fT0x() : this.by9p.ey0x()
        } else if (d8f.ctrlKey) {
            switch (d8f.keyCode) {
            case 37:
                this.hV1x.FU8M();
                break;
            case 39:
                this.hV1x.qf3x();
                break
            }
        }
    };
    b8h.uH5M = function() {
        a7h.bd8V(this.DW8O, "visibility", "hidden");
        this.uN5S && this.uN5S.W8O()
    };
    b8h.ctJ5O = function() {
        var fb0x = a7h.A8s("g_iframe");
        if (fb0x) {
            return fb0x.contentWindow.document.title
        } else {
            return ""
        }
    };
    b8h.J8B = function() {
        window.g_bottomBarShow = true;
        a7h.bd8V(this.mc2x, "visibility", "visible")
    };
    b8h.bu9l = function() {
        window.g_bottomBarShow = false;
        this.by9p.fT0x();
        a7h.bd8V(this.mc2x, "visibility", "hidden")
    }
})(); (function() {
    var c8g = NEJ.P,
    dZ0x = window,
    bs8k = NEJ.F,
    v8n = c8g("nej.j"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    b8h,
    L8D;
    q8i.fD0x({
        "netease-login": {
            url: "/api/login",
            onload: "onlogin",
            onerror: "onloginerror"
        },
        "captcha-send": {
            url: "/api/sms/captcha/sent",
            onload: "onsendcaptcha",
            onerror: "onsendcaptchaerror",
            format: function(m8e, e8e) {
                m8e.mobile = e8e.data.cellphone;
                return m8e
            }
        },
        "captcha-verify": {
            url: "/api/sms/captcha/verify",
            onload: "onverifycaptcha",
            onerror: "onverifycaptchaerror",
            format: function(m8e, e8e) {
                m8e.mobile = e8e.data.cellphone;
                m8e.captcha = e8e.data.captcha;
                return m8e
            }
        },
        "mobile-login": {
            url: "/api/login/cellphone",
            onload: "onmobilelogin",
            onerror: "onmobileloginerror"
        },
        "mobile-check": {
            url: "/api/cellphone/existence/check",
            onload: "onmobilecheck",
            onerror: "onmobilecheckerror",
            format: function(m8e, e8e) {
                m8e.mobile = e8e.data.cellphone;
                m8e.captcha = e8e.data.captcha;
                return m8e
            }
        },
        "mobile-regist": {
            url: "/api/register/cellphone",
            onload: "onmobileregist",
            onerror: "onmobileregisterror"
        },
        "mobile-updatepwd": {
            url: "/api/login/password/update",
            onload: "onmobileupdatepwd",
            onerror: "onmobileupdatepwderror",
            format: function(m8e, e8e) {
                m8e.mobile = e8e.data.phone;
                m8e.password = e8e.data.password;
                return m8e
            }
        },
        "mobile-resetpwd": {
            url: "/api/login/password/reset",
            onload: "onmobileresetpwd",
            onerror: "onmobileresetpwderror",
            format: function(m8e, e8e) {
                m8e.mobile = e8e.data.phone;
                m8e.password = e8e.data.password;
                return m8e
            }
        },
        "nickname-set": {
            url: "/api/activate/initProfile",
            onload: "onactive",
            onerror: "onactiveerror"
        },
        logout: {
            url: "/api/logout",
            onload: "onlogout"
        },
        "logout-quiet": {
            url: "/api/logout"
        },
        "oauth-nickname": {
            url: "/oauth/init_profile",
            onload: "onactive",
            onerror: "onactiveerror"
        },
        "mobile-nickname": {
            url: "/oauth/register/cellphone",
            onload: "onmobileregist",
            onerror: "onmobileregisterror"
        },
        "mobile-bind": {
            url: "/api/user/bindingCellphone",
            onload: "onmobilebind",
            onerror: "onmobilebinderror",
            format: function(m8e, e8e) {
                m8e.mobile = e8e.data.phone;
                m8e.captcha = e8e.data.captcha;
                return m8e
            }
        },
        "mobile-relogin": {
            url: "/api/mainAccount/set",
            onload: "onmobilelogin",
            onerror: "onmobileloginerror"
        },
        "mainaccount-replace": {
            url: "/api/user/replaceMainAccount",
            onload: "onmainaccountreplace",
            onerror: "onmainaccountreplaceerror"
        },
        "binding-delete": {
            url: "/api/user/deleteBinding",
            onload: "ondeletebinding",
            onerror: "ondeletebindingerror"
        },
        "mobile-change": {
            url: "/api/v1/user/replaceCellphone",
            onload: "onchangemobile",
            onerror: "onchangemobileerror"
        },
        "urs-bind": {
            url: "/api/user/bindingUrs",
            onload: "onbindurs",
            onerror: "onbindurserror"
        },
        "urs-unbind": {
            url: "/api/nuser/unbinding/urs",
            onload: "onunbindurs",
            onerror: "onunbindurserror"
        },
        "mobile-unbind": {
            url: "/api/nuser/unbinding/cellphone",
            onload: "onmobileunbind",
            onerror: "onmobileunbinderror"
        },
        "login-verify": {
            url: "/api/usersafe/loginprotect/device/add",
            onload: "onloginverify",
            onerror: "onloginverifyerror"
        },
        "captcha-sendsafe": {
            url: "/api/usersafe/loginprotect/sms/send",
            onload: "onsafecaptcha",
            onerror: "onsafecaptchaerror"
        },
        "safe-login": {
            url: "/api/user/relogin",
            onload: "onrelogin",
            onerror: "onreloginerror"
        }
    });
    q8i.mO2x = NEJ.C();
    b8h = q8i.mO2x.M8E(q8i.if1x);
    b8h.cyJ6D = function(e8e) {
        e8e = e8e || {};
        this.cp9g(q8i.A8s("logout"), e8e)
    };
    b8h.cRR0x = function(e8e) {
        e8e = e8e || {};
        this.cp9g(q8i.A8s("logout-quiet"), e8e)
    };
    b8h.Jj9a = function(e8e) {
        this.cp9g(q8i.A8s("netease-login"), e8e)
    };
    b8h.Cc7V = function(e8e) {
        this.cp9g(q8i.A8s("captcha-send"), e8e)
    };
    b8h.cyI6C = function(e8e) {
        this.cp9g(q8i.A8s("captcha-verify"), e8e)
    };
    b8h.cyE6y = function(e8e) {
        this.Ph1x(e8e);
        this.cp9g(q8i.A8s("mobile-login"), e8e)
    };
    b8h.bmO0x = function(e8e) {
        this.Ph1x(e8e);
        this.cp9g(q8i.A8s("mobile-check"), e8e)
    };
    b8h.bfZ6T = function(e8e) {
        this.Ph1x(e8e);
        this.cp9g(q8i.A8s("mobile-regist"), e8e)
    };
    b8h.cRW0x = function(e8e) {
        this.Ph1x(e8e);
        this.cp9g(q8i.A8s("mobile-resetpwd"), e8e)
    };
    b8h.bgb6V = function(e8e) {
        this.Ph1x(e8e);
        this.cp9g(q8i.A8s("mobile-updatepwd"), e8e)
    };
    b8h.bmK0x = function(e8e) {
        this.cp9g(q8i.A8s("nickname-set"), e8e)
    };
    b8h.cSd0x = function(e8e) {
        this.cp9g(q8i.A8s("oauth-nickname"), e8e)
    };
    b8h.cSe0x = function(e8e) {
        this.cp9g(q8i.A8s("mobile-nickname"), e8e)
    };
    b8h.bmG0x = function(e8e) {
        this.cp9g(q8i.A8s("mobile-bind"), e8e)
    };
    b8h.cxq5v = function(e8e) {
        this.cp9g(q8i.A8s("mobile-unbind"), e8e)
    };
    b8h.cSu0x = function(e8e) {
        this.Ph1x(e8e);
        this.cp9g(q8i.A8s("mobile-relogin"), e8e)
    };
    b8h.cSw0x = function(e8e) {
        this.cp9g(q8i.A8s("mainaccount-replace"), e8e)
    };
    b8h.bJm5r = function(e8e) {
        this.cp9g(q8i.A8s("binding-delete"), e8e)
    };
    b8h.cwO5T = function(e8e) {
        this.cp9g(q8i.A8s("mobile-change"), e8e)
    };
    b8h.cwN5S = function(e8e) {
        this.cp9g(q8i.A8s("urs-bind"), e8e)
    };
    b8h.cwK5P = function(e8e) {
        this.cp9g(q8i.A8s("urs-unbind"), e8e)
    };
    b8h.Ph1x = function(e8e) {
        if (!e8e || !e8e.data) return;
        var i8a = e8e.data;
        if (!i8a.countrycode || i8a.countrycode == "86") delete i8a.countrycode
    };
    b8h.bms0x = function(e8e) {
        this.cp9g(q8i.A8s("captcha-sendsafe"), e8e)
    };
    b8h.bIt5y = function(e8e) {
        this.cp9g(q8i.A8s("login-verify"), e8e)
    };
    b8h.bIr5w = function(e8e) {
        this.cp9g(q8i.A8s("safe-login"), e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    v8n = c8g("nej.j"),
    G8y = c8g("nej.ut"),
    bc8U = c8g("nej.ui"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    x8p = c8g("nm.w"),
    b8h;
    x8p.WT3x = NEJ.C();
    b8h = x8p.WT3x.M8E(bc8U.eu0x);
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        if (e8e.txt) {
            this.o8g.innerHTML = a7h.iN1x(e8e.txt)
        } else if (e8e.html) {
            this.o8g.innerHTML = e8e.html
        }
        this.CS7L = e8e.captchaId;
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.fd0x = j8b[0];
        this.em0x = j8b[1];
        this.bZ9Q([[this.em0x, "click", this.bmm0x.f8d(this)], [this.fd0x, "keypress", this.cwG5L.f8d(this)]]);
        this.em0x.src = "/captcha?id=" + this.CS7L
    };
    b8h.bC9t = function() {
        this.bH9y()
    };
    b8h.bmm0x = function() {
        v8n.bm8e("/api/image/captcha/verify/hf", {
            type: "json",
            query: {
                id: this.CS7L,
                captcha: 0
            },
            onload: function(m8e) {
                if (m8e.code == 200) {
                    this.CS7L = m8e.captchaId;
                    this.em0x.src = "/captcha?id=" + this.CS7L
                }
            }.f8d(this)
        })
    };
    b8h.cwG5L = function(d8f) {
        if (d8f.keyCode == 13) this.z8r("onaction", d8f)
    };
    b8h.KP0x = function() {
        var m8e = {},
        cd9U = this.fd0x.value;
        if (!cd9U) {
            m8e.message = "请输入验证码"
        } else {
            v8n.bm8e("/api/image/captcha/verify/hf", {
                type: "json",
                sync: true,
                query: {
                    id: this.CS7L,
                    captcha: cd9U
                },
                onload: cbVerify.f8d(this),
                onerror: cbVerify.f8d(this)
            })
        }
        return m8e;
        function cbVerify(d8f) {
            if (d8f.code == 200) {
                if (d8f.result) {
                    m8e.success = true
                } else {
                    m8e.message = "验证码错误";
                    if (d8f.captchaId) {
                        this.CS7L = d8f.captchaId;
                        this.em0x.src = "/captcha?id=" + this.CS7L
                    }
                }
            } else {
                m8e.message = "验证出错"
            }
        }
    };
    b8h.gl0x = function() {
        return this.fd0x.value
    };
    b8h.Hl9c = function() {
        return this.CS7L
    };
    b8h.w8o = function(jI1x) {
        a7h.w8o(this.fd0x, jI1x)
    };
    b8h.y8q = function(jI1x) {
        a7h.y8q(this.fd0x, jI1x)
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    h8b = c8g("nej.v"),
    a7h = c8g("nej.e"),
    v8n = c8g("nej.j"),
    n8f = c8g("nm.l"),
    x8p = c8g("nm.w"),
    bD9u = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    L8D;
    n8f.bml0x = NEJ.C();
    b8h = n8f.bml0x.M8E(n8f.es0x);
    L8D = n8f.bml0x.cx9o;
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.fd0x = j8b[0];
        this.ec0x = j8b[1];
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.ci9Z = function() {
        this.cg9X = "m-captcha-layer"
    };
    b8h.bp8h = function(e8e) {
        e8e.clazz = "m-layer-captcha";
        e8e.parent = e8e.parent || document.body;
        e8e.title = "输入验证码";
        e8e.draggable = !0;
        e8e.destroyable = true;
        e8e.mask = true;
        this.bq8i(e8e);
        this.dg9X = x8p.WT3x.B8t({
            parent: this.fd0x,
            html: '<input class="u-txt txt f-fl j-flag"/><img class="captcha f-fl j-flag" src=""/>',
            captchaId: e8e.captchaId
        })
    };
    b8h.bC9t = function() {
        this.z8r("ondestroy");
        this.bH9y();
        if (this.dg9X) {
            this.dg9X.W8O();
            delete this.dg9X
        }
    };
    b8h.bT9K = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:action");
        switch (a7h.u8m(g8c, "action")) {
        case "ok":
            var R8J = this.dg9X.KP0x();
            if (!R8J.success) {
                this.ec0x.innerHTML = '<i class="u-icn u-icn-25"></i>' + R8J.message;
                a7h.y8q(this.ec0x, "f-hide")
            } else {
                a7h.w8o(this.ec0x, "f-hide");
                this.bu9l()
            }
            break;
        case "cc":
            this.bu9l();
            break
        }
    };
    l8d.bIg5l = function(e8e) {
        n8f.bml0x.B8t(e8e).J8B()
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    v8n = c8g("nej.j"),
    be8W = c8g("nej.o"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    bD9u = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.qN4R = NEJ.C();
    b8h = n8f.qN4R.M8E(n8f.es0x, !0);
    b8h.cC9t = function() {
        this.cK9B()
    };
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.blF0x = j8b[0];
        h8b.s8k(j8b[1], "click", this.blB0x.f8d(this))
    };
    b8h.ci9Z = function() {
        this.cg9X = "m-layer-tip"
    };
    b8h.bp8h = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        this.bq8i(e8e);
        this.blF0x.innerHTML = e8e.mesg || ""
    };
    b8h.bC9t = function() {
        this.bH9y()
    };
    b8h.blB0x = function(d8f) {
        this.z8r("onnotice");
        this.bu9l()
    };
    n8f.oc3x = function(e8e) {
        if (this.BN7G) {
            this.BN7G.W8O();
            delete this.BN7G
        }
        this.BN7G = n8f.qN4R.B8t(e8e);
        this.BN7G.J8B()
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    h8b = c8g("nej.v"),
    v8n = c8g("nej.j"),
    G8y = c8g("nej.ut"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    lz2x = c8g("nm.ctl"),
    b8h;
    if (lz2x.blA0x) return;
    lz2x.blA0x = NEJ.C();
    b8h = lz2x.blA0x.M8E(G8y.cO9F);
    var crI4M = location.host == "music.163.com";
    if (crI4M) {
        var bU9L = {
            host: "s2.music.126.net",
            scaptcha_server: "captcha.aq.163.com/v1_5",
            scaptcha_product_key: "nj2vr7swvutssrtbj16kzfentkikkvbf"
        }
    } else {
        var bU9L = {
            host: location.host,
            scaptcha_server: "captcha.aq.163.com/v1_5",
            scaptcha_product_key: "nj2vr7swvutssrtbj16kzfentkikkvbf"
        }
    }
    b8h.bOx6r = function(cqB4F) {
        return location.protocol + "//" + bU9L.host + cqB4F
    };
    b8h.PH1x = function(K8C) {
        return NEJ.Q(bU9L, K8C)
    };
    c8g("ctl").env = lz2x.blA0x.fW0x()
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    P8H = c8g("nej.p"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    v8n = c8g("nej.j"),
    G8y = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    x8p = c8g("nm.w"),
    b8h;
    if (x8p.Ya3x) return;
    x8p.Ya3x = NEJ.C();
    b8h = x8p.Ya3x.M8E(G8y.cO9F);
    b8h.cC9t = function() {
        this.bNT6N = [location.protocol + "//captcha.aq.163.com/v1_5/js/c.js"];
        if (P8H.dC0x && P8H.dC0x.engine == "trident" && nej.p.dC0x.release - 5 < 0) {
            this.bNT6N.unshift(ctl.env.bOx6r("/static/web2/3rd/scaptcha/ie6support.js"))
        }
        this.cK9B()
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.dg9X = "";
        this.gI1x = e8e.parent;
        this.ni2x = {
            server: e8e.server,
            productKey: e8e.productKey,
            width: e8e.width,
            verifyCallback: this.rN4R.f8d(this)
        };
        this.bhL8D(0);
        this.cpc3x()
    };
    b8h.bC9t = function() {
        delete this.blt0x;
        delete this.ni2x;
        delete this.gI1x;
        delete this.dg9X;
        this.bH9y()
    };
    b8h.cpc3x = function() {
        if (this.blt0x > 0) return;
        this.bhL8D(1);
        this.bMB6v()
    };
    b8h.bMB6v = function() {
        var bLZ6T = this.bNT6N.shift();
        if (!bLZ6T) {
            this.bhL8D(2);
            this.hd1x()
        } else {
            v8n.cEr7k(bLZ6T, {
                onloaded: this.bMB6v.f8d(this),
                onerror: this.bhL8D.f8d(this, 3)
            })
        }
    };
    b8h.bhL8D = function(bLS6M) {
        this.blt0x = bLS6M;
        this.z8r("onloadstatechange", {
            loadState: bLS6M
        })
    };
    b8h.rN4R = function(d8f) {
        setTimeout(this.cos3x.f8d(this, d8f), 0)
    };
    b8h.cos3x = function(d8f) {
        if (d8f.value) {
            this.dg9X = a7h.hl1x(this.gI1x, "pwd")
        } else {
            this.dg9X = ""
        }
        this.z8r("onverify", {
            success: d8f.value
        })
    };
    b8h.hd1x = function() {
        if (this.blt0x == 2) {
            this.dg9X = "";
            if (k8c.hf1x(window.scaptcha)) {
                window.scaptcha(this.gI1x, this.ni2x)
            }
        }
    };
    b8h.KV0x = function() {
        return this.dg9X
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    v8n = c8g("nej.j"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    x8p = c8g("nm.w"),
    b8h,
    L8D;
    n8f.JI9z = NEJ.C();
    b8h = n8f.JI9z.M8E(n8f.es0x);
    L8D = n8f.JI9z.cx9o;
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.en0x = e8e;
        this.dg9X = x8p.Ya3x.B8t({
            parent: this.xq6k,
            server: ctl.env.PH1x("scaptcha_server"),
            productKey: ctl.env.PH1x("scaptcha_product_key"),
            width: 220,
            onverify: this.rN4R.f8d(this)
        })
    };
    b8h.bC9t = function() {
        this.bH9y();
        if (this.dg9X) {
            this.dg9X.W8O();
            delete this.dg9X
        }
    };
    b8h.ci9Z = function() {
        this.cg9X = "ntp-setnickname"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "js-flag");
        this.fn0x = j8b.shift();
        a7h.hh1x(this.fn0x, "holder");
        h8b.s8k(this.fn0x, "focus", this.ht1x.f8d(this));
        h8b.s8k(this.fn0x, "keypress", this.Yn3x.f8d(this));
        h8b.s8k(this.fn0x, "keyup", this.blm0x.f8d(this));
        this.xq6k = j8b.shift();
        this.ec0x = j8b.shift();
        this.cH9y = j8b.shift();
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.J8B = function() {
        L8D.J8B.apply(this, arguments);
        this.ca9R(false);
        this.cX9O(false);
        this.fn0x.value = "";
        this.dg9X.hd1x()
    };
    b8h.ht1x = function() {
        a7h.y8q(this.fn0x, "u-txt-err")
    };
    b8h.Yn3x = function(d8f) {
        if (d8f.keyCode == 13) this.yV6P()
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "ok":
            this.yV6P(d8f);
            break
        }
    };
    b8h.yV6P = function(d8f) {
        h8b.cu9l(d8f);
        if (this.cX9O()) return;
        if (! (this.rT4X = this.bia8S())) return;
        var iz1x = this.dg9X.KV0x();
        if (!iz1x.trim()) return this.ca9R("请输入验证码", "captcha");
        if (this.en0x.onok) {
            this.cX9O(true);
            this.en0x.onok({
                nickname: this.rT4X,
                dragPwd: iz1x
            })
        }
    };
    b8h.rN4R = function(d8f) {
        if (d8f.success) {
            this.ca9R(false);
            if (this.fn0x.value.trim()) {
                this.yV6P()
            }
        } else {
            this.ca9R("验证码错误", "captcha")
        }
    };
    b8h.bia8S = function() {
        var jY2x = this.fn0x.value.trim(),
        pt3x = jY2x.replace(/[^\x00-\xff]/g, "**");
        if (!jY2x) return this.ca9R("请输入昵称", "nickname");
        if (pt3x.length < 4 || pt3x.length > 30) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        if (!/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(jY2x)) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        return jY2x
    };
    b8h.blm0x = function(d8f) {
        var jY2x = this.fn0x.value.trim(),
        pt3x = jY2x.replace(/[^\x00-\xff]/g, "**");
        if (this.blh0x == jY2x) return;
        this.blh0x = jY2x;
        if (d8f.keyCode == 13) return;
        if (/[^\u4e00-\u9fa5\w-]/.test(jY2x)) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        if (jY2x && pt3x.length > 30) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        this.ca9R(false)
    };
    b8h.ca9R = function(bF9w, jJ1x, ckV2x) {
        this.ed0x(this.ec0x, bF9w);
        a7h.y8q(this.fn0x, "u-txt-err");
        if (jJ1x == "nickname") {
            a7h.w8o(this.fn0x, "u-txt-err")
        } else if (jJ1x == "captcha") {}
        if (ckV2x) {
            this.dg9X.hd1x()
        }
    };
    b8h.cX9O = function(dk9b) {
        return this.ee0x(this.cH9y, dk9b, "开启云音乐", "设置中...")
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    b8h,
    L8D;
    n8f.sc4g = NEJ.C();
    b8h = n8f.sc4g.M8E(n8f.es0x);
    L8D = n8f.sc4g.cx9o;
    var ckd2x = a7h.eA0x("m-verifycaptcha-input");
    var ckb2x = a7h.eA0x("m-verifycaptcha-input2");
    b8h.ci9Z = function() {
        this.cg9X = "ntp-verifycaptcha"
    };
    b8h.bY9P = function() {
        this.cj9a();
        this.cS9J = a7h.F8x(this.o8g, "js-tip")[0];
        var iW1x = a7h.F8x(this.o8g, "js-mobwrap");
        this.bIP5U = iW1x[0];
        this.bIF5K = iW1x[1];
        this.tc4g = a7h.F8x(this.o8g, "js-mob")[0];
        this.oB3x = a7h.F8x(this.o8g, "js-code")[0];
        this.cjM2x = a7h.F8x(this.o8g, "js-lbl")[0];
        var cY9P = a7h.F8x(this.o8g, "js-txt");
        this.tf4j = cY9P[0];
        a7h.hh1x(this.tf4j, "holder");
        h8b.s8k(this.tf4j, "focus", this.bld9U.f8d(this));
        h8b.s8k(this.tf4j, "keypress", this.blc9T.f8d(this));
        h8b.s8k(this.tf4j, "keyup", this.blb9S.f8d(this));
        this.PV1x = a7h.F8x(this.o8g, "js-next")[0];
        this.PW1x = a7h.F8x(this.o8g, "js-btmbar")[0];
        this.bkZ9Q = a7h.F8x(this.o8g, "js-back")[0];
        this.cdR1x = a7h.F8x(this.o8g, "js-skip")[0];
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.cjb2x = function() {
        a7h.dI0x(a7h.A8s("captcha-input"), this.gt1x ? ckb2x: ckd2x);
        this.YM3x = a7h.F8x(this.o8g, "js-cd")[0];
        this.nU3x = a7h.F8x(this.o8g, "js-send")[0];
        this.ec0x = a7h.F8x(this.o8g, "u-err")[0];
        this.nS3x = a7h.F8x(this.o8g, "js-input");
        if (this.gt1x) {
            this.YP4T(this.nS3x, "focus", this.bZW0x.f8d(this));
            this.YP4T(this.nS3x, "input", this.ciF2x.f8d(this));
            this.YP4T(this.nS3x, "blur", this.chT2x.f8d(this));
            this.YP4T(this.nS3x, "keypress", this.bQR8J.f8d(this));
            this.YP4T(this.nS3x, "keydown", this.chA2x.f8d(this))
        } else {
            h8b.s8k(this.nS3x[0], "focus", this.bZW0x.f8d(this));
            h8b.s8k(this.nS3x[0], "keypress", this.bQR8J.f8d(this))
        }
    };
    b8h.YP4T = function(j8b, d8f, eS0x) {
        k8c.bf8X(this.nS3x,
        function(p8h, bc8U) {
            h8b.s8k(p8h, d8f, eS0x)
        })
    };
    b8h.bp8h = function(e8e) {
        e8e = e8e || {};
        this.bq8i(e8e);
        this.gt1x = e8e.mobile || "";
        this.go1x = e8e.countrycode || "86";
        this.en0x = e8e;
        this.cjb2x();
        this.ca9R(false);
        this.cX9O(false);
        if (e8e.tip) {
            this.cS9J.innerHTML = e8e.tip;
            a7h.y8q(this.cS9J, "f-hide")
        } else {
            a7h.w8o(this.cS9J, "f-hide")
        }
        if (this.gt1x) {
            this.tc4g.innerText = l8d.Sc2x(this.gt1x) || "";
            this.oB3x.innerHTML = this.go1x;
            a7h.w8o(this.bIF5K, "f-hide");
            a7h.y8q(this.bIP5U, "f-hide");
            if (e8e.needSendCaptcha) {
                this.nU3x.innerHTML = "<i>获取验证码</i>";
                a7h.w8o(this.YM3x, "f-hide");
                a7h.y8q(this.nU3x, "f-hide");
                setTimeout(this.Qc1x.f8d(this), 0)
            } else {
                this.EI8A()
            }
        } else {
            this.cjM2x.innerHTML = e8e.mobileLabel || "手机号：";
            this.nU3x.innerHTML = "<i>获取验证码</i>";
            a7h.w8o(this.bIP5U, "f-hide");
            a7h.y8q(this.bIF5K, "f-hide");
            a7h.w8o(this.YM3x, "f-hide");
            a7h.y8q(this.nU3x, "f-hide")
        }
        this.tf4j.value = "";
        if (this.gt1x) {
            k8c.bf8X(this.nS3x,
            function(p8h, bc8U) {
                p8h.value = ""
            });
            setTimeout(function() {
                this.nS3x[0].focus()
            }.f8d(this), 500)
        } else {
            this.nS3x[0].value = ""
        }
        e8e.okbutton = e8e.okbutton || "下一步";
        this.PV1x.innerHTML = "<i>" + e8e.okbutton + "</i>";
        a7h.w8o(this.PW1x, "f-hide");
        a7h.w8o(this.bkZ9Q, "f-hide");
        a7h.w8o(this.cdR1x, "f-hide");
        if (e8e.backbutton) {
            this.bkZ9Q.innerHTML = e8e.backbutton || "";
            a7h.y8q(this.bkZ9Q, "f-hide");
            a7h.y8q(this.PW1x, "f-hide")
        }
        if (e8e.canskip) {
            a7h.y8q(this.cdR1x, "f-hide");
            a7h.y8q(this.PW1x, "f-hide")
        }
        this.U8M = q8i.mO2x.B8t({
            onsendcaptcha: this.sp4t.f8d(this),
            onsendcaptchaerror: this.Qf1x.f8d(this),
            onverifycaptcha: this.cgT2x.f8d(this),
            onverifycaptchaerror: this.YY4c.f8d(this),
            onsafecaptcha: this.sp4t.f8d(this),
            onsafecaptchaerror: this.Qf1x.f8d(this)
        })
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.U8M.W8O();
        if (this.dM0x) this.dM0x = clearInterval(this.dM0x)
    };
    b8h.bld9U = function() {
        a7h.y8q(this.tf4j, "u-txt-err")
    };
    b8h.bZW0x = function() {
        this.ca9R("")
    };
    b8h.ciF2x = function(d8f) {
        var cL9C = d8f.target;
        var fK0x = cL9C.value;
        var bc8U = parseInt(a7h.u8m(cL9C, "index"));
        if (fK0x.length == 1) {
            if (this.bOH7A()) {
                this.cgJ2x(bc8U);
                cL9C.blur();
                if (bc8U < 3) this.nS3x[bc8U + 1].focus()
            } else {
                cL9C.value = ""
            }
        }
    };
    b8h.chT2x = function() {
        this.bOH7A()
    };
    b8h.cgC2x = function(d8f) {
        var cL9C = d8f.target;
        var fK0x = cL9C.value;
        var bc8U = parseInt(a7h.u8m(cL9C, "index"));
        if (!fK0x) {
            if (bc8U > 0) {
                cL9C.blur();
                this.nS3x[bc8U - 1].focus();
                this.bkL9C(bc8U - 1)
            }
        } else {
            this.bkL9C(bc8U)
        }
    };
    b8h.cgJ2x = function(r8j) {
        a7h.w8o(this.nS3x[r8j].parentNode, "z-set")
    };
    b8h.bkL9C = function(r8j) {
        a7h.y8q(this.nS3x[r8j].parentNode, "z-set")
    };
    b8h.bOH7A = function() {
        var iz1x = "";
        k8c.bf8X(this.nS3x,
        function(p8h, bc8U) {
            iz1x += p8h.value.trim()
        });
        if (!/^\d*$/.test(iz1x)) {
            this.ca9R("请输入数字");
            return false
        }
        if (/\d{4}/.test(iz1x)) {
            this.dg9X = iz1x;
            this.xC6w()
        }
        this.ca9R("");
        return true
    };
    b8h.blc9T = function(d8f) {
        if (d8f.keyCode == 0) {
            if (d8f.charCode < 48 || d8f.charCode > 57) h8b.cu9l(d8f)
        } else if (d8f.charCode == 0) {
            if (d8f.keyCode == 13) return this.xC6w()
        } else {
            if (d8f.keyCode == 13) return this.xC6w();
            if (d8f.keyCode < 48 || d8f.keyCode > 57) h8b.cu9l(d8f)
        }
    };
    b8h.blb9S = function(d8f) {
        if (/[^\d]/.test(this.tf4j.value)) this.tf4j.value = this.tf4j.value.replace(/[^\d]/g, "")
    };
    b8h.bQR8J = function(d8f) {
        if (d8f.keyCode == 13) this.xC6w()
    };
    b8h.chA2x = function(d8f) {
        if (d8f.keyCode == 8) this.cgC2x(d8f)
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "next":
            this.xC6w(d8f);
            break;
        case "send":
            this.Qc1x(d8f);
            break;
        case "back":
            this.bkI9z(d8f);
            break;
        case "skip":
            this.bkH9y(d8f);
            break
        }
    };
    b8h.bkI9z = function(d8f) {
        h8b.cu9l(d8f);
        this.bu9l();
        if (this.en0x.onback) return this.en0x.onback()
    };
    b8h.bkH9y = function(d8f) {
        h8b.cu9l(d8f);
        this.bu9l();
        this.z8r("onskip")
    };
    b8h.Qc1x = function(d8f) {
        h8b.cu9l(d8f);
        if ( !! this.dM0x) return;
        if (!this.en0x.noVerifyMobile) {
            var fO0x = this.Ql1x();
            if (!fO0x) return;
            this.U8M.Cc7V({
                data: {
                    ctcode: this.go1x,
                    cellphone: fO0x
                }
            })
        } else {
            this.U8M.bms0x({})
        }
    };
    b8h.sp4t = function(m8e) {
        this.EI8A()
    };
    b8h.Qf1x = function(m8e) {
        this.cX9O(false);
        this.ca9R((m8e || {}).message || "验证码发送失败")
    };
    b8h.xC6w = function(d8f) {
        h8b.cu9l(d8f);
        if (this.cX9O()) return;
        var hj1x = this.tz4D();
        if (!hj1x) return;
        this.cX9O(true);
        if (this.en0x.onverify) {
            this.en0x.onverify({
                cellphone: hj1x.mobile,
                captcha: hj1x.captcha,
                countrycode: this.go1x
            })
        } else {
            this.U8M.cyI6C({
                data: {
                    cellphone: hj1x.mobile,
                    captcha: hj1x.captcha,
                    ctcode: this.go1x
                }
            })
        }
    };
    b8h.cgT2x = function(m8e) {
        this.z8r("onok", NEJ.X(m8e, {
            countrycode: this.go1x
        }))
    };
    b8h.YY4c = function(m8e) {
        this.cX9O(false);
        if (m8e.code == 503) {
            this.ca9R("验证码错误")
        } else if (this.en0x.onerror) {
            this.z8r("onerror", m8e)
        }
    };
    b8h.Ql1x = function() {
        var fO0x = this.gt1x || this.tf4j.value.trim();
        if (!fO0x) return this.ca9R("请输入手机号", "mobile");
        if (!l8d.Ac6W(fO0x, this.go1x)) return this.ca9R("请输入正确的手机号", "mobile");
        return fO0x
    };
    b8h.tz4D = function() {
        var fO0x = this.gt1x || this.tf4j.value.trim();
        var iz1x = "";
        if (this.gt1x) {
            iz1x = this.dg9X || ""
        } else {
            iz1x = this.nS3x[0].value.trim()
        }
        if (!fO0x) return this.ca9R("请输入手机号", "mobile");
        if (!iz1x) return this.ca9R("请输入验证码");
        if (!this.en0x.noVerifyMobile && !l8d.Ac6W(fO0x, this.go1x)) return this.ca9R("请输入正确的手机号", "mobile");
        this.ca9R(false);
        return {
            mobile: fO0x,
            captcha: iz1x,
            countrycode: this.go1x
        }
    };
    b8h.EI8A = function() {
        var bA9r;
        var bII5N = function() {
            bA9r--;
            this.YM3x.innerText = this.gt1x ? bA9r + "S": " 00:" + (bA9r >= 10 ? bA9r: "0" + bA9r) + " ";
            if (bA9r == 0) {
                this.dM0x = clearInterval(this.dM0x);
                this.nU3x.innerHTML = "<i>重新发送</i>";
                a7h.w8o(this.YM3x, "f-hide");
                a7h.y8q(this.nU3x, "f-hide")
            }
        };
        return function() {
            bA9r = 60;
            this.dM0x = clearInterval(this.dM0x);
            this.dM0x = setInterval(bII5N.f8d(this), 1e3);
            bII5N.call(this);
            a7h.w8o(this.nU3x, "f-hide");
            a7h.y8q(this.YM3x, "f-hide")
        }
    } ();
    b8h.ca9R = function(bF9w, jJ1x) {
        this.ed0x(this.ec0x, bF9w);
        a7h.y8q(this.tf4j, "u-txt-err");
        if (jJ1x == "mobile") {
            a7h.w8o(this.tf4j, "u-txt-err")
        }
    };
    b8h.cX9O = function(dk9b) {
        return this.ee0x(this.PV1x, dk9b, this.en0x.okbutton, "验证中...")
    };
    b8h.cVW1x = function() {
        k8c.bf8X(this.nS3x || [],
        function(p8h, bc8U) {
            this.bkL9C(bc8U)
        }.f8d(this))
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    ch9Y = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.EX8P = NEJ.C();
    b8h = n8f.EX8P.M8E(ch9Y.cO9F);
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.en0x = e8e;
        this.tC4G = e8e.user;
        this.U8M = q8i.mO2x.B8t();
        this.U8M.s8k("onmobilebind", this.bkE9v.f8d(this));
        this.U8M.s8k("onmobilebinderror", this.bkD9u.f8d(this));
        this.U8M.s8k("onactive", this.Zo4s.f8d(this));
        this.U8M.s8k("onactiveerror", this.bkC9t.f8d(this));
        if (e8e.requiremobile && !this.cgz2x(this.tC4G)) {
            this.eW0x = n8f.sc4g.J8B({
                title: "绑定手机号",
                onok: this.bkA9r.f8d(this),
                canskip: true,
                onskip: this.bjj9a.f8d(this)
            })
        } else {
            this.bjj9a()
        }
        l8d.kl2x()
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.U8M.W8O();
        if (this.eW0x) this.eW0x.W8O();
        if (this.oD3x) this.oD3x.W8O()
    };
    b8h.bkA9r = function(bo8g) {
        this.gt1x = bo8g.mobile;
        this.bjm9d = bo8g.captcha;
        this.U8M.bmG0x({
            data: {
                phone: this.gt1x,
                captcha: this.bjm9d
            }
        })
    };
    b8h.bjj9a = function() {
        if (this.oD3x) this.oD3x.W8O();
        this.oD3x = n8f.JI9z.J8B({
            title: "设置昵称",
            onok: this.cgk1x.f8d(this)
        })
    };
    b8h.bkE9v = function() {
        this.eW0x.bu9l();
        this.bjj9a()
    };
    b8h.bkD9u = function(bo8g) {
        if (bo8g.code == 506) {
            this.eW0x.cX9O(false);
            this.eW0x.ca9R(bo8g.message, "mobile")
        } else {
            this.eW0x.bu9l();
            this.bjj9a()
        }
    };
    b8h.cgk1x = function(bo8g) {
        this.bIl5q = {
            data: {
                nickname: bo8g.nickname,
                dragPwd: bo8g.dragPwd
            }
        };
        l8d.Gf8X(this.lx2x.f8d(this))
    };
    b8h.lx2x = function(cs9j) {
        this.bIl5q.data.checkToken = cs9j || "";
        this.U8M.bmK0x(this.bIl5q)
    };
    b8h.Zo4s = function(bo8g) {
        this.oD3x.bu9l();
        this.tC4G.profile = bo8g.profile;
        h8b.z8r(window, "login", {
            user: this.tC4G
        })
    };
    b8h.bkC9t = function(bo8g) {
        this.oD3x.cX9O(false);
        if (bo8g.code == 505) return this.oD3x.ca9R("该昵称已被占用", "nickname", true);
        if (bo8g.code == 407) return this.oD3x.ca9R("该昵称包含关键词", "nickname", true);
        if (bo8g.code == 250) return this.oD3x.ca9R(bo8g.message || "登录异常", "nickname", true);
        n8f.bb8T.J8B({
            tip: bo8g.message || "登录失败，请重试",
            type: 2
        });
        this.oD3x.bu9l()
    };
    b8h.cgz2x = function(dz0x) {
        var us5x = dz0x.bindings || [];
        return k8c.du0x(us5x,
        function(p8h) {
            return p8h.type == 1
        }) >= 0
    }
})(); (function() {
    var c8g = NEJ.P,
    l8d = c8g("nm.x");
    var bjq9h = [["China", "中国", "CN", 86], ["Hongkong", "中国香港", "HK", 852], ["Macao", "中国澳门", "MO", 853], ["Taiwan", "中国台湾", "TW", 886], ["Japan", "日本", "JP", 81], ["Korea", "韩国", "KR", 82], ["United Kingdom", "英国", "GB", 44], ["United States of America", "美国", "US", 1], ["Canada", "加拿大", "CA", 1], ["France", "法国", "FR", 33], ["Finland", "芬兰", "FI", 358], ["Germany", "德国", "DE", 49], ["Netherlands", "荷兰", "NL", 31], ["Italy", "意大利", "IT", 39], ["India", "印度", "IN", 91], ["Thailand", "泰国", "TH", 66], ["NewZealand", "新西兰", "NZ", 64], ["Portugal", "葡萄牙", "PT", 351], ["Russia", "俄罗斯", "RU", 7], ["Singapore", "新加坡", "SG", 65], ["Malaysia", "马来西亚", "MY", 60], ["Spain", "西班牙", "ES", 34], ["South Africa", "南非", "ZA", 27], ["Sweden", "瑞典", "SE", 46], ["Angola", "安哥拉", "AO", 244], ["Afghanistan", "阿富汗", "AF", 93], ["Albania", "阿尔巴尼亚", "AL", 355], ["Algeria", "阿尔及利亚", "DZ", 213], ["Andorra", "安道尔共和国", "AD", 376], ["Anguilla", "安圭拉岛", "AI", 1264], ["Antigua and Barbuda", "安提瓜和巴布达", "AG", 1268], ["Argentina", "阿根廷", "AR", 54], ["Armenia", "亚美尼亚", "AM", 374], ["Ascension", "阿森松", "AC", 247], ["Australia", "澳大利亚", "AU", 61], ["Austria", "奥地利", "AT", 43], ["Azerbaijan", "阿塞拜疆", "AZ", 994], ["Bahamas", "巴哈马", "BS", 1242], ["Bahrain", "巴林", "BH", 973], ["Bangladesh", "孟加拉国", "BD", 880], ["Barbados", "巴巴多斯", "BB", 1246], ["Belarus", "白俄罗斯", "BY", 375], ["Belgium", "比利时", "BE", 32], ["Belize", "伯利兹", "BZ", 501], ["Benin", "贝宁", "BJ", 229], ["BermudaIs.", "百慕大群岛", "BM", 1441], ["Bolivia", "玻利维亚", "BO", 591], ["Botswana", "博茨瓦纳", "BW", 267], ["Brazil", "巴西", "BR", 55], ["Brunei", "文莱", "BN", 673], ["Bulgaria", "保加利亚", "BG", 359], ["Burkina-faso", "布基纳法索", "BF", 226], ["Burma", "缅甸", "MM", 95], ["Burundi", "布隆迪", "BI", 257], ["Cameroon", "喀麦隆", "CM", 237], ["Cayman Is.", "开曼群岛", "KY", 1345], ["Central African Republic", "中非共和国", "CF", 236], ["Chad", "乍得", "TD", 235], ["Chile", "智利", "CL", 56], ["Colombia", "哥伦比亚", "CO", 57], ["Congo", "刚果", "CG", 242], ["Cook Is.", "库克群岛", "CK", 682], ["Costa Rica", "哥斯达黎加", "CR", 506], ["Cuba", "古巴", "CU", 53], ["Cyprus", "塞浦路斯", "CY", 357], ["Czech Republic", "捷克", "CZ", 420], ["Denmark", "丹麦", "DK", 45], ["Djibouti", "吉布提", "DJ", 253], ["Dominica Rep.", "多米尼加共和国", "DO", 1890], ["Ecuador", "厄瓜多尔", "EC", 593], ["Egypt", "埃及", "EG", 20], ["EISalvador", "萨尔瓦多", "SV", 503], ["Estonia", "爱沙尼亚", "EE", 372], ["Ethiopia", "埃塞俄比亚", "ET", 251], ["Fiji", "斐济", "FJ", 679], ["French Guiana", "法属圭亚那", "GF", 594], ["Gabon", "加蓬", "GA", 241], ["Gambia", "冈比亚", "GM", 220], ["Georgia", "格鲁吉亚", "GE", 995], ["Ghana", "加纳", "GH", 233], ["Gibraltar", "直布罗陀", "GI", 350], ["Greece", "希腊", "GR", 30], ["Grenada", "格林纳达", "GD", 1473], ["Guam", "关岛", "GU", 1671], ["Guatemala", "危地马拉", "GT", 502], ["Guinea", "几内亚", "GN", 224], ["Guyana", "圭亚那", "GY", 592], ["Haiti", "海地", "HT", 509], ["Honduras", "洪都拉斯", "HN", 504], ["Hungary", "匈牙利", "HU", 36], ["Iceland", "冰岛", "IS", 354], ["Indonesia", "印度尼西亚", "ID", 62], ["Iran", "伊朗", "IR", 98], ["Iraq", "伊拉克", "IQ", 964], ["Ireland", "爱尔兰", "IE", 353], ["Israel", "以色列", "IL", 972], ["IvoryCoast", "科特迪瓦", "CI", 225], ["Jamaica", "牙买加", "JM", 1876], ["Jordan", "约旦", "JO", 962], ["Kampuchea (Cambodia )", "柬埔寨", "KH", 855], ["Kazakstan", "哈萨克斯坦", "KZ", 7], ["Kenya", "肯尼亚", "KE", 254], ["Kuwait", "科威特", "KW", 965], ["Kyrgyzstan", "吉尔吉斯坦", "KG", 996], ["Laos", "老挝", "LA", 856], ["Latvia", "拉脱维亚", "LV", 371], ["Lebanon", "黎巴嫩", "LB", 961], ["Lesotho", "莱索托", "LS", 266], ["Liberia", "利比里亚", "LR", 231], ["Libya", "利比亚", "LY", 218], ["Liechtenstein", "列支敦士登", "LI", 423], ["Lithuania", "立陶宛", "LT", 370], ["Luxembourg", "卢森堡", "LU", 352], ["Madagascar", "马达加斯加", "MG", 261], ["Malawi", "马拉维", "MW", 265], ["Maldives", "马尔代夫", "MV", 960], ["Mali", "马里", "ML", 223], ["Malta", "马耳他", "MT", 356], ["Mariana Is", "马里亚那群岛", "MP", 1670], ["Martinique", "马提尼克", "MQ", 596], ["Mauritius", "毛里求斯", "MU", 230], ["Mexico", "墨西哥", "MX", 52], ["Republic of Moldova", "摩尔多瓦", "MD", 373], ["Monaco", "摩纳哥", "MC", 377], ["Mongolia", "蒙古", "MN", 976], ["Montserrat Is", "蒙特塞拉特岛", "MS", 1664], ["Morocco", "摩洛哥", "MA", 212], ["Mozambique", "莫桑比克", "MZ", 258], ["Namibia", "纳米比亚", "NA", 264], ["Nauru", "瑙鲁", "NR", 674], ["Nepal", "尼泊尔", "NP", 977], ["Netheriands Antilles", "荷属安的列斯", "AN", 599], ["Nicaragua", "尼加拉瓜", "NI", 505], ["Niger", "尼日尔", "NE", 227], ["Nigeria", "尼日利亚", "NG", 234], ["North Korea", "朝鲜", "KP", 850], ["Norway", "挪威", "NO", 47], ["Oman", "阿曼", "OM", 968], ["Pakistan", "巴基斯坦", "PK", 92], ["Panama", "巴拿马", "PA", 507], ["Papua New Cuinea", "巴布亚新几内亚", "PG", 675], ["Paraguay", "巴拉圭", "PY", 595], ["Peru", "秘鲁", "PE", 51], ["Philippines", "菲律宾", "PH", 63], ["Poland", "波兰", "PL", 48], ["French Polynesia", "法属玻利尼西亚", "PF", 689], ["PuertoRico", "波多黎各", "PR", 1787], ["Qatar", "卡塔尔", "QA", 974], ["Reunion", "留尼旺", "RE", 262], ["Romania", "罗马尼亚", "RO", 40], ["Saint Lueia", "圣卢西亚", "LC", 1758], ["Saint Vincent", "圣文森特岛", "VC", 1784], ["Samoa Eastern", "东萨摩亚(美)", "AS", 684], ["Samoa Western", "西萨摩亚", "WS", 685], ["San Marino", "圣马力诺", "SM", 378], ["Sao Tome and Principe", "圣多美和普林西比", "ST", 239], ["Saudi Arabia", "沙特阿拉伯", "SA", 966], ["Senegal", "塞内加尔", "SN", 221], ["Seychelles", "塞舌尔", "SC", 248], ["Sierra Leone", "塞拉利昂", "SL", 232], ["Slovakia", "斯洛伐克", "SK", 421], ["Slovenia", "斯洛文尼亚", "SI", 386], ["Solomon Is", "所罗门群岛", "SB", 677], ["Somali", "索马里", "SO", 252], ["Sri Lanka", "斯里兰卡", "LK", 94], ["St.Lucia", "圣卢西亚", "LC", 1758], ["St.Vincent", "圣文森特", "VC", 1784], ["Sudan", "苏丹", "SD", 249], ["Suriname", "苏里南", "SR", 597], ["Swaziland", "斯威士兰", "SZ", 268], ["Switzerland", "瑞士", "CH", 41], ["Syria", "叙利亚", "SY", 963], ["Tajikstan", "塔吉克斯坦", "TJ", 992], ["Tanzania", "坦桑尼亚", "TZ", 255], ["Togo", "多哥", "TG", 228], ["Tonga", "汤加", "TO", 676], ["Trinidad and Tobago", "特立尼达和多巴哥", "TT", 1868], ["Tunisia", "突尼斯", "TN", 216], ["Turkey", "土耳其", "TR", 90], ["Turkmenistan", "土库曼斯坦", "TM", 993], ["Uganda", "乌干达", "UG", 256], ["Ukraine", "乌克兰", "UA", 380], ["United Arab Emirates", "阿拉伯联合酋长国", "AE", 971], ["Uruguay", "乌拉圭", "UY", 598], ["Uzbekistan", "乌兹别克斯坦", "UZ", 998], ["Venezuela", "委内瑞拉", "VE", 58], ["Vietnam", "越南", "VN", 84], ["Yemen", "也门", "YE", 967], ["Yugoslavia", "南斯拉夫", "YU", 381], ["Zimbabwe", "津巴布韦", "ZW", 263], ["Zaire", "扎伊尔", "ZR", 243], ["Zambia", "赞比亚", "ZM", 260]];
    l8d.Zy4C = function() {
        return bjq9h
    };
    l8d.bjs9j = function(kJ2x, mA2x) {
        if (!kJ2x || !mA2x) return false;
        var bjv9m = false;
        for (var i = 0; i < 4; ++i) {
            if (typeof kJ2x == "object" && typeof mA2x == "object") {
                bjv9m = kJ2x[i] == mA2x[i]
            } else if (typeof kJ2x == "object") {
                bjv9m = kJ2x[i] == mA2x
            } else if (typeof mA2x == "object") {
                bjv9m = kJ2x == mA2x[i]
            }
            if (bjv9m) return true
        }
        return kJ2x == mA2x
    };
    l8d.cWi1x = function(kJ2x, mA2x) {
        if (!kJ2x || !mA2x) return false;
        if (typeof kJ2x == "object" && typeof mA2x == "object") return kJ2x[3] == mA2x[3];
        if (typeof kJ2x == "object") return kJ2x[3] == mA2x;
        if (typeof mA2x == "object") return kJ2x == mA2x[3];
        return kJ2x == mA2x
    };
    l8d.bXv9m = function(p8h) {
        return p8h[1] + " +" + p8h[3]
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    v8n = c8g("nej.j"),
    ch9Y = c8g("nej.ut"),
    bD9u = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    E8w = c8g("nm.m"),
    n8f = c8g("nm.l"),
    x8p = c8g("nm.w"),
    b8h,
    L8D;
    x8p.bks9j = NEJ.C();
    b8h = x8p.bks9j.M8E(bD9u.eu0x);
    var bjq9h = l8d.Zy4C();
    b8h.ci9Z = function() {
        this.cg9X = "wgt-phone-input"
    };
    b8h.bY9P = function() {
        this.cj9a();
        this.oB3x = a7h.cQ9H(this.o8g, "j-code");
        this.jV2x = a7h.cQ9H(this.o8g, "j-phone");
        this.bL9C = a7h.cQ9H(this.o8g, "j-list");
        a7h.dI0x(this.bL9C, "wgt-countrycode-item", {
            countries: bjq9h
        })
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.bkq9h(e8e.countrycode);
        this.bkp9g(e8e.phone);
        a7h.hh1x(this.jV2x, "holder");
        this.bZ9Q([[this.jV2x, "focus", this.bld9U.f8d(this)], [this.jV2x, "keypress", this.blc9T.f8d(this)], [this.jV2x, "keyup", this.blb9S.f8d(this)], [this.o8g, "click", this.cy9p.f8d(this)], [document.body, "click", this.ox3x.f8d(this)]])
    };
    b8h.bkp9g = function(hG1x) {
        this.jV2x.value = hG1x || ""
    };
    b8h.bjD9u = function() {
        return this.jV2x.value.trim()
    };
    b8h.bkq9h = function(qE4I) {
        this.go1x = qE4I || "86";
        this.oB3x.innerHTML = "+" + this.go1x
    };
    b8h.bko9f = function() {
        return this.go1x
    };
    b8h.Vl2x = function() {
        this.bkq9h("");
        this.bkp9g("")
    };
    b8h.bIz5E = function() {
        a7h.w8o(this.o8g, "z-err")
    };
    b8h.bkl9c = function() {
        a7h.y8q(this.o8g, "z-err")
    };
    b8h.bld9U = function() {
        this.bkl9c();
        this.jl1x()
    };
    b8h.blc9T = function(d8f) {
        if (d8f.keyCode == 0) {
            if (d8f.charCode < 48 || d8f.charCode > 57) h8b.cu9l(d8f)
        } else if (d8f.charCode == 0) {
            if (d8f.keyCode == 13) return this.z8r("onpressenter")
        } else {
            if (d8f.keyCode == 13) return this.z8r("onpressenter");
            if (d8f.keyCode < 48 || d8f.keyCode > 57) h8b.cu9l(d8f)
        }
    };
    b8h.blb9S = function(d8f) {
        var hG1x = this.bjD9u();
        if (/[^\d]/.test(hG1x)) this.bkp9g(hG1x.replace(/[^\d]/g, ""))
    };
    b8h.cy9p = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:action");
        if (!g8c) return;
        var X8P = a7h.u8m(g8c, "action");
        switch (X8P) {
        case "toggle":
            this.rF4J();
            break;
        case "select":
            this.gB1x(g8c);
            h8b.bi8a(d8f);
            break
        }
    };
    b8h.ox3x = function(d8f) {
        var cL9C = d8f.target || d8f.srcElement;
        if (!l8d.NF0x(this.o8g, cL9C)) {
            this.jl1x()
        }
    };
    b8h.rF4J = function(d8f) {
        if (a7h.bG9x(this.bL9C, "f-hide")) {
            this.GR8J()
        } else {
            this.jl1x()
        }
    };
    b8h.GR8J = function() {
        a7h.w8o(this.o8g, "z-show");
        a7h.y8q(this.bL9C, "f-hide")
    };
    b8h.jl1x = function() {
        a7h.y8q(this.o8g, "z-show");
        a7h.w8o(this.bL9C, "f-hide")
    };
    b8h.gB1x = function(g8c) {
        var r8j = a7h.u8m(g8c, "index"),
        p8h = null;
        if (r8j >= 0) {
            p8h = bjq9h[r8j];
            this.bkq9h(p8h[3]);
            this.jl1x()
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    x8p = c8g("nm.w"),
    b8h,
    L8D;
    n8f.ZO4S = NEJ.C();
    b8h = n8f.ZO4S.M8E(n8f.es0x);
    L8D = n8f.ZO4S.cx9o;
    b8h.ci9Z = function() {
        this.cg9X = "ntp-reg-mobile"
    };
    b8h.bY9P = function() {
        this.cj9a();
        this.tc4g = a7h.F8x(this.o8g, "j-mob")[0];
        this.eU0x = a7h.F8x(this.o8g, "j-pwd")[0];
        this.ec0x = a7h.F8x(this.o8g, "j-err")[0];
        this.cH9y = a7h.F8x(this.o8g, "j-btn")[0];
        a7h.hh1x(this.eU0x, "holder");
        h8b.s8k(this.eU0x, "focus", this.BQ7J.f8d(this));
        h8b.s8k(this.eU0x, "keypress", this.Bz7s.f8d(this));
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.oN3x = x8p.bks9j.B8t({
            parent: this.tc4g,
            phone: e8e.mobile,
            countrycode: e8e.countrycode,
            onpressenter: this.bki9Z.f8d(this)
        });
        this.ca9R(false);
        this.cX9O(false);
        this.eU0x.value = ""
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.oN3x.W8O()
    };
    b8h.BQ7J = function() {
        a7h.y8q(this.eU0x, "u-txt-err")
    };
    b8h.Bz7s = function(d8f) {
        if (d8f.keyCode == 13) this.bki9Z()
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "ok":
            this.bki9Z(d8f);
            break;
        case "back":
            this.bkI9z(d8f);
            break
        }
    };
    b8h.bkI9z = function(d8f) {
        h8b.cu9l(d8f);
        this.bu9l();
        n8f.pT3x.J8B({
            title: "登录"
        })
    };
    b8h.bki9Z = function(d8f) {
        h8b.cu9l(d8f);
        var hj1x = this.tz4D();
        if (!hj1x) return;
        this.cX9O(true);
        this.z8r("onok", {
            mobile: hj1x.mobile,
            countrycode: hj1x.countrycode,
            password: hj1x.password
        })
    };
    b8h.tz4D = function() {
        var fO0x = this.oN3x.bjD9u(),
        qE4I = this.oN3x.bko9f(),
        hK1x = this.eU0x.value;
        if (!fO0x) return this.ca9R("请输入手机号", "mobile");
        if (!hK1x) return this.ca9R("请输入登录密码", "password");
        if (!l8d.Ac6W(fO0x, qE4I)) return this.ca9R("请输入正确的手机号", "mobile");
        if (hK1x.length < 6 || hK1x.length > 16) return this.ca9R("请输入6-16位的密码", "password");
        return {
            mobile: fO0x,
            password: hK1x,
            countrycode: qE4I
        }
    };
    b8h.ca9R = function(bF9w, jJ1x) {
        this.ed0x(this.ec0x, bF9w);
        this.oN3x.bkl9c();
        a7h.y8q(this.eU0x, "u-txt-err");
        if (jJ1x == "mobile") {
            this.oN3x.bIz5E()
        } else if (jJ1x == "password") {
            a7h.w8o(this.eU0x, "u-txt-err")
        }
    };
    b8h.cX9O = function(dk9b) {
        return this.ee0x(this.cH9y, dk9b, "下一步", "发送中...")
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    x8p = c8g("nm.w"),
    b8h,
    L8D;
    n8f.bjR9I = NEJ.C();
    b8h = n8f.bjR9I.M8E(n8f.es0x);
    L8D = n8f.bjR9I.cx9o;
    b8h.ci9Z = function() {
        this.cg9X = "ntp-reg-setting"
    };
    b8h.bY9P = function() {
        this.cj9a();
        this.cS9J = a7h.F8x(this.o8g, "js-tip")[0];
        this.jb1x = a7h.F8x(this.o8g, "js-input")[0];
        a7h.hh1x(this.jb1x, "holder");
        h8b.s8k(this.jb1x, "focus", this.cfq1x.f8d(this));
        h8b.s8k(this.jb1x, "keypress", this.cfj1x.f8d(this));
        h8b.s8k(this.jb1x, "keyup", this.blm0x.f8d(this));
        this.ec0x = a7h.F8x(this.o8g, "u-err")[0];
        this.cH9y = a7h.F8x(this.o8g, "js-primary")[0];
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this));
        l8d.kl2x()
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.gt1x = e8e.mobile || "";
        this.go1x = e8e.countrycode || "86";
        this.uc5h = e8e.password || "";
        this.cuU5Z = e8e.captcha || "";
        if (e8e.tip) {
            this.cS9J.innerHTML = e8e.tip
        }
        this.ca9R(false);
        this.cX9O(false);
        this.jb1x.value = "";
        this.U8M = q8i.mO2x.B8t({
            onmobileregist: this.baa4e.f8d(this),
            onmobileregisterror: this.jD1x.f8d(this)
        })
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.U8M.W8O();
        if (this.dg9X) {
            this.dg9X.W8O();
            delete this.dg9X
        }
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "ok":
            this.bab4f(d8f);
            break
        }
    };
    b8h.cfq1x = function() {
        a7h.y8q(this.jb1x, "u-txt-err")
    };
    b8h.cfj1x = function(d8f) {
        if (d8f.keyCode == 13) this.bab4f()
    };
    b8h.bab4f = function(d8f) {
        h8b.cu9l(d8f);
        if (this.cX9O()) return;
        var hj1x = this.tz4D();
        if (!hj1x) return;
        var i8a = {
            phone: this.gt1x,
            countrycode: this.go1x,
            password: k8c.lT2x(this.uc5h),
            nickname: hj1x.nickname,
            captcha: this.cuU5Z
        };
        this.cX9O(true);
        this.bTS9J = i8a;
        l8d.Gf8X(this.lx2x.f8d(this))
    };
    b8h.lx2x = function(cs9j) {
        this.bTS9J.checkToken = cs9j || "";
        this.U8M.bfZ6T({
            data: this.bTS9J
        })
    };
    b8h.baa4e = function(m8e) {
        this.cX9O(false);
        this.bu9l();
        localCache.nL3x("user", m8e);
        h8b.z8r(window, "login", {
            user: m8e
        })
    };
    b8h.jD1x = function(bo8g) {
        this.cX9O(false);
        if (bo8g.code == 415) {
            if (this.dg9X) {
                this.dg9X.W8O();
                this.ca9R("注册过于频繁", "captcha")
            }
            this.dg9X = x8p.WT3x.B8t({
                captchaId: bo8g.captchaId,
                txt: "txt-login-captcha",
                onaction: this.bab4f.f8d(this)
            });
            this.ec0x.insertAdjacentElement("beforeBegin", this.dg9X.mq2x());
            return
        }
        if (bo8g.code == 505) return this.ca9R("该昵称已被占用", "nickname");
        if (bo8g.code == 407) return this.ca9R("该昵称包含关键词", "nickname");
        if (bo8g.code == 250) {
            this.ca9R(bo8g.message || "注册异常");
            return
        }
        if (bo8g.message) {
            this.ca9R(bo8g.message)
        } else {
            n8f.bb8T.J8B({
                tip: "注册失败，请重试",
                type: 2
            })
        }
    };
    b8h.tz4D = function() {
        var jY2x = this.jb1x.value.trim(),
        pt3x = jY2x.replace(/[^\x00-\xff]/g, "**"),
        iz1x = "";
        if (!jY2x) return this.ca9R("请输入昵称", "nickname");
        if (this.dg9X) {
            iz1x = this.dg9X.gl0x();
            if (!iz1x) return this.ca9R("请输入验证码", "captcha");
            var R8J = this.dg9X.KP0x();
            if (!R8J.success) {
                return this.ca9R(R8J.message, "captcha")
            }
        }
        if (pt3x.length < 4 || pt3x.length > 30) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        if (!/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(jY2x)) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        return {
            nickname: jY2x,
            captcha: iz1x
        }
    };
    b8h.blm0x = function(d8f) {
        var jY2x = this.jb1x.value.trim(),
        pt3x = jY2x.replace(/[^\x00-\xff]/g, "**");
        if (this.blh0x == jY2x) return;
        this.blh0x = jY2x;
        if (d8f.keyCode == 13) return;
        if (/[^\u4e00-\u9fa5\w-]/.test(jY2x)) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        if (jY2x && pt3x.length > 30) return this.ca9R("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
        this.ca9R(false)
    };
    b8h.ca9R = function(bF9w, jJ1x) {
        this.ed0x(this.ec0x, bF9w);
        a7h.y8q(this.jb1x, "u-txt-err");
        if (this.dg9X) this.dg9X.y8q("u-txt-err");
        if (jJ1x == "nickname") {
            a7h.w8o(this.jb1x, "u-txt-err")
        } else if (jJ1x == "captcha") {
            if (this.dg9X) this.dg9X.w8o("u-txt-err")
        }
    };
    b8h.cX9O = function(dk9b) {
        return this.ee0x(this.cH9y, dk9b, "开启云音乐", "设置中...")
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    ch9Y = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    var MOB_CHECK = {
        MAIN: 1,
        SNS: 2,
        NETEASE: 3,
        NULL: -1
    };
    n8f.bka9R = NEJ.C();
    b8h = n8f.bka9R.M8E(ch9Y.cO9F);
    b8h.bp8h = function(e8e) {
        e8e = e8e || {};
        this.bq8i(e8e);
        this.U8M = q8i.mO2x.B8t({
            onsendcaptcha: this.sp4t.f8d(this),
            onsendcaptchaerror: this.Jw9n.f8d(this),
            onmobilecheck: this.bae4i.f8d(this),
            onmobilecheckerror: this.baf4j.f8d(this),
            onmobileregist: this.baa4e.f8d(this),
            onmobileregisterror: this.bke9V.f8d(this)
        });
        this.Bg7Z = n8f.ZO4S.J8B({
            title: "手机号注册",
            onok: this.Lm0x.f8d(this)
        })
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.U8M.W8O();
        if (this.Bg7Z) this.Bg7Z.W8O();
        if (this.eW0x) this.eW0x.W8O()
    };
    b8h.Lm0x = function(bo8g) {
        this.gt1x = bo8g.mobile;
        this.go1x = bo8g.countrycode;
        this.uc5h = bo8g.password;
        this.U8M.Cc7V({
            data: {
                ctcode: this.go1x,
                cellphone: bo8g.mobile
            }
        })
    };
    b8h.sp4t = function() {
        this.Bg7Z.bu9l();
        this.eW0x = n8f.sc4g.J8B({
            title: "手机号注册",
            mobile: this.gt1x,
            countrycode: this.go1x,
            okbutton: "下一步",
            onok: this.bwd2x.f8d(this),
            backbutton: "&lt;&nbsp;&nbsp;返回登录",
            onback: this.bkh9Y.f8d(this)
        })
    };
    b8h.Jw9n = function(bo8g) {
        this.Bg7Z.cX9O(false);
        n8f.bb8T.J8B({
            tip: bo8g.message || "验证码发送失败",
            type: 2
        })
    };
    b8h.bwd2x = function(bo8g) {
        this.gt1x = bo8g.mobile;
        this.go1x = bo8g.countrycode;
        this.dg9X = bo8g.captcha;
        this.U8M.bmO0x({
            data: {
                cellphone: bo8g.mobile,
                captcha: bo8g.captcha,
                countrycode: bo8g.countrycode
            }
        })
    };
    b8h.bae4i = function(bo8g) {
        this.eW0x.bu9l();
        switch (bo8g.exist) {
        case MOB_CHECK.NULL:
            n8f.bjR9I.J8B({
                title:
                "手机号注册",
                mobile: this.gt1x,
                countrycode: this.go1x,
                password: this.uc5h,
                captcha: this.dg9X
            });
            break;
        case MOB_CHECK.MAIN:
        case MOB_CHECK.SNS:
        case MOB_CHECK.NETEASE:
            this.Hy9p(this.gt1x, this.uc5h, this.dg9X, this.go1x);
            break
        }
    };
    b8h.baf4j = function(bo8g) {
        n8f.bb8T.J8B({
            tip: bo8g.message || "验证码发送失败",
            type: 2
        })
    };
    b8h.baa4e = function(bo8g) {
        localCache.nL3x("user", bo8g);
        if (!bo8g.profile) {
            if (this.mU2x) this.mU2x.W8O();
            this.mU2x = n8f.EX8P.B8t({
                user: bo8g,
                requiremobile: false,
                onsuccess: this.wj5o.f8d(this)
            })
        } else {
            l8d.eX0x({
                clazz: "m-layer-w2",
                title: "手机号注册",
                message: '该手机号已与云音乐帐号 <strong class="s-fc1">' + k8c.dP0x(bo8g.profile.nickname) + "</strong> 绑定，<br/><br/>以后你可以直接用该手机号+密码登录",
                btntxt: "知道了",
                action: h8b.z8r.f8d(h8b, window, "login", {
                    user: bo8g
                }),
                onclose: h8b.z8r.f8d(h8b, window, "login", {
                    user: bo8g
                })
            })
        }
    };
    b8h.wj5o = function(d8f) {
        h8b.z8r(window, "login", {
            user: d8f.user
        })
    };
    b8h.bke9V = function(bo8g) {
        if (bo8g.code == 415) {
            l8d.bIg5l({
                captchaId: bo8g.captchaId,
                ondestroy: this.Hy9p.f8d(this, this.gt1x, this.uc5h, this.dg9X)
            })
        } else {
            n8f.bb8T.J8B({
                tip: bo8g.message || "注册失败，请重试",
                type: 2
            })
        }
    };
    b8h.bkh9Y = function() {
        this.eW0x.bu9l();
        n8f.pT3x.J8B({
            title: "登录"
        })
    };
    b8h.Hy9p = function(fO0x, hK1x, iz1x, qE4I) {
        this.U8M.bfZ6T({
            data: {
                phone: fO0x,
                countrycode: qE4I,
                password: k8c.lT2x(hK1x),
                captcha: iz1x
            }
        })
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    ch9Y = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    var MOB_CHECK = {
        MAIN: 1,
        SNS: 2,
        NETEASE: 3,
        NULL: -1
    };
    n8f.bQu7n = NEJ.C();
    b8h = n8f.bQu7n.M8E(ch9Y.cO9F);
    b8h.bp8h = function(e8e) {
        e8e = e8e || {};
        this.bq8i(e8e);
        this.U8M = q8i.mO2x.B8t({
            onsendcaptcha: this.sp4t.f8d(this),
            onsendcaptchaerror: this.Jw9n.f8d(this),
            onmobilecheck: this.bae4i.f8d(this),
            onmobilecheckerror: this.baf4j.f8d(this),
            onmobileregist: this.baa4e.f8d(this),
            onmobileregisterror: this.bke9V.f8d(this)
        });
        this.Bg7Z = n8f.ZO4S.J8B({
            title: "重设密码",
            mobile: e8e.mobile || "",
            countrycode: e8e.countrycode,
            onok: this.Lm0x.f8d(this)
        })
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.U8M.W8O();
        if (this.Bg7Z) this.Bg7Z.W8O();
        if (this.eW0x) this.eW0x.W8O()
    };
    b8h.Lm0x = function(bo8g) {
        this.gt1x = bo8g.mobile;
        this.go1x = bo8g.countrycode;
        this.uc5h = bo8g.password;
        this.U8M.Cc7V({
            data: {
                ctcode: bo8g.countrycode,
                cellphone: bo8g.mobile
            }
        })
    };
    b8h.sp4t = function() {
        this.Bg7Z.bu9l();
        this.eW0x = n8f.sc4g.J8B({
            title: "重设密码",
            mobile: this.gt1x,
            countrycode: this.go1x,
            okbutton: "下一步",
            onok: this.bwd2x.f8d(this),
            backbutton: "&lt;&nbsp;&nbsp;返回登录",
            onback: this.bkh9Y.f8d(this),
            onerror: this.bke9V.f8d(this)
        })
    };
    b8h.Jw9n = function(bo8g) {
        this.Bg7Z.cX9O(false);
        n8f.bb8T.J8B({
            tip: bo8g.message || "验证码发送失败",
            type: 2
        })
    };
    b8h.bwd2x = function(bo8g) {
        this.gt1x = bo8g.mobile;
        this.go1x = bo8g.countrycode;
        this.dg9X = bo8g.captcha;
        this.U8M.bmO0x({
            data: {
                cellphone: bo8g.mobile,
                captcha: bo8g.captcha,
                countrycode: bo8g.countrycode
            }
        })
    };
    b8h.bae4i = function(bo8g) {
        this.eW0x.bu9l();
        switch (bo8g.exist) {
        case MOB_CHECK.NULL:
            n8f.bjR9I.J8B({
                title:
                "设置昵称",
                tip: "该手机号尚未注册，取一个昵称，马上开通",
                mobile: this.gt1x,
                countrycode: this.go1x,
                password: this.uc5h,
                captcha: this.dg9X
            });
            break;
        case MOB_CHECK.MAIN:
        case MOB_CHECK.SNS:
        case MOB_CHECK.NETEASE:
            this.U8M.bfZ6T({
                data:
                {
                    phone:
                    this.gt1x,
                    countrycode: this.go1x,
                    password: k8c.lT2x(this.uc5h),
                    captcha: this.dg9X
                }
            });
            break
        }
    };
    b8h.baf4j = function(bo8g) {
        n8f.bb8T.J8B({
            tip: bo8g.message || "验证码发送失败",
            type: 2
        })
    };
    b8h.bkh9Y = function() {
        this.eW0x.bu9l();
        n8f.pT3x.J8B({
            title: "登录"
        })
    };
    b8h.baa4e = function(m8e) {
        localCache.nL3x("user", m8e);
        if (!m8e.profile) {
            if (this.mU2x) this.mU2x.W8O();
            this.mU2x = n8f.EX8P.B8t({
                user: m8e,
                requiremobile: false,
                onsuccess: this.wj5o.f8d(this)
            })
        } else {
            h8b.z8r(window, "login", {
                user: m8e
            })
        }
    };
    b8h.wj5o = function(d8f) {
        h8b.z8r(window, "login", {
            user: d8f.user
        })
    };
    b8h.bke9V = function(m8e) {
        if (m8e.code == 415) {
            l8d.bIg5l({
                captchaId: m8e.captchaId,
                ondestroy: function() {
                    this.U8M.bfZ6T({
                        data: {
                            phone: this.gt1x,
                            countrycode: this.go1x,
                            password: k8c.lT2x(this.uc5h),
                            captcha: this.dg9X
                        }
                    })
                }.f8d(this)
            })
        } else {
            n8f.bb8T.J8B({
                tip: "重设密码失败，请重试",
                type: 2
            })
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    v8n = c8g("nej.j"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    b8h,
    L8D;
    n8f.ZT4X = NEJ.C();
    b8h = n8f.ZT4X.M8E(n8f.es0x);
    L8D = n8f.ZT4X.cx9o;
    b8h.ci9Z = function() {
        this.cg9X = "ntp-loginverify"
    };
    b8h.bY9P = function() {
        this.cj9a();
        this.tT5Y = a7h.F8x(this.o8g, "js-flag")[0];
        this.bUp9g = a7h.F8x(this.o8g, "js-mobile")[0];
        this.ec0x = a7h.F8x(this.o8g, "u-err")[0];
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.gt1x = e8e.mobile || "";
        this.go1x = e8e.countrycode || "86";
        this.bkj9a = e8e.loginType;
        this.en0x = e8e;
        if (this.bUp9g) {
            this.bUp9g.innerHTML = "+" + this.go1x + " " + this.gt1x
        }
        this.U8M = q8i.mO2x.B8t({
            onsafecaptcha: this.sp4t.f8d(this),
            onsafecaptchaerror: this.Jw9n.f8d(this),
            onloginverify: this.bkk9b.f8d(this),
            onloginverifyerror: this.YY4c.f8d(this),
            onrelogin: this.wE5J.f8d(this),
            onreloginerror: this.bkm9d.f8d(this)
        })
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "ok":
            this.cfy1x();
            break;
        default:
            break
        }
    };
    b8h.cfy1x = function() {
        if (!this.gt1x) return;
        this.U8M.bms0x({})
    };
    b8h.sp4t = function() {
        this.bu9l();
        this.eW0x = n8f.sc4g.J8B({
            title: "网易云音乐",
            mobile: this.gt1x,
            countrycode: this.go1x,
            okbutton: "完成",
            noVerifyMobile: true,
            onverify: this.cfC1x.f8d(this)
        })
    };
    b8h.Jw9n = function(bo8g) {
        n8f.bb8T.J8B({
            tip: bo8g.message || "验证码发送失败",
            type: 2
        })
    };
    b8h.cfC1x = function(i8a) {
        var ib1x = {
            captcha: i8a.captcha
        };
        this.U8M.bIt5y({
            data: ib1x
        })
    };
    b8h.bkk9b = function() {
        this.eW0x.bu9l();
        this.z8r("onok");
        this.U8M.bIr5w({
            data: {
                usertype: this.bkj9a
            }
        })
    };
    b8h.YY4c = function(bo8g) {
        this.z8r("onerror", bo8g);
        this.eW0x.ca9R(bo8g.message || "验证失败");
        this.eW0x.cX9O(false)
    };
    b8h.wE5J = function(bo8g) {
        localCache.nL3x("user", bo8g);
        if (!bo8g.profile) {
            if (this.mU2x) this.mU2x.W8O();
            this.mU2x = n8f.EX8P.B8t({
                user: bo8g,
                requiremobile: false,
                onsuccess: this.wj5o.f8d(this)
            })
        } else {
            h8b.z8r(window, "login", {
                user: bo8g
            })
        }
    };
    b8h.wj5o = function(d8f) {
        h8b.z8r(window, "login", {
            user: d8f.user
        })
    };
    b8h.bkm9d = function(bo8g) {
        this.z8r("onerror", bo8g);
        n8f.bb8T.J8B({
            tip: bo8g.message || "登录失败",
            type: 2
        })
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    x8p = c8g("nm.w"),
    b8h,
    L8D;
    n8f.KL0x = NEJ.C();
    b8h = n8f.KL0x.M8E(n8f.es0x);
    L8D = n8f.KL0x.cx9o;
    b8h.ci9Z = function() {
        this.cg9X = "ntp-login-mobile"
    };
    b8h.bY9P = function() {
        this.cj9a();
        this.tc4g = a7h.F8x(this.o8g, "j-mob")[0];
        this.eU0x = a7h.F8x(this.o8g, "j-pwd")[0];
        this.ec0x = a7h.F8x(this.o8g, "j-err")[0];
        this.ZI4M = a7h.F8x(this.o8g, "j-auto")[0];
        this.cH9y = a7h.F8x(this.o8g, "j-primary")[0];
        a7h.hh1x(this.eU0x, "holder");
        h8b.s8k(this.eU0x, "focus", this.BQ7J.f8d(this));
        h8b.s8k(this.eU0x, "keypress", this.Bz7s.f8d(this));
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.oN3x = x8p.bks9j.B8t({
            parent: this.tc4g,
            onpressenter: this.ip1x.f8d(this)
        });
        this.U8M = q8i.mO2x.B8t();
        this.U8M.s8k("onmobilelogin", this.wE5J.f8d(this));
        this.U8M.s8k("onmobileloginerror", this.jD1x.f8d(this))
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.oN3x.W8O();
        this.U8M.W8O();
        if (this.dg9X) {
            this.dg9X.W8O();
            delete this.dg9X
        }
        if (this.zs6m) this.zs6m.W8O()
    };
    b8h.J8B = function() {
        L8D.J8B.apply(this, arguments);
        this.ca9R(false);
        this.cX9O(false);
        this.oN3x.Vl2x();
        this.eU0x.value = "";
        this.ZI4M.checked = true;
        l8d.kl2x()
    };
    b8h.BQ7J = function() {
        a7h.y8q(this.eU0x, "u-txt-err")
    };
    b8h.Bz7s = function(d8f) {
        if (d8f.keyCode == 13) this.ip1x()
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "login":
            this.ip1x(d8f);
            break;
        case "forget":
            h8b.bi8a(d8f);
            this.bu9l();
            n8f.bQu7n.B8t({
                countrycode:
                this.oN3x.bko9f(),
                mobile: this.oN3x.bjD9u()
            });
            break;
        case "select":
            this.bkr9i(d8f);
            break;
        case "reg":
            this.cfJ1x(d8f);
            break
        }
    };
    b8h.ip1x = function(d8f) {
        h8b.cu9l(d8f);
        if (this.cX9O()) return;
        var hj1x = this.tz4D();
        if (!hj1x) return;
        if (!this.ZD4H()) return;
        if (this.dg9X) {
            this.dg9X.W8O();
            delete this.dg9X
        }
        var i8a = {
            countrycode: hj1x.countrycode,
            phone: hj1x.mobile,
            password: k8c.lT2x(hj1x.password),
            rememberLogin: this.ZI4M.checked
        };
        this.cX9O(true);
        this.ca9R(false);
        this.ZC4G = i8a;
        l8d.Gf8X(this.lx2x.f8d(this))
    };
    b8h.lx2x = function(cs9j) {
        this.ZC4G.checkToken = cs9j || "";
        this.U8M.cyE6y({
            data: this.ZC4G
        })
    };
    b8h.wE5J = function(m8e) {
        this.cX9O(false);
        this.bu9l();
        localCache.nL3x("user", m8e);
        if (!m8e.profile) {
            if (this.mU2x) this.mU2x.W8O();
            this.mU2x = n8f.EX8P.B8t({
                user: m8e,
                requiremobile: false,
                onsuccess: this.wj5o.f8d(this)
            })
        } else {
            h8b.z8r(window, "login", {
                user: m8e
            })
        }
    };
    b8h.wj5o = function(d8f) {
        h8b.z8r(window, "login", {
            user: d8f.user
        })
    };
    b8h.jD1x = function(bo8g) {
        this.cX9O(false);
        if (bo8g.code == 415) {
            if (this.dg9X) this.dg9X.W8O();
            this.dg9X = x8p.WT3x.B8t({
                captchaId: bo8g.captchaId,
                txt: "txt-login-captcha",
                onaction: this.ip1x.f8d(this)
            });
            this.ec0x.insertAdjacentElement("beforeBegin", this.dg9X.mq2x());
            return
        }
        if (bo8g.code == 501) {
            this.ca9R("该手机号尚未注册", "mobile");
            return
        }
        if (bo8g.code == 10002 || bo8g.code == 502 || bo8g.code == 501) {
            this.ca9R("手机号或密码错误");
            return
        }
        if (bo8g.code == 250) {
            this.ca9R(bo8g.message || "登录异常");
            return
        }
        if (bo8g.code == 702) {
            this.bu9l();
            var eh0x = bo8g.ext;
            this.ccx1x = n8f.ZT4X.J8B({
                title: "网易云音乐",
                mobile: eh0x.phone,
                countrycode: eh0x.countrycode,
                loginType: eh0x.loginType
            });
            return
        }
        if (bo8g.message) {
            this.ca9R(bo8g.message)
        } else {
            n8f.bb8T.J8B({
                tip: "登录失败，请重试",
                type: 2
            })
        }
    };
    b8h.bkr9i = function(d8f) {
        h8b.bi8a(d8f);
        n8f.pT3x.J8B({
            title: "登录"
        })
    };
    b8h.cfJ1x = function(d8f) {
        h8b.bi8a(d8f);
        this.bu9l();
        if (this.zs6m) this.zs6m.W8O();
        this.zs6m = n8f.bka9R.B8t()
    };
    b8h.tz4D = function() {
        var fO0x = this.oN3x.bjD9u(),
        qE4I = this.oN3x.bko9f(),
        hK1x = this.eU0x.value;
        if (!fO0x) return this.ca9R("请输入手机号", "mobile");
        if (!hK1x) return this.ca9R("请输入登录密码", "password");
        if (!l8d.Ac6W(fO0x, qE4I)) return this.ca9R("请输入正确的手机号", "mobile");
        return {
            mobile: fO0x,
            countrycode: qE4I,
            password: hK1x
        }
    };
    b8h.ZD4H = function() {
        if (!this.dg9X) return true;
        var R8J = this.dg9X.KP0x();
        if (R8J.success) return true;
        this.ca9R(R8J.message, "captcha");
        return false
    };
    b8h.ca9R = function(bF9w, jJ1x) {
        this.ed0x(this.ec0x, bF9w);
        this.oN3x.bkl9c();
        a7h.y8q(this.eU0x, "u-txt-err");
        if (this.dg9X) this.dg9X.y8q("u-txt-err");
        if (jJ1x == "mobile") {
            this.oN3x.bIz5E()
        } else if (jJ1x == "password") {
            a7h.w8o(this.eU0x, "u-txt-err")
        } else if (jJ1x == "captcha") {
            if (this.dg9X) this.dg9X.w8o("u-txt-err")
        }
    };
    b8h.cX9O = function(dk9b) {
        return this.ee0x(this.cH9y, dk9b, "登　录", "登录中...")
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    cG9x = c8g("nej.p"),
    P8H = c8g("nej.ut"),
    rC4G,
    cfL1x;
    if ( !! P8H.Jq9h) return;
    P8H.Jq9h = NEJ.C();
    rC4G = P8H.Jq9h.M8E(P8H.cO9F);
    cfL1x = P8H.Jq9h.cx9o;
    rC4G.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.o8g = a7h.A8s(e8e.body);
        this.er0x = a7h.A8s(e8e.input);
        this.lC2x = e8e.selected || "js-selected";
        this.cw9n = 0;
        this.bZ9Q([[this.er0x, "input", this.ff0x.f8d(this)], [this.er0x, "blur", this.bku9l.f8d(this, "blur")], [this.o8g, "mouseover", this.GK8C.f8d(this)], [this.o8g, "click", this.cy9p.f8d(this)], [document, "keydown", this.cfW1x.f8d(this)], [document, "keypress", this.bkv9m.f8d(this)]]);
        if (cG9x.dC0x.release == "5.0") {
            this.bZ9Q([[this.er0x, "keydown", this.bJp5u.f8d(this)], [this.er0x, "keyup", this.bJp5u.f8d(this)]])
        }
    };
    rC4G.bC9t = function() {
        this.bH9y();
        this.bJZ5e();
        delete this.lC2x;
        delete this.er0x;
        delete this.o8g;
        delete this.bKN6H;
        delete this.bkw9n
    };
    rC4G.cgc1x = function(H8z) {
        return H8z.flag != null
    };
    rC4G.bJZ5e = function() {
        var cgg1x = function(g8c) {
            k8c.bcH5M(g8c, "flag")
        };
        return function() {
            k8c.bf8X(this.bX9O, cgg1x);
            delete this.bX9O;
            delete this.cw9n
        }
    } ();
    rC4G.bkx9o = function(r8j) {
        if (this.cw9n === r8j) return;
        this.cw9n = r8j;
        a7h.w8o(this.bX9O[this.cw9n], this.lC2x)
    };
    rC4G.bSa8S = function(r8j) {
        if (this.cw9n !== r8j) return;
        a7h.y8q(this.bX9O[this.cw9n], this.lC2x);
        delete this.cw9n
    };
    rC4G.bku9l = function(t8l) {
        this.bky9p = setTimeout(function() {
            if (!this.bX9O) return;
            var p8h = this.bX9O[this.cw9n] || this.bX9O[0],
            C8u = a7h.u8m(p8h, "value") || p8h.innerText;
            this.er0x.value = C8u;
            this.lH2x();
            this.bkw9n = !0;
            this.z8r("onselect", C8u, {
                type: t8l
            });
            this.bkw9n = !1
        }.f8d(this), t8l == "blur" ? 200 : 0)
    };
    rC4G.ff0x = function() {
        var C8u = this.er0x.value.trim();
        if (!C8u) {
            this.lH2x()
        } else {
            if (this.bkw9n) return;
            this.z8r("onchange", C8u)
        }
    };
    rC4G.GK8C = function(d8f) {
        var H8z = h8b.ba8S(d8f, this.cgc1x);
        if ( !! H8z) {
            this.bSa8S(this.cw9n);
            this.bkx9o(H8z.flag)
        }
    };
    rC4G.cy9p = function() {
        if (this.bky9p) {
            this.bky9p = clearTimeout(this.bky9p)
        }
        this.bku9l("click")
    };
    rC4G.cfW1x = function(d8f) {
        var ft0x = 0,
        cd9U = d8f.keyCode;
        if (cd9U == 38) ft0x = -1;
        if (cd9U == 40) ft0x = 1;
        if (!ft0x) return;
        h8b.bi8a(d8f);
        var r8j = Math.max(0, Math.min(this.cw9n + ft0x, this.bX9O.length - 1));
        if (r8j === this.cw9n) return;
        this.bSa8S(this.cw9n);
        this.bkx9o(r8j)
    };
    rC4G.bkv9m = function(d8f) {
        var t8l = "enter";
        if (d8f.keyCode == 13) this.bku9l(t8l)
    };
    rC4G.bJp5u = function(d8f) {
        if (d8f.type == "keydown") {
            this.bKN6H = this.er0x.value
        } else if (this.bKN6H != this.er0x.value && !!this.bX9O) {
            this.ff0x()
        }
    };
    rC4G.lH2x = function() {
        var cgp1x = function(g8c, r8j) {
            g8c.flag = r8j
        };
        return function(j8b) {
            this.bJZ5e();
            if (!j8b || !j8b.length) {
                this.o8g.style.visibility = "hidden";
                return this
            }
            this.bX9O = j8b;
            var r8j = k8c.du0x(this.bX9O,
            function(g8c) {
                return a7h.bG9x(g8c, this.lC2x)
            });
            this.bkx9o(Math.max(0, r8j));
            k8c.bf8X(this.bX9O, cgp1x);
            this.o8g.style.visibility = "visible";
            return this
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    G8y = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    x8p = c8g("nm.w"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    if (n8f.Fx8p) return;
    n8f.Fx8p = NEJ.C();
    b8h = n8f.Fx8p.M8E(n8f.es0x);
    L8D = n8f.Fx8p.cx9o;
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.U8M = q8i.mO2x.B8t();
        this.U8M.s8k("onlogin", this.wE5J.f8d(this));
        this.U8M.s8k("onloginerror", this.jD1x.f8d(this))
    };
    b8h.bC9t = function() {
        this.bH9y();
        if (this.dg9X) {
            this.dg9X.W8O();
            delete this.dg9X
        }
        this.bVU9L()
    };
    b8h.ci9Z = function() {
        this.cg9X = "ntp-login-netease"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var cY9P = a7h.F8x(this.o8g, "js-input");
        this.jb1x = cY9P[0];
        this.eU0x = cY9P[1];
        a7h.hh1x(this.jb1x, "holder");
        a7h.hh1x(this.eU0x, "holder");
        h8b.s8k(this.jb1x, "focus", this.bkB9s.f8d(this));
        h8b.s8k(this.eU0x, "focus", this.BQ7J.f8d(this));
        h8b.s8k(this.eU0x, "keypress", this.Bz7s.f8d(this));
        this.xe5j = a7h.F8x(this.o8g, "js-suggest")[0];
        this.xm5r = G8y.Jq9h.B8t({
            body: this.xe5j,
            input: this.jb1x,
            onchange: this.GW8O.f8d(this),
            onselect: this.HI9z.f8d(this)
        });
        this.ec0x = a7h.F8x(this.o8g, "u-err")[0];
        this.ZI4M = a7h.F8x(this.o8g, "u-auto")[0];
        this.cH9y = a7h.F8x(this.o8g, "js-primary")[0];
        this.cgB2x = a7h.F8x(this.o8g, "js-captcha")[0];
        this.xq6k = a7h.F8x(this.o8g, "js-scaptcha")[0];
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.J8B = function() {
        L8D.J8B.apply(this, arguments);
        this.ca9R(false);
        this.cX9O(false);
        this.jb1x.value = "";
        this.eU0x.value = "";
        this.ZI4M.checked = true;
        this.bkF9w()
    };
    b8h.bkF9w = function() {
        if (this.jT2x) {
            this.jT2x.hd1x()
        }
        l8d.kl2x()
    };
    b8h.bVU9L = function() {
        if (this.jT2x) {
            this.jT2x.W8O();
            delete this.jT2x;
            this.xq6k.style.marginTop = "0";
            this.xq6k.style.display = "none"
        }
    };
    b8h.bkB9s = function() {
        a7h.y8q(this.jb1x, "u-txt-err")
    };
    b8h.BQ7J = function() {
        a7h.y8q(this.eU0x, "u-txt-err")
    };
    b8h.Bz7s = function(d8f) {
        if (d8f.keyCode == 13) this.ip1x()
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "login":
            this.ip1x(d8f);
            break;
        case "suggest":
            this.bkG9x(d8f);
            break;
        case "select":
            this.bkr9i(d8f);
            break
        }
    };
    b8h.bkG9x = function(d8f) {
        var g8c = h8b.ba8S(d8f);
        if (g8c.href) {
            h8b.cu9l(d8f)
        }
    };
    b8h.GW8O = function(C8u) {
        if (!C8u) return this.xm5r.lH2x([]);
        var lt2x = ["163.com", "126.com", "yeah.net", "vip.163.com", "vip.126.com", "188.com"];
        var ix1x = C8u.indexOf("@"),
        i,
        jS1x;
        if (ix1x < 0) {
            for (i = 0, jS1x = []; i < lt2x.length; ++i) {
                jS1x.push(C8u + "@" + lt2x[i])
            }
        } else {
            var jW2x = C8u.substring(ix1x + 1),
            br8j = jW2x.length;
            for (i = 0, jS1x = []; i < lt2x.length; ++i) {
                if (lt2x[i].substr(0, br8j) == jW2x) {
                    jS1x.push(C8u.substring(0, ix1x) + "@" + lt2x[i])
                }
            }
        }
        this.xe5j.innerHTML = a7h.cf9W("jst-login-suggest", {
            suggests: jS1x
        },
        {
            escape: k8c.dP0x
        });
        this.xm5r.lH2x(a7h.dn9e(this.xe5j))
    };
    b8h.HI9z = function(C8u) {
        this.jb1x.value = C8u;
        this.eU0x.focus()
    };
    b8h.ip1x = function(d8f) {
        h8b.cu9l(d8f);
        if (this.cX9O()) return;
        var hj1x = this.tz4D();
        if (!hj1x) return;
        if (!this.ZD4H()) return;
        if (this.dg9X) {
            this.dg9X.W8O();
            delete this.dg9X
        }
        var i8a = {
            username: hj1x.username,
            password: k8c.lT2x(hj1x.password),
            rememberLogin: this.ZI4M.checked
        };
        var iz1x = "";
        if (this.jT2x) {
            iz1x = this.jT2x.KV0x();
            if (!iz1x.trim()) {
                this.ca9R("拖动验证码错误");
                return
            }
            i8a.dragPwd = iz1x
        }
        this.cX9O(true);
        this.ca9R(false);
        this.ZC4G = i8a;
        l8d.Gf8X(this.lx2x.f8d(this))
    };
    b8h.lx2x = function(cs9j) {
        this.ZC4G.checkToken = cs9j || "";
        this.U8M.Jj9a({
            data: this.ZC4G
        })
    };
    b8h.wE5J = function(m8e) {
        this.cX9O(false);
        this.bu9l();
        localCache.nL3x("user", m8e);
        if (!m8e.profile) {
            if (this.mU2x) this.mU2x.W8O();
            this.mU2x = n8f.EX8P.B8t({
                user: m8e,
                requiremobile: false,
                onsuccess: this.wj5o.f8d(this)
            })
        } else {
            h8b.z8r(window, "login", {
                user: m8e
            })
        }
    };
    b8h.wj5o = function(d8f) {
        h8b.z8r(window, "login", {
            user: d8f.user
        })
    };
    b8h.jD1x = function(bo8g) {
        this.cX9O(false);
        if (bo8g.code == 415) {
            if (this.dg9X) this.dg9X.W8O();
            this.dg9X = x8p.WT3x.B8t({
                captchaId: bo8g.captchaId,
                txt: "txt-login-captcha",
                onaction: this.ip1x.f8d(this)
            });
            this.cgB2x.appendChild(this.dg9X.mq2x());
            return
        }
        if (bo8g.code == 461) {
            if (this.jT2x) this.jT2x.W8O();
            this.xq6k.style.marginTop = "10px";
            this.xq6k.style.display = "";
            this.jT2x = x8p.Ya3x.B8t({
                parent: this.xq6k,
                server: ctl.env.PH1x("scaptcha_server"),
                productKey: ctl.env.PH1x("scaptcha_product_key"),
                width: 220,
                onverify: this.rN4R.f8d(this)
            });
            return
        }
        if (bo8g.code == 462) {
            if (this.jT2x) this.jT2x.hd1x();
            this.ca9R("拖动验证码错误");
            return
        }
        if (bo8g.code == 10002 || bo8g.code == 502 || bo8g.code == 501) {
            this.ca9R("帐号或密码错误");
            return
        }
        if (bo8g.code == 250) {
            this.ca9R(bo8g.message || "登录异常");
            return
        }
        if (bo8g.code == 702) {
            this.bu9l();
            var eh0x = bo8g.ext;
            this.ccx1x = n8f.ZT4X.J8B({
                title: "网易云音乐",
                mobile: eh0x.phone,
                countrycode: eh0x.countrycode,
                loginType: eh0x.loginType
            });
            return
        }
        if (bo8g.message) {
            this.ca9R(bo8g.message)
        } else {
            n8f.bb8T.J8B({
                tip: "登录失败，请重试",
                type: 2
            })
        }
    };
    b8h.rN4R = function(d8f) {
        if (d8f.success) {
            this.ca9R(false);
            var mj2x = this.jb1x.value.trim(),
            hK1x = this.eU0x.value;
            if (mj2x && hK1x) {
                this.ip1x()
            }
        } else {
            this.ca9R("拖动验证码错误")
        }
    };
    b8h.bkr9i = function(d8f) {
        h8b.bi8a(d8f);
        n8f.pT3x.J8B({
            title: "登录"
        })
    };
    b8h.tz4D = function() {
        var mj2x = this.jb1x.value.trim(),
        hK1x = this.eU0x.value;
        if (!mj2x) {
            this.ca9R("请输入邮箱帐号", "username");
            return null
        }
        if (!hK1x) {
            this.ca9R("请输入登录密码", "password");
            return null
        }
        this.ca9R(false);
        return {
            username: mj2x,
            password: hK1x
        }
    };
    b8h.ca9R = function(bF9w, jJ1x) {
        this.ed0x(this.ec0x, bF9w);
        a7h.y8q(this.jb1x, "u-txt-err");
        a7h.y8q(this.eU0x, "u-txt-err");
        if (this.dg9X) this.dg9X.y8q("u-txt-err");
        if (jJ1x == "username") {
            a7h.w8o(this.jb1x, "u-txt-err")
        } else if (jJ1x == "password") {
            a7h.w8o(this.eU0x, "u-txt-err")
        } else if (jJ1x == "captcha") {
            if (this.dg9X) this.dg9X.w8o("u-txt-err")
        }
    };
    b8h.cX9O = function(dk9b) {
        return this.ee0x(this.cH9y, dk9b, "登　录", "登录中...")
    };
    b8h.ZD4H = function() {
        if (!this.dg9X) return true;
        var R8J = this.dg9X.KP0x();
        if (R8J.success) return true;
        this.ca9R(R8J.message, "captcha");
        return false
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.pT3x = NEJ.C();
    b8h = n8f.pT3x.M8E(n8f.es0x);
    b8h.ci9Z = function() {
        this.cg9X = "ntp-login-nav"
    };
    b8h.bY9P = function() {
        this.cj9a();
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this));
        l8d.kl2x()
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action"),
        t8l = a7h.u8m(H8z, "type");
        this.bu9l();
        switch (X8P) {
        case "login":
            if (t8l == "mobile") {
                h8b.bi8a(d8f);
                n8f.KL0x.J8B({
                    title: "手机号登录"
                })
            } else if (t8l == "netease") {
                n8f.Fx8p.J8B({
                    title: "邮箱登录"
                })
            } else {
                h8b.cu9l(d8f);
                this.Fr8j = H8z.href;
                l8d.Gf8X(this.lx2x.f8d(this));
                this.YS4W = top.open()
            }
            break;
        case "reg":
            h8b.bi8a(d8f);
            if (this.zs6m) this.zs6m.W8O();
            this.zs6m = n8f.bka9R.B8t();
            break
        }
    };
    b8h.lx2x = function(cs9j) {
        this.Fr8j += "&checkToken=" + cs9j || "";
        this.YS4W.location.href = this.Fr8j
    };
    n8f.pT3x.J8B = n8f.pT3x.J8B.eT0x(function(d8f) {
        n8f.KL0x.bu9l();
        n8f.Fx8p.bu9l()
    })
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    b8h,
    L8D;
    n8f.Qj1x = NEJ.C();
    b8h = n8f.Qj1x.M8E(n8f.es0x);
    L8D = n8f.Qj1x.cx9o;
    b8h.ci9Z = function() {
        this.cg9X = "ntp-setpassword"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var bkJ9A = a7h.F8x(this.o8g, "js-tip");
        this.cS9J = bkJ9A[0];
        this.bJv5A = bkJ9A[1];
        this.bJY5d = bkJ9A[2];
        this.tc4g = a7h.F8x(this.o8g, "js-mob")[0];
        this.oB3x = a7h.F8x(this.o8g, "js-code")[0];
        this.eU0x = a7h.F8x(this.o8g, "js-input")[0];
        a7h.hh1x(this.eU0x, "holder");
        h8b.s8k(this.eU0x, "focus", this.ht1x.f8d(this));
        h8b.s8k(this.eU0x, "keypress", this.Yn3x.f8d(this));
        this.ec0x = a7h.F8x(this.o8g, "u-err")[0];
        this.cH9y = a7h.F8x(this.o8g, "js-primary")[0];
        this.PW1x = a7h.F8x(this.o8g, "js-btmbar")[0];
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.bp8h = function(e8e) {
        e8e.countrycode = e8e.countrycode || "86";
        this.bq8i(e8e);
        this.en0x = e8e;
        this.ca9R(false);
        this.cX9O(false);
        if (e8e.tip) {
            this.cS9J.innerHTML = e8e.tip;
            a7h.y8q(this.cS9J, "f-hide")
        } else {
            a7h.w8o(this.cS9J, "f-hide")
        }
        if (e8e.mobile) {
            this.tc4g.innerHTML = l8d.Sc2x(e8e.mobile) || "";
            this.oB3x.innerHTML = e8e.countrycode;
            a7h.w8o(this.bJY5d, "f-hide");
            a7h.y8q(this.bJv5A, "f-hide")
        } else {
            a7h.w8o(this.bJv5A, "f-hide");
            a7h.y8q(this.bJY5d, "f-hide")
        }
        this.eU0x.value = "";
        e8e.okbutton = e8e.okbutton || "下一步";
        this.cH9y.innerHTML = "<i>" + e8e.okbutton + "</i>";
        if (e8e.canskip) {
            a7h.y8q(this.PW1x, "f-hide")
        } else {
            a7h.w8o(this.PW1x, "f-hide")
        }
    };
    b8h.bT9K = function(d8f) {
        var H8z = h8b.ba8S(d8f, "d:action");
        if (!H8z) return;
        var X8P = a7h.u8m(H8z, "action");
        switch (X8P) {
        case "ok":
            this.yV6P(d8f);
            break;
        case "skip":
            this.bkH9y(d8f);
            break
        }
    };
    b8h.ht1x = function() {
        a7h.y8q(this.eU0x, "u-txt-err")
    };
    b8h.Yn3x = function(d8f) {
        if (d8f.keyCode == 13) this.yV6P()
    };
    b8h.bkH9y = function(d8f) {
        h8b.cu9l(d8f);
        this.bu9l();
        this.z8r("onskip")
    };
    b8h.yV6P = function(d8f) {
        h8b.cu9l(d8f);
        if (this.cX9O()) return;
        var hK1x;
        if (! (hK1x = this.bkK9B())) return;
        this.cX9O(true);
        this.z8r("onok", {
            password: hK1x,
            mobile: this.en0x.mobile,
            countrycode: this.en0x.countrycode
        })
    };
    b8h.bkK9B = function() {
        var hK1x = this.eU0x.value;
        if (!hK1x) return this.ca9R("请输入密码", "password");
        if (hK1x.length < 6 || hK1x.length > 16) return this.ca9R("请输入6-16位的密码", "password");
        if (/[^\x00-\xff]/.test(hK1x)) return this.ca9R("密码不支持中文字符", "password");
        return hK1x
    };
    b8h.ca9R = function(bF9w, jJ1x) {
        this.ed0x(this.ec0x, bF9w);
        a7h.y8q(this.eU0x, "u-txt-err");
        if (jJ1x == "password") {
            a7h.w8o(this.eU0x, "u-txt-err")
        }
    };
    b8h.cX9O = function(dk9b) {
        return this.ee0x(this.cH9y, dk9b, this.en0x.okbutton, "设置中...")
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    ch9Y = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.bKh5m = NEJ.C();
    b8h = n8f.bKh5m.M8E(ch9Y.cO9F);
    var MOB_CHECK = {
        MAIN: 1,
        SNS: 2,
        NETEASE: 3,
        NULL: -1
    };
    var ACCOUNT_TYPE = {
        MOBILE: 1,
        TWEIBO: 6
    };
    var LOGIN_ACCOUNT = [{
        type: 1,
        title: "手机",
        key: "cellphone"
    },
    {
        type: 0,
        title: "网易邮箱帐号",
        key: "email"
    },
    {
        type: 2,
        title: "新浪微博",
        key: "name"
    },
    {
        type: 10,
        title: "微信",
        key: "nickname"
    },
    {
        type: 5,
        title: "QQ",
        key: "nickname"
    }];
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.en0x = e8e;
        this.tC4G = e8e.user;
        this.U8M = q8i.mO2x.B8t();
        this.U8M.s8k("onmobilecheck", this.bae4i.f8d(this));
        this.U8M.s8k("onmobilecheckerror", this.baf4j.f8d(this));
        this.U8M.s8k("onmobilebind", this.Qi1x.f8d(this));
        this.U8M.s8k("onmobilebinderror", this.Qh1x.f8d(this));
        this.U8M.s8k("onmobileupdatepwd", this.Qi1x.f8d(this));
        this.U8M.s8k("onmobileupdatepwderror", this.Qh1x.f8d(this));
        this.U8M.s8k("onactive", this.Zo4s.f8d(this));
        this.U8M.s8k("onactiveerror", this.bkC9t.f8d(this));
        var biP9G = this.cgL2x(this.tC4G);
        this.bMA6u = biP9G;
        this.bMO6I = this.cgM2x(this.tC4G);
        if (e8e.user.account.type == ACCOUNT_TYPE.MOBILE || e8e.user.account.type == ACCOUNT_TYPE.TWEIBO) {
            if (!biP9G) {
                this.cgN2x()
            } else {
                if (biP9G.hasPassword) {
                    this.bNf6Z()
                } else {
                    this.bOs6m({
                        tip: '云音乐将不再支持 <strong class="s-fc1">腾讯微博</strong> 登录方式，<br/>设置登录密码，以后可以使用手机号登录',
                        mobile: biP9G.uid
                    })
                }
            }
        } else {
            this.bNf6Z()
        }
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.U8M.W8O();
        if (this.eW0x) this.eW0x.W8O();
        if (this.oD3x) this.oD3x.W8O();
        if (this.nK3x) this.nK3x.W8O()
    };
    b8h.bNf6Z = function() {
        var bB9s = {
            0 : "邮箱帐号",
            1 : "手机号",
            2 : "新浪微博",
            5 : "QQ",
            10 : "微信"
        },
        dz0x = this.tC4G,
        biM9D = this.bMO6I.type == ACCOUNT_TYPE.TWEIBO ? this.bMA6u: this.bMO6I;
        if (!dz0x.profile) {
            if (this.mU2x) this.mU2x.W8O();
            this.mU2x = n8f.EX8P.B8t({
                user: dz0x,
                requiremobile: false,
                onsuccess: this.wj5o.f8d(this)
            })
        } else {
            l8d.hT1x({
                title: "提示",
                message: "云音乐即将不支持腾讯微博登录<br/>建议你后续使用以下绑定的" + (bB9s[biM9D.type] || "帐号") + "登录<br/><strong>" + (biM9D.type == ACCOUNT_TYPE.MOBILE ? l8d.Sc2x(biM9D.uid) : k8c.dP0x(biM9D.uid)) + "</strong>",
                btnok: "查看详情",
                btncc: "知道了",
                okstyle: "u-btn2-w1",
                ccstyle: "u-btn2-w1",
                action: function(t8l) {
                    if (t8l == "ok") {
                        location.hash = "/user/binding/#/list"
                    } else {
                        h8b.z8r(window, "login", {
                            user: dz0x
                        })
                    }
                },
                onclose: h8b.z8r.f8d(h8b, window, "login", {
                    user: dz0x
                })
            })
        }
    };
    b8h.wj5o = function(d8f) {
        h8b.z8r(window, "login", {
            user: d8f.user
        })
    };
    b8h.cgN2x = function() {
        this.eW0x = n8f.sc4g.J8B({
            title: "绑定手机号",
            tip: '云音乐将不再支持 <strong class="s-fc1">腾讯微博</strong> 登录方式，<br/>请绑定手机号，以免后续无法使用该帐号',
            onok: this.cgU2x.f8d(this)
        })
    };
    b8h.cgU2x = function(bo8g) {
        this.gt1x = bo8g.mobile;
        this.go1x = bo8g.countrycode;
        this.bjm9d = bo8g.captcha;
        this.U8M.bmO0x({
            data: {
                cellphone: bo8g.mobile,
                captcha: bo8g.captcha,
                countrycode: bo8g.countrycode
            }
        })
    };
    b8h.bae4i = function(bo8g) {
        if (bo8g.nickname) {
            this.eW0x.cX9O(false);
            this.eW0x.ca9R("绑定失败，该手机号已与云音乐帐号 " + k8c.dP0x(bo8g.nickname) + " 绑定", "mobile")
        } else {
            this.bOs6m()
        }
    };
    b8h.baf4j = function() {
        this.eW0x.bu9l();
        n8f.bb8T.J8B({
            tip: "登录失败，请重试",
            type: 2
        })
    };
    b8h.bOs6m = function(bU9L) {
        if (this.eW0x) this.eW0x.bu9l();
        bU9L = bU9L || {};
        this.nK3x = n8f.Qj1x.J8B({
            title: "设置密码",
            tip: bU9L.tip,
            mobile: bU9L.mobile,
            onok: this.chp2x.f8d(this)
        })
    };
    b8h.chp2x = function(bo8g) {
        if (this.bMA6u) {
            this.U8M.bgb6V({
                data: {
                    phone: this.gt1x,
                    password: k8c.lT2x(bo8g.password),
                    captcha: this.bjm9d
                }
            })
        } else {
            this.U8M.bmG0x({
                data: {
                    phone: this.gt1x,
                    captcha: this.bjm9d,
                    password: k8c.lT2x(bo8g.password)
                }
            })
        }
    };
    b8h.Qi1x = function(bo8g) {
        this.nK3x.bu9l();
        if (this.tC4G.profile || this.tC4G.account.type == ACCOUNT_TYPE.MOBILE) {
            h8b.z8r(window, "login", {
                user: this.tC4G
            })
        } else if (this.tC4G.account.type == ACCOUNT_TYPE.TWEIBO) {
            this.oD3x = n8f.JI9z.J8B({
                title: "设置昵称",
                onok: this.chx2x.f8d(this)
            })
        }
    };
    b8h.Qh1x = function(bo8g) {
        this.nK3x.bu9l();
        n8f.bb8T.J8B({
            tip: bo8g.message || "登录失败，请重试",
            type: 2
        })
    };
    b8h.chx2x = function(bo8g) {
        this.U8M.bmK0x({
            data: {
                dragPwd: bo8g.dragPwd,
                nickname: bo8g.nickname
            }
        })
    };
    b8h.Zo4s = function(bo8g) {
        this.oD3x.bu9l();
        this.tC4G.profile = bo8g.profile;
        h8b.z8r(window, "login", {
            user: this.tC4G
        })
    };
    b8h.bkC9t = function(bo8g) {
        this.oD3x.cX9O(false);
        if (bo8g.code == 505) return this.oD3x.ca9R("该昵称已被占用", "nickname");
        if (bo8g.code == 407) return this.oD3x.ca9R("该昵称包含关键词", "nickname");
        this.oD3x.bu9l();
        n8f.bb8T.J8B({
            tip: bo8g.message || "登录失败，请重试",
            type: 2
        })
    };
    b8h.cgL2x = function(dz0x) {
        var us5x = dz0x.bindings || [];
        var r8j = k8c.du0x(us5x,
        function(p8h) {
            return p8h.type == ACCOUNT_TYPE.MOBILE
        });
        var qq3x = r8j >= 0 ? us5x[r8j] : null;
        if (!qq3x) return null;
        var cs9j = JSON.parse(qq3x.tokenJsonStr);
        qq3x.uid = cs9j.cellphone;
        qq3x.hasPassword = cs9j.hasPassword;
        return qq3x
    };
    b8h.cgM2x = function(dz0x) {
        var us5x = dz0x.bindings || [];
        var r8j = k8c.du0x(us5x,
        function(p8h) {
            return p8h.type == dz0x.account.type
        });
        var qq3x = r8j >= 0 ? us5x[r8j] : null;
        if (!qq3x) return null;
        var cs9j = JSON.parse(qq3x.tokenJsonStr);
        qq3x.uid = cs9j.cellphone || cs9j.email || cs9j.name || cs9j.nickname || "";
        return qq3x
    }
})(); (function() {
    var c8g = NEJ.P,
    G8y = c8g("nej.ut"),
    h8b = c8g("nej.v"),
    v8n = c8g("nej.j"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    E8w = c8g("nm.m"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    E8w.PZ1x = NEJ.C();
    b8h = E8w.PZ1x.M8E(G8y.cO9F);
    var LOGIN_ACCOUNT = [{
        type: 1,
        title: "手机",
        icon: "mb",
        key: "cellphone",
        uidkey: "cellphone"
    },
    {
        type: 10,
        title: "微信",
        icon: "wx",
        key: "nickname",
        uidkey: "unionid"
    },
    {
        type: 5,
        title: "QQ",
        icon: "qq",
        key: "nickname",
        uidkey: "openid"
    },
    {
        type: 2,
        title: "新浪微博",
        icon: "sn",
        key: "name",
        uidkey: "uid"
    },
    {
        type: 0,
        title: "网易邮箱帐号",
        icon: "urs",
        key: "email",
        uidkey: "email"
    },
    {
        type: 13,
        title: "Facebook",
        icon: "urs",
        key: "nickname",
        uidkey: "uid"
    }];
    var SHARE_ACCOUNT = [{
        type: 4,
        title: "人人",
        icon: "rr",
        key: "user.name",
        uidkey: "user.id"
    },
    {
        type: 3,
        title: "豆瓣",
        icon: "db",
        key: "douban_user_name",
        uidkey: "douban_user_id"
    }];
    var TWEIBO = {
        type: 6,
        title: "腾讯微博",
        icon: "tc",
        key: "nick",
        uidkey: "openId"
    };
    var ALL_ACCOUNT = LOGIN_ACCOUNT.concat(SHARE_ACCOUNT, TWEIBO);
    b8h.cC9t = function(e8e) {
        this.cK9B(e8e);
        window.login = this.chB2x.f8d(this);
        window.logout = this.bRE8w.f8d(this);
        window.reg = this.chR2x.f8d(this);
        h8b.s8k(window, "login", this.biE9v.f8d(this));
        window.g_cbLogin = this.wE5J.f8d(this);
        window.g_cbBind = this.cij2x.f8d(this);
        window.g_cbDeleteBind = this.cil2x.f8d(this);
        this.bkS9J()
    };
    b8h.bkS9J = function() {
        var dz0x = {
            account: {},
            profile: {},
            bindings: []
        };
        if (typeof GUser !== "undefined") {
            dz0x.profile.userId = GUser.userId;
            dz0x.profile.nickname = GUser.nickname;
            dz0x.profile.avatarUrl = GUser.avatarUrl
        }
        if (typeof GBinds !== "undefined") {
            dz0x.bindings = GBinds
        }
        localCache.nL3x("user", dz0x);
        this.bkT9K = q8i.mO2x.B8t();
        this.bkT9K.s8k("onlogout", this.cit2x.f8d(this));
        this.bkT9K.s8k("onmainaccountreplace", this.wE5J.f8d(this));
        if (!this.ciB2x(dz0x)) this.bRE8w()
    };
    b8h.chB2x = function(t8l) {
        n8f.pT3x.bu9l();
        n8f.KL0x.bu9l();
        n8f.Fx8p.bu9l();
        if (typeof t8l === "undefined") return n8f.pT3x.J8B({
            title: "登录"
        });
        if (t8l === 0) return n8f.KL0x.J8B({
            title: "手机号登录"
        });
        return n8f.Fx8p.J8B({
            title: "网易邮箱帐号登录"
        })
    };
    b8h.chR2x = function() {
        if (this.zs6m) this.zs6m.W8O();
        this.zs6m = n8f.bka9R.B8t()
    };
    b8h.biE9v = function(d8f) {
        if (typeof GUser === "object" && d8f.user && d8f.user.profile) {
            var IZ9Q = d8f.user.profile;
            GUser.userId = IZ9Q.userId;
            GUser.nickname = IZ9Q.nickname;
            GUser.avatarUrl = IZ9Q.avatarUrl;
            GUser.djStatus = IZ9Q.djStatus
        }
        if (this.boP0x("loginsuccess")) {
            this.z8r("loginsuccess")
        } else {
            location.reload()
        }
    };
    b8h.wE5J = function(m8e) {
        if (m8e && m8e.code == 250) {
            n8f.bb8T.J8B({
                tip: m8e.message || "登录异常",
                type: 2
            });
            return
        }
        if (m8e.code == 702) {
            this.ccx1x = n8f.ZT4X.J8B({
                title: "网易云音乐",
                mobile: m8e.phone,
                countrycode: m8e.countrycode,
                loginType: m8e.loginType
            });
            return
        }
        if (!m8e || m8e.code != 200) return;
        var kM2x = JSON.stringify(m8e);
        localCache.nL3x("user", JSON.parse(kM2x));
        if (m8e.loginType == 6) {
            if (this.bVz9q) this.bVz9q.W8O();
            this.bVz9q = n8f.bKh5m.B8t({
                user: m8e,
                onsuccess: this.biE9v.f8d(this)
            })
        } else {
            if (m8e.profile) {
                this.biE9v({
                    user: m8e
                })
            } else {
                if (this.mU2x) this.mU2x.W8O();
                this.mU2x = n8f.EX8P.B8t({
                    user: m8e,
                    requiremobile: this.ciG2x(m8e),
                    onsuccess: this.biE9v.f8d(this)
                })
            }
        }
    };
    b8h.cij2x = function(bo8g) {
        var d8f = bo8g.code == 200 ? "snsbind": "snsbinderror",
        fb0x = a7h.A8s("g_iframe");
        if (bo8g.code == 200) {
            var dz0x = localCache.A8s("user") || {},
            qq3x = NEJ.X(bo8g, {
                refreshTime: +(new Date) / 1e3 | 0,
                tokenJsonStr: JSON.stringify({
                    expires_in: bo8g.expires_in
                })
            }),
            r8j = -1;
            dz0x.bindings = dz0x.bindings || [];
            k8c.bf8X(dz0x.bindings,
            function(ciK2x, zg6a) {
                if (ciK2x.type == bo8g.type) r8j = zg6a
            });
            if (r8j >= 0) {
                dz0x.bindings[r8j] = qq3x
            } else {
                dz0x.bindings.push(qq3x)
            }
            v8n.bm8e("/api/point/sns", {
                type: "json",
                method: "get",
                query: {
                    snsType: bo8g.type
                },
                onload: function(i8a) {
                    var bN9E = bo8g.point || i8a.point;
                    if (bN9E > 0) {
                        n8f.eX0x({
                            title: "绑定成功",
                            type: "success",
                            mesg: '绑定成功 获得<em class="s-fc6">' + bN9E + "积分</em>"
                        })
                    } else {
                        n8f.bb8T.J8B({
                            tip: "绑定成功"
                        })
                    }
                }.f8d(this)
            })
        } else {
            var r8j = k8c.du0x(ALL_ACCOUNT,
            function(p8h) {
                return p8h.type == bo8g.type
            });
            var ez0x = r8j >= 0 ? ALL_ACCOUNT[r8j].title: "";
            if (bo8g.message) {
                n8f.eX0x({
                    title: "绑定" + ez0x,
                    type: "fail",
                    mesg: "绑定失败",
                    mesg2: bo8g.message
                })
            } else {
                n8f.bb8T.J8B({
                    tip: "绑定失败，请重试",
                    type: 2
                })
            }
        }
        try {
            var bM9D = fb0x.contentWindow;
            bM9D.nej.v.z8r(bM9D, d8f, {
                result: bo8g
            })
        } catch(e) {}
        h8b.z8r(window, d8f, {
            result: bo8g
        })
    };
    b8h.cil2x = function(bo8g) {
        var d8f = bo8g.code == 200 ? "snsunbind": "snsunbinderror",
        fb0x = a7h.A8s("g_iframe");
        if (bo8g.code == 200) {
            n8f.bb8T.J8B({
                tip: "已解除绑定"
            })
        } else if (bo8g.message) {
            n8f.eX0x({
                title: "解除绑定",
                type: "fail",
                mesg: "解绑失败",
                mesg2: bo8g.message
            })
        } else {
            n8f.bb8T.J8B({
                tip: "解绑失败，请重试",
                type: 2
            })
        }
        try {
            var bM9D = fb0x.contentWindow;
            bM9D.nej.v.z8r(bM9D, d8f, {
                result: bo8g
            })
        } catch(e) {}
        h8b.z8r(window, d8f, {
            result: bo8g
        })
    };
    b8h.bRE8w = function() {
        var d8f = {};
        this.z8r("beforedologout", d8f);
        if (d8f.stopped) {
            return
        }
        v8n.gW1x("MUSIC_U", {
            expires: -1
        });
        this.bkT9K.cyJ6D();
        window.GUser = {};
        this.z8r("logoutbefore")
    };
    b8h.cit2x = function(m8e) {
        localCache.cV9M("user");
        localCache.cV9M("host-plist");
        if (typeof GUser === "object") {
            GUser.userId = 0;
            GUser.nickname = "";
            GUser.avatarUrl = ""
        }
        if (this.boP0x("logoutsuccess")) {
            this.z8r("logoutsuccess")
        } else {
            location.reload()
        }
    };
    b8h.ciB2x = function(dz0x) {
        var bkW9N = false;
        if (!dz0x.bindings || dz0x.bindings.length == 0) return true;
        k8c.bf8X(dz0x.bindings,
        function(p8h) {
            if (p8h.type == 0 || p8h.type == 2 || p8h.type == 5 || p8h.type == 10 || p8h.type == 13) {
                bkW9N = true
            } else if (p8h.type == 1) {
                var cs9j = JSON.parse(p8h.tokenJsonStr || "{}");
                if (cs9j.hasPassword) {
                    bkW9N = true
                }
            }
        });
        return bkW9N
    };
    b8h.ciG2x = function(i8a) {
        return i8a && i8a.loginType != 13
    };
    G8y.fV0x.B8t({
        element: window,
        event: ["login", "snsbind", "snsbinderror", "snsunbind", "snsunbinderror"]
    });
    E8w.PZ1x.fW0x()
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    bc8U = c8g("nej.ui"),
    G8y = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    x8p = c8g("nm.w"),
    b8h;
    x8p.Vd2x = NEJ.C();
    b8h = x8p.Vd2x.M8E(bc8U.eu0x);
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.dn9e(this.o8g);
        this.Io9f = j8b[0];
        this.cH9y = j8b[1];
        this.bL9C = j8b[2]
    };
    b8h.ci9Z = function() {
        this.cg9X = "g-select"
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.bZ9Q([[this.cH9y, "click", this.rF4J.f8d(this)], [this.bL9C, "click", this.lK2x.f8d(this)], [document, "click", this.qa3x.f8d(this)]]);
        this.bwJ2x = e8e.filter || this.ctz4D;
        this.lH2x(e8e.list)
    };
    b8h.bC9t = function() {
        this.bH9y();
        delete this.bX9O;
        delete this.wr5w;
        delete this.bwJ2x
    };
    b8h.lH2x = function(j8b, kW2x) {
        if (!j8b) {
            this.Io9f.innerText = "－请选择－";
            return
        }
        this.bX9O = j8b;
        a7h.dI0x(this.bL9C, "g-select-item", {
            options: j8b
        },
        {
            filter: this.bwJ2x
        });
        this.jy1x(kW2x || j8b[0])
    };
    b8h.mp2x = function() {
        return this.bX9O
    };
    b8h.gl0x = function() {
        return this.wr5w
    };
    b8h.jy1x = function(C8u) {
        if (this.wr5w != C8u) {
            this.wr5w = C8u;
            this.Io9f.innerText = this.bwJ2x(C8u);
            this.z8r("onchange", C8u)
        }
    };
    b8h.rF4J = function(d8f) {
        h8b.bi8a(d8f);
        if (a7h.bG9x(this.bL9C, "f-hide")) {
            if (!this.bX9O || !this.bX9O.length) return;
            a7h.y8q(this.bL9C, "f-hide")
        } else {
            a7h.w8o(this.bL9C, "f-hide")
        }
    };
    b8h.qa3x = function() {
        a7h.w8o(this.bL9C, "f-hide")
    };
    b8h.lK2x = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:index"),
        r8j = a7h.u8m(g8c, "index");
        if (g8c) {
            this.jy1x(this.bX9O[r8j])
        }
    };
    b8h.ctz4D = function(dU0x) {
        return dU0x.name
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    cG9x = c8g("nej.p"),
    bc8U = c8g("nej.ui"),
    v8n = c8g("nej.j"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    x8p = c8g("nm.w"),
    gL1x = c8g("nm.ut"),
    b8h,
    L8D;
    x8p.Di7b = NEJ.C();
    b8h = x8p.Di7b.M8E(bc8U.eu0x);
    L8D = x8p.Di7b.cx9o;
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.eL0x = e8e.type || 1;
        if (a7h.iN1x("program-data")) {
            this.gC1x = JSON.parse(a7h.iN1x("program-data"))
        }
        this.ep0x = e8e.resource || {};
        this.sX4b = a7h.pa3x(a7h.cf9W("m-wgt-input-" + this.eL0x, {
            placeholder: e8e.placeholder || ""
        }));
        this.bMV6P = e8e.type == 2 ? true: false;
        var j8b = a7h.F8x(this.sX4b, "j-flag");
        this.gG1x = j8b[0];
        this.bmE0x = a7h.F8x(this.sX4b, "btns")[0];
        this.mn2x = j8b[3];
        this.czO6I = j8b[4];
        a7h.hh1x(this.gG1x, "holder");
        if (a7h.bG9x(this.gG1x.parentNode, "holder-parent")) {
            a7h.bd8V(this.gG1x.parentNode, "display", "block")
        }
        this.gG1x.value = e8e.input || "";
        this.o8g.appendChild(this.sX4b);
        this.pA3x = {
            start: 0,
            end: 0
        };
        if (!e8e.nomention) {
            this.hX1x = x8p.Ul2x.B8t({
                parent: document.body,
                target: this.gG1x
            })
        } else {
            a7h.bd8V(j8b[2], "display", "none")
        }
        this.bmY0x = e8e.numLimit || 140;
        this.gE1x();
        this.czZ6T();
        this.bZ9Q([[this.mn2x, "click", this.vR5W.f8d(this)], [j8b[2], "click", this.bmH0x.f8d(this)], [j8b[1], "click", this.bmI0x.f8d(this)], [this.gG1x, "focus", this.kQ2x.f8d(this)], [this.gG1x, "blur", this.oU3x.f8d(this)], [this.gG1x, "input", this.ff0x.f8d(this)], [this.gG1x, "keyup", this.xu6o.f8d(this)], [this.gG1x, "click", this.mQ2x.f8d(this)]]);
        if (!k8c.hf1x(e8e.onbeforesubmit)) this.s8k("onbeforesubmit", this.cAj6d.f8d(this));
        if (!k8c.hf1x(e8e.onloading)) this.s8k("onloading", this.cAr6l.f8d(this))
    };
    b8h.bC9t = function() {
        this.gG1x.value = "";
        if (this.hS1x) {
            this.hS1x.W8O();
            delete this.hS1x
        }
        if (this.hX1x) {
            this.hX1x.W8O();
            delete this.hX1x
        }
        this.bH9y();
        a7h.cV9M(this.sX4b)
    };
    b8h.cAj6d = function() {
        var C8u = this.gG1x.value;
        if (this.mn2x.className.indexOf("dis") >= 0) return;
        if (!this.Hx9o() || !this.Dk7d()) return;
        if (l8d.lh2x(C8u)) {
            n8f.bb8T.J8B({
                type: 2,
                tip: "输入点内容再提交吧"
            });
            return
        }
        if (k8c.fS0x(C8u) > 2 * this.bmY0x) {
            n8f.bb8T.J8B({
                type: 2,
                tip: "输入不能超过" + this.bmY0x + "个字符"
            });
            return
        }
        return ! 0
    };
    b8h.cAr6l = function() {
        a7h.w8o(this.mn2x, "u-btn-1-dis");
        if (this.mn2x.innerText.indexOf("...") < 0) {
            this.mn2x.innerText = this.mn2x.innerText + "..."
        }
        this.ux5C = !0
    };
    b8h.BF7y = function() {
        if (!this.ux5C) return;
        this.ux5C = !1;
        a7h.y8q(this.mn2x, "u-btn-1-dis");
        var cM9D = this.mn2x.innerText;
        this.mn2x.innerText = cM9D.substring(0, cM9D.length - 3)
    };
    b8h.mQ2x = function() {
        this.pA3x = gL1x.xc5h(this.gG1x)
    };
    b8h.vR5W = function(ik1x) {
        h8b.bi8a(ik1x);
        var C8u = this.gG1x.value;
        if (!this.z8r("onbeforesubmit", {
            value: C8u
        })) return;
        if (this.eL0x != 4) this.z8r("onloading");
        gL1x.bGd4h(C8u);
        if (this.hX1x) {
            this.hX1x.KX0x()
        }
        if (this.hS1x) {
            this.hS1x.bu9l()
        }
        this.z8r("onsubmit", C8u);
        this.gE1x();
        return false
    };
    b8h.rm4q = function() {
        this.gG1x.value = "";
        this.gE1x()
    };
    b8h.gl0x = function() {
        return this.gG1x.value || ""
    };
    b8h.nn3x = function() {
        var jA1x = this.gG1x;
        var t8l = a7h.u8m(jA1x, "type");
        this.nC3x = t8l;
        if (!this.Dk7d()) return;
        var br8j = this.gl0x().length;
        this.gG1x.focus();
        gL1x.bbT5Y(this.gG1x, {
            start: br8j,
            end: br8j
        });
        this.mQ2x()
    };
    b8h.bmH0x = function(d8f) {
        h8b.bi8a(d8f);
        if (!this.Dk7d()) return; !! this.hS1x && this.hS1x.bu9l();
        this.hX1x.Ui2x();
        this.gE1x()
    };
    b8h.bmI0x = function(d8f) {
        h8b.bi8a(d8f);
        if (!this.Dk7d()) return;
        if (!this.hS1x) {
            this.hS1x = n8f.NN0x.B8t({
                parent: this.bmE0x,
                rightwards: this.eL0x == 6
            });
            this.hS1x.s8k("onselect", this.BK7D.f8d(this));
            a7h.bd8V(this.hS1x.mq2x().parentNode, "position", "relative")
        }
        this.hS1x.J8B();
        this.z8r("onemotlayershow");
        if (this.hX1x) {
            this.hX1x.KX0x()
        }
    };
    b8h.BK7D = function(d8f) {
        var bt9k = "[" + d8f.text + "]";
        h8b.z8r(this.gG1x, "focus");
        this.gG1x.focus();
        gL1x.NS0x(this.gG1x, this.pA3x, bt9k);
        this.gE1x();
        h8b.z8r(this.gG1x, "keyup")
    };
    b8h.ff0x = function(d8f) {
        cG9x.dC0x.browser == "ie" && cG9x.dC0x.version < "7.0" ? setTimeout(this.gE1x.f8d(this), 0) : this.gE1x()
    };
    b8h.xu6o = function(d8f) {
        this.mQ2x();
        if (this.bMV6P) this.cAF6z();
        this.ff0x()
    };
    b8h.Hx9o = function() {
        if (!GUser || !GUser.userId || GUser.userId < 0) {
            top.login();
            return
        }
        return true
    };
    b8h.kQ2x = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:type");
        var t8l = a7h.u8m(g8c, "type");
        this.nC3x = t8l;
        if (!this.Hx9o()) {
            this.gG1x.blur();
            return
        }
        if (!this.Dk7d()) {
            this.gG1x.blur();
            return
        }
        this.z8r("onfocus")
    };
    b8h.oU3x = function() {
        this.z8r("onblur")
    };
    b8h.gE1x = function() {
        var br8j = this.bmY0x - Math.ceil(k8c.fS0x(this.gG1x.value) / 2);
        this.czO6I.innerHTML = br8j >= 0 ? br8j: '<em class="s-fc6">' + br8j + "</em>"
    };
    b8h.cAF6z = function() {
        var Li0x = 76;
        var cAU6O = function() {
            if (parseInt(cb9S) > Li0x) {
                a7h.bd8V(this.gG1x, "height", "auto");
                a7h.bd8V(this.gG1x, "height", Li0x + "px");
                a7h.bd8V(this.gG1x, "overflowY", "scroll")
            } else {
                a7h.bd8V(this.gG1x, "height", "auto");
                a7h.bd8V(this.gG1x, "height", cb9S);
                a7h.bd8V(this.gG1x, "overflowY", "hidden")
            }
        }.f8d(this);
        var kn2x = function(string, number) {
            for (var i = 0,
            r = ""; i < number; i++) r += string;
            return r
        };
        this.OR1x.innerHTML = this.gG1x.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g,
        function(space) {
            return kn2x("&nbsp;", space.length - 1) + " "
        }) + "&nbsp";
        var cb9S = this.OR1x.offsetHeight > this.OQ1x ? this.OR1x.offsetHeight: this.OQ1x;
        cb9S += "px";
        var cRm0x = a7h.dp9g(this.gG1x, "height");
        setTimeout(cAU6O, 10)
    };
    b8h.Sd2x = function() {
        var rj4n = ["overflowX", "overflowY", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < rj4n.length; i++) {
            a7h.bd8V(this.OR1x, rj4n[i], a7h.dp9g(this.gG1x, rj4n[i]))
        }
        var cB9s = this.gG1x.offsetWidth - parseInt(a7h.dp9g(this.gG1x, "paddingLeft")) - parseInt(a7h.dp9g(this.gG1x, "paddingRight")) + "px";
        a7h.bd8V(this.OR1x, "width", cB9s)
    };
    b8h.czZ6T = function() {
        if (this.bMV6P) {
            if (!a7h.F8x(document.body, "shadow-textarea")[0]) {
                var eg0x = '<div style="position:absolute;border: none;left:-10000px;word-wrap: break-word;overflow: hidden;resize:none" class="shadow-textarea"></div>';
                var g8c = a7h.pa3x(eg0x);
                document.body.appendChild(g8c);
                this.OR1x = a7h.F8x(document.body, "shadow-textarea")[0]
            } else {
                this.OR1x = a7h.F8x(document.body, "shadow-textarea")[0]
            }
            this.OQ1x = parseInt(a7h.dp9g(this.gG1x, "height"));
            a7h.bd8V(this.gG1x, "overflow", "hidden");
            this.Sd2x()
        }
    };
    b8h.Dk7d = function() {
        var d8f = {};
        if (this.gC1x && this.gC1x.buyed != true && this.gC1x.programFeeType >= 10 || this.gC1x && this.gC1x.buyed != true && this.gC1x.programFeeType == 5 && this.gC1x.radio.radioFeeType == 2 || this.gC1x && this.gC1x.buyed != true && this.gC1x.radio.feeScope == 1 && !(this.gC1x.radio.radioFeeType == 0 && this.nC3x == 11)) {
            var bne0x = this.gC1x.radio.id,
            bnf0x = "djradio";
            l8d.VH3x({
                id: bne0x,
                radiotype: bnf0x
            })
        } else {
            this.z8r("oncheckvalid", d8f);
            return ! d8f.stopped
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    G8y = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    q8i.fD0x({
        "message_chat-add": {
            url: "/api/msg/private/send",
            filter: function(e8e) {
                this.Mb0x(e8e, 0)
            },
            format: function(m8e, e8e) {
                this.bsh1x(m8e.newMsgs);
                if (e8e.justSend) {
                    return m8e
                } else {
                    return m8e.newMsgs.reverse()
                }
            },
            finaly: function(d8f, e8e) {
                if (!d8f) return;
                if (!e8e.justSend) {
                    h8b.z8r(q8i.nz3x, "listchange", {
                        key: e8e.key,
                        action: "unshift",
                        limit: d8f.limit,
                        offset: 0
                    })
                }
                this.z8r("onafteritemaddd")
            },
            onmessage: function(cd9U) {
                var cU9L = "";
                if (cd9U == 407) {
                    cU9L = "发送内容中不得包含非法字符"
                } else if (cd9U == 406 || cd9U == 405) {
                    cU9L = "输入过于频繁，请稍后再试"
                } else if (cd9U == 408) {
                    cU9L = "请不要重复发送"
                } else if (cd9U == 315) {
                    cU9L = "根据对方设置，你没有该操作权限"
                }
                if ( !! cU9L) n8f.bb8T.J8B({
                    tip: cU9L,
                    type: 2
                })
            }
        },
        "message_chat-del": {
            url: "/api/msg/private/delete/single",
            format: function(T8L, e8e) {
                return T8L.code == 200
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.nz3x, "listchange", {
                    key: e8e.key,
                    action: "delete",
                    data: e8e.data
                });
                this.z8r("onafteritemdelete")
            },
            onmessage: function(cd9U) {}
        },
        "message_chat-list": {
            url: "/api/msg/private/history",
            filter: function(e8e) {
                this.Mb0x(e8e);
                delete e8e.data.offset
            },
            format: function(m8e, e8e) {
                var Sg2x = m8e.msgs;
                this.bsh1x(Sg2x);
                if (m8e.more) {
                    for (var i = Sg2x.length; i < e8e.limit; i++) {
                        Sg2x.push(null)
                    }
                } else {
                    return {
                        total: e8e.offset + e8e.limit,
                        list: Sg2x
                    }
                }
                return Sg2x
            }
        },
        "message_chat-pull": {
            url: "/api/msg/private/new",
            filter: function(e8e) {
                this.Mb0x(e8e, 0)
            },
            format: function(m8e) {
                return m8e.msgs
            }
        },
        "message_private-list": {
            url: "/api/msg/private/users",
            filter: function(e8e) {},
            format: function(m8e, e8e) {
                var cI9z = m8e.size || 0,
                j8b = m8e.msgs;
                this.bsj1x(j8b);
                if (e8e.offset + e8e.limit < cI9z) {
                    j8b.length = e8e.limit
                }
                return {
                    total: cI9z,
                    list: j8b
                }
            }
        },
        "message_private-pull": {
            url: "/api/msg/private/users",
            filter: function(e8e) {
                e8e.data.time = -1
            },
            format: function(m8e, e8e) {
                this.ya6U(e8e.key);
                this.bsj1x(m8e.msgs);
                return m8e.msgs
            }
        },
        "message_private-del": {
            type: "GET",
            url: "/api/msg/private/delete",
            filter: function(e8e) {
                var D8v = e8e.id;
                if (D8v) e8e.data = {
                    userId: D8v.split("-")[1]
                }
            },
            format: function(T8L, e8e) {
                return T8L
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.nz3x, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                })
            },
            onmessage: function(cd9U) {}
        },
        "message_comment-list": {
            url: "/api/v1/user/comments/{uid}",
            filter: function(e8e) {
                this.Mb0x(e8e);
                e8e.data.beforeTime = e8e.data.time;
                delete e8e.data.time;
                delete e8e.data.offset
            },
            format: function(m8e, e8e) {
                if (e8e.data.offset == 0) this.z8r("onnewcount", m8e.newCount);
                this.cDm7f(m8e);
                return {
                    list: m8e.comments
                }
            }
        },
        "message_comment-del": {
            url: "/api/user/comments/delete",
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.nz3x, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                })
            }
        },
        "message_user_comment-reply": {
            url: "/api/user/comments/reply",
            format: function(T8L) {
                this.z8r("onreply");
                n8f.bb8T.J8B({
                    tip: "回复成功"
                });
                return T8L
            },
            onmessage: function(cd9U, m8e) {
                if (cd9U == 250) {
                    n8f.bb8T.J8B({
                        tip: m8e.message || m8e.msg || "评论异常",
                        type: 2
                    });
                    return
                }
                n8f.bb8T.J8B({
                    tip: "回复失败，请稍后再试",
                    type: 2
                })
            }
        },
        "message_resource_comment-reply": {
            url: "/api/resource/comments/reply",
            onmessage: function(cd9U, m8e) {
                if (cd9U == 250) {
                    n8f.bb8T.J8B({
                        tip: m8e.message || m8e.msg || "评论异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "message_notify-list": {
            url: "/api/msg/notices",
            filter: function(e8e) {
                this.Mb0x(e8e);
                delete e8e.data.offset
            },
            format: function(m8e, e8e) {
                if (e8e.data.offset == 0) this.z8r("onnewcount", m8e.newCount);
                this.cDj7c(m8e);
                return {
                    list: m8e.notices
                }
            }
        },
        "message_notify-del": {
            url: "TODO",
            format: function(T8L, e8e) {
                return e8e.ext
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.nz3x, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                })
            },
            onmessage: function(cd9U) {
                l8d.byp3x({
                    txt: "通知删除失败！"
                })
            }
        },
        "message_at-list": {
            url: "/api/forwards/get",
            filter: function(e8e) {},
            format: function(m8e, e8e) {
                k8c.bf8X(m8e.forwards,
                function(p8h, r8j) {
                    p8h.isNew = r8j < m8e.newCount
                });
                m8e.forwards.length = e8e.limit;
                return {
                    total: m8e.size,
                    list: m8e.forwards
                }
            }
        },
        "message_at-pull": {
            url: "/api/forwards/get",
            filter: function(e8e) {
                this.Mb0x(e8e, 0)
            },
            format: function(m8e, e8e) {
                return m8e.forwards
            }
        },
        "message_at-del": {
            url: "TODO",
            format: function(T8L, e8e) {
                return e8e.ext
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.nz3x, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                })
            },
            onmessage: function(cd9U) {
                l8d.byp3x({
                    txt: "@消息删除失败！"
                })
            }
        },
        "event-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e8e, bk8c) {
                if (e8e.like) {
                    bk8c.url = "/api/resource/like";
                    bk8c.onload = "oneventlike"
                } else {
                    bk8c.url = "/api/resource/unlike";
                    bk8c.onload = "oneventunlike"
                }
            },
            format: function(m8e, e8e) {
                m8e.id = e8e.id;
                m8e.isInner = !!e8e.isInner;
                return m8e
            }
        }
    });
    q8i.nz3x = NEJ.C();
    b8h = q8i.nz3x.M8E(q8i.if1x);
    L8D = q8i.nz3x.cx9o;
    b8h.zY6S = function(e8e, p8h) {
        if (!k8c.el0x(p8h)) {
            return L8D.zY6S.apply(this, arguments)
        }
        k8c.bf8X(p8h,
        function(i8a) {
            L8D.zY6S.apply(this, [e8e, i8a])
        },
        this);
        return {
            limit: p8h.length
        }
    };
    b8h.cDf7Y = function(p8h) {
        if (!k8c.el0x(p8h)) {
            if (p8h.type == 1) {
                p8h.json = this.bXH0x(p8h.json, p8h.id)
            } else if (p8h.type == 2) {
                p8h.json = JSON.parse(p8h.json);
                p8h.json.resource = this.bXH0x(p8h.json.resource)
            } else if (p8h.type == 3) {
                p8h.json = JSON.parse(p8h.json)
            }
            return
        }
        k8c.bf8X(p8h, this.cDf7Y, this)
    };
    b8h.bXH0x = function(tt4x) {
        if (k8c.fX0x(tt4x)) {
            tt4x = JSON.parse(tt4x)
        }
        if ( !! tt4x.json && k8c.fX0x(tt4x.json)) {
            tt4x.json = JSON.parse(tt4x.json);
            if ( !! tt4x.json.event && !!tt4x.json.event.json && k8c.fX0x(tt4x.json.event.json)) {
                tt4x.json.event.json = JSON.parse(tt4x.json.event.json)
            }
        }
        return tt4x
    };
    b8h.bsh1x = function(p8h) {
        if (!k8c.el0x(p8h)) {
            p8h.msg = JSON.parse(p8h.msg);
            return
        }
        k8c.bf8X(p8h, this.bsh1x, this)
    };
    b8h.bsj1x = function(p8h) {
        if (!k8c.el0x(p8h)) {
            p8h.id = p8h.toUser.userId + "-" + p8h.fromUser.userId;
            p8h.lastMsg = JSON.parse(p8h.lastMsg);
            return
        }
        k8c.bf8X(p8h, this.bsj1x, this)
    };
    b8h.cDm7f = function(i8a) {
        var bB9s = {
            0 : "/playlist?id={id}",
            1 : "/dj?id={id}",
            2 : "/event?id={id}&uid={userId}",
            3 : "/album?id={id}",
            4 : "/song?id={id}",
            5 : "/mv?id={id}",
            6 : "/topic?id={id}",
            62 : "/video?id={id}&toast=true"
        };
        k8c.bf8X(i8a.comments,
        function(p8h, r8j) {
            try {
                p8h.resourceJson = JSON.parse(p8h.resourceJson)
            } catch(e) {
                p8h.resourceJson = null
            }
            if (p8h.resourceJson) {
                if (p8h.resourceType !== 62 || p8h.resourceJson.id) {
                    p8h.resUrl = l8d.bbZ5e(bB9s[p8h.resourceType], p8h.resourceJson)
                }
            }
        },
        this)
    };
    b8h.cDj7c = function() {
        var cDe7X = function(bR9I) {
            var T8L, cT9K = "";
            try {
                T8L = JSON.parse(bR9I.json)
            } catch(e) {
                T8L = {}
            }
            switch (bR9I.type) {
            case 12:
                cT9K = "我创建了歌单";
                cT9K = cT9K + "「" + T8L.playlist.name + "」by " + T8L.playlist.creator.nickname;
                break;
            case 13:
                cT9K = "我分享了歌单";
                cT9K = cT9K + "「" + k8c.dP0x(T8L.playlist.name) + "」by " + T8L.playlist.creator.nickname;
                break;
            case 14:
                cT9K = "我收藏了歌单";
                cT9K = cT9K + "「" + k8c.dP0x(T8L.playlist.name) + "」by " + T8L.playlist.creator.nickname;
                break;
            case 15:
            case 16:
                cT9K = "我创建了节目";
                cT9K = cT9K + "「" + T8L.program.name + "」by " + T8L.program.dj.nickname;
                break;
            case 17:
                cT9K = "我分享了节目";
                cT9K = cT9K + "「" + T8L.program.name + "」by " + T8L.program.dj.nickname;
                break;
            case 18:
                cT9K = "我分享了歌曲";
                cT9K = cT9K + "「" + T8L.song.name + "」by ";
                for (var i = 0,
                l = T8L.song.artists.length; i < l; i++) {
                    cT9K = cT9K + T8L.song.artists[i].name;
                    if (i < l - 1) cT9K = cT9K + "/"
                }
                break;
            case 19:
                cT9K = "我分享了专辑";
                cT9K = cT9K + "「" + T8L.album.name + "」by " + T8L.album.artist.name;
                break;
            case 36:
                cT9K = "我分享了歌手";
                cT9K = cT9K + "「" + T8L.resource.name + "」";
                break;
            case 21:
                cT9K = "我分享了MV";
                cT9K = cT9K + "「" + T8L.mv.name + "」by " + T8L.mv.artistName;
                break;
            case 22:
                cT9K = "我的动态:" + (l8d.zo6i(k8c.dP0x(T8L.msg), "s-fc3") || "转发");
                break;
            case 23:
                cT9K = "我收藏了节目";
                cT9K = cT9K + "「" + T8L.program.name + "」by " + T8L.program.dj.nickname;
                break;
            case 24:
                cT9K = "我分享了专栏文章";
                cT9K = cT9K + "「" + T8L.topic.mainTitle + "」";
                break;
            case 28:
                cT9K = "我分享了电台";
                cT9K = cT9K + "「" + T8L.djRadio.name + "」by " + T8L.djRadio.dj.nickname;
                break;
            case 31:
                cT9K = "我分享了评论：";
                cT9K = cT9K + l8d.zo6i((T8L.resource || be8W).content || "");
                if (T8L.resource && T8L.resource.expressionUrl) {
                    cT9K += "[表情图片]"
                }
                break;
            case 35:
                cT9K = "我的动态:" + l8d.zo6i(k8c.dP0x(T8L.msg), "s-fc3") + (bR9I.pics && bR9I.pics.length ? "[图片]": "");
                break;
            case 39:
                cT9K = "我发布了视频";
                cT9K = cT9K + "「" + T8L.video.title + "」";
                break;
            case 41:
                cT9K = "我分享了视频";
                cT9K = cT9K + "「" + T8L.video.title + "」";
                break
            }
            T8L.str = cT9K;
            return T8L
        };
        var cDc7V = function(KT0x) {
            var bB9s = {
                A_PL_0: "playlist",
                R_MV_5: "mv",
                A_TO_6: "topic",
                A_DJ_1: "dj",
                A_EV_2: "event",
                R_AL_3: "album",
                R_SO_4: "song",
                A_DR_14: "radio",
                R_VI_62: "video"
            };
            if (/^(\w_\w{2}_\d+)+_(.+)$/.test(KT0x)) {
                var t8l = bB9s[RegExp.$1],
                cq9h = RegExp.$2.split("_");
                return "/" + t8l + "?id=" + cq9h[0] + (t8l == "event" ? "&uid=" + cq9h[1] : "") + "&_hash=comment-box&toast=true"
            }
        };
        var cDb7U = function(eQ0x) {
            var eQ0x = JSON.parse(eQ0x);
            switch (eQ0x.type) {
            case 1:
                if (!eQ0x.track) return;
                eQ0x.msg = "赞了你的动态";
                eQ0x.url = "/event?toast=true&id=" + eQ0x.track.id + "&uid=" + GUser.userId;
                eQ0x.track = cDe7X(eQ0x.track);
                break;
            case 2:
                eQ0x.msg = "收藏了你的歌单";
                eQ0x.url = "/playlist?id=" + eQ0x.playlist.id;
                eQ0x.res = eQ0x.playlist;
                break;
            case 3:
                eQ0x.msg = "分享了你的歌单";
                eQ0x.url = "/playlist?id=" + eQ0x.playlist.id;
                eQ0x.res = eQ0x.playlist;
                break;
            case 4:
                eQ0x.msg = "分享了你的节目";
                eQ0x.url = "/dj?id=" + eQ0x.program.id;
                eQ0x.res = eQ0x.program;
                break;
            case 5:
                eQ0x.msg = "收藏了你的节目";
                eQ0x.url = "/dj?id=" + eQ0x.program.id;
                eQ0x.res = eQ0x.program;
                break;
            case 6:
                eQ0x.msg = "赞了你的评论";
                eQ0x.url = cDc7V(eQ0x.comment.threadId);
                eQ0x.comment = eQ0x.comment;
                break;
            case 7:
                eQ0x.msg = "赞了你的节目";
                eQ0x.url = "/dj?id=" + eQ0x.program.id;
                eQ0x.res = eQ0x.program;
                break;
            case 8:
                eQ0x.msg = "订阅了你的电台";
                eQ0x.url = "/radio?id=" + eQ0x.djRadio.id;
                eQ0x.res = eQ0x.djRadio;
                break;
            case 9:
                eQ0x.msg = "赞了你的专栏文章";
                eQ0x.url = "/topic?id=" + eQ0x.topic.id;
                eQ0x.topic = eQ0x.topic;
                break;
            case 10:
                if (!eQ0x.generalNotice) return;
                eQ0x.msg = eQ0x.generalNotice.actionDesc;
                eQ0x.url = eQ0x.generalNotice.webUrl;
                if (eQ0x.url.indexOf("/video?id=") == 0) {
                    eQ0x.url += "&toast=true"
                }
                eQ0x.generalContent = eQ0x.generalNotice.content;
                break
            }
            return eQ0x
        };
        return function(i8a) {
            k8c.bf8X(i8a.notices,
            function(p8h, r8j) {
                p8h.notice = cDb7U(p8h.notice)
            },
            this)
        }
    } ();
    b8h.Mb0x = function(e8e, r8j, K8C) {
        var bA9r = -1,
        j8b = this.hY1x(e8e.key),
        bl8d = e8e.offset;
        bl8d = bl8d != null ? bl8d: j8b.length;
        if (bl8d > 0 && j8b.length > 0) {
            var cCU7N = 0;
            r8j = r8j != null ? r8j: bl8d - 1;
            while (r8j >= 0 && !j8b[r8j]) {
                r8j--;
                cCU7N++
            }
            if (r8j >= 0 && j8b[r8j]) {
                bA9r = j8b[r8j][K8C || "time"]
            }
        }
        e8e.data.time = bA9r
    };
    b8h.cCQ7J = function(e8e) {
        e8e.onload = this.bYs0x.f8d(this);
        e8e.onerror = this.bYs0x.f8d(this);
        this.cp9g("message_resource_comment-reply", e8e)
    };
    b8h.bYs0x = function(d8f) {
        this.z8r("onreply2", d8f)
    };
    b8h.bmR0x = function(e8e) {
        this.cp9g("message_user_comment-reply", e8e)
    };
    b8h.KE0x = function(d8f) {
        this.z8r("onreply", d8f)
    };
    b8h.boU0x = function(e8e) {
        e8e.onload = this.RL2x.f8d(this);
        this.cp9g("message_chat-add", e8e)
    };
    b8h.RL2x = function(d8f) {
        this.z8r("onsend", d8f)
    };
    b8h.pD3x = function(e8e) {
        this.cp9g("event-like", e8e)
    };
    G8y.fV0x.B8t({
        element: q8i.nz3x,
        event: "listchange"
    })
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    v8n = c8g("nej.j"),
    be8W = c8g("nej.o"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    cG9x = c8g("nej.p"),
    x8p = c8g("nm.w"),
    l8d = c8g("nm.x"),
    bD9u = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.wo5t = NEJ.C();
    b8h = n8f.wo5t.M8E(n8f.es0x, !0);
    L8D = n8f.wo5t.prototype;
    b8h.ci9Z = function() {
        this.cg9X = "m-msg-private-send"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var bO9F = a7h.F8x(this.o8g, "j-flag");
        this.wJ5O = {
            parent: bO9F[1],
            err: bO9F[0]
        };
        this.fE0x = {
            parent: bO9F[2],
            type: 4,
            nomention: true,
            numLimit: 200,
            onsubmit: this.Rv1x.f8d(this)
        };
        if (cG9x.dC0x.browser == "ie" && cG9x.dC0x.version < "8.0") {
            a7h.bd8V(bO9F[0], "position", "relative");
            a7h.bd8V(bO9F[0], "zIndex", "10")
        }
        l8d.kl2x()
    };
    b8h.bp8h = function(e8e) {
        e8e.parent = document.body;
        e8e.clazz = "";
        e8e.onclose = function() {
            this.bC9t()
        }.f8d(this);
        e8e.mask = true;
        this.bq8i(e8e); !! e8e.receiver && (this.wJ5O.receiver = e8e.receiver);
        this.py3x = x8p.Jd9U.B8t(this.wJ5O);
        this.er0x = x8p.Di7b.B8t(this.fE0x);
        this.U8M = q8i.nz3x.B8t({
            onsend: this.RL2x.f8d(this),
            onerror: function(i8a) {
                var m8e = i8a.result || {};
                if (m8e.code == 250) {
                    n8f.bb8T.J8B({
                        tip: m8e.message || m8e.msg || "操作异常",
                        type: 2
                    })
                } else {
                    n8f.bb8T.J8B({
                        tip: "发送失败",
                        type: 2
                    })
                }
                this.er0x.BF7y()
            }.f8d(this)
        })
    };
    b8h.bC9t = function() {
        this.bH9y();
        if ( !! this.py3x) {
            this.py3x.W8O();
            delete this.py3x
        }
        if ( !! this.er0x) {
            this.er0x.W8O();
            delete this.er0x
        }
    };
    b8h.Rv1x = function(C8u) {
        if ( !! C8u) {
            var QE1x = this.py3x.SD2x();
            if ( !! QE1x.length) {
                this.Ri1x = {
                    type: "text",
                    msg: C8u,
                    userIds: JSON.stringify(QE1x)
                };
                l8d.lF2x(this.bsn1x.f8d(this));
                this.er0x.z8r("onloading")
            } else {
                l8d.eX0x({
                    title: "提示",
                    message: "请选择私信发送对象"
                })
            }
        } else {
            l8d.eX0x({
                title: "提示",
                message: "私信内容不能为空"
            })
        }
    };
    b8h.bsn1x = function(cs9j) {
        this.Ri1x.checkToken = cs9j || "";
        this.U8M.boU0x({
            data: this.Ri1x,
            justSend: true
        })
    };
    b8h.RL2x = function(m8e) {
        this.bu9l();
        if (m8e.code == 200) {
            n8f.bb8T.J8B({
                tip: "发送成功"
            })
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    h8b = c8g("nej.v"),
    a7h = c8g("nej.e"),
    v8n = c8g("nej.j"),
    k8c = c8g("nej.u"),
    n8f = c8g("nm.l"),
    x8p = c8g("nm.w"),
    bD9u = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    L8D;
    n8f.bwL2x = NEJ.C();
    b8h = n8f.bwL2x.M8E(n8f.es0x);
    L8D = n8f.bwL2x.cx9o;
    b8h.ci9Z = function() {
        this.cg9X = "m-question"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.fd0x = j8b[1];
        this.qk3x = j8b[2];
        this.py3x = x8p.Vd2x.B8t({
            filter: this.ctw4A,
            parent: j8b[0]
        });
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.bp8h = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        e8e.title = "回答安全问题";
        e8e.draggable = !0;
        e8e.destroyalbe = !0;
        e8e.mask = true;
        this.bq8i(e8e);
        this.py3x.lH2x(e8e.data || [])
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.fd0x.value = ""
    };
    b8h.DU8M = function() {
        this.bu9l()
    };
    b8h.bT9K = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:action");
        switch (a7h.u8m(g8c, "action")) {
        case "back":
            this.z8r("onback");
            this.bu9l();
            break;
        case "next":
            var bMe6Y = this.fd0x.value.trim();
            if (!bMe6Y) {
                this.is1x("请输入回答");
                return
            }
            var i8a = {
                questionId: this.py3x.gl0x().id,
                answer: k8c.lT2x(bMe6Y)
            };
            this.is1x(null);
            v8n.bm8e("/store/api/security/validateAnswer", {
                type: "json",
                method: "post",
                data: k8c.cE9v(i8a),
                onload: this.bMg6a.f8d(this),
                onerror: this.bMg6a.f8d(this)
            });
            break
        }
    };
    b8h.ctw4A = function(p8h) {
        return p8h.question
    };
    b8h.is1x = function(cU9L) {
        if (cU9L) {
            this.qk3x.innerHTML = '<i class="u-icn u-icn-25"></i>' + cU9L;
            a7h.y8q(this.qk3x, "f-hide")
        } else {
            a7h.w8o(this.qk3x, "f-hide")
        }
    };
    var bMh6b = function(d8f) {
        try {
            top.doMsgToServiceAction(d8f)
        } catch(e) {}
    };
    b8h.bMg6a = function(d8f) {
        if (d8f && d8f.code == 200) {
            this.z8r("onnext");
            this.bu9l()
        } else {
            var bB9s = {
                "-3": "回答错误，您还有" + d8f.times + "次机会！"
            };
            if (d8f.code == -2 || d8f.code == -4) {
                l8d.eX0x({
                    clazz: "m-layer-w2",
                    title: "更换手机号",
                    message: "<p>帐号已被锁定</p>" + '<p class="f-mgt10">回答错误的次数过多，您的帐号已被锁定，将无法进行任何商城交易，<br/>' + '请私信<a class="s-fc7" href="javascript:;" data-action="kf">@云音乐客服</a> 解锁。</p>',
                    btntxt: "知道了",
                    action: bMh6b
                });
                this.bu9l()
            } else {
                this.is1x(bB9s[d8f.code] || "回答出错")
            }
        }
    };
    l8d.bMi6c = function(e8e) {
        var bMj6d = function(d8f) {
            if (d8f && d8f.code == 200) {
                e8e.data = d8f.data;
                n8f.bwL2x.B8t(e8e).J8B()
            } else {
                l8d.eX0x({
                    clazz: "m-layer-w2",
                    message: '私信 <a class="s-fc7" href="javascript:;" data-action="kf">@云音乐客服</a>',
                    action: bMh6b
                })
            }
        };
        v8n.bm8e("/store/api/security/getQuestion", {
            type: "json",
            method: "get",
            onload: bMj6d,
            onerror: bMj6d
        })
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    ch9Y = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.bgF6z = NEJ.C();
    b8h = n8f.bgF6z.M8E(ch9Y.cO9F);
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.en0x = e8e;
        this.bMl6f = e8e.mobile;
        this.go1x = e8e.countrycode || "86";
        this.U8M = q8i.mO2x.B8t();
        this.U8M.s8k("onsendcaptcha", this.sp4t.f8d(this));
        this.U8M.s8k("onsendcaptchaerror", this.Qf1x.f8d(this));
        this.U8M.s8k("onchangemobile", this.ctu4y.f8d(this));
        this.U8M.s8k("onchangemobileerror", this.cts4w.f8d(this));
        this.bwN2x()
    };
    b8h.bC9t = function() {
        this.bH9y();
        this.U8M.W8O();
        if (this.eW0x) this.eW0x.W8O();
        if (this.LJ0x) this.LJ0x.W8O()
    };
    b8h.bwN2x = function() {
        if (this.eW0x) this.eW0x.bu9l();
        if (this.LJ0x) this.LJ0x.W8O();
        this.LJ0x = l8d.kI2x({
            title: "更换手机号",
            clazz: "m-layer-find",
            txt: "txt-mobilestatus",
            onaction: function(d8f) {
                if (d8f.action == "valid") {
                    this.U8M.Cc7V({
                        data: {
                            ctcode: this.go1x,
                            cellphone: this.bMl6f
                        }
                    })
                } else {
                    l8d.bMi6c({
                        title: "更换手机号",
                        onback: this.bwN2x.f8d(this),
                        onnext: this.bMq6k.f8d(this)
                    })
                }
            }.f8d(this)
        })
    };
    b8h.sp4t = function(bo8g) {
        this.eW0x = n8f.sc4g.J8B({
            title: "更换手机号",
            mobile: this.bMl6f,
            okbutton: "下一步",
            onok: this.bMq6k.f8d(this),
            backbutton: "&lt;&nbsp;&nbsp;上一步",
            onback: this.bwN2x.f8d(this)
        })
    };
    b8h.Qf1x = function(d8f) {
        n8f.bb8T.J8B({
            tip: (d8f || {}).message || "更换失败，请重试",
            type: 2
        })
    };
    b8h.bMq6k = function(bW9N) {
        var bW9N = bW9N || {};
        this.eW0x = n8f.sc4g.J8B({
            title: "更换手机号",
            mobileLabel: "新手机号：",
            okbutton: "完成",
            onok: this.ctp4t.f8d(this, bW9N.captcha)
        })
    };
    b8h.ctp4t = function(ctn4r, bo8g) {
        this.bMt6n = bo8g.mobile;
        this.dg9X = bo8g.captcha;
        this.U8M.cwO5T({
            data: {
                phone: this.bMt6n,
                captcha: this.dg9X,
                oldcaptcha: ctn4r
            }
        })
    };
    b8h.ctu4y = function(bo8g) {
        this.eW0x.bu9l();
        n8f.bb8T.J8B({
            tip: "更换成功"
        });
        if (this.en0x.onsuccess) this.en0x.onsuccess({
            mobile: this.bMt6n
        })
    };
    b8h.cts4w = function(bo8g) {
        if (bo8g.code == 506) {
            this.eW0x.cX9O(false);
            this.eW0x.ca9R(bo8g.message, "mobile")
        } else {
            this.eW0x.bu9l();
            n8f.bb8T.J8B({
                tip: "更换失败，请重试",
                type: 2
            })
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    v8n = c8g("nej.j"),
    G8y = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    cz9q = c8g("api"),
    x8p = c8g("nm.w");
    var bwQ2x = null,
    bMv6p = null;
    var ctl4p = function(fO0x, bMx6r) {
        if (bwQ2x) bwQ2x.W8O();
        bwQ2x = n8f.bgF6z.B8t({
            title: "更换手机号",
            mobile: fO0x,
            onsuccess: function(bo8g) {
                if (bMx6r) bMx6r({
                    cellphone: bo8g.mobile
                })
            }
        })
    };
    var ctj4n = function(e8e) {
        v8n.bm8e("/api/sms/captcha/sent", {
            type: "json",
            query: {
                cellphone: e8e.mobile,
                channel: "new"
            },
            onload: function(d8f) {
                if (d8f.code != 200) return n8f.bb8T.J8B({
                    tip: d8f.message || "验证码发送失败",
                    type: 2
                });
                bMv6p = n8f.sc4g.J8B({
                    title: e8e.title || "验证手机号",
                    mobile: e8e.mobile,
                    okbutton: e8e.ntext || "下一步",
                    onok: function(bo8g) {
                        bMv6p.bu9l();
                        if (e8e.onnext) e8e.onnext(bo8g)
                    }
                })
            },
            onerror: function() {
                n8f.bb8T.J8B({
                    tip: "验证码发送失败",
                    type: 2
                })
            }
        })
    };
    cz9q.changePhone = ctl4p;
    cz9q.phoneCode = ctj4n;
    cz9q.validateQuestion = l8d.bMi6c
})(); (function() {
    var c8g = NEJ.P,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    bg8Y = c8g("nej.h"),
    P8H = c8g("nej.p");
    var jW2x = {
        opacity: 1,
        "z-index": 1,
        background: 1,
        "font-weight": 1,
        filter: 1
    };
    bg8Y.bSY8Q = function(jh1x) {
        return jW2x[jh1x] === undefined && jh1x.indexOf("color") < 0
    };
    bg8Y.bht8l = function(g8c, nZ3x, sN4R) {
        sN4R = sN4R.slice(0, -1);
        a7h.bd8V(g8c, "transition", sN4R);
        a7h.fv0x(g8c, nZ3x);
        return this
    };
    bg8Y.XM3x = function(g8c, V8N, og3x) {
        a7h.fv0x(g8c, V8N);
        a7h.bd8V(g8c, "transition", "none");
        og3x.call(null, V8N);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    bs8k = NEJ.F,
    bg8Y = c8g("nej.h"),
    P8H = c8g("nej.p");
    if (P8H.oG3x.trident1) return;
    bg8Y.Ip9g = function() {
        return ! 0
    }
})(); (function() {
    var c8g = NEJ.P,
    P8H = c8g("nej.ut"),
    b8h;
    if ( !! P8H.Pz1x) return;
    P8H.Pz1x = NEJ.C();
    b8h = P8H.Pz1x.M8E(P8H.Iu9l);
    b8h.bp8h = function(e8e) {
        e8e = NEJ.X({},
        e8e);
        e8e.timing = "easeout";
        this.bq8i(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    P8H = c8g("nej.ut"),
    b8h;
    if ( !! P8H.blM0x) return;
    P8H.blM0x = NEJ.C();
    b8h = P8H.blM0x.M8E(P8H.Iu9l);
    b8h.bp8h = function(e8e) {
        e8e = NEJ.X({},
        e8e);
        e8e.timing = "easeinout";
        this.bq8i(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    bg8Y = c8g("nej.h"),
    P8H = c8g("nej.p"),
    di9Z = c8g("nej.x"),
    ch9Y = c8g("nej.ut");
    if (P8H.oG3x.trident) return;
    var bUs9j = {
        linear: ch9Y.uE5J,
        "ease-in": ch9Y.IS9J,
        "ease-out": ch9Y.Pz1x,
        "ease-in-out": ch9Y.blM0x
    };
    bg8Y.bht8l = function() {
        var cuv5A = function(nZ3x, sN4R) {
            var cT9K = "";
            k8c.eR0x(nZ3x,
            function(C8u, Y8Q) {
                cT9K += sN4R.replace("all", Y8Q)
            });
            return cT9K
        };
        var cuF5K = function(C8u, jh1x) {
            if (jh1x === "filter") {
                C8u = k8c.PU1x(C8u, 0);
                C8u = "alpha(opacity=" + C8u + ")"
            }
            if (jh1x === "z-index") C8u = k8c.PU1x(C8u, 0);
            return C8u
        };
        var cuG5L = function(C8u) {
            return bUs9j[C8u.split(" ")[2]]
        };
        var cuK5P = function(g8c, C8u, nZ3x, og3x, r8j) {
            var C8u = C8u.split(" "),
            jh1x = C8u[0],
            ej0x = parseFloat(a7h.dp9g(g8c, jh1x)) || 0,
            oe3x = parseFloat(nZ3x[jh1x]) || 0,
            cuN5S = bUs9j[C8u[2]],
            blQ0x = C8u[1].slice(0, -1) * 1e3 + C8u[3].slice(0, 1) * 1e3;
            if (blQ0x >= g8c.sumTime) {
                g8c.sumTime = blQ0x;
                g8c.isLastOne = r8j
            }
            var XI3x = nej.p.dC0x.engine === "trident" && nej.p.dC0x.release - 5 < 0;
            if (jh1x === "opacity" && XI3x) {
                jh1x = "filter";
                var ek0x = a7h.dp9g(g8c, jh1x);
                ej0x = parseFloat(ek0x.split("=")[1]) || 0;
                oe3x = oe3x * 100
            }
            var e8e = {
                from: {
                    offset: ej0x
                },
                to: {
                    offset: oe3x
                },
                duration: blQ0x,
                onupdate: function(bl8d) {
                    var C8u = bl8d.offset;
                    if (!bg8Y.bSY8Q(jh1x)) {
                        C8u = cuF5K(C8u, jh1x);
                        a7h.bd8V(g8c, jh1x, C8u)
                    } else {
                        a7h.bd8V(g8c, jh1x, C8u + "px")
                    }
                },
                onstop: function(jh1x) {
                    var Py1x = g8c.effects[r8j];
                    if (!Py1x) return;
                    Py1x = cuN5S.W8O(Py1x);
                    if (g8c.isLastOne === r8j) og3x.apply(this)
                }.f8d(this, r8j)
            };
            return e8e
        };
        return bg8Y.bht8l.eT0x(function(d8f) {
            d8f.stopped = !0;
            var j8b = d8f.args;
            var g8c = j8b[0],
            nZ3x = j8b[1],
            sN4R = j8b[2],
            og3x = j8b[3];
            g8c.sumTime = 0,
            g8c.isLastOne = 0;
            var bXt9k = [];
            if (sN4R.indexOf("all") > -1) sN4R = cuv5A(nZ3x, sN4R);
            var blS0x = sN4R.slice(0, -1);
            blS0x = blS0x.split(",");
            g8c.effects = [];
            k8c.bf8X(blS0x,
            function(C8u, r8j) {
                var e8e = cuK5P(g8c, C8u, nZ3x, og3x, r8j);
                bXt9k.push({
                    o: e8e,
                    c: cuG5L(C8u)
                })
            });
            k8c.bf8X(bXt9k,
            function(p8h, r8j) {
                var Py1x = p8h.c.B8t(p8h.o);
                g8c.effects[r8j] = Py1x;
                Py1x.ey0x()
            });
            return this
        })
    } ();
    bg8Y.XM3x = bg8Y.XM3x.eT0x(function(d8f) {
        d8f.stopped = !0;
        var j8b = d8f.args;
        var g8c = j8b[0];
        k8c.bf8X(g8c.effects,
        function(be8W) {
            be8W.bi8a()
        });
        g8c.effects = [];
        return this
    })
})(); (function() {
    var c8g = NEJ.P,
    bs8k = NEJ.F,
    bg8Y = c8g("nej.h"),
    a7h = c8g("nej.e"),
    P8H = c8g("nej.p");
    if (P8H.oG3x.gecko) return;
    bg8Y.bht8l = function(g8c, nZ3x, sN4R) {
        sN4R = sN4R.slice(0, -1);
        a7h.bd8V(g8c, "transition", sN4R);
        setTimeout(function() {
            a7h.fv0x(g8c, nZ3x)
        },
        33);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    bs8k = NEJ.F,
    bg8Y = c8g("nej.h"),
    P8H = c8g("nej.p");
    if (P8H.oG3x.webkit) return
})(); (function() {
    var c8g = NEJ.P,
    bs8k = NEJ.F,
    bg8Y = c8g("nej.h"),
    P8H = c8g("nej.p");
    if (P8H.oG3x.presto) return
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    k8c = c8g("nej.u"),
    bg8Y = c8g("nej.h"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    P8H = c8g("nej.ut"),
    wG5L;
    if ( !! P8H.ui5n) return;
    P8H.ui5n = NEJ.C();
    wG5L = P8H.ui5n.M8E(P8H.cO9F);
    wG5L.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.oL3x = a7h.A8s(e8e.node);
        this.bYK0x = e8e.styles || [];
        this.bZC0x = e8e.onstop || bs8k;
        this.blU0x = e8e.transition || [];
        this.XD3x = {};
        this.cbn0x = this.cuQ5V();
        if ( !! bg8Y.Ip9g && bg8Y.Ip9g()) {
            setTimeout(this.Ip9g.f8d(this), this.blV0x * 1e3)
        } else {
            this.bZ9Q([[this.oL3x, "transitionend", this.Ip9g.f8d(this)]])
        }
    };
    wG5L.bC9t = function() {
        if ( !! this.Pw1x) {
            this.Pw1x = window.clearInterval(this.Pw1x)
        }
        delete this.oL3x;
        delete this.bYK0x;
        delete this.cbn0x;
        delete this.XD3x;
        delete this.blW0x;
        delete this.blU0x;
        delete this.Pw1x;
        this.bH9y()
    };
    wG5L.Ip9g = function(d8f) {
        if ( !! bg8Y.Ip9g && bg8Y.Ip9g()) {
            this.blX0x = !1;
            this.bi8a();
            return
        }
        if ( !! this.blX0x && this.cuV5a(d8f)) {
            this.blX0x = !1;
            this.bi8a()
        }
    };
    wG5L.cuV5a = function(d8f) {
        var Y8Q = d8f.propertyName;
        if (Y8Q === this.blW0x || Y8Q.indexOf(this.blW0x) > -1) return ! 0;
        else return ! 1
    };
    wG5L.cuQ5V = function() {
        var cuY5d = function(cm9d) {
            var j8b = cm9d.split(":"),
            jh1x = j8b[0],
            C8u = j8b[1],
            g8c = this.oL3x;
            if (C8u.indexOf("=") > -1) {
                var gM1x = parseInt(a7h.dp9g(g8c, jh1x)) || 0;
                var cG9x = parseInt(C8u.split("=")[1]);
                if (C8u.indexOf("+") > -1) C8u = gM1x + cG9x;
                else C8u = gM1x - cG9x
            }
            if (bg8Y.bSY8Q(jh1x)) {
                if (C8u.toString().indexOf("px") < 0) C8u += "px"
            }
            this.XD3x[jh1x] = C8u
        };
        var cuZ5e = function(r8j) {
            if (!this.blU0x[r8j]) return "";
            var tb4f = this.blU0x[r8j],
            G8y = tb4f.duration + tb4f.delay;
            if (G8y >= this.blV0x) {
                this.blV0x = G8y;
                this.blW0x = tb4f.property
            }
            return tb4f.property + " " + tb4f.duration + "s " + tb4f.timing + " " + tb4f.delay + "s,"
        };
        return function() {
            var ccF1x = "";
            this.blV0x = 0;
            k8c.bf8X(this.bYK0x,
            function(cm9d, r8j) {
                cuY5d.call(this, cm9d);
                ccF1x += cuZ5e.call(this, r8j)
            }.f8d(this));
            return ccF1x
        }
    } ();
    wG5L.cvb5g = function() {
        this.jr1x = {};
        k8c.eR0x(this.XD3x,
        function(C8u, jh1x) {
            this.jr1x[jh1x] = a7h.dp9g(this.oL3x, jh1x)
        }.f8d(this));
        this.z8r("onplaystate", this.jr1x)
    };
    wG5L.xk5p = function() {
        this.blX0x = !0;
        bg8Y.bht8l(this.oL3x, this.XD3x, this.cbn0x, this.bZC0x);
        this.Pw1x = window.setInterval(this.cvb5g.f8d(this), 49);
        return this
    };
    wG5L.bi8a = function() {
        bg8Y.XM3x(this.oL3x, this.XD3x, this.bZC0x);
        this.Pw1x = window.clearInterval(this.Pw1x);
        return this
    };
    wG5L.cSW0x = function() {};
    wG5L.cSV0x = function() {}
})(); (function() {
    var c8g = NEJ.P,
    bs8k = NEJ.F,
    k8c = c8g("nej.u"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    P8H = c8g("nej.ut");
    a7h.bhc7V = function(e8e) {
        e8e = e8e || {};
        e8e.onstop = e8e.onstop || bs8k;
        e8e.onplaystate = e8e.onplaystate || bs8k;
        return e8e
    };
    a7h.bEs4w = function() {
        var cvd5i = function(g8c, bhb7U, XI3x) {
            var hB1x, ft0x = true;
            if ( !! XI3x) {
                k8c.eR0x(bhb7U,
                function(C8u, Y8Q) {
                    if (Y8Q === "opacity") {
                        Y8Q = "filter";
                        var ek0x = a7h.dp9g(g8c, Y8Q);
                        if (ek0x === "") {
                            a7h.bd8V(g8c, "filter", "alpha(opacity=100)");
                            hB1x = 100
                        } else {
                            hB1x = parseFloat(ek0x.split("=")[1]) || 0
                        }
                        C8u = C8u * 100
                    } else {
                        hB1x = a7h.dp9g(g8c, Y8Q)
                    }
                    if (parseInt(hB1x) === C8u) ft0x = false
                }.f8d(this))
            } else {
                k8c.eR0x(bhb7U,
                function(C8u, Y8Q) {
                    hB1x = a7h.dp9g(g8c, Y8Q);
                    if (parseInt(hB1x) === C8u) ft0x = false
                }.f8d(this))
            }
            return ft0x
        };
        return function(g8c, bhb7U) {
            var XI3x = nej.p.dC0x.engine === "trident" && nej.p.dC0x.release - 5 < 0;
            if (!cvd5i(g8c, bhb7U, XI3x)) return ! 1;
            return ! 0
        }
    } ();
    a7h.bFC4G = function() {
        var cvf5k = function(g8c) {
            var bii9Z = a7h.dp9g(g8c, "display");
            if (bii9Z === "none") return ! 1;
            return ! 0
        };
        return function(g8c, e8e, kW2x) {
            var PK1x = e8e.opacity || kW2x;
            g8c = a7h.A8s(g8c);
            if (!cvf5k.call(g8c)) return ! 1;
            if ( !! g8c.effect) return ! 1;
            if (!a7h.bEs4w(g8c, {
                opacity: PK1x
            })) return ! 1;
            e8e = a7h.bhc7V(e8e);
            g8c.effect = P8H.ui5n.B8t({
                node: g8c,
                transition: [{
                    property: "opacity",
                    timing: e8e.timing || "ease-in",
                    delay: e8e.delay || 0,
                    duration: e8e.duration || 1
                }],
                styles: ["opacity:" + PK1x],
                onstop: function(V8N) {
                    g8c.effect = P8H.ui5n.W8O(g8c.effect);
                    e8e.onstop.call(null, V8N)
                },
                onplaystate: e8e.onplaystate.f8d(g8c.effect)
            });
            g8c.effect.xk5p();
            return this
        }
    }.f8d(this)();
    a7h.bha7T = function(g8c, e8e) {
        return a7h.bFC4G(g8c, e8e, 1)
    };
    a7h.cvq5v = function(g8c, e8e) {
        return a7h.bFC4G(g8c, e8e, 0)
    };
    a7h.cvr5w = function(g8c) {
        a7h.bme0x(g8c);
        return this
    };
    a7h.bme0x = function(g8c) {
        g8c = a7h.A8s(g8c);
        if (g8c.effect && g8c.effect.bi8a()) {
            if ( !! g8c.effect) g8c.effect = P8H.ui5n.W8O(g8c.effect)
        }
        return this
    };
    a7h.bGS5X = function(g8c, pg3x, e8e) {
        g8c = a7h.A8s(g8c);
        if ( !! g8c.effect) return ! 1;
        if (!a7h.bEs4w(g8c, pg3x)) return ! 1;
        e8e = a7h.bhc7V(e8e);
        e8e.duration = e8e.duration || [];
        var gU1x = pg3x.top || 0,
        hz1x = pg3x.left || 0;
        g8c.effect = P8H.ui5n.B8t({
            node: g8c,
            transition: [{
                property: "top",
                timing: e8e.timing || "ease-in",
                delay: e8e.delay || 0,
                duration: e8e.duration[0] || 1
            },
            {
                property: "left",
                timing: e8e.timing || "ease-in",
                delay: e8e.delay || 0,
                duration: e8e.duration[1] || 1
            }],
            styles: ["top:" + gU1x, "left:" + hz1x],
            onstop: function(V8N) {
                e8e.onstop.call(null, V8N);
                g8c.effect = P8H.ui5n.W8O(g8c.effect)
            },
            onplaystate: e8e.onplaystate.f8d(g8c.effect)
        });
        g8c.effect.xk5p();
        return this
    };
    a7h.bHk5p = function() {
        return function(g8c, pg3x, e8e) {
            g8c = a7h.A8s(g8c);
            if ( !! g8c.effect) return ! 1;
            e8e = a7h.bhc7V(e8e);
            var j8b = pg3x.split(":"),
            cvU5Z = j8b[0],
            bHp5u = [];
            bHp5u.push(pg3x);
            g8c.effect = P8H.ui5n.B8t({
                node: g8c,
                transition: [{
                    property: cvU5Z,
                    timing: e8e.timing || "ease-in",
                    delay: e8e.delay || 0,
                    duration: e8e.duration || 1
                }],
                styles: bHp5u,
                onstop: function(V8N) {
                    e8e.onstop.call(null, V8N);
                    g8c.effect = P8H.ui5n.W8O(g8c.effect)
                },
                onplaystate: e8e.onplaystate.f8d(g8c.effect)
            });
            g8c.effect.xk5p();
            return this
        }
    } ();
    a7h.cSK0x = function() {
        var bmf0x = function(g8c, t8l) {
            return t8l == "height" ? g8c.clientHeight: g8c.clientWidth
        };
        return function(g8c, t8l, e8e) {
            g8c = a7h.A8s(g8c);
            if ( !! g8c.effect) return ! 1;
            e8e = a7h.bhc7V(e8e);
            var C8u = e8e.value || false;
            if (!C8u) {
                a7h.bd8V(g8c, "display", "block");
                var g8c = a7h.A8s(g8c);
                C8u = bmf0x(g8c, t8l)
            }
            var ft0x = a7h.dp9g(g8c, "visibility");
            if (ft0x === "hidden") {
                g8c.style.height = 0;
                a7h.bd8V(g8c, "visibility", "inherit");
                g8c.effect = P8H.ui5n.B8t({
                    node: g8c,
                    transition: [{
                        property: t8l,
                        timing: e8e.timing || "ease-in",
                        delay: e8e.delay || 0,
                        duration: e8e.duration || 1
                    }],
                    styles: [t8l + ":" + C8u],
                    onstop: function(V8N) {
                        e8e.onstop.call(null, V8N);
                        g8c.effect = P8H.ui5n.W8O(g8c.effect);
                        bgZ7S = window.clearTimeout(bgZ7S)
                    },
                    onplaystate: e8e.onplaystate.f8d(g8c.effect)
                })
            } else {
                g8c.style.height = C8u;
                g8c.effect = P8H.ui5n.B8t({
                    node: g8c,
                    transition: [{
                        property: t8l,
                        timing: e8e.timing || "ease-in",
                        delay: e8e.delay || 0,
                        duration: e8e.duration || 1
                    }],
                    styles: [t8l + ":" + 0],
                    onstop: function(V8N) {
                        a7h.bd8V(g8c, "visibility", "hidden");
                        a7h.bd8V(g8c, t8l, "auto");
                        e8e.onstop.call(null, V8N);
                        g8c.effect = P8H.ui5n.W8O(g8c.effect);
                        bgZ7S = window.clearTimeout(bgZ7S)
                    },
                    onplaystate: e8e.onplaystate.f8d(g8c.effect)
                })
            }
            var bgZ7S = window.setTimeout(function() {
                g8c.effect.xk5p()
            }.f8d(this), 0);
            return this
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    G8y = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    bD9u = c8g("nej.ui"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    x8p = c8g("nm.w"),
    cz9q = c8g("api"),
    b8h,
    L8D;
    x8p.Ia9R = NEJ.C();
    b8h = x8p.Ia9R.M8E(bD9u.eu0x);
    L8D = x8p.Ia9R.cx9o;
    b8h.ci9Z = function() {
        this.cg9X = "m-image-preview"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.SF2x = j8b[0];
        this.nm3x = j8b[1];
        this.em0x = j8b[2];
        this.WA3x = j8b[3];
        this.Xm3x = j8b[4];
        this.Xq3x = j8b[5]
    };
    b8h.bp8h = function(e8e) {
        this.bq8i(e8e);
        this.ctd4h();
        this.kd2x = e8e.urls;
        this.gY1x = this.kd2x.length;
        if (this.gY1x == 1) {
            a7h.bd8V(this.WA3x, "display", "none");
            a7h.bd8V(this.Xm3x, "display", "none")
        }
        this.bZ9Q([[this.o8g, "click", this.bT9K.f8d(this)], [document, "keydown", this.cta4e.f8d(this)]]);
        l8d.bBF3x(this.kd2x,
        function(oO3x, dW0x) {
            this.rg4k = dW0x;
            this.mW2x(e8e.index || 0)
        }.f8d(this))
    };
    b8h.bC9t = function() {
        this.bH9y();
        a7h.w8o(this.nm3x, "fail-loading");
        a7h.y8q(this.nm3x, "f-hide");
        a7h.bd8V(this.WA3x, "display", "");
        a7h.bd8V(this.Xm3x, "display", "");
        a7h.y8q(this.WA3x, "z-cntdis");
        a7h.y8q(this.gS1x, "z-cntdis");
        a7h.y8q(this.Xm3x, "z-cntdis");
        a7h.y8q(this.HW9N, "z-cntdis");
        this.em0x.src = "";
        delete this.kd2x;
        delete this.gY1x
    };
    b8h.bT9K = function(d8f) {
        var g8c = h8b.ba8S(d8f, "action");
        if (a7h.bG9x(g8c, "z-dis")) return;
        switch (a7h.u8m(g8c, "action")) {
        case "close":
            this.W8O();
            break;
        case "prev":
            this.mW2x(this.cw9n - 1);
            break;
        case "next":
            this.mW2x(this.cw9n + 1);
            break;
        case "go":
            this.mW2x(a7h.u8m(g8c, "index"));
            break
        }
    };
    b8h.mW2x = function(r8j) {
        if (r8j <= 0) {
            a7h.w8o(this.WA3x, "z-cntdis")
        } else {
            a7h.y8q(this.WA3x, "z-cntdis")
        }
        if (r8j >= this.gY1x - 1) {
            a7h.w8o(this.Xm3x, "z-cntdis")
        } else {
            a7h.y8q(this.Xm3x, "z-cntdis")
        }
        if (r8j < 0 || r8j >= this.kd2x.length) return;
        var dl9c = this.kd2x[r8j];
        this.Xq3x.href = dl9c + "?param=9999y9999";
        if (this.rg4k && this.rg4k[r8j]) {
            a7h.w8o(this.nm3x, "f-hide");
            this.em0x.src = dl9c
        } else {
            this.em0x.src = "";
            a7h.y8q(this.nm3x, "f-hide");
            a7h.y8q(this.nm3x, "fail-loading")
        }
        this.cw9n = r8j
    };
    cz9q.imageView = function(oO3x, r8j) {
        x8p.Ia9R.B8t({
            parent: document.body,
            urls: oO3x,
            index: r8j
        })
    };
    b8h.cta4e = function(d8f) {
        h8b.bi8a(d8f);
        switch (d8f.keyCode) {
        case 37:
            this.mW2x(this.cw9n - 1);
            break;
        case 39:
            this.mW2x(this.cw9n + 1);
            break;
        case 27:
            this.W8O();
            break;
        case 38:
            this.SF2x.scrollTop -= 20;
            break;
        case 40:
            this.SF2x.scrollTop += 20;
            break
        }
    };
    b8h.ctd4h = function() {
        var bwW2x = a7h.ds0x("input");
        this.o8g.appendChild(bwW2x);
        bwW2x.focus();
        a7h.cV9M(bwW2x)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    cG9x = c8g("nej.p"),
    v8n = c8g("nej.j"),
    gL1x = c8g("nm.ut"),
    x8p = c8g("nm.w"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    b8h,
    L8D;
    n8f.bmA0x = NEJ.C();
    b8h = n8f.bmA0x.M8E(n8f.es0x);
    L8D = n8f.bmA0x.cx9o;
    b8h.cC9t = function(e8e) {
        e8e.title = "转发动态";
        this.cK9B(e8e)
    };
    b8h.bp8h = function(e8e) {
        if (e8e.onclose === undefined) e8e.onclose = function() {
            this.bu9l()
        }.f8d(this);
        this.bq8i(e8e);
        this.jw1x = e8e.rid;
        this.on3x = e8e.uid;
        this.cxn5s = e8e.text;
        this.gN1x.value = this.cxn5s;
        this.hX1x = x8p.Ul2x.B8t({
            parent: document.body,
            target: this.gN1x
        })
    };
    b8h.ci9Z = function() {
        this.cg9X = "m-wgt-forward"
    };
    b8h.bY9P = function() {
        this.cj9a();
        var bO9F = a7h.F8x(this.o8g, "j-flag");
        this.CW7P = bO9F[0];
        this.gN1x = bO9F[1];
        this.bmE0x = bO9F[2];
        this.cxr5w = bO9F[3];
        this.Um2x = bO9F[4];
        this.kv2x = bO9F[5];
        this.bKd5i = bO9F[6];
        this.cye6Y = bO9F[7];
        this.Cr7k = bO9F[8];
        h8b.s8k(this.gN1x, "input", this.ff0x.f8d(this));
        h8b.s8k(this.gN1x, "keyup", this.bph0x.f8d(this));
        h8b.s8k(this.gN1x, "click", this.mQ2x.f8d(this));
        h8b.s8k(this.Um2x, "click", this.bmH0x.f8d(this));
        h8b.s8k(this.cxr5w, "click", this.bmI0x.f8d(this));
        h8b.s8k(this.bKd5i, "click", this.Pj1x.f8d(this));
        h8b.s8k(this.cye6Y, "click", this.Jh9Y.f8d(this));
        l8d.kl2x()
    };
    b8h.bC9t = function() {
        this.bH9y();
        if (this.hS1x) {
            this.hS1x.W8O();
            delete this.hS1x
        }
        if (this.hX1x) {
            this.hX1x.W8O();
            delete this.hX1x
        }
    };
    b8h.ff0x = function(d8f) {
        cG9x.dC0x.browser == "ie" && cG9x.dC0x.version < "7.0" ? setTimeout(this.gE1x.f8d(this), 0) : this.gE1x()
    };
    b8h.bph0x = function(d8f) {
        this.mQ2x();
        this.ff0x()
    };
    b8h.gE1x = function() {
        var br8j = this.gN1x.value.trim().length;
        this.kv2x.innerHTML = !br8j ? "140": 140 - br8j;
        br8j > 140 ? a7h.w8o(this.kv2x, "s-fc6") : a7h.y8q(this.kv2x, "s-fc6");
        if (!br8j || br8j == 0) a7h.bd8V(this.CW7P, "display", "block");
        else a7h.bd8V(this.CW7P, "display", "none")
    };
    b8h.bmH0x = function(d8f) {
        h8b.bi8a(d8f); !! this.hS1x && this.hS1x.bu9l();
        this.hX1x.Ui2x();
        this.gE1x()
    };
    b8h.bmI0x = function(d8f) {
        h8b.bi8a(d8f);
        if (!this.hS1x) {
            this.hS1x = n8f.NN0x.B8t({
                parent: this.bmE0x
            });
            this.hS1x.s8k("onselect", this.BK7D.f8d(this))
        }
        this.hS1x.J8B()
    };
    b8h.BK7D = function(d8f) {
        var bt9k = "[" + d8f.text + "]";
        gL1x.NS0x(this.gN1x, this.pA3x, bt9k);
        this.gE1x();
        h8b.z8r(this.gN1x, "keyup")
    };
    b8h.mQ2x = function() {
        this.pA3x = gL1x.xc5h(this.gN1x)
    };
    b8h.Pj1x = function(d8f) {
        h8b.bi8a(d8f);
        if (this.ee0x()) return;
        if (this.gN1x.value.trim().length > 140) {
            this.ed0x("字数超过140个字符");
            return
        }
        l8d.lF2x(this.cys6m.f8d(this))
    };
    b8h.cys6m = function(cs9j) {
        var bgc6W = this.gN1x.value.trim();
        var io1x = window.GUser.userId;
        var D8v = this.jw1x;
        var Z8R = "/api/event/forward";
        var i8a = {
            forwards: bgc6W,
            id: this.jw1x,
            eventUserId: this.on3x,
            checkToken: cs9j || ""
        };
        i8a = k8c.cE9v(i8a);
        this.ee0x(!0);
        var gh0x = v8n.bm8e(Z8R, {
            sync: false,
            type: "json",
            data: i8a,
            method: "POST",
            onload: this.Eb8T.f8d(this),
            onerror: this.dY0x.f8d(this)
        })
    };
    b8h.Eb8T = function(m8e) {
        this.ee0x(!1);
        if (m8e.code != 200) {
            var bF9w = "转发失败";
            switch (m8e.code) {
            case 250:
                bF9w = m8e.message || m8e.msg || "分享异常";
                break;
            case 404:
                bF9w = m8e.message || "该动态已被删除";
                break;
            case 407:
                bF9w = "输入内容包含有关键字";
                break;
            case 408:
                bF9w = "转发太快了，过会再分享吧";
                break;
            case 315:
                bF9w = "根据对方设置，你没有该操作权限";
                break
            }
            this.ed0x(bF9w);
            return
        }
        gL1x.bGd4h(this.gN1x.value);
        this.bu9l();
        n8f.bb8T.J8B({
            tip: "转发成功！",
            autoclose: true
        });
        this.z8r("onforward", {
            id: this.jw1x,
            eventUserId: this.on3x
        })
    };
    b8h.dY0x = function(i8a) {
        this.ee0x(!1);
        this.ed0x(bF9w)
    };
    b8h.ee0x = function(dk9b) {
        return L8D.ee0x(this.bKd5i, dk9b, "转发", "转发中 ...")
    };
    b8h.ed0x = function(bF9w) {
        return L8D.ed0x(this.Cr7k, bF9w)
    };
    b8h.Jh9Y = function(d8f) {
        h8b.cu9l(d8f);
        this.bu9l()
    };
    b8h.nn3x = function() {
        this.gN1x.focus();
        if (cG9x.dC0x.browser == "ie" && parseInt(cG9x.dC0x.version) < 10) return;
        gL1x.bbT5Y(this.gN1x, {
            start: 0,
            end: 0
        });
        this.mQ2x()
    };
    b8h.bu9l = function() {
        L8D.bu9l.call(this);
        if (this.hS1x) {
            this.hS1x.W8O();
            delete this.hS1x
        }
        if (this.hX1x) {
            this.hX1x.W8O();
            delete this.hX1x
        }
    };
    b8h.J8B = function(e8e) {
        L8D.J8B.call(this);
        this.ed0x();
        this.ee0x(!1);
        this.gE1x();
        this.nn3x();
        this.pA3x = gL1x.xc5h(this.gN1x)
    };
    l8d.bmL0x = function(e8e) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n8f.pT3x.J8B({
                title: "登录"
            });
            return
        }
        if (e8e.title === undefined) e8e.title = "转发动态";
        n8f.bmA0x.J8B(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    G8y = c8g("nej.ut"),
    v8n = c8g("nej.j"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    gL1x = c8g("nm.ut"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.bfx6r = NEJ.C();
    b8h = n8f.bfx6r.M8E(n8f.es0x);
    L8D = n8f.bfx6r.cx9o;
    b8h.cC9t = function() {
        this.cK9B()
    };
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        this.eJ0x = j8b[0];
        this.bnE0x = j8b[1];
        this.cS9J = j8b[2];
        this.bNR6L = j8b[3];
        this.ec0x = j8b[4];
        h8b.s8k(this.o8g, "click", this.eM0x.f8d(this));
        h8b.s8k(this.eJ0x, "input", this.ff0x.f8d(this));
        h8b.s8k(this.eJ0x, "keyup", this.xu6o.f8d(this))
    };
    b8h.ci9Z = function() {
        this.cg9X = "m-sharesingle-layer"
    };
    b8h.bp8h = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        e8e.title = e8e.title || "分享";
        e8e.draggable = !0;
        e8e.mask = !0;
        e8e.clazz = "m-layer m-layer-w2";
        this.bq8i(e8e);
        this.eJ0x.value = e8e.mesg || "";
        this.bh8Z = {
            id: e8e.rid,
            type: e8e.type,
            picUrl: e8e.purl,
            snsType: e8e.snsType,
            resourceUrl: e8e.rurl
        };
        if (!this.bh8Z.resourceUrl) delete this.bh8Z.resourceUrl;
        this.Hu9l();
        this.ed0x(null);
        this.ee0x(false)
    };
    b8h.eM0x = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:action"),
        X8P = a7h.u8m(g8c, "action");
        h8b.cu9l(d8f);
        switch (X8P) {
        case "txt":
            this.mQ2x();
            break;
        case "emt":
            h8b.uQ5V(d8f); !! this.hX1x && this.hX1x.KX0x();
            if (!this.hS1x) {
                this.hS1x = n8f.NN0x.B8t({
                    parent: this.bnE0x
                });
                this.hS1x.s8k("onselect", this.BK7D.f8d(this))
            }
            this.hS1x.J8B();
            break;
        case "ok":
            this.ed0x(null);
            if (this.pI3x) return;
            if (this.eJ0x.value.trim().length > 140) {
                this.ed0x("字数超过140个字符");
                return
            }
            this.ee0x(true);
            this.bh8Z.msg = this.eJ0x.value;
            if (!this.bh8Z.resourceUrl) {
                delete this.bh8Z.resourceUrl
            }
            v8n.bm8e("/api/sns/share/resource", {
                type: "json",
                method: "post",
                data: k8c.cE9v(this.bh8Z),
                onload: this.wR5W.f8d(this),
                onerror: this.wR5W.f8d(this)
            });
            break;
        case "cc":
            this.bu9l();
            break
        }
    };
    b8h.BK7D = function(d8f) {
        var bt9k = "[" + d8f.text + "]";
        gL1x.NS0x(this.eJ0x, this.pA3x, bt9k);
        this.Hu9l()
    };
    b8h.ff0x = function() {
        this.Hu9l();
        this.mQ2x()
    };
    b8h.xu6o = function() {
        this.Hu9l();
        this.mQ2x()
    };
    b8h.Hu9l = function() {
        var br8j = this.eJ0x.value.trim().length;
        this.cS9J.innerText = 140 - br8j;
        br8j > 140 ? a7h.fx0x(this.cS9J, "s-fc4", "s-fc6") : a7h.fx0x(this.cS9J, "s-fc6", "s-fc4")
    };
    b8h.mQ2x = function() {
        this.pA3x = gL1x.xc5h(this.eJ0x)
    };
    b8h.wR5W = function(d8f) {
        var jQ1x = {
            407 : "输入内容包含有关键字",
            404 : "分享的资源不存在",
            408 : "分享太快了，过会再分享吧"
        };
        if (d8f.code == 200) {
            this.z8r("onsuccess", d8f);
            if (!d8f.stopped) {
                n8f.bb8T.J8B({
                    tip: "分享成功！",
                    autoclose: true
                })
            }
            this.bu9l()
        } else {
            this.ed0x(jQ1x[d8f.code] || "分享失败")
        }
        this.ee0x(false)
    };
    b8h.ed0x = function(bNH6B) {
        if (bNH6B) {
            this.ec0x.innerHTML = '<i class="u-icn u-icn-25"></i>' + bNH6B;
            a7h.y8q(this.ec0x, "f-hide")
        } else {
            a7h.w8o(this.ec0x, "f-hide")
        }
    };
    b8h.ee0x = function(bfC6w) {
        this.pI3x = bfC6w;
        if (bfC6w) {
            this.bNR6L.innerHTML = "<i>分享中...</i>"
        } else {
            this.bNR6L.innerHTML = "<i>分享</i>"
        }
    };
    b8h.J8B = function() {
        L8D.J8B.call(this);
        var do9f = this.eJ0x.value.length;
        gL1x.bbT5Y(this.eJ0x, {
            start: do9f,
            end: do9f,
            text: ""
        });
        this.mQ2x()
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    bs8k = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    G8y = c8g("nej.ut"),
    v8n = c8g("nej.j"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    cz9q = c8g("api"),
    n8f = c8g("nm.l"),
    b8h,
    L8D;
    n8f.bMH6B = NEJ.C();
    b8h = n8f.bMH6B.M8E(n8f.es0x);
    b8h.bY9P = function() {
        this.cj9a();
        var j8b = a7h.F8x(this.o8g, "j-flag");
        h8b.s8k(this.o8g, "click", this.bT9K.f8d(this))
    };
    b8h.ci9Z = function() {
        this.cg9X = "m-simple-share-layer"
    };
    b8h.bp8h = function(e8e) {
        e8e.clazz = "m-layer-w6";
        if (!e8e.shareType) e8e.parent = e8e.parent || document.body;
        e8e.title = e8e.title || "分享";
        e8e.draggable = !0;
        e8e.mask = e8e.mask || true;
        this.bq8i(e8e);
        this.bh8Z = {
            id: e8e.id || 0,
            type: e8e.type || "activity",
            picUrl: e8e.picUrl,
            msg: e8e.text,
            resourceUrl: e8e.resourceUrl,
            summary: e8e.summary
        };
        this.bZ9Q([[window, "snsbind", this.Vg2x.f8d(this)], [window, "snsbinderror", this.bu9l.f8d(this)]]);
        this.wJ5O = {
            rid: this.bh8Z.id,
            rurl: this.bh8Z.resourceUrl,
            purl: this.bh8Z.picUrl,
            mesg: this.bh8Z.msg,
            type: this.bh8Z.type,
            onsuccess: e8e.onsuccess
        };
        if (e8e.shareType) {
            this.bMI6C(e8e.shareType)
        }
    };
    b8h.bT9K = function(d8f) {
        var g8c = h8b.ba8S(d8f, "d:type"),
        t8l = a7h.u8m(g8c, "type");
        this.bMI6C(t8l)
    };
    b8h.bMI6C = function(t8l) {
        switch (t8l) {
        case "xlwb":
        case "rr":
        case "db":
            var zj6d = {
                xlwb: 2,
                rr: 4,
                db: 3
            },
            Xy3x = zj6d[t8l],
            us5x = localCache.biV9M("user.bindings") || [],
            r8j = k8c.du0x(us5x,
            function(p8h) {
                return p8h.type == Xy3x && !p8h.expired
            });
            if (r8j >= 0) {
                this.Bm7f(Xy3x)
            } else {
                var ib1x = {
                    snsType: Xy3x,
                    callbackType: "Binding",
                    clientType: "web2",
                    forcelogin: true,
                    csrf_token: v8n.gW1x("__csrf")
                };
                top.window.open("/api/sns/authorize?" + k8c.cE9v(ib1x))
            }
            break;
        case "wx":
        case "yx":
            var ib1x = {
                resourceUrl: this.bh8Z.resourceUrl,
                type: t8l
            };
            top.open("/share/QRCode?" + k8c.cE9v(ib1x));
            this.bu9l();
            break;
        case "qzone":
            var cq9h = {
                url: this.bh8Z.resourceUrl,
                title: this.bh8Z.msg || "",
                pics: this.bh8Z.picUrl,
                summary: this.bh8Z.summary
            };
            top.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + k8c.cE9v(cq9h));
            this.bu9l();
            break;
        case "lofter":
            var cq9h = {
                from: "cloudmusic",
                image: this.bh8Z.picUrl,
                source: "网易云音乐",
                sourceurl: this.bh8Z.resourceUrl,
                content: this.bh8Z.msg
            };
            top.open("http://www.lofter.com/sharephoto/?" + k8c.cE9v(cq9h));
            this.bu9l();
            break
        }
    };
    b8h.Vg2x = function(d8f) {
        this.Bm7f(d8f.result.type)
    };
    b8h.Bm7f = function(t8l) {
        this.bu9l();
        if (this.BW7P) {
            this.BW7P.W8O();
            delete this.BW7P
        }
        this.wJ5O.snsType = t8l;
        this.BW7P = n8f.bfx6r.B8t(this.wJ5O);
        this.BW7P.J8B()
    };
    var cN9E = null;
    cz9q.simpleShare = function(e8e) {
        if (cN9E) cN9E.W8O();
        cN9E = n8f.bMH6B.B8t(e8e).J8B()
    }
})(); (function() {
    var c8g = NEJ.P,
    be8W = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    v8n = c8g("nej.j"),
    G8y = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    E8w = c8g("nm.m"),
    n8f = c8g("nm.l"),
    N8F = c8g("nm.m.f"),
    cz9q = c8g("api"),
    Fu8m = /#(.*?)$/,
    b8h,
    L8D,
    Lk0x = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    };
    N8F.bMK6E = NEJ.C();
    b8h = N8F.bMK6E.M8E(G8y.dv0x);
    b8h.bK9B = function() {
        this.bS9J();
        window.onHashChange = this.bgh6b.f8d(this);
        window.log = this.hL1x.f8d(this);
        window.share = this.Bm7f.f8d(this);
        window.shareForStore = this.csX4b.f8d(this);
        window.subscribe = this.bjT9K.f8d(this);
        window.onIframeClick = this.csV4Z.f8d(this);
        h8b.s8k(window, "playchange", this.hU1x.f8d(this));
        h8b.s8k(window, "playstatechange", this.csO4S.f8d(this));
        this.mh2x = E8w.PZ1x.fW0x();
        this.mh2x.s8k("loginsuccess", this.csM4Q.f8d(this));
        this.mh2x.s8k("logoutbefore", this.bxa2x.f8d(this));
        this.mh2x.s8k("logoutsuccess", this.bxb2x.f8d(this));
        this.bkS9J();
        this.by9p = N8F.TT2x.B8t();
        this.by9p.z8r("onshow", {});
        v8n.bm8e("/api/login/token/refresh", {
            type: "json",
            method: "post"
        });
        this.bgh6b(l8d.NM0x());
        this.HT9K = E8w.Ze4i.B8t();
        cz9q.refreshUserInfo = this.HT9K.MZ0x.f8d(this.HT9K);
        this.csJ4N();
        cz9q.cbDonate = this.csI4M;
        var referrer = document.referrer;
        if (referrer.indexOf(location.hostname) === -1) {
            var conf = {
                is_organic: referrer ? 0 : 1,
                url: location.href
            };
            if (!conf.is_organic) {
                conf.source = referrer
            }
            this.hL1x("activeweb", conf)
        }
    };
    b8h.bkS9J = function() {
        this.kX2x = q8i.ij1x.B8t()
    };
    b8h.bgh6b = function(cZ9Q) {
        var d8f = location.parse(cZ9Q);
        this.sa4e(d8f)
    };
    b8h.sa4e = function(d8f, t8l) {
        var fb0x = a7h.A8s("g_iframe"),
        kE2x = d8f.path,
        bx9o = d8f.query,
        kh2x = fb0x.contentWindow.location;
        this.xb5g = fb0x;
        if (/^\/(mv|video)/.test(kE2x)) {
            if (this.by9p) this.by9p.bu9l();
            this.lZ2x = document.title
        } else {
            if (this.by9p) this.by9p.J8B();
            document.title = this.lZ2x || l8d.rM4Q()
        }
        if (bx9o.play == "true" && /^\/(m\/)?song/.test(kE2x)) {
            if (this.by9p) this.by9p.YF3x(18, bx9o.id, true)
        }
        if (/^\/my\/m\/music\/playlist/.test(kE2x)) {
            var bsF1x = l8d.bit9k();
            if (!bsF1x && !!bx9o.id) return location.dispatch2("/playlist?id=" + bx9o.id)
        }
        if (/^\/login\b/.test(kE2x) && GUser && GUser.userId) {
            var ea0x = /targetUrl=(.+?)(&|$)/.exec(d8f.href),
            tu4y = ea0x ? decodeURIComponent(ea0x[1]) : "/discover",
            dr9i = /163\.com\/m\/at\//i;
            csG4K = /(igame|music|iplay).163.com/g;
            if (!csG4K.test(tu4y)) {
                tu4y = ""
            }
            if (dr9i.test(tu4y)) {
                window.location.href = tu4y
            } else {
                tu4y = tu4y.replace("/m/", "/#/")
            }
            tu4y = tu4y.replace(/^\s+|\s+$/g, "");
            var dr9i = /^https?:\/\//i,
            Ju9l = /^\/\//,
            bpe0x = /^\//;
            if (!dr9i.test(tu4y) && !Ju9l.test(tu4y) && !bpe0x.test(tu4y)) {
                tu4y = "/discover"
            }
            return location.href = encodeURI(tu4y)
        }
        if (t8l !== undefined) {
            if (bx9o && bx9o.targetUrl) {
                var oK3x = location.parse(bx9o.targetUrl);
                if (oK3x.path.indexOf("/store/") == 0 || oK3x.path.indexOf("/nmusician/") == 0) {
                    return location.href = d8f.href
                }
            }
            return GDispatcher.refreshIFrame(d8f.href)
        }
    };
    b8h.csM4Q = function() {
        var cZ9Q = Fu8m.test(location.href) ? RegExp.$1: "",
        d8f = location.parse(cZ9Q),
        LH0x = this.HT9K;
        LH0x.MZ0x();
        v8n.bm8e("/api/topic/user/info", {
            type: "json",
            onload: function(bP9G) {
                top.GUserAcc = NEJ.X(top.GUserAcc || {},
                {
                    topic: bP9G.status
                });
                LH0x.MZ0x()
            }
        });
        v8n.bm8e("/api/reward/user/showicon", {
            type: "json",
            onload: function(bP9G) {
                top.GUserAcc = NEJ.X(top.GUserAcc || {},
                {
                    reward: bP9G.showIcon
                });
                LH0x.MZ0x()
            }
        });
        if (!cz9q.sharePermission) {
            cz9q.sharePermission = Lk0x
        }
        v8n.bm8e("/api/event/user/permission", {
            type: "json",
            onload: function(d8f) {
                if (d8f.code == 200) {
                    cz9q.sharePermission = NEJ.EX(Lk0x, d8f)
                }
            }
        });
        this.sa4e(d8f, "urlchange")
    };
    b8h.bxa2x = function() {
        n8f.pB3x.bu9l();
        this.HT9K.MZ0x()
    };
    b8h.bxb2x = function() {
        if (!location.hash || location.hash == "#") {
            var cZ9Q = Fu8m.test(location.href) ? RegExp.$1: "",
            d8f = location.parse(cZ9Q);
            this.sa4e(d8f, "urlchange");
            return
        }
        location.hash = "#"
    };
    b8h.hU1x = function(d8f) {
        if (this.xb5g) {
            var bM9D = this.xb5g.contentWindow;
            try {
                if (bM9D.nej && bM9D.nej.v) {
                    bM9D.nej.v.z8r ? bM9D.nej.v.z8r(bM9D, "playchange", d8f) : bM9D.nej.v.dispatchEventalias ? bM9D.nej.v.dispatchEventalias(bM9D, "playchange", d8f) : ""
                }
            } catch(e) {}
        }
    };
    b8h.csO4S = function(d8f) {
        if (!this.xb5g) return;
        var bM9D = this.xb5g.contentWindow;
        try {
            if (bM9D.nej && bM9D.nej.v) {
                bM9D.nej.v.z8r ? bM9D.nej.v.z8r(bM9D, "playstatechange", d8f) : bM9D.nej.v.dispatchEventalias ? bM9D.nej.v.dispatchEventalias(bM9D, "playstatechange", d8f) : ""
            }
        } catch(e) {}
    };
    b8h.hL1x = function(X8P, bk8c) {
        if (X8P.indexOf("new|") == 0) {
            return this.kX2x.fa0x(X8P.slice(4), bk8c)
        }
        switch (X8P) {
        case "play":
            this.kX2x.ey0x(bk8c);
            break;
        case "search":
            this.kX2x.bLF6z(bk8c);
            break;
        default:
            this.kX2x.fa0x(X8P, bk8c)
        }
    };
    b8h.Bm7f = function() {
        if (this.xb5g.contentWindow.share) {
            this.xb5g.contentWindow.share.apply(this.xb5g.contentWindow, arguments)
        }
    };
    b8h.csX4b = function() {
        var bnb0x = function(d8f) {
            h8b.z8r(window, "share", d8f)
        };
        return function(dc9T, t8l, Bq7j, Y8Q, Lb0x, KB0x) {
            l8d.lE2x({
                rid: dc9T,
                type: t8l,
                purl: Bq7j,
                name: Y8Q,
                author: Lb0x,
                authors: KB0x,
                onshare: bnb0x.f8d(this)
            })
        }
    } ();
    b8h.bjT9K = function(bR9I, csF4J) {
        var bM9D = this.xb5g.contentWindow;
        if (bM9D.nm && bM9D.nm.x) {
            if (!bM9D.nm.x.oz3x) {
                bM9D = top.window
            }
            if (csF4J && bM9D.nm.x.bPJ7C) {
                bM9D.nm.x.bPJ7C({
                    data: bR9I.program
                })
            } else if (bM9D.nm.x.oz3x) {
                var j8b = k8c.el0x(bR9I) ? bR9I: [bR9I];
                bM9D.nm.x.oz3x({
                    tracks: j8b
                })
            }
        }
    };
    b8h.csV4Z = function(d8f) {
        h8b.z8r(window, "iframeclick")
    };
    b8h.csJ4N = function() {
        v8n.bm8e("/api/copyright/pay_fee_message/config", {
            type: "json",
            onload: function(d8f) {
                if (d8f.code == 200) {
                    cz9q.feeMessage = d8f.config
                }
            }
        });
        cz9q.sharePermission = Lk0x;
        v8n.bm8e("/api/event/user/permission", {
            type: "json",
            onload: function(d8f) {
                if (d8f.code == 200) {
                    cz9q.sharePermission = NEJ.EX(Lk0x, d8f)
                }
            }
        })
    };
    b8h.csI4M = function() {
        var cA9r = {
            jst: "m-wgt-redeem-tip",
            clazz: "n-redeem"
        };
        cA9r.data = {
            title: "成功送出",
            sub: "请你的好友去查看私信",
            ok: "知道了",
            type: "success"
        };
        cA9r.onaction = function() {
            location.dispatch2("/member")
        };
        l8d.kI2x(cA9r)
    };
    window.doMsgToServiceAction = b8h.cTU0x = function() {
        var bfK6E = null;
        return function(X8P) {
            if (X8P == "kf") {
                bfK6E && bfK6E.W8O();
                bfK6E = n8f.wo5t.B8t({
                    title: "发新私信",
                    draggable: true,
                    clazz: "m-layer m-layer-w2",
                    receiver: {
                        userId: l8d.bYN0x() ? 117863002 : 253335632,
                        nickname: l8d.bYN0x() ? "测试库客服": "云音乐客服"
                    }
                });
                bfK6E.J8B()
            }
        }
    } ();
    G8y.fV0x.B8t({
        element: window,
        event: ["playchange", "iframeclick", "playstatechange"]
    });
    a7h.da9R("template-box");
    new N8F.bMK6E
})()