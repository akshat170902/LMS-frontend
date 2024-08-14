import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-count',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-count.component.html',
  styleUrl: './course-count.component.css'
})
export class CourseCountComponent {

  radioButtonSelected = 'all'

  @Input()
  all: any

  @Input()
  pending: any;

  @Input()
  completed: any;

  @Output()
  radioButtonCustomEvent = new EventEmitter();

  onRadioButtonChange(){
    console.log(this.radioButtonSelected)
  }




}
