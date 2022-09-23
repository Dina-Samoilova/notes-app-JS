'use strict';

import { Category } from '../../data/Category.js';

const statTable = document.querySelector('.tabl__stat');
const statTableBody = statTable.querySelector('tbody');

const statTableFillRows = (array) => {
  const notesFromFile = [...array];
  
  for (let i = 0; i < Category.length; i++) {
    const tr = document.createElement('tr');
    tr.className = 'text-center';

    const activeNotes = notesFromFile.filter(note => note.category === Category[i]
      && note.active);
    const archivedNotes = notesFromFile.filter(note => note.category === Category[i]
      && !note.active);

    tr.insertAdjacentHTML('beforeend', `
      <td class="fw-bold">${Category[i]}</td>
      <td>${activeNotes.length}</td>
      <td>${archivedNotes.length}</td>
    `);

    statTableBody.append(tr);
  }
};

export { statTableFillRows };
