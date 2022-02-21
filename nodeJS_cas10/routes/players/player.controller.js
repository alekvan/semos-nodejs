const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const Player = require("../../models/player.model");
const Club = require("../../models/club.model");
const Agent = require("../../models/agent.model");
const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;
const getAll = async (req, res) => {
  const players = await Player.find()
    .populate("club", "name")
    .populate("agent", "name");

  res.render("players/index", { players });
};

const addPlayer = async (req, res) => {
  const player = await Player.create(req.body);

  if (req.body.agent) {
    await Agent.findByIdAndUpdate(req.body.agent, {
      $push: { players: player },
    });
  }
  if (req.body.club) {
    await Club.findByIdAndUpdate(req.body.club, {
      $push: { players: player },
    });
  }
  console.log(req.body.club);
  console.log(player._id);
  res.redirect("players");
};

const getAddPlayer = async (req, res) => {
  const clubs = await Club.find();
  const agents = await Agent.find();
  res.render("players/create", { clubs, agents });
};

const deletePlayerById = async (req, res) => {
  const player = await Player.findById(req.params.id);
  await Club.updateOne(await Club.findById(player.club), {
    $pull: { players: player._id },
  });
  await Agent.updateOne(await Agent.findById(player.agent), {
    $pull: { players: player._id },
  });
  await Player.findByIdAndDelete(req.params.id);

  res.send({});
};

const getPatchPlayerById = async (req, res) => {
  const clubs = await Club.find();
  const agents = await Agent.find();
  const player = await Player.findById(req.params.id)
    .populate("club", "name")
    .populate("agent", "name");

  res.render("players/edit", { player, clubs, agents });
};

const patchPlayerById = async (req, res) => {
  const player = await Player.findById(req.params.id);
  const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body);
  if (req.body.club == "") {
    req.body.club = null;
  }

  if (req.body.club) {
    let listOfClubs = await Club.find({ players: player });
    if (listOfClubs.length == 0) {
      await Club.findByIdAndUpdate(req.body.club, {
        $push: { players: player },
      });
    } else {
      await Club.updateOne(await Club.findById(player.club), {
        $pull: { players: player._id },
      });
      await Club.findByIdAndUpdate(req.body.club, {
        $push: { players: updatedPlayer },
      });
    }
  }

  if (req.body.agent == "") {
    req.body.agent = null;
  }

  if (req.body.agent) {
    let listOfAgents = await Agent.find({ players: player });
    if (listOfAgents.length == 0) {
      await Agent.findByIdAndUpdate(req.body.agent, {
        $push: { players: player },
      });
    } else {
      await Agent.updateOne(await Agent.findById(player.agent), {
        $pull: { players: player._id },
      });
      await Agent.findByIdAndUpdate(req.body.agent, {
        $push: { players: updatedPlayer },
      });
    }
  }
  res.redirect("/players");
};

const getPdfView = async (req, res) => {
  const player = await Player.findById(req.params.id)
    .populate("club", "name")
    .populate("agent", "name");

  res.render("players/generatePdfView", { player });
};

const getDownloadPdf = async (req, res) => {
  const filePath = path.join("views", "players", "printablePdf.ejs");
  fs.readFileSync(filePath, "utf-8");
  const data = await Player.findById(req.params.id)
    .populate("club", "name")
    .populate("agent", "name");
  const html = await ejs.renderFile(filePath, { player: data });

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "public/docs/myPdf.pdf",
      format: "A4",
      printBackground: true,
    });

    const pdfPath = path.join("public", "docs", "myPdf.pdf");

    res.download(pdfPath, `${req.params.id}.pdf`);
    console.log("done");
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

const generatePdf = async (req, res) => {
  const filePath = path.join("views", "players", "printablePdf.ejs");
  fs.readFileSync(filePath, "utf-8");
  const data = await Player.findById(req.params.id)
    .populate("club", "name")
    .populate("agent", "name");
  const html = await ejs.renderFile(filePath, { player: data });

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "public/docs/myPdf.pdf",
      format: "A4",
      printBackground: true,
    });

    const pdfPath = path.join("public", "docs", "myPdf.pdf");

    const readStream = fs.createReadStream(pdfPath);

    console.log("done");
    res.writeHead(200, "Content-Type: application/pdf");

    await browser.close();
    // process.
    readStream.pipe(res);
  } catch (error) {
    console.log(error);
  }

  // const stream = await fs.readStream("./");
  // var filename = "myPdf.pdf";
  // // Be careful of special characters

  // filename = encodeURIComponent(filename);
  // // Ideally this should strip them

  // res.setHeader("Content-disposition", 'inline; filename="' + filename + '"');
  // res.setHeader("Content-type", "application/pdf");

  // stream.pipe(res);
};
module.exports = {
  getAll,
  addPlayer,
  deletePlayerById,
  patchPlayerById,
  getPdfView,
  generatePdf,
  getDownloadPdf,
  // getPlayer,
  getAddPlayer,
  getPatchPlayerById,
};
