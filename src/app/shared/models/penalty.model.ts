import { Employee } from './employee.model';

export class Penalty {
    _id: string;
    value: number;
    paymentDate: string;
    employee: Employee;
    file: File;
}