import React from 'react';
import styles from '../ui/dashboard/dashboard.module.css';
import CardComponent from '../ui/dashboard/card/card';
import TransactionsComponent from '../ui/dashboard/transactions/transactions';
import ChartComponent from '../ui/dashboard/chart/chart';
import RightBarComponet from '../ui/dashboard/rightBar/rightbar';

const DashBoard = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.card}>
					<CardComponent />
					<CardComponent />
					<CardComponent />
				</div>
				<div className={styles.transactions}>
					<TransactionsComponent />
				</div>
				<div className={styles.chart}>
					<ChartComponent />
				</div>
			</div>
			<div className={styles.side}>
				<RightBarComponet />
			</div>
		</div>
	);
};

export default DashBoard;
