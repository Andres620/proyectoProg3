import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-editor-creator-evaluator',
  templateUrl: './editor-creator-evaluator.component.html',
  styleUrls: ['./editor-creator-evaluator.component.css']
})
export class EditorCreatorEvaluatorComponent implements OnInit {

  constructor(private userService: UserService, private editorService: EditorService, private router: Router) { }

  ngOnInit() {
    this.sendEmailForCreateEvaluator()
  }

  user: UserModel = {
    realm: null,
    firstname: null,
    secondname: null,
    firstsurname: null,
    secondsurname: null,   //estps nombres son los que estan en el html del productcomponent
    country: null,
    phone: null,
    membership: null,
    educationlevel: null,
    specialty:null,
    email: null,
    password: null,
    rol: 'evaluator',
    id: null,
    user: null
  }

  saveNewUserEvaluator():void{
    this.userService.saveNewUser(this.user).subscribe(item =>{
      alert('The User evaluator has been stored successfully!!!');
      this.router.navigate(["/home"])   //cambiaar despues al home del usuario logeado 
    })
  }
  
  sendEmailForCreateEvaluator():void{
    this.editorService.sendEmail("Hello user.realm","now you are a evaluator", "andres.1701625573@ucaldas.edu.co")
    console.log('correo enviado')
  }

}
