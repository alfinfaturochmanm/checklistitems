module.exports = (express) => {
    
    var ChecklistController = require('../controllers/Checklist')(express);
    var ChecklistItemController = require('../controllers/ChecklistItem')(express);
    var ItemsController = require('../controllers/Items')(express);
    var HistoryController = require('../controllers/History')(express);
    var router = express.Router();
    app = express();

    router.get("/checklists/templates", ChecklistController.listAllChecklistTemplate);
    router.post("/checklists/templates", ChecklistController.createChecklistTemplate);
    router.get("/checklists/templates/:templateId", ChecklistController.getChecklistTemplate);
    router.patch("/checklists/templates/:templateId", ChecklistController.updateChecklistTemplate);
    router.delete("/checklists/templates/:templateId", ChecklistController.deleteChecklistTemplate);
    router.post("/checklists/templates/:templateId/assigns", ChecklistController.assignTemplate);
    
    router.get("/checklists/:checklistId", ChecklistItemController.getChecklist);
    router.patch("/checklists/:checklistId", ChecklistItemController.updateChecklist);
    router.delete("/checklists/:checklistId", ChecklistItemController.deleteChecklist);
    router.post("/checklists", ChecklistItemController.createChecklistTemplate);
    router.get("/checklists", ChecklistItemController.getListOfChecklist);
    
    router.post("/checklists/complete", ItemsController.completeItems);
    router.post("/checklists/incomplete", ItemsController.incompleteItems);
    router.get("/checklists/:checklistId/items", ItemsController.listAllItemsInGivenChecklists);
    router.post("/checklists/:checklistId/items", ItemsController.createChecklistItems);
    router.get("/checklists/:checklistId/items/:itemId", ItemsController.getChecklistItems);
    router.patch("/checklists/:checklistId/items/:itemId", ItemsController.updateChecklistItems);
    router.delete("/checklists/:checklistId/items/:itemId", ItemsController.deleteChecklistItems);
    router.post("/checklists/:checklistId/items/_bulk", ItemsController.updateBulkChecklist);
    router.get("/checklists/items/summaries", ItemsController.summaryItem);
    router.get("/checklists/items", ItemsController.getAllItems);
    
    router.get("/checklists/histories", HistoryController.getListHistory);
    router.get("/checklist/histories/:historyId", HistoryController.getHistoryById);

    app.use('/', router);
    

    // let router = app.Router();

}