import React from "react";

// Get users data
export default async function getAllUsers() {
  // Fetch data
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // Error handling
  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
