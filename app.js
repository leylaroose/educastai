(() => {
  const app = document.getElementById("app");
  if (!app) {
    return;
  }
  app.innerHTML = `
    <div class="status-bar">
      <span>18:23</span>
      <div class="status-icons">
        <img class="status-icon-img" src="wifi icon.png" alt="Wi-Fi" />
        <img class="status-icon-img" src="battery icon.png" alt="Battery" />
      </div>
    </div>
    <div class="view is-active" data-view="home">
      <img
        class="accent-wave"
        src="Element 3EduCastAI element.png"
        alt=""
        aria-hidden="true"
      />

      <div class="app-content">
        <div class="greeting">Hallo Maya!</div>
        <div class="subtext">Ready f&uuml;r deine n&auml;chste Session?</div>

        <div class="streak-card" data-view="erfolge">
          <div class="streak-icon" aria-hidden="true">
            <img class="streak-flame" src="flame.png" alt="" aria-hidden="true" />
          </div>
          <div class="streak-content">
            <div class="streak-title">
              <span>7 Tage Streak</span>
              <span>1.240 XP</span>
            </div>
            <div class="streak-sub">
              <span>Fantastisch!</span>
              <span>Level 12</span>
            </div>
            <div class="progress"><span></span></div>
          </div>
        </div>

        <div class="section-title">Weiterh&ouml;ren</div>
        <div class="continue-card">
          <button class="play continue-play-btn" type="button" aria-label="Play" aria-pressed="false" data-state="paused">
            <svg viewBox="0 0 24 24" aria-hidden="true"></svg>
          </button>
          <h3>Algorithmen &amp; <br>Datenstrukturen</h3>
          <p><strong>Einführung</strong></p>
          <div class="continue-meta">
            <span class="meta-clock"></span>
            12 Min. verbleibend
          </div>
          <div class="progress" style="margin-top: 18px;">
            <span style="width: 48%; background: #62ead7;"></span>
          </div>
        </div>

        <div class="recommend-header">
          <div class="section-title" style="margin: 0;">Empfehlungen f&uuml;r dich</div>
          <img class="recommend-arrow-img" src="forward_arrow.png" alt="" aria-hidden="true" />
        </div>

        <div class="card-list" style="margin-top: 18px;">
          <div class="mini-card">
            <div class="mini-icon" aria-hidden="true">
              <img class="mini-icon-img" src="machine learning.png" alt="" aria-hidden="true" />
            </div>
            <div>
              <h4>Machine Learning Basics</h4>
              <p>18 Min. &middot; Neu</p>
            </div>
          </div>
          <div class="mini-card">
            <div class="mini-icon" aria-hidden="true">
              <img class="mini-icon-img" src="quantenphysik.png" alt="" aria-hidden="true" />
            </div>
            <div>
              <h4>Quantenphysik Einf&uuml;hrung</h4>
              <p>24 Min. &middot; Beliebt</p>
            </div>
          </div>
          <div class="mini-card">
            <div class="mini-icon" aria-hidden="true">
              <img class="mini-icon-img" src="risiko.png" alt="" aria-hidden="true" />
            </div>
            <div>
              <h4>Riskomanagement Basics</h4>
              <p>13 Min. &middot; Neu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="view" data-view="player">
      <div class="player-screen">
        <div class="player-header">
          <button class="player-back" type="button" aria-label="Back to Home">
            <img class="back-arrow" src="back_arrow.png" alt="" aria-hidden="true" />
          </button>
          <div class="player-title-text">Player</div>
          <button class="player-icon-btn" type="button" aria-label="Menu">
            <svg viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2.2" />
              <circle cx="12" cy="12" r="2.2" />
              <circle cx="19" cy="12" r="2.2" />
            </svg>
          </button>
        </div>

        <section class="player-hero-card">
          <div class="hero-icon" aria-hidden="true"></div>
          <div class="hero-title">Binary Search Trees</div>
          <div class="hero-subtitle">Algorithmen &amp; Datenstrukturen</div>
        </section>

        <section class="player-meta-block">
          <h2>Binary Search Trees</h2>
          <p>Algorithmen &amp; Datenstrukturen &middot; 26 Min.</p>
          <div class="player-chips">
            <span>Gradient Descent</span>
            <span>Chain Rule</span>
            <span>Optimization</span>
          </div>
        </section>

        <section class="player-progress">
          <div class="time-row">
            <span>13:40</span>
            <span>25:42</span>
          </div>
          <div class="track">
            <span class="track-fill"></span>
            <span class="track-thumb"></span>
          </div>
        </section>

        <section class="player-controls">
          <div class="transport">
            <button class="transport-btn" type="button">
              <svg viewBox="0 0 24 24">
                <path d="M18 4L8 12l10 8V4zM6 4v16" />
              </svg>
            </button>
            <button class="transport-btn is-primary" type="button" aria-label="Play" aria-pressed="false" data-state="paused">
              <svg viewBox="0 0 24 24" class="transport-icon" aria-hidden="true">
                <rect x="7" y="6" width="4" height="12" rx="1" fill="currentColor" />
                <rect x="13" y="6" width="4" height="12" rx="1" fill="currentColor" />
              </svg>
            </button>
            <button class="transport-btn" type="button">
              <svg viewBox="0 0 24 24">
                <path d="M6 4l10 8-10 8V4zM18 4v16" />
              </svg>
            </button>
          </div>
        </section>

        <section class="quick-actions">
          <div class="quick-actions-header">
            <span class="quick-actions-title">Schnellaktionen</span>
          </div>
          <div class="quick-actions-grid">
            <button class="quick-action-card" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 4h12a2 2 0 0 1 2 2v14l-8-4-8 4V6a2 2 0 0 1 2-2z" />
              </svg>
              <span>Merken</span>
            </button>
            <button class="quick-action-card" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 8a5 5 0 0 1 10 0c0 4-5 6-5 6s-5-2-5-6z" />
                <path d="M6 19l2-2h8l2 2" />
              </svg>
              <span>Fragen</span>
            </button>
            <button class="quick-action-card" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6h12" />
                <path d="M6 12h8" />
                <circle cx="17" cy="12" r="2" />
                <path d="M6 18h6" />
              </svg>
              <span>Stil</span>
            </button>
          </div>
        </section>
      </div>
    </div>

    <div class="view" data-view="chat">
      <div class="player-screen chat-screen">
        <div class="chat-top">
          <button class="player-back chat-back" type="button" aria-label="Back to Home">
            <img class="back-arrow" src="back_arrow.png" alt="" aria-hidden="true" />
          </button>
          <div class="chat-profile">
            <div class="chat-avatar" aria-hidden="true"></div>
            <div class="chat-meta">
              <div class="chat-title">Edu</div>
              <div class="chat-status">
                <span class="chat-status-dot" aria-hidden="true"></span>
                Aktiv w&auml;hrend Audio-Wiedergabe
              </div>
            </div>
          </div>
        </div>

        <div class="chat-thread">
          <div class="chat-bubble user">
            Was genau ist die Chain Rule und warum brauchen wir sie f&uuml;r Backpropagation?
          </div>
          <div class="chat-bubble bot">
            <p>Gute Frage! Die Chain Rule (Kettenregel) hilft uns, die Ableitung von zusammengesetzten Funktionen zu berechnen.</p>
            <p>Bei Backpropagation m&uuml;ssen wir den Gradienten durch viele verschachtelte Funktionen (die Schichten) zur&uuml;ckrechnen. Die Chain Rule zeigt uns genau, wie.</p>
            <div class="chat-example">
              Beispiel:<br />
              &#8706L/&#8706w = &#8706L/&#8706a &middot; &#8706a/&#8706z &middot; &#8706z/&#8706w
            </div>
          </div>

          <div class="chat-followup">M&ouml;chtest du mehr wissen?</div>

          <div class="chat-actions">
            <button class="chat-action" type="button">
              <img class="chat-action-icon" src="book.png" alt="" aria-hidden="true" />
              Zeig mir ein konkretes Beispiel
            </button>
            <button class="chat-action" type="button">
              <img class="chat-action-icon" src="lautsprecher.png" alt="" aria-hidden="true" />
              Erkl&auml;re es nochmal einfacher
            </button>
            <button class="chat-action is-warm" type="button">
              <img class="chat-action-icon" src="bulb.png" alt="" aria-hidden="true" />
              Ich merke, du fragst oft nach mathematischen Details. Soll ich k&uuml;nftig mehr visuelle Erkl&auml;rungen einbauen?
            </button>
          </div>
        </div>

        <div class="chat-input">
          <div class="chat-input-wrap">
            <input type="text" placeholder="Stelle eine Frage..." />
            <button class="chat-send" type="button" aria-label="Send message">
              <img class="chat-send-icon" src="send message.png" alt="" aria-hidden="true" />
            </button>
          </div>
          <div class="chat-helper">Kontextbezogene Antworten</div>
        </div>
      </div>
    </div>

    <div class="view" data-view="upload">
      <div class="player-screen upload-screen">
        <div class="player-header">
          <button class="player-back" type="button" aria-label="Back to Home">
            <img class="back-arrow" src="back_arrow.png" alt="" aria-hidden="true" />
          </button>
          <div class="player-title-text">Upload</div>
        </div>

        <div class="upload-page">
          <header class="upload-header">
            <h1>Neuen Podcast erstellen</h1>
            <p>Lade dein Lernmaterial hoch</p>
          </header>

          <section class="upload-dropzone" aria-label="Upload files">
            <div class="drop-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 4v10" />
                <path d="M7 8l5-5 5 5" />
                <path d="M5 14v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
              </svg>
            </div>
            <div class="drop-copy">PDF, Folien oder Text hochladen</div>
            <div class="drop-meta">Bis zu 50 MB</div>
            <button class="drop-btn" type="button">Datei ausw&auml;hlen</button>
          </section>

          <section class="upload-card-stack">
            <article class="upload-file-card">
              <div class="file-row">
                <div class="file-icon" aria-hidden="true">
                  <img class="file-icon-img" src="file.png" alt="" aria-hidden="true" />
                </div>
                <div class="file-info">
                  <div class="file-name">Algorithmen_Vorlesung</div>
                  <div class="file-meta">2.4 MB &middot; 18 Seiten</div>
                </div>
                <div class="file-status" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-5" />
                  </svg>
                </div>
              </div>
              <div class="analysis-card">
                <div class="analysis-icon" aria-hidden="true">
                  <img class="analysis-icon-img" src="verstand.png" alt="" aria-hidden="true" />
                </div>
                <div class="analysis-text">
                  Analyse abgeschlossen: Binary Search Trees, Komplexit&auml;t, Balancierung
                </div>
              </div>
            </article>
          </section>

          <section class="upload-goals">
            <h2>W&auml;hle dein Lernziel</h2>
            <div class="goal-list">
              <button class="goal-card is-active" type="button" data-icon-active="klausur.png" data-icon-inactive="klausur blau.png">
                <div class="goal-icon" aria-hidden="true">
                  <img class="goal-icon-img" src="klausur.png" alt="" aria-hidden="true" />
                </div>
                <div class="goal-copy">
                  <div class="goal-title">Klausur lernen</div>
                  <div class="goal-sub">Fokus auf pr&uuml;fungsrelevante Details</div>
                </div>
                <span class="goal-dot" aria-hidden="true"></span>
              </button>
              <button class="goal-card" type="button" data-icon-active="verstand white.png" data-icon-inactive="verstand.png">
                <div class="goal-icon" aria-hidden="true">
                  <img class="goal-icon-img" src="verstand.png" alt="" aria-hidden="true" />
                </div>
                <div class="goal-copy">
                  <div class="goal-title">Verst&auml;ndnis vertiefen</div>
                  <div class="goal-sub">Konzepte ausf&uuml;hrlich erkl&auml;rt</div>
                </div>
                <span class="goal-dot" aria-hidden="true"></span>
              </button>
              <button class="goal-card" type="button" data-icon-active="time white.png" data-icon-inactive="time.png">
                <div class="goal-icon" aria-hidden="true">
                  <img class="goal-icon-img" src="time.png" alt="" aria-hidden="true" />
                </div>
                <div class="goal-copy">
                  <div class="goal-title">Schnelle Wiederholung</div>
                  <div class="goal-sub">Kompakte Zusammenfassung</div>
                </div>
                <span class="goal-dot" aria-hidden="true"></span>
              </button>
            </div>
            <button class="upload-cta" type="button" data-view="player">Jetzt mit dem Lernen starten</button>
          </section>
        </div>
      </div>
    </div>
    <div class="view" data-view="lernen">
      <div class="player-screen lernen-screen">
        <div class="player-header">
          <button class="player-back" type="button" aria-label="Back to Home">
            <img class="back-arrow" src="back_arrow.png" alt="" aria-hidden="true" />
          </button>
          <div class="lernen-header">
            <div class="lernen-avatar" aria-hidden="true"></div>
            <div>
              <div class="lernen-title">Lernanalyse</div>
              <div class="lernen-subtitle">KI-basierte Anpassung</div>
            </div>
          </div>
        </div>

        <section class="lernen-alert">
          <div class="alert-icon" aria-hidden="true">
            <img class="alert-icon-img" src="achtung.png" alt="" aria-hidden="true" />
          </div>
          <div class="alert-copy">
            <h3>Unsicherheit erkannt</h3>
            <p>Du hast bei &quot;Gradient Descent&quot; mehrfach Nachfragen gestellt. Soll ich das Thema einfacher erkl&auml;ren?</p>
            <div class="alert-actions">
              <button class="alert-btn is-primary" type="button">Ja, bitte</button>
              <button class="alert-btn" type="button">Sp&auml;ter</button>
            </div>
          </div>
        </section>

        <section class="lernen-section">
          <h3>Dein Lernfortschritt</h3>
          <div class="progress-list">
            <article class="progress-card">
              <div class="progress-top">
                <span class="progress-icon is-good" aria-hidden="true">
                  <img class="progress-icon-img" src="haken.png" alt="" aria-hidden="true" />
                </span>
                <span class="progress-title">Neural Networks Basics</span>
                <span class="progress-value">95%</span>
              </div>
              <div class="progress-bar"><span style="width: 95%;"></span></div>
            </article>

            <article class="progress-card is-warning">
              <div class="progress-top">
                <span class="progress-icon is-warn" aria-hidden="true">
                  <img class="progress-icon-img" src="downward.png" alt="" aria-hidden="true" />
                </span>
                <span class="progress-title">Backpropagation</span>
                <span class="progress-value">62%</span>
              </div>
              <div class="progress-bar is-warn"><span style="width: 62%;"></span></div>
              <div class="progress-meta">3 Fragen &middot; 2 Wiederholungen</div>
            </article>

            <article class="progress-card">
              <div class="progress-top">
                <span class="progress-icon is-good" aria-hidden="true">
                  <img class="progress-icon-img" src="haken.png" alt="" aria-hidden="true" />
                </span>
                <span class="progress-title">Activation Functions</span>
                <span class="progress-value">88%</span>
              </div>
              <div class="progress-bar"><span style="width: 88%;"></span></div>
            </article>
          </div>
        </section>

        <section class="lernen-section">
          <h3>Empfehlungen f&uuml;r dich</h3>
          <div class="recommend-list">
            <article class="recommend-card is-feature">
              <div class="recommend-head">
                <span class="recommend-icon" aria-hidden="true">
                  <img class="recommend-icon-img" src="blitz.png" alt="" aria-hidden="true" />
                </span>
                <div>
                  <div class="recommend-title">Kurze Wiederholung</div>
                  <div class="recommend-sub">5-Min-Version: Backpropagation kompakt</div>
                </div>
              </div>
              <button class="recommend-cta" type="button">
                Jetzt h&ouml;ren
                <span class="recommend-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </article>

            <article class="recommend-card">
              <div class="recommend-head">
                <span class="recommend-icon light" aria-hidden="true">
                  <img class="recommend-icon-img" src="vertiefen.png" alt="" aria-hidden="true" />
                </span>
                <div>
                  <div class="recommend-title">Vertiefung vorgschlagen</div>
                  <div class="recommend-sub">&quot;Optimierungsalgorithmen&quot; &ndash; passend <br>zu deinen Interessen</div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
    <div class="view" data-view="erfolge">
      <div class="player-screen erfolge-screen">
        <div class="player-header">
          <button class="player-back" type="button" aria-label="Back to Home">
            <img class="back-arrow" src="back_arrow.png" alt="" aria-hidden="true" />
          </button>
          <div class="player-title-text">Erfolge</div>
        </div>

        <section class="rank-card">
          <div class="rank-row">
            <div class="rank-icon" aria-hidden="true">
              <img class="rank-icon-img" src="crown.png" alt="" aria-hidden="true" />
            </div>
            <div class="rank-copy">
              <div class="rank-title">Level 12</div>
              <div class="rank-sub">Wissensj&auml;ger</div>
            </div>
            <div class="rank-xp">
              <span class="rank-xp-value">1.240</span>
              <span class="rank-xp-label">XP</span>
            </div>
          </div>
          <div class="rank-track">
            <span style="width: 72%;"></span>
          </div>
          <div class="rank-meta">260 XP bis Level 13</div>
        </section>
        <div class="erfolge-hero-wrap">
          <div class="erfolge-hero">
            <img class="erfolge-hero-img" src="edu winkend.png" alt="" aria-hidden="true" />
          </div>
          <section class="streak-card-compact is-speech">
            <div class="streak-top">
              <div class="streak-copy">
                <div class="streak-title">7 Tage Streak</div>
                <div class="streak-sub">Dein l&auml;ngster Streak:<br>12 Tage</div>
              </div>
              <div class="streak-icon" aria-hidden="true">
                <img class="streak-flame" src="flame.png" alt="" aria-hidden="true" />
              </div>
            </div>
          </section>
        </div>

        <section class="erfolge-section">
          <div class="erfolge-section-head">
            <h3>Quiz-Duell</h3>
            <span class="duel-pill">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="9" cy="10" r="3" />
                <path d="M3 19a6 6 0 0 1 12 0" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M14 19a5 5 0 0 1 7 0" />
              </svg>
              3 aktiv
            </span>
          </div>
          <div class="duel-card">
            <div class="duel-header">
              <div class="duel-player">
                <span class="duel-avatar">M</span>
                <div>
                  <div class="duel-name">Du</div>
                  <div class="duel-level">Level 12</div>
                </div>
              </div>
              <div class="duel-vs">VS</div>
              <div class="duel-player">
                <div>
                  <div class="duel-name">Alex</div>
                  <div class="duel-level">Level 11</div>
                </div>
                <span class="duel-avatar light">A</span>
              </div>
            </div>
            <div class="duel-score">
              <div class="score-box">
                <div class="score-value">8</div>
                <div class="score-label">Richtig</div>
              </div>
              <div class="score-box">
                <div class="score-value">6</div>
                <div class="score-label">Richtig</div>
              </div>
            </div>
            <button class="duel-cta" type="button">Weiter spielen</button>
          </div>
        </section>

        <section class="erfolge-section">
          <h3>Erfolge</h3>
          <div class="achievements-grid">
            <article class="achievement-card">
              <div class="achievement-icon" aria-hidden="true">
                <img class="achievement-icon-img" src="trophy.png" alt="" aria-hidden="true" />
              </div>
              <div class="achievement-title">Erste Episode</div>
            </article>
            <article class="achievement-card">
              <div class="achievement-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" />
                </svg>
              </div>
              <div class="achievement-title">10 Tage</div>
            </article>
            <article class="achievement-card">
              <div class="achievement-icon" aria-hidden="true">
                <img class="achievement-icon-img" src="blitz.png" alt="" aria-hidden="true" />
              </div>
              <div class="achievement-title">Schnelllerner</div>
            </article>
            <article class="achievement-card">
              <div class="achievement-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="7" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div class="achievement-title">Quiz Master</div>
            </article>
            <article class="achievement-card">
              <div class="achievement-icon" aria-hidden="true">
                <img class="achievement-icon-img" src="medal.png" alt="" aria-hidden="true" />
              </div>
              <div class="achievement-title">100 Fragen</div>
            </article>
            <article class="achievement-card is-locked">
              <div class="achievement-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 11V8a5 5 0 0 1 10 0v3" />
                  <rect x="6" y="11" width="12" height="9" rx="2" />
                </svg>
              </div>
              <div class="achievement-title">Verschlossen</div>
            </article>
          </div>
        </section>

        <section class="erfolge-section">
          <h3>Rangliste diese Woche</h3>
          <div class="leaderboard">
            <div class="leader-row">
              <span class="leader-rank">1</span>
              <span class="leader-avatar">S</span>
              <span class="leader-name">Sarah M.</span>
              <span class="leader-xp">2.890 XP</span>
            </div>
            <div class="leader-row">
              <span class="leader-rank">2</span>
              <span class="leader-avatar">L</span>
              <span class="leader-name">Leo B.</span>
              <span class="leader-xp">2.410 XP</span>
            </div>
            <div class="leader-row is-you">
              <span class="leader-rank">3</span>
              <span class="leader-avatar">M</span>
              <span class="leader-name">Du</span>
              <span class="leader-xp">1.240 XP</span>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="bottom-nav">
      <div class="nav-item active" data-view="home">
        <span class="nav-icon" style="--icon: url('menu icons/Home.svg')" aria-hidden="true"></span>
        Home
      </div>
      <div class="nav-item" data-view="player">
        <span class="nav-icon" style="--icon: url('menu icons/Player.svg')" aria-hidden="true"></span>
        Player
      </div>
      <div class="nav-item" data-view="chat">
        <span class="nav-icon" style="--icon: url('menu icons/Chat.svg')" aria-hidden="true"></span>
        Chat
      </div>
      <div class="nav-item" data-view="upload">
        <span class="nav-icon" style="--icon: url('menu icons/Upload.svg')" aria-hidden="true"></span>
        Upload
      </div>
      <div class="nav-item" data-view="lernen">
        <span class="nav-icon" style="--icon: url('menu icons/Lernen.svg')" aria-hidden="true"></span>
        Lernen
      </div>
      <div class="nav-item" data-view="erfolge">
        <span class="nav-icon" style="--icon: url('menu icons/Erfolge.svg')" aria-hidden="true"></span>
        Erfolge
      </div>
    </div>
  `;

  const navItems = app.querySelectorAll(".bottom-nav .nav-item");
  const navBar = app.querySelector(".bottom-nav");
  const views = app.querySelectorAll(".view");
  const viewButtons = app.querySelectorAll("[data-view]");
  const setView = (name) => {
    if (!name) {
      return;
    }
    views.forEach((view) => {
      const isActive = view.dataset.view === name;
      view.classList.toggle("is-active", isActive);
      view.style.display = isActive ? "block" : "none";
    });
  };

  const activeItem = app.querySelector(".bottom-nav .nav-item.active");
  if (activeItem) {
    setView(activeItem.dataset.view);
  } else if (views.length > 0) {
    setView(views[0].dataset.view);
  }

  const setActiveNav = (name) => {
    navItems.forEach((navItem) => {
      const isActive = navItem.dataset.view === name;
      navItem.classList.toggle("active", isActive);
    });
  };

  if (navBar) {
    navBar.addEventListener("click", (event) => {
      const item = event.target.closest(".nav-item");
      if (!item) {
        return;
      }
      setActiveNav(item.dataset.view);
      setView(item.dataset.view);
    });
  }

  viewButtons.forEach((button) => {
    if (button.classList.contains("nav-item") || button.classList.contains("view")) {
      return;
    }
    button.addEventListener("click", () => {
      setActiveNav(button.dataset.view);
      setView(button.dataset.view);
    });
  });

  const uploadCta = app.querySelector(".upload-cta");
  if (uploadCta) {
    uploadCta.addEventListener("click", () => {
      setActiveNav("player");
      setView("player");
    });
  }


  const playIcon = '<path d="M6 4l12 8-12 8V4z" fill="currentColor" />';
  const pauseIcon = '<rect x="6.5" y="5" width="5" height="14" rx="1.2" fill="currentColor" /><rect x="12.5" y="5" width="5" height="14" rx="1.2" fill="currentColor" />';
  const setupPlayToggle = (button) => {
    if (!button) {
      return;
    }
    const playPauseSvg = button.querySelector("svg");
    const setPlayState = (state) => {
      const isPlaying = state === "playing";
      button.dataset.state = isPlaying ? "playing" : "paused";
      button.setAttribute("aria-pressed", isPlaying ? "true" : "false");
      button.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
      if (playPauseSvg) {
        playPauseSvg.innerHTML = isPlaying ? pauseIcon : playIcon;
      }
    };
    setPlayState(button.dataset.state || "playing");
    button.addEventListener("click", () => {
      const nextState = button.dataset.state === "playing" ? "paused" : "playing";
      setPlayState(nextState);
    });
  };

  setupPlayToggle(app.querySelector(".transport-btn.is-primary"));
  setupPlayToggle(app.querySelector(".continue-play-btn"));

  const goalCards = app.querySelectorAll(".goal-card");
  if (goalCards.length) {
    const updateGoalIcons = () => {
      goalCards.forEach((card) => {
        const img = card.querySelector(".goal-icon-img");
        const activeSrc = card.dataset.iconActive;
        const inactiveSrc = card.dataset.iconInactive;
        if (!img || !activeSrc || !inactiveSrc) {
          return;
        }
        img.src = card.classList.contains("is-active") ? activeSrc : inactiveSrc;
      });
    };

    updateGoalIcons();

    goalCards.forEach((card) => {
      card.addEventListener("click", () => {
        goalCards.forEach((item) => item.classList.remove("is-active"));
        card.classList.add("is-active");
        updateGoalIcons();
      });
    });
  }

  const backButtons = app.querySelectorAll(".player-back");
  backButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveNav("home");
      setView("home");
    });
  });
})();
