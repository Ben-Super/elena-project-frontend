export interface PathData {
    status: number;
    message: string;
    data: {
        route: Array<Array<number>>;
    };
    timestamp: number;
}