declare namespace ControlScssNamespace {
  export interface IControlScss {
    List: string;
    header: string;
    hideListIt: string;
    listItem: string;
    showList: string;
  }
}

declare const ControlScssModule: ControlScssNamespace.IControlScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ControlScssNamespace.IControlScss;
};

export = ControlScssModule;
