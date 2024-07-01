"use server"


import { revalidatePath } from 'next/cache';
import { signOut } from '../../auth';


import { auth } from "../../auth";
import { db } from "../../db";

interface ProductData {
  description: string;
  name: string;
  price: number;
  quantity: number;
  brend: string;
  category: string;
  sellprice?: number;
  discountprice?: number;
  discount?: number;
  imageUrl: string;
  userId: string;
}

export const addProduct = async (formData: ProductData) => {
  if (!formData) {
    console.log("Data not found");
    return;
  }

  try {
    const newData = {
      description: formData.description,
      name: formData.name,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      brend: formData.brend,
      category: formData.category,
      sellprice: Number(formData.sellprice),
      discountprice: Number(formData.discountprice),
      discount: Number(formData.discount),
      imageUrl: formData.imageUrl,
      userId: formData.userId,
    };
    const myProduct = await db.product.create({
      data: {
        description: newData.description,
        name: newData.name,
        price: newData.price,
        quantity: newData.quantity,
        brend: newData.brend,
        category: newData.category,
        sellprice: newData.sellprice || undefined,
        discountprice: newData.discountprice || undefined,
        discount: newData.discount || undefined,
        imageUrl: [newData.imageUrl],
        userId: newData.userId,
      },
    });

    console.log(myProduct);
  } catch (error) {
    console.log(error);
  }
};
/* get the user action */
export const getUsers = async () => {
  try {
    const users = await db.user.findMany();
   
    return users;
  } catch (error) {
    console.log(error);
  }
};

/* delete user */

export  const daleteUser = async(id:string) =>{
  try {
    console.log(id);
    // await db.user.delete({
    //   where: {
    //     id: id,
    //   }
   // })
  } catch (error) {
    console.log(error);
  }
}

/* get the all product action */

export const getAllProducts = async () => {
  try {
    const products = await db.product.findMany();

    if (products) {
      console.log(products);
    }

    return products;
  } catch (error) {
    console.log("Error fetching products:", error);

    return { error: "Failed to fetch products" };
  }
};

/* product delete */
export const deleteProduct = async (id: string) => {
  try {
    console.log(id);
    await db.product.delete({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }
};

/* get product by id */
export const getProductById = async (id: string) => {
  try {
    const product = await db.product.findUnique({ where: { id: id } });
    return product;
  } catch (error) {
    console.log(error);
  }
};
/* product update */
export const updateProduct = async (id: string, updateData: ProductData) => {
  try {
    console.log(id);
    console.log(updateData);

    const someFixData = {
      price: Number(updateData.price),
      quantity: Number(updateData.quantity),
      sellprice: Number(updateData.sellprice),
      discountprice: Number(updateData.discountprice),
      discount: Number(updateData.discount),
    };

    const updatedProduct = await db.product.update({
      where: { id: id },
      data: {
        description: updateData.description,
        name: updateData.name,
        price: someFixData.price,
        quantity: someFixData.quantity,
        brend: updateData.brend,
        category: updateData.category,
        sellprice: someFixData.sellprice || undefined,
        discountprice: someFixData.discountprice || undefined,
        discount: someFixData.discount || undefined,
        imageUrl: [updateData.imageUrl],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/* add product to cart */

export const addProductToCart = async (
  userId: string,
  productId: string,
  quantity: number
) => {
  try {
    const existingCart = await db.cart.findFirst({
      where: {
        userId: userId,
      },
    });

    if (existingCart) {
      // Check if the product is already in the cart
      const productIndex = existingCart.productId.findIndex(
        (id) => id === productId
      );

      if (productIndex >= 0) {
        // Update quantity if product exists in cart
        const updatedQuantities = [...existingCart.quantity];
        updatedQuantities[productIndex] = quantity;

        await db.cart.update({
          where: { id: existingCart.id }, // Use the unique cart id
          data: {
            quantity: updatedQuantities,
          },
        });
      } else {
        // Add new product to the cart
        const updatedProductIds = [...existingCart.productId, productId];
        const updatedQuantities = [...existingCart.quantity, quantity];

        await db.cart.update({
          where: { id: existingCart.id }, // Use the unique cart id
          data: {
            productId: updatedProductIds,
            quantity: updatedQuantities,
          },
        });
      }
    } else {
      // Create a new cart for the user
      await db.cart.create({
        data: {
          userId: userId,
          productId: [productId],
          quantity: [quantity],
        },
      });
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};



/*   signOut */

export const logout = async () => {
  await signOut({ redirectTo: "/pages" });
  revalidatePath("/pages");
 
};

/* get user by id */

export const getUserById = async (id:string) =>{
  try {

    const singleUser = await db.user.findFirst({
      where: { id },
    })
    return singleUser
  } catch (error) {
    console.log(error);
    
  }
}