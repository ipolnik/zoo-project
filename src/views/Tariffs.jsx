const React = require('react');
const Layout = require('./Layout');

function Tariffs({ prices, admin }) {
  return (
    <Layout admin={admin}>
   <link rel="stylesheet" href="/styles/style.css" />
        { admin ? (
          <>
           <div id="tigerimg">
      <img src="/img/tiger.gif" alt="tiger" id="tiger"/>
    </div>
    <br />
    <h3 className="card-title-tariffs">Наши расценки:</h3>
    <br />
    <div id="divfortable">
    <table class="table" id="tableprice">
  <thead id="headercolor">
    <tr>
      <th scope="col">Доступные тарифы:</th>
      <th scope="col">Взрослые</th>
      <th scope="col">Дети</th>
      <th scope="col">Пенсионеры</th>
    </tr>
  </thead >
  {prices?.map((el) => 
  <tbody>
    <tr class="table-success" key={el.id}>
      <th scope="row">{el.price_name}</th>
      <td>{el.option1} .руб</td>
      <td>{el.option2} .руб</td>
      <td>{el.option3} .руб</td>
    </tr>
    </tbody>)}
</table>
</div>
      <br />
       <h4 className="card-title-tariffs">Добавить новый тариф</h4>
       <form className="formTarAdd" action = "/tariffs" method = "POST">
        <div className="tariffsId" name="tarid">
        <div className="card-body" >
        
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Название нового тарифа: </li>
          <input id="tariffnew" className="form-control" type="text" placeholder="Название" />
          <li className="list-group-item">Взрослые: </li>
          <input id="adultsnew" className="form-control" type="text" placeholder="Цена для взрослого" />

          <li className="list-group-item">Дети: </li>
          <input id="kidsnew" className="form-control" type="text" placeholder="Цена для ребенка" />

          <li className="list-group-item">Пенсионеры: </li>
          <input id="eldersnew" className="form-control" type="text" placeholder="Цена для пенсионера" />

        </ul>
        <div className="card-body">
        <button type="button" className="btn btn-success" >Добавить</button>

        </div>
      </div>
      </form>
      <h4 className="card-title-tariffs">Изменить существующий тариф</h4>
       <div className="mainDivTar">
          {prices?.map((el) => 
          <form className="formTariffs" action = "/tariffs" method = "PUT" id={el.id} key={el.id}>
        <div className="tariffsId" name="tarid">
        <div className="card-body">
         
          <p className="card-text-title">{el.price_name}:</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Взрослые: {el.option1} руб.</li>
          <input id={`adults${el.id}`} className="form-control" type="text" placeholder="Изменить для взрослого" />

          <li className="list-group-item">Дети: {el.option2} руб.</li>
          <input id={`kids${el.id}`} className="form-control" type="text" placeholder="Изменить для ребенка" />

          <li className="list-group-item">Пенсионеры: {el.option3} руб.</li>
          <input id={`elders${el.id}`} className="form-control" type="text" placeholder="Изменить для пенсионера" />
        </ul>
        <div className="card-body">
        <div id="bothbuttons"><button type="button" className="btn btn-primary" id={el.id}>Изменить</button>
        
        <button type="button" className="btn btn-danger deletebutton" id={el.id}>Удалить</button>
        </div>
        </div>
      </div>
      </form>
    )}
    </div>
    </>
        ) : (
          <>
    <div id="tigerimg">
      <img src="/img/tiger.gif" alt="tiger" id="tiger"/>
    </div>
    <br />
    <h3 className="card-title-tariffs">Наши расценки:</h3>
    <br />
    <div id="divfortable">
    <table class="table" id="tableprice">
  <thead id="headercolor">
    <tr>
      <th scope="col">Доступные тарифы:</th>
      <th scope="col">Взрослые</th>
      <th scope="col">Дети</th>
      <th scope="col">Пенсионеры</th>
    </tr>
  </thead >
  {prices?.map((el) => 
  <tbody>
    <tr class="table-success" key={el.id}>
      <th scope="row">{el.price_name}</th>
      <td>{el.option1} .руб</td>
      <td>{el.option2} .руб</td>
      <td>{el.option3} .руб</td>
    </tr>
    </tbody>)}
</table>
</div>
  </>
)}
    <script src="/js/tariffsClient.js"></script>
    </Layout>
  );
}

module.exports = Tariffs;