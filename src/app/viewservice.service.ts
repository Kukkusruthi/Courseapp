import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddcourseComponent } from './addcourse/addcourse.component';

@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {

  constructor(private http:HttpClient) { }
  viewCourse=()=>{
return this.http.get("localhost:3000/viewcourse")}
addcourse(course:any){
  return this.http.post<any>('localhost:3000/addcourse',course)
}
  }

