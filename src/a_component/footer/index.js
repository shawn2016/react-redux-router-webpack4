/** Footer 页面底部 **/
import React from "react";
import css from "./index.scss";

export default class Footer extends React.PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={css.footer}>
        © 2017{" "}
        <a href="http://nodedai.com" target="_blank" rel="noopener noreferrer">
          nodedai.com
        </a>, Inc.
      </div>
    );
  }
}
