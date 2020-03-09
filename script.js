function handleError(err) {
  console.log("fuck sake");
  console.log(err);
}

const teamHtml = document.querySelector(".name");
const teamImg = document.querySelector(".logo");
const submitBtn = document.querySelector(".submit");

async function callApi(teamId) {
  const endpoint = `https://soccer.sportmonks.com/api/v2.0/teams/${teamId}?api_token=4DeIbsJKvi1OxiQVhnBuudtzj1OkAzFCZeclzpHqrlgeekBaW0y4HDkRxn8I`;
  const result = await fetch(endpoint);
  const jsonResult = await result.json();
  console.log(jsonResult);
  const {
    data: { name, logo_path: logo }
  } = jsonResult;
  teamHtml.textContent = name;
  teamImg.src = logo;
}

function handleClick() {
  const teamId = document.querySelector(".team").value;
  callApi(teamId);
}

submitBtn.addEventListener("click", handleClick);
