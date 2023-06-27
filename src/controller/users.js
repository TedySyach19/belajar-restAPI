// Create user mengirim data
// disini kita harus membuat middleware yang mengijinkan data dalam bentuk json
const userModel = require("../models/users");
const createNewUsers = (req, res) => {
  console.log(req.body);
  res.json({
    message: "POST create new users Berhasil",
    data: req.body,
  });
};

// Read user data
const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers();
    res.json({
      message: "GET all users Berhasil",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Update user data
const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log(req.params);
  res.json({
    message: "Update user Berhasil",
    data: req.body,
  });
};

// Delete user data
const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "Delete user Berhasil",
    data: {
      id: idUser,
      name: "Taufik Hidayat",
      kelas: "XI IPA 7",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
