'use strict';

const zipUnzipNote = (rowToMove, category, table) => {
  const activeTable = document.querySelector('.tabl__active');
  const activeTableBody = activeTable.querySelector('tbody');
  const archivedTable = document.querySelector('.tabl__archived');
  const archivedTableBody = archivedTable.querySelector('tbody');
  const statTable = document.querySelector('.tabl__stat');

  if (table === 'active') {
    for (const row of statTable.rows) {
      if (row.cells[0].textContent === category) {
        row.cells[2].textContent = +row.cells[2].textContent + 1;
      }
    }

    rowToMove.cells[5].querySelector('a').setAttribute('hidden', '');

    archivedTableBody.append(rowToMove);
  }

  if (table === 'archived') {
    for (const row of statTable.rows) {
      if (row.cells[0].textContent === category) {
        row.cells[1].textContent = +row.cells[1].textContent + 1;
      }
    }

    rowToMove.cells[5].querySelector('a').removeAttribute('hidden');

    activeTableBody.append(rowToMove);
  }
};

export { zipUnzipNote };
