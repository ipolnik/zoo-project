const React = require('react');
const Layout = require('./Layout');

function Tariffs({ prices }) {
  return (
    <Layout >
   <link rel="stylesheet" href="/styles/style.css" />
   <div id="tigerimg">
      <img src="/img/tiger.gif" alt="tiger" id="tiger"/>
    </div>
    <br />
    <h3 className="card-title-tariffs">Купить Билеты:</h3>
    <br />
    <div id="divfortable">
    <table class="table" id="tableprice">
  <thead id="headercolor">
    <tr>
      <th scope="col">Тариф:</th>
      <th scope="col">Билет</th>
      <th scope="col">Цена</th>
      <th scope="col">Колличество</th>
    </tr>
  </thead >

  <tbody>
    <tr class="table-success" >
      <th scope="row">Праздничный</th>
      <td>Взрослый</td>
      <td>20</td>
      <td><div id="quantity">
        <button class="plus-btn" type="button" name="button">
                    <img src="/img/plus.svg" />
        </button>
        <input type="text" name="ticket[1626]" value="0" class="quantity_item" readonly="readonly"></input>
        <button class="minus-btn" type="button" name="button">
                    <img src="/img/minus.svg" />
        </button>
            </div>
        </td>
    </tr>
    <tr class="table-success" >
      <th scope="row">Праздничный</th>
      <td>Детский</td>
      <td>20</td>
      <td><div id="quantity">
        <button class="plus-btn" type="button" name="button">
                    <img src="/img/plus.svg" />
        </button>
        <input type="text" name="ticket[1626]" value="0" class="quantity_item" readonly="readonly"></input>
        <button class="minus-btn" type="button" name="button">
                    <img src="/img/minus.svg" />
        </button>
            </div></td>
    </tr>
    <tr class="table-success" >
      <th scope="row">Праздничный</th>
      <td>Пенсионный</td>
      <td>20</td>
      <td><div id="quantity">
        <button class="plus-btn" type="button" name="button">
                    <img src="/img/plus.svg" />
        </button>
        <input type="text" name="ticket[1626]" value="0" class="quantity_item" readonly="readonly"></input>
        <button class="minus-btn" type="button" name="button">
                    <img src="/img/minus.svg" />
        </button>
            </div></td>
    </tr>
    <tr class="table-danger" >
      <th scope="row">Итого</th>
      <td></td>
      <td></td>
      <td>К оплате 1000 руб. <button type="button" className="btn btn-success" >Купить</button></td>
    </tr>
    </tbody>
</table>
</div>
   
    <script src="/js/tariffsClient.js"></script>
    </Layout>
  );
}

module.exports = Tariffs;