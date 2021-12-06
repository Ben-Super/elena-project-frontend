import { Coordinate } from './coordinate';

export class SidenavData {
    private pointA: Coordinate;
    private pointB: Coordinate;
    
    constructor() {
        this.pointA = new Coordinate(0, 0);
        this.pointB = new Coordinate(0, 0);
    }

    public setPointA(pointA: Coordinate): void {
        this.pointA = pointA;
    }
    
    public setPointB(pointB: Coordinate): void {
        this.pointB = pointB;
    }
    
    public getPointA(): Coordinate {
        return this.pointA;
    }
    
    public getPointB(): Coordinate {
        return this.pointB;
    }
}