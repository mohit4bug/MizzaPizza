import dbConnect from "lib/mongodb";
import Order from "models/Order";


const handler = async (req, res) => {

    dbConnect()
    const { method } = req;

    if (method === "GET") { }
    if (method === "POST") { }

}

export default handler