

import {Http} from '@angular/http';
import {Injectable} from '@angular/core';


@Injectable()
export class UserService {
    users = [
        {name: 'Card 1', description: 'lorem ipsum, bla bla bla'},
        {name: 'Card 2', description: 'return response.results'},
        {name: 'Card 3', description: 'lorem ipsum, bla bla bla'},
        {name: 'Card 4', description: 'lorem ipsum, bla bla bla'},
        {name: 'Card 5', description: 'lorem ipsum, bla bla bla'},
    ];
    constructor(private http: Http) {
        console.log('Data service connected...');
    }

    getUser() {
        return this.users;

        // return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
            // .map(response => response.results)
            // .map(users => {
            //     return users.map( u => {
            //         return { name: u.name.firs };
            //     });
            // });
    }
}
