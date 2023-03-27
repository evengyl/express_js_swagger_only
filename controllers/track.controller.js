const trackController = {

    /**
     * GET /api/tracks
     * @tags Tracks
     * @summary Return All Tracks
     * @return {array<Track>} 200 - All Tracks Ok
     */
    getAll : async (req, res, next) => {
        res.json({datas : "allTrack"})
    },

    /**
     * GET /api/tracks/{id}
     * @param {number} id.path.required - enum:1 - id of track
     * @tags Tracks
     * @summary Return One track by id
     * @return {Track} 200 - One Track Ok
     * @return 404 - Track not found
     */
    getOneById : async (req, res, next) => {
        res.json({datas : "oneTrack"})
    },

    /**
     * POST /api/tracks/{artistId}
     * @tags Tracks
     * @param {number} artistId.path.required - enum:1 - Artist Id for associate one Track
     * @param {CreateTrack} request.body.required - One Track Data for create
     * @example request - création d'un Track
     * {
     *   "name": "Bury The Light",
     *   "duration": 1256
     * }
     */
    create : async (req, res, next) => {
        res.json({datas : "createdTrack"})
    }
}


module.exports = trackController

