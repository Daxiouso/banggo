<?php
  	$servername = "localhost";
    $username = "vae";
    $password = "123";
    //要操作的数据库
    $dbname = "banggo";
    //创建连接
    $conn = new mysqli($servername,$username,$password,$dbname);
    //检测连接
    if($conn -> connect_error){
        die("连接失败：".$conn -> connect_error);
    }
    //查询前设置编码，防止输出乱码
    $conn -> set_charset('utf8');
    // echo '连接成功';
	//打开目录目标文件夹
	$path = "D:\php\banggo\css\gImg";
	if(is_dir($path)){
		$dir = opendir($path); //返回源对象resource(3, stream). string "resource"
		$arr = array();
	while(($filename=readdir($dir)) !== false){
		if($filename != "." && $filename != ".."){
			array_push($arr,$filename);
			}
		}
	}


//	var_dump($dir);
	//开始读取文件夹的内容
	//读取到0会默认为false,所以要!==
	//把书名添加到数组中
	
	//遍历数组,插入数据库
	for($i=0;$i<count($arr);$i++){
		//随机名称
		// function getRandomString($len, $chars=null)
		// {
		//     if (is_null($chars)){
		//         $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		//     }  
		//     mt_srand(10000000*(double)microtime());
		//     for ($i = 0, $str = '', $lc = strlen($chars)-1; $i < $len; $i++){
		//         $str .= $chars[mt_rand(0, $lc)];  
		//     }
		//     return $str;
		// }
		// $num = getRandomString(8);
        // id
        $gid = $i+1;
        //商品名字
		$a=array(
            "a"=>"米郎骑士",
            "b"=>"Metersbonwe",
            "c"=>"妮芬儿");
		$gnn = $a[array_rand($a,1)];
		//折扣
		$b = array(
            "a"=>"1.6折",
            "b"=>"4折",
            "c"=>"3折",
            "d"=>"6折",
            "e"=>"2.2折",
            "f"=>"8折");
		$gzhe = $b[array_rand($b,1)];
        //商品描述
        $su = array(
            "a"=>"基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】",
            "b"=>"男植绒字母印花短袖T恤",
            "c"=>"男潮流字母图案印花短袖T恤",
            "d"=>"男士纯色一颗扣简约圆领短袖T恤【一件包邮】",
            "e"=>"男士纯色圆领短袖T恤杉打底衫【一件包邮】",
            "f"=>"男士夏季简约条纹衫短袖T恤【一件包邮】",
            "e"=>"男学院风图案印花短袖T恤");
        $gsuu = $su[array_rand($su,1)];
		//价格
		$aa = array(
            "a"=>"119",
            "b"=>"188",
            "c"=>"99",
            "d"=>"79",
            "e"=>"89",
            "f"=>"199"
        );
        $gold = $aa[array_rand($aa,1)];

        $oo = array(
            "a"=>"39.9",
            "b"=>"29.9",
            "c"=>"59.9",
            "d"=>"35.0",
            "e"=>"49.9",
            "f"=>"58"
        );
        $spci = $oo[array_rand($oo,1)];
		
	
		$sql = "INSERT INTO `goods`(`id`, `Gname`, `Gdz`, `Gshu`, `Gprict`, `Gold`, `Gurl`) VALUES ($gid,'$gnn','$gzhe','$gsuu',$spci,$gold,'../css/gImg/$arr[$i]')";
		$res = $conn -> query($sql);
		 if($res){
	    echo "success";
	    }else {
	       echo "fail:" . $sql . $conn->error;
	    }
	}
	

?>