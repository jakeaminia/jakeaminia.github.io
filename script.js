// const page_names = ['Home', 'Education', 'Experience', 'Projects', 'Skills', 'Card Game', 'Contact']
const page_names = ['Home', 'Education', 'Experience', 'Projects', 'Card Game', 'Contact']
const pages = {}

const navs = document.querySelectorAll(".nav")

var inflate_resume_button
var contact_me
var calculate_button
var middle_cards
var player_cards
var card_solution

navs.forEach(element => {
    element.addEventListener("click", e => inflateView(e.target))
})

loadPages()
changePage("Home")


async function loadPages() {
    const home_page = "<h1 class='page_heading'>Welcome to my Resume Website</h1><hr><p class='home_description'>Hello, my name is Jacob Aminia. I am a <b>senior</b> at <b>UW-Madison</b> studying <b>Computer Science</b>.<br /><br />Upon graduation, I will be pursuing a <b>Master's Degree</b> in <b>Data Science</b> at <b>UW-Madison</b>.<br /><br />My academic interests are <b>facial recognition</b>, <b>biometrics</b>, <b>natural language processing</b>, and <b>privacy & security</b>.<br /><br />I have <b>7 months</b> of internship experience in <b>software engineering</b> and <b>data analytics</b>.<br /><br />Check out my github <a href='https://www.github.com/jakeaminia' class='github_link' target='_blank' rel='noopener noreferrer'><strong>here</strong></a>, grab a copy of my resume below, or <strong class='contact_me' destination='Contact'>contact me</strong> directly.</p><button class='inflate_resume' type='button'><b>Show Resume</b></button><object data='images/ResumeM24.pdf' type='application/pdf' class='resume_pdf'></object>"
    // const education_page = "<h1 class='page_heading'>Education</h1><hr><h2 class='education_description'>I will be graduating from <b class='education_key_term'>UW-Madison</b> in <b class='education_key_term'>May 2024</b> with a <b class='education_key_term'>Bachelor's Degree</b> in <bclass='education_key_term'>Computer Science</b> and a gpa of <b class='education_key_term'>3.71</b></h2><hr><h3 class='coursework_includes'>My coursework includes</h3><ul class='coursework_list'><li>Java Programming I, II, III</li><li>Intro to Algorithms</li><li>Intro to Artificial Intelligence</li><li>Machine Organization & C Programming</li><li>Intro to Cryptography</li><li>Mobile Systems and Applications</li><li>Theory of Programming Languages</li><li>Intro to Human-Computer Interaction</li><li>Intro to Computer Engineering</li><li>Multivariable Calculus</li><li>Intro to Discrete Mathematics</li><li>Elementary Matrix and Linear Algebra</li></ul>"
    const education_page = "<h1 class='page_heading'>Education</h1><hr><h2 class='education_description'>I will be graduating from <b class='education_key_term'>UW-Madison</b> in <b class='education_key_term'>May 2024</b> with a <b class='education_key_term'>Bachelor's Degree</b> in <b class='education_key_term'>Computer Science</b> and a gpa of <b class='education_key_term'>3.71</b></h2><br /><h2 class='education_description'>I will be pursuing a <b class='education_key_term'>Master's Degree</b> in <b class='education_key_term'>Data Science</b> at <b class='education_key_term'>UW-Madison</b> beginning in <b class='education_key_term'>September 2024</b></h2><hr><h3 class='coursework_includes'>My coursework includes</h3><ul class='coursework_list'><li>Java Programming I, II, III</li><li>Intro to Algorithms</li><li>Intro to Artificial Intelligence</li><li>Machine Organization & C Programming</li><li>Intro to Cryptography</li><li>Mobile Systems and Applications</li><li>Theory of Programming Languages</li><li>Intro to Human-Computer Interaction</li><li>Intro to Computer Engineering</li><li>Multivariable Calculus</li><li>Intro to Discrete Mathematics</li><li>Elementary Matrix and Linear Algebra</li></ul>"
    const experience_page = "<h1 class='page_heading'>Experience</h1><hr><div class='internship'> <h2 class='internship_name'>Data Analytics Intern - <a class='company_name' href='https://scalemedia.com/' target='_blank' rel='noopener noreferrer'>Scale Media Inc.</a></h2> <h3 class='internship_date'>May 2023 - August 2023</h3> <ul class='internship_description'> <li> <p>I wrote a program in <b>Python</b> that automatically calls <b>REST APIs</b> from the Bureau of Economic Analysis to gather <b>macroeconomic data</b> annually, which allowed Scale's marketing team to gain insight into <b>local economic trends</b> for their target markets.</p> </li> <li> <p>I assisted in bdeploying the program on <b>Knime</b> to allow it to run <b>automatically</b> when new BEA data is released annually.</p> </li> <li> <p>I conducted <b>QA</b> on Scale's <b>Tableau</b> databases after a company-wide procedural shift in calculations and <b>presented my reported findings</b> to the relevant team members.</p> </li> </ul></div><hr><div class='internship'> <h2 class='internship_name'>Software Engineer Intern - <a class='company_name' href='https://snap.com/en-US' target='_blank' rel='noopener noreferrer'>Snap Inc.</a></h2> <h3 class='internship_date'>May 2022 - September 2022</h3> <ul class='internship_description'> <li> <p>I wrote a program in <b>Java</b> and <b>Python</b>, using <b>REST APIs</b> and interfacing with <b>Google Cloud</b>, to <b>automate</b> the process of collecting and interpreting crash log files for Snapchat lense <b>tests</b>, alleviating a significant time-consuming burden for the software engineers on my team.</p> </li> <li> <p>I applied my classroom knowledge of version control using <b>Git and GitHub</b> to the real-world process of contributing to <b>team repositories</b>, as well as meeting <b>documentation and syntax specifications</b>.</p> </li> <li> <p>I gained firsthand experience in <b>software development methodologies</b>, such as <b>SCRUM</b> and <b>CI/CD</b>. </p> </li> </ul></div>"
    const projects_page = "<h1 class='page_heading'>Projects</h1><hr><div class='project'> <div class='project_header'> <a class='project_link' href='https://github.com/jakeaminia/badgeroo' target='_blank' rel='noopener noreferrer'> <h2 class='project_name'>'Badgeroo' Android App</h2> </a> <h3 class='project_language'>Java (Android Studio)</h3> </div> <ul class='project_description'> <li> <p>I contributed to an Android app written in Java that helps users find college roommates.</p> </li> <li> <p>I coordinated the semester-long group project, using GitHub for version control.</p> </li> </ul></div><hr><div class='project'> <div class='project_header'> <a class='project_link' href='https://github.com/jakeaminia/portfolioRepo/tree/main/Chess' target='_blank' rel='noopener noreferrer'> <h2 class='project_name'>Chess Board</h2> </a> <h3 class='project_language'>Python</h3> </div> <ul class='project_description'> <li> <p>I wrote a two-player text-interface chess application in Python, implementing all chess rules and features from scratch.</p> </li> <li> <p>I used this project to hone skills in object-oriented programming, inheritance and polymorphism, and programming problem-solving.</p> </li> </ul></div><hr><div class='project'> <div class='project_header'> <a class='project_link' href='https://github.com/jakeaminia/portfolioRepo/tree/main/DAGTopologicalOrdering' target='_blank' rel='noopener noreferrer'> <h2 class='project_name'>DAG Topological Ordering</h2> </a> <h3 class='project_language'>Python</h3> </div> <ul class='project_description'> <li> <p>I implemented a directed acyclic graph topological ordering algorithm in Python.</p> </li> <li> <p>I used this program to create a curriculum for the parkour club I started on campus.</p> </li> </ul></div><hr>"
    // const skills_page = "<h1 class='page_heading'>Skills</h1><hr><div class='skill_category'> <h2 class='skill_category_name'>Programming Languages</h2> <ul class='skill_list'> <li class='skill'> <h3 class='skill_name'>Python</h3> <ul class='skill_description'> <li>Snap Internship</li> <li>Scale Internship</li> <li>Intro to Algorithms</li> <li>Intro to AI</li> <li>Chess Board</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>Java</h3> 
    // <ul class='skill_description'> <li>Snap Internship</li> <li>Programming I-III</li> <li>Mobile Systems & Apps</li> <li>'Badgeroo' App</li> <li>Vectors and Matrices</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>C/C++</h3> <ul class='skill_description'> <li>Machine Organization & C Programming</li> <li>Intro to Algorithms</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>JavaScript</h3> <ul class='skill_description'> <li>This Website</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>HTML/CSS</h3> <ul class='skill_description'> <li>This Website</li> </ul> </li> </ul></div><hr><div class='skill_category'> <h2 class='skill_category_name'>Software</h2> <ul class='skill_list'> <li class='skill'> <h3 class='skill_name'>Git/GitHub</h3> <ul class='skill_description'> <li>Snap Internship</li> <li>Programming III</li> <li>Mobile Systems & Apps</li> <li>'Badgeroo' App</li> <li>Chess Board</li> <li>Vectors and Matrices</li> <li>This Website</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>Android Studio</h3> <ul class='skill_description'> <li>Mobile Systems & Apps</li> <li>'Badgeroo' App</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>VSCode, IntelliJ, PyCharm</h3> <ul class='skill_description'> <li>All</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>Google Sheets</h3> <ul class='skill_description'> <li>Other</li> </ul> </li> </ul></div><hr><div class='skill_category'> <h2 class='skill_category_name'>Soft Skills</h2> <ul class='skill_list'> <li class='skill'> <h3 class='skill_name'>Written/Verbal Communication</h3> <ul class='skill_description'> <li>Snap Internship</li> <li>Scale Internship</li> <li>Programming III</li> <li>Mobile Systems & Apps</li> <li>Intro to Cryptography</li> <li>'Bageroo' App</li> </ul> </li> <li class='skill'> <h3 class='skill_name'>Reception of Feedback and Criticism</h3> <ul class='skill_description'> <li>Snap Internship</li> <li>Scale Internship</li> <li>Programming III</li> <li>Mobile Systems & Apps</li> <li>Intro to Cryptography</li> <li>'Bageroo' App</li> </ul> </li> </ul></div>"
    const card_game_page = " <h1 class='page_heading'>Card Game</h1> <hr> <h2 class='game_description'>This program finds the highest scoring combination for <br> any given set of cards in the card game I invented. <br><br> </h2> <h3>The rules of the game are as follows:</h3> <br> <h4> <ul> <li>The cards are valued from 1-13, with A=1, J=11, Q=12, K=13 and no jokers.</li> <li>2 cards are placed face up in the middle, and their values are multiplied together.</li> <li>Each player picks 4 cards.</li> <li>The goal is to get a number closest to a multiple of the middle product.</li> <li>A player 'gets' a number by representing the digits of that number with their cards.</li> <li>2-digit numbers carry their first digit to the left, as when performing addition on paper.</li> <li>Ex: (A 9 5) is 195. (A 10 5) is 205. (A Q 5 2) is 2,252. (K 3 J 7) is 13,417.</li> <li>If two or more players get the same distance from a multiple, the higher number wins.</li> <li>No calculators allowed!</li> </ul> </h4> <br><br> <div class='card_solver'> <h3>Enter the two middle cards: <input type='text' class='middle_cards' placeholder='K,10'></h3> <br> <h3>Enter the four cards of each player: <input type='text' class='player_cards' placeholder='Q,3,5,A; 6,7,2,8; 10,J,K,4'></h3> <br> <input type='button' class='calculate_button' value='Calculate'><br><br><div class='card_solution'></div> </div>"
    const contact_page = "<h1 class='page_heading'>Contact Me</h1><hr><h3 class='contact_name'>Jacob Aminia</h3><h3></h3><a class='contact_link' href='mailto:jake.aminia@gmail.com' target='_blank' rel='noopener noreferrer'>jake.aminia@gmail.com</a></h3><h3></h3><a class='contact_link' href='https://www.linkedin.com/in/jacob-aminia' target='_blank' rel='noopener noreferrer'>linkedin.com/in/jacob-aminia</a></h3>"

    pages['Home'] = home_page
    pages['Education'] = education_page
    pages['Experience'] = experience_page
    pages['Projects'] = projects_page
    // pages['Skills'] = skills_page
    pages['Contact'] = contact_page
    pages['Card Game'] = card_game_page
}

