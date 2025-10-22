import { state } from "./state.js";
import { safeNumber, computeFromValues, computeSqrt } from "./calculator.js";
const DIGITS = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]);
const ACTIONS = new Set(["+", "-", "x", "÷", "%", "+/-", "√", "xⁿ"]);
export function initUI() {
  const out = document.querySelector(".calc-screen p");
  if (!out) throw new Error("Element not found");
  function updateDisplay(value = "") {
    out.textContent = value || "0";
  }
  function clearAll() {
    state.x = "";
    state.y = "";
    state.operator = null;
    state.finish = false;
    updateDisplay("0");
  }
  const clearButton = document.querySelector(".ac");
  if (!clearButton) throw new Error("Element not found");
  clearButton.onclick = clearAll;
  const buttons = document.querySelectorAll(".btn");
  if (!buttons) throw new Error("Buttons not found");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = e.currentTarget.textContent?.trim() ?? "";
      if (!key) return;
      if (DIGITS.has(key)) {
        if (!state.operator) {
          if (state.finish) {
            state.x = "";
            state.finish = false;
          }
          if (key === "." && state.x.includes(".")) return;
          state.x += key;
          updateDisplay(state.x);
        } else {
          if (state.finish) {
            state.y = "";
            state.finish = false;
          }
          if (key === "." && state.y.includes(".")) return;
          state.y += key;
          updateDisplay(state.y);
        }
        return;
      }
      if (key === "+/-") {
        if (!state.operator) {
          state.x = state.x ? String(-safeNumber(state.x)) : "";
          updateDisplay(state.x);
        } else {
          state.y = state.y ? String(-safeNumber(state.y)) : "";
          updateDisplay(state.y);
        }
        return;
      }
      if (ACTIONS.has(key)) {
        if (key === "√") {
          try {
            if (state.y) {
              state.y = computeSqrt(state.y);
              updateDisplay(state.y);
            } else {
              state.x = computeSqrt(state.x || "0");
              updateDisplay(state.x);
            }
          } catch {
            alert("Error");
            clearAll();
          }
          return;
        }
        state.operator = key;
        state.finish = false;
        updateDisplay(key);
        return;
      }
      if (key === "=") {
        try {
          if (!state.operator) return;
          if (!state.y) state.y = state.x;
          const result = computeFromValues(state.operator, state.x, state.y);
          state.x = result;
          state.y = "";
          state.operator = null;
          state.finish = true;
          updateDisplay(result);
        } catch {
          alert("Error");
          clearAll();
        }
      }
    });
  });
}
//# sourceMappingURL=ui.js.map
