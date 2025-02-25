import * as React from "react";
import Layout from "../../components/layout";
import Evidences from "../Evidences";
import WhoAreWe from "../WhoAreWe";
import Services from "../Services";
import CommonQuestion from "../CommonQuestion";
import GoogleReviews from "../GoogleReviews";

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
      <div id="reviews">
        <GoogleReviews />
      </div>
      <div id="commonQuestions">
        <CommonQuestion />
      </div>
    </Layout>
  );
}
