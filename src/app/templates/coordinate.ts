export class Coordinate<T> {
    public lat: T;
    public long: T;

    public toString(): string {
        return '[' + this.lat + ', ' + this.long + ']';
    }
}