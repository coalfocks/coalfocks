import { Action } from "actionhero";
declare enum StatusMessages {
    healthy = "Node Healthy",
    unhealthy = "Node Unhealthy"
}
export declare class Status extends Action {
    constructor();
    run(): Promise<{
        id: string;
        actionheroVersion: string;
        name: string;
        description: string;
        version: string;
        uptime: number;
        consumedMemoryMB: number;
        resqueTotalQueueLength: number;
        nodeStatus: StatusMessages;
        problems: string[];
    }>;
}
export {};
