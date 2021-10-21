import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  constructor(private modalService: ModalServiceService) {}

  ngOnInit() {}
  closeHome() {
    this.modalService.closeModal();
  }
}
