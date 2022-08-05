const express = require("express")
const server = express()

server.use(express.static('public'))

server.use(express.urlencoded({ extended:true }))

const nunjucks = require ("nunjucks")
nunjucks.configure("./", {express: server,
  noCache: true,})

  const donors = [
    {
      name: "Raphael Melo",
      blood: "AB+",
    },
    {
      name: "Cleiton Rasta",
      blood: "O+",
    },
    {
      name: "Lazinho Nunes",
      blood: "O-",
    },
    {
      name: "Marina Xica",
      blood: "B-",
    },
  ]

server.get("/", function(req, res){
  return res.render("index.html", { donors })
})

server.post("/", function(req, res){
  const name = req.body.name
  const email = req.body.email
  const blood = req.body.blood

  donors.push({
    name: name, 
    blood: blood,
  })

  return res.redirect("/")

})

server.listen(3000, function(){
  console.log("Iniciei o servidor")
}
)