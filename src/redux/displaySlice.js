import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayText: "0",
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    addDisplayText: (state, action) => {
      const isOperator = /[\+\-\*\/]/;
      const lastOperator = /[\+\*\/\-]$/;
      const lastCharacter = state.displayText[state.displayText.length - 1];
      const preLastCharacter = state.displayText[state.displayText.length - 2];
      if (Number(action.payload) || action.payload == '0') {
        if (state.displayText != "0") state.displayText += action.payload;
        else state.displayText = action.payload;
      } else if (isOperator.test(action.payload)) {
        if (isOperator.test(lastCharacter)) {
          if (action.payload == "-") {
            if (!isOperator.test(preLastCharacter)) {
              state.displayText += action.payload;
            }
          } else if (isOperator.test(preLastCharacter)) {
            state.displayText = state.displayText.replace(/.$/, "");
          }
          state.displayText = state.displayText.replace(/.$/, action.payload);
        } else {
          state.displayText += action.payload;
        }
      } else if (action.payload == ".") {
        let arr = state.displayText.split(isOperator);
        if (arr[arr.length - 1].indexOf('.') == -1) {
          state.displayText += action.payload;
        }
      }
      else if (action.payload === '=')
      {
        state.displayText = eval(state.displayText).toString();

      }
    },
    resetDisplayText: (state) => {
      state.displayText = "0";
    },
    changeDisplay: (state, value) => {
      state.displayText = value;
    },
  },
});

function prepareString(str) {}
export const { addDisplayText, resetDisplayText, changeDisplay } =
  displaySlice.actions;
export default displaySlice.reducer;
