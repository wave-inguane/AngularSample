import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Field
  name: string;
  age: number;
  email: string;
  address: Address; // uses an interface
  hobbies: string[]; // array def.
  hello: any;

  constructor() {

  }

  ngOnInit() {
    this.name += ' John Coltrane';
    this.age = 40;
    this.email = 'JohnColtrane@Jazz.com';
    this.address = {
      street: '1511 N 33rd St',
      city: 'Philadelphia',
      state: 'PA',
    zip: 19121 };

    this.hobbies = ['Java', 'C', 'NodeJS'];

    this.onClick();
  }

  onClick() {
    this.name = 'Wave Labs'
    this.hobbies.push('New item');
    console.log(' Button clicked ');
  }
}

interface Address {
    street: string;
    city: string;
    state: string;
    zip: number;
}
