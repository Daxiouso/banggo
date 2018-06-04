//尺码高亮
function size(){
    var pul = document.querySelector('.sili');
    var plis = pul.children;
    var sizex = document.querySelector('.sizex');
    

   for(var i=0;i<plis.length;i++){
        (function(i){
            plis[i].onclick = function(){
                sizex.innerHTML = plis[i].innerText;
                //去除其他高亮
                for (var j = 0; j < plis.length; j++) {
                    if (j === i) {
                        plis[j].children[0].className = 'bo1';
                    } else {
                        plis[j].children[0].className ='';
                    }
                }
                
            }
        })(i);
   }
}
size();

//颜色
function color(){
    var pul = document.querySelector('.coli');
    var plis = pul.children;
    var colorx = document.querySelector('.colorx');
    var box = document.querySelector('.bigPicZoom');

   for(var i=0;i<plis.length;i++){
        (function(i){
            plis[i].onclick = function(){
                colorx.innerHTML = plis[i].children[0].children[0].getAttribute('title');

                box.children[0].setAttribute('src','../css/img/dcolor0'+(i+1)+'.jpg')
                box.children[0].setAttribute('data-big',"../css/img/dcolor0"+(i+1)+".jpg")


                box.children[0].style.width = 478 + 'px'
                box.children[0].style.height = 478 + 'px'

                //去除其他高亮
                for (var j = 0; j < plis.length; j++) {
                    if (j === i) {
                        plis[j].children[0].className = 'boc';
                    } else {
                        plis[j].children[0].className ='';
                    }
                }
                
            }
        })(i);
   }
}
color();


//商品数量加减
function quty(){
    var plus = document.querySelector('.q-plus');
    var sub = document.querySelector('.q-sub');
    var qutys = document.querySelector('.qutys');
    var idx = 1;
    qutys.onchange = function(){
        idx = qutys.value;
    }
     
    plus.onclick = function(){
        idx++;
        qutys.value = idx;
    }
    sub.onclick = function(){
        --idx;  
        if(idx<=1){
            idx = 1;
        }
        qutys.value = idx;
    }
    
}
quty();



//会员规则 
function huy(){
    var phy = document.querySelector('.pHY');
    var box = document.querySelector('.hybox');

    phy.onmouseover = function(){
        box.style.display = 'block'
    }
    phy.onmouseout = function(){
        box.style.display = 'none'
    }
}
huy();

//点击切换图片
function qiut(){
    var pic = document.querySelector('.Piclist');
    var imgs = pic.children;
    var big = document.querySelector('.bigPicZoom');
    var xbig = document.querySelector('.xzoom-big');
    for(var i=0;i<imgs.length;i++){
        (function(i){
            imgs[i].onclick = function(){
                big.children[0].setAttribute('src','../css/img/bzoom0'+(i+1)+'.jpg')

                big.children[0].setAttribute('data-big',"../css/img/bzoomd0"+(i+1)+".jpg")
                // xbig.setAttribute('src','../css/img/bzoomd0'+(i+1)+'.jpg')

                big.style.border = '1px solid #ccc'
                big.children[0].style.width = 478 + 'px'
                big.children[0].style.height = 478 + 'px'
                big.style.width = 478 +'px';
                big.style.height = 478 +'px';
                imgs[i].className = 'av'
                //去除其他高亮
                for (var j = 0; j <imgs.length; j++) {
                    if (j === i) {
                        imgs[j].className = 'av'
                    }else{
                        imgs[j].className = ''
                    }
                }
            }
        })(i);
    }   
}
qiut();


