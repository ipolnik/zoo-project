const submit = document.querySelector('#log');

submit?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const login = event.target.login.value;
  const password = event.target.password.value;
  const obj = { login, password };
  console.log(obj);
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const result = await response.json();
  console.log(result);
  if (result.login === 'ok') {
    window.location.assign('/');
  } else {
    window.alert('Акстись, окоянный');
  }
});
