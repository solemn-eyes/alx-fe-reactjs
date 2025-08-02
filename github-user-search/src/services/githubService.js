import axios from "axios";

export async function advancedUserSearch({ username, location, minRepos }) {
  // Construct GitHub search query
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const searchUrl = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  const res = await axios.get(searchUrl);
  const users = res.data.items;

  // Fetch full user details to get location and repo count
  const userDetails = await Promise.all(
    users.map((user) =>
      axios.get(`https://api.github.com/users/${user.login}`).then((r) => ({
        ...user,
        details: r.data,
      }))
    )
  );

  return userDetails;
}

export default githubServices;
