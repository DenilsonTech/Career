'use server';

import { handleError } from "@/utils/cn";
import { connectToDataBase } from "../db";
import User from "../models/user.model";
import CV from "../models/cv.model";
import { revalidatePath } from "next/cache";
import { UpdateUserParams } from "@/types";

export async function createUser(user: any) {
    try {
        await connectToDataBase();

        const newUser = await User.create(user)

        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error)
    }
}

export async function getUserById(userId: string) {
    try {
      await connectToDataBase()
  
      const user = await User.findById(userId)
  
      if (!user) throw new Error('Utilizador não encontrado')
      return JSON.parse(JSON.stringify(user))
    } catch (error) {
      handleError(error)
    }
  }
  
  export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
      await connectToDataBase()
  
      const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })
  
      if (!updatedUser) throw new Error('Falha ao tualizar Utilizador')
      return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
      handleError(error)
    }
  }
  
  export async function deleteUser(clerkId: string) {
    try {
      await connectToDataBase()
  
      // Find user to delete
      const userToDelete = await User.findOne({ clerkId })
  
      if (!userToDelete) {
        throw new Error('Utilizador não encontrado')
      }
  
      // Unlink relationships
      await Promise.all([
        // Atualize a coleção 'CV's' para remover referências ao usuário
        CV.updateMany(
          { _id: { $in: userToDelete.cv } },
          { $pull: { owner: userToDelete._id } }
        ),
  
        // Update the 'orders' collection to remove references to the user
        // Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
      ])
  
      // Delete user
      const deletedUser = await User.findByIdAndDelete(userToDelete._id)
      revalidatePath('/')
  
      return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
      handleError(error)
    }
  }