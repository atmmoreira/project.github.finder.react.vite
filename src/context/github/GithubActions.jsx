const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const { items } = await response.json();
  return items;
};
