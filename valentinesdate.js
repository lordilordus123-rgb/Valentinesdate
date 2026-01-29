const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const lbl1 = document.getElementById('lbl1');
const lbl2 = document.getElementById('lbl2');

let fontSize = 16; // Startgröße in Pixeln



btn2.addEventListener('click', () => {
  // Schriftgröße erhöhen
  fontSize = fontSize - 1;
  btn2.style.fontSize = fontSize + 'px';

  // Text ändern (hier Beispiel: Text wechselt bei jedem Klick)
  if (btn2.textContent === 'warum😭') {
    btn2.textContent = 'sicher?🤬';
  } else {
    btn2.textContent = 'warum😭';
  }

  if (fontSize === 0) {
    btn2.style.display = 'none';
  }
});

btn1.addEventListener('click', () => {
  btn1.style.display = 'none';
  btn2.style.display = 'none';
  lbl1.textContent = 'weeeeeeee';
  lbl2.style.display = 'block';
});