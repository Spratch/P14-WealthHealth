import { useState } from "react";
import { DateValue, Key } from "react-aria-components";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import dateParser from "../utils/dateParser";

export function useEmployeeForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<DateValue | null>(null);
  const [startDate, setStartDate] = useState<DateValue | null>(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState<Key | null>(null);
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState<Key | null>(null);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth(null);
    setStartDate(null);
    setStreet("");
    setCity("");
    setState(null);
    setZipCode("");
    setDepartment(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const employee = {
      id: uuidv4(),
      firstName,
      lastName,
      dateOfBirth: dateParser(dateOfBirth),
      startDate: dateParser(startDate),
      street,
      city,
      state,
      zipCode: zipCode.toString(),
      department
    };

    try {
      dispatch({ type: "employees/addEmployee", payload: employee });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formValues: {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department
    },
    formSetters: {
      setFirstName,
      setLastName,
      setDateOfBirth,
      setStartDate,
      setStreet,
      setCity,
      setState,
      setZipCode,
      setDepartment
    },
    handleSubmit,
    resetForm
  };
}
