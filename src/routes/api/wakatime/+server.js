export async function GET() {
	const WAKATIME_API_KEY = import.meta.env.VITE_WAKATIME_API_KEY;

	if (!WAKATIME_API_KEY) {
		return new Response(JSON.stringify({ error: 'Wakatime API key not configured' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const response = await fetch(
			'https://wakatime.com/api/v1/users/current/all_time_since_today',
			{
				headers: {
					Authorization: `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}`
				}
			}
		);

		if (!response.ok) {
			const response2 = await fetch(
				`https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${WAKATIME_API_KEY}`
			);

			if (!response2.ok) {
				return new Response(JSON.stringify({ error: 'Failed to fetch Wakatime data' }), {
					status: response2.status,
					headers: { 'Content-Type': 'application/json' }
				});
			}

			const data = await response2.json();
			return new Response(JSON.stringify(data), {
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const data = await response.json();
		return new Response(JSON.stringify(data), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
