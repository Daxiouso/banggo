function banr(){
    var content = document.querySelector('.content');
var imgitem = content.children;
var taBtn = document.querySelector('.tabTi');
var tabCon = taBtn.children;


//定义轮播图初始值
var index = 0;
var timer = setInterval(atuoPlay,3000);

// 鼠标移入移除效果
content.onmouseover = function() {
    clearInterval(timer);
}
content.onmouseout = function() {
        timer = setInterval(atuoPlay,3000);
    }
    // 1）初始化
for (var i = 0; i < tabCon.length; i++) {
    if (i === 0) {
        // * 高亮第一个tab
        tabCon[i].className = 'ac';
    } else {
        // * 隐藏除第一张以外的图片
        imgitem[i].style.display = 'none';
    }
    // 切换对应的轮播图
    (function(i) {
        var timer
        tabCon[i].onmouseover = function() {
            timer = setTimeout(function() {
                index = i;
                show(i);
            }, 400);
        }
        tabCon[i].onmouseout = function() {
            clearTimeout(timer);
        }
    })(i);
}

function show(idx) {
    for (var j = 0; j < tabCon.length; j++) {
        // 高亮显示当前tab,去除其他高亮
        // 切换相应的图片，隐藏其他图片
        tabCon[j].style.opacity = 1;
        if (j === idx) {
            tabCon[j].className = 'ac';
            imgitem[j].style.display = 'block';
        } else {
            tabCon[j].className = '';
            imgitem[j].style.display = 'none';
        }
    }
}

function atuoPlay() {
    index++;
    // 避免index超出范围
    if (index >= tabCon.length) {
        index = 0
    }

    show(index);
}



var Uid = document.querySelector('.uId');
var dbox = document.querySelector('.d-box')
var id1 = JSON.parse(Cookie.get('Aids'));
Uid.innerHTML = '欢迎光临！'+id1;

if(Uid !== '登录'){
    dbox.style.display = 'none';
    Uid.style.width = 110+'px';
    Uid.style.border = 'none';



}
}
banr();


//点击购物袋判断是否登录
function dai(){
    var gouwd = document.querySelector('.gouwd');
    var hr = gouwd.children[0];
    var Uid = document.querySelector('.uId');

    gouwd.onclick = function(){
        if(Uid.innerHTML === '登录'){
            hr.setAttribute('href','');
            alert('请先登录');
        }else{
            hr.setAttribute('href','html/car.html');
        }
    }
}
dai();


//数据传入
function ru(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText);
            var html = arr.map((item) => {
                return `<div class="jr-b1">
                            <div class="jrbg"><img src="${item.Gsur}"></div>
                            <p class="jTi"><a href="#">${item.Gname}</a></p>
                            <p><a href="#" class="gName">${item.Gshu}</a></p>
                            <p>￥<i class="gNum">${item.Gprict}</i> <del class="oNum">${item.Gold}</del></p>
                        </div>`;
            }).join("\n");
            document.querySelector(".jr-b").innerHTML = html;
        }
    }
    xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${1}&length=10`, true);
    xhr.send(null);
        
    
}
ru();

function box1(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText);
            var html = arr.map((item) => {
                return `<li class="nz-b2"><a href="#">
                            <div class="nzImg"><img src="${item.Gsur}"></div>
                            <p><a href="#"><span class="jTi fl">${item.Gname}</span></a><label class="dz">${item.Gdz}</label></p>
                            <p><a href="#" class="gName">${item.Gshu}</a></p>
                            <p>￥<i class="gNum">${item.Gprict}</i> <del class="oNum">${item.Gold}</del></p>
                        </a></li>`;
            }).join("\n");
            document.querySelector(".box1").innerHTML = html;
        }
    }
    xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${2}&length=8`, true);
    xhr.send(null);
}
box1();

