export function middleware(request) {
  const response = new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://mohammed-adnan-shakeel.github.io',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return response;
  }

  return NextResponse.next();
}
