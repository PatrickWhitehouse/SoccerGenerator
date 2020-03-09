function handleError(err) {
  console.log("fuck sake");
  console.log(err);
}
const endpoint =
  "https://soccer.sportmonks.com/api/v2.0/teams/9?api_token=4DeIbsJKvi1OxiQVhnBuudtzj1OkAzFCZeclzpHqrlgeekBaW0y4HDkRxn8I";

const teamHtml = document.querySelector(".name");
const teamImg = document.querySelector(".logo");

async function callApi() {
  const result = await fetch(endpoint);
  const jsonResult = await result.json();
  console.log(jsonResult);
  const {
    data: { name, logo_path: logo }
  } = jsonResult;
  teamHtml.textContent = name;
  teamImg.src = logo;
}

callApi().catch(handleError);
