export interface Machines {
  id: number;
  item: Reference;
  move: Reference;
  version_group: Reference;
}

interface Reference {
  name: string;
  url: string;
}
