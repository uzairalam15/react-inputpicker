import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class InputComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.input = null;
  }

  render() {
    const { inputContainerWidth, onChange, onKeyDown, value } = this.props;
    return (
      <div className={`col-xs-${inputContainerWidth}`}>
        <input
          type="text"
          ref={e => (this.input = e)}
          placeholder="Search.."
          id="myInput"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  }
}

InputComponent.defaultProps = {
  inputContainerWidth: 8,
  onChange: function() {},
  onKeyDown: function() {}
};

InputComponent.propTypes = {
  inputContainerWidth: PropTypes.number,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

export default InputComponent;
