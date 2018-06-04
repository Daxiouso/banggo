//登录
function dl() {
    var title = document.querySelector('.l-title');
    var lis = title.children;
    var ueNa = document.querySelector('.ueNa');
    var ueMi = document.querySelector('.ueMi');
    for (var i = 0; i < lis.length; i++) {
        lis[0].className = 'hover';
        (function(i) {
            lis[i].onclick = function() {
                //去除其它高亮
                for (var j = 0; j < lis.length; j++) {
                    if (j === i) {
                        lis[j].className = 'hover';
                        ueNa.innerHTML = lis[j].getAttribute('itn');
                        ueMi.innerHTML = lis[j].getAttribute('itw');
                    } else {
                        lis[j].className = '';
                    }
                }
            }
        })(i);
    }
}
dl();






    //验证码
function yan() {
    var yanZ = document.querySelector('.yanZ');
    var yMa = document.querySelector('.yMa');
    var hu = document.querySelector('.l-hu');
    var btn = document.querySelector('.btn-login');
    var shu = '1234567890abcdefghijklmnopqrstuvwsyz';
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


        
        
    var aid = [];
    btn.onclick = () => {
        var _yan = yanZ.value;
        var reg = new RegExp('_yan', 'ig');
        //验证码if条件
        if (_yan !== sui) {

            alert('验证码输入错误！')
            yanZ.value = '';
            yanZ.focus();


            return false
        } 
            
        

if(true){



        let username = document.querySelector('#l-n').value;
        let password = document.querySelector('#l-p').value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.responseText === '登录成功') {
                    // alert(xhr.responseText)
                    var uid = username;

                    document.cookie = 'Aids=' + JSON.stringify(uid) + ';path=/';
                    btn.setAttribute('href', '../index.html');
                }else{
                    alert('此用户不存在')
                }
            }
        }
        xhr.open("post", "http://localhost/banggo/api/login.php", true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(`username=${username}&password=${password}`);

}

        
    }
}
yan();

