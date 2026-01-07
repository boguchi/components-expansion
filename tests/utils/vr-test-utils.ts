import fs from "fs";
import path from "path";

type StoryIndex = {
  entries: {
    [id: string]: {
      id: string;
      title: string;
      name: string;
    };
  };
};

type StoriesList = {
  url: string;
  title: string;
  name: string;
}[];

/** vr test向けにstorybook-staticのjsonファイルからstories情報のリストを生成 */
export const getStoriesInfo = () => {
  const INDEX_JSON_PATH = path.resolve(
    process.cwd(),
    "storybook-static",
    "index.json"
  );

  const indexJson: StoryIndex = JSON.parse(
    // storybookのビルドで解消されるため問題なし
    fs.readFileSync(INDEX_JSON_PATH, "utf-8")
  );
  const componentList: StoriesList = Object.values(indexJson.entries).map(
    (story) => {
      return {
        url: `http://localhost:8080/iframe.html?id=${story.id}`,
        title: story.title,
        name: story.name,
      };
    }
  );

  return componentList;
};
