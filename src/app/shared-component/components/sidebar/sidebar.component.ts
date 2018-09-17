import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';
import {Utility} from '../../../shared/helpers/utility';
import {LocationStrategy} from '@angular/common';
import {LastUrlModel} from '../../../shared/models/token.model';
import {StorageKeys, StorageService} from '../../../shared/services/storage.service';
import {environment} from '../../../../environments/environment';
import {StringUtility} from '../../../shared/helpers/string.utility';
declare var $: any;
declare var Ps: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router,
                private url: LocationStrategy,
                private storageService: StorageService) { }

    ngOnInit() {
        const calendar: any = $('#calendar1');
        calendar.fullCalendar({
             eventClick: function(calEvent: any, jsEvent: any, view: any) {
                alert('Event: ' + calEvent.title);
                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                alert('View: ' + view.name);
            }
        });
        Ps.initialize(document.querySelector('.sidenav-outer'));
    }

    logout() {
      this.saveLastUrlToStorage();
      const redirectUrl = Utility.redirectUrl(location.origin, '/pages');
      this.authService.logout(redirectUrl);
    }

    private saveLastUrlToStorage() {
      let path = this.url.path() !== '/' ? this.url.path() : 'pages';

      if (path.length > 0 && path[0] === '/') {
        path = path.substring(1);
      }

      this.storageService.setLocal(StorageKeys.lastUrl, new LastUrlModel(path.split('/')));
    }
}
