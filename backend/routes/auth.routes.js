import express from "_express";

const router = express.Router();
router.get("/login", (req,res) => {
    res.send("Login Route");
});

export default router;
