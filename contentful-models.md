# Contentful Data Models

This document outlines the main content types configured in Contentful for this project.

### 1. `authorV2`

Used to fetch the main profile information for the website.
- `name` (Short text): The author's name.
- `biography` (Long text): The author's bio.
- `profilePhoto` (Media): A picture of the author.
- `twitterProfile` (Short text): URL to Twitter/X profile.
- `linkedinProfile` (Short text): URL to LinkedIn profile.
- `gitHubProfile` (Short text): URL to GitHub profile.

### 2. `resume`

Used to fetch the overall structure of the resume page.
- `title` (Short text): Title of the resume.
- `experience` (References, many): Links to `resumeCard` entries for work experience.
- `education` (References, many): Links to `resumeCard` entries for educational background.
- `skills` (List of Short text): Array of skills.

### 3. `resumeCard`

Used as individual cards for both "Experience" and "Education" lists in the resume.
- `companyName` (Short text): Name of the company or school.
- `position` (Short text): Job title or degree name.
- `startDate` (Date): Start date.
- `endDate` (Date): End date (leave blank for "Present").
- `description` (Rich text): Details about the role or education.
- `logo` (Media): Image file for the logo.
- `logoUrl` (Short text, optional): URL linking out to an external image instead of Media.
