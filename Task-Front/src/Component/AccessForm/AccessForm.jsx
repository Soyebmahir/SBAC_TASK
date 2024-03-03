import React, { useState } from "react";
import { getTodayDate } from "../../utils/date";

const AccessForm = () => {
  const [accessCheckboxes, setAccessCheckboxes] = useState({
    ["Domain User"]: false,
    ["Email Address"]: false,
    ["Internet Access"]: false,
    ["USB Access"]: false,
  });
  const [isDomainChecked, setIsDomainChecked] = useState(false);
  const [selectedInternet, setSelectedInternet] = useState("");
  const [restInput, setRestInput] = useState({
    employeeId: "",
    contactNumber: "",
    firstName: "",
    lastName: "",
    office: "",
    designation: "",
  });

  const handleAccessCheckboxChange = (checkbox) => {
    setAccessCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkbox]: !prevCheckboxes[checkbox],
    }));
  };

  const handleDomainRadioChange = () => {
    setIsDomainChecked(!isDomainChecked);
  };

  const handleInternetChange = (value) => {
    setSelectedInternet(value);
  };
  // console.log(accessCheckboxes);
  return (
    <div className="pb-44">
      <div className=" max-w-[1000px] mx-auto ">
        <h1 className="text-3xl font-bold">Access Request Form</h1>
        <form action="">
          <div className="py-2">
            {Object.keys(accessCheckboxes).map((checkbox) => (
              <label key={checkbox} className="px-3">
                <input
                  type="checkbox"
                  name={checkbox}
                  checked={accessCheckboxes[checkbox]}
                  onChange={() => handleAccessCheckboxChange(checkbox)}
                  className="mr-1"
                />
                {checkbox}
              </label>
            ))}
          </div>
          <div className="w-full border border-gray-200">
            <h1 className="bg-gray-200 border border-gray-200">
              Applicant Information
            </h1>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">
                EMPLOYEE ID
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
              />
              <p className="border border-gray-200 w-[180px] p-1">
                CONTACT NUMBER
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">FIRST NAME</p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">LAST NAME</p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">
                DIV/ BR./ SUB-BR
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">
                DESIGNATION
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">
                REQUISITION
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={getTodayDate()}
                readOnly
              />
            </div>
            <div className="mt-3 w-full">
              <p className=" bg-gray-200  p-1">
                JUSTIFICATION FOR ACCESS PERMISSION ( MUST BE FILLED UP FOR
                INTERNET & USB ACCESS REQUEST)
              </p>
              <textarea className="w-full " rows={5} />
            </div>
          </div>
          <div className="w-full border border-gray-200">
            <div className="mt-3 w-full">
              <p className=" bg-gray-200  p-1">
                DOMAIN INFORMATION ( TO BE FILLED BY IT DIVISION )
              </p>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1">
                  DOMAIN NAME
                </p>
                <div className="flex justify-center items-center px-12 border">
                  <input
                    type="radio"
                    className=" border border-gray-200 p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isDomainChecked}
                    onChange={handleDomainRadioChange}
                  />
                </div>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <p className="border border-gray-200 w-[180px] p-1">
                  @sbacbank.com
                </p>
              </div>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1">
                  EMAIL ADDRESS
                </p>
                <div className="flex justify-center items-center px-12 border">
                  <input
                    type="radio"
                    className=" border border-gray-200 p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isDomainChecked}
                    onChange={handleDomainRadioChange}
                  />
                </div>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <p className="border border-gray-200 w-[180px] p-1">
                  @sbacbank.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border border-gray-200">
            <div className="mt-3 w-full">
              <p className=" bg-gray-200  p-1">
                IP INFORMATION ( TO BE FILLED BY IT BRANCH / DIVISION )
              </p>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1">
                  IP ADDRESS
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <p className="border border-gray-200 w-[180px] p-1">
                  SUBNET MASK
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
              </div>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1">
                  DEFAULT GETWAY
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <p className="border border-gray-200 w-[180px] p-1">INTERNET</p>
                <div className="flex justify-center items-center px-12 border">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="yes"
                      className="appearance-none border border-gray-200 p-1"
                      style={{ width: "1.5em", height: "1.5em" }}
                      checked={selectedInternet === "yes"}
                      onChange={() => handleInternetChange("yes")}
                    />
                    <span className="ml-2">Yes</span>
                  </label>

                  <label className="flex items-center cursor-pointer ml-4">
                    <input
                      type="radio"
                      value="no"
                      className="appearance-none border border-gray-200 p-1"
                      style={{ width: "1.5em", height: "1.5em" }}
                      checked={selectedInternet === "no"}
                      onChange={() => handleInternetChange("no")}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* disclaimer */}
          <div className="w-full border border-gray-200">
            <div className="mt-3 w-full">
              <p className=" bg-gray-200  p-1">DISCLAIMER & SIGNATURE</p>
              <p className="p-1 border-t-2 mt-2">
                I certify that my answers are true and complete to the best of
                my knowledge.
              </p>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  APPLICANT SIGNATURE
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
              </div>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  APPROVED BY (NAME & SIGNATURE) (BRANCH MANAGER /DIVISIONAL
                  HEAD/ AUTHORIZED PERSON)
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
              </div>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  APPROVED BY (IT DIVISION) (NAME & SIGNATURE)
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
              </div>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  IMPLEMENTED BY (IT DIVISION) (NAME & SIGNATURE)
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccessForm;
