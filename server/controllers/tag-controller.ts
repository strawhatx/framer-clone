import mongoose from "mongoose";
import Tag from "../models/tag";
import { Request, Response, NextFunction } from "express";
import { TAG_CREATE_ERROR_MESSAGE, TAG_CREATE_SUCCESS_MESSAGE, TAG_DELETE_SUCCESS_MESSAGE, TAG_DELETE_ERROR_MESSAGE, TAG_UPDATE_ERROR_MESSAGE, TAG_UPDATE_SUCCESS_MESSAGE } from "../messages/Tag";

/**
* Tag Controller
*/
export class TagController {
    constructor() { }

    /**
     * Gets Tags
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getTags(req: Request, res: Response, next: NextFunction) {
        try {
            const tags = await Tag.find({});

            res.status(200).json({ Tags: tags })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

     /**
     * Gets user Tags
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
     async getTagsBySpaceId(req: Request, res: Response, next: NextFunction) {
        try {
            const tags = await Tag.find({space: req.body.id});

            res.status(200).json({ Tags: tags })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified Tag by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getTagById(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await Tag.findById(req.params.id).populate("projects");

            res.status(200).json({ Tag: tag });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Public route create Tag profile
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createTag(req: Request, res: Response, next: NextFunction) {
        try {
            const tag = await Tag.create({
                space: req.body.spaceId,
                name:req.body.name,
            });

            if (!tag) throw new Error(TAG_CREATE_ERROR_MESSAGE);

            res.status(201).json({
                message: TAG_CREATE_SUCCESS_MESSAGE,
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
    * Update Tag
    * @param req Request
    * @param res Response
    * @param next Next Function
    */
    async updateTag(req: Request, res: Response, next: NextFunction) {
        try {
            let tag = { _id: req.body.uid };

            //only assign feilds that have values          
            if (req.body.name) tag = Object.assign(tag, { name: req.body.name});

            const updated = await Tag.findByIdAndUpdate(tag._id, tag);

            if (!updated) throw new Error(TAG_UPDATE_ERROR_MESSAGE);

            res.status(204).json({
                message: TAG_UPDATE_SUCCESS_MESSAGE,
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Remove Tag
     * @param id 
     * @returns  response message
     */
    async deleteTag(req: Request, res: Response, next: NextFunction) {
        try {
            let deleted = await Tag.findByIdAndDelete({ _id: req.params.id });
        
            if (!deleted) throw new Error(TAG_DELETE_ERROR_MESSAGE);

            res.status(200).json({
                message: TAG_DELETE_SUCCESS_MESSAGE,
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}