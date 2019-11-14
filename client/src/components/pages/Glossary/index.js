import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import glossaryData from './staticData';

const Glossary = () => (
  <section className="glossary_container">
    <Helmet>
      <title>Glossary</title>
    </Helmet>
    <h1>Glossary Page</h1>
    {glossaryData.map(item => (
      <Fragment key={Object.keys(item)}>
        <h3>{Object.keys(item)}</h3>
        <div>
          <p className="glossary_content">{Object.values(item)}</p>
        </div>
      </Fragment>
    ))}
  </section>
);

export default Glossary;
