import React from "react";
import { InputTextArea } from "./style";
const initialState = {
  rows: 5,
  maxRows: 30
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_TEXTAREA":
      return { ...state, ...payload };
    default:
      return state;
  }
}

const ResizableTextarea = ({
  setFocus = false,
  propsRow = 5,
  propsName,
  propsPlaceholder,
  propsValue,
  handleInputChange
}) => {
  const [state, updateState] = React.useReducer(reducer, {
    ...initialState,
    rows: propsRow
  });

  const handleChange = (event) => {
    const textareaLineHeight = 24;
    let currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    currentRows = currentRows > state.maxRows ? state.maxRows : currentRows;
    updateState({
      type: "UPDATE_TEXTAREA",
      payload: {
        rows: currentRows
      }
    });
    handleInputChange(event);
  };

  const inputTextAreaRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (inputTextAreaRef.current) {
      const textareaLineHeight = 24;
      let currentRows = ~~(
        inputTextAreaRef.current.scrollHeight / textareaLineHeight
      );
      currentRows = currentRows > state.maxRows ? state.maxRows : currentRows;
      updateState({
        type: "UPDATE_TEXTAREA",
        payload: {
          rows: currentRows
        }
      });
      if (setFocus) inputTextAreaRef.current.focus();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputTextArea
      rows={state.rows}
      name={propsName}
      placeholder={propsPlaceholder}
      value={propsValue}
      onChange={(e) => handleChange(e)}
      ref={inputTextAreaRef}
    />
  );
};

export default ResizableTextarea;
