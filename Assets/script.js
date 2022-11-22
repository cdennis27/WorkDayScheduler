// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  var shoppingListEl = $('.container');
  //var saveButton = $('.saveBtn');
  //var dayHour = saveBtn.parent;
  //var dayHour = rootEl.children(saveButton).parent();
  const dateT = dayjs();
  //function () {
  //  dateT.diff('2018-06-05', 'hour', true)
  //}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  function saveItem(event) {
    event.preventDefault();
    // convert button we pressed (`event.target`) to a jQuery DOM object
    //var btnClicked = $(event.target);
    //var dayHour = btnClicked.parent('div');
    //var idName = $(dayHour).attr("id");
    //console.log(idName);
    //event delegation
    var btnClicked = $(event.currentTarget).parent('div').attr('id');
    console.log(btnClicked);
    var words = $(event.currentTarget).prev('textarea').val();
    console.log(words);
    localStorage.setItem(btnClicked, JSON.stringify(words));



    //debugger;
  }

  
  function renderItems() {
    

    for (i = 18; i > 7; i--) {
      var x = ("hour-" + i)
      var toDo = JSON.parse(localStorage.getItem(x));
      var iden = ("#" + x);
      console.log(iden);
      console.log(toDo);
      console.log(x);
      if (toDo != null) {
               
        $(iden).children("textarea").text(toDo);
      }
    }
    
  }
   
  shoppingListEl.on('click', '.saveBtn', saveItem);
  renderItems();

  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('[Today is: ] MMM D, YYYY. [Time now: ] hh : mm a.'));


  var targetHour = (8);
  var hourA = 0;
  var hours = dayjs().format('HH');
  var hoursList = (hours - targetHour);
  //$('#currentDay').text(hoursList);

  // add classes to document based on time of the day page is loaded
  var rows = document.querySelectorAll('.row')
  //console.log(rows);
  rows.forEach(e => {
    var hourNow = (e.dataset.numbe);
    //  console.log(hours);
    //  console.log(hourNow);
    //  console.log("Break");
    if (hourNow == hours) {
      e.classList.add("present")
    } else if (hourNow < hours) {
      e.classList.add("past")
    } else if (hourNow > hours) {
      e.classList.add("future")
    }
  })

});

