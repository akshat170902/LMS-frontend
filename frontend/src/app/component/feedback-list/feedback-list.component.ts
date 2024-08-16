import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../service/admin.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Feedback } from '../../models/feedback.model';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [AdminSidebarComponent,CommonModule,FormsModule],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css'
})
export class FeedbackListComponent {
  feedbacks : Feedback[] = [];
  constructor(private adminService: AdminService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    this.adminService.getFeedbacks().subscribe(data => {
      this.feedbacks = data;
      console.log(this.feedbacks);
    });
  }
  removeFeedback(id : number) : void{
    this.adminService.removeFeedback(id);
    this.cdr.detectChanges();
    this.loadFeedbacks();
  }

}
