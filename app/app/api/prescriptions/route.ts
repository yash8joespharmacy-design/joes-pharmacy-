import { type NextRequest, NextResponse } from "next/server"
import { pioneerRxClient } from "@/lib/pioneerrx-api"

export async function GET(request: NextRequest) {
  try {
    const patientId = request.nextUrl.searchParams.get("patientId")

    if (!patientId) {
      return NextResponse.json({ error: "Patient ID required" }, { status: 400 })
    }

    const prescriptions = await pioneerRxClient.getPatientPrescriptions(patientId)

    return NextResponse.json({
      success: true,
      data: prescriptions,
      auditLog: pioneerRxClient.getAuditLog(),
    })
  } catch (error) {
    console.error("[v0] Prescriptions API Error:", error)
    return NextResponse.json({ error: "Failed to fetch prescriptions" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...data } = body

    let result

    switch (action) {
      case "refill":
        result = await pioneerRxClient.requestRefill(data.rxNumber, data.patientId, data.pickupDate)
        break
      case "transfer":
        result = await pioneerRxClient.transferPrescription(data)
        break
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      data: result,
      auditLog: pioneerRxClient.getAuditLog(),
    })
  } catch (error) {
    console.error("[v0] Prescriptions API Error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
