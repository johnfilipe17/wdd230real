let options = {
    threshold:0.3

}

const observer = new IntersectionObserver(imageObserver,options);

function imageObserver (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const img = entry.target
            const img_src = img.dataset.src;
            console.log("Lazy loading" , img);
            img.src= img_src;
        };
    })
}

let imgs = document.querySelectorAll('img.thephoto');

imgs.forEach(img =>{
    observer.observe(img);
    
})