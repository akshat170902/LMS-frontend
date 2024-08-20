import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.searchForm = this.fb.group({
      name: ['']
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const name = this.searchForm.get("name")?.value;
      this.dataService.getCoursesByName(name).subscribe(
        (data: any) => {
          console.log("Search Results ", data);
        },
        (error: any) => {
          console.log("There was an error: ", error);
        }
      );
    }
  }
}
