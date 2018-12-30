import React from "react";
import ReactDOM from "react-dom";
import InputPickerComponent from "./lib";

class ReactInputPicker extends React.PureComponent {
  render() {
    return <InputPickerComponent {...this.props} />;
  }
}

ReactDOM.render(<ReactInputPicker />, document.getElementById("root"));
