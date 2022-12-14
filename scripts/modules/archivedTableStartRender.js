'use strict';

import { getDateFromDescription } from './getDateList.js';

const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};

const archivedTable = document.querySelector('.tabl__archived');
const archivedTableBody = archivedTable.querySelector('tbody');

const archivedTableFillRows = (array) => {
  const notesFromFile = [...array];
  const archivedNotes = notesFromFile.filter(note => !note.active);

  for (const note of archivedNotes) {
    const tr = document.createElement('tr');
    const createDate = new Date(note.createdAt);

    tr.insertAdjacentHTML('beforeend', `
      <td>${note.title}</td>
      <td>${createDate.toLocaleDateString('en-US', options)}</td>
      <td>${note.category}</td>
      <td>${note.description}</td>
      <td>${getDateFromDescription(note.description)}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Edit archived delete notes">
          <button type="button" class="btn btn-light btn__edit">
            <i class="fa fa-pencil"></i>
          </button>
          <button type="button" class="btn btn-light btn__archived">
            <i class="fa fa-archive"></i>
          </button>
          <button type="button" class="btn btn-light btn__delete">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </td>
    `);

    archivedTableBody.append(tr);
  }
};

export { archivedTableFillRows };
