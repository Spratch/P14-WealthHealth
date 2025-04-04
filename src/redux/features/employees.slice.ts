import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchEmployees = createAsyncThunk<
  Employee[],
  void,
  { rejectValue: string }
>("employees/fetchEmployees", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/MOCK_DATA.json");
    if (!response.ok) {
      throw new Error("An error occurred while fetching employees");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = "An error occurred while fetching employees";
    }
    return rejectWithValue(message);
  }
});

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      });
  }
});

export const employeesReducer = employeesSlice.reducer;
