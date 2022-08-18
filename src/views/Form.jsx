const React = require('react');
const Layout = require('./Layout');

function Form(props) {
  return (
    <Layout>
      <div className="row">
        <h3 className="addAnimal">Добавление нового постояльца</h3>
        <div className="row-form">
          <form action="/add" method="post" encType="multipart/form-data" className="form-add-animals">
            <div className="form-group">
              <input type="text" name="name" placeholder="Как зовут нового постояльца?" />
            </div>
            <div className="form-group">
              <input type="text" name="breed" placeholder="Порода" />
            </div>
            <div className="form-group">
              <textarea name="description" className="form-control" rows="3" placeholder="Описание" />
            </div>
            <div className="input-form">
              <input type="file" name="photo" className="custom-file-input" id="input__file" multiple />
              <label htmlFor="input__file" className="input__file-button">
                <span className="input__file-icon-wrapper">
                  <img className="input__file-icon" src="./img/icons/upload.png" alt="Выбрать файл" />
                </span>
              </label>
            </div>
            <button type="submit" className="btn-animals">Добавить</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Form;
