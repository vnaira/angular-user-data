import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {
    users = [];
    title = 'user list';

    constructor(private us: UserService) {
        console.log('app runs');
    }

    ngOnInit() {
        this.users = this.us.getUser();
    }
}
