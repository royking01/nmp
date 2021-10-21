import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit {
  constructor(private modalService: ModalServiceService) {}

  ngOnInit() {}
  closeHome() {
    this.modalService.closeModal();
  }
}
