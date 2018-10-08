export interface  IContact {
  isOpen: boolean;
  isSending: boolean;
}

export interface  IContactAction {
  type?: string;
  [key: string]: any;
}
