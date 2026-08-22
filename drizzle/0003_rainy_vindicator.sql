CREATE TABLE `mock_test_attempts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`mode` varchar(24) NOT NULL DEFAULT 'simulation',
	`totalQuestions` int NOT NULL,
	`correctAnswers` int NOT NULL,
	`rawScore` int NOT NULL,
	`durationSeconds` int NOT NULL,
	`partScoresJson` text NOT NULL,
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mock_test_attempts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `mock_test_attempts` ADD CONSTRAINT `mock_test_attempts_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;