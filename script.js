// =========================
// 📌 ANIMAL DATA (objects)
// =========================
const animals = [
    {
        name: "Lion",
        type: "mammal",
        image: "lion.jpg",
        info: "Lions are known as the kings of the savanna. They live in groups called prides.",
        habitat: "African grasslands and savannas.",
        diet: "Carnivore – mainly buffalo, antelope, zebra.",
        lifespan: "12–15 years",
        funfact: "A lion’s roar can be heard 8 km away!"
    },

    {
        name: "Elephant",
        type: "mammal",
        image: "elephant.jpg",
        info: "Elephants are the largest land animals on Earth, known for intelligence and long trunks.",
        habitat: "Savannas, forests, and grasslands.",
        diet: "Herbivore – grass, bark, and leaves.",
        lifespan: "60–70 years",
        funfact: "Elephants can recognize themselves in mirrors!"
    },

    {
        name: "Giraffe",
        type: "mammal",
        image: "giraffe.jpg",
        info: "Giraffes are the tallest animals on Earth with long necks for reaching high leaves.",
        habitat: "African savannas.",
        diet: "Herbivore – mainly acacia leaves.",
        lifespan: "25–30 years",
        funfact: "A giraffe sleeps only about 30 minutes per day!"
    },

    {
        name: "Monkey",
        type: "mammal",
        image: "monkey.jpg",
        info: "Monkeys are intelligent primates with advanced social behavior.",
        habitat: "Jungles and forests.",
        diet: "Omnivore – fruits, seeds, insects.",
        lifespan: "15–30 years",
        funfact: "Some monkeys can understand simple math!"
    },

    {
        name: "Penguin",
        type: "bird",
        image: "penguin.jpg",
        info: "Penguins are flightless birds adapted for swimming in cold oceans.",
        habitat: "Antarctica and sub-Antarctic islands.",
        diet: "Carnivore – fish, krill, squid.",
        lifespan: "15–20 years",
        funfact: "Penguins propose with pebbles!"
    },

    {
        name: "Zebra",
        type: "mammal",
        image: "zebra.jpg",
        info: "Zebras are recognized by their unique black-and-white stripes.",
        habitat: "African grasslands.",
        diet: "Herbivore – mainly grasses.",
        lifespan: "20–25 years",
        funfact: "Every zebra has a unique stripe pattern!"
    },

    {
        name: "Tiger",
        type: "mammal",
        image: "tiger.jpg",
        info: "Tigers are powerful predators and the largest of the big cats.",
        habitat: "Forests and grasslands.",
        diet: "Carnivore – deer, wild boar, buffalo.",
        lifespan: "15–20 years",
        funfact: "Tigers are excellent swimmers!"
    }
];


// =========================
// 📌 RENDER ANIMALS
// =========================
function renderAnimals(list) {
    const container = document.getElementById("animalContainer");
    container.innerHTML = "";

    list.forEach(animal => {
        const card = document.createElement("div");
        card.className = "animal-card";
        card.innerHTML = `
            <img src="${animal.image}">
            <h3>${animal.name}</h3>
        `;
        card.onclick = () => openPopup(animal);
        container.appendChild(card);
    });
}

renderAnimals(animals);


// =========================
// 📌 SEARCH FUNCTION
// =========================
document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const result = animals.filter(a => a.name.toLowerCase().includes(value));
    renderAnimals(result);
});


// =========================
// 📌 FILTER FUNCTION
// =========================
document.getElementById("filterSelect").addEventListener("change", function () {
    const type = this.value;
    if (type === "all") renderAnimals(animals);
    else renderAnimals(animals.filter(a => a.type === type));
});


// =========================
// 📌 POPUP LOGIC
// =========================
function openPopup(animal) {
    document.getElementById("popupImage").src = animal.image;
    document.getElementById("popupName").textContent = animal.name;
    document.getElementById("popupInfo").textContent = animal.info;
    document.getElementById("popupHabitat").textContent = "🌍 Habitat: " + animal.habitat;
    document.getElementById("popupDiet").textContent = "🍽️ Diet: " + animal.diet;
    document.getElementById("popupLifespan").textContent = "⏳ Lifespan: " + animal.lifespan;
    document.getElementById("popupFunFact").textContent = "⭐ Fun Fact: " + animal.funfact;

    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("popupOverlay").classList.remove("hidden");
}

document.getElementById("closePopup").onclick = closePopup;
document.getElementById("popupOverlay").onclick = closePopup;

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("popupOverlay").classList.add("hidden");
}
