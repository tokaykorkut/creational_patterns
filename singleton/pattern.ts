import { v4 as uuid } from "uuid";

class LoggerService {
    private static _instance: LoggerService;
    private instanceId: string;

    private constructor() {
        this.instanceId = uuid();
    }

    public static getLoggerInstance(){
        if (!LoggerService._instance) {
            LoggerService._instance = new LoggerService();
            console.log(`${this._instance.instanceId} logger instance was created.`);
        }
        console.log(`${this._instance.instanceId} logger instance already exists.`);
        return LoggerService._instance;
    }

    public logHttpReq() {
        console.log(`${this.instanceId} logger instance logs request data.`);
    }

    public logHttpRes() {
        console.log(`${this.instanceId} logger instance logs response data.`);
    }

    public logHttpErr() {
        console.log(`${this.instanceId} logger instance logs error message.`);
    }

}

export default LoggerService;