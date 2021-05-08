# Brief description
This project is built on NestJS framework, uses Twitter API and DynamoDB, serverless framework

# Basic Requirements
- [x] Have access to aws 
- [x] Install Node.js

# How to setup project

1.  Now, you can execute **npm i** to download required libraries in the project.

2. for run local, npm  build and then npm run start

3. To get the last 5 tweets in timeline use the url http://localhost:3007/local/twitter/time-line

4. Take into account, the project run on port 3007

5. To post profile make post request to url http://localhost:3007/local/twitter/profile passing an object in body

6. To get current profile description make a GET request to http://localhost:3007/local/twitter/profile 

7. Take into account, Dynamo Table is created in sa-east-1 region.
