const body = document.body;

setInterval(() => {
    let wsH = window.innerHeight + 'px';
    body.style.setProperty('--ws-h',  wsH);
}, 0)