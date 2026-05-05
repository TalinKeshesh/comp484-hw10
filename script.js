$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.brine-button').click(clickedBrineButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Picklesss", weight:2, happiness:8, brine:3, comment: "I'm ready to roll!"};
  
    function clickedTreatButton() {
      pet_info.happiness += 1;
      pet_info.weight += 1;
      pet_info.comment = "Yum! That hit the spot.",
      playButtonSound();
      updatePetMoodBox("mood-normal");
      updatePetImage("normalPickle.png");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      pet_info.happiness += 1;
      pet_info.weight -= 1;
      pet_info.comment = "Wheee! Pickle power!";
      playButtonSound();
      updatePetMoodBox("mood-happy");
      updatePetImage("happyPickle.png");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      pet_info.happiness -= 1;
      pet_info.weight -= 1;
      pet_info.comment = "I am one tired pickle...";
      playButtonSound();
      updatePetMoodBox("mood-sad");
      updatePetImage("sadPickle.png");
      checkAndUpdatePetInfoInHtml();
    }

    function clickedBrineButton() {
      pet_info.brine += 1;
      pet_info.happiness += 1;
      pet_info.comment = "Ahhh, extra briny and happy.";
      playButtonSound();
      updatePetMoodBox("mood-briny");
      updatePetImage("brinyPickle.png");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }

      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      document.querySelector('.name').textContent = pet_info.name;
      document.querySelector('.weight').textContent = pet_info.weight;
      document.querySelector('.happiness').textContent = pet_info.happiness;
      document.querySelector('.brine').textContent = pet_info.brine;
      document.querySelector('.comment').textContent = pet_info.comment;
    }


    //Soooo basically .removeClass() clears the previous mood styling, and .show()
    // displays the comment box after the user interacts with a button

    //After a button is clicked, .removeClass() clears the previous mood styling
    // from the bottom comment box so the new button reaction can be applied correctly.
    // Then .show() displays the comment box so the updated text and color appear on the page
    function showPetComment(message, moodClass) {
      // Put the pet's message into the span without using .text()
      document.querySelector('.comment').innerHTML = message;

      // .removeClass() removes old mood classes so only one mood style stays active
      $('.pet-comment-box').removeClass('mood-normal mood-happy mood-sad mood-briny');

      // Add the new mood class with plain JavaScript instead of .addClass()
      document.querySelector('.pet-comment-box').classList.add(moodClass);

      // .show() makes the hidden comment box appear after a button press
      $('.pet-comment-box').show();
    }



    function updatePetMoodBox(moodClass) {
      // .removeClass() removes old mood classes so only one mood style stays active
      $('.pet-comment-box').removeClass('mood-normal mood-happy mood-sad mood-briny');
      document.querySelector('.pet-comment-box').classList.add(moodClass);
      // .show() makes the hidden comment box appear after a button press
      $('.pet-comment-box').show();
    }


function updatePetImage(imageFile) {
  $('.pet-image').attr('src', 'images/' + imageFile);
}

function playButtonSound() {
  const sound = document.getElementById('button-sound');
  sound.currentTime = 0;
  sound.play();
}

//Chrome DevTools Message Logging Examples

// Log Info example
function logInfoExample() {
  console.info("INFO: The pickle pet app loaded a normal information message.");
}

// Log Warning example
function logWarningExample() {
  console.warn("WARNING: The pickle pet is getting too playful!");
}

// Log Error example
function logErrorExample() {
  console.error("ERROR: Something went wrong with the pickle pet example.");
}

// Log Table example
function logTableExample() {
  console.table([
    {
      action: "Treat",
      happinessChange: "+1",
      weightChange: "+1",
      brineChange: "0"
    },
    {
      action: "Play",
      happinessChange: "+1",
      weightChange: "-1",
      brineChange: "0"
    },
    {
      action: "Exercise",
      happinessChange: "-1",
      weightChange: "-1",
      brineChange: "0"
    },
    {
      action: "Brine",
      happinessChange: "+1",
      weightChange: "0",
      brineChange: "+1"
    }
  ]);
}

// Log Group example
function logGroupExample() {
  console.group("Pickle Pet Status Group");
  console.log("Name: " + pet_info.name);
  console.log("Weight: " + pet_info.weight);
  console.log("Happiness: " + pet_info.happiness);
  console.log("Brine Level: " + pet_info.brine);
  console.groupEnd();
}

// Log Custom example
function logCustomExample() {
  console.log(
    "%cCustom Pickle Message: DevTools can style console messages!",
    "color: green; font-size: 18px; font-weight: bold;"
  );
}

