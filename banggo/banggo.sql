-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-06-04 06:29:50
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banggo`
--

-- --------------------------------------------------------

--
-- 表的结构 `cargoods`
--

CREATE TABLE `cargoods` (
  `id` int(11) NOT NULL,
  `gshu` text NOT NULL,
  `gprict` float NOT NULL,
  `gold` float NOT NULL,
  `gcolor` text NOT NULL,
  `gsize` text NOT NULL,
  `glist` text NOT NULL,
  `gurl` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `cargoods`
--

INSERT INTO `cargoods` (`id`, `gshu`, `gprict`, `gold`, `gcolor`, `gsize`, `glist`, `gurl`) VALUES
(20, '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 29.9, 119, '正黑', 'M:170/92A\n', '3', '../css/gImg/good (27).jpg'),
(27, '男学院风图案印花短袖T恤', 35, 188, '正黑', 'L:175/96A\n', '1', '../css/gImg/good (33).jpg'),
(22, '男植绒字母印花短袖T恤', 29.9, 119, '月蓝黑', 'XL:180/100A\n', '1', '../css/gImg/good (29).jpg'),
(59, '男植绒字母印花短袖T恤', 35, 89, '漂白', 'S:165/88A\n', '2', '../css/gImg/good (62).jpg'),
(31, '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 58, 99, '维多利亚蓝', 'M:170/92A\n', '2', '../css/gImg/good (37).jpg'),
(19, '男士夏季简约条纹衫短袖T恤【一件包邮】', 39.9, 199, '正黑', 'L:175/96A\n', '1', '../css/gImg/good (26).jpg');

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `Gname` text NOT NULL,
  `Gdz` text NOT NULL,
  `Gshu` text NOT NULL,
  `Gprict` float NOT NULL,
  `Gold` float NOT NULL,
  `Gurl` text NOT NULL,
  `Gsur` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `Gname`, `Gdz`, `Gshu`, `Gprict`, `Gold`, `Gurl`, `Gsur`) VALUES
(33, '妮芬儿', '1.6折', '男潮流字母图案印花短袖T恤', 59.9, 188, '../css/gImg/good (39).jpg', 'css/gImg/good (39).jpg'),
(32, '米郎骑士', '3折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 29.9, 79, '../css/gImg/good (38).jpg', 'css/gImg/good (38).jpg'),
(31, '妮芬儿', '4折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 58, 99, '../css/gImg/good (37).jpg', 'css/gImg/good (37).jpg'),
(30, '妮芬儿', '8折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 49.9, 119, '../css/gImg/good (36).jpg', 'css/gImg/good (36).jpg'),
(29, '米郎骑士', '1.6折', '男植绒字母印花短袖T恤', 49.9, 89, '../css/gImg/good (35).jpg', 'css/gImg/good (35).jpg'),
(28, '妮芬儿', '2.2折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 59.9, 89, '../css/gImg/good (34).jpg', 'css/gImg/good (34).jpg'),
(27, 'Metersbonwe', '1.6折', '男学院风图案印花短袖T恤', 35, 188, '../css/gImg/good (33).jpg', 'css/gImg/good (33).jpg'),
(26, 'Metersbonwe', '8折', '男潮流字母图案印花短袖T恤', 59.9, 79, '../css/gImg/good (32).jpg', 'css/gImg/good (32).jpg'),
(25, 'Metersbonwe', '8折', '男植绒字母印花短袖T恤', 29.9, 79, '../css/gImg/good (31).jpg', 'css/gImg/good (31).jpg'),
(24, '米郎骑士', '8折', '男潮流字母图案印花短袖T恤', 39.9, 79, '../css/gImg/good (30).jpg', 'css/gImg/good (30).jpg'),
(23, '米郎骑士', '1.6折', '男潮流字母图案印花短袖T恤', 35, 89, '../css/gImg/good (3).jpg', 'css/gImg/good (3).jpg'),
(22, '米郎骑士', '6折', '男植绒字母印花短袖T恤', 29.9, 119, '../css/gImg/good (29).jpg', 'css/gImg/good (29).jpg'),
(21, 'Metersbonwe', '2.2折', '男潮流字母图案印花短袖T恤', 58, 188, '../css/gImg/good (28).jpg', 'css/gImg/good (28).jpg'),
(20, '妮芬儿', '1.6折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 29.9, 119, '../css/gImg/good (27).jpg', 'css/gImg/good (27).jpg'),
(19, '米郎骑士', '2.2折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 39.9, 199, '../css/gImg/good (26).jpg', 'css/gImg/good (26).jpg'),
(18, '米郎骑士', '1.6折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 59.9, 199, '../css/gImg/good (25).jpg', 'css/gImg/good (25).jpg'),
(17, 'Metersbonwe', '8折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 39.9, 199, '../css/gImg/good (24).jpg', 'css/gImg/good (24).jpg'),
(16, '妮芬儿', '3折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 58, 79, '../css/gImg/good (23).jpg', 'css/gImg/good (23).jpg'),
(15, '米郎骑士', '1.6折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 39.9, 99, '../css/gImg/good (22).jpg', 'css/gImg/good (22).jpg'),
(14, '妮芬儿', '6折', '男学院风图案印花短袖T恤', 49.9, 99, '../css/gImg/good (21).jpg', 'css/gImg/good (21).jpg'),
(13, '妮芬儿', '2.2折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 49.9, 79, '../css/gImg/good (20).jpg', 'css/gImg/good (20).jpg'),
(12, '米郎骑士', '8折', '男潮流字母图案印花短袖T恤', 39.9, 199, '../css/gImg/good (2).jpg', 'css/gImg/good (2).jpg'),
(11, '妮芬儿', '6折', '男植绒字母印花短袖T恤', 49.9, 119, '../css/gImg/good (19).jpg', 'css/gImg/good (19).jpg'),
(10, '妮芬儿', '4折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 39.9, 199, '../css/gImg/good (18).jpg', 'css/gImg/good (18).jpg'),
(9, 'Metersbonwe', '6折', '男潮流字母图案印花短袖T恤', 59.9, 119, '../css/gImg/good (17).jpg', 'css/gImg/good (17).jpg'),
(8, 'Metersbonwe', '3折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 29.9, 99, '../css/gImg/good (16).jpg', 'css/gImg/good (16).jpg'),
(7, '米郎骑士', '8折', '男学院风图案印花短袖T恤', 58, 119, '../css/gImg/good (15).jpg', 'css/gImg/good (15).jpg'),
(6, '米郎骑士', '3折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 29.9, 119, '../css/gImg/good (14).jpg', 'css/gImg/good (14).jpg'),
(5, '米郎骑士', '6折', '男潮流字母图案印花短袖T恤', 39.9, 119, '../css/gImg/good (13).jpg', 'css/gImg/good (13).jpg'),
(4, '妮芬儿', '4折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 58, 89, '../css/gImg/good (12).jpg', 'css/gImg/good (12).jpg'),
(3, '米郎骑士', '4折', '男潮流字母图案印花短袖T恤', 49.9, 89, '../css/gImg/good (11).jpg', 'css/gImg/good (11).jpg'),
(2, 'Metersbonwe', '1.6折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 58, 79, '../css/gImg/good (10).jpg', 'css/gImg/good (10).jpg'),
(1, '妮芬儿', '1.6折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 39.9, 79, '../css/gImg/good (1).jpg', 'css/gImg/good (1).jpg'),
(34, '妮芬儿', '1.6折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 58, 89, '../css/gImg/good (4).jpg', 'css/gImg/good (4).jpg'),
(35, '米郎骑士', '3折', '男学院风图案印花短袖T恤', 35, 199, '../css/gImg/good (40).jpg', 'css/gImg/good (40).jpg'),
(36, '米郎骑士', '1.6折', '男潮流字母图案印花短袖T恤', 59.9, 99, '../css/gImg/good (41).jpg', 'css/gImg/good (41).jpg'),
(37, 'Metersbonwe', '2.2折', '男潮流字母图案印花短袖T恤', 58, 99, '../css/gImg/good (42).jpg', 'css/gImg/good (42).jpg'),
(38, '米郎骑士', '8折', '男潮流字母图案印花短袖T恤', 35, 89, '../css/gImg/good (43).jpg', 'css/gImg/good (43).jpg'),
(39, '妮芬儿', '3折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 49.9, 199, '../css/gImg/good (44).jpg', 'css/gImg/good (44).jpg'),
(40, 'Metersbonwe', '6折', '男学院风图案印花短袖T恤', 59.9, 188, '../css/gImg/good (45).jpg', 'css/gImg/good (45).jpg'),
(41, '妮芬儿', '3折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 29.9, 199, '../css/gImg/good (46).jpg', 'css/gImg/good (46).jpg'),
(42, 'Metersbonwe', '2.2折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 39.9, 79, '../css/gImg/good (47).jpg', 'css/gImg/good (47).jpg'),
(43, '米郎骑士', '4折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 35, 99, '../css/gImg/good (48).jpg', 'css/gImg/good (48).jpg'),
(44, '妮芬儿', '3折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 49.9, 79, '../css/gImg/good (49).jpg', 'css/gImg/good (49).jpg'),
(45, 'Metersbonwe', '8折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 29.9, 89, '../css/gImg/good (5).jpg', 'css/gImg/good (89).jpg'),
(46, '妮芬儿', '2.2折', '男学院风图案印花短袖T恤', 58, 79, '../css/gImg/good (50).jpg', 'css/gImg/good (50).jpg'),
(47, 'Metersbonwe', '8折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 39.9, 188, '../css/gImg/good (51).jpg', 'css/gImg/good (51).jpg'),
(48, 'Metersbonwe', '8折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 35, 188, '../css/gImg/good (52).jpg', 'css/gImg/good (52).jpg'),
(49, '米郎骑士', '3折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 59.9, 119, '../css/gImg/good (53).jpg', 'css/gImg/good (53).jpg'),
(50, 'Metersbonwe', '8折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 49.9, 188, '../css/gImg/good (54).jpg', 'css/gImg/good (54).jpg'),
(51, 'Metersbonwe', '2.2折', '男植绒字母印花短袖T恤', 49.9, 79, '../css/gImg/good (55).jpg', ''),
(52, 'Metersbonwe', '2.2折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 29.9, 188, '../css/gImg/good (56).jpg', ''),
(53, '米郎骑士', '4折', '男植绒字母印花短袖T恤', 35, 119, '../css/gImg/good (57).jpg', ''),
(54, 'Metersbonwe', '8折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 29.9, 89, '../css/gImg/good (58).jpg', ''),
(55, 'Metersbonwe', '4折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 58, 99, '../css/gImg/good (59).jpg', ''),
(56, '米郎骑士', '2.2折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 49.9, 79, '../css/gImg/good (6).jpg', ''),
(57, 'Metersbonwe', '2.2折', '男植绒字母印花短袖T恤', 39.9, 119, '../css/gImg/good (60).jpg', ''),
(58, '妮芬儿', '4折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 49.9, 199, '../css/gImg/good (61).jpg', ''),
(59, 'Metersbonwe', '8折', '男植绒字母印花短袖T恤', 35, 89, '../css/gImg/good (62).jpg', ''),
(60, '米郎骑士', '4折', '男潮流字母图案印花短袖T恤', 49.9, 79, '../css/gImg/good (63).jpg', ''),
(61, 'Metersbonwe', '8折', '男植绒字母印花短袖T恤', 35, 99, '../css/gImg/good (64).jpg', ''),
(62, '米郎骑士', '6折', '男士纯色一颗扣简约圆领短袖T恤【一件包邮】', 39.9, 188, '../css/gImg/good (65).jpg', ''),
(63, 'Metersbonwe', '6折', '男潮流字母图案印花短袖T恤', 39.9, 99, '../css/gImg/good (66).jpg', ''),
(64, '妮芬儿', '2.2折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 29.9, 99, '../css/gImg/good (67).jpg', ''),
(65, '妮芬儿', '6折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 49.9, 119, '../css/gImg/good (68).jpg', ''),
(66, 'Metersbonwe', '3折', '男士夏季简约条纹衫短袖T恤【一件包邮】', 29.9, 79, '../css/gImg/good (69).jpg', ''),
(67, 'Metersbonwe', '8折', '男潮流字母图案印花短袖T恤', 35, 119, '../css/gImg/good (7).jpg', ''),
(68, '妮芬儿', '1.6折', '男学院风图案印花短袖T恤', 58, 188, '../css/gImg/good (70).jpg', ''),
(69, 'Metersbonwe', '8折', '男潮流字母图案印花短袖T恤', 49.9, 89, '../css/gImg/good (71).jpg', ''),
(70, '妮芬儿', '8折', '男植绒字母印花短袖T恤', 35, 119, '../css/gImg/good (72).jpg', ''),
(71, '妮芬儿', '2.2折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 29.9, 119, '../css/gImg/good (73).jpg', ''),
(72, 'Metersbonwe', '1.6折', '男植绒字母印花短袖T恤', 58, 119, '../css/gImg/good (74).jpg', ''),
(73, '米郎骑士', '3折', '基础纯棉舒适男士休闲圆领短袖印花T恤【一件包邮】', 39.9, 188, '../css/gImg/good (8).jpg', ''),
(74, '米郎骑士', '3折', '男植绒字母印花短袖T恤', 29.9, 119, '../css/gImg/good (9).jpg', ''),
(75, '米郎骑士', '6折', '男潮流字母图案印花短袖T恤', 39.9, 188, '../css/gImg/good (75).jpg', ''),
(76, 'Metersbonwe', '2.2折', '男植绒字母印花短袖T恤', 29.9, 89, '../css/gImg/good (76).jpg', '');

-- --------------------------------------------------------

--
-- 表的结构 `yong`
--

CREATE TABLE `yong` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `yong`
--

INSERT INTO `yong` (`id`, `username`, `password`) VALUES
(1, 'laoxie', '123'),
(2, 'lemon', '123'),
(3, 'laoyao', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cargoods`
--
ALTER TABLE `cargoods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `yong`
--
ALTER TABLE `yong`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cargoods`
--
ALTER TABLE `cargoods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
--
-- 使用表AUTO_INCREMENT `yong`
--
ALTER TABLE `yong`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
