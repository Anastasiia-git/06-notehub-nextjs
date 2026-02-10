(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const NoteItem = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "631b28c1c22165ec19b5ae3515c8d0832afb4ed0b89816a687e12a7012370b54") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "631b28c1c22165ec19b5ae3515c8d0832afb4ed0b89816a687e12a7012370b54";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: item.title
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = item.title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = NoteItem;
const __TURBOPACK__default__export__ = NoteItem;
var _c;
__turbopack_context__.k.register(_c, "NoteItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteItem$2f$NoteItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx [app-client] (ecmascript)");
;
;
;
const NoteList = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "4d989bce9ea8efaaaeea6150d011fd4ccea0d331937893498c7b4973775bd902") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d989bce9ea8efaaaeea6150d011fd4ccea0d331937893498c7b4973775bd902";
    }
    const { notes } = t0;
    let t1;
    if ($[1] !== notes) {
        t1 = notes.map(_temp);
        $[1] = notes;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: t1
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
};
_c = NoteList;
const __TURBOPACK__default__export__ = NoteList;
function _temp(note) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteItem$2f$NoteItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        item: note
    }, note.id, false, {
        fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "NoteList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotes",
    ()=>getNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = 'https://next-v1-notes-api.goit.study';
const getNotes = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/notes');
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const metadata = {
    title: 'Notes'
};
;
;
;
const Notes = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "6835f35941d8e58f48874f34b27e5f4fcc502ea2dc8bb9e55e96c6c7695c4920") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6835f35941d8e58f48874f34b27e5f4fcc502ea2dc8bb9e55e96c6c7695c4920";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = async ()=>{
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotes"])();
            if (response?.notes) {
                setNotes(response.notes);
            }
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleClick = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Notes List"
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleClick,
            children: "Get my notes"
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== notes) {
        t4 = notes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            notes: notes
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx",
            lineNumber: 54,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = notes;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
};
_s(Notes, "D3SKFcAjFZOalOVW1nYYUWn4uWI=");
_c = Notes;
const __TURBOPACK__default__export__ = Notes;
var _c;
__turbopack_context__.k.register(_c, "Notes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_projects_react-0_2_06-notehub-nextjs_72441047._.js.map