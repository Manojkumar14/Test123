import { Component, OnInit } from '@angular/core';
import { ManojServiceService } from '../app/services/manoj-service.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Details: any [];
  StuDetail: any [];
  title = 'ManojKumar';
  constructor(private datail: ManojServiceService) { };

  ngOnInit(): void {
    this.empDetails();
    this.StuDetails();
  }
empDetails(): void {
this.Details = this.datail.EmpDetails;
}
StuDetails(): void {
  this.StuDetail = this.datail.StuDetails;
  }
}
export class LoClass {
  Username: string;
  Password: string;
}