//页面调用数据
function xian(){
    //取cookie中的goodsid
    var goodsid = JSON.parse(Cookie.get('goodsid'));

    var gna = document.querySelector('.gna');
    var gsu = document.querySelector('.gsu');
    var gprict = document.querySelector('.gprict');
    var poo = document.querySelector('.poo');
    var pzhe = document.querySelector('.pzhe');
    var fimg = document.querySelector('.fimg');
    var bigP = document.querySelector('.bigPicZoom');
    var bimg = bigP.children[0]
    var Jvip = document.querySelector('.Jvip');
    var Jsp = document.querySelector('.Jsp');
    var Piclist = document.querySelector('.Piclist');
    var piimg = Piclist.children[0].children[0];

    var idt = document.querySelector('.gid');
    idt.innerHTML = goodsid;





    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var err = JSON.parse(xhr.responseText);
                err.map((item) => {
                    gna.innerHTML = item.Gname;
                    gsu.innerHTML = item.Gshu;
                    gprict.innerHTML = item.Gprict;
                    poo.innerHTML = item.Gold;
                    pzhe.innerHTML = item.Gdz;
                    bimg.setAttribute('src',''+item.Gurl+'');
                    piimg.setAttribute('src',''+item.Gurl+'');
                    fimg.innerHTML = item.Gurl;
                    Jvip.innerHTML = item.Gprict - 2;
                    Jsp.innerHTML = item.Gprict - 4;

                    var itimg = item.Gurl;
                }).join("");
            }
        }
        xhr.open("post", "http://localhost/banggo/api/goods.php", true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(`gidd=${goodsid}`);


    
}
xian();


//传送数据及飞入购物车动画
function song(){
    var Gbtn = document.querySelector('.joinCar');
    var colorx =document.querySelector('.colorx');
    var sizex = document.querySelector('.sizex');
    var idt = document.querySelector('.gid');
    var addImg = document.querySelector('.bigPicZoom');
    var num = document.querySelector('.qutys');
    var gna =document.querySelector('.gna');
    var gsu =document.querySelector('.gsu');
    var pzhe = document.querySelector('.pzhe');
    var gprict = document.querySelector('.gprict');
    var poo = document.querySelector('.poo');
    var pi = document.querySelector('.Piclist');
    var img1 = document.querySelector('.fimg');

    var carGoods =[];


    var cookies = document.cookie.split('; ');
    cookies.forEach(function(item){
    item = item.split('=');

    // 判断是否已经存在carGoods的cookie
    if(item[0] === 'carGoods'){
        carGoods = JSON.parse(item[1]);
        }
    });

    Gbtn.onclick = function(){
        if(colorx.innerHTML === '请选择颜色' && sizex.innerHTML === '请选择尺码'){
            alert('请选择颜色和您相应的尺码^-^');

            return false;

        }
        if(colorx.innerHTML === '请选择颜色'){
            alert('请选择颜色^-^');

            return false;
        }
        if(sizex.innerHTML === '请选择尺码'){
            alert('请选择尺码^-^');

            return false;
        }

        if(true){

                    //飞入购物袋
                    //复制商品图片
                    var copyImg = addImg.cloneNode(true);
                    //获取当前图片的位置
                    copyImg.style.position = 'absolute';
                    copyImg.style.left = addImg.offsetLeft + 'px';
                    copyImg.style.top = addImg.offsetTop + 'px';
                    //在页面中显示
        
                    document.body.appendChild(copyImg);

                    //飞入购物袋动画
                    animate(copyImg,{left:1286,top:150,width:5,height:5},function(){


                        copyImg.style.display = 'none';

                        var snum = document.querySelector('.gouwdNum');
                        var qut = document.querySelector('.qutys').value;
                        snum.innerHTML = snum.innerText*1+qut*1;

                        var gs = snum.innerHTML;

                        document.cookie = 'gs=' + gs;
                    });



                    //编写cookie
                    var Gname = gna.innerHTML;
                    var imgu = img1.innerHTML;
                    var Gsu = gsu.innerHTML;
                    var Gpi = gprict.innerHTML;
                    var Gpoo = poo.innerHTML;
                    var Gcolor = colorx.innerHTML;
                    var Gsize = sizex.innerHTML;
                    var Gn = num.value;
                    var Gid = idt.innerHTML;
                    var Gze = pzhe.innerHTML;
                    var idx;
                    var has = carGoods.some(function(item,i){
                        idx = i;

                        return item.guid === Gid && item.gcolor === Gcolor && item.gsize === Gsize;
                    });
                    
                    if(has){
                        // 当前商品已经存在cookie(已添加过，数量+1)
                        carGoods[idx].qty++;
                    }else{

                    var goods = {
                        guid:Gid,
                        gname:Gname,
                        gshu:Gsu,
                        gpi:Gpi,
                        goo:Gpoo,
                        gze:Gze,
                        gcolor:Gcolor,
                        gsize:Gsize,
                        gn:Gn,
                        gmurl:imgu,
                        qty:1
                    }


                    carGoods.push(goods);
                }

            document.cookie = 'carGoods=' + JSON.stringify(carGoods);
                }
                
        }
        

}
song();


    



