import { describe, expect, it } from "vitest";
import { buildWorkshopWhatsAppMessage, workshopRequestSchema } from "./RequestForm";

describe("workshop request validation", () => {
  it("accepts a whole team size of at least 1", () => {
    const request = { name: "Evgenia", company: "", teamSize: "1", preferredDate: "", notes: "" };
    expect(workshopRequestSchema.safeParse(request).success).toBe(true);
  });

  it.each(["0", "-2", "1.5", "five"])("rejects invalid team size %s", (teamSize) => {
    const request = { name: "Evgenia", company: "", teamSize, preferredDate: "", notes: "" };
    expect(workshopRequestSchema.safeParse(request).success).toBe(false);
  });

  it("omits empty optional lines from the WhatsApp message", () => {
    const message = buildWorkshopWhatsAppMessage({
      name: "Evgenia",
      company: "",
      teamSize: "12",
      preferredDate: "",
      notes: "",
    });

    expect(message).toContain("Name: Evgenia");
    expect(message).toContain("Team size: 12");
    expect(message).not.toContain("Company:");
    expect(message).not.toContain("Preferred date:");
    expect(message).not.toContain("Notes:");
  });
});
