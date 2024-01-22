import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeComponent
  ],
  template: `
    <section class="content__filter">
      <form>
        <select class="content__filter-select" (change)="filterResults(filter.value)" #filter>
          <option>Kies een afdeling</option>
          <option value="Front-end">Front-end developer</option>
          <option value="Webdeveloper">Webdeveloper</option>
          <option value="Online">Online marketing</option>
          <option value="Adviseur">Adviseur</option>
        </select>
      </form>
    </section>
    <section class="results">
      <app-employee
        class="result__item"  
        *ngFor="let employee of filteredEmployeeList"
        [employee]="employee">
      </app-employee>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  employeeList: Employee[] = [];
  employeeService: EmployeeService = inject(EmployeeService);
  filteredEmployeeList: Employee[] = [];
  constructor() {
    this.employeeList = this.employeeService.getAllEmployees();
    this.filteredEmployeeList = this.employeeList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredEmployeeList = this.employeeList;
      return;
    }

    this.filteredEmployeeList = this.employeeList.filter(
      employee => employee?.function.toLowerCase().includes(text.toLowerCase())
    );
  }
}
