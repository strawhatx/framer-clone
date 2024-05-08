import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * IPages interface
 */
export interface IPage {
    _id: string,
    project: Schema.Types.ObjectId,
    name:string,
}

/**
 * Page schema
 */
class PageSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IPage> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                project: { type: Schema.Types.ObjectId, ref: 'Projects' },
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

const Page = model<IPage>("pages", PageSchema.schema);


// Export Mongoose model
export default Page;