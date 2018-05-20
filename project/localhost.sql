-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 20 日 10:05
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `shoopitem`
--
CREATE DATABASE `shoopitem` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `shoopitem`;

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `pic` varchar(200) NOT NULL,
  `text` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`sid`, `pic`, `text`) VALUES
(1, 'http://image31.bookschina.com/pro-images/newtejia/990360.jpg?id=5', '新品一周特惠每天更新'),
(2, 'http://image31.bookschina.com/pro-images/180516child/990360.jpg?id=5', '全场童书折上8.8折'),
(3, 'http://image31.bookschina.com/uploadfiles/images/8211_ad990.jpg', '维多利亚时代艺术潮流'),
(4, 'http://image31.bookschina.com/uploadfiles/images/8206_ad990.jpg', '中国文库'),
(5, 'http://image31.bookschina.com/uploadfiles/images/8209_ad990.jpg', '名家析名著'),
(6, 'http://image31.bookschina.com/pro-images/180511pl/990360.jpg?id=5', '漂泊与流浪');

-- --------------------------------------------------------

--
-- 表的结构 `yonghu`
--

CREATE TABLE IF NOT EXISTS `yonghu` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) NOT NULL,
  `pass` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `yonghu`
--

INSERT INTO `yonghu` (`sid`, `phone`, `pass`) VALUES
(1, '13456456456', '16273539feb15eda2c290dca89985e79'),
(2, '13456456452', '16273539feb15eda2c290dca89985e79'),
(3, '13456456457', '6005545589ffb607bc7f9f90ce44e31d'),
(4, '13456456450', '16273539feb15eda2c290dca89985e79'),
(5, '13456456451', '16273539feb15eda2c290dca89985e79'),
(6, '13456456453', '6005545589ffb607bc7f9f90ce44e31d');
