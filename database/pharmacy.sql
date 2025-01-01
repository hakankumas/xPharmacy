-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2024 at 01:44 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharmacy`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', '123');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `gender_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `surname`, `gender_id`) VALUES
(1, 'Ali', 'AK', 1),
(2, 'Ahmet', 'GÖNÜL', 1),
(3, 'Fatma', 'PEMBE', 2),
(4, 'Hayri', 'YEŞİL', 1),
(5, 'Adil', 'YILDIZ', 1),
(6, 'Selim', 'İZCİ', 1),
(7, 'Veysel', 'SEVİNÇ', 1),
(8, 'İbrahim', 'HACIBEY', 1),
(9, 'Fırat', 'DURAN', 1),
(10, 'Fevzi', 'İLK', 1),
(11, 'Sevil', 'DİREN', 2),
(12, 'Feyza', 'AKINCI', 2),
(13, 'Sadi', 'ÖNCÜ', 1),
(14, 'Halit', 'YÜKSEK', 1),
(15, 'Neriman', 'İNCİ', 2),
(16, 'Derya', 'İNCESU', 2),
(17, 'Sevim', 'GÖZÜPEK', 2);

-- --------------------------------------------------------

--
-- Table structure for table `customer_drug`
--

CREATE TABLE `customer_drug` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `drug_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `customer_drug`
--

INSERT INTO `customer_drug` (`id`, `customer_id`, `drug_id`, `amount`, `date`) VALUES
(1, 1, 1, 3, '2024-12-02 15:09:36'),
(2, 2, 2, 1, '2024-06-30 21:30:38'),
(3, 1, 2, 1, '2024-12-04 21:00:00'),
(4, 3, 1, 5, '2024-12-02 10:29:25'),
(5, 4, 2, 1, '2024-08-02 10:09:25'),
(6, 3, 4, 1, '2024-01-04 08:29:26'),
(7, 5, 1, 3, '2024-11-10 21:29:53'),
(8, 2, 3, 1, '2024-10-31 21:29:53'),
(9, 5, 2, 1, '2024-11-11 21:29:53'),
(10, 13, 2, 1, '2024-10-05 21:45:12'),
(11, 8, 1, 5, '2024-10-21 21:45:12'),
(12, 7, 2, 1, '2024-12-01 21:45:49'),
(13, 3, 5, 3, '2024-09-09 21:51:35'),
(14, 13, 4, 3, '2024-05-01 21:51:35'),
(15, 16, 7, 1, '2024-11-09 21:51:35'),
(16, 5, 1, 2, '2024-06-01 21:51:35'),
(17, 6, 2, 3, '2024-11-01 21:51:35'),
(18, 12, 6, 2, '2024-11-01 21:51:35'),
(19, 15, 7, 2, '2024-12-01 21:51:35'),
(20, 10, 4, 1, '2024-11-05 21:51:35'),
(21, 10, 3, 1, '2024-12-05 21:51:35'),
(22, 11, 1, 1, '2024-11-05 21:51:35'),
(23, 11, 1, 3, '2024-04-05 21:51:35'),
(24, 12, 3, 3, '2024-11-01 21:51:35'),
(25, 15, 3, 2, '2024-03-01 21:51:35'),
(26, 15, 5, 3, '2024-12-01 21:51:35'),
(27, 3, 6, 1, '2024-10-01 21:51:35'),
(28, 5, 5, 1, '2024-11-01 21:51:35'),
(29, 6, 1, 2, '2024-10-01 21:51:35'),
(30, 3, 4, 3, '2024-10-01 21:51:35'),
(31, 16, 7, 3, '2024-12-10 05:51:35'),
(32, 1, 6, 1, '2024-02-01 21:51:35'),
(33, 3, 5, 2, '2024-12-01 21:51:35'),
(34, 13, 1, 1, '2024-11-01 21:51:35'),
(35, 11, 1, 1, '2024-11-01 21:51:35'),
(36, 10, 1, 3, '2024-11-05 21:51:35'),
(37, 1, 5, 3, '2024-01-05 21:51:35'),
(38, 2, 2, 3, '2024-12-05 21:51:35'),
(39, 4, 7, 1, '2024-12-05 21:51:35'),
(40, 6, 6, 1, '2024-11-04 21:51:35'),
(41, 9, 7, 1, '2024-11-04 21:51:35'),
(42, 7, 1, 2, '2024-11-14 21:51:35'),
(43, 1, 3, 2, '2024-10-14 21:51:35'),
(44, 7, 7, 1, '2024-10-14 21:51:35'),
(45, 1, 7, 1, '2024-10-04 21:51:35'),
(46, 9, 6, 1, '2024-12-04 21:51:35'),
(47, 14, 6, 1, '2024-12-04 21:51:35'),
(48, 13, 5, 1, '2024-11-24 21:51:35'),
(49, 11, 3, 1, '2024-11-24 21:51:35'),
(50, 16, 3, 1, '2024-11-24 21:51:35'),
(51, 5, 6, 3, '2024-09-17 22:06:35'),
(54, 15, 6, 5, '2023-12-19 21:01:51'),
(55, 2, 4, 3, '2023-12-29 21:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `drug`
--

CREATE TABLE `drug` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sale_price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `drug`
--

INSERT INTO `drug` (`id`, `name`, `sale_price`) VALUES
(1, 'Parol', 89.99),
(2, 'Tetanoz Aşısı', 59.99),
(3, 'Parasetamol', 54.99),
(4, 'Grip Aşısı', 47.5),
(5, 'Tylol Hot', 49.99),
(6, 'A-ferin', 34.99),
(7, 'Aspirin', 37.5);

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`id`, `name`) VALUES
(1, 'Erkek'),
(2, 'Kadın');

-- --------------------------------------------------------

--
-- Table structure for table `supply`
--

CREATE TABLE `supply` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `supply`
--

INSERT INTO `supply` (`id`, `name`) VALUES
(1, 'A İlaç Tedarik Lim Şirketi'),
(2, 'B İlaç Tedarik Lim Şirketi'),
(3, 'C İlaç Tedarik Lim Şirketi'),
(4, 'D İlaç Tedarik Lim Şirketi'),
(5, 'E İlaç Tedarik Lim Şirketi'),
(9, 'F İlaç Tedarik Lim Şirketi');

-- --------------------------------------------------------

--
-- Table structure for table `supply_drug`
--

CREATE TABLE `supply_drug` (
  `id` int(11) NOT NULL,
  `supply_id` int(11) NOT NULL,
  `drug_id` int(11) NOT NULL,
  `buying_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `supply_drug`
