if (navigator.clipboard) {
  document.querySelectorAll("[data-clipboard]").forEach($clipboardEl => {
    const $button = document.createElement("button");
    $button.classList.add('button');
    $button.innerHTML = "Copier";
    $button.addEventListener(
      "click",
      copyToClipboard.bind(this, $clipboardEl, $button)
    );
    $clipboardEl.parentNode.append($button);
  });
} else {
  console.warn("Pas de support :(");
}

function copyToClipboard($clipboardEl, $button) {
  navigator.clipboard
    .writeText($clipboardEl.getAttribute("data-clipboard"))
    .then(() => {
      $button.innerHTML = "Copié !";
      setTimeout(() => ($button.innerHTML = "Copier"), 2000);
    })
    .catch(err => console.warn(err));
}
