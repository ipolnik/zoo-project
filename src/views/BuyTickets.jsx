const React = require('react');
const Layout = require('./Layout');

function Tariffs({ prices }) {
  return (
    <Layout >
   <link rel="stylesheet" href="/styles/style.css" />
   <div id="tigerimg">
      <img src="/img/panda.gif" alt="tiger" id="tiger"/>
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
      <th scope="row">{prices.price_name}</th>
      <td>Взрослый</td>
      <td><span class="price_item1"> {prices.option1}</span> руб.</td>
      <td><div id="quantity">
        <button class="minus-btn" type="button" name="button" data-age="adult">
                    -
        </button>
        <input type="text" name="ticket1" value="0" class="quantity_item_adult" readonly="readonly"></input>
        <button class="plus-btn" type="button" name="button" data-age="adult">
                    +
        </button>
            </div>
        </td>
    </tr>
    <tr class="table-success" >
      <th scope="row"></th>
      <td>Детский</td>
      <td><span class="price_item2">{prices.option2}</span> руб.</td>
      <td><div id="quantity">
        <button class="minus-btn" type="button" name="button" data-age="kids">
                    -
        </button>
        <input type="text" name="ticket2" value="0" class="quantity_item_kid" readonly="readonly"></input>
        <button class="plus-btn" type="button" name="button" data-age="kid">
                    +
        </button>
            </div></td>
    </tr>
    <tr class="table-success" >
      <th scope="row"></th>
      <td>Пенсионный</td>
      <td><span class="price_item3"> {prices.option3}</span> руб.</td>
      <td><div id="quantity">
        <button class="minus-btn" type="button" name="button" data-age="elder">
                    -
        </button>
        <input type="text" name="ticket3" value="0" class="quantity_item_elder" readonly="readonly"></input>
        <button class="plus-btn" type="button" name="button" data-age="elder">
                   +
        </button>
            </div></td>
    </tr>
    <tr class="table-danger" >
      <th scope="row">Итого</th>
      <td></td>
      <td></td>
      <td id="topay"><b>К оплате:</b> <span id="total_sum">0</span> руб.</td>
    </tr>
    </tbody>
    

</table>
</div>
<div className="emailinput">
       <b>Введите ваш Email. Билеты придут к вам на почту: </b>
        <form method="POST" className="mainForm">
          <input className="email" type="text" placeholder="Введите ваш email" name="email" />
          <button className="btn btn-success" id="buybutton" type="submit">Купить</button>
        </form>
      </div>
    <script src="/js/tariffsClient.js"></script>
    </Layout>
  );
}

module.exports = Tariffs;