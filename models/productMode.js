const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  productName: {
    type: String,
    minlength: [3, 'Name should be at least 3 characters long'],
    required: [true, 'Product name is required']
  },
  productPrice: {
    type: Number,
    min: [1, 'Price should be at least 1'], 
    required: [true, 'Product price is required']
  },
  productImage: {
    type: [String], 
    validate: {
      validator: function(images) {
        return Array.isArray(images) && images.length > 0;
      },
      message: 'At least one product image is required'
    }
  },
  offers: {
    type: Number,
    min: [0, 'Offers should be a non-negative number'] 
  },
  stockQuantity: {
    type: Number,
    min: [0, 'Stock quantity cannot be negative'],
    required: [true, 'Stock quantity is required'],
  }
});

productSchema.method.isAvilable = () =>{
  return this.stockQuantity > 0 ;
}

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
