'use strict';

const getDateFromDescription = (text) => {
  const dateList = [];
  const textToArr = text.split(' ');

  for (const word of textToArr) {
    const wordWithoutSymbols = word.replace(/[,?!-]*/g, '');
    const str = Number(wordWithoutSymbols);
    const date = new Date(wordWithoutSymbols);

    if (isNaN(date)) {
      continue;
    } else {
      if (isNaN(str)) {
        dateList.push(wordWithoutSymbols);
      }
    }
  }

  return dateList.join(', ');
};

export { getDateFromDescription };
