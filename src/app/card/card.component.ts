import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() userList;

  constructor() { }

  ngOnInit() {
  }


}
