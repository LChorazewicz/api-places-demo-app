import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 375,
    },
    title: {
        fontSize: 14,
        textAlign: 'left',
        marginBottom: 28
    },
    info:{
        fontSize: 11,
        fontWeight: 200
    }
});

export default function CardBox(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h4" component="h2">
                    {props.percentage}%
                </Typography>
                <Typography variant="h6" className={classes.info}>
                    {props.usage} z {props.limit} odpytań
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Zwiększ limit</Button>
            </CardActions>
        </Card>
    );
}
