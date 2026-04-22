function renderWelcome() {
  const el = document.getElementById('welcome');
  el.innerHTML = `
    <div class="welcome">
      <div class="welcome-hero">📚✨🎓</div>
      <h2>
        <span class="lhe" style="display:block;">!בּוֹאוּ נִלְמַד לִקְרֹא בְּעִבְרִית</span>
        <span class="lti" style="display:block;font-size:0.65em;margin-top:3px;color:var(--orange);">ቦዑ ኒልማድ ሊቕሮ ቤ-ኢቭሪት!</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">!ንዑ ብዕብራይስጢ ከነንብብ ንመሃር</span>
      </h2>
      <p style="margin-bottom: 24px; color: var(--text-light);">
        <span class="lhe" style="display:block;">לחצו על כפתור כדי להתחיל</span>
        <span class="lti" style="display:block;margin-top:4px;">ንጀምር ጠውቑ</span>
      </p>
      <div class="welcome-cards">
        <div class="welcome-card" onclick="navigateTo('letters')">
          <div class="welcome-card-emoji">🔤</div>
          <h3>
            <span class="lhe">אותיות</span>
            <span class="lti" style="display:block;font-size:0.75em;margin-top:3px;color:var(--orange);">ኦቲዮት</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ፊደላት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">לומדים את האלף-בית</span>
            <span class="lti" style="display:block;font-size:0.85em;margin-top:3px;color:var(--orange);">ሎምዲም ኤት ሃ-ኣለፍ-ቤት</span>
            <span class="lti" style="display:block;margin-top:2px;">ናይ ዕብራይስጢ ፊደላት ንመሃር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('nikud')">
          <div class="welcome-card-emoji">✨</div>
          <h3>
            <span class="lhe">ניקוד</span>
            <span class="lti" style="display:block;font-size:0.75em;margin-top:3px;color:var(--orange);">ኒቁድ</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ነጥብታት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">לומדים את התנועות</span>
            <span class="lti" style="display:block;font-size:0.85em;margin-top:3px;color:var(--orange);">ሎምዲም ኤት ሃ-ትኑዖት</span>
            <span class="lti" style="display:block;margin-top:2px;">ናይ ድምጺ ምልክታት ንመሃር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('words')">
          <div class="welcome-card-emoji">📖</div>
          <h3>
            <span class="lhe">מילים</span>
            <span class="lti" style="display:block;font-size:0.75em;margin-top:3px;color:var(--orange);">ሚሊም</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ቃላት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">לומדים מילים חדשות</span>
            <span class="lti" style="display:block;font-size:0.85em;margin-top:3px;color:var(--orange);">ሎምዲም ሚሊም ኻዲሾት</span>
            <span class="lti" style="display:block;margin-top:2px;">ሓደስቲ ቃላት ንመሃር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('reading')">
          <div class="welcome-card-emoji">📖</div>
          <h3>
            <span class="lhe">סיפורים</span>
            <span class="lti" style="display:block;font-size:0.75em;margin-top:3px;color:var(--orange);">ሲፑሪም</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ዛንታታት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">קוראים סיפורים קצרים</span>
            <span class="lti" style="display:block;font-size:0.85em;margin-top:3px;color:var(--orange);">ቆሪኢም ሲፑሪም ቅጻሪም</span>
            <span class="lti" style="display:block;margin-top:2px;">ሓጸርቲ ዛንታታት ነንብብ</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('matching')">
          <div class="welcome-card-emoji">🎯</div>
          <h3>
            <span class="lhe">התאמה</span>
            <span class="lti" style="display:block;font-size:0.75em;margin-top:3px;color:var(--orange);">ሃታኣማ</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ምትእስሳር</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">משחק התאמה</span>
            <span class="lti" style="display:block;font-size:0.85em;margin-top:3px;color:var(--orange);">ሚሽሃቅ ሃታኣማ</span>
            <span class="lti" style="display:block;margin-top:2px;">ጸወታ ምትእስሳር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('memory')">
          <div class="welcome-card-emoji">🧠</div>
          <h3>
            <span class="lhe">זיכרון</span>
            <span class="lti" style="display:block;font-size:0.75em;margin-top:3px;color:var(--orange);">ዚካሮን</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ዝኽሪ</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">משחק זיכרון</span>
            <span class="lti" style="display:block;font-size:0.85em;margin-top:3px;color:var(--orange);">ሚሽሃቅ ዚካሮን</span>
            <span class="lti" style="display:block;margin-top:2px;">ጸወታ ዝኽሪ</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('quiz')">
          <div class="welcome-card-emoji">🏆</div>
          <h3>
            <span class="lhe">חידון</span>
            <span class="lti" style="display:block;font-size:0.75em;margin-top:3px;color:var(--orange);">ኺዶን</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ፈተና</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">!בואו נבדוק מה למדנו</span>
            <span class="lti" style="display:block;font-size:0.85em;margin-top:3px;color:var(--orange);">ቦዑ ኒቭዶቅ ማ ላምዳኑ!</span>
            <span class="lti" style="display:block;margin-top:2px;">!ዝተመሃርናዮ ንፈትሽ</span>
          </p>
        </div>
      </div>
    </div>
  `;
}
