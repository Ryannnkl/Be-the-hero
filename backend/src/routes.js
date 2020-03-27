const express = require("express");

const {
  SegmentBodyJoi,
  SegmentHeaderAlthorization,
  SegmentQueryPage,
  SegmentParamsId
} = require("./validation/validation");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", SegmentBodyJoi, OngController.store);

routes.get("/profile", SegmentHeaderAlthorization, ProfileController.index);
routes.post("/session", SessionController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", SegmentQueryPage, IncidentController.create);
routes.delete("/incidents/:id", SegmentParamsId, IncidentController.delete);

module.exports = routes;
