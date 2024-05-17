const jwt = require('jsonwebtoken')

const jwtAuthMiddleware = (req, res, next) => {

  const authorization = req.headers.authorization

  if (!authorization) {
    return res.status(401).json({ error: 'Token is Not Found.' })
  }

  const token = authorization.split(' ')[1];

  if (!token) {
    res.status(400).json({ error: 'Unathorized User' })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT)
    req.user = decoded
    next()
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Invalid token' });
  }

}

const generateToken = (userData) => {
  return jwt.sign(userData, process.env.SECRET_JWT,{expiresIn:30000})
}

module.exports = {jwtAuthMiddleware,generateToken}