import { User } from './user.model';
import { Establishment } from './establishment.model';

export class Booking {
    booked_by: User;
    establishment: Establishment;
    checkindate: Date;
    checkoutdate: Date;
    noofperson: number;
    cost: number;
}
