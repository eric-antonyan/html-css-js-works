const e = (type, name, status = false) => {
  if (type === 'id') {
    type = '#';
  } else if ('class') {
    type = 'class';
  } else if ('tag') {
    type = '';
  }

  if (status === true) {
    return document.querySelector(`${type + name}`);
  }
}

const changeText = (element, newText) => {
  element.textContent = newText;
}

const setStyle = (element, styles) => {
  for (var property in styles) {
    return element.style[property] = styles[property];
  }
}

let chars = 'abcdefg1234567890';
let lenght = 6;

let color = '#';

const generateRandomColor = () => {
  color = "#";

  for (let i = 0; i < lenght; i++) {
    color += chars.charAt(Math.floor(Math.random() * lenght));
  }

  setStyle(e('id', 'prevColor', true), {backgroundColor: color});
  changeText(e('id', 'hex-code', true), color)
}

const generate = () => generateRandomColor();