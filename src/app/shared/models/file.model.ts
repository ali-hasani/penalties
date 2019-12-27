import { Penalty } from './penalty.model';

export class File {
    _id: string;
    date: string;
    penalties: Penalty[] = [];
}