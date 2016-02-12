declare module gravatar {
  interface Gravatar {
    url(email:string, options?:any, addProtocol?:boolean): string;
  }
}

declare var gravatar: gravatar.Gravatar;

export = gravatar;
