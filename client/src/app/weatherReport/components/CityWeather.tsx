import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { _get } from "../../../services/common";


interface CityWeatherProps {


}

const CityWeather = (props: CityWeatherProps) => {
    const classes = useStyles();
    const weatherReport = useSelector(state => _get(state, "weatherData.weatherReport", null))
    const loading = useSelector(state => _get(state, "weatherData.loading", null))

    if (loading) {
        return <CircularProgress />
    }

    return (
        <Fragment>
            {
                weatherReport ?
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {weatherReport.city}
                            </Typography>
                            <Avatar alt={`${weatherReport.desc}`} src={`http://openweathermap.org/img/w/${weatherReport.icon}.png`} />
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {weatherReport.desc}
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                {weatherReport.tempInF} &#8457; | {weatherReport.tempInC} &#8451;
                            </Typography>
                        </CardContent>
                    </Card>
                    :
                    <Typography variant="subtitle1" align="center">
                        Please select city
          </Typography>
            }
        </Fragment>


    );
}

export default CityWeather;

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        width: "100%",
        marginTop: 20,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
