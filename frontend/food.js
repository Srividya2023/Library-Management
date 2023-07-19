let giftsList = [
  "20% bonus",
  "free shipping",
  "Sorry! well tried",
  "your favourite book",
  "50% bonus",
  "Buy1 get1 free",
  "A comic book",
  "Book echange offer",
]

let user = localStorage.getItem("user")

if (user) {
  document.getElementById("signup-btn").style.display = "none"
  document.getElementById("login-btn").style.display = "none"
  document.getElementById("logout-btn").style.display = "block"
} else {
  document.getElementById("login-btn").style.display = "block"
  document.getElementById("signup-btn").style.display = "block"
  document.getElementById("logout-btn").style.display = "none"
}

function getGift() {
  let noOfGifts = giftsList.length
  let randomGift = giftsList[Math.ceil(Math.random() * noOfGifts) - 1]

  return randomGift
}

let giftBoxContainer = document.getElementById("giftBoxContainer")

let countdown = 500

let intervalId = setInterval(function () {
  countdown = countdown - 1

  timerEl.textContent = "Time Limit: " + countdown + " s"

  if (countdown === 0) {
    document.getElementById("imageChanger")
    imageChanger.setAttribute(
      "src",
      "https://img.freepik.com/premium-photo/i-am-sorry-message-card-envelope_264726-410.jpg?size=626&ext=jpg&ga=GA1.1.1610026223.1669570657&semt=sph"
    )

    timerEl.textContent = "Boom!!.... Better luck next time"
    clearInterval(intervalId)
  }
}, 1000)

let timerEl = document.getElementById("timer")

let defuserEl = document.getElementById("defuser")

let timeCount = 0

defuserEl.addEventListener("click", function () {
  let giftMsgEl = document.createElement("span")
  let temp = getGift()

  timeCount += 1

  if (countdown !== 0 && timeCount === 1) {
    giftMsgEl.textContent = "Congrats!!.... you won  " + temp
    giftBoxContainer.appendChild(giftMsgEl)
    document.getElementById("imageChanger")
    if (temp === "20% bonus") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/free-photo/paper-style-black-friday-composition_23-2149074087.jpg?size=626&ext=jpg&ga=GA1.2.565730523.1689246239&semt=ais"
      )
    } else if (temp === "free shipping") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/free-shipping-concept-illustration_114360-2978.jpg?size=626&ext=jpg&ga=GA1.2.565730523.1689246239&semt=ais"
      )
    } else if (temp === "Sorry! well tried") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/premium-vector/apologize-say-sorry-regret-what-happen-asking-forgiveness-professional-leadership-after-mistake-failure-pardon-feel-sad-concept-businessman-bow-down-say-sorry-apologize_212586-2058.jpg?size=626&ext=jpg&ga=GA1.1.565730523.1689246239&semt=ais"
      )
    } else if (temp === "your favourite book") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/premium-vector/cartoon-little-girl-searching-book-bookstore_146168-12.jpg?size=626&ext=jpg&ga=GA1.1.565730523.1689246239&semt=ais"
      )
    } else if (temp === "50% bonus") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/discount-sale-price-tag-design_1017-15624.jpg?size=626&ext=jpg&ga=GA1.1.565730523.1689246239&semt=ais"
      )
    } else if (temp === "Buy1 get1 free") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/shopping-banner-template-with-offer-details_1017-17480.jpg?size=626&ext=jpg&ga=GA1.1.565730523.1689246239&semt=ais"
      )
    } else if (temp === "A comic book") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/comic-book-magazine-cover-page-template_1017-24114.jpg?size=626&ext=jpg&ga=GA1.1.565730523.1689246239&semt=ais"
      )
    } else if (temp === "Book echange offer") {
      imageChanger.setAttribute(
        "src",
        "https://img.freepik.com/premium-vector/book-exchange-landing-page-template-bookcrossing-vector-illustration-banner-education-knowledge-concept-diverse-hands-holding-volume-swap-literature_534430-819.jpg?size=626&ext=jpg&ga=GA1.1.565730523.1689246239&semt=ais"
      )
    }

    clearInterval(intervalId)
  }
})

let changedWhole = document.getElementById("changedWhole")
let innerWhole = document.getElementById("innerWhole")

let visaEl = document.getElementById("visa")
visaEl.onclick = function () {
  let labelEl = document.createElement("label")
  // labelEl.setAttribute("for",)
  labelEl.textContent = "Amount to be paid: "
  labelEl.classList.add("delivery-and-payment-section-description")

  let inputEl = document.createElement("input")
  inputEl.type = "text"
  //inputEl.id=""
  inputEl.setAttribute("placeholder", "Enter amount")
  inputEl.classList.add("input-element")

  innerWhole.textContent = ""
  changedWhole.appendChild(labelEl)
  let breakElement = document.createElement("br")
  changedWhole.appendChild(breakElement)
  changedWhole.appendChild(inputEl)

  inputEl.addEventListener("keydown", function (event) {
    let paidAmount = inputEl.value

    if (event.key === "Enter" && paidAmount !== "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Your payment is successful"
    } else if (event.key === "Enter" && paidAmount === "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Please....... enter money "
    }
  })
}

