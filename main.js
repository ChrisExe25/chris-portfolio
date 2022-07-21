function updateList() {
	const titles = [...document.querySelectorAll('h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})


let emailReddir = document.getElementById('emailRedirect')
emailReddir.addEventListener('click', e => {
	window.location.href = "mailto: portoschristian25@gmail.com?subject=Mail from CHRIS Portfolio." //mailto: automatic HTML email handler
})