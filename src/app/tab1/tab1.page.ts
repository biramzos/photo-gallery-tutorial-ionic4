import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { UserService } from '../APIs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class DatabasePage implements OnInit{

  users = [];
  param:string;
  id:string;
  msg:string;
  

  constructor(private api:UserService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.doRefresh(event);
  }

  doRefresh(event){
    setTimeout(()=>{
      this.getUsers();
      event.target.complete();
    },500);
  }

  public getUsers():void{
    this.api.getUsers().subscribe(res =>{
      this.users = res;
    })
  }
  
  public findUser():void{
    this.users = []
    this.api.findUser(this.param).subscribe(res =>{
      this.users = res;
    })
  }

  public deleteUser(id){
    this.api.deleteUser(id).subscribe(res => {
      this.msg = res.message;
      if(this.msg == 'Success'){
        window.location.href="http://localhost:8100/";
      }
    })
  }
}
