var i = 0;
var imgArr = ['0.jpg','1.jpg','2.jpg'];
var homeImg = document.querySelector('#home_img');
console.log(homeImg);
var init  = setInterval(changeImg(),1000);
function changeImg(){
    {
        homeImg.style.background= `url("../../img/${imgArr[i+1]}")`;
        if(i==imgArr.length) {i=0;}
    }
        homeImg.onmouseenter=function(){
            clearInterval(init);
        }
            homeImg.onmouseleave=function(){
                init=setInterval("changeImg()",1000);
            }
        var lef=function(){
            --i;
            i=i<0?imgArr.length-1:i;
            homeImg.style.background= `url("../../img/${imgArr[i]}")`;
        }
        var rig=function(){
            ++i;
            i=i>imgArr.length-1?0:i;
            homeImg.style.background= `url("../../img/${imgArr[i]}")`;
        }
}
