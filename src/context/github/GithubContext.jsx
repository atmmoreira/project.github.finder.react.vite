import { createContext, useReducer } from "react";
import GithubReducers from "./GithubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducers, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`);
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
