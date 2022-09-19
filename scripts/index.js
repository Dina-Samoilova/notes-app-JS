'use strict';
import { getNotes } from './modules/api.js';
import { activeTableFillRows } from './modules/activeTableStartRender.js';
import { archivedTableFillRows } from './modules/archivedTableStartRender.js';
import { statTableFillRows } from './modules/statTableRender.js';
import { deleteNote } from './modules/deleteNote.js';
import { zipUnzipNote } from './modules/zipUnzipNote.js';

getNotes(activeTableFillRows);
getNotes(archivedTableFillRows);
getNotes(statTableFillRows);

document.addEventListener('click', (event) => {
  const item = event.target;

  if (item.closest('.btn__delete') && item.closest('.tabl__active')) {
    const rowIndex = item.parentElement.parentElement.parentElement.parentElement.rowIndex;
    const category = item.parentElement.parentElement.parentElement.parentElement.cells[2].textContent;

    deleteNote(category, rowIndex, 'active');
  }

  if (item.closest('.btn__delete') && item.closest('.tabl__archived')) {
    const rowIndex = item.parentElement.parentElement.parentElement.parentElement.rowIndex;
    const category = item.parentElement.parentElement.parentElement.parentElement.cells[2].textContent;

    deleteNote(category, rowIndex, 'archived');
  }

  if (item.closest('.btn__archived')) {
    const row = item.parentElement.parentElement.parentElement.parentElement;
    const rowIndex = item.parentElement.parentElement.parentElement.parentElement.rowIndex;
    const category = item.parentElement.parentElement.parentElement.parentElement.cells[2].textContent;

    deleteNote(category, rowIndex, 'active');
    zipUnzipNote(row, category, 'active');
  }

  if (item.closest('.btn__activate')) {
    const row = item.parentElement.parentElement.parentElement.parentElement;
    const rowIndex = item.parentElement.parentElement.parentElement.parentElement.rowIndex;
    const category = item.parentElement.parentElement.parentElement.parentElement.cells[2].textContent;

    deleteNote(category, rowIndex, 'archived');
    zipUnzipNote(row, category, 'archived');
  }
});
