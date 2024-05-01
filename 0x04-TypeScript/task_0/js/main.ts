export interface Student  {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const FirstStudent: Student = {
    firstName: 'Jack',
    lastName: 'Dawson',
    age: 21,
    location: 'Ireland',
};

const secondStudent: Student = {
    firstName: Rose,
    lastName: 'DeWitt Bukate',
    age: 20,
    location: 'ireland',
}

// array named studentsList containing the two variables
const studentsList: Student[] = [FirstStudent, secondStudent]

// Function to render the table
function renderTable() {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Iterate through each student and create a row for them
    studentsList.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        
        // Append cells to the row
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        
        // Append row to the table body
        tbody.appendChild(row);
    });

    // Append the table body to the table
    table.appendChild(tbody);

    // Append the table to the document body or any other desired container
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable();