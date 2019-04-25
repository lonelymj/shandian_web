<!--
var speed=10; //数字越大速度越慢
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function Marquee(){
if(tab2.offsetWidth-tab.scrollLeft<=0)
tab.scrollLeft-=tab1.offsetWidth
else{
tab.scrollLeft++;
}
}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

var tab3=document.getElementById("demo3");
var tab4=document.getElementById("demo4");
var tab5=document.getElementById("demo5");
tab5.innerHTML=tab4.innerHTML;
function Marquee1(){
if(tab5.offsetWidth-tab3.scrollLeft<=0)
tab3.scrollLeft-=tab4.offsetWidth
else{
tab3.scrollLeft++;
}
}
var MyMar1=setInterval(Marquee1,speed);
tab3.onmouseover=function() {clearInterval(MyMar1)};
tab3.onmouseout=function() {MyMar1=setInterval(Marquee1,speed)};
-->
