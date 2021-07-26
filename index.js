const canvas = document.getElementById("result");
const ctx = canvas.getContext("2d");
const customText =document.getElementById("custom-text");
const changeText =document.getElementById("file");


function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}
changeText.addEventListener("change",function(){
       if(changeText.value){
           customText.innerHTML = changeText.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
       }else{
          customText.innerHTML = "No image choosen Yet";
       }
});



const preview = document.getElementById("preview");
preview.addEventListener("click", prev);


function prev() {
  const image = document.getElementById("imgDisplayed");

  const imWidth = document.getElementById("imWidth").value;
  const imHeight = document.getElementById("imHeight").value;

  canvas.width = imWidth;
  canvas.height = imHeight;

  ctx.drawImage(image, 0, 0, imWidth, imHeight);

  form = document.querySelector("form");
  form.reset();
}


const down = document.querySelector("#down");
down.addEventListener("click", downloadImage);

function downloadImage(){
  if(window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "resizedImage.png");

  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();

    a.download = "resizedImage.png";
    a.click();

    document.body.removeChild(a);
  }

  window.location.reload();
}