export const iconSizes = ["xs", "sm", "md", "lg"];

export const defaultIconSize = "md";

export const totalWidthOfControls = 12;

export const controlsMap = [
  {
    name: "cross",
    controlDisableProp: "disableRemove",
    iconSizeProp: "iconSize",
    iconProp: "removeIcon",
    onClickProp: "onValueRemove"
  },
  {
    name: "dropdown",
    controlDisableProp: "disableDropdown",
    iconSizeProp: "iconSize",
    iconProp: "dropdownIcon",
    onClickProp: "onDropdownClick"
  }
];
