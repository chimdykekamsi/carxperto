const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

app.get("health_check", (req,res) => {
    res.status(200).json({
        status: "OK"
    });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});