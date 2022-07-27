const code = `[
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
  ]`

let jsondata = JSON.parse(code);
console.log(jsondata);

const Daily = document.getElementById("day");
const Weekly = document.getElementById("week");
const Monthly = document.getElementById("month");

const Current = document.getElementsByClassName("current");
const Previous = document.getElementsByClassName("previous");



Daily.addEventListener("click", function(){
    for(let i=0;i<Current.length;i++){
        Current[i].innerText = `${jsondata[i].timeframes.daily.current}hrs`;
        Previous[i].innerText = `${jsondata[i].timeframes.daily.previous}`;
    }
})

Weekly.addEventListener("click", function(){
    for(let i=0;i<Current.length;i++){
        Current[i].innerText = `${jsondata[i].timeframes.weekly.current}hrs`;
        Previous[i].innerText = `${jsondata[i].timeframes.weekly.previous}`;
    }
})

Monthly.addEventListener("click", function(){
    for(let i=0;i<Current.length;i++){
        Current[i].innerText = `${jsondata[i].timeframes.monthly.current}hrs`;
        Previous[i].innerText = `${jsondata[i].timeframes.monthly.previous}`;
    }
})