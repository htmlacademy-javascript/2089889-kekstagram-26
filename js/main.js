function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max > min || max === min) {
    return ('Error');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(2,112);

const maximumLength = (str,maxLength) => {
  if (str > maxLength) {
    return false;
  }
  return true;
};

maximumLength (34, 44);
