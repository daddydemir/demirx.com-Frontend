import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://192.168.1.103:2022/api/v1/user/2";
  constructor(private httpClient:HttpClient) { }

  getUser():Observable<UserResponseModel>{
    return this.httpClient.get<UserResponseModel>(this.baseUrl);
  }
}
