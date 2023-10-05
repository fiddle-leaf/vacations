import {
  Form
} from "/build/_shared/chunk-TC7JA6HQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-VKE3YZLX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/vacations.new.jsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/vacations.new.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/vacations.new.jsx"
  );
  import.meta.hot.lastModified = "1696477564340.512";
}
function NewVacation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "New Vacation" }, void 0, false, {
      fileName: "app/routes/vacations.new.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", onSubmit: (e) => {
      const response = confirm("Please confirm new vacation submission.");
      !response ? e.preventDefault : null;
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: [
          "Vacation Name:\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", id: "name" }, void 0, false, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: [
          "Vacation Budget:\xA0$",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "budget", id: "budget" }, void 0, false, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/vacations.new.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", value: "Create New Vacation" }, void 0, false, {
        fileName: "app/routes/vacations.new.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/vacations.new.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/vacations.new.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/vacations.new.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = NewVacation;
var _c;
$RefreshReg$(_c, "NewVacation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewVacation as default
};
//# sourceMappingURL=/build/routes/vacations.new-4JOKBSIF.js.map
