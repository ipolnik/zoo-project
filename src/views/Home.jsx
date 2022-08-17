const React = require('react');
const Layout = require('./Layout');

function Home({ admin }) {
  return (
    <Layout admin={admin}>
      <div className="uberblock">
      <div className="mainPageBlock">
        <h4 className="mainpage-title">Урюпинский зоопарк – дом для множества животных</h4>
        <div className="container" id="blockContainer" />
        <div className="img-container">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/layout.jpg" className="block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/zoo2.jpg" className="block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/zoo3.jpg" className="block" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <h4 class="mainpage-title">Где мы находимся</h4>
      <div className="map">
      <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aefc6000c688117eeba73795f065ca6dc2b17b48a567cd94dfba65d85b225ff86&amp;width=621&amp;height=470&amp;lang=ru_RU&amp;scroll=true"></script>
      </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
      <script defer src="/js/mainpage.js" />
    </Layout>
  );
}

module.exports = Home;
