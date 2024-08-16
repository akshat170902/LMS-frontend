import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../service/admin.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Query } from '../../models/query.model';

@Component({
  selector: 'app-query-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './query-list.component.html',
  styleUrl: './query-list.component.css'
})
export class QueryListComponent {
  queries: Query[] = [];

  constructor(private adminService: AdminService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadQueries();
  }
  loadQueries(): void {
    this.adminService.getQueries().subscribe(data => {
      this.queries = data;
    });
  }
  removeQuery(id : number) : void{
    this.adminService.removeQuery(id);
    this.cdr.detectChanges();
    this.loadQueries();
  }
}
