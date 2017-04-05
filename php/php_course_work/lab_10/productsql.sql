CREATE TABLE IF NOT EXISTS `Product` (
`id` int(11) NOT NULL AUTO_INCREMENT,                                                                            
`title` varchar(25) DEFAULT NULL,
`price` decimal(5,2),
`shippers` varchar(25) DEFAULT NULL,
`weight` int(11),
`is_recyclable` boolean,
PRIMARY KEY (`id`)
);