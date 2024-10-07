import { z } from "zod";
import { UpdateUserSchema, UserLoginSchema, UserSchema } from "../schema/user.schema";
import { PostChurchSchema } from "../schema/church.schema";

export type User = {
  avatar: null | string,
  createAt: string,
  id: string,
  username: string,
  email: string
}

export type userDataType = {
  id: number,
  name: string,
  img: string
}

export type user = z.infer<typeof UserSchema>

export type UpdateUser = z.infer<typeof UpdateUserSchema>

export type userLogin = z.infer<typeof UserLoginSchema>

export type postChurch = z.infer<typeof PostChurchSchema >

export type DummyData = {
  id: number;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};

export type DummySingleData = {
  id: number;
  title: string;
  price: number;
  images: string[];
  bedRooms: number;
  bathroom: number;
  size: number;
  latitude: number;
  longitude: number;
  city: string;
  address: string;
  school: string;
  bus: string;
  restaurant: string;
  description: string;
};
