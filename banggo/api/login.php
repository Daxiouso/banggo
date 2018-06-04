<?php

// 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');

require("connect.php");
$username = $_POST['username'];
$password = $_POST['password'];

//查询username
//"查找 *[所有] 来自 `表单名` 哪里 表单标题 = 输入的值"
$sql = "SELECT * FROM `yong` WHERE username = '$username'";
//执行sql语句,查询结果
$result = $conn -> query($sql);
//得到数组
$row = $result -> fetch_all(MYSQLI_ASSOC);
if($row[0]['password']===$password){
    echo "登录成功";
}else{
    echo "登录失败";
}
$conn -> close();
?>