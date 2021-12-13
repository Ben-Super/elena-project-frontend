/*
 * This class represents a single lat/lng coordinate
 */
export class Coordinate {
    private lat: number;
    private long: number;

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long
    }

    public setLat(lat: number): void {
        this.lat = lat;
    }

    public setLong(long: number): void {
        this.long = long;
    }

    public getLat(): number {
        return this.lat;
    }

    public getLong(): number {
        return this.long;
    }

    public toString(): string {
        return '[' + this.lat + ', ' + this.long + ']';
    }

    public toArray() {
        return [this.long, this.lat];
    }
}