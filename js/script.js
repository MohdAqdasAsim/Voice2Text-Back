const switchBtn = document.querySelectorAll(".switch");
const switchLeftBtn = document.getElementById("switch-right");
const switchRightBtn = document.getElementById("switch-left");
const switchBox = document.getElementById("switch-box");

const text2SpeechBox = document.getElementById("text2speech-container");
const speech2textBox = document.getElementById("speech2text-container");

switchBtn.forEach((switchButton) => {
  switchButton.addEventListener("click", () => {
    if (text2SpeechBox.classList.contains("active")) {
      text2SpeechBox.classList.remove("active");
      speech2textBox.classList.add("active");
      switchRightBtn.style.display = "block";
      switchLeftBtn.style.display = "none";
      setTimeout(() => {
        switchBox.style.justifyContent = "flex-start";
      }, 200)
    } else {
      speech2textBox.classList.remove("active");
      text2SpeechBox.classList.add("active");
      switchRightBtn.style.display = "none";
      switchLeftBtn.style.display = "block";
      setTimeout(() => {
        switchBox.style.justifyContent = "flex-end";
      }, 200)
    }
  })
})