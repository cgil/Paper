import numeral from 'numeral';

var shortNumber = (number) => {
  if (number > -1000 && number < 1000) {
    return numeral(number).format('0a');
  }
  return numeral(number).format('0.0a');
};

export {
  shortNumber
};