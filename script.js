const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  const priceElements = document.querySelectorAll(".price");

  // Calculate the total price
  let total = 0;
  priceElements.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });

  // Check if the total row already exists
  const table = document.querySelector("table");
  const existingTotalRow = document.querySelector(".total-row");

  if (existingTotalRow) {
    // Update the total row if it already exists
    existingTotalRow.firstChild.textContent = `Total Price: Rs ${total}`;
  } else {
    // Create a new row for the total
    const totalRow = document.createElement("tr");
    totalRow.className = "total-row";

    // Create a single cell spanning both columns
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Append the cell to the row and the row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  }
  
};

getSumBtn.addEventListener("click", getSum);

