function getFlagIcon(iconCode) {
  let lowercaseIconCode = iconCode.toLowerCase();
  // console.log(lowercaseIconCode);
  return `https://flagcdn.com/w320/${lowercaseIconCode}.png`;
}
