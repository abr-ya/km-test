declare namespace DndScssNamespace {
  export interface IDndScss {
    drag: string;
    item: string;
    line: string;
    title: string;
  }
}

declare const DndScssModule: DndScssNamespace.IDndScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DndScssNamespace.IDndScss;
};

export = DndScssModule;
