var i = 0;
var imgArr = ['00.jpg','11.jpg','22.jpg'];
var homeImg = document.querySelector('#home_img');
var btn = document.querySelectorAll('button');
var init  = setInterval(changeImg(),1000);
    function changeImg(){
        {
            if(i==imgArr.length-1){
                i=0;
            }
            homeImg.style.background = `url("../../img/${imgArr[i+1]}")`;
        }
        homeImg.onmouseenter = function(){
            clearInterval(init);
        }
        homeImg.onmouseleave = function(){
            init = setInterval(changeImg(),1000);
        }
        btn[0].onclick = function(){
            i--;
            i = i<0?imgArr.length-1:i;
            homeImg.style.background = `url("../../img/${imgArr[i]}")`;
        }
        btn[1].onclick = function(){
            i++;
            i=i>imgArr.length-1?0:i;
            homeImg.style.background = `url("../../img/${imgArr[i]}")`;
        }
    }
    
