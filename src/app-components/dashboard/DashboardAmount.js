import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button } from "reactstrap";

import CountUp from "react-countup";

export default function DashboardAmount(props) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Col xs="12" lg="10" xl="8">
          <Card className="card-box mb-5">
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-primary text-white btn-icon mx-auto text-center shadow-primary">
                <FontAwesomeIcon
                  icon={["fas", "money-bill"]}
                  className="display-4"
                />
              </div>
              <div className="font-weight-bold text-black display-3 mt-4 mb-1">
                <CountUp
                  start={0}
                  end={8348}
                  duration={4}
                  separator=""
                  suffix=" MRU"
                />
              </div>
              <div className="font-size-xxl text-black ">Solde</div>

              <div className="text-center">
                <div className="flex-grow-1 w-100 d-flex align-items-center flex-row">
                  <div className="bg-composed-wrapper--content p-2">
                    <div className="align-self-center">
                      <Row className="row-no-gutters">
                        <Col xl="5" md="12">
                          <div className="py-2 px-2">
                            <div className="p-4 text-center">
                              <div className="display-4 text-primary font-weight-bold">
                                <span>
                                  <CountUp
                                    start={0}
                                    end={33102}
                                    duration={4}
                                    separator=""
                                    suffix=" MRU"
                                  />
                                </span>
                              </div>
                              <div className="font-size-lg text-black">
                                {props.labelPrimary || "Total de transferts"}
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xl="5" md="12" className="ml-auto">
                          <div className="py-2 px-2">
                            <div className="p-4 text-center">
                              <div className="display-4 text-danger font-weight-bold">
                                <span>
                                  <CountUp
                                    start={0}
                                    end={12684}
                                    duration={4}
                                    separator=""
                                    suffix=" MRU"
                                  />
                                </span>
                              </div>
                              <div className="font-size-lg  text-black">
                                Total de retraits
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </div>
    </>
  );
}

export function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="6">
            <div className="flex-grow-1 w-100 d-flex align-items-center flex-row">
              <div className="bg-composed-wrapper--content p-5">
                <div className="align-self-center px-4">
                  <Row className="row-no-gutters">
                    <Col xl="6">
                      <div className="py-3">
                        <Card className="card-box  border-success card-box-border-bottom rounded hover-scale-sm">
                          <div className="p-4 text-left">
                            <div className="display-3 text-success font-weight-bold">
                              $33.485
                            </div>
                            <div className="font-size-xxl font-weight-bold text-black">
                              Income
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                    <Col xl="6">
                      <div className="py-3">
                        <Card className="card-box  border-danger card-box-border-bottom rounded hover-scale-sm">
                          <div className="p-4 text-left">
                            <div className="display-3 text-danger font-weight-bold">
                              $71.684
                            </div>
                            <div className="font-size-xxl font-weight-bold text-black">
                              Expenses
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
