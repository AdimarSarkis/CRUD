import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, username, email } = req.body;

    if (!name || !username || !email) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error creating User" });
    }
    res.status(201).send({
      message: "User created successfully",
      user: {
        id: user._id,
        name,
        username,
        email,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    users.length === 0
      ? res.status(400).send({ message: "There are no registered users" })
      : res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email } = req.body;

    if (!name && !username && !email) {
      res
        .status(400)
        .send({ message: "Submit at least one fields for update" });
    }

    const { id, user } = req;

    await userService.updateService(id, name, username, email);

    res.send({ message: "User Successufully updated" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req;

    await userService.deleteUserService(id);
    res.send({ message: "User Successufully deleted" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
export { create, findAll, findById, update, deleteUser };
