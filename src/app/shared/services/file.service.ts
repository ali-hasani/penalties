import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from '../models/file.model';

@Injectable({
    providedIn: 'root'
})
export class FileService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<File[]> {
        return this.http.get<File[]>(`http://localhost:3000/file`);
    }

    getById(fileId: string): Observable<File> {
        return this.http.get<File>(`http://localhost:3000/file/${fileId}`);
    }

    add(file): Observable<File[]> {
        return this.http.post<File[]>(`http://localhost:3000/file`, file);
    }

    update(file: File): Observable<File[]> {
        return this.http.put<File[]>(`http://localhost:3000/file/${file._id}`, file);
    }
}