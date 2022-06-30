import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputLayout from '../Leftpanel/InputLayout'
import ListPanel from '../Rightpanel/ListPanel'

function DashboardLayout() {
  return (
    <>
      <Card>
        <Card.Body>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <InputLayout />
            </Col>
            <Col>
              <ListPanel />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
export default DashboardLayout