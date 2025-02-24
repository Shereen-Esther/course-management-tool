import { Component } from '@angular/core';
import { BachelorsComponent } from './bachelors/bachelors.component';
import { SampleComponent } from './sample/sample.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'course-management-tool';
}
