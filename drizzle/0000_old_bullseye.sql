CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`class` varchar(255),
	`uroki` varchar(255),
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_class_unique` UNIQUE(`class`)
);
