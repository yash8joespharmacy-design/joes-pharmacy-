import { type NextRequest, NextResponse } from "next/server"
import { calendlyClient } from "@/lib/calendly-api"

export async function GET(request: NextRequest) {
  try {
    const userEmail = request.nextUrl.searchParams.get("email")

    if (!userEmail) {
      return NextResponse.json({ error: "Email required" }, { status: 400 })
    }

    const appointments = await calendlyClient.getAppointments(userEmail)

    return NextResponse.json({
      success: true,
      data: appointments,
      auditLog: calendlyClient.getAuditLog(),
    })
  } catch (error) {
    console.error("[v0] Appointments API Error:", error)
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...data } = body

    let result

    switch (action) {
      case "schedule":
        result = await calendlyClient.scheduleAppointment(data)
        break
      case "cancel":
        result = await calendlyClient.cancelAppointment(data.appointmentId)
        break
      case "reschedule":
        result = await calendlyClient.rescheduleAppointment(data.appointmentId, data.newDate, data.newTime)
        break
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      data: result,
      auditLog: calendlyClient.getAuditLog(),
    })
  } catch (error) {
    console.error("[v0] Appointments API Error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
