let storyyyy = document.querySelector("#storyian");
var mainn = document.querySelector(".main");

var arr = [
  {
    dp: "Screenshot (1).png",
    story: "6448ca86508654220671ad2d.jpg",
  },
  {
    dp: "Screenshot (2).png",
    story: "64426c32508654fb0f7168bd.jpg",
  },
  {
    dp: "Screenshot (271).png",
    story: "6448ca86508654220671ad2d.jpg",
  },
];

var clutter = "";
arr.forEach(function(elem , idx){
    clutter += `<div id="story">
    <img src="${elem.dp}" alt="" id="${idx}">
</div>`
})

document.querySelector("#storyian").innerHTML = clutter;

storyyyy.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },1050)
})