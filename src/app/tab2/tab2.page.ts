import { Component } from '@angular/core';
import { UserService } from '../APIs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class InsertPage {
  name:string;
  password:string;
  message:string;

  constructor(private api:UserService) {}

  public addUser(){
    if(this.name.length >= 6 && this.password.length >= 6){
      this.api.addUser(this.name, this.password).subscribe(res =>{
        this.message = res.message;
        if(this.message == 'Success'){
          window.location.href="http://localhost:8100/";
        }
      })
    }
    else{
      this.message = "Error!";
    }
  }
}