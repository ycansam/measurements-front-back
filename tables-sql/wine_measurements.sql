CREATE TABLE `wine_measurements` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`year` INT(5) NOT NULL,
	`variety` ENUM('Cabernet Sauvignon','Chardonnay','Pinot Noir','Merlot','Syrah') NOT NULL DEFAULT 'Cabernet Sauvignon' COLLATE 'latin1_swedish_ci',
	`type` ENUM('Vino tinto','Vino blanco','Vino rosado','Vino espumoso','Vino fortificado') NOT NULL DEFAULT 'Vino tinto' COLLATE 'latin1_swedish_ci',
	`color` VARCHAR(64) NOT NULL COLLATE 'latin1_swedish_ci',
	`temperature` DECIMAL(20,6) NOT NULL,
	`graduation` DECIMAL(20,6) NOT NULL,
	`hydrogen_potencial` INT(2) UNSIGNED NOT NULL,
	`observations` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE,
	CONSTRAINT `check_hydrogen_potencial` CHECK (`hydrogen_potencial` >= 0 and `hydrogen_potencial` <= 14),
	CONSTRAINT `check_color_length` CHECK (length(`color`) >= 3)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;
