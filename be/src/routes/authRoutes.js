import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../prismaClient";

const router = express.Router();
//
//// Register new User End point
