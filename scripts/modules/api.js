'use strict';

const URL = '../../data/StartNotes.json';

const request = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          new Error(`${response.status} - ${response.statusText}`),
        );
      }

      return response.json();
    });
};

const getNotes = async (func) => {
  try {
    const notes = await request(URL);

    func(notes);
  } catch (error) {
    alert("Can't get notes");
  }
};

export { getNotes };
