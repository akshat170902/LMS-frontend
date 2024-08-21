import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Query } from '../../models/query.model';
import { DataService } from '../../service/data.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-query-page',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, NavbarComponent, CommonModule, FormsModule],
  templateUrl: './query-page.component.html',
  styleUrl: './query-page.component.css'
})
export class QueryPageComponent {
  queries: Query[] = [];
  userRole: string | null = null;
  activeAnswerBoxIndex: number | null = null;
  tempAnswer: string = '';

  constructor(private adminService: AdminService, private dataService: DataService) {}

  ngOnInit() {
    this.loadQueries();
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userRole = parsedUser.role;
    }
  }

  loadQueries() {
    this.adminService.getQueries().subscribe((data) => {
      this.queries = data;
    });
  }

  toggleAnswerBox(index: number): void {
    // Toggle the display of the answer box
    this.activeAnswerBoxIndex = this.activeAnswerBoxIndex === index ? null : index;
  }

  submitAnswer(id: number, ans: string) {
    this.dataService.setAnswer(id, ans).subscribe(() => {
      // Reload the queries after submitting the answer
      this.loadQueries();
      // Optionally, reset the active answer box and temporary answer
      this.activeAnswerBoxIndex = null;
      this.tempAnswer = '';
    });
  }
}
