export interface NamedResource {
  name: string;
  children?: any[];
}

export interface DnDClass extends NamedResource {
  icon: string;
  children?: NamedResource[];
}