const editDelButtons = document.querySelector('.animal-cards-buttons');
const editButton = document.querySelector('.edit-btn');
const delButton = document.querySelector('.del-btn');
const noButton = document.querySelector('.btn-success');
const removeButton = document.querySelector('.btn-danger');
const confirmBlock = document.querySelector('.delete-confirm-background');
const galeryTable = document.querySelector('.gallery-table');
const imgBlock = document.querySelector('.big-pic-background');

const menu2 = document.getElementById('menu-2');
const menu1 = document.getElementById('menu-1');

if (menu2) {
  const children = menu2.querySelectorAll('.nav-link');
  const { firstChild } = menu2;
  firstChild.className = 'nav-link';
  children[1].className = 'nav-link active';
  const { lastElementChild } = menu2;
  // menu2.removeChild(lastElementChild);
}
if (menu1) {
  const children = menu1.querySelectorAll('.nav-link');
  children[0].className = 'nav-link';
  children[1].className = 'nav-link active';
}

if (delButton) {
  delButton.addEventListener('click', (event) => {
    confirmBlock.style.display = 'flex';
    editButton.disabled = true;
    delButton.disabled = true;
  });
}

if (noButton) {
  noButton.addEventListener('click', (event) => {
    confirmBlock.style.display = 'none';
    editButton.disabled = false;
    delButton.disabled = false;
  });
}

if (removeButton) {
  removeButton.addEventListener('click', async (event) => {
    try {
      const response = await fetch(`/animalcard/${event.target.dataset.animal_id}`, {
        method: 'DELETE',
      });
      const responseJson = await response.json();
      if (responseJson) {
        window.location = '/list';
      }
    } catch (error) {
      console.log(error);
    }
  });
}

if (galeryTable) {
  galeryTable.addEventListener('click', (event) => {
    if (!event.target.id) {
      return;
    }
    console.log(event.target.id);
    imgBlock.style.display = 'flex';
    const img = document.createElement('img');
    img.src = event.target.src;
    img.className = 'd-block w-80 img-view';
    const imgContent = document.querySelector('.image-container');
    imgContent.appendChild(img);
  });
}

imgBlock.addEventListener('click', (event) => {
  imgBlock.style.display = 'none';
  const imgContent = document.querySelector('.image-container');
  imgContent.removeChild(imgContent.firstChild);
});
