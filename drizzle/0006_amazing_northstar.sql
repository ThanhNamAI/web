CREATE TABLE `weekly_boss_attempts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`weekKey` varchar(16) NOT NULL,
	`totalQuestions` int NOT NULL,
	`correctAnswers` int NOT NULL,
	`durationSeconds` int NOT NULL,
	`score` int NOT NULL,
	`answersJson` text NOT NULL,
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `weekly_boss_attempts_id` PRIMARY KEY(`id`),
	CONSTRAINT `weekly_boss_attempts_user_week_unique` UNIQUE(`userId`,`weekKey`)
);
--> statement-breakpoint
ALTER TABLE `weekly_boss_attempts` ADD CONSTRAINT `weekly_boss_attempts_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `weekly_boss_attempts_user_completed_idx` ON `weekly_boss_attempts` (`userId`,`completedAt`);