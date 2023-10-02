// Define an array to store job vacancies
let jobVacancies = [];

// Define a function to display the main menu
function displayMainMenu() {
  return prompt('==== Job Vacancies ====\n1. List vacancies\n2. Create a vacancy\n3. View a vacancy\n4. Apply for a vacancy\n5. Delete a vacancy\n6. Exit\nEnter your choice:');
}

// Define a function to list available vacancies
function listVacancies() {
  console.log("==== Available Vacancies ====");
  if (jobVacancies.length === 0) {
    return console.log("No vacancies available.");
  } else {
    jobVacancies.forEach((vacancy, index) => {
      return console.log(`${index + 1}. ${vacancy.title}`);
    });
  }
}

// Define a function to create a new vacancy
function createVacancy() {
  console.log("==== Create a New Vacancy ====");
  let title = prompt("Enter the title of the vacancy:");
  let description = prompt("Enter the description of the vacancy:");
  let requirements = prompt("Enter the requirements of the vacancy:");
  let salary = prompt("Enter the salary of the vacancy:");
  let newVacancy = {
    title: title,
    description: description,
    requirements: requirements,
    salary: salary,
    applicants: [],
  };
  jobVacancies.push(newVacancy);
  console.log("Vacancy created successfully.");
}

// Define a function to view a vacancy
function viewVacancy() {
  console.log("==== View a Vacancy ====");
  let vacancyIndex = prompt("Enter the index of the vacancy:");
  if (vacancyIndex >= 1 && vacancyIndex <= jobVacancies.length) {
    let vacancy = jobVacancies[vacancyIndex - 1];
    console.log(`Title: ${vacancy.title}`);
    console.log(`Description: ${vacancy.description}`);
    console.log(`Requirements: ${vacancy.requirements}`);
    console.log(`Salary: ${vacancy.salary}`);
    console.log(`Applicants: ${vacancy.applicants.join(", ")}`);
  } else {
    console.log("Invalid vacancy index.");
  }
}

// Define a function to apply for a vacancy
function applyForVacancy() {
  console.log("==== Apply for a Vacancy ====");
  let vacancyIndex = prompt("Enter the index of the vacancy:");
  if (vacancyIndex >= 1 && vacancyIndex <= jobVacancies.length) {
    let vacancy = jobVacancies[vacancyIndex - 1];
    let applicantName = prompt("Enter your name:");
    vacancy.applicants.push(applicantName);
    console.log("Application submitted successfully.");
  } else {
    console.log("Invalid vacancy index.");
  }
}

// Define a function to delete a vacancy
function deleteVacancy() {
  console.log("==== Delete a Vacancy ====");
  let vacancyIndex = prompt("Enter the index of the vacancy:");
  if (vacancyIndex >= 1 && vacancyIndex <= jobVacancies.length) {
    jobVacancies.splice(vacancyIndex - 1, 1);
    console.log("Vacancy deleted successfully.");
  } else {
    console.log("Invalid vacancy index.");
  }
}

// Define a function to handle user input
function handleUserInput() {
  let userInput
  do {
    userInput = displayMainMenu()
    switch (userInput) {
      case "1":
        listVacancies();
        break;
      case "2":
        createVacancy();
        break;
      case "3":
        viewVacancy();
        break;
      case "4":
        applyForVacancy();
        break;
      case "5":
        deleteVacancy();
        break;
      case "6":
        console.log("Goodbye!");
        break;
      default:
        console.log("Invalid choice.");
        break;
    }
  } while (userInput !== "6");
}

// Call the handleUserInput function to start the program
handleUserInput();
