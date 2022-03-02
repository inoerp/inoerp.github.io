import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";
import { translate } from "@docusaurus/core/lib/client/exports/Translate";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageAllApplications from "../components/HomepageAllApplications";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const Showcase = () => {
  return (
    <section className="features_showcase">
      <div className="productShowcaseSection paddingBottom">
        <h2 className="projectTitle">Android, iOS, or Windows?</h2>
        <p>
          Can be used on any device: Phone, Tablets, Desktop, and Mobile
          Scanners
        </p>
        <div className="mid-image">
          <img src={useBaseUrl("img/undraw_design_process_cxoh.svg")} />
          <img src={useBaseUrl("img/sivvus-barcode-scanner.svg")} />
        </div>
      </div>
    </section>
  );
};


function DOntDeleteHome() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;
  return (
    <Layout title={tagline} description={customFields.description}>
  <HomepageAllApplications />
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <div className={styles.headerTab}>
              <Tabs>
                <TabItem value="scm" label="SCM" default>
                  <img
                    alt="inoERP logo"
                    className={styles.heroLogo}
                    src={useBaseUrl("img/basics/dashboard_scm_01.PNG")}
                  />
                </TabItem>
                <TabItem value="finance" label="Finance">
                  <img
                    alt="inoERP logo"
                    className={styles.heroLogo}
                    src={useBaseUrl("img/basics/dashboard_finance_01.PNG")}
                  />
                </TabItem>
                <TabItem value="others" label="Others">
                  <img
                    alt="inoERP logo"
                    className={styles.heroLogo}
                    src={useBaseUrl("img/basics/dashboard_others_01.PNG")}
                  />
                </TabItem>
              </Tabs>
            </div>
            <span
              className={styles.heroTitleTextHtml}
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: "homepage.hero.title",
                  message:
                    'OneApp is a <i>Go back-end & Flutter front-end</i> based enterprise management system',
                  description:
                    "OneApp is GoLang back-end & Flutter front-end based enterprise management system",
                }),
              }}
            />
          </h1>
          <h3 className={styles.greyText}>
            JavaScript APIs are available for both Server and Client
            customization
          </h3>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl("/docs/introduction")}
            >
              <Translate>Read more</Translate>
            </Link>
            <Link
              className={clsx("margin-left--md", styles.indexTryMeButton)}
              to="download/"
            >
              <Translate>Download</Translate>
            </Link>
          </div>
          <div className={styles.indexInfo}>
            <span className={styles.indexMessageFirst}>
              <Translate>
                The client is available for Andriod, iOS, macOS, Windows and
                Web.
              </Translate>
            </span>
            <span className={styles.indexMessageSecond}>
              <Translate>
                The server is available for Windows, macOS and Linux.
              </Translate>
            </span>
          </div>
        </div>
      </div>
      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="http://docs.rikdata.com">
                  <Translate>
                    checkout how to use OneApp with an existing ERP system such as inoERP
                  </Translate>
                </Link>
              ),
            }}
          >
            {`Coming from a different ERP system? {migrationGuideLink}`}
          </Translate>
          .
        </div>
      </div>
      <main>
        <HomepageFeatures />
        <Showcase />
      
      </main>
    </Layout>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;
  return (
    <Layout title={tagline} description={customFields.description}>
  <HomepageAllApplications />

      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="http://docs.inoerp.com">
                  <Translate>
                  checkout how to use OneApp with inoERP
                  </Translate>
                </Link>
              ),
            }}
          >
            {`Looking for an OpenSource ERP system? {migrationGuideLink}`}
          </Translate>
          .
        </div>
      </div>
      <main>
        <HomepageFeatures />
        <Showcase />
      
      </main>
    </Layout>
  );
}

export default Home;
