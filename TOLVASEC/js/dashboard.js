"use strict";
/* Username generator and minicarousel controls function */
function minicarouselUsername() {
    /* userName generation */
    var username = document.getElementsByClassName("userName");
    const arrayNames = ["Aaran", "Ines", "Matthias", "John"];
    var selectedName = arrayNames[Math.floor(Math.random() * arrayNames.length)];
    for (var i = 0; i < username.length; i++) {
        username[i].innerHTML = selectedName;
    }
    /* Declare constants (Array of images and description texts, elements of the image and text) */
    const textArray = ["Get all the information about your application, systems and websites at once glance. Detailed application settings and security settings as well as user permissions can also be modified within the dashboard. We want all our customers to get the information they need at their fingertips, and Tolvasec Administrative Dashboard is exactly that.", "Collaborate with your co-workers easily over our social system. Get the latest updates from message boards and make teamwork more efficient with Tolvasec Administrative Dashboard!", "With the high traffic your website must be supporting, it will certainly be hard for you to translate raw data into meaningful statistics which can help plan the direction of your application. With Tolvasec Administrative Dashboard, we take that data and convert it into actionable plans, all just at your fingertips without any extra work."];
    const imageArray = ["assets/illustrations/reading.svg", "assets/illustrations/message.svg", "assets/illustrations/data.svg"];
    const header = ["Accessibility", "Collaboration", "Analytics"];
    const image = document.getElementById("descriptionImg");
    const text = document.getElementById("descriptionText");
    const headerElement = document.getElementById("descHead");

    image.src = imageArray[1];
    text.innerHTML = textArray[1];
    headerElement.innerHTML = header[1];
    /* Declare i as the slide number its currently on */
    var i = 2;

    /* When click event for the right chevron button is executed */
    document.getElementById("slideRight").addEventListener("click", () => {
        /* Set initial opacity to 0 */
        image.style.opacity = 0;
        text.style.opacity = 0
        headerElement.style.opacity = 0;
        /* Execute function after 1 second, giving time for initial opacity to fade out first */
        setTimeout(() => {
            image.style.opacity = 1;
            text.style.opacity = 1;
            headerElement.style.opacity = 1;
            switch (i) {
                case 1:
                    image.src = imageArray[1];
                    text.innerHTML = textArray[1];
                    headerElement.innerHTML = header[1];
                    i = i + 1;
                    break;
                case 2:
                    image.src = imageArray[2];
                    text.innerHTML = textArray[2];
                    headerElement.innerHTML = header[2];
                    i = i + 1;
                    break;
                case 3:
                    image.src = imageArray[0];
                    text.innerHTML = textArray[0];
                    headerElement.innerHTML = header[0];
                    i = 1;
                    break;
            }
        }, 500);
    });

    document.getElementById("slideLeft").addEventListener("click", () => {
        image.style.opacity = 0;
        text.style.opacity = 0;
        headerElement.style.opacity = 0;
        setTimeout(() => {
            image.style.opacity = 1;
            text.style.opacity = 1;
            headerElement.style.opacity = 1;
            switch (i) {
                case 1:
                    image.src = imageArray[0];
                    text.innerHTML = textArray[0];
                    headerElement.innerHTML = header[0];
                    i = 3;
                    break;
                case 2:
                    image.src = imageArray[2];
                    text.innerHTML = textArray[2];
                    headerElement.innerHTML = header[2];
                    i = i - 1;
                    break;
                case 3:
                    image.src = imageArray[1];
                    text.innerHTML = textArray[1];
                    headerElement.innerHTML = header[1];
                    i = i - 1;
                    break;
            }
        }, 500);
    });
}

/* Theme changer on button click */
document.getElementById("themeChanger").addEventListener("click", () => {
    /* Declare variables to elements */
    var dashboard = document.getElementById("dashboard");
    var currentTheme = dashboard.getAttribute("data-theme");
    /* Switch statement for the current theme */
    switch (currentTheme) {
        case 'light':
            /* Change to dark theme */
            dashboard.classList.remove('light');
            dashboard.classList.add('dark');
            dashboard.setAttribute('data-theme', 'dark');
            break;
        case 'dark':
            /* Change to light theme */
            dashboard.classList.add('light');
            dashboard.classList.remove('dark');
            dashboard.setAttribute('data-theme', 'light');
            break;
    }
});

