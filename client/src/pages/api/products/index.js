import dbConnect from "lib/mongodb";
import ProductModel from '../../../../models/Product'

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    if (method === "GET") {
        try {
            const products = await ProductModel.find();
            res.status(200).json({
                message: "Pizzas fetched successfully",
                success: true,
                data: products
            })
        }
        catch (error) {
            res.status(500).json({
                message: e.message,
                success: false
            })
        }

    }
    if (method === "POST") {
        try {
            await ProductModel.create(req.body);
            res.status(201).json({
                message: "Product created successfully",
                success: true
            })
        }
        catch (error) {
            res.status(500).json({
                message: error.message,
                success: false
            })
        }
    }

}