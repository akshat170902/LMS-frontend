import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchForm: FormGroup;
  user: any = null;
  username: string = '';
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.searchForm = this.fb.group({
      name: ['']
    });
  }
  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        this.user = user;
        this.username = user.name;
      } catch (e) {
        console.error('Failed to parse user data from localStorage:', e);
        localStorage.removeItem('user'); // Clear invalid user data
      }
    }
  }

  logout(): void {
    localStorage.removeItem('user'); // Remove user data from localStorage
    this.router.navigate(['/']); // Redirect to login page
  }



  onSubmit() {
    if (this.searchForm.valid) {
      const name = this.searchForm.get("name")?.value;
      this.router.navigate(['/search'], { queryParams: { name } });
    }
  }
}
