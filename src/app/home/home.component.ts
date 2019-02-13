import { Observable, Subject } from 'rxjs'

import { AuthenticationService } from '../services/authentication/authentication.service'
import { Component } from '@angular/core'
import { Conspiracy } from '../models/conspiracy.model'

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'code-coverage-conspiracy'
  loggedIn: Observable<boolean>
  editConspiracy: Subject<Conspiracy>

  constructor(private authService: AuthenticationService) {
    this.editConspiracy = new Subject<Conspiracy>()
    this.loggedIn = this.authService.getStatus()
    this.authService.logout()
  }
}
