import { Component, OnInit } from '@angular/core';
import { ManojServiceService } from '../../app/services/manoj-service.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  fieldsArray: any;
  data: any = [];
gedata: any=[];
  constructor(private getservice: ManojServiceService) { }
 
  ngOnInit() {
   this.getdata();
  }
getdata(){
  let errMessage: any = [];
  this.getservice.gettingfunction()
  .subscribe(
    (locationFields) => {
      this.fieldsArray = locationFields.fields;
    },
    errorMsg => errMessage = <any>errorMsg
  );
}
}
