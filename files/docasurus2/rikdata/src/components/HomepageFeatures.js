import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const xFeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];


const FeatureList = [
  {
    title: 'Modular and Extensible',
    Svg: require('../../static/img/undraw_Invite_re_rrcp.svg').default,
    description:
      "Create, view, update and transact entities such as - Sales Orders, Purchase Orders, Work Orders, Invoices, Inventory Transactions, etc. - across different business systems using a single app.",
  },
  {
    title: 'Easily Customizable',
    Svg: require('../../static/img/undraw_online_transactions_02ka.svg').default,
    description:
      'OneApp provides the building blocks to configure a wide variety of forms, actions, reports, charts, workflows using REST APIs that can be used to map varied business processes across divergent systems.',
  },
  {
    title: 'Production Ready',
    Svg: require('../../static/img/undraw_factory_dy0a.svg').default,
    description:
      'OneApp integrates seamlessly into Oracle EBS R12 / Cloud, SAP HANA S/4, Microsoft Dynamics 365, Custom ERP/PLM/MES/Quality systems, allowing you to use a single application for all business processes.',
  },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
