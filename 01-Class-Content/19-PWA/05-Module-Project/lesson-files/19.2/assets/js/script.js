require('bootstrap');

$(document).ready(function() {
  
  function createLoremIpsum(numWords = 50) {
    const loremIpsum = "Lorem ipsum dolor amet tousled brooklyn meditation, polaroid offal kale chips raw denim tumblr succulents jianbing listicle. Man braid godard VHS freegan bespoke fixie XOXO ramps lo-fi edison bulb prism gochujang photo booth. Messenger bag bicycle rights trust fund franzen street art mixtape helvetica, sriracha dreamcatcher live-edge microdosing. Whatever cliche neutra iceland chambray, beard narwhal pop-up health goth readymade palo santo forage live-edge 3 wolf moon echo park edison bulb, viral iceland bicycle rights post-ironic celiac typewriter kinfolk mumblecore tilde palo santo. Dreamcatcher cred cliche, keffiyeh intelligentsia forage vice locavore aesthetic yr. Vexillologist shabby chic fixie, air plant helvetica health goth kickstarter four loko jean shorts tote bag green juice street art beard farm-to-table. Enamel pin jianbing photo booth, YOLO pour-over bushwick next level fingerstache vice retro disrupt cloud bread. Gastropub umami distillery chia food truck adaptogen. Forage hexagon helvetica kogi squid. Crucifix health goth bespoke typewriter fam hexagon helvetica, vice dreamcatcher chillwave tumeric. Keffiyeh aesthetic XOXO venmo live-edge kale chips mlkshk wolf williamsburg hella yr locavore. Tumblr unicorn chillwave, edison bulb occupy offal sartorial gastropub kickstarter. Bitters swag chartreuse single-origin coffee PBR&B post-ironic migas activated charcoal before they sold out iPhone seitan lumbersexual tofu tumeric selvage. Shoreditch hashtag literally, af intelligentsia crucifix sustainable +1 chambray adaptogen. Crucifix retro fixie knausgaard. Photo booth asymmetrical seitan, pug marfa tattooed roof party tacos gochujang woke kale chips vice organic. Street art mumblecore trust fund, normcore single-origin coffee meggings neutra tacos fam. Woke chia asymmetrical try-hard cloud bread hexagon leggings kogi taiyaki. Seitan humblebrag tote bag keytar YOLO art party. Semiotics cliche schlitz shaman, waistcoat chartreuse activated charcoal XOXO post-ironic helvetica messenger bag air plant vape sartorial. Typewriter thundercats direct trade edison bulb lomo la croix trust fund. Tote bag tofu lo-fi blue bottle. Drinking vinegar lyft messenger bag, leggings tofu 90's bitters four loko mustache sriracha pabst shabby chic humblebrag glossier. Meh skateboard yuccie tattooed adaptogen gastropub post-ironic put a bird on it green juice la croix hot chicken ennui cray dreamcatcher neutra. Chia semiotics art party fixie shaman echo park palo santo flexitarian. Letterpress retro chillwave, williamsburg palo santo fashion axe raclette lumbersexual keytar yr plaid ugh. Godard everyday carry twee, roof party affogato williamsburg photo booth. Irony lumbersexual letterpress, trust fund raclette wayfarers art party. Flannel bushwick yr tattooed."
    
    const result = loremIpsum.split(/\s+/).slice(0,numWords).join(" ");
    return result;
  
  }
  
  function createEl(htmlString, attrs, ...children) {
    if (typeof htmlString !== "string") {
      throw Error("Argument 'htmlString' is required and must be a string");
    }
  
    const el = document.createElement(htmlString);
  
    if (typeof attrs === "object") {
      for (let key in attrs) {
        if (key.substring(0, 2) === "on") {
          el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
        } else {
          el.setAttribute(key, attrs[key]);
        }
      }
    }
  
    children.forEach(function(child) {
      let node;
  
      if (child.constructor.name.includes("Element")) {
        node = child;
      } else {
        node = document.createTextNode(child);
      }
  
      el.appendChild(node);
    });
  
    return el;
  }

  // First image is hard coded in index.html
  const carouselSlides = [
    {
      title: "We travel all over the US",
      subtitle: "Check out our schedule!",
      img: "./assets/img/food-table.jpg",
      btnText: "View Schedule",
      btnUrl: "schedule.html"
    },
    {
      title: "Our food is seriously the bomb!",
      subtitle: "What are you waiting for?",
      img: "./assets/img/grill.jpg",
      btnText: "Purchase Tickets",
      btnUrl: "tickets.html"
    },
  ]

  function dateConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const result =  month + ' ' + date + ', ' + year 
    return result;
  }

  if (window.location.href.indexOf("index") > -1) {

    carouselSlides.forEach((slide, i) => {
      $('.carousel-inner').append(`
    <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
      <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
          <div class="container">
            <div class="row align-items-center justify-content-center">
                <h2 class="display-4 mb-2">${slide.title}</h2>
            </div>
            <div class="row align-items-center justify-content-center"> 
              <h3>${slide.subtitle}</h3>
            </div>
            <div class=" mt-4 row align-items-center justify-content-center"> 
              <a class="btn btn-primary" href="${slide.btnUrl}">
                  ${slide.btnText}
              </a>
            </div>
          </div>
      </div>
    </div>`)
    })
  }

  if (window.location.href.indexOf("event") > -1) {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };

    const pageEl = document.querySelector("#page");
    
    const containerEl = createEl("div", {class: "container"},
      createEl("div", {class: "card mb-3"}, 
        createEl("img", {class: "card-img-top", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
        createEl("div", {class: "card-body"}, 
          createEl("h1", {class: "card-title"}, currentEvent.title || ""),
          createEl("h2", {class: "text-muted"}, currentEvent.subtitle || ""),
          createEl("p", {class: "card-text mt-3"}, currentEvent.description || createLoremIpsum(100)),
          createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
        )
      ),
      
    )
    

    pageEl.appendChild(containerEl)
  }

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


    const purchaseBtn = document.getElementById("purchaseBtn");
    const purchaseEmail = document.getElementById("purchaseEmail");
    const modalEl = document.querySelector(".modal-content");
    const modalBodyEl = document.querySelector(".modal-body");
    const modalFooterEl = document.querySelector(".modal-footer");

  if (window.location.href.indexOf("tickets") > -1) {

    function purchaseTicket () {

      modalEl.removeChild(modalBodyEl)
      modalEl.removeChild(modalFooterEl)

      modalEl.append(createEl("div", {class: "modal-body"},
        createEl("h5", {class: "modal-title"}, 
        `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
        ),
      ))
      
    }
    purchaseBtn.addEventListener("click", purchaseTicket);
  }

});