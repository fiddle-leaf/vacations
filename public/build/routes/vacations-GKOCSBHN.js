import {
  Layout
} from "/build/_shared/chunk-2IU4KMHW.js";
import {
  Outlet
} from "/build/_shared/chunk-QB6BDX2D.js";
import {
  createHotContext
} from "/build/_shared/chunk-RY3H67DB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Sidebar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Sidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Sidebar.jsx"
  );
  import.meta.hot.lastModified = "1696735329010.1096";
}
function Sidebar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "sidebar", children: "heller" }, void 0, false, {
    fileName: "app/components/Sidebar.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Sidebar;
var _c;
$RefreshReg$(_c, "Sidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/vacations/route.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/vacations/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/vacations/route.jsx"
  );
  import.meta.hot.lastModified = "1696797137320.4595";
}
function Landing() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "columns", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/vacations/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/vacations/route.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/vacations/route.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/vacations/route.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Landing;
var _c2;
$RefreshReg$(_c2, "Landing");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Landing as default
};
//# sourceMappingURL=/build/routes/vacations-GKOCSBHN.js.map
