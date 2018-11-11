import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";

//constants
import { controlsMap, totalWidthOfControls } from "../constants/AppConstants";

//normalizers
import { controlPropsNormalizer } from "../utils/normalizers";

//components
import SingleControlMarkup from "./SingleControlMarkup.jsx";

export default class ControlsComponent extends PureComponent {
  getControlMap = () => {
    return controlPropsNormalizer(controlsMap, this.props);
  };

  getControlMarkup = (width, control) => {
    return (
      <div class={`col-xs-${width} center-xs`}>
        <SingleControlMarkup {...control} />
      </div>
    );
  };

  getControls = () => {
    const widthPerControls =
      totalWidthOfControls / this.props.activeNumberOfControls;
    const controlMap = this.getControlMap();
    let controls = [];
    controlMap.forEach(control => {
      if (!control.disable) {
        controls.push(this.getControlMarkup(widthPerControls, control));
      }
    });
    return controls;
  };

  render() {
    const { containerWidth } = this.props;
    return (
      <div class={`col-xs-${containerWidth}`}>
        <div className="row full-height">{this.getControls()}</div>
      </div>
    );
  }
}

ControlsComponent.defaultProps = {
  containerWidth: 4,
  disableRemove: false,
  disableDropdown: false,
  removeIcon: faTimes,
  dropdownIcon: faCaretDown,
  iconSize: "md",
  activeNumberOfControls: controlsMap.length
};

ControlsComponent.propTypes = {
  containerWidth: PropTypes.number,
  disableRemove: PropTypes.bool,
  disableDropdown: PropTypes.bool,
  removeIcon: PropTypes.object,
  dropdownIcon: PropTypes.object,
  onValueRemove: PropTypes.func,
  onDropdownClick: PropTypes.func,
  iconSize: PropTypes.string,
  activeNumberOfControls: PropTypes.activeNumberOfControls
};
