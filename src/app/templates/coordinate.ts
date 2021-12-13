/*
 * This class represents a single lat/lng coordinate
 */
export class Coordinate {
    public lat: number;
    public long: number;

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long
    }

    public toString(): string {
        return '[' + this.lat + ', ' + this.long + ']';
    }

    public toArray() {
        return [this.long, this.lat];
    }
}