import Config from "./interfaces/Config";
export type HabitType = "check" | "timer" | "counter"
import { ObjectId } from 'mongodb';

export default class Habit {
    user_id: ObjectId;
    _id?: ObjectId;
    name: string;
    type: HabitType;
    config: Config;
    active: boolean;

    constructor(user_id: ObjectId, name: string, type: HabitType, config: Config) {
        this.user_id = user_id;
        this.name = name;
        this.type = type;
        this.config = config;
        this.active = true;
    }
}
