// const body = document.body

const education_page = "<h1 class='page_heading'>Home</h1><hr><h3>I will be graduating from</h3><h2 class='education_key_term'>University of Wisconsin</h2><h3>with a</h3><h2 class='education_key_term'>Bachelor's Degree</h2><h3>in</h3><h2 class='education_key_term'>Computer Science</h2><h3>on</h3><h2 class='education_key_term'>May 11, 2024</h2><h3>with a gpa of</h3><h2 class='education_key_term'>3.67</h2><hr><h3>My coursework includes</h3><ul class='coursework_list'><li>Java Programming I, II, III</li><li>Intro to Algorithms</li><li>Intro to Artificial Intelligence</li><li>Machine Organization & C Programming</li><li>Intro to Cryptography</li><li>Mobile Systems and Applications</li><li style='color: gray;'>Theory of Programming Languages</li><li style='color: gray;'>Intro to Human-Computer Interaction</li><li>Intro to Computer Engineering</li><li>Multivariable Calculus</li><li>Intro to Discrete Mathematics</li><li>Elementary Matrix and Linear Algebra</li></ul>"
const pages = { "Home": "", "Education": education_page, "Experience": "", "Projects": "", "Skills": "", "Contact": "" }

const navs = document.querySelectorAll(".nav")

navs.forEach(element => {
    element.addEventListener("click", e => inflateView(e.target))
});

function inflateView(page) {
    const destination = page.getAttribute('destination')

    if (destination == getCurrentPage()) {
        return
    }

    changePage(destination)
    // console.log(getCurrentPage())
}

function getCurrentPage() {
    return document.querySelector(".page_view").getAttribute("page")
}

function changePage(newPage) {
    const pageView = document.querySelector(".page_view")
    pageView.setAttribute("page", newPage)
    pageView.innerHTML = pages[newPage]
    // console.log("changed: " + currentPage + " -> " + newPage)
}