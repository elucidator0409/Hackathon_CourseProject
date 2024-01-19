# Hackathon Course project

### 1. Install the dependencies
- if you are using Intellij, go to file `pom.xml` and select the reload option to install the dependencies
- Setup mysql: to run the project correctly, you must have mysql installed in the computer. Check link [here](https://dev.mysql.com/downloads/mysql/)

### 2. Setup database
- When you installed mysql, to run this project, you must create a database. You can use tools like `MySQL Workbench`. Remember the username and password
- Guides for each OS can be found below.
- Set the environment variables for **DB_DATABASE_NAME**, **DB_USERNAME**, **DB_PASSWORD** when you run the project. Check [guide](https://www.jetbrains.com/help/objc/add-environment-variables-and-program-arguments.html) for Intellij
- `DB_DATABASE_NAME` = the database name you created`
- `DB_USERNAME` = the username you use to create the database
- `DB_PASSWORD` = the password for the user
=======
# Hackathon Course project

### 1. Install the dependencies
- if you are using Intellij, go to file `pom.xml` and select the reload option to install the dependencies
- Setup mysql: to run the project correctly, you must have mysql installed in the computer. Check link [here](https://dev.mysql.com/downloads/mysql/)

### 2. Setup database
- When you installed mysql, to run this project, you must create a database. You can use tools like `MySQL Workbench`. Remember the username and password
- Guides for each OS can be found below.
- Set the environment variables for **DB_DATABASE_NAME**, **DB_USERNAME**, **DB_PASSWORD** when you run the project. Check [guide](https://www.jetbrains.com/help/objc/add-environment-variables-and-program-arguments.html) for Intellij
- `DB_DATABASE_NAME` = the database name you created`
- `DB_USERNAME` = the username you use to create the database
- `DB_PASSWORD` = the password for the user

### 3. Setup initial data for project
There are 4 step to setup initial data for main table of database :
- Cd to folder `data-ini`, open and check file `createDB.sh` and `ini.sh` then change username and password for mysql to yours
- Run this command to create database: 
```
./createDB.sh
```
- Start Springboot project
- Then run this command to insert initial data for project: 
```
./ini.sh
```

**IMPORTANT** If can not run `sh` file , run command direct in your terminal :
- Run: 
```
mysqladmin -u <USERNAME> -p'<PASSWORD>' create edu
```

For example:
```
mysqladmin -u root -p'Quockhanh0409' create edu
```

- Start Springboot project
- Then run:
```
mysql -u <USERNAME> -p'<PASSWORD>' --database=edu -e 'source data.sql'
```
