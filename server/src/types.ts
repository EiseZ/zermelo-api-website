import { Firestore } from "firebase/firestore";
import { Request, Response } from "express";

export type context = {
    // Set types of graphql context
    db: Firestore;
    res: Response;
    req: Request;
};
