import React from 'react';
import { Helmet } from 'react-helmet';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    margin: '4rem 0',
  }
};

const NoMatch = ({ classes }) => (
  <div>
    <Helmet>
      <title>Beer explorer: 404</title>
      <meta name="description" content="404 Brewdog's beer explorer" />
    </Helmet>
    <Container>
      <Typography
        className={classes.title}
        variant="h1">
        {'404 Brewdog\'s beer explorer'}
      </Typography>
    </Container>
  </div>
);

export default withStyles(styles)(NoMatch);
