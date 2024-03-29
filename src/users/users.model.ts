import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

type UserRole = {
  client: 0;
  business: 1;
  admin: 2;
};

@Schema({ timestamps: true })
export class User {
  @ApiProperty()
  @Prop({ unique: true, required: true })
  email: string;

  @ApiProperty()
  @Prop({ required: true })
  passwordHash: string;

  @ApiProperty()
  @Prop({ unique: true })
  username: string;

  @ApiProperty()
  @Prop()
  fullName: string;

  @ApiProperty()
  @Prop({ required: true })
  phoneNumber: string;

  @ApiProperty()
  @Prop({ required: true, type: Number })
  role: UserRole;

  @ApiProperty()
  @Prop()
  favoriteService?: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
