const accountModel = require('../models/account.model');

module.exports = {
    createAccount : async (req, res) => {
        const body = req.body;
        const newAccount = await accountModel.create(body);
        return res.status(201).json(newAccount);
    },
    getAccounts : async (req, res) => {
        const accounts = await accountModel.find();
        return res.status(200).json(accounts);
    },
    updateAccount : async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const updateAccount = await accountModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updateAccount);
    },
    deleteAccount : async (req, res) => {
        const id = req.params.id;
        const deleteAccount = await accountModel.findByIdAndDelete(id);
        return res.status(200).json(deleteAccount);
    }
}