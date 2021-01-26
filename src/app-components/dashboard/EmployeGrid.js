import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "reactstrap";

import avatar1 from "../../assets/images/avatars/av1.png";
import avatar2 from "../../assets/images/avatars/av2.png";
import avatar3 from "../../assets/images/avatars/av3.png";
import avatar4 from "../../assets/images/avatars/av4.png";

export default function EmployeGrid() {
  return (
    <>
      <Card className="card-box mt-5 p-3 text-center">
        <div className="my-3">
          {/*<h6 className="font-weight-bold font-size-lg mb-1 text-black">
            Employes de l'agence
            </h6>*/}
          <p className="text-black-50 mb-0"></p>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar1} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Cheikh Abedellahi</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>4.8</span>
              <span className="px-1">|</span>
              +222 40203056
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar2} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Moussa Ba</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>3.7</span>
              <span className="px-1">|</span>
              +222 47010402
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar3} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Ahmed ali</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>3.1</span>
              <span className="px-1">|</span>
              +222 45203014
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar4} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Brahim Jeid</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>2.9</span>
              <span className="px-1">|</span>
              +222 30201015
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
