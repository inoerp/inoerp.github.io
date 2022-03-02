import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    image: "images/ScreenShots/basic/logo/oracle.png",
    url: "docs/oracle/transactions",
    alt: "Oracle Cloud Application",
  },
  {
    image: "images/ScreenShots/basic/logo/servicenow.png",
    url: "docs/snow/document-snow",
    alt: "ServiceNow",
  },
  {
    image: "images/ScreenShots/basic/logo/d365.png",
    url: "docs/document-d365bc",
    alt: "Microsoft Dynamics 365 Business Central, Sales and Operation",
  },


  {
    image: "images/ScreenShots/basic/logo/sforce.png",
    url: "docs/sforce/document-sforce",
    alt: "Salesforce",
  },
  {
    image: "images/ScreenShots/basic/logo/ebs.png",
    url: "docs/oracle/transactions-ebs-r12",
    alt: "Oracle EBS R12",
  },

  {
    image: "images/ScreenShots/basic/logo/sap.png",
    url: "docs/sap/document-sap",
    alt: "SAP HANA S/4",
  },
];

function Feature({ image, url, alt }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <span class="logo-img">
          <a href={url}>
            <img src={image} alt={alt} />
          </a>
        </span>
      </div>
    </div>
  );
}

export default function HomepageAllApplications() {
  return (
    <div className="inner center">
      <h2 className="projectTitle">RikData OneApp</h2>
      <h2 className="smallTitle">OneApp for all business systems</h2>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <h2 className="smallTitle"><a href="docs/customization/custom-application"><img class="logo-img-all" src="images/ScreenShots/basic/logo/anysystem.png"  /></a></h2>
    </div>
  );
}
