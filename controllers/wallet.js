const asyncHandler = require("express-async-handler");

// send money
const handleSendMoney = asyncHandler(async (req, res) => {
  const { recipient, amountToSend } = req.body;

  // check whether my phone number exists
  // check my account balance
  // if accBalanace - amountToSend > 0 then allow transaction and deduct result else return not enough to send
  // if sending, find recipient and accredit the money
});

// check balance
const handleCheckBalance = asyncHandler(async (req, res) => {
  // check the authenticated user balance
});

// withdraw cash
const handleWithdrawCash = asyncHandler(async (req, res) => {
  const { amountToWithdraw } = req.body;
  // check balance if balance - amountToWithdraw > 0 then allow else not enough money
});
