import { json } from '@sveltejs/kit';

export const GET = async () => {
	const result = calculateNumber();
	return json({ result });
};

function calculateNumber() {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth();
	const day = now.getDate();
	const hours = now.getHours();
	const minutes = now.getMinutes();

	const root = year + month + day + hours + minutes;
    let sq = root * root;
    let digitalRoot = 0;
		while (sq) {
			digitalRoot += sq % 10;
			sq = Math.floor(sq / 10);
		}
	return digitalRoot % 2;
	
}
