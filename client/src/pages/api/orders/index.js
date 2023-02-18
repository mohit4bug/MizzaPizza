import dbConnect from "lib/mongodb";
import Order from "models/Order";


const handler = async (req, res) => {

    dbConnect()
    const { method } = req;

    if (method === "GET") {
        try {
            const orders = await Order.find();
            res.status(200).json({
                message: "Order fetched successfully",
                success: true,
                data: orders
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false,
            });
        }
    }
    if (method === "POST") {
        try {
            const order = await Order.create(req.body);
            res.status(201).json({
                message: "Order created successfully",
                success: true,
                data: order

            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                success: false,
            });
        }
    }

}

export default handler