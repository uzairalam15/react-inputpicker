import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import ControlsComponent from "./ControlsComponent.jsx";

export default class InputPickerComponent extends PureComponent {
  getDropdownControls = () => {
    return !this.props.disableControls ? <ControlsComponent /> : null;
  };

  render() {
    return (
      <div className="react-picker-container">
        <div class="row">
          <div class="col-xs-8">
            <input
              type="text"
              ref={e => (this.input = e)}
              placeholder="Search.."
              id="myInput"
            />
          </div>
          {this.getDropdownControls()}
        </div>
      </div>
    );
  }
}

InputPickerComponent.defaultProps = {
  disableControls: false
};

InputPickerComponent.propTypes = {
  disableControls: PropTypes.bool
};
