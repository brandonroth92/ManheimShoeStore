## Manheim Tester Application: Shoe Store

This repository contains a collection of files that collectively test for the acceptance criteria defined in the problem definition of the Manheim Shoe Store. The problem definition can be found [here](http://shoestore-manheim.rhcloud.com/definition).

[www.rothwebdevelopment.com](www.rothwebdevelopment.com) <br/>
[LinkedIn](https://www.linkedin.com/in/brandon-roth-159b62130)
[brandon.roth892@gmail.com](mailto:brandon.roth892@gmail.com)

## Tools Used:
* WebdriverIO
* Selenium-standalone server
* Mocha Testing Framework
* Chai Assertion Library
* Gulp Build Process
* ESLint JavaScript Linting Tool
* GitHub
  
## Methodologies:
* Object Oriented Design
* Page-object Model
* Assertions
* Arrays

### How to run
1. Clone git repository
2. Open cmd/terminal and navigate to directory
3. Run ```npm install```
4. Run ```npm run runTest``` (or ```gulp runTest``` if you have gulp installed globally)

## Results
Two tests should fail:
1. The test on whether the website checks that email addresses are valid will fail. The website does not verify the validity of email address as of this writing.
2. The test on whether every individual month page contains shoe releases will fail. As of this writing, the page for the month of december does not contain any shoe releases, nor a notification of the absence of shoe releases.
  
