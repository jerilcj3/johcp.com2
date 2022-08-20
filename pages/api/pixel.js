export default function handler(req, res) {
  const query = req.query;
  const { token, path } = query;
  
  //insert token, path in mongodb
  
  
  res.status(200).json({ name: "John Doe" });
}
