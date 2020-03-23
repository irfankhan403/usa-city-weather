import React, { Fragment, } from 'react'
import {
    Paper,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux'
import { _get } from "../../../services/common";

interface CityListProps {
    onClick: (city: any) => void

}

const CityList = (props: CityListProps) => {
    const classes = useStyles();
    const cities = useSelector(state => _get(state, "weatherData.cities", []))
    const {onClick} =props;
    return (
        <Fragment>
            <Paper className={classes.listWrapper} id="list-wrapper" >
                <List className={classes.root}>
                    { cities.length > 0 ?
                        cities.map((city: any) => (
                            <ListItem key={city._id} button className={classes.listItem} onClick={()=>onClick(city)}>
                                <ListItemText primary={`${city.city}, ${city.state}`} secondary={city.zipcode} />
                            </ListItem>
                        ))
                        :
                        <ListItem className={classes.listItem} >
                            <ListItemText primary="No city found" />
                        </ListItem>
                    }

                </List>
            </Paper>
        </Fragment>

    )
}


export default CityList;


const useStyles = makeStyles(theme => ({
    root: {
        width: 400,
        zIndex: 9,
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {

    },
    listWrapper: {
        position: "absolute",
        top: "55px",
        maxHeight: "400px",
        overflow: "auto",
    }
}));