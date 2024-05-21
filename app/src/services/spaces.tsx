import { response } from "express";
import { axios } from "../config/axios";
import _axios, { AxiosResponse } from "axios";

interface SpaceProps {
    userId: string,
    logo: string,
    name: string,
}

// Fetch users from the API
export const getUserSpaces = async (uId: string) => {
    try {
        const response = await axios.get(`spaces/user/${uId}`);
        return response.data; // This will include the response data, status, and other information
    }
    catch (error) {
        // Handle or throw the error as needed
        console.error('Error fetching users:', error);
        throw error;
    }
};


export const getSpace = async (spaceId: string) => {
    try {
        const response = await axios.get(`spaces/${spaceId}`);
        return response.data; // This will include the response data, status, and other information
    }
    catch (error) {
        // Handle or throw the error as needed
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const postSpace = async (space: SpaceProps) => {
    try {
        const response = await axios.post("/spaces", space);
        return response; // This will include the response data, status, and other information
    } 
    catch (error) {
        // Handle or throw the error as needed
        console.error('Error creating user:', error);
        throw error;
    }
};

export const putSpace = async (space: SpaceProps) => {
    try {
        const response = await axios.put("/spaces", space);
        return response; // This will include the response data, status, and other information
    } 
    catch (error) {
        // Handle or throw the error as needed
        console.error('Error creating user:', error);
        throw error;
    }
};

export const deleteSpace = async (spaceId: string) => {
    try {
        const response = await axios.delete(`spaces/${spaceId}`);
        return response; // This will include the response data, status, and other information
    } 
    catch (error) {
        // Handle or throw the error as needed
        console.error('Error creating user:', error);
        throw error;
    }
};


