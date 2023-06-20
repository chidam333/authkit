import {fail,redirect} from "@sveltejs/kit"
import type { PageServerLoad,Actions } from "./$types"
import { auth } from "../../lib/server/db.server";
import { key } from "$lib/neon/schema";

export const load: PageServerLoad = async ({locals}) => {
    const {session} = await locals.auth.validateUser()
    if(session) throw redirect(302,'/')
    return {}
};
export const actions: Actions = {
    reg: async({request,locals})=>{
        const form = await request.formData()
        const username = form.get("username")
        const password = form.get("password")
        if(typeof username!="string" || typeof password!="string"){
            return fail(400)
        }
        try{
            const user = await auth.createUser({
                primaryKey:{
                    providerId:"username",
                    providerUserId:username,
                    password
                },attributes:{
                    username
                }
            })
            
            const session = await auth.createSession(user.userId)
            locals.auth.setSession(session)
            console.log({user,session})
        }catch(e){
            console.log({e})
            console.log("like wtf")
            return fail(400)
        }
    }
};