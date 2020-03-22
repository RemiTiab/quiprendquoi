const buttons = document.querySelectorAll('.vibrate');
let vibrations = function() {
  navigator.vibrate([200]);
};

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener('click', function() {
    vibrations();
  });
}