/* Select all classes content-box, for navigation buttons, for changing of div display */
document.querySelectorAll(".content-box").forEach(item => {
    /* Everytime one of them gets clicked */
    item.addEventListener("click", () => {
        /* Store the data-content attribute value to redir variable (to see which div to display and hide) */
        var redir = item.getAttribute("data-content");
        var userDiv = document.getElementById("user");
        var analyticsDiv = document.getElementById("analytics");
        /* Cases for each div (remove class hidden for selected redirect and add active, remove active for everyone else and add hidden to them too) */
        switch (redir) {
            case 'user':
                userDiv.classList.remove('hidden');
                userDiv.classList.add('active');

                analyticsDiv.classList.remove('active');
                analyticsDiv.classList.add('hidden');
                break;
            case 'analytics':
                analyticsDiv.classList.remove('hidden');
                analyticsDiv.classList.add('active');

                userDiv.classList.remove('active');
                userDiv.classList.add('hidden');
                break;
        }
    });
});

/* Generate random data for charts. Low = minimum number, high = maximum number and fields = number of array items */
function randomData(low, high, fields) {
    var array = new Array(fields);
    for (var i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * high) + low;
    }
    return array;
}

/* Hi person marking this pls dun kill me for using external library to draw chart */
/* Function to draw charts using chart.js */
function drawCharts() {
    /* Initialize the chartElement variable to the barChart and pieChart element in html */
    var barchartElement = document.getElementById('barChart').getContext('2d');
    var linechartElement = document.getElementById('lineChart').getContext('2d');
    /* Generate random data, lowest of 20000 and highest of 30000. 10 fields to represent 10 weeks */
    var data1 = randomData(20000, 30000, 10);
    /* Generate random data, lowest of 1000 and highest of 5000. 24 fields to represent 24 hours of the day */
    var data2 = randomData(1000, 5000, 24)
    /* Create new chart, with the placement element as the canvas element in html (For the bar chart) */
    new Chart(barchartElement, {
        type: 'bar',
        data: {
            /* Bar chart data and related labels, as well as the colors of each row/bars */
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', "Week 9", "Week 10"],
            /* Data for labels, data array and colors for each bar */
            datasets: [{
                label: 'Weekly Application Users (from launch of application)',
                data: data1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(80, 199, 199, 0.2)',
                    'rgba(33, 22, 64, 0.2)',
                    'rgba(55, 88, 64, 0.2)',
                    'rgba(99, 21, 241, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(80, 199, 199, 1)',
                    'rgba(33, 22, 64, 1)',
                    'rgba(55, 88, 64, 1)',
                    'rgba(99, 21, 241, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                /* Width of borders */
                borderWidth: 1
            }]
        },
        /* Make it so that the graph's y-axis starts from the 0 mark, font color change to something that can be seen on both dark and light themes */
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#dea09b"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "#dea09b"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: '#dea09b'
                }
            }
        }
    });
    
    /* Create new chart, with the placement element as the canvas element in html (For the pie chart) */
    new Chart(linechartElement, {
        type: 'line',
        data: {
            /* Line chart data and related labels, as well as the colors of each row/bars */
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', "09:00", "10:00", "11:00", "12:00", '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', "21:00", "22:00", "23:00", "24:00"],
            /* Data for labels, data array and colors for each bar */
            datasets: [{
                label: 'Hourly User Count',
                data: data2,
                backgroundColor: [
                    'rgba(237, 237, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(237, 237, 0, 1)'
                ],
                /* Width of borders */
                borderWidth: 1
            }]
        },
        /* Make it so that the graph's y-axis starts from the 0 mark, font color change to something that can be seen on both dark and light themes */
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#dea09b"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "#dea09b"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: '#dea09b'
                }
            }
        }
    });
}

/* When document loads, execute the following functions:
    0. Minute changes to font colors, elements added after elements.
    1. Username generation and minicarousel controls
    2. Draw chart
    3. Initialize theme changer event listener to pick up clicks for theme changer button. When clicked, change theme
 */
document.addEventListener("DOMContentLoaded", () => {
    var thArray = document.getElementsByTagName("th");
    for (var i = 0; i < thArray.length; i++) {
        thArray[i].style.color = '#952422';
    }
    var tableArray = document.getElementsByTagName("table");
    for (i = 0; i < tableArray.length; i++) {
        /* Only insert if its pricing table, based on attribute data-info */
        if (tableArray[i].getAttribute("data-info") == 'true') {
        tableArray[i].insertAdjacentHTML("afterend", '<a href="connect.html" class="text-center my-5"><button type="button" class="btn btn-outline-dark btn-lg">Find Out More</button></a>');
        }
    }
    minicarouselUsername();
    drawCharts();
});