import { NextResponse } from "next/server"

// Health check endpoint for monitoring
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "Joe's Pharmacy App",
    version: "1.0.0",
    hipaaCompliant: true,
    integrations: {
      pioneerRx: !!process.env.PIONEERRX_ENDPOINT_URL,
      calendly: !!process.env.CALENDLY_API_KEY,
    },
  })
}
