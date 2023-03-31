export async function searchLocation(params) {
  const url = new URL("https://booking-com.p.rapidapi.com/v1/hotels/locations");

  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f23e72a0e7msh8de41fb4d1b5a75p1114c0jsnefad16cc8a1d",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  });

  const data = await response.json();

  return data;
}
