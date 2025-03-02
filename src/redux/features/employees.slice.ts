import { createSlice } from "@reduxjs/toolkit";
import { DateValue } from "react-aria-components";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: DateValue;
  startDate: DateValue;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: number;
  };
  department: string;
};

interface EmployeesState {
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string;
  employees: Employee[];
}

const initialState: EmployeesState = {
  status: "idle",
  message: "",
  employees: []
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      state.status = "succeeded";
      state.message = "Employee added successfully";
    }
  }
});

export const employeesReducer = employeesSlice.reducer;
