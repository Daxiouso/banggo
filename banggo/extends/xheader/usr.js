//获取用户名
function use() {
        var Uid = document.querySelector('.uId');
        var dbox = document.querySelector('.d-box')
        var id1 = JSON.parse(Cookie.get('Aids'));
        var gnu = document.querySelector('.gouwdNum');
    
        var gt = JSON.parse(Cookie.get('gs'));
        
        gnu.innerHTML = gt;


        Uid.innerHTML = '欢迎光临！' + id1;
        if (Uid !== '登录') {
            dbox.style.display = 'none';
            Uid.style.width = 110 + 'px';
            Uid.style.border = 'none';
        }
}
use();

//点击购物袋判断是否登录
function dai(){
    var gouwd = document.querySelector('.gouwd');
    var hr = gouwd.children[0];
    var Uid = document.querySelector('.uId');

    console.log(Uid.innerHTML)
    gouwd.onclick = function(){
        if(Uid.innerHTML == '登录'){
            hr.setAttribute('href','');
            alert('请先登录');
        }else{
            hr.setAttribute('href','car.html');
        }
    }
}
dai();