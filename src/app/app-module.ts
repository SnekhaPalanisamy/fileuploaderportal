import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MsalBroadcastService, MsalModule, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { FileUpload } from './file-upload/file-upload';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    App,
    FileUpload
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    AppRoutingModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: 'c51d45bf-1e0a-4bf2-8177-928ba4ca47c1',      // Replace with your App ID
          authority: 'https://login.microsoftonline.com/8823be7a-6d3a-42e4-a9ed-80c540109960', // Replace with your tenant ID
          redirectUri: environment.launchurl,
        },
        cache: {
          cacheLocation: 'localStorage',
           storeAuthStateInCookie: false, 
        }
      }),
      
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read']
        }
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map()
      }
    )
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), MsalService, MsalBroadcastService,
  ],
  bootstrap: [App, MsalRedirectComponent]
})
export class AppModule { }
