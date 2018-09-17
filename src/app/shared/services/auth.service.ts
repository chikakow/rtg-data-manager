import { Injectable } from '@angular/core';
import {StorageKeys, StorageService} from './storage.service';
import {environment} from '../../../environments/environment';
import {TokenModel} from '../models/token.model';
import {JwtHelperService} from '@auth0/angular-jwt';
import * as decode from 'jwt-decode';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private storageService: StorageService,
              private jwtHelper: JwtHelperService,
              private router: Router) { }

  logout(redirectUrl: string): void {
    this.storageService.removeLocal(StorageKeys.token);
    this.navigateToAWSLogin(redirectUrl);
  }

  navigateToNotAuthorized () {
    this.router.navigate(['signup', 'notauthorized']);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return !!token.accessToken && !this.jwtHelper.isTokenExpired(token.accessToken);
  }

  // userRoles(): string[] {
  //   const token: any = this.getToken();
  //   const roleClaims = decode(token.accessToken)['cognito:groups'];
  //
  //   return roleClaims ? roleClaims : [];
  // }

  getAccessTokenFromRoute(route: ActivatedRouteSnapshot): string {

    if (!this.router.url || this.router.url.indexOf('access_token') === -1) {
      console.error('no access token from route url');
      return '';
    }

    return this.router.url.slice(this.router.url.indexOf('access_token') + 'access_token'.length + 1, this.router.url.indexOf('&expires_in'));
  }

  getAccessTokenFromUrlHash(hash: string): string {
    if (!hash || hash.indexOf('access_token') === -1) {
      console.error('no access token from url hash');
      return '';
    }

    return hash.slice(hash.indexOf('access_token') + 'access_token'.length + 1, hash.indexOf('&expires_in'));
  }

  navigateToAWSLogin(redirectUrl: string) {
    window.location.href = `${environment.login_url}/login?redirect_uri=${encodeURI(redirectUrl)}&response_type=token&client_id=3ijka4463f254ppmgbem103qj0`;
  }

  getToken(): TokenModel {
    const token = this.storageService.getLocal<TokenModel>(StorageKeys.token);
    return token;
  }

  saveToken(token: string) {
    if (token) {
      this.storageService.setLocal(StorageKeys.token, new TokenModel(token));
    }
  }

}
