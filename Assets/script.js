
$(document).ready(function () {

  var shoppingListEl = $('.container');
  const dateT = dayjs();
  var today = dayjs();
  var hours = dayjs().format('HH');
  var rows = document.querySelectorAll('.row')
  
  $('#currentDay').text(today.format('[Today is: ] MMM D, YYYY. [Time now: ] hh : mm a.'));
  
  shoppingListEl.on('click', '.saveBtn', saveItem);
  renderItems();

  rows.forEach(event => {
    
    var hourNow = (event.dataset.numbe);
    if (hourNow == hours) {
      event.classList.add("present")
    } else if (hourNow < hours) {
      event.classList.add("past")
    } else if (hourNow > hours) {
      event.classList.add("future")
    }
  })

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

  function saveItem(event) {
    event.preventDefault();

    var btnClicked = $(event.currentTarget).parent('div').attr('id');
    console.log(btnClicked);
    var words = $(event.currentTarget).prev('textarea').val();
    console.log(words);
    localStorage.setItem(btnClicked, JSON.stringify(words));
  }

});

