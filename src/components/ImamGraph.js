import "../App.css";
import { Navbar, Nav, Dropdown, Icon, IconButton, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { Container } from "react-bootstrap";
import ContainerMUI from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Line } from "react-chartjs-2";

function ImamGraph(props) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "june",
      "july",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        pointStyle: "rectRot",
        pointBorderWidth: 3,
        pointBorderColor: "#7D9C9C",
        label: "Imam Registered in Each Month (M)",
        data: [3, 1, 1, 2, 0, 2, 0, 1, 6, 1, 3, 1],
        borderColor: [
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
        ],
        backgroundColor: [
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
          "rgba(29,122,123,1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: false,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 7,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <Container
      fluid
      style={{ width: "auto", minHeight: "100vh" }}
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
      <Typography
        style={{
          letterSpacing: 1.5,
          textAlign: "center",
          color: "#EFEFEF",
          fontSize: 25,
          marginTop: -65,
        }}
        component="h4"
        variant="overline"
      >
        Graph View for Imam Data
      </Typography>
      <Row>
        <Col>
          <ContainerMUI
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: 25,
              borderRadius: 10,
            }}
          >
            <Line data={data} options={options} />
          </ContainerMUI>
        </Col>
      </Row>
    </Container>
  );
}

export default ImamGraph;
