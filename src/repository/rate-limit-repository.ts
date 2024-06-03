import {rateLimitCollection, usersCollection} from '../db/runDb';

export type RateLimitType = {
  date: Date
  ip: string
  url: string
}

export const rateLimitRepository = {
  async getAttemptsCountFromDate(ip: string, url: string, date: Date): Promise<number> {
    return rateLimitCollection.countDocuments({ip, date: { $gte: date } });
  },

  async setAttempt(ip: string, url: string, date: Date) {
    await rateLimitCollection.insertOne({ ip, url, date });
  }
};
