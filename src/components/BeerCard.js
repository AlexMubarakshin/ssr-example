import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  img: {
    width: '100%',
  }
};

const BeerCard = ({ classes, beer }) => (
  <Card>
    <CardContent>
      <Grid
        container
        direction="row"
        spacing={4}
      >
        <Grid item xs={3}>
          <img
            className={classes.img}
            src={beer.image_url}
            title={beer.name}
            alt={beer.name}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
          >
            {beer.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {beer.description}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default withStyles(styles)(BeerCard);
