function viewAnimal(name) {
    window.location.href = "animal.html?animal=" + name;
}

const animalData = {
    lion: {
        name: "Lion",
        image: "lion.jpg",
        desc: "The lion is known as the king of the jungle. Lions live in groups called prides."
    },

    elephant: {
        name: "Elephant",
        image: "elephant.jpg",
        desc: "Elephants are the largest land animals on Earth. They are extremely intelligent and social."
    },

    giraffe: {
        name: "Giraffe",
        image: "giraffe.jpg",
        desc: "Giraffes are the tallest animals in the world. They use their long necks to reach leaves."
    },

    penguin: {
        name: "Penguin",
        image: "penguin.jpg",
        desc: "Penguins are birds that cannot fly, but are excellent swimmers and live in cold climates."
    },

    zebra: {
        name: "Zebra",
        image: "zebra.jpg",
        desc: "Zebras are known for their unique black and white stripes. Each zebra's pattern is different."
    }
};

// Load animal info
const params = new URLSearchParams(window.location.search);
const selectedAnimal = params.get("animal");

if (selectedAnimal && animalData[selectedAnimal]) {
    document.getElementById("animalName").innerText = animalData[selectedAnimal].name;

    document.getElementById("animalInfo").innerHTML = `
        <img src="${animalData[selectedAnimal].image}" alt="${animalData[selectedAnimal].name}">
        <p>${animalData[selectedAnimal].desc}</p>
    `;
}
