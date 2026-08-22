CREATE TABLE `learning_achievements` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`code` varchar(48) NOT NULL,
	`evidence` varchar(120) NOT NULL,
	`awardedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `learning_achievements_id` PRIMARY KEY(`id`),
	CONSTRAINT `learning_achievements_user_code_unique` UNIQUE(`userId`,`code`)
);
--> statement-breakpoint
ALTER TABLE `learning_achievements` ADD CONSTRAINT `learning_achievements_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;