module.exports = (express) => {

    const Items = [];

    Items.completeItems = (req, res) => {
        return true;
    };

    Items.incompleteItems = (req, res) => {
        return true;
    };

    Items.listAllItemsInGivenChecklists = (req, res) => {
        return true;
    };

    Items.createChecklistItems = (req, res) => {
        return true;
    };

    Items.getChecklistItems = (req, res) => {
        return true;
    };

    Items.updateChecklistItems = (req, res) => {
        return true;
    };

    Items.deleteChecklistItems = (req, res) => {
        return true;
    };

    Items.updateBulkChecklist = (req, res) => {
        return true;
    };

    Items.summaryItem = (req, res) => {
        return true;
    };

    Items.getAllItems = (req, res) => {
        return true;
    };

    return Items;

}