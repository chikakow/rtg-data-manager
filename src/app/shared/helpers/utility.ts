import {environment} from '../../../environments/environment';

export const Utility = {
  redirectUrl: (origin: string, routeUrl: string) => {
    return `${origin}/`.split('?')[0].replace('http:', 'https:');
  }
};

