import { createContext, useReducer } from "react";
import GithubReducers from "./GithubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducers, initialState);

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({ q: text, });
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider value={{ users: state.users, loading: state.loading, searchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
