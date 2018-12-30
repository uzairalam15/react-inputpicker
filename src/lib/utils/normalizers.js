export function controlPropsNormalizer(controls, props) {
  return controls.map(control => {
    const propObject = control.props;
    return Object.assign({}, control.props, {
      iconSize: props[control.iconSizeProp] || propObject.iconSize,
      icon: props[control.iconProp] || propObject.icon,
      onClick: props[control.onClickProp],
      disable: !!props[control.controlDisableProp]
    });
  });
}
