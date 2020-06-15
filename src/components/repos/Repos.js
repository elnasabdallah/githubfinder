import React from 'react';
import Repoitem from './Repoitem';
import PropTypes from 'prop-types';
const Repos = ({ repos }) => {
  return repos.map(repo => <Repoitem key={repo.id} repo={repo} />);
};

Repos.prototype = {
  repos: PropTypes.array.isRequired
};
export default Repos;
