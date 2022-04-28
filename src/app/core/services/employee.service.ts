import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators'

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<any> {
    const uri = url + '/employees';
    //http://localhost:3000/employees
    return this.httpClient.get(uri).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })

    )

  }

  addNewEmployee(employee: any): Observable<any> {
    const uri = url + '/employees';
    return this.httpClient.post(uri, employee).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })

    )
  }

  deleteEmployee(employeeId: any): Observable<any> {
    const uri = url + '/employees/' + employeeId;
    return this.httpClient.delete(uri).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })

    )
  }

  updateEmployee(employee: any): Observable<any> {
    const uri = url + '/employees/' + employee.id;
    return this.httpClient.put(uri, employee).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })

    )
  }


}
