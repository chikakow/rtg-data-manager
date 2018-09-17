import { Component, OnInit } from '@angular/core';
import {StorageKeys, StorageService} from '../shared/services/storage.service';
import {Router} from '@angular/router';
import {LastUrlModel} from '../shared/models/token.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    // const path = (<LastUrlModel>this.storageService.getLocal(StorageKeys.lastUrl)).path;
    // this.router.navigate([...path]);
  }

}
