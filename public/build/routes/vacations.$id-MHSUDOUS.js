import {
  useParams
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/vacations.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/vacations.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/vacations.$id.jsx"
  );
  import.meta.hot.lastModified = "1696468070569.355";
}
function Vacation() {
  _s();
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
    "Accessing ",
    params.id,
    " woo!"
  ] }, void 0, true, {
    fileName: "app/routes/vacations.$id.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/vacations.$id.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_s(Vacation, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
  return [useParams];
});
_c = Vacation;
var _c;
$RefreshReg$(_c, "Vacation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Vacation as default
};
//# sourceMappingURL=/build/routes/vacations.$id-MHSUDOUS.js.map
