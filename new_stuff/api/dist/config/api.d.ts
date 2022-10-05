export declare const DEFAULT: {
    general: (config: any) => {
        apiVersion: any;
        serverName: any;
        welcomeMessage: string;
        serverToken: string;
        cachePrefix: string;
        lockPrefix: string;
        lockDuration: number;
        simultaneousActions: number;
        enforceConnectionProperties: boolean;
        disableParamScrubbing: boolean;
        enableResponseLogging: boolean;
        filteredParams: any[];
        filteredResponse: any[];
        missingParamChecks: string[];
        directoryFileType: string;
        fileRequestLogLevel: string;
        defaultMiddlewarePriority: number;
        channel: string;
        rpcTimeout: number;
        cliIncludeInternal: boolean;
        paths: {
            action: string[];
            task: string[];
            server: string[];
            cli: string[];
            initializer: string[];
            public: string[];
            pid: string[];
            log: string[];
            plugin: string[];
            test: string[];
            src: string;
            dist: string;
        };
        startingChatRooms: {};
    };
};
export declare const test: {
    general: (config: any) => {
        serverToken: string;
        startingChatRooms: {
            defaultRoom: {};
            otherRoom: {};
        };
        rpcTimeout: number;
    };
};
export declare const production: {
    general: (config: any) => {
        fileRequestLogLevel: string;
    };
};
