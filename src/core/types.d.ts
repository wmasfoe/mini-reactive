export type ObjReactiveType = {
  [k: string | symbol]: any;
};

export interface WatcherType {
  update: () => void;
}

export interface IDep {
  deps: Set<WatcherType>;
  depend: () => void;
  notify: () => void;
}
