import { Penalty } from './penalty.model';

export class File {
    _id: string;
    createDate: string;
    penalties: Penalty[];
}