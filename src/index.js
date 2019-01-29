import "./styles.css";

// let collectionId = 2;
// function getNewImageSrc() {
//   return`https://source.unsplash.com/collection/${collectionId++}/200x200`
// }

// window.handleDragStart = function handleDragStart(event) {
//   event.dataTransfer.setData("url", event.target.src);
//   event.dataTransfer.setData("f", console.log);
// };

// window.handleDragEnter = function handleDragEnter(event) {
//   event.target.classList.add("hover");
// };

// window.handleDragLeave = function handleDragLeave(event) {
//   event.target.classList.remove("hover");
// };

// window.handleDrop = function handleDrop(event) {
//   event.target.src = event.dataTransfer.getData("url");
//   event.target.classList.remove("hover");
// };

// window.handleDragEnd = function handleDragEnd(event) {
//   event.target.src = getNewImageSrc();
//   event.target.classList.add("loading")
//   event.target.onload = () => event.target.classList.remove("loading");
// };

// document.getElementById("app").innerHTML = `
// <h1>DnD logger</h1>
// <div>
//   <p>
//     Handle and drag image:
//     </br>
//     <img
//       ondragstart="handleDragStart(event);"
//       ondragend="handleDragEnd(event)"
//       class="drag-source"
//       src="${getNewImageSrc()}"
//     >
//   </p>
//   <p>
//     Drop image here:
//     </br>
//     <img
//       class="drop-target"
//       ondragover="return false"
//       ondragenter="handleDragEnter(event)"
//       ondragleave="handleDragLeave(event)"
//       ondrop="handleDrop(event)"
//     ></img>
//   </p>
// </div>
// `;
