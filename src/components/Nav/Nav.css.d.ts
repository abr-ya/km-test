declare namespace NavCssNamespace {
  export interface INavCss {
    navigation: string;
  }
}

declare const NavCssModule: NavCssNamespace.INavCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavCssNamespace.INavCss;
};

export = NavCssModule;
