let voices = [];

const listenBtn = document.getElementById("listen-btn");
const stopBtn = document.getElementById("stop-btn");
const customizeBtn = document.getElementById("customize-btn");
const cancelBtn = document.getElementById("cancel");

const customizePanel = document.getElementById("customize-panel");

const textField = document.getElementById("text-holder");

const voiceSelect = document.getElementById("voice-select");


const soundRate = document.getElementById("sound-rate");
const soundVolume = document.getElementById("sound-volume");
const soundPitch = document.getElementById("sound-pitch");

let utterThis = new SpeechSynthesisUtterance();

window.onload = window.speechSynthesis.cancel();

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  utterThis.voice = voices[0];

  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  })
}

voiceSelect.addEventListener("change", () => {
  utterThis.voice = voices[voiceSelect.value];
})

listenBtn.addEventListener("click", () => {
  if (textField.value == "") {
    utterThis.text = "You need to type something first!";
  } else {
    utterThis.text = textField.value;
  }
  listenBtn.style.display = "none";
  stopBtn.style.display = "block";

  if (window.speechSynthesis.paused == false) {
    window.speechSynthesis.speak(utterThis);
  } else {
    window.speechSynthesis.resume();
  }
})

stopBtn.addEventListener("click", () => {
  listenBtn.style.display = "block";
  stopBtn.style.display = "none";

  if (window.speechSynthesis.paused == false) {
    window.speechSynthesis.pause();
  }
})

textField.addEventListener("change", () => {
  window.speechSynthesis.cancel();
  listenBtn.style.display = "block";
  stopBtn.style.display = "none";
})

utterThis.onend = () => {
    listenBtn.style.display = "block";
    stopBtn.style.display = "none";
};

customizeBtn.addEventListener("click",() => {
  customizePanel.style.display = "flex";
})

cancelBtn.addEventListener("click",() => {
  customizePanel.style.display = "none";
  utterThis.pitch = soundPitch.value;
  utterThis.rate = soundRate.value;
  utterThis.volume = soundVolume.value;
})