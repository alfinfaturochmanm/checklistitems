module.exports = (express) => {

    var router = express.Router();

    router.get("/checklists/templates", null);
    router.post("/checklists/templates", null);
    router.get("/checklists/templates/:templateId", null);
    router.patch("/checklists/templates/:templateId", null);
    router.delete("/checklists/templates/:templateId", null);
    router.post("/checklists/templates/:templateId/assigns", null);
    
    router.get("/checklists/:checklistId", null);
    router.patch("/checklists/:checklistId", null);
    router.delete("/checklists/:checklistId", null);
    router.post("/checklists", null);
    router.get("/checklists", null);
    
    router.post("/checklists/complete", null);
    router.post("/checklists/incomplete", null);
    router.get("/checklists/:checklistId/items", null);
    router.post("/checklists/:checklistId/items", null);
    router.get("/checklists/:checklistId/items/:itemId", null);
    router.patch("/checklists/:checklistId/items/:itemId", null);
    router.delete("/checklists/:checklistId/items/:itemId", null);
    router.post("/checklists/:checklistId/items/_bulk", null);
    router.get("/checklists/items/summaries", null);
    router.get("/checklists/items", null);
    
    router.get("/checklists/histories", null);
    router.get("/checklist/histories/:historyId", null);

    // let router = app.Router();

}