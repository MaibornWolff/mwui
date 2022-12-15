const sizePxTransform = {
  name: 'size/px',
  type: 'value',
  matcher: prop => {
    // You can be more specific here if you only want 'em' units for font sizes
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing'].includes(prop.type);
  },
  transformer: prop => {
    if (typeof prop.original.value === 'number') {
      return `${parseFloat(prop.original.value)}px`;
    }

    if (typeof prop.original.value === 'string' && prop.original.value.includes('+')) {
      const clearedValue = prop.original.value.replaceAll('px', '').replaceAll('+', ' ');

      return `${clearedValue.split(' ').reduce((acc, cur) => {
        acc = Number(acc) + Number(cur);
        return acc;
      }, 0)}px`;
    }
    // You can also modify the value here if you want to convert pixels to ems
    return prop.original.value.includes('px') ? parseFloat(prop.original.value) : `${parseFloat(prop.original.value)}px`;
  },
};

module.exports = [sizePxTransform];
