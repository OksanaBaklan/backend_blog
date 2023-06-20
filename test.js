/** @format */

import sendGrid from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.SEND_GRID_API_KEY_new;

sendGrid.setApiKey(API_KEY);

const message = {
  to: "oksanamolesha@ukr.net",
  from: "oksana_sale@outlook.com",
  subject: "test email using sendGrid",
  text: "plain text message",
  html: "<h2>html text comming from sendgrid</h2>",
};

sendGrid
  .send(message)
  .then((res) => console.log(res))
  .catch((err) => err.message);