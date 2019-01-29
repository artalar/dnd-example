let collectionId = 2;
export function getNewImageSrc() {
  return `https://source.unsplash.com/collection/${collectionId++}/200x200`;
}
