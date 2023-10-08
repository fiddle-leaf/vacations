import {
  Link
} from "/build/_shared/chunk-QB6BDX2D.js";
import {
  createHotContext
} from "/build/_shared/chunk-RY3H67DB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/layout/Layout.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/Layout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/Layout.jsx"
  );
  import.meta.hot.lastModified = "1696732996255.4568";
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Vacation Planner" }, void 0, false, {
        fileName: "app/components/layout/Layout.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/vacations`, children: "Home" }, void 0, false, {
          fileName: "app/components/layout/Layout.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Layout.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/vacations/new`, children: "New Vacation" }, void 0, false, {
          fileName: "app/components/layout/Layout.jsx",
          lineNumber: 34,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Layout.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/vacations/history`, children: "Vacation History" }, void 0, false, {
          fileName: "app/components/layout/Layout.jsx",
          lineNumber: 37,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Layout.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Layout.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layout/Layout.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/Layout.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "body", children }, void 0, false, {
      fileName: "app/components/layout/Layout.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "fiddle-leaf \xA9 2023" }, void 0, false, {
      fileName: "app/components/layout/Layout.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Layout.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Layout.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Layout
};
//# sourceMappingURL=/build/_shared/chunk-KXOYKH2B.js.map
