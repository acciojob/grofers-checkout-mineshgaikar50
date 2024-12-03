// Function to calculate the total price
function calculateTotal() {
  // Select all elements with the class "prices"
  const priceElements = document.querySelectorAll(".prices");
  
  // Calculate the total price
  let total = 0;
  priceElements.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });

  // Select the table and check if the total row already exists
  const table = document.getElementById("grocery-table");
  const existingTotalRow = document.querySelector(".total-row");

  if (existingTotalRow) {
    // If the total row exists, update its value
    existingTotalRow.firstChild.textContent = `Total Price: $${total.toFixed(2)}`;
  } else {
    // If the total row doesn't exist, create a new row
    const totalRow = document.createElement("tr");
    totalRow.className = "total-row"; // Add a class for the total row

    // Create a single cell spanning both columns
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: $${total.toFixed(2)}`;

    // Append the cell to the row and the row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  }
}

// Add an event listener to the "Calculate Total" button
document.getElementById("calculate").addEventListener("click", calculateTotal);
