const experiences = [
    { year: 2016, company: "Nouvelair Tunisie", position: "First Officer" },
    { year: 2017, company: "Bhutan Airlines", position: "First Officer" },
    { year: 2018, company: "Bhutan Airlines", position: "First Officer" },
    { year: 2018, company: "Ellinair", position: "First Officer" },
    { year: 2019, company: "Ellinair", position: "First Officer" },
    { year: 2020, company: "Avion Express", position: "First Officer" },
    { year: 2021, company: "Avion Express", position: "First Officer" },
    { year: 2022, company: "Avion Express", position: "First Officer" },
    { year: 2023, company: "Avion Express", position: "First Officer" },
    { year: 2024, company: "Getjet Airlines", position: "First Officer" }
];

function searchExperience() {
    const yearInput = document.getElementById('yearInput').value;
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = ''; // Clear the list

    const filteredExperiences = experiences.filter(exp => exp.year == yearInput);
    if (filteredExperiences.length > 0) {
        filteredExperiences.forEach(exp => {
            const listItem = document.createElement('li');
            listItem.textContent = `${exp.year} - ${exp.company} - ${exp.position}`;
            experienceList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No experience found for the entered year.';
        experienceList.appendChild(listItem);
    }
}

// No need to display experiences on initial load
