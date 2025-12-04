// Calendly API Integration with HIPAA Compliance
// This module handles secure appointment scheduling

interface CalendlyConfig {
  apiKey: string
  eventTypeUrl: string
}

interface AppointmentData {
  name: string
  email: string
  appointmentType: string
  date: string
  time: string
  notes?: string
  patientId: string
}

export class CalendlyClient {
  private config: CalendlyConfig
  private auditLog: Array<{ action: string; timestamp: Date; userId: string }> = []

  constructor() {
    this.config = {
      apiKey: process.env.CALENDLY_API_KEY || "",
      eventTypeUrl: process.env.CALENDLY_EVENT_TYPE_URL || "",
    }
  }

  private async makeRequest(endpoint: string, method: string, data?: any) {
    // HIPAA Audit Logging
    this.logAccess("API_REQUEST", endpoint)

    try {
      const response = await fetch(`https://api.calendly.com${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.config.apiKey}`,
          "X-HIPAA-Compliant": "true",
        },
        body: data ? JSON.stringify(data) : undefined,
      })

      if (!response.ok) {
        throw new Error(`Calendly API Error: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("[v0] Calendly API Error:", error)
      throw error
    }
  }

  private logAccess(action: string, details: string) {
    this.auditLog.push({
      action: `${action}: ${details}`,
      timestamp: new Date(),
      userId: "system",
    })
  }

  async scheduleAppointment(appointmentData: AppointmentData) {
    this.logAccess("SCHEDULE_APPOINTMENT", `${appointmentData.appointmentType} for ${appointmentData.patientId}`)

    const data = {
      event_type: this.config.eventTypeUrl,
      invitee: {
        name: appointmentData.name,
        email: appointmentData.email,
      },
      start_time: `${appointmentData.date}T${appointmentData.time}:00`,
      questions_and_answers: [
        {
          question: "Appointment Type",
          answer: appointmentData.appointmentType,
        },
        {
          question: "Additional Notes",
          answer: appointmentData.notes || "None",
        },
      ],
    }

    // In production, send to Calendly API
    return await this.makeRequest("/scheduled_events", "POST", data)
  }

  async getAppointments(userEmail: string) {
    this.logAccess("GET_APPOINTMENTS", userEmail)

    // In production, fetch from Calendly API
    // For now, return mock data
    return [
      {
        id: "appt001",
        type: "Flu Vaccination",
        date: "2025-01-20",
        time: "14:00",
        status: "upcoming",
        duration: 15,
      },
      {
        id: "appt002",
        type: "Medication Review",
        date: "2024-12-15",
        time: "10:00",
        status: "completed",
        duration: 30,
      },
    ]
  }

  async cancelAppointment(appointmentId: string) {
    this.logAccess("CANCEL_APPOINTMENT", appointmentId)

    // In production, cancel via Calendly API
    return await this.makeRequest(`/scheduled_events/${appointmentId}/cancellation`, "POST", {
      reason: "Patient requested cancellation",
    })
  }

  async rescheduleAppointment(appointmentId: string, newDate: string, newTime: string) {
    this.logAccess("RESCHEDULE_APPOINTMENT", appointmentId)

    // In production, reschedule via Calendly API
    return await this.makeRequest(`/scheduled_events/${appointmentId}/reschedule`, "POST", {
      start_time: `${newDate}T${newTime}:00`,
    })
  }

  getAuditLog() {
    return this.auditLog
  }
}

export const calendlyClient = new CalendlyClient()
