import React, { ReactNode } from "react";
import SubTitles from "../Titles/SubTitles";

const RecommendationsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children && (
        <>
          <SubTitles>Recommendations</SubTitles>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  my-4 mx-2">
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default RecommendationsContainer;
