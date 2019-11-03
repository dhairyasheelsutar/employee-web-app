import React from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import { Link } from 'react-router-dom';

const dashboardCard = (props) => {
    return(
        <Grid item xs={3}>
            <Link to={"/query?" + props.queryString}>
                <Card>
                    <CardHeader title={props.title} />
                    <Divider/>
                    <CardContent>
                        <Typography variant={"h3"} component={"h4"} >{props.value}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
};

export default dashboardCard;
