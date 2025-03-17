import SectionDowloadApp from "../SectionDowloadApp";
import Header from "@/app/[locale]/(client-components)/(Header)/Header";

const PageHome2 = () => {
  return (
    <div className="relative">
      <Header className="h-12 sticky z-50" />
      <main className=" relative overflow-hidden">
        <div className="container relative ">
          <SectionDowloadApp />
        </div>
      </main>
    </div>
  );
};

export default PageHome2;
