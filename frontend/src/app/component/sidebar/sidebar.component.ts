import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCourseDropDownOpen : boolean = false;
  isQueriesDropDownOpen : boolean = false;
  toggleDropdownCourses() {
    this.isCourseDropDownOpen = !this.isCourseDropDownOpen;
  }
  toggleDropdownQueries() {
    this.isQueriesDropDownOpen = !this.isQueriesDropDownOpen;
  }
}

