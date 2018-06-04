
//注册
function zhuCe(){

    var yanZ = document.querySelector('.yanZ');
    var yMa = document.querySelector('.yMa');
    var hu = document.querySelector('.l-hu');
    var btn = document.querySelector('.btn-reg');

    let username = document.querySelector('.ueNa').value;
    let password = document.querySelector('.ueMi').value;


    var shu = '1234567890abcdefghijklmnopqrstuvwsyz'
    var sui = '';
    var num = parseInt(Math.random() * 37);

    function dian() {
        //点击刷新验证码                             
        hu.onclick = function() {
            sui = '';
            for (var i = 0; i < 4; i++) {
                var num = parseInt(Math.random() * 36);
                sui += shu[num];
            }
            return yMa.innerHTML = sui;
        }
    }
    dian();
    for (var i = 0; i < 4; i++) {
        var num = parseInt(Math.random() * 36);
        sui += shu[num];
    }
    yMa.innerHTML = sui;



    btn.onclick = function(e){
        e = e || window.event;
        //用户名
        var username = document.querySelector('#r-n').value;
        if(!/^[a-zA-Z|\u4e00-\u9fa5]+[\u4e00-\u9fa5\w\d]+$/i.test(username)){
            alert('用户名不合法');
            return false;
        }

        //密码
        var password = document.querySelector('#r-p').value;
        if(!/^[^\s]{3,20}$/i.test(password)){
            alert('密码不合法');
            return false;
        }

        

        //验证码
        var _yan = yanZ.value;
        var na = document.querySelector('#r-n');
        //验证码if条件
        var reg = new RegExp('_yan', 'ig');
        if (_yan === sui) {
            // btn.setAttribute('href', '../html/login.html');
            // alert('注册成功')
        } else {
            alert('验证码输入错误');

            yanZ.value = '';
            yanZ.focus();
        }

        var xhr = new XMLHttpRequest();
                

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                 if(xhr.responseText === "[]注册成功" && _yan === sui){
                    alert('注册成功');
                    window.open('login.html');

                 }else if(_yan !== sui){
                 }else{
                    alert('用户已存在,请重新注册');
                 }
            } 
            
        }
        xhr.open("post", "http://localhost/banggo/api/reg.php", true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(`username=${username}&password=${password}`);



        
    }
}
zhuCe();

