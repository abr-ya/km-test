declare namespace MaterialDialogScssNamespace {
  export interface IMaterialDialogScss {
    buttons: string;
    cancel: string;
    dialog: string;
    mobileButtons: string;
  }
}

declare const MaterialDialogScssModule: MaterialDialogScssNamespace.IMaterialDialogScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MaterialDialogScssNamespace.IMaterialDialogScss;
};

export = MaterialDialogScssModule;
