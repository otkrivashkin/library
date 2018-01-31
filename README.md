# Library app
simple app wich using angular 2 for ui and java spring for back.

## Requirements
1. Java - 1.8.x
2. Maven - 4.x.x
3. PostgreSQL - 9.4.x
## Steps to setup
#### BACKEND
**1. Clone the application**
```bash
git clone https://github.com/otkrivashkin/library.git
```
**2. Create PostgreSQL database**
```bash
create database library
```
**3. Change postgreSQL username and password as per your installation**
```bash
open src/main/resources/application.properties
change spring.datasource.username and spring.datasource.password
as per your postgresql installation
```
**4. Run src/main/java/LibraryApplication**
#### FRONTEND
**1. Install angular node modules**
```bash
cd frontend/src/main/frontend run npm install
```
**2. Start angular ui**
```bash
cd frontend/src/main/frontend run npm start
```