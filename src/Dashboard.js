import React, { Component } from 'react';

import { Box, Grommet, Heading } from 'grommet';

import { getStats } from './api';

export default class Dashboard extends Component {
  state = {
    loading: true,
    stats: undefined,
    error: undefined,
  }
  componentDidMount() {
    getStats().then(
      stats => this.setState({ stats, error: undefined, loading: false }),
      error => this.setState({ stats: undefined, error, loading: false }),
    );
  }
  render() {
    const { error, loading, stats } = this.state;

    let content;
    if (loading) {
      content = (
        <Box full={true} align='center' justify='center'>
          <Heading level={4}>Loading stats...</Heading>
        </Box>
      );
    } else if (error) {
      content = error;
    } else {
      content = (
        <Box direction='row' align='center'>
          <Heading>{stats.totalStars}</Heading> stars
        </Box>
      );
    }

    return (
      <Grommet>
        <Heading level={2}># Stars</Heading>
        {content}
      </Grommet>
    );
  }
}
