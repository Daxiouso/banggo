function Gdata() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var arr = JSON.parse(xhr.responseText);
                var html = arr.map((item) => {
                    return `<li data-guid="${item.id}" style="margin-right:15px;" class="gli">
                            <a href="../html/goods.html" class="Gubtn"><img src="${item.Gurl}" data-guid="${item.id}"/></a>
                            <p ><a class="Gname">${item.Gname}</a><label class="Gdz">${item.Gdz}</label></p>
                            <p><a class="Gshu">${item.Gshu}</a></p>
                            <p>￥<b class="Gprict">${item.Gprict}</b> <del class="Gold">${item.Gold}</del></p>
                        </li>`;
                }).join("\n");
                document.querySelector(".libm-r").innerHTML = html;
            }
        }
        xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${1}&length=16`, true);
        xhr.send(null);

        
    }
    Gdata();

function aa(){

    var yema = document.querySelector('.yema');
    var tp = document.querySelector('.tp');
    var tw = document.querySelector('.tw');

    var liga = yema.children;

    for(var i=0;i<liga.length;i++){
        (function(i){
            liga[i].onclick = function(){

                
                n = liga[i].innerHTML;

                if(liga[i].className === 'tw'){
                    n = 5;
                }
               
            var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var arr = JSON.parse(xhr.responseText);
                var html = arr.map((item) => {
                    return `<li data-guid="${item.id}" style="margin-right:15px;" class="gli">
                            <a href="../html/goods.html" class="Gubtn"><img src="${item.Gurl}" data-guid="${item.id}"/></a>
                            <p ><a class="Gname">${item.Gname}</a><label class="Gdz">${item.Gdz}</label></p>
                            <p><a class="Gshu">${item.Gshu}</a></p>
                            <p>￥<b class="Gprict">${item.Gprict}</b> <del class="Gold">${item.Gold}</del></p>
                        </li>`;
                }).join("\n");
                document.querySelector(".libm-r").innerHTML = html;
            }
        }
        xhr.open("get", "http://localhost/banggo/api/list.php?" + `pa=${n}&length=16`, true);
        xhr.send(null);
            

            }
        })(i)
    }
}
aa();

