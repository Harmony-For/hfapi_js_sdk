
import User from "../../lib/aggregates/user.js";

import Application from "../../lib/aggregates/application.js";

import RecommendMail from "../../lib/aggregates/recommend_mail.js";

import MailTemplate from "../../lib/aggregates/mail_template.js";

import Company from "../../lib/aggregates/company.js";

import Recruitment from "../../lib/aggregates/recruitment.js";

const Aggregates = {}

Aggregates.User = User

Aggregates.Application = Application

Aggregates.RecommendMail = RecommendMail

Aggregates.MailTemplate = MailTemplate

Aggregates.Company = Company

Aggregates.Recruitment = Recruitment

export default Aggregates