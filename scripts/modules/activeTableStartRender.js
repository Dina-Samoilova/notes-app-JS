'use strict';

import { getDateFromDescription } from './getDateList.js';

const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};

const activeTable = document.querySelector('.tabl__active');
const activeTableBody = activeTable.querySelector('tbody');

const activeTableFillRows = (array) => {
  const notesFromFile = [...array];
  const activeNotes = notesFromFile.filter(note => note.active);

  for (const note of activeNotes) {
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

    activeTableBody.append(tr);
  }
};

export { activeTableFillRows };
