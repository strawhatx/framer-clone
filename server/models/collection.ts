import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * ICollections interface
 */
export interface ICollection {
    _id: string,
    project: Schema.Types.ObjectId,
    name: string,
    fields: Array<any>,
    rows: Array<any>,
}

/**
 * Collection schema
 */
class CollectionSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<ICollection> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                project: { type: Schema.Types.ObjectId, ref: 'Projects' },
                name: { type: String, required: true },
                fields: [
                    {
                        name: { type: String, required: true },
                        type: { type: String, required: true }
                    }
                ],
                rows: [
                    {
                        data: [{ type: String }]
                    }
                ],
            },
            { timestamps: true }
        );


        return schema
    }

}

const Collection = model<ICollection>("collections", CollectionSchema.schema);


// Export Mongoose model
export default Collection;