let MasterCardEl = document.getElementById("MasterCard")
MasterCardEl.onclick = function () {
  let labelEl = document.createElement("label")
  // labelEl.setAttribute("for",)
  labelEl.textContent = "Amount to be paid: "
  labelEl.classList.add("delivery-and-payment-section-description")

  let inputEl = document.createElement("input")
  inputEl.type = "text"
  //inputEl.id=""
  inputEl.setAttribute("placeholder", "Enter amount")
  inputEl.classList.add("input-element")

  innerWhole.textContent = ""
  changedWhole.appendChild(labelEl)
  let breakElement = document.createElement("br")
  changedWhole.appendChild(breakElement)
  changedWhole.appendChild(inputEl)

  inputEl.addEventListener("keydown", function (event) {
    let paidAmount = inputEl.value

    if (event.key === "Enter" && paidAmount !== "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Your payment is successful"
    } else if (event.key === "Enter" && paidAmount === "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Please....... enter money "
    }
  })
}

let payPalEl = document.getElementById("payPal")
payPalEl.onclick = function () {
  let labelEl = document.createElement("label")
  // labelEl.setAttribute("for",)
  labelEl.textContent = "Amount to be paid: "
  labelEl.classList.add("delivery-and-payment-section-description")

  let inputEl = document.createElement("input")
  inputEl.type = 56
  //inputEl.id=""
  inputEl.setAttribute("placeholder", "Enter amount")
  inputEl.classList.add("input-element")

  innerWhole.textContent = ""
  changedWhole.appendChild(labelEl)
  let breakElement = document.createElement("br")
  changedWhole.appendChild(breakElement)
  changedWhole.appendChild(inputEl)

  inputEl.addEventListener("keydown", function (event) {
    let paidAmount = inputEl.value

    if (event.key === "Enter" && paidAmount !== "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Your payment is successful"
    } else if (event.key === "Enter" && paidAmount === "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Please....... enter money "
    }
  })
}

let americanExpressEl = document.getElementById("americanExpress")
americanExpressEl.onclick = function () {
  let labelEl = document.createElement("label")
  // labelEl.setAttribute("for",)
  labelEl.textContent = "Amount to be paid: "
  labelEl.classList.add("delivery-and-payment-section-description")

  let inputEl = document.createElement("input")
  inputEl.type = "text"
  //inputEl.id=""
  inputEl.setAttribute("placeholder", "Enter amount")
  inputEl.classList.add("input-element")

  innerWhole.textContent = ""
  changedWhole.appendChild(labelEl)
  let breakElement = document.createElement("br")
  changedWhole.appendChild(breakElement)
  changedWhole.appendChild(inputEl)

  inputEl.addEventListener("keydown", function (event) {
    let paidAmount = inputEl.value

    if (event.key === "Enter" && paidAmount !== "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Your payment is successful"
    } else if (event.key === "Enter" && paidAmount === "") {
      let imageEl = document.createElement("img")

      imageEl.setAttribute(
        "src",
        "https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais"
      )
      imageEl.classList.add("image-width")
      changedWhole.textContent = ""
      changedWhole.appendChild(imageEl)

      let paraEl = document.getElementById("paraEl")

      paraEl.textContent = "Please....... enter money "
    }
  })
}

// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarksListEl = document.getElementById("bookmarksList")

let siteNameErrMsgEl = document.getElementById("siteNameErrMsg")
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg")

let submitBtnEl = document.getElementById("submitBtn")
let siteNameInputEl = document.getElementById("siteNameInput")
let siteUrlInputEl = document.getElementById("siteUrlInput")

siteNameInputEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteNameErrMsgEl.textContent = "Required*"
  } else {
    siteNameErrMsgEl.textContent = ""
  }
})

siteUrlInputEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteUrlErrMsgEl.textContent = "Required*"
  } else {
    siteUrlErrMsgEl.textContent = ""
  }
})

//let siteNameInputVal=siteNameInput.value;
//let siteUrlInputVal=siteUrlInput.value;

let bookmarkFormEl = document.getElementById("bookmarkForm")

