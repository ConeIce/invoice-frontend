const baseUrl = import.meta.env.VITE_BASE_URL;

const login = async (username, password) => {
  console.log("here");
  const jsonRes = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return jsonRes.json();
};

const register = async (email, username, password) => {
  console.log("here");
  const jsonRes = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  });

  return jsonRes.json();
};

export { login, register };
