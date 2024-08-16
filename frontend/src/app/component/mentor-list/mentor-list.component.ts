import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mentor } from '../../models/mentor.model';

@Component({
  selector: 'app-mentor-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css'] 
})
export class MentorListComponent implements OnInit {  
  mentors: Mentor[] = [];

  constructor(private adminService: AdminService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.adminService.getMentors().subscribe(data => {  
      this.mentors = data;
      console.log(this.mentors);
    });
    
  }
  loadMentors() : void {
    this.adminService.getMentors().subscribe(data => {  
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
