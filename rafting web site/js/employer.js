const api = 'https://sheet.best/api/sheets/ce3f0a76-b0ca-465f-8052-cd07c92b297c'

 fetch(api)
  .then((response) => response.json())
  .then((festa) => {
    console.log(festa);

    //let card = document.createElement('section');
   // let image =document.createElement('img');

    //image.setAttribute('src', festa[0],alt="");
    //card.appendChild(image);
    //console.log(image)
    //document.querySelector('div.third').appendChild(card);
  });