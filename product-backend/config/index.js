require("dotenv").config()
const config = {
    db: {
      url: process.env.DBURL
    },
    port: process.env.PORT,
  }
  
  export default config 