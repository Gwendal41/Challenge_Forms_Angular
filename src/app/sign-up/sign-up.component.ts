import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = new User ("","","","")

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
  }

}
