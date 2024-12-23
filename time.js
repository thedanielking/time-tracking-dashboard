let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


function activateClickedButton(btn){
    buttons.forEach(b =>{
        b.classList.remove("active");
    })
    btn.classList.add("active");
}

const renderCards = (clickedOption) =>{
  const activityTracker = document.querySelector
  (".activity_tracker");


  const clearDivs = document.querySelectorAll(".card");
  clearDivs.forEach(item =>{
    activityTracker.removeChild(item);
  })


    // activityTracker.remove(clearDivs);
    const calcTimeFrame = (option) =>{
        if(option === "daily"){
            return "Yesterday";
        }else if(option === "weekly"){
            return "Last Week";
        }else if(option === "monthly"){
            return "Last Month";
        }
    }
    

   data.forEach(activity =>{
        const name = activity.title;
        const activityClass = name.toLowerCase().replace(' ', '-');
        const timeframeData = activity.timeframes[clickedOption];
        const previousTimeFrame = calcTimeFrame(clickedOption);

        const div = document.createElement("div");
        div.classList.add("card");
        const stringToInject = `<div class="card_base ${activityClass}">
        <img src="./images/icon-${activityClass}.svg">
      </div>

      <div class="card_top padding">

        <div class="card_top_header">
          <p>${name}</p>
          <p class="dots">...</p>
        </div>

        <div class="card_top_bottom">
          <h2>${timeframeData.current}hrs</h2>
          <div class="previous">
            <p>${previousTimeFrame}</p>
            <p>-</p>
            <p>${timeframeData.previous}hrs</p>
          </div>
        </div>

      </div>`

      div.innerHTML = stringToInject;
      activityTracker.append(div);

    })
}







const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        activateClickedButton(btn) // activates the button that is being active.
        const clickedOption = btn.dataset.option; //gets the data-option given in the html code.
        renderCards(clickedOption);
    })
})


















