declare namespace ControlScssNamespace {
  export interface IControlScss {
    Button: string;
    ButtonActive: string;
    List: string;
    control: string;
    header: string;
    hideListIt: string;
    listItem: string;
    showList: string;
    withDot: string;
  }
}

declare const ControlScssModule: ControlScssNamespace.IControlScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ControlScssNamespace.IControlScss;
};

export = ControlScssModule;
