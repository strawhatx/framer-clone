import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * IProject interface
 */
export interface IProject {
    _id: string,
    space: Schema.Types.ObjectId,
    tag: Schema.Types.ObjectId,
    name: string,
    title: string,
    description: string,
    pages: Schema.Types.ObjectId,
    collections: Schema.Types.ObjectId,
}

/**
 * Project schema
 */
class ProjectSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IProject> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                space: { type: Schema.Types.ObjectId, ref: 'Spaces' },
                tag: { type: Schema.Types.ObjectId, ref: 'Tags' },
                name: {
                    type: String,
                    required: [true, "name is required"],
                    trim: true,
                },
                description: {
                    type: String,
                    required: [true, "description is required"],
                    trim: true,
                },
                pages: { type: Schema.Types.ObjectId, ref: 'Pages' },
                collections: { type: Schema.Types.ObjectId, ref: 'Collections' },
            },
            { timestamps: true }
        );


        return schema
    }

}

const Project = model<IProject>("projects", ProjectSchema.schema);


// Export Mongoose model
export default Project;