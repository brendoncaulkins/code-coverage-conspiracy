import { AuthenticationService } from '../services/authentication/authentication.service'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'code-coverage-conspiracy'
  loggedIn: Observable<boolean>

  constructor(private authService: AuthenticationService) {
    this.loggedIn = this.authService.getStatus()
    this.authService.logout()
  }
}
