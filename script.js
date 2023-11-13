// const body = document.body

const education_page = "<h1 class='page_heading'>Education</h1><hr><h3>I will be graduating from</h3><h2 class='education_key_term'>University of Wisconsin</h2><h3>with a</h3><h2 class='education_key_term'>Bachelor's Degree</h2><h3>in</h3><h2 class='education_key_term'>Computer Science</h2><h3>on</h3><h2 class='education_key_term'>May 11, 2024</h2><h3>with a gpa of</h3><h2 class='education_key_term'>3.67</h2><hr><h3>My coursework includes</h3><ul class='coursework_list'><li>Java Programming I, II, III</li><li>Intro to Algorithms</li><li>Intro to Artificial Intelligence</li><li>Machine Organization & C Programming</li><li>Intro to Cryptography</li><li>Mobile Systems and Applications</li><li style='color: gray;'>Theory of Programming Languages</li><li style='color: gray;'>Intro to Human-Computer Interaction</li><li>Intro to Computer Engineering</li><li>Multivariable Calculus</li><li>Intro to Discrete Mathematics</li><li>Elementary Matrix and Linear Algebra</li></ul>"
const experience_page = "<h1 class='page_heading'>Experience</h1><hr><div class='internship'><h2 class='internship_name'>Data Analytics Intern - <a class='company_name' href='https://scalemedia.com/' target='_blank' rel='noopener noreferrer'>Scale Media Inc.</a></h2><h3 class='internship_date'>May 2023 - August 2023</h3><ul class='internship_description'><li><p>I wrote a program in <b>Python</b> that automatically calls <b>REST APIs</b> from the Bureau of Economic Analysis to gather <b>macroeconomic data</b> annually, which allowed Scale's marketing team to gain insight into <b>local economic trends</b> for their target markets.</p></li><li><p>I assisted in bdeploying the program on <b>Knime</b> to allow it to run <b>automatically</b> when new BEA data is released annually.</p></li><li><p>I conducted <b>QA</b> on Scale's <b>Tableau</b> databases after a company-wide procedural shift in calculations and <b>presented my reported findings</b> to the relevant team members.</p></li></ul></div><hr><div class='internship'><h2 class='internship_name'>Software Engineer Intern - <a class='company_name' href='https://snap.com/en-US' target='_blank' rel='noopener noreferrer'>Snap Inc.</a></h2><h3 class='internship_date'>May 2022 - September 2022</h3><ul class='internship_description'><li><p>I wrote a program in <b>Java</b> and <b>Python</b>, using <b>REST APIs</b> and interfacing with <b>Google Cloud</b>, to <b>automate</b> the process of collecting and interpreting crash log files for Snapchat lense <b>tests</b>, alleviating a significant time-consuming burden for the software engineers on my team.</p></li><li><p>I applied my classroom knowledge of version control using <b>Git and GitHub</b> to the real-world process of contributing to <b>team repositories</b>, as well as meeting <b>documentation and syntax specifications</b>.</p></li><li><p>I gained firsthand experience in <b>software development methodologies</b>, such as <b>SCRUM</b> and <b>CI/CD</b>.</p></li></ul></div>"
const pages = { "Home": "", "Education": education_page, "Experience": experience_page, "Projects": "", "Skills": "", "Contact": "" }

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