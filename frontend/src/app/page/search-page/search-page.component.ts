import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  courses: any[] = [];
  searchQuery: string = '';
  constructor(private route: ActivatedRoute, private dataService: DataService) {}
  ngOnInit(): void {
    // Get the search query from the URL
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['name'];
      if (this.searchQuery) {
        this.searchCourses(this.searchQuery);
      }
    });
  }

  searchCourses(name: string): void {
    this.dataService.getCoursesByName(name).subscribe(
      (data: any) => {
        this.courses = data;
      },
      (error: any) => {
        console.error('There was an error fetching courses:', error);
      }
    );
  }
  
}
