import * as userProgressionService from '../services/services.js';
import asyncHandler from 'express-async-handler';

export const getUserProgressions = asyncHandler(async (req, res) => {
    const userProgressions = await userProgressionService.getAllUserProgressions();
    return res.status(200).json(userProgressions);
});

export const getUserProgressionById = asyncHandler(async (req, res) => {
    const userProgression = await userProgressionService.getUserProgressionById(req.params.id);
    return res.status(200).json(userProgression);
});

export const createUserProgression = asyncHandler(async (req, res) => {
    const insertedUserProgression = await userProgressionService.createUserProgression(req.body);
    return res.status(201).json(insertedUserProgression);
});

export const updateUserProgression = asyncHandler(async (req, res) => {
    const updatedUserProgression = await userProgressionService.updateUserProgression(req.params.id, req.body);
    return res.status(200).json(updatedUserProgression);
});

export const deleteUserProgression = asyncHandler(async (req, res) => {
    const numRows = await userProgressionService.deleteUserProgression(req.params.id);
    return res.status(204).json(numRows);
});
