<?php

require('connect.php');
$id = $_POST['id'];
$shu = $_POST['shu'];
$pri = $_POST['pri'];
$old = $_POST['old'];
$color = $_POST['color'];
$size = $_POST['size'];
$lis = $_POST['lis'];
$url = $_POST['url'];

$sql = "INSERT INTO `carGoods`(`id`, `gshu`, `gprict`, `gold`, `gcolor`, `gsize`, `glist`, `gurl`) VALUES ($id,'$shu',$pri,$old,'$color','$size','$lis','$url')";
$res = $conn -> query($sql);
if($res){
    echo "success";
}else {
    echo "fail:" . $sql . $conn->error;
}
?>