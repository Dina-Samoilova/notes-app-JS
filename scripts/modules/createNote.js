'use strict'

import { getDateFromDescription } from './getDateList.js';
import { notification } from './notification.js';

const activeTable = document.querySelector('.tabl__active');
const activeTableBody = activeTable.querySelector('tbody');
const statTable = document.querySelector('.tabl__stat');
const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const closeBtn = document.querySelector('.form__close-btn');

const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};

const createNote = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const tr = document.createElement('tr');
    const createDate = new Date();

    if (data.get('title').trim().length === 0) {
      notification('Please, write title for your note', titleInput);
    }

    if (data.get('description').trim().length === 0) {
      notification('Please, write description for your note', descriptionInput);
    }

    if (data.get('title').trim().length > 0 && data.get('description').trim().length > 0) {
      tr.innerHTML = `
        <td class="fw-bold">${data.get('title')}</td>
        <td>${createDate.toLocaleDateString('en-US', options)}</td>
        <td>${data.get('category')}</td>
        <td>${data.get('description')}</td>
        <td>${getDateFromDescription(data.get('description'))}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Edit archived delete notes">
            <a
              href="#edit"
              class="btn btn-light btn__edit"
              role="button"
            >
              <i class="fa fa-pencil" title="edit"></i>
            </a>
            <button type="button" class="btn btn-light btn__archived">
              <i class="fa fa-archive" title="archive/activate"></i>
            </button>
            <button type="button" class="btn btn-light btn__delete">
              <i class="fa fa-trash" title="delete"></i>
            </button>
          </div>
        </td>
      `;

      activeTableBody.append(tr);

      for (const row of statTable.rows) {
        if (row.cells[0].textContent === data.get('category')) {
          row.cells[1].textContent = +row.cells[1].textContent + 1;
        }
      }

      titleInput.value = '';
      descriptionInput.value = '';

      closeBtn.click();
    }
  });
};

export { createNote };
