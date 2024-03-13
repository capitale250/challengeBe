import http from "http";
import app from "./app";


const server = http.createServer(app);
const PORT = process.env.PORT || 8001;


// Schedule the cron job to run every minute

server.listen(process.env.PORT || 8001, () => {
  console.log(`Server is running on port ${PORT}`);
});

// export default server.listen(process.env.PORT || 5000, () => { 
//   console.log("Express server listening on port %d in %s mode", 
//   this.address().port, server.settings.env);
// });