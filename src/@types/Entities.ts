import { randomUUID } from "crypto";

export abstract class Entity<T> {
    protected id: string;
    public props: T;

    public get _id() {
        return this.id;
    }

    constructor(props: T, id?: string) {
        this.props = props;
        this.id = id || randomUUID();
    }
}
