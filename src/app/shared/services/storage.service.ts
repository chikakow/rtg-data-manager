import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  getLocal<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

  setLocal(key: string, value: any): any {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeLocal (key: string) {
    localStorage.removeItem(key);
  }
}

export const StorageKeys = {
  token: 'token',
  lastUrl: 'lastUrl'
}
