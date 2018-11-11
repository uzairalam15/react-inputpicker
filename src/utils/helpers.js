export function capitalizeFirstLetter(string) {
  return (
    string && string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  );
}

export function getContainerWidths(
  totalWidthOfContainer,
  controlsMap,
  props,
  state
) {
  let inputContainerWidth = totalWidthOfContainer;
  let controlsContainerWidth = 0;
  let activeNumberOfControls = 0;
  if (!props.disableControls) {
    controlsMap.forEach(control => {
      if (
        !(
          props[control.controlDisableProp] || state[control.controlDisableProp]
        )
      ) {
        inputContainerWidth -= props.controlWidth;
        controlsContainerWidth += props.controlWidth;
        activeNumberOfControls += 1;
      }
    });
  }
  return {
    inputContainerWidth,
    controlsContainerWidth,
    activeNumberOfControls
  };
}
