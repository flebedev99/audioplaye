const fileInput = document.querySelector("input");
const label = document.querySelector("label");
let audio = document.getElementById("audio");
let fileReader = new FileReader();

fileInput.onchange = function () {
  fileReader.readAsDataURL(fileInput.files[0]);
  fileReader.onload = function () {
    if (fileReader.result === null) {
      return true;
    }
    audio.src = fileReader.result;
    audio.play();
    label.innerText = fileInput.files[0].name;
    console.error();
  };
};
