import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * IWebsite interface
 */
export interface IWebsite {
    _id: string,
    space: Schema.Types.ObjectId,
    name:string,
    title:string,
    description: string,
}

/**
 * Website schema
 */
class WebsiteSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IWebsite> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                space: { type: Schema.Types.ObjectId, ref: 'Spaces' },
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
            },
            { timestamps: true }
        );


        return schema
    }

}

const Website = model<IWebsite>("websites", WebsiteSchema.schema);


// Export Mongoose model
export default Website;