module.exports = [
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/Spinner/Spinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/ClipLoader.js [app-ssr] (ecmascript) <export default as ClipLoader>");
'use client';
;
;
function Spinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
            size: 50
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/Spinner/Spinner.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/Spinner/Spinner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
} // import { BeatLoader } from 'react-spinners';
 // export default function Spinner() {
 //   return (
 //     <div
 //       style={{
 //         display: 'flex',
 //         justifyContent: 'center',
 //         alignItems: 'center',
 //         height: '100vh',
 //       }}
 //     >
 //       <BeatLoader size={12} />
 //     </div>
 //   );
 // }
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/helpers/unitConverter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssValue",
    ()=>cssValue,
    "parseLengthAndUnit",
    ()=>parseLengthAndUnit
]);
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true
};
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px"
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    } else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit
        };
    }
    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
    return {
        value: value,
        unit: "px"
    };
}
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/helpers/animation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAnimation",
    ()=>createAnimation
]);
var createAnimation = function(loaderName, frames, suffix) {
    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
    if ("TURBOPACK compile-time truthy", 1) {
        return animationName;
    }
    //TURBOPACK unreachable
    ;
    var styleEl;
    var styleSheet;
    var keyFrames;
};
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/ClipLoader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$unitConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/helpers/unitConverter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/helpers/animation.js [app-ssr] (ecmascript)");
"use client";
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
var clip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnimation"])("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function ClipLoader(_a) {
    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 35 : _f, additionalprops = __rest(_a, [
        "loading",
        "color",
        "speedMultiplier",
        "cssOverride",
        "size"
    ]);
    var style = __assign({
        background: "transparent !important",
        width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$unitConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssValue"])(size),
        height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$unitConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssValue"])(size),
        borderRadius: "100%",
        border: "2px solid",
        borderTopColor: color,
        borderBottomColor: "transparent",
        borderLeftColor: color,
        borderRightColor: color,
        display: "inline-block",
        animation: "".concat(clip, " ").concat(0.75 / speedMultiplier, "s 0s infinite linear"),
        animationFillMode: "both"
    }, cssOverride);
    if (!loading) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", __assign({
        style: style
    }, additionalprops));
}
const __TURBOPACK__default__export__ = ClipLoader;
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/ClipLoader.js [app-ssr] (ecmascript) <export default as ClipLoader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/react-spinners/esm/ClipLoader.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_projects_react-0_2_06-notehub-nextjs_f3b406c3._.js.map