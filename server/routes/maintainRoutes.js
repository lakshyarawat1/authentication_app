import express from 'express'

const router = express.Router();

const jwtSecret= process.env.JWT_SECRET

router.get("/status", (req, res) => {
  res.send("Working");
});

router.get('/profile', (req, res) => {
  const token = req.cookies?.token;
  
  if (token)
  {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;
      res.json(userData)
    })
  }
  else
  {
    res.status(403).json('Empty token')
    }
})

export default router;