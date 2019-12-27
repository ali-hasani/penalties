import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`http://localhost:3000/employee`);
    }

    getById(employeeId: string): Observable<Employee> {
        return this.http.get<Employee>(`http://localhost:3000/employee/${employeeId}`);
    }

    add(employee): Observable<Employee[]> {
        return this.http.post<Employee[]>(`http://localhost:3000/employee`, employee);
    }

    update(employee: Employee): Observable<Employee[]> {
        return this.http.put<Employee[]>(`http://localhost:3000/employee/${employee._id}`, employee);
    }

    filterEmployees(value: string, except: string[]): Observable<Employee[]> {
        return this.http.get<Employee[]>(`http://localhost:3000/employee?filter=${value}&except=${except}`);
    }
}
