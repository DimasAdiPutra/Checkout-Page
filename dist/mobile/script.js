// mengambil bill method
const bills = document.getElementById("bill").children

// memberikan effect select pada bills
for (const bill of bills) {
	const inputBill = bill.querySelector('input[type="radio"]')
	if (inputBill.checked) {
		inputBill.parentElement.classList.add("bill-select")
	}

	bill.addEventListener("click", function () {
		for (const bill of bills) {
			if (bill.classList.contains("bill-select")) {
				bill.classList.remove("bill-select")
			}
		}
		this.classList.add("bill-select")
	})
}
