async function searchUser(email) {
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  const response = await fetch("/api/searchuser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();
  //   console.log(data.exists);
  return data.exists;
}

export default searchUser;
