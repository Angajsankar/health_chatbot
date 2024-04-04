document.addEventListener("DOMContentLoaded", function() {
    const medicineList = document.getElementById("medicineList");

    // Define medicine types with example medicines
    const medicineTypes = {
        "Pain Relievers": ["Acetaminophen (Tylenol)", "Ibuprofen (Advil, Motrin)", "Naproxen (Aleve)"],
        "Antibiotics": ["Amoxicillin", "Ciprofloxacin (Cipro)", "Azithromycin (Zithromax)"],
        "Antihistamines": ["Diphenhydramine (Benadryl)", "Loratadine (Claritin)", "Cetirizine (Zyrtec)"],
        // Add more medicine types as needed
    };

    // Populate the medicineList container with cards
    for (const [medicineType, medicines] of Object.entries(medicineTypes)) {
        const card = document.createElement("div");
        card.classList.add("card");

        const heading = document.createElement("h2");
        heading.textContent = medicineType;
        card.appendChild(heading);

        const ul = document.createElement("ul");
        medicines.forEach(medicine => {
            const li = document.createElement("li");
            li.textContent = medicine;
            ul.appendChild(li);
        });
        card.appendChild(ul);

        medicineList.appendChild(card);
    }
});
