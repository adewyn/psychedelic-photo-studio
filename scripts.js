document.addEventListener("DOMContentLoaded", function () {
    const canvas = new fabric.Canvas("canvas");
    const inputImage = document.getElementById("inputImage");
    const applyEffect = document.getElementById("applyEffect");
  
    inputImage.addEventListener("change", function (e) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function (f) {
        const imgObj = new Image();
        imgObj.src = f.target.result;
  
        imgObj.onload = function () {
          const image = new fabric.Image(imgObj);
          canvas.setWidth(image.width);
          canvas.setHeight(image.height);
          canvas.clear(); // Add this line to clear the canvas before adding a new image
          canvas.add(image);
          canvas.renderAll(); // Add this line to render the canvas
        };
      };
  
      reader.readAsDataURL(file);
    });
  
    applyEffect.addEventListener("click", function () {
      const object = canvas.getActiveObject();
      if (!object) return;
  
      object.filters.push(new fabric.Image.filters.Invert());
      object.applyFilters();
      canvas.renderAll();
    });
  });
  