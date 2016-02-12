declare function gravatar (email: string, options?: gravatar.Options, addProtocol?: boolean): string;

declare namespace gravatar {
  export interface Options {
    s?: number | string;
    size?: number | string;
    r?: string;
    rating?: string;
    d?: string;
    default?: string;
    f?: string;
    forcedefault?: string;
  }
}

export = gravatar;
