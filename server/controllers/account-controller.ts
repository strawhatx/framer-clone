import mongoose from "mongoose";
import * as admin from "firebase-admin";
import { Request, Response, NextFunction } from "express";
import { ACCOUNT_CREATE_ERROR_MESSAGE, ACCOUNT_CREATE_SUCCESS_MESSAGE, ACCOUNT_DELETE_SUCCESS_MESSAGE, ACCOUNT_UPDATE_ERROR_MESSAGE, ACCOUNT_UPDATE_SUCCESS_MESSAGE } from "../messages/account";

/**
* User Controller
*/
export class AccountController {
    constructor() { }

    /**
     * Gets users
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getUserAccounts(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await admin.auth().getUsers([])

            res.status(200).json({ users })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified user by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getUserAccountById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await admin.auth().getUser(req.params.id)

            res.status(200).json({ user: user })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Public route sign up for an account
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createAccount(req: Request, res: Response, next: NextFunction) {
        try {

            const user = await admin.auth().createUser({
                email: req.body.email,
                password: req.body.password,
                emailVerified: false,
                disabled: false,
            });

            if (!user) {
                throw new Error(ACCOUNT_CREATE_ERROR_MESSAGE);
            }

            res.status(201).json(user);
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
    * Update User
    * @param req Request
    * @param res Response
    * @param next Next Function
    */
    async updateAccount(req: Request, res: Response, next: NextFunction) {
        try {
            const updated = await admin.auth().updateUser(req.body.uid, { email: req.body.email } );

            if (!updated) throw new Error(ACCOUNT_UPDATE_ERROR_MESSAGE);

            res.status(204).json(updated);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Remove User
     * @param id 
     * @returns  response message
     */
    async deleteAccount(req: Request, res: Response, next: NextFunction) {
        try {

            await admin.auth().deleteUser(req.params.id);

            res.status(200).json({
                message: ACCOUNT_DELETE_SUCCESS_MESSAGE,
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}