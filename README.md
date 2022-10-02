# SKYTRADERS - Angular Homework

This task is about creating a multi-language website implemented in Angular running on AWS Amplify. In a future version the website will interact with certain functions of our trading backend.

# Task
- Coding in Angular
- Deployment on Amazon Amplify using the Bitbucket pipeline

# Development - Day 1

https://user-images.githubusercontent.com/88943189/192888717-4d7086ef-a99e-43a4-9a3b-9b88d33cbe82.mp4

Challenges and Results
- Angular Project initalization for future development process (smart/dumb components, testing, routing etc)
- Header Component (Navbar, Header content, Header)
- Clean Folder Structure (example: Components folder -> header -> header-content, navbar or Pages folder for different routes in the future)
- Clean CSS Structure categorized, seperated and added comment seperation to handle growing codebase in CSS files for readability
- SVG, Images comes from Assets folder
- SVG Imports with <mat-icon>, MatIconRegistry, DomSanitizer
- Pure Css structure & animations
- Clean semantic commit history
- Fully responsive design, compatible view with every mobile viewport - rem relative lengths
  
Technologies
- Angular (HTML, Typescript, CSS)
- Starting project on Github
- Figma
- IntelliJ IDEA Ultimate
- Visual Studio Code
- Mozilla Firefox Developer Tools / Plugins

# Development - Day 2

https://user-images.githubusercontent.com/88943189/193032114-b6f54b1b-f3cf-443e-9d1b-e61ee5486fe9.mp4

Challenges and Results
- Learning AWS & Bitbucket
- Project is now on Bitbucket also.
- Bitbucket - SSH key add for Windows desktop and Linux laptop
- Fully responsive design for both header and footer
- Reusable components creation with custom design
- 3 layouts for different viewports - fully responsive for every mobile devices
- Restructure CSS files
- Seperating Angular folders into different components to reuse them, give them inline styles if neccesary
- Clean Code: Refactor code duplications, categorising components, files, code
- Semantic Commit Messages

# Final Version of the Page
Making the foundations solid and secure for development in the future - Routes, Tests, Imports, Reusable Components (Dummy, Smart Components) etc.
  
![Skytraders - V3](https://user-images.githubusercontent.com/88943189/193121003-9bb9bab2-f4aa-49c0-b50e-0f17d7bcc77b.png)

# Deployed AWS Webpage Link
  
https://main.d2u4o98td6wma7.amplifyapp.com/

# Finished Tasks
- Fully responsive design - Working on mobile devices also
- Coding in Angular (Reusable components, routing foundations, test possibilities, working gitignore (in and out), assets imports, clean folder structure)
- Clean Code Principles
- Semantic Comit History on Github
- Using Github - Bitbucket (backup github repository - main repository bitbucket) - sync between repos
- Working CI/CD - Deploy on AWS Amplify

# Deploy Script for AWS
version: 1
applications:
- appRoot: skytraders
  frontend:
  phases:
  preBuild:
  commands:
  - npm install
  build:
  commands:
  - npm run-script build
  artifacts:
  baseDirectory: dist/skytraders
  files:
  - '**/*'
  cache:
  paths:
  - node_modules/**/*
