import User from "../models/user.model.js";

export const  getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");//this lets us see the users except the logged in user minus their passwords
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log( "Eroor in the gwt users for side bar controller:", error.message);
        resstatus(500).json({ error: "Internal Server Error" });
    }
}