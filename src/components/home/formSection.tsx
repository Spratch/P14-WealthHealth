import FormField from "../ui/formField";

export default function FormSection() {
  return (
    <section className="flex flex-col items-center gap-4 w-full max-w-7xl mx-auto py-24">
      <form
        action="#"
        id="create-employee"
        className="flex flex-col gap-4 bg-neutral-100 p-4 rounded-lg border border-neutral-200"
      >
        <FormField
          id="first-name"
          label="First Name"
          type="text"
        />

        <FormField
          id="last-name"
          label="Last Name"
          type="text"
        />

        <FormField
          id="date-of-birth"
          label="Date of Birth"
          type="text"
        />

        <FormField
          id="start-date"
          label="Start Date"
          type="text"
        />

        <fieldset className="border border-neutral-200 p-4 rounded-md flex ">
          <legend>Address</legend>

          <FormField
            id="street"
            label="Street"
            type="text"
          />

          <FormField
            id="city"
            label="City"
            type="text"
          />

          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
          ></select>

          <FormField
            id="zip-code"
            label="Zip Code"
            type="number"
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
    </section>
  );
}
