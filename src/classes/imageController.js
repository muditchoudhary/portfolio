const ImageController = (() => {
  const addImg = (elm, imgSrc) => {
    const myElm = elm;
    myElm.src = imgSrc;
  };

  return {
    addImg,
  };
})();

export { ImageController };
