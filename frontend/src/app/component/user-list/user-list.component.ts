import { Component,OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users : any = [];
  constructor(private adminService : AdminService) {}
  ngOnInit() : void {
    this.adminService.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    })
  }
}
