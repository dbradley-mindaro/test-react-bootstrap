
import { Card } from "react-bootstrap";
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    footerStyle: {
        backgroundColor: "lightblue",
        color: "#212529",
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]: {
            fontSize: "13px",
            width: "103%",
        },
    }
}));

export default function FooterComponent() {
    const classes = useStyles();
    return (
        <Card.Footer className={classes.footerStyle}>
            ©2020 Mindaro  |  All Rights Reserved  | Privacy Policy
        </Card.Footer>


    )
}