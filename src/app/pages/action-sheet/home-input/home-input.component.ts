import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.component.html',
  styleUrls: ['./home-input.component.css']
})
export class HomeInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}

interface User{

name: string,
lastname:string,

}
export class HomePage{

  users: User[] =[
    {name: 'Roberto',
    lastname:'Gomez'},
    {name:'Ñeñiel',
    lastname:'Lamas'}
   

  ];
}