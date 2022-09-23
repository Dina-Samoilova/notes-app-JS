'use strict';
import { getNotes } from './modules/api.js';
import { activeTableFillRows } from './modules/activeTableStartRender.js';
import { archivedTableFillRows } from './modules/archivedTableStartRender.js';
import { statTableFillRows } from './modules/statTableRender.js';
import { deleteNote } from './modules/deleteNote.js';
import { zipUnzipNote } from './modules/zipUnzipNote.js';
import { createNote } from './modules/createNote.js';
import { editNote } from './modules/editNote.js';

getNotes(activeTableFillRows);
getNotes(archivedTableFillRows);
getNotes(statTableFillRows);

document.addEventListener('click', (event) => {
  const item = event.target;

  const activeTable = item.closest('.tabl__active');
  const archivedTable = item.closest('.tabl__archived');
  const btnDel = item.closest('.btn__delete');
  const btnArchived = item.closest('.btn__archived');
  const btnEdit = item.closest('.btn__edit');
  const btnCreate = item.closest('.btn__create');

// Click On Delete Button In One Of Table Active Notes Or Archived Table
  if (btnDel && activeTable) {
    const rowIndex = item.closest('tr').rowIndex;
    const category = item.closest('tr').cells[2].textContent;

    if (window.confirm('Are you sure you want to delete')) {
      deleteNote(category, rowIndex, 'active');
    }
  }

  if (btnDel && archivedTable) {
    const rowIndex = item.closest('tr').rowIndex;
    const category = item.closest('tr').cells[2].textContent;

    if (window.confirm('Are you sure you want to delete')) {
      deleteNote(category, rowIndex, 'archived');
    }
  }

// Click On Archived Button In One Of Table Active Notes Or Archived Table
  if (btnArchived && activeTable) {
    const row = item.closest('tr');
    const rowIndex = item.closest('tr').rowIndex;
    const category = item.closest('tr').cells[2].textContent;

    deleteNote(category, rowIndex, 'active');
    zipUnzipNote(row, category, 'active');
  }

  if (btnArchived && archivedTable) {
    const row = item.closest('tr');
    const rowIndex = item.closest('tr').rowIndex;
    const category = item.closest('tr').cells[2].textContent;

    deleteNote(category, rowIndex, 'archived');
    zipUnzipNote(row, category, 'archived');
  }

// Click On Edit Button In One Of Table Active Notes Or Archived Table
  if (btnEdit) {
    const rowIndex = item.closest('tr').rowIndex;
    const category = item.closest('tr').cells[2].textContent;

    editNote(rowIndex, category);
  }

// Click On Create Note Button Uder Active Table
  if (btnCreate) {
    createNote();
  }
});
