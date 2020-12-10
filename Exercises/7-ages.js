'use strict';

const ages = persons => {
  const live = {};
  for (const person in persons) {
    const date = persons[person];
    live[person] = date['died'] - date['born'];
  }
  return live;
};

module.exports = { ages };
