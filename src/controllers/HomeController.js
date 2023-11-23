
class HomeController {
    index(req, res) {
      res.status(401).json({
        TudoCerto: true,
      })
    }
}

export default new HomeController();
