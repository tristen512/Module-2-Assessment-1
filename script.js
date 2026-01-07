// =======================
// ANIMAL DATA
// =======================
const animals = [
    {
        name: "Lion",
        type: "mammal",
        lifespan: 15,
        image: "lion.jpg",
        habitat: "Grasslands & Savannas",
        diet: "Carnivore",
        info: "Lions are known as the kings of the jungle but actually live in grasslands.",
        funfact: "A lion’s roar can be heard from 8km away!"
    },
    {
        name: "Elephant",
        type: "mammal",
        lifespan: 60,
        image: "elephant.jpg",
        habitat: "Grasslands & Forests",
        diet: "Herbivore",
        info: "Elephants are the largest land animals on Earth with incredible memory.",
        funfact: "Baby elephants suck their trunks for comfort."
    },
    {
        name: "Tiger",
        type: "mammal",
        lifespan: 20,
        image: "tiger.jpg",
        habitat: "Tropical Forests",
        diet: "Carnivore",
        info: "Tigers are powerful hunters with unique stripe patterns.",
        funfact: "No two tigers have the same stripe pattern."
    },
    {
        name: "Monkey",
        type: "mammal",
        lifespan: 30,
        image: "monkey.jpg",
        habitat: "Forests & Jungles",
        diet: "Omnivore",
        info: "Monkeys are clever animals known for their agility and social behavior.",
        funfact: "Some monkeys can understand basic math!"
    },
    {
        name: "Zebra",
        type: "mammal",
        lifespan: 25,
        image: "zebra.jpg",
        habitat: "Savannas",
        diet: "Herbivore",
        info: "Zebras have unique black and white stripes that confuse predators.",
        funfact: "Each zebra’s stripe pattern is as unique as a fingerprint."
    },
    {
        name: "Penguin",
        type: "bird",
        lifespan: 20,
        image: "penguin.jpg",
        habitat: "Antarctic & Coastal Areas",
        diet: "Carnivore (fish)",
        info: "Penguins are flightless birds adapted for swimming.",
        funfact: "Penguins propose to their mate with a pebble."
    },
    {
        name: "Giraffe",
        type: "mammal",
        lifespan: 28,
        image: "giraffe.jpg",
        habitat: "African Savannas",
        diet: "Herbivore",
        info: "Giraffes are the tallest land animals with long necks to reach high leaves.",
        funfact: "Giraffes only sleep about 30 minutes per day."
    }
];

// =======================
// DOM ELEMENTS
// =======================
const animalContainer = document.getElementById("animalContainer");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");

// Popup elements
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popupOverlay");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const popupInfo = document.getElementById("popupInfo");
const popupHabitat = document.getElementById("popupHabitat");
const popupDiet = document.getElementById("popupDiet");
const popupLifespan = document.getElementById("popupLifespan");
const popupFunFact = document.getElementById("popupFunFact");
const closePopup = document.getElementById("closePopup");

// =======================
// RENDER ANIMALS
// =======================
function displayAnimals() {
    animalContainer.innerHTML = "";

    let filtered = animals.filter(animal =>
        animal.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    if (filterSelect.value !== "all") {
        filtered = filtered.filter(a => a.type === filterSelect.value);
    }

    if (sortSelect.value === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortSelect.value === "lifespan") {
        filtered.sort((a, b) => b.lifespan - a.lifespan);
    }

    filtered.forEach(animal => {
        const card = document.createElement("div");
        card.classList.add("animal-card");

        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
        `;

        card.addEventListener("click", () => showPopup(animal));
        animalContainer.appendChild(card);
    });
}

// =======================
// POPUP FUNCTION
// =======================
function showPopup(animal) {
    popupImage.src = animal.image;
    popupName.textContent = animal.name;
    popupInfo.textContent = "About: " + animal.info;
    popupHabitat.textContent = "Habitat: " + animal.habitat;
    popupDiet.textContent = "Diet: " + animal.diet;
    popupLifespan.textContent = "Lifespan: " + animal.lifespan + " years";
    popupFunFact.textContent = "Fun Fact: " + animal.funfact;

    popup.classList.remove("hidden");
    popupOverlay.classList.remove("hidden");
}

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
    popupOverlay.classList.add("hidden");
});

// Update anytime search/filter/sort changes
searchInput.addEventListener("input", displayAnimals);
filterSelect.addEventListener("change", displayAnimals);
sortSelect.addEventListener("change", displayAnimals);

// Load animals when page opens
displayAnimals();
