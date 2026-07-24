import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DistributorCTA } from '../../landing/components/DistributorCTA/DistributorCTA';
import { Table } from '../../../shared/components/Table/Table';
import styles from './DistributorPage.module.scss';

export const DistributorPage = () => {
  const tableHeaders = ['Tier / Category', 'Min. Order Qty', 'Margin Guarantee', 'Support Level'];
  const tableData = [
    { tier: 'District Stockist', moq: '500 Cases', margin: '18% - 22%', support: 'POS Marketing + Collateral' },
    { tier: 'State Master Distributor', moq: '2500 Cases', margin: '24% - 28%', support: 'Dedicated Area Sales Manager' },
    { tier: 'Institutional / Corporate Partner', moq: '1000 Cases', margin: 'Custom Pricing', support: 'Direct Bottling Priority' }
  ];

  return (
    <>
      <Helmet>
        <title>Distributor & Franchise Opportunities | MEO MIX</title>
        <meta name="description" content="Become an authorized MEO MIX distributor. High retail margins, marketing collateral support, and nationwide distribution." />
      </Helmet>

      <div className={styles.distributorPageWrapper}>
        <DistributorCTA />

        <section className={`section-padding ${styles.partnerTiersSection}`}>
          <div className={styles.container}>
            <div className="glass-pill">COMMERCIAL ADVANTAGE</div>
            <h2 className="heading-1">Distribution Tiers & Structure</h2>
            <div className={styles.tableWrapper}>
              <Table headers={tableHeaders} data={tableData} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
