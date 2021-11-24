import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-users-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private usersService: UsersService) {
  }

  addUser(): void {
    const { name, age, email } = this.userForm.value
    this.usersService.addUser(name, age, email)
    this.userForm.reset()
  }

  ngOnInit(): void {
  }

}
