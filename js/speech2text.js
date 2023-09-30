const micOnBtn = document.getElementById("mic-on");
const micOffBtn = document.getElementById("mic-off");

const copyBtn = document.getElementById("copy-btn");
const closeBtn = document.getElementById("close-btn");

const textBox = document.getElementById("text-receiver");

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = true;

micOnBtn.addEventListener("click",() => {
  micOnBtn.style.display = "none";
  micOffBtn.style.display = "inline-block";
  
  micOffBtn.classList.add("flicker");

  recognition.start();

  recognition.addEventListener("result",(e) => {
    textBox.innerText = e.results[0][0].transcript;
  })
});

micOffBtn.addEventListener("click",() => {
  micOffBtn.style.display = "none";
  micOnBtn.style.display = "inline-block";

  micOffBtn.classList.remove("flicker");

  recognition.stop();
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(textBox.value);
})

closeBtn.addEventListener("click", () => {
  textBox.value = "";
})