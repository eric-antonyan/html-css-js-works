const allTabs = document.querySelectorAll('.tab');

allTabs.forEach((tab) => {
  tab.onclick = function() {
    let tabIndex = tab.getAttribute('data-tab-index');
    tab.parentElement.style.setProperty('--active-tab', tabIndex);
  }
})