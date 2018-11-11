import React from "react";
import ReactDOM from "react-dom";
import InputPickerComponent from "./components/InputPickerComponent.jsx";
import "flexboxgrid/dist/flexboxgrid.min.css";
import "./styles/picker.css";

class ReactInputPicker extends React.PureComponent {
  render() {
    return <InputPickerComponent {...this.props} />;
  }
}

ReactDOM.render(<ReactInputPicker />, document.getElementById("root"));
