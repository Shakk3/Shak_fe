export type ImgRandomResponse = {
  image: Image;
  emotions: Emotions;
  comments: Comments[];
}

export type Image = {
  img_id: number;
  img_data: string;
  img_name: string;
  img_view: number;
  img_date: string;
  img_reference: string;
}

export type Emotions = {
  emotion_id: number;
  img_id: number;
  emotion_angry: number;
  emotion_new: number;
  emotion_love: number;
  emotion_crazy: number;
}

export type Comments = {
  img_comment_id: number;
  img_id: number;
  comment_name: string;
  comment_content: string;
}