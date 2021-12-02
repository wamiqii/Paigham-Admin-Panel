import "../App.css";
import graph from "../graph.jpg";
import table from "../Table.JPG";
import { Navbar, Nav, Dropdown, Icon, IconButton, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useStyles = makeStyles((theme) => ({
  rootone: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

function MosquePage(props) {
  const classes = useStyles();

  return (
    <Container
      fluid
      style={{
        width: "auto",
        minHeight: "100vh",
      }}
      className="landingpage"
    >
      <Navbar appearance="transparent">
        <Navbar.Header style={{ padding: 5 }}>
          <a
            style={{
              backgroundColor: "#EFEFEF",
              color: "#2C2C2C",
              borderRadius: 80,
              fontFamily: "fantasy",
              padding: 15,
              fontSize: 30,
            }}
            href="#"
            className="navbar-brand logo"
          >
            پیغام
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Dropdown
              style={{ marginTop: 20, marginRight: 70 }}
              renderTitle={() => {
                return (
                  <IconButton
                    appearance="default"
                    icon={<Icon icon="user" />}
                    circle
                  />
                );
              }}
            >
              <Dropdown.Item>
                <Icon size="lg" icon="user" />{" "}
                <Button style={{ marginBottom: 10 }} appearance="subtle">
                  Profile
                </Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon size="lg" icon="sign-out" />
                <Button
                  onClick={() => {
                    props.history.push("/");
                  }}
                  style={{ marginBottom: 10 }}
                  appearance="subtle"
                >
                  Logout
                </Button>
              </Dropdown.Item>
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
      <Row style={{ margin: "auto" }} className="justify-content-md-center">
        <Col
          style={{
            textAlign: "center",
            alignContent: "center",
          }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Card
            onClick={() => {
              props.history.push("/home/mosque/table");
            }}
            style={{ margin: "auto", marginTop: 150, marginBottom: -65 }}
            elevation={20}
            className={classes.rootone}
          >
            <CardHeader
              style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
              title="Table View"
              subheader="Mosque Data"
            />
            <CardMedia
              className={classes.media}
              image={table}
              title="mosquetable"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MosquePage;
