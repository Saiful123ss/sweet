function showSurprise() {
  const card = document.getElementById("card");
  card.innerHTML = `
    <div class="cute-img">💌🐻🌸</div>
    <h2>I wrote you something Eli...</h2>
    <p style="text-align: left; line-height: 1.7; font-size: 1rem; color: #444; padding: 12px; border-left: 3px solid #ff4d88; background: #fff0f5; border-radius: 8px;">
      Hey you 💌,<br><br>
      I don’t really know how to make this fancy, so I’ll just say it the way it is.  
      You make my days lighter in a way I can’t explain — like even the smallest things about you stick with me.  
      The way you laugh, the little words you say… they keep replaying in my head and it makes me smile out of nowhere.<br><br>
      Honestly, it feels like my heart found its favorite song, and it just hums whenever you pop into my mind.  
      And that’s kinda all the time 🙈<br><br>
      So yeah… thanks for being you. For existing. For somehow crossing paths with me.  
      I don’t think I’ll ever get tired of that thought.<br><br>
      Yours (in all the cute, clingy ways),<br>
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
