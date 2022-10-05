import { Action } from "actionhero";
export declare class CreateChatRoom extends Action {
    constructor();
    run({ params }: {
        params: {
            name: string;
        };
    }): Promise<{
        didCreate: number;
    }>;
}
