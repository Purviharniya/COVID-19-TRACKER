import React from 'react';
import {Card, CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) =>{

   if(!confirmed){
       return 'Loading.....';
   }

   console.log(lastUpdate);

    return(

        <div className={styles.container}>
            <Grid container spacing={4} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)} style={{backgroundColor:'rgba(208,208,241,1)' ,boxShadow:'4px 4px 8px blue'}}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                            INFECTED
                       </Typography>
                       <Typography variant="h5">
                            <CountUp  start={0} end={confirmed.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                            Number of confirmed cases of COVID-19 
                       </Typography>
                   </CardContent>
                </Grid> 
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.active)} style={{backgroundColor:'rgba(241,208,241,1)' ,boxShadow:'4px 4px 8px purple'}}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                            ACTIVE
                       </Typography>
                       <Typography variant="h5">
                            <CountUp  start={0} end={confirmed.value-recovered.value-deaths.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color="textSecondary">
                         {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                            Number of Active cases of COVID-19
                       </Typography>
                   </CardContent>
                </Grid> 
                <Grid item component={Card } xs={12} md={3} className={cx(styles.card,styles.deaths)} style={{backgroundColor:'rgba(241,208,208,1)' ,boxShadow:'4px 4px 8px red'}}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                            DEATHS
                       </Typography>
                       <Typography variant="h5">
                            <CountUp  start={0} end={deaths.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color="textSecondary">
                         {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                            Number of deaths of COVID-19
                       </Typography>
                   </CardContent>
                </Grid> 
                <Grid item component={Card} xs={12} md={3} className={styles.recovered} style={{backgroundColor:'rgba(208,241,208,1)' ,boxShadow:'4px 4px 8px green', marginTop:'5%'}}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                            RECOVERED
                       </Typography>
                       <Typography variant="h5">
                            <CountUp  start={0} end={recovered.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color="textSecondary">
                         {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant="body2">
                            Number of recoveries of COVID-19
                       </Typography>
                   </CardContent>
                </Grid> 
            </Grid>
        </div>
    )
}

export default Cards;
