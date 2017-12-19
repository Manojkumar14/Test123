import { Injectable } from '@angular/core';
import { EmployeeDetails, StudentDetails } from '../services/mockData';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ManojServiceService {
  baseurl: string;

  constructor(private https: Http) { };
get EmpDetails(){
  return EmployeeDetails;
}
get StuDetails(){
  return StudentDetails;
}
gettingfunction(): Observable<any> {
this.baseurl="https://reqres.in/api/users";
return this.https.get(this.baseurl)
.map(this.extractData)
.catch(this.handleError);
}
private extractData(response: Response) {
  const body = response.json();
  return body || {};
}
private handleError(error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}
