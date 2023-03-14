// import bcrypt from "bcryptjs";

async function registerUser(name, email, password, phone) {
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, phone }),
  });

  const data = await response.json();
  // console.log(hashedPassword);
  console.log(data);
  return data;
}

export default registerUser;
