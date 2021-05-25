"use strict";
/* Class question */
class Question {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

/* Function to initialize questions into an array and return it to caller */
function initQuestion() {
    /* Question array */
    var q = ["This is a Debian derived Linux distribution managed and funded by the Offensive Security Ltd, designed for digital forensics and penetration testing. Which is this very famous OS majorly developed for Hackers and software testers?", "What is DDoS?", "The word X is a combination of the words “robot” and “network”. It is a number of Internet-connected devices, each of which is running one or more bots. This can be used to perform DDoS attacks, steal data, send spam. Identify the word X?"];

    /* Answer array */
    var a = ["kalilinux", "distributeddenialofservice", "botnet"];

    /* Make a new array containing the question objects */
    var question = [];
    for (var i = 0; i < q.length; i++) {
        question.push(new Question(q[i], a[i]));
    }
    return question;
}


/* Main function in jquery (pls i hope jquery is accepted in the rubrics ;-;) */
$(function () {
    /* Variable declaration */
    /* Main question slide to the variable qnSlide */
    var qnSlide = $('#slide2')
    /* Initialize userInput as array */
    var userInput = [];
    /* Current qn number */
    var questionNumber = 0;
    /* Number of questions correct start at 0 */
    var correct = 0;
    /* initialize questions to questionsList */
    var questionsList = initQuestion();
    /* When user clicks on start button */
    $('#startQuiz').click(function () {
        /* Make rocket take off */
        $('#rocket').css({"-webkit-transform":"translateY(-500px)"});
        /* Delay transition into the question slide by 2.2s */
        setTimeout(() => {
            $('#slide1').slideUp();
            $('.jumbotron').animate({
                width: "50%",
                height: "auto"
            }, 500);
            qnSlide.prepend(`<div id="qn"><h1>Question ${questionNumber + 1}</h1>
                                <p>${questionsList[questionNumber].question}</p><div>`).delay(500).fadeIn();
            questionNumber++;
        }, 2200);
    });

    /* When user presses the next question button */
    $('#nxtQuestion').click(function () {
        /* Get value of answer field */
        var ans = document.getElementById('answer').value;
        /* If answer is invalid */
        if (ans == undefined || ans == null || ans == '') {
            alert("Please enter in a valid answer!");
            return false;
        }

        /* Push answer to userinput array */
        userInput.push(ans);
        /* Fade out questionslide */
        qnSlide.fadeOut().delay(500);
        /* Delay of 0.5s */
        setTimeout(() => {
            /* Remove question section */
            $('#qn').remove();
            /* If question is last */
            if (questionNumber == 3) {
                /* Calculate score */
                for (var i in userInput) {
                    console.log(typeof(userInput[i]))
                    if (userInput[i].replace(/\s/g, '').toLowerCase() == questionsList[i].answer) {
                        correct++;
                    }
                }
                /* Remove questionbox and replace with score and text as well as button */
                $('#questionBox').remove();
                qnSlide.prepend(`<div id="score" class="text-center"><h1>${correct}/3</h1>`).fadeIn();
                switch (correct) {
                    case 0:
                    case 1:
                        qnSlide.append(`<p class="text-center">You could really use some cybersecurity. Let us help you with that!</p>`).fadeIn();
                        break;
                    case 3:
                    case 2:
                        qnSlide.append(`<p class="text-center">You've done good. However, you can do better with us!</p>`).fadeIn();
                        break;
                }
                qnSlide.append(`<div class="text-center"><a class="btn btn-outline-dark btn-lg" href="#contact" role="button">Contact Our Counsellors</a></div>`)
            }
            /* If its any other question */
            else {
                qnSlide.prepend(`<div id="qn"><h1>Question ${questionNumber + 1}</h1>
                                        <p>${questionsList[questionNumber].question}</p><div>`).fadeIn();
            }
            /* Increment question number */
            questionNumber++;
        }, 500);
    });

    /* Change form button */
    /* Toggle form boolean to identify current form type */
    var toggleForm = true;
    /* Email regex pattern with escape characters */
    var emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    /* Main function to change form type */
    $('#changeForm').click(function () {
        /* Fadeout current form */
        $('#formSession').fadeOut();
        /* Delay the adding of HTML to the form by 500ms, content added based on current type of form by toggleForm boolean value */
        setTimeout(() => {

            switch (toggleForm) {
                case true:
                    $('#formSession').html(`
                        <h1 class="formHeading text-center">Individual Form</h1>
                        <div class="form-group row mt-5">
                            <div class="col-md-6 inputBox">
                                <label for="fname">First Name</label>
                                <input type="text" class="form-control" id="fname" required pattern="^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$">
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="lname">Last Name</label>
                                <input type="text" class="form-control" id="lname" required pattern="^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$">
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="eaddress">Email Address</label>
                                <input type="text" class="form-control" id="eaddress" required pattern="${emailPattern}">
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="pnumber">Phone Number</label>
                                <input type="tel" class="form-control" id="pnumber" pattern="^\\s*(?:\\+?(\\d{1,3}))?([-. (]*(\\d{3})[-. )]*)?((\\d{3})[-. ]*(\\d{2,4})(?:[-.x ]*(\\d+))?)\\s*$">
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-outline-dark" id="btn-submit">Submit</button>
                        </div>`);
                        $('#formSession').fadeIn();
                        toggleForm = false;
                    break;
                case false:
                    $('#formSession').html(`
                        <h1 class="formHeading text-center">Corporate Form</h1>
                        <div class="form-group row mt-5">
                            <div class="col-md-6 inputBox">
                                <label for="fname">First Name</label>
                                <input type="text" class="form-control" id="fname" required pattern="^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$">
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="lname">Last Name</label>
                                <input type="text" class="form-control" id="lname" required pattern="^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$">
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="cname">Company Name</label>
                                <input type="text" class="form-control" id="cname" required pattern="^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$">
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="jtitle">Job Title</label>
                                <input type="text" class="form-control" id="jtitle" required>
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="eaddress">Email Address</label>
                                <input type="text" class="form-control" id="eaddress" required pattern="${emailPattern}">
                            </div>
                            <div class="col-md-6 inputBox">
                                <label for="pnumber">Phone Number</label>
                                <input type="tel" class="form-control" id="pnumber" pattern="^\\s*(?:\\+?(\\d{1,3}))?([-. (]*(\\d{3})[-. )]*)?((\\d{3})[-. ]*(\\d{2,4})(?:[-.x ]*(\\d+))?)\\s*$">
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-outline-dark" id="btn-submit">Submit</button>
                        </div>`);
                        $('#formSession').fadeIn();
                        toggleForm = true;
                    break;
            }
        }, 500);
    });
});
