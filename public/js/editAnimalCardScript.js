const submitBtn = document.querySelector('.submit-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const nameForm = document.querySelector('.name-form');
const breedForm = document.querySelector('.breed-form');
const descForm = document.querySelector('.desc-form');
const photoBox = document.querySelector('.mini-photos');
const sucsess = document.querySelector('.text-success');
const editForm = document.querySelector('.editForm');
const addPhoto = document.querySelector('.add-photo');
const noButton = document.querySelector('.btn-success');
const removeButton = document.querySelector('.btn-danger');
const confirmBlock = document.querySelector('.delete-confirm-background');
const addPhotoForm = document.querySelector('#add-pic-form');

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

addPhotoForm.children[1].addEventListener('change', async (event) => {
  const formElement = document.querySelector("#add-pic-form");
  const id = event.target.parentNode.dataset.animal_id;
  const response = await fetch(`/animalcard/${id}/addpic`, {
    method: 'POST',
    body: new FormData(formElement),
  });
  const responseJson = await response.json();
  if (responseJson.status === 'created') {
    const newCard = document.createElement('div');
    newCard.dataset.div_picture_id = responseJson.id;
    newCard.classList.add('mini-photo-container');
    newCard.innerHTML = `<span class="close" data-picture_id='${responseJson.id}'></span>
    <img src='${responseJson.link}' class="img-fluid img-thumbnail rounded mx-auto d-block" alt="ups, no image :(">`;
    const newContainer = document.querySelector('.new-pic-container');
    photoBox.insertBefore(newCard, newContainer);
  }
});

editForm.addEventListener('click', (event) => {
  if (event.target === nameForm || event.target === breedForm || event.target === descForm) {
    sucsess.style.visibility = 'hidden';
  }
});

cancelBtn.addEventListener('click', (event) => {
  window.location = `/animalcard/${event.target.dataset.animal_id}`
});

submitBtn.addEventListener('click', async (event) => {
  const name = nameForm.value;
  const breed = breedForm.value;
  const description = descForm.value;
  const response = await fetch(`/animalcard/${event.target.dataset.animal_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, breed, description }),
  });
  const responseJson = await response.json();
  if (responseJson === 'updated') {
    sucsess.style.visibility = 'visible';
  }
});

if (noButton) {
  noButton.addEventListener('click', (event) => {
    confirmBlock.style.display = 'none';
  });
}

let crossId;
if (photoBox) {
  photoBox.addEventListener('click', (event) => {
    if (event.target.className !== 'close') {
      return;
    }
    confirmBlock.style.display = 'flex';
    crossId = event.target.dataset.picture_id;
  });
}

removeButton.addEventListener('click', async (event) => { 
  const b = document.querySelector(`div[data-div_picture_id*=\'${crossId}\']`);
  b.parentNode.removeChild(b);
  const response = await fetch(`/animalcard/${crossId}/pic`, {
    method: 'DELETE',
  });
  const responseJson = await response.json();
  confirmBlock.style.display = 'none';
});

addPhoto.addEventListener('click', (event) => {
  console.log('click');
});
