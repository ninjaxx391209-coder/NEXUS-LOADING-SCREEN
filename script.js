<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NEXUS ROLEPLAY — Connexion</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="shade"></div>
  <header class="topbar">
    <div class="brand"><span class="brand-mark">N</span><span>NEXUS <b>ROLEPLAY</b><small>IMMERSION • COMMUNAUTÉ • ROLEPLAY</small></span></div>
    <div class="server-pill"><i></i><span>SERVEUR EN LIGNE</span></div>
  </header>

  <main>
    <section class="welcome">
      <p class="eyebrow">BIENVENUE SUR NEXUS ROLEPLAY</p>
      <h1>VOTRE HISTOIRE<br><span>COMMENCE ICI.</span></h1>
      <p class="sub">Préparez-vous à entrer dans une nouvelle vie.</p>
    </section>

    <section class="panels">
      <article class="panel rules">
        <div class="panel-heading"><span class="icon">✦</span><div><small>AVANT DE COMMENCER</small><h2>RÈGLES ESSENTIELLES</h2></div></div>
        <ul>
          <li><b>Respect</b><span>Respectez tous les joueurs et le staff.</span></li>
          <li><b>Roleplay sérieux</b><span>Restez dans votre personnage et privilégiez l'immersion.</span></li>
          <li><b>Fair-play</b><span>Pas de méta-gaming, power-gaming ou free-kill.</span></li>
          <li><b>Staff</b><span>Écoutez les consignes et utilisez les tickets en cas de problème.</span></li>
        </ul>
      </article>

      <article class="panel news">
        <div class="panel-heading"><span class="icon">▣</span><div><small>À LA UNE</small><h2>ACTUALITÉS NEXUS</h2></div></div>
        <div class="news-feature"><span class="tag">INFORMATION</span><h3>Bienvenue dans la communauté</h3><p>Découvrez la ville, rencontrez les habitants et écrivez votre propre histoire.</p></div>
        <div class="tip"><span>CONSEIL</span><p>Un bon roleplay commence par le respect et la créativité.</p></div>
      </article>
    </section>
  </main>

  <footer class="loading-panel">
    <div class="connection-row"><div><small>JOUEUR</small><strong id="player">Connexion en cours…</strong></div><div><small>CARTE</small><strong id="map">Chargement…</strong></div><div class="status"><small>ÉTAT DE CONNEXION</small><strong id="status">Initialisation…</strong></div></div>
    <div class="progress-meta"><span id="progress-label">PRÉPARATION DE LA CONNEXION</span><b id="percent">0%</b></div>
    <div class="progress-track"><div id="progress-fill"></div><div class="progress-glow"></div></div>
    <div class="bottom-row"><span id="file">En attente des informations du serveur…</span><button id="music-toggle" type="button">♫ ACTIVER LA MUSIQUE</button></div>
  </footer>

  <audio id="music" src="assets/music.mp3" loop preload="none"></audio>
  <script src="script.js"></script>
</body>
</html>
