module.exports = (express) => {

    const ChecklistItem = [];

    ChecklistItem.getChecklist = (req, res) => {

        let data_return = {
            "data": {
                "type": "checklists",
                "id": 1,
                "attributes": {
                    "object_domain": "contact",
                    "object_id": "1",
                    "description": "Need to verify this guy house.",
                    "is_completed": false,
                    "due": null,
                    "urgency": 0,
                    "completed_at": null,
                    "last_update_by": null,
                    "update_at": null,
                    "created_at": "2018-01-25T07:50:14+00:00"
                },
                "links": {
                    "self": "https://dev-kong.command-api.kw.com/checklists/50127"
                }
            }
        }

        req.send(data_return);

    };

    ChecklistItem.updateChecklist = (req, res) => {

        let data_return = {
            "data": {
                "type": "checklists",
                "id": 1,
                "attributes": {
                    "object_domain": "contact",
                    "object_id": "1",
                    "description": "Need to verify this guy house.",
                    "is_completed": false,
                    "due": null,
                    "urgency": 0,
                    "completed_at": null,
                    "last_update_by": null,
                    "update_at": null,
                    "created_at": "2018-01-25T07:50:14+00:00"
                },
                "links": {
                    "self": "https://dev-kong.command-api.kw.com/checklists/50127"
                }
            }
        }

        req.send(data_return)

    };

    ChecklistItem.deleteChecklist = (req, res) => {



    };

    ChecklistItem.createChecklistTemplate = (req, res) => {

        let data_return = {
            "data": {
                "type": "checklists",
                "id": "1547",
                "attributes": {
                    "object_domain": "contact",
                    "object_id": "1",
                    "task_id": "123",
                    "description": "Need to verify this guy house.",
                    "is_completed": false,
                    "due": "2019-01-19T18:34:51+00:00",
                    "urgency": "2",
                    "completed_at": null,
                    "updated_by": null,
                    "created_by": 556396,
                    "created_at": "2019-04-12T14:13:42+00:00",
                    "updated_at": "2019-04-12T14:13:42+00:00"
                },
                "links": {
                    "self": "http://localhost:8000/api/v1/checklists/1547"
                }
            }
        }

        req.send(data_return);

    };

    ChecklistItem.getListOfChecklist = (req, res) => {

        let data_return = {
            "meta": {
                "count": 10,
                "total": 100
            },
            "links": {
                "first": "https://kong.command-api.kw.com/api/v1/checklists?page[limit]=10&page[offset]=0",
                "last": "https://kong.command-api.kw.com/api/v1/checklists?page[limit]=10&page[offset]=10",
                "next": "https://kong.command-api.kw.com/api/v1/checklists?page[limit]=10&page[offset]=10",
                "prev": "null"
            },
            "data": [{
                "type": "checklists",
                "id": "1",
                "attributes": {
                    "object_domain": "contact",
                    "object_id": "1",
                    "description": "Need to verify this guy house.",
                    "is_completed": false,
                    "due": null,
                    "task_id": 1,
                    "urgency": null,
                    "completed_at": null,
                    "last_update_by": null,
                    "update_at": null,
                    "created_at": "2018-01-25T07:50:14+00:00"
                },
                "links": {
                    "self": "https://kong.command-api.kw.com/api/v1/checklists/1/"
                }
            }]
        }
        
        req.send(data_return);

    };

    return ChecklistItem;

}