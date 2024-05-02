import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * ISpace interface
 */
export interface ISpace {
    _id: string,
    user: Schema.Types.ObjectId,
    name:string,
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
                user: { type: Schema.Types.ObjectId, ref: 'Users' },
                name: {
                    type: String,
                    required: [true, "name is required"],
                    trim: true,
                },
            },
            { timestamps: true }
        );


        return schema
    }

}

const Space = model<ISpace>("spaces", SpaceSchema.schema);


// Export Mongoose model
export default Space;