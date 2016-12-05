happo.define('test', () => {
  const div = document.createElement('div');
  div.innerHTML = 'Test ' + Math.random();
  document.body.appendChild(div);
});
