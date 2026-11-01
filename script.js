(() => {
  const $ = (id) => document.getElementById(id);
  let totalFiles = 0;
  let neededFiles = 0;

  const updateProgress = () => {
    if (totalFiles > 0) {
      const progress = Math.max(0, Math.min(100, Math.round(((totalFiles - neededFiles) / totalFiles) * 100)));
      $('progress-fill').style.width = progress + '%';
      $('percent').textContent = progress + '%';
      $('progress-label').textContent = progress >= 100 ? 'TÉLÉCHARGEMENTS TERMINÉS' : 'TÉLÉCHARGEMENT DES RESSOURCES';
    }
  };

  window.GameDetails = (serverName, serverUrl, mapName, maxPlayers, steamId, gamemode, volume) => {
    $('player').textContent = steamId ? 'Joueur • ' + steamId : 'Joueur en connexion';
    $('map').textContent = mapName || 'Carte inconnue';
    $('status').textContent = serverName || 'NEXUS ROLEPLAY';
    if (typeof volume === 'number') $('music').volume = Math.max(0, Math.min(1, volume));
  };
  window.SetFilesTotal = (total) => { totalFiles = Number(total) || 0; updateProgress(); };
  window.SetFilesNeeded = (needed) => { neededFiles = Number(needed) || 0; updateProgress(); };
  window.SetStatusChanged = (status) => {
    $('status').textContent = status || 'Connexion en cours…';
    $('file').textContent = status || 'Connexion au serveur…';
  };
  window.DownloadingFile = (fileName) => {
    $('file').textContent = fileName ? 'Téléchargement : ' + fileName : 'Téléchargement des ressources…';
  };

  const music = $('music');
  const button = $('music-toggle');
  button.addEventListener('click', async () => {
    if (music.paused) {
      try { await music.play(); button.textContent = '♫ COUPER LA MUSIQUE'; }
      catch { button.textContent = '♫ AJOUTE music.mp3'; }
    } else {
      music.pause();
      button.textContent = '♫ ACTIVER LA MUSIQUE';
    }
  });
})();
