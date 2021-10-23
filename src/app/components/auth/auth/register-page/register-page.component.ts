import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  email: string = '';
  password: any = '';
  error_message: string = '';
  constructor(
    private modalService: ModalServiceService,
    private router: Router
  ) {}

  ngOnInit() {}
  login() {
    this.modalService.closeModal();
  }
  next() {
    if (!this.email || !this.password)
      return (this.error_message = 'Invalid Credentials');
    this.router.navigate(['/tabs/tab1']);
    this.modalService.closeModal();
  }
  handleInputValidation(e) {
    e ? (this.error_message = '') : '';
  }
}
