import * as winston from "winston";
declare type ActionheroConfigLoggerBuilderArray = Array<(config: any) => winston.Logger>;
export declare const DEFAULT: {
    logger: (config: any) => {
        loggers: ActionheroConfigLoggerBuilderArray;
        maxLogStringLength: number;
        maxLogArrayLength: number;
    };
};
export declare const test: {
    logger: (config: any) => {
        loggers: ActionheroConfigLoggerBuilderArray;
    };
};
export {};
