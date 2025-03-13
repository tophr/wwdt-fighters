// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive > .nav-item > .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  console.log("foo");

  // Query the WWDT Stats API https://github.com/questionlp/api.wwdt.me_v2 for total wins and losses for a panelist and display the results in the browser.

  // const panelistId = 'your-panelist-id'; // Replace with the actual panelist ID
  // const apiUrl = `https://api.wwdt.me/v2/panelists/${panelistId}/stats`;

  // fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //         const wins = data.total_wins;
  //         const losses = data.total_losses;

  //         const resultsContainer = document.getElementById('results');
  //         resultsContainer.innerHTML = `
  //             <p>Total Wins: ${wins}</p>
  //             <p>Total Losses: ${losses}</p>
  //         `;
  //     })
  //     .catch(error => {
  //         console.error('Error fetching data:', error);
  //     });

  // Retrieve a list of all panelists from the API
  // const apiUrl = `http://localhost:3000/api/panelists`;
  // const apiUrl = `https://api.wwdt.me/v2.0/panelists`;

  // fetch(apiUrl)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log("List of all panelists:", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:3000/api/v2.0/panelists", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  console.log('foo');

});
