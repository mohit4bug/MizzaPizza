import dbConnect from "lib/mongodb";
import Order from "models/Order";


const handler = async (req, res) => {
    dbConnect()
    const { method, query: { id } } = req;

    if (method === "GET") { }
    if (method === "PUT") { }
    if (method === "DELETE") { }

}

export default handler