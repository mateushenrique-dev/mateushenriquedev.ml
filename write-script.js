function writing() {
  let i = 0;
  let message = 'Mateus Henrique Web Designer';

  digitando();

  function digitando() {
    if(i < message.length) {
      document.getElementById('text').innerHTML += message.charAt(i);
      i++;
      setTimeout(digitando, 150);
    }
  }
}
writing()