bookmarkFormEl.addEventListener("submit", function (event) {
  event.preventDefault()

  if (siteNameInputEl.value === "" && siteUrlInputEl.value === "") {
    siteNameErrMsgEl.textContent = "Required*"
    siteUrlErrMsgEl.textContent = "Required*"
  } else if (siteNameInputEl.value === "" && siteUrlInputEl.value !== "") {
    siteNameErrMsgEl.textContent = "Required*"
    siteUrlErrMsgEl.textContent = ""
  } else if (siteUrlInputEl.value === "" && siteNameInputEl.value !== "") {
    siteNameErrMsgEl.textContent = ""
    siteUrlErrMsgEl.textContent = "Required*"
  } else {
    siteNameErrMsgEl.textContent = ""
    siteUrlErrMsgEl.textContent = ""

    let listItem1 = document.createElement("li")
    listItem1.textContent = siteNameInputEl.value
    listItem1.classList.add("heading-user-resources")

    //let listItem2 = document.createElement("li");
    let anchorEl = document.createElement("a")
    anchorEl.setAttribute("href", siteUrlInputEl.value)
    anchorEl.textContent = siteUrlInputEl.value
    anchorEl.setAttribute("target", "_blank")

    let breakEl = document.createElement("br")
    listItem1.appendChild(breakEl)

    listItem1.appendChild(anchorEl)

    bookmarksListEl.appendChild(listItem1)
    //bookmarksListEl.appendChild(anchorEl);
    bookmarksListEl.classList.add("border", "mt-3", "p-3")
  }
})

let searchResultsEl = document.getElementById("searchResults")
let searchInputEl = document.getElementById("searchInput")
let spinnerEl = document.getElementById("spinner")

function createAndAppendSearchResult(result) {
  let { author, imageLink, title } = result

  let resultItemEl = document.createElement("div")
  resultItemEl.classList.add("w-100")
  resultItemEl.classList.add("col-5", "m-auto")

  //searchResultsEl.classList.add("d-flex", "flex-row", "justify-content-center");

  let imageEl = document.createElement("img")
  //imageEl.classList.add("col-11", "col-md-5", "mr-auto", "ml-auto");

  imageEl.src = imageLink
  //imageEl.classList.add("col-6");
  resultItemEl.appendChild(imageEl)
  //searchResultsEl.appendChild(imageEl);

  let paraEl = document.createElement("p")
  paraEl.classList.add("author-dynamic", "mt-2")

  paraEl.textContent = author

  resultItemEl.appendChild(paraEl)

  searchResultsEl.appendChild(resultItemEl)
}

function displayResult(search_results) {
  spinnerEl.classList.add("d-none")

  let headingEl = document.createElement("h1")
  headingEl.textContent = "Popular Books"
  //h.classList.add("style")
  headingEl.classList.add("w-80")
  headingEl.classList.add("col-12", "ml-3", "mt-2", "mb-2", "heading-dynamic")

  searchResultsEl.appendChild(headingEl)

  for (let result of search_results) {
    createAndAppendSearchResult(result)
  }
}

function resultsNotFound() {
  spinnerEl.classList.add("d-none")

  let headingElNotFound = document.createElement("h1")
  headingElNotFound.textContent = "No results found"
  headingElNotFound.classList.add(
    "heading-dynamic",
    "col-12",
    "w-80",
    "ml-4",
    "mt-3"
  )
  searchResultsEl.appendChild(headingElNotFound)
}

function searchBooks(event) {
  let searchInput = searchInputEl.value

  if (event.key === "Enter" && searchInput !== "") {
    spinnerEl.classList.remove("d-none")
    searchResultsEl.textContent = ""

    let url = "https://apis.ccbp.in/book-store?title=" + searchInput

    let options = {
      method: "GET",
    }

    fetch(url, options)
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonData) {
        let { search_results } = jsonData
        //console.log(jsonData.search_results);
        // if(searchInput.includes)
        let count = 0
        for (let book of jsonData.search_results) {
          //console.log(country)
          let bookName = book.title

          if (bookName.includes(searchInput)) {
            count += 1
            displayResult(search_results)
          }
        }
        if (count === 0) {
          resultsNotFound()
        }
      })
  } else if (event.key === "Enter" && searchInput === "") {
    spinnerEl.classList.remove("d-none")
    searchResultsEl.textContent = ""

    resultsNotFound()
  }
}

searchInputEl.addEventListener("keydown", searchBooks)

document
  .getElementById("signin-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault()

    let name = document.getElementById("s-name")
    let username = document.getElementById("s-username")
    let password = document.getElementById("s-password")
    let gender = document.getElementById("s-gender")
    let locationS = document.getElementById("s-location")

    const data = {
      name: name.value,
      username: username.value,
      password: password.value,
      gender: gender.value,
      location: locationS.value,
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Account Created successfully!")
        const data = await response.json()
        localStorage.setItem("user", JSON.stringify(data))
        event.target.reset()
        window.location.href = "index.html"
      } else {
        alert("Error submitting form. Please try again.")
      }
    } catch (error) {
      alert("Error submitting form. Please try again.")
      console.error(error)
    }
  })

document
  .getElementById("login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault()

    let username = document.getElementById("l-username")
    let password = document.getElementById("l-password")

    const data = {
      username: username.value,
      password: password.value,
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Login successful!")
        const data = await response.json()
        localStorage.setItem("user", JSON.stringify(data))
        event.target.reset()
        window.location.href = "index.html"
      } else {
        alert("Invalid username or password")
      }
    } catch (error) {
      alert("Invalid username or password")
      console.error(error)
    }
  })

document.getElementById("logout-btn").addEventListener("click", function () {
  localStorage.removeItem("user")
  window.location.href = "index.html"
})
