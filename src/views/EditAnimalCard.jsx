const React = require('react');
const Layout = require('./Layout');

module.exports = function EditAnimalCard({
  animal, pictures, newUser,
}) {
  return (
    <Layout admin={newUser}>
      <link rel="stylesheet" href="/styles/animalCardEdit.css" />
      <script defer src="/js/editAnimalCardScript.js" />
      <div className="delete-confirm-background">
        <div className="delete-confirm alert alert-secondary">
          <p className="delete-confirm-text">Are you sure you want to delete this?</p>
          <div className="buttons-delete-confirm">
            <button type="button" class="btn btn-success">NO</button>
            <button type="button" class="btn btn-danger" data-animal_id={animal.id}>YES</button>
          </div>
        </div>
      </div>
      <h3>Редактор карты животного</h3>
      <div className="border border-primary p-2 border-opacity-25 rounded-top">
        <div className="mini-photos-box">
          <h5>Добавление / удаление фото</h5>
          <div className="mini-photos">
            {pictures.map((picture) => (
              <div key={picture.id} data-div_picture_id={picture.id} className="mini-photo-container">
                <span className="close" data-picture_id={picture.id} />
                <img src={`${picture?.picture_link}`} className="img-fluid img-thumbnail rounded mx-auto d-block" alt="ups, no image :(" />
              </div>
            ))}
            <div className="mini-photo-container new-pic-container">
              <form id="add-pic-form" method="post" action={`/addfile/${animal.id}`} data-animal_id={animal.id} className="img-fluid img-thumbnail rounded mx-auto d-block" enctype="multipart/form-data">
                <label for="add-photo" className="add-photo-label">
                  <div id="d24" />
                </label>
                <input id="add-photo" type="file" name="file" className="add-photo">
                </input>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="form-box border border-top-0 p-2 border-primary border-opacity-25 rounded-bottom">
        <h5>Редактирование информации о животном</h5>
        <form className="editForm" action="#" method="post">
          <div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Имя</label>
              <input className="form-control name-form" id="exampleFormControlInput1" placeholder="Name" value={animal.name} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Вид</label>
              <input className="form-control breed-form" id="exampleFormControlInput2" placeholder="Breed" value={animal.breed} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Описание</label>
              <textarea className="form-control desc-form" id="exampleFormControlTextarea1" rows={3} defaultValue="" value={animal.description} />
            </div>
            <p className="text-success">Изменения приняты!</p>
            <div className="button-group">
              <button className="btn btn-primary submit-btn" data-animal_id={animal.id} type="button">Подтвердить</button>
              <button className="btn btn-success cancel-btn" data-animal_id={animal.id} type="button">Вернуться</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
