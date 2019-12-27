import * as jalaliMoment from 'jalali-moment';
import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeFormat } from '../global-variables/date-time-format';

@Pipe({ name: 'jalali' })
export class JalaliPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        const MomentDate = jalaliMoment(value, DateTimeFormat.dateTime);
        return MomentDate.locale('fa').format(DateTimeFormat.dateTimeJalaliRTL);
    }
}

@Pipe({ name: 'jalaliDate' })
export class JalaliDatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value) {
            const MomentDate = jalaliMoment(value, DateTimeFormat.dateTime);
            return MomentDate.locale('fa').format(DateTimeFormat.dateJalali);
        } else {
            return '';
        }
    }
}

@Pipe({ name: 'jalaliTime' })
export class JalaliTimePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value) {
            const MomentDate = jalaliMoment(value, DateTimeFormat.dateTime);
            return MomentDate.format(DateTimeFormat.shorTime);
        } else {
            return '';
        }
    }
}


@Pipe({ name: 'jalaliDayName' })
export class JalaliDayNamePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value) {
            const MomentDate = jalaliMoment(value, DateTimeFormat.dateTime);
            return MomentDate.locale('fa').format('dddd');
        } else {
            return '';
        }
    }
}
