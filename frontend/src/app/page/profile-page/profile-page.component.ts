import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { DataService } from '../../service/data.service';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent,FooterComponent],  // Add CommonModule here
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  name: string = 'John Doe';
  id: string = '123456';
  email: string = 'john.doe@example.com';
  contact: string = '+1 234 567 890';

  user: any = {};
  courses: any[] = [];

  constructor(private dataService: DataService) {
    // Fetch user data
    this.dataService.getUser().subscribe(response => {
      this.user = response;
      console.log(response);
    });

    // Fetch courses data
    this.dataService.getAllCourses().subscribe(response => {
      this.courses = response;
      console.log(response);
    });
  }
}
