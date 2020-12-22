

export default async (objText, TextStr,time) => {
	let sleep = m => new Promise( relove => {
		setTimeout(relove, m)
	})

	for (let i = 0; i <= TextStr.length ; i++) {
		objText.setText(TextStr.slice(0, i+1));
		await sleep(time);
	}
}	
