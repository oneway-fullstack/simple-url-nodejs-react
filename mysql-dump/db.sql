/*
SQLyog Enterprise v12.08 (64 bit)
MySQL - 10.1.36-MariaDB : Database - simple_url_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`simple_url_db` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `simple_url_db`;

/*Table structure for table `players` */

DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `players` */

/*Table structure for table `sequelizemeta` */

DROP TABLE IF EXISTS `sequelizemeta`;

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sequelizemeta` */

insert  into `sequelizemeta`(`name`) values ('20211020174236-create-urls.js');

/*Table structure for table `urls` */

DROP TABLE IF EXISTS `urls`;

CREATE TABLE `urls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urlCode` varchar(255) DEFAULT NULL,
  `originUrl` varchar(255) DEFAULT NULL,
  `shortenUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

/*Data for the table `urls` */

insert  into `urls`(`id`,`urlCode`,`originUrl`,`shortenUrl`,`createdAt`,`updatedAt`) values (5,'wE0tvOU0T','https://www.linkedin.com/company/ibm/','http://localhost:3000/wE0tvOU0T','2021-10-20 19:08:28','2021-10-20 19:08:28'),(6,'M9rXyo6mB','https://www.linkedin.com/company/ibsm/','http://localhost:3000/M9rXyo6mB','2021-10-20 19:09:07','2021-10-20 19:09:07'),(7,'rxZovl7UC','http://localhost:3000/url/e9OPLxpt7df','http://localhost:3000/rxZovl7UC','2021-10-20 19:12:46','2021-10-20 19:12:46'),(8,'Wq0A6Drxf','https://www.linkedin.com/company/ibm/life/anz/','http://localhost:3000/Wq0A6Drxf','2021-10-20 19:13:35','2021-10-20 19:13:35'),(9,'_-732Bvqn','https://www.linkedin.com/company/ibm/life/anz/1','http://localhost:3000/_-732Bvqn','2021-10-20 19:14:10','2021-10-20 19:14:10'),(10,'L_2kYnWBM','https://www.linkedin.com/messaging/thread/2-YmY1YTA3MDMtMzI5Ny00ZjlmLWExNzctNTNkMWExODA3MmRiXzAxMg==/','http://localhost:3000/L_2kYnWBM','2021-10-20 19:15:06','2021-10-20 19:15:06'),(11,'6UKUQdBrM','https://www.linkedin.com/messaging/thread/2-Nzg0YmU0Y2UtZmNmMy00YzMxLWE3ZTItZDJlYTE2Y2JlYzJiXzAxMA==/','http://localhost:3000/6UKUQdBrM','2021-10-20 19:15:47','2021-10-20 19:15:47'),(12,'L7qH00U3Q','https://www.linkedin.com/messaging/thread/2-MzkzMjI1ZWQtZDU3MS00YTQwLTg0ZTYtMTM3M2Y2ZDk1YzJjXzAxMA==/','http://localhost:3000/L7qH00U3Q','2021-10-20 19:16:58','2021-10-20 19:16:58'),(13,'5LbCTzDRr','https://www.linkedin.com/messaging/thread/2-ODdhNTExZjItM2FmZi00Nzg2LTkzN2MtYTA3ZDg4Y2RhMTYxXzAxMA==/','http://localhost:3000/5LbCTzDRr','2021-10-20 19:17:28','2021-10-20 19:17:28'),(14,'CTlrZHuj5','https://www.linkedin.com/messaging/thread/2-ZjU4NmI2ZjktN2E5OS00OTIzLTgyZTgtODg2ZmRjYzAzYmNiXzAxMw==/','http://localhost:8000/CTlrZHuj5','2021-10-20 19:18:33','2021-10-20 19:18:33'),(15,'7kfDuxcnM','https://www.linkedin.com/messaging/thread/2-ZjU4NmI2ZjktN2E5OSs00OTIzLTgyZTgtODg2ZmRjYzAzYmNiXzAxMw==/','http://localhost:8000/7kfDuxcnM','2021-10-20 19:24:39','2021-10-20 19:24:39'),(16,'E1k4vZwO8','http://localhost:3000/sdfsdf','http://localhost:8000/E1k4vZwO8','2021-10-20 19:40:06','2021-10-20 19:40:06'),(17,'eYBzDPZ9d','http://localhost:3000/sdfsdfsd','http://localhost:8000/urleYBzDPZ9d','2021-10-20 19:40:29','2021-10-20 19:40:29'),(18,'gdD9iz0Dg','http://localhost:3000/sdfsdfsdsd','http://localhost:8000/url/gdD9iz0Dg','2021-10-20 19:40:40','2021-10-20 19:40:40');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
