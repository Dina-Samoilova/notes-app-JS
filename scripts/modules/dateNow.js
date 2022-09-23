'use strict';

const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};

const dateNow = (dateFromList) => {
  const date = new Date(dateFromList);

  return date.toLocaleDateString('en-US', options);
};

export { dateNow };
