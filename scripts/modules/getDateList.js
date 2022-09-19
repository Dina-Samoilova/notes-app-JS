'use strict';

const getDateFromDescription = (text) => {
  const dateList = [];
  const textToArr = text.split(' ');

  for (const word of textToArr) {
    const wordWithoutSymbols = word.replace(/[.,?!-]*/g,'');
    const date = new Date(word);

    if (isNaN(date)) {
      continue;
    } else {
      dateList.push(wordWithoutSymbols);
    }
  }

  return dateList.join(', ');
};

export { getDateFromDescription };