function inflateResume() {
    const resume_pdf = document.querySelector(".resume_pdf")
    if (resume_pdf.style.height == '30ic') {
        resume_pdf.style.height = '0px'
        inflate_resume_button.style.background = 'white'
        inflate_resume_button.innerHTML = '<b>Show Resume<b>'
    } else {
        resume_pdf.style.height = '30ic'
        inflate_resume_button.style.background = 'lightgray'
        inflate_resume_button.innerHTML = '<b>Hide Resume<b>'
    }
}

function inflateView(page) {
    const destination = page.getAttribute('destination')

    if (destination == getCurrentPage()) {
        return
    }

    changePage(destination)
}

function getCurrentPage() {
    return document.querySelector(".page_view").getAttribute("page")
}

function changePage(newPage) {
    const pageView = document.querySelector(".page_view")

    pageView.setAttribute("page", newPage)
    pageView.innerHTML = pages[newPage]

    console.log(`New Page: ${pages[newPage]}\n`)

    if (newPage == "Home") {
        inflate_resume_button = document.querySelector(".inflate_resume")
        console.log(inflate_resume_button)
        inflate_resume_button.addEventListener("click", () => inflateResume())

        contact_me = document.querySelector('.contact_me')
        contact_me.addEventListener("click", (e) => inflateView(e.target))
    }

    if (newPage == "Card Game") {
        calculate_button = document.querySelector(".calculate_button")
        console.log(calculate_button)
        middle_cards = document.querySelector(".middle_cards")
        player_cards = document.querySelector(".player_cards")
        card_solution = document.querySelector(".card_solution")
        calculate_button.addEventListener("click", calculateGame)
    }

}

