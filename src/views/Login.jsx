const React = require('react');
const Layout = require('./Layout');

function Login({ admin }) {
  return (
    <Layout admin={admin}>
      <form action="/login" method="POST" id="log">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label"placeholder="Login"></label>
          <input name="login" type="text" className="form-control" id="exampleInputLogin1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" placeholder="Password"></label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary" id="submit">Войти</button>
        {/* {   <div><a href="/signup">Нет аккаунта? Зарегистрируйся!</a></div> } */}
      </form>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
      <script defer src="/js/mainpage.js" />
    </Layout>
  );
}

module.exports = Login;
