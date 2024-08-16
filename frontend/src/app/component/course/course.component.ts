import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  course:any;
  constructor(
    private dataService:DataService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id');
      if(id!=null){
        this.getCourse(id);
      }
      
    }

    );
  }
  getCourse(id:string):void{
    this.dataService.getCourseById(id).subscribe(data=>{
      this.course=data;
    })
  }
}
