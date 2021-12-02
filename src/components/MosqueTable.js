import "../App.css";
import { Navbar, Nav, Dropdown, Icon, IconButton, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { Container } from "react-bootstrap";
import ContainerMUI from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MUIDataTable from "mui-datatables";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MosqueTable(props) {
  const columns = ["Name", "Address", "Imam"];

  const data = [
    [
      "Usman Block Mosque",
      "Street#28, Usman Block, Bahria Town Phase-8",
      "Ali Ahmed",
    ],
    [
      "Jamia Masjid e Ali Murtaza",
      "Street#29, Sector-D, Bahria Town Phase-8",
      "Farooq Ahmer",
    ],
    ["Jamia Masjid Usmania", "Bahria Safari Valley", "Nouman Ejaz"],
    [
      "Jamia Masjid AbuBakar",
      "Abu Bakar Block, Bahria Town Phase-8",
      "Osama Khan",
    ],
    ["Jamia Masjid Umer", "Umer Block, Bahria Town Phase-8", "Azeem Khan"],
    ["Jamia Masjid Syed Sajjad Haider", "Bahria Town Phase-8", "Usman Ali"],
    ["Jamia Masjid Malik Riaz Hussain", "Bahria Town Phase-8", "Muhammad Ali"],
    ["Jamia Masjid Rafi", "Rafi Block, Bahria Town Phase-8", "Usama Khan"],
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
        Table View for Mosque Data
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

export default MosqueTable;
