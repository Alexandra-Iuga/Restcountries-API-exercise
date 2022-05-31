function getPopulationNumber(number) {
  let formatedNumber = new Intl.NumberFormat("de-DE").format(number);
  return formatedNumber;
}
