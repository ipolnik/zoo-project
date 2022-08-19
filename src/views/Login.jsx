const React = require('react');
const Layout = require('./Layout');

function Login({ admin }) {
  return (
    <Layout admin={admin}>
      <script defer src="/js/login.js" />
      <div className="login-container">
        <div className="loginBlock">
          <form action="/login" method="POST" id="log">
            <div className="mb-3">
              <label htmlFor="exampleInputLogin1" className="form-label" placeholder="Login" />
              <input name="login" type="text" className="form-control" id="exampleInputLogin1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" placeholder="Password" />
              <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary" id="submit">Войти</button>
            {/* {   <div><a href="/signup">Нет аккаунта? Зарегистрируйся!</a></div> } */}
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Login;
