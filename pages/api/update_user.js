import { userAgent } from "next/server";
import excuteQuery from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === "PUT") {
        try {
            console.log(req.body.id, '====================hrerer');
            let update_data = await excuteQuery({
                query: `UPDATE user SET name="${req.body.name}",phone=${req.body.phone},email="${req.body.email}" WHERE id=?`,
                values: [req.body.id],
            })
            let get_user = await excuteQuery({
                query: 'select * from user where id=?',
                values: [req.body.id]
            })
            console.log(get_user)
            res.status(200).json({
                code: 200,
                "message": "user updated successfully",
                body: get_user

            })
        } catch (error) {
            console.log(error)
        }
    }
}