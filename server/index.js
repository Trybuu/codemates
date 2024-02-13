require('dotenv').config()
const app = require('./app/app')

const PORT = process.env.SERVER_PORT || 8000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
