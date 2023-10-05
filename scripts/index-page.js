const people = [
    {
        name: "Daniil Molodkov",
        title: "Lead Educator & Team Lead",
        biography: "I have experience working in agencies, consultancy and startups, and I love sharing what I've learned about the industry and development. When I don't code or teach, I enjoy travelling for food, watching YouTube and getting into random hobbies.",
        favourites: {
            animal: "Fennec Fox",
            desserts: ["Hot Dogs", "Pistachio Gelato", "Calbee Chips"]
        },
        image: {
            src: "/images/daniil.jpeg",
            alt: "Headshot of Daniil in front of brick wall"
        },
        isPartier: true,
        email: "dmolodkov@brainstation.io"
    },
    {
        name: "Louis Ekpenga",
        title: "Teaching Assistant",
        biography: "Hi I'm Louis! I'm a Fullstack developer, an enthusiastic learner, ambivert, music lover, a sucker for a good joke and above all, I love to write programs 😁.",
        favourites: {
            animal: "Dog",
            desserts: ["Hot Dogs", "Strawberry Ice Cream", "Chocolate Bars"]
        },
        image: {
            src: "/images/louis.jpg",
            alt: "Headshot of Louis in his happy place"
        },
        isPartier: true,
        email: "lekpenga@brainstatio.io"
    },
    {
        name: "Nolan Knill",
        title: "Lead Educator & Team Lead",
        biography: "Hey. I’m Nolan, Lead Educator of Software Engineering. I have been in the tech industry for over twelve, working as a full-stack developer with a back-end specialization.",
        favourites: {
            animal: "Puffin",
            desserts: ["Moose Tracks Ice Cream", "Chocolate Chip & Walnut Cookie", "Cops Donuts"]
        },
        image: {
            src: "/images/nolan.jpeg",
            alt: "Headshot of Nolan in front of brick wall"
        },
        isPartier: false,
        email: "nknill@brainstation.io"
    }
];

people.forEach((person) => {
    displayPerson(person);
});

// loop to grab a single person
    // for each person -> displayPerson()

/**
 * 
 * @param {Object} person 
 */
function displayPerson( person ) {
    // Build the "card" element
    // Use the person object's properties as information in each element

    const cardEl = document.createElement("article");
    cardEl.classList.add("card");

    // create all .card's children elements
    const cardImageEl = createImageElement( 
        person.image.src,
        person.image.alt
    );

    const cardContentEl = document.createElement("div");
    cardContentEl.classList.add("card__content");

    // create h2, span, p, p and append to cardContentEl
    const nameEl = document.createElement("h2");
    nameEl.textContent = person.name;

    // <span class="card__role">`${person.title}`</span>
    const roleEl = document.createElement("span");
    roleEl.classList.add("card__role");
    roleEl.textContent = person.title;
    
    // <p>`${person.biography}`</p>
    const bioEl = document.createElement("p");
    bioEl.textContent = person.biography;

    // <p>Favourite animal: `${person.favourites.animal}</p>
    const animalEl = document.createElement("p");
    animalEl.textContent = "Favourite animal: " + person.favourites.animal;

    // <p>Favourite desserts:</p>
    const dessertsHeadingEl = document.createElement("p");
    dessertsHeadingEl.textContent = "Favourite desserts:";

    // <ol><li>${person.favourites.dessert}</ol>
    const dessertsEl = document.createElement("ol");

    person.favourites.desserts.forEach(( dessert ) => {
        const dessertEl = document.createElement("li");
        dessertEl.textContent = dessert;

        dessertsEl.appendChild(dessertEl);
    });

    cardContentEl.append(
        nameEl, 
        roleEl, 
        bioEl, 
        animalEl, 
        dessertsHeadingEl, 
        dessertsEl
    );


    // <footer class="card__footer"></footer>
    const footerEl = document.createElement("footer");
    footerEl.classList.add("card__footer");

    if (person.isPartier) {
        // <a href="#" class="button button--party">Party</a>
        const partyEl = document.createElement("a");
        partyEl.classList.add("button", "button--party");
        partyEl.setAttribute("href", "#");
        partyEl.textContent = "Party";

        partyEl.addEventListener("click", () => {
            cardEl.classList.add("card--party");
            setTimeout(() => {
                cardEl.classList.remove("card--party");
            }, 1000);
        })

        footerEl.append(partyEl);
    }

    // <a href="#" class="button">Contact</a>
    const contactEl = document.createElement("a");
    contactEl.classList.add("button");
    contactEl.setAttribute("href", `mailto:${person.email}`);
    contactEl.textContent = "Contact";

    footerEl.append(contactEl);

    // append all .card's children to the .card
    cardEl.append(cardImageEl, cardContentEl, footerEl);
    
    // append the card element to the div with class ".cards-list"
    document.querySelector(".cards-list").appendChild(cardEl);
}

function createImageElement(src, alt) {
    const cardImageEl = document.createElement("img");
    cardImageEl.classList.add("card__image");
    cardImageEl.src = src;
    cardImageEl.alt = alt;

    return cardImageEl;
}
