import { InfoPersonal } from "@/components/infoPersonal/InfoPersonal";
import { HeaderPortfolio } from "../components";

export const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPortfolio />
      <main className="flex-1 container mx-auto px-4 py-20">
        <InfoPersonal />
      </main>
    </div>
  );
};
