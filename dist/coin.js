function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*!
 * Chart.js v3.8.0
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ function $43add8e050c146e1$export$9d0e2d13d04f7070(pixelSize, fontStyle, fontFamily) {
    return fontStyle + " " + pixelSize + "px " + fontFamily;
}
const $43add8e050c146e1$export$43caf9889c228507 = function() {
    if (typeof window === "undefined") return function(callback1) {
        return callback1();
    };
    return window.requestAnimationFrame;
}();
function $43add8e050c146e1$export$b4171a6734a65d42(fn, thisArg, updateFn) {
    const updateArgs = updateFn || ((args)=>Array.prototype.slice.call(args));
    let ticking = false;
    let args1 = [];
    return function(...rest) {
        args1 = updateArgs(rest);
        if (!ticking) {
            ticking = true;
            $43add8e050c146e1$export$43caf9889c228507.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, args1);
            });
        }
    };
}
function $43add8e050c146e1$export$2219238a014317b0(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
const $43add8e050c146e1$export$34aec0b863436764 = (align)=>align === "start" ? "left" : align === "end" ? "right" : "center";
const $43add8e050c146e1$export$3c2fa207a37baaea = (align, start, end)=>align === "start" ? start : align === "end" ? end : (start + end) / 2;
const $43add8e050c146e1$export$91c6e00c14e7e6fd = (align, left, right, rtl)=>{
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
};
function $43add8e050c146e1$export$890c4ad488842ce7() {}
const $43add8e050c146e1$export$555508cbc6add439 = function() {
    let id = 0;
    return function() {
        return id++;
    };
}();
function $43add8e050c146e1$export$342063e11d6c3cad(value) {
    return value === null || typeof value === "undefined";
}
function $43add8e050c146e1$export$8b22cf2602fb60ce(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") return true;
    return false;
}
function $43add8e050c146e1$export$23f2a1d2818174ef(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
}
const $43add8e050c146e1$export$39b482c5e57630a8 = (value)=>(typeof value === "number" || value instanceof Number) && isFinite(+value);
function $43add8e050c146e1$export$c4ce752e73470fba(value, defaultValue) {
    return $43add8e050c146e1$export$39b482c5e57630a8(value) ? value : defaultValue;
}
function $43add8e050c146e1$export$90a7f3efeed30595(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
}
const $43add8e050c146e1$export$953cecd6e717a553 = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : value / dimension;
const $43add8e050c146e1$export$7ccc53e8f1e7dfc5 = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
function $43add8e050c146e1$export$3722cfe417b6ed86(fn, args, thisArg) {
    if (fn && typeof fn.call === "function") return fn.apply(thisArg, args);
}
function $43add8e050c146e1$export$a9c23c6ac3fc3eca(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if ($43add8e050c146e1$export$8b22cf2602fb60ce(loopable)) {
        len = loopable.length;
        if (reverse) for(i = len - 1; i >= 0; i--)fn.call(thisArg, loopable[i], i);
        else for(i = 0; i < len; i++)fn.call(thisArg, loopable[i], i);
    } else if ($43add8e050c146e1$export$23f2a1d2818174ef(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++)fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
}
function $43add8e050c146e1$export$ee7c8ad385a60b7b(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
function $43add8e050c146e1$export$c03999cb2f36933f(source) {
    if ($43add8e050c146e1$export$8b22cf2602fb60ce(source)) return source.map($43add8e050c146e1$export$c03999cb2f36933f);
    if ($43add8e050c146e1$export$23f2a1d2818174ef(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k)target[keys[k]] = $43add8e050c146e1$export$c03999cb2f36933f(source[keys[k]]);
        return target;
    }
    return source;
}
function $43add8e050c146e1$var$isValidKey(key) {
    return [
        "__proto__",
        "prototype",
        "constructor"
    ].indexOf(key) === -1;
}
function $43add8e050c146e1$export$2ed0fc6709e59212(key, target, source, options) {
    if (!$43add8e050c146e1$var$isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if ($43add8e050c146e1$export$23f2a1d2818174ef(tval) && $43add8e050c146e1$export$23f2a1d2818174ef(sval)) $43add8e050c146e1$export$6559d589eb85fbb6(tval, sval, options);
    else target[key] = $43add8e050c146e1$export$c03999cb2f36933f(sval);
}
function $43add8e050c146e1$export$6559d589eb85fbb6(target, source, options) {
    const sources = $43add8e050c146e1$export$8b22cf2602fb60ce(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!$43add8e050c146e1$export$23f2a1d2818174ef(target)) return target;
    options = options || {};
    const merger = options.merger || $43add8e050c146e1$export$2ed0fc6709e59212;
    for(let i = 0; i < ilen; ++i){
        source = sources[i];
        if (!$43add8e050c146e1$export$23f2a1d2818174ef(source)) continue;
        const keys = Object.keys(source);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, source, options);
    }
    return target;
}
function $43add8e050c146e1$export$7910e0436ed8d1de(target, source) {
    return $43add8e050c146e1$export$6559d589eb85fbb6(target, source, {
        merger: $43add8e050c146e1$export$f96d196f7728bb5
    });
}
function $43add8e050c146e1$export$f96d196f7728bb5(key, target, source) {
    if (!$43add8e050c146e1$var$isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if ($43add8e050c146e1$export$23f2a1d2818174ef(tval) && $43add8e050c146e1$export$23f2a1d2818174ef(sval)) $43add8e050c146e1$export$7910e0436ed8d1de(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = $43add8e050c146e1$export$c03999cb2f36933f(sval);
}
function $43add8e050c146e1$export$738ab4df8bf92ae9(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
const $43add8e050c146e1$var$emptyString = "";
const $43add8e050c146e1$var$dot = ".";
function $43add8e050c146e1$var$indexOfDotOrLength(key, start) {
    const idx = key.indexOf($43add8e050c146e1$var$dot, start);
    return idx === -1 ? key.length : idx;
}
function $43add8e050c146e1$export$2d1720544b23b823(obj, key) {
    if (key === $43add8e050c146e1$var$emptyString) return obj;
    let pos = 0;
    let idx = $43add8e050c146e1$var$indexOfDotOrLength(key, pos);
    while(obj && idx > pos){
        obj = obj[key.slice(pos, idx)];
        pos = idx + 1;
        idx = $43add8e050c146e1$var$indexOfDotOrLength(key, pos);
    }
    return obj;
}
function $43add8e050c146e1$export$efca4cbe5dd06740(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const $43add8e050c146e1$export$35e795649ee09318 = (value)=>typeof value !== "undefined";
const $43add8e050c146e1$export$2e2af4578d910ddf = (value)=>typeof value === "function";
const $43add8e050c146e1$export$c9170ad7d4cd7e57 = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
function $43add8e050c146e1$export$995eb9fca571757(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const $43add8e050c146e1$export$56c0d5a1e737357d = Math.PI;
const $43add8e050c146e1$export$971d5caa766a69d7 = 2 * $43add8e050c146e1$export$56c0d5a1e737357d;
const $43add8e050c146e1$export$e171bab687b50e0 = $43add8e050c146e1$export$971d5caa766a69d7 + $43add8e050c146e1$export$56c0d5a1e737357d;
const $43add8e050c146e1$export$527e9aa3390079e9 = Number.POSITIVE_INFINITY;
const $43add8e050c146e1$export$a17c37559e1db147 = $43add8e050c146e1$export$56c0d5a1e737357d / 180;
const $43add8e050c146e1$export$7f8ddf7c7c20b3cd = $43add8e050c146e1$export$56c0d5a1e737357d / 2;
const $43add8e050c146e1$export$fef3dfd9bad05307 = $43add8e050c146e1$export$56c0d5a1e737357d / 4;
const $43add8e050c146e1$export$8c78c7c36408ea29 = $43add8e050c146e1$export$56c0d5a1e737357d * 2 / 3;
const $43add8e050c146e1$export$3a1a48c8f6ef640e = Math.log10;
const $43add8e050c146e1$export$2408f22a0fab9ae5 = Math.sign;
function $43add8e050c146e1$export$cf2f7c5792f80b46(range) {
    const roundedRange = Math.round(range);
    range = $43add8e050c146e1$export$a33b77bbdbb8366c(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor($43add8e050c146e1$export$3a1a48c8f6ef640e(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
function $43add8e050c146e1$export$a07804094c3ecf2d(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++)if (value % i === 0) {
        result.push(i);
        result.push(value / i);
    }
    if (sqrt === (sqrt | 0)) result.push(sqrt);
    result.sort((a, b)=>a - b).pop();
    return result;
}
function $43add8e050c146e1$export$9e5f44173e64f162(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function $43add8e050c146e1$export$a33b77bbdbb8366c(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
function $43add8e050c146e1$export$53a70dd1ebbae346(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
function $43add8e050c146e1$export$158acd800e1ef08b(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function $43add8e050c146e1$export$625550452a3fa3ec(degrees) {
    return degrees * ($43add8e050c146e1$export$56c0d5a1e737357d / 180);
}
function $43add8e050c146e1$export$25ce5a424b770e84(radians) {
    return radians * (180 / $43add8e050c146e1$export$56c0d5a1e737357d);
}
function $43add8e050c146e1$export$b9a6b53f9be3734(x) {
    if (!$43add8e050c146e1$export$39b482c5e57630a8(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
function $43add8e050c146e1$export$e7094788287c5e9b(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * $43add8e050c146e1$export$56c0d5a1e737357d) angle += $43add8e050c146e1$export$971d5caa766a69d7;
    return {
        angle: angle,
        distance: radialDistanceFromCenter
    };
}
function $43add8e050c146e1$export$24baa2b76016ce0e(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
function $43add8e050c146e1$export$d29e374196577086(a, b) {
    return (a - b + $43add8e050c146e1$export$e171bab687b50e0) % $43add8e050c146e1$export$971d5caa766a69d7 - $43add8e050c146e1$export$56c0d5a1e737357d;
}
function $43add8e050c146e1$export$9fa96a7d116ea3ce(a) {
    return (a % $43add8e050c146e1$export$971d5caa766a69d7 + $43add8e050c146e1$export$971d5caa766a69d7) % $43add8e050c146e1$export$971d5caa766a69d7;
}
function $43add8e050c146e1$export$ffb5f4729a158638(angle, start, end, sameAngleIsFullCircle) {
    const a = $43add8e050c146e1$export$9fa96a7d116ea3ce(angle);
    const s = $43add8e050c146e1$export$9fa96a7d116ea3ce(start);
    const e = $43add8e050c146e1$export$9fa96a7d116ea3ce(end);
    const angleToStart = $43add8e050c146e1$export$9fa96a7d116ea3ce(s - a);
    const angleToEnd = $43add8e050c146e1$export$9fa96a7d116ea3ce(e - a);
    const startToAngle = $43add8e050c146e1$export$9fa96a7d116ea3ce(a - s);
    const endToAngle = $43add8e050c146e1$export$9fa96a7d116ea3ce(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
function $43add8e050c146e1$export$efccba1c4a2ef57b(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function $43add8e050c146e1$export$e7c866399fa523f5(value) {
    return $43add8e050c146e1$export$efccba1c4a2ef57b(value, -32768, 32767);
}
function $43add8e050c146e1$export$f38c853ae54ed474(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
const $43add8e050c146e1$var$atEdge = (t)=>t === 0 || t === 1;
const $43add8e050c146e1$var$elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * $43add8e050c146e1$export$971d5caa766a69d7 / p));
const $43add8e050c146e1$var$elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * $43add8e050c146e1$export$971d5caa766a69d7 / p) + 1;
const $43add8e050c146e1$export$f1e1789686576879 = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * $43add8e050c146e1$export$7f8ddf7c7c20b3cd) + 1,
    easeOutSine: (t)=>Math.sin(t * $43add8e050c146e1$export$7f8ddf7c7c20b3cd),
    easeInOutSine: (t)=>-0.5 * (Math.cos($43add8e050c146e1$export$56c0d5a1e737357d * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>$43add8e050c146e1$var$atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>$43add8e050c146e1$var$atEdge(t) ? t : $43add8e050c146e1$var$elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>$43add8e050c146e1$var$atEdge(t) ? t : $43add8e050c146e1$var$elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return $43add8e050c146e1$var$atEdge(t) ? t : t < 0.5 ? 0.5 * $43add8e050c146e1$var$elasticIn(t * 2, s, p) : 0.5 + 0.5 * $43add8e050c146e1$var$elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - $43add8e050c146e1$export$f1e1789686576879.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) return m * t * t;
        if (t < 2 / d) return m * (t -= 1.5 / d) * t + 0.75;
        if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + 0.9375;
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? $43add8e050c146e1$export$f1e1789686576879.easeInBounce(t * 2) * 0.5 : $43add8e050c146e1$export$f1e1789686576879.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function $43add8e050c146e1$var$round(v) {
    return v + 0.5 | 0;
}
const $43add8e050c146e1$var$lim = (v, l, h)=>Math.max(Math.min(v, h), l);
function $43add8e050c146e1$var$p2b(v) {
    return $43add8e050c146e1$var$lim($43add8e050c146e1$var$round(v * 2.55), 0, 255);
}
function $43add8e050c146e1$var$n2b(v) {
    return $43add8e050c146e1$var$lim($43add8e050c146e1$var$round(v * 255), 0, 255);
}
function $43add8e050c146e1$var$b2n(v) {
    return $43add8e050c146e1$var$lim($43add8e050c146e1$var$round(v / 2.55) / 100, 0, 1);
}
function $43add8e050c146e1$var$n2p(v) {
    return $43add8e050c146e1$var$lim($43add8e050c146e1$var$round(v * 100), 0, 100);
}
const $43add8e050c146e1$var$map$1 = {
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
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const $43add8e050c146e1$var$hex = [
    ..."0123456789ABCDEF"
];
const $43add8e050c146e1$var$h1 = (b)=>$43add8e050c146e1$var$hex[b & 0xF];
const $43add8e050c146e1$var$h2 = (b)=>$43add8e050c146e1$var$hex[(b & 0xF0) >> 4] + $43add8e050c146e1$var$hex[b & 0xF];
const $43add8e050c146e1$var$eq = (b)=>(b & 0xF0) >> 4 === (b & 0xF);
const $43add8e050c146e1$var$isShort = (v)=>$43add8e050c146e1$var$eq(v.r) && $43add8e050c146e1$var$eq(v.g) && $43add8e050c146e1$var$eq(v.b) && $43add8e050c146e1$var$eq(v.a);
function $43add8e050c146e1$var$hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
        if (len === 4 || len === 5) ret = {
            r: 255 & $43add8e050c146e1$var$map$1[str[1]] * 17,
            g: 255 & $43add8e050c146e1$var$map$1[str[2]] * 17,
            b: 255 & $43add8e050c146e1$var$map$1[str[3]] * 17,
            a: len === 5 ? $43add8e050c146e1$var$map$1[str[4]] * 17 : 255
        };
        else if (len === 7 || len === 9) ret = {
            r: $43add8e050c146e1$var$map$1[str[1]] << 4 | $43add8e050c146e1$var$map$1[str[2]],
            g: $43add8e050c146e1$var$map$1[str[3]] << 4 | $43add8e050c146e1$var$map$1[str[4]],
            b: $43add8e050c146e1$var$map$1[str[5]] << 4 | $43add8e050c146e1$var$map$1[str[6]],
            a: len === 9 ? $43add8e050c146e1$var$map$1[str[7]] << 4 | $43add8e050c146e1$var$map$1[str[8]] : 255
        };
    }
    return ret;
}
const $43add8e050c146e1$var$alpha = (a, f)=>a < 255 ? f(a) : "";
function $43add8e050c146e1$var$hexString(v) {
    var f = $43add8e050c146e1$var$isShort(v) ? $43add8e050c146e1$var$h1 : $43add8e050c146e1$var$h2;
    return v ? "#" + f(v.r) + f(v.g) + f(v.b) + $43add8e050c146e1$var$alpha(v.a, f) : undefined;
}
const $43add8e050c146e1$var$HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function $43add8e050c146e1$var$hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [
        f(0),
        f(8),
        f(4)
    ];
}
function $43add8e050c146e1$var$hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6)=>v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [
        f(5),
        f(3),
        f(1)
    ];
}
function $43add8e050c146e1$var$hwb2rgbn(h, w, b) {
    const rgb = $43add8e050c146e1$var$hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
        i = 1 / (w + b);
        w *= i;
        b *= i;
    }
    for(i = 0; i < 3; i++){
        rgb[i] *= 1 - w - b;
        rgb[i] += w;
    }
    return rgb;
}
function $43add8e050c146e1$var$hueValue(r, g, b, d, max) {
    if (r === max) return (g - b) / d + (g < b ? 6 : 0);
    if (g === max) return (b - r) / d + 2;
    return (r - g) / d + 4;
}
function $43add8e050c146e1$var$rgb2hsl(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = $43add8e050c146e1$var$hueValue(r, g, b, d, max);
        h = h * 60 + 0.5;
    }
    return [
        h | 0,
        s || 0,
        l
    ];
}
function $43add8e050c146e1$var$calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map($43add8e050c146e1$var$n2b);
}
function $43add8e050c146e1$var$hsl2rgb(h, s, l) {
    return $43add8e050c146e1$var$calln($43add8e050c146e1$var$hsl2rgbn, h, s, l);
}
function $43add8e050c146e1$var$hwb2rgb(h, w, b) {
    return $43add8e050c146e1$var$calln($43add8e050c146e1$var$hwb2rgbn, h, w, b);
}
function $43add8e050c146e1$var$hsv2rgb(h, s, v) {
    return $43add8e050c146e1$var$calln($43add8e050c146e1$var$hsv2rgbn, h, s, v);
}
function $43add8e050c146e1$var$hue(h) {
    return (h % 360 + 360) % 360;
}
function $43add8e050c146e1$var$hueParse(str) {
    const m = $43add8e050c146e1$var$HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) return;
    if (m[5] !== v) a = m[6] ? $43add8e050c146e1$var$p2b(+m[5]) : $43add8e050c146e1$var$n2b(+m[5]);
    const h = $43add8e050c146e1$var$hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === "hwb") v = $43add8e050c146e1$var$hwb2rgb(h, p1, p2);
    else if (m[1] === "hsv") v = $43add8e050c146e1$var$hsv2rgb(h, p1, p2);
    else v = $43add8e050c146e1$var$hsl2rgb(h, p1, p2);
    return {
        r: v[0],
        g: v[1],
        b: v[2],
        a: a
    };
}
function $43add8e050c146e1$var$rotate(v, deg) {
    var h = $43add8e050c146e1$var$rgb2hsl(v);
    h[0] = $43add8e050c146e1$var$hue(h[0] + deg);
    h = $43add8e050c146e1$var$hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
}
function $43add8e050c146e1$var$hslString(v) {
    if (!v) return;
    const a = $43add8e050c146e1$var$rgb2hsl(v);
    const h = a[0];
    const s = $43add8e050c146e1$var$n2p(a[1]);
    const l = $43add8e050c146e1$var$n2p(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${$43add8e050c146e1$var$b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const $43add8e050c146e1$var$map = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
};
const $43add8e050c146e1$var$names$1 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};
function $43add8e050c146e1$var$unpack() {
    const unpacked = {};
    const keys = Object.keys($43add8e050c146e1$var$names$1);
    const tkeys = Object.keys($43add8e050c146e1$var$map);
    let i, j, k, ok, nk;
    for(i = 0; i < keys.length; i++){
        ok = nk = keys[i];
        for(j = 0; j < tkeys.length; j++){
            k = tkeys[j];
            nk = nk.replace(k, $43add8e050c146e1$var$map[k]);
        }
        k = parseInt($43add8e050c146e1$var$names$1[ok], 16);
        unpacked[nk] = [
            k >> 16 & 0xFF,
            k >> 8 & 0xFF,
            k & 0xFF
        ];
    }
    return unpacked;
}
let $43add8e050c146e1$var$names;
function $43add8e050c146e1$var$nameParse(str) {
    if (!$43add8e050c146e1$var$names) {
        $43add8e050c146e1$var$names = $43add8e050c146e1$var$unpack();
        $43add8e050c146e1$var$names.transparent = [
            0,
            0,
            0,
            0
        ];
    }
    const a = $43add8e050c146e1$var$names[str.toLowerCase()];
    return a && {
        r: a[0],
        g: a[1],
        b: a[2],
        a: a.length === 4 ? a[3] : 255
    };
}
const $43add8e050c146e1$var$RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function $43add8e050c146e1$var$rgbParse(str) {
    const m = $43add8e050c146e1$var$RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) return;
    if (m[7] !== r) {
        const v = +m[7];
        a = m[8] ? $43add8e050c146e1$var$p2b(v) : $43add8e050c146e1$var$lim(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? $43add8e050c146e1$var$p2b(r) : $43add8e050c146e1$var$lim(r, 0, 255));
    g = 255 & (m[4] ? $43add8e050c146e1$var$p2b(g) : $43add8e050c146e1$var$lim(g, 0, 255));
    b = 255 & (m[6] ? $43add8e050c146e1$var$p2b(b) : $43add8e050c146e1$var$lim(b, 0, 255));
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
function $43add8e050c146e1$var$rgbString(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${$43add8e050c146e1$var$b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const $43add8e050c146e1$var$to = (v)=>v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const $43add8e050c146e1$var$from = (v)=>v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function $43add8e050c146e1$var$interpolate(rgb1, rgb2, t) {
    const r = $43add8e050c146e1$var$from($43add8e050c146e1$var$b2n(rgb1.r));
    const g = $43add8e050c146e1$var$from($43add8e050c146e1$var$b2n(rgb1.g));
    const b = $43add8e050c146e1$var$from($43add8e050c146e1$var$b2n(rgb1.b));
    return {
        r: $43add8e050c146e1$var$n2b($43add8e050c146e1$var$to(r + t * ($43add8e050c146e1$var$from($43add8e050c146e1$var$b2n(rgb2.r)) - r))),
        g: $43add8e050c146e1$var$n2b($43add8e050c146e1$var$to(g + t * ($43add8e050c146e1$var$from($43add8e050c146e1$var$b2n(rgb2.g)) - g))),
        b: $43add8e050c146e1$var$n2b($43add8e050c146e1$var$to(b + t * ($43add8e050c146e1$var$from($43add8e050c146e1$var$b2n(rgb2.b)) - b))),
        a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
}
function $43add8e050c146e1$var$modHSL(v, i, ratio) {
    if (v) {
        let tmp = $43add8e050c146e1$var$rgb2hsl(v);
        tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
        tmp = $43add8e050c146e1$var$hsl2rgb(tmp);
        v.r = tmp[0];
        v.g = tmp[1];
        v.b = tmp[2];
    }
}
function $43add8e050c146e1$var$clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
}
function $43add8e050c146e1$var$fromObject(input) {
    var v = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    if (Array.isArray(input)) {
        if (input.length >= 3) {
            v = {
                r: input[0],
                g: input[1],
                b: input[2],
                a: 255
            };
            if (input.length > 3) v.a = $43add8e050c146e1$var$n2b(input[3]);
        }
    } else {
        v = $43add8e050c146e1$var$clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        });
        v.a = $43add8e050c146e1$var$n2b(v.a);
    }
    return v;
}
function $43add8e050c146e1$var$functionParse(str) {
    if (str.charAt(0) === "r") return $43add8e050c146e1$var$rgbParse(str);
    return $43add8e050c146e1$var$hueParse(str);
}
class $43add8e050c146e1$var$Color {
    constructor(input){
        if (input instanceof $43add8e050c146e1$var$Color) return input;
        const type = typeof input;
        let v;
        if (type === "object") v = $43add8e050c146e1$var$fromObject(input);
        else if (type === "string") v = $43add8e050c146e1$var$hexParse(input) || $43add8e050c146e1$var$nameParse(input) || $43add8e050c146e1$var$functionParse(input);
        this._rgb = v;
        this._valid = !!v;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var v = $43add8e050c146e1$var$clone(this._rgb);
        if (v) v.a = $43add8e050c146e1$var$b2n(v.a);
        return v;
    }
    set rgb(obj) {
        this._rgb = $43add8e050c146e1$var$fromObject(obj);
    }
    rgbString() {
        return this._valid ? $43add8e050c146e1$var$rgbString(this._rgb) : undefined;
    }
    hexString() {
        return this._valid ? $43add8e050c146e1$var$hexString(this._rgb) : undefined;
    }
    hslString() {
        return this._valid ? $43add8e050c146e1$var$hslString(this._rgb) : undefined;
    }
    mix(color1, weight) {
        if (color1) {
            const c1 = this.rgb;
            const c2 = color1.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
            w2 = 1 - w1;
            c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
        }
        return this;
    }
    interpolate(color2, t) {
        if (color2) this._rgb = $43add8e050c146e1$var$interpolate(this._rgb, color2._rgb, t);
        return this;
    }
    clone() {
        return new $43add8e050c146e1$var$Color(this.rgb);
    }
    alpha(a) {
        this._rgb.a = $43add8e050c146e1$var$n2b(a);
        return this;
    }
    clearer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
    }
    greyscale() {
        const rgb = this._rgb;
        const val = $43add8e050c146e1$var$round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
    }
    opaquer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
    }
    negate() {
        const v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
    }
    lighten(ratio) {
        $43add8e050c146e1$var$modHSL(this._rgb, 2, ratio);
        return this;
    }
    darken(ratio) {
        $43add8e050c146e1$var$modHSL(this._rgb, 2, -ratio);
        return this;
    }
    saturate(ratio) {
        $43add8e050c146e1$var$modHSL(this._rgb, 1, ratio);
        return this;
    }
    desaturate(ratio) {
        $43add8e050c146e1$var$modHSL(this._rgb, 1, -ratio);
        return this;
    }
    rotate(deg) {
        $43add8e050c146e1$var$rotate(this._rgb, deg);
        return this;
    }
}
function $43add8e050c146e1$var$index_esm(input) {
    return new $43add8e050c146e1$var$Color(input);
}
function $43add8e050c146e1$export$9f4f30ee63539e24(value) {
    if (value && typeof value === "object") {
        const type = value.toString();
        return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
    }
    return false;
}
function $43add8e050c146e1$export$db3b6bfb95261072(value) {
    return $43add8e050c146e1$export$9f4f30ee63539e24(value) ? value : $43add8e050c146e1$var$index_esm(value);
}
function $43add8e050c146e1$export$faec65b429be379(value) {
    return $43add8e050c146e1$export$9f4f30ee63539e24(value) ? value : $43add8e050c146e1$var$index_esm(value).saturate(0.5).darken(0.1).hexString();
}
const $43add8e050c146e1$export$ce26c07117d59d6a = Object.create(null);
const $43add8e050c146e1$export$a8550f7dbe79f93a = Object.create(null);
function $43add8e050c146e1$var$getScope$1(node, key) {
    if (!key) return node;
    const keys = key.split(".");
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function $43add8e050c146e1$var$set(root, scope, values) {
    if (typeof scope === "string") return $43add8e050c146e1$export$6559d589eb85fbb6($43add8e050c146e1$var$getScope$1(root, scope), values);
    return $43add8e050c146e1$export$6559d589eb85fbb6($43add8e050c146e1$var$getScope$1(root, ""), scope);
}
class $43add8e050c146e1$var$Defaults {
    constructor(_descriptors1){
        this.animation = undefined;
        this.backgroundColor = "rgba(0,0,0,0.1)";
        this.borderColor = "rgba(0,0,0,0.1)";
        this.color = "#666";
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>$43add8e050c146e1$export$faec65b429be379(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>$43add8e050c146e1$export$faec65b429be379(options.borderColor);
        this.hoverColor = (ctx, options)=>$43add8e050c146e1$export$faec65b429be379(options.color);
        this.indexAxis = "x";
        this.interaction = {
            mode: "nearest",
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors1);
    }
    set(scope, values) {
        return $43add8e050c146e1$var$set(this, scope, values);
    }
    get(scope) {
        return $43add8e050c146e1$var$getScope$1(this, scope);
    }
    describe(scope, values) {
        return $43add8e050c146e1$var$set($43add8e050c146e1$export$a8550f7dbe79f93a, scope, values);
    }
    override(scope, values) {
        return $43add8e050c146e1$var$set($43add8e050c146e1$export$ce26c07117d59d6a, scope, values);
    }
    route(scope, name, targetScope, targetName) {
        const scopeObject = $43add8e050c146e1$var$getScope$1(this, scope);
        const targetScopeObject = $43add8e050c146e1$var$getScope$1(this, targetScope);
        const privateName = "_" + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if ($43add8e050c146e1$export$23f2a1d2818174ef(local)) return Object.assign({}, target, local);
                    return $43add8e050c146e1$export$90a7f3efeed30595(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
}
var $43add8e050c146e1$export$4368d992c4eafac0 = new $43add8e050c146e1$var$Defaults({
    _scriptable: (name)=>!name.startsWith("on"),
    _indexable: (name)=>name !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
});
function $43add8e050c146e1$export$d377dcb2b61d6c4e(font) {
    if (!font || $43add8e050c146e1$export$342063e11d6c3cad(font.size) || $43add8e050c146e1$export$342063e11d6c3cad(font.family)) return null;
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
}
function $43add8e050c146e1$export$3a6d5c9ae78a2c08(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) longest = textWidth;
    return longest;
}
function $43add8e050c146e1$export$a05254e7c3aeba6e(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        if (thing !== undefined && thing !== null && $43add8e050c146e1$export$8b22cf2602fb60ce(thing) !== true) longest = $43add8e050c146e1$export$3a6d5c9ae78a2c08(ctx, data, gc, longest, thing);
        else if ($43add8e050c146e1$export$8b22cf2602fb60ce(thing)) for(j = 0, jlen = thing.length; j < jlen; j++){
            nestedThing = thing[j];
            if (nestedThing !== undefined && nestedThing !== null && !$43add8e050c146e1$export$8b22cf2602fb60ce(nestedThing)) longest = $43add8e050c146e1$export$3a6d5c9ae78a2c08(ctx, data, gc, longest, nestedThing);
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++)delete data[gc[i]];
        gc.splice(0, gcLen);
    }
    return longest;
}
function $43add8e050c146e1$export$71cec2538cb2c617(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function $43add8e050c146e1$export$f787f51d84a910ad(canvas, ctx) {
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function $43add8e050c146e1$export$6554612db691658e(ctx, options, x, y) {
    let type, xOffset, yOffset, size, cornerRadius;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * $43add8e050c146e1$export$a17c37559e1db147;
    if (style && typeof style === "object") {
        type = style.toString();
        if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) return;
    ctx.beginPath();
    switch(style){
        default:
            ctx.arc(x, y, radius, 0, $43add8e050c146e1$export$971d5caa766a69d7);
            ctx.closePath();
            break;
        case "triangle":
            ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += $43add8e050c146e1$export$8c78c7c36408ea29;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += $43add8e050c146e1$export$8c78c7c36408ea29;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case "rectRounded":
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + $43add8e050c146e1$export$fef3dfd9bad05307) * size;
            yOffset = Math.sin(rad + $43add8e050c146e1$export$fef3dfd9bad05307) * size;
            ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - $43add8e050c146e1$export$56c0d5a1e737357d, rad - $43add8e050c146e1$export$7f8ddf7c7c20b3cd);
            ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - $43add8e050c146e1$export$7f8ddf7c7c20b3cd, rad);
            ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + $43add8e050c146e1$export$7f8ddf7c7c20b3cd);
            ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + $43add8e050c146e1$export$7f8ddf7c7c20b3cd, rad + $43add8e050c146e1$export$56c0d5a1e737357d);
            ctx.closePath();
            break;
        case "rect":
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                ctx.rect(x - size, y - size, 2 * size, 2 * size);
                break;
            }
            rad += $43add8e050c146e1$export$fef3dfd9bad05307;
        case "rectRot":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + yOffset, y - xOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            ctx.closePath();
            break;
        case "crossRot":
            rad += $43add8e050c146e1$export$fef3dfd9bad05307;
        case "cross":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;
        case "star":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            rad += $43add8e050c146e1$export$fef3dfd9bad05307;
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;
        case "line":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case "dash":
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) ctx.stroke();
}
function $43add8e050c146e1$export$ef35774e6d314e91(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function $43add8e050c146e1$export$78acf4525d8a74c4(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function $43add8e050c146e1$export$dc98b0b04f4c7758(ctx) {
    ctx.restore();
}
function $43add8e050c146e1$export$8a5498727ef6be21(ctx, previous, target, flip, mode) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    if (mode === "middle") {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) ctx.lineTo(previous.x, target.y);
    else ctx.lineTo(target.x, previous.y);
    ctx.lineTo(target.x, target.y);
}
function $43add8e050c146e1$export$d24c54395ce0c509(ctx, previous, target, flip) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function $43add8e050c146e1$export$8743009a87fcb00f(ctx, text, x, y, font, opts = {}) {
    const lines = $43add8e050c146e1$export$8b22cf2602fb60ce(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i, line;
    ctx.save();
    ctx.font = font.string;
    $43add8e050c146e1$var$setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (stroke) {
            if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
            if (!$43add8e050c146e1$export$342063e11d6c3cad(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        $43add8e050c146e1$var$decorateText(ctx, x, y, line, opts);
        y += font.lineHeight;
    }
    ctx.restore();
}
function $43add8e050c146e1$var$setRenderOpts(ctx, opts) {
    if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
    if (!$43add8e050c146e1$export$342063e11d6c3cad(opts.rotation)) ctx.rotate(opts.rotation);
    if (opts.color) ctx.fillStyle = opts.color;
    if (opts.textAlign) ctx.textAlign = opts.textAlign;
    if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function $43add8e050c146e1$var$decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function $43add8e050c146e1$export$493d36ec626b6698(ctx, rect) {
    const { x: x , y: y , w: w , h: h , radius: radius  } = rect;
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -$43add8e050c146e1$export$7f8ddf7c7c20b3cd, $43add8e050c146e1$export$56c0d5a1e737357d, true);
    ctx.lineTo(x, y + h - radius.bottomLeft);
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, $43add8e050c146e1$export$56c0d5a1e737357d, $43add8e050c146e1$export$7f8ddf7c7c20b3cd, true);
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, $43add8e050c146e1$export$7f8ddf7c7c20b3cd, 0, true);
    ctx.lineTo(x + w, y + radius.topRight);
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -$43add8e050c146e1$export$7f8ddf7c7c20b3cd, true);
    ctx.lineTo(x + radius.topLeft, y);
}
const $43add8e050c146e1$var$LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
const $43add8e050c146e1$var$FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function $43add8e050c146e1$export$1a8f5705751d8277(value, size) {
    const matches = ("" + value).match($43add8e050c146e1$var$LINE_HEIGHT);
    if (!matches || matches[1] === "normal") return size * 1.2;
    value = +matches[2];
    switch(matches[3]){
        case "px":
            return value;
        case "%":
            value /= 100;
            break;
    }
    return size * value;
}
const $43add8e050c146e1$var$numberOrZero = (v)=>+v || 0;
function $43add8e050c146e1$export$3b513254972cfc9c(value, props) {
    const ret = {};
    const objProps = $43add8e050c146e1$export$23f2a1d2818174ef(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = $43add8e050c146e1$export$23f2a1d2818174ef(value) ? objProps ? (prop)=>$43add8e050c146e1$export$90a7f3efeed30595(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop1 of keys)ret[prop1] = $43add8e050c146e1$var$numberOrZero(read(prop1));
    return ret;
}
function $43add8e050c146e1$export$1fbe638ecf81657e(value) {
    return $43add8e050c146e1$export$3b513254972cfc9c(value, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    });
}
function $43add8e050c146e1$export$d66dc83d8cfc8dd(value) {
    return $43add8e050c146e1$export$3b513254972cfc9c(value, [
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ]);
}
function $43add8e050c146e1$export$96f57966bedc81b4(value) {
    const obj = $43add8e050c146e1$export$1fbe638ecf81657e(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
function $43add8e050c146e1$export$3d8c2f653ac9d0b9(options, fallback) {
    options = options || {};
    fallback = fallback || $43add8e050c146e1$export$4368d992c4eafac0.font;
    let size = $43add8e050c146e1$export$90a7f3efeed30595(options.size, fallback.size);
    if (typeof size === "string") size = parseInt(size, 10);
    let style = $43add8e050c146e1$export$90a7f3efeed30595(options.style, fallback.style);
    if (style && !("" + style).match($43add8e050c146e1$var$FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = "";
    }
    const font = {
        family: $43add8e050c146e1$export$90a7f3efeed30595(options.family, fallback.family),
        lineHeight: $43add8e050c146e1$export$1a8f5705751d8277($43add8e050c146e1$export$90a7f3efeed30595(options.lineHeight, fallback.lineHeight), size),
        size: size,
        style: style,
        weight: $43add8e050c146e1$export$90a7f3efeed30595(options.weight, fallback.weight),
        string: ""
    };
    font.string = $43add8e050c146e1$export$d377dcb2b61d6c4e(font);
    return font;
}
function $43add8e050c146e1$export$407448d2b89b1813(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) continue;
        if (context !== undefined && typeof value === "function") {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && $43add8e050c146e1$export$8b22cf2602fb60ce(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) info.cacheable = false;
            return value;
        }
    }
}
function $43add8e050c146e1$export$db202ddc8be9136(minmax, grace, beginAtZero) {
    const { min: min , max: max  } = minmax;
    const change = $43add8e050c146e1$export$7ccc53e8f1e7dfc5(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
function $43add8e050c146e1$export$dda1d9f60106f0e9(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}
function $43add8e050c146e1$export$91477dc880baac21(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) lo = mid;
        else hi = mid;
    }
    return {
        lo: lo,
        hi: hi
    };
}
const $43add8e050c146e1$export$d141bba7fdc215a3 = (table, key, value)=>$43add8e050c146e1$export$91477dc880baac21(table, value, (index)=>table[index][key] < value);
const $43add8e050c146e1$export$ebd11618f299a286 = (table, key, value)=>$43add8e050c146e1$export$91477dc880baac21(table, value, (index)=>table[index][key] >= value);
function $43add8e050c146e1$export$23ebac1979863676(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min)start++;
    while(end > start && values[end - 1] > max)end--;
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const $43add8e050c146e1$var$arrayEvents = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
];
function $43add8e050c146e1$export$882b5998b3b9117c(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, "_chartjs", {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    $43add8e050c146e1$var$arrayEvents.forEach((key)=>{
        const method = "_onData" + $43add8e050c146e1$export$efca4cbe5dd06740(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === "function") object[method](...args);
                });
                return res;
            }
        });
    });
}
function $43add8e050c146e1$export$3b14a55fb2447963(array, listener) {
    const stub = array._chartjs;
    if (!stub) return;
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
    if (listeners.length > 0) return;
    $43add8e050c146e1$var$arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
function $43add8e050c146e1$export$71511d61b312f219(items) {
    const set1 = new Set();
    let i, ilen;
    for(i = 0, ilen = items.length; i < ilen; ++i)set1.add(items[i]);
    if (set1.size === ilen) return items;
    return Array.from(set1);
}
function $43add8e050c146e1$export$c3950d9923825c02(scopes, prefixes = [
    ""
], rootScopes = scopes, fallback, getTarget = ()=>scopes[0]) {
    if (!$43add8e050c146e1$export$35e795649ee09318(fallback)) fallback = $43add8e050c146e1$var$_resolve("_fallback", scopes);
    const cache = {
        [Symbol.toStringTag]: "Object",
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: rootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>$43add8e050c146e1$export$c3950d9923825c02([
                scope,
                ...scopes
            ], prefixes, rootScopes, fallback)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete target._keys;
            delete scopes[0][prop];
            return true;
        },
        get (target, prop) {
            return $43add8e050c146e1$var$_cached(target, prop, ()=>$43add8e050c146e1$var$_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        has (target, prop) {
            return $43add8e050c146e1$var$getKeysFromAllScopes(target).includes(prop);
        },
        ownKeys (target) {
            return $43add8e050c146e1$var$getKeysFromAllScopes(target);
        },
        set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value;
            delete target._keys;
            return true;
        }
    });
}
function $43add8e050c146e1$export$a93c5207d687da10(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: $43add8e050c146e1$export$a9c996f45e5784d0(proxy, descriptorDefaults),
        setContext: (ctx)=>$43add8e050c146e1$export$a93c5207d687da10(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>$43add8e050c146e1$export$a93c5207d687da10(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete proxy[prop];
            return true;
        },
        get (target, prop, receiver) {
            return $43add8e050c146e1$var$_cached(target, prop, ()=>$43add8e050c146e1$var$_resolveWithContext(target, prop, receiver));
        },
        getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        set (target, prop, value) {
            proxy[prop] = value;
            delete target[prop];
            return true;
        }
    });
}
function $43add8e050c146e1$export$a9c996f45e5784d0(proxy, defaults1 = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable: _scriptable = defaults1.scriptable , _indexable: _indexable = defaults1.indexable , _allKeys: _allKeys = defaults1.allKeys  } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: $43add8e050c146e1$export$2e2af4578d910ddf(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: $43add8e050c146e1$export$2e2af4578d910ddf(_indexable) ? _indexable : ()=>_indexable
    };
}
const $43add8e050c146e1$var$readKey = (prefix, name)=>prefix ? prefix + $43add8e050c146e1$export$efca4cbe5dd06740(name) : name;
const $43add8e050c146e1$var$needsSubResolver = (prop, value)=>$43add8e050c146e1$export$23f2a1d2818174ef(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function $43add8e050c146e1$var$_cached(target, prop, resolve1) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) return target[prop];
    const value = resolve1();
    target[prop] = value;
    return value;
}
function $43add8e050c146e1$var$_resolveWithContext(target, prop, receiver) {
    const { _proxy: _proxy , _context: _context , _subProxy: _subProxy , _descriptors: descriptors1  } = target;
    let value = _proxy[prop];
    if ($43add8e050c146e1$export$2e2af4578d910ddf(value) && descriptors1.isScriptable(prop)) value = $43add8e050c146e1$var$_resolveScriptable(prop, value, target, receiver);
    if ($43add8e050c146e1$export$8b22cf2602fb60ce(value) && value.length) value = $43add8e050c146e1$var$_resolveArray(prop, value, target, descriptors1.isIndexable);
    if ($43add8e050c146e1$var$needsSubResolver(prop, value)) value = $43add8e050c146e1$export$a93c5207d687da10(value, _context, _subProxy && _subProxy[prop], descriptors1);
    return value;
}
function $43add8e050c146e1$var$_resolveScriptable(prop, value, target, receiver) {
    const { _proxy: _proxy , _context: _context , _subProxy: _subProxy , _stack: _stack  } = target;
    if (_stack.has(prop)) throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    _stack.add(prop);
    value = value(_context, _subProxy || receiver);
    _stack.delete(prop);
    if ($43add8e050c146e1$var$needsSubResolver(prop, value)) value = $43add8e050c146e1$var$createSubResolver(_proxy._scopes, _proxy, prop, value);
    return value;
}
function $43add8e050c146e1$var$_resolveArray(prop, value, target, isIndexable) {
    const { _proxy: _proxy , _context: _context , _subProxy: _subProxy , _descriptors: descriptors2  } = target;
    if ($43add8e050c146e1$export$35e795649ee09318(_context.index) && isIndexable(prop)) value = value[_context.index % value.length];
    else if ($43add8e050c146e1$export$23f2a1d2818174ef(value[0])) {
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = $43add8e050c146e1$var$createSubResolver(scopes, _proxy, prop, item);
            value.push($43add8e050c146e1$export$a93c5207d687da10(resolver, _context, _subProxy && _subProxy[prop], descriptors2));
        }
    }
    return value;
}
function $43add8e050c146e1$var$resolveFallback(fallback, prop, value) {
    return $43add8e050c146e1$export$2e2af4578d910ddf(fallback) ? fallback(prop, value) : fallback;
}
const $43add8e050c146e1$var$getScope = (key, parent)=>key === true ? parent : typeof key === "string" ? $43add8e050c146e1$export$2d1720544b23b823(parent, key) : undefined;
function $43add8e050c146e1$var$addScopes(set2, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = $43add8e050c146e1$var$getScope(key, parent);
        if (scope) {
            set2.add(scope);
            const fallback = $43add8e050c146e1$var$resolveFallback(scope._fallback, key, value);
            if ($43add8e050c146e1$export$35e795649ee09318(fallback) && fallback !== key && fallback !== parentFallback) return fallback;
        } else if (scope === false && $43add8e050c146e1$export$35e795649ee09318(parentFallback) && key !== parentFallback) return null;
    }
    return false;
}
function $43add8e050c146e1$var$createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = $43add8e050c146e1$var$resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set3 = new Set();
    set3.add(value);
    let key = $43add8e050c146e1$var$addScopesFromKey(set3, allScopes, prop, fallback || prop, value);
    if (key === null) return false;
    if ($43add8e050c146e1$export$35e795649ee09318(fallback) && fallback !== prop) {
        key = $43add8e050c146e1$var$addScopesFromKey(set3, allScopes, fallback, key, value);
        if (key === null) return false;
    }
    return $43add8e050c146e1$export$c3950d9923825c02(Array.from(set3), [
        ""
    ], rootScopes, fallback, ()=>$43add8e050c146e1$var$subGetTarget(resolver, prop, value));
}
function $43add8e050c146e1$var$addScopesFromKey(set4, allScopes, key, fallback, item) {
    while(key)key = $43add8e050c146e1$var$addScopes(set4, allScopes, key, fallback, item);
    return key;
}
function $43add8e050c146e1$var$subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) parent[prop] = {};
    const target = parent[prop];
    if ($43add8e050c146e1$export$8b22cf2602fb60ce(target) && $43add8e050c146e1$export$23f2a1d2818174ef(value)) return value;
    return target;
}
function $43add8e050c146e1$var$_resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = $43add8e050c146e1$var$_resolve($43add8e050c146e1$var$readKey(prefix, prop), scopes);
        if ($43add8e050c146e1$export$35e795649ee09318(value)) return $43add8e050c146e1$var$needsSubResolver(prop, value) ? $43add8e050c146e1$var$createSubResolver(scopes, proxy, prop, value) : value;
    }
}
function $43add8e050c146e1$var$_resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) continue;
        const value = scope[key];
        if ($43add8e050c146e1$export$35e795649ee09318(value)) return value;
    }
}
function $43add8e050c146e1$var$getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) keys = target._keys = $43add8e050c146e1$var$resolveKeysFromAllScopes(target._scopes);
    return keys;
}
function $43add8e050c146e1$var$resolveKeysFromAllScopes(scopes) {
    const set5 = new Set();
    for (const scope of scopes)for (const key of Object.keys(scope).filter((k)=>!k.startsWith("_")))set5.add(key);
    return Array.from(set5);
}
function $43add8e050c146e1$export$4a5767248b18ef41(meta, data, start, count) {
    const { iScale: iScale  } = meta;
    const { key: key = "r"  } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse($43add8e050c146e1$export$2d1720544b23b823(item, key), index)
        };
    }
    return parsed;
}
const $43add8e050c146e1$var$EPSILON = Number.EPSILON || 1e-14;
const $43add8e050c146e1$var$getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const $43add8e050c146e1$var$getValueAxis = (indexAxis)=>indexAxis === "x" ? "y" : "x";
function $43add8e050c146e1$export$667d3bf0c5f83305(firstPoint, middlePoint, afterPoint, t) {
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = $43add8e050c146e1$export$24baa2b76016ce0e(current, previous);
    const d12 = $43add8e050c146e1$export$24baa2b76016ce0e(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01;
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
function $43add8e050c146e1$var$monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = $43add8e050c146e1$var$getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = $43add8e050c146e1$var$getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) continue;
        if ($43add8e050c146e1$export$a33b77bbdbb8366c(deltaK[i], 0, $43add8e050c146e1$var$EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) continue;
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function $43add8e050c146e1$var$monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = $43add8e050c146e1$var$getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = $43add8e050c146e1$var$getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = $43add8e050c146e1$var$getPoint(points, i + 1);
        if (!pointCurrent) continue;
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
function $43add8e050c146e1$export$317a3d46287192d8(points, indexAxis = "x") {
    const valueAxis = $43add8e050c146e1$var$getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    let i, pointBefore, pointCurrent;
    let pointAfter = $43add8e050c146e1$var$getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = $43add8e050c146e1$var$getPoint(points, i + 1);
        if (!pointCurrent) continue;
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : $43add8e050c146e1$export$2408f22a0fab9ae5(deltaK[i - 1]) !== $43add8e050c146e1$export$2408f22a0fab9ae5(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    $43add8e050c146e1$var$monotoneAdjust(points, deltaK, mK);
    $43add8e050c146e1$var$monotoneCompute(points, mK, indexAxis);
}
function $43add8e050c146e1$var$capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function $43add8e050c146e1$var$capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = $43add8e050c146e1$export$ef35774e6d314e91(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && $43add8e050c146e1$export$ef35774e6d314e91(points[i + 1], area);
        if (!inArea) continue;
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = $43add8e050c146e1$var$capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = $43add8e050c146e1$var$capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = $43add8e050c146e1$var$capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = $43add8e050c146e1$var$capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
function $43add8e050c146e1$export$21579262ef46735b(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    if (options.spanGaps) points = points.filter((pt)=>!pt.skip);
    if (options.cubicInterpolationMode === "monotone") $43add8e050c146e1$export$317a3d46287192d8(points, indexAxis);
    else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = $43add8e050c146e1$export$667d3bf0c5f83305(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) $43add8e050c146e1$var$capBezierPoints(points, area);
}
function $43add8e050c146e1$export$61196ced6d74a310() {
    return typeof window !== "undefined" && typeof document !== "undefined";
}
function $43add8e050c146e1$export$2329c99376c9d0a4(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") parent = parent.host;
    return parent;
}
function $43add8e050c146e1$var$parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf("%") !== -1) valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    } else valueInPixels = styleValue;
    return valueInPixels;
}
const $43add8e050c146e1$var$getComputedStyle = (element)=>window.getComputedStyle(element, null);
function $43add8e050c146e1$export$1ee57be6f6687d2c(el, property) {
    return $43add8e050c146e1$var$getComputedStyle(el).getPropertyValue(property);
}
const $43add8e050c146e1$var$positions = [
    "top",
    "right",
    "bottom",
    "left"
];
function $43add8e050c146e1$var$getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for(let i = 0; i < 4; i++){
        const pos = $43add8e050c146e1$var$positions[i];
        result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const $43add8e050c146e1$var$useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
function $43add8e050c146e1$var$getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX: offsetX , offsetY: offsetY  } = source;
    let box = false;
    let x, y;
    if ($43add8e050c146e1$var$useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x: x,
        y: y,
        box: box
    };
}
function $43add8e050c146e1$export$df995fae86a55f06(evt, chart) {
    if ("native" in evt) return evt;
    const { canvas: canvas , currentDevicePixelRatio: currentDevicePixelRatio  } = chart;
    const style = $43add8e050c146e1$var$getComputedStyle(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = $43add8e050c146e1$var$getPositionedStyle(style, "padding");
    const borders = $43add8e050c146e1$var$getPositionedStyle(style, "border", "width");
    const { x: x , y: y , box: box  } = $43add8e050c146e1$var$getCanvasPosition(evt, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width: width , height: height  } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function $43add8e050c146e1$var$getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = $43add8e050c146e1$export$2329c99376c9d0a4(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect();
            const containerStyle = $43add8e050c146e1$var$getComputedStyle(container);
            const containerBorder = $43add8e050c146e1$var$getPositionedStyle(containerStyle, "border", "width");
            const containerPadding = $43add8e050c146e1$var$getPositionedStyle(containerStyle, "padding");
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = $43add8e050c146e1$var$parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
            maxHeight = $43add8e050c146e1$var$parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
        }
    }
    return {
        width: width,
        height: height,
        maxWidth: maxWidth || $43add8e050c146e1$export$527e9aa3390079e9,
        maxHeight: maxHeight || $43add8e050c146e1$export$527e9aa3390079e9
    };
}
const $43add8e050c146e1$var$round1 = (v)=>Math.round(v * 10) / 10;
function $43add8e050c146e1$export$d66501df72047452(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = $43add8e050c146e1$var$getComputedStyle(canvas);
    const margins = $43add8e050c146e1$var$getPositionedStyle(style, "margin");
    const maxWidth = $43add8e050c146e1$var$parseMaxStyle(style.maxWidth, canvas, "clientWidth") || $43add8e050c146e1$export$527e9aa3390079e9;
    const maxHeight = $43add8e050c146e1$var$parseMaxStyle(style.maxHeight, canvas, "clientHeight") || $43add8e050c146e1$export$527e9aa3390079e9;
    const containerSize = $43add8e050c146e1$var$getContainerSize(canvas, bbWidth, bbHeight);
    let { width: width , height: height  } = containerSize;
    if (style.boxSizing === "content-box") {
        const borders = $43add8e050c146e1$var$getPositionedStyle(style, "border", "width");
        const paddings = $43add8e050c146e1$var$getPositionedStyle(style, "padding");
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
    width = $43add8e050c146e1$var$round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = $43add8e050c146e1$var$round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) height = $43add8e050c146e1$var$round1(width / 2);
    return {
        width: width,
        height: height
    };
}
function $43add8e050c146e1$export$4c3d22f3d993c33f(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = deviceHeight / pixelRatio;
    chart.width = deviceWidth / pixelRatio;
    const canvas = chart.canvas;
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
const $43add8e050c146e1$export$3466f893ebf79586 = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
    } catch (e) {}
    return passiveSupported;
}();
function $43add8e050c146e1$export$9bb611d729802a56(element, property) {
    const value = $43add8e050c146e1$export$1ee57be6f6687d2c(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}
function $43add8e050c146e1$export$2f6ca3d3b1f80bf5(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
function $43add8e050c146e1$export$306ddfe3a8403e2(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === "middle" ? t < 0.5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
function $43add8e050c146e1$export$7a38258bbe170828(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = $43add8e050c146e1$export$2f6ca3d3b1f80bf5(p1, cp1, t);
    const b = $43add8e050c146e1$export$2f6ca3d3b1f80bf5(cp1, cp2, t);
    const c = $43add8e050c146e1$export$2f6ca3d3b1f80bf5(cp2, p2, t);
    const d = $43add8e050c146e1$export$2f6ca3d3b1f80bf5(a, b, t);
    const e = $43add8e050c146e1$export$2f6ca3d3b1f80bf5(b, c, t);
    return $43add8e050c146e1$export$2f6ca3d3b1f80bf5(d, e, t);
}
const $43add8e050c146e1$var$intlCache = new Map();
function $43add8e050c146e1$var$getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = $43add8e050c146e1$var$intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        $43add8e050c146e1$var$intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function $43add8e050c146e1$export$ae1af26003f05816(num, locale, options) {
    return $43add8e050c146e1$var$getNumberFormat(locale, options).format(num);
}
const $43add8e050c146e1$var$getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === "center") return align;
            return align === "right" ? "left" : "right";
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const $43add8e050c146e1$var$getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function $43add8e050c146e1$export$28f7fcd39efa255(rtl, rectX, width) {
    return rtl ? $43add8e050c146e1$var$getRightToLeftAdapter(rectX, width) : $43add8e050c146e1$var$getLeftToRightAdapter();
}
function $43add8e050c146e1$export$3d12bd131bb975d1(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue("direction"),
            style.getPropertyPriority("direction"), 
        ];
        style.setProperty("direction", direction, "important");
        ctx.prevTextDirection = original;
    }
}
function $43add8e050c146e1$export$9d398bebfec1c039(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
}
function $43add8e050c146e1$var$propertyFn(property) {
    if (property === "angle") return {
        between: $43add8e050c146e1$export$ffb5f4729a158638,
        compare: $43add8e050c146e1$export$d29e374196577086,
        normalize: $43add8e050c146e1$export$9fa96a7d116ea3ce
    };
    return {
        between: $43add8e050c146e1$export$f38c853ae54ed474,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function $43add8e050c146e1$var$normalizeSegment({ start: start , end: end , count: count , loop: loop , style: style  }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style: style
    };
}
function $43add8e050c146e1$var$getSegment(segment, points, bounds) {
    const { property: property , start: startBound , end: endBound  } = bounds;
    const { between: between , normalize: normalize  } = $43add8e050c146e1$var$propertyFn(property);
    const count = points.length;
    let { start: start , end: end , loop: loop  } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) end += count;
    return {
        start: start,
        end: end,
        loop: loop,
        style: segment.style
    };
}
function $43add8e050c146e1$export$92108d983e8ee699(segment, points, bounds) {
    if (!bounds) return [
        segment
    ];
    const { property: property , start: startBound , end: endBound  } = bounds;
    const count = points.length;
    const { compare: compare , between: between , normalize: normalize  } = $43add8e050c146e1$var$propertyFn(property);
    const { start: start , end: end , loop: loop , style: style  } = $43add8e050c146e1$var$getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) continue;
        value = normalize(point[property]);
        if (value === prevValue) continue;
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
        if (subStart !== null && shouldStop()) {
            result.push($43add8e050c146e1$var$normalizeSegment({
                start: subStart,
                end: i,
                loop: loop,
                count: count,
                style: style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) result.push($43add8e050c146e1$var$normalizeSegment({
        start: subStart,
        end: end,
        loop: loop,
        count: count,
        style: style
    }));
    return result;
}
function $43add8e050c146e1$export$1a82df3d29112e01(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = $43add8e050c146e1$export$92108d983e8ee699(segments[i], line.points, bounds);
        if (sub.length) result.push(...sub);
    }
    return result;
}
function $43add8e050c146e1$var$findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) while(start < count && !points[start].skip)start++;
    while(start < count && points[start].skip)start++;
    start %= count;
    if (loop) end += start;
    while(end > start && points[end % count].skip)end--;
    end %= count;
    return {
        start: start,
        end: end
    };
}
function $43add8e050c146e1$var$solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop: loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) start = end;
        }
        prev = cur;
    }
    if (last !== null) result.push({
        start: start % count,
        end: last % count,
        loop: loop
    });
    return result;
}
function $43add8e050c146e1$export$ab83b03e4111b1d0(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) return [];
    const loop = !!line._loop;
    const { start: start , end: end  } = $43add8e050c146e1$var$findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) return $43add8e050c146e1$var$splitByStyles(line, [
        {
            start: start,
            end: end,
            loop: loop
        }
    ], points, segmentOptions);
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return $43add8e050c146e1$var$splitByStyles(line, $43add8e050c146e1$var$solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function $43add8e050c146e1$var$splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
    return $43add8e050c146e1$var$doSplitByStyles(line, segments, points, segmentOptions);
}
function $43add8e050c146e1$var$doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = $43add8e050c146e1$var$readStyle(line.options);
    const { _datasetIndex: datasetIndex , options: { spanGaps: spanGaps  }  } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) return;
        s += count;
        while(points[s % count].skip)s -= dir;
        while(points[e % count].skip)e += dir;
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = $43add8e050c146e1$var$readStyle(segmentOptions.setContext($43add8e050c146e1$export$dda1d9f60106f0e9(chartContext, {
                type: "segment",
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex: datasetIndex
            })));
            if ($43add8e050c146e1$var$styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
    }
    return result;
}
function $43add8e050c146e1$var$readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function $43add8e050c146e1$var$styleChanged(style, prevStyle) {
    return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}



class $22a5eaf847bb8284$var$Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
    _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart: chart,
                initial: anims.initial,
                numSteps: numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
    _refresh() {
        if (this._request) return;
        this._running = true;
        this._request = (0, $43add8e050c146e1$export$43caf9889c228507).call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) this._refresh();
        });
    }
    _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) return;
            const items = anims.items;
            let i = items.length - 1;
            let draw1 = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) anims.duration = item._total;
                    item.tick(date);
                    draw1 = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw1) {
                chart.draw();
                this._notify(chart, anims, date, "progress");
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, "complete");
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) this._running = false;
    }
    _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
    listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
        if (!items || !items.length) return;
        this._getAnims(chart).items.push(...items);
    }
    has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) return;
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) return false;
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) return false;
        return true;
    }
    stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) return;
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i)items[i].cancel();
        anims.items = [];
        this._notify(chart, anims, Date.now(), "complete");
    }
    remove(chart) {
        return this._charts.delete(chart);
    }
}
var $22a5eaf847bb8284$export$a424a0aa8f687495 = new $22a5eaf847bb8284$var$Animator();
const $22a5eaf847bb8284$var$transparent = "transparent";
const $22a5eaf847bb8284$var$interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
    color (from, to, factor) {
        const c0 = (0, $43add8e050c146e1$export$db3b6bfb95261072)(from || $22a5eaf847bb8284$var$transparent);
        const c1 = c0.valid && (0, $43add8e050c146e1$export$db3b6bfb95261072)(to || $22a5eaf847bb8284$var$transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class $22a5eaf847bb8284$export$c35d437ae5945fcd {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = (0, $43add8e050c146e1$export$407448d2b89b1813)([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = (0, $43add8e050c146e1$export$407448d2b89b1813)([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || $22a5eaf847bb8284$var$interpolators[cfg.type || typeof from];
        this._easing = (0, $43add8e050c146e1$export$f1e1789686576879)[cfg.easing] || (0, $43add8e050c146e1$export$f1e1789686576879).linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = (0, $43add8e050c146e1$export$407448d2b89b1813)([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = (0, $43add8e050c146e1$export$407448d2b89b1813)([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res: res,
                rej: rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? "res" : "rej";
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++)promises[i][method]();
    }
}
const $22a5eaf847bb8284$var$numbers = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
];
const $22a5eaf847bb8284$var$colors = [
    "color",
    "borderColor",
    "backgroundColor"
];
(0, $43add8e050c146e1$export$4368d992c4eafac0).set("animation", {
    delay: undefined,
    duration: 1000,
    easing: "easeOutQuart",
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
});
const $22a5eaf847bb8284$var$animationOptions = Object.keys((0, $43add8e050c146e1$export$4368d992c4eafac0).animation);
(0, $43add8e050c146e1$export$4368d992c4eafac0).describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: (name)=>name !== "onProgress" && name !== "onComplete" && name !== "fn"
});
(0, $43add8e050c146e1$export$4368d992c4eafac0).set("animations", {
    colors: {
        type: "color",
        properties: $22a5eaf847bb8284$var$colors
    },
    numbers: {
        type: "number",
        properties: $22a5eaf847bb8284$var$numbers
    }
});
(0, $43add8e050c146e1$export$4368d992c4eafac0).describe("animations", {
    _fallback: "animation"
});
(0, $43add8e050c146e1$export$4368d992c4eafac0).set("transitions", {
    active: {
        animation: {
            duration: 400
        }
    },
    resize: {
        animation: {
            duration: 0
        }
    },
    show: {
        animations: {
            colors: {
                from: "transparent"
            },
            visible: {
                type: "boolean",
                duration: 0
            }
        }
    },
    hide: {
        animations: {
            colors: {
                to: "transparent"
            },
            visible: {
                type: "boolean",
                easing: "linear",
                fn: (v)=>v | 0
            }
        }
    }
});
class $22a5eaf847bb8284$export$8ab227dac26677d {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!(0, $43add8e050c146e1$export$23f2a1d2818174ef)(config)) return;
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!(0, $43add8e050c146e1$export$23f2a1d2818174ef)(cfg)) return;
            const resolved = {};
            for (const option of $22a5eaf847bb8284$var$animationOptions)resolved[option] = cfg[option];
            ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
            });
        });
    }
    _animateOptions(target, values) {
        const newOptions = values.options;
        const options = $22a5eaf847bb8284$var$resolveTargetOptions(target, newOptions);
        if (!options) return [];
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) $22a5eaf847bb8284$var$awaitAll(target.options.$animations, newOptions).then(()=>{
            target.options = newOptions;
        }, ()=>{});
        return animations;
    }
    _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === "$") continue;
            if (prop === "options") {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else animation.cancel();
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new $22a5eaf847bb8284$export$c35d437ae5945fcd(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
    update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            $22a5eaf847bb8284$export$a424a0aa8f687495.add(this._chart, animations);
            return true;
        }
    }
}
function $22a5eaf847bb8284$var$awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) running.push(anim.wait());
    }
    return Promise.all(running);
}
function $22a5eaf847bb8284$var$resolveTargetOptions(target, newOptions) {
    if (!newOptions) return;
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
    });
    return options;
}
function $22a5eaf847bb8284$var$scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function $22a5eaf847bb8284$var$defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) return false;
    const x = $22a5eaf847bb8284$var$scaleClip(xScale, allowedOverflow);
    const y = $22a5eaf847bb8284$var$scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function $22a5eaf847bb8284$var$toClip(value) {
    let t, r, b, l;
    if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else t = r = b = l = value;
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function $22a5eaf847bb8284$var$getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i)keys.push(metasets[i].index);
    return keys;
}
function $22a5eaf847bb8284$var$applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i, ilen, datasetIndex, otherValue;
    if (value === null) return;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            if (options.all) continue;
            break;
        }
        otherValue = stack.values[datasetIndex];
        if ((0, $43add8e050c146e1$export$39b482c5e57630a8)(otherValue) && (singleMode || value === 0 || (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(value) === (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(otherValue))) value += otherValue;
    }
    return value;
}
function $22a5eaf847bb8284$var$convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            x: key,
            y: data[key]
        };
    }
    return adata;
}
function $22a5eaf847bb8284$var$isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function $22a5eaf847bb8284$var$getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function $22a5eaf847bb8284$var$getUserBounds(scale) {
    const { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function $22a5eaf847bb8284$var$getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function $22a5eaf847bb8284$var$getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) return meta.index;
    }
    return null;
}
function $22a5eaf847bb8284$var$updateStacks(controller, parsed) {
    const { chart: chart , _cachedMeta: meta  } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale: iScale , vScale: vScale , index: datasetIndex  } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = $22a5eaf847bb8284$var$getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index1 , [vAxis]: value  } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = $22a5eaf847bb8284$var$getOrCreateStack(stacks, key, index1);
        stack[datasetIndex] = value;
        stack._top = $22a5eaf847bb8284$var$getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = $22a5eaf847bb8284$var$getLastIndexInStack(stack, vScale, false, meta.type);
    }
}
function $22a5eaf847bb8284$var$getFirstScaleId(chart, axis) {
    const scales1 = chart.scales;
    return Object.keys(scales1).filter((key)=>scales1[key].axis === axis).shift();
}
function $22a5eaf847bb8284$var$createDatasetContext(parent, index2) {
    return (0, $43add8e050c146e1$export$dda1d9f60106f0e9)(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index2,
        index: index2,
        mode: "default",
        type: "dataset"
    });
}
function $22a5eaf847bb8284$var$createDataContext(parent, index3, element) {
    return (0, $43add8e050c146e1$export$dda1d9f60106f0e9)(parent, {
        active: false,
        dataIndex: index3,
        parsed: undefined,
        raw: undefined,
        element: element,
        index: index3,
        mode: "default",
        type: "data"
    });
}
function $22a5eaf847bb8284$var$clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) return;
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) return;
        delete stacks[axis][datasetIndex];
    }
}
const $22a5eaf847bb8284$var$isDirectUpdateMode = (mode)=>mode === "reset" || mode === "none";
const $22a5eaf847bb8284$var$cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const $22a5eaf847bb8284$var$createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: $22a5eaf847bb8284$var$getSortedDatasetIndices(chart, true),
        values: null
    };
class $22a5eaf847bb8284$export$75572ec5c55b4048 {
    constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
        this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = $22a5eaf847bb8284$var$isStacked(meta.vScale, meta);
        this.addElements();
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) $22a5eaf847bb8284$var$clearStacks(this._cachedMeta);
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === "x" ? x : axis === "r" ? r : y;
        const xid = meta.xAxisID = (0, $43add8e050c146e1$export$90a7f3efeed30595)(dataset.xAxisID, $22a5eaf847bb8284$var$getFirstScaleId(chart, "x"));
        const yid = meta.yAxisID = (0, $43add8e050c146e1$export$90a7f3efeed30595)(dataset.yAxisID, $22a5eaf847bb8284$var$getFirstScaleId(chart, "y"));
        const rid = meta.rAxisID = (0, $43add8e050c146e1$export$90a7f3efeed30595)(dataset.rAxisID, $22a5eaf847bb8284$var$getFirstScaleId(chart, "r"));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update("reset");
    }
    _destroy() {
        const meta = this._cachedMeta;
        if (this._data) (0, $43add8e050c146e1$export$3b14a55fb2447963)(this._data, this);
        if (meta._stacked) $22a5eaf847bb8284$var$clearStacks(meta);
    }
    _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(data)) this._data = $22a5eaf847bb8284$var$convertObjectDataToArray(data);
        else if (_data !== data) {
            if (_data) {
                (0, $43add8e050c146e1$export$3b14a55fb2447963)(_data, this);
                const meta = this._cachedMeta;
                $22a5eaf847bb8284$var$clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) (0, $43add8e050c146e1$export$882b5998b3b9117c)(data, this);
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) meta.dataset = new this.datasetElementType();
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = $22a5eaf847bb8284$var$isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            $22a5eaf847bb8284$var$clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) $22a5eaf847bb8284$var$updateStacks(this, meta._parsed);
    }
    configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
    parse(start, count) {
        const { _cachedMeta: meta , _data: data  } = this;
        const { iScale: iScale , _stacked: _stacked  } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(data[start])) parsed = this.parseArrayData(meta, data, start, count);
            else if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(data[start])) parsed = this.parseObjectData(meta, data, start, count);
            else parsed = this.parsePrimitiveData(meta, data, start, count);
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) sorted = false;
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) $22a5eaf847bb8284$var$updateStacks(this, parsed);
    }
    parsePrimitiveData(meta, data, start, count) {
        const { iScale: iScale , vScale: vScale  } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index4;
        for(i = 0, ilen = count; i < ilen; ++i){
            index4 = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index4], index4),
                [vAxis]: vScale.parse(data[index4], index4)
            };
        }
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const { xScale: xScale , yScale: yScale  } = meta;
        const parsed = new Array(count);
        let i, ilen, index5, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index5 = i + start;
            item = data[index5];
            parsed[i] = {
                x: xScale.parse(item[0], index5),
                y: yScale.parse(item[1], index5)
            };
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const { xScale: xScale , yScale: yScale  } = meta;
        const { xAxisKey: xAxisKey = "x" , yAxisKey: yAxisKey = "y"  } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index6, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index6 = i + start;
            item = data[index6];
            parsed[i] = {
                x: xScale.parse((0, $43add8e050c146e1$export$2d1720544b23b823)(item, xAxisKey), index6),
                y: yScale.parse((0, $43add8e050c146e1$export$2d1720544b23b823)(item, yAxisKey), index6)
            };
        }
        return parsed;
    }
    getParsed(index7) {
        return this._cachedMeta._parsed[index7];
    }
    getDataElement(index8) {
        return this._cachedMeta.data[index8];
    }
    applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: $22a5eaf847bb8284$var$getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]
        };
        return $22a5eaf847bb8284$var$applyStack(stack, value, meta.index, {
            mode: mode
        });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = $22a5eaf847bb8284$var$applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = $22a5eaf847bb8284$var$createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin , max: otherMax  } = $22a5eaf847bb8284$var$getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !(0, $43add8e050c146e1$export$39b482c5e57630a8)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) break;
        }
        if (sorted) for(i = ilen - 1; i >= 0; --i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            break;
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if ((0, $43add8e050c146e1$export$39b482c5e57630a8)(value)) values.push(value);
        }
        return values;
    }
    getMaxOverflow() {
        return false;
    }
    getLabelAndValue(index9) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index9);
        return {
            label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
            value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
        };
    }
    _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || "default");
        meta._clip = $22a5eaf847bb8284$var$toClip((0, $43add8e050c146e1$export$90a7f3efeed30595)(this.options.clip, $22a5eaf847bb8284$var$defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements1 = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements1.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
        for(i = start; i < start + count; ++i){
            const element = elements1[i];
            if (element.hidden) continue;
            if (element.active && drawActiveElementsOnTop) active.push(element);
            else element.draw(ctx, area);
        }
        for(i = 0; i < active.length; ++i)active[i].draw(ctx, area);
    }
    getStyle(index10, active) {
        const mode = active ? "active" : "default";
        return index10 === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index10 || 0, mode);
    }
    getContext(index11, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index11 >= 0 && index11 < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index11];
            context = element.$context || (element.$context = $22a5eaf847bb8284$var$createDataContext(this.getContext(), index11, element));
            context.parsed = this.getParsed(index11);
            context.raw = dataset.data[index11];
            context.index = context.dataIndex = index11;
        } else {
            context = this.$context || (this.$context = $22a5eaf847bb8284$var$createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
    resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index12, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index12);
    }
    _resolveElementOptions(elementType, mode = "default", index13) {
        const active = mode === "active";
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + "-" + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && (0, $43add8e050c146e1$export$35e795649ee09318)(index13);
        if (cached) return $22a5eaf847bb8284$var$cloneIfNotShared(cached, sharing);
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            "hover",
            elementType,
            ""
        ] : [
            elementType,
            ""
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys((0, $43add8e050c146e1$export$4368d992c4eafac0).elements[elementType]);
        const context = ()=>this.getContext(index13, active);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze($22a5eaf847bb8284$var$cloneIfNotShared(values, sharing));
        }
        return values;
    }
    _resolveAnimations(index14, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) return cached;
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index14, active, transition));
        }
        const animations = new $22a5eaf847bb8284$export$8ab227dac26677d(chart, options && options.animations);
        if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
        return animations;
    }
    getSharedOptions(options) {
        if (!options.$shared) return;
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
        return !sharedOptions || $22a5eaf847bb8284$var$isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    updateElement(element, index15, properties, mode) {
        if ($22a5eaf847bb8284$var$isDirectUpdateMode(mode)) Object.assign(element, properties);
        else this._resolveAnimations(index15, mode).update(element, properties);
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !$22a5eaf847bb8284$var$isDirectUpdateMode(mode)) this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
    _setStyle(element, index16, mode, active) {
        element.active = active;
        const options = this.getStyle(index16, active);
        this._resolveAnimations(index16, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index17) {
        this._setStyle(element, index17, "active", false);
    }
    setHoverStyle(element, datasetIndex, index18) {
        this._setStyle(element, index18, "active", true);
    }
    _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", false);
    }
    _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", true);
    }
    _resyncElements(resetNewElements) {
        const data = this._data;
        const elements2 = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList)this[method](arg1, arg2);
        this._syncList = [];
        const numMeta = elements2.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) this.parse(0, count);
        if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
        else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
    }
    _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--)arr[i] = arr[i - count];
        };
        move(data);
        for(i = start; i < end; ++i)data[i] = new this.dataElementType();
        if (this._parsing) move(meta._parsed);
        this.parse(start, count);
        if (resetNewElements) this.updateElements(data, start, count, "reset");
    }
    updateElements(element, start, count, mode) {}
    _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) $22a5eaf847bb8284$var$clearStacks(meta, removed);
        }
        meta.data.splice(start, count);
    }
    _sync(args) {
        if (this._parsing) this._syncList.push(args);
        else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            "_insertElements",
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            "_removeElements",
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            "_removeElements",
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) this._sync([
            "_removeElements",
            start,
            count
        ]);
        const newCount = arguments.length - 2;
        if (newCount) this._sync([
            "_insertElements",
            start,
            newCount
        ]);
    }
    _onDataUnshift() {
        this._sync([
            "_insertElements",
            0,
            arguments.length
        ]);
    }
}
$22a5eaf847bb8284$export$75572ec5c55b4048.defaults = {};
$22a5eaf847bb8284$export$75572ec5c55b4048.prototype.datasetElementType = null;
$22a5eaf847bb8284$export$75572ec5c55b4048.prototype.dataElementType = null;
function $22a5eaf847bb8284$var$getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++)values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        scale._cache.$bar = (0, $43add8e050c146e1$export$71511d61b312f219)(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
function $22a5eaf847bb8284$var$computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = $22a5eaf847bb8284$var$getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) return;
        if ((0, $43add8e050c146e1$export$35e795649ee09318)(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
function $22a5eaf847bb8284$var$computeFitCategoryTraits(index19, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio: ratio,
        start: ruler.pixels[index19] - size / 2
    };
}
function $22a5eaf847bb8284$var$computeFlexCategoryTraits(index20, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index20];
    let prev = index20 > 0 ? pixels[index20 - 1] : null;
    let next = index20 < pixels.length - 1 ? pixels[index20 + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    if (next === null) next = curr + curr - prev;
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start: start
    };
}
function $22a5eaf847bb8284$var$parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart: barStart,
        barEnd: barEnd,
        start: startValue,
        end: endValue,
        min: min,
        max: max
    };
}
function $22a5eaf847bb8284$var$parseValue(entry, item, vScale, i) {
    if ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(entry)) $22a5eaf847bb8284$var$parseFloatBar(entry, item, vScale, i);
    else item[vScale.axis] = vScale.parse(entry, i);
    return item;
}
function $22a5eaf847bb8284$var$parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push($22a5eaf847bb8284$var$parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function $22a5eaf847bb8284$var$isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function $22a5eaf847bb8284$var$barSign(size, vScale, actualBase) {
    if (size !== 0) return (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(size);
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function $22a5eaf847bb8284$var$borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = "left";
        end = "right";
    } else {
        reverse = properties.base < properties.y;
        start = "bottom";
        end = "top";
    }
    if (reverse) {
        top = "end";
        bottom = "start";
    } else {
        top = "start";
        bottom = "end";
    }
    return {
        start: start,
        end: end,
        reverse: reverse,
        top: top,
        bottom: bottom
    };
}
function $22a5eaf847bb8284$var$setBorderSkipped(properties, options, stack, index21) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    const { start: start , end: end , reverse: reverse , top: top , bottom: bottom  } = $22a5eaf847bb8284$var$borderProps(properties);
    if (edge === "middle" && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index21) edge = top;
        else if ((stack._bottom || 0) === index21) edge = bottom;
        else {
            res[$22a5eaf847bb8284$var$parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[$22a5eaf847bb8284$var$parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function $22a5eaf847bb8284$var$parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = $22a5eaf847bb8284$var$swap(edge, a, b);
        edge = $22a5eaf847bb8284$var$startEnd(edge, b, a);
    } else edge = $22a5eaf847bb8284$var$startEnd(edge, a, b);
    return edge;
}
function $22a5eaf847bb8284$var$swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function $22a5eaf847bb8284$var$startEnd(v, start, end) {
    return v === "start" ? start : v === "end" ? end : v;
}
function $22a5eaf847bb8284$var$setInflateAmount(properties, { inflateAmount: inflateAmount  }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class $22a5eaf847bb8284$export$e97d5dc64e999004 extends $22a5eaf847bb8284$export$75572ec5c55b4048 {
    parsePrimitiveData(meta, data, start, count) {
        return $22a5eaf847bb8284$var$parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
        return $22a5eaf847bb8284$var$parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        const { iScale: iScale , vScale: vScale  } = meta;
        const { xAxisKey: xAxisKey = "x" , yAxisKey: yAxisKey = "y"  } = this._parsing;
        const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse((0, $43add8e050c146e1$export$2d1720544b23b823)(obj, iAxisKey), i);
            parsed.push($22a5eaf847bb8284$var$parseValue((0, $43add8e050c146e1$export$2d1720544b23b823)(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(index22) {
        const meta = this._cachedMeta;
        const { iScale: iScale , vScale: vScale  } = meta;
        const parsed = this.getParsed(index22);
        const custom = parsed._custom;
        const value = $22a5eaf847bb8284$var$isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
            value: value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === "reset";
        const { index: index23 , _cachedMeta: { vScale: vScale  }  } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || (0, $43add8e050c146e1$export$342063e11d6c3cad)(parsed[vScale.axis]) ? {
                base: base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal: horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || $22a5eaf847bb8284$var$isFloatBar(parsed._custom) || index23 === stack._top || index23 === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
            const options = properties.options || bars[i].options;
            $22a5eaf847bb8284$var$setBorderSkipped(properties, options, stack, index23);
            $22a5eaf847bb8284$var$setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
    _getStacks(last, dataIndex) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const metasets = iScale.getMatchingVisibleMetas(this._type);
        const stacked = iScale.options.stacked;
        const ilen = metasets.length;
        const stacks = [];
        let i, item;
        for(i = 0; i < ilen; ++i){
            item = metasets[i];
            if (!item.controller.options.grouped) continue;
            if (typeof dataIndex !== "undefined") {
                const val = item.controller.getParsed(dataIndex)[item.controller._cachedMeta.vScale.axis];
                if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(val) || isNaN(val)) continue;
            }
            if (stacked === false || stacks.indexOf(item.stack) === -1 || stacked === undefined && item.stack === undefined) stacks.push(item.stack);
            if (item.index === last) break;
        }
        if (!stacks.length) stacks.push(undefined);
        return stacks;
    }
    _getStackCount(index24) {
        return this._getStacks(undefined, index24).length;
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index25 = name !== undefined ? stacks.indexOf(name) : -1;
        return index25 === -1 ? stacks.length - 1 : index25;
    }
    _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i)pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        const barThickness = opts.barThickness;
        const min = barThickness || $22a5eaf847bb8284$var$computeMinSampleSize(meta);
        return {
            min: min,
            pixels: pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
    _calculateBarValuePixels(index26) {
        const { _cachedMeta: { vScale: vScale , _stacked: _stacked  } , options: { base: baseValue , minBarLength: minBarLength  }  } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index26);
        const custom = parsed._custom;
        const floating = $22a5eaf847bb8284$var$isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(value) !== (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(custom.barEnd)) start = 0;
            start += value;
        }
        const startValue = !(0, $43add8e050c146e1$export$342063e11d6c3cad)(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index26)) head = vScale.getPixelForValue(start + length);
        else head = base;
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = $22a5eaf847bb8284$var$barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) base -= size / 2;
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size: size,
            base: base,
            head: head,
            center: head + size / 2
        };
    }
    _calculateBarIndexPixels(index27, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = (0, $43add8e050c146e1$export$90a7f3efeed30595)(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index27) : ruler.stackCount;
            const range = options.barThickness === "flex" ? $22a5eaf847bb8284$var$computeFlexCategoryTraits(index27, ruler, options, stackCount) : $22a5eaf847bb8284$var$computeFitCategoryTraits(index27, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index27 : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index27)[scale.axis], index27);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center: center,
            size: size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i)if (this.getParsed(i)[vScale.axis] !== null) rects[i].draw(this._ctx);
    }
}
$22a5eaf847bb8284$export$e97d5dc64e999004.id = "bar";
$22a5eaf847bb8284$export$e97d5dc64e999004.defaults = {
    datasetElementType: false,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: true,
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "base",
                "width",
                "height"
            ]
        }
    }
};
$22a5eaf847bb8284$export$e97d5dc64e999004.overrides = {
    scales: {
        _index_: {
            type: "category",
            offset: true,
            grid: {
                offset: true
            }
        },
        _value_: {
            type: "linear",
            beginAtZero: true
        }
    }
};
class $22a5eaf847bb8284$export$19b5c4773f17abe extends $22a5eaf847bb8284$export$75572ec5c55b4048 {
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++)parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, $43add8e050c146e1$export$90a7f3efeed30595)(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, $43add8e050c146e1$export$90a7f3efeed30595)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        return max > 0 && max;
    }
    getLabelAndValue(index28) {
        const meta = this._cachedMeta;
        const { xScale: xScale , yScale: yScale  } = meta;
        const parsed = this.getParsed(index28);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: meta.label,
            value: "(" + x + ", " + y + (r ? ", " + r : "") + ")"
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale: iScale , vScale: vScale  } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
                if (reset) properties.options.radius = 0;
            }
            this.updateElement(point, i, properties, mode);
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    resolveDataElementOptions(index29, mode) {
        const parsed = this.getParsed(index29);
        let values = super.resolveDataElementOptions(index29, mode);
        if (values.$shared) values = Object.assign({}, values, {
            $shared: false
        });
        const radius = values.radius;
        if (mode !== "active") values.radius = 0;
        values.radius += (0, $43add8e050c146e1$export$90a7f3efeed30595)(parsed && parsed._custom, radius);
        return values;
    }
}
$22a5eaf847bb8284$export$19b5c4773f17abe.id = "bubble";
$22a5eaf847bb8284$export$19b5c4773f17abe.defaults = {
    datasetElementType: false,
    dataElementType: "point",
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "borderWidth",
                "radius"
            ]
        }
    }
};
$22a5eaf847bb8284$export$19b5c4773f17abe.overrides = {
    scales: {
        x: {
            type: "linear"
        },
        y: {
            type: "linear"
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                title () {
                    return "";
                }
            }
        }
    }
};
function $22a5eaf847bb8284$var$getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < (0, $43add8e050c146e1$export$971d5caa766a69d7)) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>(0, $43add8e050c146e1$export$ffb5f4729a158638)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>(0, $43add8e050c146e1$export$ffb5f4729a158638)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax((0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd), startY, endY);
        const minX = calcMin((0, $43add8e050c146e1$export$56c0d5a1e737357d), startX, endX);
        const minY = calcMin((0, $43add8e050c146e1$export$56c0d5a1e737357d) + (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd), startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX: ratioX,
        ratioY: ratioY,
        offsetX: offsetX,
        offsetY: offsetY
    };
}
class $22a5eaf847bb8284$export$e04603e7d8b77172 extends $22a5eaf847bb8284$export$75572ec5c55b4048 {
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
    parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) meta._parsed = data;
        else {
            let getter = (i)=>+data[i];
            if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(data[start])) {
                const { key: key = "value"  } = this._parsing;
                getter = (i)=>+(0, $43add8e050c146e1$export$2d1720544b23b823)(data[i], key);
            }
            let i1, ilen;
            for(i1 = start, ilen = start + count; i1 < ilen; ++i1)meta._parsed[i1] = getter(i1);
        }
    }
    _getRotation() {
        return (0, $43add8e050c146e1$export$625550452a3fa3ec)(this.options.rotation - 90);
    }
    _getCircumference() {
        return (0, $43add8e050c146e1$export$625550452a3fa3ec)(this.options.circumference);
    }
    _getRotationExtents() {
        let min = (0, $43add8e050c146e1$export$971d5caa766a69d7);
        let max = -(0, $43add8e050c146e1$export$971d5caa766a69d7);
        for(let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i)) {
            const controller = this.chart.getDatasetMeta(i).controller;
            const rotation = controller._getRotation();
            const circumference = controller._getCircumference();
            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
    update(mode) {
        const chart = this.chart;
        const { chartArea: chartArea  } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min((0, $43add8e050c146e1$export$953cecd6e717a553)(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference: circumference , rotation: rotation  } = this._getRotationExtents();
        const { ratioX: ratioX , ratioY: ratioY , offsetX: offsetX , offsetY: offsetY  } = $22a5eaf847bb8284$var$getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = (0, $43add8e050c146e1$export$7ccc53e8f1e7dfc5)(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) return 0;
        return this.calculateCircumference(meta._parsed[i] * circumference / (0, $43add8e050c146e1$export$971d5caa766a69d7));
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i)startAngle += this._circumference(i, reset);
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle: startAngle,
                endAngle: startAngle + circumference,
                circumference: circumference,
                outerRadius: outerRadius,
                innerRadius: innerRadius
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? "active" : mode);
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) total += Math.abs(value);
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) return (0, $43add8e050c146e1$export$971d5caa766a69d7) * (Math.abs(value) / total);
        return 0;
    }
    getLabelAndValue(index30) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, $43add8e050c146e1$export$ae1af26003f05816)(meta._parsed[index30], chart.options.locale);
        return {
            label: labels[index30] || "",
            value: value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i)if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
            }
        }
        if (!arcs) return 0;
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== "inner") max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
    _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i)if (this.chart.isDatasetVisible(i)) ringWeightOffset += this._getRingWeight(i);
        return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
        return Math.max((0, $43add8e050c146e1$export$90a7f3efeed30595)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
$22a5eaf847bb8284$export$e04603e7d8b77172.id = "doughnut";
$22a5eaf847bb8284$export$e04603e7d8b77172.defaults = {
    datasetElementType: false,
    dataElementType: "arc",
    animation: {
        animateRotate: true,
        animateScale: false
    },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing"
            ]
        }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
};
$22a5eaf847bb8284$export$e04603e7d8b77172.descriptors = {
    _scriptable: (name)=>name !== "spacing",
    _indexable: (name)=>name !== "spacing"
};
$22a5eaf847bb8284$export$e04603e7d8b77172.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        const { labels: { pointStyle: pointStyle  }  } = chart.legend.options;
                        return data.labels.map((label, i)=>{
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);
                            return {
                                text: label,
                                fillStyle: style.backgroundColor,
                                strokeStyle: style.borderColor,
                                lineWidth: style.borderWidth,
                                pointStyle: pointStyle,
                                hidden: !chart.getDataVisibility(i),
                                index: i
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (e, legendItem, legend) {
                legend.chart.toggleDataVisibility(legendItem.index);
                legend.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (tooltipItem) {
                    let dataLabel = tooltipItem.label;
                    const value = ": " + tooltipItem.formattedValue;
                    if ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(dataLabel)) {
                        dataLabel = dataLabel.slice();
                        dataLabel[0] += value;
                    } else dataLabel += value;
                    return dataLabel;
                }
            }
        }
    }
};
class $22a5eaf847bb8284$export$3c9b5d28c11cbfd0 extends $22a5eaf847bb8284$export$75572ec5c55b4048 {
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line , data: points = [] , _dataset: _dataset  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start: start , count: count  } = $22a5eaf847bb8284$var$getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ($22a5eaf847bb8284$var$scaleRangesChanged(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) options.borderWidth = 0;
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options: options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale: iScale , vScale: vScale , _stacked: _stacked , _dataset: _dataset  } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps: spanGaps , segment: segment  } = this.options;
        const maxGapLength = (0, $43add8e050c146e1$export$9e5f44173e64f162)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, $43add8e050c146e1$export$342063e11d6c3cad)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}
$22a5eaf847bb8284$export$3c9b5d28c11cbfd0.id = "line";
$22a5eaf847bb8284$export$3c9b5d28c11cbfd0.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: true,
    spanGaps: false
};
$22a5eaf847bb8284$export$3c9b5d28c11cbfd0.overrides = {
    scales: {
        _index_: {
            type: "category"
        },
        _value_: {
            type: "linear"
        }
    }
};
function $22a5eaf847bb8284$var$getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale: iScale , _parsed: _parsed  } = meta;
        const axis = iScale.axis;
        const { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = iScale.getUserBounds();
        if (minDefined) start = (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(Math.min((0, $43add8e050c146e1$export$d141bba7fdc215a3)(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : (0, $43add8e050c146e1$export$d141bba7fdc215a3)(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
        if (maxDefined) count = (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(Math.max((0, $43add8e050c146e1$export$d141bba7fdc215a3)(_parsed, iScale.axis, max).hi + 1, animationsDisabled ? 0 : (0, $43add8e050c146e1$export$d141bba7fdc215a3)(points, axis, iScale.getPixelForValue(max)).hi + 1), start, pointCount) - start;
        else count = pointCount - start;
    }
    return {
        start: start,
        count: count
    };
}
function $22a5eaf847bb8284$var$scaleRangesChanged(meta) {
    const { xScale: xScale , yScale: yScale , _scaleRanges: _scaleRanges  } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}
class $22a5eaf847bb8284$export$2a270b3a0d973c85 extends $22a5eaf847bb8284$export$75572ec5c55b4048 {
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index31) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, $43add8e050c146e1$export$ae1af26003f05816)(meta._parsed[index31].r, chart.options.locale);
        return {
            label: labels[index31] || "",
            value: value
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, $43add8e050c146e1$export$4a5767248b18ef41).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index32)=>{
            const parsed = this.getParsed(index32).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index32)) {
                if (parsed < range.min) range.min = parsed;
                if (parsed > range.max) range.max = parsed;
            }
        });
        return range;
    }
    _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * (0, $43add8e050c146e1$export$56c0d5a1e737357d);
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i)angle += this._computeAngle(i, mode, defaultAngle);
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) outerRadius = 0;
                if (animationOpts.animateRotate) startAngle = endAngle = datasetStartAngle;
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius: outerRadius,
                startAngle: startAngle,
                endAngle: endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? "active" : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index33)=>{
            if (!isNaN(this.getParsed(index33).r) && this.chart.getDataVisibility(index33)) count++;
        });
        return count;
    }
    _computeAngle(index34, mode, defaultAngle) {
        return this.chart.getDataVisibility(index34) ? (0, $43add8e050c146e1$export$625550452a3fa3ec)(this.resolveDataElementOptions(index34, mode).angle || defaultAngle) : 0;
    }
}
$22a5eaf847bb8284$export$2a270b3a0d973c85.id = "polarArea";
$22a5eaf847bb8284$export$2a270b3a0d973c85.defaults = {
    dataElementType: "arc",
    animation: {
        animateRotate: true,
        animateScale: true
    },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius"
            ]
        }
    },
    indexAxis: "r",
    startAngle: 0
};
$22a5eaf847bb8284$export$2a270b3a0d973c85.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        const { labels: { pointStyle: pointStyle  }  } = chart.legend.options;
                        return data.labels.map((label, i)=>{
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);
                            return {
                                text: label,
                                fillStyle: style.backgroundColor,
                                strokeStyle: style.borderColor,
                                lineWidth: style.borderWidth,
                                pointStyle: pointStyle,
                                hidden: !chart.getDataVisibility(i),
                                index: i
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (e, legendItem, legend) {
                legend.chart.toggleDataVisibility(legendItem.index);
                legend.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (context) {
                    return context.chart.data.labels[context.dataIndex] + ": " + context.formattedValue;
                }
            }
        }
    },
    scales: {
        r: {
            type: "radialLinear",
            angleLines: {
                display: false
            },
            beginAtZero: true,
            grid: {
                circular: true
            },
            pointLabels: {
                display: false
            },
            startAngle: 0
        }
    }
};
class $22a5eaf847bb8284$export$b21a3f1286706191 extends $22a5eaf847bb8284$export$e04603e7d8b77172 {
}
$22a5eaf847bb8284$export$b21a3f1286706191.id = "pie";
$22a5eaf847bb8284$export$b21a3f1286706191.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
};
class $22a5eaf847bb8284$export$48dbc6ac651bf8be extends $22a5eaf847bb8284$export$75572ec5c55b4048 {
    getLabelAndValue(index35) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index35);
        return {
            label: vScale.getLabels()[index35],
            value: "" + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, $43add8e050c146e1$export$4a5767248b18ef41).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== "resize") {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) options.borderWidth = 0;
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options: options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === "reset";
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x: x,
                y: y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options: options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}
$22a5eaf847bb8284$export$48dbc6ac651bf8be.id = "radar";
$22a5eaf847bb8284$export$48dbc6ac651bf8be.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: true,
    elements: {
        line: {
            fill: "start"
        }
    }
};
$22a5eaf847bb8284$export$48dbc6ac651bf8be.overrides = {
    aspectRatio: 1,
    scales: {
        r: {
            type: "radialLinear"
        }
    }
};
class $22a5eaf847bb8284$export$b2f2bae6713db87 extends $22a5eaf847bb8284$export$3c9b5d28c11cbfd0 {
}
$22a5eaf847bb8284$export$b2f2bae6713db87.id = "scatter";
$22a5eaf847bb8284$export$b2f2bae6713db87.defaults = {
    showLine: false,
    fill: false
};
$22a5eaf847bb8284$export$b2f2bae6713db87.overrides = {
    interaction: {
        mode: "point"
    },
    plugins: {
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (item) {
                    return "(" + item.label + ", " + item.formattedValue + ")";
                }
            }
        }
    },
    scales: {
        x: {
            type: "linear"
        },
        y: {
            type: "linear"
        }
    }
};
var $22a5eaf847bb8284$export$a6506504f799c5d5 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BarController: $22a5eaf847bb8284$export$e97d5dc64e999004,
    BubbleController: $22a5eaf847bb8284$export$19b5c4773f17abe,
    DoughnutController: $22a5eaf847bb8284$export$e04603e7d8b77172,
    LineController: $22a5eaf847bb8284$export$3c9b5d28c11cbfd0,
    PolarAreaController: $22a5eaf847bb8284$export$2a270b3a0d973c85,
    PieController: $22a5eaf847bb8284$export$b21a3f1286706191,
    RadarController: $22a5eaf847bb8284$export$48dbc6ac651bf8be,
    ScatterController: $22a5eaf847bb8284$export$b2f2bae6713db87
});
function $22a5eaf847bb8284$var$abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class $22a5eaf847bb8284$var$DateAdapter {
    constructor(options){
        this.options = options || {};
    }
    formats() {
        return $22a5eaf847bb8284$var$abstract();
    }
    parse(value, format) {
        return $22a5eaf847bb8284$var$abstract();
    }
    format(timestamp, format) {
        return $22a5eaf847bb8284$var$abstract();
    }
    add(timestamp, amount, unit) {
        return $22a5eaf847bb8284$var$abstract();
    }
    diff(a, b, unit) {
        return $22a5eaf847bb8284$var$abstract();
    }
    startOf(timestamp, unit, weekday) {
        return $22a5eaf847bb8284$var$abstract();
    }
    endOf(timestamp, unit) {
        return $22a5eaf847bb8284$var$abstract();
    }
}
$22a5eaf847bb8284$var$DateAdapter.override = function(members) {
    Object.assign($22a5eaf847bb8284$var$DateAdapter.prototype, members);
};
var $22a5eaf847bb8284$export$f32766ea09ec8bc4 = {
    _date: $22a5eaf847bb8284$var$DateAdapter
};
function $22a5eaf847bb8284$var$binarySearch(metaset, axis, value, intersect) {
    const { controller: controller , data: data , _sorted: _sorted  } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? (0, $43add8e050c146e1$export$ebd11618f299a286) : (0, $43add8e050c146e1$export$d141bba7fdc215a3);
        if (!intersect) return lookupMethod(data, axis, value);
        else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === "function" && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
function $22a5eaf847bb8284$var$evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index: index36 , data: data  } = metasets[i];
        const { lo: lo , hi: hi  } = $22a5eaf847bb8284$var$binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) handler(element, index36, j);
        }
    }
}
function $22a5eaf847bb8284$var$getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
function $22a5eaf847bb8284$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) return items;
    const evaluationFunc = function(element, datasetIndex, index37) {
        if (!includeInvisible && !(0, $43add8e050c146e1$export$ef35774e6d314e91)(element, chart.chartArea, 0)) return;
        if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index37
        });
    };
    $22a5eaf847bb8284$var$evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
function $22a5eaf847bb8284$var$getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index38) {
        const { startAngle: startAngle , endAngle: endAngle  } = element.getProps([
            "startAngle",
            "endAngle"
        ], useFinalPosition);
        const { angle: angle  } = (0, $43add8e050c146e1$export$e7094788287c5e9b)(element, {
            x: position.x,
            y: position.y
        });
        if ((0, $43add8e050c146e1$export$ffb5f4729a158638)(angle, startAngle, endAngle)) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index38
        });
    }
    $22a5eaf847bb8284$var$evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function $22a5eaf847bb8284$var$getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = $22a5eaf847bb8284$var$getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index39) {
        const inRange1 = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange1) return;
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange1) return;
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element: element,
                    datasetIndex: datasetIndex,
                    index: index39
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index39
        });
    }
    $22a5eaf847bb8284$var$evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function $22a5eaf847bb8284$var$getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) return [];
    return axis === "r" && !intersect ? $22a5eaf847bb8284$var$getNearestRadialItems(chart, position, axis, useFinalPosition) : $22a5eaf847bb8284$var$getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function $22a5eaf847bb8284$var$getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    $22a5eaf847bb8284$var$evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index40)=>{
        if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element: element,
                datasetIndex: datasetIndex,
                index: index40
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) return [];
    return items;
}
var $22a5eaf847bb8284$export$a13296960cae0384 = {
    evaluateInteractionItems: $22a5eaf847bb8284$var$evaluateInteractionItems,
    modes: {
        index (chart, e, options, useFinalPosition) {
            const position = (0, $43add8e050c146e1$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "x";
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? $22a5eaf847bb8284$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : $22a5eaf847bb8284$var$getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements3 = [];
            if (!items.length) return [];
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index41 = items[0].index;
                const element = meta.data[index41];
                if (element && !element.skip) elements3.push({
                    element: element,
                    datasetIndex: meta.index,
                    index: index41
                });
            });
            return elements3;
        },
        dataset (chart, e, options, useFinalPosition) {
            const position = (0, $43add8e050c146e1$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? $22a5eaf847bb8284$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : $22a5eaf847bb8284$var$getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i)items.push({
                    element: data[i],
                    datasetIndex: datasetIndex,
                    index: i
                });
            }
            return items;
        },
        point (chart, e, options, useFinalPosition) {
            const position = (0, $43add8e050c146e1$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return $22a5eaf847bb8284$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
        nearest (chart, e, options, useFinalPosition) {
            const position = (0, $43add8e050c146e1$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return $22a5eaf847bb8284$var$getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
        x (chart, e, options, useFinalPosition) {
            const position = (0, $43add8e050c146e1$export$df995fae86a55f06)(e, chart);
            return $22a5eaf847bb8284$var$getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
        },
        y (chart, e, options, useFinalPosition) {
            const position = (0, $43add8e050c146e1$export$df995fae86a55f06)(e, chart);
            return $22a5eaf847bb8284$var$getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
        }
    }
};
const $22a5eaf847bb8284$var$STATIC_POSITIONS = [
    "left",
    "top",
    "right",
    "bottom"
];
function $22a5eaf847bb8284$var$filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function $22a5eaf847bb8284$var$filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>$22a5eaf847bb8284$var$STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function $22a5eaf847bb8284$var$sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function $22a5eaf847bb8284$var$wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos , options: { stack: stack , stackWeight: stackWeight = 1  }  } = box);
        layoutBoxes.push({
            index: i,
            box: box,
            pos: pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight: stackWeight
        });
    }
    return layoutBoxes;
}
function $22a5eaf847bb8284$var$buildStacks(layouts1) {
    const stacks = {};
    for (const wrap of layouts1){
        const { stack: stack , pos: pos , stackWeight: stackWeight  } = wrap;
        if (!stack || !$22a5eaf847bb8284$var$STATIC_POSITIONS.includes(pos)) continue;
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
function $22a5eaf847bb8284$var$setLayoutDims(layouts2, params) {
    const stacks = $22a5eaf847bb8284$var$buildStacks(layouts2);
    const { vBoxMaxWidth: vBoxMaxWidth , hBoxMaxHeight: hBoxMaxHeight  } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts2.length; i < ilen; ++i){
        layout = layouts2[i];
        const { fullSize: fullSize  } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function $22a5eaf847bb8284$var$buildLayoutBoxes(boxes) {
    const layoutBoxes = $22a5eaf847bb8284$var$wrapBoxes(boxes);
    const fullSize = $22a5eaf847bb8284$var$sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = $22a5eaf847bb8284$var$sortByWeight($22a5eaf847bb8284$var$filterByPosition(layoutBoxes, "left"), true);
    const right = $22a5eaf847bb8284$var$sortByWeight($22a5eaf847bb8284$var$filterByPosition(layoutBoxes, "right"));
    const top = $22a5eaf847bb8284$var$sortByWeight($22a5eaf847bb8284$var$filterByPosition(layoutBoxes, "top"), true);
    const bottom = $22a5eaf847bb8284$var$sortByWeight($22a5eaf847bb8284$var$filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = $22a5eaf847bb8284$var$filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = $22a5eaf847bb8284$var$filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
        fullSize: fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: $22a5eaf847bb8284$var$filterByPosition(layoutBoxes, "chartArea"),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function $22a5eaf847bb8284$var$getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function $22a5eaf847bb8284$var$updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function $22a5eaf847bb8284$var$updateDims(chartArea, params, layout, stacks) {
    const { pos: pos , box: box  } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!(0, $43add8e050c146e1$export$23f2a1d2818174ef)(pos)) {
        if (layout.size) chartArea[pos] -= layout.size;
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) $22a5eaf847bb8284$var$updateMaxPadding(maxPadding, box.getPadding());
    const newWidth = Math.max(0, params.outerWidth - $22a5eaf847bb8284$var$getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - $22a5eaf847bb8284$var$getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function $22a5eaf847bb8284$var$handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
}
function $22a5eaf847bb8284$var$getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        "left",
        "right"
    ]) : marginForPositions([
        "top",
        "bottom"
    ]);
}
function $22a5eaf847bb8284$var$fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, $22a5eaf847bb8284$var$getMargins(layout.horizontal, chartArea));
        const { same: same , other: other  } = $22a5eaf847bb8284$var$updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) refitBoxes.push(layout);
    }
    return refit && $22a5eaf847bb8284$var$fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function $22a5eaf847bb8284$var$setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function $22a5eaf847bb8284$var$placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x: x , y: y  } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if ((0, $43add8e050c146e1$export$35e795649ee09318)(stack.start)) y = stack.start;
            if (box.fullSize) $22a5eaf847bb8284$var$setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            else $22a5eaf847bb8284$var$setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height = chartArea.h * weight;
            const width = stack.size || box.width;
            if ((0, $43add8e050c146e1$export$35e795649ee09318)(stack.start)) x = stack.start;
            if (box.fullSize) $22a5eaf847bb8284$var$setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
            else $22a5eaf847bb8284$var$setBoxDims(box, x, chartArea.top + stack.placed, width, height);
            stack.start = x;
            stack.placed += height;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
(0, $43add8e050c146e1$export$4368d992c4eafac0).set("layout", {
    autoPadding: true,
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
var $22a5eaf847bb8284$export$1ecca0613f5e56d2 = {
    addBox (chart, item) {
        if (!chart.boxes) chart.boxes = [];
        item.fullSize = item.fullSize || false;
        item.position = item.position || "top";
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
    removeBox (chart, layoutItem) {
        const index42 = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index42 !== -1) chart.boxes.splice(index42, 1);
    },
    configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
    update (chart, width, height, minPadding) {
        if (!chart) return;
        const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = $22a5eaf847bb8284$var$buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === "function") box.beforeLayout();
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding: padding,
            availableWidth: availableWidth,
            availableHeight: availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        $22a5eaf847bb8284$var$updateMaxPadding(maxPadding, (0, $43add8e050c146e1$export$96f57966bedc81b4)(minPadding));
        const chartArea = Object.assign({
            maxPadding: maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = $22a5eaf847bb8284$var$setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        $22a5eaf847bb8284$var$fitBoxes(boxes.fullSize, chartArea, params, stacks);
        $22a5eaf847bb8284$var$fitBoxes(verticalBoxes, chartArea, params, stacks);
        if ($22a5eaf847bb8284$var$fitBoxes(horizontalBoxes, chartArea, params, stacks)) $22a5eaf847bb8284$var$fitBoxes(verticalBoxes, chartArea, params, stacks);
        $22a5eaf847bb8284$var$handleMaxPadding(chartArea);
        $22a5eaf847bb8284$var$placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        $22a5eaf847bb8284$var$placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class $22a5eaf847bb8284$export$7b1aeb87f31f7da8 {
    acquireContext(canvas, aspectRatio) {}
    releaseContext(context) {
        return false;
    }
    addEventListener(chart, type, listener) {}
    removeEventListener(chart, type, listener) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width: width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
    isAttached(canvas) {
        return true;
    }
    updateConfig(config) {}
}
class $22a5eaf847bb8284$export$a40a96b24b46cf35 extends $22a5eaf847bb8284$export$7b1aeb87f31f7da8 {
    acquireContext(item) {
        return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}
const $22a5eaf847bb8284$var$EXPANDO_KEY = "$chartjs";
const $22a5eaf847bb8284$var$EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
};
const $22a5eaf847bb8284$var$isNullOrEmpty = (value)=>value === null || value === "";
function $22a5eaf847bb8284$var$initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[$22a5eaf847bb8284$var$EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if ($22a5eaf847bb8284$var$isNullOrEmpty(renderWidth)) {
        const displayWidth = (0, $43add8e050c146e1$export$9bb611d729802a56)(canvas, "width");
        if (displayWidth !== undefined) canvas.width = displayWidth;
    }
    if ($22a5eaf847bb8284$var$isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === "") canvas.height = canvas.width / (aspectRatio || 2);
        else {
            const displayHeight = (0, $43add8e050c146e1$export$9bb611d729802a56)(canvas, "height");
            if (displayHeight !== undefined) canvas.height = displayHeight;
        }
    }
    return canvas;
}
const $22a5eaf847bb8284$var$eventListenerOptions = (0, $43add8e050c146e1$export$3466f893ebf79586) ? {
    passive: true
} : false;
function $22a5eaf847bb8284$var$addListener(node, type, listener) {
    node.addEventListener(type, listener, $22a5eaf847bb8284$var$eventListenerOptions);
}
function $22a5eaf847bb8284$var$removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, $22a5eaf847bb8284$var$eventListenerOptions);
}
function $22a5eaf847bb8284$var$fromNativeEvent(event, chart) {
    const type = $22a5eaf847bb8284$var$EVENT_TYPES[event.type] || event.type;
    const { x: x , y: y  } = (0, $43add8e050c146e1$export$df995fae86a55f06)(event, chart);
    return {
        type: type,
        chart: chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function $22a5eaf847bb8284$var$nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) return true;
    }
}
function $22a5eaf847bb8284$var$createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || $22a5eaf847bb8284$var$nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !$22a5eaf847bb8284$var$nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function $22a5eaf847bb8284$var$createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || $22a5eaf847bb8284$var$nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !$22a5eaf847bb8284$var$nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const $22a5eaf847bb8284$var$drpListeningCharts = new Map();
let $22a5eaf847bb8284$var$oldDevicePixelRatio = 0;
function $22a5eaf847bb8284$var$onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === $22a5eaf847bb8284$var$oldDevicePixelRatio) return;
    $22a5eaf847bb8284$var$oldDevicePixelRatio = dpr;
    $22a5eaf847bb8284$var$drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) resize();
    });
}
function $22a5eaf847bb8284$var$listenDevicePixelRatioChanges(chart, resize) {
    if (!$22a5eaf847bb8284$var$drpListeningCharts.size) window.addEventListener("resize", $22a5eaf847bb8284$var$onWindowResize);
    $22a5eaf847bb8284$var$drpListeningCharts.set(chart, resize);
}
function $22a5eaf847bb8284$var$unlistenDevicePixelRatioChanges(chart) {
    $22a5eaf847bb8284$var$drpListeningCharts.delete(chart);
    if (!$22a5eaf847bb8284$var$drpListeningCharts.size) window.removeEventListener("resize", $22a5eaf847bb8284$var$onWindowResize);
}
function $22a5eaf847bb8284$var$createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && (0, $43add8e050c146e1$export$2329c99376c9d0a4)(canvas);
    if (!container) return;
    const resize = (0, $43add8e050c146e1$export$b4171a6734a65d42)((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) listener();
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) return;
        resize(width, height);
    });
    observer.observe(container);
    $22a5eaf847bb8284$var$listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function $22a5eaf847bb8284$var$releaseObserver(chart, type, observer) {
    if (observer) observer.disconnect();
    if (type === "resize") $22a5eaf847bb8284$var$unlistenDevicePixelRatioChanges(chart);
}
function $22a5eaf847bb8284$var$createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = (0, $43add8e050c146e1$export$b4171a6734a65d42)((event)=>{
        if (chart.ctx !== null) listener($22a5eaf847bb8284$var$fromNativeEvent(event, chart));
    }, chart, (args)=>{
        const event = args[0];
        return [
            event,
            event.offsetX,
            event.offsetY
        ];
    });
    $22a5eaf847bb8284$var$addListener(canvas, type, proxy);
    return proxy;
}
class $22a5eaf847bb8284$export$f02da7f882cf6b2e extends $22a5eaf847bb8284$export$7b1aeb87f31f7da8 {
    acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext("2d");
        if (context && context.canvas === canvas) {
            $22a5eaf847bb8284$var$initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
    releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[$22a5eaf847bb8284$var$EXPANDO_KEY]) return false;
        const initial = canvas[$22a5eaf847bb8284$var$EXPANDO_KEY].initial;
        [
            "height",
            "width"
        ].forEach((prop)=>{
            const value = initial[prop];
            if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(value)) canvas.removeAttribute(prop);
            else canvas.setAttribute(prop, value);
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[$22a5eaf847bb8284$var$EXPANDO_KEY];
        return true;
    }
    addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: $22a5eaf847bb8284$var$createAttachObserver,
            detach: $22a5eaf847bb8284$var$createDetachObserver,
            resize: $22a5eaf847bb8284$var$createResizeObserver
        };
        const handler = handlers[type] || $22a5eaf847bb8284$var$createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) return;
        const handlers = {
            attach: $22a5eaf847bb8284$var$releaseObserver,
            detach: $22a5eaf847bb8284$var$releaseObserver,
            resize: $22a5eaf847bb8284$var$releaseObserver
        };
        const handler = handlers[type] || $22a5eaf847bb8284$var$removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
        return (0, $43add8e050c146e1$export$d66501df72047452)(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
        const container = (0, $43add8e050c146e1$export$2329c99376c9d0a4)(canvas);
        return !!(container && container.isConnected);
    }
}
function $22a5eaf847bb8284$export$72cd9e67b1b784f9(canvas) {
    if (!(0, $43add8e050c146e1$export$61196ced6d74a310)() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return $22a5eaf847bb8284$export$a40a96b24b46cf35;
    return $22a5eaf847bb8284$export$f02da7f882cf6b2e;
}
class $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(){
        this.x = undefined;
        this.y = undefined;
        this.active = false;
        this.options = undefined;
        this.$animations = undefined;
    }
    tooltipPosition(useFinalPosition) {
        const { x: x , y: y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x: x,
            y: y
        };
    }
    hasValue() {
        return (0, $43add8e050c146e1$export$9e5f44173e64f162)(this.x) && (0, $43add8e050c146e1$export$9e5f44173e64f162)(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) return this;
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}
$22a5eaf847bb8284$export$db77ccec0bb4ccac.defaults = {};
$22a5eaf847bb8284$export$db77ccec0bb4ccac.defaultRoutes = undefined;
const $22a5eaf847bb8284$var$formatters = {
    values (value) {
        return (0, $43add8e050c146e1$export$8b22cf2602fb60ce)(value) ? value : "" + value;
    },
    numeric (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) notation = "scientific";
            delta = $22a5eaf847bb8284$var$calculateDelta(tickValue, ticks);
        }
        const logDelta = (0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(Math.abs(delta));
        const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation: notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return (0, $43add8e050c146e1$export$ae1af26003f05816)(tickValue, locale, options);
    },
    logarithmic (tickValue, index43, ticks) {
        if (tickValue === 0) return "0";
        const remain = tickValue / Math.pow(10, Math.floor((0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(tickValue)));
        if (remain === 1 || remain === 2 || remain === 5) return $22a5eaf847bb8284$var$formatters.numeric.call(this, tickValue, index43, ticks);
        return "";
    }
};
function $22a5eaf847bb8284$var$calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
    return delta;
}
var $22a5eaf847bb8284$export$27c7467594ef87bd = {
    formatters: $22a5eaf847bb8284$var$formatters
};
(0, $43add8e050c146e1$export$4368d992c4eafac0).set("scale", {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: "ticks",
    grace: 0,
    grid: {
        display: true,
        lineWidth: 1,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 8,
        tickWidth: (_ctx, options)=>options.lineWidth,
        tickColor: (_ctx, options)=>options.color,
        offset: false,
        borderDash: [],
        borderDashOffset: 0.0,
        borderWidth: 1
    },
    title: {
        display: false,
        text: "",
        padding: {
            top: 4,
            bottom: 4
        }
    },
    ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: false,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: true,
        autoSkip: true,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: $22a5eaf847bb8284$export$27c7467594ef87bd.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: false,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
    }
});
(0, $43add8e050c146e1$export$4368d992c4eafac0).route("scale.ticks", "color", "", "color");
(0, $43add8e050c146e1$export$4368d992c4eafac0).route("scale.grid", "color", "", "borderColor");
(0, $43add8e050c146e1$export$4368d992c4eafac0).route("scale.grid", "borderColor", "", "borderColor");
(0, $43add8e050c146e1$export$4368d992c4eafac0).route("scale.title", "color", "", "color");
(0, $43add8e050c146e1$export$4368d992c4eafac0).describe("scale", {
    _fallback: false,
    _scriptable: (name)=>!name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
    _indexable: (name)=>name !== "borderDash" && name !== "tickBorderDash"
});
(0, $43add8e050c146e1$export$4368d992c4eafac0).describe("scales", {
    _fallback: "scale"
});
(0, $43add8e050c146e1$export$4368d992c4eafac0).describe("scale.ticks", {
    _scriptable: (name)=>name !== "backdropPadding" && name !== "callback",
    _indexable: (name)=>name !== "backdropPadding"
});
function $22a5eaf847bb8284$var$autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const ticksLimit = tickOpts.maxTicksLimit || $22a5eaf847bb8284$var$determineMaxTicks(scale);
    const majorIndices = tickOpts.major.enabled ? $22a5eaf847bb8284$var$getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        $22a5eaf847bb8284$var$skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = $22a5eaf847bb8284$var$calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        $22a5eaf847bb8284$var$skip(ticks, newTicks, spacing, (0, $43add8e050c146e1$export$342063e11d6c3cad)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++)$22a5eaf847bb8284$var$skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        $22a5eaf847bb8284$var$skip(ticks, newTicks, spacing, last, (0, $43add8e050c146e1$export$342063e11d6c3cad)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    $22a5eaf847bb8284$var$skip(ticks, newTicks, spacing);
    return newTicks;
}
function $22a5eaf847bb8284$var$determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
function $22a5eaf847bb8284$var$calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = $22a5eaf847bb8284$var$getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) return Math.max(spacing, 1);
    const factors = (0, $43add8e050c146e1$export$a07804094c3ecf2d)(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) return factor;
    }
    return Math.max(spacing, 1);
}
function $22a5eaf847bb8284$var$getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++)if (ticks[i].major) result.push(i);
    return result;
}
function $22a5eaf847bb8284$var$skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
    }
}
function $22a5eaf847bb8284$var$skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = (0, $43add8e050c146e1$export$90a7f3efeed30595)(majorStart, 0);
    const end = Math.min((0, $43add8e050c146e1$export$90a7f3efeed30595)(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
    }
}
function $22a5eaf847bb8284$var$getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) return false;
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return diff;
}
const $22a5eaf847bb8284$var$reverseAlign = (align)=>align === "left" ? "right" : align === "right" ? "left" : align;
const $22a5eaf847bb8284$var$offsetFromEdge = (scale, edge, offset)=>edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
function $22a5eaf847bb8284$var$sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment)result.push(arr[Math.floor(i)]);
    return result;
}
function $22a5eaf847bb8284$var$getPixelForGridLine(scale, index44, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex1 = Math.min(index44, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex1);
    let offset;
    if (offsetGridLines) {
        if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
        else if (index44 === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
        else offset = (lineValue - scale.getPixelForTick(validIndex1 - 1)) / 2;
        lineValue += validIndex1 < index44 ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) return;
    }
    return lineValue;
}
function $22a5eaf847bb8284$var$garbageCollect(caches, length) {
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i)delete cache.data[gc[i]];
            gc.splice(0, gcLen);
        }
    });
}
function $22a5eaf847bb8284$var$getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
function $22a5eaf847bb8284$var$getTitleHeight(options, fallback) {
    if (!options.display) return 0;
    const font = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.font, fallback);
    const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(options.padding);
    const lines = (0, $43add8e050c146e1$export$8b22cf2602fb60ce)(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function $22a5eaf847bb8284$var$createScaleContext(parent, scale) {
    return (0, $43add8e050c146e1$export$dda1d9f60106f0e9)(parent, {
        scale: scale,
        type: "scale"
    });
}
function $22a5eaf847bb8284$var$createTickContext(parent, index45, tick) {
    return (0, $43add8e050c146e1$export$dda1d9f60106f0e9)(parent, {
        tick: tick,
        index: index45,
        type: "tick"
    });
}
function $22a5eaf847bb8284$var$titleAlign(align, position, reverse) {
    let ret = (0, $43add8e050c146e1$export$34aec0b863436764)(align);
    if (reverse && position !== "right" || !reverse && position === "right") ret = $22a5eaf847bb8284$var$reverseAlign(ret);
    return ret;
}
function $22a5eaf847bb8284$var$titleArgs(scale, offset, position, align) {
    const { top: top , left: left , bottom: bottom , right: right , chart: chart  } = scale;
    const { chartArea: chartArea , scales: scales2  } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, left, right);
        if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales2[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === "center") titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        else titleY = $22a5eaf847bb8284$var$offsetFromEdge(scale, position, offset);
        maxWidth = right - left;
    } else {
        if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleX = scales2[positionAxisID].getPixelForValue(value) - width + offset;
        } else if (position === "center") titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        else titleX = $22a5eaf847bb8284$var$offsetFromEdge(scale, position, offset);
        titleY = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, bottom, top);
        rotation = position === "left" ? -(0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd) : (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd);
    }
    return {
        titleX: titleX,
        titleY: titleY,
        maxWidth: maxWidth,
        rotation: rotation
    };
}
class $22a5eaf847bb8284$export$d60cfc58d3c358b6 extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(cfg){
        super();
        this.id = cfg.id;
        this.type = cfg.type;
        this.options = undefined;
        this.ctx = cfg.ctx;
        this.chart = cfg.chart;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.maxWidth = undefined;
        this.maxHeight = undefined;
        this.paddingTop = undefined;
        this.paddingBottom = undefined;
        this.paddingLeft = undefined;
        this.paddingRight = undefined;
        this.axis = undefined;
        this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
        this.ticks = [];
        this._gridLineItems = null;
        this._labelItems = null;
        this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
        this._startPixel = undefined;
        this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
    init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
        return raw;
    }
    getUserBounds() {
        let { _userMin: _userMin , _userMax: _userMax , _suggestedMin: _suggestedMin , _suggestedMax: _suggestedMax  } = this;
        _userMin = (0, $43add8e050c146e1$export$c4ce752e73470fba)(_userMin, Number.POSITIVE_INFINITY);
        _userMax = (0, $43add8e050c146e1$export$c4ce752e73470fba)(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = (0, $43add8e050c146e1$export$c4ce752e73470fba)(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = (0, $43add8e050c146e1$export$c4ce752e73470fba)(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: (0, $43add8e050c146e1$export$c4ce752e73470fba)(_userMin, _suggestedMin),
            max: (0, $43add8e050c146e1$export$c4ce752e73470fba)(_userMax, _suggestedMax),
            minDefined: (0, $43add8e050c146e1$export$39b482c5e57630a8)(_userMin),
            maxDefined: (0, $43add8e050c146e1$export$39b482c5e57630a8)(_userMax)
        };
    }
    getMinMax(canStack) {
        let { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) return {
            min: min,
            max: max
        };
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) min = Math.min(min, range.min);
            if (!maxDefined) max = Math.max(max, range.max);
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: (0, $43add8e050c146e1$export$c4ce752e73470fba)(min, (0, $43add8e050c146e1$export$c4ce752e73470fba)(max, min)),
            max: (0, $43add8e050c146e1$export$c4ce752e73470fba)(max, (0, $43add8e050c146e1$export$c4ce752e73470fba)(min, max))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.beforeUpdate, [
            this
        ]);
    }
    update(maxWidth, maxHeight, margins) {
        const { beginAtZero: beginAtZero , grace: grace , ticks: tickOpts  } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = (0, $43add8e050c146e1$export$db202ddc8be9136)(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? $22a5eaf847bb8284$var$sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
            this.ticks = $22a5eaf847bb8284$var$autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) this._convertTicksToLabels(this.ticks);
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
    configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name) {
        this.chart.notifyPlugins(name, this.getContext());
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options[name], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = (0, $43add8e050c146e1$export$3722cfe417b6ed86)(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = this.ticks.length;
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - $22a5eaf847bb8284$var$getTickMarkLength(options.grid) - tickOpts.padding - $22a5eaf847bb8284$var$getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = (0, $43add8e050c146e1$export$25ce5a424b770e84)(Math.min(Math.asin((0, $43add8e050c146e1$export$efccba1c4a2ef57b)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0, $43add8e050c146e1$export$efccba1c4a2ef57b)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0, $43add8e050c146e1$export$efccba1c4a2ef57b)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart: chart , options: { ticks: tickOpts , title: titleOpts , grid: gridOpts  }  } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = $22a5eaf847bb8284$var$getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = $22a5eaf847bb8284$var$getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = $22a5eaf847bb8284$var$getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first: first , last: last , widest: widest , highest: highest  } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = (0, $43add8e050c146e1$export$625550452a3fa3ec)(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align: align , padding: padding  } , position: position  } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === "start") paddingRight = last.width;
            else if (align === "end") paddingLeft = first.width;
            else if (align !== "inner") {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === "start") {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === "end") {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
    _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis: axis , position: position  } = this.options;
        return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++)if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(ticks[i].label)) {
            ticks.splice(i, 1);
            ilen--;
            i--;
        }
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) ticks = $22a5eaf847bb8284$var$sample(ticks, sampleSize);
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
        }
        return labelSizes;
    }
    _computeLabelSizes(ticks, length) {
        const { ctx: ctx , _longestTextCache: caches  } = this;
        const widths = [];
        const heights = [];
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; ++i){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(label) && !(0, $43add8e050c146e1$export$8b22cf2602fb60ce)(label)) {
                width = (0, $43add8e050c146e1$export$3a6d5c9ae78a2c08)(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(label)) for(j = 0, jlen = label.length; j < jlen; ++j){
                nestedLabel = label[j];
                if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(nestedLabel) && !(0, $43add8e050c146e1$export$8b22cf2602fb60ce)(nestedLabel)) {
                    width = (0, $43add8e050c146e1$export$3a6d5c9ae78a2c08)(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        $22a5eaf847bb8284$var$garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths: widths,
            heights: heights
        };
    }
    getLabelForValue(value) {
        return value;
    }
    getPixelForValue(value, index) {
        return NaN;
    }
    getValueForPixel(pixel) {}
    getPixelForTick(index46) {
        const ticks = this.ticks;
        if (index46 < 0 || index46 > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index46].value);
    }
    getPixelForDecimal(decimal) {
        if (this._reversePixels) decimal = 1 - decimal;
        const pixel = this._startPixel + decimal * this._length;
        return (0, $43add8e050c146e1$export$e7c866399fa523f5)(this._alignToPixels ? (0, $43add8e050c146e1$export$71cec2538cb2c617)(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: min , max: max  } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index47) {
        const ticks = this.ticks || [];
        if (index47 >= 0 && index47 < ticks.length) {
            const tick = ticks[index47];
            return tick.$context || (tick.$context = $22a5eaf847bb8284$var$createTickContext(this.getContext(), index47, tick));
        }
        return this.$context || (this.$context = $22a5eaf847bb8284$var$createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = (0, $43add8e050c146e1$export$625550452a3fa3ec)(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
        const display = this.options.display;
        if (display !== "auto") return !!display;
        return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid: grid , position: position  } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = $22a5eaf847bb8284$var$getTickMarkLength(grid);
        const items = [];
        const borderOpts = grid.setContext(this.getContext());
        const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return (0, $43add8e050c146e1$export$71cec2538cb2c617)(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === "top") {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === "bottom") {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === "left") {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === "right") {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === "x") {
            if (position === "center") borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            else if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === "y") {
            if (position === "center") borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            else if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = (0, $43add8e050c146e1$export$90a7f3efeed30595)(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const optsAtIndex = grid.setContext(this.getContext(i));
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = grid.borderDash || [];
            const borderDashOffset = optsAtIndex.borderDashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = $22a5eaf847bb8284$var$getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) continue;
            alignedLineValue = (0, $43add8e050c146e1$export$71cec2538cb2c617)(chart, lineValue, lineWidth);
            if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
            else ty1 = ty2 = y1 = y2 = alignedLineValue;
            items.push({
                tx1: tx1,
                ty1: ty1,
                tx2: tx2,
                ty2: ty2,
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                width: lineWidth,
                color: lineColor,
                borderDash: borderDash,
                borderDashOffset: borderDashOffset,
                tickWidth: tickWidth,
                tickColor: tickColor,
                tickBorderDash: tickBorderDash,
                tickBorderDashOffset: tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
    _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position: position , ticks: optionTicks  } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align: align , crossAlign: crossAlign , padding: padding , mirror: mirror  } = optionTicks;
        const tl = $22a5eaf847bb8284$var$getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -(0, $43add8e050c146e1$export$625550452a3fa3ec)(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = "middle";
        if (position === "top") {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "bottom") {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "left") {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === "right") {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (axis === "x") {
            if (position === "center") y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            else if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === "y") {
            if (position === "center") x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            else if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                x = this.chart.scales[positionAxisID].getPixelForValue(value);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === "y") {
            if (align === "start") textBaseline = "top";
            else if (align === "end") textBaseline = "bottom";
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = (0, $43add8e050c146e1$export$8b22cf2602fb60ce)(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color1 = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === "inner") {
                    if (i === ilen - 1) tickTextAlign = !this.options.reverse ? "right" : "left";
                    else if (i === 0) tickTextAlign = !this.options.reverse ? "left" : "right";
                    else tickTextAlign = "center";
                }
                if (position === "top") {
                    if (crossAlign === "near" || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
                    else if (crossAlign === "center") textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    else textOffset = -labelSizes.highest.height + lineHeight / 2;
                } else {
                    if (crossAlign === "near" || rotation !== 0) textOffset = lineHeight / 2;
                    else if (crossAlign === "center") textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
                if (mirror) textOffset *= -1;
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = y + textOffset - labelPadding.top;
                let left = x - labelPadding.left;
                switch(textBaseline){
                    case "middle":
                        top -= height / 2;
                        break;
                    case "bottom":
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case "center":
                        left -= width / 2;
                        break;
                    case "right":
                        left -= width;
                        break;
                }
                backdrop = {
                    left: left,
                    top: top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                rotation: rotation,
                label: label,
                font: font,
                color: color1,
                strokeColor: strokeColor,
                strokeWidth: strokeWidth,
                textOffset: textOffset,
                textAlign: tickTextAlign,
                textBaseline: textBaseline,
                translation: [
                    x,
                    y
                ],
                backdrop: backdrop
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position: position , ticks: ticks  } = this.options;
        const rotation = -(0, $43add8e050c146e1$export$625550452a3fa3ec)(this.labelRotation);
        if (rotation) return position === "top" ? "left" : "right";
        let align = "center";
        if (ticks.align === "start") align = "left";
        else if (ticks.align === "end") align = "right";
        else if (ticks.align === "inner") align = "inner";
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position: position , ticks: { crossAlign: crossAlign , mirror: mirror , padding: padding  }  } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === "left") {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x = this.left;
                }
            }
        } else if (position === "right") {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x = this.right;
                }
            }
        } else textAlign = "right";
        return {
            textAlign: textAlign,
            x: x
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const chart = this.chart;
        const position = this.options.position;
        if (position === "left" || position === "right") return {
            top: 0,
            left: this.left,
            bottom: chart.height,
            right: this.right
        };
        if (position === "top" || position === "bottom") return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: chart.width
        };
    }
    drawBackground() {
        const { ctx: ctx , options: { backgroundColor: backgroundColor  } , left: left , top: top , width: width , height: height  } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) return 0;
        const ticks = this.ticks;
        const index48 = ticks.findIndex((t)=>t.value === value);
        if (index48 >= 0) {
            const opts = grid.setContext(this.getContext(index48));
            return opts.lineWidth;
        }
        return 0;
    }
    drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) return;
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            if (grid.drawOnChartArea) drawLine({
                x: item.x1,
                y: item.y1
            }, {
                x: item.x2,
                y: item.y2
            }, item);
            if (grid.drawTicks) drawLine({
                x: item.tx1,
                y: item.ty1
            }, {
                x: item.tx2,
                y: item.ty2
            }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart: chart , ctx: ctx , options: { grid: grid  }  } = this;
        const borderOpts = grid.setContext(this.getContext());
        const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
        if (!axisWidth) return;
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = (0, $43add8e050c146e1$export$71cec2538cb2c617)(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = (0, $43add8e050c146e1$export$71cec2538cb2c617)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = (0, $43add8e050c146e1$export$71cec2538cb2c617)(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = (0, $43add8e050c146e1$export$71cec2538cb2c617)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.borderWidth;
        ctx.strokeStyle = borderOpts.borderColor;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) return;
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) (0, $43add8e050c146e1$export$78acf4525d8a74c4)(ctx, area);
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        let i, ilen;
        for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            const tickFont = item.font;
            const label = item.label;
            if (item.backdrop) {
                ctx.fillStyle = item.backdrop.color;
                ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
            }
            let y = item.textOffset;
            (0, $43add8e050c146e1$export$8743009a87fcb00f)(ctx, label, 0, y, tickFont, item);
        }
        if (area) (0, $43add8e050c146e1$export$dc98b0b04f4c7758)(ctx);
    }
    drawTitle() {
        const { ctx: ctx , options: { position: position , title: title , reverse: reverse  }  } = this;
        if (!title.display) return;
        const font = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(title.font);
        const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === "bottom" || position === "center" || (0, $43add8e050c146e1$export$23f2a1d2818174ef)(position)) {
            offset += padding.bottom;
            if ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(title.text)) offset += font.lineHeight * (title.text.length - 1);
        } else offset += padding.top;
        const { titleX: titleX , titleY: titleY , maxWidth: maxWidth , rotation: rotation  } = $22a5eaf847bb8284$var$titleArgs(this, offset, position, align);
        (0, $43add8e050c146e1$export$8743009a87fcb00f)(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth: maxWidth,
            rotation: rotation,
            textAlign: $22a5eaf847bb8284$var$titleAlign(align, position, reverse),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) return;
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
    _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = (0, $43add8e050c146e1$export$90a7f3efeed30595)(opts.grid && opts.grid.z, -1);
        if (!this._isVisible() || this.draw !== $22a5eaf847bb8284$export$d60cfc58d3c358b6.prototype.draw) return [
            {
                z: tz,
                draw: (chartArea)=>{
                    this.draw(chartArea);
                }
            }
        ];
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: gz + 1,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
    getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + "AxisID";
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
        }
        return result;
    }
    _resolveTickFontOptions(index49) {
        const opts = this.options.ticks.setContext(this.getContext(index49));
        return (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(opts.font);
    }
    _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}
class $22a5eaf847bb8284$var$TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if ($22a5eaf847bb8284$var$isIChartComponent(proto)) parentScope = this.register(proto);
        const items = this.items;
        const id = item.id;
        const scope = this.scope + "." + id;
        if (!id) throw new Error("class does not have id: " + item);
        if (id in items) return scope;
        items[id] = item;
        $22a5eaf847bb8284$var$registerDefaults(item, scope, parentScope);
        if (this.override) (0, $43add8e050c146e1$export$4368d992c4eafac0).override(item.id, item.overrides);
        return scope;
    }
    get(id) {
        return this.items[id];
    }
    unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) delete items[id];
        if (scope && id in (0, $43add8e050c146e1$export$4368d992c4eafac0)[scope]) {
            delete (0, $43add8e050c146e1$export$4368d992c4eafac0)[scope][id];
            if (this.override) delete (0, $43add8e050c146e1$export$ce26c07117d59d6a)[id];
        }
    }
}
function $22a5eaf847bb8284$var$registerDefaults(item, scope, parentScope) {
    const itemDefaults = (0, $43add8e050c146e1$export$6559d589eb85fbb6)(Object.create(null), [
        parentScope ? (0, $43add8e050c146e1$export$4368d992c4eafac0).get(parentScope) : {},
        (0, $43add8e050c146e1$export$4368d992c4eafac0).get(scope),
        item.defaults
    ]);
    (0, $43add8e050c146e1$export$4368d992c4eafac0).set(scope, itemDefaults);
    if (item.defaultRoutes) $22a5eaf847bb8284$var$routeDefaults(scope, item.defaultRoutes);
    if (item.descriptors) (0, $43add8e050c146e1$export$4368d992c4eafac0).describe(scope, item.descriptors);
}
function $22a5eaf847bb8284$var$routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split(".");
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join(".");
        const parts = routes[property].split(".");
        const targetName = parts.pop();
        const targetScope = parts.join(".");
        (0, $43add8e050c146e1$export$4368d992c4eafac0).route(sourceScope, sourceName, targetScope, targetName);
    });
}
function $22a5eaf847bb8284$var$isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
}
class $22a5eaf847bb8284$var$Registry {
    constructor(){
        this.controllers = new $22a5eaf847bb8284$var$TypedRegistry($22a5eaf847bb8284$export$75572ec5c55b4048, "datasets", true);
        this.elements = new $22a5eaf847bb8284$var$TypedRegistry($22a5eaf847bb8284$export$db77ccec0bb4ccac, "elements");
        this.plugins = new $22a5eaf847bb8284$var$TypedRegistry(Object, "plugins");
        this.scales = new $22a5eaf847bb8284$var$TypedRegistry($22a5eaf847bb8284$export$d60cfc58d3c358b6, "scales");
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...args) {
        this._each("register", args);
    }
    remove(...args) {
        this._each("unregister", args);
    }
    addControllers(...args) {
        this._each("register", args, this.controllers);
    }
    addElements(...args) {
        this._each("register", args, this.elements);
    }
    addPlugins(...args) {
        this._each("register", args, this.plugins);
    }
    addScales(...args) {
        this._each("register", args, this.scales);
    }
    getController(id) {
        return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
        return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
        return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
        return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
        this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
        this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
        this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
        this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
            else (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(arg, (item)=>{
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
            });
        });
    }
    _exec(method, registry1, component) {
        const camelMethod = (0, $43add8e050c146e1$export$efca4cbe5dd06740)(method);
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(component["before" + camelMethod], [], component);
        registry1[method](component);
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) return reg;
        }
        return this.plugins;
    }
    _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) throw new Error('"' + id + '" is not a registered ' + type + ".");
        return item;
    }
}
var $22a5eaf847bb8284$export$4bb7493d241fd8a5 = new $22a5eaf847bb8284$var$Registry();
class $22a5eaf847bb8284$var$PluginService {
    constructor(){
        this._init = [];
    }
    notify(chart, hook, args, filter) {
        if (hook === "beforeInit") {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, "install");
        }
        const descriptors1 = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors1, chart, hook, args);
        if (hook === "afterDestroy") {
            this._notify(descriptors1, chart, "stop");
            this._notify(this._init, chart, "uninstall");
        }
        return result;
    }
    _notify(descriptors2, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors2){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if ((0, $43add8e050c146e1$export$3722cfe417b6ed86)(method, params, plugin) === false && args.cancelable) return false;
        }
        return true;
    }
    invalidate() {
        if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
    _descriptors(chart) {
        if (this._cache) return this._cache;
        const descriptors3 = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors3;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = (0, $43add8e050c146e1$export$90a7f3efeed30595)(config.options && config.options.plugins, {});
        const plugins1 = $22a5eaf847bb8284$var$allPlugins(config);
        return options === false && !all ? [] : $22a5eaf847bb8284$var$createDescriptors(chart, plugins1, options, all);
    }
    _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors4 = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors4), chart, "stop");
        this._notify(diff(descriptors4, previousDescriptors), chart, "start");
    }
}
function $22a5eaf847bb8284$var$allPlugins(config) {
    const plugins2 = [];
    const keys = Object.keys($22a5eaf847bb8284$export$4bb7493d241fd8a5.plugins.items);
    for(let i = 0; i < keys.length; i++)plugins2.push($22a5eaf847bb8284$export$4bb7493d241fd8a5.getPlugin(keys[i]));
    const local = config.plugins || [];
    for(let i3 = 0; i3 < local.length; i3++){
        const plugin = local[i3];
        if (plugins2.indexOf(plugin) === -1) plugins2.push(plugin);
    }
    return plugins2;
}
function $22a5eaf847bb8284$var$getOpts(options, all) {
    if (!all && options === false) return null;
    if (options === true) return {};
    return options;
}
function $22a5eaf847bb8284$var$createDescriptors(chart, plugins3, options, all) {
    const result = [];
    const context = chart.getContext();
    for(let i = 0; i < plugins3.length; i++){
        const plugin = plugins3[i];
        const id = plugin.id;
        const opts = $22a5eaf847bb8284$var$getOpts(options[id], all);
        if (opts === null) continue;
        result.push({
            plugin: plugin,
            options: $22a5eaf847bb8284$var$pluginOpts(chart.config, plugin, opts, context)
        });
    }
    return result;
}
function $22a5eaf847bb8284$var$pluginOpts(config, plugin, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    return config.createResolver(scopes, context, [
        ""
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}
function $22a5eaf847bb8284$var$getIndexAxis(type, options) {
    const datasetDefaults = (0, $43add8e050c146e1$export$4368d992c4eafac0).datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
}
function $22a5eaf847bb8284$var$getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") axis = indexAxis;
    else if (id === "_value_") axis = indexAxis === "x" ? "y" : "x";
    return axis;
}
function $22a5eaf847bb8284$var$getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
}
function $22a5eaf847bb8284$var$axisFromPosition(position) {
    if (position === "top" || position === "bottom") return "x";
    if (position === "left" || position === "right") return "y";
}
function $22a5eaf847bb8284$var$determineAxis(id, scaleOptions) {
    if (id === "x" || id === "y") return id;
    return scaleOptions.axis || $22a5eaf847bb8284$var$axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
}
function $22a5eaf847bb8284$var$mergeScaleConfig(config, options) {
    const chartDefaults = (0, $43add8e050c146e1$export$ce26c07117d59d6a)[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = $22a5eaf847bb8284$var$getIndexAxis(config.type, options);
    const firstIDs = Object.create(null);
    const scales3 = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!(0, $43add8e050c146e1$export$23f2a1d2818174ef)(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
        if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        const axis = $22a5eaf847bb8284$var$determineAxis(id, scaleConf);
        const defaultId = $22a5eaf847bb8284$var$getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        firstIDs[axis] = firstIDs[axis] || id;
        scales3[id] = (0, $43add8e050c146e1$export$7910e0436ed8d1de)(Object.create(null), [
            {
                axis: axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || $22a5eaf847bb8284$var$getIndexAxis(type, options);
        const datasetDefaults = (0, $43add8e050c146e1$export$ce26c07117d59d6a)[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = $22a5eaf847bb8284$var$getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + "AxisID"] || firstIDs[axis] || axis;
            scales3[id] = scales3[id] || Object.create(null);
            (0, $43add8e050c146e1$export$7910e0436ed8d1de)(scales3[id], [
                {
                    axis: axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales3).forEach((key)=>{
        const scale = scales3[key];
        (0, $43add8e050c146e1$export$7910e0436ed8d1de)(scale, [
            (0, $43add8e050c146e1$export$4368d992c4eafac0).scales[scale.type],
            (0, $43add8e050c146e1$export$4368d992c4eafac0).scale
        ]);
    });
    return scales3;
}
function $22a5eaf847bb8284$var$initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = (0, $43add8e050c146e1$export$90a7f3efeed30595)(options.plugins, {});
    options.scales = $22a5eaf847bb8284$var$mergeScaleConfig(config, options);
}
function $22a5eaf847bb8284$var$initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function $22a5eaf847bb8284$var$initConfig(config) {
    config = config || {};
    config.data = $22a5eaf847bb8284$var$initData(config.data);
    $22a5eaf847bb8284$var$initOptions(config);
    return config;
}
const $22a5eaf847bb8284$var$keyCache = new Map();
const $22a5eaf847bb8284$var$keysCached = new Set();
function $22a5eaf847bb8284$var$cachedKeys(cacheKey, generate) {
    let keys = $22a5eaf847bb8284$var$keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        $22a5eaf847bb8284$var$keyCache.set(cacheKey, keys);
        $22a5eaf847bb8284$var$keysCached.add(keys);
    }
    return keys;
}
const $22a5eaf847bb8284$var$addIfFound = (set, obj, key)=>{
    const opts = (0, $43add8e050c146e1$export$2d1720544b23b823)(obj, key);
    if (opts !== undefined) set.add(opts);
};
class $22a5eaf847bb8284$var$Config {
    constructor(config){
        this._config = $22a5eaf847bb8284$var$initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = $22a5eaf847bb8284$var$initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        $22a5eaf847bb8284$var$initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
        return $22a5eaf847bb8284$var$cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
        return $22a5eaf847bb8284$var$cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`, 
                ],
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
        return $22a5eaf847bb8284$var$cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ""
                ]
            ]);
    }
    pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return $22a5eaf847bb8284$var$cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || [], 
                ]
            ]);
    }
    _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
        const { options: options , type: type  } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) return cached;
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>$22a5eaf847bb8284$var$addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>$22a5eaf847bb8284$var$addIfFound(scopes, options, key));
            keys.forEach((key)=>$22a5eaf847bb8284$var$addIfFound(scopes, (0, $43add8e050c146e1$export$ce26c07117d59d6a)[type] || {}, key));
            keys.forEach((key)=>$22a5eaf847bb8284$var$addIfFound(scopes, (0, $43add8e050c146e1$export$4368d992c4eafac0), key));
            keys.forEach((key)=>$22a5eaf847bb8284$var$addIfFound(scopes, (0, $43add8e050c146e1$export$a8550f7dbe79f93a), key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) array.push(Object.create(null));
        if ($22a5eaf847bb8284$var$keysCached.has(keyLists)) cache.set(keyLists, array);
        return array;
    }
    chartOptionScopes() {
        const { options: options , type: type  } = this;
        return [
            options,
            (0, $43add8e050c146e1$export$ce26c07117d59d6a)[type] || {},
            (0, $43add8e050c146e1$export$4368d992c4eafac0).datasets[type] || {},
            {
                type: type
            },
            (0, $43add8e050c146e1$export$4368d992c4eafac0),
            (0, $43add8e050c146e1$export$a8550f7dbe79f93a)
        ];
    }
    resolveNamedOptions(scopes, names, context, prefixes = [
        ""
    ]) {
        const result = {
            $shared: true
        };
        const { resolver: resolver , subPrefixes: subPrefixes  } = $22a5eaf847bb8284$var$getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if ($22a5eaf847bb8284$var$needContext(resolver, names)) {
            result.$shared = false;
            context = (0, $43add8e050c146e1$export$2e2af4578d910ddf)(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = (0, $43add8e050c146e1$export$a93c5207d687da10)(resolver, context, subResolver);
        }
        for (const prop of names)result[prop] = options[prop];
        return result;
    }
    createResolver(scopes, context, prefixes = [
        ""
    ], descriptorDefaults) {
        const { resolver: resolver  } = $22a5eaf847bb8284$var$getResolver(this._resolverCache, scopes, prefixes);
        return (0, $43add8e050c146e1$export$23f2a1d2818174ef)(context) ? (0, $43add8e050c146e1$export$a93c5207d687da10)(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function $22a5eaf847bb8284$var$getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = (0, $43add8e050c146e1$export$c3950d9923825c02)(scopes, prefixes);
        cached = {
            resolver: resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes("hover"))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const $22a5eaf847bb8284$var$hasFunction = (value)=>(0, $43add8e050c146e1$export$23f2a1d2818174ef)(value) && Object.getOwnPropertyNames(value).reduce((acc, key)=>acc || (0, $43add8e050c146e1$export$2e2af4578d910ddf)(value[key]), false);
function $22a5eaf847bb8284$var$needContext(proxy, names) {
    const { isScriptable: isScriptable , isIndexable: isIndexable  } = (0, $43add8e050c146e1$export$a9c996f45e5784d0)(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && ((0, $43add8e050c146e1$export$2e2af4578d910ddf)(value) || $22a5eaf847bb8284$var$hasFunction(value)) || indexable && (0, $43add8e050c146e1$export$8b22cf2602fb60ce)(value)) return true;
    }
    return false;
}
var $22a5eaf847bb8284$var$version = "3.8.0";
const $22a5eaf847bb8284$var$KNOWN_POSITIONS = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
];
function $22a5eaf847bb8284$var$positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || $22a5eaf847bb8284$var$KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
}
function $22a5eaf847bb8284$var$compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function $22a5eaf847bb8284$var$onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions1 = chart.options.animation;
    chart.notifyPlugins("afterRender");
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(animationOptions1 && animationOptions1.onComplete, [
        context
    ], chart);
}
function $22a5eaf847bb8284$var$onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions2 = chart.options.animation;
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(animationOptions2 && animationOptions2.onProgress, [
        context
    ], chart);
}
function $22a5eaf847bb8284$var$getCanvas(item) {
    if ((0, $43add8e050c146e1$export$61196ced6d74a310)() && typeof item === "string") item = document.getElementById(item);
    else if (item && item.length) item = item[0];
    if (item && item.canvas) item = item.canvas;
    return item;
}
const $22a5eaf847bb8284$var$instances = {};
const $22a5eaf847bb8284$var$getChart = (key)=>{
    const canvas = $22a5eaf847bb8284$var$getCanvas(key);
    return Object.values($22a5eaf847bb8284$var$instances).filter((c)=>c.canvas === canvas).pop();
};
function $22a5eaf847bb8284$var$moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) obj[intKey + move] = value;
        }
    }
}
function $22a5eaf847bb8284$var$determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === "mouseout") return null;
    if (isClick) return lastEvent;
    return e;
}
class $22a5eaf847bb8284$export$acaa6426d77a227e {
    constructor(item, userConfig){
        const config = this.config = new $22a5eaf847bb8284$var$Config(userConfig);
        const initialCanvas = $22a5eaf847bb8284$var$getCanvas(item);
        const existingChart = $22a5eaf847bb8284$var$getChart(initialCanvas);
        if (existingChart) throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "'" + " must be destroyed before the canvas can be reused.");
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || $22a5eaf847bb8284$export$72cd9e67b1b784f9(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = (0, $43add8e050c146e1$export$555508cbc6add439)();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
        this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new $22a5eaf847bb8284$var$PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = (0, $43add8e050c146e1$export$2219238a014317b0)((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        $22a5eaf847bb8284$var$instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        $22a5eaf847bb8284$export$a424a0aa8f687495.listen(this, "complete", $22a5eaf847bb8284$var$onAnimationsComplete);
        $22a5eaf847bb8284$export$a424a0aa8f687495.listen(this, "progress", $22a5eaf847bb8284$var$onAnimationProgress);
        this._initialize();
        if (this.attached) this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio: aspectRatio , maintainAspectRatio: maintainAspectRatio  } , width: width , height: height , _aspectRatio: _aspectRatio  } = this;
        if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(aspectRatio)) return aspectRatio;
        if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    _initialize() {
        this.notifyPlugins("beforeInit");
        if (this.options.responsive) this.resize();
        else (0, $43add8e050c146e1$export$4c3d22f3d993c33f)(this, this.options.devicePixelRatio);
        this.bindEvents();
        this.notifyPlugins("afterInit");
        return this;
    }
    clear() {
        (0, $43add8e050c146e1$export$f787f51d84a910ad)(this.canvas, this.ctx);
        return this;
    }
    stop() {
        $22a5eaf847bb8284$export$a424a0aa8f687495.stop(this);
        return this;
    }
    resize(width, height) {
        if (!$22a5eaf847bb8284$export$a424a0aa8f687495.running(this)) this._resize(width, height);
        else this._resizeBeforeDraw = {
            width: width,
            height: height
        };
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? "resize" : "attach";
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!(0, $43add8e050c146e1$export$4c3d22f3d993c33f)(this, newRatio, true)) return;
        this.notifyPlugins("resize", {
            size: newSize
        });
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) this.render();
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
    buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales4 = this.scales;
        const updated = Object.keys(scales4).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id)=>{
            const scaleOptions = scaleOpts[id];
            const axis = $22a5eaf847bb8284$var$determineAxis(id, scaleOptions);
            const isRadial = axis === "r";
            const isHorizontal = axis === "x";
            return {
                options: scaleOptions,
                dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
                dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
            };
        }));
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = $22a5eaf847bb8284$var$determineAxis(id, scaleOptions);
            const scaleType = (0, $43add8e050c146e1$export$90a7f3efeed30595)(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || $22a5eaf847bb8284$var$positionIsHorizontal(scaleOptions.position, axis) !== $22a5eaf847bb8284$var$positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
            updated[id] = true;
            let scale = null;
            if (id in scales4 && scales4[id].type === scaleType) scale = scales4[id];
            else {
                const scaleClass = $22a5eaf847bb8284$export$4bb7493d241fd8a5.getScale(scaleType);
                scale = new scaleClass({
                    id: id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales4[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(updated, (hasUpdated, id)=>{
            if (!hasUpdated) delete scales4[id];
        });
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(scales4, (scale)=>{
            $22a5eaf847bb8284$export$1ecca0613f5e56d2.configure(this, scale, scale.options);
            $22a5eaf847bb8284$export$1ecca0613f5e56d2.addBox(this, scale);
        });
    }
    _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i)this._destroyDatasetMeta(i);
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort($22a5eaf847bb8284$var$compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: metasets , data: { datasets: datasets  }  } = this;
        if (metasets.length > datasets.length) delete this._stacks;
        metasets.forEach((meta, index50)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) this._destroyDatasetMeta(index50);
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || $22a5eaf847bb8284$var$getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = "" + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = $22a5eaf847bb8284$export$4bb7493d241fd8a5.getController(type);
                const { datasetElementType: datasetElementType , dataElementType: dataElementType  } = (0, $43add8e050c146e1$export$4368d992c4eafac0).datasets[type];
                Object.assign(ControllerClass.prototype, {
                    dataElementType: $22a5eaf847bb8284$export$4bb7493d241fd8a5.getElement(dataElementType),
                    datasetElementType: datasetElementType && $22a5eaf847bb8284$export$4bb7493d241fd8a5.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
    _resetElements() {
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements();
        this.notifyPlugins("reset");
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins("beforeUpdate", {
            mode: mode,
            cancelable: true
        }) === false) return;
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller: controller  } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(newControllers, (controller)=>{
            controller.reset();
        });
        this._updateDatasets(mode);
        this.notifyPlugins("afterUpdate", {
            mode: mode
        });
        this._layers.sort($22a5eaf847bb8284$var$compare2Level("z", "_idx"));
        const { _active: _active , _lastEvent: _lastEvent  } = this;
        if (_lastEvent) this._eventHandler(_lastEvent, true);
        else if (_active.length) this._updateHoverStyles(_active, _active, true);
        this.render();
    }
    _updateScales() {
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this.scales, (scale)=>{
            $22a5eaf847bb8284$export$1ecca0613f5e56d2.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!(0, $43add8e050c146e1$export$c9170ad7d4cd7e57)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: _hiddenIndices  } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method: method , start: start , count: count  } of changes){
            const move = method === "_removeElements" ? -count : count;
            $22a5eaf847bb8284$var$moveNumericKeys(_hiddenIndices, start, move);
        }
    }
    _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) return;
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + "," + c.splice(1).join(",")));
        const changeSet = makeSet(0);
        for(let i4 = 1; i4 < datasetCount; i4++){
            if (!(0, $43add8e050c146e1$export$c9170ad7d4cd7e57)(changeSet, makeSet(i4))) return;
        }
        return Array.from(changeSet).map((c)=>c.split(",")).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
    _updateLayout(minPadding) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: true
        }) === false) return;
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this.boxes, (box)=>{
            if (noArea && box.position === "chartArea") return;
            if (box.configure) box.configure();
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index51)=>{
            item._idx = index51;
        });
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode: mode,
            cancelable: true
        }) === false) return;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this.getDatasetMeta(i).controller.configure();
        for(let i5 = 0, ilen1 = this.data.datasets.length; i5 < ilen1; ++i5)this._updateDataset(i5, (0, $43add8e050c146e1$export$2e2af4578d910ddf)(mode) ? mode({
            datasetIndex: i5
        }) : mode);
        this.notifyPlugins("afterDatasetsUpdate", {
            mode: mode
        });
    }
    _updateDataset(index52, mode) {
        const meta = this.getDatasetMeta(index52);
        const args = {
            meta: meta,
            index: index52,
            mode: mode,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetUpdate", args) === false) return;
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
        if (this.notifyPlugins("beforeRender", {
            cancelable: true
        }) === false) return;
        if ($22a5eaf847bb8284$export$a424a0aa8f687495.has(this)) {
            if (this.attached && !$22a5eaf847bb8284$export$a424a0aa8f687495.running(this)) $22a5eaf847bb8284$export$a424a0aa8f687495.start(this);
        } else {
            this.draw();
            $22a5eaf847bb8284$var$onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width: width , height: height  } = this._resizeBeforeDraw;
            this._resize(width, height);
            this._resizeBeforeDraw = null;
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) return;
        if (this.notifyPlugins("beforeDraw", {
            cancelable: true
        }) === false) return;
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i)layers[i].draw(this.chartArea);
        this._drawDatasets();
        for(; i < layers.length; ++i)layers[i].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) result.push(meta);
        }
        return result;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: true
        }) === false) return;
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i)this._drawDataset(metasets[i]);
        this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
        const ctx = this.ctx;
        const clip = meta._clip;
        const useClip = !clip.disabled;
        const area = this.chartArea;
        const args = {
            meta: meta,
            index: meta.index,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetDraw", args) === false) return;
        if (useClip) (0, $43add8e050c146e1$export$78acf4525d8a74c4)(ctx, {
            left: clip.left === false ? 0 : area.left - clip.left,
            right: clip.right === false ? this.width : area.right + clip.right,
            top: clip.top === false ? 0 : area.top - clip.top,
            bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
        meta.controller.draw();
        if (useClip) (0, $43add8e050c146e1$export$dc98b0b04f4c7758)(ctx);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetDraw", args);
    }
    isPointInArea(point) {
        return (0, $43add8e050c146e1$export$ef35774e6d314e91)(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = $22a5eaf847bb8284$export$a13296960cae0384.modes[mode];
        if (typeof method === "function") return method(this, e, options, useFinalPosition);
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = (0, $43add8e050c146e1$export$dda1d9f60106f0e9)(null, {
            chart: this,
            type: "chart"
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) return false;
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index53) {
        this._hiddenIndices[index53] = !this._hiddenIndices[index53];
    }
    getDataVisibility(index54) {
        return !this._hiddenIndices[index54];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? "show" : "hide";
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if ((0, $43add8e050c146e1$export$35e795649ee09318)(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible: visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) meta.controller._destroy();
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        $22a5eaf847bb8284$export$a424a0aa8f687495.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._destroyDatasetMeta(i);
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas: canvas , ctx: ctx  } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            (0, $43add8e050c146e1$export$f787f51d84a910ad)(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        this.notifyPlugins("destroy");
        delete $22a5eaf847bb8284$var$instances[this.id];
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
    bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) this.bindResponsiveEvents();
        else this.attached = true;
    }
    bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener1 = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this.options.events, (type)=>_add(type, listener1));
    }
    bindResponsiveEvents() {
        if (!this._responsiveListeners) this._responsiveListeners = {};
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener2 = (width, height)=>{
            if (this.canvas) this.resize(width, height);
        };
        let detached;
        const attached = ()=>{
            _remove("attach", attached);
            this.attached = true;
            this.resize();
            _add("resize", listener2);
            _add("detach", detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove("resize", listener2);
            this._stop();
            this._resize(0, 0);
            _add("attach", attached);
        };
        if (platform.isAttached(this.canvas)) attached();
        else detached();
    }
    unbindEvents() {
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? "set" : "remove";
        let meta, item, i, ilen;
        if (mode === "dataset") {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller["_" + prefix + "DatasetHoverStyle"]();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex: datasetIndex , index: index55  })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("No dataset found at index " + datasetIndex);
            return {
                datasetIndex: datasetIndex,
                element: meta.data[index55],
                index: index55
            };
        });
        const changed = !(0, $43add8e050c146e1$export$ee7c8ad385a60b7b)(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
    notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
    _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
    _eventHandler(e, replay) {
        const args = {
            event: e,
            replay: replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) return;
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins("afterEvent", args, eventFilter);
        if (changed || args.changed) this.render();
        return this;
    }
    _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [] , options: options  } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = (0, $43add8e050c146e1$export$995eb9fca571757)(e);
        const lastEvent = $22a5eaf847bb8284$var$determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            (0, $43add8e050c146e1$export$3722cfe417b6ed86)(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) (0, $43add8e050c146e1$export$3722cfe417b6ed86)(options.onClick, [
                e,
                active,
                this
            ], this);
        }
        const changed = !(0, $43add8e050c146e1$export$ee7c8ad385a60b7b)(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
const $22a5eaf847bb8284$var$invalidatePlugins = ()=>(0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)($22a5eaf847bb8284$export$acaa6426d77a227e.instances, (chart)=>chart._plugins.invalidate());
const $22a5eaf847bb8284$var$enumerable = true;
Object.defineProperties($22a5eaf847bb8284$export$acaa6426d77a227e, {
    defaults: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: (0, $43add8e050c146e1$export$4368d992c4eafac0)
    },
    instances: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: $22a5eaf847bb8284$var$instances
    },
    overrides: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: (0, $43add8e050c146e1$export$ce26c07117d59d6a)
    },
    registry: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: $22a5eaf847bb8284$export$4bb7493d241fd8a5
    },
    version: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: $22a5eaf847bb8284$var$version
    },
    getChart: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: $22a5eaf847bb8284$var$getChart
    },
    register: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: (...items)=>{
            $22a5eaf847bb8284$export$4bb7493d241fd8a5.add(...items);
            $22a5eaf847bb8284$var$invalidatePlugins();
        }
    },
    unregister: {
        enumerable: $22a5eaf847bb8284$var$enumerable,
        value: (...items)=>{
            $22a5eaf847bb8284$export$4bb7493d241fd8a5.remove(...items);
            $22a5eaf847bb8284$var$invalidatePlugins();
        }
    }
});
function $22a5eaf847bb8284$var$clipArc(ctx, element, endAngle) {
    const { startAngle: startAngle , pixelMargin: pixelMargin , x: x , y: y , outerRadius: outerRadius , innerRadius: innerRadius  } = element;
    let angleMargin = pixelMargin / outerRadius;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else ctx.arc(x, y, pixelMargin, endAngle + (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd), startAngle - (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd));
    ctx.closePath();
    ctx.clip();
}
function $22a5eaf847bb8284$var$toRadiusCorners(value) {
    return (0, $43add8e050c146e1$export$3b513254972cfc9c)(value, [
        "outerStart",
        "outerEnd",
        "innerStart",
        "innerEnd"
    ]);
}
function $22a5eaf847bb8284$var$parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = $22a5eaf847bb8284$var$toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(o.innerStart, 0, innerLimit),
        innerEnd: (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(o.innerEnd, 0, innerLimit)
    };
}
function $22a5eaf847bb8284$var$rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
function $22a5eaf847bb8284$var$pathArc(ctx, element, offset, spacing, end) {
    const { x: x , y: y , startAngle: start , pixelMargin: pixelMargin , innerRadius: innerR  } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / (0, $43add8e050c146e1$export$56c0d5a1e737357d)) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart: outerStart , outerEnd: outerEnd , innerStart: innerStart , innerEnd: innerEnd  } = $22a5eaf847bb8284$var$parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
    if (outerEnd > 0) {
        const pCenter = $22a5eaf847bb8284$var$rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd));
    }
    const p4 = $22a5eaf847bb8284$var$rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
    ctx.lineTo(p4.x, p4.y);
    if (innerEnd > 0) {
        const pCenter = $22a5eaf847bb8284$var$rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd), innerEndAdjustedAngle + Math.PI);
    }
    ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, startAngle + innerStart / innerRadius, true);
    if (innerStart > 0) {
        const pCenter = $22a5eaf847bb8284$var$rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd));
    }
    const p8 = $22a5eaf847bb8284$var$rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
    ctx.lineTo(p8.x, p8.y);
    if (outerStart > 0) {
        const pCenter = $22a5eaf847bb8284$var$rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
        ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd), outerStartAdjustedAngle);
    }
    ctx.closePath();
}
function $22a5eaf847bb8284$var$drawArc(ctx, element, offset, spacing) {
    const { fullCircles: fullCircles , startAngle: startAngle , circumference: circumference  } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        $22a5eaf847bb8284$var$pathArc(ctx, element, offset, spacing, startAngle + (0, $43add8e050c146e1$export$971d5caa766a69d7));
        for(let i = 0; i < fullCircles; ++i)ctx.fill();
        if (!isNaN(circumference)) {
            endAngle = startAngle + circumference % (0, $43add8e050c146e1$export$971d5caa766a69d7);
            if (circumference % (0, $43add8e050c146e1$export$971d5caa766a69d7) === 0) endAngle += (0, $43add8e050c146e1$export$971d5caa766a69d7);
        }
    }
    $22a5eaf847bb8284$var$pathArc(ctx, element, offset, spacing, endAngle);
    ctx.fill();
    return endAngle;
}
function $22a5eaf847bb8284$var$drawFullCircleBorders(ctx, element, inner) {
    const { x: x , y: y , startAngle: startAngle , pixelMargin: pixelMargin , fullCircles: fullCircles  } = element;
    const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
    const innerRadius = element.innerRadius + pixelMargin;
    let i;
    if (inner) $22a5eaf847bb8284$var$clipArc(ctx, element, startAngle + (0, $43add8e050c146e1$export$971d5caa766a69d7));
    ctx.beginPath();
    ctx.arc(x, y, innerRadius, startAngle + (0, $43add8e050c146e1$export$971d5caa766a69d7), startAngle, true);
    for(i = 0; i < fullCircles; ++i)ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle, startAngle + (0, $43add8e050c146e1$export$971d5caa766a69d7));
    for(i = 0; i < fullCircles; ++i)ctx.stroke();
}
function $22a5eaf847bb8284$var$drawBorder(ctx, element, offset, spacing, endAngle) {
    const { options: options  } = element;
    const { borderWidth: borderWidth , borderJoinStyle: borderJoinStyle  } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) return;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || "round";
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || "bevel";
    }
    if (element.fullCircles) $22a5eaf847bb8284$var$drawFullCircleBorders(ctx, element, inner);
    if (inner) $22a5eaf847bb8284$var$clipArc(ctx, element, endAngle);
    $22a5eaf847bb8284$var$pathArc(ctx, element, offset, spacing, endAngle);
    ctx.stroke();
}
class $22a5eaf847bb8284$export$d48203c759d6a1fc extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        const { angle: angle , distance: distance  } = (0, $43add8e050c146e1$export$e7094788287c5e9b)(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle: startAngle , endAngle: endAngle , innerRadius: innerRadius , outerRadius: outerRadius , circumference: circumference  } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], useFinalPosition);
        const rAdjust = this.options.spacing / 2;
        const _circumference = (0, $43add8e050c146e1$export$90a7f3efeed30595)(circumference, endAngle - startAngle);
        const betweenAngles = _circumference >= (0, $43add8e050c146e1$export$971d5caa766a69d7) || (0, $43add8e050c146e1$export$ffb5f4729a158638)(angle, startAngle, endAngle);
        const withinRadius = (0, $43add8e050c146e1$export$f38c853ae54ed474)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x: x , y: y , startAngle: startAngle , endAngle: endAngle , innerRadius: innerRadius , outerRadius: outerRadius  } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference", 
        ], useFinalPosition);
        const { offset: offset , spacing: spacing  } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options: options , circumference: circumference  } = this;
        const offset = (options.offset || 0) / 2;
        const spacing = (options.spacing || 0) / 2;
        this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
        this.fullCircles = circumference > (0, $43add8e050c146e1$export$971d5caa766a69d7) ? Math.floor(circumference / (0, $43add8e050c146e1$export$971d5caa766a69d7)) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        ctx.save();
        let radiusOffset = 0;
        if (offset) {
            radiusOffset = offset / 2;
            const halfAngle = (this.startAngle + this.endAngle) / 2;
            ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
            if (this.circumference >= (0, $43add8e050c146e1$export$56c0d5a1e737357d)) radiusOffset = offset;
        }
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        const endAngle = $22a5eaf847bb8284$var$drawArc(ctx, this, radiusOffset, spacing);
        $22a5eaf847bb8284$var$drawBorder(ctx, this, radiusOffset, spacing, endAngle);
        ctx.restore();
    }
}
$22a5eaf847bb8284$export$d48203c759d6a1fc.id = "arc";
$22a5eaf847bb8284$export$d48203c759d6a1fc.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: undefined,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: undefined
};
$22a5eaf847bb8284$export$d48203c759d6a1fc.defaultRoutes = {
    backgroundColor: "backgroundColor"
};
function $22a5eaf847bb8284$var$setStyle(ctx, options, style = options) {
    ctx.lineCap = (0, $43add8e050c146e1$export$90a7f3efeed30595)(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash((0, $43add8e050c146e1$export$90a7f3efeed30595)(style.borderDash, options.borderDash));
    ctx.lineDashOffset = (0, $43add8e050c146e1$export$90a7f3efeed30595)(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = (0, $43add8e050c146e1$export$90a7f3efeed30595)(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = (0, $43add8e050c146e1$export$90a7f3efeed30595)(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = (0, $43add8e050c146e1$export$90a7f3efeed30595)(style.borderColor, options.borderColor);
}
function $22a5eaf847bb8284$var$lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function $22a5eaf847bb8284$var$getLineMethod(options) {
    if (options.stepped) return 0, $43add8e050c146e1$export$8a5498727ef6be21;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, $43add8e050c146e1$export$d24c54395ce0c509;
    return $22a5eaf847bb8284$var$lineTo;
}
function $22a5eaf847bb8284$var$pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0 , end: paramsEnd = count - 1  } = params;
    const { start: segmentStart , end: segmentEnd  } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count: count,
        start: start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
function $22a5eaf847bb8284$var$pathSegment(ctx, line, segment, params) {
    const { points: points , options: options  } = line;
    const { count: count , start: start , loop: loop , ilen: ilen  } = $22a5eaf847bb8284$var$pathVars(points, segment, params);
    const lineMethod = $22a5eaf847bb8284$var$getLineMethod(options);
    let { move: move = true , reverse: reverse  } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) continue;
        else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else lineMethod(ctx, prev, point, reverse, options.stepped);
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
function $22a5eaf847bb8284$var$fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count: count , start: start , ilen: ilen  } = $22a5eaf847bb8284$var$pathVars(points, segment, params);
    const { move: move = true , reverse: reverse  } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index56)=>(start + (reverse ? ilen - index56 : index56)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) continue;
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) minY = y;
            else if (y > maxY) maxY = y;
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
function $22a5eaf847bb8284$var$_getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? $22a5eaf847bb8284$var$fastPathSegment : $22a5eaf847bb8284$var$pathSegment;
}
function $22a5eaf847bb8284$var$_getInterpolationMethod(options) {
    if (options.stepped) return 0, $43add8e050c146e1$export$306ddfe3a8403e2;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, $43add8e050c146e1$export$7a38258bbe170828;
    return 0, $43add8e050c146e1$export$2f6ca3d3b1f80bf5;
}
function $22a5eaf847bb8284$var$strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) path.closePath();
    }
    $22a5eaf847bb8284$var$setStyle(ctx, line.options);
    ctx.stroke(path);
}
function $22a5eaf847bb8284$var$strokePathDirect(ctx, line, start, count) {
    const { segments: segments , options: options  } = line;
    const segmentMethod = $22a5eaf847bb8284$var$_getSegmentMethod(line);
    for (const segment of segments){
        $22a5eaf847bb8284$var$setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start: start,
            end: start + count - 1
        })) ctx.closePath();
        ctx.stroke();
    }
}
const $22a5eaf847bb8284$var$usePath2D = typeof Path2D === "function";
function $22a5eaf847bb8284$var$draw(ctx, line, start, count) {
    if ($22a5eaf847bb8284$var$usePath2D && !line.options.segment) $22a5eaf847bb8284$var$strokePathWithCache(ctx, line, start, count);
    else $22a5eaf847bb8284$var$strokePathDirect(ctx, line, start, count);
}
class $22a5eaf847bb8284$export$55e463fa7bcd3469 extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            (0, $43add8e050c146e1$export$21579262ef46735b)(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = (0, $43add8e050c146e1$export$ab83b03e4111b1d0)(this, this.options.segment));
    }
    first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
    last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = (0, $43add8e050c146e1$export$1a82df3d29112e01)(this, {
            property: property,
            start: value,
            end: value
        });
        if (!segments.length) return;
        const result = [];
        const _interpolate = $22a5eaf847bb8284$var$_getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start: start , end: end  } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
        const segmentMethod = $22a5eaf847bb8284$var$_getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = $22a5eaf847bb8284$var$_getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments)loop &= segmentMethod(ctx, this, segment, {
            start: start,
            end: start + count - 1
        });
        return !!loop;
    }
    draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            $22a5eaf847bb8284$var$draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}
$22a5eaf847bb8284$export$55e463fa7bcd3469.id = "line";
$22a5eaf847bb8284$export$55e463fa7bcd3469.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: true,
    cubicInterpolationMode: "default",
    fill: false,
    spanGaps: false,
    stepped: false,
    tension: 0
};
$22a5eaf847bb8284$export$55e463fa7bcd3469.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
$22a5eaf847bb8284$export$55e463fa7bcd3469.descriptors = {
    _scriptable: true,
    _indexable: (name)=>name !== "borderDash" && name !== "fill"
};
function $22a5eaf847bb8284$var$inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value  } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class $22a5eaf847bb8284$export$bd159b522b230b7a extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x: x , y: y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return $22a5eaf847bb8284$var$inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return $22a5eaf847bb8284$var$inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x: x , y: y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x: x,
            y: y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !(0, $43add8e050c146e1$export$ef35774e6d314e91)(this, area, this.size(options) / 2)) return;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        (0, $43add8e050c146e1$export$6554612db691658e)(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        return options.radius + options.hitRadius;
    }
}
$22a5eaf847bb8284$export$bd159b522b230b7a.id = "point";
$22a5eaf847bb8284$export$bd159b522b230b7a.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
};
$22a5eaf847bb8284$export$bd159b522b230b7a.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
function $22a5eaf847bb8284$var$getBarBounds(bar, useFinalPosition) {
    const { x: x , y: y , base: base , width: width , height: height  } = bar.getProps([
        "x",
        "y",
        "base",
        "width",
        "height"
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left: left,
        top: top,
        right: right,
        bottom: bottom
    };
}
function $22a5eaf847bb8284$var$skipOrLimit(skip1, value, min, max) {
    return skip1 ? 0 : (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(value, min, max);
}
function $22a5eaf847bb8284$var$parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip2 = bar.borderSkipped;
    const o = (0, $43add8e050c146e1$export$1fbe638ecf81657e)(value);
    return {
        t: $22a5eaf847bb8284$var$skipOrLimit(skip2.top, o.top, 0, maxH),
        r: $22a5eaf847bb8284$var$skipOrLimit(skip2.right, o.right, 0, maxW),
        b: $22a5eaf847bb8284$var$skipOrLimit(skip2.bottom, o.bottom, 0, maxH),
        l: $22a5eaf847bb8284$var$skipOrLimit(skip2.left, o.left, 0, maxW)
    };
}
function $22a5eaf847bb8284$var$parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius: enableBorderRadius  } = bar.getProps([
        "enableBorderRadius"
    ]);
    const value = bar.options.borderRadius;
    const o = (0, $43add8e050c146e1$export$d66dc83d8cfc8dd)(value);
    const maxR = Math.min(maxW, maxH);
    const skip3 = bar.borderSkipped;
    const enableBorder = enableBorderRadius || (0, $43add8e050c146e1$export$23f2a1d2818174ef)(value);
    return {
        topLeft: $22a5eaf847bb8284$var$skipOrLimit(!enableBorder || skip3.top || skip3.left, o.topLeft, 0, maxR),
        topRight: $22a5eaf847bb8284$var$skipOrLimit(!enableBorder || skip3.top || skip3.right, o.topRight, 0, maxR),
        bottomLeft: $22a5eaf847bb8284$var$skipOrLimit(!enableBorder || skip3.bottom || skip3.left, o.bottomLeft, 0, maxR),
        bottomRight: $22a5eaf847bb8284$var$skipOrLimit(!enableBorder || skip3.bottom || skip3.right, o.bottomRight, 0, maxR)
    };
}
function $22a5eaf847bb8284$var$boundingRects(bar) {
    const bounds = $22a5eaf847bb8284$var$getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = $22a5eaf847bb8284$var$parseBorderWidth(bar, width / 2, height / 2);
    const radius = $22a5eaf847bb8284$var$parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius: radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function $22a5eaf847bb8284$var$inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && $22a5eaf847bb8284$var$getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || (0, $43add8e050c146e1$export$f38c853ae54ed474)(x, bounds.left, bounds.right)) && (skipY || (0, $43add8e050c146e1$export$f38c853ae54ed474)(y, bounds.top, bounds.bottom));
}
function $22a5eaf847bb8284$var$hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function $22a5eaf847bb8284$var$addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function $22a5eaf847bb8284$var$inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class $22a5eaf847bb8284$export$a16ed71bf4b07672 extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    draw(ctx) {
        const { inflateAmount: inflateAmount , options: { borderColor: borderColor , backgroundColor: backgroundColor  }  } = this;
        const { inner: inner , outer: outer  } = $22a5eaf847bb8284$var$boundingRects(this);
        const addRectPath = $22a5eaf847bb8284$var$hasRadius(outer.radius) ? (0, $43add8e050c146e1$export$493d36ec626b6698) : $22a5eaf847bb8284$var$addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, $22a5eaf847bb8284$var$inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, $22a5eaf847bb8284$var$inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill("evenodd");
        }
        ctx.beginPath();
        addRectPath(ctx, $22a5eaf847bb8284$var$inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return $22a5eaf847bb8284$var$inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return $22a5eaf847bb8284$var$inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return $22a5eaf847bb8284$var$inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x: x , y: y , base: base , horizontal: horizontal  } = this.getProps([
            "x",
            "y",
            "base",
            "horizontal"
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === "x" ? this.width / 2 : this.height / 2;
    }
}
$22a5eaf847bb8284$export$a16ed71bf4b07672.id = "bar";
$22a5eaf847bb8284$export$a16ed71bf4b07672.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: undefined
};
$22a5eaf847bb8284$export$a16ed71bf4b07672.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
var $22a5eaf847bb8284$export$7a5d735b2ab6389d = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ArcElement: $22a5eaf847bb8284$export$d48203c759d6a1fc,
    LineElement: $22a5eaf847bb8284$export$55e463fa7bcd3469,
    PointElement: $22a5eaf847bb8284$export$bd159b522b230b7a,
    BarElement: $22a5eaf847bb8284$export$a16ed71bf4b07672
});
function $22a5eaf847bb8284$var$lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) return data.slice(start, start + count);
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx , y: pointAy  } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function $22a5eaf847bb8284$var$minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(minIndex) && !(0, $43add8e050c146e1$export$342063e11d6c3cad)(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) decimated.push({
                    ...data[intermediateIndex1],
                    x: avgX
                });
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) decimated.push({
                    ...data[intermediateIndex2],
                    x: avgX
                });
            }
            if (i > 0 && lastIndex !== startIndex) decimated.push(data[lastIndex]);
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function $22a5eaf847bb8284$var$cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, "data", {
            value: data
        });
    }
}
function $22a5eaf847bb8284$var$cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        $22a5eaf847bb8284$var$cleanDecimatedDataset(dataset);
    });
}
function $22a5eaf847bb8284$var$getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale: iScale  } = meta;
    const { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = iScale.getUserBounds();
    if (minDefined) start = (0, $43add8e050c146e1$export$efccba1c4a2ef57b)((0, $43add8e050c146e1$export$d141bba7fdc215a3)(points, iScale.axis, min).lo, 0, pointCount - 1);
    if (maxDefined) count = (0, $43add8e050c146e1$export$efccba1c4a2ef57b)((0, $43add8e050c146e1$export$d141bba7fdc215a3)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    else count = pointCount - start;
    return {
        start: start,
        count: count
    };
}
var $22a5eaf847bb8284$export$be17f937e9aa7533 = {
    id: "decimation",
    defaults: {
        algorithm: "min-max",
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            $22a5eaf847bb8284$var$cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data: _data , indexAxis: indexAxis  } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if ((0, $43add8e050c146e1$export$407448d2b89b1813)([
                indexAxis,
                chart.options.indexAxis
            ]) === "y") return;
            if (!meta.controller.supportsDecimation) return;
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== "linear" && xAxis.type !== "time") return;
            if (chart.options.parsing) return;
            let { start: start , count: count  } = $22a5eaf847bb8284$var$getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                $22a5eaf847bb8284$var$cleanDecimatedDataset(dataset);
                return;
            }
            if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, "data", {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case "lttb":
                    decimated = $22a5eaf847bb8284$var$lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case "min-max":
                    decimated = $22a5eaf847bb8284$var$minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        $22a5eaf847bb8284$var$cleanDecimatedData(chart);
    }
};
function $22a5eaf847bb8284$var$_segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start: start , end: end  } = segment;
        end = $22a5eaf847bb8284$var$_findSegmentEnd(start, end, points);
        const bounds = $22a5eaf847bb8284$var$_getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = (0, $43add8e050c146e1$export$1a82df3d29112e01)(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = $22a5eaf847bb8284$var$_getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = (0, $43add8e050c146e1$export$92108d983e8ee699)(segment, points, subBounds);
            for (const fillSource of fillSources)parts.push({
                source: fillSource,
                target: tgt,
                start: {
                    [property]: $22a5eaf847bb8284$var$_getEdge(bounds, subBounds, "start", Math.max)
                },
                end: {
                    [property]: $22a5eaf847bb8284$var$_getEdge(bounds, subBounds, "end", Math.min)
                }
            });
        }
    }
    return parts;
}
function $22a5eaf847bb8284$var$_getBounds(property, first, last, loop) {
    if (loop) return;
    let start = first[property];
    let end = last[property];
    if (property === "angle") {
        start = (0, $43add8e050c146e1$export$9fa96a7d116ea3ce)(start);
        end = (0, $43add8e050c146e1$export$9fa96a7d116ea3ce)(end);
    }
    return {
        property: property,
        start: start,
        end: end
    };
}
function $22a5eaf847bb8284$var$_pointsFromSegments(boundary, line) {
    const { x: x = null , y: y = null  } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start: start , end: end  })=>{
        end = $22a5eaf847bb8284$var$_findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y: y
            });
            points.push({
                x: last.x,
                y: y
            });
        } else if (x !== null) {
            points.push({
                x: x,
                y: first.y
            });
            points.push({
                x: x,
                y: last.y
            });
        }
    });
    return points;
}
function $22a5eaf847bb8284$var$_findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) break;
    }
    return end;
}
function $22a5eaf847bb8284$var$_getEdge(a, b, prop, fn) {
    if (a && b) return fn(a[prop], b[prop]);
    return a ? a[prop] : b ? b[prop] : 0;
}
function $22a5eaf847bb8284$var$_createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(boundary)) {
        _loop = true;
        points = boundary;
    } else points = $22a5eaf847bb8284$var$_pointsFromSegments(boundary, line);
    return points.length ? new $22a5eaf847bb8284$export$55e463fa7bcd3469({
        points: points,
        options: {
            tension: 0
        },
        _loop: _loop,
        _fullLoop: _loop
    }) : null;
}
function $22a5eaf847bb8284$var$_resolveTarget(sources, index57, propagate) {
    const source = sources[index57];
    let fill1 = source.fill;
    const visited = [
        index57
    ];
    let target;
    if (!propagate) return fill1;
    while(fill1 !== false && visited.indexOf(fill1) === -1){
        if (!(0, $43add8e050c146e1$export$39b482c5e57630a8)(fill1)) return fill1;
        target = sources[fill1];
        if (!target) return false;
        if (target.visible) return fill1;
        visited.push(fill1);
        fill1 = target.fill;
    }
    return false;
}
function $22a5eaf847bb8284$var$_decodeFill(line, index58, count) {
    const fill2 = $22a5eaf847bb8284$var$parseFillOption(line);
    if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(fill2)) return isNaN(fill2.value) ? false : fill2;
    let target = parseFloat(fill2);
    if ((0, $43add8e050c146e1$export$39b482c5e57630a8)(target) && Math.floor(target) === target) return $22a5eaf847bb8284$var$decodeTargetIndex(fill2[0], index58, target, count);
    return [
        "origin",
        "start",
        "end",
        "stack",
        "shape"
    ].indexOf(fill2) >= 0 && fill2;
}
function $22a5eaf847bb8284$var$decodeTargetIndex(firstCh, index59, target, count) {
    if (firstCh === "-" || firstCh === "+") target = index59 + target;
    if (target === index59 || target < 0 || target >= count) return false;
    return target;
}
function $22a5eaf847bb8284$var$_getTargetPixel(fill3, scale) {
    let pixel = null;
    if (fill3 === "start") pixel = scale.bottom;
    else if (fill3 === "end") pixel = scale.top;
    else if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(fill3)) pixel = scale.getPixelForValue(fill3.value);
    else if (scale.getBasePixel) pixel = scale.getBasePixel();
    return pixel;
}
function $22a5eaf847bb8284$var$_getTargetValue(fill4, scale, startValue) {
    let value;
    if (fill4 === "start") value = startValue;
    else if (fill4 === "end") value = scale.options.reverse ? scale.min : scale.max;
    else if ((0, $43add8e050c146e1$export$23f2a1d2818174ef)(fill4)) value = fill4.value;
    else value = scale.getBaseValue();
    return value;
}
function $22a5eaf847bb8284$var$parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill5 = (0, $43add8e050c146e1$export$90a7f3efeed30595)(fillOption && fillOption.target, fillOption);
    if (fill5 === undefined) fill5 = !!options.backgroundColor;
    if (fill5 === false || fill5 === null) return false;
    if (fill5 === true) return "origin";
    return fill5;
}
function $22a5eaf847bb8284$var$_buildStackLine(source) {
    const { scale: scale , index: index60 , line: line  } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = $22a5eaf847bb8284$var$getLinesBelow(scale, index60);
    linesBelow.push($22a5eaf847bb8284$var$_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++)$22a5eaf847bb8284$var$addPointsBelow(points, sourcePoints[j], linesBelow);
    }
    return new $22a5eaf847bb8284$export$55e463fa7bcd3469({
        points: points,
        options: {}
    });
}
function $22a5eaf847bb8284$var$getLinesBelow(scale, index61) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index61) break;
        if (!meta.hidden) below.unshift(meta.dataset);
    }
    return below;
}
function $22a5eaf847bb8284$var$addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first: first , last: last , point: point  } = $22a5eaf847bb8284$var$findPoint(line, sourcePoint, "x");
        if (!point || first && last) continue;
        if (first) postponed.unshift(point);
        else {
            points.push(point);
            if (!last) break;
        }
    }
    points.push(...postponed);
}
function $22a5eaf847bb8284$var$findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) return {};
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if ((0, $43add8e050c146e1$export$f38c853ae54ed474)(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first: first,
        last: last,
        point: point
    };
}
class $22a5eaf847bb8284$var$simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x: x , y: y , radius: radius  } = this;
        bounds = bounds || {
            start: 0,
            end: (0, $43add8e050c146e1$export$971d5caa766a69d7)
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x: x , y: y , radius: radius  } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle: angle
        };
    }
}
function $22a5eaf847bb8284$var$_getTarget(source) {
    const { chart: chart , fill: fill6 , line: line  } = source;
    if ((0, $43add8e050c146e1$export$39b482c5e57630a8)(fill6)) return $22a5eaf847bb8284$var$getLineByIndex(chart, fill6);
    if (fill6 === "stack") return $22a5eaf847bb8284$var$_buildStackLine(source);
    if (fill6 === "shape") return true;
    const boundary = $22a5eaf847bb8284$var$computeBoundary(source);
    if (boundary instanceof $22a5eaf847bb8284$var$simpleArc) return boundary;
    return $22a5eaf847bb8284$var$_createBoundaryLine(boundary, line);
}
function $22a5eaf847bb8284$var$getLineByIndex(chart, index62) {
    const meta = chart.getDatasetMeta(index62);
    const visible = meta && chart.isDatasetVisible(index62);
    return visible ? meta.dataset : null;
}
function $22a5eaf847bb8284$var$computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) return $22a5eaf847bb8284$var$computeCircularBoundary(source);
    return $22a5eaf847bb8284$var$computeLinearBoundary(source);
}
function $22a5eaf847bb8284$var$computeLinearBoundary(source) {
    const { scale: scale = {} , fill: fill7  } = source;
    const pixel = $22a5eaf847bb8284$var$_getTargetPixel(fill7, scale);
    if ((0, $43add8e050c146e1$export$39b482c5e57630a8)(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function $22a5eaf847bb8284$var$computeCircularBoundary(source) {
    const { scale: scale , fill: fill8  } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = $22a5eaf847bb8284$var$_getTargetValue(fill8, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new $22a5eaf847bb8284$var$simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i)target.push(scale.getPointPositionForValue(i, value));
    return target;
}
function $22a5eaf847bb8284$var$_drawfill(ctx, source, area) {
    const target = $22a5eaf847bb8284$var$_getTarget(source);
    const { line: line , scale: scale , axis: axis  } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color2 = lineOpts.backgroundColor;
    const { above: above = color2 , below: below = color2  } = fillOption || {};
    if (target && line.points.length) {
        (0, $43add8e050c146e1$export$78acf4525d8a74c4)(ctx, area);
        $22a5eaf847bb8284$var$doFill(ctx, {
            line: line,
            target: target,
            above: above,
            below: below,
            area: area,
            scale: scale,
            axis: axis
        });
        (0, $43add8e050c146e1$export$dc98b0b04f4c7758)(ctx);
    }
}
function $22a5eaf847bb8284$var$doFill(ctx, cfg) {
    const { line: line , target: target , above: above , below: below , area: area , scale: scale  } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    if (property === "x" && below !== above) {
        $22a5eaf847bb8284$var$clipVertical(ctx, target, area.top);
        $22a5eaf847bb8284$var$fill(ctx, {
            line: line,
            target: target,
            color: above,
            scale: scale,
            property: property
        });
        ctx.restore();
        ctx.save();
        $22a5eaf847bb8284$var$clipVertical(ctx, target, area.bottom);
    }
    $22a5eaf847bb8284$var$fill(ctx, {
        line: line,
        target: target,
        color: below,
        scale: scale,
        property: property
    });
    ctx.restore();
}
function $22a5eaf847bb8284$var$clipVertical(ctx, target, clipY) {
    const { segments: segments , points: points  } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start: start , end: end  } = segment;
        const firstPoint = points[start];
        const lastPoint = points[$22a5eaf847bb8284$var$_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(lastPoint.x, clipY);
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function $22a5eaf847bb8284$var$fill(ctx, cfg) {
    const { line: line , target: target , property: property , color: color3 , scale: scale  } = cfg;
    const segments = $22a5eaf847bb8284$var$_segments(line, target, property);
    for (const { source: src , target: tgt , start: start , end: end  } of segments){
        const { style: { backgroundColor: backgroundColor = color3  } = {}  } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        $22a5eaf847bb8284$var$clipBounds(ctx, scale, notShape && $22a5eaf847bb8284$var$_getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) ctx.closePath();
            else $22a5eaf847bb8284$var$interpolatedLineTo(ctx, target, end, property);
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) $22a5eaf847bb8284$var$interpolatedLineTo(ctx, target, start, property);
        }
        ctx.closePath();
        ctx.fill(loop ? "evenodd" : "nonzero");
        ctx.restore();
    }
}
function $22a5eaf847bb8284$var$clipBounds(ctx, scale, bounds) {
    const { top: top , bottom: bottom  } = scale.chart.chartArea;
    const { property: property , start: start , end: end  } = bounds || {};
    if (property === "x") {
        ctx.beginPath();
        ctx.rect(start, top, end - start, bottom - top);
        ctx.clip();
    }
}
function $22a5eaf847bb8284$var$interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
}
var $22a5eaf847bb8284$export$d19ba4d812bed757 = {
    id: "filler",
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof $22a5eaf847bb8284$export$55e463fa7bcd3469) source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: $22a5eaf847bb8284$var$_decodeFill(line, i, count),
                chart: chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line: line
            };
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) continue;
            source.fill = $22a5eaf847bb8284$var$_resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw2 = options.drawTime === "beforeDraw";
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) continue;
            source.line.updateControlPoints(area, source.axis);
            if (draw2) $22a5eaf847bb8284$var$_drawfill(chart.ctx, source, area);
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== "beforeDatasetsDraw") return;
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (source) $22a5eaf847bb8284$var$_drawfill(chart.ctx, source, chart.chartArea);
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!source || source.fill === false || options.drawTime !== "beforeDatasetDraw") return;
        $22a5eaf847bb8284$var$_drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: "beforeDatasetDraw"
    }
};
const $22a5eaf847bb8284$var$getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight: boxHeight = fontSize , boxWidth: boxWidth = fontSize  } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth: boxWidth,
        boxHeight: boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const $22a5eaf847bb8284$var$itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class $22a5eaf847bb8284$var$Legend extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
        this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = (0, $43add8e050c146e1$export$3722cfe417b6ed86)(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        if (labelOpts.sort) legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        if (this.options.reverse) legendItems.reverse();
        this.legendItems = legendItems;
    }
    fit() {
        const { options: options , ctx: ctx  } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth: boxWidth , itemHeight: itemHeight  } = $22a5eaf847bb8284$var$getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx: ctx , maxWidth: maxWidth , options: { labels: { padding: padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top: top,
                row: row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx: ctx , maxHeight: maxHeight , options: { labels: { padding: padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left: left,
                top: currentColHeight,
                col: col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes , options: { align: align , labels: { padding: padding  } , rtl: rtl  }  } = this;
        const rtlHelper = (0, $43add8e050c146e1$export$28f7fcd39efa255)(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox of hitboxes){
                if (hitbox.col !== col) {
                    col = hitbox.col;
                    top = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox.top = top;
                hitbox.left += this.left + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
                top += hitbox.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            (0, $43add8e050c146e1$export$78acf4525d8a74c4)(ctx, this);
            this._draw();
            (0, $43add8e050c146e1$export$dc98b0b04f4c7758)(ctx);
        }
    }
    _draw() {
        const { options: opts , columnSizes: columnSizes , lineWidths: lineWidths , ctx: ctx  } = this;
        const { align: align , labels: labelOpts  } = opts;
        const defaultColor = (0, $43add8e050c146e1$export$4368d992c4eafac0).color;
        const rtlHelper = (0, $43add8e050c146e1$export$28f7fcd39efa255)(opts.rtl, this.left, this.width);
        const labelFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(labelOpts.font);
        const { color: fontColor , padding: padding  } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign("left");
        ctx.textBaseline = "middle";
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth: boxWidth , boxHeight: boxHeight , itemHeight: itemHeight  } = $22a5eaf847bb8284$var$getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
            ctx.save();
            const lineWidth = (0, $43add8e050c146e1$export$90a7f3efeed30595)(legendItem.lineWidth, 1);
            ctx.fillStyle = (0, $43add8e050c146e1$export$90a7f3efeed30595)(legendItem.fillStyle, defaultColor);
            ctx.lineCap = (0, $43add8e050c146e1$export$90a7f3efeed30595)(legendItem.lineCap, "butt");
            ctx.lineDashOffset = (0, $43add8e050c146e1$export$90a7f3efeed30595)(legendItem.lineDashOffset, 0);
            ctx.lineJoin = (0, $43add8e050c146e1$export$90a7f3efeed30595)(legendItem.lineJoin, "miter");
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = (0, $43add8e050c146e1$export$90a7f3efeed30595)(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash((0, $43add8e050c146e1$export$90a7f3efeed30595)(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxWidth * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                (0, $43add8e050c146e1$export$6554612db691658e)(ctx, drawOptions, centerX, centerY);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = (0, $43add8e050c146e1$export$d66dc83d8cfc8dd)(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) (0, $43add8e050c146e1$export$493d36ec626b6698)(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                ctx.fill();
                if (lineWidth !== 0) ctx.stroke();
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            (0, $43add8e050c146e1$export$8743009a87fcb00f)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) cursor = {
            x: (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.left + padding, this.right - lineWidths[0]),
            y: this.top + padding + titleHeight,
            line: 0
        };
        else cursor = {
            x: this.left + padding,
            y: (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
            line: 0
        };
        (0, $43add8e050c146e1$export$3d12bd131bb975d1)(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor || fontColor;
            ctx.fillStyle = legendItem.fontColor || fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = (0, $43add8e050c146e1$export$91c6e00c14e7e6fd)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) cursor.x += width + padding;
            else cursor.y += lineHeight;
        });
        (0, $43add8e050c146e1$export$9d398bebfec1c039)(this.ctx, opts.textDirection);
    }
    drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(titleOpts.font);
        const titlePadding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(titleOpts.padding);
        if (!titleOpts.display) return;
        const rtlHelper = (0, $43add8e050c146e1$export$28f7fcd39efa255)(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + (0, $43add8e050c146e1$export$3c2fa207a37baaea)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign((0, $43add8e050c146e1$export$34aec0b863436764)(position));
        ctx.textBaseline = "middle";
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        (0, $43add8e050c146e1$export$8743009a87fcb00f)(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(titleOpts.font);
        const titlePadding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if ((0, $43add8e050c146e1$export$f38c853ae54ed474)(x, this.left, this.right) && (0, $43add8e050c146e1$export$f38c853ae54ed474)(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if ((0, $43add8e050c146e1$export$f38c853ae54ed474)(x, hitBox.left, hitBox.left + hitBox.width) && (0, $43add8e050c146e1$export$f38c853ae54ed474)(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
            }
        }
        return null;
    }
    handleEvent(e) {
        const opts = this.options;
        if (!$22a5eaf847bb8284$var$isListened(e.type, opts)) return;
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === "mousemove" || e.type === "mouseout") {
            const previous = this._hoveredItem;
            const sameItem = $22a5eaf847bb8284$var$itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) (0, $43add8e050c146e1$export$3722cfe417b6ed86)(opts.onLeave, [
                e,
                previous,
                this
            ], this);
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) (0, $43add8e050c146e1$export$3722cfe417b6ed86)(opts.onHover, [
                e,
                hoveredItem,
                this
            ], this);
        } else if (hoveredItem) (0, $43add8e050c146e1$export$3722cfe417b6ed86)(opts.onClick, [
            e,
            hoveredItem,
            this
        ], this);
    }
}
function $22a5eaf847bb8284$var$isListened(type, opts) {
    if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) return true;
    if (opts.onClick && (type === "click" || type === "mouseup")) return true;
    return false;
}
var $22a5eaf847bb8284$export$ed247974535929c7 = {
    id: "legend",
    _element: $22a5eaf847bb8284$var$Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new $22a5eaf847bb8284$var$Legend({
            ctx: chart.ctx,
            options: options,
            chart: chart
        });
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.configure(chart, legend, options);
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.addBox(chart, legend);
    },
    stop (chart) {
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) chart.legend.handleEvent(args.event);
    },
    defaults: {
        display: true,
        position: "top",
        align: "center",
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index63 = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index63)) {
                ci.hide(index63);
                legendItem.hidden = true;
            } else {
                ci.show(index63);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle: usePointStyle , pointStyle: pointStyle , textAlign: textAlign , color: color4  }  } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = (0, $43add8e050c146e1$export$96f57966bedc81b4)(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color4,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: 0,
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: (name)=>!name.startsWith("on"),
        labels: {
            _scriptable: (name)=>![
                    "generateLabels",
                    "filter",
                    "sort"
                ].includes(name)
        }
    }
};
class $22a5eaf847bb8284$var$Title extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = (0, $43add8e050c146e1$export$8b22cf2602fb60ce)(opts.text) ? opts.text.length : 1;
        this._padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(opts.padding);
        const textSize = lineCount * (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) this.height = textSize;
        else this.width = textSize;
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
        const { top: top , left: left , bottom: bottom , right: right , options: options  } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === "left") {
                titleX = left + offset;
                titleY = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, bottom, top);
                rotation = (0, $43add8e050c146e1$export$56c0d5a1e737357d) * -0.5;
            } else {
                titleX = right - offset;
                titleY = (0, $43add8e050c146e1$export$3c2fa207a37baaea)(align, top, bottom);
                rotation = (0, $43add8e050c146e1$export$56c0d5a1e737357d) * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX: titleX,
            titleY: titleY,
            maxWidth: maxWidth,
            rotation: rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) return;
        const fontOpts = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX: titleX , titleY: titleY , maxWidth: maxWidth , rotation: rotation  } = this._drawArgs(offset);
        (0, $43add8e050c146e1$export$8743009a87fcb00f)(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth: maxWidth,
            rotation: rotation,
            textAlign: (0, $43add8e050c146e1$export$34aec0b863436764)(opts.align),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function $22a5eaf847bb8284$var$createTitle(chart, titleOpts) {
    const title = new $22a5eaf847bb8284$var$Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart: chart
    });
    $22a5eaf847bb8284$export$1ecca0613f5e56d2.configure(chart, title, titleOpts);
    $22a5eaf847bb8284$export$1ecca0613f5e56d2.addBox(chart, title);
    chart.titleBlock = title;
}
var $22a5eaf847bb8284$export$f99233281efd08a0 = {
    id: "title",
    _element: $22a5eaf847bb8284$var$Title,
    start (chart, _args, options) {
        $22a5eaf847bb8284$var$createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "bold"
        },
        fullSize: true,
        padding: 10,
        position: "top",
        text: "",
        weight: 2000
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const $22a5eaf847bb8284$var$map = new WeakMap();
var $22a5eaf847bb8284$export$d5c56664638992a4 = {
    id: "subtitle",
    start (chart, _args, options) {
        const title = new $22a5eaf847bb8284$var$Title({
            ctx: chart.ctx,
            options: options,
            chart: chart
        });
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.configure(chart, title, options);
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.addBox(chart, title);
        $22a5eaf847bb8284$var$map.set(chart, title);
    },
    stop (chart) {
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.removeBox(chart, $22a5eaf847bb8284$var$map.get(chart));
        $22a5eaf847bb8284$var$map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = $22a5eaf847bb8284$var$map.get(chart);
        $22a5eaf847bb8284$export$1ecca0613f5e56d2.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "normal"
        },
        fullSize: true,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const $22a5eaf847bb8284$var$positioners = {
    average (items) {
        if (!items.length) return false;
        let i, len;
        let x = 0;
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                x += pos.x;
                y += pos.y;
                ++count;
            }
        }
        return {
            x: x / count,
            y: y / count
        };
    },
    nearest (items, eventPosition) {
        if (!items.length) return false;
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = (0, $43add8e050c146e1$export$24baa2b76016ce0e)(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x: x,
            y: y
        };
    }
};
function $22a5eaf847bb8284$var$pushOrConcat(base, toPush) {
    if (toPush) {
        if ((0, $43add8e050c146e1$export$8b22cf2602fb60ce)(toPush)) Array.prototype.push.apply(base, toPush);
        else base.push(toPush);
    }
    return base;
}
function $22a5eaf847bb8284$var$splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) return str.split("\n");
    return str;
}
function $22a5eaf847bb8284$var$createTooltipItem(chart, item) {
    const { element: element , datasetIndex: datasetIndex , index: index64  } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label: label , value: value  } = controller.getLabelAndValue(index64);
    return {
        chart: chart,
        label: label,
        parsed: controller.getParsed(index64),
        raw: chart.data.datasets[datasetIndex].data[index64],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index64,
        datasetIndex: datasetIndex,
        element: element
    };
}
function $22a5eaf847bb8284$var$getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body: body , footer: footer , title: title  } = tooltip;
    const { boxWidth: boxWidth , boxHeight: boxHeight  } = options;
    const bodyFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.bodyFont);
    const titleFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.titleFont);
    const footerFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(body, (bodyItem)=>{
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(bodyItem.before, maxLineWidth);
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(bodyItem.lines, maxLineWidth);
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width: width,
        height: height
    };
}
function $22a5eaf847bb8284$var$determineYAlign(chart, size) {
    const { y: y , height: height  } = size;
    if (y < height / 2) return "top";
    else if (y > chart.height - height / 2) return "bottom";
    return "center";
}
function $22a5eaf847bb8284$var$doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x: x , width: width  } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x + width + caret > chart.width) return true;
    if (xAlign === "right" && x - width - caret < 0) return true;
}
function $22a5eaf847bb8284$var$determineXAlign(chart, options, size, yAlign) {
    const { x: x , width: width  } = size;
    const { width: chartWidth , chartArea: { left: left , right: right  }  } = chart;
    let xAlign = "center";
    if (yAlign === "center") xAlign = x <= (left + right) / 2 ? "left" : "right";
    else if (x <= width / 2) xAlign = "left";
    else if (x >= chartWidth - width / 2) xAlign = "right";
    if ($22a5eaf847bb8284$var$doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = "center";
    return xAlign;
}
function $22a5eaf847bb8284$var$determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || $22a5eaf847bb8284$var$determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || $22a5eaf847bb8284$var$determineXAlign(chart, options, size, yAlign),
        yAlign: yAlign
    };
}
function $22a5eaf847bb8284$var$alignX(size, xAlign) {
    let { x: x , width: width  } = size;
    if (xAlign === "right") x -= width;
    else if (xAlign === "center") x -= width / 2;
    return x;
}
function $22a5eaf847bb8284$var$alignY(size, yAlign, paddingAndSize) {
    let { y: y , height: height  } = size;
    if (yAlign === "top") y += paddingAndSize;
    else if (yAlign === "bottom") y -= height + paddingAndSize;
    else y -= height / 2;
    return y;
}
function $22a5eaf847bb8284$var$getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize: caretSize , caretPadding: caretPadding , cornerRadius: cornerRadius  } = options;
    const { xAlign: xAlign , yAlign: yAlign  } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft: topLeft , topRight: topRight , bottomLeft: bottomLeft , bottomRight: bottomRight  } = (0, $43add8e050c146e1$export$d66dc83d8cfc8dd)(cornerRadius);
    let x = $22a5eaf847bb8284$var$alignX(size, xAlign);
    const y = $22a5eaf847bb8284$var$alignY(size, yAlign, paddingAndSize);
    if (yAlign === "center") {
        if (xAlign === "left") x += paddingAndSize;
        else if (xAlign === "right") x -= paddingAndSize;
    } else if (xAlign === "left") x -= Math.max(topLeft, bottomLeft) + caretSize;
    else if (xAlign === "right") x += Math.max(topRight, bottomRight) + caretSize;
    return {
        x: (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(x, 0, chart.width - size.width),
        y: (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(y, 0, chart.height - size.height)
    };
}
function $22a5eaf847bb8284$var$getAlignedX(tooltip, align, options) {
    const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function $22a5eaf847bb8284$var$getBeforeAfterBodyLines(callback1) {
    return $22a5eaf847bb8284$var$pushOrConcat([], $22a5eaf847bb8284$var$splitNewlines(callback1));
}
function $22a5eaf847bb8284$var$createTooltipContext(parent, tooltip, tooltipItems) {
    return (0, $43add8e050c146e1$export$dda1d9f60106f0e9)(parent, {
        tooltip: tooltip,
        tooltipItems: tooltipItems,
        type: "tooltip"
    });
}
function $22a5eaf847bb8284$var$overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
class $22a5eaf847bb8284$var$Tooltip extends $22a5eaf847bb8284$export$db77ccec0bb4ccac {
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart || config._chart;
        this._chart = this.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
    _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) return cached;
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new $22a5eaf847bb8284$export$8ab227dac26677d(this.chart, opts);
        if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
        return animations;
    }
    getContext() {
        return this.$context || (this.$context = $22a5eaf847bb8284$var$createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks: callbacks  } = options;
        const beforeTitle = callbacks.beforeTitle.apply(this, [
            context
        ]);
        const title = callbacks.title.apply(this, [
            context
        ]);
        const afterTitle = callbacks.afterTitle.apply(this, [
            context
        ]);
        let lines = [];
        lines = $22a5eaf847bb8284$var$pushOrConcat(lines, $22a5eaf847bb8284$var$splitNewlines(beforeTitle));
        lines = $22a5eaf847bb8284$var$pushOrConcat(lines, $22a5eaf847bb8284$var$splitNewlines(title));
        lines = $22a5eaf847bb8284$var$pushOrConcat(lines, $22a5eaf847bb8284$var$splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return $22a5eaf847bb8284$var$getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [
            tooltipItems
        ]));
    }
    getBody(tooltipItems, options) {
        const { callbacks: callbacks  } = options;
        const bodyItems = [];
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = $22a5eaf847bb8284$var$overrideCallbacks(callbacks, context);
            $22a5eaf847bb8284$var$pushOrConcat(bodyItem.before, $22a5eaf847bb8284$var$splitNewlines(scoped.beforeLabel.call(this, context)));
            $22a5eaf847bb8284$var$pushOrConcat(bodyItem.lines, scoped.label.call(this, context));
            $22a5eaf847bb8284$var$pushOrConcat(bodyItem.after, $22a5eaf847bb8284$var$splitNewlines(scoped.afterLabel.call(this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return $22a5eaf847bb8284$var$getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [
            tooltipItems
        ]));
    }
    getFooter(tooltipItems, options) {
        const { callbacks: callbacks  } = options;
        const beforeFooter = callbacks.beforeFooter.apply(this, [
            tooltipItems
        ]);
        const footer = callbacks.footer.apply(this, [
            tooltipItems
        ]);
        const afterFooter = callbacks.afterFooter.apply(this, [
            tooltipItems
        ]);
        let lines = [];
        lines = $22a5eaf847bb8284$var$pushOrConcat(lines, $22a5eaf847bb8284$var$splitNewlines(beforeFooter));
        lines = $22a5eaf847bb8284$var$pushOrConcat(lines, $22a5eaf847bb8284$var$splitNewlines(footer));
        lines = $22a5eaf847bb8284$var$pushOrConcat(lines, $22a5eaf847bb8284$var$splitNewlines(afterFooter));
        return lines;
    }
    _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i)tooltipItems.push($22a5eaf847bb8284$var$createTooltipItem(this.chart, active[i]));
        if (options.filter) tooltipItems = tooltipItems.filter((element, index65, array)=>options.filter(element, index65, array, data));
        if (options.itemSort) tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(tooltipItems, (context)=>{
            const scoped = $22a5eaf847bb8284$var$overrideCallbacks(options.callbacks, context);
            labelColors.push(scoped.labelColor.call(this, context));
            labelPointStyles.push(scoped.labelPointStyle.call(this, context));
            labelTextColors.push(scoped.labelTextColor.call(this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) properties = {
                opacity: 0
            };
        } else {
            const position = $22a5eaf847bb8284$var$positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = $22a5eaf847bb8284$var$getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = $22a5eaf847bb8284$var$determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = $22a5eaf847bb8284$var$getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) this._resolveAnimations().update(this, properties);
        if (changed && options.external) options.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: replay
        });
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign: xAlign , yAlign: yAlign  } = this;
        const { caretSize: caretSize , cornerRadius: cornerRadius  } = options;
        const { topLeft: topLeft , topRight: topRight , bottomLeft: bottomLeft , bottomRight: bottomRight  } = (0, $43add8e050c146e1$export$d66dc83d8cfc8dd)(cornerRadius);
        const { x: ptX , y: ptY  } = tooltipPoint;
        const { width: width , height: height  } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === "center") {
            y2 = ptY + height / 2;
            if (xAlign === "left") {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === "left") x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            else if (xAlign === "right") x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            else x2 = this.caretX;
            if (yAlign === "top") {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1: x1,
            x2: x2,
            x3: x3,
            y1: y1,
            y2: y2,
            y3: y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = (0, $43add8e050c146e1$export$28f7fcd39efa255)(options.rtl, this.x, this.width);
            pt.x = $22a5eaf847bb8284$var$getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = "middle";
            titleFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
            }
        }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColors = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight: boxHeight , boxWidth: boxWidth , boxPadding: boxPadding  } = options;
        const bodyFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.bodyFont);
        const colorX = $22a5eaf847bb8284$var$getAlignedX(this, "left", options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            (0, $43add8e050c146e1$export$6554612db691658e)(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColors.borderColor;
            ctx.fillStyle = labelColors.backgroundColor;
            (0, $43add8e050c146e1$export$6554612db691658e)(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = labelColors.borderWidth || 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.setLineDash(labelColors.borderDash || []);
            ctx.lineDashOffset = labelColors.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
            const borderRadius = (0, $43add8e050c146e1$export$d66dc83d8cfc8dd)(labelColors.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                (0, $43add8e050c146e1$export$493d36ec626b6698)(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.beginPath();
                (0, $43add8e050c146e1$export$493d36ec626b6698)(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body: body  } = this;
        const { bodySpacing: bodySpacing , bodyAlign: bodyAlign , displayColors: displayColors , boxHeight: boxHeight , boxWidth: boxWidth , boxPadding: boxPadding  } = options;
        const bodyFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = (0, $43add8e050c146e1$export$28f7fcd39efa255)(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = "middle";
        ctx.font = bodyFont.string;
        pt.x = $22a5eaf847bb8284$var$getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = (0, $43add8e050c146e1$export$28f7fcd39efa255)(options.rtl, this.x, this.width);
            pt.x = $22a5eaf847bb8284$var$getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = "middle";
            footerFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign: xAlign , yAlign: yAlign  } = this;
        const { x: x , y: y  } = pt;
        const { width: width , height: height  } = tooltipSize;
        const { topLeft: topLeft , topRight: topRight , bottomLeft: bottomLeft , bottomRight: bottomRight  } = (0, $43add8e050c146e1$export$d66dc83d8cfc8dd)(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === "top") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === "center" && xAlign === "right") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === "bottom") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === "center" && xAlign === "left") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) ctx.stroke();
    }
    _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = $22a5eaf847bb8284$var$positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) return;
            const size = this._size = $22a5eaf847bb8284$var$getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = $22a5eaf847bb8284$var$determineAlignment(chart, options, positionAndSize);
            const point = $22a5eaf847bb8284$var$getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) return;
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            (0, $43add8e050c146e1$export$3d12bd131bb975d1)(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            (0, $43add8e050c146e1$export$9d398bebfec1c039)(ctx, options.textDirection);
            ctx.restore();
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex: datasetIndex , index: index66  })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("Cannot find a dataset at index " + datasetIndex);
            return {
                datasetIndex: datasetIndex,
                element: meta.data[index66],
                index: index66
            };
        });
        const changed = !(0, $43add8e050c146e1$export$ee7c8ad385a60b7b)(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
    handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) return false;
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !(0, $43add8e050c146e1$export$ee7c8ad385a60b7b)(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) active.reverse();
        return active;
    }
    _positionChanged(active, e) {
        const { caretX: caretX , caretY: caretY , options: options  } = this;
        const position = $22a5eaf847bb8284$var$positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
$22a5eaf847bb8284$var$Tooltip.positioners = $22a5eaf847bb8284$var$positioners;
var $22a5eaf847bb8284$export$28c660c63b792dea = {
    id: "tooltip",
    _element: $22a5eaf847bb8284$var$Tooltip,
    positioners: $22a5eaf847bb8284$var$positioners,
    afterInit (chart, _args, options) {
        if (options) chart.tooltip = new $22a5eaf847bb8284$var$Tooltip({
            chart: chart,
            options: options
        });
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    reset (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip: tooltip
            };
            if (chart.notifyPlugins("beforeTooltipDraw", args) === false) return;
            tooltip.draw(chart.ctx);
            chart.notifyPlugins("afterTooltipDraw", args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: true,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "width",
                    "height",
                    "caretX",
                    "caretY"
                ]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: {
            beforeTitle: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            title (tooltipItems) {
                if (tooltipItems.length > 0) {
                    const item = tooltipItems[0];
                    const labels = item.chart.data.labels;
                    const labelCount = labels ? labels.length : 0;
                    if (this && this.options && this.options.mode === "dataset") return item.dataset.label || "";
                    else if (item.label) return item.label;
                    else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
                }
                return "";
            },
            afterTitle: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            beforeBody: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            beforeLabel: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            label (tooltipItem) {
                if (this && this.options && this.options.mode === "dataset") return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
                let label = tooltipItem.dataset.label || "";
                if (label) label += ": ";
                const value = tooltipItem.formattedValue;
                if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(value)) label += value;
                return label;
            },
            labelColor (tooltipItem) {
                const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
                const options = meta.controller.getStyle(tooltipItem.dataIndex);
                return {
                    borderColor: options.borderColor,
                    backgroundColor: options.backgroundColor,
                    borderWidth: options.borderWidth,
                    borderDash: options.borderDash,
                    borderDashOffset: options.borderDashOffset,
                    borderRadius: 0
                };
            },
            labelTextColor () {
                return this.options.bodyColor;
            },
            labelPointStyle (tooltipItem) {
                const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
                const options = meta.controller.getStyle(tooltipItem.dataIndex);
                return {
                    pointStyle: options.pointStyle,
                    rotation: options.rotation
                };
            },
            afterLabel: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            afterBody: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            beforeFooter: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            footer: (0, $43add8e050c146e1$export$890c4ad488842ce7),
            afterFooter: (0, $43add8e050c146e1$export$890c4ad488842ce7)
        }
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: (name)=>name !== "filter" && name !== "itemSort" && name !== "external",
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: [
        "interaction"
    ]
};
var $22a5eaf847bb8284$export$8b3ca321c77fdea6 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Decimation: $22a5eaf847bb8284$export$be17f937e9aa7533,
    Filler: $22a5eaf847bb8284$export$d19ba4d812bed757,
    Legend: $22a5eaf847bb8284$export$ed247974535929c7,
    SubTitle: $22a5eaf847bb8284$export$d5c56664638992a4,
    Title: $22a5eaf847bb8284$export$f99233281efd08a0,
    Tooltip: $22a5eaf847bb8284$export$28c660c63b792dea
});
const $22a5eaf847bb8284$var$addIfString = (labels, raw, index67, addedLabels)=>{
    if (typeof raw === "string") {
        index67 = labels.push(raw) - 1;
        addedLabels.unshift({
            index: index67,
            label: raw
        });
    } else if (isNaN(raw)) index67 = null;
    return index67;
};
function $22a5eaf847bb8284$var$findOrAddLabel(labels, raw, index68, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) return $22a5eaf847bb8284$var$addIfString(labels, raw, index68, addedLabels);
    const last = labels.lastIndexOf(raw);
    return first !== last ? index68 : first;
}
const $22a5eaf847bb8284$var$validIndex = (index69, max)=>index69 === null ? null : (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(Math.round(index69), 0, max);
class $22a5eaf847bb8284$export$29e663ba4d09fe7 extends $22a5eaf847bb8284$export$d60cfc58d3c358b6 {
    constructor(cfg){
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index: index70 , label: label  } of added)if (labels[index70] === label) labels.splice(index70, 1);
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index71) {
        if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(raw)) return null;
        const labels = this.getLabels();
        index71 = isFinite(index71) && labels[index71] === raw ? index71 : $22a5eaf847bb8284$var$findOrAddLabel(labels, raw, (0, $43add8e050c146e1$export$90a7f3efeed30595)(index71, raw), this._addedLabels);
        return $22a5eaf847bb8284$var$validIndex(index71, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let { min: min , max: max  } = this.getMinMax(true);
        if (this.options.bounds === "ticks") {
            if (!minDefined) min = 0;
            if (!maxDefined) max = this.getLabels().length - 1;
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++)ticks.push({
            value: value
        });
        return ticks;
    }
    getLabelForValue(value) {
        const labels = this.getLabels();
        if (value >= 0 && value < labels.length) return labels[value];
        return value;
    }
    configure() {
        super.configure();
        if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
    }
    getPixelForValue(value) {
        if (typeof value !== "number") value = this.parse(value);
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index72) {
        const ticks = this.ticks;
        if (index72 < 0 || index72 > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index72].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
$22a5eaf847bb8284$export$29e663ba4d09fe7.id = "category";
$22a5eaf847bb8284$export$29e663ba4d09fe7.defaults = {
    ticks: {
        callback: $22a5eaf847bb8284$export$29e663ba4d09fe7.prototype.getLabelForValue
    }
};
function $22a5eaf847bb8284$var$generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds: bounds , step: step , min: min , max: max , precision: precision , count: count , maxTicks: maxTicks , maxDigits: maxDigits , includeBounds: includeBounds  } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin , max: rmax  } = dataRange;
    const minDefined = !(0, $43add8e050c146e1$export$342063e11d6c3cad)(min);
    const maxDefined = !(0, $43add8e050c146e1$export$342063e11d6c3cad)(max);
    const countDefined = !(0, $43add8e050c146e1$export$342063e11d6c3cad)(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = (0, $43add8e050c146e1$export$cf2f7c5792f80b46)((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [
        {
            value: rmin
        },
        {
            value: rmax
        }
    ];
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) spacing = (0, $43add8e050c146e1$export$cf2f7c5792f80b46)(numSpaces * spacing / maxSpaces / unit) * unit;
    if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && (0, $43add8e050c146e1$export$53a70dd1ebbae346)((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if ((0, $43add8e050c146e1$export$a33b77bbdbb8366c)(numSpaces, Math.round(numSpaces), spacing / 1000)) numSpaces = Math.round(numSpaces);
        else numSpaces = Math.ceil(numSpaces);
    }
    const decimalPlaces = Math.max((0, $43add8e050c146e1$export$b9a6b53f9be3734)(spacing), (0, $43add8e050c146e1$export$b9a6b53f9be3734)(niceMin));
    factor = Math.pow(10, (0, $43add8e050c146e1$export$342063e11d6c3cad)(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) j++;
            if ((0, $43add8e050c146e1$export$a33b77bbdbb8366c)(Math.round((niceMin + j * spacing) * factor) / factor, min, $22a5eaf847bb8284$var$relativeLabelSize(min, minSpacing, generationOptions))) j++;
        } else if (niceMin < min) j++;
    }
    for(; j < numSpaces; ++j)ticks.push({
        value: Math.round((niceMin + j * spacing) * factor) / factor
    });
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && (0, $43add8e050c146e1$export$a33b77bbdbb8366c)(ticks[ticks.length - 1].value, max, $22a5eaf847bb8284$var$relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
        else ticks.push({
            value: max
        });
    } else if (!maxDefined || niceMax === max) ticks.push({
        value: niceMax
    });
    return ticks;
}
function $22a5eaf847bb8284$var$relativeLabelSize(value, minSpacing, { horizontal: horizontal , minRotation: minRotation  }) {
    const rad = (0, $43add8e050c146e1$export$625550452a3fa3ec)(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
}
class $22a5eaf847bb8284$var$LinearScaleBase extends $22a5eaf847bb8284$export$d60cfc58d3c358b6 {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(raw)) return null;
        if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) return null;
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero: beginAtZero  } = this.options;
        const { minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let { min: min , max: max  } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(min);
            const maxSign = (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(max);
            if (minSign < 0 && maxSign < 0) setMax(0);
            else if (minSign > 0 && maxSign > 0) setMin(0);
        }
        if (min === max) {
            let offset = 1;
            if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) offset = Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) setMin(min - offset);
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit: maxTicksLimit , stepSize: stepSize  } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
        return maxTicks;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks: maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = $22a5eaf847bb8284$var$generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === "ticks") (0, $43add8e050c146e1$export$158acd800e1ef08b)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return (0, $43add8e050c146e1$export$ae1af26003f05816)(value, this.chart.options.locale, this.options.ticks.format);
    }
}
class $22a5eaf847bb8284$export$e7f4e5e8656f0b93 extends $22a5eaf847bb8284$var$LinearScaleBase {
    determineDataLimits() {
        const { min: min , max: max  } = this.getMinMax(true);
        this.min = (0, $43add8e050c146e1$export$39b482c5e57630a8)(min) ? min : 0;
        this.max = (0, $43add8e050c146e1$export$39b482c5e57630a8)(max) ? max : 1;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = (0, $43add8e050c146e1$export$625550452a3fa3ec)(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}
$22a5eaf847bb8284$export$e7f4e5e8656f0b93.id = "linear";
$22a5eaf847bb8284$export$e7f4e5e8656f0b93.defaults = {
    ticks: {
        callback: $22a5eaf847bb8284$export$27c7467594ef87bd.formatters.numeric
    }
};
function $22a5eaf847bb8284$var$isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, Math.floor((0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(tickVal)));
    return remain === 1;
}
function $22a5eaf847bb8284$var$generateTicks(generationOptions, dataRange) {
    const endExp = Math.floor((0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(dataRange.max));
    const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    const ticks = [];
    let tickVal = (0, $43add8e050c146e1$export$c4ce752e73470fba)(generationOptions.min, Math.pow(10, Math.floor((0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(dataRange.min))));
    let exp = Math.floor((0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(tickVal));
    let significand = Math.floor(tickVal / Math.pow(10, exp));
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    do {
        ticks.push({
            value: tickVal,
            major: $22a5eaf847bb8284$var$isMajor(tickVal)
        });
        ++significand;
        if (significand === 10) {
            significand = 1;
            ++exp;
            precision = exp >= 0 ? 1 : precision;
        }
        tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
    }while (exp < endExp || exp === endExp && significand < endSignificand);
    const lastTick = (0, $43add8e050c146e1$export$c4ce752e73470fba)(generationOptions.max, tickVal);
    ticks.push({
        value: lastTick,
        major: $22a5eaf847bb8284$var$isMajor(tickVal)
    });
    return ticks;
}
class $22a5eaf847bb8284$export$85295eaf7cb3ac3e extends $22a5eaf847bb8284$export$d60cfc58d3c358b6 {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index73) {
        const value = $22a5eaf847bb8284$var$LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index73
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return (0, $43add8e050c146e1$export$39b482c5e57630a8)(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min: min , max: max  } = this.getMinMax(true);
        this.min = (0, $43add8e050c146e1$export$39b482c5e57630a8)(min) ? Math.max(0, min) : null;
        this.max = (0, $43add8e050c146e1$export$39b482c5e57630a8)(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) this._zero = true;
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        const exp = (v, m)=>Math.pow(10, Math.floor((0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(v)) + m);
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin(exp(min, -1));
                setMax(exp(max, 1));
            }
        }
        if (min <= 0) setMin(exp(max, -1));
        if (max <= 0) setMax(exp(min, 1));
        if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) setMin(exp(min, -1));
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = $22a5eaf847bb8284$var$generateTicks(generationOptions, this);
        if (opts.bounds === "ticks") (0, $43add8e050c146e1$export$158acd800e1ef08b)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    getLabelForValue(value) {
        return value === undefined ? "0" : (0, $43add8e050c146e1$export$ae1af26003f05816)(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const start = this.min;
        super.configure();
        this._startValue = (0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(start);
        this._valueRange = (0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(this.max) - (0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) value = this.min;
        if (value === null || isNaN(value)) return NaN;
        return this.getPixelForDecimal(value === this.min ? 0 : ((0, $43add8e050c146e1$export$3a1a48c8f6ef640e)(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}
$22a5eaf847bb8284$export$85295eaf7cb3ac3e.id = "logarithmic";
$22a5eaf847bb8284$export$85295eaf7cb3ac3e.defaults = {
    ticks: {
        callback: $22a5eaf847bb8284$export$27c7467594ef87bd.formatters.logarithmic,
        major: {
            enabled: true
        }
    }
};
function $22a5eaf847bb8284$var$getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(tickOpts.backdropPadding);
        return (0, $43add8e050c146e1$export$90a7f3efeed30595)(tickOpts.font && tickOpts.font.size, (0, $43add8e050c146e1$export$4368d992c4eafac0).font.size) + padding.height;
    }
    return 0;
}
function $22a5eaf847bb8284$var$measureLabelSize(ctx, font, label) {
    label = (0, $43add8e050c146e1$export$8b22cf2602fb60ce)(label) ? label : [
        label
    ];
    return {
        w: (0, $43add8e050c146e1$export$a05254e7c3aeba6e)(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function $22a5eaf847bb8284$var$determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) return {
        start: pos - size / 2,
        end: pos + size / 2
    };
    else if (angle < min || angle > max) return {
        start: pos - size,
        end: pos
    };
    return {
        start: pos,
        end: pos + size
    };
}
function $22a5eaf847bb8284$var$fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? (0, $43add8e050c146e1$export$56c0d5a1e737357d) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(opts.font);
        const textSize = $22a5eaf847bb8284$var$measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = (0, $43add8e050c146e1$export$9fa96a7d116ea3ce)(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round((0, $43add8e050c146e1$export$25ce5a424b770e84)(angleRadians));
        const hLimits = $22a5eaf847bb8284$var$determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = $22a5eaf847bb8284$var$determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        $22a5eaf847bb8284$var$updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = $22a5eaf847bb8284$var$buildPointLabelItems(scale, labelSizes, padding);
}
function $22a5eaf847bb8284$var$updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function $22a5eaf847bb8284$var$buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const extra = $22a5eaf847bb8284$var$getTickBackdropHeight(opts) / 2;
    const outerDistance = scale.drawingArea;
    const additionalAngle = opts.pointLabels.centerPointLabels ? (0, $43add8e050c146e1$export$56c0d5a1e737357d) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
        const angle = Math.round((0, $43add8e050c146e1$export$25ce5a424b770e84)((0, $43add8e050c146e1$export$9fa96a7d116ea3ce)(pointLabelPosition.angle + (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd))));
        const size = labelSizes[i];
        const y = $22a5eaf847bb8284$var$yForAngle(pointLabelPosition.y, size.h, angle);
        const textAlign = $22a5eaf847bb8284$var$getTextAlignForAngle(angle);
        const left = $22a5eaf847bb8284$var$leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
        items.push({
            x: pointLabelPosition.x,
            y: y,
            textAlign: textAlign,
            left: left,
            top: y,
            right: left + size.w,
            bottom: y + size.h
        });
    }
    return items;
}
function $22a5eaf847bb8284$var$getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) return "center";
    else if (angle < 180) return "left";
    return "right";
}
function $22a5eaf847bb8284$var$leftForTextAlign(x, w, align) {
    if (align === "right") x -= w;
    else if (align === "center") x -= w / 2;
    return x;
}
function $22a5eaf847bb8284$var$yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) y -= h / 2;
    else if (angle > 270 || angle < 90) y -= h;
    return y;
}
function $22a5eaf847bb8284$var$drawPointLabels(scale, labelCount) {
    const { ctx: ctx , options: { pointLabels: pointLabels  }  } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        const plFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(optsAtIndex.font);
        const { x: x , y: y , textAlign: textAlign , left: left , top: top , right: right , bottom: bottom  } = scale._pointLabelItems[i];
        const { backdropColor: backdropColor  } = optsAtIndex;
        if (!(0, $43add8e050c146e1$export$342063e11d6c3cad)(backdropColor)) {
            const borderRadius = (0, $43add8e050c146e1$export$d66dc83d8cfc8dd)(optsAtIndex.borderRadius);
            const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(optsAtIndex.backdropPadding);
            ctx.fillStyle = backdropColor;
            const backdropLeft = left - padding.left;
            const backdropTop = top - padding.top;
            const backdropWidth = right - left + padding.width;
            const backdropHeight = bottom - top + padding.height;
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                (0, $43add8e050c146e1$export$493d36ec626b6698)(ctx, {
                    x: backdropLeft,
                    y: backdropTop,
                    w: backdropWidth,
                    h: backdropHeight,
                    radius: borderRadius
                });
                ctx.fill();
            } else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
        }
        (0, $43add8e050c146e1$export$8743009a87fcb00f)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: "middle"
        });
    }
}
function $22a5eaf847bb8284$var$pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx: ctx  } = scale;
    if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, (0, $43add8e050c146e1$export$971d5caa766a69d7));
    else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function $22a5eaf847bb8284$var$drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color: color5 , lineWidth: lineWidth  } = gridLineOpts;
    if (!circular && !labelCount || !color5 || !lineWidth || radius < 0) return;
    ctx.save();
    ctx.strokeStyle = color5;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(gridLineOpts.borderDash);
    ctx.lineDashOffset = gridLineOpts.borderDashOffset;
    ctx.beginPath();
    $22a5eaf847bb8284$var$pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function $22a5eaf847bb8284$var$createPointLabelContext(parent, index74, label) {
    return (0, $43add8e050c146e1$export$dda1d9f60106f0e9)(parent, {
        label: label,
        index: index74,
        type: "pointLabel"
    });
}
class $22a5eaf847bb8284$export$cfafc36d95386d38 extends $22a5eaf847bb8284$var$LinearScaleBase {
    constructor(cfg){
        super(cfg);
        this.xCenter = undefined;
        this.yCenter = undefined;
        this.drawingArea = undefined;
        this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)($22a5eaf847bb8284$var$getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min: min , max: max  } = this.getMinMax(false);
        this.min = (0, $43add8e050c146e1$export$39b482c5e57630a8)(min) && !isNaN(min) ? min : 0;
        this.max = (0, $43add8e050c146e1$export$39b482c5e57630a8)(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / $22a5eaf847bb8284$var$getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        $22a5eaf847bb8284$var$LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index75)=>{
            const label = (0, $43add8e050c146e1$export$3722cfe417b6ed86)(this.options.pointLabels.callback, [
                value,
                index75
            ], this);
            return label || label === 0 ? label : "";
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) $22a5eaf847bb8284$var$fitWithPointLabels(this);
        else this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index76) {
        const angleMultiplier = (0, $43add8e050c146e1$export$971d5caa766a69d7) / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return (0, $43add8e050c146e1$export$9fa96a7d116ea3ce)(index76 * angleMultiplier + (0, $43add8e050c146e1$export$625550452a3fa3ec)(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(value)) return NaN;
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) return (this.max - value) * scalingFactor;
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(distance)) return NaN;
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index77) {
        const pointLabels = this._pointLabels || [];
        if (index77 >= 0 && index77 < pointLabels.length) {
            const pointLabel = pointLabels[index77];
            return $22a5eaf847bb8284$var$createPointLabelContext(this.getContext(), index77, pointLabel);
        }
    }
    getPointPosition(index78, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index78) - (0, $43add8e050c146e1$export$7f8ddf7c7c20b3cd) + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle: angle
        };
    }
    getPointPositionForValue(index79, value) {
        return this.getPointPosition(index79, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index80) {
        return this.getPointPositionForValue(index80 || 0, this.getBaseValue());
    }
    getPointLabelPosition(index81) {
        const { left: left , top: top , right: right , bottom: bottom  } = this._pointLabelItems[index81];
        return {
            left: left,
            top: top,
            right: right,
            bottom: bottom
        };
    }
    drawBackground() {
        const { backgroundColor: backgroundColor , grid: { circular: circular  }  } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            $22a5eaf847bb8284$var$pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
    drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines: angleLines , grid: grid  } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) $22a5eaf847bb8284$var$drawPointLabels(this, labelCount);
        if (grid.display) this.ticks.forEach((tick, index82)=>{
            if (index82 !== 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const optsAtIndex = grid.setContext(this.getContext(index82 - 1));
                $22a5eaf847bb8284$var$drawRadiusLine(this, optsAtIndex, offset, labelCount);
            }
        });
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color: color6 , lineWidth: lineWidth  } = optsAtIndex;
                if (!lineWidth || !color6) continue;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color6;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) return;
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        this.ticks.forEach((tick, index83)=>{
            if (index83 === 0 && !opts.reverse) return;
            const optsAtIndex = tickOpts.setContext(this.getContext(index83));
            const tickFont = (0, $43add8e050c146e1$export$3d8c2f653ac9d0b9)(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index83].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = (0, $43add8e050c146e1$export$96f57966bedc81b4)(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            (0, $43add8e050c146e1$export$8743009a87fcb00f)(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color
            });
        });
        ctx.restore();
    }
    drawTitle() {}
}
$22a5eaf847bb8284$export$cfafc36d95386d38.id = "radialLinear";
$22a5eaf847bb8284$export$cfafc36d95386d38.defaults = {
    display: true,
    animate: true,
    position: "chartArea",
    angleLines: {
        display: true,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0.0
    },
    grid: {
        circular: false
    },
    startAngle: 0,
    ticks: {
        showLabelBackdrop: true,
        callback: $22a5eaf847bb8284$export$27c7467594ef87bd.formatters.numeric
    },
    pointLabels: {
        backdropColor: undefined,
        backdropPadding: 2,
        display: true,
        font: {
            size: 10
        },
        callback (label) {
            return label;
        },
        padding: 5,
        centerPointLabels: false
    }
};
$22a5eaf847bb8284$export$cfafc36d95386d38.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
};
$22a5eaf847bb8284$export$cfafc36d95386d38.descriptors = {
    angleLines: {
        _fallback: "grid"
    }
};
const $22a5eaf847bb8284$var$INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
const $22a5eaf847bb8284$var$UNITS = Object.keys($22a5eaf847bb8284$var$INTERVALS);
function $22a5eaf847bb8284$var$sorter(a, b) {
    return a - b;
}
function $22a5eaf847bb8284$var$parse(scale, input) {
    if ((0, $43add8e050c146e1$export$342063e11d6c3cad)(input)) return null;
    const adapter = scale._adapter;
    const { parser: parser , round: round , isoWeekday: isoWeekday  } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") value = parser(value);
    if (!(0, $43add8e050c146e1$export$39b482c5e57630a8)(value)) value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    if (value === null) return null;
    if (round) value = round === "week" && ((0, $43add8e050c146e1$export$9e5f44173e64f162)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round);
    return +value;
}
function $22a5eaf847bb8284$var$determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = $22a5eaf847bb8284$var$UNITS.length;
    for(let i = $22a5eaf847bb8284$var$UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = $22a5eaf847bb8284$var$INTERVALS[$22a5eaf847bb8284$var$UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return $22a5eaf847bb8284$var$UNITS[i];
    }
    return $22a5eaf847bb8284$var$UNITS[ilen - 1];
}
function $22a5eaf847bb8284$var$determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = $22a5eaf847bb8284$var$UNITS.length - 1; i >= $22a5eaf847bb8284$var$UNITS.indexOf(minUnit); i--){
        const unit = $22a5eaf847bb8284$var$UNITS[i];
        if ($22a5eaf847bb8284$var$INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
    }
    return $22a5eaf847bb8284$var$UNITS[minUnit ? $22a5eaf847bb8284$var$UNITS.indexOf(minUnit) : 0];
}
function $22a5eaf847bb8284$var$determineMajorUnit(unit) {
    for(let i = $22a5eaf847bb8284$var$UNITS.indexOf(unit) + 1, ilen = $22a5eaf847bb8284$var$UNITS.length; i < ilen; ++i){
        if ($22a5eaf847bb8284$var$INTERVALS[$22a5eaf847bb8284$var$UNITS[i]].common) return $22a5eaf847bb8284$var$UNITS[i];
    }
}
function $22a5eaf847bb8284$var$addTick(ticks, time, timestamps) {
    if (!timestamps) ticks[time] = true;
    else if (timestamps.length) {
        const { lo: lo , hi: hi  } = (0, $43add8e050c146e1$export$91477dc880baac21)(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
function $22a5eaf847bb8284$var$setMajorTicks(scale, ticks, map1, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index84;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index84 = map1[major];
        if (index84 >= 0) ticks[index84].major = true;
    }
    return ticks;
}
function $22a5eaf847bb8284$var$ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map2 = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map2[value] = i;
        ticks.push({
            value: value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : $22a5eaf847bb8284$var$setMajorTicks(scale, ticks, map2, majorUnit);
}
class $22a5eaf847bb8284$export$a894c72689ff3ec extends $22a5eaf847bb8284$export$d60cfc58d3c358b6 {
    constructor(props){
        super(props);
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
        this._unit = "day";
        this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts) {
        const time = scaleOpts.time || (scaleOpts.time = {});
        const adapter = this._adapter = new $22a5eaf847bb8284$export$f32766ea09ec8bc4._date(scaleOpts.adapters.date);
        (0, $43add8e050c146e1$export$7910e0436ed8d1de)(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
    parse(raw, index) {
        if (raw === undefined) return null;
        return $22a5eaf847bb8284$var$parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || "day";
        let { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
            if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== "ticks" || options.ticks.source !== "labels") _applyBounds(this.getMinMax(false));
        }
        min = (0, $43add8e050c146e1$export$39b482c5e57630a8)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = (0, $43add8e050c146e1$export$39b482c5e57630a8)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min: min,
            max: max
        };
    }
    buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === "ticks" && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = (0, $43add8e050c146e1$export$23ebac1979863676)(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? $22a5eaf847bb8284$var$determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : $22a5eaf847bb8284$var$determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? undefined : $22a5eaf847bb8284$var$determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) ticks.reverse();
        return $22a5eaf847bb8284$var$ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick)=>+tick.value));
    }
    initOffsets(timestamps) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) start = 1 - first;
            else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) end = last;
            else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(start, 0, limit);
        end = (0, $43add8e050c146e1$export$efccba1c4a2ef57b)(end, 0, limit);
        this._offsets = {
            start: start,
            end: end,
            factor: 1 / (start + 1 + end)
        };
    }
    _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || $22a5eaf847bb8284$var$determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = (0, $43add8e050c146e1$export$90a7f3efeed30595)(timeOpts.stepSize, 1);
        const weekday = minor === "week" ? timeOpts.isoWeekday : false;
        const hasWeekday = (0, $43add8e050c146e1$export$9e5f44173e64f162)(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) first = +adapter.startOf(first, "isoWeek", weekday);
        first = +adapter.startOf(first, hasWeekday ? "day" : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
        const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++)$22a5eaf847bb8284$var$addTick(ticks, time, timestamps);
        if (time === max || options.bounds === "ticks" || count === 1) $22a5eaf847bb8284$var$addTick(ticks, time, timestamps);
        return Object.keys(ticks).sort((a, b)=>a - b).map((x)=>+x);
    }
    getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    _tickFormatFunction(time, index85, ticks, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index85];
        const major = majorUnit && majorFormat && tick && tick.major;
        const label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));
        const formatter = options.ticks.callback;
        return formatter ? (0, $43add8e050c146e1$export$3722cfe417b6ed86)(formatter, [
            label,
            index85,
            ticks
        ], this) : label;
    }
    generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
    getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = (0, $43add8e050c146e1$export$625550452a3fa3ec)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
    _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, $22a5eaf847bb8284$var$ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
        for(i = 0, ilen = metas.length; i < ilen; ++i)timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i)timestamps.push($22a5eaf847bb8284$var$parse(this, labels[i]));
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
        return (0, $43add8e050c146e1$export$71511d61b312f219)(values.sort($22a5eaf847bb8284$var$sorter));
    }
}
$22a5eaf847bb8284$export$a894c72689ff3ec.id = "time";
$22a5eaf847bb8284$export$a894c72689ff3ec.defaults = {
    bounds: "data",
    adapters: {},
    time: {
        parser: false,
        unit: false,
        round: false,
        isoWeekday: false,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        major: {
            enabled: false
        }
    }
};
function $22a5eaf847bb8284$var$interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) ({ lo: lo , hi: hi  } = (0, $43add8e050c146e1$export$d141bba7fdc215a3)(table, "pos", val));
        ({ pos: prevSource , time: prevTarget  } = table[lo]);
        ({ pos: nextSource , time: nextTarget  } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) ({ lo: lo , hi: hi  } = (0, $43add8e050c146e1$export$d141bba7fdc215a3)(table, "time", val));
        ({ time: prevSource , pos: prevTarget  } = table[lo]);
        ({ time: nextSource , pos: nextTarget  } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class $22a5eaf847bb8284$export$85df64a8eb6dc986 extends $22a5eaf847bb8284$export$a894c72689ff3ec {
    constructor(props){
        super(props);
        this._table = [];
        this._minPos = undefined;
        this._tableRange = undefined;
    }
    initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = $22a5eaf847bb8284$var$interpolate(table, this.min);
        this._tableRange = $22a5eaf847bb8284$var$interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
        const { min: min , max: max  } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) items.push(curr);
        }
        if (items.length < 2) return [
            {
                time: min,
                pos: 0
            },
            {
                time: max,
                pos: 1
            }
        ];
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) table.push({
                time: curr,
                pos: i / (ilen - 1)
            });
        }
        return table;
    }
    _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) return timestamps;
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) timestamps = this.normalize(data.concat(label));
        else timestamps = data.length ? data : label;
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
    getDecimalForValue(value) {
        return ($22a5eaf847bb8284$var$interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return $22a5eaf847bb8284$var$interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}
$22a5eaf847bb8284$export$85df64a8eb6dc986.id = "timeseries";
$22a5eaf847bb8284$export$85df64a8eb6dc986.defaults = $22a5eaf847bb8284$export$a894c72689ff3ec.defaults;
var $22a5eaf847bb8284$export$bcac1c16f1530ec2 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    CategoryScale: $22a5eaf847bb8284$export$29e663ba4d09fe7,
    LinearScale: $22a5eaf847bb8284$export$e7f4e5e8656f0b93,
    LogarithmicScale: $22a5eaf847bb8284$export$85295eaf7cb3ac3e,
    RadialLinearScale: $22a5eaf847bb8284$export$cfafc36d95386d38,
    TimeScale: $22a5eaf847bb8284$export$a894c72689ff3ec,
    TimeSeriesScale: $22a5eaf847bb8284$export$85df64a8eb6dc986
});
const $22a5eaf847bb8284$export$e8959e79e3af550f = [
    $22a5eaf847bb8284$export$a6506504f799c5d5,
    $22a5eaf847bb8284$export$7a5d735b2ab6389d,
    $22a5eaf847bb8284$export$8b3ca321c77fdea6,
    $22a5eaf847bb8284$export$bcac1c16f1530ec2, 
];


var $007444a027faa41e$exports = {};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */ (function(window, document, exportName, undefined) {
    "use strict";
    var VENDOR_PREFIXES = [
        "",
        "webkit",
        "Moz",
        "MS",
        "ms",
        "o"
    ];
    var TEST_ELEMENT = document.createElement("div");
    var TYPE_FUNCTION = "function";
    var round = Math.round;
    var abs = Math.abs;
    var now = Date.now;
    /**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */ function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
    }
    /**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */ function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
            each(arg, context[fn], context);
            return true;
        }
        return false;
    }
    /**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */ function each(obj, iterator, context) {
        var i;
        if (!obj) return;
        if (obj.forEach) obj.forEach(iterator, context);
        else if (obj.length !== undefined) {
            i = 0;
            while(i < obj.length){
                iterator.call(context, obj[i], i, obj);
                i++;
            }
        } else for(i in obj)obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
    }
    /**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */ function deprecate(method, name, message) {
        var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
        return function() {
            var e = new Error("get-stack-trace");
            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
            var log = window.console && (window.console.warn || window.console.log);
            if (log) log.call(window.console, deprecationMessage, stack);
            return method.apply(this, arguments);
        };
    }
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */ var assign;
    if (typeof Object.assign !== "function") assign = function assign(target) {
        if (target === undefined || target === null) throw new TypeError("Cannot convert undefined or null to object");
        var output = Object(target);
        for(var index = 1; index < arguments.length; index++){
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for(var nextKey in source)if (source.hasOwnProperty(nextKey)) output[nextKey] = source[nextKey];
            }
        }
        return output;
    };
    else assign = Object.assign;
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */ var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;
        while(i < keys.length){
            if (!merge || merge && dest[keys[i]] === undefined) dest[keys[i]] = src[keys[i]];
            i++;
        }
        return dest;
    }, "extend", "Use `assign`.");
    /**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */ var merge1 = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
    }, "merge", "Use `assign`.");
    /**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */ function inherit(child, base, properties) {
        var baseP = base.prototype, childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;
        if (properties) assign(childP, properties);
    }
    /**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */ function bindFn(fn, context) {
        return function boundFn() {
            return fn.apply(context, arguments);
        };
    }
    /**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */ function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) return val.apply(args ? args[0] || undefined : undefined, args);
        return val;
    }
    /**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */ function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
    }
    /**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function addEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.addEventListener(type, handler, false);
        });
    }
    /**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function removeEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.removeEventListener(type, handler, false);
        });
    }
    /**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */ function hasParent(node, parent) {
        while(node){
            if (node == parent) return true;
            node = node.parentNode;
        }
        return false;
    }
    /**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */ function inStr(str, find) {
        return str.indexOf(find) > -1;
    }
    /**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */ function splitStr(str) {
        return str.trim().split(/\s+/g);
    }
    /**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */ function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) return src.indexOf(find);
        else {
            var i = 0;
            while(i < src.length){
                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) return i;
                i++;
            }
            return -1;
        }
    }
    /**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */ function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
    }
    /**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */ function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;
        while(i < src.length){
            var val = key ? src[i][key] : src[i];
            if (inArray(values, val) < 0) results.push(src[i]);
            values[i] = val;
            i++;
        }
        if (sort) {
            if (!key) results = results.sort();
            else results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
        return results;
    }
    /**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */ function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;
        while(i < VENDOR_PREFIXES.length){
            prefix = VENDOR_PREFIXES[i];
            prop = prefix ? prefix + camelProp : property;
            if (prop in obj) return prop;
            i++;
        }
        return undefined;
    }
    /**
 * get a unique id
 * @returns {number} uniqueId
 */ var _uniqueId = 1;
    function uniqueId() {
        return _uniqueId++;
    }
    /**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */ function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window;
    }
    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    var SUPPORT_TOUCH = "ontouchstart" in window;
    var SUPPORT_POINTER_EVENTS = prefixed(window, "PointerEvent") !== undefined;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
    var INPUT_TYPE_TOUCH = "touch";
    var INPUT_TYPE_PEN = "pen";
    var INPUT_TYPE_MOUSE = "mouse";
    var INPUT_TYPE_KINECT = "kinect";
    var COMPUTE_INTERVAL = 25;
    var INPUT_START = 1;
    var INPUT_MOVE = 2;
    var INPUT_END = 4;
    var INPUT_CANCEL = 8;
    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;
    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
    var PROPS_XY = [
        "x",
        "y"
    ];
    var PROPS_CLIENT_XY = [
        "clientX",
        "clientY"
    ];
    /**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */ function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget;
        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.
        this.domHandler = function(ev) {
            if (boolOrFn(manager.options.enable, [
                manager
            ])) self.handler(ev);
        };
        this.init();
    }
    Input.prototype = {
        /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */ handler: function() {},
        /**
     * bind the events
     */ init: function() {
            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },
        /**
     * unbind the events
     */ destroy: function() {
            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
    };
    /**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */ function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;
        if (inputClass) Type = inputClass;
        else if (SUPPORT_POINTER_EVENTS) Type = PointerEventInput;
        else if (SUPPORT_ONLY_TOUCH) Type = TouchInput;
        else if (!SUPPORT_TOUCH) Type = MouseInput;
        else Type = TouchMouseInput;
        return new Type(manager, inputHandler);
    }
    /**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */ function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;
        if (isFirst) manager.session = {};
        // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'
        input.eventType = eventType;
        // compute scale, rotation etc
        computeInputData(manager, input);
        // emit secret event
        manager.emit("hammer.input", input);
        manager.recognize(input);
        manager.session.prevInput = input;
    }
    /**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */ function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length;
        // store the first input to calculate the distance and direction
        if (!session.firstInput) session.firstInput = simpleCloneInputData(input);
        // to compute scale and rotation we need to store the multiple touches
        if (pointersLength > 1 && !session.firstMultiple) session.firstMultiple = simpleCloneInputData(input);
        else if (pointersLength === 1) session.firstMultiple = false;
        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input);
        // find the correct target
        var target = manager.element;
        if (hasParent(input.srcEvent.target, target)) target = input.srcEvent.target;
        input.target = target;
    }
    function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};
        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
            prevDelta = session.prevDelta = {
                x: prevInput.deltaX || 0,
                y: prevInput.deltaY || 0
            };
            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }
        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
    }
    /**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */ function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
            var deltaX = input.deltaX - last.deltaX;
            var deltaY = input.deltaY - last.deltaY;
            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY);
            session.lastInterval = input;
        } else {
            // use latest velocity info if it doesn't overtake a minimum period
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }
        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
    }
    /**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */ function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;
        while(i < input.pointers.length){
            pointers[i] = {
                clientX: round(input.pointers[i].clientX),
                clientY: round(input.pointers[i].clientY)
            };
            i++;
        }
        return {
            timeStamp: now(),
            pointers: pointers,
            center: getCenter(pointers),
            deltaX: input.deltaX,
            deltaY: input.deltaY
        };
    }
    /**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */ function getCenter(pointers) {
        var pointersLength = pointers.length;
        // no need to loop when only one touch
        if (pointersLength === 1) return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
        var x = 0, y = 0, i = 0;
        while(i < pointersLength){
            x += pointers[i].clientX;
            y += pointers[i].clientY;
            i++;
        }
        return {
            x: round(x / pointersLength),
            y: round(y / pointersLength)
        };
    }
    /**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */ function getVelocity(deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    }
    /**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */ function getDirection(x, y) {
        if (x === y) return DIRECTION_NONE;
        if (abs(x) >= abs(y)) return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }
    /**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */ function getDistance(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
    }
    /**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */ function getAngle(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
    }
    /**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */ function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }
    /**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */ function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }
    var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
    };
    var MOUSE_ELEMENT_EVENTS = "mousedown";
    var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
    /**
 * Mouse events input
 * @constructor
 * @extends Input
 */ function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state
        Input.apply(this, arguments);
    }
    inherit(MouseInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function MEhandler(ev) {
            var eventType = MOUSE_INPUT_MAP[ev.type];
            // on start we want to have the left mouse button down
            if (eventType & INPUT_START && ev.button === 0) this.pressed = true;
            if (eventType & INPUT_MOVE && ev.which !== 1) eventType = INPUT_END;
            // mouse must be down
            if (!this.pressed) return;
            if (eventType & INPUT_END) this.pressed = false;
            this.callback(this.manager, eventType, {
                pointers: [
                    ev
                ],
                changedPointers: [
                    ev
                ],
                pointerType: INPUT_TYPE_MOUSE,
                srcEvent: ev
            });
        }
    });
    var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
    };
    // in IE10 the pointer types is defined as an enum
    var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
    };
    var POINTER_ELEMENT_EVENTS = "pointerdown";
    var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
    // IE10 has prefixed support, and case-sensitive
    if (window.MSPointerEvent && !window.PointerEvent) {
        POINTER_ELEMENT_EVENTS = "MSPointerDown";
        POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
    }
    /**
 * Pointer events input
 * @constructor
 * @extends Input
 */ function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
    }
    inherit(PointerEventInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function PEhandler(ev) {
            var store = this.store;
            var removePointer = false;
            var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
            var isTouch = pointerType == INPUT_TYPE_TOUCH;
            // get index of the event in the store
            var storeIndex = inArray(store, ev.pointerId, "pointerId");
            // start and mouse must be down
            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
                if (storeIndex < 0) {
                    store.push(ev);
                    storeIndex = store.length - 1;
                }
            } else if (eventType & (INPUT_END | INPUT_CANCEL)) removePointer = true;
            // it not found, so the pointer hasn't been down (so it's probably a hover)
            if (storeIndex < 0) return;
            // update the event in the store
            store[storeIndex] = ev;
            this.callback(this.manager, eventType, {
                pointers: store,
                changedPointers: [
                    ev
                ],
                pointerType: pointerType,
                srcEvent: ev
            });
            if (removePointer) // remove from the store
            store.splice(storeIndex, 1);
        }
    });
    var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
    var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Touch events input
 * @constructor
 * @extends Input
 */ function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
    }
    inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
            // should we handle the touch events?
            if (type === INPUT_START) this.started = true;
            if (!this.started) return;
            var touches = normalizeSingleTouches.call(this, ev, type);
            // when done, reset the started state
            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) this.started = false;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);
        if (type & (INPUT_END | INPUT_CANCEL)) all = uniqueArray(all.concat(changed), "identifier", true);
        return [
            all,
            changed
        ];
    }
    var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */ function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
    }
    inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
            var type = TOUCH_INPUT_MAP[ev.type];
            var touches = getTouches.call(this, ev, type);
            if (!touches) return;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds;
        // when there is only one touch, the process can be simplified
        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            return [
                allTouches,
                allTouches
            ];
        }
        var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
        // get target touches from touches
        targetTouches = allTouches.filter(function(touch) {
            return hasParent(touch.target, target);
        });
        // collect touches
        if (type === INPUT_START) {
            i = 0;
            while(i < targetTouches.length){
                targetIds[targetTouches[i].identifier] = true;
                i++;
            }
        }
        // filter changed touches to only contain touches that exist in the collected target ids
        i = 0;
        while(i < changedTouches.length){
            if (targetIds[changedTouches[i].identifier]) changedTargetTouches.push(changedTouches[i]);
            // cleanup removed touches
            if (type & (INPUT_END | INPUT_CANCEL)) delete targetIds[changedTouches[i].identifier];
            i++;
        }
        if (!changedTargetTouches.length) return;
        return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
            changedTargetTouches
        ];
    }
    /**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */ var DEDUP_TIMEOUT = 2500;
    var DEDUP_DISTANCE = 25;
    function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
    }
    inherit(TouchMouseInput, Input, {
        /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */ handler: function TMEhandler(manager, inputEvent, inputData) {
            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH, isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) return;
            // when we're in a touch event, record touches to  de-dupe synthetic mouse event
            if (isTouch) recordTouches.call(this, inputEvent, inputData);
            else if (isMouse && isSyntheticEvent.call(this, inputData)) return;
            this.callback(manager, inputEvent, inputData);
        },
        /**
     * remove the event listeners
     */ destroy: function destroy() {
            this.touch.destroy();
            this.mouse.destroy();
        }
    });
    function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
            this.primaryTouch = eventData.changedPointers[0].identifier;
            setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) setLastTouch.call(this, eventData);
    }
    function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];
        if (touch.identifier === this.primaryTouch) {
            var lastTouch = {
                x: touch.clientX,
                y: touch.clientY
            };
            this.lastTouches.push(lastTouch);
            var lts = this.lastTouches;
            var removeLastTouch = function() {
                var i = lts.indexOf(lastTouch);
                if (i > -1) lts.splice(i, 1);
            };
            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
    }
    function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
        for(var i = 0; i < this.lastTouches.length; i++){
            var t = this.lastTouches[i];
            var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) return true;
        }
        return false;
    }
    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
    // magical touchAction value
    var TOUCH_ACTION_COMPUTE = "compute";
    var TOUCH_ACTION_AUTO = "auto";
    var TOUCH_ACTION_MANIPULATION = "manipulation"; // not implemented
    var TOUCH_ACTION_NONE = "none";
    var TOUCH_ACTION_PAN_X = "pan-x";
    var TOUCH_ACTION_PAN_Y = "pan-y";
    var TOUCH_ACTION_MAP = getTouchActionProps();
    /**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */ function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
    }
    TouchAction.prototype = {
        /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */ set: function(value) {
            // find out the touch-action by the event handlers
            if (value == TOUCH_ACTION_COMPUTE) value = this.compute();
            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
            this.actions = value.toLowerCase().trim();
        },
        /**
     * just re-set the touchAction value
     */ update: function() {
            this.set(this.manager.options.touchAction);
        },
        /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */ compute: function() {
            var actions = [];
            each(this.manager.recognizers, function(recognizer) {
                if (boolOrFn(recognizer.options.enable, [
                    recognizer
                ])) actions = actions.concat(recognizer.getTouchAction());
            });
            return cleanTouchActions(actions.join(" "));
        },
        /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */ preventDefaults: function(input) {
            var srcEvent = input.srcEvent;
            var direction = input.offsetDirection;
            // if the touch action did prevented once this session
            if (this.manager.session.prevented) {
                srcEvent.preventDefault();
                return;
            }
            var actions = this.actions;
            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
            if (hasNone) {
                //do not prevent defaults if this is a tap gesture
                var isTapPointer = input.pointers.length === 1;
                var isTapMovement = input.distance < 2;
                var isTapTouchTime = input.deltaTime < 250;
                if (isTapPointer && isTapMovement && isTapTouchTime) return;
            }
            if (hasPanX && hasPanY) // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) return this.preventSrc(srcEvent);
        },
        /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */ preventSrc: function(srcEvent) {
            this.manager.session.prevented = true;
            srcEvent.preventDefault();
        }
    };
    /**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */ function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) return TOUCH_ACTION_NONE;
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning
        if (hasPanX && hasPanY) return TOUCH_ACTION_NONE;
        // pan-x OR pan-y
        if (hasPanX || hasPanY) return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        // manipulation
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) return TOUCH_ACTION_MANIPULATION;
        return TOUCH_ACTION_AUTO;
    }
    function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) return false;
        var touchMap = {};
        var cssSupports = window.CSS && window.CSS.supports;
        [
            "auto",
            "manipulation",
            "pan-y",
            "pan-x",
            "pan-x pan-y",
            "none"
        ].forEach(function(val) {
            // If css.supports is not supported but there is native touch-action assume it supports
            // all values. This is the case for IE 10 and 11.
            touchMap[val] = cssSupports ? window.CSS.supports("touch-action", val) : true;
        });
        return touchMap;
    }
    /**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */ var STATE_POSSIBLE = 1;
    var STATE_BEGAN = 2;
    var STATE_CHANGED = 4;
    var STATE_ENDED = 8;
    var STATE_RECOGNIZED = STATE_ENDED;
    var STATE_CANCELLED = 16;
    var STATE_FAILED = 32;
    /**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */ function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null;
        // default is enable true
        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
    }
    Recognizer.prototype = {
        /**
     * @virtual
     * @type {Object}
     */ defaults: {},
        /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */ set: function(options) {
            assign(this.options, options);
            // also update the touchAction, in case something changed about the directions/enabled state
            this.manager && this.manager.touchAction.update();
            return this;
        },
        /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ recognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) return this;
            var simultaneous = this.simultaneous;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (!simultaneous[otherRecognizer.id]) {
                simultaneous[otherRecognizer.id] = otherRecognizer;
                otherRecognizer.recognizeWith(this);
            }
            return this;
        },
        /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRecognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            delete this.simultaneous[otherRecognizer.id];
            return this;
        },
        /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ requireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "requireFailure", this)) return this;
            var requireFail = this.requireFail;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (inArray(requireFail, otherRecognizer) === -1) {
                requireFail.push(otherRecognizer);
                otherRecognizer.requireFailure(this);
            }
            return this;
        },
        /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRequireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            var index = inArray(this.requireFail, otherRecognizer);
            if (index > -1) this.requireFail.splice(index, 1);
            return this;
        },
        /**
     * has require failures boolean
     * @returns {boolean}
     */ hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */ canRecognizeWith: function(otherRecognizer) {
            return !!this.simultaneous[otherRecognizer.id];
        },
        /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */ emit: function(input) {
            var self = this;
            var state = this.state;
            function emit(event) {
                self.manager.emit(event, input);
            }
            // 'panstart' and 'panmove'
            if (state < STATE_ENDED) emit(self.options.event + stateStr(state));
            emit(self.options.event); // simple 'eventName' events
            if (input.additionalEvent) emit(input.additionalEvent);
            // panend and pancancel
            if (state >= STATE_ENDED) emit(self.options.event + stateStr(state));
        },
        /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */ tryEmit: function(input) {
            if (this.canEmit()) return this.emit(input);
            // it's failing anyway
            this.state = STATE_FAILED;
        },
        /**
     * can we emit?
     * @returns {boolean}
     */ canEmit: function() {
            var i = 0;
            while(i < this.requireFail.length){
                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) return false;
                i++;
            }
            return true;
        },
        /**
     * update the recognizer
     * @param {Object} inputData
     */ recognize: function(inputData) {
            // make a new copy of the inputData
            // so we can change the inputData without messing up the other recognizers
            var inputDataClone = assign({}, inputData);
            // is is enabled and allow recognizing?
            if (!boolOrFn(this.options.enable, [
                this,
                inputDataClone
            ])) {
                this.reset();
                this.state = STATE_FAILED;
                return;
            }
            // reset when we've reached the end
            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) this.state = STATE_POSSIBLE;
            this.state = this.process(inputDataClone);
            // the recognizer has recognized a gesture
            // so trigger an event
            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) this.tryEmit(inputDataClone);
        },
        /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */ process: function(inputData) {},
        /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */ getTouchAction: function() {},
        /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */ reset: function() {}
    };
    /**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */ function stateStr(state) {
        if (state & STATE_CANCELLED) return "cancel";
        else if (state & STATE_ENDED) return "end";
        else if (state & STATE_CHANGED) return "move";
        else if (state & STATE_BEGAN) return "start";
        return "";
    }
    /**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */ function directionStr(direction) {
        if (direction == DIRECTION_DOWN) return "down";
        else if (direction == DIRECTION_UP) return "up";
        else if (direction == DIRECTION_LEFT) return "left";
        else if (direction == DIRECTION_RIGHT) return "right";
        return "";
    }
    /**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */ function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;
        if (manager) return manager.get(otherRecognizer);
        return otherRecognizer;
    }
    /**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */ function AttrRecognizer() {
        Recognizer.apply(this, arguments);
    }
    inherit(AttrRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof AttrRecognizer
     */ defaults: {
            /**
         * @type {Number}
         * @default 1
         */ pointers: 1
        },
        /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */ attrTest: function(input) {
            var optionPointers = this.options.pointers;
            return optionPointers === 0 || input.pointers.length === optionPointers;
        },
        /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */ process: function(input) {
            var state = this.state;
            var eventType = input.eventType;
            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
            var isValid = this.attrTest(input);
            // on cancel input and we've recognized before, return STATE_CANCELLED
            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) return state | STATE_CANCELLED;
            else if (isRecognized || isValid) {
                if (eventType & INPUT_END) return state | STATE_ENDED;
                else if (!(state & STATE_BEGAN)) return STATE_BEGAN;
                return state | STATE_CHANGED;
            }
            return STATE_FAILED;
        }
    });
    /**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
    }
    inherit(PanRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PanRecognizer
     */ defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: DIRECTION_ALL
        },
        getTouchAction: function() {
            var direction = this.options.direction;
            var actions = [];
            if (direction & DIRECTION_HORIZONTAL) actions.push(TOUCH_ACTION_PAN_Y);
            if (direction & DIRECTION_VERTICAL) actions.push(TOUCH_ACTION_PAN_X);
            return actions;
        },
        directionTest: function(input) {
            var options = this.options;
            var hasMoved = true;
            var distance = input.distance;
            var direction = input.direction;
            var x = input.deltaX;
            var y = input.deltaY;
            // lock to axis?
            if (!(direction & options.direction)) {
                if (options.direction & DIRECTION_HORIZONTAL) {
                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                    hasMoved = x != this.pX;
                    distance = Math.abs(input.deltaX);
                } else {
                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                    hasMoved = y != this.pY;
                    distance = Math.abs(input.deltaY);
                }
            }
            input.direction = direction;
            return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function(input) {
            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function(input) {
            this.pX = input.deltaX;
            this.pY = input.deltaY;
            var direction = directionStr(input.direction);
            if (direction) input.additionalEvent = this.options.event + direction;
            this._super.emit.call(this, input);
        }
    });
    /**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */ function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(PinchRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function(input) {
            if (input.scale !== 1) {
                var inOut = input.scale < 1 ? "in" : "out";
                input.additionalEvent = this.options.event + inOut;
            }
            this._super.emit.call(this, input);
        }
    });
    /**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */ function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
    }
    inherit(PressRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PressRecognizer
     */ defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9 // a minimal movement is ok, but keep it low
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_AUTO
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTime = input.deltaTime > options.time;
            this._input = input;
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) this.reset();
            else if (input.eventType & INPUT_START) {
                this.reset();
                this._timer = setTimeoutContext(function() {
                    this.state = STATE_RECOGNIZED;
                    this.tryEmit();
                }, options.time, this);
            } else if (input.eventType & INPUT_END) return STATE_RECOGNIZED;
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(input) {
            if (this.state !== STATE_RECOGNIZED) return;
            if (input && input.eventType & INPUT_END) this.manager.emit(this.options.event + "up", input);
            else {
                this._input.timeStamp = now();
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */ function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(RotateRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof RotateRecognizer
     */ defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
    });
    /**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(SwipeRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof SwipeRecognizer
     */ defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
            pointers: 1
        },
        getTouchAction: function() {
            return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function(input) {
            var direction = this.options.direction;
            var velocity;
            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) velocity = input.overallVelocity;
            else if (direction & DIRECTION_HORIZONTAL) velocity = input.overallVelocityX;
            else if (direction & DIRECTION_VERTICAL) velocity = input.overallVelocityY;
            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function(input) {
            var direction = directionStr(input.offsetDirection);
            if (direction) this.manager.emit(this.options.event + direction, input);
            this.manager.emit(this.options.event, input);
        }
    });
    /**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */ function TapRecognizer() {
        Recognizer.apply(this, arguments);
        // previous time and center,
        // used for tap counting
        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
    }
    inherit(TapRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10 // a multi-tap can be a bit off the initial position
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_MANIPULATION
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTouchTime = input.deltaTime < options.time;
            this.reset();
            if (input.eventType & INPUT_START && this.count === 0) return this.failTimeout();
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (validMovement && validTouchTime && validPointers) {
                if (input.eventType != INPUT_END) return this.failTimeout();
                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
                this.pTime = input.timeStamp;
                this.pCenter = input.center;
                if (!validMultiTap || !validInterval) this.count = 1;
                else this.count += 1;
                this._input = input;
                // if tap count matches we have recognized it,
                // else it has began recognizing...
                var tapCount = this.count % options.taps;
                if (tapCount === 0) {
                    // no failing requirements, immediately trigger the tap event
                    // or wait as long as the multitap interval to trigger
                    if (!this.hasRequireFailures()) return STATE_RECOGNIZED;
                    else {
                        this._timer = setTimeoutContext(function() {
                            this.state = STATE_RECOGNIZED;
                            this.tryEmit();
                        }, options.interval, this);
                        return STATE_BEGAN;
                    }
                }
            }
            return STATE_FAILED;
        },
        failTimeout: function() {
            this._timer = setTimeoutContext(function() {
                this.state = STATE_FAILED;
            }, this.options.interval, this);
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            if (this.state == STATE_RECOGNIZED) {
                this._input.tapCount = this.count;
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
    }
    /**
 * @const {string}
 */ Hammer.VERSION = "2.0.7";
    /**
 * default settings
 * @namespace
 */ Hammer.defaults = {
        /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */ domEvents: false,
        /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */ touchAction: TOUCH_ACTION_COMPUTE,
        /**
     * @type {Boolean}
     * @default true
     */ enable: true,
        /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */ inputTarget: null,
        /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */ inputClass: null,
        /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */ preset: [
            // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
            [
                RotateRecognizer,
                {
                    enable: false
                }
            ],
            [
                PinchRecognizer,
                {
                    enable: false
                },
                [
                    "rotate"
                ]
            ],
            [
                SwipeRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                }
            ],
            [
                PanRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                },
                [
                    "swipe"
                ]
            ],
            [
                TapRecognizer
            ],
            [
                TapRecognizer,
                {
                    event: "doubletap",
                    taps: 2
                },
                [
                    "tap"
                ]
            ],
            [
                PressRecognizer
            ]
        ],
        /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */ cssProps: {
            /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userSelect: "none",
            /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */ touchSelect: "none",
            /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */ touchCallout: "none",
            /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */ contentZooming: "none",
            /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userDrag: "none",
            /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */ tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var STOP = 1;
    var FORCED_STOP = 2;
    /**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function(item) {
            var recognizer = this.add(new item[0](item[1]));
            item[2] && recognizer.recognizeWith(item[2]);
            item[3] && recognizer.requireFailure(item[3]);
        }, this);
    }
    Manager.prototype = {
        /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */ set: function(options) {
            assign(this.options, options);
            // Options that need a little more setup
            if (options.touchAction) this.touchAction.update();
            if (options.inputTarget) {
                // Clean up existing event listeners and reinitialize
                this.input.destroy();
                this.input.target = options.inputTarget;
                this.input.init();
            }
            return this;
        },
        /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */ stop: function(force) {
            this.session.stopped = force ? FORCED_STOP : STOP;
        },
        /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */ recognize: function(inputData) {
            var session = this.session;
            if (session.stopped) return;
            // run the touch-action polyfill
            this.touchAction.preventDefaults(inputData);
            var recognizer;
            var recognizers = this.recognizers;
            // this holds the recognizer that is being recognized.
            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
            // if no recognizer is detecting a thing, it is set to `null`
            var curRecognizer = session.curRecognizer;
            // reset when the last recognizer is recognized
            // or when we're in a new session
            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) curRecognizer = session.curRecognizer = null;
            var i = 0;
            while(i < recognizers.length){
                recognizer = recognizers[i];
                // find out if we are allowed try to recognize the input for this one.
                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
                //      that is being recognized.
                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
                //      this can be setup with the `recognizeWith()` method on the recognizer.
                if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || recognizer.canRecognizeWith(curRecognizer))) recognizer.recognize(inputData);
                else recognizer.reset();
                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
                // current active recognizer. but only if we don't already have an active recognizer
                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) curRecognizer = session.curRecognizer = recognizer;
                i++;
            }
        },
        /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */ get: function(recognizer) {
            if (recognizer instanceof Recognizer) return recognizer;
            var recognizers = this.recognizers;
            for(var i = 0; i < recognizers.length; i++){
                if (recognizers[i].options.event == recognizer) return recognizers[i];
            }
            return null;
        },
        /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */ add: function(recognizer) {
            if (invokeArrayArg(recognizer, "add", this)) return this;
            // remove existing
            var existing = this.get(recognizer.options.event);
            if (existing) this.remove(existing);
            this.recognizers.push(recognizer);
            recognizer.manager = this;
            this.touchAction.update();
            return recognizer;
        },
        /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */ remove: function(recognizer) {
            if (invokeArrayArg(recognizer, "remove", this)) return this;
            recognizer = this.get(recognizer);
            // let's make sure this recognizer exists
            if (recognizer) {
                var recognizers = this.recognizers;
                var index = inArray(recognizers, recognizer);
                if (index !== -1) {
                    recognizers.splice(index, 1);
                    this.touchAction.update();
                }
            }
            return this;
        },
        /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */ on: function(events, handler) {
            if (events === undefined) return;
            if (handler === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                handlers[event] = handlers[event] || [];
                handlers[event].push(handler);
            });
            return this;
        },
        /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */ off: function(events, handler) {
            if (events === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                if (!handler) delete handlers[event];
                else handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            });
            return this;
        },
        /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */ emit: function(event, data) {
            // we also want to trigger dom events
            if (this.options.domEvents) triggerDomEvent(event, data);
            // no handlers, so skip it all
            var handlers = this.handlers[event] && this.handlers[event].slice();
            if (!handlers || !handlers.length) return;
            data.type = event;
            data.preventDefault = function() {
                data.srcEvent.preventDefault();
            };
            var i = 0;
            while(i < handlers.length){
                handlers[i](data);
                i++;
            }
        },
        /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */ destroy: function() {
            this.element && toggleCssProps(this, false);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null;
        }
    };
    /**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */ function toggleCssProps(manager, add) {
        var element = manager.element;
        if (!element.style) return;
        var prop;
        each(manager.options.cssProps, function(value, name) {
            prop = prefixed(element.style, name);
            if (add) {
                manager.oldCssProps[prop] = element.style[prop];
                element.style[prop] = value;
            } else element.style[prop] = manager.oldCssProps[prop] || "";
        });
        if (!add) manager.oldCssProps = {};
    }
    /**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */ function triggerDomEvent(event, data) {
        var gestureEvent = document.createEvent("Event");
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
    }
    assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge1,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
    });
    // this prevents errors when Hammer is loaded in the presence of an AMD
    //  style loader but by script tag, not by the loader.
    var freeGlobal = typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}; // jshint ignore:line
    freeGlobal.Hammer = Hammer;
    if (typeof define === "function" && define.amd) define(function() {
        return Hammer;
    });
    else if ($007444a027faa41e$exports) $007444a027faa41e$exports = Hammer;
    else window[exportName] = Hammer;
})(window, document, "Hammer");







const $e128d83b56e0d473$var$getModifierKey = (opts)=>opts && opts.enabled && opts.modifierKey;
const $e128d83b56e0d473$var$keyPressed = (key, event)=>key && event[key + "Key"];
const $e128d83b56e0d473$var$keyNotPressed = (key, event)=>key && !event[key + "Key"];
/**
 * @param {string|function} mode can be 'x', 'y' or 'xy'
 * @param {string} dir can be 'x' or 'y'
 * @param {import('chart.js').Chart} chart instance of the chart in question
 * @returns {boolean}
 */ function $e128d83b56e0d473$var$directionEnabled(mode, dir, chart) {
    if (mode === undefined) return true;
    else if (typeof mode === "string") return mode.indexOf(dir) !== -1;
    else if (typeof mode === "function") return mode({
        chart: chart
    }).indexOf(dir) !== -1;
    return false;
}
/**
 * Debounces calling `fn` for `delay` ms
 * @param {function} fn - Function to call. No arguments are passed.
 * @param {number} delay - Delay in ms. 0 = immediate invocation.
 * @returns {function}
 */ function $e128d83b56e0d473$var$debounce(fn, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay);
        return delay;
    };
}
/** This function use for check what axis now under mouse cursor.
 * @param {{x: number, y: number}} point - the mouse location
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 * @return {import('chart.js').Scale}
 */ function $e128d83b56e0d473$var$getScaleUnderPoint({ x: x , y: y  }, chart) {
    const scales = chart.scales;
    const scaleIds = Object.keys(scales);
    for(let i = 0; i < scaleIds.length; i++){
        const scale = scales[scaleIds[i]];
        if (y >= scale.top && y <= scale.bottom && x >= scale.left && x <= scale.right) return scale;
    }
    return null;
}
/** This function return only one scale whose position is under mouse cursor and which direction is enabled.
 * If under mouse hasn't scale, then return all other scales which 'mode' is diffrent with overScaleMode.
 * So 'overScaleMode' works as a limiter to scale the user-selected scale (in 'mode') only when the cursor is under the scale,
 * and other directions in 'mode' works as before.
 * Example: mode = 'xy', overScaleMode = 'y' -> it's means 'x' - works as before, and 'y' only works for one scale when cursor is under it.
 * options.overScaleMode can be a function if user want zoom only one scale of many for example.
 * @param {string} mode - 'xy', 'x' or 'y'
 * @param {{x: number, y: number}} point - the mouse location
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 * @return {import('chart.js').Scale[]}
 */ function $e128d83b56e0d473$var$getEnabledScalesByPoint(mode, point, chart) {
    const scale = $e128d83b56e0d473$var$getScaleUnderPoint(point, chart);
    if (scale && $e128d83b56e0d473$var$directionEnabled(mode, scale.axis, chart)) return [
        scale
    ];
    const enabledScales = [];
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(chart.scales, function(scaleItem) {
        if (!$e128d83b56e0d473$var$directionEnabled(mode, scaleItem.axis, chart)) enabledScales.push(scaleItem);
    });
    return enabledScales;
}
const $e128d83b56e0d473$var$chartStates = new WeakMap();
function $e128d83b56e0d473$var$getState(chart) {
    let state = $e128d83b56e0d473$var$chartStates.get(chart);
    if (!state) {
        state = {
            originalScaleLimits: {},
            updatedScaleLimits: {},
            handlers: {},
            panDelta: {}
        };
        $e128d83b56e0d473$var$chartStates.set(chart, state);
    }
    return state;
}
function $e128d83b56e0d473$var$removeState(chart) {
    $e128d83b56e0d473$var$chartStates.delete(chart);
}
function $e128d83b56e0d473$var$zoomDelta(scale, zoom1, center) {
    const range = scale.max - scale.min;
    const newRange = range * (zoom1 - 1);
    const centerPoint = scale.isHorizontal() ? center.x : center.y;
    // `scale.getValueForPixel()` can return a value less than the `scale.min` or
    // greater than `scale.max` when `centerPoint` is outside chartArea.
    const minPercent = Math.max(0, Math.min(1, (scale.getValueForPixel(centerPoint) - scale.min) / range || 0));
    const maxPercent = 1 - minPercent;
    return {
        min: newRange * minPercent,
        max: newRange * maxPercent
    };
}
function $e128d83b56e0d473$var$getLimit(state, scale, scaleLimits, prop, fallback) {
    let limit = scaleLimits[prop];
    if (limit === "original") {
        const original = state.originalScaleLimits[scale.id][prop];
        limit = (0, $43add8e050c146e1$export$90a7f3efeed30595)(original.options, original.scale);
    }
    return (0, $43add8e050c146e1$export$90a7f3efeed30595)(limit, fallback);
}
function $e128d83b56e0d473$var$updateRange(scale, { min: min , max: max  }, limits, zoom2 = false) {
    const state = $e128d83b56e0d473$var$getState(scale.chart);
    const { id: id , axis: axis , options: scaleOpts  } = scale;
    const scaleLimits = limits && (limits[id] || limits[axis]) || {};
    const { minRange: minRange = 0  } = scaleLimits;
    const minLimit = $e128d83b56e0d473$var$getLimit(state, scale, scaleLimits, "min", -Infinity);
    const maxLimit = $e128d83b56e0d473$var$getLimit(state, scale, scaleLimits, "max", Infinity);
    const cmin = Math.max(min, minLimit);
    const cmax = Math.min(max, maxLimit);
    const range = zoom2 ? Math.max(cmax - cmin, minRange) : scale.max - scale.min;
    if (cmax - cmin !== range) {
        if (minLimit > cmax - range) {
            min = cmin;
            max = cmin + range;
        } else if (maxLimit < cmin + range) {
            max = cmax;
            min = cmax - range;
        } else {
            const offset = (range - cmax + cmin) / 2;
            min = cmin - offset;
            max = cmax + offset;
        }
    } else {
        min = cmin;
        max = cmax;
    }
    scaleOpts.min = min;
    scaleOpts.max = max;
    state.updatedScaleLimits[scale.id] = {
        min: min,
        max: max
    };
    // return true if the scale range is changed
    return scale.parse(min) !== scale.min || scale.parse(max) !== scale.max;
}
function $e128d83b56e0d473$var$zoomNumericalScale(scale, zoom3, center, limits) {
    const delta = $e128d83b56e0d473$var$zoomDelta(scale, zoom3, center);
    const newRange = {
        min: scale.min + delta.min,
        max: scale.max - delta.max
    };
    return $e128d83b56e0d473$var$updateRange(scale, newRange, limits, true);
}
const $e128d83b56e0d473$var$integerChange = (v)=>v === 0 || isNaN(v) ? 0 : v < 0 ? Math.min(Math.round(v), -1) : Math.max(Math.round(v), 1);
function $e128d83b56e0d473$var$existCategoryFromMaxZoom(scale) {
    const labels = scale.getLabels();
    const maxIndex = labels.length - 1;
    if (scale.min > 0) scale.min -= 1;
    if (scale.max < maxIndex) scale.max += 1;
}
function $e128d83b56e0d473$var$zoomCategoryScale(scale, zoom4, center, limits) {
    const delta = $e128d83b56e0d473$var$zoomDelta(scale, zoom4, center);
    if (scale.min === scale.max && zoom4 < 1) $e128d83b56e0d473$var$existCategoryFromMaxZoom(scale);
    const newRange = {
        min: scale.min + $e128d83b56e0d473$var$integerChange(delta.min),
        max: scale.max - $e128d83b56e0d473$var$integerChange(delta.max)
    };
    return $e128d83b56e0d473$var$updateRange(scale, newRange, limits, true);
}
function $e128d83b56e0d473$var$scaleLength(scale) {
    return scale.isHorizontal() ? scale.width : scale.height;
}
function $e128d83b56e0d473$var$panCategoryScale(scale, delta, limits) {
    const labels = scale.getLabels();
    const lastLabelIndex = labels.length - 1;
    let { min: min , max: max  } = scale;
    // The visible range. Ticks can be skipped, and thus not reliable.
    const range = Math.max(max - min, 1);
    // How many pixels of delta is required before making a step. stepSize, but limited to max 1/10 of the scale length.
    const stepDelta = Math.round($e128d83b56e0d473$var$scaleLength(scale) / Math.max(range, 10));
    const stepSize = Math.round(Math.abs(delta / stepDelta));
    let applied;
    if (delta < -stepDelta) {
        max = Math.min(max + stepSize, lastLabelIndex);
        min = range === 1 ? max : max - range;
        applied = max === lastLabelIndex;
    } else if (delta > stepDelta) {
        min = Math.max(0, min - stepSize);
        max = range === 1 ? min : min + range;
        applied = min === 0;
    }
    return $e128d83b56e0d473$var$updateRange(scale, {
        min: min,
        max: max
    }, limits) || applied;
}
const $e128d83b56e0d473$var$OFFSETS = {
    second: 500,
    minute: 30000,
    hour: 1800000,
    day: 43200000,
    week: 302400000,
    month: 1296000000,
    quarter: 5184000000,
    year: 15724800000 // 182 d
};
function $e128d83b56e0d473$var$panNumericalScale(scale, delta, limits, canZoom = false) {
    const { min: prevStart , max: prevEnd , options: options  } = scale;
    const round = options.time && options.time.round;
    const offset = $e128d83b56e0d473$var$OFFSETS[round] || 0;
    const newMin = scale.getValueForPixel(scale.getPixelForValue(prevStart + offset) - delta);
    const newMax = scale.getValueForPixel(scale.getPixelForValue(prevEnd + offset) - delta);
    const { min: minLimit = -Infinity , max: maxLimit = Infinity  } = canZoom && limits && limits[scale.axis] || {};
    if (isNaN(newMin) || isNaN(newMax) || newMin < minLimit || newMax > maxLimit) // At limit: No change but return true to indicate no need to store the delta.
    // NaN can happen for 0-dimension scales (either because they were configured
    // with min === max or because the chart has 0 plottable area).
    return true;
    return $e128d83b56e0d473$var$updateRange(scale, {
        min: newMin,
        max: newMax
    }, limits, canZoom);
}
function $e128d83b56e0d473$var$panNonLinearScale(scale, delta, limits) {
    return $e128d83b56e0d473$var$panNumericalScale(scale, delta, limits, true);
}
const $e128d83b56e0d473$var$zoomFunctions = {
    category: $e128d83b56e0d473$var$zoomCategoryScale,
    default: $e128d83b56e0d473$var$zoomNumericalScale
};
const $e128d83b56e0d473$var$panFunctions = {
    category: $e128d83b56e0d473$var$panCategoryScale,
    default: $e128d83b56e0d473$var$panNumericalScale,
    logarithmic: $e128d83b56e0d473$var$panNonLinearScale,
    timeseries: $e128d83b56e0d473$var$panNonLinearScale
};
function $e128d83b56e0d473$var$shouldUpdateScaleLimits(scale, originalScaleLimits, updatedScaleLimits) {
    const { id: id , options: { min: min , max: max  }  } = scale;
    if (!originalScaleLimits[id] || !updatedScaleLimits[id]) return true;
    const previous = updatedScaleLimits[id];
    return previous.min !== min || previous.max !== max;
}
function $e128d83b56e0d473$var$removeMissingScales(limits, scales) {
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(limits, (opt, key)=>{
        if (!scales[key]) delete limits[key];
    });
}
function $e128d83b56e0d473$var$storeOriginalScaleLimits(chart, state) {
    const { scales: scales  } = chart;
    const { originalScaleLimits: originalScaleLimits , updatedScaleLimits: updatedScaleLimits  } = state;
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(scales, function(scale) {
        if ($e128d83b56e0d473$var$shouldUpdateScaleLimits(scale, originalScaleLimits, updatedScaleLimits)) originalScaleLimits[scale.id] = {
            min: {
                scale: scale.min,
                options: scale.options.min
            },
            max: {
                scale: scale.max,
                options: scale.options.max
            }
        };
    });
    $e128d83b56e0d473$var$removeMissingScales(originalScaleLimits, scales);
    $e128d83b56e0d473$var$removeMissingScales(updatedScaleLimits, scales);
    return originalScaleLimits;
}
function $e128d83b56e0d473$var$doZoom(scale, amount, center, limits) {
    const fn = $e128d83b56e0d473$var$zoomFunctions[scale.type] || $e128d83b56e0d473$var$zoomFunctions.default;
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(fn, [
        scale,
        amount,
        center,
        limits
    ]);
}
function $e128d83b56e0d473$var$getCenter(chart) {
    const ca = chart.chartArea;
    return {
        x: (ca.left + ca.right) / 2,
        y: (ca.top + ca.bottom) / 2
    };
}
/**
 * @param chart The chart instance
 * @param {number | {x?: number, y?: number, focalPoint?: {x: number, y: number}}} amount The zoom percentage or percentages and focal point
 * @param {string} [transition] Which transition mode to use. Defaults to 'none'
 */ function $e128d83b56e0d473$export$e83f174dbf56adcc(chart, amount, transition = "none") {
    const { x: x = 1 , y: y = 1 , focalPoint: focalPoint = $e128d83b56e0d473$var$getCenter(chart)  } = typeof amount === "number" ? {
        x: amount,
        y: amount
    } : amount;
    const state = $e128d83b56e0d473$var$getState(chart);
    const { options: { limits: limits , zoom: zoomOptions  }  } = state;
    const { mode: mode = "xy" , overScaleMode: overScaleMode  } = zoomOptions || {};
    $e128d83b56e0d473$var$storeOriginalScaleLimits(chart, state);
    const xEnabled = x !== 1 && $e128d83b56e0d473$var$directionEnabled(mode, "x", chart);
    const yEnabled = y !== 1 && $e128d83b56e0d473$var$directionEnabled(mode, "y", chart);
    const enabledScales = overScaleMode && $e128d83b56e0d473$var$getEnabledScalesByPoint(overScaleMode, focalPoint, chart);
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(enabledScales || chart.scales, function(scale) {
        if (scale.isHorizontal() && xEnabled) $e128d83b56e0d473$var$doZoom(scale, x, focalPoint, limits);
        else if (!scale.isHorizontal() && yEnabled) $e128d83b56e0d473$var$doZoom(scale, y, focalPoint, limits);
    });
    chart.update(transition);
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(zoomOptions.onZoom, [
        {
            chart: chart
        }
    ]);
}
function $e128d83b56e0d473$var$getRange(scale, pixel0, pixel1) {
    const v0 = scale.getValueForPixel(pixel0);
    const v1 = scale.getValueForPixel(pixel1);
    return {
        min: Math.min(v0, v1),
        max: Math.max(v0, v1)
    };
}
function $e128d83b56e0d473$var$zoomRect(chart, p0, p1, transition = "none") {
    const state = $e128d83b56e0d473$var$getState(chart);
    const { options: { limits: limits , zoom: zoomOptions  }  } = state;
    const { mode: mode = "xy"  } = zoomOptions;
    $e128d83b56e0d473$var$storeOriginalScaleLimits(chart, state);
    const xEnabled = $e128d83b56e0d473$var$directionEnabled(mode, "x", chart);
    const yEnabled = $e128d83b56e0d473$var$directionEnabled(mode, "y", chart);
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(chart.scales, function(scale) {
        if (scale.isHorizontal() && xEnabled) $e128d83b56e0d473$var$updateRange(scale, $e128d83b56e0d473$var$getRange(scale, p0.x, p1.x), limits, true);
        else if (!scale.isHorizontal() && yEnabled) $e128d83b56e0d473$var$updateRange(scale, $e128d83b56e0d473$var$getRange(scale, p0.y, p1.y), limits, true);
    });
    chart.update(transition);
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(zoomOptions.onZoom, [
        {
            chart: chart
        }
    ]);
}
function $e128d83b56e0d473$export$bd064d51d863101c(chart, scaleId, range, transition = "none") {
    $e128d83b56e0d473$var$storeOriginalScaleLimits(chart, $e128d83b56e0d473$var$getState(chart));
    const scale = chart.scales[scaleId];
    $e128d83b56e0d473$var$updateRange(scale, range, undefined, true);
    chart.update(transition);
}
function $e128d83b56e0d473$export$ac12f90bdc1d9b7(chart, transition = "default") {
    const state = $e128d83b56e0d473$var$getState(chart);
    const originalScaleLimits = $e128d83b56e0d473$var$storeOriginalScaleLimits(chart, state);
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(chart.scales, function(scale) {
        const scaleOptions = scale.options;
        if (originalScaleLimits[scale.id]) {
            scaleOptions.min = originalScaleLimits[scale.id].min.options;
            scaleOptions.max = originalScaleLimits[scale.id].max.options;
        } else {
            delete scaleOptions.min;
            delete scaleOptions.max;
        }
    });
    chart.update(transition);
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(state.options.zoom.onZoomComplete, [
        {
            chart: chart
        }
    ]);
}
function $e128d83b56e0d473$var$getOriginalRange(state, scaleId) {
    const original = state.originalScaleLimits[scaleId];
    if (!original) return;
    const { min: min , max: max  } = original;
    return (0, $43add8e050c146e1$export$90a7f3efeed30595)(max.options, max.scale) - (0, $43add8e050c146e1$export$90a7f3efeed30595)(min.options, min.scale);
}
function $e128d83b56e0d473$var$getZoomLevel(chart) {
    const state = $e128d83b56e0d473$var$getState(chart);
    let min = 1;
    let max = 1;
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(chart.scales, function(scale) {
        const origRange = $e128d83b56e0d473$var$getOriginalRange(state, scale.id);
        if (origRange) {
            const level = Math.round(origRange / (scale.max - scale.min) * 100) / 100;
            min = Math.min(min, level);
            max = Math.max(max, level);
        }
    });
    return min < 1 ? min : max;
}
function $e128d83b56e0d473$var$panScale(scale, delta, limits, state) {
    const { panDelta: panDelta  } = state;
    // Add possible cumulative delta from previous pan attempts where scale did not change
    const storedDelta = panDelta[scale.id] || 0;
    if ((0, $43add8e050c146e1$export$2408f22a0fab9ae5)(storedDelta) === (0, $43add8e050c146e1$export$2408f22a0fab9ae5)(delta)) delta += storedDelta;
    const fn = $e128d83b56e0d473$var$panFunctions[scale.type] || $e128d83b56e0d473$var$panFunctions.default;
    if ((0, $43add8e050c146e1$export$3722cfe417b6ed86)(fn, [
        scale,
        delta,
        limits
    ])) // The scale changed, reset cumulative delta
    panDelta[scale.id] = 0;
    else // The scale did not change, store cumulative delta
    panDelta[scale.id] = delta;
}
function $e128d83b56e0d473$export$4c486572e961a974(chart, delta, enabledScales, transition = "none") {
    const { x: x = 0 , y: y = 0  } = typeof delta === "number" ? {
        x: delta,
        y: delta
    } : delta;
    const state = $e128d83b56e0d473$var$getState(chart);
    const { options: { pan: panOptions , limits: limits  }  } = state;
    const { mode: mode = "xy" , onPan: onPan  } = panOptions || {};
    $e128d83b56e0d473$var$storeOriginalScaleLimits(chart, state);
    const xEnabled = x !== 0 && $e128d83b56e0d473$var$directionEnabled(mode, "x", chart);
    const yEnabled = y !== 0 && $e128d83b56e0d473$var$directionEnabled(mode, "y", chart);
    (0, $43add8e050c146e1$export$a9c23c6ac3fc3eca)(enabledScales || chart.scales, function(scale) {
        if (scale.isHorizontal() && xEnabled) $e128d83b56e0d473$var$panScale(scale, x, limits, state);
        else if (!scale.isHorizontal() && yEnabled) $e128d83b56e0d473$var$panScale(scale, y, limits, state);
    });
    chart.update(transition);
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(onPan, [
        {
            chart: chart
        }
    ]);
}
function $e128d83b56e0d473$var$getInitialScaleBounds(chart) {
    const state = $e128d83b56e0d473$var$getState(chart);
    const scaleBounds = {};
    for (const scaleId of Object.keys(chart.scales)){
        const { min: min , max: max  } = state.originalScaleLimits[scaleId] || {
            min: {},
            max: {}
        };
        scaleBounds[scaleId] = {
            min: min.scale,
            max: max.scale
        };
    }
    return scaleBounds;
}
function $e128d83b56e0d473$var$isZoomedOrPanned(chart) {
    const scaleBounds = $e128d83b56e0d473$var$getInitialScaleBounds(chart);
    for (const scaleId of Object.keys(chart.scales)){
        const { min: originalMin , max: originalMax  } = scaleBounds[scaleId];
        if (originalMin !== undefined && chart.scales[scaleId].min !== originalMin) return true;
        if (originalMax !== undefined && chart.scales[scaleId].max !== originalMax) return true;
    }
    return false;
}
function $e128d83b56e0d473$var$removeHandler(chart, type) {
    const { handlers: handlers  } = $e128d83b56e0d473$var$getState(chart);
    const handler = handlers[type];
    if (handler && handler.target) {
        handler.target.removeEventListener(type, handler);
        delete handlers[type];
    }
}
function $e128d83b56e0d473$var$addHandler(chart, target, type, handler) {
    const { handlers: handlers , options: options  } = $e128d83b56e0d473$var$getState(chart);
    const oldHandler = handlers[type];
    if (oldHandler && oldHandler.target === target) // already attached
    return;
    $e128d83b56e0d473$var$removeHandler(chart, type);
    handlers[type] = (event)=>handler(chart, event, options);
    handlers[type].target = target;
    target.addEventListener(type, handlers[type]);
}
function $e128d83b56e0d473$var$mouseMove(chart, event) {
    const state = $e128d83b56e0d473$var$getState(chart);
    if (state.dragStart) {
        state.dragging = true;
        state.dragEnd = event;
        chart.update("none");
    }
}
function $e128d83b56e0d473$var$zoomStart(chart, event, zoomOptions) {
    const { onZoomStart: onZoomStart , onZoomRejected: onZoomRejected  } = zoomOptions;
    if (onZoomStart) {
        const { left: offsetX , top: offsetY  } = event.target.getBoundingClientRect();
        const point = {
            x: event.clientX - offsetX,
            y: event.clientY - offsetY
        };
        if ((0, $43add8e050c146e1$export$3722cfe417b6ed86)(onZoomStart, [
            {
                chart: chart,
                event: event,
                point: point
            }
        ]) === false) {
            (0, $43add8e050c146e1$export$3722cfe417b6ed86)(onZoomRejected, [
                {
                    chart: chart,
                    event: event
                }
            ]);
            return false;
        }
    }
}
function $e128d83b56e0d473$var$mouseDown(chart, event) {
    const state = $e128d83b56e0d473$var$getState(chart);
    const { pan: panOptions , zoom: zoomOptions = {}  } = state.options;
    if ($e128d83b56e0d473$var$keyPressed($e128d83b56e0d473$var$getModifierKey(panOptions), event) || $e128d83b56e0d473$var$keyNotPressed($e128d83b56e0d473$var$getModifierKey(zoomOptions.drag), event)) return (0, $43add8e050c146e1$export$3722cfe417b6ed86)(zoomOptions.onZoomRejected, [
        {
            chart: chart,
            event: event
        }
    ]);
    if ($e128d83b56e0d473$var$zoomStart(chart, event, zoomOptions) === false) return;
    state.dragStart = event;
    $e128d83b56e0d473$var$addHandler(chart, chart.canvas, "mousemove", $e128d83b56e0d473$var$mouseMove);
}
function $e128d83b56e0d473$var$computeDragRect(chart, mode, beginPoint, endPoint) {
    const { left: offsetX , top: offsetY  } = beginPoint.target.getBoundingClientRect();
    const xEnabled = $e128d83b56e0d473$var$directionEnabled(mode, "x", chart);
    const yEnabled = $e128d83b56e0d473$var$directionEnabled(mode, "y", chart);
    let { top: top , left: left , right: right , bottom: bottom , width: chartWidth , height: chartHeight  } = chart.chartArea;
    if (xEnabled) {
        left = Math.min(beginPoint.clientX, endPoint.clientX) - offsetX;
        right = Math.max(beginPoint.clientX, endPoint.clientX) - offsetX;
    }
    if (yEnabled) {
        top = Math.min(beginPoint.clientY, endPoint.clientY) - offsetY;
        bottom = Math.max(beginPoint.clientY, endPoint.clientY) - offsetY;
    }
    const width = right - left;
    const height = bottom - top;
    return {
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        width: width,
        height: height,
        zoomX: xEnabled && width ? 1 + (chartWidth - width) / chartWidth : 1,
        zoomY: yEnabled && height ? 1 + (chartHeight - height) / chartHeight : 1
    };
}
function $e128d83b56e0d473$var$mouseUp(chart, event) {
    const state = $e128d83b56e0d473$var$getState(chart);
    if (!state.dragStart) return;
    $e128d83b56e0d473$var$removeHandler(chart, "mousemove");
    const { mode: mode , onZoomComplete: onZoomComplete , drag: { threshold: threshold = 0  }  } = state.options.zoom;
    const rect = $e128d83b56e0d473$var$computeDragRect(chart, mode, state.dragStart, event);
    const distanceX = $e128d83b56e0d473$var$directionEnabled(mode, "x", chart) ? rect.width : 0;
    const distanceY = $e128d83b56e0d473$var$directionEnabled(mode, "y", chart) ? rect.height : 0;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    // Remove drag start and end before chart update to stop drawing selected area
    state.dragStart = state.dragEnd = null;
    if (distance <= threshold) {
        state.dragging = false;
        chart.update("none");
        return;
    }
    $e128d83b56e0d473$var$zoomRect(chart, {
        x: rect.left,
        y: rect.top
    }, {
        x: rect.right,
        y: rect.bottom
    }, "zoom");
    setTimeout(()=>state.dragging = false, 500);
    (0, $43add8e050c146e1$export$3722cfe417b6ed86)(onZoomComplete, [
        {
            chart: chart
        }
    ]);
}
function $e128d83b56e0d473$var$wheelPreconditions(chart, event, zoomOptions) {
    // Before preventDefault, check if the modifier key required and pressed
    if ($e128d83b56e0d473$var$keyNotPressed($e128d83b56e0d473$var$getModifierKey(zoomOptions.wheel), event)) {
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(zoomOptions.onZoomRejected, [
            {
                chart: chart,
                event: event
            }
        ]);
        return;
    }
    if ($e128d83b56e0d473$var$zoomStart(chart, event, zoomOptions) === false) return;
    // Prevent the event from triggering the default behavior (eg. Content scrolling).
    if (event.cancelable) event.preventDefault();
    // Firefox always fires the wheel event twice:
    // First without the delta and right after that once with the delta properties.
    if (event.deltaY === undefined) return;
    return true;
}
function $e128d83b56e0d473$var$wheel(chart, event) {
    const { handlers: { onZoomComplete: onZoomComplete  } , options: { zoom: zoomOptions  }  } = $e128d83b56e0d473$var$getState(chart);
    if (!$e128d83b56e0d473$var$wheelPreconditions(chart, event, zoomOptions)) return;
    const rect = event.target.getBoundingClientRect();
    const speed = 1 + (event.deltaY >= 0 ? -zoomOptions.wheel.speed : zoomOptions.wheel.speed);
    const amount = {
        x: speed,
        y: speed,
        focalPoint: {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    };
    $e128d83b56e0d473$export$e83f174dbf56adcc(chart, amount);
    if (onZoomComplete) onZoomComplete();
}
function $e128d83b56e0d473$var$addDebouncedHandler(chart, name, handler, delay) {
    if (handler) $e128d83b56e0d473$var$getState(chart).handlers[name] = $e128d83b56e0d473$var$debounce(()=>(0, $43add8e050c146e1$export$3722cfe417b6ed86)(handler, [
            {
                chart: chart
            }
        ]), delay);
}
function $e128d83b56e0d473$var$addListeners(chart, options) {
    const canvas = chart.canvas;
    const { wheel: wheelOptions , drag: dragOptions , onZoomComplete: onZoomComplete  } = options.zoom;
    // Install listeners. Do this dynamically based on options so that we can turn zoom on and off
    // We also want to make sure listeners aren't always on. E.g. if you're scrolling down a page
    // and the mouse goes over a chart you don't want it intercepted unless the plugin is enabled
    if (wheelOptions.enabled) {
        $e128d83b56e0d473$var$addHandler(chart, canvas, "wheel", $e128d83b56e0d473$var$wheel);
        $e128d83b56e0d473$var$addDebouncedHandler(chart, "onZoomComplete", onZoomComplete, 250);
    } else $e128d83b56e0d473$var$removeHandler(chart, "wheel");
    if (dragOptions.enabled) {
        $e128d83b56e0d473$var$addHandler(chart, canvas, "mousedown", $e128d83b56e0d473$var$mouseDown);
        $e128d83b56e0d473$var$addHandler(chart, canvas.ownerDocument, "mouseup", $e128d83b56e0d473$var$mouseUp);
    } else {
        $e128d83b56e0d473$var$removeHandler(chart, "mousedown");
        $e128d83b56e0d473$var$removeHandler(chart, "mousemove");
        $e128d83b56e0d473$var$removeHandler(chart, "mouseup");
    }
}
function $e128d83b56e0d473$var$removeListeners(chart) {
    $e128d83b56e0d473$var$removeHandler(chart, "mousedown");
    $e128d83b56e0d473$var$removeHandler(chart, "mousemove");
    $e128d83b56e0d473$var$removeHandler(chart, "mouseup");
    $e128d83b56e0d473$var$removeHandler(chart, "wheel");
    $e128d83b56e0d473$var$removeHandler(chart, "click");
}
function $e128d83b56e0d473$var$createEnabler(chart, state) {
    return function(recognizer, event) {
        const { pan: panOptions , zoom: zoomOptions = {}  } = state.options;
        if (!panOptions || !panOptions.enabled) return false;
        const srcEvent = event && event.srcEvent;
        if (!srcEvent) return true;
        if (!state.panning && event.pointerType === "mouse" && ($e128d83b56e0d473$var$keyNotPressed($e128d83b56e0d473$var$getModifierKey(panOptions), srcEvent) || $e128d83b56e0d473$var$keyPressed($e128d83b56e0d473$var$getModifierKey(zoomOptions.drag), srcEvent))) {
            (0, $43add8e050c146e1$export$3722cfe417b6ed86)(panOptions.onPanRejected, [
                {
                    chart: chart,
                    event: event
                }
            ]);
            return false;
        }
        return true;
    };
}
function $e128d83b56e0d473$var$pinchAxes(p0, p1) {
    // fingers position difference
    const pinchX = Math.abs(p0.clientX - p1.clientX);
    const pinchY = Math.abs(p0.clientY - p1.clientY);
    // diagonal fingers will change both (xy) axes
    const p = pinchX / pinchY;
    let x, y;
    if (p > 0.3 && p < 1.7) x = y = true;
    else if (pinchX > pinchY) x = true;
    else y = true;
    return {
        x: x,
        y: y
    };
}
function $e128d83b56e0d473$var$handlePinch(chart, state, e) {
    if (state.scale) {
        const { center: center , pointers: pointers  } = e;
        // Hammer reports the total scaling. We need the incremental amount
        const zoomPercent = 1 / state.scale * e.scale;
        const rect = e.target.getBoundingClientRect();
        const pinch = $e128d83b56e0d473$var$pinchAxes(pointers[0], pointers[1]);
        const mode = state.options.zoom.mode;
        const amount = {
            x: pinch.x && $e128d83b56e0d473$var$directionEnabled(mode, "x", chart) ? zoomPercent : 1,
            y: pinch.y && $e128d83b56e0d473$var$directionEnabled(mode, "y", chart) ? zoomPercent : 1,
            focalPoint: {
                x: center.x - rect.left,
                y: center.y - rect.top
            }
        };
        $e128d83b56e0d473$export$e83f174dbf56adcc(chart, amount);
        // Keep track of overall scale
        state.scale = e.scale;
    }
}
function $e128d83b56e0d473$var$startPinch(chart, state) {
    if (state.options.zoom.pinch.enabled) state.scale = 1;
}
function $e128d83b56e0d473$var$endPinch(chart, state, e) {
    if (state.scale) {
        $e128d83b56e0d473$var$handlePinch(chart, state, e);
        state.scale = null; // reset
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(state.options.zoom.onZoomComplete, [
            {
                chart: chart
            }
        ]);
    }
}
function $e128d83b56e0d473$var$handlePan(chart, state, e) {
    const delta = state.delta;
    if (delta) {
        state.panning = true;
        $e128d83b56e0d473$export$4c486572e961a974(chart, {
            x: e.deltaX - delta.x,
            y: e.deltaY - delta.y
        }, state.panScales);
        state.delta = {
            x: e.deltaX,
            y: e.deltaY
        };
    }
}
function $e128d83b56e0d473$var$startPan(chart, state, event) {
    const { enabled: enabled , overScaleMode: overScaleMode , onPanStart: onPanStart , onPanRejected: onPanRejected  } = state.options.pan;
    if (!enabled) return;
    const rect = event.target.getBoundingClientRect();
    const point = {
        x: event.center.x - rect.left,
        y: event.center.y - rect.top
    };
    if ((0, $43add8e050c146e1$export$3722cfe417b6ed86)(onPanStart, [
        {
            chart: chart,
            event: event,
            point: point
        }
    ]) === false) return (0, $43add8e050c146e1$export$3722cfe417b6ed86)(onPanRejected, [
        {
            chart: chart,
            event: event
        }
    ]);
    state.panScales = overScaleMode && $e128d83b56e0d473$var$getEnabledScalesByPoint(overScaleMode, point, chart);
    state.delta = {
        x: 0,
        y: 0
    };
    clearTimeout(state.panEndTimeout);
    $e128d83b56e0d473$var$handlePan(chart, state, event);
}
function $e128d83b56e0d473$var$endPan(chart, state) {
    state.delta = null;
    if (state.panning) {
        state.panEndTimeout = setTimeout(()=>state.panning = false, 500);
        (0, $43add8e050c146e1$export$3722cfe417b6ed86)(state.options.pan.onPanComplete, [
            {
                chart: chart
            }
        ]);
    }
}
const $e128d83b56e0d473$var$hammers = new WeakMap();
function $e128d83b56e0d473$var$startHammer(chart, options) {
    const state = $e128d83b56e0d473$var$getState(chart);
    const canvas = chart.canvas;
    const { pan: panOptions , zoom: zoomOptions  } = options;
    const mc = new (0, (/*@__PURE__*/$parcel$interopDefault($007444a027faa41e$exports))).Manager(canvas);
    if (zoomOptions && zoomOptions.pinch.enabled) {
        mc.add(new (0, (/*@__PURE__*/$parcel$interopDefault($007444a027faa41e$exports))).Pinch());
        mc.on("pinchstart", ()=>$e128d83b56e0d473$var$startPinch(chart, state));
        mc.on("pinch", (e)=>$e128d83b56e0d473$var$handlePinch(chart, state, e));
        mc.on("pinchend", (e)=>$e128d83b56e0d473$var$endPinch(chart, state, e));
    }
    if (panOptions && panOptions.enabled) {
        mc.add(new (0, (/*@__PURE__*/$parcel$interopDefault($007444a027faa41e$exports))).Pan({
            threshold: panOptions.threshold,
            enable: $e128d83b56e0d473$var$createEnabler(chart, state)
        }));
        mc.on("panstart", (e)=>$e128d83b56e0d473$var$startPan(chart, state, e));
        mc.on("panmove", (e)=>$e128d83b56e0d473$var$handlePan(chart, state, e));
        mc.on("panend", ()=>$e128d83b56e0d473$var$endPan(chart, state));
    }
    $e128d83b56e0d473$var$hammers.set(chart, mc);
}
function $e128d83b56e0d473$var$stopHammer(chart) {
    const mc = $e128d83b56e0d473$var$hammers.get(chart);
    if (mc) {
        mc.remove("pinchstart");
        mc.remove("pinch");
        mc.remove("pinchend");
        mc.remove("panstart");
        mc.remove("pan");
        mc.remove("panend");
        mc.destroy();
        $e128d83b56e0d473$var$hammers.delete(chart);
    }
}
var $e128d83b56e0d473$var$version = "1.2.1";
var $e128d83b56e0d473$export$2e2bcd8739ae039 = {
    id: "zoom",
    version: $e128d83b56e0d473$var$version,
    defaults: {
        pan: {
            enabled: false,
            mode: "xy",
            threshold: 10,
            modifierKey: null
        },
        zoom: {
            wheel: {
                enabled: false,
                speed: 0.1,
                modifierKey: null
            },
            drag: {
                enabled: false,
                modifierKey: null
            },
            pinch: {
                enabled: false
            },
            mode: "xy"
        }
    },
    start: function(chart, _args, options) {
        const state = $e128d83b56e0d473$var$getState(chart);
        state.options = options;
        if (Object.prototype.hasOwnProperty.call(options.zoom, "enabled")) console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`.");
        if (0, (/*@__PURE__*/$parcel$interopDefault($007444a027faa41e$exports))) $e128d83b56e0d473$var$startHammer(chart, options);
        chart.pan = (delta, panScales, transition)=>$e128d83b56e0d473$export$4c486572e961a974(chart, delta, panScales, transition);
        chart.zoom = (args, transition)=>$e128d83b56e0d473$export$e83f174dbf56adcc(chart, args, transition);
        chart.zoomScale = (id, range, transition)=>$e128d83b56e0d473$export$bd064d51d863101c(chart, id, range, transition);
        chart.resetZoom = (transition)=>$e128d83b56e0d473$export$ac12f90bdc1d9b7(chart, transition);
        chart.getZoomLevel = ()=>$e128d83b56e0d473$var$getZoomLevel(chart);
        chart.getInitialScaleBounds = ()=>$e128d83b56e0d473$var$getInitialScaleBounds(chart);
        chart.isZoomedOrPanned = ()=>$e128d83b56e0d473$var$isZoomedOrPanned(chart);
    },
    beforeEvent (chart) {
        const state = $e128d83b56e0d473$var$getState(chart);
        if (state.panning || state.dragging) // cancel any event handling while panning or dragging
        return false;
    },
    beforeUpdate: function(chart, args, options) {
        const state = $e128d83b56e0d473$var$getState(chart);
        state.options = options;
        $e128d83b56e0d473$var$addListeners(chart, options);
    },
    beforeDatasetsDraw: function(chart, args, options) {
        const { dragStart: dragStart , dragEnd: dragEnd  } = $e128d83b56e0d473$var$getState(chart);
        if (dragEnd) {
            const { left: left , top: top , width: width , height: height  } = $e128d83b56e0d473$var$computeDragRect(chart, options.zoom.mode, dragStart, dragEnd);
            const dragOptions = options.zoom.drag;
            const ctx = chart.ctx;
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = dragOptions.backgroundColor || "rgba(225,225,225,0.3)";
            ctx.fillRect(left, top, width, height);
            if (dragOptions.borderWidth > 0) {
                ctx.lineWidth = dragOptions.borderWidth;
                ctx.strokeStyle = dragOptions.borderColor || "rgba(225,225,225)";
                ctx.strokeRect(left, top, width, height);
            }
            ctx.restore();
        }
    },
    stop: function(chart) {
        $e128d83b56e0d473$var$removeListeners(chart);
        if (0, (/*@__PURE__*/$parcel$interopDefault($007444a027faa41e$exports))) $e128d83b56e0d473$var$stopHammer(chart);
        $e128d83b56e0d473$var$removeState(chart);
    },
    panFunctions: $e128d83b56e0d473$var$panFunctions,
    zoomFunctions: $e128d83b56e0d473$var$zoomFunctions
};


"use strict";
(0, $22a5eaf847bb8284$export$acaa6426d77a227e).register((0, $e128d83b56e0d473$export$2e2bcd8739ae039));
(0, $22a5eaf847bb8284$export$acaa6426d77a227e).register(...(0, $22a5eaf847bb8284$export$e8959e79e3af550f));
const $a7f58a8bd7f7d440$var$buttons = document.querySelectorAll(".chartBtn");
const $a7f58a8bd7f7d440$var$description = document.querySelector(".description");
const $a7f58a8bd7f7d440$var$coinDescription = document.querySelector(".coin-description");
const $a7f58a8bd7f7d440$var$currChange = document.querySelector("#curr");
const $a7f58a8bd7f7d440$var$url = new URL(window.location.href);
const $a7f58a8bd7f7d440$var$coin = $a7f58a8bd7f7d440$var$url.searchParams.get("id").toLowerCase();
let $a7f58a8bd7f7d440$var$myChart;
let $a7f58a8bd7f7d440$var$color, $a7f58a8bd7f7d440$var$currVal = "inr";
// HELPER FUNCTIONS
const $a7f58a8bd7f7d440$var$formatAMPM = function(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
};
// NOTE: USE THIS FUNCTION FOR DESCRIPTION OF THE COIN
const $a7f58a8bd7f7d440$var$getCoinData = async function(coin1) {
    try {
        const { data: data  } = await axios(`https://api.coingecko.com/api/v3/coins/${coin1}`);
        const stockChangePercent = Number(data.market_data.market_cap_change_percentage_24h);
        $a7f58a8bd7f7d440$var$color = stockChangePercent > 0 ? "#3ED625" : "#C70039";
    } catch (err) {
        console.log(err);
    }
};
// MAIN FUNCTIONS
const $a7f58a8bd7f7d440$var$chartOverviewRender = async function(coin2, prevTime, curr, charttime) {
    const currTime = new Date() / 1000;
    const lastSixtyMin = currTime - prevTime;
    // DONT MANIPULATE
    const chartData = await axios(`https://api.coingecko.com/api/v3/coins/${coin2}/market_chart/range?vs_currency=${curr}&from=${lastSixtyMin}&to=${currTime}`);
    const labels = [];
    const priceData = [];
    chartData.data.prices.forEach((el)=>{
        labels.push($a7f58a8bd7f7d440$var$formatAMPM(new Date(el[0])));
        priceData.push(el[1]);
    });
    const data = {
        labels: labels,
        // #C70039 red
        // #3ED625 green
        datasets: [
            {
                label: `Price Past (${charttime})`,
                backgroundColor: $a7f58a8bd7f7d440$var$color,
                borderColor: $a7f58a8bd7f7d440$var$color,
                // actual data to be plotted
                data: priceData
            }, 
        ]
    };
    // final file to be loaded onto the DOM, includes 3 things.
    const config = {
        type: "line",
        data: data,
        options: {
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "xy"
                    }
                }
            }
        },
        responsive: true
    };
    $a7f58a8bd7f7d440$var$myChart = new (0, $22a5eaf847bb8284$export$acaa6426d77a227e)(document.getElementById("myChart"), config);
};
const $a7f58a8bd7f7d440$var$descriptionOverview = async function(coin3, curr) {
    try {
        const { data: data  } = await axios(`https://api.coingecko.com/api/v3/coins/${coin3}`);
        const description1 = data.description.en.replaceAll(/\r\n/g, "<br>");
        const currSymbol = curr == "inr" ? "&#8377" : "&#36";
        $a7f58a8bd7f7d440$var$coinDescription.innerHTML = `
        <img id='coinImage' style='width:200px;' src="${data.image.large}" alt="" />
        <h1 id='coinName'>${data.name}</h1>
        <p id='coinDesc'>${description1}</p>
        <h1>Rank: ${data.coingecko_rank}</h1>
        <h1>Current Price: ${currSymbol} ${data.market_data.current_price[curr].toLocaleString("en-US")}</h1>
        <h1>Market Capital: ${currSymbol} ${data.market_data.market_cap[curr].toLocaleString("en-US")}</h1>
    `;
    } catch (err) {
        $a7f58a8bd7f7d440$var$description.innerHTML = err.message;
    }
};
$a7f58a8bd7f7d440$var$buttons.forEach((btn)=>{
    btn.addEventListener("click", function(e) {
        let prevTime;
        const { charttime: charttime  } = this.dataset;
        if (charttime === "1h") prevTime = 3600;
        if (charttime === "24h") prevTime = 86400;
        if (charttime === "1m") prevTime = 2592000;
        if (charttime === "3m") prevTime = 7776000;
        $a7f58a8bd7f7d440$var$myChart.destroy();
        $a7f58a8bd7f7d440$var$chartOverviewRender($a7f58a8bd7f7d440$var$coin, prevTime, $a7f58a8bd7f7d440$var$currVal, charttime);
    });
});
$a7f58a8bd7f7d440$var$currChange.addEventListener("change", function(e) {
    $a7f58a8bd7f7d440$var$currVal = this.value.toLowerCase();
    $a7f58a8bd7f7d440$var$descriptionOverview($a7f58a8bd7f7d440$var$coin, $a7f58a8bd7f7d440$var$currVal);
    if ($a7f58a8bd7f7d440$var$myChart) $a7f58a8bd7f7d440$var$myChart.destroy();
    $a7f58a8bd7f7d440$var$chartOverviewRender($a7f58a8bd7f7d440$var$coin, 86400, $a7f58a8bd7f7d440$var$currVal, "1d");
});
const $a7f58a8bd7f7d440$var$init = async function() {
    await $a7f58a8bd7f7d440$var$getCoinData($a7f58a8bd7f7d440$var$coin);
    await $a7f58a8bd7f7d440$var$descriptionOverview($a7f58a8bd7f7d440$var$coin, "inr");
    await $a7f58a8bd7f7d440$var$chartOverviewRender($a7f58a8bd7f7d440$var$coin, 86400, "inr", "1d"); //  24 * 60 * 60 = 604800 (1 day)
};
$a7f58a8bd7f7d440$var$init();


//# sourceMappingURL=coin.js.map
