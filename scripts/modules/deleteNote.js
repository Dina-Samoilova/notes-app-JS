'use strict';

const deleteNote = (category, index, table) => {
  const activeTable = document.querySelector('.tabl__active');
  const archivedTable = document.querySelector('.tabl__archived');
  const statTable = document.querySelector('.tabl__stat');

  if (table === 'active') {
    for (const row of statTable.rows) {
      if (row.cells[0].textContent === category) {
        row.cells[1].textContent -= 1;
      }
    }

    activeTable.deleteRow(index);
  }

  if (table === 'archived') {
    for (const row of statTable.rows) {
      if (row.cells[0].textContent === category) {
        row.cells[2].textContent -= 1;
      }
    }

    archivedTable.deleteRow(index);
  }
};

export { deleteNote };