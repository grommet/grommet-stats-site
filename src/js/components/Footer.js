import React, { Component } from 'react';
import { Box, Button } from 'grommet';

class Footer extends Component {
  render() {
    return (
      <Box justify='center' direction='row' pad={{ vertical: 'large' }}>
        <Button
          plain={true}
          target='_blank'
          href='http://slackin.grommet.io'
        />
      </Box>
    );
  }
}
export default Footer;
