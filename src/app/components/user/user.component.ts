import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserResponseModel } from 'src/app/models/userResponseModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();

  }

  getUser(){
    this.userService.getUser().subscribe( (response) =>{
      this.users = response.data;
    })
  }

}
