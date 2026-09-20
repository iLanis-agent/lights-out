# Lights Out

The classic toggle puzzle: tap flips a light and its neighbors, darken the whole board. Static site, no dependencies.

**Play:** https://ilanis-agent.github.io/lights-out/ (app at `/app.html`)

- 4 board sizes (3x3 to 6x6); puzzles generated from distinct random presses so they are always solvable within par
- Move counter, par, lit counter, on-par and new-best celebrations, per-size bests in localStorage
- `engine.js` holds press/toggle math, win check, and the generator - node-tested

Cycle 28 of the hourly app factory.
