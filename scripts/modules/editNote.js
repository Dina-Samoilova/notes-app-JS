'use strict'

import { getDateFromDescription } from './getDateList.js';
import { notification } from './notification.js';

const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const selector = document.querySelector('#select');
const closeBtn = document.querySelector('.form__close-btn');

const editNote = (title, description, category, row) => {
  titleInput.value = title;
  descriptionInput.value = description;
  selector.value = category;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    if (data.get('title').trim().length === 0) {
      notification('Please, write title for your note', titleInput);
    }

    if (data.get('description').trim().length === 0) {
      notification('Please, write description for your note', descriptionInput);
    }

    if (data.get('title').trim().length > 0
      && data.get('description').trim().length > 0) {
      row.cells[0].textContent = data.get('title').trim();
      row.cells[2].textContent = data.get('category');
      row.cells[3].textContent = data.get('description').trim();
      row.cells[4].textContent = getDateFromDescription(data.get('description'));
      // tr.innerHTML = `
      //   <td class="fw-bold">${data.get('title')}</td>
      //   <td>${createDate.toLocaleDateString('en-US', options)}</td>
      //   <td>${data.get('category')}</td>
      //   <td>${data.get('description')}</td>
      //   <td>${getDateFromDescription(data.get('description'))}</td>
      //   <td>
      //     <div class="btn-group" role="group" aria-label="Edit archived delete notes">
      //       <a
      //         href="#form"
      //         class="btn btn-light btn__edit"
      //         role="button"
      //       >
      //         <i class="fa fa-pencil" title="edit"></i>
      //       </a>
      //       <button type="button" class="btn btn-light btn__archived">
      //         <i class="fa fa-archive" title="archive/activate"></i>
      //       </button>
      //       <button type="button" class="btn btn-light btn__delete">
      //         <i class="fa fa-trash" title="delete"></i>
      //       </button>
      //     </div>
      //   </td>
      // `;

      titleInput.value = '';
      descriptionInput.value = '';

      closeBtn.click();
    }
  });
};

export { editNote };
