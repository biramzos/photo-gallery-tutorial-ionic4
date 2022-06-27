import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../APIs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class UpdatePage implements OnInit{
  id:string;
  name:string;
  password:string;
  result:string;

  constructor(private route:ActivatedRoute, private api:UserService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

  getUser(){
    this.api.getUser(this.id).subscribe(res =>{
      this.name = res.name;
      this.password = res.password; 
    })
  }

  public updateUser(){
    if(this.name.length >=6 && this.password.length >= 6){
      this.api.updateUser(this.id,this.name,this.password).subscribe(res => {
        this.result = res.message;
        if(this.result == 'Success!'){
          window.location.href="http://localhost:8100/";
        }
      })
    }
    else{
      this.result = 'Error!';
    }
  }
}
