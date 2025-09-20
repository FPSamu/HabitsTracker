import HabitInfo from "./interfaces/HabitInfo";
import { ObjectId } from 'mongodb';

export default class DayHabits {
    user_id: ObjectId;
    _id?: ObjectId;
    date: Date;
    habits: Array<HabitInfo>;
    percentage_done: number;
    
    constructor (user_id: ObjectId, date: Date, habits:Array<HabitInfo>, percentage_done:number) {
        this.user_id = user_id;
        this.date = date;
        this.habits = habits;
        this.percentage_done = percentage_done;
    }
}