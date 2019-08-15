import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

const base_url = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http: HttpClient) { }


  sendEmail(message: string,subject: string,email: string){
    return this.http.get(`${base_url}editors/sendEmail?bodyMessage=${message}&subject=${subject}&emailAddresses=${email}`);
  }
}
