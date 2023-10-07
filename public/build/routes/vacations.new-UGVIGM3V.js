import {
  Form
} from "/build/_shared/chunk-QB6BDX2D.js";
import {
  createHotContext
} from "/build/_shared/chunk-RY3H67DB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
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

// app/routes/vacations.new/route.jsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/components/Travel.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Travel.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Travel.jsx"
  );
  import.meta.hot.lastModified = "1696633139750.8171";
}
function Travel() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Departure" }, void 0, false, {
      fileName: "app/components/Travel.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "ticketNo", children: [
          "Ticket Number:\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "ticketNo", id: "ticketNo" }, void 0, false, {
            fileName: "app/components/Travel.jsx",
            lineNumber: 28,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Travel.jsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "destination-datetime", children: [
          "Departure Datetime:\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "datetime-local", name: "destination-datetime", id: "datetime" }, void 0, false, {
            fileName: "app/components/Travel.jsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Travel.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Travel.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "destination", children: [
          "Destination:\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "destination", id: "destination" }, void 0, false, {
            fileName: "app/components/Travel.jsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Travel.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "arrival-datetime", children: [
          "Arrival Datetime:\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "datetime-local", name: "arrival-datetime", id: "datetime" }, void 0, false, {
            fileName: "app/components/Travel.jsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Travel.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Travel.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Travel.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Return" }, void 0, false, {
      fileName: "app/components/Travel.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "ticketNo", children: [
          "Ticket Number:\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "ticketNo", id: "return" }, void 0, false, {
            fileName: "app/components/Travel.jsx",
            lineNumber: 51,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Travel.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "same", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "same", id: "same" }, void 0, false, {
            fileName: "app/components/Travel.jsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          "Same as before"
        ] }, void 0, true, {
          fileName: "app/components/Travel.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Travel.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "return-datetime", children: [
        "Return Datetime:\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "datetime-local", name: "return-datetime", id: "datetime" }, void 0, false, {
          fileName: "app/components/Travel.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Travel.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Travel.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
      fileName: "app/components/Travel.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Travel.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Travel;
var _c;
$RefreshReg$(_c, "Travel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/AddOns.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AddOns.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AddOns.jsx"
  );
  import.meta.hot.lastModified = "1696638386460.2488";
}
function AddOns() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: "Costs" }, void 0, false, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "hotel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox", name: "hotel", id: "hotel" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        "Hotel Stay:\xA0$",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "number", name: "cost", id: "cost" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "car-rental", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox", name: "car-rental", id: "car-rental" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        "Car Rental:\xA0$",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "number", name: "cost", id: "cost" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "activities", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox", name: "activities", id: "activities" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        "Activities:\xA0$",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "number", name: "cost", id: "cost" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: "To-do List(s)" }, void 0, false, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "to-do", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox", name: "", id: "" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", name: "", id: "" }, void 0, false, {
          fileName: "app/components/AddOns.jsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "button", value: "add" }, void 0, false, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/AddOns.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "notes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: "Notes" }, void 0, false, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { name: "notes", id: "notes", cols: "30", rows: "10" }, void 0, false, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/AddOns.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AddOns.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c2 = AddOns;
var _c2;
$RefreshReg$(_c2, "AddOns");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/vacations.new/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/vacations.new/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/vacations.new/route.jsx"
  );
  import.meta.hot.lastModified = "1696640722236.3542";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "New Vacation" }, void 0, false, {
      fileName: "app/routes/vacations.new/route.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "POST", onSubmit: (e) => {
      const response = confirm("Please confirm new vacation submission.");
      !response ? e.preventDefault : null;
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "name", children: [
          "Vacation Name:\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", name: "name", id: "name" }, void 0, false, {
            fileName: "app/routes/vacations.new/route.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "name", children: [
          "Vacation Budget:\xA0$",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "number", name: "budget", id: "budget" }, void 0, false, {
            fileName: "app/routes/vacations.new/route.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 61,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/vacations.new/route.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "boy", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Transportation Details" }, void 0, false, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "radio", name: "mode", id: "airplane", value: "airplane", onChange: handleChange, checked: transport.mode === "airplane" }, void 0, false, {
              fileName: "app/routes/vacations.new/route.jsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            "Airplane"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new/route.jsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "radio", name: "mode", id: "bus", value: "bus", onChange: handleChange, checked: transport.mode === "bus" }, void 0, false, {
              fileName: "app/routes/vacations.new/route.jsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            "Bus"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new/route.jsx",
            lineNumber: 74,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "radio", name: "mode", id: "train", value: "train", onChange: handleChange, checked: transport.mode === "train" }, void 0, false, {
              fileName: "app/routes/vacations.new/route.jsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            "Train"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new/route.jsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "radio", name: "mode", id: "car", value: "car", onChange: handleChange, checked: transport.mode === "car" }, void 0, false, {
              fileName: "app/routes/vacations.new/route.jsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            "Car"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new/route.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "radio", name: "mode", id: "other", value: "other", onChange: handleChange, checked: transport.mode === "other" }, void 0, false, {
              fileName: "app/routes/vacations.new/route.jsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            "Other"
          ] }, void 0, true, {
            fileName: "app/routes/vacations.new/route.jsx",
            lineNumber: 86,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/vacations.new/route.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Travel, {}, void 0, false, {
        fileName: "app/routes/vacations.new/route.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Add Ons" }, void 0, false, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddOns, {}, void 0, false, {
          fileName: "app/routes/vacations.new/route.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/vacations.new/route.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "submit", value: "Create New Vacation" }, void 0, false, {
        fileName: "app/routes/vacations.new/route.jsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/vacations.new/route.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/vacations.new/route.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/vacations.new/route.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(NewVacation, "xYbeUwIaHQ+PpZ9Du9kgobxrb1I=");
_c3 = NewVacation;
var _c3;
$RefreshReg$(_c3, "NewVacation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewVacation as default
};
//# sourceMappingURL=/build/routes/vacations.new-UGVIGM3V.js.map
