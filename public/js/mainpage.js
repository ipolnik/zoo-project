const block = document.getElementById('blockContainer');
const links = document.getElementById('navbarNavAltMarkup');
const navbar = document.getElementById('navbarNavAltMarkup');
const menu2 = document.getElementById('menu-2');
const menu1 = document.getElementById('menu-1');

const img = document.querySelector('.img-container');

const error = document.createElement('div');
error.classList.add('error');

const loginBlock = document.createElement('div');

links?.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName === 'A' && e.target.innerHTML === 'Вход') {
    loginBlock.style.cssText = `
    display:flex;
    justify-content: center;`;
    loginBlock.classList.add('loginBlock');
    loginBlock.innerHTML = `
    <form action="/login" method="POST" id="log">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label"></label>
          <input name="login" type="text" className="form-control" placeholder="Login" id="exampleInputLogin1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <input name="password" type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary" id="submit">Войти</button>
        <div><a href="/signup">Нет аккаунта? Зарегистрируйся!</a></div>
    `;
    block.append(loginBlock);

    img.style.margin = '160px 0 0 0';

    // * меняем аттрибут active у кнопки входа
    const { lastElementChild } = menu2;
    const { firstChild } = menu2;
    lastElementChild.className = 'nav-link active';
    firstChild.className = 'nav-link';

    const submit = document.querySelector('#log');
    submit?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const login = event.target.login.value;
      const password = event.target.password.value;
      const obj = { login, password };
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      if (response.status === 200) {
        img.style.margin = '0 0 0 0';
        const adminBlock = document.createElement('div');
        adminBlock.classList.add('adminBlock');

        adminBlock.innerHTML = `<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" id="menu-1">
        <a class="navbar-brand" href="#">Admin version</a>
          <a class="nav-link active" aria-current="page" href="/">Главная страница</a>
          <a class="nav-link" href="/animals">Животные</a>
          <a class="nav-link" href="/prices">Тарифы</a>
          <a class="nav-link" href="/logout">Выйти</a>
        </div>`;
        navbar.removeChild(menu2);
        navbar.append(adminBlock);
        block.removeChild(loginBlock);

        if (error) {
          block.removeChild(error);
        }
      } else if (response.status === 304) {
        error.innerHTML = `
        <p>Неправильно введен логин или пароль</p>`;
        block.append(error);
      }
    });
  }
  if (e.target.tagName === 'A' && e.target.innerHTML === 'Главная страница') {
    if (menu2) {
      window.location.assign('/');
    }
    if (menu1) {
      window.location.assign('/');
    }
  }
  if (e.target.tagName === 'A' && e.target.innerHTML === 'Животные') {
    if (menu2) {
      window.location.assign('/list');
    }
    if (menu1) {
      window.location.assign('/list');
    }
  }
  if (e.target.tagName === 'A' && e.target.innerHTML === 'Тарифы') {
    if (menu2) {
      window.location.assign('/tariffs');
    }
    if (menu1) {
      window.location.assign('/tariffs');
    }
  }
  if (e.target.tagName === 'A' && e.target.innerHTML === 'Выйти') {
    window.location.assign('/logout');
  }
});
