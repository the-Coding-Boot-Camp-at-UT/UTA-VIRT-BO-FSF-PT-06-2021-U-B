loadImages();
let dataArray = [];

function createEl(htmlString = '', className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute('class', className);
  }
  return el;
}

function loadImages() {
  fetch('/api/images')
    .then(res => res.json())
    .then(data => {
      dataArray = data;
      createCards(dataArray);
    });
}

function createCards(data) {
  const container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';
  let lastRow;
  const row = createEl('div', 'row');

  return data.forEach(function(image, index) {
    const col = createEl('div', 'col-md-4 mt-4');
    col.appendChild(createCard(image));
    if (index % 3 === 0) {
      row.appendChild(col);
      container.appendChild(row);
      lastRow = row;
    }

    return lastRow.appendChild(col);
  });
}

function createCard(image) {
  const card = createEl('div', 'card');
  const imageContainer = createEl('div', 'card__image-container');
  const img = createEl('img', 'card-img-top card__image--cover');
  img.setAttribute('src', image.image);
  img.setAttribute('alt', image.description);

  const cardBody = createEl('div', 'card-body');

  const cardText = createEl('p', 'card-text font-weight-bold mt-2');

  cardText.innerText = `${image.description}`;

  imageContainer.append(img);
  cardBody.appendChild(cardText);
  card.appendChild(imageContainer);
  card.appendChild(cardBody);

  return card;
}
