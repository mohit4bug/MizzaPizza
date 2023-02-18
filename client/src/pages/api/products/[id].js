import dbConnect from "lib/mongodb";
import ProductModel from '../../../../models/Product'

export default async function handler(req, res) {
    await dbConnect();

    const { method, query: {
        id
    } } = req;

    if (method === "GET") {
        try {
            const product = await ProductModel.findById(id);
            res.status(200).json({
                message: "Pizza fetched successfully",
                success: true,
                data: product
            })
        }
        catch (error) {
            res.status(500).json({
                message: e.message,
                success: false
            })
        }

    }
    if (method === "DELETE") {
        try {
            await ProductModel.findByIdAndDelete(id);
            res.status(200).json({
                message: "Pizza deleted successfully",
                success: true,
            })
        }
        catch (error) {
            res.status(500).json({
                message: e.message,
                success: false
            })
        }

    }
}