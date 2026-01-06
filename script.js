function next(step) {
  document.querySelectorAll(".step").forEach(s => {
    s.style.display = "none";
  });
  document.getElementById("step" + step).style.display = "block";
}

function finish() {
  document.getElementById("msg").innerText =
    "Data imported successfully";
}