--

INSERT INTO `supply_drug` (`id`, `supply_id`, `drug_id`, `buying_price`) VALUES
(1, 1, 1, 69.99),
(2, 1, 2, 49.99),
(3, 2, 1, 64.99),
(4, 3, 2, 54.99),
(5, 4, 1, 59.99),
(12, 4, 3, 39.99),
(13, 1, 5, 29.99),
(14, 1, 7, 14.99),
(15, 4, 5, 32.5),
(16, 3, 5, 33.5),
(17, 5, 1, 72.5),
(18, 3, 6, 24.99),
(19, 3, 4, 39.99),
(20, 1, 4, 34.99);

-- --------------------------------------------------------

--
-- Table structure for table `supply_drug_order`
--

CREATE TABLE `supply_drug_order` (
  `id` int(11) NOT NULL,
  `supply_drug_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `supply_drug_order`
--

INSERT INTO `supply_drug_order` (`id`, `supply_drug_id`, `amount`, `date`) VALUES
(1, 1, 30, '2024-12-09 18:11:06'),
(3, 3, 50, '2024-12-13 15:05:12'),
(4, 4, 70, '2024-12-13 15:06:18'),
(5, 2, 40, '2024-12-13 15:21:59'),
(6, 1, 30, '2024-12-13 22:02:11'),
(7, 3, 100, '2024-12-13 22:02:38'),
(8, 20, 25, '2024-12-13 22:09:37'),
(9, 5, 50, '2024-12-13 22:09:55'),
(10, 20, 40, '2024-12-13 22:11:53'),
(11, 12, 20, '2024-12-13 22:12:00'),
(12, 17, 10, '2024-12-13 22:12:20'),
(13, 2, 50, '2024-12-13 22:12:33'),
(14, 4, 20, '2024-12-13 22:12:42'),
(15, 16, 10, '2024-12-13 23:00:25'),
(16, 18, 20, '2024-12-13 23:00:50'),
(17, 14, 20, '2024-12-13 23:01:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cinsiyet_id` (`gender_id`);

--
-- Indexes for table `customer_drug`
--
ALTER TABLE `customer_drug`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `drug_id` (`drug_id`);

--
-- Indexes for table `drug`
--
ALTER TABLE `drug`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supply`
--
ALTER TABLE `supply`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supply_drug`
--
ALTER TABLE `supply_drug`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supply_id` (`supply_id`),
  ADD KEY `drug_id` (`drug_id`);

--
-- Indexes for table `supply_drug_order`
--
ALTER TABLE `supply_drug_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supply_drug_id` (`supply_drug_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `customer_drug`
--
ALTER TABLE `customer_drug`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `drug`
--
ALTER TABLE `drug`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supply`
--
ALTER TABLE `supply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `supply_drug`
--
ALTER TABLE `supply_drug`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `supply_drug_order`
--
ALTER TABLE `supply_drug_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customer_drug`
--
ALTER TABLE `customer_drug`
  ADD CONSTRAINT `customer_drug_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `customer_drug_ibfk_2` FOREIGN KEY (`drug_id`) REFERENCES `drug` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `supply_drug`
--
ALTER TABLE `supply_drug`
  ADD CONSTRAINT `supply_drug_ibfk_1` FOREIGN KEY (`supply_id`) REFERENCES `supply` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `supply_drug_ibfk_2` FOREIGN KEY (`drug_id`) REFERENCES `drug` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `supply_drug_order`
--
ALTER TABLE `supply_drug_order`
  ADD CONSTRAINT `supply_drug_order_ibfk_1` FOREIGN KEY (`supply_drug_id`) REFERENCES `supply_drug` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
