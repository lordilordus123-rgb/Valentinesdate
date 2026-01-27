const button = document.getElementById('no');

let fontSize = 10; // Startgröße in Pixeln

button.addEventListener('click', () => {
  // Schriftgröße erhöhen
  fontSize += 2;
  button.style.fontSize = fontSize + 'px';

  // Text ändern (hier Beispiel: Text wechselt bei jedem Klick)
  if (button.textContent === 'Ja/yes') {
    button.textContent = 'Größer!';
  } else {
    button.textContent = 'Ja/yes';
  }
});
