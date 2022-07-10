import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteResponseModel } from '../models/noteResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl = "http://192.168.1.103:2022/api/v1/active/notes/";
  constructor(private httpClient:HttpClient) { }

  getNotes():Observable<NoteResponseModel>{
    return this.httpClient.get<NoteResponseModel>(this.baseUrl);
  }
}
