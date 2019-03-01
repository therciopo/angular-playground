import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css']
})
export class LoginComponent {
constructor(private data: DataService, private router: Router) {}

public creds = {
    username: '',
    password: ''
};

onLogin() {
    // Call the login service
    alert(this.creds.username);
}
}
