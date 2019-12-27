import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    constructor(private http: HttpClient) { }

    totallPaindAmount(): Observable<number> {
        return this.http.get<number>(`http://localhost:3000/statistics/totallPaindAmount`);
    }

    totallDeptToFund(): Observable<number> {
        return this.http.get<number>(`http://localhost:3000/statistics/totallDeptToFund`);
    }

}