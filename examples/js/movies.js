/* https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch */
const apiUrl = 'https://rickandmortyapi.com/api/character';
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data));