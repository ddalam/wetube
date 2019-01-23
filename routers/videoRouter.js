import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send('Videos'));
videoRouter.get(routes.upload, (req, res) => res.send('Video Upload'));
videoRouter.get(routes.videoDetail, (req, res) => res.send('Video Detail'));
videoRouter.get(routes.editVdeo, (req, res) => res.send('Edit video'));
videoRouter.get(routes.deleteVideo, (req, res) => res.send('Delete video'));


export default videoRouter;