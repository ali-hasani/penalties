import { Employee } from './employee.model';

export class Penalty {
    _id: string;
    value: number;
    paid: boolean;
    paymentDate: string;
    employee: Employee;
}