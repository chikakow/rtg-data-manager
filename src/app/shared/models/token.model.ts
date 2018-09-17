export interface TokenResponseModel {
  tokens: TokenModel;
}

export class TokenModel {
  constructor(public accessToken: string) {
  }
}

export class LastUrlModel {
  constructor(public path: string[]) {
  }
}
