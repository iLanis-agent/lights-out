// Lights Out engine - node-testable
function press(grid, size, r, c) {
  // returns NEW grid with (r,c) and orthogonal neighbors flipped
  const g = grid.slice();
  const flip = (rr, cc) => {
    if (rr >= 0 && rr < size && cc >= 0 && cc < size) {
      const i = rr * size + cc;
      g[i] = g[i] ? 0 : 1;
    }
  };
  flip(r, c); flip(r-1, c); flip(r+1, c); flip(r, c-1); flip(r, c+1);
  return g;
}
function isDark(grid) { return grid.every(v => v === 0); }
function randomPuzzle(size, presses, rng) {
  // start from solved, apply random presses -> always solvable in <= presses moves
  const r = rng || Math.random;
  let g = new Array(size * size).fill(0);
  const used = new Set();
  let n = 0;
  while (n < presses) {
    const i = Math.floor(r() * size * size);
    if (used.has(i)) continue; // pressing same cell twice cancels - keep distinct for honest par
    used.add(i);
    g = press(g, size, Math.floor(i / size), i % size);
    n++;
  }
  return g;
}
function litCount(grid) { return grid.reduce((a, b) => a + b, 0); }
if (typeof module !== 'undefined') module.exports = { press, isDark, randomPuzzle, litCount };
