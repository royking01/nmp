import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsListItem } from '../Interfaces/Auth/accountListInterface';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  accountListItems: AccountsListItem[] = [
    { label: 'Log Out', icon: 'power', function: 'logOut' },
  ];
  constructor(private router: Router) {}
  accountListItemFunction(e: string) {
    switch (e) {
      case 'logOut':
        this.logOut();
        break;
    }
  }
  logOut() {
    this.router.navigate(['/auth']);
  }
}
