import ReadLogger from "../../models/ReadLogger";


//this service must be reconsidered
//This service aims to distinguish whehter the book user selected are readed or wish to read in the future.
const wishRead = async (req, res) => {
    const { body: logData } = req; 

    try {
        const logResult;
    } catch (err) {
        res.status(400).json({ success: false, msg: err });
    }
}