import { UsersIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { WHTable } from "@spratch/whtable";

export default function Employees() {
  const employeesState = useSelector((state: RootState) => state.employees);
  const columnsTitles = [
    { id: "firstName", title: "First Name" },
    { id: "lastName", title: "Last Name" },
    { id: "dateOfBirth", title: "Date of Birth" },
    { id: "startDate", title: "Start Date" },
    { id: "street", title: "Street" },
    { id: "city", title: "City" },
    { id: "state", title: "State" },
    { id: "zipCode", title: "Zip Code" },
    { id: "department", title: "Department" }
  ];

  return (
    <>
      <Hero
        title="Current employees"
        description="View all employees currently in the system."
        Icon={UsersIcon}
      />

      <WHTable
        itemsStatus={employeesState.status}
        itemsMessage={employeesState.message}
        items={employeesState.employees}
        itemsName={{ singular: "employee", plural: "employees" }}
        newItemLink="/"
        columnsTitles={columnsTitles}
        emailAddress="support-hrnet@wealthhealth.net"
      />
    </>
  );
}
