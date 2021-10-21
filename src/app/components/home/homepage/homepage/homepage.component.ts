import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private modalService: ModalServiceService) {}

  ngOnInit() {}
  closeHome() {
    this.modalService.closeModal();
  }
}
