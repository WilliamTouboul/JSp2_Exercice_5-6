// Selection de toute les images
var imgs = document.querySelectorAll(".image");
// Boucle pour change la source
for (let i = 0; i < imgs.length; i++)
    imgs[i].addEventListener('mouseover', function () {
        this.src = "images/image" + (i + 1) + "_2.jpg";
    });
//Ex 6 : 
// Boucle pour rechanger sur mouseout
for (let i = 0; i < imgs.length; i++)
    imgs[i].addEventListener('mouseout', function () {
        this.src = "images/image" + (i + 1) + ".jpg";
    });
