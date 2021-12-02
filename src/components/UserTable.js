import "../App.css";
import { Navbar, Nav, Dropdown, Icon, IconButton, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { Container } from "react-bootstrap";
import ContainerMUI from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MUIDataTable from "mui-datatables";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserTable(props) {
  const columns = ["Name", "Email", "Phone No.", "Address"];

  const data = [
    [
      "Wamiq Waheed",
      "wamiqii18@gmail.com",
      "+923365104567",
      "Bahria Town Phase 7",
    ],
    [
      "Taha Zahir",
      "tahazahir13@gmail.com",
      "+923330513368",
      "Bahria Town Phase 8",
    ],
    ["Ahmer Farooq", "ahmer@gmail.com", "+923331546789", "Bahria Town Phase 7"],
    ["Nouman", "Nouman@gmail.com", "+924512549658", "Bahria Town Phase 7"],
    ["Osama", "osama@gmail.com", "+925623251245", "Bahria Town Phase 8"],
    ["Zubair", "zubair@gmail.com", "+923321523465", "Bahria Town Phase 7"],
    ["Raqib", "raqib@gmail.com", "+921540025645", "Bahria Town Phase 8"],
    ["Farooq", "farooq@gmail.com", "+923331546789", "Bahria Town Phase 7"],
    ["Nouman", "Nouman@gmail.com", "+924512549658", "Bahria Town Phase 7"],
    ["Osama", "osama@gmail.com", "+925623251245", "Bahria Town Phase 8"],
    ["Zubair", "zubair@gmail.com", "+923321523465", "Bahria Town Phase 7"],
    ["Raqib", "raqib@gmail.com", "+921540025645", "Bahria Town Phase 8"],
  ];

  const options = {
    filterType: "checkbox",
    selectableRowsHideCheckboxes: true,
    jumpToPage: true,
  };

  return (
    <Container
      fluid
      style={{ width: "auto", minHeight: "93vh" }}
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
        }}
        component="h4"
        variant="overline"
      >
        Table View for User Data
      </Typography>
      <Row>
        <Col>
          <ContainerMUI
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: 25,
              borderRadius: 10,
            }}
          >
            <MUIDataTable
              title={"Employee List"}
              data={data}
              columns={columns}
              options={options}
            />
          </ContainerMUI>
        </Col>
      </Row>
    </Container>
  );
}

export default UserTable;
