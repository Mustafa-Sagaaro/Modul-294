document.addEventListener('DOMContentLoaded', () => {
  let tries = 0;
  let correctMatches = 0;
  const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
  const playground = document.getElementById('playground');
  const tiles = playground.getElementsByClassName('tile');
  const revealedTiles = playground.getElementsByClassName('tile revealed');
  const checkWin = () => {
    if (Array.from(tiles).every((tile) => tile.classList.contains('found'))) {
      const playAgain = confirm(`You won in ${tries} turns! You made ${correctMatches} correct matches. Would you like to play again?`);
      tries = 0;
      correctMatches = 0;
      if (playAgain) {
        initializeplayground();
      }
    }
  };
  function checkTurn(event) {
    let tile = event.currentTarget;
    if (revealedTiles.length >= 2) {
      Array.from(revealedTiles).forEach((otherTile) => otherTile.classList.remove('revealed'));
      tries++;
    }
    Array.from(revealedTiles).forEach((otherTile) => {
      if (tile != otherTile && tile.children[0].src === otherTile.children[0].src) {
        tile.classList.add('found');
        otherTile.classList.add('found');
        correctMatches++;
      }
    });
    tile.classList.add('revealed');
    updateCounters();
    checkWin();
  }
  function createTile(canton) {
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', `./img/${canton}.png`);
    const tile = document.createElement('button');
    tile.append(tileImage);
    tile.className = 'tile';
    tile.onclick = checkTurn;
    return tile;
  }
  const initializeplayground = () => {
    playground.innerHTML = '';
    const shuffled = cantons.sort(() => 0.5 - Math.random()).slice(0, 10);
    for (let i = 2; i; i--) {
      for (let canton of shuffled.sort(() => 0.5 - Math.random())) {
        playground.append(createTile(canton));
        }
        }
        tries = 0;
        correctMatches = 0;
        updateCounters();
        };
        const updateCounters = () => {
        document.getElementById('tries-counter').textContent = tries;
        document.getElementById('matches-counter').textContent = correctMatches;
        document.getElementById('remaining-counter').textContent = 10 - correctMatches;
        };
        initializeplayground();
        });