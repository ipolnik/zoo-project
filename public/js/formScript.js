const menu2 = document.getElementById('menu-2');
const menu1 = document.getElementById('menu-1');

if (menu2) {
  const children = menu2.querySelectorAll('.nav-link');
  const { firstChild } = menu2;
  firstChild.className = 'nav-link';
  children[1].className = 'nav-link active';
  const { lastElementChild } = menu2;
  menu2.removeChild(lastElementChild);
}
if (menu1) {
  const children = menu1.querySelectorAll('.navbar-nav-btns');
  children[0].className = 'nav-link';
  children[1].className = 'nav-link active';
}