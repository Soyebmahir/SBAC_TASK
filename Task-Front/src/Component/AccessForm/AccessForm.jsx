import { useContext, useState } from "react";
import { getTodayDate } from "../../utils/date";
import SubmitButton from "../button/SubmitButton";
import { baseURL } from "../../Configs/libs";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AccessForm = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [accessCheckboxes, setAccessCheckboxes] = useState({
    ["Domain User"]: true,
    ["Email Address"]: false,
    ["Internet Access"]: false,
    ["USB Access"]: false,
  });
  const [isDomainChecked, setIsDomainChecked] = useState(true);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isInternetChecked, setIsInternetChecked] = useState(false);
  const [isApplicantSign, setIsApplicantSign] = useState({
    sign: false,
    date: getTodayDate(),
    userId: user._id,
  });

  const [restInput, setRestInput] = useState({
    employeeId: "EMP-1122",
    contactNumber: "01645249676",
    firstName: "Soyeb",
    lastName: "Mohammad",
    office: "Account",
    designation: "Accountant",
    justification:
      "I am requesting access to the domain to enhance my workflow and collaboration capabilities within our organization. With domain access, I will be able to seamlessly connect to shared resources, including files, applications, and collaborative tools, facilitating efficient communication and teamwork.",
    ipAddress: "103.24.88.24",
    subnetMask: "255.255.255.0",
    defaultGetWay: "192.168.0.1",
  });

  const handleAccessCheckboxChange = (checkbox) => {
    setAccessCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkbox]: !prevCheckboxes[checkbox],
    }));
  };

  const handleIsDomainChange = () => {
    setIsDomainChecked(!isDomainChecked);
  };
  const handleIsEmailChange = () => {
    setIsEmailChecked(!isEmailChecked);
  };

  const handleIsInternetChange = () => {
    setIsInternetChecked(!isInternetChecked);
  };
  const handleIsApplicantSign = (sign) => {
    setIsApplicantSign({ ...isApplicantSign, ["sign"]: sign });
  };

  // common function to get restInput data
  const handleInputChange = (fieldName, value) => {
    setRestInput((prevInput) => ({
      ...prevInput,
      [fieldName]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Collect all data from the form state
    // const formData = {
    //   accessCheckboxes,
    //   isDomainChecked,
    //   isEmailChecked,
    //   isInternetChecked,
    //   isApplicantSign,
    //   restInput,
    // };
    const reformData = {
      accessType: {
        domainUser: accessCheckboxes["Domain User"],
        emailAddress: accessCheckboxes["Email Address"],
        internet: accessCheckboxes["Internet Access"],
        usb: accessCheckboxes["USB Access"],
      },
      employeeId: restInput?.employeeId,
      contactNumber: restInput?.contactNumber,
      firstName: restInput?.firstName,
      lastName: restInput?.lastName,
      office: restInput?.office,
      designation: restInput?.designation,
      requisition: getTodayDate(),
      justification: restInput?.justification,
      domainInformation: {
        isDomain: isDomainChecked,
        isEmail: isEmailChecked,
      },
      ipInformation: {
        ipAddress: restInput?.ipAddress,
        subnetMusk: restInput?.subnetMask,
        defaultGetWay: restInput?.defaultGetWay,
        isInternet: isInternetChecked,
      },
      applicantSignature: {
        date: getTodayDate(),
        isAgree: isApplicantSign.sign,
        userId: user._id,
      },
    };
    console.log(reformData);

    try {
      const response = await fetch(`${baseURL}/formData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reformData),
      });

      const result = await response.json();
      if (result.success) {
        toast(result.message);
      }
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }

    // console.log("Form Data:", formData);
  };
  return (
    <div className="pb-44">
      <div className=" max-w-[1000px] mx-auto ">
        <h1 className="text-3xl font-bold">Access Request Form</h1>
        <form onSubmit={handleSubmit}>
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
                value={restInput.employeeId}
                onChange={(e) =>
                  handleInputChange("employeeId", e.target.value)
                }
              />
              <p className="border border-gray-200 w-[180px] p-1">
                CONTACT NUMBER
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.contactNumber}
                onChange={(e) =>
                  handleInputChange("contactNumber", e.target.value)
                }
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">FIRST NAME</p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">LAST NAME</p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">
                DIV/ BR./ SUB-BR
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.office}
                onChange={(e) => handleInputChange("office", e.target.value)}
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">
                DESIGNATION
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.designation}
                onChange={(e) =>
                  handleInputChange("designation", e.target.value)
                }
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
              <textarea
                className="w-full "
                rows={5}
                value={restInput.justification}
                onChange={(e) =>
                  handleInputChange("justification", e.target.value)
                }
              />
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
                    type="checkbox"
                    className=" border border-gray-200 p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isDomainChecked}
                    onChange={handleIsDomainChange}
                  />
                </div>
                <input
                  type="text"
                  disabled
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
                    type="checkbox"
                    className=" border border-gray-200 p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isEmailChecked}
                    onChange={handleIsEmailChange}
                  />
                </div>
                <input
                  type="text"
                  disabled
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
                  value={restInput.ipAddress}
                  readOnly
                />
                <p className="border border-gray-200 w-[180px] p-1">
                  SUBNET MASK
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                  value={restInput.subnetMask}
                  readOnly
                />
              </div>
              <div className="mt-3 flex">
                <p className="border border-gray-200 w-[180px] p-1">
                  DEFAULT GETWAY
                </p>
                <input
                  type="text"
                  className="border border-gray-200 flex-grow p-1"
                  value={restInput.defaultGetWay}
                  readOnly
                />
                <p className="border border-gray-200 w-[120px] p-1">INTERNET</p>
                <div className="flex justify-center items-center px-12 border">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className=" border border-gray-200 p-1"
                      style={{ width: "1.5em", height: "1.5em" }}
                      checked={isInternetChecked}
                      onChange={handleIsInternetChange}
                    />
                    {/* <span className="ml-2">Yes</span> */}
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

              <div className="mt-3 flex ">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  APPLICANT SIGNATURE
                </p>
                <div className="border flex justify-center items-center flex-grow border-gray-200 ">
                  <input
                    type="checkbox"
                    className="border border-gray-200 flex-grow p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isApplicantSign.sign}
                    onChange={() =>
                      handleIsApplicantSign(!isApplicantSign.sign)
                    }
                  />
                </div>
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input
                  type="text"
                  className="border border-gray-200  p-1"
                  value={isApplicantSign.date}
                  readOnly
                />
              </div>
              {/* <div className="mt-3 flex ">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  APPROVED BY (NAME & SIGNATURE) (BRANCH MANAGER /DIVISIONAL
                  HEAD/ AUTHORIZED PERSON)
                </p>
                <div className="border flex justify-center items-center flex-grow border-gray-200 ">
                  <input
                    type="checkbox"
                    className="border border-gray-200 flex-grow p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isApplicantSign}
                    onChange={handleIsApplicantSign}
                  />
                </div>
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input type="text" className="border border-gray-200  p-1" />
              </div>
              <div className="mt-3 flex ">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  APPROVED BY (IT DIVISION) (NAME & SIGNATURE)
                </p>
                <div className="border flex justify-center items-center flex-grow border-gray-200 ">
                  <input
                    type="checkbox"
                    className="border border-gray-200 flex-grow p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isApplicantSign}
                    onChange={handleIsApplicantSign}
                  />
                </div>
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input type="text" className="border border-gray-200  p-1" />
              </div>
              <div className="mt-3 flex ">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  IMPLEMENTED BY (IT DIVISION) (NAME & SIGNATURE)
                </p>
                <div className="border flex justify-center items-center flex-grow border-gray-200 ">
                  <input
                    type="checkbox"
                    className="border border-gray-200 flex-grow p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isApplicantSign}
                    onChange={handleIsApplicantSign}
                  />
                </div>
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input type="text" className="border border-gray-200  p-1" />
              </div> */}
            </div>
          </div>
          <div className="w-full flex justify-center">
            {/* <input
              type="submit"
              value="Submit"
              className="bg-teal-400 px-4 py-2 text-xl font-semibold text-gray-800 mt-2 mx-auto"
              disabled={
                accessCheckboxes["Domain User"] === true ||
                accessCheckboxes["Email Address"] === true ||
                accessCheckboxes["Internet Access"] === true ||
                accessCheckboxes["USB Access"] === true ||
                restInput?.employeeId ||
                restInput?.contactNumber ||
                restInput?.lastName ||
                restInput?.office ||
                restInput?.designation ||
                restInput?.justification ||
                restInput?.firstName
              }
            /> */}
            <SubmitButton
              className="text-secondary w-[150px] mx-auto my-3 tracking-widest py-[6px] text-lg capitalize"
              disabled={
                // !accessCheckboxes["Domain User"] === true ||
                // !accessCheckboxes["Email Address"] === true ||
                // !accessCheckboxes["Internet Access"] === true ||
                // !accessCheckboxes["USB Access"] === true ||
                !restInput?.employeeId ||
                !restInput?.contactNumber ||
                !restInput?.lastName ||
                !restInput?.office ||
                !restInput?.designation ||
                !restInput?.justification ||
                !restInput?.firstName
              }
            >
              Submit
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccessForm;
