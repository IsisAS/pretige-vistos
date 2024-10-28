import * as React from "react";
import Layout from "components/layout";
import Evidences from "pages/Evidences";
import WhoAreWe from "pages/WhoAreWe";
import CommonQuestion from "pages/CommonQuestion";
import Services from "pages/Services";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div id="testimony">
        <Evidences />
      </div>
      <div id="whoWeAre">
        <WhoAreWe />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="commonQuestions">
        <CommonQuestion />
      </div>
    </Layout>
  );
}
