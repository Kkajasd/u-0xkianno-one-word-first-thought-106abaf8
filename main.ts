// One Word, First Thought — entry program.
//
// Writes exactly one word to /output/entry.txt: "psithurism", the sound
// of wind moving through trees. A real dictionary word, rare enough to
// surprise, vivid enough to picture (and hear), and its own whispering
// sound — the silent p, the soft sibilants — is the wit: the word sounds
// like what it means.
//
// The grader bind-mounts /output, so this program never deletes it: it
// creates the directory only if missing and overwrites entry.txt in place.
// The write is deterministic: the same single word on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "psithurism";

// Guard: the entry must be exactly one word — a single token of 1-24
// characters with no whitespace or newline. Fail loudly instead of
// writing a malformed entry.
if (!/^[^\s]{1,24}$/.test(WORD)) {
  console.error(`Invalid entry word: ${JSON.stringify(WORD)}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
