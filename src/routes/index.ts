import { Router } from "express";

const router = Router();

// Define your user routes here
router.get("/", (req, res) => {
  res.send("User route");
});

export default router;