import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <article class="employee__detail">
      <h1 class="employee__detail-name">
        {{ employee?.name }}
        <img *ngIf="employee?.new" class="employee__detail-new" src="/assets/icons/new.svg" alt="">
      </h1>
      <h2  class="employee__detail-function">{{ employee?.function }}</h2>
      <ul class="employee__detail-info">
        <li>
          <i class="fa-solid fa-user"></i>
          <span>1 maart 2023</span>
        </li>
        <li>
          <i class="fa-solid fa-phone"></i>
          <span>06-13903385</span>
        </li>
        <li>
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:brian@nedbase.nl">brian[at]nedbase.nl</a>
        </li>
      </ul>
      <div class="employee__detail-photo-wrapper">
        <img 
            class="employee__detail-photo-wrapper-img" 
             [src]="employee?.photo"
             alt="{{employee?.name}}"
        />
      </div>
    </article>
  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  employeeService = inject(EmployeeService);
  employee: Employee | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const employeeId = parseInt(this.route.snapshot.params['id'], 10);
    this.employee = this.employeeService.getEmployeeById(employeeId);
  }
}
