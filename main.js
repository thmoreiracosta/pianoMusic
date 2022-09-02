const keys = document.querySelectorAll(".key");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function playNoteMouse(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.target.dataset.key}"]`
  );
  const key = document.querySelector(
    `.key[data-key="${e.target.dataset.key}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", playNoteMouse));

window.addEventListener("keydown", playNote);
window.addEventListener("click", playNote);
