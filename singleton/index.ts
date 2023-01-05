import LoggerService from "./pattern";

console.log("LOGGER SERVICE INSTANCES");
const instance1 = LoggerService.getLoggerInstance();
const instance2 = LoggerService.getLoggerInstance();
const instance3 = LoggerService.getLoggerInstance();
const instance4 = LoggerService.getLoggerInstance();   
console.log("*****************************"); 
console.log();

// * Request Logs
console.log("REQUEST LOGS");
instance1.logHttpReq();
instance2.logHttpReq();
instance3.logHttpReq();
instance4.logHttpReq();
console.log("*****************************");
console.log();

// * Response Logs
console.log("RESPONSE LOGS");
instance1.logHttpRes();
instance2.logHttpRes();
instance3.logHttpRes();
instance4.logHttpRes();
console.log("*****************************");
console.log();

// * Error Logs
console.log("ERROR LOGS");
instance1.logHttpErr();
instance2.logHttpErr();
instance3.logHttpErr();
instance4.logHttpErr();
console.log("*****************************");