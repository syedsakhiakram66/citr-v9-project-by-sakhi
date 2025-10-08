export default async function postContactContactInfo(userName, email, message) {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userName, email, message}),
    });

    if (!response.ok) {
        throw new Error("Failed to send contact information");
    }

    return response.json();
}