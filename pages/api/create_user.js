import excuteQuery from '../../lib/db'
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(req.body.name, '==================================rtrtrt0');
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      const salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(req.body.password, salt);
      hash = hash.replace('$2b$', '$2y$');
      console.log(hash, '================hrere');
      let result = await excuteQuery({
        query: 'INSERT INTO user(id,name,phone,email,password) VALUES(?,?,?,?,?)',
        values: [randomNumber, req.body.name, req.body.phone, req.body.email, hash],
      });
      console.log(result)
      res.status(200).json({
        'success': true,
        'message': "User added successfully",
        'body': result
      }
      )
    } catch (error) {
      console.log(error);
    }

  }
}
