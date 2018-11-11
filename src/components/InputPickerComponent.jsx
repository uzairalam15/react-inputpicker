import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import ControlsComponent from "./ControlsComponent.jsx";
import DropdownListComponent from "./DropdownListComponent.jsx";
import InputComponent from "./InputComponent.jsx";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

//constants
import {
  totalWidthOfContainer,
  controlWidth,
  controlsMap,
  testData
} from "../constants/AppConstants";

//helpers

import { getContainerWidths } from "../utils/helpers";

export default class InputPickerComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showDropdown: false,
      data: testData
    };
  }

  getDropdownControls = controlsContainerWidth => {
    const { showDropdown } = this.state;
    return !this.props.disableControls ? (
      <ControlsComponent
        {...this.props}
        dropdownIcon={showDropdown ? faCaretUp : faCaretDown}
        onValueRemove={this.onValueRemove}
        onDropdownClick={this.onDropdownClick}
        containerWidth={controlsContainerWidth}
      />
    ) : null;
  };

  getDropdownList = () => {
    return !(this.props.disableControls || this.props.disableDropdown) ? (
      <DropdownListComponent
        data={this.state.data}
        show={this.state.showDropdown}
        onOptionClick={option => {
          console.log(option);
        }}
      />
    ) : null;
  };

  getInputComponent = inputContainerWidth => {
    const { value } = this.state;
    return (
      <InputComponent
        value={value}
        onChange={this.setValue}
        onKeyDown={this.setValue}
        inputContainerWidth={inputContainerWidth}
      />
    );
  };

  onDropdownClick = () => {
    if (this.props.onDropdownClick) {
      this.props.onDropdownClick();
    }
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  };

  onValueRemove = () => {
    if (this.props.onValueRemove) {
      this.props.onValueRemove();
    }
    this.setState({ value: "", showDropdown: false });
  };

  setValue = e => {
    const value = e.target.value;
    this.setState({
      value,
      showDropdown: !!value
    });
  };

  render() {
    const { inputContainerWidth, controlsContainerWidth } = getContainerWidths(
      totalWidthOfContainer,
      controlsMap,
      this.props
    );
    return (
      <div className="react-picker-container">
        <div className="input-container">
          <div className="row">
            {this.getInputComponent(inputContainerWidth)}
            {this.getDropdownControls(controlsContainerWidth)}
          </div>
        </div>
        {this.getDropdownList()}
      </div>
    );
  }
}

InputPickerComponent.defaultProps = {
  disableControls: false,
  disableRemove: false,
  disableDropdown: false,
  controlWidth: controlWidth,
  data: []
};

InputPickerComponent.propTypes = {
  disableControls: PropTypes.bool,
  disableRemove: PropTypes.bool,
  disableDropdown: PropTypes.bool,
  controlWidth: PropTypes.number,
  data: PropTypes.array
};
