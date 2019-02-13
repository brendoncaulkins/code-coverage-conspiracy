import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AddConspiracyComponent } from './conspiracy/add-conspiracy/add-conspiracy.component'
import { AuthenticationService } from './services/authentication/authentication.service'
import { BrowserModule } from '@angular/platform-browser'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [HomeComponent, LoginComponent, AddConspiracyComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
  providers: [AuthenticationService],
  bootstrap: [HomeComponent]
})
export class AppModule {}
