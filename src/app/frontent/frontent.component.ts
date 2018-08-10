import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-frontent',
  templateUrl: './frontent.component.html',
  styleUrls: ['./frontent.component.css']
})
export class FrontentComponent implements OnInit {

    users = [];
  constructor(private us: UserService) { }

  ngOnInit() {
    this.users = this.us.getUser();
  }

}
