let prev = document.querySelector(".prev");
let content = document.querySelector(".content");
let charImg = document.querySelector(".char-img");
let charName = document.querySelector(".name");
let birthday = document.querySelector(".birthday");
let occupation = document.querySelector(".occupation");
let charStatus = document.querySelector(".status");
let nickname = document.querySelector(".nickname");
let portrayed = document.querySelector(".portrayed");

async function getCharacters() {
  let response = await axios("https://www.breakingbadapi.com/api/characters");

  let characters = [...response.data];
  console.log(characters);
  let i = 0;
  content.addEventListener("click", (e) => {
    if (e.target.classList.contains("prev") && i > 0) {
      //
      i--;
      charImg.src = characters[i].img;
      charName.innerText = "Name: " + characters[i].name;
      birthday.innerText = "Birthday: " + characters[i].birthday;
      occupation.innerText = characters[i].occupation[0];
      charStatus.innerText = "Status: " + characters[i].status;
      nickname.innerText = "Nickname: " + characters[i].nickname;
      portrayed.innerText = "Portrayed: " + characters[i].portrayed;
      //
    } else if (e.target.classList.contains("next") && i < characters.length) {
      i++;
      charImg.src = characters[i].img;
      charName.innerText = "Name: " + characters[i].name;
      birthday.innerText = "Birthday: " + characters[i].birthday;
      occupation.innerText = characters[i].occupation[0];
      charStatus.innerText = "Status: " + characters[i].status;
      nickname.innerText = "Nickname: " + characters[i].nickname;
      portrayed.innerText = "Portrayed: " + characters[i].portrayed;
    }
  });
}

window.addEventListener("load", (event) => {
  getCharacters();
});
