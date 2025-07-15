import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export class CreateDistrictDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    region_id: mongoose.Schema.Types.ObjectId;
}
