-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2024 at 12:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `photodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `addons`
--

CREATE TABLE `addons` (
  `AddSerial` int(11) NOT NULL,
  `AddDescription` varchar(255) NOT NULL,
  `AddPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `addons`
--

INSERT INTO `addons` (`AddSerial`, `AddDescription`, `AddPrice`) VALUES
(901, 'Photographers Steels Add', 500.00),
(902, 'Photographers Video Add', 800.00),
(903, 'Albums Add (30X80 CM)', 250.00),
(904, 'Albums Add (40X60 CM)', 300.00),
(905, 'Magnets Add (10X12 CM)', 1.00),
(906, 'Magnets Add (20X24 CM)', 2.00),
(907, 'Canvas Add (40X60 CM)', 100.00),
(908, 'Canvas Add (50X70 CM)', 150.00),
(909, 'Canvas Add (60X90 CM)', 200.00);

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `AdminID` int(11) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `PhoneNumber` varchar(15) NOT NULL,
  `StreetAddress` varchar(255) NOT NULL,
  `ConfirmedOrdersCount` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`AdminID`, `Email`, `Password`, `FirstName`, `LastName`, `PhoneNumber`, `StreetAddress`, `ConfirmedOrdersCount`) VALUES
(1, 'djbenbass@gmail.com', 'Benchen224!', 'Ben Rafael', 'Chen', '0503620039', 'Ramhal 30, Akko, Israel, 2461123', 2),
(2, 'lior53685954@gmail.com', 'Shushi1234#', 'Lior', 'Shushan', '0545411683', 'Dafna 14, Afula, Israel, 1834254', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `PhoneNumber` varchar(15) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `StreetAddress` varchar(255) DEFAULT NULL,
  `OrderNumber` int(11) DEFAULT NULL,
  `CountOfAllOrders` int(11) DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `OrderHour` time DEFAULT NULL,
  `DateOfEvent` date DEFAULT NULL,
  `HourOfEvent` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`Email`, `Password`, `PhoneNumber`, `FirstName`, `LastName`, `StreetAddress`, `OrderNumber`, `CountOfAllOrders`, `OrderDate`, `OrderHour`, `DateOfEvent`, `HourOfEvent`) VALUES
('eladatias18@gmail.com', 'Atias555%', '0542843103', 'Elad', 'Atias', 'Orchid 4, Kiryat Tivon, Israel, 3652001', 1001, 1, '2024-03-09', '20:00:00', '2024-07-16', '19:00:00'),
('sapiredri16@gmail.com', 'Ariel1607!', '0546499269', 'Sapir', 'Edri', 'Aharon 34, Kiryat Motzkin, Israel, 2632236', 1002, 1, '2024-03-10', '05:00:00', '2024-06-20', '17:00:00'),
('shanicohen@gmail.com', 'Shani1234!', '0557882453', 'Shani', 'Cohen', 'Erez 5, Kfar Tavor, Israel, 1524100', 1003, 1, '2024-03-10', '18:00:00', '2024-10-25', '19:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `LocationZipCode` int(11) NOT NULL,
  `LocationName` varchar(255) DEFAULT NULL,
  `LocationArea` varchar(50) NOT NULL,
  `City` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`LocationZipCode`, `LocationName`, `LocationArea`, `City`) VALUES
(1100123, 'Chatto', 'North', 'Tiberias'),
(1100456, 'Kala', 'North', 'Haifa'),
(1100789, 'Sandrine', 'North', 'Nahariya'),
(2200123, 'Kai', 'Center', 'Emek Hafer'),
(2200456, 'Odeon', 'Center', 'Emek Hafer'),
(2200789, 'Troya', 'Center', 'Ashdod'),
(3300123, 'Adora', 'South', 'Dimona'),
(3300456, 'Narnia', 'South', 'Beer Sheva'),
(3300789, 'Tao', 'South', 'Kanot');

-- --------------------------------------------------------

--
-- Table structure for table `orderpacks`
--

CREATE TABLE `orderpacks` (
  `SerialPack` int(11) NOT NULL,
  `PackDescription` varchar(255) NOT NULL,
  `PricePack` decimal(10,2) NOT NULL,
  `PackName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderpacks`
--

INSERT INTO `orderpacks` (`SerialPack`, `PackDescription`, `PricePack`, `PackName`) VALUES
(201, 'Includes: 1 Steels Photographers, 1 Video Photographers, 2 Album 30X80 CM.', 3500.00, 'Bronze Simply'),
(202, 'Includes: 2 Steels Photographers, 1 Video Photographers, 3 Album 30X80 CM, 500 Magnets 10X12 CM.', 5000.00, 'Silver Plus'),
(203, 'Includes: 3 Steels Photographers, 2 Video Photographers, 5 Album 40X60 CM, 1000 Magnet 20X24, 2 Canvas 60X90 CM', 8900.00, 'Gold Premium');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OrderNumber` int(11) NOT NULL,
  `OrderType` varchar(50) NOT NULL,
  `OrderSerial` int(11) NOT NULL,
  `OrderPack` varchar(50) NOT NULL,
  `SerialPack` int(11) DEFAULT NULL,
  `PricePack` decimal(10,2) NOT NULL,
  `LocationName` varchar(255) DEFAULT NULL,
  `ConfirmedBy` varchar(255) DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `OrderHour` time DEFAULT NULL,
  `DateOfEvent` date DEFAULT NULL,
  `HourOfEvent` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderNumber`, `OrderType`, `OrderSerial`, `OrderPack`, `SerialPack`, `PricePack`, `LocationName`, `ConfirmedBy`, `OrderDate`, `OrderHour`, `DateOfEvent`, `HourOfEvent`) VALUES
