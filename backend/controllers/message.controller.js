import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
     try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
            
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }

        //SOCKETIO will be used below


        //await conversation.save(); this goes first before the newMessage.save()
        //await newMessage.save(); this goes second after the conversation.save()

        await Promise.all([conversation.save(), newMessage.save()]); //this is the same as the two lines above but at the same time

        
        res.status(201).json(newMessage);
            //message: "Message sent successfully",
            //messageId: newMessage._id,
            //senderId: newMessage.senderId,
            //conversationId: conversation._id,
        
     } catch (error) {
        console.log("Error in the send message controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
     }
};

export const getMessages = async (req, res) =>{
    try {
        const { id: userToChatId }= req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants: { $all : [senderId, userToChatId]},
        }).populate("messages");//actual messages not just the references

        if (!conversation) return res.status(404).json([]);

            const messages = conversation
        

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in the getMessages controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
};