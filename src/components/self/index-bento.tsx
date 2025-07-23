import { SmileIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

export default function IndexBento() {
  return (
    <div className="card-container">
      <MainCard />
      <div className="card">hello world</div>
    </div>
  );
}

function MainCard() {
  return (
    <div className="card col-span-3">
      <h1 className="text-3xl font-bold">Hello, This is Mohammed Amr</h1>
      <p>
        A software engineer at{" "}
        <span className="text-[#e60000] font-bold">Vodafone</span> based in
        Egypt, foucsing on building performant, user-friendly and simple web for
        everyone.
      </p>
    </div>
  );
}
