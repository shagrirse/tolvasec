/* Country h1 function adder */
function addCountries() {
    /* Declare country array */
    ctryArray = ["Singapore", "Canada", "Germany", "South Korea", "United Kingdom", "United States"];
    var i = 0;
    /* Add the country header after each image in the HTML code */
    document.querySelectorAll(".card-img-top").forEach(img => {
        img.insertAdjacentHTML("afterend", `<h3 class="mt-5 card-title font-weight-bold text-md-center">${ctryArray[i]}</h3>`);
        i++
    });
}
/* Once DOMContent is loaded, execute functions */
document.addEventListener("DOMContentLoaded", () => {
    addCountries();
});

function mail() {
    var name = document.getElementById('fname').value + " " + document.getElementById('lname').value;
    console.log(name)
    var body_txt = `
Name: ${name}
Comapny Name: ${document.getElementById('cname').value}`;
    document.location.href = "mailto:danzel.tan@gmail.com?subject=" + encodeURIComponent("Inquiry") + "&body=" + encodeURIComponent(body_txt)
}
