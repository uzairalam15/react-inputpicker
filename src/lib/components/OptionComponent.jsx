import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class OptionComponent extends PureComponent {
  onClick = () => {
    this.props.onClick(this.props.option);
  };
  render() {
    const { option, selected } = this.props;
    const selectedClass = selected ? "selected" : "";
    return (
      <div className={`option ${selectedClass}`} onClick={this.onClick}>
        {option && option.label}
      </div>
    );
  }
}

OptionComponent.defaultProps = {
  option: {},
  selected: false,
  onClick: function() {}
};

OptionComponent.propTypes = {
  option: PropTypes.object,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default OptionComponent;
