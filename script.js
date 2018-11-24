var page = document.getElementsByName("body");
var container = document.getElementById("container");
var containerHeight = (container.style.height = "620px");
var floor = document.getElementById("floor");
var start = document.getElementById("start");
var bucket = document.getElementById("bucket");
var over = document.getElementById("gameOver");
over.setAttribute("style", "display: none");
var h2 = over.children[2];

var dirLeft = document.getElementsByClassName("directionLeft");
var dirRight = document.getElementsByClassName("directionRight");
var point = document.getElementById("point").children[0];
var meet = document.getElementById("meetingPoint");
var y1 = parseInt(containerHeight) * 0.77;
var y2 = parseInt(containerHeight) * 0.77 + 83;
var lives = 3;
var countPoint = 0;

/*WATER */
var water1 = document.getElementById("waterdrop1");
water1.setAttribute("style", "display: none");
var water2 = document.getElementById("waterdrop2");
water2.setAttribute("style", "display: none");
var water3 = document.getElementById("waterdrop3");
water3.setAttribute("style", "display: none");
var water4 = document.getElementById("waterdrop4");
water4.setAttribute("style", "display: none");

var waterSplash1 = document.getElementById("waterSplash1");
waterSplash1.setAttribute("style", "display: none");
var waterSplash2 = document.getElementById("waterSplash2");
waterSplash2.setAttribute("style", "display: none");
var waterSplash3 = document.getElementById("waterSplash3");
waterSplash3.setAttribute("style", "display: none");
var waterSplash4 = document.getElementById("waterSplash4");
waterSplash4.setAttribute("style", "display: none");

/*WATER END */

/*HEARTS*/
var heart1 = document.getElementById("heart1");
heart1.setAttribute("style", "display: ");
var heart2 = document.getElementById("heart2");
heart2.setAttribute("style", "display: ");
var heart3 = document.getElementById("heart3");
heart3.setAttribute("style", "display: ");
var countheart = 3;
/*HEARTS END */

var array = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "]
];


//START PLAYING 
function startPlaying() {
  over.setAttribute("style", "display: none");
  point.innerHTML = 0;
  lives = 3;
  start.style.display = "none";
  waterDripping(array, water3, 800, 1, waterSplash3);
  waterDripping(array, water2, 600, 1, waterSplash2);
  waterDripping(array, water4, 700, 1, waterSplash4);
  waterDripping(array, water1, 500, 1, waterSplash1);
}

//PLAYING
function waterDripping(array, water, second, i, waterSplash) {
  if (i <= array.length * 3 && lives > 0) {
    var timeout = setTimeout(function() {
      waterSplash.setAttribute("style", "display: none");
      water.setAttribute("style", "display: ");
      water.setAttribute("style", "top: " + 45 * i + "px;");
      i++;
      if (water.style.top == "495px") {
        if (waterCaught(water, bucket) == true) {
          water.setAttribute("style", "display: none");
          point.innerHTML = Number(point.innerHTML) + 1;
          i = 1;
          countPoint++;
        } else {
          water.setAttribute("style", "display: none");
          waterSplash.setAttribute("style", "display: ");
          i = 1;
          lives -= 1;
          document
            .getElementById("heart" + countheart)
            .setAttribute("style", "display:none");
          countheart--;
        }
      }
      waterDripping(array, water, second, i, waterSplash);
    }, second);
  } else if (lives == 0) {
    //GAME OVER
    clearTimeout(timeout);
    over.setAttribute("style", "display: ");
    originPosition(water, waterSplash);
    h2.innerHTML = point.innerHTML;
  }
}

//AFTER GAMEOVER
function originPosition(water, waterSplash) {
  water.setAttribute("style", "display: none");
  waterSplash.setAttribute("style", "display: none");
  heart1.setAttribute("style", "display: ");
  heart2.setAttribute("style", "display: ");
  heart3.setAttribute("style", "display: ");
  countheart = 3;
}

//WHEN THE WATER CAUGHT
function waterCaught(water, bucket) {
  var isAtMeetingPoint = false;
  water1.style.left = "35px";
  water2.style.left = "165px";
  water3.style.left = "425px";
  water4.style.left = "555px";
  if (
    parseInt(water.style.top) >= y1 &&
    parseInt(water.style.top) <= y2 &&
    parseInt(bucket.style.left) + 110 >= parseInt(water.style.left) + 40 &&
    parseInt(bucket.style.left) <= parseInt(water.style.left)
  ) {
    isAtMeetingPoint = true;
  }
  // console.log(parseInt(bucket.style.left) + 110 >= parseInt(water.style.left) + 40);
  return isAtMeetingPoint;
}

//MOVING BUCKET
var col = 0;
function toTheRight(array) {
  if (30 * col <= 520) col++;
  bucket.setAttribute("style", "left: " + 30 * col + "px");
}

function toTheLeft(array) {
  if (30 * col >= 30) col--;
  bucket.setAttribute("style", "left: " + 30 * col + "px");
}

