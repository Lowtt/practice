var display = document.querySelector('#home_jiesao');
var nav = display.children[0];//ul
console.log(nav.children[0],display.children[1]);
function xiugai(who){
    for(let i=0;i<who.length;i++){
        who[i].style.background = "white";
        who[i].style.color = "black";
    }  
}
nav.children[0].onmouseenter = function(){
    xiugai(nav.children);
    this.style.background = "blue";
    this.style.color = "white";
    display.children[1].innerHTML = "绵阳市融资担保小额贷款行业协会（以下简称“本协会”）成立于2011年7月1日，本协会是由绵阳市辖区内融资担保机构和小额贷款公司自愿发起组建的行业性非营利性社会团体，具有法人资格。";

}
nav.children[1].onmouseenter = function(){
    xiugai(nav.children);
    this.style.background = "blue";
    this.style.color = "white";
    display.children[1].innerHTML = "这里是最新公告"
}
nav.children[2].onmouseenter = function(){
    xiugai(nav.children);
    this.style.background = "blue";
    this.style.color = "white";
    display.children[1].innerHTML = "这里是政策法规"
}
