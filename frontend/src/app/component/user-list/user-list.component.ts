import { Component,OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,AdminSidebarComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users : User[] = [];
  constructor(private adminService : AdminService) {}
  ngOnInit() : void {
    this.adminService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
}
