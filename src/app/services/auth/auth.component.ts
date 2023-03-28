import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  login(uname: string, pword: string) {
    if (uname == 'Alerrando' && pword == '1234') {
      return 200;
    }

    return 403;
  }
}
