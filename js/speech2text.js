const micOnBtn = document.getElementById("mic-on");
const micOffBtn = document.getElementById("mic-off");

const copyBtn = document.getElementById("copy-btn");
const closeBtn = document.getElementById("clear-btn");

const textBox = document.getElementById("text-receiver");

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = true;

micOnBtn.addEventListener("click", () => {
  micOnBtn.style.display = "none";
  micOffBtn.style.display = "inline-block";

  micOffBtn.classList.add("flicker");

  recognition.start();

  recognition.onend = () => {
    recognition.start();
  }
  
  var finalTranscripts = "";
  recognition.onresult = function (event) {
    var interimTranscripts = "";
    for (var i = event.resultIndex; i < event.results.length; i++) {
      var transcript = event.results[i][0].transcript;
      transcript.replace("\n", "<br>");
      if (event.results[i].isFinal) {
        finalTranscripts += transcript;
      }
      else {
        interimTranscripts += transcript;
      }
      textBox.value = finalTranscripts + " " + interimTranscripts;
    }
  };
});

micOffBtn.addEventListener("click", () => {
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