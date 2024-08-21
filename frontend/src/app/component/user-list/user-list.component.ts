import { Component,OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { User } from '../../models/user.model';
import { UserData } from '../../models/UserData';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AdminSidebarComponent, NavbarComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users : UserData[] = [];
  constructor(private adminService : AdminService) {}
  ngOnInit() : void {
    this.adminService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
}
