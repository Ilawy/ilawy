import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";
import { SmileIcon } from "lucide-react";

const skills = [
  "html5",
  "css3",
  "javascript",
  "angular",
  "react",
  "tailwindcss",
  "nodejs",
  "git",
  "docker",
  "mysql",
  "mongodb",
  "redis",
] as const;

const skillTheme: Record<(typeof skills)[number], string> = {
  angular: "#b52e31",
  css3: "#1572b6",
  docker: "#0db7ed",
  git: "#e24329",
  html5: "#e34f26",
  javascript: "#f7df1e",
  mongodb: "#589636",
  mysql: "#f29111",
  nodejs: "#6cc24a",
  react: "#00d8ff",
  redis: "#ed1b2e",
  tailwindcss: "#38b2ac",
};

export default function IndexSkills() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:16s]">
        {skills.map((skill) => (
          <div className="w-24 p-3" key={skill}>
            <img
              src={`https://icongr.am/simple/${skill}.svg?size=36&color=ffffff&colored`}
              alt=""
              style={{
                filter: `drop-shadow(0px 0px 7px ${skillTheme[skill]}80) drop-shadow(3px 3px 5px ${skillTheme[skill]}40)`,
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
