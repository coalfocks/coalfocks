/**
 * This is the standard redis config for Actionhero.
 * This will use a redis server to persist cache, share chat message between processes, etc.
 */
export declare const DEFAULT: {
    redis: (config: any) => {
        scanCount: number;
        _toExpand: boolean;
        client: {
            konstructor: any;
            args: {
                port: string | number;
                host: string;
                password: string;
                db: number;
                tls: {
                    rejectUnauthorized: boolean;
                };
                retryStrategy: (times: any) => number;
            }[];
            buildNew: boolean;
        };
        subscriber: {
            konstructor: any;
            args: {
                port: string | number;
                host: string;
                password: string;
                db: number;
                tls: {
                    rejectUnauthorized: boolean;
                };
                retryStrategy: (times: any) => number;
            }[];
            buildNew: boolean;
        };
        tasks: {
            konstructor: any;
            args: {
                port: string | number;
                host: string;
                password: string;
                db: number;
                tls: {
                    rejectUnauthorized: boolean;
                };
                retryStrategy: (times: any) => number;
            }[];
            buildNew: boolean;
        };
    };
};
/**
 * If you do not want to connect to a real redis server, and want to emulate the functionally of redis in-memory, you can use `MockIORedis`
 * Note that large data sets will be stored in RAM, and not persisted to disk.  Multiple Actionhero processes cannot share cache, chat messages, etc.
 * Redis Pub/Sub works with this configuration.
 */
