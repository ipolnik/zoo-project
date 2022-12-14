const React = require('react');

module.exports = function Layout({ children, admin }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />

        <link rel="stylesheet" href="/styles/mainpage.css" />

        <title>Zoo!</title>
      </head>
      <body>
        <div id="wrap">
          <header>
            <nav className="navbar navbar-expand-lg bg-orange" id="navv">
              <img className="logo" src="/img/logo.png" />
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                {admin ? (
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" id="menu-1">
                      <p className="navbar-brand">Admin version</p>
                      <a className="nav-link active" aria-current="page" href="/">Главная страница</a>
                      <a className="nav-link" href="/list">Животные</a>
                      <a className="nav-link" href="/tariffs">Тарифы</a>
                      <a className="nav-link" href="/logout" id="logout_id">Выйти</a>
                    </div>
                  </div>
                ) : (
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" id="menu-2">
                      <a className="nav-link active" aria-current="page" href="/">Главная страница</a>
                      <a className="nav-link" href="/list">Животные</a>
                      <a className="nav-link" href="/tariffs">Тарифы</a>
                      <a className="nav-link" href="/login" id="login_id">Вход</a>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </header>
          <main>
            {children}
          </main>
          <footer className="bg-light text-center text-lg-start" id="footermain">
            <div className="text-center p-3">
              <a className="text-dark" href="https://mdbootstrap.com/">Урюпинский Зоопарк</a>
              © 2022 Copyright: Owls
            </div>
          </footer>
        </div>
      </body>
      <script defer src="/js/mainpage.js" />
      <script defer src="/styles/mainpage.css" />
    </html>
  );
};
