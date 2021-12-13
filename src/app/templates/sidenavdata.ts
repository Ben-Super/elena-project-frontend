import { Coordinate } from './coordinate';

/*
 * This class holds all the user input from the sidenav
 */
export class SidenavData {
    private pointA: Coordinate;
    private pointB: Coordinate;
    private weight: number;
    private isMin: boolean;
    
    constructor() {
        this.pointA = new Coordinate(0, 0);
        this.pointB = new Coordinate(0, 0);
        this.weight = 1.0;
        this.isMin = true;
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

    public setIsMin(isMin: boolean): void {
        this.isMin = isMin;
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

    public getIsMin(): boolean {
        return this.isMin;
    }

    // Returns this as JSON so it can be sent to the backend
    public asJSON() {
        return {
            start: this.pointA.toArray(),
            end: this.pointB.toArray(),
            weight: this.weight,
            isMin: this.isMin
        }
    }
}