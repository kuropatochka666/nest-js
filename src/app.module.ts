import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import * as path from 'path'
import {ServeStaticModule} from "@nestjs/serve-static";
import { FileModule } from "./file/file.module";
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://admin:5pte52buq3HZDTL@cluster0.6v0uu.mongodb.net/music-platform?retryWrites=true&w=majority'),
    TrackModule,
    FileModule
  ]
})
export class AppModule {
}
