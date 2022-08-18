const adminSet = document.querySelector('.admin');
const addAnimal = document.querySelector('.addAnimal');

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
  const children = menu1.querySelectorAll('.nav-link');
  children[0].className = 'nav-link';
  children[1].className = 'nav-link active';
}

adminSet?.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON' && e.target.className === 'btn btn-danger') {
    console.log('Нашли кнопку удаления');
    console.log(e.target);
    const { id } = e.target;
    console.log(id);
    const response = await fetch(`/list/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    console.log(result);
    if (result.delete === 'ok') {
      console.log(e.target.parentNode);
      adminSet.removeChild(e.target.parentNode);
    }
  } else if (e.target.tagName === 'BUTTON' && e.target.className === 'btn btn-success') {
    const idAnimal = e.target.id;

    window.location.assign(`/animalcard/${idAnimal}`);
  }
});
addAnimal?.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('DELETE');
  if (e.target.tagName === 'BUTTON' && e.target.className === 'btn-add-animal') {
    window.location.assign('/add');
  }
});
