CREATE TABLE `lesson_progress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`lessonId` int NOT NULL,
	`currentStep` int NOT NULL DEFAULT 0,
	`score` int NOT NULL DEFAULT 0,
	`status` enum('in_progress','completed') NOT NULL DEFAULT 'in_progress',
	`completedAt` timestamp,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `lesson_progress_id` PRIMARY KEY(`id`),
	CONSTRAINT `lesson_progress_user_lesson_unique` UNIQUE(`userId`,`lessonId`)
);
--> statement-breakpoint
CREATE TABLE `lesson_steps` (
	`id` int AUTO_INCREMENT NOT NULL,
	`lessonId` int NOT NULL,
	`position` int NOT NULL,
	`stepType` enum('warmup','explain','quiz','listen','recap') NOT NULL,
	`title` varchar(160) NOT NULL,
	`body` text NOT NULL,
	`prompt` text,
	`optionsJson` text,
	`answerIndex` int,
	`explanation` text,
	`audioText` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `lesson_steps_id` PRIMARY KEY(`id`),
	CONSTRAINT `lesson_steps_lesson_position_unique` UNIQUE(`lessonId`,`position`)
);
--> statement-breakpoint
CREATE TABLE `lessons` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(120) NOT NULL,
	`title` varchar(160) NOT NULL,
	`summary` text NOT NULL,
	`skill` enum('grammar','listening','reading','speaking','mixed') NOT NULL DEFAULT 'mixed',
	`level` varchar(32) NOT NULL DEFAULT 'Foundation',
	`estimatedMinutes` int NOT NULL DEFAULT 15,
	`status` enum('draft','published') NOT NULL DEFAULT 'draft',
	`authorId` int NOT NULL,
	`publishedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `lessons_id` PRIMARY KEY(`id`),
	CONSTRAINT `lessons_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
ALTER TABLE `lesson_progress` ADD CONSTRAINT `lesson_progress_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `lesson_progress` ADD CONSTRAINT `lesson_progress_lessonId_lessons_id_fk` FOREIGN KEY (`lessonId`) REFERENCES `lessons`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `lesson_steps` ADD CONSTRAINT `lesson_steps_lessonId_lessons_id_fk` FOREIGN KEY (`lessonId`) REFERENCES `lessons`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `lessons` ADD CONSTRAINT `lessons_authorId_users_id_fk` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `lesson_progress_lesson_idx` ON `lesson_progress` (`lessonId`);--> statement-breakpoint
CREATE INDEX `lesson_steps_lesson_idx` ON `lesson_steps` (`lessonId`);--> statement-breakpoint
CREATE INDEX `lessons_status_created_idx` ON `lessons` (`status`,`createdAt`);