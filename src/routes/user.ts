import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Dummy response (Replace with real database logic)
         res.status(201).json({
            message: "User created successfully",
            user: { username, email }
        });
    } catch (error) {
         res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
