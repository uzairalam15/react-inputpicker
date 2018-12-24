import React, { PureComponent } from "react";
import PropTypes from "prop-types";

//components
import OptionComponent from "./OptionComponent";

//helpers
import { getIndexOfKey } from "../utils/helpers";

class DropdownListComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null
    };
    this.totalResultLength = 0;
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeys);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeys);
  }

  handleKeys = e => {
    if (e.keyCode === 40) {
      // when arrow down is pressed
      let counter = this.state.selectedIndex || 0;
      counter = counter < this.totalResultLength - 1 ? ++counter : 0;
      this.selectedOptionOnIndex(counter);
    } else if (e.keyCode === 38) {
      // when arrow up is pressed
      let counter = this.state.selectedIndex || 0;
      counter =
        counter > 0 && counter < this.totalResultLength
          ? --counter
          : this.totalResultLength - 1;
      this.selectedOptionOnIndex(counter);
    } else if (e.keyCode === 13) {
      // when enter is pressed
      if (this.state.selectedIndex !== null) {
        this.props.onOptionSelect(this.props.data[this.state.selectedIndex]);
      }
    }
  };

  selectedOptionOnIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  onOptionSelect = option => {
    this.props.onOptionSelect(option);
    const index = getIndexOfKey(this.props.data, "value", option.value);
    if (index !== -1) this.selectedOptionOnIndex(index);
  };

  getOptions = () => {
    const { data } = this.props;
    const selectedIndex = this.state.selectedIndex;
    return data.map((option, key) => {
      return (
        <OptionComponent
          option={option}
          onClick={this.onOptionSelect}
          selected={selectedIndex === key}
          key={key}
        />
      );
    });
  };

  render() {
    this.totalResultLength = this.props.data.length;
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
  onOptionSelect: function() {}
};

DropdownListComponent.propTypes = {
  data: PropTypes.array,
  onOptionSelect: PropTypes.func
};

export default DropdownListComponent;
