import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageService} from './services/storage.service';
import {AuthGuardService} from './services/auth-guard.service';
import {UserService} from './services/user.service';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthService} from './services/auth.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3100', 'localhost:3000', 'localhost:3200', 'localhost:3300', 's3.amazonaws.com/rtg-data-manager']
      }
    })
  ],
  declarations: [],
  providers: [
    StorageService,
    AuthService,
    AuthGuardService,
    UserService
  ]
})
export class SharedModule { }
