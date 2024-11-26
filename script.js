
//............................Navbar.................................

let bar = document.querySelector(".bar");
let nav = document.querySelector(".nav-bar");
let close= document.querySelector(".close");


if(bar)
{
    bar.onclick = () =>
    {
        nav.classList.add("active");
    }
}

if(close)
    {
        close.onclick = () =>
        {
            nav.classList.remove("active");
        }
    }


//............................Product Details.................................

let proDetail = document.querySelector(".pro");

proDetail.onclick = () =>
{
    window.open("sproduct.html", "_blank");
}

//............................Image Change Slider.................................

let mainImg = document.querySelector(".mainImage");
let smlImg = document.querySelectorAll(".small-imgs");

smlImg[0].onclick = () =>
{
    mainImg.src = smlImg[0].src;
}
smlImg[1].onclick = () =>
{
    mainImg.src = smlImg[1].src;
}
smlImg[2].onclick = () =>
{
    mainImg.src = smlImg[2].src;
}
smlImg[3].onclick = () =>
{
    mainImg.src = smlImg[3].src;
}