import "../App.css";
import { Navbar, Nav, Dropdown, Icon, IconButton, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { Container } from "react-bootstrap";
import ContainerMUI from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MUIDataTable from "mui-datatables";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Table } from "rsuite";
import { useState } from "react";
const { Column, HeaderCell, Cell, Pagination } = Table;

function ImamManageAcc(props) {
  const [fakedata, setfakedata] = useState([
    {
      id: 1,
      city: "Islamabad",
      email: "mali@gmail.com",
      firstName: "Muhammad",
      lastName: "Ali",
      zipCode: "17026-3154",
    },
    {
      id: 2,
      city: "Islamabad",
      email: "ahmed@gmail.com",
      firstName: "Ahmed",
      lastName: "Ali",
      zipCode: "43767",
    },
    {
      id: 3,
      city: "Islamabad",
      email: "farooq@gmail.com",
      firstName: "Farooq",
      lastName: "Farooq",
      zipCode: "54812",
    },
    {
      id: 4,
      city: "Islamabad",
      email: "Nouman@gmail.com",
      firstName: "Nouman",
      lastName: "Nouman",
      zipCode: "76315-2246",
    },
    {
      id: 5,
      city: "Islamabad",
      email: "Osama@gmail.com",
      firstName: "Osama",
      lastName: "Osama",
      zipCode: "88870-3897",
    },
    {
      id: 6,
      city: "Islamabad",
      email: "Zubair@gmail.com",
      firstName: "Zubair",
      lastName: "Zubair",
      zipCode: "81514",
    },
    {
      id: 7,
      city: "Islamabad",
      email: "Raqib@gmail.com",
      firstName: "Raqib",
      lastName: "Raqib",
      zipCode: "17423-9317",
    },

    {
      id: 8,
      city: "Islamabad",
      email: "farooq@gmail.com",
      firstName: "Farooq",
      lastName: "Farooq",
      zipCode: "54812",
    },
    {
      id: 9,
      city: "Islamabad",
      email: "Nouman@gmail.com",
      firstName: "Nouman",
      lastName: "Nouman",
      zipCode: "76315-2246",
    },
    {
      id: 10,
      city: "Islamabad",
      email: "Osama@gmail.com",
      firstName: "Osama",
      lastName: "Osama",
      zipCode: "88870-3897",
    },
    {
      id: 11,
      city: "Islamabad",
      email: "Zubair@gmail.com",
      firstName: "Zubair",
      lastName: "Zubair",
      zipCode: "81514",
    },
    {
      id: 12,
      city: "Islamabad",
      email: "Raqib@gmail.com",
      firstName: "Raqib",
      lastName: "Raqib",
      zipCode: "17423-9317",
    },
  ]);

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
          marginTop: -65,
        }}
        component="h4"
        variant="overline"
      >
        Manage Imam Data
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
            <Table
              height={590}
              data={fakedata}
              onRowClick={(data) => {
                console.log(data);
              }}
            >
              <Column width={70} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column width={200} fixed>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
              </Column>

              <Column width={200}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
              </Column>

              <Column width={200}>
                <HeaderCell>ZipCode</HeaderCell>
                <Cell dataKey="zipCode" />
              </Column>

              <Column width={200}>
                <HeaderCell>City</HeaderCell>
                <Cell dataKey="city" />
              </Column>

              <Column width={300}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
              </Column>
              <Column width={120} fixed="right">
                <HeaderCell>Action</HeaderCell>

                <Cell>
                  {(rowData) => {
                    function handleAction() {
                      alert(`id:${rowData.id}`);
                    }
                    return (
                      <span>
                        <a style={{ color: "red" }} onClick={handleAction}>
                          {" "}
                          Remove{" "}
                        </a>
                      </span>
                    );
                  }}
                </Cell>
              </Column>
            </Table>
          </ContainerMUI>
        </Col>
      </Row>
    </Container>
  );
}

export default ImamManageAcc;
