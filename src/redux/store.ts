import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./features/employees.slice";
import { paginationReducer } from "./features/pagination.slice";

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("employees");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Erreur lors du chargement du state:", e);
    return undefined;
  }
}

function saveToLocalStorage(state: RootState) {
  try {
    const serializedState = JSON.stringify(state.employees);
    localStorage.setItem("employees", serializedState);
  } catch (e) {
    console.warn("Erreur lors de la sauvegarde du state:", e);
  }
}

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    pagination: paginationReducer
  },
  preloadedState: {
    employees: loadFromLocalStorage()
  }
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
