import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCourseDropDownOpen : boolean = false;
  isQueriesDropDownOpen : boolean = false;
  userRole: string | null = '';
  ngOnInit(): void {
    const user = localStorage.getItem('user');
    console.log(user)
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userRole = parsedUser.role;
    }
  }
  toggleDropdownCourses(value : boolean)  {
    this.isCourseDropDownOpen = value;
  }
  toggleDropdownQueries(value : boolean) {
    this.isQueriesDropDownOpen = value;
  }
}

