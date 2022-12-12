-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id_messages` int NOT NULL AUTO_INCREMENT,
  `id_sender` int DEFAULT NULL,
  `id_recipient` int DEFAULT NULL,
  `text_massage` varchar(3000) DEFAULT NULL,
  `date_message` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_messages`),
  KEY `px_1_idx` (`id_sender`),
  KEY `px2_idx` (`id_recipient`),
  CONSTRAINT `px2` FOREIGN KEY (`id_recipient`) REFERENCES `users` (`id_users`),
  CONSTRAINT `px_1` FOREIGN KEY (`id_sender`) REFERENCES `users` (`id_users`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,2,1,'Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ','2022-12-10 21:00:00'),(2,3,1,'Voice message','2022-12-10 21:00:00'),(3,4,1,'Cicero famously orated against his political opponent Lucius Sergius Catilina.','2022-12-10 21:00:00'),(4,5,1,'Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.','2022-12-10 21:00:00'),(5,2,1,'ffefefefefef','2022-12-10 21:00:00'),(6,1,2,'rerg','2022-12-12 18:15:51'),(7,1,2,'ggrggr','2022-12-12 18:22:56'),(8,1,2,'eefef','2022-12-12 18:25:28'),(9,1,2,'gdggwerg','2022-12-12 18:36:39'),(10,1,2,'rgrgrgrg','2022-12-12 18:38:08'),(11,1,2,'ththththththth','2022-12-12 18:39:23'),(12,1,2,'rrrgrgrg','2022-12-12 18:40:07');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_users` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `photo_path` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id_users`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Henry','Jabbawockiez',NULL),(2,'Luy','Robin',NULL),(3,'Jared','Sunn',NULL),(4,'Nika','Jerrardo',NULL),(5,'David','Amrosa',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-12 21:46:21
