import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//constants
import { iconSizes, defaultIconSize } from "../constants/AppConstants";

export default class SingleControlMarkup extends PureComponent {
  render() {
    return (
      <div className="iconDiv" onClick={this.props.onClick}>
        <FontAwesomeIcon icon={this.props.icon} size={this.props.iconSize} />
      </div>
    );
  }
}

SingleControlMarkup.defaultProps = {
  icon: {},
  iconSize: defaultIconSize,
  onClick: function() {}
};

SingleControlMarkup.propTypes = {
  icon: PropTypes.object,
  iconSize: PropTypes.oneOf(iconSizes),
  onClick: PropTypes.func
};
