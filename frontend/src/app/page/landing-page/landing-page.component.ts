import { Component} from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { CourseListComponent } from "../../component/course-list/course-list.component";
import { HeaderComponent } from "../../component/header/header.component";
import { single } from 'rxjs';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CourseListComponent, HeaderComponent,SidebarComponent,CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  
  isloggedIn: boolean = false;

 
  
  ngOnInit() {
    // Check for JWT token in localStorage
    this.isloggedIn = !!localStorage.getItem('jwtToken'); 
  }

}
