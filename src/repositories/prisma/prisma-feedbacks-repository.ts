import { Prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await Prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
