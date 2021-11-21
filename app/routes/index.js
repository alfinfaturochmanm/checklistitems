module.exports = (express) => {
    
    var ChecklistController = require('../controllers/Checklist')(express);
    var ChecklistItemController = require('../controllers/ChecklistItem')(express);
    var ItemsController = require('../controllers/Items')(express);
    var HistoryController = require('../controllers/History')(express);
    var router = express.Router();
    var Auth = require('../middleware/Auth')
    Auth = middleware();

    app = express();

    router.get("/checklists/templates", Auth.authenticateToken, ChecklistController.listAllChecklistTemplate);
    router.post("/checklists/templates", Auth.authenticateToken, ChecklistController.createChecklistTemplate);
    router.get("/checklists/templates/:templateId", Auth.authenticateToken, ChecklistController.getChecklistTemplate);
    router.patch("/checklists/templates/:templateId", Auth.authenticateToken, ChecklistController.updateChecklistTemplate);
    router.delete("/checklists/templates/:templateId", Auth.authenticateToken, ChecklistController.deleteChecklistTemplate);
    router.post("/checklists/templates/:templateId/assigns", Auth.authenticateToken, ChecklistController.assignTemplate);
    
    router.get("/checklists/:checklistId", Auth.authenticateToken, ChecklistItemController.getChecklist);
    router.patch("/checklists/:checklistId", Auth.authenticateToken, ChecklistItemController.updateChecklist);
    router.delete("/checklists/:checklistId", Auth.authenticateToken, ChecklistItemController.deleteChecklist);
    router.post("/checklists", Auth.authenticateToken, ChecklistItemController.createChecklistTemplate);
    router.get("/checklists", Auth.authenticateToken, ChecklistItemController.getListOfChecklist);
    
    router.post("/checklists/complete", Auth.authenticateToken, ItemsController.completeItems);
    router.post("/checklists/incomplete", Auth.authenticateToken, ItemsController.incompleteItems);
    router.get("/checklists/:checklistId/items", Auth.authenticateToken, ItemsController.listAllItemsInGivenChecklists);
    router.post("/checklists/:checklistId/items", Auth.authenticateToken, ItemsController.createChecklistItems);
    router.get("/checklists/:checklistId/items/:itemId", Auth.authenticateToken, ItemsController.getChecklistItems);
    router.patch("/checklists/:checklistId/items/:itemId", Auth.authenticateToken, ItemsController.updateChecklistItems);
    router.delete("/checklists/:checklistId/items/:itemId", Auth.authenticateToken, ItemsController.deleteChecklistItems);
    router.post("/checklists/:checklistId/items/_bulk", Auth.authenticateToken, ItemsController.updateBulkChecklist);
    router.get("/checklists/items/summaries", Auth.authenticateToken, ItemsController.summaryItem);
    router.get("/checklists/items", Auth.authenticateToken, ItemsController.getAllItems);
    
    router.get("/checklists/histories", Auth.authenticateToken, HistoryController.getListHistory);
    router.get("/checklist/histories/:historyId", Auth.authenticateToken, HistoryController.getHistoryById);

    app.use('/', router);
    

    // let router = app.Router();

}