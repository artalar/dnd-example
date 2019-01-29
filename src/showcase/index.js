import { getNewImageSrc } from "../shared";
import "./index.css";

const showcasePreview = window.document.getElementById("showcasePreview");
const showcaseControl = window.document.getElementById("showcaseControl");

function handleRequestNewImage() {
  showcasePreview.src = getNewImageSrc();
  showcasePreview.draggable = false;
  showcaseControl.disabled = true;
  showcasePreview.classList.add("loading");
}

function handleResponseNewImage() {
  showcasePreview.draggable = true;
  showcaseControl.disabled = false;
  showcasePreview.classList.remove("loading");
}

showcasePreview.addEventListener("load", handleResponseNewImage);

showcasePreview.addEventListener("dragend", handleRequestNewImage);

showcaseControl.addEventListener("click", handleRequestNewImage);

showcasePreview.addEventListener("dragstart", event => {
  event.dataTransfer.setData("url", event.target.src);
});

handleRequestNewImage();
