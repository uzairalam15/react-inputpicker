import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class OptionComponent extends PureComponent {
  onClick = () => {
    this.props.onClick(this.props.option);
  };
  render() {
    const { option } = this.props;
    return (
      <div className="option" onClick={this.onClick}>
        {option && option.label}
      </div>
    );
  }
}

OptionComponent.defaultProps = {
  option: {},
  onClick: function() {}
};

OptionComponent.propTypes = {
  option: PropTypes.object,
  onClick: PropTypes.func
};

export default OptionComponent;
