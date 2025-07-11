import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function start() {
  try {
    const PORT = process.env.PORT ?? 3030;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');

    // app.enableCors({
    //   origin: (origin.callback) => {
    //     const allowedOrigins = [
    //       "https://localhost:8000",
    //       "https://localhost:3000",
    //       "https://api.myticket.uz",
    //       "https://myticket.vercel.app",
    //     ];
    //     if(!origin || allowedOrigins.includes(origin)){
    //       callback(null, true);
    //     }else {
    //       callback(new BadRequestException("Not allowed by cors"));
    //     }
    //   }
    //   methods: "GET< HEAD, PUT, PUTCH, POST, DELETE",
    //   credentials: true
    // });

    const config = new DocumentBuilder()
      .setTitle('inBook Project')
      .setDescription('NestJS RESTful API')
      .setVersion('1.0')
      .addTag(
        'NestJS, AccessToken,RefreshToken, Cookie, SMS, BOT, Validation, Auth'
      )
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    await app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
