import { createSlice } from "@reduxjs/toolkit";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

export interface EmployeesState {
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
