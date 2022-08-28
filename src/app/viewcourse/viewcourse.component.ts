import { Component, OnInit } from '@angular/core';
import { ViewserviceService } from '../viewservice.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private api:ViewserviceService) {
    api.viewCourse().subscribe(
      (r)=>{
        this.data=r
      }
    )
   }

  ngOnInit(): void {
  }
  
data:any=[]
}
