import express from 'express'

const router = express.Router();

router.get("/status", (req, res) => {
  res.send("Working");
});

export default router;