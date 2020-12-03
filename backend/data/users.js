import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Bada Bing',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jane Bada Boom',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },

]

export default users