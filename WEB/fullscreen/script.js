const title = document.title;

setInterval(() => {
  document.title = document.title == title ? '(9) New Messages!!!' : 'title';
}, 1000)