function getNum(cardVal) {
    if (cardVal === undefined) {
        return NaN
    }
    switch (cardVal.trim()) {
        case 'J':
        case 'j':
            return 11
        case 'Q':
        case 'q':
            return 12
        case 'K':
        case 'k':
            return 13
        case 'A':
        case 'a':
            return 1
        default:
            if (Number(cardVal) < 1 || Number(cardVal) > 13) {
                return NaN
            }
            return Number(cardVal)

    }
}

function getCard(cardNum) {
    switch (cardNum) {
        case 1:
            return 'A'
        case 11:
            return 'J'
        case 12:
            return 'Q'
        case 13:
            return 'K'
        default:
            return cardNum
    }
}

function getProduct(middleCardsString) {
    const cards = middleCardsString.split(',')
    return getNum(cards[0]) * getNum(cards[1])
}

function getPlayerCards(playerCardsString) {
    var playerCardsMatrix = []
    for (let player of playerCardsString.split(';')) {
        var currPlayer = player.split(',')
        var currPlayerNums = []
        for (let num of currPlayer) {
            if (isNaN(getNum(num))) {
                return null
            }
            currPlayerNums.push(getNum(num))
        }
        if (currPlayerNums.length != 4) {
            return null
        }
        playerCardsMatrix.push(currPlayerNums)
    }
    return playerCardsMatrix
}

