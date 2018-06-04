<?php
// 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');   
//连接数据库
require('connect.php');
$username = $_POST['username'];
$password = $_POST['password'];

//查询username
$sql = "SELECT * FROM `yong` WHERE username = '$username'";

//获取查询结果集
$result = $conn -> query($sql);
//使用查询结果集
//得到数组
$row = $result -> fetch_all(MYSQLI_ASSOC);
echo JSON_encode($row);
if($row){
    echo "此用户已存在";
}else{
    //写入数据库
    //"写入" `数据库表单名`(数据库内对应的标题) 值 (输入的值);
    $sql = "INSERT INTO `yong`(`username`,`password`) VALUES ('$username','$password')";
    //写入数据库
    $conn -> query($sql);
    echo "注册成功";
}
// 关闭数据库，避免资源浪费
$conn -> close();
?>