import { faker } from "@faker-js/faker";

type getFakeWords = {
  wordCount?: number;
  phraseCount?: number;
};
export function getFakeWords({ wordCount = 2, phraseCount = 0 }: getFakeWords) {
  let words = "";

  if (phraseCount === 0) {
    if (wordCount === 0) words = faker.hacker.noun();
    else
      Array(wordCount)
        .fill(0)
        .forEach(() => {
          words += faker.hacker.noun() + " ";
        });
  } else
    Array(phraseCount)
      .fill(0)
      .forEach(() => {
        words += faker.hacker.phrase() + " ";
      });

  return words.trim().charAt(0).toUpperCase() + words.slice(1);
}


