// Middleware to check userId and hasPremium plan

import { clerkClient } from "@clerk/express";
import { request } from "express";


export const auth = async (req, res, next )=>{
    try {
        const {userId, has}=await req.auth();
        const hasPremium = await has({plan: 'premium'});

        const user = await clerkClient.users.getUser(userId);

        if(!hasPremiumPlan && user.privateMetadata.free_usage){
            req.free_usage = user.privateMetadata.free_usage
        } else{
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0
                }
            })
            request.free_usage = 0;
        }

        req.plan = hasPremium ? 'premium' : 'free';
        next()
    } catch (error){
           res.json({success: false, message: error.message})
    }
}