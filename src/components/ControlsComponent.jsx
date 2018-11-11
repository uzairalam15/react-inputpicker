import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";

//constants
import {
  controlsMap,
  totalWidthOfControls,
  defaultIconSize
} from "../constants/AppConstants";

//normalizers
import { controlPropsNormalizer } from "../utils/normalizers";

//components
import SingleControlMarkup from "./SingleControlMarkup.jsx";

export default class ControlsComponent extends PureComponent {
  getControlMap = () => {
    return controlPropsNormalizer(controlsMap, this.props);
  };

  getControlMarkup = (width, control, key) => {
    return (
      <div
        className={`col-xs-${width} center-xs controlDiv`}
        onClick={control.onClick}
        key={key}
      >
        <SingleControlMarkup {...control} />
      </div>
    );
  };

  getControls = () => {
    const widthPerControls =
      totalWidthOfControls / this.props.activeNumberOfControls;
    const controlMap = this.getControlMap();
    let controls = [];
    controlMap.forEach((control, index) => {
      if (!control.disable) {
        controls.push(this.getControlMarkup(widthPerControls, control, index));
      }
    });
    return controls;
  };

  getMarkup = () => {
    const { containerWidth, activeNumberOfControls } = this.props;
    if (activeNumberOfControls) {
      return (
        <div className={`col-xs-${containerWidth} noPadding`}>
          <div className="row full-height">{this.getControls()}</div>
        </div>
      );
    }
    return null;
  };

  render() {
    return this.getMarkup();
  }
}

ControlsComponent.defaultProps = {
  containerWidth: 4,
  disableRemove: false,
  disableDropdown: false,
  removeIcon: faTimes,
  dropdownIcon: faCaretDown,
  iconSize: defaultIconSize,
  onValueRemove: function() {},
  onDropdownClick: function() {},
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
  activeNumberOfControls: PropTypes.number
};
