const asyncHandler = require("express-async-handler");

//@desc Get goal
// @route GET/api/goals
//@acces Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//@desc Set goal
// @route POST/api/goals
//@acces Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text");
  }
  res.status(200).json({ messege: "set goals" });
});

//@desc Update goal
// @route PUT/api/goals/:id
//@acces Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ messege: `Upadate goals ${req.param.id}` });
});

//@desc Delete goal
// @route DELETE/api/goals/:id
//@acces Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ messege: `Delete goals ${req.param.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