(1001, 'Wedding Party', 101, 'Silver Plus', 202, 5000.00, 'Sandrine', 'djbenbass@gmail.com', '2024-03-09', '20:00:00', '2024-07-16', '19:00:00'),
(1002, 'Birth Daughter Party', 106, 'Bronze Simply', 201, 3500.00, 'Kala', 'djbenbass@gmail.com', '2024-03-10', '05:00:00', '2024-06-20', '17:00:00'),
(1003, 'Bar Mitzvah Party', 104, 'Silver Plus', 202, 5000.00, 'Chatto', 'lior53685954@gmail.com', '2024-03-10', '18:00:00', '2024-10-25', '19:00:00'),
(1004, 'Save The Date', 103, 'Silver Plus', 202, 5000.00, 'Odeon', NULL, '2024-03-22', '11:54:27', '2024-04-12', '19:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `ordertypes`
--

CREATE TABLE `ordertypes` (
  `OrderType` varchar(50) NOT NULL,
  `OrderSerial` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ordertypes`
--

INSERT INTO `ordertypes` (`OrderType`, `OrderSerial`) VALUES
('Bar Mitzvah Party', 104),
('Bat Mitzvah Party', 105),
('Birth Daughter Party', 106),
('Birth Son Party', 107),
('Henna Party', 102),
('Save The Date', 103),
('Wedding Party', 101);

-- --------------------------------------------------------

--
-- Table structure for table `photographers`
--

CREATE TABLE `photographers` (
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `PhoneNumber` varchar(15) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `StreetAddress` varchar(255) DEFAULT NULL,
  `OrderNumber` int(11) DEFAULT NULL,
  `CountOfAllOrders` int(11) DEFAULT NULL,
  `PhotographerType` varchar(50) DEFAULT NULL,
  `DateOfEvent` date DEFAULT NULL,
  `HourOfEvent` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photographers`
--

INSERT INTO `photographers` (`Email`, `Password`, `PhoneNumber`, `FirstName`, `LastName`, `StreetAddress`, `OrderNumber`, `CountOfAllOrders`, `PhotographerType`, `DateOfEvent`, `HourOfEvent`) VALUES
('Aviv77ab@gmail.com', 'Aviv1234!', '0504220593', 'Aviv', 'Abudi', 'Weizmann 34, Nahariya, Israel, 2238412', 1001, 1, 'Video', '2024-07-16', '19:00:00'),
('Ben.amar1507@gmail.com', 'Ben1234!', '0545811088', 'Ben', 'Amar', 'Tennis 7, Akko, Israel, 2455327', 1001, 1, 'Steels', '2024-07-16', '19:00:00'),
('djdavidmark1@gmail.com', 'David1234!', '0547838465', 'David', 'Mark', 'Yaffe Nof 14, Akko, Israel, 2472138', 1003, 1, 'Steels', '2024-10-25', '19:00:00'),
('djofekyomtove@gmail.com', 'Ofek1234!', '0542334179', 'Ofek', 'Yomtov', 'Dotan 2, Akko, Israel, 2404344', 1003, 1, 'Video', '2024-10-25', '19:00:00'),
('ilanedri1@gmail.com', 'Edri903&', '0546393903', 'Ilan', 'Edri', 'Balfur 48, Tel Aviv, Israel, 6522606', 1002, 1, 'Steels', '2024-06-20', '17:00:00'),
('Liadazo22@gmail.com', 'Liad1234!', '0526024168', 'Liad', 'Azulay', 'HaShalom Road 31, Akko, Israel, 2404357', 1003, 1, 'Steels', '2024-10-25', '19:00:00'),
('ofirbin12@gmail.com', 'Bindi69$', '0528728577', 'Ofir', 'Binder', 'Six Days 58, Haifa, Israel, 2625102', 1001, 1, 'Steels', '2024-07-16', '19:00:00'),
('Saharpanijel1@gmail.com', 'Sahar1234!', '0505509575', 'Sahar', 'Panijel', 'Ramhal 40, Akko, Israel, 2461138', 1002, 1, 'Video', '2024-06-20', '17:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addons`
--
ALTER TABLE `addons`
  ADD PRIMARY KEY (`AddSerial`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`AdminID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`Email`),
  ADD KEY `OrderNumber` (`OrderNumber`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`LocationZipCode`),
  ADD KEY `idx_LocationPostalCode` (`LocationZipCode`);

--
-- Indexes for table `orderpacks`
--
ALTER TABLE `orderpacks`
  ADD PRIMARY KEY (`SerialPack`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderNumber`),
  ADD KEY `LocationPostalCode` (`LocationName`);

--
-- Indexes for table `ordertypes`
--
ALTER TABLE `ordertypes`
  ADD PRIMARY KEY (`OrderType`);

--
-- Indexes for table `photographers`
--
ALTER TABLE `photographers`
  ADD PRIMARY KEY (`Email`),
  ADD KEY `OrderNumber` (`OrderNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `AdminID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`OrderNumber`) REFERENCES `orders` (`OrderNumber`);

--
-- Constraints for table `photographers`
--
ALTER TABLE `photographers`
  ADD CONSTRAINT `photographers_ibfk_1` FOREIGN KEY (`OrderNumber`) REFERENCES `orders` (`OrderNumber`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
