module.exports = (express) => {

    const Checklist = [];

    Checklist.listAllChecklistTemplate = (req, res) => {

        let data_return = {
            "meta": {
                "count": 10,
                "total": 100
            },
            "links": {
                "first": "https://kong.command-api.kw.com/api/v1/checklists/templates?page[limit]=10&page[offset]=0",
                "last": "https://kong.command-api.kw.com/api/v1/checklists/templates?page[limit]=10&page[offset]=10",
                "next": "https://kong.command-api.kw.com/api/v1/checklists/templates?page[limit]=10&page[offset]=10",
                "prev": "null"
            },
            "data": [{
                "name": "foo template",
                "checklist": {
                    "description": "my checklist",
                    "due_interval": 3,
                    "due_unit": "hour"
                },
                "items": [{
                        "description": "my foo item",
                        "urgency": 2,
                        "due_interval": 40,
                        "due_unit": "minute"
                    },
                    {
                        "description": "my bar item",
                        "urgency": 3,
                        "due_interval": 30,
                        "due_unit": "minute"
                    }
                ]
            }]
        };

        res.send(data_return);
    };

    Checklist.createChecklistTemplate = (req, res) => {

        let data_return = {
            "data": {
                "id": 1,
                "attributes": {
                    "name": "foo template",
                    "checklist": {
                        "description": "my checklist",
                        "due_interval": 3,
                        "due_unit": "hour"
                    },
                    "items": [{
                            "description": "my foo item",
                            "urgency": 2,
                            "due_interval": 40,
                            "due_unit": "minute"
                        },
                        {
                            "description": "my bar item",
                            "urgency": 3,
                            "due_interval": 30,
                            "due_unit": "minute"
                        }
                    ]
                }
            }
        }

        res.send(data_return);

    };

    Checklist.getChecklistTemplate = (req, res) => {

        let data_return = {
            "data": {
                "type": "templates",
                "id": "2",
                "attributes": {
                    "name": "foo template",
                    "items": [{
                            "urgency": 2,
                            "due_unit": "minute",
                            "description": "my foo item",
                            "due_interval": 40
                        },
                        {
                            "urgency": 3,
                            "due_unit": "minute",
                            "description": "my bar item",
                            "due_interval": 30
                        }
                    ],
                    "checklist": {
                        "due_unit": "hour",
                        "description": "my checklist",
                        "due_interval": 3
                    }
                },
                "links": {
                    "self": "http://localhost:8000/api/v1/templates/2"
                }
            }
        }

        res.send(data_return);

    };

    Checklist.updateChecklistTemplate = (req, res) => {

        let data_return = {
            "data": {
                "id": 1,
                "attributes": {
                    "name": "foo template",
                    "checklist": {
                        "description": "my checklist",
                        "due_interval": 3,
                        "due_unit": "hour"
                    },
                    "items": [{
                            "description": "my foo item",
                            "urgency": 2,
                            "due_interval": 40,
                            "due_unit": "minute"
                        },
                        {
                            "description": "my bar item",
                            "urgency": 3,
                            "due_interval": 30,
                            "due_unit": "minute"
                        }
                    ]
                }
            }
        }

        res.send(data_return);

    };

    Checklist.deleteChecklistTemplate = (req, res) => {

        let data_return = [];
        res.send(data_return);

    };

    Checklist.assignTemplate = (req, res) => {

        let data_return = {
            "data": [{
                    "attributes": {
                        "object_id": 1,
                        "object_domain": "deals"
                    }
                },
                {
                    "attributes": {
                        "object_id": 2,
                        "object_domain": "deals"
                    }
                },
                {
                    "attributes": {
                        "object_id": 3,
                        "object_domain": "deals"
                    }
                }
            ]
        }
        
        res.send(data_return);

    };

    return Checklist;

}