function box2(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText);
            var html = arr.map((item) => {
                return `<li class="nz-b2"><a href="#">
                            <div class="nzImg"><img src="${item.Gsur}"></div>
                            <p><a href="#"><span class="jTi fl">${item.Gname}</span></a><label class="dz">${item.Gdz}</label></p>
                            <p><a href="#" class="gName">${item.Gshu}</a></p>
                            <p>￥<i class="gNum">${item.Gprict}</i> <del class="oNum">${item.Gold}</del></p>
                        </a></li>`;
            }).join("\n");
            document.querySelector(".box2").innerHTML = html;
        }
    }
    xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${3}&length=3`, true);
    xhr.send(null)

}
box2();

function box3(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText);
            var html = arr.map((item) => {
                return `<li class="nz-b2"><a href="#">
                            <div class="nzImg"><img src="${item.Gsur}"></div>
                            <p><a href="#"><span class="jTi fl">${item.Gname}</span></a><label class="dz">${item.Gdz}</label></p>
                            <p><a href="#" class="gName">${item.Gshu}</a></p>
                            <p>￥<i class="gNum">${item.Gprict}</i> <del class="oNum">${item.Gold}</del></p>
                        </a></li>`;
            }).join("\n");
            document.querySelector(".box3").innerHTML = html;
        }
    }
    xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${3}&length=5`, true);
    xhr.send(null)
}
box3();


function box4(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText);
            var html = arr.map((item) => {
                return `<li class="nz-b2"><a href="#">
                            <div class="nzImg"><img src="${item.Gsur}"></div>
                            <p><a href="#"><span class="jTi fl">${item.Gname}</span></a><label class="dz">${item.Gdz}</label></p>
                            <p><a href="#" class="gName">${item.Gshu}</a></p>
                            <p>￥<i class="gNum">${item.Gprict}</i> <del class="oNum">${item.Gold}</del></p>
                        </a></li>`;
            }).join("\n");
            document.querySelector(".box4").innerHTML = html;
        }
    }
    xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${4}&length=8`, true);
    xhr.send(null);
}
box4();

function box5(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText);
            var html = arr.map((item) => {
                return `<li class="nz-b2"><a href="#">
                            <div class="nzImg"><img src="${item.Gsur}"></div>
                            <p><a href="#"><span class="jTi fl">${item.Gname}</span></a><label class="dz">${item.Gdz}</label></p>
                            <p><a href="#" class="gName">${item.Gshu}</a></p>
                            <p>￥<i class="gNum">${item.Gprict}</i> <del class="oNum">${item.Gold}</del></p>
                        </a></li>`;
            }).join("\n");
            document.querySelector(".box5").innerHTML = html;
        }
    }
    xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${5}&length=3`, true);
    xhr.send(null)

}
box5();

function box6(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText);
            var html = arr.map((item) => {
                return `<li class="nz-b2"><a href="#">
                            <div class="nzImg"><img src="${item.Gsur}"></div>
                            <p><a href="#"><span class="jTi fl">${item.Gname}</span></a><label class="dz">${item.Gdz}</label></p>
                            <p><a href="#" class="gName">${item.Gshu}</a></p>
                            <p>￥<i class="gNum">${item.Gprict}</i> <del class="oNum">${item.Gold}</del></p>
                        </a></li>`;
            }).join("\n");
            document.querySelector(".box6").innerHTML = html;
        }
    }
    xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${6}&length=5`, true);
    xhr.send(null)
}
box6();




//点击会顶部动画效果
function ding(){

    var btnTop = document.querySelector('.dBu');

    btnTop.onclick = function(){
                
                var timer = setInterval(function(){
                    // 获取滚动条滚动过的距离
                    var scrollY = window.scrollY;

                    var speed = Math.ceil(scrollY/10);//缓存动画

                    scrollBy(0,-speed);
                    if(window.scrollY<=0 || speed < 5){
                        clearInterval(timer);

                        // 重置
                        scrollBy(0,0);
                    }
                    
                    
                        
                    
                },20)
             }
    window.onscroll = function(){
        var scrollY = window.scrollY;
        h = window.innerHeight;
        if(scrollY<=h){
            btnTop.style.display = 'none';
        }else if(window.scrollY>h){
            btnTop.style.display = 'block';
        }
    }
            
}
ding();