declare namespace DndModuleScssNamespace {
  export interface IDndModuleScss {
    drag: string;
    item: string;
    line: string;
    title: string;
  }
}

declare const DndModuleScssModule: DndModuleScssNamespace.IDndModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DndModuleScssNamespace.IDndModuleScss;
};

export = DndModuleScssModule;
