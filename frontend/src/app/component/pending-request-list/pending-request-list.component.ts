import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mentor } from '../../models/mentor.model';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { Course } from '../../models/course.model';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-pending-request-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminSidebarComponent, NavbarComponent],
  templateUrl: './pending-request-list.component.html',
  styleUrl: './pending-request-list.component.css'
})
export class PendingRequestListComponent {
  mentors: Mentor[] = [];
  courses: Course[] = [];
  constructor(private adminService: AdminService,private cdr: ChangeDetectorRef) { }
  loadMentors() : void {
    this.adminService.getUnApprovedMentors().subscribe((data: Mentor[]) => {  
      this.mentors = data;
      console.log(this.mentors);
    });
  }
  loadCourses() : void {
    this.adminService.getCourses().subscribe((data: Course[]) => {  
      this.courses = data;
    });
  }
  ngOnInit(): void {
    this.loadMentors();
    this.loadCourses();
  }
  approveMentor(id: number): void { 
    this.adminService.approveMentor(id).subscribe(() => {  
      
    });
    this.loadMentors();
  }
  removeMentor(id : number) : void {
    this.adminService.removeMentor(id).subscribe(() => {  
      
    });
    this.cdr.detectChanges();
    this.loadMentors();
  }
  approveCourse(id : number) : void {
    this.adminService.approveCourse(id).subscribe(()=>{

    });
  }
  removeCourse(id : number) : void {
    this.adminService.removeCourse(id).subscribe(()=>{
      
    });
    this.cdr.detectChanges();
  }
}
