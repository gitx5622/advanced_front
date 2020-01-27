import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

const Companies = ({ companies }) => {
  return (
    <div>
     <Container>
         {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-info">
                <tr>
                  <th scope="col" className="border-0">
                    Company Name
                  </th>
                  <th scope="col" className="border-0">
                   Email
                  </th>
                  <th scope="col" className="border-0">
                  Contacts
                  </th>
                  <th scope="col" className="border-0">
                   Address
                  </th>
                  <th scope="col" className="border-0">
                    Customer
                  </th>
                  </tr>
                  </thead>
                  <tbody>
                  {companies && companies.map((company) => (
                  <tr>
                  <td>{company.company_name}</td>
                  <td>{company.email}</td>
                  <td>{company.contacts}</td>
                  <td>{company.address}</td>
                  <td>{company.customer}</td>
                </tr>
                ))}
                </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </Container>

    </div>
  )
};

export default Companies;
