'use strict';
import { getNotes } from './modules/api.js';
import { activeTableFillRows } from './modules/activeTableStartRender.js';
import { archivedTableFillRows } from './modules/archivedTableStartRender.js';
import { statTableFillRows } from './modules/statTableRender.js';

const date = new Date();
const date2 = new Date('9/14/2022');

const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};

console.log(new Date().toISOString());
console.log(date.toLocaleDateString('en-US', options));
console.log(date2);
console.log(isNaN(date2));

getNotes(activeTableFillRows);
getNotes(archivedTableFillRows);
getNotes(statTableFillRows);

