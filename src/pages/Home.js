import React from 'react';
import { Helmet } from 'react-helmet';

import { useDispatch, useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import * as beersActions from '../store/beer/beerSlice';

import BeerCard from '../components/BeerCard';

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    margin: '4rem 0',
  }
};

const Home = ({ classes }) => {
  const dispatch = useDispatch();

  const { beers } = useSelector(state => state.beers);

  React.useEffect(() => {
    dispatch(beersActions.fetchBeers());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Beer explorer</title>
        <meta name="description" content="Brewdog's beer explorer" />
      </Helmet>
      <Container>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={8}
        >
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h1">{'Brewdog\'s beer explorer'}</Typography>
          </Grid>

          {
            beers.map((beer) => (
              <Grid item xs={12} sm={6} md={4} key={beer.id}>
                <BeerCard beer={beer} />
              </Grid>
            ))
          }

        </Grid>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Home);
