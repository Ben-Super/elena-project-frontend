export interface PathData {
    status: number;
    message: string;
    data: {
        routes: Array<Array<number>>;
    };
    timestamp: number;
}