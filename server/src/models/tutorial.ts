import { Schema, model } from 'mongoose';

type TutorialSchemaT = {
  slug: string;
  content: string;
}

const tutorialSchema = new Schema({
  slug: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  }
}, {
  timestamps: true
});

const tutorialModel = model<TutorialSchemaT>('tutorial', tutorialSchema);

export default tutorialModel;
