export default async function getCartItemsByEmail(userEmail) {
  const res = await fetch(`/api/getOrders?userEmail=${userEmail}`);
  const data = await res.json();
  return data;
}