function evaluateCards(cards) {
    var numCards = cards.length
    var result = 0
    for (let i = 0; i < numCards; i++) {
        result += cards[numCards - i - 1] * Math.pow(10, i)
    }
    return result
}

/**
 * This function was generated with ChatGPT
 */
function everyPossiblePermuatation(digits) {
    const results = [];

    function generateHelper(current, remaining) {
        if (current.length > 0) {
            results.push(current.slice());
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextDigit = remaining[i];
            const newCurrent = current.concat(nextDigit);
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            generateHelper(newCurrent, newRemaining);
        }
    }

    generateHelper([], digits);

    return results;
}

function getBestCards(onePlayerCards, product) {
    var bestCards = []
    var bestOffBy = product
    var bestCardValue = -1
    var everyPerm = everyPossiblePermuatation(onePlayerCards)

    for (let cards of everyPerm) {
        var currCardValue = evaluateCards(cards)
        var currOffBy = offBy(currCardValue, product)

        if (bestCardValue == -1 || currOffBy < bestOffBy || (currOffBy == bestOffBy && currCardValue > bestCardValue)) {
            bestOffBy = currOffBy
            bestCardValue = currCardValue
            bestCards = cards
        }
    }

    return bestCards
}

function printCards(cards) {
    var result = ''
    for (let card of cards) {
        result += getCard(card) + ' '
    }
    return result.trim()
}

function offBy(number, product) {
    if (number < product) return product - number
    return Math.min(number % product, Math.abs(product - (number % product)))
}

function calculateGame() {
    const product = getProduct(middle_cards.value)

    if (isNaN(product)) {
        alert("Wrong format")
        return
    }

    const playerCards = getPlayerCards(player_cards.value)
    if (playerCards == null) {
        alert("Wrong format")
    }
    card_solution.innerHTML = ''
    for (let i = 0; i < playerCards.length; i++) {
        // console.log(everyPossiblePermuatation(playerCards[i]))
        var currBestCards = getBestCards(playerCards[i], product)
        var currBestScore = evaluateCards(currBestCards)

        var result = "Player " + (i + 1) + "'s best number is " + currBestScore + " (" + printCards(currBestCards) + "), which is " + offBy(currBestScore, product) + " away from a multiple of " + product
        var textElement = document.createElement('h3')
        textElement.textContent = result
        card_solution.appendChild(textElement)
    }

}