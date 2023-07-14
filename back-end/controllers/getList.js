const queryModal = require("../modals/queries");

const getList = async (data) => {
  try {
    const list = queryModal.find({}, { updated_at: 0, _id: 0, __v: 0 });
    return list;
  } catch (e) {
    console.error("Error fetching query list:", e);
  }
};

module.exports = getList;
