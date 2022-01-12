import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8080/employees";
  constructor(private httpCilent:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpCilent.get<Employee[]>(`${this.baseURL}`);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpCilent.get<Employee>(`${this.baseURL}/${id}`);
  }
}