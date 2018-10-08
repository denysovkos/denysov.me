import * as React from 'react';
import Masonry from 'react-masonry-component';

import { getRepos } from 'modules/repos';
import { IRepos, IReposAction } from 'models/repos';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

const style = require('./style.css');

interface IProps {
  repos: IRepos;
  getRepos: Redux.ActionCreator<IReposAction>;
}

const masonryOptions = {
  transitionDuration: 0,
};

const Card = ({val}) => (
  <div style={{marginBottom: 10}}>
    <a href={val.html_url}>
      <h3>{val.name}</h3>
      <strong>Language: {val.language}</strong>
      <p>{val.description}</p>
    </a>
  </div>
);

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    return dispatch(getRepos());
  },
}])
@connect(
  (state) => ({ repos: state.repos.repos }),
)

class Grid extends React.Component<any, IProps> {

  public componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getRepos());
  }

  public render() {
    let { repos = [] } = this.props;
    if (!repos) {
      repos = [];
    }

    return (
      <div className={style.Grid}>
      <p>
      <h2>Personal Projects</h2>
      I'm not freelancing, I'm working on digital products.
      </p>
      <Masonry
        className={'thumbnails'}
        elementType={'section'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
    >
        {repos.map((val, key) => <Card key={`card-${key}`} val={val}/>)}
    </Masonry>
    </div>
    );
  }
}

export { Grid }
