import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(url) {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		const arrayBuffer = await res.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		const { base64 } = await getPlaiceholder(buffer);
		return base64;
	} catch (error) {
		console.error('Error fetching or processing image:', error);
	}
}
