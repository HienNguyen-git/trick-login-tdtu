const labels = document.querySelectorAll("label");

labels.forEach((el) =>
  el.innerHTML = el.innerHTML
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay: ${index * 0.04}s;">${letter}</span>`
    )
    .join("")
);
