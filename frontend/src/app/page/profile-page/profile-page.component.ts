import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { DataService } from '../../service/data.service';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent],  // Add CommonModule here
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  name: string = 'John Doe';
  id: string = '123456';
  email: string = 'john.doe@example.com';
  contact: string = '+1 234 567 890';

  user: any = {};
  users: any[] = [];

  constructor(private dataService: DataService) {
    // Fetch user data
    this.dataService.getUser().subscribe(response => {
      this.user = response;
      console.log(response);
    });

    // Fetch courses data
    this.dataService.getCourses().subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }
}
