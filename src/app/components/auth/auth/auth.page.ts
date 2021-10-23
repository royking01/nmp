import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginAuth } from 'src/app/Interfaces/Auth/auth';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { RegisterPageComponent } from './register-page/register-page.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  email: string = '';
  password: any = '';
  error_message: string = '';
  constructor(
    public modalController: ModalController,
    private modalService: ModalServiceService,
    private router: Router
  ) {
    const logged = localStorage.getItem('isLoggedIn');
    // logged ? this.login() : '';
  }

  ngOnInit() {}
  login() {
    const userCredentials: LoginAuth = {
      email: this.email,
      password: this.password,
    };
    const logged = localStorage.getItem('isLoggedIn');
    logged ? localStorage.setItem('isLoggedIn', 'TRUE') : '';
    // this.presentHome();
  }
  next() {
    if (!this.email || !this.password)
      return (this.error_message = 'Invalid Credentials');
    this.router.navigate(['/tabs/tab1']);
  }
  handleInputValidation(e) {
    e ? (this.error_message = '') : '';
  }
  register() {
    this.modalService.openModal(RegisterPageComponent);
  }
}
