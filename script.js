function showSurprise() {
  const card = document.getElementById("card");
  card.innerHTML = `
    <div class="cute-img">💌🐻🌸</div>
    <h2>A Little Letter For You...</h2>
    <p style="text-align: left; line-height: 1.6; font-size: 1rem; color: #444; padding: 10px; border-left: 3px solid #ff4d88; background: #fff0f5; border-radius: 8px;">
      Hey you 💌,<br><br>
      I just wanted to take a moment to write you something simple but true — you make my days brighter in ways you probably don’t even realize. 
      Even the tiniest things about you, like the way you laugh, or how you say certain words, somehow stay with me and keep replaying in my head.<br><br>
      Sometimes I catch myself smiling out of nowhere, and it’s always because of you. 
      It feels like my heart has found its favorite little melody, and it just keeps humming whenever I think about you.<br><br>
      So… thank you for being you. For existing. For crossing paths with me. 
      I don’t think I’ll ever get tired of that.<br><br>
      Yours in all the cutest ways,<br>
      <b>Sai 🐻🌸</b>
    </p>
  `;
}

function sayNo() {
  const card = document.getElementById("card");
  card.innerHTML = `
    <div class="cute-img">😼💕</div>
    <h2>Oops... too late!</h2>
    <p style="line-height: 1.6; font-size: 1rem; color: #444; padding: 10px; background: #fffbea; border-radius: 8px;">
      You thought you could escape? Hehe, not possible.<br><br>
      My heart already chose you 💖 so no button can change that.  
      Guess what? You still get the letter anyway ✨🐰
    </p>
    <button class="btn yes" onclick="showSurprise()">Open the Letter 💌</button>
  `;
}
