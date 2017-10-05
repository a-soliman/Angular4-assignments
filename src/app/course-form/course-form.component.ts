import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  submit =  (f) => console.log(f);

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Web Design'},
    {id: 3, name: 'English Langauge'}
  ];
}
