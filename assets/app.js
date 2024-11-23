document.addEventListener("DOMContentLoaded", function () {
    // Select the buttons and the content elements
    const dailyButton = document.querySelector(".daily");
    const weeklyButton = document.querySelector(".weekly");
    const monthlyButton = document.querySelector(".monthly");
  
    // Create an object with the hours data for daily, weekly, and monthly
    const data = {
      work: {
        day: { current: "5hrs", last: "7hrs" },
        week: { current: "32hrs", last: "36hrs" },
        month: { current: "103hrs", last: "128hrs" }
      },
      play: {
        day: { current: "1hr", last: "2hrs" },
        week: { current: "10hrs", last: "8hrs" },
        month: { current: "23hrs", last: "29hrs" }
      },
      study: {
        day: { current: "0hrs", last: "1hr" },
        week: { current: "4hrs", last: "7hrs" },
        month: { current: "13hrs", last: "19hrs" }
      },
      exercise: {
        day: { current: "1hr", last: "1hr" },
        week: { current: "4hrs", last: "5hrs" },
        month: { current: "11hrs", last: "18hrs" }
      },
      social: {
        day: { current: "1hr", last: "3hrs" },
        week: { current: "5hrs", last: "10hrs" },
        month: { current: "21hrs", last: "23hrs" }
      },
      selfCare: {
        day: { current: "0hrs", last: "1hr" },
        week: { current: "2hrs", last: "2hrs" },
        month: { current: "7hrs", last: "11hrs" }
      }
    };
  
    // Select all the elements that will be updated
    const workContent = document.querySelector(".box2 .contentHeading");
    const playContent = document.querySelector(".box3 .contentHeading");
    const studyContent = document.querySelector(".box4 .contentHeading");
    const exerciseContent = document.querySelector(".box5 .contentHeading");
    const socialContent = document.querySelector(".box6 .contentHeading");
    const selfCareContent = document.querySelector(".box7 .contentHeading");
  
    // Select all the "lastDuration" elements that need to be updated
    const workLast = document.querySelector(".box2 .lastDuration");
    const playLast = document.querySelector(".box3 .lastDuration");
    const studyLast = document.querySelector(".box4 .lastDuration");
    const exerciseLast = document.querySelector(".box5 .lastDuration");
    const socialLast = document.querySelector(".box6 .lastDuration");
    const selfCareLast = document.querySelector(".box7 .lastDuration");
  
    // Function to update the displayed hours and last week's hours
    function updateContent(timePeriod) {
      workContent.innerHTML = data.work[timePeriod].current;
      playContent.innerHTML = data.play[timePeriod].current;
      studyContent.innerHTML = data.study[timePeriod].current;
      exerciseContent.innerHTML = data.exercise[timePeriod].current;
      socialContent.innerHTML = data.social[timePeriod].current;
      selfCareContent.innerHTML = data.selfCare[timePeriod].current;
  
      // Update the last week's time for each activity
      updateLastWeek(timePeriod);
    }
  
    // Function to update the last week's time for each activity
    function updateLastWeek(timePeriod) {
      workLast.innerHTML = `Last ${timePeriod} - ${data.work[timePeriod].last}`;
      console.log(data.work[timePeriod].last)
      playLast.innerHTML = `Last ${timePeriod} - ${data.play[timePeriod].last}`;
      studyLast.innerHTML = `Last ${timePeriod} - ${data.study[timePeriod].last}`;
      exerciseLast.innerHTML = `Last ${timePeriod} - ${data.exercise[timePeriod].last}`;
      socialLast.innerHTML = `Last ${timePeriod} - ${data.social[timePeriod].last}`;
      selfCareLast.innerHTML = `Last ${timePeriod} - ${data.selfCare[timePeriod].last}`;
    }
  
    // Add event listeners for daily, weekly, and monthly buttons
    dailyButton.addEventListener("click", function () {
      updateContent("day");
    });
  
    weeklyButton.addEventListener("click", function () {
      updateContent("week");
    });
  
    monthlyButton.addEventListener("click", function () {
      updateContent("month");
    });
  
    // Set default to daily
    updateContent("daily");
  });
  