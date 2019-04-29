import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { AuthenticationService, ErrorService, ParseService } from 'app/data/services';
import { UserService, RoleService } from 'app/data/modelservices';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthenticationService,
    ErrorService,
    ParseService,
    RoleService,
  ]
})

export class AppModule {
  private static onAppInit(injector: Injector) {
      return () => {
          return new Promise<void>((resolve, reject) => {
              injector.get(AuthenticationService).initialize().then(() => resolve());
          })
      }
  }
}