import { useContext, useEffect, useState } from "react";
import { getTodayDate } from "../../utils/date";
import SubmitButton from "../button/SubmitButton";
import { baseURL } from "../../Configs/libs";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const [accessCheckboxes, setAccessCheckboxes] = useState({
    domainUser: false,
    emailAddress: false,
    internet: false,
    usb: false,
  });
  const [isDomainChecked, setIsDomainChecked] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isInternetChecked, setIsInternetChecked] = useState(false);
  const [isApplicantSign, setIsApplicantSign] = useState({
    isAgree: false,
    date: getTodayDate(),
    userId: user._id,
  });
  const [isManagerSign, setIsManagerSign] = useState({
    isAgree: false,
    date: "",
    userId: "",
  });
  const [isItSign, setIsItSign] = useState({
    isAgree: false,
    date: "",
    userId: "",
  });
  const [isImplementSign, setIsImplementSign] = useState({
    isAgree: false,
    date: "",
    userId: "",
  });
  const [domainName, setDomain] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  //   console.log({ singleData });
  const [restInput, setRestInput] = useState({
    employeeId: "",
    contactNumber: "",
    firstName: "",
    lastName: "",
    office: "",
    designation: "",
    justification: "",
    ipAddress: "",
    subnetMask: "",
    defaultGetWay: "",
  });

  useEffect(() => {
    fetch(`${baseURL}/formData/data/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const lonelyData = data?.data;
        setSingleData(data?.data);
        setAccessCheckboxes({ ...lonelyData?.accessType });
        setIsDomainChecked(lonelyData?.domainInformation?.isDomain);
        setIsEmailChecked(lonelyData?.domainInformation?.isEmail);
        setIsInternetChecked(lonelyData?.ipInformation?.isInternet);
        setIsApplicantSign({ ...lonelyData?.applicantSignature });
        setIsManagerSign({ ...lonelyData?.managerSignature });
        setIsItSign({ ...lonelyData?.itSignature });
        setIsImplementSign({ ...lonelyData?.itImplement });
        setDomain(lonelyData?.domainInformation?.domainName);
        setEmailAddress(lonelyData?.domainInformation?.emailAddress);
        setRestInput({
          employeeId: lonelyData.employeeId,
          contactNumber: lonelyData.contactNumber,
          firstName: lonelyData.firstName,
          lastName: lonelyData.lastName,
          office: lonelyData.office,
          designation: lonelyData.designation,
          justification: lonelyData.justification,
          ipAddress: lonelyData.ipInformation.ipAddress,
          subnetMask: lonelyData.ipInformation.subnetMusk,
          defaultGetWay: lonelyData.ipInformation.defaultGetWay,
        });
      });
  }, []);
  const handleChangeDomainName = (e) => {
    setDomain(e.target.value);
  };
  const handleChangeEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleIsInternetChange = () => {
    setIsInternetChecked(!isInternetChecked);
  };

  const handleIsManagerSign = () => {
    setIsManagerSign({
      isAgree: !isManagerSign?.isAgree,
      date: !isManagerSign.isAgree ? getTodayDate() : "",
      userId: !isManagerSign.isAgree ? user._id : "",
    });
  };
  const handleIsITSign = () => {
    setIsItSign({
      isAgree: !isItSign?.isAgree,
      date: !isItSign.isAgree ? getTodayDate() : "",
      userId: !isItSign.isAgree ? user._id : "",
    });
  };
  const handleIsImplementSign = () => {
    setIsImplementSign({
      isAgree: !isImplementSign?.isAgree,
      date: !isImplementSign.isAgree ? getTodayDate() : "",
      userId: !isImplementSign.isAgree ? user._id : "",
    });
  };

  // common function to get restInput data

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
        domainUser: accessCheckboxes.domainUser,
        emailAddress: accessCheckboxes.emailAddress,
        internet: accessCheckboxes.internet,
        usb: accessCheckboxes.usb,
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
        domainName,
        emailAddress,
      },
      ipInformation: {
        ipAddress: restInput?.ipAddress,
        subnetMusk: restInput?.subnetMask,
        defaultGetWay: restInput?.defaultGetWay,
        isInternet: isInternetChecked,
      },
      applicantSignature: {
        date: isApplicantSign?.date,
        isAgree: isApplicantSign?.isAgree,
        userId: isApplicantSign?.userId,
      },
      managerSignature: {
        date: isManagerSign?.date,
        isAgree: isManagerSign?.isAgree,
        userId: isManagerSign?.userId,
      },
      itSignature: {
        date: isItSign?.date,
        isAgree: isItSign?.isAgree,
        userId: isItSign?.userId,
      },
      itImplement: {
        date: isImplementSign?.date,
        isAgree: isImplementSign?.isAgree,
        userId: isImplementSign?.userId,
      },
    };
    console.log(reformData);

    try {
      const response = await fetch(`${baseURL}/formData/update/${id}`, {
        method: "PATCH",
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
        <form onSubmit={handleSubmit} disabled={true}>
          <div className="py-2">
            {Object.keys(accessCheckboxes).map((checkbox) =>
              checkbox !== "_id" ? (
                <label key={checkbox} className="px-3">
                  <input
                    type="checkbox"
                    name={checkbox}
                    checked={accessCheckboxes[checkbox]}
                    className="mr-1"
                    disabled
                  />
                  {checkbox}
                </label>
              ) : (
                ""
              )
            )}
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
                readOnly
              />
              <p className="border border-gray-200 w-[180px] p-1">
                CONTACT NUMBER
              </p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.contactNumber}
                readOnly
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">FIRST NAME</p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.firstName}
                readOnly
              />
            </div>
            <div className="mt-3 flex">
              <p className="border border-gray-200 w-[180px] p-1">LAST NAME</p>
              <input
                type="text"
                className="border border-gray-200 flex-grow p-1"
                value={restInput.lastName}
                readOnly
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
                readOnly
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
                readOnly
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
                readOnly
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
                    disabled
                  />
                </div>
                <input
                  type="text"
                  disabled={user.role == "it" && isDomainChecked ? false : true}
                  value={domainName}
                  onChange={handleChangeDomainName}
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
                    disabled
                  />
                </div>
                <input
                  type="text"
                  disabled={user.role == "it" && isEmailChecked ? false : true}
                  value={emailAddress}
                  onChange={handleChangeEmailAddress}
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
                      disabled
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
                    checked={isApplicantSign?.isAgree}
                    disabled
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
              {/* authorization */}
              {/* authorization */}
              {/* authorization */}
              {/* authorization */}
              <div className="mt-3 flex ">
                <p className="border border-gray-200 w-[180px] p-1 text-sm">
                  APPROVED BY (NAME & SIGNATURE) (BRANCH MANAGER /DIVISIONAL
                  HEAD/ AUTHORIZED PERSON)
                </p>
                <div className="border flex justify-center items-center flex-grow border-gray-200 ">
                  <input
                    type="checkbox"
                    className="border border-gray-200 flex-grow p-1"
                    style={{ width: "1.5em", height: "1.5em" }}
                    checked={isManagerSign.isAgree}
                    onChange={handleIsManagerSign}
                    disabled={user.role == "manager" ? false : true}
                  />
                </div>
                <div className="flex justify-center items-center border border-gray-200">
                  {" "}
                  <p className="  p-1 text-sm">DATE</p>
                </div>
                <input
                  type="text"
                  className="border border-gray-200  p-1"
                  value={isManagerSign?.date}
                  readOnly
                />
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
                    checked={isItSign?.isAgree}
                    onChange={handleIsITSign}
                    disabled={
                      user.role == "it" && isManagerSign?.isAgree ? false : true
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
                  value={isItSign?.date}
                  readOnly
                />
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
                    checked={isImplementSign?.isAgree}
                    onChange={handleIsImplementSign}
                    disabled={
                      user.role == "it" && isManagerSign?.isAgree ? false : true
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
                  value={isImplementSign?.date}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            {user.role !== "normalUser" ? (
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
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowDetails;
