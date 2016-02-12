export function url (email: string, options?: Options, addProtocol?: boolean): string;

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
