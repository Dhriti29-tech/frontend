const textarea = document.getElementById("text");
const counter = document.getElementById("counter");
const limit = 100;

counter.textContent = `Characters left: ${limit}`;

textarea.addEventListener("input", () => {
  const entered = textarea.value.length;
  const left = limit - entered;

  if (left >= 0) {
    counter.textContent = `Characters left: ${left}`;
  }

  if (left <= 20 && left > 10) {
    counter.style.color = "orange";
  } else if (left <= 10) {
    counter.style.color = "red";
  } else {
    counter.style.color = "green";
  }

  if (entered >= limit) {
    textarea.value = textarea.value.substring(0, limit);
  }
});
