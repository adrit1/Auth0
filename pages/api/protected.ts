import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function protectedRoute(req, res) {
    const session = await getSession(req, res);

    if (!session || !session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    res.json({ message: "This is a protected API route", user: session.user });
});
