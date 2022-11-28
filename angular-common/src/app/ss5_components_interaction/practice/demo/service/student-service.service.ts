import {Injectable} from '@angular/core';
import {Student} from '../student';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(environment.api_url_students);
  }

  save(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(environment.api_url_students, student);
  }

  findById(id: string): Observable<Student> {
    return this.httpClient.get<Student>(environment.api_url_students + '?' + id);
  }
}
