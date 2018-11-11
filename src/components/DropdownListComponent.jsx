import React, { PureComponent } from "react";
import PropTypes from "prop-types";

//components
import OptionComponent from "./OptionComponent";

class DropdownListComponent extends PureComponent {
  getOptions = () => {
    const { data, onOptionClick } = this.props;
    return data.map((option, key) => {
      return (
        <OptionComponent option={option} onClick={onOptionClick} key={key} />
      );
    });
  };

  render() {
    const showClass = this.props.show ? "show" : "";
    return (
      <div id="myDropdown" className={`dropdown-content ${showClass}`}>
        {this.getOptions()}
      </div>
    );
  }
}

DropdownListComponent.defaultProps = {
  data: [],
  onOptionClick: function() {}
};

DropdownListComponent.propTypes = {
  data: PropTypes.array,
  onOptionClick: PropTypes.func
};

export default DropdownListComponent;
