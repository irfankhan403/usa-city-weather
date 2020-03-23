import React ,{useState, useEffect, RefObject, useRef} from 'react'
import { connect } from "react-redux";
import { getCityList,getCityWeather } from "../actions/cityAction";
import { 
    Grid, 
    Paper, 
    Container, 
    InputBase,
    IconButton,
    Typography,
    Button
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";
import CityList from "./CityList";
import CityWeather from "./CityWeather";
import { CityBody } from '../types/CityBody';
import useDebounce from '../../common/components/useDebounce'

interface WeatherReportProps{
    getCityList:(query:string)=>void
    getCityWeather:(city:string)=>void
}

const WeatherReport = (props: WeatherReportProps)=> {
    const ref:RefObject<HTMLDivElement> = useRef(null);
    const initialState = ""

    const [value, setValue] = useState(initialState);
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState<CityBody | undefined>(undefined);
    const classes = useStyles();

    const debouncedSearchValue = useDebounce(value, 500);

    useEffect(() => {
        if (debouncedSearchValue) {
            props.getCityList(value)
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      });

    function handleClickOutside(event :any) {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowList(false)
        }
    }
    const handleSelect = (city: CityBody) => {
        setSelected(city);
        setShowList(false)
        setValue(city.city)
    }

    const getReport= ()=>{
        //@ts-ignore
        props.getCityWeather(selected._id);
    }
    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={12} className={classes.alignContentCenter}>
                <Typography variant="h5" align="center" gutterBottom>
                    Weather Report
                </Typography>
                </Grid>
                <Grid item container xs={12} className={classes.formWrapper}>
                    <Grid item xs={12} md={6} sm={9} className={classes.formWrapper}>
                    <Paper component="form" className={classes.searchWrapper} ref={ref}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search City"
                            inputProps={{ 'aria-label': 'search city' }}
                            value={value}
                            onChange={(e:any) => setValue(e.target.value)}
                            onFocus={()=>setShowList(true)}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        {
                            showList ? <CityList onClick={handleSelect}/> : null
                        }
                        
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} sm={3} className={classes.formWrapper} style={{justifyContent:"left"}}>
                    <Button variant="contained" className={classes.button} color="primary" onClick={()=>getReport()} disabled={selected ===undefined}>
                        Get Weather Report
                    </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.alignContentCenter}>
                    <CityWeather />
                </Grid>
            </Grid>
            
        </Container>

    )
}


const mapStateToProps = null;

const mapDispatchToProps ={
    getCityList,
    getCityWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherReport);

const useStyles = makeStyles((theme:any) => ({
    alignContentCenter:{
        marginTop:30,
        display:"flex",
        justifyContent: "center"
    },
    formWrapper:{
        display: 'flex',
        marginTop:10,
        justifyContent: "center"

    },
    searchWrapper: {
        position:"relative",
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width:"100%",
        marginRight:10,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        "&.Mui-focused ~ #list-wrapper":{
            display:"block"
        }
      },
      iconButton: {
        padding: 10,
      },
      button:{
          zIndex:-1
      }
}));