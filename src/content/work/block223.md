---
title: Block 223
publishDate: 2019-04-09 14:00:00
img: /assets/block223.webp
img_alt: Block Breaker clone made in Java from a McGill University Course
anim: /assets/block223-anim.webp
description: |
  In a team of 5, developed a block breaker game using Java.
tags:
 - Java
---
## Overview
In 2019, in a team of 6, I contributed to every layer of a block breaker game as part of a [McGill University course — ECSE 223: Model-Based Programming](https://www.mcgill.ca/study/2018-2019/courses/ecse-223). (GitHub repo [here](https://github.com/W2019-ECSE223/ecse223-group-project-p-23).)

### Tech Stack

Our tech stack for that project looked like the following:

| Layer                   | Technology   |
| :---------------------- | :----------: |
| **Frontend:**           | Java Swing   | 
| **Backend:**            | Java         |
| **Testing:**            | JUnit        | 
| **Version Control:**    | Git, GitHub  |
| **Project Management:** | Agile, Scrum | 
| **Modelling Tools:**    | Umple, UML   | 

## How to Run this Project?
Because this is a 5+ year old project, we used the latest versions of the tools available at the time (2019).

### JRE Version

You must run this project using ***Java SE 8*** or it will likely not work. 
If you are using ***IntelliJ IDEA Community Edition***, navigate to `File -> Settings -> Build, Execution, Deployment -> Build Tools -> Gradle`. 
Then, select the option `Gradle JVM -> Add SDK -> Download SDK...`.
Then, set the `Version` to `1.8` and download the JDK from a vendor of your choosing.
Now, you should be able to successfully build and run the project.

### External JUnit Libraries
In this course, we did not use a build automation tool to manage dependencies. 
Therefore, I recommend downloading ***JUnit 4.13.1*** and ***JUnit Jupiter 5.8.1*** for running our tests.

### Running the Project

The main class is `ca.mcgill.ecse223.block.application.Block223Application`.

