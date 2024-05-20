const islandPopup = document.querySelector('.island-popup');

islandPopup.onclick = function() {
  if (islandPopup.classList.contains('active')) {
    islandPopup.classList.remove('active');
  } else {
    islandPopup.classList.add('active');
  }
}