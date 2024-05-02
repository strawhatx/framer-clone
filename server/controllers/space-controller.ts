import mongoose from "mongoose";
import Space from "../models/space";
import { Request, Response, NextFunction } from "express";
import { SPACE_CREATE_ERROR_MESSAGE, SPACE_CREATE_SUCCESS_MESSAGE, SPACE_DELETE_SUCCESS_MESSAGE, SPACE_DELETE_ERROR_MESSAGE, SPACE_UPDATE_ERROR_MESSAGE, SPACE_UPDATE_SUCCESS_MESSAGE } from "../messages/space";



/**
* Space Controller
*/

export class SpaceController {
    constructor() { }

    /**
     * Gets Spaces
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getSpaces(req: Request, res: Response, next: NextFunction) {
        try {
            const spaces = await Space.find({});

            res.status(200).json({ spaces: spaces })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

     /**
     * Gets user Spaces
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
     async getSpacesByUserId(req: Request, res: Response, next: NextFunction) {
        try {
            const Spaces = await Space.find({user: req.body.id});

            res.status(200).json({ Spaces: Spaces })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified Space by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getSpaceById(req: Request, res: Response, next: NextFunction) {
        try {
            const space = await Space.findById(req.params.id);

            res.status(200).json({ space: space })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Public route create Space profile
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createSpace(req: Request, res: Response, next: NextFunction) {
        try {
            const space = await Space.create({
                user: req.body.userId,
                name:req.body.name,
            });

            if (!space) throw new Error(SPACE_CREATE_ERROR_MESSAGE);

            res.status(201).json({
                message: SPACE_CREATE_SUCCESS_MESSAGE,
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
    * Update Space
    * @param req Request
    * @param res Response
    * @param next Next Function
    */
    async updateSpace(req: Request, res: Response, next: NextFunction) {
        try {
            let space = { _id: req.body.uid };

            //only assign feilds that have values          
            if (req.body.name) space = Object.assign(space, { name: req.body.name});

            const updated = await Space.findByIdAndUpdate(space._id, space);

            if (!updated) throw new Error(SPACE_UPDATE_ERROR_MESSAGE);

            res.status(204).json({
                message: SPACE_UPDATE_SUCCESS_MESSAGE,
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }


    /**
     * Remove Space
     * @param id 
     * @returns  response message
     */
    async deleteSpace(req: Request, res: Response, next: NextFunction) {
        try {
            let deleted = await Space.findByIdAndDelete({ _id: req.params.id });
        
            if (!deleted) throw new Error(SPACE_DELETE_ERROR_MESSAGE);

            res.status(200).json({
                message: SPACE_DELETE_SUCCESS_MESSAGE,
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}