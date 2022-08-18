const adminSet = document.querySelector('.admin');
const addAnimal = document.querySelector('.addAnimal');

adminSet.addEventListener('click', async (e) => {
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
addAnimal.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('DELETE');
  if (e.target.tagName === 'BUTTON' && e.target.className === 'btn-add-animal') {
    window.location.assign('/add');
  }
});
