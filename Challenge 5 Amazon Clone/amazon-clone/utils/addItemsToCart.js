async function handleAddToCart(userEmail, cartItems) {
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  const response = await fetch("/api/addToCart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail, cartItems }),
  });

  const data = await response.json();

  //   console.log(data.exists);

  return data;
}

export default handleAddToCart;
