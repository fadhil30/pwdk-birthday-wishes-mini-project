function showBirthdayWish() {
  const message = document.getElementById("wish-message");
  const opening = document.getElementById("wish-opening");
  const audio = document.getElementById("birthday-audio");
  message,
    (innerHtml =
      "Happy birthday Purwadhika! Wishing you another amazing year of growth, success, and inspiration. May you continue to transform lives and shape futures through education and innovation. Here’s to more milestones and achievements ahead! 🥂🌟");
  message.classList.add("active");
  opening.classList.add("inactive");
  audio.play();
}
