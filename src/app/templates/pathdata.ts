/*
 * This serves as a template for the path data returned from the backend
 */
export interface PathData {
    status: number;
    message: string;
    data: {
        routes: Array<Array<number>>;
    };
    timestamp: number;
}