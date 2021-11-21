module.exports = (app) => {

    const bodyParser = require('body-parser')

    var ChecklistController = require('../controllers/Checklist')(app);
    var ChecklistItemController = require('../controllers/ChecklistItem')(app);
    var ItemsController = require('../controllers/Items')(app);
    var HistoryController = require('../controllers/History')(app);
    var Auth = require('../middleware/Auth')
    Auth = Auth();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    
    app.get("/checklists/templates", Auth.authenticateToken, ChecklistController.listAllChecklistTemplate);
    app.post("/checklists/templates", Auth.authenticateToken, ChecklistController.createChecklistTemplate);
    app.get("/checklists/templates/:templateId", Auth.authenticateToken, ChecklistController.getChecklistTemplate);
    app.patch("/checklists/templates/:templateId", Auth.authenticateToken, ChecklistController.updateChecklistTemplate);
    app.delete("/checklists/templates/:templateId", Auth.authenticateToken, ChecklistController.deleteChecklistTemplate);
    app.post("/checklists/templates/:templateId/assigns", Auth.authenticateToken, ChecklistController.assignTemplate);

    app.get("/checklists/:checklistId", Auth.authenticateToken, ChecklistItemController.getChecklist);
    app.patch("/checklists/:checklistId", Auth.authenticateToken, ChecklistItemController.updateChecklist);
    app.delete("/checklists/:checklistId", Auth.authenticateToken, ChecklistItemController.deleteChecklist);
    app.post("/checklists", Auth.authenticateToken, ChecklistItemController.createChecklistTemplate);
    app.get("/checklists", Auth.authenticateToken, ChecklistItemController.getListOfChecklist);

    app.post("/checklists/complete", Auth.authenticateToken, ItemsController.completeItems);
    app.post("/checklists/incomplete", Auth.authenticateToken, ItemsController.incompleteItems);
    app.get("/checklists/:checklistId/items", Auth.authenticateToken, ItemsController.listAllItemsInGivenChecklists);
    app.post("/checklists/:checklistId/items", Auth.authenticateToken, ItemsController.createChecklistItems);
    app.get("/checklists/:checklistId/items/:itemId", Auth.authenticateToken, ItemsController.getChecklistItems);
    app.patch("/checklists/:checklistId/items/:itemId", Auth.authenticateToken, ItemsController.updateChecklistItems);
    app.delete("/checklists/:checklistId/items/:itemId", Auth.authenticateToken, ItemsController.deleteChecklistItems);
    app.post("/checklists/:checklistId/items/_bulk", Auth.authenticateToken, ItemsController.updateBulkChecklist);
    app.get("/checklists/items/summaries", Auth.authenticateToken, ItemsController.summaryItem);
    app.get("/checklists/items", Auth.authenticateToken, ItemsController.getAllItems);

    app.get("/checklists/histories", Auth.authenticateToken, HistoryController.getListHistory);
    app.get("/checklist/histories/:historyId", Auth.authenticateToken, HistoryController.getHistoryById);

    app.post("/gettoken", Auth.login);

    // app.use('/', app);

}