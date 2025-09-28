function showSurprise() {
  const card = document.getElementById("card");
  card.innerHTML = `
    <div class="cute-img">🎁💖</div>
    <h2>Tadaa~ here’s your surprise!</h2>
    <p>You’re the most special person in my world 🐰✨</p>
  `;
}

function sayNo() {
  const card = document.getElementById("card");
  card.innerHTML = `
    <div class="cute-img">🙈💞</div>
    <h2>Hehe... no escape!</h2>
    <p>I tricked you 👀 You still get the surprise 🎉💖</p>
    <div class="cute-img">🎁🐱✨</div>
  `;
}
