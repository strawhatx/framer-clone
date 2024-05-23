import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * ITag interface
 */
export interface ITag {
    _id: string,
    space: Schema.Types.ObjectId,
    name:string,
    projects: Schema.Types.ObjectId,
}

/**
 * Tag schema
 */
class TagSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<ITag> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                space: { type: Schema.Types.ObjectId, ref: 'Spaces' },
                name: {
                    type: String,
                    required: [true, "name is required"],
                    trim: true,
                },
                projects: { type: Schema.Types.ObjectId, ref: 'Projects' },
            },
            { timestamps: true }
        );

        return schema
    }

}

const Tag = model<ITag>("tags", TagSchema.schema);


// Export Mongoose model
export default Tag;