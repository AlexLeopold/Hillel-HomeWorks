// let mainBlock = document.querySelector('.mainBlock');
// let bigImg = document.querySelector('#bigImg');
// mainBlock.addEventListener('click', e => {
//    // console.log(e.target)
//    if(e.target.classList.contains('image')) {
//       let now = e.target;
//       console.log(now);
//       bigImg.innerText = e.target;
//       console.log(bigImg)
//    }
// })

let promise = fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((json) => console.log(json));

console.log(promise);

class GalleryItem {
   constructor () {

   }
}