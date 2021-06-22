require('bootstrap');
const createEl = require("./domMethods");
const { createLoremIpsum, dateConverter } = require("./helpers");

$(document).ready(function() {
  if (window.location.href.indexOf("schedule") > -1) {

      const date = new Date();
      const d = date.getDate();
      const m = date.getMonth();
      const y = date.getFullYear();

      function onEventClick(calEvent) {
        const start = dateConverter(calEvent.start);
        localStorage.setItem("currentEvent", JSON.stringify({
            title: calEvent.title,
            subtitle: start,
            description: calEvent.description,
            image: calEvent.image
        }))
        
        window.location.href = "events.html"
      }

      const events = [
      {
          title: 'Vegan Day',
          start: new Date(y, m+1, 20),
          description: `Vegans unite! At this event, we'll be celebrating with vegan food from around the globe. With so many delicious vegan cuisine options, it's hard to pick one. What are you hungry for? Let us share with you!
          Veganism is a lifestyle choice—we're passionate about creating healthy and delicious food products without harming the environment, so please spread the word about our festival and about our work!`,
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      },
      {
          title: 'Harvest Festival',
          start: new Date(y, m+1, 20),
          image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      },
      {
          title: 'Bacon Day',
          start: new Date(y, m+1, 20),
          description: `Today's all about bacon! We'll be serving up the best tasting bacon around town! Let's all get excited about bacon together!
          As an appetizer, grab a side of our delicious BBQ pulled pork and pick up a delicious side of our homemade slaw and sauce! There will be bacon everywhere!!`,
          image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
      
      },
      {
          title: 'Fry-day',
          description: `You bring it, we fry it. Everything tastes better fried! Whether it's your favorite sponge cake or a refreshing afternoon snack,
          prepare to shock your tastebuds.`,
          start: new Date(y, m+1, 21),
          image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
      },
      {
          title: 'Pizza Party!',
          description: `This event is devoted to all those pizza lovers out there. Come enjoy fresh from the oven pizza and learn tips on making pizza at home from the pros!`,
          start: new Date(y, m+1, 22),
          image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
      },
      {
          title: 'Pasta Bonanza',
          description: `All things pasta.`,
          start: new Date(y, m+1, 22),
          image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
      },
      {
          title: 'Fruity Foods!',
          description: `We will be showcasing dishes where fruits are a primary ingredient. Come learn how you can add more fruits into your diet!`,
          start: new Date(y, m+1, 22),
          image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
      },
      {
          title: 'Veggie Mix Up',
          description: `We will be showcasing great dishes that have plenty of veggies and proteins! This is for all those out there who love food, but want to get more vegetables in their diets!`,
          start: new Date(y, m+1, 23),
          image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
      },
      {
          title: 'Fry-day',
          description: `You bring it, we fry it....again. This event is always a huge hit, so we hold it twice!!`,
          start: new Date(y, m+1, 23),
          image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
      },
      ]

      const pageEl = document.querySelector("#page");

      function createCards(events) {
        const cards = events.map((event) => (
            createEl("div", {class: "card-body clickable", onClick: () => onEventClick(event)}, 
            createEl("h5", {class: "card-title"}, event.title || ""),
            createEl("p", {class: "card-text"}, event.description || createLoremIpsum()),
            createEl("hr")
            )
        ))
        return cards
      }
      
      const containerEl1 = createEl("div", {class: "container mt-5"}, 
      createEl("div", {class: "card mb-5"}, 
          createEl("h5", {class: "card-header"}, "Day 1"),
          ...createCards(events.slice(0,3))
      )
      )

      const containerEl2 = createEl("div", {class: "container"}, 
      createEl("div", {class: "card mb-5"}, 
          createEl("h5", {class: "card-header"}, "Day 2"),
          ...createCards(events.slice(3,6))
      )
      )

      const containerEl3 = createEl("div", {class: "container"}, 
      createEl("div", {class: "card mb-5"}, 
          createEl("h5", {class: "card-header"}, "Day 3"),
          ...createCards(events.slice(6,9))
      )
      )

      pageEl.appendChild(containerEl1);
      pageEl.appendChild(containerEl2);
      pageEl.appendChild(containerEl3);
  }
});