---
title: Cosmosis
publishDate: 2020-03-15 16:00:00
img: /assets/chess-java.webp
img_alt: Chess application made in Java from a McGill University Course
description: |
  In a team of 15, developed a chess application using Java.
tags:
 - Java
---
## Overview
In 2020, in a team of 15, I contributed to a chess application using Java as part of a [McGill University course — ECSE 428: Software Engineering Practice](https://www.mcgill.ca/study/2019-2020/courses/ecse-428). (GitHub repo [here](https://github.com/DarienMC/Cosmosis).)

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

### Configuring Account Database
Create a file named `accounts.txt` under `/src/main/resources/` and copy paste the following content into it:

```json title="accounts.txt"
[
      {
        "id" : "0",
        "username": "admin",
        "passwordHash": "92668751",
        "firstName": "Admin",
        "lastName": "Admin"
      },
]
```

### Running the Project

The main class is `ca.mcgill.ecse428.cosmosis.ChessApplication`.

