let backimges = document.querySelector(".back_imges");
let img = document.querySelector("img");

// let backphoto = backimges.style.ba

let imges = ["img/img1.webp","img/img2.jpg","img/img3.avif","img/img4.avif","img/img5.jpeg","img/img6.webp","img/img7.avif","img/img8.avif","img/img9.avif","img/img10.avif"]
let backphotos = ["url('img/img1.webp')","url('img/img2.jpg')","url('img/img3.avif')","url('img/img4.avif')","url('img/img5.jpeg')","url('img/img6.webp')","url('img/img7.avif')","url('img/img8.avif')","url('img/img9.avif')","url('img/img10.avif')"]
let count = 0;

setInterval(next, 5000);

function next(){
    count++
    if (count >= imges.length){
        count = 0;
        img.src = imges[count];
        backimges.style.backgroundImage = backphotos[count];
        
    }
    else{
        img.src = imges[count];
        backimges.style.backgroundImage = backphotos[count];
        
    }
}
    


function previous(){
    count--
    if (count < 0){
        count = imges.length - 1;
        img.src = imges[count];
        backimges.style.backgroundImage = backphotos[count];
    }
    else{
        img.src = imges[count];
        backimges.style.backgroundImage = backphotos[count];
    }
}