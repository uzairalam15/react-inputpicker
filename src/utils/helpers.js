export function capitalizeFirstLetter(string) {
  return (
    string && string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  );
}

export function getContainerWidths(totalWidthOfContainer, controlsMap, props) {
  let inputContainerWidth = totalWidthOfContainer;
  let controlsContainerWidth = 0;
  if (!props.disableControls) {
    controlsMap.forEach(control => {
      if (!props[control.controlDisableProp]) {
        inputContainerWidth -= props.controlWidth;
        controlsContainerWidth += props.controlWidth;
      }
    });
  }
  return {
    inputContainerWidth,
    controlsContainerWidth
  };
}
