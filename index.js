const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.getElementById("pause");
const circle = document.querySelector("circle");
const permiter = circle.getAttribute("r") * Math.PI * 2;
circle.setAttribute("stroke-dasharray", permiter);
let totalDuration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(duration) {
    totalDuration = duration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (permiter * timeRemaining) / totalDuration - permiter
    );
  },
  onComplete() {},
});
