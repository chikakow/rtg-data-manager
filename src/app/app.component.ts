import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageKeys, StorageService} from './shared/services/storage.service';
import {LastUrlModel, TokenModel} from './shared/models/token.model';
import {Location as Loc} from '@angular/common';
import {AuthService} from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router,
              private storageService: StorageService,
              private authService: AuthService,
              private location: Loc) {

  }

  ngOnInit(): void {
    console.log('router url is', this.router.url);

    console.log('location ', this.location);
    console.log('app compo', );
    const hash = window.location.hash;
    const token = this.authService.getAccessTokenFromUrlHash(hash);
    //  window.location.hash.slice(window.location.hash.indexOf('access_token') + 'access_token'.length + 1, window.location.hash.indexOf('&expires_in'));
    // this.getAccessTokenFromUrlHash(window.location.hash);
    console.log('token is', token);

    this.authService.saveToken(token);

    const lastUrl = (<LastUrlModel>this.storageService.getLocal(StorageKeys.lastUrl));
    if (lastUrl && lastUrl.path.length > 0) {
      this.router.navigate([...lastUrl.path]);
    } else {
      this.router.navigate(['/']);
    }
  }

}

