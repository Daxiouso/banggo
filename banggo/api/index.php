<?php
require('connect.php');

$pa = $_GET["pa"] - 1;
$length = $_GET["length"];
$index = $pa*$length;
$sql = "SELECT * FROM `goods` LIMIT $index,$length";
//获取查询结果集
$result=$conn->query($sql);
//使用查询结果集
//得到数组
$row = $result->fetch_all(MYSQLI_ASSOC);
//html通过JSON_parse()进行转译
echo json_encode($row);
$result -> close();
// 关闭数据库，避免资源浪费
$conn -> close();


?>