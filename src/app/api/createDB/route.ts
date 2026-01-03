import { createDB } from "@/app/lib/db";

// REST API zur DB Erstellung
export async function GET() {
    try {
        await createDB();

        return Response.json(
        { status: "success", message: "Database initialized" },
        { status: 200 }
        );
    } catch (err) {
        console.error(err);

        return Response.json(
        { status: "error", error: "Database initialization failed" },
        { status: 500 }
        );
    }
}