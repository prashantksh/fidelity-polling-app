export class PollItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  isPremium: boolean;
  group: string;
  voteCount = 0;
}
