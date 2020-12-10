'use strict';

const max = matrix => {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    const group = matrix[i];
    for (let j = 0; j < group.length; j++) {
      if (j === 0 && i === 0) max = group[0];
      else if (group[j] > max) max = group[j];
    }
  }
  return max;
};

module.exports = { max };
