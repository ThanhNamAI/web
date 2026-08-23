CREATE TABLE `mistake_items` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`source` enum('lesson','mock') NOT NULL,
	`sourceRef` varchar(80) NOT NULL,
	`skill` varchar(24) NOT NULL,
	`prompt` text NOT NULL,
	`optionsJson` text NOT NULL,
	`correctIndex` int NOT NULL,
	`selectedIndex` int NOT NULL,
	`explanation` text NOT NULL,
	`status` enum('active','mastered') NOT NULL DEFAULT 'active',
	`timesSeen` int NOT NULL DEFAULT 1,
	`timesCorrect` int NOT NULL DEFAULT 0,
	`dueAt` timestamp NOT NULL DEFAULT (now()),
	`lastAttemptedAt` timestamp NOT NULL DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mistake_items_id` PRIMARY KEY(`id`),
	CONSTRAINT `mistake_items_user_source_ref_unique` UNIQUE(`userId`,`source`,`sourceRef`)
);
--> statement-breakpoint
ALTER TABLE `mistake_items` ADD CONSTRAINT `mistake_items_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `mistake_items_user_status_due_idx` ON `mistake_items` (`userId`,`status`,`dueAt`);