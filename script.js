'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const API_KEY = 'trnsl.1.1.20190704T212630Z.c409bb9604ae7251.df09dbd89372575b02298ed0970f8e45c749648b';

  input.addEventListener('input', () => {
    let text = input.value;
    const reg = /\w/ig;
    let lang = reg.test(text) ? 'en-ru' : 'ru-en';
    if (text !== '') {
      const server = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&lang=${lang}&text=${text}&options=1`;
      fetch(server, {
          method: 'POST',
          mode: 'cors'
        })
        .then(value => {
          if (value.status !== 200) {
            throw new Error('not 200');
          }
          return value.json();
        })
        .then(response => {
          output.textContent = response.text.toString();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      output.textContent = '';
    }

  });

});