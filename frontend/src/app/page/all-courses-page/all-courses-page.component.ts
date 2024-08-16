import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-all-courses-page',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,CommonModule],
  templateUrl: './all-courses-page.component.html',
  styleUrl: './all-courses-page.component.css'
})
export class AllCoursesPageComponent {
  courses: any[]=[];
  constructor(private dataServices: DataService){
    // Fetch all-courses data
    this.dataServices.getAllCourses().subscribe(response =>{
      this.courses=response;
      console.log(response);
    });
  }

}
