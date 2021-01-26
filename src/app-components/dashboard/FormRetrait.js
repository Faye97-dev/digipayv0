import React, { useState } from "react";

import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Card, Badge, Button } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar3 from "../../assets/images/avatars/avatar3.jpg";
import avatar4 from "../../assets/images/avatars/avatar4.jpg";
import avatar5 from "../../assets/images/avatars/avatar5.jpg";
import avatar6 from "../../assets/images/avatars/avatar6.jpg";
export default function FormRetrait() {
  return (
    <>
      <div className="mx-5 my-4">
        <label className="py-2">
          Veuillez saisir le numero de telephone du destinataire pour effectuer
          un retrait
        </label>
        <SeachBar />
        <ListRetraits />
      </div>
    </>
  );
}

function SeachBar() {
  const [searchStatus5, setSearchStatus5] = useState(false);
  const toggleSearch5 = () => setSearchStatus5(!searchStatus5);
  const handleSumbit = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
    }
  };
  return (
    <>
      <div
        className={clsx("search-wrapper  mb-4", {
          "is-active": searchStatus5,
        })}
      >
        <span className="icon-wrapper text-black">
          <FontAwesomeIcon icon={["fas", "search"]} />
        </span>
        <Input
          type="search"
          onFocus={toggleSearch5}
          onBlur={toggleSearch5}
          onKeyDown={handleSumbit}
          defaultValue="20200202"
          placeholder="Rechercher par numero de telephone ..."
        />
      </div>
    </>
  );
}

function ListRetraits() {
  return (
    <>
      <Card className="card-box mb-5 bg-white">
        <div className="px-3 py-4">
          <div className="scroll-area rounded bg-white shadow-overflow">
            <PerfectScrollbar>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <div className="pl-2">
                    <div className="font-weight-bold">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="text-black"
                      >
                        Agence 4
                      </a>
                    </div>
                    <small className="d-flex pt-2 align-items-center">
                      {/*<div className="avatar-icon-wrapper avatar-icon-xs ">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      */}
                    </small>
                  </div>
                  <div className="text-center pl-2">
                    <a
                      href="#/"
                      className="font-weight-bold text-black"
                      onClick={(e) => e.preventDefault()}
                    >
                      Mahmoud mohamed
                    </a>
                    <br />
                    <span>+222 20200202</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-black">11-07-2020 14:12:15</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-black">500 MRU</span>
                  </div>
                  <div className="pl-2">
                    <Badge color="success">Completed</Badge>
                  </div>
                  <div>
                    <Button color="warning btn btn-sm">Retirer</Button>
                  </div>
                </div>
                <div className="divider my-2" />
                <div className="d-flex justify-content-between">
                  <div className="pl-2">
                    <div className="font-weight-bold">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="text-black"
                      >
                        Agence 2
                      </a>
                    </div>
                  </div>
                  <div className="text-center pl-2">
                    <a
                      href="#/"
                      className="font-weight-bold text-black"
                      onClick={(e) => e.preventDefault()}
                    >
                      Mahmoud mohamed
                    </a>
                    <br />
                    <span>+222 20200202</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-black">30-06-2020 10:15:37</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-black">7500 MRU</span>
                  </div>
                  <div className="pl-2">
                    <Badge color="danger">Canceled</Badge>
                  </div>
                  <div>
                    <Button color="warning btn btn-sm" disabled>
                      Retirer
                    </Button>
                  </div>
                </div>
                <div className="divider my-2" />
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </Card>
    </>
  );
}
