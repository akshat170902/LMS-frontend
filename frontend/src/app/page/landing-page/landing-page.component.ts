import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { CourseListComponent } from "../../component/course-list/course-list.component";
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CourseListComponent, HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
