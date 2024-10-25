import * as React from "react"
import Layout from "../../components/layout"
import Evidences from "../Evidences"
import WhoAreWe from "../WhoAreWe"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Evidences />
      <WhoAreWe />
    </Layout>
  )
}