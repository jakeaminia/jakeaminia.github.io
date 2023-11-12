// const body = document.body

const page_names = ['Home', 'Education', 'Experience', 'Projects', 'Skills', 'Contact']
const pages = {}

page_names.forEach(element => {
    var page_heading = document.createElement('h1')
    page_heading.setAttribute('class', 'page_heading')
    page_heading.innerText = element

    var page = document.createElement('div')
    page.setAttribute('class', 'page_view')
    page.setAttribute('page', element)
    page.appendChild(page_heading)

    pages[element] = page
});

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

    const pageView = document.querySelector(".page_view")
    const pageHeading = document.querySelector(".page_heading")
    pageHeading.innerText = destination

    // console.log(getCurrentPage())
}

function getCurrentPage() {
    return document.querySelector(".page_view").getAttribute("page")
}

function changePage(newPage) {
    const pageView = document.querySelector(".page_view")
    pageView.remove()
    document.body.appendChild(pages[newPage])
    // console.log("changed: " + currentPage + " -> " + newPage)
}