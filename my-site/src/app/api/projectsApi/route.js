import axios from 'axios';

export async function GET(req) {
    const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
    const githubApiUrl = 'https://api.github.com/users/samiraomidvar7129/repos';
    try {
        const response = await axios.get(githubApiUrl, {
            headers: {
                Authorization: `token ${token}`,
            },
        });

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching projects:', error.response ? error.response.data : error.message);
        return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), {
            status: error.response ? error.response.status : 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
