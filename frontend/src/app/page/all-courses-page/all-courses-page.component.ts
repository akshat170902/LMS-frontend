import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-courses-page',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,CommonModule,FooterComponent,RouterModule],
  templateUrl: './all-courses-page.component.html',
  styleUrl: './all-courses-page.component.css'
})
export class AllCoursesPageComponent {
  courses: any[]=[];
  ids: any={};
  
  constructor(private dataServices: DataService){
    // Fetch all-courses data
    this.dataServices.getAllCourses().subscribe(response =>{
      this.courses=response;
      console.log(response);
    });

  }


}
