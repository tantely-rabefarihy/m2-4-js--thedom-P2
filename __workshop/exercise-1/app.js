// Preset values

//------- Exercise 1.1 - Set up the track--------------------
const FROGS = 3;
const main = document.querySelector("main");
let ol = document.querySelector("ol");

for (let count = 1; count <= FROGS; count++) {
  // create a lane (<li>)
  let lane = document.createElement("li");
  // give lane an id
  lane.id = "lane-" + count;

  // create a <span>
  let span = document.createElement("span");

  // add the lane number to the span
  span.innerHTML = count;

  // append the span to the lane
  lane.appendChild(span);
  // append the lane to the track
  ol.appendChild(lane);
}

//------- Exercise 1.2 - Call in the frogs!--------------------

// declare a variable called racers and assign a value of: empty array
let racers = [];

// write a for loop

let frogs = function () {
  for (let i = 0; i < 3; i++) {
    // check that frog is not already in the array with includes()
    racers.push(frogStable[i]);
  }
};

frogs();

// push a frog from frogstable into racers array

// console.log racers ;

// ------------ Exercise 1.3 - Line 'em up!------------

// assigning each frog to a lane

let lanes = document.querySelectorAll("li");

racers.forEach(function (racer, index) {
  //   return `${item.name} ${item.number}`;
  const currentFrog = document.createElement("span");
  currentFrog.style.backgroundColor = racer.color;
  currentFrog.innerText = `${racer.name} ${racer.number}`;
  document.getElementById("lane-" + (index + 1)).appendChild(currentFrog);
});

// ------------ Exercise 1.4 - Add styling------------

racers.forEach(function (racer, index) {
  // creating new span
  const nameSpan = document.createElement("span");
  //   adding a new span to receive frog name
  document.getElementById("lane-" + (index + 1)).appendChild(nameSpan);
  // adding frog class to second child

  const frogClass = document.getElementById("lane-" + (index + 1))
    .firstElementChild.nextElementSibling;

  frogClass.classList.add("frog");
  // removing the frog s name from the previous child element
  frogClass.textContent = `${racer.number}`;
  nameSpan.textContent = `${racer.name}`;
  nameSpan.classList.add("frog-name");

  // ------------ Exercise 1.5 - track progress------------
  racers[index].progress = 0;
  racers[index].lane = index + 1;
});

//-------- Exercise 1.6 - Make 'em hop! --------

const track = document.getElementById("track");

function racingFrog(racer) {
  const trackWidth = track.offsetWidth;

  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress += hopLength;

    console.log(racer.name, " is at ", racer.progress);

    if (racer.progress >= 100) {
      racers.progress = 100;
      console.log(racer.name, " has finished!");
      clearInterval(hop);
    }

    document.querySelector(
      `#lane-${racer.lane} .frog`
    ).style.left = `${racer.progress}%`;
  }, Math.random() * 1000);
}

racers.forEach(function (racer) {
  racingFrog(racer);
});
