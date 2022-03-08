import makeStyles from '@material-ui/core/styles/makeStyles';
import { Card } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
    imageStyle: {
        marginTop: "0px",
        backgroundColor: "lightblue",
        border: "0px",
    },
    contentStyle: {
        marginLeft: "20px !important",
        fontSize: "15px !important",
        top: "20px !important",
        color: "#000 !important",
    },
    cardTitle: {
        marginTop: "204px",
        fontSize: "40px",
        fontWeight: "bold",
        color: "black",
    },
    cardText: {
        fontSize: "17px",
        fontWeight: "bold",
        color: "black",
        fontStyle: "italic",
        width: "50%",
        textAlign: "justify",
        marginTop: "581px",
        marginLeft: "30px",
        backgroundColor: "lightblue",
        float: "right",
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px',
            fontSize: "7px",
        },
    },
}));
export default function AboutComponent() {
    const classes = useStyles();
    return (

        <Card className={classes.imageStyle}>
            <Card.Img src="/images/about.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Text className={classes.cardText}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                 </Card.Text>
            </Card.ImgOverlay>
        </Card>

    )
}