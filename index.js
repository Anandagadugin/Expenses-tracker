var table = document.getElementById("expenseTable");
table.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-button")) {
    var row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  else if (event.target.classList.contains("edit-button")) {
    var row = event.target.parentNode.parentNode;
    var expenseId = row.getAttribute("data-expense-id");
  }
});

    
    