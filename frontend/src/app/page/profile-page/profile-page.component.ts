import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  name: string = 'John Doe';
  id: string = '123456';
  email: string = 'john.doe@example.com';
  contact: string = '+1 234 567 890';

  user:any={};
  constructor(private dataService : DataService){
    this.dataService.getUser().subscribe(response=>{
      this.user=response;
      console.log(response);
    })

  }


}


