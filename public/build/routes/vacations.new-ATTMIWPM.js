import {
  Form
} from "/build/_shared/chunk-E25MQSEW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-RY3H67DB.js";
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
var import_react2 = __toESM(require_react(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/vacations.new.jsx"
  );
  import.meta.hot.lastModified = "1696629392334.2727";
}
function NewVacation() {
  _s();
  const [transport, setTransport] = (0, import_react2.useState)({
    mode: ""
  });
  function handleChange(e) {
    setTransport.mode({
      [e.target.value]: e.target.value
    });
    console.log(e.target.name);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "New Vacation" }, void 0, false, {
      fileName: "app/routes/vacations.new.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", onSubmit: (e) => {
      const response = confirm("Please confirm new vacation submission.");
      !response ? e.preventDefault : null;
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "heder", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: [
          "Vacation Name:&nbp;",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", id: "name" }, void 0, false, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", children: [
          "Vacation Budget:\xA0$",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "budget", id: "budget" }, void 0, false, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/vacations.new.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "boy", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Transportation Details" }, void 0, false, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "mode", id: "airplane", value: "airplane", onChange: handleChange, checked: transport.mode === "airplane" }, void 0, false, {
              fileName: "app/routes/vacations.new.jsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            "Airplane"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "mode", id: "bus", value: "bus", onChange: handleChange, checked: transport.mode === "bus" }, void 0, false, {
              fileName: "app/routes/vacations.new.jsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            "Bus"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "mode", id: "train", value: "train", onChange: handleChange, checked: transport.mode === "train" }, void 0, false, {
              fileName: "app/routes/vacations.new.jsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            "Train"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "mode", id: "car", value: "car", onChange: handleChange, checked: transport.mode === "car" }, void 0, false, {
              fileName: "app/routes/vacations.new.jsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            "Car"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "mode", id: "other", value: "other", onChange: handleChange, checked: transport.mode === "other" }, void 0, false, {
              fileName: "app/routes/vacations.new.jsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            "Other"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new.jsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new.jsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/vacations.new.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", value: "Create New Vacation" }, void 0, false, {
        fileName: "app/routes/vacations.new.jsx",
        lineNumber: 91,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/vacations.new.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/vacations.new.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/vacations.new.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(NewVacation, "xYbeUwIaHQ+PpZ9Du9kgobxrb1I=");
_c = NewVacation;
var _c;
$RefreshReg$(_c, "NewVacation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewVacation as default
};
//# sourceMappingURL=/build/routes/vacations.new-ATTMIWPM.js.map
