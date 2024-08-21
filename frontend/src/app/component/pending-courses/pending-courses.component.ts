import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-pending-courses',
  standalone: true,
  imports: [NavbarComponent,RouterModule,FooterComponent,SidebarComponent,CommonModule,RouterModule],
  templateUrl: './pending-courses.component.html',
  styleUrl: './pending-courses.component.css'
})
export class PendingCoursesComponent {
  courses:any[]=[];
  ids:any={};
  constructor(private dataServices: DataService){
    this.dataServices.getAllCourses().subscribe(response =>{
      this.courses=response;
      console.log(response);
    });
  }

}
