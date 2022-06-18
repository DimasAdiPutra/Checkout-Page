// mengambil semua packages
const packages = document.getElementById("package")

// memberikan selector pada setiap package yang dipilih
for (const package of packages.children) {
	package.addEventListener("click", function () {
		for (const package of packages.children) {
			if (package.classList.contains("selected")) {
				package.classList.remove("selected")
			} else {
				this.classList.add("selected")
			}
		}
	})
}
