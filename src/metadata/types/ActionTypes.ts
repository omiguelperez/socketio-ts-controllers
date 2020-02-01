/**
 * Controller action type.
 */
export type ActionType = "message"
    | "connection"
    | "disconnection"
    | "packet";

/**
 * Static access to action types.
 */
export class ActionTypes {
    static MESSAGE: ActionType = "message";
    static CONNECT: ActionType = "connection";
    static DISCONNECT: ActionType = "disconnection";
    static PACKET: ActionType = "packet";
}