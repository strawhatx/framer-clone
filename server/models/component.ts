import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * IComponents interface
 */
export interface IComponent {
    _id: string,
    page: Schema.Types.ObjectId,
    type:string,
    content:string,
}

/**
 * Component schema
 */
class ComponentSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IComponent> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                page: { type: Schema.Types.ObjectId, ref: 'Pages' },
                type: {
                    type: String,
                    required: true,
                    trim: true,
                    enum: ['TYPE-1', 'TYPE-2'],
                },
                content: {
                    type: String,
                    required: [true, "content is required"],
                    trim: true,
                },
            },
            { timestamps: true }
        );

        return schema
    }

}

const Component = model<IComponent>("Components", ComponentSchema.schema);

// Export Mongoose model
export default Component;