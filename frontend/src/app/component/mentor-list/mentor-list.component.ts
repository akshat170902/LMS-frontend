import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mentor } from '../../models/mentor.model';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-mentor-list',
  standalone: true,
  imports: [CommonModule,FormsModule,AdminSidebarComponent],
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css'] 
})
export class MentorListComponent implements OnInit {  
  mentors: Mentor[] = [];

  constructor(private adminService: AdminService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadMentors();
    
  }
  loadMentors() : void {
    this.adminService.getApprovedMentors().subscribe((data : Mentor[]) => {  
      this.mentors = data;
      console.log(this.mentors);
    });
  }

  approveMentor(id: number): void { 
    this.adminService.approveMentor(id);
    this.loadMentors();
  }
  removeMentor(id : number) : void {
    this.adminService.removeMentor(id);
    this.cdr.detectChanges();
    this.loadMentors();
  }
  
}
