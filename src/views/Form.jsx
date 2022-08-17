const React = require('react');
const Layout = require('./Layout');

function Form(props) {
  return (
    <Layout>
      <form action="/add" method="post" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Имя животного</label>
          <input type="text" name="name" id="exampleFormControlInput1" placeholder="Васёк" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Порода</label>
          <input type="text" name="breed" id="exampleFormControlInput1" placeholder="Ослик" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Введите описание</label>
          <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" />
        </div>
        <input type="file" name="photo" className="custom-file-input" multiple />
        <button type="submit">Отправить</button>
      </form>

    </Layout>
  );
}

module.exports = Form;
