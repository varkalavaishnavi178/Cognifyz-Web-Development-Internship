// Enlarge an image when clicked
function openImage(image) {
const modal = document.getElementById("imageModal");
const enlargedImage = document.getElementById("enlargedImage");

```
enlargedImage.src = image.src;
modal.style.display = "flex";
```

}

// Close the enlarged image
function closeImage() {
document.getElementById("imageModal").style.display = "none";
}

// Automatic slideshow
const slideshowImage = document.getElementById("slideshowImage");

const images = [
"images/image1.jpg",
"images/image2.jpg",
"images/image3.jpg",
"images/image4.jpg"
];

let currentIndex = 0;

setInterval(function () {
currentIndex = (currentIndex + 1) % images.length;
slideshowImage.src = images[currentIndex];
}, 3000);

