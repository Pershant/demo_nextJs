import excuteQuery from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            let del_user = await excuteQuery({
                query: 'delete from user where id=?',
                values: [req.query.id]
            })
            console.log(del_user)
            res.status(200).json({
                code: 200,
                message: "user deleted successfully",
                body: {}
            })

        } catch (error) {
            console.log(error)
        }
    }
}