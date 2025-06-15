import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{

  isLoggedIn = false;
  username = '';

  constructor(private msalService: MsalService) {
  
  }

   async ngOnInit(): Promise<void> {
    try {

     console.log('MSAL instance:', this.msalService.instance);
       await new Promise(resolve => setTimeout(resolve, 500));
      const result = await this.msalService.instance.handleRedirectPromise();

      if (result && result.account) {
        this.msalService.instance.setActiveAccount(result.account);
      }

      const account = this.msalService.instance.getActiveAccount();

      if (!account) {
        const allAccounts = this.msalService.instance.getAllAccounts();
        if (allAccounts.length > 0) {
          this.msalService.instance.setActiveAccount(allAccounts[0]);
        }
      }

      const current = this.msalService.instance.getActiveAccount();
      if (current) {
        this.isLoggedIn = true;
        this.username = current.username;
      }
    } catch (error) {
      console.error('MSAL initialization error:', error);
    }
  }

  login() {

    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logoutRedirect();
  }
}