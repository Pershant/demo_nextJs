import excuteQuery from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // console.log(req.query, '=============================hrerer'); return
      let get_data = await excuteQuery({
        query: 'select * from user where id=?',
        values: [req.query.id]
      })
      console.log(get_data)
      res.status(200).json({
        message: "user get successfully",
        body: get_data
      })
    } catch (error) {
      console.log(error)
    }
  }
}