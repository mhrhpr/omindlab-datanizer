import { SignJWT, jwtVerify } from 'jose'
const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'dev-secret-change-me')
export async function signAdmin(){ return new SignJWT({role:'admin'}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('8h').sign(secret) }
export async function verifyAdmin(token?:string){ if(!token) return false; try{ const {payload}=await jwtVerify(token,secret); return payload.role==='admin' }catch{return false} }
