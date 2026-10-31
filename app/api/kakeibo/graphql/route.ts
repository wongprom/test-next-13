import { NextRequest, NextResponse } from 'next/server';

/**
 * Kakeibo BFF — browser → Next.js → C# HotChocolate GraphQL.
 * Client components must call this route (or other /api/kakeibo/* handlers),
 * never KAKEIBO_GRAPHQL_URL directly.
 */
const UPSTREAM = process.env.KAKEIBO_GRAPHQL_URL;

export async function GET() {
  return NextResponse.json({
    service: 'kakeibo-bff',
    upstreamConfigured: Boolean(UPSTREAM),
    hint: 'POST a GraphQL { query, variables?, operationName? } body to this route.',
  });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { errors: [{ message: 'Request body must be JSON' }] },
      { status: 400 }
    );
  }

  if (!UPSTREAM) {
    // Structured stub until the C# endpoint is wired via KAKEIBO_GRAPHQL_URL.
    return NextResponse.json(
      {
        data: null,
        errors: [
          {
            message:
              'KAKEIBO_GRAPHQL_URL is not set. BFF stub is ready; configure the C# HotChocolate endpoint to proxy.',
          },
        ],
        extensions: {
          stub: true,
          bff: 'kakeibo',
        },
      },
      { status: 503 }
    );
  }

  try {
    const upstream = await fetch(UPSTREAM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Clerk → C# User mapping can forward Authorization here later.
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const text = await upstream.text();
    const contentType =
      upstream.headers.get('Content-Type') ?? 'application/json';

    return new NextResponse(text, {
      status: upstream.status,
      headers: { 'Content-Type': contentType },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Upstream GraphQL request failed';
    return NextResponse.json(
      {
        data: null,
        errors: [{ message }],
        extensions: { bff: 'kakeibo', upstream: UPSTREAM },
      },
      { status: 502 }
    );
  }
}
