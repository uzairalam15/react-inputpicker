import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import ControlsComponent from "./ControlsComponent.jsx";
import DropdownListComponent from "./DropdownListComponent.jsx";
import InputComponent from "./InputComponent.jsx";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

//constants
import {
  totalWidthOfContainer,
  filterOptions,
  controlWidth,
  controlsMap,
  testData
} from "../constants/AppConstants";

//helpers

import { getContainerWidths, filterFunction } from "../utils/helpers";

export default class InputPickerComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showDropdown: false,
      disableRemove: true,
      data: testData
    };
  }

  getDropdownControls = (controlsContainerWidth, activeNumberOfControls) => {
    const { showDropdown, disableRemove } = this.state;
    const disableRemoveState = this.props.disableRemove || disableRemove;
    return !this.props.disableControls ? (
      <ControlsComponent
        {...this.props}
        disableRemove={disableRemoveState}
        onValueRemove={this.onValueRemove}
        onDropdownClick={this.onDropdownClick}
        containerWidth={controlsContainerWidth}
        activeNumberOfControls={activeNumberOfControls}
        dropdownIcon={showDropdown ? faCaretUp : faCaretDown}
      />
    ) : null;
  };

  getDropdownList = () => {
    return !(this.props.disableControls || this.props.disableDropdown) ? (
      <DropdownListComponent
        data={this.state.data}
        show={this.state.showDropdown}
        onOptionClick={this.props.onOptionClick}
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

  onDropdownClick = e => {
    e.stopPropagation();
    if (this.props.onDropdownClick) {
      this.props.onDropdownClick();
    }
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  };

  onValueRemove = e => {
    e.stopPropagation();
    if (this.props.onValueRemove) {
      this.props.onValueRemove();
    }
    this.setState({ value: "", showDropdown: false, disableRemove: true });
  };

  checkFilterFunction = (value, data) => {
    const filterFunction = this.props.filterFunction;
    return value ? filterFunction(value, testData, filterOptions) : testData;
  };

  setValue = e => {
    const value = e.target.value;
    const data = this.checkFilterFunction(value, this.props.data);
    console.log("data", data);
    this.setState({
      value,
      data,
      showDropdown: !!value,
      disableRemove: !value
    });
  };

  render() {
    const {
      inputContainerWidth,
      controlsContainerWidth,
      activeNumberOfControls
    } = getContainerWidths(
      totalWidthOfContainer,
      controlsMap,
      this.props,
      this.state
    );

    return (
      <div className="react-picker-container">
        <div className="input-container">
          <div className="row">
            {this.getInputComponent(inputContainerWidth)}
            {this.getDropdownControls(
              controlsContainerWidth,
              activeNumberOfControls
            )}
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
  filterFunction: filterFunction,
  onOptionClick: function() {},
  data: []
};

InputPickerComponent.propTypes = {
  disableControls: PropTypes.bool, // Makes it normal input box without controls and dropdown if disable is set to true
  disableRemove: PropTypes.bool, // Remove the cross icons from input box
  disableDropdown: PropTypes.bool, // dropdown will not appear
  controlWidth: PropTypes.number, // Represents the column area input will take
  data: PropTypes.array, // data to show in a dropdown
  filterFunction: PropTypes.func, // filter function to override default filtering
  onOptionClick: PropTypes.func // trigger when option is selected
};
