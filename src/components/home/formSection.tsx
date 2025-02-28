import { useState } from "react";
import FormField from "../ui/formField";
import FormSelect from "../ui/formSelect";
import { usStates } from "../../datas/us-states";
import { companyDepartements } from "../../datas/company-departements";
import { useDispatch } from "react-redux";
import FormDatePicker from "../ui/formDatePicker";
import { DateValue, Key } from "react-aria-components";

export default function FormSection() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<DateValue | null>();
  const [startDate, setStartDate] = useState<DateValue | null>();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState<Key | null>(null);
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState<Key | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      address: {
        street,
        city,
        state,
        zipCode
      },
      department
    };

    try {
      dispatch({ type: "employees/addEmployee", payload: employee });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="flex flex-col items-end gap-4 w-full max-w-7xl mx-auto py-5 md:py-12">
      {/* Form */}
      <form
        action="#"
        id="create-employee"
        className="w-full flex flex-col md:grid grid-cols-3 gap-4 bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
      >
        <div className="flex flex-col gap-4">
          <legend>Employee Informations</legend>
          <FormField
            id="first-name"
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormField
            id="last-name"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormDatePicker
            label="Date of Birth"
            value={dateOfBirth}
            onChange={setDateOfBirth}
          />
          <FormDatePicker
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
        </div>

        <fieldset className="border-y md:border border-neutral-200 dark:border-neutral-700 py-4 md:p-4 rounded-md flex flex-col gap-4">
          <legend className="pr-2">Address</legend>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full">
            <FormField
              id="street"
              label="Street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <FormField
              id="city"
              label="City"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <FormSelect
            id="state"
            label="State"
            options={usStates}
            onSelectionChange={setState}
          />

          <FormField
            id="zip-code"
            label="Zip Code"
            type="number"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <FormSelect
          id="department"
          label="Department"
          options={companyDepartements}
          onSelectionChange={setDepartment}
        />
      </form>

      {/* Submit */}
      <button
        type="submit"
        className="bg-lime-600 hover:bg-lime-700 dark:bg-lime-400 dark:hover:bg-lime-300 transition-colors text-white dark:text-lime-950 rounded-lg px-4 py-2 cursor-pointer focus"
        form="create-employee"
        onClick={handleSubmit}
      >
        Create Employee
      </button>
    </section>
  );
}
