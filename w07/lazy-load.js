const imagesToLoad = document.querySelectorAll("img[data-src]");
console.log(imagesToLoad)
const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 500px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");}; 
};

// if ('IntersectionObserver' in window){
//     const imgObserver = new IntersectionObserver((items, imgObserver) => {
//         items.forEach((item) => {
//             if (!item.isIntersecting) {
//                 console.log("Hello")
//                 return;
//             }
//             else {
//                 loadImages(item.target);                
//                 console.log("Hello");
//                 imgObserver.unobserve(item.target);
//             }
//         });
//     }, imageOptions);

//     imagesToLoad.forEach((img) => {
//         imgObserver.observe(img);
//     });
// }

// else {
//     imagesToLoad.forEach((img) => {
//         LoadImages(img);
//     });
//     console.log("Hello World")

// }

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } 
else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}