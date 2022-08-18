const editDelButtons = document.querySelector('.animal-cards-buttons');
const editButton = document.querySelector('.edit-btn');
const delButton = document.querySelector('.del-btn');
const noButton = document.querySelector('.btn-success');
const removeButton = document.querySelector('.btn-danger');
const confirmBlock = document.querySelector('.delete-confirm-background');

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
        window.location = '/animalcard/1';
      }
    } catch (error) {
      console.log('Error ==========================> ', error);
    }
  });
}
