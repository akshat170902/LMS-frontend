import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-enrolled-courses',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,FooterComponent,CommonModule,RouterModule],
  templateUrl: './enrolled-courses.component.html',
  styleUrl: './enrolled-courses.component.css'
})
export class EnrolledCoursesComponent {
  courses:any[]=[];
  ids:any={};
  constructor(private dataService:DataService){
    
    this.dataService.getAllCourses().subscribe(response =>{
      this.courses=response;
      console.log(response);
    });
  }
  

}
