import * as React from 'react';
import { About } from 'components';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Home}>
        <About />
      </div>
    );
  }
}

export { Home }
