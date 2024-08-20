import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-completed-courses',
  standalone: true,
  imports: [FooterComponent,NavbarComponent, SidebarComponent,CommonModule,RouterModule],
  templateUrl: './completed-courses.component.html',
  styleUrl: './completed-courses.component.css'
})
export class CompletedCoursesComponent {
  courses:any[]=[];
  ids:any={};

  constructor(private dataServices: DataService) {
    this.dataServices.getAllCourses().subscribe(response =>{
      this.courses=response;
      console.log(response);
    });
  }

}
