const brand = {
  pink: '#bf00ff',
  pinkDark: '#9700ca',
  blue: '#1100ff',
  blueDark: '#0f00db',
  cyan: '#00ecff',
  cyanDark: '#00c3d2'
};


const colors = {
  transparent: 'transparent', // 0
  black: '#000000', // 1
  white: '#ffffff', // 2
  headingColor: '#0f2137',
  textColor: '#5d646d', // 3
  labelColor: '#767676', // 4
  inactiveField: '#f2f2f2', // 5
  inactiveButton: '#b7dbdd', // 6
  inactiveIcon: '#EBEBEB', // 7
  // primary: '#eb4d4b', // 8
  // primaryHover: '#eb4d4b', // 9
  // secondary: '#ff5b60', // 10
  // secondaryHover: '#FF282F', // 11
  primary: brand.pink, // 8
  primaryHover: brand.pinkDark, // 9
  secondary: brand.blue, // 10
  secondaryHover: brand.blueDark, // 11
  yellow: '#fdb32a', // 12
  yellowHover: '#F29E02', // 13
  primaryBoxShadow: `0px 8px 20px -6px ${brand.pinkDark}`,
};

export default colors;
