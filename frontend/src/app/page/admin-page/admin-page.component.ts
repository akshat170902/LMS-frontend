import { Component } from '@angular/core';
import { UserListComponent } from '../../component/user-list/user-list.component';
import { MentorListComponent } from '../../component/mentor-list/mentor-list.component';
import { QueryListComponent } from '../../component/query-list/query-list.component';
@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [UserListComponent,MentorListComponent,QueryListComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
