
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CarouselCustomNavigation from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="bg-slate-700 overflow-x-hidden">
        <CarouselCustomNavigation></CarouselCustomNavigation>
      </div>
    </>
  );
}
