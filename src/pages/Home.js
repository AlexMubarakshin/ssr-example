import React from 'react';
import { Helmet } from 'react-helmet';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '2rem',
  }
};

const Home = ({ classes }) => {
  return (
    <div>
      <Helmet>
        <title>Universal Page</title>
        <meta name="description" content="Modern Web App - Home Page" />
      </Helmet>
      <Container>
        <Grid
          container
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h1">🏋️ Server Side Rendering DEMO 🏋️</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Home);
