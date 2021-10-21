import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss'],
})
export class ExplorePageComponent implements OnInit {
  constructor(private modalService: ModalServiceService) {}

  ngOnInit() {}
  closeHome() {
    this.modalService.closeModal();
  }
}
