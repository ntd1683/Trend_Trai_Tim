$('ul li').on('click', function () {
  $(this).toggleClass('active');
});
let no_active = document.getElementsByClassName('no-active');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}