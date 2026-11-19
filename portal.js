
const particleContainer = document.getElementById("particles");

if (particleContainer) {
  for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (8 + Math.random() * 15) + "s";
    particle.style.animationDelay = (-Math.random() * 20) + "s";
    particle.style.opacity = Math.random() * 0.8 + 0.2;

    particleContainer.appendChild(particle);
  }
}

function updateClock() {
  const clock = document.getElementById("clock");

  if (clock) {
    clock.textContent = new Date().toLocaleTimeString("en-GB", {
      hour12: false
    });
  }
}

function updateYear() {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

updateClock();
updateYear();

setInterval(updateClock, 1000);

