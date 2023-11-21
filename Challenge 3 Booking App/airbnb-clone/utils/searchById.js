export async function searchById(params) {
  const url = new URL(
    "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels"
  );

  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b48b4dc0bdmsh1b77a76cd05a319p1373b6jsne6bf8871c8a4",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  });

  const data = await response.json();

  return data;
}