// Connect message logging buttons to their functions
document.querySelector(".log-info-button").addEventListener("click", logInfoExample);
document.querySelector(".log-warning-button").addEventListener("click", logWarningExample);
document.querySelector(".log-error-button").addEventListener("click", logErrorExample);
document.querySelector(".log-table-button").addEventListener("click", logTableExample);
document.querySelector(".log-group-button").addEventListener("click", logGroupExample);
document.querySelector(".log-custom-button").addEventListener("click", logCustomExample);

// Browser Logged Message Examples

// This causes a 404 network error by asking the browser to load an image that does not exist.
function cause404NetworkError() {
  const missingImage = new Image();
  missingImage.src = "images/this-file-does-not-exist.png";
  document.body.appendChild(missingImage);

  console.log("A missing image was requested. Check the Console or Network tab for the 404 error.");
}

// This causes a TypeError by trying to use a method on a value that does not have that method.
function causeTypeError() {
  let pickleName = null;

  // This line causes: TypeError: Cannot read properties of null
  pickleName.toUpperCase();
}

// This causes a browser violation by running a slow click handler.
// Chrome may show a [Violation] message if the function blocks the page for long enough.
function causeViolation() {
  const startTime = Date.now();

  while (Date.now() - startTime < 1000) {
    // Intentionally block the browser for 1 second
  }

  console.log("Finished the intentionally slow function. Look for a [Violation] message in DevTools.");
}

// Connect browser message buttons to their functions
document.querySelector(".cause-404-button").addEventListener("click", cause404NetworkError);
document.querySelector(".cause-typeerror-button").addEventListener("click", causeTypeError);
document.querySelector(".cause-violation-button").addEventListener("click", causeViolation);

// Chrome DevTools Filter Message Examples

// These messages are created so we can practice filtering in the Console.
function createFilterTestMessages() {
  console.log("USER MESSAGE: Pickle pet normal log message");
  console.info("INFO FILTER: Pickle pet information message");
  console.warn("WARNING FILTER: Pickle pet warning message");
  console.error("ERROR FILTER: Pickle pet error message");

  console.log("TEXT FILTER: pickle-brine-level");
  console.log("TEXT FILTER: pickle-happiness-level");

  console.log("REGEX FILTER: pickle-123");
  console.log("REGEX FILTER: pickle-456");
  console.log("REGEX FILTER: cucumber-abc");
}

// Connect the filter test button to the function
document
  .querySelector(".filter-test-button")
  .addEventListener("click", createFilterTestMessages);

  //Sources Debugging Practice

// This function intentionally has a bug.
// The input value is read as text, so "5" + 1 becomes "51" instead of 6.
function reproduceBug() {
  const userInput = document.querySelector("#bug-number").value;
  const result = userInput + 1;

  document.querySelector(".bug-result").textContent = result;

  console.log("Bug reproduced. Expected number + 1, but got:", result);
}

// Connect the bug button to the buggy function
document
  .querySelector(".bug-button")
  .addEventListener("click", reproduceBug);

  // Inspecting Values in DevTools

// This function is for practicing the Scope Pane, Watch Expressions, and Console.
function inspectVariableValues() {
  const rawInput = document.querySelector("#inspect-number").value;
  const convertedNumber = Number(rawInput);
  const doubledNumber = convertedNumber * 2;
  const petName = pet_info.name;
  const petMood = pet_info.comment;

  document.querySelector(".inspect-result").textContent =
    petName + " doubled your number to " + doubledNumber;

  console.log("Inspect practice rawInput:", rawInput);
  console.log("Inspect practice convertedNumber:", convertedNumber);
  console.log("Inspect practice doubledNumber:", doubledNumber);
  console.log("Inspect practice petName:", petName);
  console.log("Inspect practice petMood:", petMood);
}

// Connect the inspect button to the function
document
  .querySelector(".inspect-button")
  .addEventListener("click", inspectVariableValues);

  // Apply a Fix

// This function fixes the earlier bug.
// Number() converts the input from text into a real number before adding 1.
function runFixedCode() {
  const userInput = document.querySelector("#fixed-number").value;
  const convertedInput = Number(userInput);
  const result = convertedInput + 1;

  document.querySelector(".fixed-result").textContent = result;

  console.log("Fixed code ran successfully.");
  console.log("Original input:", userInput);
  console.log("Converted input:", convertedInput);
  console.log("Correct result:", result);
}

// Connect the fixed button to the function
document
  .querySelector(".fixed-button")
  .addEventListener("click", runFixedCode);