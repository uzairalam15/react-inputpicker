export function capitalizeFirstLetter(string) {
  return (
    string && string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  );
}

export function filterFunction(value, data = [], options = {}) {
  return data.filter(item => {
    var val = item.value || "";
    if (options.trim) val = val.trim();
    if (options.exactMatch) return val === value;
    if (options.strictMatch) return val.includes(value);
    return val.toLowerCase().includes(value.toLowerCase());
  });
}

export function getIndexOfKey(array, key = "id", value) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
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
