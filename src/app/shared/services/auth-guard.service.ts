///<reference path="../../../../node_modules/@angular/router/src/interfaces.d.ts"/>
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {StorageKeys, StorageService} from './storage.service';
import {LastUrlModel, TokenModel} from '../models/token.model';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from './auth.service';
import {Utility} from '../helpers/utility';
import {LocationStrategy} from '@angular/common';
import {StringUtility} from '../helpers/string.utility';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private storageService: StorageService,
              private authService: AuthService,
              private jwtHelper: JwtHelperService,
              private url: LocationStrategy) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const redirectUrl = Utility.redirectUrl(location.origin, '/pages');

    if (this.authService.isAuthenticated()) {
      return true;

    } else if (this.authService.getAccessTokenFromRoute(route)) {
      const access_token = this.authService.getAccessTokenFromRoute(route);

      if (this.jwtHelper.isTokenExpired(access_token)) {

        this.authService.navigateToAWSLogin(redirectUrl);
        return false;
      }

      this.authService.saveToken(access_token);

      return true;

    } else {
      this.saveLastUrlToStorage(state);
      this.authService.navigateToAWSLogin(redirectUrl);
      return false;
    }
  }

  private saveLastUrlToStorage(state: RouterStateSnapshot): void {
    let path =  state.url.indexOf('id_token') === -1 ? state.url : this.url.path() !== '/' ? this.url.path() : '/pages';

    if (path[0] === '/') {
      path = path.slice(1);
    }

    this.storageService.setLocal(StorageKeys.lastUrl, new LastUrlModel(path.split('/')));
  }
}
