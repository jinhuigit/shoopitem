/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : shoopitem

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-05-18 10:33:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner`
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `pic` varchar(200) NOT NULL,
  `text` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', 'http://image31.bookschina.com/pro-images/newtejia/990360.jpg?id=5', '新品一周特惠每天更新');
INSERT INTO `banner` VALUES ('2', 'http://image31.bookschina.com/pro-images/180516child/990360.jpg?id=5', '全场童书折上8.8折');
INSERT INTO `banner` VALUES ('3', 'http://image31.bookschina.com/uploadfiles/images/8211_ad990.jpg', '维多利亚时代艺术潮流');
INSERT INTO `banner` VALUES ('4', 'http://image31.bookschina.com/uploadfiles/images/8206_ad990.jpg', '中国文库');
INSERT INTO `banner` VALUES ('5', 'http://image31.bookschina.com/uploadfiles/images/8209_ad990.jpg', '名家析名著');
INSERT INTO `banner` VALUES ('6', 'http://image31.bookschina.com/pro-images/180511pl/990360.jpg?id=5', '漂泊与流浪');

-- ----------------------------
-- Table structure for `yonghu`
-- ----------------------------
DROP TABLE IF EXISTS `yonghu`;
CREATE TABLE `yonghu` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) NOT NULL,
  `pass` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yonghu
-- ----------------------------
INSERT INTO `yonghu` VALUES ('1', '13456456456', '16273539feb15eda2c290dca89985e79');
INSERT INTO `yonghu` VALUES ('2', '13456456452', '16273539feb15eda2c290dca89985e79');
INSERT INTO `yonghu` VALUES ('3', '13456456457', '6005545589ffb607bc7f9f90ce44e31d');
INSERT INTO `yonghu` VALUES ('4', '13456456450', '16273539feb15eda2c290dca89985e79');
INSERT INTO `yonghu` VALUES ('5', '13456456451', '16273539feb15eda2c290dca89985e79');
INSERT INTO `yonghu` VALUES ('6', '13456456453', '6005545589ffb607bc7f9f90ce44e31d');
