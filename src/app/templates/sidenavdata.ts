import { Coordinate } from './coordinate';

export class SidenavData {
    private pointA: Coordinate;
    private pointB: Coordinate;
    private weight: number;
    
    constructor() {
        this.pointA = new Coordinate(0, 0);
        this.pointB = new Coordinate(0, 0);
        this.weight = 0;
    }

    public setPointA(pointA: Coordinate): void {
        this.pointA = pointA;
    }
    
    public setPointB(pointB: Coordinate): void {
        this.pointB = pointB;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }
    
    public getPointA(): Coordinate {
        return this.pointA;
    }
    
    public getPointB(): Coordinate {
        return this.pointB;
    }

    public getWeight(): number {
        return this.weight;
    }

    public asJSON() {
        return {
            start: this.pointA.toArray(),
            end: this.pointB.toArray(),
            weight: this.weight
        }
    }
}