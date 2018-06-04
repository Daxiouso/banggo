

//接受数据
function datt(){
    var carGoods = JSON.parse(Cookie.get('carGoods'));

    var ul = document.querySelector('.carGoods');
    var gall = document.querySelector('.G-all');
    var gd = document.querySelector('.Gs-all');
    var gj = document.querySelector('.Gj-all');
    var hi = document.querySelector('.hui');

    function render(){
        //小计价格
        
        var xall = 0;
        var youall = 0;
        var gsall = 0;
        ul.innerHTML = carGoods.map(function(item){

            allshu = item.gn*item.qty;
            xall = item.gpi*item.gn;
            youall += xall;
            gsall += allshu;




        //把商品信息存放到数据库
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4) {
                    xhr.responseText
                } 
            
            }
        xhr.open("post", "http://localhost/banggo/api/car.php", true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(`id=${item.guid}&shu=${item.gshu}&pri=${item.gpi}&old=${item.goo}&color=${item.gcolor}&size=${item.gsize}&lis=${allshu}&url=${item.gmurl}`);



            return `<li data-guid="${item.guid}">
                            <div class="cg1 fl">
                                <input type="checkbox" id="cgo" name="xuans"/>&nbsp;
                                <label for="boxt">
                                    <img src="${item.gmurl}" width="80px" height="80px" />
                                </label>
                            </div>
                            <div class="cg2 fl">
                                <h3>${item.gshu}</h3>
                                <h4 class="giid">商品编号：<i class="fid">${item.guid}</i></h4>  
                                <p><span style="color:#f8584f;"><i class="iconfont icon-by"></i>包邮</span><span style="margin-left:10px;color:#c7c7c7;"><i class="iconfont icon-hb"></i>不可用红包</span></p>
                            </div>
                            <div class="cg3 fl">
                                <p>颜色：${item.gcolor}</p>
                                <p>尺码：(${item.gsize})</p>
                            </div>
                            <div class="cg4 fl">
                                <p class="cold"><del>${item.goo}</del></p>
                                <p class="gpi">${item.gpi}</p>
                            </div>
                            <div class="cg5 fl">
                                <a class="csub fl" style="border-right:0 none;">-</a><input type="text" value="${allshu}" class="ctex fl" /><a class="cjon fl" style="border-left:0 none;">+</a>
                            </div>
                            <div class="cg6 fl">
                            <i>￥<i class="xall">${xall}</i></i>
                            </div>
                            <div class="cg7 fl">
                                <i class="cdel">删除</i>
                            </div>
                    </li>`

            
        });
        
        gd.innerHTML = gsall;
        gj.innerHTML = (youall).toFixed(2);
        if(gsall>=2){
            var hui = (youall*0.9).toFixed(2);
            yhui = (youall-hui).toFixed(2);
            gall.innerHTML = hui;
            hi.innerHTML = yhui;


        }else{
            hi.innerHTML = 0;
            gall.innerHTML = youall;
        }
    }
    render();

    
    // 事件委托：实现删除当前商品的效果
        ul.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if(target.className === 'cdel'){
                // 获取当前li
                var Li = target.parentNode.parentNode;
                var guid = Li.getAttribute('data-guid');

                for(var i=0;i<carGoods.length;i++){
                    if(carGoods[i].guid === guid){
                        // 删除数组对应商品
                        carGoods.splice(i,1);
                        // 修改对应cookie
                        Cookie.set('carGoods',JSON.stringify(carGoods));
                        // 重新生成html结构
                        render();
                        // 删除html结构
                        break;
                    }
                }
            }
        }


}
datt();


//数量加减
function quty(){
    var qutys = document.getElementsByClassName('ctex');
    var xall = document.querySelector('.xall');
    var cjon = document.getElementsByClassName('cjon');
    var csub = document.getElementsByClassName('csub');
    var gpi = document.querySelector('.gpi');
    var uls = document.querySelector('.carGoods');
    var alls = document.querySelector('.G-all');

    var idx = 1

    qutys.onchange = function(){
        idx = qutys.value;

        xall.innerHTML =idx*gpi.innerHTML

    }

    for(var i=0;i<cjon.length;i++){
        
        (function(i){
            cjon[i].onclick = function(){
                idx++;
                qutys[i].value = idx;
                xall.innerHTML = (idx*gpi.innerHTML).toFixed(2);
            }
            csub[i].onclick = function(){
                --idx;  
            if(idx<=1){
                idx = 1;
            }
                qutys[i].value = idx;
                 xall.innerHTML = (idx*gpi.innerHTML).toFixed(2);
            }
        })(i);
    }
}
quty();




//多选框选择
function chex(){
    var hobby = document.getElementsByName('xuans');
    var all1 = document.querySelector('.che1');
    var all2 = document.querySelector('.che2');
    var all3 = document.querySelector('.che3');
    var delbtn = document.querySelector('.alldel');
    var oCarList = document.querySelector('.carGoods');

    let tanbox = document.querySelector('.tanbox');
    let del = document.querySelector('.del');
    let que = document.querySelector('.que');
        
    all3.checked = false;
    all1.onclick = function(){
        for(var i=0;i<hobby.length;i++){
            hobby[i].checked = all1.checked;
        }
    }
    all2.onclick = function(){
        for(var i=0;i<hobby.length;i++){
            hobby[i].checked = all2.checked;
        }
    }
    all3.onclick = function(){
        for(var i=0;i<hobby.length;i++){
            hobby[i].checked = all3.checked;
            
        }
    }


//清空购物袋
    delbtn.onclick = function(){            
        tanbox.style.display = 'block';
    }
    del.onclick = function() {
        tanbox.style.display = 'none';
    }
    que.onclick = function(){
        Cookie.remove('carGoods');
        oCarList.innerHTML = '';
        tanbox.style.display = 'none';
    }

    
    
    
       

}
chex();


//用户
    function use() {
        var Uid = document.querySelector('.uId');
        var dbox = document.querySelector('.d-box')
        var id1 = JSON.parse(Cookie.get('Aids'));
        Uid.innerHTML = '欢迎光临！' + id1;
        if (Uid !== '登录') {
            dbox.style.display = 'none';
            Uid.style.width = 110 + 'px';
            Uid.style.border = 'none';
        }
    }
    use();



//数量存进cookie
function ku(){
    var Gsall = document.querySelector('.Gs-all');

    var gt = JSON.parse(Cookie.get('gs'));
    gt = Gsall.innerHTML;

    document.cookie = 'gs=' + JSON.stringify(gt);
}
ku();


//结算
function jie(){
    var jbtn = document.querySelector('.btnAll');
    var gts = document.querySelector('.G-all');
    console.log(gts)
    jbtn.onclick = function(){
        if(gts.innerHTML = '0'){
            alert('请购买商品再结算^_^');
        }else{
            alert('结算成功，欢迎下次光临！')
        }
    }
}
jie();