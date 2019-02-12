import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {}
