require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors({
    origin: (process.env.CLIENT_ORIGINS || "http://localhost:5173,http://localhost:5174")
        .split(",")
        .map((origin) => origin.trim()),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
app.use(bodyParser.json());

// app.get("/addHoldings", async(req,res) => {
//     let tempHoldings = [
//          {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.day,
//     day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("Done!!")
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find();
        res.json(allHoldings);
    } catch (error) {
        res.status(500).json({ message: "Unable to fetch holdings" });
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionsModel.find();
        res.json(allPositions);
    } catch (error) {
        res.status(500).json({ message: "Unable to fetch positions" });
    }
});

app.post("/newOrder", async (req, res) => {
    try {
        const newOrder = new OrdersModel(req.body);
        await newOrder.save();
        res.send("Order saved!");
    } catch (error) {
        res.status(500).json({ message: "Unable to save order" });
    }
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});