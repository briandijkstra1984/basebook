import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="employee">
      <a class="employee__link" [routerLink]="['/details', employee.id]">
        <div class="employee__photo-wrapper" [ngClass]="{'is-hover': employee.hover_photo}">
          <img class="employee__photo-wrapper-img" [src]="employee.photo" alt="Exterior photo of {{employee.name}}"/>
          <i *ngIf="employee.employee_of_the_month" class="fa-solid fa-trophy employee__winner"></i>
          <img *ngIf="employee.employee_of_the_month" class="employee__winner-confetti" src="/assets/icons/confetti.gif" alt=""/>
          <img *ngIf="employee.hover_photo" class="employee__hover" src="https://media4.giphy.com/media/UknJ39jM362v2BSXqh/giphy.gif" alt=""/>
          <img *ngIf="employee.new" class="employee__new" src="/assets/icons/new.svg" alt=""/>
        </div>
        <div class="employee__data">
          <h2 class="employee__data-name">{{ employee.name }}</h2>
          <p class="employee__data-function">{{ employee.function }}</p>
        </div>
      </a>
    </section>
  `,
  styleUrls: ['./employee.component.css'],
})

export class EmployeeComponent {

  @Input() employee!: Employee;

}
