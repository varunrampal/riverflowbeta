export const clinicFormEmail = "varun.rampall@gmail.com";

export const formSuccessMessage =
  "Thanks! We would like to Thank you for your enquiry and assure you that one of our team member will contact you within 24-48 Hours";

export async function submitClinicForm(payload) {
  const response = await fetch(`https://formsubmit.co/ajax/${clinicFormEmail}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _template: "table",
      _captcha: "false",
      ...payload,
    }),
  });
  const data = await response.json().catch(() => null);

  if (!response.ok || data?.success === false) {
    throw new Error(
      data?.message ||
        "Your request could not be sent. Please call us at 604.621.8311."
    );
  }

  return formSuccessMessage;
}
