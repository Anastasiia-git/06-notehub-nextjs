(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = 'https://notehub-public.goit.study/api';
const NOTEHUB_TOKEN = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hc3R5YS50b3Rza2F5YTE5OTdAZ21haWwuY29tIiwiaWF0IjoxNzY5NTIyMjk2fQ.v1NHG-6QdNYn53kzMiLYT49f97ZEW4Q1uN3uKWCVP3I");
const getToken = ()=>{
    const token = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hc3R5YS50b3Rza2F5YTE5OTdAZ21haWwuY29tIiwiaWF0IjoxNzY5NTIyMjk2fQ.v1NHG-6QdNYn53kzMiLYT49f97ZEW4Q1uN3uKWCVP3I");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return token;
};
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${NOTEHUB_TOKEN}`
    }
});
api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
});
const fetchNotes = async (params)=>{
    try {
        const response = await api.get('/notes', {
            params: {
                search: params.search,
                page: params.page ?? 1,
                perPage: params.perPage ?? 10
            }
        });
        return response.data;
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
            console.log('Axios error:', error.message);
            console.log('Status:', error.response?.status);
            console.log('Response:', error.response?.data);
        }
        throw error;
    }
};
const createNote = async (note)=>{
    try {
        const { data } = await api.post('/notes', note);
        return data;
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
            console.log(error.response?.data);
        }
        throw error;
    }
};
const deleteNote = async (id)=>{
    const { data } = await api.delete(`/notes/${id}`);
    return data;
};
const fetchNoteById = async (id)=>{
    const { data } = await api.get(`/notes/${id}`);
    return data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteDetailsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/react-0.2/06-notehub-nextjs/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NoteDetailsClient() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "61f68e81fa05d7c2601266bf4c84034b645f40d4b462c88cb878cf7d68459116") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "61f68e81fa05d7c2601266bf4c84034b645f40d4b462c88cb878cf7d68459116";
    }
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    let t0;
    if ($[1] !== id) {
        t0 = {
            queryKey: [
                "note",
                id
            ],
            queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNoteById"])(id),
            refetchOnMount: false
        };
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const { data: note, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
    if (isLoading) {
        let t1;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading, please wait..."
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 41,
                columnNumber: 12
            }, this);
            $[3] = t1;
        } else {
            t1 = $[3];
        }
        return t1;
    }
    if (error || !note) {
        let t1;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Something went wrong."
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 51,
                columnNumber: 12
            }, this);
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        return t1;
    }
    let t1;
    if ($[5] !== note.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: note.title
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 60,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[5] = note.title;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== note.tag) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: note.tag
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = note.tag;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Note content"
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Created date"
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t3 = $[9];
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t1 || $[12] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t1,
                    t2,
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 87,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/react-0.2/06-notehub-nextjs/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t2;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_s(NoteDetailsClient, "4MYs1oDdtC5h2ACFurEGgKaER5I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$react$2d$0$2e$2$2f$06$2d$notehub$2d$nextjs$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NoteDetailsClient;
var _c;
__turbopack_context__.k.register(_c, "NoteDetailsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_projects_react-0_2_06-notehub-nextjs_d255471e._.js.map