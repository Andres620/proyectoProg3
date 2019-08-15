import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { UserService } from './user.service';

const base_url = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  token: string = this.userservice.getToken();
  constructor(private http: HttpClient,private userservice: UserService) { }

  

  sendEmail(message: string,subject: string,email: string){
    return this.http.get(`${base_url}editors/sendEmail?bodyMessage=${message}&subject=${subject}&emailAddresses=${email}&access_token=${this.token}`);
  }
}
