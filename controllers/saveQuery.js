const queryModal = require("../modals/queries");

const saveQuery = async (data) => {
  try {
    const query = { ...data };
    const modal = new queryModal(query);
    await modal.save();
    return true;
  } catch (e) {
    console.error("Error saving query:", e);
  }
};

module.exports = saveQuery;
