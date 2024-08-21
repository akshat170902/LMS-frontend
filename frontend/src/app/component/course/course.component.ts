import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { QueryComponent } from '../query/query.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [QueryComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class CourseComponent implements OnInit {
  course: Course = {
    courseId: 0,
    courseName: '',
    mentorId: 0,
    description: '',
    status: false,
    mentorName: ''
  };

  answeredQueries: any[] = [];
  pendingQueries: any[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getCourse(id); // Call the getCourse method to fetch the data
      }
    });
  }

  getCourse(id: string): void {
    this.dataService.getCourseById(id).subscribe(
      response => {
        console.log('Response:', response); // Ensure the response is correctly logged
        this.course = response.course; // Assign the nested course object to the component's course property
        this.answeredQueries = response.DoubtList.filter((doubt: any) => doubt.answers && doubt.answers.trim() !== '');
        this.pendingQueries = response.DoubtList.filter((doubt: any) => !doubt.answers || doubt.answers.trim() === '');
      },
      error => {
        console.error('Error fetching course:', error); // Log any errors for debugging
      }
    );

  }
}
