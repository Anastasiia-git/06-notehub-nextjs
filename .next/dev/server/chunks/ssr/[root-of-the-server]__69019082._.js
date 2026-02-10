module.exports = [
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const NoteItem = ({ item })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: item.title
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NoteItem;
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteItem$2f$NoteItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteItem/NoteItem.tsx [app-rsc] (ecmascript)");
;
;
const NoteList = ({ notes })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        children: notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteItem$2f$NoteItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                item: note
            }, note.id, false, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NoteList;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotes",
    ()=>getNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = 'https://next-v1-notes-api.goit.study';
const getNotes = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get('/notes');
    return res.data;
};
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/components/NoteList/NoteList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/lib/api.ts [app-rsc] (ecmascript)");
;
const metadata = {
    title: 'Notes'
};
;
;
const Notes = async ()=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotes"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Notes List"
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            response?.notes?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                notes: response.notes
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx",
                lineNumber: 16,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Notes;
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69019082._.js.map