export declare const DEFAULT: {
    errors: (config: any) => {
        _toExpand: boolean;
        reportUnknownActions: boolean;
        serializers: {
            servers: {
                web: (error: any) => any;
                websocket: (error: any) => any;
                specHelper: (error: any) => any;
            };
            actionProcessor: any;
        };
        invalidParams: (data: any, validationErrors: string[]) => string;
        missingParams: (data: any, missingParams: string[]) => string;
        unknownAction: (data: any) => string;
        unsupportedServerType: (data: any) => string;
        serverShuttingDown: (data: any) => string;
        tooManyPendingActions: (data: any) => string;
        genericError(data: any, error: any): Promise<any>;
        fileNotFound: (connection: any) => string;
        fileNotProvided: (connection: any) => string;
        fileReadError: (connection: any, error: Error) => string;
        verbNotFound: (connection: any, verb: string) => string;
        verbNotAllowed: (connection: any, verb: string) => string;
        connectionRoomAndMessage: (connection: any) => string;
        connectionNotInRoom: (connection: any, room: string) => string;
        connectionAlreadyInRoom: (connection: any, room: string) => string;
        connectionRoomHasBeenDeleted: (room: string) => string;
        connectionRoomNotExist: (room: string) => string;
        connectionRoomExists: (room: string) => string;
        connectionRoomRequired: (room: string) => string;
    };
};
