import { MySqlConnector } from "../../../lib/mySQL";

export default async function handler(req: any, res: any) {
    if(req.method === 'POST' && req.body && req.body.email){
        try {
            const result = await MySqlConnector.getInstance().getUserByEmail(req.body.email);
            if(result) {
                res.status(200).json(result);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'});
        }
        
    }
}