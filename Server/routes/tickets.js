import express from "express";
import {
  addTicket,
  getTickets,
  updateTicket,
  deleteTicket,
} from "../controllers/tickets.js";
import auth from "../middleware/auth.js";
const router = express.Router();


router.get("/", getTickets);
router.post("/add",auth,addTicket);
router.put("/:id",updateTicket);
router.post("/delete", deleteTicket);

export default router;
