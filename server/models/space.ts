import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * ISpace interface
 */
export interface ISpace {
    _id: string,
    userId: string,
    image: string,
    name:string,
    type:string,
    projects: Schema.Types.ObjectId,
    tags: Schema.Types.ObjectId,
}

/**
 * Space schema
 */
class SpaceSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<ISpace> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                userId: { type: String, trim: true, required: [true, "userId is required"] },
                image: {
                    type: String,
                    required: false,
                    max: 255,
                },
                name: {
                    type: String,
                    required: [true, "name is required"],
                    trim: true,
                },
                type: {
                    type: String,
                    required: [true, "name is required"],
                    trim: true,
                    enum: ['DEFAULT', 'ADDITIONAL'],
                },
                projects: { type: Schema.Types.ObjectId, ref: 'Projects' },
                tags: { type: Schema.Types.ObjectId, ref: 'Tags' },
            },
            { timestamps: true }
        );


        return schema
    }

}

const Space = model<ISpace>("spaces", SpaceSchema.schema);


// Export Mongoose model
export default Space;