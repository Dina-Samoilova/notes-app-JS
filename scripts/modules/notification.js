'use strict';

const notification = (description, element) => {
  const div = document.createElement('div');

  div.classList = 'alert';
  div.classList.add('alert-danger');
  div.setAttribute('role', 'alert');
  div.textContent = description;

  element.after(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
};

export { notification };
