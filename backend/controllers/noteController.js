import sgMail from "@sendgrid/mail";
import Note from "../models/noteModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import template from "../email/template.js";

// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

//@description     Fetch single Note
//@route           GET /api/notes/:id
//@access          Public
const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

//@description     Create single Note
//@route           GET /api/notes/create
//@access          Private
const CreateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const note = new Note({ user: req.user._id, title, content, category });

    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});

//@description     Delete single Note
//@route           GET /api/notes/:id
//@access          Private
const DeleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    await note.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
const UpdateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

//@description     Create single Note for shared user
//@route           GET /api/notes/share/:id
//@access          Private
const ShareCreateNote = asyncHandler(async (req, res) => {
  const { email, author } = req.body;
  const userToShare = await User.findOne({ email: email });

  const authorUser = await User.findById(author);
  const tmpNote = await Note.findById(req.params.id);
  const { title, content, category } = tmpNote;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Something went wrong");
    return;
  } else {
    const note = new Note({ user: userToShare._id, title, content, category });

    const createdNote = await note.save();
    //Email send
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email, // Change to your recipient
      from: "snayeemy@gmail.com", // Change to your verified sender
      subject: `${authorUser.name} has shared a note with you`,
      text: `Note: ${title}`,
      html: template(title, content, authorUser.name),
    };
    sgMail
      .send(msg)
      .then(() => {
        res.status(201).json(createdNote);
      })
      .catch((error) => {
        res.status(400);
        throw new Error("Something went wrong");
      });
  }
});

export {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
  ShareCreateNote,
};
