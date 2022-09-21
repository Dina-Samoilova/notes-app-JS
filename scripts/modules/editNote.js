'use strict'

import { getDateFromDescription } from './getDateList.js';

const editNote = (index, category) => {
  const activeTable = document.querySelector('.tabl__active');
  const editForm = document.querySelector('.edit-form');
  const editTitle = editForm.querySelector('#edit-title');
  const editDescription = editForm.querySelector('#edit-description');
  const editCategory = editForm.querySelector('#edit-select');
  const closeBtn = document.querySelector('.edit-form__close-btn');
  const oldSubmitEditBtn = editForm.querySelector('.edit__submit')
  const recordEditBtn = oldSubmitEditBtn.cloneNode(true);

  oldSubmitEditBtn.parentNode.replaceChild(recordEditBtn, oldSubmitEditBtn);

  editTitle.value = activeTable.rows[index].cells[0].textContent;
  editDescription.value = activeTable.rows[index].cells[3].textContent;
  editCategory.value = category;

  recordEditBtn.addEventListener('click', (event) => {
    event.preventDefault();

    activeTable.rows[index].cells[0].textContent = editTitle.value;
    activeTable.rows[index].cells[3].textContent = editDescription.value;
    activeTable.rows[index].cells[2].textContent = editCategory.value;
    activeTable.rows[index].cells[4].textContent = getDateFromDescription(editDescription.value);

    const statTable = document.querySelector('.tabl__stat');
    const statTableBody = statTable.querySelector('tbody');

    for (const row of statTableBody.rows) {
      row.cells[1].textContent = [...activeTable.rows].filter(tblRow =>
        tblRow.cells[2].textContent === row.cells[0].textContent).length;
    }

    closeBtn.click();
  });
};

export { editNote };
