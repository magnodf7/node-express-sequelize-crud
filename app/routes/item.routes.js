const items = app => {
    const items = require("../controllers/item.controllers");

    var router = require("express").Router();

    router.post("/", items.create);

    router.get("/", items.findAll);

    router.get("/flammbles", items.findAllflammabes);

    router.get("/", items.findOne);

    router.put("/:id", items.update);

    router.delete("/:id", items.delete);

    router.delete("/", items.deleteALL);

    app.use('/api/items', router);
}