import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../service/admin.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Query } from '../../models/query.model';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { NgxLoadingModule } from 'ngx-loading';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-query-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminSidebarComponent, NgxLoadingModule, NavbarComponent],
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {
  queries: Query[] = [];
  isLoading: boolean = false; // Loader flag

  constructor(private adminService: AdminService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadQueries();
  }

  loadQueries(): void {
    this.isLoading = true; // Show loader while loading data
    this.adminService.getQueries().subscribe(data => {
      this.queries = data;
      this.isLoading = false; // Hide loader after data is loaded
    }, () => {
      this.isLoading = false; // Hide loader if there's an error
    });
  }

  removeQuery(id: number): void {
    this.isLoading = true; // Show loader while removing query
    this.adminService.removeQuery(id).subscribe(() => {
      this.loadQueries(); // Refresh the query list
    }, () => {
      this.isLoading = false; // Hide loader if there's an error
    });
  }
}
