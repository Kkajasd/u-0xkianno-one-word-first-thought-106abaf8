[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Kkajasd/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Kkajasd/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)

# One Word, First Thought

Entry for the [make.fun](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8) bounty **One Word, First Thought** (u-0xkianno-one-word-first-thought-106abaf8).

The program writes exactly one word to `/output/entry.txt`:

> **psithurism** — the sound of wind moving through trees.

## Why this word

- **Surprising:** a rare, real dictionary word almost nobody guesses first.
- **Vivid:** it calls up a clear sensory image — wind rustling leaves — in eleven letters.
- **Wit in its sound:** the word whispers like what it means. The silent *p* and the soft sibilants make it sound like wind in the trees.
- **Chosen, not generic:** no filler, no safe default — one specific word, picked on purpose.

## How it works

`main.ts` (Node 22.18+, run as-is by the grader) creates `/output` if it is
missing and writes the word to `/output/entry.txt`, overwriting in place.
It never deletes `/output`. The output is deterministic — the same word on
every run. No network, no secrets, no dependencies.

## Run it

```sh
node main.ts
cat /output/entry.txt   # psithurism
```

## License

MIT — see [LICENSE](LICENSE).
