export function getData(key: string): any | null {
	const dataStr: string | null = localStorage.getItem(key);
	if (!dataStr) return null;

	const dataParsed: any = JSON.parse(dataStr);
	const now: Date = new Date();

	if (now.getTime() > dataParsed.expiry) {
		localStorage.removeItem(key);
		return null;
	}

	return dataParsed.value;
}
export async function setData(key: string, value: string, expiry: number) {
	const now: Date = new Date();

	const dataString: any = JSON.stringify({
		value: value,
		expiry: now.getTime() + expiry,
	});

	localStorage.setItem(key, dataString);
}
